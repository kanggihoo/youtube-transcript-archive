#!/usr/bin/env node
// OAuth refresh token을 한 번 발급받습니다. .env에 넣고 나면 다시 안 씁니다.
//
// 사용법: node --env-file=.env auth.mjs
//
// 재생목록에서 항목을 지우려면 API 키로는 안 되고 OAuth가 필요합니다.
// playlistItems.delete는 youtube.force-ssl 범위를 요구합니다.

import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";

const SCOPE = "https://www.googleapis.com/auth/youtube.force-ssl";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

// 데스크톱 앱 클라이언트는 루프백 주소를 포트 상관없이 허용합니다.
// 따로 등록할 필요가 없습니다. OOB 방식은 2022년에 폐지됐습니다.
const PORT = 8420;
const REDIRECT = `http://localhost:${PORT}`;

const clientId = process.env.YOUTUBE_CLIENT_ID;
const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error(".env에 YOUTUBE_CLIENT_ID와 YOUTUBE_CLIENT_SECRET을 채우세요.");
  console.error("Google Cloud Console > 사용자 인증 정보 > OAuth 클라이언트 ID > 데스크톱 앱");
  process.exit(1);
}

const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
authUrl.search = new URLSearchParams({
  client_id: clientId,
  redirect_uri: REDIRECT,
  response_type: "code",
  scope: SCOPE,
  // offline이 없으면 refresh token이 안 나옵니다.
  // consent를 강제하는 이유: 이미 승인한 적이 있으면 refresh token을 생략합니다.
  access_type: "offline",
  prompt: "consent",
});

// 브라우저가 code를 들고 돌아올 때까지 기다립니다.
const code = await new Promise((resolve, reject) => {
  const server = createServer((req, res) => {
    const { searchParams } = new URL(req.url, REDIRECT);
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    res.end(code ? "완료됐습니다. 터미널로 돌아가세요." : `실패: ${error}`);
    server.close();
    code ? resolve(code) : reject(new Error(error ?? "code를 받지 못했습니다"));
  });
  server.listen(PORT, () => {
    console.error("브라우저에서 아래 주소를 열고 승인하세요.");
    console.error("미확인 앱 경고가 나오면 고급 > 계속을 누르세요.\n");
    console.error(`${authUrl}\n`);
  });
});

const res = await fetch(TOKEN_URL, {
  method: "POST",
  body: new URLSearchParams({
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: REDIRECT,
    grant_type: "authorization_code",
  }),
});
const json = await res.json();
if (!res.ok) throw new Error(`토큰 교환 실패 ${res.status}: ${json.error_description ?? json.error}`);
if (!json.refresh_token) throw new Error("refresh_token이 없습니다. 승인을 다시 시도하세요.");

// 토큰을 화면에 찍지 않고 .env에 바로 씁니다. 터미널 기록에 남지 않게.
const ENV = ".env";
const env = readFileSync(ENV, "utf8");
const line = `YOUTUBE_REFRESH_TOKEN=${json.refresh_token}`;
writeFileSync(
  ENV,
  /^YOUTUBE_REFRESH_TOKEN=.*$/m.test(env)
    ? env.replace(/^YOUTUBE_REFRESH_TOKEN=.*$/m, line)
    : `${env.replace(/\n*$/, "")}\n${line}\n`
);
console.error(`\n${ENV}에 YOUTUBE_REFRESH_TOKEN을 저장했습니다.`);
