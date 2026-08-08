┌─────────────────────────────────────────────────────────────────────────────┐
│  🐛 BUGS — KisanStatus.com (status as of 2026-08-08)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. ✅ NO CODE CHANGE NEEDED — Sitemap priorities all 1.0 on LIVE site      │
│     → app/sitemap.ts already uses role-based tiers (1.0/0.9/0.8/0.7/       │
│       0.6/0.3). Live site is a stale deploy — redeploy to fix.             │
│                                                                             │
│  2. ✅ NO CODE CHANGE NEEDED — Sitemap lastModified same for ALL articles   │
│     → lib data already has varied per-article modified dates (Aug 6–8).    │
│       Live site is a stale deploy — redeploy to fix.                       │
│                                                                             │
│  3. ✅ FIXED — Search page broken (placeholder only)                        │
│     → app/search/page.tsx now renders real results for ?q= via             │
│       app/search/SearchResults.tsx (searches articles + maandhan +         │
│       rajya-yojana data).                                                   │
│                                                                             │
│  4. ✅ FIXED — Maandhan articles missing from Header search                 │
│     → components/Header.tsx SEARCH_INDEX now includes all 14               │
│       MAANDHAN_ARTICLES entries.                                            │
│                                                                             │
│  5. ✅ FIXED — Missing WebSite schema on homepage                           │
│     → app/page.tsx now emits a WebSite node (@id ${SITE_URL}#website)      │
│       that the existing WebPage isPartOf reference points at.              │
│                                                                             │
│  6. ❌ NOT A BUG — OG image path "pmfhero.webp"                             │
│     → public/images/kisanguides/pmfhero.webp EXISTS; there is no           │
│       pmfme-hero.webp. Renaming would break the OG image. No change.       │
│                                                                             │
│  7. ✅ NO CODE CHANGE NEEDED — Copyright "© 2024-2026KisanStatus"           │
│     → components/Footer.tsx renders `© {years} {SITE_NAME}` with a         │
│       space. Live site is a stale deploy — redeploy to fix.                │
│                                                                             │
│  8. ✅ NO CODE CHANGE NEEDED — /search URL in sitemap                       │
│     → app/sitemap.ts does not include /search. Live site is a stale        │
│       deploy — redeploy to fix.                                            │
│                                                                             │
│  9. ✅ FIXED — SearchAction schema points to broken /search page           │
│     → /search?q= now works (bug #3), and SearchAction moved from the       │
│       WebPage node to the new WebSite node where Google reads it.          │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  Verified with: tsc --noEmit ✓, eslint ✓, next build ✓ (2026-08-08)        │
│  Remaining action: trigger a fresh production deploy so bugs 1/2/7/8       │
│  clear on the live site, then re-check in browser:                         │
│    /sitemap.xml · /search?q=pm+kisan · homepage JSON-LD · footer ©         │
└─────────────────────────────────────────────────────────────────────────────┘
