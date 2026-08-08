# KisanStatus — notes for future audit-fix sessions

## Tech stack
- Next.js (app router) + TypeScript + Tailwind. Deployed on Vercel.
- Article pages are data-driven: metadata lives in `lib/articles-data.ts`
  (`ArticleMeta[]`), rendered by `app/articles/[slug]/page.tsx`.
- Content bodies are per-article React components in `components/articles/`.

## Title/meta conventions
- `<title>` = `seoTitle || ogTitle || title` + " | KisanStatus" suffix,
  assembled in `app/articles/[slug]/page.tsx`.
- Budget: seoTitle <= ~46 chars (so full title <= ~60 with suffix).
- Never change slugs — URLs are live and indexed.

## IndexNow
- `scripts/indexnow-payload.json` is **generated**, not hand-edited. Run
  `npm run indexnow:build` (derives `urlList` from the live sitemap.xml) or
  `npm run indexnow:submit` (build + submit in one go).
- `host` / `key` / `keyLocation` are preserved by the generator. The key is
  registered with the search engines and lives at `public/<key>.txt` — never
  regenerate it.
- The generator keeps existing entries in order and appends new ones, so diffs
  stay reviewable. It refuses to write an empty list.
- Why: the payload was hand-maintained and drifted 24 URLs behind the sitemap
  (the whole `/rajya-yojana/` cluster + pashupalan/loan/mandi articles + 2
  category pages) before 2026-08.

## Ahrefs Site Audit context
- Project id: 10042735, target kisanstatus.com (verified).
- 2026-08-07 crawl: health score 100/100, 454 pages, 0 broken, 0 blocked.
  Only 5 issues have a non-zero count; none are Critical.
- The whole Performance category reads 0 pages (Slow page, LCP, INP, CLS,
  HTML size, Not compressed). Site Audit only measures HTML download time, so
  it won't surface JS-bundle/hydration slowness — use PageSpeed/CWV field data
  for that, not this report.
- Known non-defects, don't "fix": `3XX redirect` (3) and `HTTP to HTTPS
  redirect` (2) are correct canonical enforcement. `Redirect chain` (1) is
  `http://www.` -> `https://www.` -> `https://` apex; the second hop comes from
  `next.config.js` redirects(), the first from Vercel's edge, so collapsing it
  needs a Vercel/DNS rule, not app code. 0 organic traffic on that path.
- 2026-08: IndexNow notice (94 pages) fixed by generating the payload from the
  sitemap.
- 2026-08: "Page and SERP titles do not match" fixed for 3 articles via
  seoTitle edits (PR #81). Homepage was the 4th affected page — left as-is:
  Google swaps in the FTO article's title because "fto full form" ranks on
  both pages (keyword cannibalization, monitor-only; FTO article pos 5,
  homepage pos 6). If it persists, strengthen internal linking from the
  homepage to the FTO article with exact-match anchors.
- 2026-08-08: "Meta description too long" fixed for /articles/drip-sprinkler-irrigation-subsidy
  (lib/articles-data.ts desc, 204->158 chars) and /maandhan (app/maandhan/page.tsx metadata +
  openGraph description, 178->153 chars). Budget: <=160 chars.
- 2026-08-08: "Slow page" (22.4s on /rajya-yojana/state-kisan-yojana-list-all-states-2026) is a
  false positive — page is SSG (generateStaticParams, dynamicParams=false), HTML 21.5KB, Vercel
  edge. Transient crawl anomaly; expect it to clear on re-crawl.
