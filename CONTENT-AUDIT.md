# KisanStatus.com — Content Audit & Rewrite Plan

> Audit date: **18 Aug 2026** · 118 articles reviewed (repo se, live crawl nahi)
> Basis: repo content (`lib/*-data.ts` + `components/articles/**`) + web verification.
> **Ahrefs / GSC data is skipped in this round** — matlab "kitni search hai" ka number
> yahan nahi hai. Verdicts topic-demand logic, publish/modify dates, word counts aur
> duplicate-cluster analysis par based hain. Jahan real traffic data se hi faisla ho
> sakta hai, wahan saaf likha hai: **NEEDS DATA**.
> Ye file sirf plan hai — koi article delete/redirect isko padhne ke baad manually hoga.

---

## 0. Ek nazar me — kya karna hai

| Priority | Kaam | Kitne articles | Kyun |
|---|---|---|---|
| **P0** | Kist cycle ki galtiyan theek karo | 5 | Site ka core money-topic; abhi factually confusing hai |
| **P0** | `/articles/PmKisan26viKist` ko noindex ya merge | 1 | Zero demand, thin (1,073 words), premature |
| **P1** | Helpline duplicate cluster clean karo | 3 | Ek hi topic par 3 page — cannibalization |
| **P1** | Karj mafi duplicate cluster clean karo | 2 | 2027-stamped purana page vs naya 2026 page |
| **P1** | 8+ mahine purane evergreen pages refresh | 12 | Titles me "2026" hai, content Dec-Jan ka |
| **P2** | Hindi/Hinglish mobile-status duplicate | 2 | Same intent, dono Hindi me |
| **P2** | Thin pages ko 2,000+ tak le jao | 9 | Site ka apna standard 2,000+ hai |
| **P3** | 59 Hinglish articles ka Hindi twin nahi hai | 59 | hreflang coverage gap — opportunity, defect nahi |

---

## 1. Kist articles — sabse zaroori fix (P0)

Ye site ka sabse bada traffic driver hai aur abhi yahi sabse gadbad hai.

### Asli sthiti (verified, 18 Aug 2026)

| Kist | Date | Source |
|---|---|---|
| 21vi | 19 Nov 2025 | released |
| 22vi | 13 Mar 2026 | released, ~₹18,640 cr / ~9.32 cr parivar |
| 23vi | **20 Jun 2026** | released, ₹18,880 cr / 9.44 cr parivar, Tarakeswar (WB) |
| 24vi | **October 2026 expected** — koi official date nahi | ET / News18 / mahaindialive, Jul 2026 |
| 25vi | ~Feb-Mar 2027 (pattern se) | koi announcement nahi |
| 26vi | ~Jun-Jul 2027 (pattern se) | koi announcement nahi |

### Article-wise verdict

| Page | Words | Last mod | Verdict | Kya karna hai |
|---|---|---|---|---|
| `/articles/PmKisan24viKist2026` | 2,841 | 2026-08-17 | **KEEP — ye hero page hai** | Ye ekdum sahi hai (`status: 'Expected'`, October 2026, 23vi released). October release ke din turant `status: 'Released'` + confirmedDate. Isko site ka #1 kist page banao — homepage aur MasterGuide se sabse prominent link. |
| `/articles/PmKisan25viKist2027` | 2,494 | 2026-08-14 | **UPDATE** | Content theek hai par title "2027" hai jabki demand abhi "24vi" par hai. Title me year kam karo, aur is page ko clearly 24vi ke *baad* wala page banao. `/articles/hi/pm-kisan-25vi-kist` (3,002 words, 13 din purana) bhi isi ke saath align karo. |
| `/articles/PmKisan26viKist` | **1,073** | 2026-08-18 | **NOINDEX (ya merge)** | 👈 Ye wahi case hai jo aapne pucha. Kal banaya gaya, 1,073 words (site ka standard 2,000+), aur ismein khud likha hai "Abhi koi official date nahi hai". 26vi kist ~Jun 2027 me aayegi — 10 mahine door. Abhi iska search zero hai aur agla 10 mahine bhi zero rahega. **Recommendation:** `robots: noindex` daal do aur content ko `PmKisan25viKist2027` me ek section ("Uske baad kya — 26vi") ke roop me merge kar do. Jab 25vi release ho jaye, tab ise index kar dena. Delete nahi — file rakho, sirf index se hatao. |
| `/articles/PmKisanMasterGuide2026` | 2,207 | 2026-02-16 (**183 din**) | **UPDATE (P0)** | Kist table me "24vi Kist — Pending" likha hai bina date ke, aur 6 mahine se touch nahi hua. Table me 23vi (20 Jun 2026, Paid) + 24vi (Oct 2026 expected) daalo. Ye page site ka hub hai — iska stale hona sabse mehnga hai. |
| `/articles/PmKisanBeneficiaryList2026` | 1,741 | 2025-12-31 (**230 din**) | **UPDATE (P0)** | Kist box theek hai (23vi Released / 24vi Oct 2026) par baaki page 8 mahine purana hai aur sirf 1,741 words. Title me "2026" hai. Refresh + expand karo. |

**Aapke sawal ka seedha jawab:** aapne "22vi kist, 23vi kist jaise dead articles" ka zikr kiya —
**achhi khabar hai, aisa koi dedicated article nahi hai.** 22vi/23vi sirf tables aur FAQs ke
andar historical reference ke roop me hain, jo bilkul sahi hai. Jo asli "premature/dead"
page hai wo **`PmKisan26viKist`** hai — future ki kist ka page jiska abhi koi search nahi.
Ye ek pattern warning bhi hai: **agli kist ka article release se 1-2 mahine pehle se zyada
jaldi mat banao.**

---

## 2. Duplicate clusters (P1) — cannibalization

Ye asli SEO nuksan hai: ek hi keyword par apne hi 2-3 page ladte hain.

### 2a. Helpline — 3 pages, ek hi intent

| Page | Words | Last mod | Verdict |
|---|---|---|---|
| `/yojana/pm-kisan-helpline-155261` | 1,357 | 2026-08-18 | **KEEP as canonical** — naya, structured (problem→solution matrix). Par 1,357 words hai, SEO plan me 2,000+ likha tha → **expand karo**. |
| `/articles/hi/pm-kisan-helpline-155261` | 965 | 2026-08-18 | **EXPAND** — Hindi twin, sirf 965 words. Isko 2,000+ karo. |
| `/articles/hi/helpline-shikayat` | 2,963 | 2026-04-17 | **MERGE → 301** | Purana Hindi helpline page, 2,963 words (naye se 3x bada!). Ismein jo achha content hai wo naye page me le jao, phir 301 → `/articles/hi/pm-kisan-helpline-155261`. Do Hindi helpline page rakhna sirf apne aap se ladna hai. |
| `/maandhan/pmkmy-grievance-complaint-helpline` | 1,904 | 2026-05-25 | **KEEP** — ye alag scheme (Maandhan pension) ka helpline hai, PM Kisan ka nahi. Conflict nahi. Bas naye 155261 page se clearly differentiate karo. |

### 2b. Karj mafi — 2027-stamped purana vs 2026 naya

| Page | Words | Last mod | Verdict |
|---|---|---|---|
| `/yojana/kisan-karj-mafi-list-all-states` | 2,427 | 2026-08-18 | **KEEP as canonical** (Hinglish). Verified state-wise data, update-log block — ye sahi banaya hai. |
| `/articles/hi/kisan-karj-mafi-list` | 2,086 | 2026-08-18 | **KEEP as canonical** (Hindi twin, hreflang paired). |
| `/articles/hi/karj-mafi-list` | 3,271 | 2026-08-01 | **MERGE → 301** | Purana page, title me **"2027"** hai (jo abhi galat year-stamp hai) aur `hindi-hreflang.ts` me ye **paired nahi** hai — matlab orphan Hindi page jo naye page se ladta hai. 3,271 words me se jo unique achha hai (state-wise naam check karne ka tareeka) naye page me merge karo, phir 301 → `/articles/hi/kisan-karj-mafi-list`. |

### 2c. Mobile-se status check — Hindi me 2 page

| Page | Words | Verdict |
|---|---|---|
| `/articles/hi/status-check-mobile-se` | 3,120 | **KEEP** — mobile number se status check |
| `/articles/hi/ekyc-mobile-se` | 3,056 | **KEEP, par differentiate karo** — eKYC mobile se |

Dono strong hain (3,000+ words) aur technically alag intent hai (status dekhna vs eKYC karna).
**Verdict: rakho, magar** dono me pehle paragraph me saaf likho ye kya *nahi* hai + ek doosre
ko cross-link karo, warna Google confuse hota rahega. **NEEDS DATA:** agar GSC me dono ek hi
query par impressions kha rahe hain, tab merge karna padega.

### 2d. Maandhan cluster — 13 pages, ek hi scheme

`/maandhan/*` me 13 articles hain, sab ek hi scheme (PM Kisan Maandhan pension) par.
Ye technically valid topic-cluster hai, par 3 pages overlap-risk me hain:

| Page | Words | Verdict |
|---|---|---|
| `/maandhan/pm-kisan-maandhan-pension-calculator` | 2,344 | KEEP |
| `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026` | **1,579** | **MERGE candidate** → contribution chart, calculator page ka hi hissa hona chahiye. Sabse chhota maandhan page bhi hai. |
| `/maandhan/pm-kisan-maandhan-auto-debit-poora-sach` | 2,964 | KEEP as canonical for auto-debit |
| `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein` | **1,900** | **MERGE candidate** → "auto-debit fail" wala content upar wale page ka natural section hai. Do alag page banane ki zaroorat nahi thi. |

**NEEDS DATA** — merge karne se pehle GSC dekhna behtar hai; agar chhote page apne aap
rank kar rahe hain to chhodo.

---

## 3. Stale evergreen pages (P1) — title me 2026, content Dec-Jan ka

Ye sabse safe aur sabse high-ROI kaam hai: **na delete, na naya likhna — sirf refresh.**
Title me "2026" hai, matlab Google se freshness expect ki jaati hai, par content 6-8 mahine
purana hai.

| Page | Words | Last mod | Din purane | Verdict |
|---|---|---|---|---|
| `/articles/KisanRinKahaSeLe2026` | 1,579 | 2025-12-25 | **236** | **UPDATE + EXPAND** — sabse purana page, aur thin bhi. Interest rates / KCC limits 8 mahine purani. |
| `/articles/KisanCreditCardOnlineApply2026` | 3,100 | 2025-12-29 | **232** | **UPDATE** — content solid (3,100 words), sirf rates + ₹5 lakh limit ka claim re-verify karo. |
| `/articles/PmKisanBeneficiaryList2026` | 1,741 | 2025-12-31 | **230** | **UPDATE + EXPAND** (P0, upar dekho) |
| `/articles/PmKisanEkycOnline2026` | 2,689 | 2026-01-12 | 218 | **UPDATE** — eKYC process me Face Auth app ka version badalta rehta hai. |
| `/articles/PmfbyCropInsurance2026` | 3,013 | 2026-01-14 | 216 | **UPDATE** — Kharif 2026 enrollment window + premium % re-verify. ⚠️ CLAUDE.md me note hai ki ye page "crop insurance" par pos 6 rank karta hai — **title/meta ka wording chhedna mat**, sirf body facts refresh. |
| `/articles/AgriStackKyaHai2026` | 1,748 | 2026-01-17 | 213 | **UPDATE + EXPAND** — Farmer ID rollout tezi se badla hai; 1,748 words kam hai. Hindi twin `hi/farmer-id-kaise-banaye` 4,195 words ka hai — ironically Hindi version behtar hai. Hinglish ko usi level par lao. |
| `/articles/KisanTractorLoan2026` | 1,855 | 2026-01-18 | 212 | **UPDATE + EXPAND** — Mahindra/TATA Capital rates purane. |
| `/articles/PmKisanFaceAuthenticationEkyc` | 1,721 | 2026-01-22 | 208 | **UPDATE + EXPAND** |
| `/articles/soil-health-card-complete-guide-2026` | **1,417** | 2026-01-25 | 205 | **UPDATE + EXPAND** — 2nd sabse thin non-kist page. |
| `/articles/PmKisanVoluntarySurrenderGuide` | **1,298** | 2026-01-29 | 201 | **UPDATE + EXPAND** — sabse thin core page (1,298). |
| `/articles/mandi-bhav-today` | 3,675 | 2026-01-31 | 199 | **INVESTIGATE** — ye live-API page hai (data.gov.in mandi feed) with fallback rates. FAQs me hardcoded "Aloo ka base rate ₹22-28/kg" likha hai jo 8 mahine purana hai. **Fix:** FAQ se hardcoded numbers hatao ya "approximate, live card dekho" phrasing karo — warna galat rate dikhta hai. |
| `/articles/PmKisanMasterGuide2026` | 2,207 | 2026-02-16 | 183 | **UPDATE (P0, upar dekho)** |

---

## 4. Thin pages (P2) — site ke apne 2,000-word standard se neeche

`SEO-KEYWORDS-RANK1-PLAN.md` me rule hai: **2,000+ words**. Ye pages usse neeche hain:

| Page | Words | Gap | Verdict |
|---|---|---|---|
| `/articles/hi/pm-kisan-helpline-155261` | 965 | −1,035 | EXPAND (upar 2a) |
| `/articles/fto-status-check-paisa-kab-aayega` | 1,004 | −996 | **EXPAND** — FTO ek high-intent topic hai. Sister page `pm-kisan-fto-generated-ka-matlab-kya-hai` 3,257 words ka hai. ⚠️ Do FTO page hain — check karo overlap. |
| `/articles/hi/pm-kisan-khad-yojana-sach` | 1,051 | −949 | EXPAND — Hinglish twin 1,888 words ka hai |
| `/articles/PmKisan26viKist` | 1,073 | −927 | NOINDEX (upar §1) |
| `/articles/PmKisanVoluntarySurrenderGuide` | 1,298 | −702 | EXPAND (upar §3) |
| `/yojana/pm-kisan-helpline-155261` | 1,357 | −643 | EXPAND (upar 2a) |
| `/articles/hi/fasal-bima-claim-status` | 1,413 | −587 | EXPAND — Hinglish twin 2,045 |
| `/articles/soil-health-card-complete-guide-2026` | 1,417 | −583 | EXPAND (upar §3) |
| `/articles/hi/up-kisan-karj-rahat-list` | 1,456 | −544 | EXPAND — Hinglish twin 2,286 |
| `/articles/hi/krishak-bandhu-status` | 1,533 | −467 | EXPAND — Hinglish twin 2,833 |
| `/articles/bakri-palan-yojana-nlm-subsidy` | 1,554 | −446 | EXPAND |
| `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026` | 1,579 | −421 | MERGE (upar 2d) |
| `/articles/KisanRinKahaSeLe2026` | 1,579 | −421 | EXPAND (upar §3) |

**Pattern:** Hindi (`hi/`) versions apne Hinglish twin se aksar chhote hain. Naye 2026-batch
articles (khad yojana, helpline, fasal bima) me Hindi version half-length ka hai. Aage har
Hindi twin ko Hinglish ke ±15% word count par likho.

---

## 5. Delete karne layak kuch nahi hai

Ye saaf likhna zaroori hai: **is site par koi bhi article DELETE karne layak nahi mila.**
Koi spun/scraped content nahi, koi 300-word filler nahi, koi expired-scheme page nahi jo
misleading ho. Sabse chhota page bhi 965 words ka hai. Jo 4 pages "hataane" ki category me
aaye wo bhi **noindex ya merge+301** hain, **410/delete nahi** — kyunki content usable hai:

1. `/articles/PmKisan26viKist` → **noindex** (10 mahine baad index kar dena)
2. `/articles/hi/helpline-shikayat` → **merge → 301**
3. `/articles/hi/karj-mafi-list` → **merge → 301**
4. `/maandhan/...contribution-chart` + `...regularization` → **merge candidates, NEEDS DATA**

Kyun delete nahi: 301 se link equity aur purani ranking pass hoti hai; delete se wo zero
ho jaati hai. Aur ye Hindi pages 3,000+ words ke hain — content waste karna bekar hai.

---

## 6. Rewrite plan — top pages ke liye concrete spec

### 6.1 `/articles/PmKisan24viKist2026` — site ka #1 asset banao
- **Title:** abhi theek hai. Release ke din: `PM Kisan 24vi Kist Aa Gayi — Date & Status`
- **Aaj ka kaam:** October window ke liye ek "kya pehle se ready rakho" checklist box top pe
  (eKYC / NPCI seeding / land record) — 24vi ka intent yahi hai, "date kab" ke baad turant
  "mera paisa aayega ya nahi".
- **Release day protocol (likh ke rakho):** `status: 'Released'` + `confirmedDate` +
  actual crore/parivar figures + IndexNow submit + homepage hero update. Ye 24 ghante ke
  andar hona chahiye — yahi din saal ka sabse bada traffic day hai.

### 6.2 `/articles/PmKisanMasterGuide2026` — hub page refresh
- Kist table: 21vi–23vi actual dates + "24vi — October 2026 expected (official date nahi)"
- Har row me relevant fix-page ka contextual link (payment failed, eKYC, land seeding)
- `modifiedTime` update karo — 183 din purana hub page trust nahi banata

### 6.3 `/articles/PmKisanBeneficiaryList2026` — expand 1,741 → 2,400+
- Naya section: "Naam list me hai par paisa nahi aaya" (ye asli sawal hai, list dekhne se
  aage ka) → payment-failed + NPCI seeding pages ko contextually link karo
- Naya section: village-wise list nikalne ka tareeka → existing village-list page link
- Meta/title **na chhedo** — CLAUDE.md me note hai ye "beneficiary list" par pos 51/53 hai

### 6.4 `/yojana/pm-kisan-helpline-155261` — 1,357 → 2,000+
- `hi/helpline-shikayat` (2,963 words) se merge karo: shikayat ka escalation ladder,
  "phone nahi lagta to" wala practical content, grievance form ka detail
- Problem→solution matrix top pe hi rakho (ye iska core hai, sahi hai)
- Merge ke baad hi 301 lagao — pehle nahi

### 6.5 `/articles/hi/*` twins — word-count parity
Priority order (gap sabse bada pehle): `hi/pm-kisan-helpline-155261` (965) →
`hi/pm-kisan-khad-yojana-sach` (1,051) → `hi/fasal-bima-claim-status` (1,413) →
`hi/up-kisan-karj-rahat-list` (1,456) → `hi/krishak-bandhu-status` (1,533).
Translation nahi — Hinglish version ke missing sections ko Hindi me *originally* likho.

### 6.6 `/articles/mandi-bhav-today` — hardcoded rates hatao
FAQ #3 ("Aloo ka base rate ₹22-28/kg") aur jaise sab hardcoded numbers 8 mahine purane
hain. Do options: (a) FAQ se number hata kar "upar live card dekho" karo, ya (b) numbers
ko usi live data source se render karo. Option (a) safe aur turant ho sakta hai.

---

## 7. Kya NAHI karna (accepted findings)

Ye pehle se decide ho chuka hai (`CLAUDE.md`), dobara "fix" karne ki koshish mat karna:

- **"Title too long" warnings** — base titles 58-65 chars, overflow sirf ` | KisanStatus`
  suffix se. 3 rounds me proof mil chuka: Google brand suffix khud strip karta hai aur
  fuller H1 wording prefer karta hai. Chhedna mat.
- **3XX redirect / HTTP→HTTPS / redirect-chain notices** — www→apex + http→https
  normalisation. Correct canonical setup hai, defect nahi.
- **Footer ContactPoint microdata** — site-wide hai, valid hai, per-page issue nahi.
- **`/articles` slow page** — cold-cache ISR regen tha, cache headers already correct.
- **Meta description length** — 2 rounds me fix ho chuka; kisi bhi trim se pehle ranking
  keywords check karo (2 trims revert karne pade the).

---

## 8. Suggested order of work

**Week 1 (P0 — factual accuracy):** ✅ DONE (2026-08-18)
1. ✅ `PmKisan26viKist` → noindex
2. ✅ `PmKisanMasterGuide2026` kist table refresh
3. ✅ `PmKisanBeneficiaryList2026` refresh + expand
4. ✅ `mandi-bhav-today` hardcoded rates hataye
5. ✅ 24vi checklist page me thi hi; release-day protocol CLAUDE.md me documented

**Week 2 (P1 — duplicates):** ✅ DONE (2026-08-18)
6. ✅ Helpline merge: `hi/helpline-shikayat` → `hi/pm-kisan-helpline-155261` (301, best content merged, 965 → ~1,900 w)
7. ✅ Karj mafi merge: `hi/karj-mafi-list` → `hi/kisan-karj-mafi-list` (301, Phule timeline + biometric section + 3 FAQs merged, 2,086 → ~2,600 w)
8. ✅ `/yojana/pm-kisan-helpline-155261` expand 1,357 → ~2,000 w (email format, 4 galtiyan, CPGRAMS, IVRS)

**Week 3-4 (P1 — stale refresh):** ✅ DONE (2026-08-18)
9. ✅ `KisanRinKahaSeLe2026` refresh + expand
10. ✅ `KisanCreditCardOnlineApply2026` refresh (rates + ₹5 lakh limit re-verified)
11. ✅ `PmKisanEkycOnline2026` refresh
12. ✅ `PmfbyCropInsurance2026` data-file modifiedTime sync (body Aug-14 fresh; title/meta untouched)
13. ✅ `AgriStackKyaHai2026` refresh + expand — naya "2026 mein kya badla" section (14-state mandatory Farmer ID, PM-Kisan 5-yr extension ₹3.15L cr, PMFBY Farmer-ID requirement, annual eKYC), 2 naye FAQs; 1,851 → 2,255 w
14. ✅ `KisanTractorLoan2026` refresh + expand — 2026 lender-type rate table (coop 9-10.5% / PSB 9.5-11.5% / private 10-12.5% / NBFC 11-14%), priority-sector + rate-hike note; ~2,250 w
15. ✅ `PmKisanFaceAuthenticationEkyc` refresh + expand — annual-eKYC rule section (1.13 cr naam hataye), 24vi Oct-2026 deadline timing, 2 naye FAQs; ~2,200 w
16. ✅ `soil-health-card-complete-guide-2026` refresh + expand — "2026 mein scheme ka haal" (25.89 cr cards, 12 params, biennial cycle, RKVY merge, Khet Bachao Abhiyan), 2 naye FAQs; ~1,950 w
17. ✅ `PmKisanVoluntarySurrenderGuide` refresh + expand — "2026 sakhti ke asli numbers" (₹416 cr recovery, Bihar 13 lakh ineligible, March-2026 land-ownership rule), 2 naye FAQs; ~1,800 w

**Week 5+ (P2):** ✅ DONE (2026-08-18) — sirf maandhan merge bacha (GSC data ke baad)
18. ✅ `hi/pm-kisan-khad-yojana-sach` expand 1,058 → ~1,636 w (W5-1)
19. ✅ `hi/fasal-bima-claim-status` expand 1,420 → ~1,785 w (W5-2)
20. ✅ `hi/up-kisan-karj-rahat-list` expand 1,463 → ~1,940 w (W5-3)
21. ✅ `hi/krishak-bandhu-status` expand 1,533 → ~2,400 w — treasury-delay, paisa-rukne-ki-5-wajahein, dikkat→daftar table, naya-registration (W5-4)
22. ✅ `fto-status-check-paisa-kab-aayega` expand 1,004 → ~1,900 w — 5-padaav pipeline, bina-bank-jaye 4 tarike, batch-logic; FTO-matlab page se overlap nahi, 'paisa kab' intent par hi raha (W5-5)
23. ✅ `bakri-palan-yojana-nlm-subsidy` expand 1,554 → ~2,050 w — do-kisht disbursement, chhote-kisan alternatives (W5-6)

**Bacha hua (sirf NEEDS DATA items):** maandhan contribution-chart + regularization merge (§2d),
`hi/status-check-mobile-se` vs `hi/ekyc-mobile-se` (§2c), FTO pages merge-ya-rakho — sab GSC
connect hone ke baad hi decide honge (§9).

**Har change ke baad:** IndexNow submit (`npm run indexnow:submit`) + `modifiedTime` update
+ GSC me position monitor.

---

## 9. Jo is audit me nahi ho saka — NEEDS DATA

Ahrefs/GSC skip kiya, to ye sawal khule hain. Inke bina in cheezon ka faisla guess hoga:

1. **Kaunse page par actually zero impressions hain** — "0 search" ka pakka jawab sirf GSC
   se milega. CLAUDE.md kehta hai sirf **~40 URLs** me koi bhi GSC impression hai — matlab
   118 me se ~78 pages abhi practically invisible hain. Ye sabse badi baat hai is site ke
   liye, aur ye audit usko confirm nahi kar sakta.
2. **Maandhan cluster merge** (§2d) — chhote pages khud rank kar rahe hain ya nahi
3. **`hi/status-check-mobile-se` vs `hi/ekyc-mobile-se`** (§2c) — same query par ladte hain?
4. **Do FTO pages** — `fto-status-check-paisa-kab-aayega` (1,004 w) vs
   `pm-kisan-fto-generated-ka-matlab-kya-hai` (3,257 w) — merge ya rakho?
5. **Priority ordering** — abhi ordering age + word count par hai; traffic-weighted hoti to
   bilkul alag ho sakti hai.

Agla step, agar aap chahein: **Google Search Console connect karo** — phir har page ke
saamne asli clicks/impressions likh kar ye pura audit dobara, pakke numbers ke saath.

---

## Appendix — poori inventory (118 articles, purane se naye)

| URL | Section | Words | Last modified | Din purane |
|---|---|---|---|---|
| `/articles/KisanRinKahaSeLe2026` | core-articles | 1579 | 2025-12-25 | 236 |
| `/articles/KisanCreditCardOnlineApply2026` | core-articles | 3100 | 2025-12-29 | 232 |
| `/articles/PmKisanBeneficiaryList2026` | core-articles | 1741 | 2025-12-31 | 230 |
| `/articles/PmKisanEkycOnline2026` | core-articles | 2689 | 2026-01-12 | 218 |
| `/articles/PmfbyCropInsurance2026` | core-articles | 3013 | 2026-01-14 | 216 |
| `/articles/AgriStackKyaHai2026` | core-articles | 1748 | 2026-01-17 | 213 |
| `/articles/KisanTractorLoan2026` | core-articles | 1855 | 2026-01-18 | 212 |
| `/articles/PmKisanFaceAuthenticationEkyc` | core-articles | 1721 | 2026-01-22 | 208 |
| `/articles/soil-health-card-complete-guide-2026` | core-articles | 1417 | 2026-01-25 | 205 |
| `/articles/PmKisanVoluntarySurrenderGuide` | core-articles | 1298 | 2026-01-29 | 201 |
| `/articles/mandi-bhav-today` | core-articles | 3675 | 2026-01-31 | 199 |
| `/articles/PmKisanLandSeedingForm` | core-articles | 2917 | 2026-02-05 | 194 |
| `/articles/PmKisanStateNodalOfficerList` | core-articles | 1972 | 2026-02-15 | 184 |
| `/articles/PmKisanMasterGuide2026` | core-articles | 2207 | 2026-02-16 | 183 |
| `/articles/PmKisanMaandhanYojanaPension` | core-articles | 2070 | 2026-02-18 | 181 |
| `/articles/PmKisanPaymentFailedFix2026` | core-articles | 2525 | 2026-02-20 | 179 |
| `/articles/PmKisanCscRegistrationCharges` | core-articles | 1646 | 2026-02-21 | 178 |
| `/articles/PmKusumYojanaSolarSubsidy2026` | core-articles | 2008 | 2026-02-24 | 175 |
| `/articles/PmKisanRejectedStatusReApplyGuide` | core-articles | 2120 | 2026-02-28 | 171 |
| `/articles/PmKisanMobileNumberChangeUpdate` | core-articles | 2986 | 2026-03-03 | 168 |
| `/articles/pm-kisan-self-registered-status-check` | core-articles | 2057 | 2026-03-04 | 167 |
| `/articles/mushroom-kheti-nhb-subsidy` | core-articles | 2101 | 2026-03-06 | 165 |
| `/articles/PmKisanBankAccountChangeProcess` | core-articles | 1909 | 2026-03-11 | 160 |
| `/articles/mandi-bhav-app-comparison` | loan-mandi-pashupalan | 2397 | 2026-03-12 | 159 |
| `/articles/PmKisanCorrectionForm2026` | core-articles | 2001 | 2026-03-18 | 153 |
| `/articles/PmKisanVillageWiseListPdfDownload` | core-articles | 1732 | 2026-03-19 | 152 |
| `/articles/sbi-dairy-loan-interest-rate` | loan-mandi-pashupalan | 2728 | 2026-03-21 | 150 |
| `/maandhan/pm-kisan-maandhan-registration-2026` | maandhan | 2145 | 2026-03-24 | 147 |
| `/articles/sabzi-bhav-guide-pyaz-aloo-tamatar` | loan-mandi-pashupalan | 2645 | 2026-04-02 | 138 |
| `/maandhan/pm-kisan-maandhan-pension-calculator` | maandhan | 2344 | 2026-04-03 | 137 |
| `/maandhan/pm-kisan-maandhan-withdrawal-refund-rules` | maandhan | 1831 | 2026-04-06 | 134 |
| `/maandhan/pm-kisan-maandhan-eligibility-documents` | maandhan | 2079 | 2026-04-08 | 132 |
| `/articles/pm-matsya-sampada-yojana-fish-farming` | core-articles | 2965 | 2026-04-08 | 132 |
| `/articles/bakri-palan-yojana-nlm-subsidy` | core-articles | 1554 | 2026-04-10 | 130 |
| `/articles/hi/tractor-subsidy` | hindi-kisanguides | 3022 | 2026-04-14 | 126 |
| `/articles/madhumakhi-palan-kvic-subsidy` | core-articles | 1789 | 2026-04-15 | 125 |
| `/articles/silage-making-business-guide` | core-articles | 2649 | 2026-04-16 | 124 |
| `/articles/pm-fme-yojana-food-processing` | core-articles | 2512 | 2026-04-16 | 124 |
| `/articles/hi/helpline-shikayat` | hindi-yojana | 2963 | 2026-04-17 | 123 |
| `/maandhan/pm-kisan-maandhan-status-check-online` | maandhan | 2891 | 2026-04-19 | 121 |
| `/articles/hi/mp-kisan-kalyan-yojana` | hindi-rajya-yojana | 3085 | 2026-04-22 | 118 |
| `/maandhan/pm-kisan-maandhan-pension-card-download` | maandhan | 3124 | 2026-04-23 | 117 |
| `/articles/hi/nayi-registration` | hindi-yojana | 2972 | 2026-04-24 | 116 |
| `/maandhan/pm-kisan-maandhan-auto-debit-poora-sach` | maandhan | 2964 | 2026-05-02 | 108 |
| `/articles/custom-hiring-centre-chc-portal` | core-articles | 1844 | 2026-05-09 | 101 |
| `/articles/hi/payment-stopped-by-state` | hindi-yojana | 3051 | 2026-05-11 | 99 |
| `/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein` | maandhan | 1900 | 2026-05-18 | 92 |
| `/maandhan/family-pension-rules` | maandhan | 2496 | 2026-05-22 | 88 |
| `/articles/rashtriya-gokul-mission-subsidy` | loan-mandi-pashupalan | 2530 | 2026-05-23 | 87 |
| `/maandhan/pmkmy-grievance-complaint-helpline` | maandhan | 1904 | 2026-05-25 | 85 |
| `/articles/murgi-palan-loan-nlm-subsidy` | loan-mandi-pashupalan | 2312 | 2026-05-29 | 81 |
| `/articles/bihar-pashupalan-loan-yojana` | loan-mandi-pashupalan | 2462 | 2026-05-29 | 81 |
| `/maandhan/pmkmy-bank-account-change` | maandhan | 2694 | 2026-05-30 | 80 |
| `/articles/vermi-compost-business-guide` | core-articles | 2341 | 2026-05-30 | 80 |
| `/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026` | maandhan | 1579 | 2026-05-31 | 79 |
| `/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana` | maandhan | 2022 | 2026-06-02 | 77 |
| `/articles/hi/recovery-notice` | hindi-yojana | 2999 | 2026-06-07 | 72 |
| `/articles/drip-sprinkler-irrigation-subsidy` | core-articles | 3103 | 2026-06-17 | 62 |
| `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000` | rajya-yojana | 2950 | 2026-06-18 | 61 |
| `/rajya-yojana/namo-shetkari-yojana-status-check-2026` | rajya-yojana | 2707 | 2026-06-24 | 55 |
| `/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega` | rajya-yojana | 2922 | 2026-06-30 | 49 |
| `/rajya-yojana/odisha-cm-kisan-status-check-2026` | rajya-yojana | 2837 | 2026-07-02 | 47 |
| `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status` | rajya-yojana | 2770 | 2026-07-04 | 45 |
| `/articles/jansamarth-portal-loan-apply` | loan-mandi-pashupalan | 2252 | 2026-07-04 | 45 |
| `/articles/gehu-ka-bhav-msp-vs-mandi` | loan-mandi-pashupalan | 2278 | 2026-07-07 | 42 |
| `/rajya-yojana/krishak-unnati-yojana-status-check-2026` | rajya-yojana | 2987 | 2026-07-16 | 33 |
| `/articles/enam-registration-kaise-kare` | loan-mandi-pashupalan | 2365 | 2026-07-16 | 33 |
| `/rajya-yojana/rythu-bharosa-status-check-2026` | rajya-yojana | 2563 | 2026-07-17 | 32 |
| `/articles/hi/ekyc-mobile-se` | hindi-yojana | 3056 | 2026-07-21 | 28 |
| `/rajya-yojana/annadata-sukhibhava-status-check-2026` | rajya-yojana | 2594 | 2026-07-23 | 26 |
| `/articles/hi/gehu-ka-rate-aaj` | hindi-loan-mandi-pashupalan | 3230 | 2026-07-27 | 22 |
| `/articles/hi/karj-mafi-list` | hindi-loan-mandi-pashupalan | 3271 | 2026-08-01 | 17 |
| `/rajya-yojana/krishak-bandhu-status-check-2026` | rajya-yojana | 2833 | 2026-08-01 | 17 |
| `/articles/dairy-farm-loan-without-collateral` | loan-mandi-pashupalan | 3077 | 2026-08-01 | 17 |
| `/articles/hi/kcc-limit-kaise-badhaye` | hindi-loan-mandi-pashupalan | 3117 | 2026-08-04 | 14 |
| `/articles/hi/pm-kisan-25vi-kist` | hindi-yojana | 3002 | 2026-08-05 | 13 |
| `/rajya-yojana/meri-fasal-mera-byora-status-check-2026` | rajya-yojana | 2901 | 2026-08-06 | 12 |
| `/rajya-yojana/up-kisan-karj-rahat-list-2026` | rajya-yojana | 2286 | 2026-08-06 | 12 |
| `/articles/hi/status-check-mobile-se` | hindi-yojana | 3120 | 2026-08-07 | 11 |
| `/rajya-yojana/state-kisan-yojana-list-all-states-2026` | rajya-yojana | 3214 | 2026-08-08 | 10 |
| `/rajya-yojana/parihara-payment-status-check-2026` | rajya-yojana | 3578 | 2026-08-08 | 10 |
| `/rajya-yojana/bihar-kisan-registration-status-check-2026` | rajya-yojana | 2525 | 2026-08-11 | 7 |
| `/rajya-yojana/ikhedut-portal-status-check-2026` | rajya-yojana | 3529 | 2026-08-11 | 7 |
| `/articles/hi/gau-mutra-kharid-yojana` | hindi-loan-mandi-pashupalan | 4332 | 2026-08-14 | 4 |
| `/articles/PmKisan25viKist2027` | core-articles | 2494 | 2026-08-14 | 4 |
| `/articles/gau-mutra-kharid-yojana-up-2026` | loan-mandi-pashupalan | 4360 | 2026-08-14 | 4 |
| `/articles/hi/namo-drone-didi-yojana` | hindi-kisanguides | 4050 | 2026-08-16 | 2 |
| `/articles/namo-drone-didi-yojana-shg-selection` | core-articles | 3243 | 2026-08-16 | 2 |
| `/articles/hi/rajasthan-kisan-samman-nidhi` | hindi-rajya-yojana | 2394 | 2026-08-16 | 2 |
| `/articles/hi/annadata-sukhibhava-status` | hindi-rajya-yojana | 2286 | 2026-08-16 | 2 |
| `/articles/hi/rythu-bharosa-status` | hindi-rajya-yojana | 1739 | 2026-08-16 | 2 |
| `/articles/hi/meri-fasal-mera-byora-status` | hindi-rajya-yojana | 2070 | 2026-08-16 | 2 |
| `/articles/hi/bihar-kisan-registration-status` | hindi-rajya-yojana | 1952 | 2026-08-16 | 2 |
| `/articles/hi/parihara-payment-status` | hindi-rajya-yojana | 1727 | 2026-08-16 | 2 |
| `/articles/hi/up-kisan-karj-rahat-list` | hindi-rajya-yojana | 1456 | 2026-08-16 | 2 |
| `/articles/PmKisan24viKist2026` | core-articles | 2841 | 2026-08-17 | 1 |
| `/articles/hi/krishak-bandhu-status` | hindi-rajya-yojana | 1533 | 2026-08-17 | 1 |
| `/articles/hi/odisha-cm-kisan-status` | hindi-rajya-yojana | 2167 | 2026-08-17 | 1 |
| `/articles/hi/pati-patni-pm-kisan-rule` | hindi-rajya-yojana | 1928 | 2026-08-17 | 1 |
| `/articles/hi/state-kisan-yojana-list` | hindi-rajya-yojana | 2250 | 2026-08-17 | 1 |
| `/articles/hi/krishak-unnati-yojana-status` | hindi-rajya-yojana | 1779 | 2026-08-17 | 1 |
| `/articles/hi/ikhedut-portal-status` | hindi-rajya-yojana | 1997 | 2026-08-17 | 1 |
| `/articles/fto-status-check-paisa-kab-aayega` | core-articles | 1004 | 2026-08-18 | 0 |
| `/articles/pm-kisan-fto-generated-ka-matlab-kya-hai` | core-articles | 3257 | 2026-08-18 | 0 |
| `/articles/NanoDap500mlPriceInIndia2026` | core-articles | 2103 | 2026-08-18 | 0 |
| `/articles/PmKisan26viKist` | core-articles | 1073 | 2026-08-18 | 0 |
| `/yojana/fasal-bima-claim-status-check` | yojana-2026 | 2045 | 2026-08-18 | 0 |
| `/yojana/kisan-karj-mafi-list-all-states` | yojana-2026 | 2427 | 2026-08-18 | 0 |
| `/yojana/pm-kisan-khad-yojana-11000-sach` | yojana-2026 | 1888 | 2026-08-18 | 0 |
| `/yojana/pm-kisan-helpline-155261` | yojana-2026 | 1357 | 2026-08-18 | 0 |
| `/articles/msp-list-2026-27` | loan-mandi-pashupalan | 2893 | 2026-08-18 | 0 |
| `/articles/hi/fasal-bima-claim-status` | hindi-yojana-2026 | 1413 | 2026-08-18 | 0 |
| `/articles/hi/kisan-karj-mafi-list` | hindi-yojana-2026 | 2086 | 2026-08-18 | 0 |
| `/articles/hi/pm-kisan-khad-yojana-sach` | hindi-yojana-2026 | 1051 | 2026-08-18 | 0 |
| `/articles/hi/pm-kisan-helpline-155261` | hindi-yojana-2026 | 965 | 2026-08-18 | 0 |
| `/articles/hi/farmer-id-kaise-banaye` | hindi-yojana | 4195 | 2026-08-18 | 0 |
| `/articles/hi/npci-aadhaar-seeding` | hindi-yojana | 3474 | 2026-08-18 | 0 |
| `/articles/hi/namo-shetkari-yojana` | hindi-rajya-yojana | 3208 | 2026-08-18 | 0 |
