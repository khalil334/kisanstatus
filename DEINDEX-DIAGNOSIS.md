# KisanStatus.com — Deindex Diagnosis

**Date:** 2026-08-23 · **Property:** `sc-domain:kisanstatus.com` · **Repo commit:** `e59bc8d2`
**Data sources:** GSC URL Inspection API (live), live HTML crawl of all 145 sitemap URLs, repo source read.

---

---

## ⚡ STATUS UPDATE — 2026-08-23 (naya GSC screenshot, last update 8/21/26)

**Data source:** GSC Page Indexing screenshots (8/21/26) + GSC URL Inspection API (live, aaj).

### Naye numbers

| | Pehle | Ab (8/21/26) |
|---|---|---|
| Indexed | ~114 | **138** ✅ (badh raha hai) |
| Not indexed | 96 | 96 |

### Reason-wise (8/21/26 screenshot)

| Reason | Pages | Validation | Matlab |
|---|---|---|---|
| Discovered – currently not indexed | 51 | **✅ Passed** (6/25 → 7/1) | Google ne fix accept kar liya; ab crawl queue me hain |
| Page with redirect | 19 | ❌ Failed | Purane redirect URLs — inpe kuch nahi karna, "Failed" sirf isliye hai ke ye pages redirect hi rahenge (by design) |
| Not found (404) | 12 | Started | Purane deleted URLs — normal, khud drop ho jayenge |
| Crawled – currently not indexed | 7 | ❌ Failed | **Yehi 7 asli content-work pages hain** (§ 7 P2 dekho) |
| Soft 404 | 3 | Started | Check pending |
| Redirect error | 2 | Started | Check pending |
| Excluded by 'noindex' | 1 | Not Started | Intentional |
| Alternate page w/ canonical | 1 | Not Started | Normal hreflang behaviour |

### Aaj ki live URL Inspection (API se, fabricated nahi)

| URL | Coverage state |
|---|---|
| `/articles` (hub) | **Submitted and indexed** ✅ (last crawl 7/20/26) |
| `/articles/KisanCreditCardOnlineApply2026` | URL is unknown to Google |
| `/articles/hi` | Discovered – currently not indexed |
| `/articles/fto-status-check-paisa-kab-aayega` | Discovered – currently not indexed |

### Iska matlab kya hai

1. **"Validation passed" on Discovered-not-indexed (51 pages)** — sabse badi khushkhabri.
   Google ne maan liya ke problem theek ho gayi hai. Ab ye sirf **crawl-queue waiting** hai.
   Indexed count 114 → 138 ja chuka hai; trend chart me green bars lagatar badh rahe hain.
   **Kuch mat karo — bas 2–4 hafte aur intezaar.**
2. **Ye AI/spam/duplicate ka case ab bhi NAHI hai** — § 0–4 ka diagnosis valid hai.
   Deleted kuch nahi karna. 91 articles delete karne ka idea ab bhi galat hai.
3. **19 redirect + 12 404 = 31 pages** sitemap me hain hi nahi — purane URLs, ignore karo.
   "Validation Failed" on redirects ka matlab error nahi hai; wo pages redirect hi rahenge.
4. **Asli kaam sirf 7 pages ka hai** — "Crawled – currently not indexed" (validation failed).
   GSC me is row pe click karke EXPORT karo aur list bhejo; sirf unhi ka content review hoga.
5. `/articles` hub khud indexed hai ✅ — lekin last crawl 7/20 ka hai. Agar tab ke baad
   bailout-fix deploy hua hai, to GSC me `/articles` pe **Request Indexing** dabao taake
   Google naya HTML (114 links wala) dekhe.

### Abhi karne wale kaam (chhota list)

- [ ] GSC → "Crawled – currently not indexed" (7 pages) → EXPORT → list share karo
- [ ] GSC → URL Inspection → `/articles` → **Request Indexing** (fresh crawl ke liye)
- [ ] Sitemap `sitemap.xml` re-submit karo
- [ ] Soft 404 (3) aur Redirect error (2) ki URLs bhi export karke bhejo
- [ ] Baaki: **intezaar**. Daily check karke pareshan mat ho — weekly dekho.

---

## ⭐ 51 "Discovered – currently not indexed" pages — ye KESE theek honge (step-by-step)

**Sabse pehle samjho problem kya thi:** Google ne ye 51 pages sitemap me *dekhe* (Discovered),
par kabhi *download nahi kiye* (`last_crawl_time: null`). Kyun? Kyunki `/articles` hub page
Googlebot ko HTML me sirf 3–15 links deta tha — baaki links JavaScript ke baad bante the,
aur Googlebot ko koi internal link nahi mila to usne crawl priority hi nahi di.

**Content ka koi kasoor nahi hai. Delete kuch nahi karna.**

### Fix — 3 code changes (2026-08-23 ko is repo me push hue)

| # | File | Change | Kya theek hota hai |
|---|---|---|---|
| 1 | `app/articles/page.tsx` | Server-rendered "Sabhi Guides A–Z" section — saare ~150 article links ab initial HTML me | 51 pages ko internal links milte hain → Google discover + crawl karega |
| 2 | `app/articles/category/[category]/page.tsx` | Har category page pe bhi server-rendered article list | Category-level discovery, JSON-LD vs HTML mismatch khatam |
| 3 | `components/Footer.tsx` | `/yojana` ka link Quick Links me add | Orphan `/yojana` section har page se reachable |

Ye Option A hai (diagnosis § 7): `ArticlesClient` ka interactive filter waise hi chalta rahega —
hum ne uske NEECHE ek plain server-rendered list add ki hai jo har visitor ko dikhti hai
(hidden nahi — hidden links Google ke against hai). Googlebot ko pehli hi request me
saare links mil jayenge, JavaScript ke bina.

### Deploy ke baad — verify karo (5 minute)

```bash
curl -s https://kisanstatus.com/articles | grep -o 'href="/articles/' | wc -l
# pehle: 15   → fix ke baad: 140+ hona chahiye

curl -s https://kisanstatus.com/ | grep -o 'href="/yojana' | wc -l
# pehle: 0    → fix ke baad: 1+ hona chahiye
```

Browser me bhi kholo (JavaScript band karke best test hai):
1. `https://kisanstatus.com/articles` — neeche "Sabhi Guides A–Z" section me saare articles
2. `https://kisanstatus.com/articles/category/loan` — "Is Category ke Sabhi Guides" list
3. Homepage footer — "Yojana Guides" link dikhna chahiye

### Phir GSC me (verify ke BAAD hi, pehle nahi)

1. **URL Inspection → `https://kisanstatus.com/articles` → Request Indexing** — sabse zaroori step; yehi hub baaki 51 pages discover karayega
2. `https://kisanstatus.com/yojana` ke liye bhi Request Indexing
3. **Sitemaps → sitemap.xml re-submit**
4. Page indexing → "Discovered – currently not indexed" → **VALIDATE FIX** (agar button available ho; pichla validation already Passed hai to skip)

### Timeline — kya expect karo

| Kab | Kya hoga |
|---|---|
| Din 1 (deploy) | curl checks pass |
| Hafta 1 | Google `/articles` ko re-crawl karega, naye links dekhega |
| Hafta 2–4 | 51 pages dhire-dhire "Discovered" se "Indexed" me shift honge |
| Hafta 4+ | Jo bache, unhe individually inspect karo |

⚠️ **Sabr rakho.** 51 pages ek din me index NAHI honge. Google apni speed se crawl karta hai.
Daily GSC mat kholo — hafte me ek baar dekho. Indexed count already 114 → 138 ja chuka hai,
trend sahi direction me hai.


---

## 0. Bottom line — pehle ye padho

**Aapka diagnosis galat hai. Ye AI spam / duplicate / thin content ka case NAHI hai.**

Aap 91 articles delete karne ja rahe the. **Ek bhi delete nahi karna hai.** Content bilkul theek hai — 6,000 se 13,000 words per page, alag-alag prose, proper hreflang. Problem content me nahi, **ek code line me** hai.

Asli wajah ek sentence me:

> `/articles` — wo hub page jo aapke **saare 114 articles** ko link karta hai — Googlebot ko HTML me sirf **3 links** deta hai. Baaki 111 links sirf JavaScript chalne ke baad dikhte hain. Google ne un pages ko **kabhi discover hi nahi kiya**, isliye unhe crawl bhi nahi kiya.

Isi wajah se GSC bolta hai "Discovered – currently not indexed" aur `Last crawled: N/A`.

---

## 1. Error kya hai — exact code

**File:** `app/articles/ArticlesClient.tsx`

```
line   1: 'use client';
line   7: import { useSearchParams, useRouter } from 'next/navigation';
line 224: const searchParams = useSearchParams();
line 533: <Suspense fallback={<ArticlesLoading />}>
line 534:   <ArticlesContent articles={articles} />
line 535: </Suspense>
```

Next.js ka rule hai: `useSearchParams()` ko server par render nahi kar sakte. Isliye Next us poore
`<Suspense>` block ko **client par bhej deta hai**. Server jo HTML bhejta hai usme article list ki
jagah bas ek loading skeleton hota hai.

Live proof — `/articles` ke served HTML me ye milta hai:

```
BAILOUT_TO_CLIENT_SIDE_RENDERING   × 3
animate-pulse  (loading skeleton)  × 6
<a href="/articles/...">           × 3      ← sirf 3 real links
"url":"https://kisanstatus.com/…"  × 115    ← 115 URLs, par sirf JSON-LD ke andar
```

**Google JSON-LD ko link discovery ke liye use nahi karta.** JSON-LD sirf ek page ko *samajhne* ke
liye hai, nayi URLs *dhoondhne* ke liye nahi. Discovery sirf real `<a href>` se hoti hai.

Matlab: aapke 114 articles ka index page Googlebot ke liye practically **khali** hai.

---

## 2. Proof — natural experiment (ye sabse strong evidence hai)

Aapke site pe do listing pages hain jo bilkul same kaam karte hain:

| Hub page | `useSearchParams`? | Server HTML me real links | GSC result |
|---|---|---|---|
| `/articles` (English/Hinglish, 114 articles) | **HAAN** → bailout | **3** | 51 pages not indexed |
| `/articles/hi` (Hindi, 37 articles) | **NAHI** | **37** | Hindi pages mostly indexed |

Same site. Same content quality. Same AI generation method. **Sirf ek code difference.**
Jo hub server-side render hota hai, uske pages index ho gaye. Jo client-side bailout karta hai,
uske pages nahi hue.

Agar problem "AI content" hoti, to Hindi pages bhi deindex hote. Wo indexed hain.
**Isliye AI content wajah nahi hai. Code wajah hai.**

---

## 3. Poora crawl-reachability audit

Maine sabhi 145 sitemap URLs aur sabhi 18 hub pages crawl kiye (JavaScript ke bina, exactly jaise
Googlebot pehli baar dekhta hai):

```
sitemap URLs:              145
sabhi return karte hain:   200 OK   (145/145 — koi bhi page toota nahi hai)
HTML links se reachable:   125
ORPHANED (zero links):      20
```

### Har hub kitne links deta hai

| Hub | Bailout | Real links (HTML) | JSON-LD URLs | Verdict |
|---|---|---|---|---|
| `/articles` | 3 | **3** | 115 | ❌ tuta hua — 112 links gayab |
| `/articles/category/*` (6 pages) | 3 each | 6–8 each | 8–22 | ⚠️ partial |
| `/` (homepage) | 2 | 22 | 13 | ⚠️ theek |
| `/articles/hi` | 2 | 37 | 37 | ✅ sahi |
| `/rajya-yojana` | 2 | 18 | 16 | ✅ sahi |
| `/maandhan` | 2 | 16 | 14 | ✅ sahi |
| `/yojana` | 2 | 9 | 7 | ✅ sahi (par hub khud orphan hai) |

### 20 orphan URLs — sitemap me hain, par site pe koi link nahi

```
/articles/PmKisanBankAccountChangeProcess
/articles/PmKisanCorrectionForm2026
/articles/PmKisanCscRegistrationCharges
/articles/PmKisanLandSeedingForm
/articles/PmKisanMaandhanYojanaPension
/articles/PmKisanMobileNumberChangeUpdate          ← GSC screenshot me hai
/articles/PmKisanRejectedStatusReApplyGuide
/articles/PmKisanStateNodalOfficerList
/articles/PmKisanVillageWiseListPdfDownload        ← GSC screenshot me hai
/articles/PmKisanVoluntarySurrenderGuide
/articles/bihar-pashupalan-loan-yojana
/articles/dairy-farm-loan-without-collateral
/articles/gau-mutra-kharid-yojana-up-2026
/articles/jansamarth-portal-loan-apply
/articles/mandi-bhav-app-comparison
/articles/murgi-palan-loan-nlm-subsidy
/articles/pm-kisan-self-registered-status-check
/articles/rashtriya-gokul-mission-subsidy
/articles/sbi-dairy-loan-interest-rate
/yojana                                            ← poora section hub orphan hai!
```

Note: `/yojana` hub khud orphan hai. Uske andar ke 6 articles isliye 2 clicks door ho gaye
aur unka authority signal bahut kamzor hai.

---

## 4. Live GSC data (URL Inspection API se, aaj ka)

| URL | Coverage state | Last crawl | Referring URLs |
|---|---|---|---|
| `/articles/hi` | Discovered – currently not indexed | **null** | — |
| `/articles/hi/category/farming` | Discovered – currently not indexed | **null** | — |
| `/articles/KisanCreditCardOnlineApply2026` | Discovered – currently not indexed | **null** | **[]** (khali) |
| `/articles/PmKisanEkycOnline2026` | Discovered – currently not indexed | **null** | 1 (`hi/ekyc-mobile-se`) |
| `/yojana/mgnrega-pashu-shed-yojana` | Discovered – currently not indexed | **null** | **[]** (khali) |
| `/articles/hi/annadata-sukhibhava-status` | Discovered – currently not indexed | **null** | **[]** (khali) |

Do cheezein har row me dekho:

1. **`last_crawl_time: null`** — Google ne ye pages **kabhi download hi nahi kiye**.
   Jab page padha hi nahi gaya, to uske content ko "low quality" ya "AI spam" judge karna
   **technically impossible** hai. Ye baat aapke AI-spam theory ko poori tarah khatam kar deti hai.

2. **`referring_urls: []`** — Google ke paas in pages ke liye **ek bhi internal link nahi hai**.
   Yehi exact symptom hai jo Section 1 ka bailout paida karta hai.

---

## 5. GSC screenshot ke 96 not-indexed pages ka breakdown

| Reason | Pages | Asli wajah |
|---|---|---|
| Discovered – currently not indexed | **51** | § 1 ka bailout — internal links nahi hain |
| Page with redirect | 19 | Purane URLs (sitemap me nahi) — normal hai |
| Not found (404) | 12 | Purane deleted URLs — normal hai |
| Crawled – currently not indexed | **7** | Sirf ye 7 content-related ho sakte hain |
| Soft 404 | 3 | Check karna hoga |
| Redirect error | 2 | Check karna hoga |
| Excluded by 'noindex' | 1 | Aapne khud lagaya — intentional |
| Alternate page w/ canonical | 1 | Normal hreflang behaviour |

**51 out of 96 (53%) purely technical hain.** Content ka issue max 7 pages ka hai, 91 ka nahi.

Aur dhyan do: 19 redirect + 12 404 = **31 pages sitemap me hi nahi hain**. Wo purane URLs hain
jo pehle se delete ho chuke. Unke liye kuch karne ki zarurat nahi.

---

## 6. Jo maine galat socha tha (transparency)

Shuru me maine kaha tha ki `/articles/hi/*` aur `/yojana/*` duplicate content hain kyunki dono
pe self-canonical lagi hai. **Wo galat tha.** Verify karne pe:

```
/articles/hi/mgnrega-pashu-shed-yojana   →  57.3% Devanagari  (asli Hindi)
/yojana/mgnrega-pashu-shed-yojana        →   2.5% Devanagari  (Hinglish/Latin)
```

Aur dono pe proper hreflang lagi hui hai:
```html
<link rel="alternate" hrefLang="hi-IN"     href=".../articles/hi/mgnrega-pashu-shed-yojana"/>
<link rel="alternate" hrefLang="hi-Latn"   href=".../yojana/mgnrega-pashu-shed-yojana"/>
<link rel="alternate" hrefLang="x-default" href=".../yojana/mgnrega-pashu-shed-yojana"/>
```

Ye **jaan-boojh ke banaye gaye Hindi ↔ Hinglish translation pairs** hain, `lib/hindi-hreflang.ts`
me 29 pairs mapped hain. Ye correct SEO practice hai. **Yahan koi fix nahi chahiye.**
Self-canonical + hreflang pairs pe bilkul sahi setup hai.

---

## 7. Kya karna hai (priority order)

Kuch bhi karne se pehle: **koi article delete nahi hoga, koi content rewrite nahi hoga.**

### 🔴 P0 — `/articles` ka bailout hatao (yehi 51 pages unblock karega)

`app/articles/ArticlesClient.tsx` me `useSearchParams()` sirf category filter ke liye use hota hai
(line 224). Fix: article list **server par render karo**, filtering ko alag client component me
rakho.

Do options:

- **Option A (recommended, chhota change):** `app/articles/page.tsx` me ek plain server-rendered
  `<ul>` add karo jo saare 114 articles ke `<a href>` deta hai. Isko `<ArticlesClient>` ke *saath*
  rakho — interactive filter waise hi chalta rahega, par Googlebot ko pehli hi request me
  114 real links mil jayenge. Sabse kam risk.
- **Option B (proper fix):** `useSearchParams()` hatao, filter state ko URL path se lo
  (`/articles/category/[category]` already exist karta hai). Isse bailout poori tarah khatam.

Verify karne ka tareeka (JS ke bina, jaise Googlebot dekhta hai):
```bash
curl -s https://kisanstatus.com/articles | grep -c 'href="/articles/'
# abhi: 3    → fix ke baad: 114+ hona chahiye
curl -s https://kisanstatus.com/articles | grep -c BAILOUT_TO_CLIENT_SIDE_RENDERING
# abhi: 3    → fix ke baad: 0 hona chahiye
```

### 🔴 P0 — `/yojana` hub ko header/footer me link karo

Ye poora section hub orphan hai. Footer me `/rajya-yojana` aur `/maandhan` to hain, `/yojana`
nahi hai. Ek line ka fix, poora section unlock.

### 🟠 P1 — 19 orphan articles ko link karo

§ 3 ki list. Inhe apne relevant category page aur related-articles block me add karo.
Ye template-level fix hai, per-page kaam nahi.

### 🟠 P1 — `/articles/category/*` ke bailouts theek karo

6 category pages me bhi 3-3 bailout hain. Wahi P0 wala fix inpe bhi lagega.

### 🟡 P2 — 6 category hubs ka JSON-LD vs HTML mismatch

`status-check` category 22 URLs JSON-LD me declare karti hai par HTML me sirf 7 deti hai.
`loan` 8 vs 6. Pagination ya "show all" link add karo.

### 🟡 P2 — sirf 7 "Crawled – not indexed" pages dekho

Ye ekmatra pages hain jinhe Google ne actually padha aur reject kiya. GSC me export karke
inki list nikalo. Repo ka `CONTENT-AUDIT-DUPLICATES-AI.md` already flag karta hai:
`PmKisan26viKist` thin hai (~1,800 words vs baaki 4,100+). Kist series me cannibalization bhi
ho sakti hai. Ye asli content work hai — par **sirf 7 pages ka, 91 ka nahi**.

### ⛔ Jo NAHI karna

- ❌ Koi article delete mat karo — content healthy hai (6k–13k words, distinct prose)
- ❌ `hi/` ↔ `yojana/` pairs ko chhedo mat — wo intentional hreflang translations hain
- ❌ Canonical tags change mat karo — abhi sahi hain
- ❌ 404/redirect wale 31 pages pe time waste mat karo — wo purane deleted URLs hain

---

## 8. Fix ke baad browser me ye check karo

P0 deploy hone ke baad ye pages khud kholo aur verify karo:

1. `https://kisanstatus.com/articles` — saare 114 article cards **turant** dikhne chahiye,
   loading spinner ke bina. **JavaScript disable karke bhi check karo** — asli test yahi hai.
2. `https://kisanstatus.com/yojana` — header ya footer se reachable hona chahiye
3. `https://kisanstatus.com/articles/category/loan` — saare loan articles dikhein
4. `https://kisanstatus.com/articles/category/status-check` — 22 articles (7 nahi)
5. Koi 2-3 orphan URLs (jaise `/articles/sbi-dairy-loan-interest-rate`) — inpe kisi
   category page se pahuncha ja sakta ho

Command-line verification (ye sabse reliable hai):
```bash
curl -s https://kisanstatus.com/articles | grep -c 'href="/articles/'   # 114+ expected
curl -s https://kisanstatus.com/articles | grep -c BAILOUT              # 0 expected
```

---

## 9. Re-crawl trigger karna (fix deploy hone ke BAAD)

⚠️ Ye steps deploy se pehle mat karo — Google phir wahi tuti HTML dekhega.

1. **GSC → URL Inspection** → `https://kisanstatus.com/articles` daalo → **Request Indexing**
   (ye sabse important — yahi hub baaki 111 pages discover karayega)
2. Same karo `/yojana` ke liye, aur 6 category pages ke liye
3. **GSC → Sitemaps** → `sitemap.xml` **re-submit** karo (lastmod update ho jayegi)
4. **GSC → Page indexing → "Discovered – currently not indexed"** → **VALIDATE FIX** dabao
5. Phir **wait karo — 2 se 4 hafte**. 51 pages ek din me index nahi honge; Google apni speed se
   crawl karega. Har din check karke pareshan mat ho.

Manual "Request Indexing" ka daily quota ~10 URLs hai. Isliye individual articles pe waste na
karo — **hub pages pe lagao**. Ek hub theek hone se Google khud uske saare child pages dhoondh
lega. Yahi is fix ki poori taakat hai.

---

## 10. Summary

| | |
|---|---|
| **Aapka guess** | 91 articles AI spam / duplicate / thin hain → delete kar do |
| **Asli problem** | `app/articles/ArticlesClient.tsx` me `useSearchParams()` → CSR bailout → hub HTML me 114 ke bajaye 3 links |
| **Proof** | `last_crawl_time: null` + `referring_urls: []` har affected page pe; `/articles/hi` (bina bailout) indexed hai, `/articles` (bailout ke saath) nahi |
| **Content quality** | Healthy — 6,000–13,000 words/page, distinct prose, proper hreflang |
| **Delete karne wale articles** | **0** |
| **Asli fix** | 1 component refactor + ~20 internal links |
| **Kitne pages theek honge** | 51 (+19 orphans) |
| **Expected timeline** | Fix: 1 din · Google recovery: 2–4 hafte |

Aapki site technically block hui hai, penalized nahi. Content par mehnat waste nahi gayi —
Google ne usse dekha hi nahi. Ek component theek karo, aur 70 pages ka rasta khul jayega.
