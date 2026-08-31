# Part 4 — Page-Level Audit (GSC Data Se)

*Source: [SPAM-HIT-DEEP-ANALYSIS.md](../../SPAM-HIT-DEEP-ANALYSIS.md) ka split hissa. Content unchanged.*

---

# Page-Level Audit (GSC Data Se — 29 Aug 2026)

GSC me total **158 URLs** ne kabhi impression liya; registries me ~107 articles hain. Neeche ki lists June 1 – Aug 28 ke GSC data par based hain.

## A. DELETE + 301 — 15–18 Aug ke Burst Articles (22 me se 21)

**Sab 22 burst articles ka combined GSC result: 0 clicks, ~17 impressions.** Inhone kuch nahi diya, sirf site ko dubaya. Delete + 301:

| Article | 301 Target (suggestion) |
|---|---|
| `/yojana/fasal-bima-claim-status-check` + Hindi copy | `/articles/pmfby-crop-insurance-2026` |
| `/yojana/kisan-karj-mafi-list-all-states` + Hindi | `/articles/hi/karj-mafi-list` (ye purana wala traffic leta tha) |
| `/yojana/mgnrega-pashu-shed-yojana` + Hindi | `/articles/bakri-palan-yojana-nlm-subsidy` |
| `/yojana/pashu-kisan-credit-card-apply` + Hindi | `/articles/KisanCreditCardOnlineApply2026` |
| `/yojana/pm-kisan-helpline-155261` + Hindi | `/articles/pm-kisan-complete-guide` |
| `/yojana/pm-kisan-khad-yojana-11000-sach` + Hindi | `/articles/pm-kisan-complete-guide` |
| `/articles/fto-status-check-paisa-kab-aayega` | `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` (isi topic ka purana article 28 clicks le raha tha!) |
| Hindi copies: `namo-drone-didi`, `rajasthan-kisan-samman-nidhi`, `annadata-sukhibhava`, `rythu-bharosa`, `parihara-payment`, `odisha-cm-kisan`, `pati-patni-rule`, `state-kisan-yojana-list` | apne Hinglish/rajya-yojana originals par 301 |

**Exception (1):** `/articles/namo-drone-didi-yojana-shg-selection` (15 Aug, 17 impressions aa rahi thi) — chaaho to rakh lo, lekin rewrite ke saath.

## B. KEEP + REWRITE FIRST — Proven Winners (Top 15)

In pages ne hit se pehle asli traffic liya. **Yehi site ka core hai** — inhi par screenshots, real cases, changelog wala treatment sabse pehle:

| Clicks | Impressions | Page |
|---|---|---|
| 67 | 1,040 | `/articles/PmKisanLandSeedingForm` |
| 57 | 1,777 | `/rajya-yojana/odisha-cm-kisan-status-check-2026` |
| 56 | 1,167 | `/articles/hi/pm-kisan-25vi-kist` ⚠️ (Hinglish version noindex hai lekin Hindi version site ka #3 page hai — noindex Hinglish par hi rakho, Hindi ko speculative se "official record only" me rewrite karo) |
| 38 | 920 | `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` |
| 28 | 3,492 | `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` (highest impressions on site — CTR 0.8% hai, title/meta rewrite karo) |
| 21 | 2,469 | `/articles/hi/farmer-id-kaise-banaye` |
| 21 | 1,707 | `/articles/hi/namo-shetkari-yojana` |
| 21 | 1,077 | `/articles/msp-list-2026-27` |
| 20 | 2,290 | `/articles/NanoDap500mlPriceInIndia2026` ⚠️ duplicate note neeche |
| 18 | 467 | `/articles/hi/karj-mafi-list` |
| 17 | 355 | `/articles/custom-hiring-centre-chc-portal` |
| 16 | 651 | `/articles/bihar-pashupalan-loan-yojana` |
| 11 | 234 | `/rajya-yojana/parihara-payment-status-check-2026` |
| 10 | 701 | `/articles/hi/tractor-subsidy` |
| 10 | 558 | `/articles/bakri-palan-yojana-nlm-subsidy` |

⚠️ **Duplicate pakda gaya:** `NanoDap500mlPriceInIndia2026` (20c) aur `nano-dap-500ml-price-in-india-2026` (6c) — same topic ke DO live articles impressions split kar rahe hain. Ek rakho, doosre se 301.

## C. REWRITE CANDIDATES — Impressions Hain, Clicks Zero

Rank kar rahe the lekin koi click nahi — title/content problem:

- `/articles/gehu-ka-bhav-msp-vs-mandi` (242 impr)
- `/articles/pm-kisan-complete-guide` (171 impr)
- `/articles/hi/nayi-registration` (160 impr)
- `/articles/jansamarth-portal-loan-apply` (158 impr, pos 18)
- `/articles/PmKisan24viKist2026` (121 impr)
- `/rajya-yojana/bihar-kisan-registration-status-check-2026` (110 impr)

## D. DEAD WEIGHT — Kabhi Search Me Aaye Hi Nahi

**34 registry pages ka GSC me zero namo-nishan** (upar ke 21 burst + ye purane):

- Teeno `/maandhan/` registration/status/pension-card pages (March–April dated, backdated batch)
- `/articles/PmKisanEkycOnline2026`, `/articles/KisanCreditCardOnlineApply2026`, `/articles/PmKisanVillageWiseListPdfDownload`, `/articles/PmKisanMobileNumberChangeUpdate`
- Kai Hindi copies jo originals se kuch alag nahi kehti

In sab ke liye: agar topic important hai (eKYC, KCC apply) to **rewrite as-new** (screenshots ke saath, date bhi sach me nayi); agar sirf coverage ke liye tha to **delete + 301**.

## Audit Summary

| Action | Pages (approx) |
|---|---|
| Delete + 301 (burst + dead template) | ~40–45 |
| Keep + deep rewrite (winners) | ~15 |
| Rewrite title/meta (impressions, no clicks) | ~6 |
| Keep as-is (baaki working pages) | ~35–40 |

Result: ~107 → **~55–60 pages**, har bacha hua page insaan ke haath ka.

*GSC top-pages data (158 URLs, Jun 1 – Aug 28 2026) vs article registries cross-reference. 29 Aug 2026.*

---

[← Part 3 — Priority Checklist](./03-priority-checklist.md) · [Index](./README.md) · [Part 5 — Fix Log aur Aage ka Kaam →](./05-fix-log.md)
