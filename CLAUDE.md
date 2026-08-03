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

## Fixes applied 2026-08-02 (branch `fix/audit-serp-title-alignment-indexnow`)
- **Page & SERP title mismatch (2 of 4 pages)** — adopted Google's rewritten phrasing into `ogTitle`
  in `lib/articles-data.ts`: `pm-kisan-self-registered-status-check` -> "PM Kisan Self Registration Status Check 2026",
  `PmKisanLandSeedingForm` -> "PM Kisan Land Seeding Form PDF Download". The other 2 (FTO #9, CSC #10)
  rank well; Google's rewrite is cosmetic — intentionally left alone.
- **IndexNow setup** — key file `public/f0fc593cc28d48e1b99cf386068fffe7.txt` + `scripts/submit-indexnow.js`
  (+ `scripts/indexnow-payload.json`, all 70 crawled URLs). Run the script once after deploy; re-run on new content.

## Still open (not yet done)
- "Slow page" Warning (4 pages at 2026-08-02 02:57 crawl: /calculator/installment-tracker,
  /maandhan/pm-kisan-maandhan-pension-card-download, /articles/mushroom-kheti-nhb-subsidy,
  /articles/PmKisanMobileNumberChangeUpdate). All are large 'use client' components (25-35KB,
  7-8 images); images all exist on disk. Real fix = server-component refactor / lazy sections —
  invasive, deferred again 2026-08-02.
- IndexNow (70 pages at 2026-08-02) — submission action in Ahrefs UI, not a repo change.
- `pm kisan transaction failed reason` keyword ranks on `/articles/pm-kisan-payment-failed-status-2026`, which 308s to MasterGuide (next.config.js:55). Owner deferred choosing a landing page — keyword NOT added anywhere (2026-08-02).
- (og-image.webp + logo.png now EXIST in public/ — fixed via PR #22; the two 404 items above are resolved.)

## Fixes applied 2026-08-02 (branch `feat/keywords-and-audit-notices`, push-only — owner merges)
- **Organic keyword gaps** (Ahrefs organic_keywords, 13 kws total on the site, 6 were missing from source):
  FTO article got a new "payment confirmation is pending" section + "FTO will be generated" stage +
  3 FAQs (covers 4 kws incl. the 900-vol one at #9). CSC charges article got lead-in para + FAQ for
  "csc registration fees kitni hai". All phrases verbatim from Ahrefs; rates from the page's own table.
- **/maandhan not in sitemap** — added to staticPages in app/sitemap.ts.
- **/maandhan OG incomplete** — added og:image (DEFAULT_OG_IMAGE), siteName, locale, twitter card.
- **only-one-dofollow-inlink** on `/articles?category=status-check` — the single inlink was a breadcrumb
  in PmKisanBankAccountChangeProcess.tsx; repointed to canonical `/articles/category/status-check`
  (strengthening the query-param URL would have been wrong). After recrawl this issue should vanish
  because the query-param URL drops out of the link graph entirely.

## Gotchas learned 2026-08-02
- **Only 13 organic keywords exist site-wide** (6 URLs). "Add organic keywords to all articles" is
  impossible without inventing keywords — 35 of 41 articles have zero organic kws. Any wider keyword
  work = new Keywords Explorer research, a separate task.
- **Two ranking URLs are redirects**: `pm-kisan-payment-failed-status-2026` and
  `pm-kisan-land-seeding-status-check` both 308 to other pages (next.config.js) but still hold rankings.
  Check next.config.js redirects before adding keywords to the "ranking" page.

## Fixes applied 2026-08-02 (session 2, pushed direct to main, d9cf024)
- **Re-verified Tier 1 (Warnings) against 02:57 crawl**: 3XX redirect (3) = pure domain
  canonicalization (http/www hops), links dataset shows ZERO internal links pointing at
  redirect URLs — nothing to fix in repo. Confirms earlier do-not-fix verdict.
- **Keyword coverage top-up** (fresh organic_keywords pull, still 13 kws / 6 URLs):
  - `status of self registered farmer` (vol 250, pos #33) — PmKisanSelfRegisteredStatusCheck.tsx
    had zero exact-phrase coverage; added a natural para about the portal's dedicated
    "Status of Self Registered Farmer" option + relabeled the official-source list item.
  - `land seeding status` (pos #1 via /articles/pm-kisan-land-seeding-status-check which 308s
    to MasterGuide2026) — MasterGuide had zero mention; worked the phrase into the
    Land Record Issue fix text.
  - All other 11 kws verified present verbatim in their ranking components — no change.

## Fixes applied 2026-08-03 (Tier 1, pushed direct to main, 0e9549b)
Crawl 2026-08-02 16:57 = health 100/100, 314 pages, 0 broken, 0 Critical. Only 5 of 173
issue-types have any affected pages, and only ONE is indexable (SERP-title mismatch, 4 pages).
So Tier 1 targeted defects verified on the LIVE site that Site Audit does not detect at all:
- **`/browserconfig.xml` was 404** while `app/layout.tsx` declared `msapplication-config`.
  Created `public/browserconfig.xml`; tiles point only at assets that exist on disk.
- **`/rss.xml` was 404** while `lib/site-config.ts` exported `RSS_URL` (dead config, long-standing).
  Added `app/rss.xml/route.ts` merging ARTICLES + MAANDHAN_ARTICLES (normalising the two field
  shapes like `app/sitemap.ts` does), sorted by `modified` desc, served `noindex, follow`.
- Added `alternates.types` in `app/layout.tsx` for RSS autodiscovery.
- **Deleted `public/robots.txt`** — it was DEAD, not authoritative (see gotcha below).

## Gotchas learned 2026-08-03
- **`public/robots.txt` did NOT override `app/robots.ts`** on this Vercel deployment — the
  opposite of the usual Next.js expectation. Proof: live `/robots.txt` contains
  `Disallow: /search?` (only in robots.ts) and lacks `Crawl-delay: 0` (only in the static file).
  So the AI-crawler allow rules (GPTBot/ClaudeBot/PerplexityBot/Applebot) were live all along.
  Don't "fix" this as a critical AEO bug — verify with `curl` before concluding.
- **`npm run build` runs `update-dates` first**, which rewrites `publishedTime`/`modifiedTime`
  on ~37 articles in `lib/articles-data.ts` and drops a `.backup-<ts>` file. When building only
  to typecheck, use `npx next build` / `npx tsc --noEmit` and `git checkout -- lib/articles-data.ts`
  afterwards, or you'll commit unintended date churn.
- **`package-lock.json` is out of sync with `package.json`** (pre-existing, NOT introduced here):
  `@next/bundle-analyzer@16.2.7` missing from the lock, and `sharp` drifts (package.json 0.33.5
  vs lock 0.34.5). `npm ci` therefore FAILS — a real risk if Vercel uses `npm ci`. Install with
  `npm install --no-save --no-package-lock` to avoid touching the lock. Owner not yet asked to fix.
- **`next/font` needs `fonts.googleapis.com` AND `fonts.gstatic.com`** allowlisted for a full
  `next build` in the sandbox; without gstatic the build fails on font files even though the CSS
  resolves. `npx tsc --noEmit` is the reliable local gate.
- **SERP-title data is fetchable**: `export_many` dataset=`pages` with the issue's
  `pages_filter_id` and fields `["url","title","serp_title"]` returns both titles side by side —
  use it instead of guessing what Google rewrote.

## Fixes applied 2026-08-03 (Tier 2 + 3, pushed direct to main, 3898101)
- **SERP-title mismatch (2 of 4 pages)** — pulled real `title` vs `serp_title` via `export_many`.
  `pm-kisan-fto-generated-ka-matlab-kya-hai` ogTitle -> "FTO Generated Matlab — PM Kisan Status Guide";
  `PmKisanCscRegistrationCharges` ogTitle -> "PM Kisan CSC Charges — Sahi Fees, Sahi Tarika".
  The other 2 (`pm-kisan-self-registered-status-check`, `PmKisanLandSeedingForm`) differ ONLY by
  Google swapping `|` for `-` — not fixable, permanently leave alone.
- **`/llms.txt` was 404** — added `app/llms.txt/route.ts` (llmstxt.org convention), generated from
  ARTICLES + MAANDHAN_ARTICLES + CATEGORIES so it can't drift. Includes the not-a-government-site
  disclaimer, the authoritative gov.in portal list, and a date-sensitivity warning for kist numbers.
- **AhrefsBot unblocked** in `app/robots.ts` (+ added `AhrefsSiteAudit`); it was in the blocked group
  alongside CCBot/SemrushBot, which sabotages our own Site Audit + backlink data. Other scrapers
  stay blocked; GPTBot/ClaudeBot/PerplexityBot allow rules untouched.

## Gotchas learned 2026-08-03 (session 2)
- **`FAQBlock` in `components/ArticleShared.tsx` emits FAQPage JSON-LD itself** (line ~262). So
  `grep -L FAQPage components/articles/*` returns 22 "missing" files that are actually fine.
  Never treat that grep as an FAQ-schema gap — check whether the component renders `<FAQBlock>`.
- **`/rss.xml` serves 50 items = 37 ARTICLES + 13 MAANDHAN_ARTICLES.** If the count looks low,
  count `^    slug:` in both data files before suspecting the feed.
- **Vercel `buildCommand` is `npm run build`, NOT `npm ci`** (see vercel.json), so the out-of-sync
  `package-lock.json` does NOT break deploys. Lower priority than it first appears — still worth
  fixing someday, but it is not an outage risk.

## Fixes applied 2026-08-03 — category title/meta length (branch `fix/audit-category-title-meta-length`, push-only — owner merges)
- **Title too long (2) + Meta description too long (2)** — same two pages, both the categories added in
  `feat/add-two-categories`: `/articles/category/pashupalan` and `/articles/category/agri-business`.
  Their `CATEGORY_DATA` entries were written without length-checking against the root layout's
  `template: '%s | KisanStatus'` suffix (`app/layout.tsx`), which adds **14 chars** to every raw title.
  - `pashupalan`: title 75->59 (dropped `— Bakri, Machli`), meta 167->149 (dropped `business`, 2nd `verified`).
  - `agri-business`: title 74->58 (dropped `, Vermicompost`), meta 161->139 (dropped `custom hiring centre`).
  Every dropped phrase already exists in that entry's `keywords[]` and/or the body copy, so no keyword
  coverage was lost. Only `title`/`description` changed — `slug`, `href`, `keywords`, `emoji` untouched.
- **Rule for future category additions**: raw title must be **<= 46 chars** (46 + 14 suffix = 60).
  Ahrefs' real flag threshold is ~70 rendered, not 60 — the other four categories render 62-65 and were
  NOT flagged, so they were deliberately left alone ("don't touch unrelated issues").

## Confirmed false positives / do-not-fix
- 3XX redirect (3), HTTP→HTTPS redirect (2), redirect chain (1) — correct canonicalization to `https://kisanstatus.com/`; the 2-hop `http://www.` chain is a Vercel artifact.
- Noindex page (3), Noindex follow page (3) — non-indexable pages, intentional per owner.
- H1 missing (3) — NOT a false positive as of 2026-07-31: these were soft-404 pages caused by ghost
  links (fixed in PR #19). Re-check after the next crawl; only treat as intentional if the URLs are real pages.
- Page & SERP titles do not match (4) — Google rewriting titles; source `<title>`s are correct.
- Pages to submit to IndexNow (67) — submission action, not a repo change.

## Category taxonomy (branch `feat/add-two-categories`)
- `CATEGORIES` in `lib/articles-data.ts` is the **single source of truth**. Adding a slug there
  automatically produces `/articles/category/<slug>`, a sitemap entry (`app/sitemap.ts` maps
  `Object.keys(CATEGORIES)`), and an `/articles` filter chip.
- Three places must stay in sync when adding a category:
  1. `lib/articles-data.ts` → `CATEGORIES` (drives everything)
  2. `app/articles/category/[category]/page.tsx` → `CATEGORY_DATA` — typed `Record<CategorySlug, …>`,
     so a missing key is a **compile error**. Holds the per-category SEO title/description/keywords.
  3. `app/articles/ArticlesClient.tsx` → `CATEGORY_ICONS` — untyped `Record<string, …>`, a missing
     key silently falls back to the article's `icon` emoji. Not fatal, but add it.
- Added `pashupalan` (Pashupalan & Matsya Palan) and `agri-business` (Agri Business & Subsidy) to
  split the overloaded 15-article `farming` bucket. Moved 4 livestock/fishery articles and 5
  agri-business/subsidy articles out of `farming`; `farming` now holds 6 pure scheme guides.
- **Only the `category` metadata field was changed — no `slug` and no `href` was touched**, so every
  `/articles/<slug>` URL is unchanged. Verify with:
  `git diff -U0 | grep -E "^[+-].*(slug:|href)" | wc -l` → must be 0.
- `pension-scheme` (13 articles in `lib/maandhan-data.ts`) is deliberately NOT in `CATEGORIES` — it
  has no category page and is special-cased via `isMaandhan` checks. Don't "fix" this without a plan.

## Content-planning gotcha (learned 2026-08-03, the hard way)
- **NEVER infer article coverage from slugs in `lib/articles-data.ts`.** A content plan built that way
  proposed 5 articles that were already live and more thorough than the proposal
  (`AgriStackKyaHai2026` already has full registration + state-wise sections; `PmfbyCropInsurance2026`
  already covers claims; `KisanCreditCardOnlineApply2026` already covers the 4% / 2026 limits;
  `PmKisanPaymentFailedFix2026` is already a 7-reason diagnostic; `PmKusumYojanaSolarSubsidy2026`
  already has state-wise links). Slugs are terse; the bodies are broad.
- **Correct method:** `curl https://kisanstatus.com/sitemap.xml` → grep `<loc>` (72 URLs) → fetch each
  candidate URL → `grep -oE '<h[123][^>]*>[^<]{3,110}'` to read actual section headings. Only then
  decide what's missing. Repo slugs are a starting index, not the content map.
- **Content gap as of 2026-08-03:** central-scheme coverage is saturated (~30 PM Kisan + 13 Maandhan
  articles). ZERO state income-support scheme coverage (Annadata Sukhibhava AP, Rythu Bharosa TS,
  Namo Shetkari MH, CM Kisan Kalyan MP, Kisan Samman Nidhi RJ, Krishak Bandhu WB, CM Kisan OD).
  That's the real gap — see `CONTENT-PLAN.md`.

## Rajya-yojana cluster shipped 2026-08-03 (branch `content/rajya-yojana-9-article-stubs`)
- Created the 8 missing body components in `components/articles/rajya-yojana/` as **short stubs**
  (h1 from metadata + 2 lines + official-portal link + hub backlink). Marked `STUB` in a header comment.
  Owner will expand each with verified figures/dates later.
- Registered all 9 components in the `COMPONENTS` map of `app/rajya-yojana/[slug]/page.tsx` and flipped
  all 9 `status: 'planned'` -> `'live'` in `lib/rajya-yojana-data.ts` (with `published`/`modified` set).
  This also un-404s `/rajya-yojana` (the hub `notFound()`s while 0 are live) and puts all 9 into
  sitemap / RSS / llms.txt.
- Fixed the pre-existing Rajasthan article (was never registered, so its URL 404'd):
  `component` was `RajasthanKisanSammanNidhi` but the file is `RajasthanKisanSammanNidhi9000.tsx`.
- Rajasthan article also referenced 4 images under `public/images/articles/rajya-yojna/...` that do
  NOT exist on disk (and the dir name is misspelled vs the slug). Removed the 4 `<Fig>` calls + the
  `Fig` helper/`next/image` import rather than shipping 404 images; JSON-LD `image` now points at the
  real `/og-image.webp` and `logo.webp` -> `logo.png` (only `.png`/`.svg` exist).
- Also repointed 2 kebab-case hrefs in that article: `/articles/pm-kisan-24vi-kist-2026` ->
  `/articles/PmKisan24viKist2026`, and `/articles/pm-kisan-pati-patni-dono-ko-milega` ->
  `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega` (this cluster's path, not /articles/).
- NOT typechecked/built locally — npm registry was firewall-blocked this session. Verify with
  `npm ci && npx tsc --noEmit && npm run build` before merging.
