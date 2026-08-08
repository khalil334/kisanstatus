┌─────────────────────────────────────────────────────────────────────────────┐
│  🐛 BUGS FOUND — KisanStatus.com                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Sitemap priorities all 1.0 on LIVE site (should be mixed: 0.8, 0.7)    │
│     → Location: Live deploy / sitemap.xml                                   │
│                                                                             │
│  2. Sitemap lastModified same for ALL articles (2026-07-19)                │
│     → Location: scripts/update-article-dates.js OR build cache              │
│                                                                             │
│  3. Search page broken — only shows placeholder redirect                   │
│     → Location: app/search/page.tsx                                         │
│                                                                             │
│  4. Maandhan articles missing from Header search                            │
│     → Location: components/Header.tsx (SEARCH_INDEX)                       │
│                                                                             │
│  5. Missing WebSite schema on homepage                                     │
│     → Location: app/page.tsx                                               │
│                                                                             │
│  6. OG image path typo: "pmfhero.webp" (should be "pmfme-hero.webp")       │
│     → Location: lib/articles-data.ts (PMFMEYojana entry)                   │
│                                                                             │
│  7. Copyright text missing space: "© 2024-2026KisanStatus"               │
│     → Location: components/Footer.tsx                                      │
│                                                                             │
│  8. /search URL in sitemap despite noindex header                         │
│     → Location: app/sitemap.ts                                             │
│                                                                             │
│  9. SearchAction schema points to broken /search page                      │
│     → Location: app/page.tsx (homepage JSON-LD)                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
