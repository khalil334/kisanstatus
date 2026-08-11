# Kisanstatus — project notes for future audit sessions

## Tech stack
- Next.js (App Router, TypeScript), Tailwind. Deployed on Vercel (`vercel.json`), region bom1.
- Content is data-driven: article metadata lives in `lib/*-data.ts`
  (`articles-data.ts`, `hindi-articles-data.ts`, `rajya-yojana-data.ts`,
  `loan-mandi-pashupalan-data.ts`, `maandhan-data.ts`); bodies are React
  components under `components/articles/**`.
- Title precedence in `app/articles/[slug]/page.tsx`: `seoTitle || ogTitle || title`.
  Root layout applies template `%s | KisanStatus` — keep data titles WITHOUT the suffix.
- Hindi articles: `app/articles/hi/[slug]/page.tsx` + `lib/hindi-articles-data.ts`
  (slugs prefixed `hi/`). Has a Related-Hindi-Guides block + breadcrumb to `/articles/hi`.

## IndexNow
- Key: `f0fc593cc28d48e1b99cf386068fffe7`, key file at `public/f0fc593cc28d48e1b99cf386068fffe7.txt`.
- `scripts/build-indexnow-payload.js` rebuilds `scripts/indexnow-payload.json` from the live sitemap;
  `npm run indexnow:submit` submits. Payload URLs must match sitemap exactly (trailing slash on root only).
- Gotcha: the builder writes with `JSON.stringify(..., 1)` (1-space indent) while the committed
  file is 2-space, so a no-op rebuild still shows a ~115-line whitespace diff. Compare the
  `urlList` sets semantically before assuming the payload actually changed; revert whitespace-only churn.
- Last submitted 2026-08-11: 110 URLs, rebuild was `+0 / -0` (already in sync), API returned 200.
  Submitting does NOT immediately clear the "Pages to submit to IndexNow" Notice in Ahrefs —
  that flag re-evaluates on the next crawl, or clears instantly only via the IndexNow button
  inside the Ahrefs report UI.

## Known false positives / no-action findings (Ahrefs Site Audit)
- Re-verified 2026-08-11 against crawl 2026-08-11T02:17Z (health score 100/100, 527 pages,
  0 broken / 0 blocked). Of 173 checks only 5 had a non-zero count, and all 4 non-IndexNow
  ones are the cosmetic/platform findings below — no repo change is possible or warranted.
  Evidence for the redirect trio: `incomingAllLinks: 0` on both http:// probes and 1
  (itself a redirect inlink) on https://www — i.e. there are no internal links to repoint,
  and the only `www.kisanstatus.com` occurrence in source is the intentional www→apex rule
  in `next.config.js`. Don't "fix" these; it would break www canonicalisation for zero gain.
- "HTTP to HTTPS redirect" + "Redirect chain": `http://` and `http://www.` probes return 308 —
  correct Vercel platform behavior; chain (http://www → …) is platform-level, not fixable in repo.
- "Page and SERP titles do not match": Google swaps `| KisanStatus` for `- KisanStatus` — cosmetic,
  ignore when that's the only diff. Homepage occasionally shows another article's title in SERP —
  a Google-side anomaly, not code.

## Fix patterns that worked
- Only-one-dofollow-inlink on Hindi pages → template fix: footer Quick Link to `/articles/hi`
  + related-guides block in the Hindi article template.
- SERP title rewrites → shorten `seoTitle`/`title` in the data files to ≈50–55 chars,
  match what Google shows when reasonable.
