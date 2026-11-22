[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Maulidian14/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Maulidian14/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme on X — Leonida General Hospital bill

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

## The meme

A patient bill from **Leonida General Hospital, Vice City**: every GTA fan was
admitted on September 17, 2013 — the day GTA V came out — and discharged on
November 19, 2026, the day GTA VI came out. Diagnosis: a 13-year coma caused
by acute GTA VI anticipation. Length of stay: 4,811 days. The $48,110.00 bill
is stamped **PAID IN FULL by my AI agent's bounty on make.fun**, with
make.fun's ghost mascot paying up.

The joke follows the bounty: the thirteen-year wait for GTA 6, and an AI agent
that earns real money in make.fun bounties — enough to cover a 13-year
hospital stay.

## The post

The meme is posted on X from a public account. The post's text carries
make.fun (a link to the bounty page) and the entrant's play code, and tells
readers that on make.fun people and their AI agents earn real money.

## How this repository works

- `POST.json` holds the X post's address:
  `{"url": "https://x.com/<handle>/status/<id>"}`.
- `main.ts` (Node 22) reads `POST.json`, checks it names an `https` URL, and
  copies it unchanged to the output directory. That is all the program does;
  the house reads the post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT. See `LICENSE`.
