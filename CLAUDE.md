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

## Build was broken by that cluster — fixed 2026-08-03 (PR #34, `fix/rajya-yojana-build`)
The stubs PR above shipped unverified ("NOT typechecked/built locally"). It broke the Vercel build,
so `/rajya-yojana/*` never went live. Two independent blockers:

1. **Missing `components/ui/` entirely.** Four bodies (Annadata, MpKisanKalyan, NamoShetkari,
   RythuBharosa) import `@/components/ui/{ExternalLinkButton,InfoBox,SchemeTable}`. None existed —
   there was no `components/ui/` dir. The real button is `components/ExternalLinkButton.tsx` and it
   takes `url`, while these bodies pass `href`. Created all three:
   - `components/ui/InfoBox.tsx` — variants `info|tip|warning|update` + optional `date` prop.
   - `components/ui/SchemeTable.tsx` — scroll wrapper; children are bare `<tr>/<th>/<td>`, first row
     is the header row (styled via `[&_th]` selectors, no `thead` needed).
   - `components/ui/ExternalLinkButton.tsx` — re-export accepting `href` OR `url`.
2. **`package-lock.json` out of sync with `package.json`** (`@next/bundle-analyzer` missing from lock,
   `sharp` 0.33.5 vs locked 0.34.5) → `npm ci` failed before compiling. Regenerated.

Also removed 18 `<Fig>` refs to `.webp` files absent from `public/images/articles/rajya-yojana/`
(same disease as the Rajasthan article above — the dir does not exist at all), and stripped leaked
`[[n]]` citation markers from the prose of 5 bodies.

### Gotchas for next time
- **`npm run build` runs `scripts/update-article-dates.js` first**, which REWRITES
  `lib/articles-data.ts` (all `publishedTime`/`modifiedTime` → git/file mtimes) and leaves
  `lib/articles-data.ts.backup-<ts>` files. Always `git restore lib/articles-data.ts` + `rm` the
  backups before committing, or you'll sweep 74 unrelated date changes into your diff.
- **Turbopack (the default `next build`) crashes in this sandbox** on `app/globals.css` PostCSS with
  a bogus `ECONNREFUSED` / "node process exited". Not a repo bug. Build with `next build --webpack`.
- `NODE_OPTIONS` carries a platform crash-guard hook that confuses Next's worker spawning — run
  builds under `env -u NODE_OPTIONS`.
- Building needs firewall access to `registry.npmjs.org`, `fonts.googleapis.com`, `fonts.gstatic.com`
  (next/font fetches Poppins at build time).
- **Verification that actually catches the soft-404 shape**: after a build, grep the prerendered HTML
  in `.next/server/app/rajya-yojana/*.html` for exactly one `<h1>` and a real `<title>`. Don't try to
  `curl` a locally started `next start` — loopback to a self-started port is not reachable here.
- Still open: 5 of the 9 rajya-yojana articles are short stubs, and the 18 article images don't exist.

## Rajya-yojana articles invisible on-site — fixed 2026-08-03 (branch `fix/rajya-yojana-not-listed`)
The 9 `/rajya-yojana/*` pages were **live and correct** (verified with curl: hub 200 with 9 cards,
each article 200 with a real `<h1>` + full body, 10 URLs in sitemap.xml). The bug was that nothing
in the site's own UI linked to them, so they were effectively invisible:
- `/articles` listing loaded only `ARTICLES` + `MAANDHAN_ARTICLES` — the cluster was never in the array.
- Header nav, header search index and footer Quick Links had zero `/rajya-yojana` entries.
Root cause of the shape: listing/search code **inferred** each URL from the slug
(`/articles/<slug>` vs `/maandhan/<slug>`), and this cluster lives at `/rajya-yojana/<slug>`.
Fix (link layer only — no slug, URL, data or component change):
- `CombinedArticleMeta` gained optional `href` + `categoryLabel`; every path build in
  `app/articles/page.tsx` (JSON-LD) and `ArticlesClient.tsx` (card + ItemList) now prefers `href`
  and only falls back to the maandhan/articles inference.
- `app/articles/page.tsx` maps `LIVE_RAJYA_YOJANA_ARTICLES` into the listing with
  `category: 'rajya-yojana'`, an explicit `href`, and keywords from `mainKeyword`+`secondaryKeywords`.
- `rajya-yojana` is deliberately NOT added to `CATEGORIES` (it has no `/articles/category/` page), so
  its filter chip is rendered explicitly and the card badge falls back to `categoryLabel`.
- Header: `Rajya Yojana` nav item + a new `SEARCH_INDEX` (ARTICLES + LIVE_RAJYA_YOJANA_ARTICLES) where
  each entry carries its own `href`. Footer: `/rajya-yojana` in Quick Links.
Verified: `npx tsc --noEmit` clean, `env -u NODE_OPTIONS npx next build --webpack` succeeded,
`.next/server/app/articles.html` contains all 9 `/rajya-yojana/<slug>` hrefs, the `Rajya Yojana (9)`
chip, and `numberOfItems: 59` (37 + 13 + 9).

### Gotcha
- **A page being live is not the same as being reachable.** Ahrefs Site Audit crawls the sitemap, so
  sitemap-only pages report as fine while having zero internal inlinks. When someone says "articles
  show nahi ho rahe", curl the URL first — if it 200s, the bug is in the listing/nav layer.
- **Any new cluster on its own path segment must set an explicit `href`.** Slug-based path inference
  in `ArticlesClient`/`app/articles/page.tsx` silently points new clusters at `/articles/<slug>`.

## rajya-yojna image weight + missing heroes — 2026-08-04 (branch `fix/rajya-yojna-image-weight-and-missing-heroes`)
- **Budget: every image under `public/images/articles/rajya-yojna/` must be WebP ≤ 80 KB.** 19 of 25
  existing files were over (worst: 266 KB). Fixed by re-encoding at reduced quality with dimensions
  preserved (1200x675 hero / 1200x800 body). 16 fit on quality alone (q 50-78); three
  high-detail crop photos (wheat-harvest-mp, vidarbha-cotton-farmer, paddy-per-acre-farming) needed a
  0.7-1.0px Gaussian pre-blur before q46-56 would fit — noise is what blows up WebP size.
- **The 4 stub articles had zero images.** Added one generated realistic 1200x675 `hero.webp` each
  (krishak-bandhu, odisha-cm-kisan, pm-kisan-pati-patni, state-kisan-yojana-list), wired the same
  `Fig` helper + `next/image` the live bodies use, and set `ogImage` in `lib/rajya-yojana-data.ts`.
  The 5 live articles had NO broken refs — every referenced file existed on disk.
- **Build on `main` was broken** by PRs #37-#41: `caption="... \"quoted\" ..."` — backslash-escaped
  quotes are not valid inside a JSX string attribute (TS1127 / "Expected '</'"). Two files
  (MpKisanKalyanYojanaKist, RajasthanKisanSammanNidhi9000). Fixed to `caption={'... "quoted" ...'}`.
  **Never use `\"` in a JSX attribute — switch to a braced JS string.**
- Verified: `npx tsc --noEmit` clean, `env -u NODE_OPTIONS npx next build --webpack` succeeded, and
  each of the 4 prerendered `.next/server/app/rajya-yojana/<slug>.html` has exactly one `<h1>` plus
  its hero ref.

## Content work 2026-08-04 (pushed straight to `main`)
- **Thin rajya-yojana stubs expanded** — the two remaining 230-word STUB bodies:
  - `pm-kisan-pati-patni-dono-ko-milega` → ~2,060 words + new
    `tools/PmKisanFamilyChecker.tsx` (family unit → valid claims / annual amount /
    refund risk / next steps). Covers family-as-beneficiary rule, partition cases,
    family-level exclusion list, voluntary surrender + refund flow. Article + FAQPage JSON-LD.
  - `state-kisan-yojana-list-all-states-2026` → ~2,000 words + new
    `tools/StateYojanaFinder.tsx` (per-state central+state annual maths: flat /
    per-acre with cap+floor / cultivator-vs-landless tracks, portal + deep link).
    Hub table links all seven state detail articles.
- **No new figures invented.** Every ₹ amount in the hub + finder mirrors the
  matching state article (AP ₹14,000; MH ₹6,000; RJ ₹3,000 confirmed; MP ₹1,000
  verified; TG ₹10,000/acre cap 5; WB ₹10,000/acre floor ₹4,000; OD ₹4,000
  cultivator / ₹12,500 landless). PM Kisan flat ₹6,000 (3 × ₹2,000).
- All 9 rajya-yojana articles are now 1,850+ words; no stubs left in that cluster.

## Gotchas learned 2026-08-04
- **`npm run build` (Turbopack) fails in this sandbox** on `app/globals.css`
  (`PostCssTransformedAsset::process` → spawned worker can't connect back). It fails on a
  clean HEAD too, so it is NOT a code defect. Use `npx next build --webpack` to verify —
  that completes and prerenders all `/rajya-yojana/[slug]` pages.
- **`npm run build` runs `scripts/update-article-dates.js` first**, which rewrites
  `lib/articles-data.ts` and leaves `lib/articles-data.ts.backup-<ts>` files behind.
  Revert that file and delete the backups before committing, or unrelated date churn
  lands in the commit.

## Soft-404 shells were indexable — fixed 2026-08-04 (branch `fix/soft-404-noindex-metadata`)
Crawl 2026-08-04 19:06 = health 100/100, 358 pages, 0 broken, 0 Critical. Only 6 of 173 issue-types
had any affected pages, and 5 were confirmed do-not-fix (see the false-positive list). Chasing the
6th (H1 missing, 1 page) surfaced a **site-wide template defect Ahrefs only sampled once**:

**Every unknown slug on all four dynamic routes returned HTTP 200 + `robots: index, follow` + zero
`<h1>`** — an indexable soft-404. Live proof before the fix:
| URL | code | robots | h1 |
|---|---|---|---|
| `/articles/zzz-does-not-exist-xyz` | 200 | `index, follow` | 0 |
| `/maandhan/zzz-nope-xyz` | 200 | `index, follow` | — |
| `/rajya-yojana/zzz-nope-xyz` | 200 | `index, follow` | — |
| `/articles/category/zzz-nope-xyz` | 200 | `index, follow` | — |
| `/zzz-nope-xyz` (top-level control) | **404** | **noindex** | ok |

**Root cause:** each `generateMetadata` returned a bare `{ title: 'Not Found' }` for an unknown slug.
The body then calls `notFound()`, but **the route's own `generateMetadata` still wins over
`app/not-found.tsx`'s `robots: {index:false}`** — so the 404 shell shipped as indexable. The
top-level 404 was fine precisely because it has no competing `generateMetadata`.

**Fix:** added `robots: { index: false, follow: true }` to the unknown-slug return in all four:
`app/articles/[slug]/page.tsx`, `app/maandhan/[slug]/page.tsx`,
`app/rajya-yojana/[slug]/page.tsx`, `app/articles/category/[category]/page.tsx`.
Nothing else touched — no titles, no redirects, no data.

Verified: `npx tsc --noEmit` clean; `env -u NODE_OPTIONS npx next build --webpack` succeeded; all real
article/maandhan/rajya-yojana/category prerenders still carry `index, follow` + exactly one `<h1>`
(checked in `.next/server/app/**`), so no live page was deindexed.

### Gotchas
- **`generateMetadata` beats `app/not-found.tsx` for `robots`.** Returning a title-only object from a
  dynamic route's `generateMetadata` silently makes that route's 404 shell indexable. Any new dynamic
  route MUST return `robots: { index: false, follow: true }` on its not-found branch.
- **A `notFound()` call does NOT guarantee a noindex response.** Check the rendered `<meta name="robots">`,
  not the presence of `notFound()`.
- **`npx next start` on a local port is NOT reachable in this sandbox** (curl gets code 000 even though
  the server logs "Ready"). Verify prerendered HTML in `.next/server/app/**` instead; that's the gate.
- **Ahrefs under-reports this class of bug.** It flagged exactly ONE soft-404 URL (as "H1 tag missing or
  empty" + "Noindex follow page") because that was the only bad slug still linked at crawl time. The
  template was broken for *every* unknown slug on 4 routes. When you see a single H1-missing notice,
  probe the route with a junk slug before calling it a one-page issue.
- The 4 ghost `/articles/pm-kisan-pati-patni-dono-ko-milega` inlinks that caused the flagged URL were
  ALREADY fixed in commit `2434209` (#46) — repo has zero `/articles/` refs and the 4 live source pages
  return 0 hits. The 2026-08-04 crawl predates that deploy. Nothing extra to fix there.

## Fixes applied 2026-08-04 — rajya-yojana scheme amounts (PR #61, branch `fix/rajya-yojana-scheme-amounts`, push-only — owner merges)
Content audit of the 9 `/rajya-yojana/*` articles (asked: AI-uniform? duplicate? safe to index?).
**Duplication + AI-uniformity came back CLEAN** — highest pairwise 6-gram containment 6.6%, zero
sentences repeated across 3+ articles, 2,200-3,928 words each, no AI-tell phrases, H2 order differs
per article with state-specific sections (Girdawari/Jan Aadhaar/7-12 Utara/EPIC/guntas/CCRC/KALIA).
Technical SEO clean too (canonical, hreflang, 3-node JSON-LD, titles 45-56, all images resolve on disk).
So the only real defects were **factual**:
- **MP CM Kisan Kalyan amount** — documented as ₹1,000/yr (total ₹7,000). Actual: **₹6,000/yr, 3 × ₹2,000**
  (started at ₹4,000 in 2020, raised to ₹6,000), total ₹12,000 with PM Kisan. Worse, the article's warning
  box told readers the ₹4,000/₹6,000 figures were "purane ya galat" — actively arguing against the truth.
  Fixed in 6 places incl. both comparison tables.
- **Rythu Bharosa rate** — documented as ₹10,000/acre/yr (₹5,000/season). Actual since the 26 Jan 2025
  relaunch: **₹12,000/acre/yr (₹6,000/season)** per three telangana.gov.in district portals. Recomputed
  the gunta worked example (2.5 acre → ₹15,000/season).
- **Removed an invented "5 acre cap"** (+ its ₹25,000/season ceiling) from the Rythu article. No official
  source supports an acre cap; the real restriction is **cultivable land only** (satellite mapping /
  Bhu Bharati), which IS the actual change from Rythu Bandhu. Fixed the prose that framed the cap as
  the headline change.
- **StateKisanYojanaHub table + StateYojanaFinder calculator** carried both wrong rates — a farmer
  entering their land got a wrong payout. `capAcres` is now optional (Telangana none; WB floor logic
  untouched).
- **Related-link anchor text** in `app/rajya-yojana/[slug]/page.tsx` rendered `path.split('/').pop()`
  (`PmKisanMasterGuide2026`); now resolves the real title via `getArticleBySlug` with slug fallback.
- `modified` bumped ONLY on the 3 edited articles.

## Gotchas learned 2026-08-04
- **Correct values for this cluster** (use these, don't re-derive): MP Kisan Kalyan = ₹6,000/yr state
  (3 × ₹2,000), total ₹12,000. Rythu Bharosa = ₹12,000/acre/yr (₹6,000 × 2 seasons), no acre cap,
  cultivable land only, paddy bonus ₹500/quintal separate. Rajasthan MKSN = ₹3,000/yr state (total
  ₹9,000); the ₹12,000 figure is announcement-only and must stay labelled as such.
- **Audit the warning/InfoBox copy, not just tables.** The MP article's worst defect was a confident
  debunk of a TRUE fact — a bare wrong number is less damaging than telling farmers the truth is a rumour.
- **A fabricated constraint grows a narrative.** The invented 5-acre cap had spread into `capAcres` in
  the calculator, a comparison-table row, an InfoBox, and the "sabse badi tabdeeli" prose. When removing
  an unsourced number, grep it across `components/articles/**/tools/` and the hub page too.
- **Article-level number fixes MUST be grepped against `tools/`.** Four rajya-yojana articles embed
  interactive calculators that recompute amounts from hardcoded rates; fixing prose alone leaves the
  tool lying to the user.
- **Don't stagger `published` dates to look less machine-generated.** `git log --diff-filter=A` showed
  all 9 articles landed in ONE commit — inventing distinct publish dates would be fabrication. Bump
  `modified` only where content actually changed.
- **Duplication must be measured on extracted text, not raw .tsx.** Comparing files directly inflates
  similarity via shared imports/classNames. Extract JSX text nodes + long string literals first, then
  6-gram shingles + containment. Near-duplicate territory starts ~40-50% containment; this cluster is at 6.6%.
- **`npm install --no-save --no-package-lock`** works (needs registry.npmjs.org allowlisted); `npm ci`
  still fails on the out-of-sync lock. `npx tsc --noEmit` is the gate — it passed without touching dates.
