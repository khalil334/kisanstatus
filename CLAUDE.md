┌─────────────────────────────────────────────────────────────────────────────┐
│  🐛 DEEP ANALYSIS BUGS — KisanStatus.com                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  🔴 CRITICAL BUGS                                                           │
│                                                                             │
│  1. Maandhan Article Pages — Schemas Missing                               │
│     → Location: /maandhan/[slug] pages (live site)                        │
│     → Problem: Sirf FAQPage schema hai. Article, WebPage, BreadcrumbList  │
│       schemas code mein hain lekin HTML mein render nahi ho rahe.           │
│     → Impact: Google rich snippets nahi dikhayega maandhan pages ke liye  │
│                                                                             │
│  2. Calculator Pages — Duplicate Schemas                                    │
│     → Location: /calculator/quick-status-check (aur shayad sab calculator) │
│     → Problem: 2× WebApplication + 2× BreadcrumbList schemas               │
│     → Impact: Search engines confused ho sakte hain                         │
│                                                                             │
│  3. Article Pages — Excessive Duplicate Schemas                             │
│     → Location: /articles/[slug] pages                                       │
│     → Problem: 5× Article, 3× WebPage, 2× BreadcrumbList, 2× FAQPage       │
│     → Impact: Schema bloat, Google ignore kar sakta hai excess schemas      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  🟡 MEDIUM BUGS                                                             │
│                                                                             │
│  4. X-Frame-Options Mismatch                                                │
│     → Location: next.config.js vs Live Headers                              │
│     → Problem: Config mein 'DENY' hai, lekin live site 'SAMEORIGIN' bhej   │
│       raha hai (Vercel ya koi middleware override kar raha hai)             │
│                                                                             │
│  5. Title / H1 Mismatch (SERP Rewrite Risk)                                 │
│     → Location: /articles/PmKisan24viKist2026, /rajya-yojana/*              │
│     → Problem: Title: "PM Kisan 24vi Kist — Kab Aayegi? | KisanStatus"     │
│       H1: "PM Kisan 24vi Kist Kab Aayegi? October 2026 Release Date..."     │
│     → Impact: Google title ko ignore karke apna SERP title banayega         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  🟢 LOW / SUGGESTIONS                                                       │
│                                                                             │
│  6. Article Schema Count Excessive                                          │
│     → 7 schemas per article page bahut zyada hain. Ideal: 3-4 max           │
│                                                                             │
│  7. Maandhan Schema Build Code Exists But Not Rendering                     │
│     → app/maandhan/[slug]/page.tsx mein schemas build hain lekin            │
│       dangerouslySetInnerHTML mein JSON.stringify ke baad HTML mein        │
│       nahi aa rahe — possible RSC payload issue ya build bug               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
