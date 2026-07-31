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
- Health score **100/100** at 2026-07-31 crawl (318 pages, 0 broken, 0 blocked). 13 issue-types have any affected pages; 0 Critical.
- Only 9 issue-types have any affected pages. Most "notices" are NOT code defects:
  - **www/http redirects** (3XX, HTTP→HTTPS, redirect chain) = correct canonicalization to `https://kisanstatus.com/`. The 2-hop `http://www.` chain is a Vercel platform artifact. Do NOT "fix".
  - **Page & SERP titles mismatch** = Google rewriting titles, source `<title>`s are fine. Investigate-only.
  - **IndexNow (62)** = submission action, not a repo change.

## Fixes applied
- **Schema.org validation error (6 pages)** — PR #12 (branch `fix/schema-article-required-fields`).
  Added required `Article` props (headline, image, datePublished, dateModified, author, publisher+logo, inLanguage, mainEntityOfPage) to the ItemList JSON-LD in `app/articles/page.tsx`; nested category-page `ListItem`s under a proper `item` Article node in `app/articles/category/[category]/page.tsx`. All values from existing metadata — no placeholders. Handle both ARTICLES and MAANDHAN_ARTICLES shapes with fallbacks.

- **Article og:image 404 (4 maandhan articles)** — branch `fix/article-og-image-404`.
  `lib/maandhan-data.ts` held flat filenames (`maandhan/<name>-hero.webp`) that don't exist; real assets live in per-article subfolders (`maandhan/<slug>/hero.webp`), which the body components in `components/articles/maandhan/*.tsx` already used correctly. Only the metadata file was stale. Also fixed a `.jpg` path declared as `image/webp`.

- **Schema.org validation error (6 pages)** — PR #20 (branch `fix/audit-notice-schema-collectionpage`).
  Root cause: `numberOfItems` was set on the **`CollectionPage`** node in `app/articles/page.tsx` and
  `app/articles/category/[category]/page.tsx`. On schema.org `numberOfItems` belongs to `ItemList`, not
  `CollectionPage`/`CreativeWork`. Moved it inside `mainEntity`. Proof pattern: `/calculator` and article
  pages emit a plain `ItemList` with `numberOfItems` inside and report 0 structured-data issues.
  Also enriched category-page ItemList `Article` nodes (had only `name`+`headline`) with description,
  image, datePublished, dateModified, author, publisher, inLanguage, mainEntityOfPage.
  Also removed the manual `| ${SITE_NAME}` suffix from `/articles` metadata title — the root layout
  already applies `template: '%s | KisanStatus'`, producing a doubled site name.

- **9 ghost internal links (soft-404 targets)** — PR #19 (branch `fix/audit-ghost-internal-links`).
  Kebab-case slugs that never existed in `lib/articles-data.ts` (the real slugs are PascalCase):
  `pm-kisan-24vi-kist-2026`→`PmKisan24viKist2026`, `pm-kisan-ekyc-online-2026`→`PmKisanEkycOnline2026`,
  `pm-kisan-beneficiary-list-2026`→`PmKisanBeneficiaryList2026`,
  `pm-kisan-correction-form-2026`→`PmKisanCorrectionForm2026`,
  `pm-kisan-master-guide-2026`→`PmKisanMasterGuide2026`,
  `pm-kisan-land-seeding-form-pdf-2026`→`PmKisanLandSeedingForm`.
  Plus `AutoDebitFailRegularization.tsx` `RELATED_CARDS`/`BottomNav` hardcoded a `/maandhan/` prefix for
  two non-maandhan targets: `/maandhan/cibil-score-kaise-badaye` (article does not exist at all →
  repointed to `/articles/KisanTractorLoan2026`, card title updated) and `/maandhan/pm-kisan-maandhan-yojana`
  → `/articles/PmKisanMaandhanYojanaPension`. `RELATED_CARDS` now stores explicit `href` per card.
  And `MaandhanContributionGuide.tsx` inline `/articles/pm-kisan-samman-nidhi-status-check` →
  `/articles/PmKisan24viKist2026`.

## Gotchas learned
- **Ahrefs does NOT catch broken og:image.** Its `Open Graph tags missing/incomplete` (SocialTags) checks only verify tag *presence*, not that the image URL resolves. All 11 Images/SocialTags issue-types showed count 0 while 23 pages had 404 og:images. Audit OG images by fetching sitemap URLs and HEAD-ing each `og:image` — don't trust the Site Audit here.
- **Two data files, different field names.** `lib/articles-data.ts` uses `publishedTime`/`modifiedTime`/`ogImage`; `lib/maandhan-data.ts` uses `published`/`modified`/`image`+`ogImage`. Fix both when touching image metadata.
- **Validate image refs against disk**, not against the body components — the components and the data file can disagree.
- **Soft-404s hide as "H1 tag missing or empty".** Bad internal links return HTTP **200** with a
  `Not Found` / `Article Not Found` title and no `<h1>` (Next.js `notFound()` inside a dynamic route),
  so Ahrefs reports them as an H1 notice on non-indexable pages, NOT as a broken link (`broken: 0`).
  When you see H1-missing notices, check whether those URLs are real articles first.
- **Article slugs are PascalCase, not kebab-case.** Most `lib/articles-data.ts` slugs are e.g.
  `PmKisanMasterGuide2026`. Hand-written kebab-case hrefs silently soft-404. Sweep with a script that
  compares every `href="/..."` against slugs in the two data files + static `app/**/page.tsx` dirs.
- **Never `sed` a slug string repo-wide** — the same kebab string is also an *image directory* name
  (`public/images/articles/pm-kisan-ekyc-online-2026/`). Rewriting it breaks images. Restrict to `href=`/`link:`/`item:`.
- **Some redirect sources are still linked internally.** `/pm-kisan-status` 308s to
  `/articles/PmKisan24viKist2026`; link the destination directly to avoid a hop.

## Still open (not yet done)
- "Page has only one dofollow incoming internal link" (2 indexable + 4 non-indexable at 2026-07-31) — needs contextual internal links.
- One "slow page" (Warning) — needs perf profiling.
- **`DEFAULT_OG_IMAGE` = `/og-image.webp` is 404** — file absent from `public/`. Affects 19 non-article pages (home, /articles, 8 calculators, /about, /contact, /privacy-policy, /disclaimer, /terms-of-service, 4 category pages). Needs a 1200x630 asset created. Deferred by owner (article-only scope).
- **`LOGO_URL` = `/logo.png` is 404** — only `logo.svg` exists. Used in JSON-LD `publisher.logo` on `app/page.tsx`, `app/layout.tsx`, `app/articles/page.tsx`, `app/articles/[slug]/page.tsx`. Deferred.
- Meta description too long (1 indexable page) — trim to 110–160 chars.
- IndexNow (69 pages) — submission action in Ahrefs UI, not a repo change.

## Confirmed false positives / do-not-fix
- 3XX redirect (3), HTTP→HTTPS redirect (2), redirect chain (1) — correct canonicalization to `https://kisanstatus.com/`; the 2-hop `http://www.` chain is a Vercel artifact.
- Noindex page (3), Noindex follow page (3) — non-indexable pages, intentional per owner.
- H1 missing (3) — NOT a false positive as of 2026-07-31: these were soft-404 pages caused by ghost
  links (fixed in PR #19). Re-check after the next crawl; only treat as intentional if the URLs are real pages.
- Page & SERP titles do not match (4) — Google rewriting titles; source `<title>`s are correct.
- Pages to submit to IndexNow (67) — submission action, not a repo change.
