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

## Ahrefs Site Audit context
- Project id: 10042735, target kisanstatus.com (verified).
- 2026-08: "Page and SERP titles do not match" fixed for 3 articles via
  seoTitle edits (PR #81). Homepage was the 4th affected page — left as-is:
  Google swaps in the FTO article's title because "fto full form" ranks on
  both pages (keyword cannibalization, monitor-only; FTO article pos 5,
  homepage pos 6). If it persists, strengthen internal linking from the
  homepage to the FTO article with exact-match anchors.
