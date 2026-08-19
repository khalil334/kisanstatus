# KisanStatus — SEO fix notes (for future Site Audit sessions)

## Tech stack
- Next.js App Router (TypeScript). Deployed on Vercel (vercel.json).
- Site-wide title template: `app/layout.tsx` → `metadata.title.template` = `%s - ${SITE_NAME}`.
  Changed from `%s | ${SITE_NAME}` on 2026-08 (Ahrefs "Page and SERP titles do not match" —
  Google rewrote pipe separators to dashes).
- Per-page SEO titles live in data files, not components:
  - `lib/core-articles-data.ts` (`seoTitle`, `ogTitle`)
  - `lib/rajya-yojana-data.ts` (`title`)
  - `lib/hindi-rajya-yojana-data.ts` (`seoTitleHi`, H1 = `titleHi`)
  - `lib/loan-mandi-pashupalan-data.ts`
  - `lib/yojana-2026-data.ts` (title ≤46 chars; layout appends 14-char suffix, 60 budget)
- `scripts/check-title-h1.js` — CI-style check: title/H1 keyword alignment + no double branding.
  Run with `node scripts/check-title-h1.js` after any title change.

## Fix patterns that worked
- Google rewriting titles → prefer `-` separator over `|`; align seoTitle with the H1
  phrasing Google substituted (it shows what Google trusts).

## Ahrefs
- Site Audit project_id: 10042735, target kisanstatus.com.
