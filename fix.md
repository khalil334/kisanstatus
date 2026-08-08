# fix.md — GSC Page-Indexing issues ka fix plan

**Data source:** Google Search Console → Page indexing → "All known pages" export
(`kisanstatus.com-Coverage-2026-08-08.zip`), plus live HTTP verification against
`https://kisanstatus.com` on 2026-08-08 aur repo `main` @ `1eda73e`.

**Ye document sirf plan hai** — isme koi code change nahi kiya gaya. Har issue ke liye
root cause, exact file, exact fix, aur verify command likhi hai.

---

## ✅ Status update — 2026-08-08 (PR #123 merged)

| Fix | Status | Kahan |
|---|---|---|
| FIX-1 (Soft 404 + VillageWise redirect) | ✅ **DONE** — merged in PR #123 | `dynamicParams = false` chaaron routes mein; redirect `next.config.js` mein move; in-page `redirect()` dono copies removed |
| FIX-4 (sitemap priority + crawlDelay) | ✅ **DONE** — merged in PR #123 | Role-based priority (built sitemap: 1×1.0, 4×0.9, 3×0.8, 75×0.7, 6×0.6, 2×0.5, 3×0.3); `crawlDelay` removed from `app/robots.ts` |
| FIX-5 (duplicate apple meta tags) | ✅ **DONE** — merged in PR #123 | `metadata.other` se teeno `apple-mobile-web-app-*` entries removed |
| FIX-3 (`.vercel.app` redirect error) | ⏳ **OWNER ACTION** — code nahi, Vercel dashboard | Settings → Domains ya Deployment Protection (neeche §3) |
| FIX-2 (13 × 404 triage) | ⏳ **BLOCKED** — GSC CSV export chahiye | GSC → Page indexing → "Not found (404)" → EXPORT (neeche §2) |

Verification pre-merge: `tsc --noEmit` clean, `eslint` clean, `next build --webpack`
success (94 sitemap URLs). **Deploy ke baad** neeche wali "Deploy ke baad — checklist"
zaroor follow karo (browser re-checks + GSC re-crawl/validate).

---

## 0. Current state (GSC ke numbers)

Property: `kisanstatus.com` · Last update: 2026-08-05

| | Pages |
|---|---|
| **Indexed** | 107 |
| **Not indexed** | 59 |
| Sitemap URLs (live) | 94 |

`Chart.csv` ka trend accha hai — indexed 50 (June) → 93 (mid-July) → **107** (Aug),
impressions 0 → **831/day**. Site upar ja rahi hai; neeche ke issues growth ko cap kar
rahe hain, site ko tod nahi rahe.

### Not-indexed reasons — severity ke hisaab se

| Sev | Reason | Pages | Validation | Ye asli bug hai? |
|---|---|---|---|---|
| 🔴 Critical | Soft 404 | 3 | Not started | **HAAN** — §1 |
| 🔴 Critical | Crawled - currently not indexed | 6 | Failed | **HAAN** (§1 ka side-effect + §5) |
| 🔴 Critical | Not found (404) | 13 | Failed | **Partly** — §2 (URL list chahiye) |
| 🟠 Warning | Redirect error | 2 | Not started | **HAAN** — §3 |
| 🟠 Warning | Discovered - currently not indexed | 20 | Passed | **Partly** — §5 (crawl budget) |
| 🟡 Notice | Page with redirect | 12 | Failed | **NAHI** — expected, §4 |
| 🟡 Notice | Alternate page with proper canonical tag | 2 | Not started | **NAHI** — expected, §4 |
| 🟡 Notice | Excluded by 'noindex' tag | 1 | Not started | **NAHI** — intentional, §4 |
| ⚪ Clean | Blocked by robots.txt | 0 | N/A | — |

> **Note:** GSC ka summary export sirf counts deta hai, per-reason URL list nahi.
> §2 ke 13 URLs ke liye GSC UI mein reason par tap karke uska **apna** CSV export
> chahiye. Baaki sab issues live testing se **confirm** ho chuke hain.

---

## 🔴 FIX-1 — Soft 404: invalid slug par HTTP 200 milta hai

**Severity:** Critical · **Effort:** chhota (4 lines + 1 redirect move) · **Impact:** sabse zyada

### Kya hua (live proof)

```
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com/maandhan/koi-galat-slug
200
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com/articles/koi-galat-slug
200
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com/rajya-yojana/koi-galat-slug
200
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com/articles/category/koi-galat-cat
200
```

Body mein 404 ka UI dikhta hai, lekin HTTP status **200** hai. Google ke liye iska
matlab: "ye page maujood hai" → wo use **Soft 404** ya **Crawled - currently not
indexed** mein daal deta hai. GSC ke 3 + 6 = **9 pages** isi wajah se hain.

Aur ek clue: invalid slug ka canonical galat ban jata hai —

```
$ curl -s https://kisanstatus.com/maandhan/koi-galat-slug | grep -o '<link rel="canonical"[^>]*>'
<link rel="canonical" href="https://kisanstatus.com"/>
```

Yaani har galat slug homepage ko canonical bata raha hai — homepage ke signals ko
dilute karta hai.

Ulta, root-level random path **sahi** kaam karta hai:

```
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com/yeh-path-exist-nahi-karta-12345
404   ✅
```

Toh problem sirf **dynamic `[slug]` routes** mein hai.

### Root cause

`app/loading.tsx` maujood hai. Next.js App Router jab root `loading.tsx` dekhta hai to
wo response ka shell **turant, HTTP 200 headers ke saath stream** kar deta hai. Uske
baad `generateMetadata()` ya page component ke andar `notFound()` call hone se **status
code badal nahi sakta** — headers already ja chuke hote hain. Code ke `notFound()`
calls sahi hain, par bekaar jaate hain.

Proof ki shell stream ho rahi hai — invalid slug ke body mein loading text bhi hai:

```
$ curl -s https://kisanstatus.com/articles/koi-galat-slug | grep -o 'load ho raha hai'
load ho raha hai
load ho raha hai
```

### Fix (template-level, per-page kaam nahi)

Chaaron SSG routes ke sab valid slugs `generateStaticParams()` se aate hain. Isliye
`dynamicParams = false` add karne se **unknown slug router level par hi real 404** dega
— render se pehle, shell stream hone se pehle.

In chaar files mein `generateStaticParams` ke paas ye line add karo:

```ts
export const dynamicParams = false;
```

| File | Line (approx) |
|---|---|
| `app/articles/[slug]/page.tsx` | 219 ke paas |
| `app/maandhan/[slug]/page.tsx` | 21 ke paas |
| `app/rajya-yojana/[slug]/page.tsx` | 163 ke paas |
| `app/articles/category/[category]/page.tsx` | 54 ke paas |

### ⚠️ Blocker — pehle ye karna zaroori hai

`app/articles/[slug]/page.tsx` mein ek **in-page redirect** hai jo do jagah duplicate hai
(line **230** `generateMetadata` mein, aur line **324** page component mein):

```ts
if (slug === 'PmKisanBeneficiaryListVillageWise2026') {
  redirect('/articles/PmKisanBeneficiaryList2026');
}
```

Ye slug `generateStaticParams()` mein **nahi** hai (kyunki ARTICLES data mein nahi hai —
verify: `grep -rn "PmKisanBeneficiaryListVillageWise2026" lib/` → 0 hits, sirf
`page.tsx` mein). Toh `dynamicParams = false` lagate hi ye slug **404 ho jayega** aur
uske purane backlinks toot jayenge.

**Aur ye redirect abhi bhi kaam nahi kar raha** — live pe:

```
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com/articles/PmKisanBeneficiaryListVillageWise2026
200          ← 308 hona chahiye tha
$ curl -sL -o /dev/null -w '%{url_effective}' .../PmKisanBeneficiaryListVillageWise2026
https://kisanstatus.com/articles/PmKisanBeneficiaryListVillageWise2026   ← redirect hua hi nahi
$ curl -s .../PmKisanBeneficiaryListVillageWise2026 | grep -o '<title>[^<]*</title>'
(khaali — koi title nahi)
$ curl -s .../PmKisanBeneficiaryListVillageWise2026 | grep -o '<link rel="canonical"[^>]*>'
(khaali — koi canonical nahi)
```

47 KB ka page, `PmKisanBeneficiaryList2026` ka content render ho raha hai, **galat URL
par**, **bina title**, **bina canonical**, status **200**. Ye khud ek soft-404 /
duplicate-content hai — bilkul wahi `loading.tsx` wali wajah.

**Fix:** ye redirect `next.config.js` ke `redirects()` block mein le jao (jahan baaki 58
redirects hain), aur `page.tsx` se **dono** copies (line 230 + 324) hata do:

```js
{ source: '/articles/PmKisanBeneficiaryListVillageWise2026',
  destination: '/articles/PmKisanBeneficiaryList2026', permanent: true },
```

`next.config.js` ke comment ke mutabiq redirects **sirf wahin** rehne chahiye —
`vercel.json` mein nahi (BUG-2 ka split-brain). Ye us rule ke bhi mutabiq hai.

### Order (isi sequence mein karo)

1. `next.config.js` mein VillageWise2026 redirect add karo
2. `app/articles/[slug]/page.tsx` se dono in-page `redirect()` blocks hatao
   (`redirect` import bhi ab unused ho jayega — line 2 se hatao, warna lint error)
3. Chaaron files mein `export const dynamicParams = false;` add karo
4. `npx tsc --noEmit && npx eslint .` → clean hona chahiye
5. `npx next build --webpack` → 94 pages build hone chahiye

### Verify (deploy ke baad)

```bash
# ye chaaron 404 aane chahiye
for u in /maandhan/koi-galat-slug /articles/koi-galat-slug \
         /rajya-yojana/koi-galat-slug /articles/category/koi-galat-cat; do
  echo "$u -> $(curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.com$u)"
done

# ye 308 aana chahiye, final 200 PmKisanBeneficiaryList2026 par
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' \
  https://kisanstatus.com/articles/PmKisanBeneficiaryListVillageWise2026

# aur sitemap ke sab 94 URL 200 rehne chahiye (regression check)
curl -s https://kisanstatus.com/sitemap.xml | grep -o '<loc>[^<]*' | sed 's/<loc>//' | \
  while read u; do c=$(curl -s -o /dev/null -w '%{http_code}' "$u"); \
  [ "$c" != 200 ] && echo "BROKEN $c $u"; done; echo "sitemap check done"
```

---

## 🔴 FIX-2 — Not found (404): 13 pages, Validation **Failed**

**Severity:** Critical · **Effort:** medium · **Blocker: URL list chahiye**

### Status

GSC keh raha hai 13 URLs 404 dete hain aur validation **Failed** ho gayi. Summary
export mein URL list nahi hai, isliye ye issue **abhi actionable nahi** hai.

### Jo humne khud confirm kiya

Ye paths live pe 404 dete hain (legacy/bot patterns, inme se kuch GSC ke 13 mein ho
sakte hain):

| Path | Status | Kya karna chahiye |
|---|---|---|
| `/sitemap_index.xml` | 404 | Yoast-style path. Redirect → `/sitemap.xml` |
| `/feed` | 404 | WordPress-style. Redirect → `/rss.xml` |
| `/index.html` | 404 | Redirect → `/` |
| `/amp` | 404 | Chhod do (koi AMP version nahi hai) |
| `/ARTICLES` | 404 | Case-sensitivity. Chhod do ya lowercase redirect |

Achhi khabar: **sitemap ke 94 URLs mein se koi bhi 404 nahi** hai, aur repo ke 67
internal `href`s mein se bhi koi 404 nahi. Toh ye 404s **site ke andar se nahi** aa rahe
— purane backlinks / GSC history / bot guesses hain.

### Aapko kya karna hai

GSC → Page indexing → **"Not found (404)"** row par tap → detail page → top-right
**EXPORT** → CSV. Wo file share karo, phir main har URL ko in 3 buckets mein daal dunga:

1. **Purana URL jiska naya version hai** → `next.config.js` mein 301 redirect
2. **Content hata diya gaya, replacement nahi** → 404 hi rehna chahiye; GSC mein
   "Validate fix" mark kar do (ye normal hai, bug nahi)
3. **Galti se toota** → asli route/data fix

### Verify

CSV milne ke baad har URL ka before/after status compare karenge.

---

## 🟠 FIX-3 — Redirect error: 2 pages

**Severity:** Warning · **Effort:** chhota (Vercel dashboard, code nahi)

### Root cause (confirmed)

`next.config.js` mein `kisanstatus.vercel.app` ko apex par bhejne wala
host-normalization redirect hai:

```js
{ source: '/:path*', has: [{ type: 'host', value: 'kisanstatus.vercel.app' }],
  destination: 'https://kisanstatus.com/:path*', permanent: true }
```

Lekin wo host **redirect hi nahi karta** — Vercel pehle hi block kar deta hai:

```
$ curl -s -o /dev/null -w '%{http_code}' https://kisanstatus.vercel.app/
403          ← Vercel Deployment Protection, redirect chalne se pehle
```

Googlebot ne `kisanstatus.vercel.app` ke URLs crawl kiye (purane deploys se), aur ab
403 milta hai — Next.js ka redirect kabhi run nahi hota. GSC isko **Redirect error**
bolta hai.

Baaki host variants theek hain:

```
http://kisanstatus.com/       → 308 → https://kisanstatus.com/   ✅ 1 hop
https://www.kisanstatus.com/  → 308 → https://kisanstatus.com/   ✅ 1 hop
http://www.kisanstatus.com/   → 308 → https://kisanstatus.com/   ✅ 2 hops (acceptable)
```

### Fix (code change nahi — Vercel settings)

Vercel dashboard → project → **Settings → Domains**:

- `kisanstatus.vercel.app` ke liye ek **permanent redirect to `kisanstatus.com`**
  set karo (Vercel platform level par, jahan Deployment Protection se pehle chalta hai), **ya**
- **Settings → Deployment Protection** mein production deployment ke liye protection
  off karo, taake Next.js ka existing redirect chal sake.

`next.config.js` ka rule waise hi rehne do — jab host reachable hoga to wo apna kaam
karega. **Code mein kuch touch nahi karna.**

### Verify

```bash
curl -s -o /dev/null -w '%{http_code} -> %{redirect_url}\n' https://kisanstatus.vercel.app/
# 308 (ya 301) -> https://kisanstatus.com/ hona chahiye, 403 nahi
```

Phir GSC mein "Redirect error" par **Validate fix**.

---

## 🟠 FIX-4 — Sitemap ke signals: "Discovered - currently not indexed" (20)

**Severity:** Warning · **Effort:** chhota · **Impact:** medium, dheere-dheere dikhega

Ye 20 pages GSC ne dhoond liye hain par crawl nahi kiye. Validation **Passed** hai,
yaani technically kuch toota nahi — Google ne crawl budget / priority ki wajah se
rok rakha hai. Do cheezein isko wajah de rahi hain:

### 4a. Sitemap priority ka signal khatam ho gaya hai

Live sitemap se:

```
$ curl -s https://kisanstatus.com/sitemap.xml | grep -o '<priority>[^<]*' | sort | uniq -c
     39 <priority>1        ← 94 mein se 39 URLs priority 1.0 par
     23 <priority>0.95
     15 <priority>0.9
     12 <priority>0.85
      3 <priority>0.4
      1 <priority>0.6
      1 <priority>0.5
```

94 mein se **39 URLs priority 1.0** claim kar rahe hain. Jab sab kuch "sabse zyada
zaroori" hai, to kuch bhi zaroori nahi — signal collapse ho jata hai.

**Wajah:** `app/sitemap.ts` mein `getArticlePriority()` recency se priority nikalta hai
(`<= 1 din` → **1.0**). `lastmod` distribution dekho — **44 URLs par `2026-08-07`** hai,
ek hi din. Ya to bahut articles ek saath update hue, ya `update-article-dates.js`
script ne bulk mein dates bump kar di. Dono case mein 39 pages 1.0 pe pahunch gaye.

**Fix (`app/sitemap.ts`):** priority ko recency se nahi, **page ke role** se banao —

| Page type | Priority |
|---|---|
| Homepage | 1.0 |
| Hub pages (`/articles`, `/maandhan`, `/rajya-yojana`, `/calculator`) | 0.9 |
| Cornerstone articles (master guides, current-kist) | 0.8 |
| Normal articles | 0.6–0.7 |
| Category pages | 0.6 |
| Legal / static | 0.3 |

Recency ka role sirf `lastmod` hona chahiye (jo already content-derived hai — accha).
Aur bulk date-bump band karo: `lastmod` sirf tab badle jab content **asli mein** badla ho.

### 4b. `Crawl-delay: 1` Googlebot ke liye

`app/robots.ts` mein Googlebot ke block mein `crawlDelay: 1` hai. Google **`Crawl-delay`
ignore karta hai**, par:

- Kisi kaam ka nahi (Google crawl rate GSC settings se leta hai)
- Doosre crawlers ko slow karta hai bila wajah
- 166 pages ke site pe koi crawl-budget problem hi nahi hai

**Fix:** `app/robots.ts` ke `Googlebot` block se `crawlDelay: 1` hatao. `*` aur
`Bingbot` se bhi hata sakte hain (Bing ise GSC-jaisi settings se manage karta hai).

### 4c. `changeFrequency` ki honesty

```
$ curl -s https://kisanstatus.com/sitemap.xml | grep -o '<changefreq>[^<]*' | sort | uniq -c
      8 <changefreq>daily
     24 <changefreq>monthly
     59 <changefreq>weekly
      3 <changefreq>yearly
```

59 pages "weekly" bolte hain. Agar wo weekly nahi badalte, to Google ye tag pe
bharosa karna chhod deta hai. Google `changefreq` ko largely ignore karta hai, isliye ye
**low priority** hai — par mandi/status pages ke alawa baaki ko `monthly` karna zyada
sach hoga.

### Verify

```bash
curl -s https://kisanstatus.com/sitemap.xml | grep -o '<priority>[^<]*' | sort | uniq -c
# priority 1.0 sirf 1 URL (homepage) par hona chahiye
curl -s https://kisanstatus.com/robots.txt | grep -i crawl-delay
# Googlebot ke section mein kuch nahi aana chahiye
```

Asar dikhne mein 2–4 hafte lagenge — ye "deploy karo aur turant theek" wala fix nahi hai.

---

## 🟡 FIX-5 — Duplicate meta tags `<head>` mein

**Severity:** Notice · **Effort:** 3 lines · **Impact:** chhota (par 1-minute ka kaam)

### Live proof

```
$ curl -s https://kisanstatus.com/ | grep -o 'apple-mobile-web-app-[a-z-]*' | sort | uniq -c
      2 apple-mobile-web-app-capable
      4 apple-mobile-web-app-status-bar-style
      4 apple-mobile-web-app-title
```

`title` aur `status-bar-style` **4 baar** aa rahe hain (BUGS.md ne 2 bola tha — ab zyada hai).

### Root cause

`app/layout.tsx` mein do blocks same tags emit karte hain:

- `metadata.other` (lines **116–118**): `apple-mobile-web-app-capable`,
  `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title`
- `metadata.appleWebApp` (lines **145–149**): `capable`, `statusBarStyle`, `title`

Next.js dono ko render kar deta hai. (4× ka multiplier `appleWebApp` ke Next-internal
duplicate emission se aata hai — `other` hatane par saaf ho jayega.)

### Fix

`app/layout.tsx` ke `other: { ... }` block se ye **teen** lines hatao:

```ts
'apple-mobile-web-app-capable': 'yes',              // hatao
'apple-mobile-web-app-status-bar-style': 'default', // hatao
'apple-mobile-web-app-title': SITE_NAME,            // hatao
```

`appleWebApp` block waise hi rehne do — wo canonical Next.js API hai. Baaki `other`
entries (`geo.*`, `ICBM`, `format-detection`, `application-name`, `msapplication-*`)
mat chhedo.

### Verify

```bash
curl -s https://kisanstatus.com/ | grep -o 'apple-mobile-web-app-[a-z-]*' | sort | uniq -c
# har tag exactly 1 baar
```

---

## ⚪ Expected behaviour — inko **fix nahi karna**

Ye GSC mein "not indexed" dikhte hain, par yahi **sahi** hai. Inhe chhedne se nuksaan hoga.

### "Page with redirect" — 12 pages ✅ sahi hai

Redirect hone wala page index nahi hona chahiye — uski jagah target index hota hai.
Humne `next.config.js` ke **saare 58 static redirect sources** live test kiye:

- **Sab single-hop `308` → final `200`** — koi chain nahi, koi loop nahi, koi toota
  redirect nahi
- **Sitemap mein koi redirect source nahi hai** (94/94 URLs seedhe 200)
- **Repo ke 67 internal `href`s mein se koi redirect par point nahi karta**

Toh ye 12 sirf purane backlinks / GSC history se aa rahe hain. Validation "Failed"
dikhta hai kyunki GSC "indexed hona chahiye" expect kar raha tha — asal mein sab theek hai.
**Koi action nahi.** (`/speed-insights` ka BUG-5 fix bhi live confirm hua: 308 → `/`.)

### "Alternate page with proper canonical tag" — 2 pages ✅ sahi hai

Ye canonical tags ka **kaam karna** hai. Humne sitemap ke sab 94 URLs ke canonicals
check kiye — **sab self-referential** hain, ek bhi galat nahi. Trailing-slash variants
(`/about/`, `/articles/`) `trailingSlash: false` ke through 308 hote hain, jo sahi hai.
`hreflang` bhi theek hai (`hi-IN` + `x-default`, dono self par).

Ye 2 pages probably `www.` / `http://` variants hain jo canonical ke through resolve ho
rahe hain. **Koi action nahi.**

> ⚠️ **Exception:** §1 mein mila invalid-slug canonical bug (galat slug → homepage
> canonical) asli problem hai. Wo FIX-1 se apne aap theek ho jayega.

### "Excluded by 'noindex' tag" — 1 page ✅ intentional

```
$ curl -sI https://kisanstatus.com/search | grep -i x-robots-tag
x-robots-tag: noindex, nofollow
```

Ye `next.config.js` ke headers mein jaan-boojh kar set hai. Search results page index
nahi hona chahiye. **Koi action nahi.**

### "Blocked by robots.txt" — 0 pages ✅ clean

---

## Scope se bahar (is fix.md ka hissa nahi)

Live testing mein ye mila, par ye **GSC indexing issue nahi** hai, isliye yahan sirf
note kar raha hoon — koi fix propose nahi kar raha:

```
/api/weather → 503
/api/mandi   → 503
```

Dono `robots.txt` mein `Disallow: /api/` hain, to indexing par koi asar nahi. Par agar
site ke koi component in par depend karte hain to woh feature toota hoga. Aap chahen to
isko alag se dekh sakte hain.

---

## Priority order — kis sequence mein karo

| # | Kaam | Kahan | Effort | Kab asar dikhega |
|---|---|---|---|---|
| **1** | FIX-1: `dynamicParams = false` + VillageWise redirect move | 5 files | ~30 min | 1–2 hafte |
| **2** | FIX-3: Vercel `.vercel.app` redirect/protection | Vercel dashboard | ~5 min | 1 hafta |
| **3** | FIX-5: duplicate apple meta tags | `app/layout.tsx` | ~2 min | turant |
| **4** | FIX-4: sitemap priority + `crawlDelay` hatao | `app/sitemap.ts`, `app/robots.ts` | ~45 min | 2–4 hafte |
| **5** | FIX-2: 404 URLs triage | — | CSV ke baad | 1–2 hafte |

**Kyun ye order:** FIX-1 sabse zyada pages theek karta hai (9 confirmed + galat
canonicals) aur template-level hai — ek fix, chaar route families. FIX-3 code touch nahi
karta. FIX-5 2 minute ka hai. FIX-4 ka asar dheere aata hai. FIX-2 aapke CSV pe atka hai.

---

## Deploy ke baad — checklist

### 1. Browser mein ye pages khol ke dekho

**Real 404 aana chahiye (Next.js 404 page, "load ho raha hai" spinner nahi):**
- `https://kisanstatus.com/maandhan/koi-galat-slug`
- `https://kisanstatus.com/articles/koi-galat-slug`
- `https://kisanstatus.com/rajya-yojana/koi-galat-slug`
- `https://kisanstatus.com/articles/category/koi-galat-cat`

**Redirect hona chahiye:**
- `https://kisanstatus.com/articles/PmKisanBeneficiaryListVillageWise2026`
  → `PmKisanBeneficiaryList2026` par land kare, URL bar mein naya URL dikhe

**Regression check — ye normal chalne chahiye (FIX-1 ne kuch toda nahi):**
- `https://kisanstatus.com/articles/PmKisan24viKist2026`
- `https://kisanstatus.com/articles/PmKisanMasterGuide2026`
- `https://kisanstatus.com/articles/PmKisanBeneficiaryList2026`
- `https://kisanstatus.com/maandhan/pm-kisan-maandhan-status-check-online`
- `https://kisanstatus.com/rajya-yojana` (aur koi ek rajya-yojana article)
- `https://kisanstatus.com/articles/category/status-check`
- `https://kisanstatus.com/calculator/quick-status-check`
- `https://kisanstatus.com/` (view-source: `apple-mobile-web-app-title` ek hi baar)

### 2. Re-crawl trigger karna **YAAD RAKHO** ⏰

Fix deploy hone ke baad Google apne aap dobara nahi dekhega — batana padta hai:

1. **GSC → URL Inspection** — upar diye har fix wale URL ko inspect karo →
   **"Request indexing"**. Soft-404 wale test URLs ke liye ye nahi karna (wo 404 hi
   rehne chahiye).
2. **GSC → Page indexing** — har fix kiye issue par tap → **"VALIDATE FIX"**:
   - `Soft 404` (FIX-1 ke baad)
   - `Crawled - currently not indexed` (FIX-1 ke baad)
   - `Redirect error` (FIX-3 ke baad)
   - `Not found (404)` (FIX-2 ke baad, CSV triage complete hone par)
3. **Sitemap resubmit** — GSC → Sitemaps → `sitemap.xml` → resubmit (FIX-4 ke baad,
   naye priorities ke saath)
4. **IndexNow** — repo mein `scripts/submit-indexnow.js` already hai. Bing/Yandex ko
   turant batane ke liye chala lo.

**Validation ka natija 1–2 hafte leta hai.** Beech mein dobara "Validate fix" na dabao —
usse process reset ho jata hai.

### 3. 2 hafte baad kya dekhna hai

- `Soft 404`: 3 → **0**
- `Crawled - currently not indexed`: 6 → **0–2**
- `Redirect error`: 2 → **0**
- `Discovered - currently not indexed`: 20 → **neeche** (dheere)
- `Indexed`: 107 → **~115+**
- `Page with redirect` (12), `Alternate page` (2), `noindex` (1) — **badalne nahi
  chahiye**, ye sahi hain

---

## Verification log — kya-kya live test kiya (2026-08-08)

| Check | Natija |
|---|---|
| 4 dynamic routes, invalid slug | ❌ chaaron **200** (404 hona chahiye) — FIX-1 |
| Root-level random path | ✅ 404 |
| Invalid slug ka canonical | ❌ homepage par point karta hai — FIX-1 |
| `PmKisanBeneficiaryListVillageWise2026` | ❌ 200, koi redirect nahi, koi title nahi, koi canonical nahi — FIX-1 |
| Sitemap fetch | ✅ 200, 27,651 bytes, 94 URLs |
| Sitemap ke sab 94 URLs | ✅ **sab 200**, ek bhi toota nahi |
| Sitemap ke sab 94 canonicals | ✅ sab self-referential |
| `next.config.js` ke 58 redirect sources | ✅ sab single-hop 308 → 200, koi chain/loop nahi |
| Repo ke 67 internal `href`s | ✅ koi 404 nahi, koi redirect par point nahi karta |
| Host variants (http/www/http+www) | ✅ sab apex par resolve |
| `kisanstatus.vercel.app` | ❌ **403** (redirect chalta hi nahi) — FIX-3 |
| `/search` noindex header | ✅ intentional, sahi |
| `apple-mobile-web-app-*` tags | ❌ 4× duplicate — FIX-5 |
| Sitemap priority spread | ❌ 39 URLs @ 1.0 — FIX-4 |
| `Crawl-delay` Googlebot ke liye | ❌ bekaar, hatao — FIX-4 |
| `robots.txt` / `rss.xml` / `llms.txt` | ✅ sab 200 |
| `/api/weather`, `/api/mandi` | ⚠️ 503 — scope se bahar |
