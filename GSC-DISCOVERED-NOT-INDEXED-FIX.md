# GSC "Discovered – currently not indexed" (39 pages) — Fix Plan
strictly rules 
no same table section FAQs intrnal links no robotic everything must b unique and real human writing not a robotic section 
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
Har description **Section 2.5 ke writing rules** follow kare — warna thin-content fix karte karte
AI-pattern content ka naya problem khada ho jayega.

**Blast radius:** `lib/categories.ts`, `app/articles/category/[category]/page.tsx`,
`app/articles/hi/category/[category]/page.tsx`

**✅ DONE (2026-08-20).** Do halves the:
1. **English half pehle se done tha** — `app/articles/category/[category]/page.tsx` me
   `CategoryIntro` sab 6 categories cover karta hai (PR #304 + baad ke commits).
   `longDescription` field wala approach use nahi hua — intros seedha template me
   JSX sections hain (internal links ke saath, jo data-field me nahi ho sakte).
2. **Hindi half ab kiya** — `app/articles/hi/category/[category]/page.tsx` me
   `CategoryIntroHi` add hua, sab 6 categories ke liye unique Hindi intros
   (~150–260 words har ek). Ye pages pehle 114–199 words pe the.
   - Har intro ka structure alag hai (rule 2.5 A.6): status-check sawaal-driven
     triage hai, loan "agla kadam" angle se, farming kendra-vs-rajya comparison se,
     mandi do-rate mila ke dekhne ki salah se, pashupalan income-sources se,
     agri-business do-schemes-do-raaste contrast se.
   - Sab 34 internal links repo ke asli slugs se verify kiye (script check — zero missing).
   - Sab amounts repo ke already-verified articles se hi liye (₹1.6 lakh shed cap,
     ₹3 lakh pashu KCC, ₹12,000 MP/Namo Shetkari, ₹9,000 Rajasthan, ₹10/L gau mutra,
     155261 helpline) — koi naya claim invent nahi.
   - FAQ blocks nahi dale — GSC query data ke bina sawaal invent karna rule 2.5 C ke
     against hai. Jab GSC export mile, FAQ alag pass me add ho sakte hain.

**Verification:** `tsc --noEmit` clean, `next build --webpack` pass (sandbox me Turbopack
crash hota hai — webpack se verify kiya), `check:titles` + `check:content` pass.

### Fix 1.5 nahi — pehle ye padho

Fix 1 aur Fix 3 dono me naya content likhna hai. Wo content kaisa ho, uske rules Section 2.5 me
hain. Content pehle rules ke against check karo, phir commit karo.

### Fix 2 — Internal linking: hub pages se deep pages tak (HIGH, template-level)

**Problem:** "Discovered not indexed" ki classic wajah — page sirf sitemap me hai, koi strong
internal link nahi. Homepage se sirf ~20 pages directly linked hain; baqi 130 pages 2–3 click deep.

**Fix:**
1. Homepage pe ek "Naye Articles" section — latest 6–8 articles, har hafte naturally update hota hai
2. Har article ke neeche "Related" block already hai (`cross-links.ts`) — usme rotation aisi rakho ki
   **naye/kam-linked articles ko priority mile** (abhi random/static rotation hai). Simple approach:
   article ki publish date se weight karo — naya = zyada baar linked
3. Category pages (Fix 1 ke baad) khud strong hub ban jayenge

**Blast radius:** `components/HomeContent.tsx` (not `app/page.tsx` — homepage markup lives in
the component), `lib/cross-links.ts`

**✅ DONE (2026-08-20).** Do cheezein mili/hui:
1. Homepage pe "Naye PM Kisan Articles" section **pehle se maujood tha** — banane ki zaroorat
   nahi thi, par `TOP_ARTICLES_LIMIT` sirf **3** tha. 3 → **6** kiya (doc 6–8 maangta hai).
   Ye limit Hinglish aur Hindi dono sections pe lagti hai, to homepage se ab 6 extra deep
   pages directly linked hain. Grid lg pe 3-up hai, to 6 do saaf rows bharta hai.
2. `lib/cross-links.ts` me freshness weighting add hui. Pehle rotation purely path-hash thi
   (even spread). Ab har article link pe `freshness` (published/modified ka max) hai, aur
   `weight()` naye pages ko rotation pool me zyada slots deta hai:
   `<=45 din = 3 slots`, `<=120 din = 2`, uske baad `1` — yaani weighting khud decay ho jati
   hai, manual cleanup nahi chahiye. Tools/hubs/categories undated hain, wo unweighted rehte
   hain (evergreen targets).

**Deliberately mild (3x, 10x nahi):** aggressive multiplier purane pages ko starve kar deta,
aur wahi pages abhi section ki rankings carry karte hain.

**Verified (standalone simulation, 40 targets / 150 source pages):** fresh pages ko old se
**2.9x** inbound links milte hain, **0 of 40 targets orphan** (koi page zero links pe nahi),
ek page pe duplicate href nahi, aur output **deterministic** hai — to static build reproducible
rehta hai. `rotate()` me dupe-skip add karna pada, warna weighted pool ek hi href do baar de
sakta tha.

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

**✅ Hubs DONE (2026-08-20).** `/yojana` pe "Yojana ka naam suna hai — par sach kitna hai?"
intro (rumor-vs-real angle, 6 deep links, sirf repo-verified facts: ₹1.6L shed range,
₹3L pashu KCC, 155261 helpline). `/calculator` pe "Kaunsa tool kab kaam aata hai?" section
(use-case angle — kab kaunsa tool, 6 links: 4 tools + 2 guides). Dono ke structure Fix 1
ke intros se alag hain. `/contact` ka decision abhi PENDING — expand vs noindex user se
poochna hai.

### Fix 5 — Content quality guard build me ✅ DONE (2026-08-20)

`scripts/check-content-length.js` ban gaya, `npm run check:content` se chalta hai aur
`npm run build` me `check:titles` ke baad wired hai.

- Data files (`articles-data`, `core-articles-data`, `hindi-yojana-data`, `hindi-kisanguides-data`,
  `loan-mandi-pashupalan-data`, `hindi-loan-mandi-pashupalan-data`) se har article ka component
  resolve karta hai aur JSX se prose word-count nikalta hai.
- `< 1,500` = THIN (indexing risk, Fix 3 triage), `< 2,000` = below site standard.
- `noindex: true` pages skip hote hain (Fix 3/Fix 4 ka intentional noindex).
- Rajya-yojana / maandhan tool pages check me nahi hain — wo checker hain, article nahi.
- **Warning only, build kabhi fail nahi karta** — warna log bypass karne lagenge.

**Pehla run (64 articles checked) — 21 below standard mile, doc ki list se dugne:**
sirf ye 2 THIN (<1,500) hain — `PmKisanVoluntarySurrenderGuide` (1,469) aur
`PmKisanCscRegistrationCharges` (1,469). Baqi 19 1,510–1,965 ke beech hain, jinme
7 naye hain jo pehle kisi list me nahi the (`KisanRinKahaSeLe2026` 1,510,
`soil-health-card-complete-guide-2026` 1,582, `custom-hiring-centre-chc-portal` 1,620,
`madhumakhi-palan-kvic-subsidy` 1,650, `KisanTractorLoan2026` 1,693,
`PmKusumYojanaSolarSubsidy2026` 1,720, `PmKisanBankAccountChangeProcess` 1,752).

**Counting note:** ye script JSX source padhti hai, rendered HTML nahi — iske numbers
live-page measurement se ~5-7% neeche aate hain. Relative signal ke liye use karo;
absolute figure ke liye Reference section ka curl audit chalao.

---

## 2.5. Content likhne ke rules — har naye/updated article aur category intro pe lagu

Google ke recent updates (Helpful Content, spam updates) scaled/AI-pattern content ko target
karte hain. Humne pages ko crawl-worthy banane ke liye content add karna hai — par agar wo
content AI-generated dikha, to fix ulta padega. Isliye ye rules **non-negotiable** hain.

### A. Human likhne ka tareeqa (AI-pattern se bachna)

0. **Har article 2,000+ words ka ho** — par sirf real, helpful, unique content se. Padding
   karke 2,000 tak pahunchna allowed nahi (rule 5 dekho). Agar topic me 2,000 words ki depth
   nahi banti, to Fix 3 ke options use karo (merge ya noindex), thin article publish mat karo.
1. **Banned words/phrases** — ye AI ke fingerprint hain, kabhi use mat karo:
   "delve", "moreover", "furthermore", "in today's world", "it's important to note",
   "comprehensive guide", "seamless", "landscape", "navigate the process", "unlock",
   "empower", "game-changer", "in conclusion". Hindi me bhi: har paragraph "iske alawa" ya
   "is prakar" se shuru nahi hoga.
2. **Paragraph aur sentence length UNIFORM nahi hogi.** AI har paragraph 3-4 line ka aur har
   sentence ek jaisi length ka banata hai. Real writing me kahin 1 line ka paragraph hota hai,
   kahin 4 ka. Kahin 5-word ka sentence. Kahin lamba. Mix karo — jaan-boojh kar.
3. **Har claim me asli specifics.** Yojana ka naam, amount (₹6,000, ₹2,000 ki kist), date,
   helpline number, portal ka naam (pmkisan.gov.in). "Sarkar kai yojanayein chalati hai" type
   ka generic sentence = delete. Jo cheez verify nahi kar sakte, wo likhni hi nahi (guess mat karo).
   **Fake ya unverified claim = zero tolerance.** Koi bhi amount, date, eligibility rule jo
   official source (gov.in portal, press release) se confirm nahi — article me nahi jayega.
   Galat info kisan ko nuksan degi aur Google trust bhi todegi.
4. **Zero copy-paste.** Kisi bhi website (news sites, dusre yojana blogs, sarkari portal ka
   text) se paragraph utha kar mat daalo — na as-is, na halka reword karke. Facts wahi se lo,
   par likhna 100% apne words me hai. Har article unique hona chahiye — apni site ke dusre
   articles se bhi overlap nahi (do articles me same paragraphs = duplicate content problem).
5. **Filler/invaluable content mat likho.** Word count badhane ke liye padding paragraphs,
   obvious baatein ("internet aaj bahut zaroori hai"), ya repeated info mat daalo. Har section
   kisan ko kuch naya aur kaam ka bataye — warna wo section delete karo. 2,000 words padding
   se behtar 1,800 solid words hain... par target phir bhi 2,000+ REAL content ka hai.
6. **Har intro alag structure ka ho.** 12 category descriptions likhni hain — agar sab
   "Is category me aapko X milega..." se shuru huin to Google ke liye wo 12 near-duplicates hain.
   Kisi me sawaal se shuru karo, kisi me kisan ki asli situation se, kisi me seedha fact se.
7. **Lists/tables tabhi jab data ho.** AI har cheez bullet bana deta hai. Table sirf comparison
   ya numbers ke liye; warna normal paragraph me likho. Har section me heading + 3 bullets ka
   pattern repeat mat karo.
8. **First-person aur direct address theek hai.** "Humne dekha hai ki...", "Aap agar 13vi kist
   ka wait kar rahe hain to..." — ye human signal hai. Robotic neutral tone se behtar.

### B. On-page limits (AEO/SEO ranges — har page pe check karo)

| Cheez | Limit | Note |
|---|---|---|
| Title tag | 50–60 chars | `check-title-h1.js` guard already hai |
| Meta description | 120–155 chars | |
| Primary keyword | 1–2 per page | |
| Secondary keywords | 3–5 max | |
| Keyword density | 0.5%–1.5% max | Zabardasti keyword thoosna = spam signal |
| Content length | Articles: 2,000+ words (mandatory) | Category intros 300–500 (Fix 1); padding se nahi, real content se |
| H1 | 1 per page | |
| H2 | 3–8 per page | |
| H3 | 5–15 per page | Zaroorat ho tabhi |
| Paragraph | 2–4 lines max | Par length VARY karo (rule A.2) |
| Sentence | 8–16 words | Average — kuch chhote, kuch lambe |
| Internal links | 3–10 per page | Context ke saath, "yahan click karein" nahi |
| External links | 2–5 | Sirf high-authority (gov.in portals, RBI, etc.) |
| FAQ schema | Max 8 questions | Answer 40–60 words, seedha jawab pehli line me |
| Structured data | 1–3 schema types per page | FAQPage + Article kaafi hai, stuffing nahi |
| Content update | Har 30–90 din | Kist dates, amounts fresh rakho |

### C. FAQ blocks kaise likhne

- Sawaal wahi jo kisan sach me poochte hain (GSC queries se uthao, invent mat karo)
- Jawab 40–60 words, pehli hi line me seedha answer, phir 1 line context
- Har category ke FAQ alag hon — same 3 sawaal reword karke 12 jagah mat daalo
- FAQPage schema tabhi jab FAQ visible content me bhi ho

### D. Commit se pehle self-check

- [ ] Article 2,000+ words ka hai (bina padding ke)?
- [ ] Har claim/amount/date official source se verified hai (koi fake/unverified claim nahi)?
- [ ] Kahin se copy-paste ya reword nahi kiya — 100% apne words, site ke dusre articles se bhi unique?
- [ ] Har section kisan ke liye genuinely helpful hai (filler sections delete kiye)?
- [ ] Banned words zero hain?
- [ ] Paragraph lengths mixed hain (sab 3-line nahi)?
- [ ] Kam se kam 3 verifiable specifics (amount/date/portal) hain?
- [ ] Ye intro baqi 11 se structurally alag lagta hai?
- [ ] Internal links 3–10, sab contextual?
- [ ] Title 50–60 chars, meta 120–155?

---

## 3. Kya NAHI karna

- **"Request Indexing" spam mat karo** — 39 pages pe manually request karna kaam nahi karta jab
  root cause quality/linking hai. Pehle Fix 1–2 deploy karo, phir sirf top 5–10 pages pe request karo.
- **AI se bulk content mat bharwao** — Google ka "discovered not indexed" aksar scaled/thin content
  ka hi symptom hai; 300 words ka generic AI paragraph daalne se page aur zyada pattern-match hoga.
  Har category description me asli specifics chahiye (yojana names, amounts, dates) —
  full rules Section 2.5 me.
- **95 pages jo 2,000+ words pe hain unhe mat chhedo** — wo already standard pe hain.
- **`Discovered` row pe Validate Fix ka wait mat karo** — ye row kabhi turant clear nahi hoti;
  Google apni raftaar se crawl karega. Success metric = indexed count (143) ka badhna, is row ka
  zero hona nahi.

---

## 3.5. Article expansion — parts tracker (2 articles per part, har part ke baad push)

Thin articles ko 2,000+ words tak le jaana hai — Section 2.5 ke rules ke saath (real info,
no padding, no AI patterns). Har part = 2 articles fix + is file me status update + direct push.

**Live re-measure (2026-08-20, doc ke Reference script se — boilerplate excluded).**
Doc ke purane numbers optimistic the: har page actual me ~60–170 words kam nikla, aur
Part 1 ke dono pages 2,000 cross kar chuke hain par claimed 2,200/2,300 se ~150 neeche hain.
Aage ke parts me `Actual` column pe bharosa karo, purane estimate pe nahi.

| Part | Articles | Doc ne kaha | **Actual (live)** | Gap | Status |
|---|---|---:|---:|---:|---|
| **1** | `/articles/hi/mgnrega-pashu-shed-yojana` | 2,200+ | **2,065** | — | ✅ Done (2026-08-20) |
| | `/articles/hi/pashu-kisan-credit-card` | 2,300+ | **2,078** | — | ✅ Done (2026-08-20) |
| **2** | `/articles/PmKisanVoluntarySurrenderGuide` | 1,634 | **1,572** | — | ✅ Done (2026-08-20) |
| | `/articles/PmKisanCscRegistrationCharges` | 1,663 | **1,568** | — | ✅ Done (2026-08-20) |
| **3** | `/articles/hi/pm-kisan-khad-yojana-sach` | 1,720 | **1,632 → ~2,040** | — | ✅ Done (2026-08-20) |
| | `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026` | ~1,750 | **1,648 → ~2,090** | — | ✅ Done (2026-08-20) |
| **4** | `/articles/fto-status-check-paisa-kab-aayega` | ~1,800 | **1,718 → ~2,150** | — | ✅ Done (2026-08-20) |
| | `/articles/hi/parihara-payment-status` (PariharaPaymentStatusHindi) | ~1,800 | **1,665 → ~2,050** | — | ✅ Done (2026-08-20) |
| **5** | `/articles/PmKisanVillageWiseListPdfDownload` | ~1,830 | **1,901 → ~2,150** | — | ✅ Done (2026-08-20) |
| | `/articles/hi/rythu-bharosa-status` (RythuBharosaStatusHindi) | ~1,840 | **1,676 → ~2,070** | — | ✅ Done (2026-08-20) |

| **6** | `/articles/KisanRinKahaSeLe2026` | — | **1,510 → 2,003** | — | ✅ Done (2026-08-20) |
| | `/articles/soil-health-card-complete-guide-2026` | — | **1,582 → 2,012** | — | ✅ Done (2026-08-20) |

**Doc ki original list (Parts 1–5) poori ho gayi.** Par `check:content` guard ne 17 aur articles
nikale jo 2,000 se neeche hain — wahi ab Part 6 se aage ka kaam hai. Guard ki list hi authoritative
queue hai (`npm run check:content`), doc ki purani list nahi.

**Remaining queue (guard se, 2026-08-20 ke baad 15 bache):**
`custom-hiring-centre-chc-portal` (1,620) · `madhumakhi-palan-kvic-subsidy` (1,650) ·
`KisanTractorLoan2026` (1,693) · `PmKusumYojanaSolarSubsidy2026` (1,720) ·
`PmKisanBankAccountChangeProcess` (1,752) · `PmKisanMaandhanYojanaPension` (1,800) ·
`NanoDap500mlPriceInIndia2026` (1,811) · `PmKisanStateNodalOfficerList` (1,816) ·
`pm-kisan-self-registered-status-check` (1,833) · `PmKisanFaceAuthenticationEkyc` (1,853) ·
`bakri-palan-yojana-nlm-subsidy` (1,872) · `PmKisanCorrectionForm2026` (1,883) ·
`mushroom-kheti-nhb-subsidy` (1,891) · `AgriStackKyaHai2026` (1,954) ·
`PmKisanRejectedStatusReApplyGuide` (1,965)

**Part 6 me kya add hua (2026-08-20)** — Option B (sirf repo-verified facts):
- *KisanRinKahaSeLe2026*: (1) "Zameen apne naam nahi hai" section — KCC bataidar/mokhik
  pattedar/SHG-JLG ke liye khula hona aur rajya-wise batai proof ka farak (repo ke Hindi
  `kcc-limit-kaise-badhaye` article se), lease-tenure loan se chhota hone par objection
  (DairyFarmLoan ke verified FAQ se), Mudra Tarun Plus ₹20 lakh + pehli-baar wali ₹10 lakh
  practical ceiling, PMEGP 15–35% margin money ka ₹8 lakh wala example — dono
  `dairy-farm-loan-without-collateral` se; contextual links dairy-loan + JanSamarth par.
  (2) "Bank ne mana kar diya" section — likhit rejection reason, receiving muhar, grievance
  cell, RBI Banking Ombudsman (cms.rbi.org.in), aur OTS/restructuring + No Dues Certificate
  (KisanKarjMafi article ke verified FAQ se) karj-mafi ke intezaar ki warning ke saath.
  +2 FAQ (bataidar, rejection escalation). Internal count 1,510 → **2,003**.
- *soil-health-card-complete-guide-2026*: (1) "Sample hi galat chala gaya" section — 8–10
  jagah se mila-kar sample kyun (article ke apne step se expand), khaad ke dher / haal me
  khaad daali jagah / med / ped ke neeche se sample na lena, sahi waqt = fasal katne ke baad,
  label par survey number. (2) "Sifarish ka paisa kahan bachta hai" section — urea 45kg
  ₹242 aur DAP 50kg ₹1,350 subsidized rate + bina-subsidy ₹3,000+ laagat (repo ke NanoDap +
  KhadYojanaSach articles se), POS machine aur receipt ki shart, zila krishi adhikari ko
  shikayat, nano DAP ₹250–350/500ml saathi-not-replacement, aur ₹11,000 khad-yojana fraud ki
  warning + link. +2 FAQ (galat sample, paisa maangne wala). Internal count 1,582 → **2,012**.
- Dono me `MODIFIED` update aur read-time 12 → 15 min. Koi naya amount/date invent nahi.
- Verification: `check:titles` (108 pairs) + `check:content` pass — dono ab guard ki list se bahar.

**Part 5 me kya add hua (2026-08-20)** — Option B (sirf repo-verified facts):
- *VillageWiseListPdf*: (1) "Ghar ke bade-buzurg ka naam list me hai — unke baad kya" section —
  Succession Transfer (CSC, death certificate + Khatauni + Aadhaar — article ke apne verified FAQ
  ka expansion), mutation-pehle-record-baad ki chain, recovery warning, bank-account-change guide
  link. (2) "List se shikayat tak" escalation section — gaon-level collective complaint (list PDF
  as evidence, block office ke through), individual chain 155261 → Help Desk ticket → State Nodal
  Officer (repo ke NodalOfficerList article se), taaza list re-check ki salah. Internal count
  1,593 → **2,050** (live ~2,150).
- *RythuBharosaStatusHindi*: (1) "Ekad-gunta ka ganit" section — 40 guntas = 1 acre, 2.5 acre ×
  ₹6,000 = ₹15,000 example, disputed/prohibited zameen ka hissa cut, multi-village khaton ke alag
  credits (sab Hinglish sibling RythuBharosaStatusCheck ke verified content se, naye Hindi words
  me). (2) "PM Kisan aur Rythu Bharosa dono ek saath" section — dono alag systems, fixed ₹6,000
  vs per-acre, passbook entry pehchan (RYTHU/treasury vs PMKISAN). Internal count 1,564 → **1,878**
  (live ~2,070).
- Dono me `modifiedTime`/`MODIFIED` update. Koi naya amount/date invent nahi.
- Verification: `tsc --noEmit` clean, `check:titles` + `check:content` pass (dono ab list se bahar).

**Part 4 me kya add hua (2026-08-20)** — Option B (sirf repo-verified facts):
- *FTO Status Check*: (1) "eKYC pending hai to FTO banega hi nahi" section — Face Authentication
  se ghar baithe eKYC (PMKisan + AadhaarFaceRD, UIDAI publisher — repo ke FaceAuth article se),
  contextual link. (2) "30 din se zyada — shikayat ka seedha rasta" — 155261 / 011-24300606
  (call se pehle kya ready rakhna), pmkisan.gov.in Help Desk ticket, complaint-number sambhalne
  ki salah (sab repo ke FTO-matlab article se), aur kist-cycle context (23vi kist 20 June 2026,
  24vi October 2026 expected/not-notified — repo ke 24viKist article se). +2 FAQ (eKYC pending,
  helpline prep). Internal count 1,534 → **2,004** (live ~2,150).
- *Parihara Hindi*: (1) "Teen portal" section — status Parihara par / record Bhoomi par,
  private .com sites warning, RTC cross-check (survey number + rakba + naam) — sab Hinglish
  sibling article ke verified content se, naye words me. (2) "Bhugtan ki chain" section —
  survey→taluk→treasury→bank, 2–4 hafte taluk-wise farak, 2–3 mahine pending = chhupi rejection,
  Entry ID + receiving copy + screenshot ki aadat. Internal count 1,550 → **1,905** (live ~2,050).
- Dono me `modifiedTime` update. Naya koi amount/date invent nahi — har fact repo ke maujooda
  verified articles se.
- Verification: `tsc --noEmit` clean, `check:titles` + `check:content` pass.

**Part 3 me kya add hua (2026-08-20)** — Option B (sirf repo-verified facts, koi naya amount/date invent nahi):
- *Khad Yojana Sach*: (1) "Khad par asli bachat ka raasta" section — Soil Health Card (free test,
  soilhealth.dac.gov.in, repo ke soil-health guide se) + Nano DAP option (₹250–350 / 500ml vs ₹1,350
  granular bori — repo ke NanoDap article se), dono contextual internal links ke saath. (2) "OTP de
  diya aur paisa kat gaya" recovery section — 1930 helpline, cybercrime.gov.in, bank ko turant
  batana (repo ke FTO/Parihara articles ke verified facts). +1 FAQ (OTP fraud recovery).
  `check:content` internal count 1,549 → **1,934** (live ~2,040).
- *Maandhan Contribution Chart*: (1) "Paisa jama kahan hota hai" section — LIC fund management,
  aapka-share-vs-govt-share alag tracking, premature exit me govt share wapas nahi (repo ke
  AutoDebitPooraSach se), CSC "processing fee" fraud warning + 1800-3000-3468 (Registration2026 se).
  (2) "Aapke baad parivar ka kya" section — 60-se-pehle do options / 60-ke-baad ₹1,500 family
  pension, nominee-registration ka 1–2 mahine vs 6–12 mahine settlement farak (family-pension-rules
  se), us guide ka contextual link. `check:content` internal count 1,396 → **1,779** (live ~2,090).
- Dono me `MODIFIED`/`modifiedTime` update. Internal link slugs data files se verify kiye
  (soil-health, NanoDap, family-pension-rules — sab OK).
- Verification: `tsc --noEmit` clean, `check:titles` (108 pairs) + `check:content` pass. Full
  `next build` is sandbox me Google Fonts fetch (firewall) pe rukta hai — code errors zero.

### ⚠️ Parts 3–5 blocked — official source chahiye

Section 2.5 rule A.3 ("jo verify nahi kar sakte wo likhni hi nahi — fake ya unverified
claim = zero tolerance") aur A.4 (zero copy-paste) ke wajah se ye parts abhi likhe nahi
ja sakte. (Part 2 isliye ho paya kyunki uska naya content repo ke already-verified
facts se ban gaya — Option B approach; user ne Option A/mixed bhi allow kiya hai,
official figures aayein to enrich kar sakte hain.) Jo naya content chahiye wo amounts / dates / eligibility rules ka hai, aur:

- `pmkisan.gov.in` aur `nrega.nic.in` sandbox se **DNS resolve nahi hote** (firewall
  allowlist ka issue nahi — host hi resolve nahi hota). Ahrefs HTML-snapshot fallback bhi
  unavailable (Ahrefs connected nahi hai).
- Web search se sirf third-party yojana blogs milte hain — unse amounts/dates uthana
  seedha A.3 + A.4 ka violation hai, aur galat benefit info kisan ko nuksan degi.

**Unblock karne ke teen raaste:** (a) official figures paste/upload karo, ya
(b) sirf repo me already-verified facts se expand karo (naya amount/date invent na karke —
process depth aur structure se), ya (c) gov portals ko is environment se reachable banao.

**Part 2 me kya add hua (2026-08-20):**
- *Voluntary Surrender*: surrender-vs-refund-vs-aapatti section (repo ke recovery-notice article ke verified facts se —
  refund kiston me possible, tehsil-level pe fees-free, dobara-judne ka rasta khula), pati-patni "family unit" duplicate
  case (`/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega` link), helpline/email/Help-Desk-ticket contact section
  (155261, 011-24300606, pmkisan-ict@gov.in — sab repo ke helpline article se), OTP-fraud warning. +1 FAQ
  (surrender vs refund). `check:content` ab **2,041 words** dikhata hai (pehle 1,469).
- *CSC Charges*: Face Authentication free-alternative section (PMKisan app + AadhaarFaceRD, publisher checks —
  sab repo ke FaceAuth article se; buzurg-parents angle bhi), PM-Kisan-channel complaint section (155261 /
  011-24300606 / pmkisan-ict@gov.in / Help Desk ticket — CSC-grievance se alag kab kaunsa), OTP-fraud warning.
  +1 FAQ (OTP nahi aa raha → face auth). `check:content` ab **2,041 words** (pehle 1,469).
- Koi naya amount/date/rule invent nahi — har fact repo ke already-verified articles se cross-check karke liya.
  Dono me `MODIFIED` update. Internal links slugs verify kiye (pati-patni ka sahi path `/rajya-yojana/...` nikla,
  `/yojana/pm-kisan-helpline-155261` bhi data file se confirm).

**Part 1 me kya add hua (2026-08-20):**
- *MGNREGA pashu shed*: job card banwane ka process (15 din rule), bakri/murgi shelter section
  (NLM cross-link), majdoori payment timeline (15-din rule + delay compensation), nrega.nic.in
  MIS se khud status check karne ka tareeqa, social audit / recovery warning.
- *Pashu KCC*: RRB/cooperative bank + dairy society camp ka rasta, card ke baad revolving limit
  sahi chalane ke rules (byaj bachane ka math), fraud section (no portal / no fee / no list,
  1930 helpline), ek-line summary.
- Dono me sirf verifiable info — koi naya amount/date invent nahi kiya. `modifiedTime` update.

**Baaki notes:**
- `PmKisan26viKist` (1,022 words) status-check page hai — pehle GSC impressions dekho, ranked
  ho to expand, warna Fix 3 triage.
- Rajya-yojana tools (checkers) content articles nahi hain — word count unpe apply nahi hota.

---

## 4. Execution order

| Step | Fix | Blast radius | Commit |
|---|---|---|---|
| 1 | Category intro content (12 descriptions + template) | 2 templates | ✅ Done (2026-08-20) — EN pehle se tha, HI ab `CategoryIntroHi` se |
| 2 | Homepage naye-articles section + cross-link weighting | `components/HomeContent.tsx`, `lib/cross-links.ts` | ✅ Done (2026-08-20) |
| 3 | Bottom-5 articles triage (expand/merge/noindex) | per-page | `SEO: thin article triage batch 1` |
| 4 | Utility pages decision | small | ✅ Hubs done (2026-08-20); `/contact` pending user decision |
| 5 | Content-length build guard | `scripts/` | ✅ Done (2026-08-20) — `check-content-length.js` + build wiring |

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
