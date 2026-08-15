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
