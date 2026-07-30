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

- **Article og:image 404 (4 maandhan articles)** — branch `fix/article-og-image-404`.
  `lib/maandhan-data.ts` held flat filenames (`maandhan/<name>-hero.webp`) that don't exist; real assets live in per-article subfolders (`maandhan/<slug>/hero.webp`), which the body components in `components/articles/maandhan/*.tsx` already used correctly. Only the metadata file was stale. Also fixed a `.jpg` path declared as `image/webp`.

## Gotchas learned
- **Ahrefs does NOT catch broken og:image.** Its `Open Graph tags missing/incomplete` (SocialTags) checks only verify tag *presence*, not that the image URL resolves. All 11 Images/SocialTags issue-types showed count 0 while 23 pages had 404 og:images. Audit OG images by fetching sitemap URLs and HEAD-ing each `og:image` — don't trust the Site Audit here.
- **Two data files, different field names.** `lib/articles-data.ts` uses `publishedTime`/`modifiedTime`/`ogImage`; `lib/maandhan-data.ts` uses `published`/`modified`/`image`+`ogImage`. Fix both when touching image metadata.
- **Validate image refs against disk**, not against the body components — the components and the data file can disagree.

## Still open (not yet done)
- "Page has only one dofollow incoming internal link" (10 indexable pages) — needs contextual internal links.
- One "slow page" (Warning) — needs perf profiling.
- **`DEFAULT_OG_IMAGE` = `/og-image.webp` is 404** — file absent from `public/`. Affects 19 non-article pages (home, /articles, 8 calculators, /about, /contact, /privacy-policy, /disclaimer, /terms-of-service, 4 category pages). Needs a 1200x630 asset created. Deferred by owner (article-only scope).
- **`LOGO_URL` = `/logo.png` is 404** — only `logo.svg` exists. Used in JSON-LD `publisher.logo` on `app/page.tsx`, `app/layout.tsx`, `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`. Deferred.
- Meta description too long (1 indexable page) — trim to 110–160 chars.

## Confirmed false positives / do-not-fix
- 3XX redirect (3), HTTP→HTTPS redirect (2), redirect chain (1) — correct canonicalization to `https://kisanstatus.com/`; the 2-hop `http://www.` chain is a Vercel artifact.
- Noindex page (2), Noindex follow page (2), H1 missing (2) — non-indexable pages, intentional per owner.
- Page & SERP titles do not match (4) — Google rewriting titles; source `<title>`s are correct.
- Pages to submit to IndexNow (67) — submission action, not a repo change.
