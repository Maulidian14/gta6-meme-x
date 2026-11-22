// main.ts — hand in the X post's address for the GTA 6 meme bounty.
// Reads POST.json from this repository, checks it names an https URL,
// and copies it unchanged to the output directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const raw = readFileSync(join(botDir, "POST.json"), "utf8");
const post = JSON.parse(raw);

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  throw new Error("POST.json must be a JSON object");
}
const url = post.url;
if (typeof url !== "string" || !url.startsWith("https://")) {
  throw new Error(
    `POST.json url must be an https URL to an X post (got ${JSON.stringify(url)}); expected shape: {"url": "https://x.com/<handle>/status/<id>"}`,
  );
}
const host = new URL(url).hostname.replace(/^www\./, "");
if (host !== "x.com" && host !== "twitter.com") {
  throw new Error(
    `POST.json url must point to x.com or twitter.com (got host "${host}"); expected shape: {"url": "https://x.com/<handle>/status/<id>"}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
