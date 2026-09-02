#!/usr/bin/env node
// YouTube 주소 -> transcripts/<게시일>-<video-id>-<제목슬러그>/original.md
//
// 사용법: node extract.mjs "<youtube-url>"

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SLUG_MAX = 60;

// 붙여넣기 사고를 걷어냅니다. zsh는 URL의 `?`를 글로브로 보기 때문에
// `watch\?v\=...` 형태가 섞여 들어오기 쉽고, 그대로 두면 defuddle이 빈 페이지를 받습니다.
const cleanUrl = (raw) =>
  raw
    .trim()
    .replace(/^["'‘’“”<]+|["'‘’“”>]+$/g, "")
    .replace(/\\(?=[?=&])/g, "")
    .trim();

const videoId = (url) => {
  const m = url.match(/(?:v=|youtu\.be\/|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  if (!m) throw new Error(`영상 ID를 찾을 수 없습니다: ${url}`);
  return m[1];
};

// 한글은 유지하고, 경로/셸에서 성가신 문자는 하이픈으로 바꿉니다.
// 지우지 않고 바꾸는 이유: "Every/Cora"가 "EveryCora"로 붙는 걸 막기 위해서입니다.
const slugify = (title) =>
  title
    .normalize("NFC")
    .replace(/[/\\:*?"<>|[\]{}()'`,;!—–]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "")
    .slice(0, SLUG_MAX)
    .replace(/-+$/, "");

const frontmatter = (md) => {
  const fm = md.match(/^---\n([\s\S]*?)\n---/);
  return fm ? fm[1] : "";
};

const fmField = (md, key) => {
  const m = frontmatter(md).match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, "m"));
  return m?.[1] || null;
};

const frontmatterTitle = (md) => fmField(md, "title");

// published: 2026-08-22T02:00:29-07:00 -> 2026-08-22
// 앞 10자만 취합니다. 타임존 보정을 하면 날짜가 하루 밀려 YouTube 표시와 어긋납니다.
const publishedDate = (md) => {
  const p = fmField(md, "published");
  const d = p?.match(/^(\d{4}-\d{2}-\d{2})/);
  return d?.[1] || null;
};

const main = (raw) => {
  if (!raw) {
    console.error('사용법: node extract.mjs "<youtube-url>"');
    process.exit(1);
  }

  // ID만 뽑아 주소를 다시 조립합니다. 추적 파라미터(?si=, &t=)도 이 과정에서 사라집니다.
  const id = videoId(cleanUrl(raw));
  const url = `https://www.youtube.com/watch?v=${id}`;

  const defuddleBin = process.platform === "win32" ? "defuddle.cmd" : "defuddle";
  const fetch = () =>
    execFileSync(defuddleBin, ["parse", url, "-m", "-f"], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      shell: process.platform === "win32",
    });

  // published가 비는 일이 실제로 있습니다. 재시도로 채워지는 경우가 있어 한 번만 더 봅니다.
  let md = fetch();
  if (md.includes("## Transcript") && !publishedDate(md)) md = fetch();

  if (!md.includes("## Transcript")) {
    throw new Error(`자막을 찾을 수 없습니다 (자막 없는 영상일 수 있습니다): ${url}`);
  }

  // 날짜가 앞: `ls`만 해도 게시일 순으로 정렬됩니다.
  // defuddle이 published를 못 주는 영상이 실제로 있어서, 그때는 오늘 날짜에 물음표를 답니다.
  // 0000-00-00으로 두면 정작 최신 영상이 그 아래로 밀립니다.
  // 접미사 x는 "게시일이 아니라 받은 날짜"라는 표시입니다. `?`는 zsh 글로브라 쓰지 않습니다.
  const published = publishedDate(md);
  const date = published ?? `${new Date().toISOString().slice(0, 10)}x`;
  const title = frontmatterTitle(md);
  const slug = [date, id, title && slugify(title)].filter(Boolean).join("-");
  const dir = join("transcripts", slug);

  mkdirSync(dir, { recursive: true });
  const out = join(dir, "original.md");
  writeFileSync(out, md);
  if (!published) console.error(`경고: 게시일을 가져오지 못해 오늘 날짜로 대체했습니다 (접미사 x).`);
  console.log(out);
};

import { pathToFileURL } from "node:url";

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    main(process.argv[2]);
  } catch (e) {
    console.error(`실패: ${e.message}`);
    process.exit(1);
  }
}

export { cleanUrl, videoId, slugify, frontmatterTitle, publishedDate };
