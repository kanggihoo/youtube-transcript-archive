#!/usr/bin/env node
// node sync.test.mjs
import assert from "node:assert/strict";
import { playlistId, dirVideoId, parseArgs } from "./sync.mjs";

// playlistId: ID를 그대로 주든 URL을 붙여넣든 같은 결과여야 합니다.
const PL = "PLabcDEF-123_456";
assert.equal(playlistId(PL), PL);
assert.equal(playlistId(`https://www.youtube.com/playlist?list=${PL}`), PL);
assert.equal(playlistId(`  https://www.youtube.com/playlist?list=${PL}\n`), PL);
assert.equal(playlistId(String.raw`https://www.youtube.com/playlist\?list\=${PL}`), PL); // zsh
assert.equal(playlistId(`https://www.youtube.com/watch?v=m8pBazNPvZE&list=${PL}&index=3`), PL);
assert.equal(playlistId("LL"), "LL"); // 좋아요 표시 목록

// dirVideoId: ID에 하이픈이 섞여도 쪼개지면 안 됩니다.
// split("-")[3]으로 하면 usiK-qjjCKs가 "usiK"로 잘립니다.
assert.equal(dirVideoId("2026-08-22-usiK-qjjCKs-한영자막-Claude-Code와"), "usiK-qjjCKs");
assert.equal(dirVideoId("2026-08-28-MZfhhl6ej-k-I-replaced-my-entire-tech-stack"), "MZfhhl6ej-k");
assert.equal(dirVideoId("2026-08-29-Oa0_wjz-ynw-I-built-the-ultimate"), "Oa0_wjz-ynw");
assert.equal(dirVideoId("2026-08-14-kzcI5F4tGiU-How-I-Use-AI-to-Learn-Things"), "kzcI5F4tGiU");

// 접미사 x는 "게시일이 아니라 받은 날짜"라는 표시입니다. 통과시켜야 합니다.
assert.equal(dirVideoId("2026-08-23x-M5oLcLGq0hU-한영자막-기업-테크-스택이"), "M5oLcLGq0hU");

// 제목 없이 날짜와 ID만 있는 폴더도 있을 수 있습니다.
assert.equal(dirVideoId("2026-08-14-kzcI5F4tGiU"), "kzcI5F4tGiU");

// 형식이 다른 폴더는 건너뛰어야 합니다. null이 아니면 없는 ID를 받은 것으로 착각합니다.
assert.equal(dirVideoId("templates"), null);
assert.equal(dirVideoId("refs"), null);
assert.equal(dirVideoId(".DS_Store"), null);

// parseArgs: --clean이 항목을 지우니 플래그와 재생목록 ID가 섞이면 안 됩니다.
assert.deepEqual(parseArgs([]), { dryRun: false, clean: false, playlist: undefined });
assert.deepEqual(parseArgs(["--dry-run"]), { dryRun: true, clean: false, playlist: undefined });
// 플래그를 재생목록 ID로 읽으면 엉뚱한 목록을 건드립니다.
assert.deepEqual(parseArgs(["--clean"]), { dryRun: false, clean: true, playlist: undefined });
assert.deepEqual(parseArgs([PL, "--clean"]), { dryRun: false, clean: true, playlist: PL });
assert.deepEqual(parseArgs(["--clean", PL]), { dryRun: false, clean: true, playlist: PL });
// 오타는 삭제로 해석되면 안 됩니다.
assert.equal(parseArgs(["--clea"]).clean, false);

console.log("ok");
