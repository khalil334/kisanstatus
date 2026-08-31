# Part 3 — Priority Checklist

*Source: [SPAM-HIT-DEEP-ANALYSIS.md](../../SPAM-HIT-DEEP-ANALYSIS.md) ka split hissa. Content unchanged.*

---

## Priority Checklist

- [ ] Content freeze — 4–6 hafte zero naye articles
- [x] Backdated publishedTime → real dates (`lib/*-data.ts`) — *fixed (commit a3fb8b88): pre-launch dates replaced with git first-commit dates*
- [x] Auto lastmod/modifiedTime bump band — *fixed: `update-dates` step build pipeline se hata diya (`package.json`); script ab sirf manual run ke liye hai, har build par blanket modifiedTime bump nahi hoga*
- [ ] Vercel firewall: Googlebot allowed? + GSC live test *(sirf Vercel dashboard se hoga, code se nahi)*
- [ ] GSC Manual Actions check *(sirf Search Console se hoga)*
- [x] GSC page-level audit → keep/rewrite/delete list (107 → ~50) — *audit neeche maujood hai (Page-Level Audit section)*
- [x] 15–18 Aug ke template articles index se bahar — *fixed (commits 72a7f09e + 07d45fb4, 31 Aug): delete ki jagah **noindex + sitemap removal** — kyunki in pages ki dates asli hain, delete karke naye slugs banana date-fabrication pattern dobara chhed sakta tha; noindex reversible hai. 20 pages noindexed in recovery: `lib/yojana-2026-data.ts` (6), `lib/hindi-yojana-2026-data.ts` (5), `lib/hindi-rajya-yojana-data.ts` (7), `lib/hindi-kisanguides-data.ts` (1 — hi/namo-drone-didi), `lib/core-articles-data.ts` (1 — fto-status-check; PmKisan25viKist2027 pehle se hi noindex tha, commit c04f19ea). FTO copy ko 301 bhi mila (`next.config.js`) apne original par. `hi/kisan-karj-mafi-list` ko wapas indexed kiya (proven winner ka 301 usme aata hai). Exception jo file me likha tha (namo-drone-didi-yojana-shg-selection Hinglish original) indexed hi hai.*
- [x] NanoDap duplicate merge + 301 — *already done: `next.config.js` me `nano-dap-500ml-price-in-india-2026` → `NanoDap500mlPriceInIndia2026` (permanent), aur registry me duplicate entry nahi hai*
- [x] FTO page: full-form ka seedha jawab upar + title/meta rewrite — *fixed (Part 3)*
- [ ] Top 15–25 articles rewrite: screenshots, real cases, changelog, varied structure
- [ ] Author page: real photo, location, verification process
- [ ] **LinkedIn:** profile asli hai (confirmed 30 Aug), isliye schema `sameAs` me rehne diya. Baaki kaam: us LinkedIn profile par kisanstatus.com ka link back add karna — do-tarfa link hi E-E-A-T signal banata hai
- [x] Section C zero-click title/meta rewrites — *fixed (commit 07d45fb4): gehu-ka-bhav (MSP number title me), jansamarth (scheme count), PmKisan24viKist2026 (jawab title me, sawal nahi), hi/nayi-registration (Farmer ID prerequisite lead). Bache 2 — pm-kisan-complete-guide aur bihar-kisan-registration — Top-15 deep-rewrite pass ke saath honge*
- [x] hreflang guard — *fixed (commit 07d45fb4): `lib/hindi-hreflang.ts` me DEINDEXED_PATHS — noindex page kabhi kisi indexed page ka hreflang alternate na bane*
- [x] Em-dash aur filler-heading cleanup — *fixed (commit 2ee89c25): 565 body em-dashes hataye 152 files me (aadhe rakhe — human mix), titles/meta untouched; 24vi-kist ka filler heading query-shaped kiya*
- [x] Publishing guardrail — *fixed: `scripts/check-publish-pace.js` — build FAIL agar baseline (31 Aug) ke baad kisi 7-din window me 2 se zyada naye publishedTime; noindex pages exempt; deliberate exception `ALLOW_PUBLISH_BURST=1`. Build pipeline me `check:pace` added*
- [ ] Aage: max 2 articles/hafta, haath se, irregular schedule par — *guardrail ab ise enforce karta hai*

---

*GSC daily data (June 8 – Aug 26, 2026) sc-domain:kisanstatus.com se; publish dates git history + registries se; sitemap live crawl se. 29 Aug 2026.*

---

[← Part 2 — Recovery: Sab Kuch Real Insaan Jaisa Kaise Banayein](./02-recovery-human-signals.md) · [Index](./README.md) · [Part 4 — Page-Level Audit (GSC Data Se) →](./04-page-level-audit.md)
