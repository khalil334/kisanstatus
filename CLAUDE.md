# Notes for AI agents working on kisanstatus

#Tech stack
- Next.js (App Router) + TypeScript + Tailwind. Deployed on Vercel.
- Article routes: `app/maandhan/[slug]/page.tsx`, `app/rajya-yojana/[slug]/page.tsx`,
  `app/articles/[slug]/page.tsx` — each route template emits Article + BreadcrumbList
  (+ WebPage on articles/rajya-yojana) JSON-LD.
- Per-article content components live in `components/articles/<section>/*.tsx`.
- Shared FAQ renderer: `components/ArticleShared.tsx` `FAQBlock` — emits its own
  FAQPage JSON-LD. Do NOT add a second FAQPage in article components.

## Structured data conventions
- `breadcrumb` property belongs ONLY on a WebPage node, never on Article
  (schema.org domainIncludes=WebPage). Each page already has a standalone
  BreadcrumbList block with `@id: <url>#breadcrumb`.
- `inLanguage` is valid on CreativeWork types (Article, FAQPage, HowTo, WebPage)
  but NOT on ItemList.
- Avoid duplicate schema: route templates own Article schema; components must not
  re-emit Article/FAQPage via `@graph` blocks (removed 2026-08 — 13 maandhan
  components had these).
- Footer has site-wide ContactPoint microdata (itemProp/itemScope) in the layout —
  valid, appears on every page; not a per-page issue.

## Ahrefs Site Audit
- Project id 10042735, target kisanstatus.com. Issues fixed so far tracked in PRs
  (#330-#334 range) — check git log for "Ahrefs" commits.

## Ahrefs issue: Page and SERP titles do not match (d69246c2, fixed 2026-08-15)
- 8 pages flagged. Root cause: seoTitle/title in lib/*-data.ts diverged from what
  Google rewrote titles to (Google preferred H1-like / fuller wording).
- Fix pattern: align the data-file title with the SERP-title wording (Google's
  rewrite shows what it trusts). Titles live in lib/core-articles-data.ts,
  lib/rajya-yojana-data.ts, lib/hindi-articles-data.ts (seoTitleHi ?? titleHi),
  lib/loan-mandi-pashupalan-data.ts. Root layout template: `%s | KisanStatus`.
- False-positive class: pages where SERP title == page title minus the
  "| KisanStatus" brand suffix (or "|"→"-" separator swap). Google strips brand
  on long titles — no code fix; left unchanged (karj-mafi-list,
  bihar-kisan-registration-status-check-2026, jansamarth-portal-loan-apply).

## Ahrefs issue: Page and SERP titles do not match — round 2 (2026-08-17)
- 7 pages re-flagged. 4 were pure false positives: SERP title == page title
  with brand suffix stripped or "|"→"-" separator swap (fto-generated,
  mp-kisan-kalyan-kist-status, jansamarth, bihar-dbt — bihar also had a
  "— Kisan Guide" Google-appended tail; left unchanged).
- 3 real fixes (align data-file title with Google's rewrite, keep ≤46 chars):
  - hindi-rajya-yojana-data.ts mp-kisan-kalyan seoTitleHi → include "सालाना";
    Google's full rewrite was 51 chars, so compressed with ":" + "पाएं".
  - hindi-loan-mandi-pashupalan-data.ts karj-mafi-list: added seoTitleHi with
    "देखें" action verb per Google's rewrite (dropped "किसान" to fit budget).
  - core-articles-data.ts PmKisanCscRegistrationCharges seoTitle → match
    ogTitle/H1 wording "CSC Charges — Sahi Fees, Sahi Tarika" (Google's pick).
- Lesson: Google keeps preferring the H1/fuller wording; when writing seoTitle,
  don't diverge from the on-page H1 phrasing just to save chars.

## Ahrefs issue: Meta description too long (c64d56c9, fixed 2026-08-16)
- 7 Hindi article pages flagged (metaDescriptionLength > 160). All meta
  descriptions for /articles/hi/* come from the `desc` field in
  lib/hindi-rajya-yojana-data.ts (consumed by app/articles/hi/[slug]/page.tsx
  generateMetadata). One data file = the whole fix.
- Fix pattern: trim `desc` to 110-160 chars, preserving the hook + key numbers;
  cut trailing "— सब एक जगह" style filler and one secondary clause first.
- Note: Hindi matras/combining marks count as chars in Python len() the same
  way Ahrefs counts them — lengths verified to match the crawl exactly.

## Ahrefs issue: Meta description too long — round 2 (c64d56c9, fixed 2026-08-18)
- 11 pages flagged (161-192 chars). NOT the same set as round 1: this round hit
  Hinglish articles + rajya-yojana, not /articles/hi/*.
- Descriptions are per-article data, never template-generated: `desc` in
  lib/core-articles-data.ts (6) / lib/hindi-yojana-data.ts (1), `description` in
  lib/rajya-yojana-data.ts (3), and inline CATEGORY_DATA in
  app/articles/hi/category/[category]/page.tsx (1). Route templates just pass the
  field to generateMetadata — so a "template fix" never exists for this issue;
  the fix is always copy. Grep the crawled string to find its data file.
- Overflow causes, in frequency order: (1) filler tail — "… yahan",
  "… ki poori guide" after the value is already delivered; (2) restated hook —
  same fact twice ("free hai — ek bhi paisa nahi"); (3) title duplication;
  (4) one benefit clause too many. Trim in that order and 160 is easy to hit.
- ALWAYS check GSC ranking keywords before trimming (ahrefs_gsc.top_keywords,
  scope={project_id}, period={all_time:true} — the per-`page` filter arg returns
  0 rows, so pull site-wide and group by url client-side). Two trims here had to
  be revised: PmfbyCropInsurance2026 ranks pos 6 for "crop insurance" and
  PmKisanBeneficiaryList2026 pos 51/53 for "beneficiary list" — both phrases were
  about to be cut as "title duplication". Only ~40 URLs have any GSC impressions,
  so most flagged pages carry no ranking risk.
- Known over-160 but NOT flagged by the crawl (left alone; likely non-indexable
  or not yet crawled): lib/yojana-2026-data.ts:37 (164) and :61 (195),
  lib/hindi-yojana-2026-data.ts:34 (170),
  app/articles/pm-kisan-land-seeding-form/download/layout.tsx:6 (176).
- Connector gotchas: ahrefs_site_audit.export_many rejects `sort` (schema wants
  'desc', upstream wants 'Desc' — omit it and sort client-side).
  ahrefs_gsc.top_keywords nests args under `scope`/`period` objects.

## Ahrefs warnings batch 2 (fixed 2026-08-16)
- Meta description too short: /articles/hi/category/* descriptions live inline
  in CATEGORY_DATA in app/articles/hi/category/[category]/page.tsx, not in a
  lib data file.
- Title too long: budget is 60 chars INCLUDING the " | KisanStatus" suffix
  (14 chars) from the root layout template — data-file titles must be ≤46 chars.
  Hindi articles: add optional seoTitleHi (generateMetadata uses
  seoTitleHi ?? titleHi).
- "3XX redirect" warning: the three http/www→https 308s are Next/Vercel
  canonical-host redirects (next.config.js host rule + platform). Intentional,
  single-hop — known acceptable finding, do not "fix".

## Ahrefs notices batch (2026-08-16)
- "Page and SERP titles do not match" round 2: fixed FTO article (Google drops
  "Ka") and mp-kisan-kalyan-yojana-kist-status (Google drops "— SAARA Portal";
  its H1/OG come from ogTitle so trimming `title` is safe). The other 5 flagged
  pages were the brand-suffix false-positive class — no change.
- "Pages to submit to IndexNow": site already has its own IndexNow pipeline
  (scripts/build-indexnow-payload.js + submit-indexnow.js, npm run
  indexnow:submit, ledger in scripts/indexnow-state.json). Prefer that over
  Ahrefs' submit_url_to_index_now. Notice is informational, not a defect.
- "HTTP to HTTPS redirect" / "Redirect chain" notices: same intentional
  http/www→https 308 canonical-host redirects; chain is www+http→https(www)→apex,
  2 hops only on the never-linked http://www origin. Acceptable, do not fix.

## Writing style (owner preference, 2026-08-18)
- Content must read like a real person talking to a farmer, not AI/robotic.
- Natural conversational Hinglish/Hindi: short sentences, direct address
  ("bhai", "aap"), real-life examples (kist ka paisa, CSC center, aadhaar link).
- Kill robotic filler: "step-by-step process", "in this article", "comprehensive
  guide", symmetric bullet lists everywhere.
- NO deliberate typos/spelling mistakes — owner suggested them for human feel,
  but they hurt trust + SERP titles (the exact issue we keep fixing). Human feel
  comes from voice and specifics, not errors. Titles/meta must stay clean.

## Ahrefs issue: Slow page (c64d7cbc, fixed 2026-08-18)
- 1 page flagged: /articles — TTFB 1034ms of 1038ms load in crawl; live checks
  showed 100-150ms on edge HIT, so the slow sample was a cache-MISS blocking on
  ISR regeneration (revalidate=3600, region bom1).
- Root cause of expensive regeneration + heavy HTML: the CollectionPage
  ItemList in app/articles/page.tsx embedded a FULL Article object per article
  (author, publisher+logo, image, dates, description) — ~120KB JSON-LD, ~25%
  of the 471KB page. Reduced ListItems to position+url+name (Google's summary
  page pattern); full Article schema stays on each article page.
- Cache headers for /articles were already correct (s-maxage=86400 +
  stale-while-revalidate=86400) — do not "fix" those again.
- Pattern for future Slow page flags: compare crawl TTFB vs live TTFB first;
  a single marginal (~1s) depth-0 page usually means cold-cache ISR regen,
  not a systemic server problem.

## Ahrefs triage round 2026-08-18 (remaining warnings)
- Broken link (3 Criticals: "404 page", "4XX page", "Page has links to broken
  page" — all one root cause): pmkmy-bank-account-change.tsx linked
  /maandhan/pm-kisan-maandhan-YOJANA-auto-debit-poora-sach; real slug has no
  "-yojana" (lib/maandhan-data.ts). Fixed the href; target verified HTTP 200.
- "Meta description too long" (11 pages): STALE CRAWL — all 11 flagged strings
  already gone from repo (fixed in 90b7ecf, round-2 section above). Verified
  current desc lengths all 133-154 chars. No action; clears on re-crawl.
- "Title too long" (8 pages): all overflow only via the " | KisanStatus"
  suffix (base titles 58-65 chars). Deliberately NOT trimmed — the
  title-mismatch rounds proved Google prefers the fuller H1 wording and
  strips the brand suffix itself on long titles. Treat as accepted/known;
  don't "fix" without explicit user ask.
- "3XX redirect" (3 pages): www→apex + http→https normalisation hops —
  correct canonical setup, never a defect.
- Notices left alone: IndexNow custom issue (monitoring), SERP-title
  mismatch (handled rounds 1-2), HTTP→HTTPS / redirect-chain notices.

## Ahrefs issue: Page and SERP titles do not match — round 3 (2026-08-18)
- 8 flagged; 5 real fixes, 3 false positives (brand-suffix/separator class:
  karj-mafi-list, bihar-dbt "— Kisan Guide" Google tail, jansamarth "|"→"-").
- Fixes all followed Google's rewrite: mp-kisan-kalyan seoTitleHi (Hindi),
  fto-generated ("FTO Generated Matlab — PM Kisan Guide"), land-seeding-form
  ("PDF Download" wording), csc-charges ("Registration" added back),
  mp-kisan-kalyan-kist (dropped "— SAARA Portal Check" tail).
- Pattern is now stable across 3 rounds: Google prefers H1-adjacent or
  intent-keyword wording and strips decorative tails. Write seoTitle to the
  head query, ≤46 chars, no tails.
