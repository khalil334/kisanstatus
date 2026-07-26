# Kisanstatus — Ahrefs Site Audit fix notes

Ahrefs Site Audit project: **10042735** (target `kisanstatus.com/`, subdomains scope, verified).

## Tech stack
- **Next.js 16 App Router + TypeScript**, deployed on **Vercel**. Tailwind CSS.
- No CMS/database — all page content is in-repo (React components + TS data files).

## Content structure (important for fixes)
- Regular articles: route `/articles/<slug>` → `app/articles/[slug]/page.tsx`; data in `lib/articles-data.ts`.
- **Maandhan articles: route `/maandhan/<slug>`** (NOT `/articles/maandhan/`) → template `app/maandhan/[slug]/page.tsx`; data in `lib/maandhan-data.ts`; bodies are one component each in `components/articles/maandhan/`.
- Sitemap: `app/sitemap.ts` (maps maandhan articles to `/maandhan/<slug>`). Robots: `app/robots.ts`.
- Images live in `public/images/articles/maandhan/`. Referenced with `/images/...` absolute paths.

## Canonical pattern
- Root layout (`app/layout.tsx`) sets `alternates.canonical = SITE_URL` (homepage) as the default.
- **Every page/template must set its own self-referencing canonical** or it inherits the homepage one → "non-canonical page in sitemap". `app/articles/[slug]` and static pages do this; `app/maandhan/[slug]` did NOT until fixed (PR #7).
- `SITE_URL` exported from `lib/site-config.ts`.

## Known false-positive / gotchas
- Common bug pattern: internal links written as `/articles/maandhan/...` (old path) → 404. Correct path is `/maandhan/...`. Check any new maandhan links.

## Fixed so far
- PR #7 (branch `fix/tier1-critical-seo`): corrected 3 bad `/articles/maandhan/*` links in `PmKisanMaandhanStatusCheckOnline.tsx`; added self-canonical to `app/maandhan/[slug]/page.tsx`.

## Internal-linking pattern (for orphan fixes)
- Each article body component has a `const RELATED = [...]` array rendered by `RelatedArticles` (`components/ArticleShared.tsx`) as real `<Link href="/articles/<slug>">` anchors — THIS is what creates crawlable internal links.
- `relatedSlugs` in `lib/articles-data.ts` only feeds JSON-LD `mentions`, NOT visible links — adding there does NOT fix orphan pages.
- A few components use `RELATED_CARDS` instead of `RELATED` (PmKisanEkycOnline2026, PmKisanPaymentFailedFix2026, PmKisanStateNodalOfficerList) — different shape (has `desc`).
- Static pages (e.g. terms-of-service) get linked from `components/Footer.tsx` Quick Links.

## Fixed so far
- PR #7 (branch `fix/tier1-critical-seo`): corrected 3 bad `/articles/maandhan/*` links in `PmKisanMaandhanStatusCheckOnline.tsx`; added self-canonical to `app/maandhan/[slug]/page.tsx`.
- PR #8: internal links to PM FME Yojana article.
- Broken image `csc-registration-process.webp`: re-uploaded by owner in commit c85143f (after the 26 Jul crawl) — should clear on next crawl. Known false-positive if re-reported before re-crawl.
- Branch `fix/orphan-pages-internal-links`: added RELATED entries linking all 10 orphan articles from topically-close hub articles (MasterGuide, 24viKist, BeneficiaryList, CorrectionForm, RejectedStatus, KisanRin, TractorLoan) + terms-of-service added to Footer Quick Links.

## Outstanding
- Warning: Open Graph URL ≠ canonical (6 pages) + OG tags incomplete (5 pages) — template fix, Step 3.
- Notice: schema.org validation errors (65 pages) — Step 4.
- Minor: title too long (6), links to redirect (5), meta description too long (2), multiple H1 (4).
