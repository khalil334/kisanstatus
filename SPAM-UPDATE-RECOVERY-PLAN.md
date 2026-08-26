# KisanStatus.com — August 2026 Spam Update Recovery Plan

**Date:** 2026-08-23 · **Updated:** 2026-08-25 (Part 3 start) · **Property:** `sc-domain:kisanstatus.com`
**Data sources:** GSC Search Analytics API (live), Google Search Status Dashboard, repo source.
**Status:** Manual Actions + Security issues **CLEAN (owner ne 25 Aug ko verify kiya)** → ye pure algorithmic suppression hai. Recovery = neeche wale PARTS, order me.

---

## ⚡ EXECUTION PARTS — isi order me, har part ke baad direct push

Rule: ek part poora karo → commit + push → tabhi agla part shuru. Har part ke baad yahan status update hota hai.

| Part | Kaam | Status |
|---|---|---|
| **1** | **Kist-series consolidation** — `PmKisan26viKist` (already noindexed, zero demand, content 25vi me merged) ko remove karo: 301 → `/articles/PmKisan25viKist2027`, data entry + component delete, relatedSlugs clean. Keepers: `PmKisan24viKist2026` (current demand, Oct 2026), `hi/pm-kisan-25vi-kist` ↔ `PmKisan25viKist2027` (hreflang pair, best ranker — mat chhedo) | ✅ done (25 Aug) — data entry + component + dynamic import removed, 301 `/articles/PmKisan26viKist` → `/articles/PmKisan25viKist2027` added in next.config.js; koi relatedSlugs/sitemap reference nahi bacha; tsc + build clean |
| **2** | **State doorway consolidation** — GSC per-page data (Jun 1–Aug 17, live pull 25 Aug) se split ho gaya. Keepers (chhedna nahi): odisha 57 clicks, MP 38, parihara 11, namo-shetkari 8, rythu-bharosa 8, hub 5, annadata 4, rajasthan 4, pati-patni (doorway nahi — PM Kisan rule page, 5 pages usse link karte hain). Merge + 301 → hub (6 pages): krishak-unnati (2 clicks), krishak-bandhu (1), bihar-kisan-registration (0), meri-fasal-mera-byora (0 impressions), up-kisan-karj-rahat (0 impressions), ikhedut-portal (0 impressions). Hindi twins (sab 0 impressions GSC me) bhi 301 → `hi/state-kisan-yojana-list`. Sub-parts neeche | ✅ done (25 Aug) — 2a–2d complete |
| **2a** | **Hub expand** — merge hone wale 6 pages ki unique state info `StateKisanYojanaHub` (aur Hindi twin `StateKisanYojanaListHindi`) me add karo: Bihar (DBT registration, 13-digit no.), Haryana (Meri Fasal Mera Byora), UP (Karj Rahat list), Gujarat (iKhedut portal), WB Krishak Bandhu + CG Krishak Unnati rows already hain — unme merge pages ka extra detail fold karo. Tabhi 301 valid hai | ✅ done (25 Aug) — dono hubs me Bihar/Haryana/UP/Gujarat ke detail sections add, WB + CG sections expand (slab logic, EPIC search, antar rashi, ₹15k/acre component), merge-target guide links hub me self-reference me badle |
| **2b** | **Remove + 301** — 6 English pages: data entries (`rajya-yojana-data.ts`), components, page.tsx imports delete; 301s next.config.js me → `/rajya-yojana/state-kisan-yojana-list-all-states-2026`. 6 Hindi twins: entries (`hindi-rajya-yojana-data.ts`), components delete; 301 → `/articles/hi/state-kisan-yojana-list`. `hindi-hreflang.ts` mapping se dono side ke removed slugs clean | ✅ done (25 Aug) — 6 EN + 6 HI entries, 12 component files, dono `[slug]/page.tsx` ke imports/COMPONENTS map, hreflang mappings removed; 12 × 301 next.config.js me add |
| **2c** | **Cross-links clean** — removed slugs ke saare internal links keeper/hub pe point karo: `StateYojanaFinder`, `StateKisanYojanaHub`/`StateKisanYojanaListHindi` guide links, `IkhedutPortalStatusCheck2026` (khud remove hoga), `OdishaCmKisanStatusCheck`, `BiharKisanRegistrationStatusCheck2026`, `KisanKarjMafiAllStatesHindi`, `yojana-2026-data.ts` relatedPaths, sitemap auto-clean ho jayega (data-driven) | ✅ done (25 Aug) — `StateYojanaFinder` WB row → hub, `OdishaCmKisanStatusCheck` WB link → hub, `KisanKarjMafiAllStates` + Hindi twin ke UP links → hub, `yojana-2026-data.ts` relatedPath → hub; repo-wide grep me removed slugs ka koi reference nahi bacha (sitemap data-driven, auto-clean) |
| **2d** | **Verify** — `tsc --noEmit` + production build clean, koi dangling import/link nahi, phir commit + push | ✅ done (25 Aug) — `tsc --noEmit` clean, `next build --webpack` clean (saare routes generate, 9 rajya-yojana pages bache), check:titles + check:content pass; dangling import/link zero |
| **3** | **Thin pages** — live sitemap ke 133 URLs, **25-25 URL ke 6 batches** me (3a–3f). Har batch ka full cycle: URL Inspection sweep → thin classify ("Crawled/Discovered – currently not indexed") → fix (expand 2,000+ words real info YA nearest keeper me merge + 301) → verify → commit + push. Ek batch poora, tabhi agla. Protect-list pages ko haath nahi lagana | 🟡 in progress (26 Aug) — GSC + GitHub re-connected, live sitemap pull (133 URLs), batches neeche define; 3a se shuru |
| **3a** | **Batch 1 (URLs 1–25)** — sweep + classify + fix + verify + push. URLs: `/`, `/articles`, `/articles/hi`, `/maandhan`, `/rajya-yojana`, `/yojana`, `/calculator`, `/calculator/quick-status-check`, `/calculator/installment-tracker`, `/calculator/pm-kisan-benefit`, `/calculator/kcc-loan-emi`, `/calculator/pmfby-premium`, `/calculator/msp-income`, `/calculator/crop-profit`, `/articles/category/status-check`, `/articles/category/loan`, `/articles/category/farming`, `/articles/category/mandi`, `/articles/category/pashupalan`, `/articles/category/agri-business`, `/articles/hi/category/status-check`, `/articles/hi/category/loan`, `/articles/hi/category/farming`, `/articles/hi/category/mandi`, `/articles/hi/category/pashupalan` | 🟡 in progress |
| **3b** | **Batch 2 (URLs 26–50)** — same cycle. URLs: `/articles/hi/category/agri-business`, `/articles/KisanRinKahaSeLe2026`, `/articles/KisanTractorLoan2026`, `/articles/PmKisanBeneficiaryList2026`, `/articles/PmKisanEkycOnline2026`, `/articles/PmfbyCropInsurance2026`, `/articles/KisanCreditCardOnlineApply2026`, `/articles/fto-status-check-paisa-kab-aayega`, `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai`, `/articles/NanoDap500mlPriceInIndia2026`, `/articles/PmKisan24viKist2026`, `/articles/AgriStackKyaHai2026`, `/articles/PmKisanMasterGuide2026`, `/articles/soil-health-card-complete-guide-2026`, `/articles/mandi-bhav-today`, `/articles/PmKisanPaymentFailedFix2026`, `/articles/PmKisan25viKist2027`, `/articles/pm-kisan-self-registered-status-check`, `/articles/PmKisanCorrectionForm2026`, `/articles/PmKusumYojanaSolarSubsidy2026`, `/articles/PmKisanLandSeedingForm`, `/articles/PmKisanFaceAuthenticationEkyc`, `/articles/PmKisanVoluntarySurrenderGuide`, `/articles/PmKisanStateNodalOfficerList`, `/articles/PmKisanBankAccountChangeProcess` | ⏸️ pending |
| **3c** | **Batch 3 (URLs 51–75)** — same cycle. URLs: `/articles/PmKisanCscRegistrationCharges`, `/articles/PmKisanMaandhanYojanaPension`, `/articles/PmKisanRejectedStatusReApplyGuide`, `/articles/PmKisanVillageWiseListPdfDownload`, `/articles/PmKisanMobileNumberChangeUpdate`, `/articles/bakri-palan-yojana-nlm-subsidy`, `/articles/mushroom-kheti-nhb-subsidy`, `/articles/madhumakhi-palan-kvic-subsidy`, `/articles/pm-matsya-sampada-yojana-fish-farming`, `/articles/silage-making-business-guide`, `/articles/pm-fme-yojana-food-processing`, `/articles/custom-hiring-centre-chc-portal`, `/articles/vermi-compost-business-guide`, `/articles/drip-sprinkler-irrigation-subsidy`, `/articles/namo-drone-didi-yojana-shg-selection`, `/articles/dairy-farm-loan-without-collateral`, `/articles/sbi-dairy-loan-interest-rate`, `/articles/jansamarth-portal-loan-apply`, `/articles/enam-registration-kaise-kare`, `/articles/msp-list-2026-27`, `/articles/mandi-bhav-app-comparison`, `/articles/gehu-ka-bhav-msp-vs-mandi`, `/articles/sabzi-bhav-guide-pyaz-aloo-tamatar`, `/articles/murgi-palan-loan-nlm-subsidy`, `/articles/bihar-pashupalan-loan-yojana` | ⏸️ pending |
| **3d** | **Batch 4 (URLs 76–100)** — same cycle. URLs: `/articles/rashtriya-gokul-mission-subsidy`, `/articles/gau-mutra-kharid-yojana-up-2026`, `/maandhan/pm-kisan-maandhan-registration-2026`, `/maandhan/pm-kisan-maandhan-eligibility-documents`, `/maandhan/pm-kisan-maandhan-pension-calculator`, `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules`, `/maandhan/pm-kisan-maandhan-auto-debit-poora-sach`, `/maandhan/pm-kisan-maandhan-status-check-online`, `/maandhan/pm-kisan-maandhan-pension-card-download`, `/maandhan/family-pension-rules`, `/maandhan/pmkmy-bank-account-change`, `/maandhan/pmkmy-grievance-complaint-helpline`, `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein`, `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026`, `/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana`, `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000`, `/rajya-yojana/annadata-sukhibhava-status-check-2026`, `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status`, `/rajya-yojana/namo-shetkari-yojana-status-check-2026`, `/rajya-yojana/rythu-bharosa-status-check-2026`, `/rajya-yojana/odisha-cm-kisan-status-check-2026`, `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega`, `/rajya-yojana/state-kisan-yojana-list-all-states-2026`, `/rajya-yojana/parihara-payment-status-check-2026`, `/yojana/fasal-bima-claim-status-check` | ⏸️ pending |
| **3e** | **Batch 5 (URLs 101–125)** — same cycle. URLs: `/yojana/kisan-karj-mafi-list-all-states`, `/yojana/pm-kisan-khad-yojana-11000-sach`, `/yojana/pm-kisan-helpline-155261`, `/yojana/mgnrega-pashu-shed-yojana`, `/yojana/pashu-kisan-credit-card-apply`, `/articles/hi/pm-kisan-25vi-kist`, `/articles/hi/status-check-mobile-se`, `/articles/hi/nayi-registration`, `/articles/hi/farmer-id-kaise-banaye`, `/articles/hi/ekyc-mobile-se`, `/articles/hi/npci-aadhaar-seeding`, `/articles/hi/payment-stopped-by-state`, `/articles/hi/recovery-notice`, `/articles/hi/tractor-subsidy`, `/articles/hi/namo-drone-didi-yojana`, `/articles/hi/gehu-ka-rate-aaj`, `/articles/hi/kcc-limit-kaise-badhaye`, `/articles/hi/gau-mutra-kharid-yojana`, `/articles/hi/mp-kisan-kalyan-yojana`, `/articles/hi/namo-shetkari-yojana`, `/articles/hi/rajasthan-kisan-samman-nidhi`, `/articles/hi/annadata-sukhibhava-status`, `/articles/hi/rythu-bharosa-status`, `/articles/hi/odisha-cm-kisan-status`, `/articles/hi/pati-patni-pm-kisan-rule` | ⏸️ pending |
| **3f** | **Batch 6 (URLs 126–133) + final wrap** — last 8 URLs same cycle: `/articles/hi/state-kisan-yojana-list`, `/articles/hi/parihara-payment-status`, `/articles/hi/fasal-bima-claim-status`, `/articles/hi/kisan-karj-mafi-list`, `/articles/hi/pm-kisan-khad-yojana-sach`, `/articles/hi/pm-kisan-helpline-155261`, `/articles/hi/mgnrega-pashu-shed-yojana`, `/articles/hi/pashu-kisan-credit-card`. Phir wrap: `tsc --noEmit` + production build clean, removed slugs ka repo-wide grep zero, plan file final update | ⏸️ pending |
| **4** | **E-E-A-T inject** — har protect-list page pe: asli portal screenshot (owner dega), real error messages, "humne <date> ko check kiya" freshness line, Sources section consistent | 🟡 repo-side done (25 Aug) — reusable `SourcesSection` component banaya; Odisha, MP Kisan Kalyan, Land Seeding Form, Nano DAP, Namo Shetkari pe Sources + "aakhri baar jaancha gaya" freshness line add (25vi-kist, farmer-id, karj-mafi, MSP, Bihar pashupalan pe pehle se thi); tsc + build clean. **Screenshots owner pe blocked** |
| **5** | **Re-crawl** — Parts 1–4 deploy ke baad: sitemap re-submit (GSC API se ho jayega), protect-list pages pe Request Indexing (owner, GSC UI) | ⏸️ pending |

**Owner ke parallel kaam (repo se nahi hote):**
- [x] GSC Manual Actions + Security check — **clean, 25 Aug**
- [ ] Publishing velocity zero — naye AI articles 4–6 hafte band
- [ ] Har major guide ke liye asli portal screenshots bhejo (Part 4 iske bina aadha rahega)
- [ ] Part 5 pe: protect-list pages pe Request Indexing (GSC UI)

---

## 0. Kya hua — exact timeline (GSC API data, fabricated nahi)

| Date | Clicks | Impressions | Avg position |
|---|---|---|---|
| 2026-08-13 (peak) | 54 | 2,616 | 7 |
| 2026-08-16 | 37 | 1,879 | 7 |
| 2026-08-17 | 18 | 1,486 | 7 |
| **2026-08-18** | **1** | **64** | 2 |
| 2026-08-19 | 1 | 60 | 3 |
| 2026-08-21 | 1 | 40 | 3 |

**Impressions −96% overnight, 17→18 August.**

Google ne **August 2026 Spam Update** 18 August ko ~9:27 AM Pacific pe release kiya,
rollout 21 August ko complete hua. Crash ka din update ke din se **exact match** karta hai.
Ye coincidence nahi hai — site is spam update se hit hui hai.

### Ye DEINDEX-DIAGNOSIS.md wala issue NAHI hai

Wo diagnosis (CSR bailout → 51 pages discover nahi hue) June–July ke **not-indexed** pages
ke baare mein tha, aur wo fix sahi tha — lekin ye naya crash **already-indexed, already-ranking**
pages pe aaya hai. Jo pages 13 August ko 1,700+ impressions le rahe the (odisha-cm-kisan-status,
pm-kisan-25vi-kist, farmer-id-kaise-banaye) wo ab bhi indexed hain, par SERP se practically
gayab hain. Matlab: **de-indexing nahi, sitewide ranking suppression** — spam update ka classic
pattern. Baaki bacha traffic sirf brand/exact-match queries ka hai (isi liye avg position 2–3
"improve" dikh rahi hai — sirf easy queries bachi hain).

---

## 1. Pehla kaam — Manual Action check (5 minute, sabse pehle)

GSC → **Security & Manual Actions → Manual actions** aur **Security issues** dono kholo.

- **Agar manual action hai:** wahan exact policy violation likha hoga. Pehle wahi fix karo,
  phir Reconsideration Request. Is file ka Section 3 usi kaam ki checklist hai.
- **Agar khaali hai (likely):** ye algorithmic suppression hai. Koi reconsideration request
  nahi hoti — fix karo aur agle spam update / continuous re-evaluation ka intezaar karo.
  Google khud kehta hai recovery **mahino** le sakti hai.

---

## 2. Site ka honest risk assessment — spam policies ke against

Spam update sirf spam-policy violations ko target karta hai. Site ka profile:

| Signal | Site pe status | Risk |
|---|---|---|
| **Scaled content abuse** | ~150+ articles 2 mahine (June 20 → Aug 23) mein publish, sab AI-generated (repo mein "humanize pass" commits khud iska saboot hain), bahut se pages ek hi template pe (`*-status-check-2026` × 10+ states, kist-series × 4+) | 🔴 **HIGH — yehi primary suspect hai** |
| Doorway pages | State-wise status-check pages largely same intent ("<state> kisan status check karo") serve karte hain, sirf state/portal name badal ke | 🔴 HIGH |
| Site reputation abuse | Nahi — apni site hai | ✅ none |
| Link spam | Koi paid/spammy link building repo ya history mein nahi dikhi | 🟢 LOW (Ahrefs se backlink profile verify karo) |
| Cloaking / hidden text | Nahi — server HTML == user HTML (bailout fix ke baad) | ✅ none |
| Keyword stuffing | Aug 4 ke humanize commits mein "fix keyword stuffing" — matlab tha, ab kam hai | 🟡 residual |

**Note:** Google AI content ko AI hone ki wajah se penalise nahi karta. Problem "AI" nahi,
**scale + sameness + first-hand value ki kami** hai. Humanize passes (sentence rhythm, FAQ
lengths) cosmetic hain — SpamBrain sentence rhythm nahi, *value-per-page at scale* dekhta hai.

---

## 3. Recovery plan — priority order

### 🔴 P0 — Publishing velocity zero karo (aaj se)
Naye articles publish karna band. Har naya thin page suppression ko deepen karta hai.
Agle 4–6 hafte sirf consolidation aur improvement.

### 🔴 P0 — Doorway-pattern consolidation (sabse bada kaam)
Ye template-sets audit karo aur merge/differentiate karo:

1. **`/rajya-yojana/*-status-check-2026` (10+ state pages)** — har page mein wo cheez ho jo
   sirf us state ke liye sach hai: asli portal screenshots, state-specific documents list,
   district-wise helpline, us state ke asli payment dates. Jo page 80% doosre se same hai —
   ya to genuinely differentiate karo, ya ek master page mein merge karke 301 redirect do.
2. **Kist-series (`PmKisan24viKist`, `25viKist`, `25vi-kist` hi, `26viKist`, `25viKist2027`)**
   — ek canonical "PM Kisan kist status" evergreen page rakho jo har kist pe update ho.
   Baaki ko usme 301 karo. Ek hi query ke liye 4 pages = cannibalization + scaled-content signal.
3. **`/articles/hi/*` vs `/yojana/*` hreflang pairs** — ye theek hain (DEINDEX-DIAGNOSIS § 6),
   inhe mat chhedo.

**Delete-first approach ab bhi galat hai** — pehle merge/301, sirf zero-value pages pe `410`.

### 🟠 P1 — E-E-A-T / first-hand value inject karo
Spam update ke baad survive karne wali sites ka common factor: real experience.
- Har major guide pe: **asli portal ke screenshots** (khud status check karke), asli error
  messages jo farmers ko milte hain, "humne 23 Aug ko check kiya" type freshness proof.
- **Author identity:** naam, photo, "kaun hai ye site chalane wala" — about page pe real
  detail, har article pe author byline.
- **Sources section:** har page pe official pmkisan.gov.in / state portal links (already
  partially hai — consistent karo).
- Data jo Google ke paas nahi: e.g. har state ke portal ka actual response time, kaunse
  browser pe kaam karta hai, CSC charges ka real survey. Original info = spam update immunity.

### 🟠 P1 — Thin pages fix (7 "Crawled – not indexed" wali list)
DEINDEX-DIAGNOSIS § 7 P2 ki list ab zyada important ho gayi hai — GSC se export karke
un 7 pages ko expand/merge karo. `PmKisan26viKist` (~1,800 words, noindexed) theek hai jaisa hai.

### 🟡 P2 — Backlink profile verify karo
Ahrefs/GSC Links report mein dekho: koi spammy/paid pattern to nahi. Agar hai to disavow
(sirf tab, warna disavow mat karo).

### 🟡 P2 — GSC hygiene (already planned, jaari rakho)
- Sitemap re-submit after consolidation (301s reflect hone chahiye)
- `/articles` + hubs pe Request Indexing sirf major changes ke baad

---

## 4. Kya expect karo — timeline

| Kab | Kya |
|---|---|
| Hafta 1–2 | Manual action check, velocity zero, consolidation plan finalize |
| Hafta 2–6 | Doorway consolidation + E-E-A-T work deploy |
| Mahina 2–4 | Google continuous re-evaluation; partial recovery possible |
| Agla spam update | Full re-assessment — yahi realistic full-recovery point hai |

⚠️ **Spam update recovery mahino leti hai** — Google ka official stance. Overnight wapas
nahi aayega. Panic mein articles delete/rewrite spree mat karo; upar wala targeted kaam karo.

## 5. Kya NAHI karna

- ❌ Domain change / naya site — history repeat hogi, kuch nahi milega
- ❌ 150 articles ek saath delete — targeted merge > mass delete
- ❌ Aur AI articles publish karna "recover" karne ke liye — ye suppression deepen karega
- ❌ Reconsideration request bina manual action ke — aisi koi cheez exist nahi karti
- ❌ hreflang pairs / canonicals chhedna — wo sahi hain

## 5.5 — 25 Aug update: GSC deep-check complete (live API data)

**Verdict confirm: poora domain sitewide hit hai, sirf kuch articles nahi.**

GSC live pull (25 Aug, `sc-domain:kisanstatus.com`):

| Date | Clicks | Impressions | Position |
|---|---|---|---|
| 13 Aug (peak) | 54 | 2,616 | 7.1 |
| 17 Aug | 18 | 1,486 | 7.0 |
| **18 Aug** | **1** | **64** | 2.2 |
| 24 Aug | 0 | 61 | 3.5 |

- Impressions −96% overnight 17→18 Aug — August 2026 Spam Update ke release din se exact match.
- Technical side **clean verify hui**: canonicals sahi (live HTML check kiya — har page apna URL point karta hai), robots ALLOWED, sitemap 0 errors, homepage indexed. Ye technical problem NAHI hai.
- "Position 2–3 improve" illusion hai — sirf brand/exact-match queries bachi hain.
- Authority score 8 intact hai (backlink-based, spam update usse nahi girata) — naya domain kharidna galat move hoga; isi domain pe recovery karo.

### 🛡️ Protect list — crash se pehle (1–17 Aug) ke top earners

Consolidation me ye pages **keepers** hain — inhe delete/merge target mat banao, inhe base banao:

| Page | Clicks | Impr. | Pos. |
|---|---|---|---|
| `/rajya-yojana/odisha-cm-kisan-status-check-2026` | 57 | 1,775 | 7.4 |
| `/articles/hi/pm-kisan-25vi-kist` | 56 | 1,147 | **2.4** |
| `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` | 38 | 919 | 9.3 |
| `/articles/PmKisanLandSeedingForm` | 32 | 489 | 7.1 |
| `/articles/hi/farmer-id-kaise-banaye` | 21 | 2,446 | 6.5 |
| `/articles/hi/namo-shetkari-yojana` | 21 | 1,697 | 5.5 |
| `/articles/msp-list-2026-27` | 21 | 1,066 | 7.4 |
| `/articles/hi/karj-mafi-list` | 18 | 465 | 6.1 |
| `/articles/bihar-pashupalan-loan-yojana` | 16 | 647 | 7.3 |
| `/articles/NanoDap500mlPriceInIndia2026` | 11 | 1,401 | 6.4 |

Do takeaways:
1. **State doorway set ke andar bhi winners hain** — odisha + MP pages top 3 me the. Matlab `rajya-yojana` consolidation me delete nahi, **differentiate**: odisha/MP ko master banao (asli portal screenshots, state-specific detail), zero-traffic state pages unme merge/301 karo.
2. **Kist-series ka evergreen canonical = `/articles/hi/pm-kisan-25vi-kist`** (site ka best ranker tha, pos 2.4). 24vi/26vi/2027 versions isme 301 karo.

### ✅ Fix karne ke liye — concrete order (25 Aug se)

1. **[Owner, aaj, 5 min]** GSC → Security & Manual Actions — dono check. Khaali = algorithmic; koi reconsideration nahi hoti, neeche wala kaam hi recovery hai.
2. **[Owner]** Publishing velocity zero — naye AI articles 4–6 hafte band.
3. **[Repo]** Kist-series consolidation: `pm-kisan-25vi-kist` ko evergreen banao, 24vi/26vi/25viKist2027 → 301. (Direction upar confirm ho gayi — GSC data se.)
4. **[Repo]** State doorway consolidation: protect-list wale state pages ko genuinely differentiate karo; jo pages 1–17 Aug me ~0 clicks the unhe nearest keeper me merge + 301.
5. **[Owner + repo]** E-E-A-T inject: har major guide pe asli portal screenshots, real error messages, "humne <date> ko check kiya" freshness proof.
6. **[Owner]** Consolidation deploy ke baad: sitemap re-submit + protect-list pages pe Request Indexing.
7. **[Wait]** Recovery mahino ki hai — agla spam update full re-assessment point. Panic delete/domain-change mat karo.

## 6. Progress log

| Date | Kaam | Status |
|---|---|---|
| 2026-08-24 | Sources audit: non-official/spammy outbound links ko official portals se replace kiya — `pmkisanmaandhan.in`→`maandhan.in` (3 jagah, PmKisanMaandhanWithdrawalRefund), `honeymission.com`→`kviconline.gov.in` (MadhumakhiPalan), `nddb.org`→`nddb.coop` (SilageMaking), `ikhedut.co.in`→`ikhedut.gujarat.gov.in` (IkhedutPortalStatusCheck2026), `heavendesigns.in`→`pmkusum.mnre.gov.in` (DripSprinkler); AutoDebitFailRegularization me maandhan.in official link add kiya | ✅ done, push pending |
| 2026-08-24 | Kist-series consolidation (24vi → 25vi evergreen, 301) | ⏳ direction pe final OK ka intezaar |
| 2026-08-24 | State doorway pages — GSC data se decide hoga (GSC connect ho gaya, read-approval pending) | ⏳ blocked on approval |
| — | Thin pages (7 wali GSC list) | ⏳ list chahiye |
| — | E-E-A-T: author bios/bylines already implemented (lib/author-bios.ts) | ✅ pehle se ho chuka |
| 2026-08-25 | GSC deep-check via API: sitewide hit confirm (−96% impressions 17→18 Aug), technical side clean verify, protect list (top 25 pre-crash pages) pull ki, kist-series evergreen = `pm-kisan-25vi-kist` decide | ✅ done (Section 5.5) |
| 2026-08-25 | **Part 1 complete**: `PmKisan26viKist` removed (core-articles-data entry, component file, dynamic import), 301 → `PmKisan25viKist2027` in next.config.js. Keepers untouched (`PmKisan24viKist2026`, `hi/pm-kisan-25vi-kist` ↔ `PmKisan25viKist2027`). Typecheck + production build verified | ✅ done, pushed |
| 2026-08-25 | **Part 2 decided (GSC live data)**: rajya-yojana split final — 8 keepers + pati-patni (doorway nahi), 6 merge targets (krishak-unnati 2 clicks, krishak-bandhu 1, baaki 0). Hindi twins sab 0 impressions → wo bhi merge. Sub-parts 2a–2d upar table me | ✅ decided, execution start |
| 2026-08-25 | **Part 2b complete**: 6 English doorway pages (krishak-unnati, krishak-bandhu, bihar-kisan-registration, meri-fasal-mera-byora, up-kisan-karj-rahat, ikhedut-portal) + 6 Hindi twins removed — data entries, 12 component files, page.tsx imports/COMPONENTS, hreflang mappings; 12 × 301 → hub / `hi/state-kisan-yojana-list` in next.config.js | ✅ done, pushed |
| 2026-08-25 | **Part 2c complete**: cross-links repointed — StateYojanaFinder WB row, OdishaCmKisanStatusCheck WB link, KisanKarjMafiAllStates (EN + HI) UP links, yojana-2026-data relatedPath; grep verify zero references to removed slugs | ✅ done, pushed |
| 2026-08-25 | **Part 2d complete**: `tsc --noEmit` clean, production build clean (webpack), check:titles + check:content pass | ✅ done, pushed |
| 2026-08-25 | **Part 4 (repo-side)**: `components/ui/SourcesSection.tsx` reusable component; Sources section + freshness date (article ki asli modified date se, koi fabricated date nahi) add kiya 5 protect-list pages pe jo missing the: OdishaCmKisanStatusCheck, MpKisanKalyanYojanaKist (ab article prop leta hai), PmKisanLandSeedingForm, NanoDap500mlPriceInIndia2026, NamoShetkariYojanaMaharashtra. Baaki 5 protect-list pages pe Sources/freshness pehle se maujood verify kiya. tsc --noEmit + production build clean | ✅ done, pushed |
| 2026-08-25 | **Part 2a complete**: `StateKisanYojanaHub` + `StateKisanYojanaListHindi` expand — Bihar (DBT 13-anka system, 3 enrolment types, diesel/input/beej anudan), Haryana (MFMB gate-pass, Family ID, patwari verification, DSR), UP (karj rahat portal, loan a/c se list, shikayat), Gujarat (iKhedut window system, print-jama step, draw) ke sections add; WB slab logic + EPIC search aur CG antar rashi + ₹15k/acre detail fold; merge-target links hub se hataye | ✅ done, pushed |
| 2026-08-25 | **Part 3 setup**: GSC connector workspace se connect (sc-domain:kisanstatus.com, siteOwner verify); GitHub push access connect. Plan: sitemap ke saare URLs URL Inspection API se sweep karke "Crawled – currently not indexed" list nikalna, phir har page expand (2,000+ words real info) ya nearest keeper me merge + 301 | 🟡 in progress |
| 2026-08-26 | **Part 3 split into 3a–3f**: GSC + GitHub access fresh workspace me re-connect (siteOwner verify), live sitemap pull (133 URLs). 3a = full index-status sweep, 3b = thin-list classify (expand vs merge+301), 3c = merge batch, 3d–3e = expand batches, 3f = verify. Execution 3a se shuru | 🟡 in progress |
| 2026-08-26 | **Part 3 re-split into 6 URL-batches**: 133 URLs ek saath nahi — 25-25 ke batches (3a=1–25, 3b=26–50, 3c=51–75, 3d=76–100, 3e=101–125, 3f=126–133+wrap). Har batch = sweep → classify → fix → verify → push, tabhi agla. GSC (siteOwner) + GitHub push access is workspace me verify; homepage inspect test PASS. Plan file pehle update+push, phir 3a execution | 🟡 in progress |

### Owner ke manual steps (repo se nahi ho sakte)
- [ ] GSC → Security & Manual Actions — dono check karo (P0, 5 min)
- [ ] Publishing velocity zero — naye articles 4–6 hafte band
- [ ] Asli portal screenshots har major guide ke liye
- [ ] Consolidation ke baad sitemap re-submit + re-crawl request

## 7. Bottom line

| | |
|---|---|
| **Kya hua** | 18 Aug 2026 ko Google spam update ne site ko sitewide suppress kiya (impressions −96%) |
| **Kyun** | Highest-probability: scaled content abuse — 150+ AI templated pages 2 mahine mein, doorway-pattern state/kist pages |
| **Pehla step** | GSC Manual Actions check (aaj) |
| **Asli fix** | Velocity zero + doorway consolidation + first-hand value/E-E-A-T |
| **Timeline** | Mahine, hafte nahi — realistic full recovery agle spam update pe |
