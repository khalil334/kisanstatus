# KisanStatus — SEO/Bug Fix Plan (Audit: 2026-08-07)

Audit method: full repo scan (`main` @ a45eadd) + live site checks on kisanstatus.com
(sitemap 94 URLs, canonicals, titles, meta descriptions, internal links, JSON-LD, word counts).
Ahrefs data is user ne skip karwaya — ye findings repo + live-site verification se hain, koi fabricated value nahi.

---

## STATUS BOARD

| Bug | Status | Fixed on | PR |
|---|---|---|---|
| BUG-1 | ✅ FIXED & MERGED | 2026-08-07 | `fix/bug1-jsonld-farming-urls` |
| BUG-2 | ✅ FIXED & MERGED | 2026-08-07 | `fix/bug2-maandhan-jsonld-url` |
| BUG-3 | ✅ FIXED & MERGED | 2026-08-07 | `fix/bug3-dead-metadata-note` |
| BUG-4 | ✅ FIXED & MERGED | 2026-08-07 | `fix/bug4-soft-404` |
| BUG-5 (new) | ✅ FIXED & MERGED | 2026-08-07 | `fix/bug5-soft-404-maandhan-rajya` |

---

## CONFIRMED BUGS

### ✅ BUG-1 (High) — FIXED 2026-08-07: 4 kisanguides articles mein galat self-URLs (`/articles/farming/<slug>` — ye route exist hi nahi karta)

Files:
- `components/articles/kisanguides/PMatsyaSampada.tsx`
- `components/articles/kisanguides/PMFMEYojana.tsx`
- `components/articles/kisanguides/SilageMaking.tsx`
- `components/articles/kisanguides/VerminCompost.tsx`

Problem: In files ke JSON-LD (`@id`, breadcrumb `item`, `mainEntityOfPage`) aur dead
`metadata` export mein URL hardcoded hai `https://kisanstatus.com/articles/farming/<slug>`.
Sahi live URL hai `https://kisanstatus.com/articles/<slug>` (farming segment ka koi route nahi;
wo URL 308 redirect deta hai).

**Live pe verify kiya**: `curl https://kisanstatus.com/articles/pm-fme-yojana-food-processing`
ke rendered HTML mein `articles/farming/...` wale `@id`/breadcrumb URLs maujood hain.
Google structured data mein page ki identity galat jaati hai (Article/Breadcrumb/FAQ schema
kisi aur URL ko point karta hai).

Fix: In 4 files mein har `https://kisanstatus.com/articles/farming/<slug>` ko
`https://kisanstatus.com/articles/<slug>` se replace karo (JSON-LD + metadata block, total ~24 occurrences).
Type: per-file find/replace, low risk.

**FIX APPLIED (2026-08-07)** — branch `fix/bug1-jsonld-farming-urls`:
- 4 files mein 25 `articles/farming/<slug>` → `articles/<slug>` (JSON-LD `@id`,
  breadcrumb `item`, `mainEntityOfPage`, `#faq`, OG `url`, `alternates.canonical`).
- **Redirects added** (`next.config.js`) — purane indexed `/articles/farming/*` URLs
  ke liye 301: `pm-matsya-sampada-yojana-fish-farming`, `silage-making-business-guide`,
  `vermi-compost-business-guide` (`pm-fme-yojana-food-processing` ka redirect pehle se tha).
  So Google ke paas jo bhi `/articles/farming/*` URL index hai, wo 301 se sahi page pe jaayega.
- `dateModified` (4 components) aur `modifiedTime` (`lib/articles-data.ts`, 4 slugs) → `2026-08-07`.
- **Content untouched**: article ka koi word/section remove nahi kiya, live page URL/slug same hai.

### ✅ BUG-2 (High) — FIXED 2026-08-07: Maandhan status-check article ka JSON-LD galat route pe point karta hai

File: `components/articles/maandhan/PmKisanMaandhanStatusCheckOnline.tsx` (lines 10, 17, 21)

Problem: Article live hai `https://kisanstatus.com/maandhan/pm-kisan-maandhan-status-check-online`
par, lekin JSON-LD `@id` / `mainEntityOfPage` point karte hain
`https://kisanstatus.com/articles/pm-kisan-maandhan-status-check-online/` pe — jo ek
"Article Not Found" soft-404 page hai (HTTP 200 + noindex, live verify kiya).

Fix: Teeno URLs mein `/articles/` → `/maandhan/` karo. Single file, 3 lines.

**FIX APPLIED (2026-08-07)** — branch `fix/bug2-maandhan-jsonld-url`:
- `PmKisanMaandhanStatusCheckOnline.tsx`: 3 JSON-LD URLs (`#article` `@id`,
  `mainEntityOfPage`, `#faq` `@id`) `/articles/` → `/maandhan/`.
- **Redirect added** (`next.config.js`): `/articles/pm-kisan-maandhan-status-check-online`
  → `/maandhan/pm-kisan-maandhan-status-check-online` (301). Pehle ye URL soft-404 tha;
  ab jo bhi indexed/linked hai wo sahi page pe pahunchega.
- `dateModified` → `2026-08-07`; `lib/maandhan-data.ts` ka `modified` bhi bump kiya.
- **Content untouched**: koi word/section remove nahi, live URL same.

### ✅ BUG-3 (Medium) — FIXED 2026-08-07: 8 kisanguides files mein dead `export const metadata` (Next.js ignore karta hai)

Files: `components/articles/kisanguides/{CHCPortal, DripSprinkler, MadhumakhiPalan, MushroomKheti, PMatsyaSampada, PMFMEYojana, SilageMaking, VerminCompost}.tsx`

Problem: `export const metadata` sirf `page.tsx`/`layout.tsx` mein kaam karta hai. In
component files ke metadata exports (title/canonical/OG) render hi nahi hote — real metadata
`app/articles/[slug]/page.tsx` se aati hai (jo sahi hai). Ye dead code hai jo future edits
ko mislead karega (koi title yahan badlega aur live pe kuchh change nahi hoga), aur 4 files
mein isi block ke andar galat `articles/farming/` canonicals baithe hain (BUG-1).

Fix: Dead metadata blocks delete karo (ya kam se kam BUG-1 fix ke saath URLs sahi karo).
Risk: zero — code render hota hi nahi.

**FIX APPLIED (2026-08-07)** — branch `fix/bug3-dead-metadata-note`:
- Approach: **delete nahi kiya** (owner instruction: kuch remove na karo). Iske bajaye
  har 8 files ke `export const metadata` ke upar ek clear DEAD-CODE warning comment
  add kiya — jisme likha hai ki live metadata `app/articles/[slug]/page.tsx` ke
  `generateMetadata()` + `lib/articles-data.ts` se aati hai, aur yahan edit karne se
  live pe kuch nahi badlega.
- Iska asal risk (mislead future edits) khatam ho gaya, aur zero code remove hua.
- URLs wala hissa BUG-1 mein pehle hi theek ho chuka hai (sab 8 canonicals verified sahi).
- **Zero deletions** (`git diff`: 56 insertions, 0 deletions). Comment-only change hai,
  render output identical — isliye article ka `dateModified` deliberately bump NAHI kiya
  (jab reader ko kuch naya nahi mila to freshness date badalna galat signal hota hai).

### ✅ BUG-4 (Low) — FIXED 2026-08-07: Galat-route article URL soft-404 deta hai (HTTP 200 + "Article Not Found")

Problem: e.g. `https://kisanstatus.com/articles/pm-kisan-maandhan-status-check-online`
HTTP 200 return karta hai "Article Not Found" title + `noindex` ke saath. `notFound()` call
hai lekin generateMetadata fallback 200 + noindex bhejta hai — proper 404 status nahi.
Impact chhota hai (noindex laga hai), par crawlers ke liye 404 status zyada saaf hai.

Fix (optional): `app/articles/[slug]/page.tsx` ke `generateMetadata` mein unknown slug par
bhi `notFound()` throw karo taaki real 404 status mile.

**FIX APPLIED (2026-08-07)** — branch `fix/bug4-soft-404`:
- `app/articles/[slug]/page.tsx` → `generateMetadata()`: unknown slug par ab
  `notFound()` throw hota hai (pehle `{ title: 'Article Not Found', noindex }`
  return karta tha jo HTTP 200 deta tha). Page component pehle se `notFound()`
  call karta tha — ab status aur body dono consistent hain: real **404** +
  `app/not-found.tsx` ka proper 404 page (jo already noindex hai).
- Note: `/articles/pm-kisan-maandhan-status-check-online` ab 404 nahi, **301** deta hai
  — BUG-2 mein uska redirect add ho chuka hai.
- Koi content/word/URL change nahi; 4 lines changed.

### ✅ BUG-5 (Low, NEW) — FIXED 2026-08-07

Wahi soft-404 pattern do aur dynamic routes mein bhi hai:
- `app/maandhan/[slug]/page.tsx:32` — `return { title: 'Not Found', noindex }`
- `app/rajya-yojana/[slug]/page.tsx:172` — `return { title: 'Not Found', noindex }`

Dono ke page components `notFound()` call karte hain, par `generateMetadata` ka
fallback HTTP 200 bhej deta hai. Fix BUG-4 jaisa hi one-line hai.

**FIX APPLIED (2026-08-07)** — branch `fix/bug5-soft-404-maandhan-rajya` (owner ne
go-ahead diya):
- Dono routes ke `generateMetadata()` mein fallback metadata return ki jagah
  `notFound()` — ab real **404** + `app/not-found.tsx` (jo already noindex hai).
- `notFound` dono files mein pehle se import tha; page components pehle se `notFound()`
  call karte the — sirf metadata layer inconsistent thi.
- Safety check: `lib/rajya-yojana-data.ts` ke saare 10 articles `status: 'live'` hain,
  aur sab `MAANDHAN_ARTICLES` slugs valid hain — isliye koi live page galti se 404
  nahi hoga; sirf genuinely unknown slugs affect hote hain.
- Koi content/word/URL/date change nahi (4 insertions + 1 deletion per file, jisme 3
  lines comment hain).

---

## SAB BUGS CLEAR — 2026-08-07

BUG-1 se BUG-5 tak sab fix + merge ho gaye. Constraints jo poore respect kiye gaye:
- **Koi live page URL / slug change nahi** — sirf HTML ke andar chhupe JSON-LD/OG/canonical
  strings theek kiye.
- **Har URL string change ke saath 301 redirect** — total 4 naye redirects
  (`/articles/farming/*` ke 3 + `/articles/pm-kisan-maandhan-status-check-online` ka 1).
- **Article ka ek bhi word remove nahi** — BUG-3 mein delete ki jagah warning comment.

Agla kaam (code nahi, ops): deploy → browser verify → GSC re-index → Ahrefs re-crawl
(neeche RE-CHECK LIST).

---

## DUPLICATE / THIN / LOW-VALUE ARTICLE CHECK — RESULT: KOI CONFIRMED DUPLICATE NAHI

Method:
- **Titles**: sitemap ke sab 94 live pages ke `<title>` compare kiye → 0 duplicates.
- **Meta descriptions**: sab 94 pages → 0 duplicates, 0 empty.
- **Content similarity**: sab 76 article components ka pairwise Jaccard word-overlap → koi pair
  0.45 se upar nahi (highest ~0.36, `PmKisanSelfRegisteredStatusCheck` vs `PmKisanBeneficiaryList2026`
  — same topic-cluster, but distinct intent: self-reg status vs beneficiary list. Not duplicate).
- **Thin content**: har live article ka rendered word count nikala. Sabse chhota
  `PmKisan25viKist2027` (~1068 words); median ~2137. 500-word se neeche kuchh nahi — thin nahi.
- **Repetitive keywords**: data files mein `keywords` arrays mein koi 2+ keyword overlap wale
  pairs nahi mile.

Watch-list (duplicate nahi, par same cluster — monitor for cannibalization):
1. `PmKisan24viKist2026` vs `PmKisan25viKist2027` — kist-date intent overlap; 25vi kist wala
   sabse chhota article bhi hai. Suggestion: 25vi wale ko fresh dates/FAQ ke saath expand karo
   aur dono mein exact-match internal links rakho.
2. `PmKisanBeneficiaryList2026` vs `PmKisanVillageWiseListPdfDownload` vs
   `pm-kisan-self-registered-status-check` — "list/status check" cluster. Titles distinct hain;
   sirf GSC mein query overlap monitor karo.
3. `PmKisanMaandhanYojanaPension` (/articles) vs `/maandhan/*` hub — overview vs deep-dive
   structure theek hai; overview se hub pe links strong rakho.
4. CLAUDE.md ka known issue: homepage vs FTO article ("fto full form") cannibalization —
   monitor-only, pehle se documented.

## VERIFIED-OK (koi action nahi)

- Sab 94 sitemap URLs → HTTP 200.
- Sab 68 unique internal links → HTTP 200 (koi broken internal link nahi).
- Har route ke component map complete hain (articles/maandhan/rajya-yojana — koi missing
  component/stub live nahi).
- robots.txt sahi hai (AhrefsBot allowed, AI bots allowed, spam bots blocked).
- Canonicals page-URL se match karte hain (spot-checked across all 3 routes).
- `/search` noindex hai — correct.

## FIX ORDER (recommended)

1. BUG-1 + BUG-3 ek saath (same files) — find/replace + dead metadata cleanup.
2. BUG-2 — 3-line fix.
3. BUG-4 — optional, agla PR.
4. Watch-list — GSC/Ahrefs data ke saath agle audit mein.

## RE-CHECK LIST (fix deploy hone ke baad browser mein dekho)

- https://kisanstatus.com/articles/pm-matsya-sampada-yojana-fish-farming (view-source → JSON-LD @id)
- https://kisanstatus.com/articles/pm-fme-yojana-food-processing
- https://kisanstatus.com/articles/silage-making-business-guide
- https://kisanstatus.com/articles/vermi-compost-business-guide
- https://kisanstatus.com/maandhan/pm-kisan-maandhan-status-check-online
- Google Rich Results Test in 5 URLs par
- Ahrefs Site Audit re-crawl trigger karo (project 10042735)

### Naye checks (BUG-1..BUG-5 fixes ke baad, 2026-08-07)

- **301 redirect test** — in URLs par 301 aana chahiye (200 ya 404 nahi):
  - `https://kisanstatus.com/articles/farming/silage-making-business-guide`
  - `https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming`
  - `https://kisanstatus.com/articles/farming/vermi-compost-business-guide`
  - `https://kisanstatus.com/articles/farming/pm-fme-yojana-food-processing`
  - `https://kisanstatus.com/articles/pm-kisan-maandhan-status-check-online`
- **404 status test** — in fake URLs par real 404 aana chahiye (pehle 200 aata tha):
  - `https://kisanstatus.com/articles/aisa-koi-page-nahi`
  - `https://kisanstatus.com/maandhan/aisa-koi-page-nahi`
  - `https://kisanstatus.com/rajya-yojana/aisa-koi-page-nahi`
- **Live pages 200 hi rahe** (BUG-5 regression check) — spot-check ek maandhan +
  ek rajya-yojana article.
- **GSC**: in 5 fixed URLs ka re-index request bhejo; "Soft 404" report bhi dekho.
- Ahrefs Site Audit re-crawl (project 10042735) — fixes ke baad hi trigger karo.
