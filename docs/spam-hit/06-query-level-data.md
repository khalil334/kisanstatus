# Part 6 — Query-Level Data aur Insights

*Source: [SPAM-HIT-DEEP-ANALYSIS.md](../../SPAM-HIT-DEEP-ANALYSIS.md) ka split hissa. Content unchanged.*

---

# Query-Level Data (GSC Top Queries — Jun 1 – Aug 28)

1,000 queries me se jo clicks laayi, unka pattern bilkul saaf hai:

## Site ki Asli Taqat: State-Level Status Queries

| Clicks | Query | Page |
|---|---|---|
| 19+9+9+6+3 = **46** | "cm kisan portal odisha status check" (variants) | odisha-cm-kisan |
| 7+2 | "pm kisan 25 kist kab aayegi" (pos 1.8!) | hi/pm-kisan-25vi-kist |
| 6+6+5+3+3+2 | "land seeding form" variants | PmKisanLandSeedingForm |
| 6+3 | "msp 2026-27 list" | msp-list-2026-27 |
| 5+4 | "mp saara payment status" / "mp kisan kalyan status" | mp-kisan-kalyan |
| 4+2 | "rythu bharosa status check" | rythu-bharosa |

**Insight:** Google ne is site ko **state-scheme status-check queries** par trust kiya tha — "pm kisan" jaise national mega-keywords par kabhi nahi (wahan bade sites hain). Recovery me isi lane me raho: state schemes (Odisha, MP, Rajasthan, Telangana), forms, aur "status kaise dekhe" guides. National generic topics ("pm kisan complete guide" type) par naya content mat banao.

## Missed Opportunities (rank tha, click nahi)

- **"nano dap price 500 ml"** — 612 impressions, sirf 2 clicks (pos 10.7). Duplicate articles ne isse kharab kiya (upar dekho). ✅ 301 already lagaya hua hai (`next.config.js`), ab ek hi article live hai — agla step us bache article ko strong banana.
- **"fto ka full form"** — 118 impressions, 0 clicks (pos 10.7). ✅ **Fixed (30 Aug):** article ke sabse upar seedha jawab box daala — "FTO ka full form: Fund Transfer Order". Sath hi `seoTitle` "FTO Ka Full Form Aur Paisa Kab Aayega" kiya aur meta description me pehla vaakya hi jawab bana diya (3,492 impressions, CTR 0.8% wala problem).
- "25 kist kab aayegi" pos 1.75 par tha — Hindi 25vi-kist page site ka strongest asset hai. Isse "official record only" style me carefully rakho, speculation hatao.

---

[← Part 5 — Fix Log aur Aage ka Kaam](./05-fix-log.md) · [Index](./README.md)
