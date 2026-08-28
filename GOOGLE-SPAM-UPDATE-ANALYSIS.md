# KisanStatus.com — Google Spam Update Analysis & Recovery Plan

**Site:** https://kisanstatus.com
**Analysis date:** 28 August 2026
**Data source:** Live site crawl — homepage, sitemap.xml (133 URLs), publish dates of all 51 Hinglish articles, full HTML of sample articles, robots.txt, about page.

---

## TL;DR

Site ko Google spam update ne mainly **"scaled content abuse"** aur **"stale date refresh / freshness manipulation"** signals ki wajah se hit kiya hai. Content quality kharab nahi hai — problem **publishing pattern** aur **trust signals** me hai. Ye recoverable hai, lekin 2–4 mahine lagenge.

---

## Part 1: Kyun Hit Hui? (Root Causes — Evidence ke Saath)

### 1. Bulk / Burst Publishing Pattern ⚠️ (Sabse Bara Factor)

Sitemap ke `datePublished` values se actual publishing timeline:

| Date | Articles published |
|---|---|
| Mar–May 2026 | 8 (natural pace, ~1–2/week) |
| 20 June 2026 | **5 ek din me** |
| 24 June 2026 | 3 ek din me |
| **9 July 2026** | **10 ek din me** |
| **12 July 2026** | **9 ek din me** (kuch 4–5 min ke gap par: 05:24, 05:28, 05:32, 05:37, 05:41) |
| Aug 2026 | 3 (wapas slow) |

**51 me se 33 articles sirf 3 hafton (20 June – 12 July) me publish hue.** Ek hi author ke naam se 10 articles ek din me, minutes ke farak par — ye pattern Google ke liye machine-generated / scaled content ka classic fingerprint hai. Google ki **Scaled Content Abuse** policy (March 2024 se enforce) exactly isko target karti hai — chahe content AI ka ho ya insaan ka, "publishing at scale primarily for rankings" penalty-worthy hai.

### 2. Freshness / Date Manipulation ⚠️

- Sitemap me **24 URLs** ki `lastmod` August 2026 me refresh hui hai — halanke inme se sirf 3 articles actually August me publish hue.
- Sample check: `PmKisan24viKist2026` — published 24 June, `dateModified` 26 August. `PmKisan25viKist2027` — published 5 July, modified 18 August.
- Homepage aur `/articles` ki sitemap entry me `changefreq: daily` + roz badalti `lastmod`.

Agar content substantially change nahi hua aur sirf dates refresh ho rahi hain, ye Google ke spam policies me **"stale date abuse"** ke under aata hai. Google dates ko cross-check karta hai (cache, structured data, visible date) — mismatch trust girata hai.

### 3. Speculative / Future-Dated Content (YMYL Risk) ⚠️

- `PmKisan25viKist2027` — "25vi Kist Kab Aayegi 2027" — article khud likhta hai: *"Sach ye hai ki 25vi wali abhi kisi ko nahi pata"*.
- `PmKisan24viKist2026` — abhi tak release hi nahi hui kist ke bare me full article.
- Slugs me future years (`2026`, `2027`) baked-in hain.

Government payments = **YMYL (Your Money Your Life)** category — Google yahan sabse strict hai. Jab site aisi cheez par rank karna chahti hai jiska koi official confirm data nahi (aur article khud admit karta hai), to poore domain ka trust score girta hai. Ye niche (PM Kisan kist speculation) me sainkdo low-quality sites hain — spam updates aise poore clusters ko demote karte hain, aur aapki site usi cluster me classify ho gayi.

### 4. Template-Generated Author Signals (Weak E-E-A-T) ⚠️

- Har article par ek hi author "Manish Kumar", lekin **author `description` har article par alag** hai (schema me) — ye template/AI-rotation ka signal hai. Real author bio static hoti hai.
- Author ki LinkedIn URL: `linkedin.com/in/manish-kumar-15787942a` — is format ka suffix suspicious hai (LinkedIn numeric suffixes chhote hote hain).
- Koi doosra author, koi editorial process, koi credentials page nahi.

YMYL content par single anonymous-ish author + 33 articles in 3 weeks = E-E-A-T fail.

### 5. Duplicate Bilingual Structure (Minor)

- `/articles/` (Hinglish/Roman) aur `/articles/hi/` (Devanagari Hindi) me same topics ke parallel articles (e.g. `gau-mutra-kharid-yojana` dono me).
- Dono self-canonical hain, koi `hreflang` linking nahi dikhi. Google ke liye ye partial duplicate content hai, alternate language versions nahi.

### 6. Keyword-Stuffed Slug Pattern (Minor)

Slugs jaise `PmKisan24viKist2026`, `KisanCreditCardOnlineApply2026`, `NanoDap500mlPriceInIndia2026` — CamelCase + year-stuffed programmatic pattern. Akela ye penalty nahi karata, lekin baki signals ke saath "made-for-search" picture complete karta hai.

---

## Kya THEEK Hai (Ye Mat Chhedo)

✅ Content khud readable, honest aur useful hai (25vi kist article actually imandaar hai — "kisi ko nahi pata" clearly likha hai)
✅ Schema markup (Article, Person, datePublished/Modified) sahi implemented hai
✅ robots.txt clean hai
✅ "Not a government website" disclaimer clearly maujood hai
✅ Ads/AdSense ka overload nahi hai (sample pages par zero ad scripts)
✅ About, Contact, Privacy, Terms, Disclaimer pages maujood hain
✅ Word counts theek hain (1,600–2,900 words/article) — thin content nahi

---

## Part 2: Recovery Plan (Priority Order Me)

### Phase 1 — Foran Karo (Week 1–2)

**1. Publishing pattern turant fix karo**
- Ab se **max 2–3 articles/hafta**, alag-alag dino par. Kabhi bhi ek din me 3+ nahi.
- Ye sabse zaroori signal hai — Google ko dikhna chahiye ke burst khatam ho gaya.

**2. Date manipulation band karo**
- `dateModified` sirf tab update karo jab content me **real substantive change** ho (naya section, updated numbers, corrected info) — cosmetic tweaks par nahi.
- Sitemap `lastmod` ko `dateModified` ke saath sync rakho — automatic daily refresh hata do.
- `changefreq: daily` → `weekly` karo homepage/articles par (ya tag hi hata do, Google ise mostly ignore karta hai lekin mismatch hurt karta hai).

**3. Speculative articles ko fix karo**
- `PmKisan25viKist2027` jaisa pure-speculation article ya to **delete + 301 redirect** karo master guide par, ya usse ek "live tracker" page me convert karo jo sirf **confirmed** official info dikhaye.
- Kist-prediction articles se "expected date" headlines hatao — sirf official record (aa chuki kists ki dates) + "official announcement ka intezaar hai" rakho.
- Slugs me future years mat daalo naye articles me.

**4. Author E-E-A-T fix karo**
- Author schema me **ek hi static description** rakho har jagah (rotation band).
- `/about` par real author page banao: photo, background, ye kaam kyun karta hai, verification process kya hai.
- Agar LinkedIn profile real hai to clean URL use karo; agar nahi hai to `sameAs` se hata do — fake social link negative signal hai.

### Phase 2 — Content Audit (Week 2–6)

**5. 20 June – 12 July wale 33 articles ka audit karo**
Har article ke liye 3 options:
- **Keep & improve** — agar genuinely unique/useful hai: personal verification screenshots, real portal walkthroughs, state-specific data add karo jo competitors ke paas nahi.
- **Merge** — overlapping topics (e.g. multiple loan articles) ko ek comprehensive guide me merge karo + 301 redirects.
- **Delete** — jo purely "topic coverage ke liye" likha tha aur koi traffic/value nahi de raha: delete + 301 to closest relevant page.

Target: 51 articles → ~30–35 strong articles. **Kam lekin behtar pages spam recovery ka proven pattern hai.**

**6. Bilingual duplicate structure fix karo**
- Ya to `/articles/hi/` versions par `hreflang` tags lagao (`hi` ↔ `hi-Latn` pairing) taake Google inhe language alternates samjhe,
- Ya Hindi versions ko primary banao aur Hinglish ko canonical Hindi par point karo,
- Ya ek language commit karo aur doosri hatao. Do parallel un-linked copies mat rakho.

**7. Original value add karo (differentiation)**
Is niche me sab copy karte hain. Jo cheezein sirf aap de sakte ho:
- Real screenshots har status-check step ki (updated jab portal change ho)
- Calculators ko articles me embed karo (ye already site ki strength hai)
- State-wise data tables jo official portals se verify ki gayi hon
- "Last verified on [date] — maine khud portal par check kiya" ki visible verification note (aur ye sach honi chahiye)

### Phase 3 — Trust Building (Ongoing, Month 2+)

**8. Google Search Console check karo**
- Manual Actions report dekho — agar manual penalty hai to reconsideration request lagegi (upar ke fixes ke BAAD).
- Agar manual action nahi hai (sirf algorithmic hit), to koi request nahi ki ja sakti — fixes + agla core/spam update rollout hi recovery lata hai.

**9. Off-site signals**
- Facebook page aur WhatsApp channel already hain — inhe grow karo, direct traffic spam recovery me help karta hai.
- Agriculture forums, YouTube (real face/voice), local news mentions — real-world E-E-A-T.

**10. Sabr rakho**
- Algorithmic spam hit ki recovery agle spam/core update rollout par hoti hai — typically **2–6 mahine** fixes ke baad. Beech me traffic flat rahega, ye normal hai.
- Recovery ke chakkar me aur zyada articles chaapna sabse bari galti hogi — ye pattern ko aur confirm karta hai.

---

## Part 3: AI-Content Ko Real Insaan Jaisa Kaise Banayein

Site ka content AI-assisted lagta hai — evidence: ek hi author ke naam se 10 articles ek din me (4–5 min ke gap par), har article par author bio ka alag AI-rotated version, aur predictable article structure. Google directly "AI content" ko penalize nahi karta — wo **"scaled, low-effort, no-first-hand-experience"** content ko penalize karta hai. Farq yahi hai jo fix karna hai.

### AI ke Tell-Tale Signs Jo Site Par Dikhe

| AI signal | Site par kahan hai | Human fix |
|---|---|---|
| Bulk generation (10 articles/din, minutes ke gap) | 9 & 12 July 2026 ke batches | Ab se 2–3/hafta, alag dino par |
| Rotating author bios (har article par alag description) | JSON-LD `author.description` har page par different | Ek static, real bio har jagah |
| Same skeleton har article me (intro → recap → table → problems → FAQ → "Site Ke Doosre Section") | Sab sample articles me identical ending section | Structure ko topic ke hisaab se vary karo |
| Koi real screenshot/photo nahi | Articles me sirf text + generic images | Portal ke asli screenshots, apne phone ki photos |
| Koi first-hand detail nahi | "Portal par khud dekha" claim hai lekin proof zero | Date-stamped verification: "Maine 26 Aug ko check kiya, ye screen aayi" + screenshot |
| Rhetorical filler headings ("Sabse Pehle Woh Jawab, Jiske Liye Aap Aaye Hain") | Har article ke H2s | Seedhe descriptive headings jo search me bhi match karein |

### Human Banane Ke Concrete Steps (har article par)

1. **Real screenshots daalo** — pmkisan.gov.in ke status page, eKYC screen, error messages ke asli screenshots (personal info blur karke). Ye ek cheez akeli sabse bada "real insaan" signal hai — AI sites ye nahi kar sakti.
2. **First-hand experience likho** — "Mere gaon ke ek kisan ka payment NPCI mapping me atka tha, humne aise fix kiya" type real cases. Specific, verifiable details.
3. **Ek hi awaaz rakho** — abhi har article ki tone thodi alag hai (AI batch ka sign). Ek insaan ki consistent writing style honi chahiye — wahi phrases, wahi humor, wahi style har jagah.
4. **Imperfection theek hai** — AI content suspiciously "complete" hota hai (har section, har angle covered). Real expert kuch cheezein skip karta hai, kisi point par zyada deep jaata hai. Har article ko same template me mat bharo.
5. **Update logs dikhाo** — article ke end me visible changelog: "18 Aug: 23vi kist ki date add ki. 5 Jul: pehli baar publish." Ye dateModified ko justify bhi karta hai.
6. **Video/audio add karo** — 2-minute ka screen recording (status check karte hue) YouTube par + article me embed. Face/voice = strongest E-E-A-T.
7. **Comments/sawal enable karo** — real users ke sawal aur unke jawab organic content banate hain jo AI generate nahi kar sakta.

### Purane AI Articles Ka Kya Karein

Sab delete mat karo. Priority order:
1. Jo articles GSC me kabhi impressions laaye — unhe **rewrite** karo (screenshots + first-hand info add karke, structure todke).
2. Jo kabhi rank nahi hue aur pure template hain — **delete + 301**.
3. Rewrite karte waqt `dateModified` update karna tab justified hai — kyunki content sach me badla.

---

## Part 4: Repetitive Keywords (Over-Optimization)

4 sample articles (~10,000 words) ke text analysis se — ye words/phrases zaroorat se zyada repeat ho rahe hain:

### Sabse Zyada Repeated Words

| Word | Count (4 articles) | Note |
|---|---|---|
| kisan | 80 | Brand + topic word — kuch natural hai, lekin density high |
| status | 66 | Har article me forced |
| kist | 51 | Kist-articles me expected, lekin doosre topics me bhi ghusa hai |
| aadhaar | 49 | |
| check / ekyc | 45 / 45 | "status check" combo 20 baar |
| official | 44 | Trust-word ki over-use — 44 baar "official" likhne se official nahi lagta |
| portal | 35 | |
| payment | 35 | |
| registration | 30 | |

### Repeated Phrases

| Phrase | Count | Problem |
|---|---|---|
| "pmkisan.gov.in" | 24 (sirf 4 articles me) | Har doosre paragraph me URL repeat — ek baar link karo, baad me "official portal" kaho |
| "status check" | 20 | Keyword-stuffing pattern |
| Author name "Manish Kumar" | 15 | Schema + byline + bio me har jagah — normal hai lekin rotating bios ke saath suspicious |

### Slug-Level Repetition

- **16 slugs me "2026"** aur 1 me "2027" baked-in hai (`PmKisan24viKist2026`, `KisanCreditCardOnlineApply2026`...) — year change hote hi ye URLs stale ho jayenge; ya to redirect karna padega ya URL me date rakhna hi galti thi. **Naye articles me year-free slugs use karo** (`pm-kisan-24vi-kist`), year ko title/content me rakho.
- **24 CamelCase slugs** vs baaki kebab-case — do generations ka content clearly alag dikhta hai (pehla batch programmatic tha). Naye sab kebab-case rakho; purane CamelCase mat badlo bina 301 ke.
- Har title me same pattern: `[Keyword] 2026: [Benefit phrase] - KisanStatus` — titles ko vary karo.

### Fix Rules

1. **Ek keyword ka density ~1–1.5% se upar mat jaane do** — "status" 66 baar 4 articles me matlab har 150 words me ek baar. Aadha karo: pronouns use karo ("ye", "iska record"), synonyms ("jaankari", "halat").
2. **URL ek baar link karo per article** — pmkisan.gov.in ko har mention par repeat karna spam signal + kharab reading experience hai.
3. **"official" / "sarkari" jaise trust-words kam karo** — inki over-use low-trust sites ka pattern hai.
4. **Internal linking anchor text vary karo** — "Site Ke Doosre Section — Yeh Bhi Dekhein" har article ke end me identical block hai; contextual in-content links behtar hain.

---

## Priority Checklist (Quick Reference)

- [ ] Publishing velocity: max 2–3/week, kabhi burst nahi
- [ ] dateModified sirf real changes par; sitemap lastmod sync
- [ ] Speculative kist-prediction articles delete/redirect/convert
- [ ] Author schema: static bio, real ya no LinkedIn
- [ ] /about par proper author page
- [ ] 33 burst articles ka keep/merge/delete audit
- [ ] hreflang ya consolidation for /articles/hi/
- [ ] GSC Manual Actions check
- [ ] Har article me unique value (screenshots, calculators, verified data)
- [ ] Real screenshots + first-hand verification notes (AI → human)
- [ ] Article structure vary karo — identical template todo
- [ ] Keyword density aadhi karo (status/kisan/official/pmkisan.gov.in repeats)
- [ ] Naye slugs: kebab-case, year-free
- [ ] 2–6 mahine patience, no new content bursts

---

*Analysis: live crawl of kisanstatus.com on 28 Aug 2026. Publish dates extracted from Article JSON-LD schema on all 51 articles; sitemap lastmod from sitemap.xml. No values fabricated — sab evidence upar tables me hai.*
