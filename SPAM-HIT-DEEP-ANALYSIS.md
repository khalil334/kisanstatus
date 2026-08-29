# KisanStatus.com — Google Spam Hit: Confirmed Analysis + Human-Recovery Guide

**Site:** https://kisanstatus.com · **Repo:** khalil334/kisanstatus
**Analysis date:** 29 August 2026
**Data sources:** Google Search Console (sc-domain:kisanstatus.com, siteOwner), full git history (2,798 commits), article registries (`lib/*.ts`), live sitemap.xml (132 URLs). Har number real hai — kuch bhi fabricate nahi.

---

## GSC SE CONFIRMED: Hit ki Exact Date = 18 August 2026

Search Console ka daily data (June–Aug 2026):

| Period | Impressions/din | Clicks/din |
|---|---|---|
| Late June (launch ke baad) | 100–200 | 1–3 |
| July (dheere growth) | 200–350 | 4–6 |
| 4–13 Aug (achanak spike) | 600 → **2,616** | 16 → **54** |
| 14–17 Aug | 1,400–1,900 | 18–38 |
| **18 Aug se aaj tak** | **40–73 (–96%)** | **0–2** |

**Ab dhyan se dekho timeline:**

- **15–18 Aug:** 22 naye articles publish hue (18 Aug ko akele 13, subah 7 baje se raat tak, minutes ke gap par)
- **18 Aug:** usi din impressions 1,486 → 64. Ek din me. Ye coincidence nahi hai.

Google ne 10–13 Aug ko site ko test diya tha (impressions 2,600/din tak chadhaye — "ranking test window"). Site us test ke beech me 22 AI articles ka burst kar gayi. Result: poora domain demote. Ye classic **scaled content abuse** classification hai.

**Ek aur cheez:** 18 Aug ke baad position 7 se improve hokar 2–3 dikh rahi hai — ye recovery nahi hai. Matlab sirf 2-4 branded queries bachi hain jahan site abhi bhi upar hai; baaki sab queries se site poori tarah nikal di gayi.

---

## Root Causes (Evidence ke Saath)

### 1. 🔴 18-Aug Burst — Direct Trigger (GSC-confirmed)
22 articles in 4 din, jab pichhli analysis ne warn kiya tha "max 2–3/hafta". Machine-pace publishing = machine content, Google ke liye case closed.

### 2. 🔴 Backdated Publish Dates
Repo ka pehla commit **20 June 2026**. Lekin 29 articles ki `publishedTime` **March–May 2026** ki hai — site ke exist hone se pehle. Google first-crawl date se cross-check karta hai; ye date-fabrication domain ka poora date-trust khatam kar deti hai.

### 3. 🟠 Mass Date-Refresh
Sitemap ke 132 me se ~100+ URLs ki lastmod August ki. Har article har hafte genuinely update nahi ho sakta — ye "stale date abuse" hai.

### 4. 🟠 AI-Template Fingerprints
107 articles, ek author, ek jaisa structure, zero real screenshots, sirf 2 articles me sources. Insaan ka kaam aisa nahi dikhta — aur Google ab exactly yehi difference maapta hai.

### 5. 🟠 Bot 403
Article pages non-browser user-agents ko 403 dete hain. Vercel Firewall me check karo ke Googlebot verified-bot allowlist me hai. GSC → URL Inspection → Live Test se confirm karo.

---

# RECOVERY: Sab Kuch Real Insaan Jaisa Kaise Banayein

Ye samajhna sabse zaroori hai: **Google "AI content" ko directly nahi marta — wo "insaan ka haath na hone" ke signals ko marta hai.** Isliye fix ye nahi ke AI use karna band karo; fix ye hai ke har page par asli insaan ki mehnat *visible* ho. Neeche har robotic signal ka human replacement hai.

## Rule 0: Pehle Rukna Hai

**4–6 hafte ZERO naye articles.** Ye sabse bara human signal hai — insaan 13 articles/din nahi likhta, aur rukne se Google ko dikhta hai ke burst khatam ho gaya. Recovery ke chakkar me aur content chaapna = pattern dobara confirm karna. Iske baad bhi max 2/hafta, alag-alag dino aur alag-alag time par (Tuesday 9pm, Saturday 11am — jaise real insaan ka schedule hota hai, robot ka cron job nahi).

## Rule 1: Dates Me Sach Likho

- March–May wali backdated `publishedTime` sab **real upload dates** par lao (git history me sach maujood hai). Ek data-file edit hai — `lib/core-articles-data.ts` etc.
- `modifiedTime` sirf tab badlo jab tumne khud content me kuch **asli** badla ho — naya section, updated kist date, corrected number. Typo fix ya styling change par nahi.
- Aur jab badlo, to article ke andar **visible changelog** rakho: *"Update 26 Aug: 23vi kist ki official date add ki. Pehli baar 24 June ko likha tha."* — ye insaan ki diary jaisa hai; robot chhup ke dates badalta hai, insaan bata ke badalta hai.

## Rule 2: Har Article Me Apna Haath Dikhao

AI kya NAHI kar sakta? Yehi cheezein sabse strong human proof hain:

1. **Asli screenshots** — pmkisan.gov.in par khud status check karo, screen ka screenshot lo (personal info blur), article me daalo caption ke saath: *"Maine 29 Aug ko apne mobile se check kiya — ye screen aayi thi."* Har status/eKYC guide me kam se kam 2–3 asli screenshots.
2. **Apne phone ki photos** — CSC center ki, kisan card ki, bank passbook entry ki (blur karke). Stock images aur generic hero images hatao.
3. **Real cases likho** — *"Mere chacha ka payment NPCI mapping me 3 hafte atka raha. Humne bank jaakar Aadhaar seeding karwayi, agli kist aa gayi."* Specific, verifiable, imperfect detail — yehi insaan ki pehchan hai.
4. **"Last verified" note** — har guide ke top par: *"Maine ye process aakhri baar 29 Aug 2026 ko portal par khud check ki thi."* Lekin ye SACH hona chahiye — jhooth likha to wahi date-fabrication problem wapas.
5. **2-minute screen recording** — phone se status check karte hue YouTube video, article me embed. Face/voice zaroori nahi, sirf asli haath chalta hua dikhna kaafi hai. Ye ek cheez AI sites kabhi nahi kar sakti.

## Rule 3: Robot Ki Awaaz Todo

Abhi ke articles me AI ke tell-tale signs bache hain. Har article edit karte waqt:

| Robotic pattern | Human replacement |
|---|---|
| Har article same skeleton (intro → recap → table → FAQ → related) | Kisi article me FAQ hi na ho. Kisi me sirf ek lambi kahani ho. Kisi me table upar ho. Insaan ka har article alag shape ka hota hai |
| Rhetorical filler headings (*"Sabse Pehle Woh Jawab, Jiske Liye Aap Aaye Hain"*) | Seedha heading: *"Status kaise check karein"*. Jo user Google me type karta hai, wahi heading |
| Har section poori tarah "complete" — har angle covered | Kuch skip karo. Jahan tumhe zyada pata hai wahan deep jao, jahan nahi pata wahan honestly likho *"iska mujhe pakka nahi pata, portal par confirm karein"* |
| "official" 44 baar, "pmkisan.gov.in" 24 baar per 4 articles | Ek baar link karo, phir "portal" ya "wahan" kaho — jaise baat-cheet me kehte ho |
| Em-dashes har jagah (abhi bhi ~764) | Aadhe hatao. Chhote sentences. Kabhi adhoora sentence bhi. Theek hai. |
| Perfect Hinglish grammar har jagah | Insaan kabhi "ki" ki jagah "ke" likh deta hai. Kabhi English word beech me aa jata hai. Ye theek hai — over-polish mat karo |
| Ek jaisa tone 107 articles me | Kist wale article me urgency, loan wale me caution, scam wale me gussa. Mood topic ke saath badalna chahiye |

## Rule 4: Content Kaato — Aadha Site Delete Karna Theek Hai

107 articles me se zyada tar ne kabhi ek click nahi liya. GSC page-data se audit karo (agla step, neeche):

- **Jo pages impressions late the (Aug spike me)** → ye tumhare asli assets hain. Inhe Rule 2–3 se rewrite karo. Roughly 15–25 pages honge.
- **15–18 Aug ke 22 articles** → inme se jo pure template hain, **delete + 301** nearest relevant page par. Inhi ne site ko dubaya hai.
- **Hindi duplicate copies jo kuch naya nahi kehti** → merge ya delete. hreflang lagana kaafi nahi agar dono versions thin hain.
- Target: **107 → ~45–55 articles.** Kam pages jahan har page par insaan ka haath dikhe > 107 template pages. Spam recovery ka proven pattern yehi hai.

## Rule 5: Author Ko Asli Banao

- `/about` par asli kahani already achhi hai (personal PM Kisan problem se start hui) — ab usme **asli photo, location (state/district), aur ye process** likho ke verify kaise karte ho.
- LinkedIn URL agar asli profile nahi hai to schema ke `sameAs` se **hata do** — fake social link negative signal hai. Asli hai to profile par site ka link back karo.
- Article ke end me kabhi-kabhi ek personal line: *"Is hafte 3 logon ne email karke poocha ke..."* — sirf tab jab sach ho.

## Rule 6: Technical Cleanup

1. **Vercel Firewall → Googlebot verify** (403 issue). GSC URL Inspection Live Test se confirm.
2. **GSC → Manual Actions** report check karo. Agar manual action hai to upar ke sab fixes ke BAAD reconsideration request. Agar nahi (sirf algorithmic), to koi request nahi hoti — agla spam/core update rollout hi recovery lata hai.
3. Delete kiye articles ke **301 redirects** `next.config.js` me.
4. Sitemap se deleted URLs foran nikal do; IndexNow script se sirf genuinely changed URLs bhejo.

## Timeline Ki Sachchai

- Fixes ke baad bhi traffic **2–6 mahine flat** rahega. Ye normal hai.
- Recovery agle spam/core update rollout par aati hai, beech me nahi.
- Is dauran sabse bari galti: ghabra kar aur articles chaapna. Sabse achha kaam: 10–15 best articles ko haath se, screenshots ke saath, dheere-dheere rebuild karna.

---

## Priority Checklist

- [ ] Content freeze — 4–6 hafte zero naye articles
- [ ] Backdated publishedTime → real dates (`lib/*-data.ts`)
- [ ] Auto lastmod/modifiedTime bump band
- [ ] Vercel firewall: Googlebot allowed? + GSC live test
- [ ] GSC Manual Actions check
- [ ] GSC page-level audit → keep/rewrite/delete list (107 → ~50)
- [ ] 15–18 Aug ke template articles delete + 301
- [ ] Top 15–25 articles rewrite: screenshots, real cases, changelog, varied structure
- [ ] Author page: real photo, location, verification process; fake LinkedIn hatao
- [ ] Em-dash aur filler-heading cleanup jaari
- [ ] Aage: max 2 articles/hafta, haath se, irregular schedule par

---

*GSC daily data (June 8 – Aug 26, 2026) sc-domain:kisanstatus.com se; publish dates git history + registries se; sitemap live crawl se. 29 Aug 2026.*
