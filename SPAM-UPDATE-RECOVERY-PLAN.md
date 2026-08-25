# KisanStatus.com — August 2026 Spam Update Recovery Plan

**Date:** 2026-08-23 · **Property:** `sc-domain:kisanstatus.com`
**Data sources:** GSC Search Analytics API (live, aaj pull kiya), Google Search Status Dashboard, repo source.

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
