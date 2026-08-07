# KisanStatus — SEO/Bug Fix Plan (Audit: 2026-08-07)

Audit method: full repo scan (`main` @ a45eadd) + live site checks on kisanstatus.com
(sitemap 94 URLs, canonicals, titles, meta descriptions, internal links, JSON-LD, word counts).
Ahrefs data is user ne skip karwaya — ye findings repo + live-site verification se hain, koi fabricated value nahi.

---

## CONFIRMED BUGS

### BUG-1 (High): 4 kisanguides articles mein galat self-URLs (`/articles/farming/<slug>` — ye route exist hi nahi karta)

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

### BUG-2 (High): Maandhan status-check article ka JSON-LD galat route pe point karta hai

File: `components/articles/maandhan/PmKisanMaandhanStatusCheckOnline.tsx` (lines 10, 17, 21)

Problem: Article live hai `https://kisanstatus.com/maandhan/pm-kisan-maandhan-status-check-online`
par, lekin JSON-LD `@id` / `mainEntityOfPage` point karte hain
`https://kisanstatus.com/articles/pm-kisan-maandhan-status-check-online/` pe — jo ek
"Article Not Found" soft-404 page hai (HTTP 200 + noindex, live verify kiya).

Fix: Teeno URLs mein `/articles/` → `/maandhan/` karo. Single file, 3 lines.

### BUG-3 (Medium): 8 kisanguides files mein dead `export const metadata` (Next.js ignore karta hai)

Files: `components/articles/kisanguides/{CHCPortal, DripSprinkler, MadhumakhiPalan, MushroomKheti, PMatsyaSampada, PMFMEYojana, SilageMaking, VerminCompost}.tsx`

Problem: `export const metadata` sirf `page.tsx`/`layout.tsx` mein kaam karta hai. In
component files ke metadata exports (title/canonical/OG) render hi nahi hote — real metadata
`app/articles/[slug]/page.tsx` se aati hai (jo sahi hai). Ye dead code hai jo future edits
ko mislead karega (koi title yahan badlega aur live pe kuchh change nahi hoga), aur 4 files
mein isi block ke andar galat `articles/farming/` canonicals baithe hain (BUG-1).

Fix: Dead metadata blocks delete karo (ya kam se kam BUG-1 fix ke saath URLs sahi karo).
Risk: zero — code render hota hi nahi.

### BUG-4 (Low): Galat-route article URL soft-404 deta hai (HTTP 200 + "Article Not Found")

Problem: e.g. `https://kisanstatus.com/articles/pm-kisan-maandhan-status-check-online`
HTTP 200 return karta hai "Article Not Found" title + `noindex` ke saath. `notFound()` call
hai lekin generateMetadata fallback 200 + noindex bhejta hai — proper 404 status nahi.
Impact chhota hai (noindex laga hai), par crawlers ke liye 404 status zyada saaf hai.

Fix (optional): `app/articles/[slug]/page.tsx` ke `generateMetadata` mein unknown slug par
bhi `notFound()` throw karo taaki real 404 status mile.

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
