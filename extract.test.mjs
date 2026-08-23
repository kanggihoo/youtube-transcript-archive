#!/usr/bin/env node
// node extract.test.mjs
import assert from "node:assert/strict";
import { cleanUrl, videoId, slugify, frontmatterTitle, publishedDate } from "./extract.mjs";

// cleanUrl: 붙여넣기 사고. zsh 이스케이프, 따옴표, 공백이 섞여 들어옵니다.
const ID = "m8pBazNPvZE";
const paste = [
  String.raw`https://www.youtube.com/watch\?v\=${ID}`, // zsh 이스케이프
  String.raw`https://www.youtube.com/watch\?v\=${ID}\&t\=42s`,
  `  https://www.youtube.com/watch?v=${ID}\n`, // 공백/개행
  `"https://www.youtube.com/watch?v=${ID}"`, // 따옴표
  `<https://youtu.be/${ID}>`, // 마크다운 링크
  `https://www.youtube.com/watch?v=${ID}&t=111s`, // 타임스탬프
  `https://www.youtube.com/watch?v=${ID}?si=x`, // 파라미터 중복
  `https://www.youtube.com/watch?v=${ID}&list=PLabc&index=3`, // 재생목록
  `https://youtu.be/${ID}?si=AbCdEf`, // 공유 추적 파라미터
  `https://www.youtube.com/shorts/${ID}`,
  `https://www.youtube.com/live/${ID}`,
];
for (const p of paste) {
  assert.equal(videoId(cleanUrl(p)), ID, `붙여넣기 형태 실패: ${p}`);
}

// ID 자체에 하이픈/언더스코어가 들어가는 경우.
// 폴더명을 "마지막 하이픈 뒤 = ID"로 가정하면 usiK-qjjCKs가 쪼개집니다.
assert.equal(videoId(cleanUrl("https://www.youtube.com/watch?v=usiK-qjjCKs&t=2s")), "usiK-qjjCKs");
assert.equal(videoId("https://youtu.be/a_b-c_d-e_f"), "a_b-c_d-e_f");

// videoId: 여러 URL 형태
assert.equal(videoId("https://www.youtube.com/watch?v=m8pBazNPvZE"), "m8pBazNPvZE");
assert.equal(videoId("https://youtu.be/m8pBazNPvZE"), "m8pBazNPvZE");
assert.equal(videoId("https://www.youtube.com/watch?v=m8pBazNPvZE&t=42s"), "m8pBazNPvZE");
assert.throws(() => videoId("https://example.com"), /영상 ID/);

// slugify: 한글 유지, 경로 문자 제거, 길이 제한
assert.equal(slugify("컴파운드 엔지니어링"), "컴파운드-엔지니어링");
// 구분자는 지우지 말고 하이픈으로: "Every/Cora"가 "EveryCora"로 붙으면 안 됩니다
assert.equal(slugify("Every/Cora"), "Every-Cora");
// 셸 글로브 문자가 폴더명에 남으면 cd/rm 할 때마다 인용부호가 필요해집니다
assert.ok(!/[[\]{}()'`,;!—]/.test(slugify("[한영자막] A, B (C) — D!")));
assert.equal(slugify("  공백   많음  "), "공백-많음");
assert.ok(slugify("가".repeat(200)).length <= 60);
// 잘린 자리에 하이픈이 남지 않아야 폴더명이 깨끗합니다
assert.ok(!slugify(`${"가".repeat(59)} 나`).endsWith("-"));

// frontmatterTitle
const md = `---\ntitle: "[한영자막] 컴파운드 엔지니어링"\nauthor: "Tech Bridge"\npublished: 2026-08-22T02:00:29-07:00\n---\n\n## Transcript`;
assert.equal(frontmatterTitle(md), "[한영자막] 컴파운드 엔지니어링");
assert.equal(frontmatterTitle("## Transcript 뿐"), null);

// publishedDate: 앞 10자만. 타임존 보정을 하면 날짜가 하루 밀려 YouTube 표시와 어긋납니다.
assert.equal(publishedDate(md), "2026-08-22");
assert.equal(publishedDate(`---\ntitle: "x"\n---`), null); // published 없는 경우
// 프론트매터 밖의 published는 무시해야 합니다
assert.equal(publishedDate(`---\ntitle: "x"\n---\npublished: 1999-01-01`), null);

console.log("ok");
