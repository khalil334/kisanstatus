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
