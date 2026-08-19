# GSC "Discovered – currently not indexed" (39 pages) — Fix Plan

**Date:** 2026-08-20
**Source:** GSC → Page indexing → "Discovered - currently not indexed" — 39 pages (validation: Passed)
**Property:** `sc-domain:kisanstatus.com`
**Scope:** Sirf ye ek reason row. Baqi indexing issues `GSC-INDEXING-FIX-AUG-2026.md` me already fixed hain.

---

## 0. Pehle samjho: ye "error" nahi hai

"Discovered - currently not indexed" ka matlab: **Google ko URL pata hai (sitemap/links se), par
usne abhi tak crawl hi nahi kiya.** Page me koi technical fault nahi hai — Google ne dekha hi nahi.

Google aisa tab karta hai jab:
1. **Site ka quality signal average ho** — Google naye/kamzor pages pe crawl kharch nahi karta
2. **Page ke internal links kam hon** — deep pages jinhe sirf sitemap point karta hai
3. **Content thin ya duplicate-pattern lage** — khaas kar template-heavy pages

Iska koi "Validate Fix" button-fix nahi hai. Fix = **pages ko crawl-worthy banana**, phir Google
khud utha lega. Timeline: hafte se mahine, page-by-page.

---

## 1. Live audit — kya mila (2026-08-20, sab measured, guess nahi)

Sitemap ke **150 pages** ka word-count audit chalaya (boilerplate nav/footer nikaal kar):

| Word count | Pages | Verdict |
|---|---:|---|
| 2,000+ | 95 | ✅ Site standard pe — inhe mat chhedo |
| 1,500–2,000 | 25 | ⚠️ Standard se thoda neeche |
| 1,000–1,500 | 6 | ⚠️ Kamzor |
| 500–1,000 | 10 | 🔴 Thin |
| **< 500** | **14** | 🔴 **Bahut thin — yehi sabse bade suspects hain** |

### 🔴 Sabse thin pages (measured words, boilerplate-excluded)

| Words | Page | Type |
|---:|---|---|
| 59 | `/articles` | Listing hub |
| 114 | `/articles/hi/category/loan` | Category |
| 114 | `/articles/hi/category/mandi` | Category |
| 115 | `/articles/hi/category/pashupalan` | Category |
| 175 | `/articles/category/agri-business` | Category |
| 175 | `/articles/hi/category/agri-business` | Category |
| 180 | `/articles/category/farming` | Category |
| 180 | `/articles/category/pashupalan` | Category |
| 191 | `/articles/category/loan` | Category |
| 191 | `/articles/category/mandi` | Category |
| 199 | `/articles/category/status-check` | Category |
| 263 | `/contact` | Utility |
| 361 | `/calculator` | Hub |
| 376 | `/yojana` | Hub |

**Pattern saaf hai: category/hub pages thin hain, articles nahi.** 11 of 14 thinnest pages
category ya listing pages hain — ye sirf article-card grids render karte hain, zero unique text.
Comparison: `/articles/hi/category/status-check` (1,167 words) aur `/articles/hi/category/farming`
(556) me intro text hai — wahi difference hai.

**Note:** 39 URLs ki exact list is doc me nahi hai kyunki GSC UI se export chahiye
(Page indexing → Discovered row → Export). Export mila to is table se cross-check karo —
prediction: zyadatar category pages, naye articles, aur kam-linked deep pages honge.

---

## 2. Fix plan — priority order

### Fix 1 — Category pages me unique intro content (HIGH, template-level)

**Problem:** 11 category pages ke paas 114–199 words hain, sab template boilerplate. Google ke
liye ye near-duplicate pages hain — index karne ki koi wajah nahi.

**Fix:** `lib/categories.ts` ke har `CATEGORIES` entry me ek `longDescription` field add karo
(300–500 words, Hinglish/Hindi route ke hisaab se), aur category page template
(`app/articles/category/[category]/page.tsx` + `hi` variant) me render karo. Content me:
- Ye category kya cover karti hai, kis kisan ke liye hai
- Category ke top 3–4 articles ka 1-line context ke saath zikr (internal links)
- Ek chhota FAQ block (2–3 sawaal) — schema.org FAQPage markup ke saath

**Kaam:** ~12 descriptions likhna + 2 template files. Ek baar template badla, sab categories cover.

**Blast radius:** `lib/categories.ts`, `app/articles/category/[category]/page.tsx`,
`app/articles/hi/category/[category]/page.tsx`

### Fix 2 — Internal linking: hub pages se deep pages tak (HIGH, template-level)

**Problem:** "Discovered not indexed" ki classic wajah — page sirf sitemap me hai, koi strong
internal link nahi. Homepage se sirf ~20 pages directly linked hain; baqi 130 pages 2–3 click deep.

**Fix:**
1. Homepage pe ek "Naye Articles" section — latest 6–8 articles, har hafte naturally update hota hai
2. Har article ke neeche "Related" block already hai (`cross-links.ts`) — usme rotation aisi rakho ki
   **naye/kam-linked articles ko priority mile** (abhi random/static rotation hai). Simple approach:
   article ki publish date se weight karo — naya = zyada baar linked
3. Category pages (Fix 1 ke baad) khud strong hub ban jayenge

**Blast radius:** `app/page.tsx`, `lib/cross-links.ts`

### Fix 3 — 1,500-word se neeche wale articles ki triage (MEDIUM, per-page)

16 articles/content pages 1,000–2,000 words me hain (site standard 2,000+). Har ek pe teen options:

| Option | Kab | Action |
|---|---|---|
| **Expand** | Topic me depth banti hai | 2,000+ words tak le jao — table, step-by-step, FAQ add karo |
| **Merge** | Topic kisi bade article ka subset hai | Content bade article me daalo + 308 redirect |
| **Noindex** | Topic ki search demand hi nahi | `noindex: true` (26viKist pattern) — sitemap se auto-drop |

Sabse kamzor 5 (pehle inki triage karo):
- `/articles/hi/mgnrega-pashu-shed-yojana` (1,526)
- `/articles/hi/pashu-kisan-credit-card` (1,597) — ⚠️ `/yojana/pashu-kisan-credit-card-apply` (1,931) se topic overlap — **merge candidate**
- `/articles/PmKisanVoluntarySurrenderGuide` (1,634)
- `/articles/PmKisanCscRegistrationCharges` (1,663)
- `/articles/hi/pm-kisan-khad-yojana-sach` (1,720)

**Rule:** ranked pages (GSC impressions > 0) ko sirf EXPAND karo, kabhi merge/noindex nahi.
Har decision se pehle GSC Search Analytics me us URL ki impressions check karo.

### Fix 4 — Utility pages ko sitemap se nikaalo ya noindex karo (LOW)

`/contact` (263 words) jaise pure-utility pages ko index karane ka koi SEO faida nahi. Options:
- Sitemap me rakho par expand karo (contact + FAQ + helpline numbers = useful page ban sakta hai), **ya**
- `noindex` + sitemap se drop (jaise `/search` already hai)

`/calculator` aur `/yojana` hubs ko Fix 1 jaisa intro-content treatment do — ye noindex NAHI
karne, ye conversion pages hain.

### Fix 5 — Content quality guard build me (LOW, future-proofing)

Jaise title-length guard bana (`check-title-h1.js`), waise ek `check-content-length.js`:
- Har article ka body word-count nikale (data files se)
- Naya article < 1,500 words → build warning (fail nahi, warning — kyunki kuch topics chhote hote hain)
- Isse future me thin pages merge hone se pehle pakde jayenge

---

## 3. Kya NAHI karna

- **"Request Indexing" spam mat karo** — 39 pages pe manually request karna kaam nahi karta jab
  root cause quality/linking hai. Pehle Fix 1–2 deploy karo, phir sirf top 5–10 pages pe request karo.
- **AI se bulk content mat bharwao** — Google ka "discovered not indexed" aksar scaled/thin content
  ka hi symptom hai; 300 words ka generic AI paragraph daalne se page aur zyada pattern-match hoga.
  Har category description me asli specifics chahiye (yojana names, amounts, dates).
- **95 pages jo 2,000+ words pe hain unhe mat chhedo** — wo already standard pe hain.
- **`Discovered` row pe Validate Fix ka wait mat karo** — ye row kabhi turant clear nahi hoti;
  Google apni raftaar se crawl karega. Success metric = indexed count (143) ka badhna, is row ka
  zero hona nahi.

---

## 4. Execution order

| Step | Fix | Blast radius | Commit |
|---|---|---|---|
| 1 | Category intro content (12 descriptions + template) | `lib/categories.ts` + 2 templates | `SEO: unique intro content on category pages` |
| 2 | Homepage naye-articles section + cross-link weighting | `app/page.tsx`, `lib/cross-links.ts` | `SEO: strengthen internal links to deep pages` |
| 3 | Bottom-5 articles triage (expand/merge/noindex) | per-page | `SEO: thin article triage batch 1` |
| 4 | Utility pages decision | small | `SEO: utility page indexing policy` |
| 5 | Content-length build guard | `scripts/` | `SEO: content length check in build` |

Har step alag commit. Step 1–2 pehle — wahi 80% impact denge, aur template-level hain (per-page
kaam nahi).

### Deploy ke baad

1. GSC → Page indexing → Discovered row → **Export** karke 39 URLs is doc ke data se cross-check
2. Fix 1–2 live hone ke baad top 10 affected URLs pe **URL Inspection → Request Indexing**
3. 3–4 hafte baad indexed count (abhi 143) track karo — yehi asli metric hai
4. `npm run indexnow:submit` — Bing/Yandex ping

---

## Reference — ye audit dobara kaise chale

```bash
# Sitemap pages ka word count (boilerplate excluded)
curl -s https://kisanstatus.com/sitemap.xml | grep -o '<loc>[^<]*</loc>' | sed 's|</\?loc>||g' \
  | grep -v '\.webp\|\.png\|\.jpg' | while read u; do
      wc=$(curl -s "$u" | python3 -c "
import sys,re,html
t=sys.stdin.read()
t=re.sub(r'<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>','',t,flags=re.S)
t=re.sub(r'<header.*?</header>|<footer.*?</footer>|<nav.*?</nav>','',t,flags=re.S)
t=re.sub(r'<[^>]+>',' ',t)
print(len(html.unescape(t).split()))")
      echo "$wc $u"; done | sort -n
```

**GSC property:** `sc-domain:kisanstatus.com` · **Pichla fix doc:** `GSC-INDEXING-FIX-AUG-2026.md`
