# Kisanstatus — Site Audit fix notes

## Stack
- **Next.js 16 (App Router)** + React 19, TypeScript, Tailwind. Deployed on **Vercel** (region bom1).
- No CMS / database. All content is in source:
  - Article metadata: `lib/articles-data.ts` (`ARTICLES`, shape `ArticleMeta`) and `lib/maandhan-data.ts` (`MAANDHAN_ARTICLES`, different field names: `published`/`modified`/`image` vs `publishedTime`/`modifiedTime`/`ogImage`).
  - Article bodies: `components/articles/**/*.tsx`.
  - Site constants (URL, name, author, logo, OG image): `lib/site-config.ts`.
- Redirects live in `next.config.js` (`async redirects()`) and `vercel.json`.
- Per-page `<title>` via `generateMetadata` / exported `metadata` in each `app/**/page.tsx`.
- JSON-LD is injected via `<script type="application/ld+json" dangerouslySetInnerHTML>` in page components.

## Ahrefs Site Audit (project 10042735, target kisanstatus.com/)
- Health score **100/100** at 2026-07-26 crawl (274 pages, 0 broken, 0 blocked).
- Only 9 issue-types have any affected pages. Most "notices" are NOT code defects:
  - **www/http redirects** (3XX, HTTP→HTTPS, redirect chain) = correct canonicalization to `https://kisanstatus.com/`. The 2-hop `http://www.` chain is a Vercel platform artifact. Do NOT "fix".
  - **Page & SERP titles mismatch** = Google rewriting titles, source `<title>`s are fine. Investigate-only.
  - **IndexNow (62)** = submission action, not a repo change.

## Fixes applied
- **Schema.org validation error (6 pages)** — PR #12 (branch `fix/schema-article-required-fields`).
  Added required `Article` props (headline, image, datePublished, dateModified, author, publisher+logo, inLanguage, mainEntityOfPage) to the ItemList JSON-LD in `app/articles/page.tsx`; nested category-page `ListItem`s under a proper `item` Article node in `app/articles/category/[category]/page.tsx`. All values from existing metadata — no placeholders. Handle both ARTICLES and MAANDHAN_ARTICLES shapes with fallbacks.

## Still open (not yet done)
- "Page has only one dofollow incoming internal link" (10 indexable pages) — needs contextual internal links.
- One "slow page" (Warning) — needs perf profiling.
