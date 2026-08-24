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

## 6. Bottom line

| | |
|---|---|
| **Kya hua** | 18 Aug 2026 ko Google spam update ne site ko sitewide suppress kiya (impressions −96%) |
| **Kyun** | Highest-probability: scaled content abuse — 150+ AI templated pages 2 mahine mein, doorway-pattern state/kist pages |
| **Pehla step** | GSC Manual Actions check (aaj) |
| **Asli fix** | Velocity zero + doorway consolidation + first-hand value/E-E-A-T |
| **Timeline** | Mahine, hafte nahi — realistic full recovery agle spam update pe |
