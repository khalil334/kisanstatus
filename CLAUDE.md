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

## Known false positives / no-action findings (Ahrefs Site Audit)
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
