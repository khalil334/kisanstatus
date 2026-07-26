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

## Fixed so far (Warning pass — branch `fix/warning-seo-issues`, PR pending)
- **OG URL ≠ canonical (6 maandhan pages):** `app/maandhan/[slug]/page.tsx` had no `openGraph` block → inherited homepage `og:url`. Added a per-page `openGraph` (url/title/description/siteName/locale=article/images from `article.ogImage`), mirroring `app/articles/[slug]`. One template edit covers all 6.
- **OG tags incomplete (5 static pages):** privacy-policy, terms-of-service, disclaimer, about, contact each set `openGraph` WITHOUT `images` → missing `og:image`. Added `images:[{DEFAULT_OG_IMAGE,1200x630,webp}]` to each.
- **Links to redirect (5) + 3XX inlinks:** repointed internal `<Link>`s to their final URLs — `/beneficiary-list` → `/articles/PmKisanBeneficiaryList2026` (in PmKisanLandSeedingForm, PmKisanRejectedStatusReApplyGuide, PmKisanFaceAuthenticationEkyc, PmKisanMaandhanYojanaPension); `/articles/farming/pm-fme-yojana-food-processing` → `/articles/pm-fme-yojana-food-processing` (SilageMaking, 2 links). NOTE: www/http→https 308s are correct canonical infra — left alone.
- **Noindex page `/articles/tractor-subsidy-scheme`:** that slug doesn't exist → renders 404 (noindex) at HTTP 200. Root cause was a broken link in `MushroomKheti.tsx`; repointed to real article `/articles/KisanTractorLoan2026` + relabeled card "Tractor Loan 2026".
- **Title too long (6 maandhan):** shortened `title` values in `lib/maandhan-data.ts` to land 49–57 chars incl. the ` | KisanStatus` layout suffix.
- **Meta description too long (2):** trimmed `desc` in `lib/articles-data.ts` for PmKisanCorrectionForm2026 (172→126) and PmKusumYojanaSolarSubsidy2026 (178→133).

## Notes for future fixes
- **Metadata inheritance gotcha:** any App Router template/page that sets `openGraph` must set `og:url` + `images` explicitly, else it inherits the homepage OG from `app/layout.tsx` (`og:url = SITE_URL`, generic og-image). This is what caused both OG warnings.
- `PMFMEYojana.tsx` still hardcodes `/articles/farming/pm-fme-yojana-food-processing` in its OWN canonical + schema `@id` strings (lines ~26/43/63+). Ahrefs did NOT flag these (they're not `<Link>` anchors); left untouched per scope. Revisit if a future crawl flags a canonical/self-reference issue.

## Still outstanding (NOT in this Warning pass)
- Notice: schema.org validation errors (65 pages) — Step 4.
- Notice: multiple H1 (4), page/SERP title mismatch (4), one-dofollow-inlink orphans (10), redirect chain (1), H1 missing (1), noindex-follow (1), HTTP→HTTPS (2). Slow page (1) — perf, investigate.
- Notice: Pages to submit to IndexNow (62) — not a code fix; enable IndexNow in Ahrefs Project Settings.
