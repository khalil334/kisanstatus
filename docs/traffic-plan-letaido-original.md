# KisanStatus.com — Traffic Analysis & 10x Growth Plan

> Analysis date: August 2026 · Site: kisanstatus.com · Repo: khalil334/kisanstatus
> Current state: ~73 live articles (Next.js App Router, Hinglish content, PM Kisan niche)
> NOTE: Ye Letaido ki original standalone analysis hai. Final merged roadmap ke liye dekho: `traffic-analysis-and-10x-plan.md`

---

## Part 1: Traffic Kam Kyun Aa Raha Hai (Root Causes)

### 1. Ultra-competitive head keywords, zero differentiation
Site ke 18 articles `status-check` category mein hain — sab "PM Kisan status / kist / eKYC" ke around. Ye keywords pe **sarkariresult-type giant portals, news sites (Amar Ujala, ABP, Jagran) aur khud pmkisan.gov.in** rank karte hain. Naya site head terms ("pm kisan status check") pe rank nahi kar sakta jab tak Domain Rating build nahi hoti.

**Problem:** Long-tail nahi, head-terms target ho rahe hain.

### 2. Query intent navigational hai
"PM Kisan status check" search karne wala user **directly pmkisan.gov.in jaana chahta hai**. Google aise queries pe official site + top news sites dikhata hai. Informational sites ko yahan CTR bahut kam milta hai — chahe rank ho bhi jaye.

### 3. Site nayi hai, backlinks nahi hain
Repo June 2026 mein bana. Google naye sites ko YMYL (government schemes = Your Money Your Life) topics pe **bahut slow trust** deta hai. Bina referring domains ke competitive Hindi/Hinglish sarkari-yojana space mein ranking mushkil hai.

### 4. Date-stamped titles jaldi stale ho jaate hain
"PM Kisan 24vi Kist 2026" jaise titles kist release hone ke baad dead ho jaate hain. Evergreen framing nahi hai — har installment cycle pe traffic crash hota hai.

### 5. Hinglish content, lekin search Hindi (Devanagari) mein hota hai
Rural India ka bada search volume **Devanagari Hindi** mein hai ("पीएम किसान स्टेटस चेक"). Agar content sirf Roman Hinglish mein hai, to Hindi SERPs mein visibility limited rehti hai. Hindi `<html lang>`, Hindi headings, ya Hindi versions consider karo.

### 6. Duplicate/thin coverage risk
25vi kist (2027) ka article abhi se live hai — future-dated thin pages Google ko low-quality signal dete hain. Similar articles (status check, self-reg status, village list, beneficiary list) me internal cannibalization ho sakti hai.

### 7. Programmatic/state-level long-tail missing
Sabse achha opportunity — **state + district level queries** ("pm kisan beneficiary list bihar", "up mein pm kisan status") — abhi sirf 10 rajya-yojana articles hain. Yahan competition kam hai aur volume aggregate mein bahut bada hai.

---

## Part 2: 10 Naye Articles (Traffic 10x Karne Ke Liye)

Strategy: **low-competition long-tail + evergreen problem-solving + state-level targeting**. Head terms chhodo, "problem + fix" queries pakdo jahan official site jawab nahi deta.

| # | Article (Working Title) | Target Queries | Kyun Ye Kaam Karega |
|---|---|---|---|
| 1 | **PM Kisan Beneficiary Status me "Payment Stopped by State" ka Matlab + Fix (2026)** | payment stopped by state pm kisan, pm kisan payment stop kyu hua | Error-message queries ka intent 100% informational hai — official site explain nahi karta. Low competition, high desperation. |
| 2 | **NPCI Aadhaar Seeding Kaise Kare Bank Me — DBT Payment Ke Liye (Step-by-Step + Form PDF)** | npci aadhaar seeding online, dbt enable kaise kare, aadhaar bank link status | PM Kisan payment failures ka #1 reason. Har DBT scheme (ladli behna, ration) pe apply hota hai — cross-scheme traffic. |
| 3 | **PM Kisan Helpline Number State-Wise: District Agriculture Officer Contact List 2026** | pm kisan helpline number, pm kisan complaint kaise kare, kisan call center number | Contact-lookup queries evergreen hain — ek comprehensive list page jeet sakta hai. |
| 4 | **Ladli Behna + PM Kisan Dono Mil Sakte Hain? Sarkari Yojana Eligibility Combos 2026** | pm kisan ke sath kaun kaun si yojana, ladli behna pm kisan dono | Combo-eligibility queries pe koi authoritative jawab nahi hai. Unique angle = ranking moat. |
| 5 | **Bhulekh / Land Record Verification PM Kisan Ke Liye — Har State Ka Portal (UP, Bihar, MP, Rajasthan…)** | pm kisan land record verification, bhulekh se pm kisan, land seeding no ka matlab | Land-seeding rejection bahut common hai. State-wise bhulekh portals ka ek hub page = long-tail magnet. |
| 6 | **PM Kisan Aadhaar Number Se Status Check — Registration Number Bhool Gaye? (2026 Naya Tarika)** | aadhaar number se pm kisan status, pm kisan registration number kaise nikale | Aadhaar-direct lookup pe confusion bahut hai, searches consistent hain. Workaround content ranks. |
| 7 | **Kist Nahi Aayi? PM Kisan Refund/Recovery Notice Aaya Hai To Kya Kare (Ineligible Farmers Guide)** | pm kisan recovery notice, pm kisan paisa wapas, ineligible farmer refund | Recovery notices lakho farmers ko mile hain. High-anxiety query, zero good Hinglish content. |
| 8 | **Kisan Credit Card Limit Kaise Badhaye — ₹3 Lakh Se ₹5 Lakh (Interest Subvention 2026)** | kcc limit kaise badhaye, kcc renewal process, kcc interest rate 2026 | Loan cluster expand karta hai. Commercial intent = better AdSense RPM bhi. |
| 9 | **PM Kisan Beneficiary List Village Wise — Har State Ka Direct Link (UP, Bihar, MP, Maharashtra, Rajasthan)** | pm kisan list up village wise, pm kisan list bihar, [state] beneficiary list | Programmatic long-tail, aggregate volume huge. |
| 10 | **Farmer Registry / Kisan Pehchan Patra 2026: AgriStack Registration State-Wise (Deadline + Direct Links)** | farmer registry kaise kare, kisan pehchan patra online, farmer id card 2026 | Farmer Registry ab PM Kisan ke liye mandatory ho raha hai — trending, competition low. First-mover advantage. |

### Priority Order (pehle kya likhein)
1. **#10 Farmer Registry** — trending + mandatory requirement = urgent search demand
2. **#2 NPCI Seeding** — highest cross-scheme evergreen volume
3. **#1 Payment Stopped by State** — desperation queries convert fastest
4. **#9 State-wise lists** — biggest aggregate long-tail
5. Baaki priority order me

---

## Part 3: Article Ke Alawa Zaroori Fixes (Warna 10 Articles Bhi Kaam Nahi Karenge)

1. **Devanagari Hindi support**: Titles/H1 me Hindi keyword bhi rakho — e.g. "PM Kisan Status Check (पीएम किसान स्टेटस)". SERP matching improve hogi.
2. **Evergreen URLs**: Naye articles me year slug me mat daalo (`/pm-kisan-kist-date` not `/pm-kisan-24vi-kist-2026`). Content update karo, URL same rakho.
3. **FAQ schema (JSON-LD)** har article pe — Hindi SERPs me FAQ rich results abhi bhi milte hain.
4. **Internal linking**: Har naya article kam se kam 3 related existing articles se link ho, aur homepage se top articles tak 1-click path ho.
5. **Google Search Console** verify karo aur sitemap submit karo — indexing hi pehla bottleneck ho sakta hai naye site pe.
6. **25vi Kist 2027 article** ko noindex ya merge karo jab tak relevant na ho — future-dated thin content quality signal kharab karta hai.
7. **Backlinks**: 5–10 quality links (agri blogs, YouTube video descriptions, Quora/Reddit answers) ke bina YMYL niche me movement slow rahega.
