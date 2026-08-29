# KisanStatus.com — Google Spam Update: Deep Analysis (Repo + Live Site)

**Site:** https://kisanstatus.com · **Repo:** khalil334/kisanstatus
**Analysis date:** 29 August 2026
**Data sources:** Full git history (2,798 commits), sab article registries (`lib/*.ts`), live sitemap.xml (132 URLs), live homepage crawl. Koi value fabricate nahi ki gayi — har claim ke saath evidence hai.

---

## TL;DR

Site **algorithmic spam hit** me hai — manual action nahi (GSC se confirm karna baaki hai). Root cause **AI-scaled content ka publishing pattern** hai, content ki quality nahi. Aur sabse critical: **jo galti pehli baar hit ka sabab bani, wohi galti 15–18 August ko dobara ki gayi** — 4 din me 22 naye articles. Recovery tab tak start nahi hogi jab tak ye pattern band nahi hota.

---

## Part 1: Kyun Hit Hui — Evidence

### 1. ⚠️ CRITICAL: Backdated Publish Dates (Date Fabrication)

- Git history ka **pehla commit 20 June 2026** ka hai ("final upload kisanstatus v2").
- Lekin article registries me **29 articles ki `publishedTime` March–early June 2026** ki hai — site ke exist karne se **pehle** ki dates (e.g. `2026-03-07`, `2026-04-14`, `2026-05-18`).
- Matlab: launch ke waqt articles ko purana dikhane ke liye dates peeche ki gayin. Google ye cross-check karta hai (first-crawl date vs claimed datePublished) — mismatch pakda jata hai aur **poore domain ki date-trust khatam ho jati hai**. YMYL niche me ye akela bhi hit ke liye kafi hai.

**Fix:** Har article ki `publishedTime` ko realistic karo — jo articles 20 June ko upload hue, unki date 20 June se pehle ki nahi ho sakti. Sach likhna hi safe hai.

### 2. ⚠️ CRITICAL: Naya Burst — 22 Articles in 4 Din (15–18 Aug 2026)

Purani analysis (28 Aug wali, ab deleted) ne warn kiya tha: "max 2–3 articles/hafta, kabhi burst nahi". Lekin registries dikhati hain:

| Date | Naye articles |
|---|---|
| 15 Aug | 3 |
| 16 Aug | 4 |
| 17 Aug | 3 |
| **18 Aug** | **13 (ek hi din, subah 7 baje se raat tak)** |

Total content 51 → **107 articles** ho gaya, zyada tar Hindi (`hindi-rajya-yojana`, `hindi-yojana-2026`, `yojana-2026`) sections me. Ye **scaled content abuse** ka textbook pattern hai — spam update ke aas paas hi. Agar hit 18 Aug ke baad aayi/gehri hui, to ye burst directly responsible hai.

**Fix:** Foran band. Agle 4–6 hafte **zero naye articles**. Uske baad max 2/hafta, alag dino par.

### 3. ⚠️ Mass Date Refresh Jaari Hai

Live sitemap me **132 me se ~100+ URLs ki lastmod August 2026** ki hai (19 URLs sirf 21 Aug ki). `modifiedTime` registry me bhi August me 60+ entries. Itne articles ka genuinely har hafte substantively update hona possible nahi — Google ke liye ye **stale date abuse** hai.

**Fix:** `modifiedTime` sirf real content change par haath se update karo. Build/script se auto-bump band karo.

### 4. ⚠️ AI-Generated Content Ke Structural Signals

- 18 Aug ko 13 articles minutes ke gap par — insaan ye pace nahi likh sakta.
- Ek hi author ("Manish Kumar") 107 articles par, koi real photo-proof/credentials nahi.
- Sirf **2 articles me Sources section** (30 core components me se) — baaki me koi citation nahi.
- 764 em-dashes abhi bhi components me (pehle 6,386 the — kaafi kam hue, theek direction).
- Parallel Hinglish + Hindi copies same topics par (hreflang ab added hai — good).

Google "AI content" ko nahi, **"scaled + no first-hand experience"** ko marta hai. 107 template articles, zero screenshots, zero real-world proof = wohi category.

### 5. Bot-Blocking Check Karo (Technical)

Article pages non-browser user-agents ko **HTTP 403** de rahe hain (homepage 200 hai). Agar ye Vercel firewall/challenge Googlebot ko bhi block kar raha hai to indexing khud tut jayegi. **Vercel dashboard → Firewall me verify karo ke Googlebot allowed hai**, aur GSC URL Inspection se live-test karo.

---

## Kya Already Fix Ho Chuka Hai ✅

- Static author bio (AI-rotation band) — `lib/author-bios.ts`
- Sitemap `changefreq: daily` → `weekly`
- Speculative `PmKisan25viKist2027` par `noindex`
- hreflang pairs Hindi ↔ Hinglish (`lib/hindi-hreflang.ts`)
- Em-dash overuse 6,386 → ~764
- Repeated title patterns ("Ka Sach") rewrite

Ye sab sahi direction me hai — lekin points 1–3 upar wale inse zyada bhari hain.

---

## Part 2: Recovery Plan (Priority Order)

### Week 1 — Bleeding Roko
1. **Naye articles publish karna band** — 4–6 hafte complete freeze.
2. **Backdated dates theek karo** — March–May 2026 wali `publishedTime` ko real upload dates par lao (git history se verify ho sakta hai). Ye ek data-file edit hai, template-level fix.
3. **Auto date-bump band karo** — jo bhi mechanism `modifiedTime`/lastmod refresh kar raha hai.
4. **Vercel firewall me Googlebot verify karo** + GSC URL Inspection live test.
5. **GSC Manual Actions report dekho** — agar manual action hai to reconsideration ka rasta alag hai.

### Week 2–6 — Content Audit (107 → ~50)
6. GSC data se dekho kaunse pages ne kabhi clicks/impressions liye:
   - **Impressions the** → rewrite: real screenshots, "last verified [date]" notes, sources section har article me.
   - **Kabhi rank nahi hue + pure template** (khaaskar 15–18 Aug ke 22) → delete + 301 nearest relevant page par. Aadhi site kaat dena is halat me sahi hai.
7. **Hindi duplicate sections consolidate karo** — hreflang hai, lekin 5 alag hindi-* registries me thin parallel copies hain; jo unique value nahi deti unhe merge/delete karo.

### Month 2+ — Trust
8. Real E-E-A-T: author page par asli photo/background, YouTube screen-recordings (status check karte hue), article-level changelogs.
9. 2–3 quality articles/mahina, manually likhe hue, screenshots ke saath.
10. **Sabar** — algorithmic recovery agle spam/core update rollout par aati hai, fixes ke 2–6 mahine baad. Beech me traffic flat rahega; aur content chaapna recovery ko reset kar deta hai.

---

## GSC Connect (Pending)

Search Console data ke bina exact hit-date aur page-level damage confirm nahi ho sakta. Letaido workspace me GSC connect card pending hai — approve hote hi:
- Hit ki exact date vs 18-Aug burst ka correlation
- Kaunse 107 me se pages ne kabhi traffic liya (audit ka basis)
- Manual Actions + Index Coverage status

---

*Sab evidence git history (`git log`), `lib/*-data.ts` registries, aur live sitemap.xml se — 29 Aug 2026. Koi number fabricate nahi.*
