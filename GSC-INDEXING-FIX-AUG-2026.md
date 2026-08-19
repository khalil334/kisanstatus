# GSC Indexing Fix — August 2026

**Date:** 2026-08-19
**Source:** Google Search Console → Page indexing (data as of 2026-08-17: 143 indexed / 78 not indexed, 8 reasons)
**Property:** `sc-domain:kisanstatus.com` (siteOwner)
**Scope:** Sirf indexing/coverage errors. Content rewrites, design, ya doosre Ahrefs issues is doc me nahi hain.

---

## 0. Pehle: kya-kya verify kiya (guess nahi, live data)

Koi bhi fix propose karne se pehle live site + repo ka poora audit chalaya. Ye baseline zaroori hai,
warna GSC ke purane "Failed" badges dekh kar aisi cheezein "fix" kar dete jo already theek hain.

| Check | Method | Result |
|---|---|---|
| Sitemap ke saare URLs ka HTTP status | `sitemap.xml` se 150 URL nikaal kar har ek pe `curl` | **150/150 = `200 OK`** — ek bhi 404 ya redirect nahi |
| `next.config.js` ke 70 static redirects | Har `source` pe `curl -L`, hops + final code | **Sab single-hop, sab `200` pe khatam** — koi chain/loop nahi |
| Host normalisation | `http://`, `www.`, `kisanstatus.vercel.app` | Sab **1 hop** me apex `https://kisanstatus.com` ✅ |
| Trailing slash | `/about/`, `/articles/` | **1 hop**, clean ✅ (`trailingSlash: false`) |
| Canonical tags | 150 pages ka HTML parse | **0 mismatch, 0 missing** ✅ |
| Internal links | 150 pages crawl → 161 distinct internal targets | **0 broken, 0 redirecting** ✅ |
| title ↔ H1 alignment | `node scripts/check-title-h1.js` | **108/108 pairs aligned**, no double-branding ✅ |
| Sitemap health | GSC `list_sitemaps` | 150 web + 113 image submitted, **0 errors, 0 warnings** ✅ |
| Google ke paas kya rank kar raha hai | GSC Search Analytics, 2026-05-20 → 2026-08-18, page dimension | **152 URLs** with impressions — inme se **61 sitemap me nahi**, aur unme se **9 asli 404** |

### Isliye: GSC ke zyadatar "Failed" badges stale hain

GSC screenshot ka data **17 Aug** ka hai. 17 Aug ke commits (`GSC fix (2026-08-17)` redirects) ne
"Not found (404)", "Redirect error", "Page with redirect" wale zyadatar URLs **already theek kar diye
hain** — live test isko prove karta hai. Wo rows abhi bhi "Failed / Started" dikhte hain kyunki
**Google ki side pe validation pending hai**, code me kuch bacha nahi.

Yani: 78 "not indexed" ka bada hissa already resolved hai aur re-crawl pe khud clear hoga.
**Neeche wale 3 issues asli hain aur code change maangte hain.**

---

## Issue 1 — 9 URLs Google me rank kar rahe hain par site pe 404 hain

**GSC reason:** `Not found (404)` — 12 pages (Started)
**Severity:** HIGH — ye ranking traffic ka seedha nuksaan hai
**Impact:** ~78 impressions/90 din wapas + Google ka crawl budget bacha

### Kya problem hai

Site ke slugs waqt ke saath badle (kebab-case → PascalCase, category restructure), par Google ke
index me purane URLs abhi bhi hain aur log unpe click kar rahe hain. Un URLs ke liye koi redirect
nahi likha gaya, isliye wo `404` de rahe hain. Google 404 dekh kar URL ko index se giraata hai —
aur uske saath us URL ke saare backlinks/ranking signals bhi zaya ho jaate hain.

### Kyun hua

`next.config.js` me redirect list **reactive** tarike se badhti rahi hai — jab kisi ne 404 notice
kiya, tab entry add hui. Slug rename ke waqt redirect add karne ka koi step process me nahi tha,
isliye har rename ek naya orphan 404 chhod gaya. In 9 me se 2 to aise hain jinka **exact
replacement page maujood hai** (`kisan-rin-kaha-se-le-2026` → `KisanRinKahaSeLe2026`,
`pm-kisan-land-seeding-status` → `PmKisanLandSeedingForm`) — sirf `-` vs PascalCase ka farq hai.

Do URL (`/articles/category/registration`, `/articles/category/ekyc`) alag wajah se toote hain:
`app/articles/category/[category]/page.tsx` `notFound()` call karta hai jab category
`lib/categories.ts` ke `CATEGORIES` object me na ho. `registration` aur `ekyc` valid `CategorySlug`
nahi hain (valid: `status-check`, `loan`, `farming`, `mandi`, `pashupalan`, `agri-business`) —
matlab ye URLs kabhi kisi purane taxonomy se aaye ya bahar se linked hain.

### Affected URLs (GSC impressions ke saath, sab live-verified `404`)

| # | 404 URL | imp | Proposed target | Reason |
|---|---|---:|---|---|
| 1 | `/articles/pm-kisan-problems-solution-guide-2026` | 19 | `/articles/PmKisanMasterGuide2026` | Master guide hi problems ka umbrella hai |
| 2 | `/articles/pm-kisan-correction-deactivate-block-guide-2026` | 17 | `/articles/PmKisanCorrectionForm2026` | Exact topic match (correction) |
| 3 | `/articles/pm-kisan-status-check-online-2026-complete-guide` | 14 | `/articles/PmKisan24viKist2026` | Maujooda `pm-kisan-status-check-2026` redirect isi target pe jaata hai — consistent |
| 4 | `/articles/kisan-rin-kaha-se-le-2026` | 10 | `/articles/KisanRinKahaSeLe2026` | **Exact twin slug**, sirf casing farq |
| 5 | `/articles/pm-kisan-registration-online-2026` | 7 | `/articles/PmKisanMasterGuide2026` | Maujooda `/new-registration` redirect isi target pe hai |
| 6 | `/articles/pm-kisan-installment-history-check-online` | 6 | `/articles/PmKisan24viKist2026` | Installment status ka canonical page |
| 7 | `/articles/category/registration` | 3 | `/articles/category/status-check` | `registration` valid CategorySlug nahi |
| 8 | `/articles/pm-kisan-land-seeding-status` | 1 | `/articles/PmKisanLandSeedingForm` | **Exact page maujood hai** |
| 9 | `/articles/category/ekyc` | 1 | `/articles/category/status-check` | eKYC guides isi category me hain |

### Bonus — site ki #1 ranking URL galat page pe ja rahi hai

`/articles/pm-kisan-land-seeding-status-check` — **531 impressions, 7 clicks** — ye site ki sabse
zyada impressions wali URL hai. Ye 404 nahi hai (redirect maujood hai), **par galat jagah jaati
hai**: abhi generic `PmKisanMasterGuide2026` pe, jabki `PmKisanLandSeedingForm` exact-match page
maujood hai. Land-seeding intent wala user master guide pe land kar ke bounce karta hai — CTR 1.3%
isi ka lakshan hai.

Ye same commit me theek hona chahiye kyunki root cause ek hi hai: land-seeding ka dedicated page
banne ke baad purane redirects update nahi kiye gaye.

### Fix kaise hoga

`next.config.js` ke `redirects()` array me 9 nayi `permanent: true` (308) entries, plus 1 maujooda
entry ka target badalna. Sab **template-level ek file me** — koi per-page kaam nahi.

```js
// GSC fix (2026-08-19): URLs Google still ranks that 404 — see GSC-INDEXING-FIX-AUG-2026.md
{ source: '/articles/pm-kisan-problems-solution-guide-2026',           destination: '/articles/PmKisanMasterGuide2026',    permanent: true },
{ source: '/articles/pm-kisan-correction-deactivate-block-guide-2026', destination: '/articles/PmKisanCorrectionForm2026', permanent: true },
{ source: '/articles/pm-kisan-status-check-online-2026-complete-guide',destination: '/articles/PmKisan24viKist2026',       permanent: true },
{ source: '/articles/kisan-rin-kaha-se-le-2026',                       destination: '/articles/KisanRinKahaSeLe2026',      permanent: true },
{ source: '/articles/pm-kisan-registration-online-2026',               destination: '/articles/PmKisanMasterGuide2026',    permanent: true },
{ source: '/articles/pm-kisan-installment-history-check-online',        destination: '/articles/PmKisan24viKist2026',       permanent: true },
{ source: '/articles/pm-kisan-land-seeding-status',                    destination: '/articles/PmKisanLandSeedingForm',    permanent: true },
{ source: '/articles/category/registration',                           destination: '/articles/category/status-check',     permanent: true },
{ source: '/articles/category/ekyc',                                   destination: '/articles/category/status-check',     permanent: true },
```

Plus maujooda line ka target badlega (relevance fix):

```js
// tha:  { source: '/articles/pm-kisan-land-seeding-status-check', destination: '/articles/PmKisanMasterGuide2026', ... }
   {    source: '/articles/pm-kisan-land-seeding-status-check', destination: '/articles/PmKisanLandSeedingForm', permanent: true },
```

**Verification:** `npm run build` (redirect syntax + title check pass hona chahiye), phir deploy ke
baad har 10 URL pe `curl -I` → `308` → final `200`.

---

## Issue 2 — noindex page ko internal links mil rahe hain

**GSC reason:** `Excluded by 'noindex' tag` — 1 page (Not started)
**Severity:** LOW-MEDIUM — crawl budget + mixed signal
**Affected page:** `/articles/PmKisan26viKist`

### Kya problem hai

`lib/core-articles-data.ts` me is article pe `noindex: true` set hai. **Ye decision sahi hai** —
26vi kist ~Jun 2027 ki baat hai, abhi search demand zero hai, aur page site ke 2,000-word standard
se neeche hai. `app/sitemap.ts` ise sahi tarike se sitemap se drop bhi karta hai.

Problem ye hai ki **do live indexed pages ise internally link kar rahe hain**:

- `/articles/hi/fasal-bima-claim-status`
- `/maandhan/pm-kisan-maandhan-pension-card-download`

Googlebot in links ko follow karta hai, page fetch karta hai, `noindex` padhta hai, aur discard kar
deta hai — har crawl cycle me. Ye crawl budget waste hai aur ek mixed signal bhi: "sitemap kehta hai
mat aao, internal links kehte hain aao."

### Kyun hua

`relatedSlugs` array manually maintain hote hain aur unme **noindex flag ka koi check nahi hai**.
Jab `PmKisan26viKist` banaya gaya tab wo doosre articles ke `relatedSlugs` me add ho gaya; baad me
`noindex: true` laga par related-links wapas saaf nahi kiye gaye. Yehi paitern kisi bhi future
noindex page ke saath dohraayega.

### Fix kaise hoga

Do parts — ek turant, ek permanent:

1. **Data fix:** un 2 articles ke `relatedSlugs` me `PmKisan26viKist` → `PmKisan25viKist2027`
   (25vi kist page indexed hai aur topically nearest hai).
2. **Template-level guard (asli fix):** jahan `relatedSlugs` resolve hote hain, wahan `noindex`
   articles ko filter kar do. Iske baad koi bhi noindex page automatically internal links se
   nikal jayega — future me ye issue dobara nahi aayega.

**Verification:** deploy ke baad un 2 pages ka HTML grep karo — `PmKisan26viKist` ka koi `href`
nahi hona chahiye.

---

## Issue 3 — 6 titles 60-char budget se lambe (Ahrefs "titles do not match" ki jad)

**GSC reason:** direct row nahi — ye Ahrefs Site Audit issue `Page and SERP titles do not match` ka underlying cause hai
**Severity:** MEDIUM — ranking nahi girta, par SERP CTR girta hai
**Affected:** 6 pages

### Kya problem hai

`app/layout.tsx` ka title template ` - KisanStatus` **suffix append karta hai (14 chars)**:

```ts
title: { template: `%s - ${SITE_NAME}` }   // app/layout.tsx:50
```

Iska matlab per-page `seoTitle` ka budget **≤46 chars** hai (46 + 14 = 60, Google ka practical
desktop limit). Ye 6 pages us budget se bahar hain, isliye rendered `<title>` 72–83 chars ka ban
jaata hai:

| Page | rendered `<title>` len | `seoTitle` len | data file |
|---|---:|---:|---|
| `/articles/NanoDap500mlPriceInIndia2026` | 83 | 65 | `core-articles-data.ts` |
| `/articles/msp-list-2026-27` | 81 | 63 | `loan-mandi-pashupalan-data.ts` |
| `/articles/bakri-palan-yojana-nlm-subsidy` | 77 | 63 | `core-articles-data.ts` |
| `/articles/bihar-pashupalan-loan-yojana` | 76 | 58 | `loan-mandi-pashupalan-data.ts` |
| `/articles/fto-status-check-paisa-kab-aayega` | 73 | 59 | `core-articles-data.ts` |
| `/articles/PmKisanCscRegistrationCharges` | 72 | 58 | `core-articles-data.ts` |

Jab title lamba ho, Google use **truncate ya poora rewrite** karta hai (aksar H1 ya body text se
apna title banata hai). Wahi Ahrefs "Page and SERP titles do not match" ke roop me flag hota hai.
Yani ye issue actually **title length** ka hai, separator ya wording ka nahi.

### Kyun hua

Do wajah:

1. **46-char budget documented hai par enforced nahi.** `CLAUDE.md` me `yojana-2026-data.ts` ke liye
   "title ≤46 chars; layout appends 14-char suffix, 60 budget" likha hai — par ye rule sirf ek data
   file ke liye note hai, aur **build me koi check nahi** karta.
2. **`scripts/check-title-h1.js` length nahi dekhta.** Wo title↔H1 keyword alignment aur
   double-branding check karta hai (dono pass ho rahe hain, 108/108) — length ka koi assertion nahi
   hai. Isliye 65-char `seoTitle` bhi green build deta hai.

Devanagari titles me ye zyada chubhta hai: Google ka truncation **pixel width** pe hota hai, aur
Hindi glyphs Latin se wide render hote hain — matlab 59-char Hindi title effectively 65-char Latin
jitna cut hota hai. `fto-status-check-paisa-kab-aayega` aur `msp-list-2026-27` isi category me hain.

### Fix kaise hoga

1. **6 `seoTitle` values ko ≤46 chars pe trim** karo — keyword head (jo H1 aur target query se
   match karta hai) rakhna, tail se decorative parts (`Online Apply Process`, `(सरकारी सूची)`,
   `Dose & Subsidy`) hatana. Naye exact strings **approve karne se pehle dikhaye jayenge** — ye
   ranked pages hain, blind edit nahi honge.
2. **`scripts/check-title-h1.js` me length guard add karo:** rendered title (seoTitle + 14) > 60
   pe build fail. Kyunki `npm run build` pehle `check:titles` chalata hai, ye issue dobara **merge
   hi nahi ho payega**.

**Verification:** `node scripts/check-title-h1.js` clean pass; deploy ke baad 6 pages ka `<title>`
length ≤60; 2–3 hafte baad GSC me un queries ki CTR compare karo.

---

## Jo already theek hai — ise chhedna nahi

Ye deliberately likha ja raha hai taaki koi future session GSC ke stale "Failed" badge dekh kar
kaam ka duplicate na kare:

- **Redirect infra sound hai.** 70 static redirects, sab single-hop, sab `200` pe. Host
  normalisation (`www`, `vercel.app`, `http`) `redirects()` array me **sabse pehle** hai — ye
  jaan-boojh kar hai (comment padhein), isse www traffic hop 1 me apex pe aa jaata hai. Is order ko
  na badlein.
- **Canonicals clean hain.** 150/150 pages pe self-referencing canonical, 0 missing.
- **Sitemap clean hai.** 0 errors/warnings; `noindex` articles sahi tarike se excluded
  (`app/sitemap.ts:361`).
- **Internal links clean hain.** 161 targets, 0 broken — except Issue 2 wala noindex link.
- **title↔H1 aligned hain.** 108/108. Pipe→dash separator fix (2026-08) kaam kar gaya.
- **`/search` noindex hai aur robots.txt me disallow NAHI hai** — ye jaan-boojh kar hai
  (`app/robots.ts:14`), taaki Google `noindex` actually padh sake. Disallow add na karein.
- **`/articles/PmKisan26viKist` ka `noindex: true` sahi hai.** Page 2027 ka topic hai. Sirf uske
  internal links hatane hain, flag nahi.

---

## Execution order

| Step | Fix | Blast radius | Commit |
|---|---|---|---|
| 1 | 9 redirects + land-seeding retarget | `next.config.js` only | `SEO: redirect 9 ranked-but-404 URLs (GSC Aug 2026)` |
| 2 | noindex internal links + relatedSlugs filter | 2 data entries + 1 resolver | `SEO: stop linking to noindex article` |
| 3 | 6 titles trim + build-time length guard | 2 data files + check script | `SEO: trim 6 over-length titles, enforce 60-char budget` |

Har step alag commit, alag push — taaki koi regression dikhe to usay isolate kar ke revert kiya ja
sake. Step 1 sabse pehle kyunki wahi traffic wapas laata hai.

### Deploy ke baad (har step pe)

1. Vercel deploy green hone ka wait karo.
2. Us step ke URLs manually browser me kholo (list har commit ke saath di jayegi).
3. GSC → **URL Inspection** → us URL pe **Request Indexing**.
4. GSC → **Page indexing** → affected reason row → **Validate Fix**.
5. Optional: `npm run indexnow:submit` — Bing/Yandex ko instant ping.

Validation Google ki taraf se **2–4 hafte** leti hai. Us window me GSC ka number badalna zaroori
nahi — live `curl` check hi sach hai.

---

## Reference — is audit ko dobara kaise chalayein

```bash
# 1. Sitemap ke saare URLs ka status
curl -s https://kisanstatus.com/sitemap.xml | grep -o '<loc>[^<]*</loc>' | sed 's|</\?loc>||g' \
  | grep -v '\.webp\|\.png\|\.jpg' | while read u; do
      echo "$(curl -s -o /dev/null -w '%{http_code}' "$u") $u"; done | grep -v '^200'

# 2. next.config.js ke redirects — chains dhoondho
grep -o "source: '[^']*'" next.config.js | sed "s/source: '//;s/'//" | grep -v ':path\*\|:slug' \
  | while read p; do
      curl -s -o /dev/null -w "%{http_code} hops=%{num_redirects} $p\n" -L "https://kisanstatus.com$p"; done

# 3. title/H1 check
node scripts/check-title-h1.js
```

GSC data ke liye: `google_search_console.top_pages` (page dimension, 90 din) se ranking URLs nikaalo,
`sitemap.xml` se diff karo, jo bache unpe `curl` chalao — 404 wahi milte hain.

**GSC property:** `sc-domain:kisanstatus.com` · **Ahrefs Site Audit project_id:** 10042735
