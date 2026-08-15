# KisanStatus.com — Deep Site Check: Red Flags & Bugs
**Date:** 2026-08-15 · **Checked:** live site (kisanstatus.com) + repo code (main @ 5f39128)

Traffic kam hone ki wajah samajhne ke liye site + code dono check kiya. Verified facts only — har finding live test ya code se confirm hai.

---

## 🔴 CRITICAL

### 1. Google Analytics 4 LIVE SITE PE LOAD HI NAHI HO RAHA
- **Evidence:** Homepage ka served HTML check kiya — usme `gtag/js?id=G-...` script, `dataLayer`, ya koi `G-XXXXXXXX` measurement ID **maujood nahi hai**.
- **Root cause:** `lib/gtag.ts` line 76: `GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''` — aur `app/layout.tsx` mein `{GA_MEASUREMENT_ID && (...)}` guard hai. Matlab **Vercel production env mein `NEXT_PUBLIC_GA_ID` set nahi hai** (ya empty hai), to GA script render hi nahi hoti.
- **Impact:** GA4 mein zero/partial data dikhega. **"Traffic kam araha" possibly measurement problem bhi hai, sirf real drop nahi.** GTM bhi load nahi ho raha (GTM_ID bhi empty).
- **Fix:** Vercel → Project → Settings → Environment Variables → `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (Production) add karo → redeploy. Deploy ke baad view-source mein `googletagmanager.com/gtag/js?id=G-` dikhna chahiye.

### 2. Mandi Bhav + Weather API dono DEAD (503)
- **Evidence (live test):**
  - `GET /api/mandi?state=Punjab` → **503** `{"configured":false,"records":[]}`
  - `GET /api/weather?state=Punjab` → **503**
- **Root cause:** `MANDI_API_KEY` / `WEATHER_API_KEY` (ya purane `NEXT_PUBLIC_` variants) Vercel env mein set nahi hain. Code sahi hai — key missing hai.
- **Impact:** `/articles/mandi-bhav-today` page ("Aaj Ka Mandi Bhav — Live Rates") ka **main feature hi kaam nahi kar raha**. Ye live-rates page repeat-visitors ka sabse bada magnet hota hai — broken widget = high bounce, kam return traffic, aur "Live Rates" title ke against thin/broken content (Google isko notice karta hai).
- **Fix:** Vercel env mein `MANDI_API_KEY` (data.gov.in) + `WEATHER_API_KEY` (OpenWeatherMap) add karo → redeploy.

---

## 🟡 MEDIUM

### 3. Homepage HTML bohot heavy hai (~240 KB sirf HTML)
- **Evidence:** `content-length: 239763` bytes — sirf HTML/RSC payload, JS/images alag.
- **Impact:** Audience rural India / slow 3G-4G hai — heavy first byte + LCP slow = Core Web Vitals down = rankings pe pressure. Inline SVG icons har card mein repeat ho rahe hain, RSC payload mein pura FAQ/HowTo text duplicate hai.
- **Fix ideas:** homepage sections kam karo (abhi FAQ + HowTo + 3 article-grids + quick-links sab ek page pe), repeated inline SVGs ko ek component/sprite banao, `next/dynamic` se below-fold sections lazy karo. Target: HTML < 100 KB.

### 4. ✅ FIXED (2026-08-15) — HSTS header 2 jagah alag-alag values ke saath
- **Evidence:** `vercel.json` → `max-age=31536000`; `next.config.js` headers() → `max-age=63072000`. Live response pe 31536000 aa raha (vercel.json jeet raha).
- **Impact:** Direct SEO harm nahi, lekin **headers do jagah maintain ho rahe hain** (vercel.json + next.config.js dono mein full security-header set). Future mein conflict/bhool ka risk.
- **Fix applied:** `vercel.json` ka global security-headers block hata diya (CSP Report-Only bhi `next.config.js` mein move); ab single source of truth `next.config.js` hai, HSTS = 63072000. Cache-Control headers vercel.json mein hi hain (wo duplicate nahi the).

### 5. ✅ FIXED (2026-08-15) — `robots` meta + `X-Robots-Tag` header duplication
- **Evidence:** Har page pe header `x-robots-tag: index, follow...` (next.config `/:path*`) + page-level robots meta bhi. `/search` pe noindex header sahi lag raha hai ✅.
- **Impact:** Abhi values consistent hain to harm nahi. Lekin agar kabhi kisi page ko noindex karna ho meta se, to global `index, follow` header confusion create karega (header + meta conflict mein Google restrictive option leta hai, lekin clean rakhna better hai).
- **Fix applied:** Global `X-Robots-Tag: index, follow` header next.config se hata diya; `/search` ka `noindex, nofollow` rakha hai.

### 6. ~~Duplicate article title~~ — FALSE ALARM (verified)
- Dobara check kiya: `title: 'Beneficiary List'` sirf `lib/translations.ts` mein homepage feature-card ka UI label hai (hi + en dono locales), article title nahi. Koi SEO issue nahi — **koi action nahi chahiye**.

---

## 🟢 MINOR / NOTES

7. **`keywords` meta tag** har page pe hai — Google ignore karta hai, koi harm nahi, lekin dead weight hai.
8. **CSP abhi Report-Only hai** — enforce nahi. Jab confident ho, `Content-Security-Policy` (bina Report-Only) pe switch karo.
9. **`dangerouslyAllowSVG: true`** in next/image config — aap khud ke SVGs serve karte ho to theek, bas remote SVG patterns (`**.fbcdn.net` etc.) se dhyan rahe.
10. **AI crawlers allowed, SemrushBot/MJ12bot blocked** — intentional lagta hai, theek hai. Note: `CCBot` + `Google-Extended` block karne se AI-search (Gemini grounding) visibility thodi kam ho sakti hai — ye ek trade-off hai, bug nahi.
11. **Weather widget states** mein 'Delhi' ko DEFAULT_COORDS (28.7 lat) diya hai — sahi hai, note only.

---

## ✅ Jo cheezein SAHI mili (koi action nahi)

- **Sitemap ke sab 117 URLs → 200 OK.** Koi broken/redirecting sitemap URL nahi.
- **Homepage ke sab 42 internal links → 200.** Sample article pages ke internal links bhi clean.
- **www → apex 308 redirect** sahi. `kisanstatus.vercel.app` → apex redirect bhi configured.
- **Canonical tags** sab sampled pages pe self-referencing aur sahi.
- **404 page** properly 404 status deta hai (soft-404 nahi).
- **robots.txt, sitemap.xml, rss.xml, llms.txt, og-image, logo** — sab 200.
- **hreflang** (hi / hi-Latn / x-default) mapping code logically consistent hai.
- **Secrets repo mein leak nahi** — .env gitignored, API keys sirf server-side routes mein `process.env` se.
- **Title/H1 checker script pass:** 40 pairs aligned.
- **Redirects (3XX issue Ahrefs wala):** next.config.js mein ~50 permanent redirects hain — ye intentional legacy-URL redirects hain; internal links ab direct final URLs pe point karte hain (sampled pages pe koi internal 3XX link nahi mila).

---

## Priority Action List (traffic recovery ke liye)

| # | Action | Kahan | Effort |
|---|--------|-------|--------|
| 1 | `NEXT_PUBLIC_GA_ID` Vercel env mein set karo + redeploy | Vercel dashboard | 5 min |
| 2 | `MANDI_API_KEY` + `WEATHER_API_KEY` Vercel env mein set karo | Vercel dashboard | 10 min |
| 3 | GA4 + GSC mein pichle 3 mahine ka data compare karo (measurement gap vs real drop) | GA4/GSC | 30 min |
| 4 | Homepage HTML weight ~240KB → <100KB (SVG dedupe, sections lazy) | code | 2-4 hr |
| 5 | ~~Headers consolidate~~ ✅ FIXED (2026-08-15) — sab headers ab next.config.js mein, vercel.json ka duplicate block hataya, HSTS ab ek value | code | done |
| 6 | ~~Duplicate title~~ — false alarm, UI label tha | — | n/a |

> **Sabse important:** #1 aur #2 code changes nahi hain — sirf Vercel env vars missing hain. Inke bina analytics andha hai aur live-rates page toota hua hai.
