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
- [ ] 15–18 Aug ke template articles delete + 301 — **abhi tak live hain.** Registry me confirmed: `lib/yojana-2026-data.ts` (6), `lib/hindi-yojana-2026-data.ts` (6), `lib/hindi-rajya-yojana-data.ts` (7 Hindi copies), `lib/hindi-kisanguides-data.ts` (1), `lib/core-articles-data.ts` (2)
- [x] NanoDap duplicate merge + 301 — *already done: `next.config.js` me `nano-dap-500ml-price-in-india-2026` → `NanoDap500mlPriceInIndia2026` (permanent), aur registry me duplicate entry nahi hai*
- [x] FTO page: full-form ka seedha jawab upar + title/meta rewrite — *fixed (Part 3)*
- [ ] Top 15–25 articles rewrite: screenshots, real cases, changelog, varied structure
- [ ] Author page: real photo, location, verification process
- [ ] **LinkedIn:** profile asli hai (confirmed 30 Aug), isliye schema `sameAs` me rehne diya. Baaki kaam: us LinkedIn profile par kisanstatus.com ka link back add karna — do-tarfa link hi E-E-A-T signal banata hai
- [ ] Em-dash aur filler-heading cleanup jaari
- [ ] Aage: max 2 articles/hafta, haath se, irregular schedule par

---

*GSC daily data (June 8 – Aug 26, 2026) sc-domain:kisanstatus.com se; publish dates git history + registries se; sitemap live crawl se. 29 Aug 2026.*

---

[← Part 2 — Recovery: Sab Kuch Real Insaan Jaisa Kaise Banayein](./02-recovery-human-signals.md) · [Index](./README.md) · [Part 4 — Page-Level Audit (GSC Data Se) →](./04-page-level-audit.md)
