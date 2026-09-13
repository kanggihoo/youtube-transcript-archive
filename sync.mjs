#!/usr/bin/env node
// 재생목록에서 아직 안 받은 영상만 extract.mjs로 돌립니다.
//
// 사용법: node --env-file=.env sync.mjs [playlist-id-or-url] [--dry-run] [--clean]
//
// 공식 API는 목록만 받아옵니다. 자막은 받을 수 없습니다.
// captions.download는 영상 편집 권한이 있는 사람만 호출할 수 있어서
// 남의 영상에는 403이 떨어집니다. 그래서 자막은 그대로 defuddle이 맡습니다.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";

const API = "https://www.googleapis.com/youtube/v3/playlistItems";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const PAGE = 50; // maxResults 상한

// 재생목록 ID만 뽑습니다. 전체 URL을 붙여넣어도 되게.
// zsh 이스케이프(`playlist\?list\=`)는 extract.mjs와 같은 이유로 걷어냅니다.
const playlistId = (raw) => {
  const s = raw
    .trim()
    .replace(/^["'<]+|["'>]+$/g, "")
    .replace(/\\(?=[?=&])/g, "");
  const m = s.match(/[?&]list=([\w-]+)/);
  return m ? m[1] : s;
};

// 폴더명 <게시일>-<video-id>-<제목슬러그>에서 ID를 뽑습니다.
// split("-")로는 안 됩니다. usiK-qjjCKs나 MZfhhl6ej-k처럼 ID 자체에 하이픈이 섞입니다.
// ID는 항상 11자라 날짜 뒤 11자를 그대로 집으면 됩니다. 접미사 x도 통과시킵니다.
const dirVideoId = (name) => name.match(/^\d{4}-\d{2}-\d{2}x?-([\w-]{11})(?=-|$)/)?.[1] ?? null;

const existingIds = () =>
  new Set(
    readdirSync("transcripts", { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => dirVideoId(d.name))
      .filter(Boolean)
  );

// --clean은 재생목록에서 항목을 지웁니다. 플래그를 재생목록 ID로 착각하면
// 엉뚱한 목록을 건드리게 되니 분리해서 읽습니다.
const parseArgs = (argv) => ({
  dryRun: argv.includes("--dry-run"),
  clean: argv.includes("--clean"),
  playlist: argv.find((a) => !a.startsWith("--")),
});

// 할당량 초과는 429가 아니라 403 quotaExceeded로 옵니다. 그대로 보여줘야 원인을 압니다.
const apiError = async (res) => {
  const body = await res.json().catch(() => null);
  const e = body?.error;
  const reason = e?.errors?.[0]?.reason;
  return new Error(`API ${res.status}${reason ? ` (${reason})` : ""}: ${e?.message ?? "본문 없음"}`);
};

// refresh token은 안 만료됩니다(게시 상태가 프로덕션인 경우). access token은 한 시간이라
// 실행할 때마다 새로 받습니다. 저장해두면 만료 처리를 직접 해야 합니다.
const accessToken = async () => {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    body: new URLSearchParams({
      client_id: process.env.YOUTUBE_CLIENT_ID,
      client_secret: process.env.YOUTUBE_CLIENT_SECRET,
      refresh_token: process.env.YOUTUBE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const json = await res.json();
  if (!res.ok) {
    // invalid_grant면 refresh token이 죽은 것입니다. 접근을 취소했거나 6개월 방치했거나
    // 게시 상태가 Testing으로 돌아가 7일이 지난 경우입니다. 재발급 말고는 방법이 없습니다.
    const hint = json.error === "invalid_grant" ? "\nnode --env-file=.env auth.mjs 로 다시 발급받으세요." : "";
    throw new Error(`토큰 갱신 실패 ${res.status}: ${json.error_description ?? json.error}${hint}`);
  }
  return json.access_token;
};

const fetchItems = async (auth, id) => {
  const items = [];
  let pageToken;
  do {
    const url = new URL(API);
    url.search = new URLSearchParams({
      part: "contentDetails,status",
      playlistId: id,
      maxResults: String(PAGE),
      ...(auth.key && { key: auth.key }),
      ...(pageToken && { pageToken }),
    });
    const res = await fetch(url, { headers: auth.headers });
    if (!res.ok) throw await apiError(res);
    const json = await res.json();
    items.push(...json.items);
    pageToken = json.nextPageToken;
  } while (pageToken);
  return items;
};

// videoId가 아니라 재생목록 항목의 id로 지웁니다. 같은 영상이 여러 목록에 있어도
// 이 목록의 항목만 사라집니다.
const deleteItem = async (auth, itemId) => {
  const url = new URL(API);
  url.search = new URLSearchParams({ id: itemId });
  const res = await fetch(url, { method: "DELETE", headers: auth.headers });
  if (!res.ok) throw await apiError(res);
};

// 지우기 전에 결과를 확인합니다. extract.mjs가 0으로 끝나도
// 파일이 비었거나 자막 절이 없으면 지우면 안 됩니다.
const extracted = (out) =>
  Boolean(out) && existsSync(out) && readFileSync(out, "utf8").includes("## Transcript");

const main = async () => {
  const { dryRun, clean, playlist } = parseArgs(process.argv.slice(2));
  const raw = playlist ?? process.env.YOUTUBE_PLAYLIST_ID;
  const key = process.env.YOUTUBE_API_KEY;
  const refresh = process.env.YOUTUBE_REFRESH_TOKEN;

  if (!raw || (!key && !refresh)) {
    console.error("사용법: node --env-file=.env sync.mjs [playlist-id-or-url] [--dry-run] [--clean]");
    console.error(".env에 YOUTUBE_API_KEY와 YOUTUBE_PLAYLIST_ID를 채우세요 (.env.example 참고).");
    process.exit(1);
  }
  if (clean && !refresh) {
    console.error("--clean은 OAuth가 필요합니다. API 키로는 항목을 지울 수 없습니다.");
    console.error("node --env-file=.env auth.mjs 로 YOUTUBE_REFRESH_TOKEN을 발급받으세요.");
    process.exit(1);
  }

  // OAuth 토큰이 있으면 읽기도 그걸로 합니다. 비공개 재생목록은 API 키로 안 읽힙니다.
  const auth = refresh
    ? { headers: { authorization: `Bearer ${await accessToken()}` } }
    : { key };

  const id = playlistId(raw);
  const items = await fetchItems(auth, id);
  if (items.length === 0) {
    // 나중에 볼 동영상(WL)과 시청 기록(HL)은 API가 빈 목록을 돌려줍니다. 오류가 아닙니다.
    console.error(`항목이 없습니다: ${id} (비공개 재생목록이거나 WL/HL일 수 있습니다)`);
    process.exit(1);
  }

  // 삭제되거나 비공개로 바뀐 영상도 항목은 남습니다. 자막을 받을 수 없으니 걸러냅니다.
  const visible = items.filter((it) => ["public", "unlisted"].includes(it.status?.privacyStatus));
  const done = existingIds();
  const todo = visible
    .map((it) => ({ itemId: it.id, videoId: it.contentDetails.videoId }))
    .filter((v) => !done.has(v.videoId));

  console.error(
    `재생목록 ${items.length}개, 볼 수 있는 영상 ${visible.length}개, 받을 것 ${todo.length}개` +
      (clean ? " (받은 뒤 목록에서 삭제)" : "")
  );

  if (dryRun) {
    for (const v of todo) console.log(`https://www.youtube.com/watch?v=${v.videoId}`);
    return;
  }

  // 자막 없는 영상 하나가 나머지를 막지 않게 합니다.
  const failed = [];
  for (const [i, { itemId, videoId }] of todo.entries()) {
    console.error(`[${i + 1}/${todo.length}] ${videoId}`);
    let out;
    try {
      // stdout이 저장 경로입니다. inherit하지 않고 받아서 결과를 확인합니다.
      out = execFileSync("node", ["extract.mjs", `https://www.youtube.com/watch?v=${videoId}`], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "inherit"],
      }).trim();
    } catch {
      failed.push(videoId);
      continue;
    }

    if (!extracted(out)) {
      console.error(`  확인 실패, 목록에 남깁니다: ${out || "출력 없음"}`);
      failed.push(videoId);
      continue;
    }
    console.error(`  ${out}`);

    if (clean) {
      await deleteItem(auth, itemId);
      console.error("  목록에서 삭제");
    }
  }

  if (failed.length) {
    console.error(`실패 ${failed.length}개: ${failed.join(", ")}`);
    process.exit(1);
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => {
    console.error(`실패: ${e.message}`);
    process.exit(1);
  });
}

export { playlistId, dirVideoId, parseArgs };
