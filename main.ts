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
  throw new Error("POST.json url must be an https URL");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
