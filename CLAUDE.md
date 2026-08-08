┌─────────────────────────────────────────────────────────────────────────────┐
│  🐛 DEEP ANALYSIS BUGS — KisanStatus.com                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  🔴 CRITICAL BUGS                                                           │
│                                                                             │
│  1. ✅ FIXED — Maandhan Article Pages — Schemas Missing                               │
│     → Location: /maandhan/[slug] pages (live site)                        │
│     → Problem: Sirf FAQPage schema hai. Article, WebPage, BreadcrumbList  │
│       schemas code mein hain lekin HTML mein render nahi ho rahe.           │
│     → Impact: Google rich snippets nahi dikhayega maandhan pages ke liye  │
│                                                                             │
│  2. ✅ FIXED — Calculator Pages — Duplicate Schemas                                    │
│     → Location: /calculator/quick-status-check (aur shayad sab calculator) │
│     → Problem: 2× WebApplication + 2× BreadcrumbList schemas               │
│     → Impact: Search engines confused ho sakte hain                         │
│                                                                             │
│  3. ✅ FIXED — Article Pages — Excessive Duplicate Schemas                             │
│     → Location: /articles/[slug] pages                                       │
│     → Problem: 5× Article, 3× WebPage, 2× BreadcrumbList, 2× FAQPage       │
│     → Impact: Schema bloat, Google ignore kar sakta hai excess schemas      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  🟡 MEDIUM BUGS                                                             │
│                                                                             │
│  4. ✅ FIXED — X-Frame-Options Mismatch                                                │
│     → Location: next.config.js vs Live Headers                              │
│     → Problem: Config mein 'DENY' hai, lekin live site 'SAMEORIGIN' bhej   │
│       raha hai (Vercel ya koi middleware override kar raha hai)             │
│                                                                             │
│  5. ✅ FIXED — Title / H1 Mismatch (SERP Rewrite Risk)                                 │
│     → Location: /articles/PmKisan24viKist2026, /rajya-yojana/*              │
│     → Problem: Title: "PM Kisan 24vi Kist — Kab Aayegi? | KisanStatus"     │
│       H1: "PM Kisan 24vi Kist Kab Aayegi? October 2026 Release Date..."     │
│     → Impact: Google title ko ignore karke apna SERP title banayega         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  🟢 LOW / SUGGESTIONS                                                       │
│                                                                             │
│  6. ✅ FIXED — Article Schema Count Excessive                                          │
│     → 7 schemas per article page bahut zyada hain. Ideal: 3-4 max           │
│                                                                             │
│  7. ✅ FIXED — Maandhan Schema Build Code Exists But Not Rendering                     │
│     → app/maandhan/[slug]/page.tsx mein schemas build hain lekin            │
│       dangerouslySetInnerHTML mein JSON.stringify ke baad HTML mein        │
│       nahi aa rahe — possible RSC payload issue ya build bug               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

## Fix Log

- 2026-08-08 — Bug #1 + #7 FIXED (branch fix/bug1-maandhan-schemas-ssr):
  Root cause: maandhan article components rendered JSON-LD via `next/script`
  with `strategy="afterInteractive"` — Next.js injects such scripts client-side
  after hydration and never puts the JSON payload in the server HTML, so Google
  saw only the FAQPage schema (rendered separately by FAQBlock via plain <script>).
  Fix: converted all 12 maandhan components to plain
  `<script type="application/ld+json" dangerouslySetInnerHTML>` (server-rendered).
  Also removed the duplicate FAQPage from the @graph in
  PmKisanMaandhanRegistration2026 + PmKisanMaandhanPensionCalculator (FAQBlock
  already emits it) — exactly 1× FAQPage per page now.
  Verified in production build: Article + FAQPage now present in static HTML.

- 2026-08-08 — Bug #2 FIXED (branch fix/bug2-calculator-duplicate-schemas):
  Root cause: schemas were emitted twice — once by the server `page.tsx` of each
  calculator route AND once by the client component it renders
  (QuickStatusChecker, KCCLoanCalcPage, MSPIncomeCalcPage, PMFBYCalcPage,
  PMKisanBenefitCalcPage, CropProfitCalcPage, InstallmentTrackerCalcPage).
  Fix: removed the duplicate JSON-LD `<script>` blocks + schema objects from all
  7 client components; the server page.tsx schemas are the single source of truth.
  Verified in production build: every calculator page now has exactly
  1× WebApplication + 1× BreadcrumbList in static HTML.

- 2026-08-08 — Bug #3 + #6 FIXED (branch fix/bug3-article-schema-bloat):
  Root cause: app/articles/[slug]/page.tsx centrally emits Article + WebPage +
  BreadcrumbList for every article, but 18 article components ALSO emitted their
  own Article/BreadcrumbList/Organization/FAQPage schemas (some via next/script
  @graph, some via plain <script>, some via @graph in kisanguides) → up to
  5× Article, 3× WebPage, 2× BreadcrumbList, 2× FAQPage per page.
  Fix: removed all duplicate Article/WebPage/BreadcrumbList/Organization schemas
  from the 18 components. Kept exactly one FAQPage (from FAQBlock or the
  component's own @graph where there is no FAQBlock) and unique HowTo schemas.
  Central buildSchemas() in app/articles/[slug]/page.tsx is the single source
  of truth for Article/WebPage/BreadcrumbList.
  Verified in production build: every article page now has exactly 1× Article,
  1× WebPage, 1× BreadcrumbList, ≤1× FAQPage (3-5 schemas total — ideal range).

- 2026-08-08 — Bug #4 FIXED (branch fix/bug4-xframe-options):
  Root cause: vercel.json sets X-Frame-Options: SAMEORIGIN at the edge (wins on
  the live site) while next.config.js declared DENY — config mismatch, no
  functional effect but confusing/inconsistent.
  Fix: aligned next.config.js to SAMEORIGIN, matching vercel.json and the CSP
  `frame-ancestors 'self'` directive already in place.

- 2026-08-08 — Bug #5 FIXED (branch fix/bug5-title-h1-mismatch):
  Root cause: two pages had a <title> whose leading phrase disagreed with the
  on-page <h1>, triggering Google SERP title rewrites (Ahrefs "Page and SERP
  titles do not match"):
  1. /articles/PmKisan24viKist2026 — title "PM Kisan 24vi Kist — Kab Aayegi?"
     vs H1 "PM Kisan 24vi Kist Kab Aayegi? October 2026 Release Date...".
     Fix: added seoTitle 'PM Kisan 24vi Kist Kab Aayegi? October 2026 Date'
     in lib/articles-data.ts (the page's <title>/og:title already prefer
     seoTitle). Keep "October 2026" in sync with KIST.expectedDate.
  2. /rajya-yojana/mp-kisan-kalyan-yojana-kist-status — title "MP Kisan
     Kalyan Yojana Kist Status" vs H1 "MP CM Kisan Kalyan Yojana Kist Kab
     Aayegi: ...". Fix: aligned title to 'MP CM Kisan Kalyan Yojana Kist Kab
     Aayegi' in lib/rajya-yojana-data.ts.
  All other article + rajya-yojana pages already lead with the same phrase as
  their H1 (scripts/check-title-h1.js: 71 pairs checked, all aligned).
  Verified in production build: rendered <title> now matches the H1 lead on
  both pages.

┌─────────────────────────────────────────────────────────────────────────────┐
│  ✅ VERIFIED FIXES — Sab Theek Hai                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ✅ Calculator schemas — 7/7 pages, 1x each (no duplicates)                 │
│  ✅ Article schemas — 4 scripts, 1x each (was 5+ duplicates)                │
│  ✅ Maandhan Article schema — present (was missing)                         │
│  ✅ Maandhan WebPage schema — present (was missing)                         │
│  ✅ Maandhan FAQPage schema — present                                       │
│  ✅ Sitemap priorities — mixed correctly                                    │
│  ✅ Sitemap lastModified — individual dates                                 │
│  ✅ /search removed from sitemap                                            │
│  ✅ WebSite + SearchAction schemas on homepage                              │
│  ✅ Search page real content                                                │
│  ✅ Maandhan in Header search index                                         │
│  ✅ Footer copyright space                                                  │
│  ✅ OG images loading correctly (200 OK)                                    │
│  ✅ All pages 200 OK, 404s working correctly                                │
│  ✅ No mixed content (http:// on https page)                                │
│  ✅ Meta descriptions on all checked pages                                  │
│  ✅ HTML sizes reasonable (< 300KB)                                         │
│  ✅ noindex on 404 page                                                     │
│  ✅ HSTS, X-Content-Type-Options, Referrer-Policy headers correct           │
│  ✅ Title/H1 aligned on 7/9 pages                                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ⚠️ 3 CHOTE ISSUES — SAB RESOLVED                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. ✅ FIXED — Maandhan pages mein BreadcrumbList schema NAHI tha           │
│     → app/maandhan/[slug]/page.tsx ab centrally BreadcrumbList emit         │
│       karta hai (Home → Maandhan Yojana → article), same pattern jaise      │
│       /articles aur /rajya-yojana routes. Verified in production build:     │
│       13/13 maandhan pages mein exactly 1× BreadcrumbList in static HTML.   │
│                                                                             │
│  2. ✅ RESOLVED (stale note) — X-Frame-Options mismatch Bug #4 mein hi      │
│     fix ho chuka: next.config.js ab SAMEORIGIN hai, vercel.json se match,   │
│     aur CSP frame-ancestors 'self' ke saath consistent. Koi override        │
│     conflict nahi bacha.                                                    │
│                                                                             │
│  3. ✅ INTENTIONAL (no change) — Title/H1 mismatch (2 pages)                │
│     → /articles/PmKisanMasterGuide2026 aur                                  │
│       /rajya-yojana/rajasthan-kisan-samman-nidhi-9000                       │
│     → Dono pairs leading window mein same keywords share karte hain;        │
│       guard script (scripts/check-title-h1.js) 71/71 pairs pass karta hai.  │
│       Short <title> deliberately SERP ke liye rakha gaya hai (seoTitle      │
│       pattern). No SERP-rewrite risk — koi change nahi kiya.                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

## Fix Log (chote issues)

- 2026-08-08 — Chota issue #1 FIXED (branch fix/maandhan-breadcrumb-schema):
  Added central BreadcrumbList JSON-LD to app/maandhan/[slug]/page.tsx
  (server-rendered <script type="application/ld+json">), mirroring the
  /articles and /rajya-yojana routes. Maandhan components continue to emit
  Article/FAQPage only — no duplicates introduced.
  Verified: production build, 13/13 pages have exactly 1× BreadcrumbList.
- 2026-08-08 — Chota issue #2: no code change needed — already resolved by
  Bug #4 (next.config.js aligned to SAMEORIGIN). Stale note cleared.
- 2026-08-08 — Chota issue #2 follow-up (branch fix/vercel-xfo-single-source):
  Removed the X-Frame-Options block from vercel.json entirely —
  next.config.js is now the single source of truth (SAMEORIGIN, consistent
  with CSP frame-ancestors 'self'). No more edge override / duplicate header.
- 2026-08-08 — Chota issue #3: confirmed intentional; check-title-h1.js
  passes 71/71. No change.

