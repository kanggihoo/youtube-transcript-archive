// transcripts/ 뷰어 서버. node viewer.mjs 후 브라우저가 열린다.
import { createServer } from "node:http";
import { readdir, readFile, rm } from "node:fs/promises";
import { exec } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "transcripts");
const FILES = ["summary.md", "ko.md", "original.md"];
const PORT = Number(process.env.PORT) || 4173;

// 폴더 이름 하나만 허용한다. 경로 구분자나 ..이 섞이면 transcripts/ 밖을 건드릴 수 있다
const safe = name => name && !/[\\/]|^\.\.?$/.test(name);

async function list() {
  const dirs = (await readdir(ROOT, { withFileTypes: true })).filter(d => d.isDirectory());
  return Promise.all(dirs.map(async d => ({
    name: d.name,
    files: (await readdir(join(ROOT, d.name))).filter(f => FILES.includes(f)),
  })));
}

createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  const dir = url.searchParams.get("dir");
  const send = (code, body, type = "application/json; charset=utf-8") => {
    res.writeHead(code, { "content-type": type });
    res.end(typeof body === "string" ? body : JSON.stringify(body));
  };
  try {
    if (url.pathname === "/") return send(200, await readFile(join(HERE, "viewer.html")), "text/html; charset=utf-8");
    if (url.pathname === "/api/list") return send(200, await list());
    if (!safe(dir)) return send(400, { error: "bad dir" });
    if (url.pathname === "/api/file" && FILES.includes(url.searchParams.get("f")))
      return send(200, await readFile(join(ROOT, dir, url.searchParams.get("f")), "utf8"), "text/plain; charset=utf-8");
    if (url.pathname === "/api/video" && req.method === "DELETE") {
      await rm(join(ROOT, dir), { recursive: true });
      return send(200, { ok: true });
    }
    send(404, { error: "not found" });
  } catch (e) {
    send(e.code === "ENOENT" ? 404 : 500, { error: e.message });
  }
}).listen(PORT, "127.0.0.1", () => {
  const addr = `http://localhost:${PORT}`;
  console.log(`${addr}  (${ROOT})`);
  const cmd = process.platform === "win32" ? "start \"\"" : process.platform === "darwin" ? "open" : "xdg-open";
  if (!process.env.NO_OPEN) exec(`${cmd} ${addr}`);
});
