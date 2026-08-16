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

## Ahrefs issue: Meta description too long (c64d56c9, fixed 2026-08-16)
- 7 Hindi article pages flagged (metaDescriptionLength > 160). All meta
  descriptions for /articles/hi/* come from the `desc` field in
  lib/hindi-rajya-yojana-data.ts (consumed by app/articles/hi/[slug]/page.tsx
  generateMetadata). One data file = the whole fix.
- Fix pattern: trim `desc` to 110-160 chars, preserving the hook + key numbers;
  cut trailing "— सब एक जगह" style filler and one secondary clause first.
- Note: Hindi matras/combining marks count as chars in Python len() the same
  way Ahrefs counts them — lengths verified to match the crawl exactly.

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
