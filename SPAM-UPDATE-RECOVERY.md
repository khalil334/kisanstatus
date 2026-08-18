# Google Spam Update Hit — Kyun Hua Aur Kaise Theek Hoga

> Likha gaya: 2026-08-18 · Data source: Google Search Console (sc-domain:kisanstatus.com) + is repo ka git history
> Ye analysis GSC ke asli numbers pe based hai — koi andaza nahi.

---

## 1. Kya hua — GSC ke asli numbers

Site June 2026 end me index hona shuru hui, phir tez growth aayi, aur ab girawat chal rahi hai:

| Date | Clicks/day | Impressions/day |
|---|---|---|
| 2026-08-04 | 16 | 597 |
| 2026-08-07 | 28 | 1,281 |
| 2026-08-11 | 43 | 2,404 |
| **2026-08-12 (peak)** | **53** | **2,550** |
| 2026-08-13 | 52 | 2,577 |
| **2026-08-14 (girawat shuru)** | 26 | 2,048 |
| 2026-08-15 | 34 | 1,738 |
| 2026-08-16 | 26 | 1,743 |
| 2026-08-17 | 16 | 1,420 |

- **Hit date: ~14 August 2026.** Clicks peak se ~60-70% neeche, impressions ~45% neeche, aur trend abhi bhi gir raha hai (17 Aug ka data provisional hai).
- **Koi ek page zero pe nahi gaya — SAB pages ek saath gire.** 10-13 Aug vs 14-17 Aug impressions:
  - `farmer-id-kaise-banaye`: 1,494 → 839
  - `odisha-cm-kisan-status-check-2026`: 640 → 349
  - `npci-aadhaar-seeding`: 594 → 344
  - `NanoDap500mlPriceInIndia2026`: 393 → 202
  - `mp-kisan-kalyan-yojana-kist-status`: 350 → 202
- Average position zyada nahi badla (~7-8 pe hi hai) — matlab jo queries bachi hain unpe ranking theek hai, par Google ne site ko **bahut kam queries ke liye dikhana** band kar diya hai.

**Ye pattern manual action ka nahi, site-wide algorithmic devaluation ka hai** (spam update classic). Phir bhi pehla kaam: GSC → Security & Manual Actions → Manual Actions check karo. Agar wahan kuch hai to ye poori file us hisaab se dobara padhni hogi.

---

## 2. Kyun hit hua — repo ke evidence se

Google ka spam update jin cheezon ko target karta hai unme sabse bada hai **scaled content abuse**: "bahut saare pages, jaldi-jaldi, primarily search rankings ke liye banaye gaye — chahe AI se ho ya insaan se." Is repo me uske kai clear signal hain:

### 2.1 Publishing velocity — sabse bada red flag

- Repo **20 June 2026** ko bana. Aaj **~2,600 commits in 59 days** — average 44 commits/day.
- 4-18 Aug ke 15 dino me **~900 commits**, ek din me 114 tak.
- `lib/` data files me is waqt **~110+ article entries** hain — matlab ~2 mahine me 110+ SEO articles, do-do language versions ke sath.
- Google ke liye ye exactly "scaled content" jaisa dikhta hai: nayi site, zero history, aur suddenly sैकड़ों keyword-targeted pages. **Timing bhi match karti hai** — jitni tezi se 4-13 Aug me pages chhape (peak commit velocity), 14 Aug ko hit aayi.

### 2.2 AI-pattern content, documented in-repo

- `SEO-KEYWORDS-RANK1-PLAN.md` khud repo me pada hai — usme AI-writing prompts hain, banned-phrases lists hain ("insaan jaisa likho, AI jaisa nahi"), structure-variation rules hain. Ye file **public repo me hai** aur site ka poora playbook expose karti hai: content primarily rankings ke liye scale ho raha hai.
- Rules acche hain (real info, no fake case studies), lekin Google ko pattern dikhta hai, intent nahi: same template (`ArticleShared` renderer), same FAQ+JSON-LD structure, har article ka Hinglish+Hindi twin, cross-links rotation — 110 pages pe repeat hota hua.

### 2.3 Programmatic/doorway-type "status check" pages

- `rajya-yojana/` me 17 pages, jinme se zyada tar `<state-scheme>-status-check-2026` pattern pe hain (odisha-cm-kisan, namo-shetkari, rythu-bharosa, annadata-sukhibhava, krishak-unnati, parihara…). Har page ka core value ek hi hai: "official portal pe jao, status dekho." Ye Google ki nazar me **doorway pages** ke kareeb hai — thin pages jo sirf ek query-variation pakadne ke liye bane hain.
- Duplicate slug variants live rahe hain: `pmfby-crop-insurance-2026` **aur** `PmfbyCropInsurance2026` dono GSC me impressions le rahe the (redirect 17 Aug ko laga — hit ke *baad*). Iska matlab hit ke waqt Google ke paas duplicate content signals bhi the.

### 2.4 Date/freshness manipulation signals

- `PmKisan25viKist2027` — 2027-stamped page jab 24vi kist bhi abhi due hai. Future-year slugs + har cheez me "2026" stamp Google ke "year-stamped churn content" pattern se match karta hai (wahi cheez jo khud `SEO-KEYWORDS-RANK1-PLAN.md` me rumor-blogs ke bare me likhi hai — "har saal naya year-stamp").
- `core-articles-data.ts` me 6 articles ki `publishedTime` **Dec 2025** ki hai jabki repo 20 Jun 2026 ko bana. Backdated publish dates ek known spam signal hai. (Agar ye purani site se migrate hue asli dates hain, to ye point ignore karo — par phir bhi sitemap/schema me inconsistency Google dekh sakta hai.)
- Har hafte dozens of pages ki `modifiedTime` bump hoti hai chhote edits ke sath — mass "freshness" updates bhi isi bucket me girte hain.

### 2.5 Kya theek hai (ye problems NahI hain)

- robots.txt, canonical tags, hreflang pairs, www→apex redirects, sitemap — technical SEO solid hai. **Ye technical penalty nahi hai.**
- Content khud low-quality nahi hai — recent commits me genuine expansion, verified numbers, official-source checking dikh rahi hai. Problem **quality ki nahi, scale aur pattern ki hai.**

---

## 3. Kaise theek hoga — priority order me

Spam/core update se recovery me time lagta hai (aam taur pe agla update cycle, 2-6 mahine). Shortcuts nahi hain. Ye karo:

### Turant (is hafte)

1. **GSC me Manual Actions check karo** (Security & Manual Actions tab). Kuch mila to pehle wahi fix + reconsideration request.
2. **Publishing FREEZE karo.** Naye articles chhapna band — especially 15-article plan wale. Har naya page abhi negative signal hai. Jab tak recover na ho, sirf existing content improve karo.
3. **`SEO-KEYWORDS-RANK1-PLAN.md` ko public repo se hatao** (ya repo private karo). Ye file literally likha hua proof hai ke content rankings ke liye scale ho raha hai — koi bhi (ya koi bhi crawler) ise padh sakta hai.
4. **Backdated dates theek karo.** `core-articles-data.ts` me jo `publishedTime` repo banne (20 Jun 2026) se pehle ki hai, usse asli publish date pe lao — jab tak wo genuinely purani site se migrate na hui ho.
5. **`PmKisan25viKist2027` jaise future-dated pages** ko ya to hatao ya honest title do ("25vi kist kab aayegi — expected timeline") bina fake year-stamp ke.

### Agle 2-4 hafte — content consolidation

6. **`rajya-yojana/` ke thin status-check pages ka audit karo.** Har page se poochho: "Agar Google na hota, to kya main ye page banata?" Jo page sirf 'portal kholo, status dekho' kehta hai:
   - Ya usse genuinely useful banao (state-specific problems, payment failure reasons, district-wise quirks, asli helplines — jo official portal nahi batata),
   - Ya 2-3 related pages ko ek strong page me **merge karo** (301 redirect purane slugs se),
   - Ya `noindex` karo / hatao. Kam pages jo genuinely help karte hain > zyada pages jo query pakadte hain.
7. **Duplicate slug cleanup poora karo.** 17 Aug wale redirects sahi direction hai — GSC ke Pages report me baaki duplicate/404 variants dhundo aur sabke 301 lagao. Ek content = ek URL.
8. **Template ki uniformity todo** — genuinely, sirf cosmetically nahi. Har page pe same FAQ block + same JSON-LD + same related-links rotation ka pattern kam karo jahan wo forced hai.

### Ongoing — pattern change

9. **Velocity kam, depth zyada.** 110 pages/2 mahine ki jagah 2-4 genuinely deep pages/mahina — asli experience ke sath (screenshots of actual portal flows, asli farmer problems, data jo kahin aur nahi hai). E-E-A-T ka "Experience" wala hissa is niche me sabse aasan differentiator hai kyunki competitors bhi sab scaled blogs hain.
10. **Author/site trust banao.** About page pe asli identity, har article pe consistent author, contact info. Sarkari-yojana niche YMYL-adjacent hai — Google yahan trust signals zyada weight deta hai.
11. **GSC weekly monitor karo.** Impressions ka trend hi recovery ka pehla signal hoga (clicks se pehle impressions wapas aate hain). Agla spam/core update rollout hone par hi bada movement expect karo.

---

## 4. Kya NAHI karna

- ❌ **Disavow file mat banao** — ye link spam ka case nahi hai, aur bina zaroorat disavow nuksan karta hai.
- ❌ **Domain change / redirect to new domain** — penalty sath chal degi, history zero ho jayegi.
- ❌ **Aur tezi se naya content chhap ke "recover" karne ki koshish** — ye exactly wo behavior hai jisne hit karwaya.
- ❌ **Sirf dates/titles bump karke re-index requests** — freshness manipulation signal aur strong hoga.
- ❌ **Panic me acha content delete karna** — jo pages clicks la rahe hain (`pm-kisan-25vi-kist`, `farmer-id-kaise-banaye`, `karj-mafi-list`, `namo-shetkari-yojana`) unhe mat chhedo, wo site ki backbone hain.

---

## 5. Success kaise measure hoga

- **Week 0 baseline (14-17 Aug):** ~25 clicks/day, ~1,700 impressions/day.
- Girawat pehle rukni chahiye (floor banna), phir impressions flat → recover.
- Realistic timeline: floor 2-4 hafte me, meaningful recovery agla update cycle (2-6 mahine) — **agar** upar wale fixes ho gaye.
- Har mahine is file ke neeche ek progress note add karo (date + clicks/day + kya kiya).

## Progress Log

- **2026-08-18:** File create hui. Hit confirm hua (14 Aug, ~60% click drop). Fixes pending.
