# Kisanstatus — Content Fix Plan (AI-uniformity, Duplicate & Thin Content)

**Audit date:** 6 August 2026
**Scope:** 94 URLs from `https://kisanstatus.com/sitemap.xml` (live HTML crawl) + 72 article components in this repo.
**Method:** live crawl of every sitemap URL → extracted `<title>`, `<h1>`, `<h2>`, Next.js RSC payload prose, JSON-LD; plus static analysis of `components/articles/**/*.tsx` (7-gram / 12-gram overlap, heading-set Jaccard, FAQ-question dedupe, prose word counts, AI-phrase tells).
**Nothing in this file is estimated.** Every number below came out of that scan. Where a number could not be measured, it is marked `—`.

**Status: nothing fixed yet. This is the plan only.** No content was edited in this commit.

---

## 0. TL;DR — what's actually wrong

| # | Issue | Severity | Affected | Type of fix |
|---|-------|----------|----------|-------------|
| 1 | `state-kisan-yojana-list-all-states-2026` serves a near-verbatim copy of the MP Kisan Kalyan article (wrong H1, wrong body, wrong topic) | **Critical** | 1 page (+1 partner page diluted) | Rewrite 1 file |
| 2 | 58 pages where `<title>` and `<h1>` don't match | **Warning** | 58 pages | Template/data fix, mostly `lib/*-data.ts` |
| 3 | 11 articles under 1,100 prose words; thinnest is 772 | **Warning** | 11 pages | Per-article depth pass |
| 4 | 8 PM-Kisan process articles share an identical section skeleton (heading-set Jaccard = 1.00) | **Warning** | 8 pages | Restructure, not rewrite |
| 5 | Boilerplate disclaimer sentence repeated verbatim in 10 articles; "10 second baad portal khulega" block in 4 | **Notice** | 10 + 4 pages | Componentise + vary |
| 6 | 46 of 72 articles have no `Sources` section (repo's own rule says every article should) | **Notice** | 46 pages | Add sourced citations |
| 7 | 10 articles have zero FAQ entries in the component (9 kisanguides + 1 maandhan); 2 pages ship no `FAQPage` schema | **Notice** | 10 pages | Add real FAQs |
| 8 | 1,515 em-dashes across 72 articles (~21/article) — the strongest machine-written signal on the site | **Notice** | 72 pages | Mechanical + editorial pass |
| 9 | 4 FAQ questions duplicated across article pairs | **Notice** | 8 pages | Reword or consolidate |

**What is NOT broken** (checked, came back clean — do not "fix" these):
- 0 duplicate `<title>` tags across 94 pages.
- 0 duplicate or missing meta descriptions.
- 0 pages with missing or multiple `<h1>` (in rendered HTML).
- Canonical tags present on all three dynamic route groups (`app/articles/[slug]`, `app/maandhan/[slug]`, `app/rajya-yojana/[slug]`).
- `robots.txt` is deliberate and correct (AI crawlers allowed, scrapers blocked, `/tools/` disallowed).
- Only 1 duplicate `<h1>` across the whole site — and it is issue #1 below, not a separate problem.
- Body-text overlap between article pairs is otherwise very low: only **2** of 2,556 article pairs exceed 5% 7-gram overlap. The site is *not* broadly spun content.

---

## 1. CRITICAL — `state-kisan-yojana-list-all-states-2026` is serving the MP article

**This is the one genuine duplicate-content bug on the site.**

- File: `components/articles/rajya-yojana/StateKisanYojanaHub.tsx`
- Route: `/rajya-yojana/state-kisan-yojana-list-all-states-2026`
- Registered in `lib/rajya-yojana-data.ts:234` as slug `state-kisan-yojana-list-all-states-2026`, `component: 'StateKisanYojanaHub'`

**Evidence:**
- The exported component inside `StateKisanYojanaHub.tsx` is literally named `MPCMKisanKalyanYojanaKistStatus` (line 82).
- Rendered `<h1>` on the live URL: `MP CM Kisan Kalyan Yojana Kist Kab Aayegi: Status Check, Amount aur SAARA Portal Guide` — identical to `/rajya-yojana/mp-kisan-kalyan-yojana-kist-status`. It is the **only** duplicated H1 on the entire site.
- `<title>` says `State Kisan Yojana List 2026 — Sabhi Rajya | KisanStatus`, so title and body describe two different topics. Google sees title/H1 conflict *and* body duplication at once.
- 7-gram overlap between the two files: **0.263** (525 shared 7-grams). Next-highest pair on the whole site is 0.053 — a 5× outlier.
- 15 whole paragraphs are byte-identical, including MP-specific ones that make no sense on a national hub page: `SAARA Portal Kya Hai — Aur Wahi Kyun`, `Girdawari — Wo Kadam Jo MP Ke Kisan Bhool Jaate Hain`, `MP Se Bahar Ke Kisan Yahan Dekhein`.
- The two files differ by only 475 diff lines out of ~500 — i.e. the hub was created by copying the MP file and lightly editing FAQ strings.

**Impact:** the hub page is the natural ranking target for "state kisan yojana list" / "sabhi rajya kisan yojana" queries. Today it cannot rank for that, and it actively competes with the MP page on MP terms — so both pages lose.

**Fix (rewrite `StateKisanYojanaHub.tsx` from scratch):**
1. Rename the exported component to `StateKisanYojanaHub`.
2. New H1 aligned to the title, e.g. `State Kisan Yojana List 2026: Sabhi Rajya Ka Amount, Portal Aur Status Link Ek Jagah`.
3. Body = a genuine national hub, not a state guide:
   - One comparison table: State | Scheme name | Annual amount | Instalments | Official portal | our guide link. Source every amount from the state's own portal or a PIB/state-cabinet release; **any state whose current amount cannot be verified gets an explicit "portal par confirm karein" cell, not a guessed number.**
   - Short 2–3 sentence block per state that already has a dedicated article on this site (MP, Rajasthan, Maharashtra/Namo Shetkari, AP/Annadata Sukhibhava, Telangana/Rythu Bharosa, WB/Krishak Bandhu, Odisha/CM-KISAN, Chhattisgarh/Krishak Unnati) with a link out to that article — hub-and-spoke, no duplicated depth.
   - A "how state top-ups stack on top of PM Kisan" explainer — this is the hub's unique value and exists nowhere else on the site.
   - FAQs written specifically for the multi-state question set (which state pays most, do I get both central + state, what happens if I move state, why my state has no scheme).
4. Delete every MP-only section from this file (SAARA, girdawari, MP domicile, MP helpline).
5. Verify no remaining paragraph is shared with `MpKisanKalyanYojanaKist.tsx` — re-run the 7-gram check and require overlap **< 0.05**.

**Do not touch** `MpKisanKalyanYojanaKist.tsx` — it is the correct, original article. Only the hub is wrong.

---

## 2. WARNING — Title ↔ H1 mismatch on 58 pages

Titles are short and keyword-shaped; H1s are long and conversational. On its own that's fine, but 58 pages have **no lexical overlap in the first 6 words**, which is what a crawler compares.

Representative, verified examples:

| URL | `<title>` | `<h1>` |
|---|---|---|
| `/articles/KisanCreditCardOnlineApply2026` | KCC Online Apply — ₹5 Lakh Loan 2026 | Kisan Credit Card 2026: 4% Byaj, Online Apply & Limits |
| `/articles/PmKisanPaymentFailedFix2026` | PM Kisan Payment Failed Fix 2026 | PM Kisan Payment Failed 2026: 7 Reasons & Quick Fix |
| `/maandhan/family-pension-rules` | PM Kisan Maandhan Family Pension Rules | PMKMY Family Pension Rules: Pati Ke Baad Kya Hoga? (2026) |
| `/rajya-yojana/rajasthan-kisan-samman-nidhi-9000` | Rajasthan Kisan Samman Nidhi 2026 | Rajasthan Kisan Samman Nidhi: ₹9,000 Kaise Milte Hain aur ₹12,000 Wale Prastav… |
| `/contact` | Contact Us — KisanStatus \| Sampark Karein & Support | Contact & Support |

Note there is an earlier commit `a3dd328 SEO: fix 'Page and SERP titles do not match' on 5 indexable pages` — that pass covered 5 pages; 58 remain by the stricter first-6-words test.

**Fix — template-level, not per-page prose:**
1. Rule: the H1's **primary keyword phrase must appear inside the title**, and the title should be the H1's first clause trimmed to ≤60 chars + `| KisanStatus`.
2. Titles live in `lib/articles-data.ts`, `lib/maandhan-data.ts`, `lib/rajya-yojana-data.ts`, `lib/loan-mandi-pashupalan-data.ts` — edit there, one line per article, no component changes.
3. Also fix the double-brand artefacts: `/contact`, `/privacy-policy`, `/disclaimer`, `/terms-of-service` render `… | KisanStatus | KisanStatus`.
4. Category pages (`/articles/category/*`) currently have `&`-encoding drift between title and H1 (`&amp;` vs `&`) — cosmetic, fix in the same pass.
5. Add a repo check script that fails if a title/H1 pair shares no keyword — prevents regression.

---

## 3. WARNING — 11 thin articles (< 1,100 prose words)

Measured prose only (JSX text nodes + FAQ q/a strings; class names, imports, and JSX plumbing excluded). Site median is **1,819** words, so these sit at 40–60% of the site's own standard.

| Words | File | Route |
|---|---|---|
| 772 | `PmKisan25viKist2027.tsx` | `/articles/PmKisan25viKist2027` |
| 787 | `PmKisanVoluntarySurrenderGuide.tsx` | `/articles/PmKisanVoluntarySurrenderGuide` |
| 846 | `PmKisanBeneficiaryList2026.tsx` | `/articles/PmKisanBeneficiaryList2026` |
| 910 | `kisanguides/DripSprinkler.tsx` | `/articles/drip-sprinkler-irrigation-subsidy` |
| 940 | `PmKisanVillageWiseListPdfDownload.tsx` | `/articles/PmKisanVillageWiseListPdfDownload` |
| 951 | `kisanguides/CHCPortal.tsx` | `/articles/custom-hiring-centre-chc-portal` |
| 953 | `PmKisan24viKist2026.tsx` | `/articles/PmKisan24viKist2026` |
| 983 | `NanoDap500mlPriceInIndia2026.tsx` | `/articles/NanoDap500mlPriceInIndia2026` |
| 1004 | `PmKisanFaceAuthenticationEkyc.tsx` | `/articles/PmKisanFaceAuthenticationEkyc` |
| 1062 | `PmKisanCscRegistrationCharges.tsx` | `/articles/PmKisanCscRegistrationCharges` |
| 1077 | `maandhan/PmKisanMaandhanRegistration2026.tsx` | `/maandhan/pm-kisan-maandhan-registration-2026` |

A further 17 sit in the 1,100–1,500 band — second wave, not urgent.

**Important nuance — two of these are thin *on purpose* and should be handled differently:**
- `PmKisan25viKist2027.tsx` (772 w) honestly says "nobody knows the date yet, we don't guess." That editorial stance is **correct and should be kept.** Do not pad it with speculation. Grow it only with verifiable material: the confirmed 21st/22nd/23rd instalment dates + gap pattern, the eligibility checklist that must be ready *before* the instalment, what actually delays a payment. If it can't reach ~1,200 words honestly, leave it short and instead strengthen internal links to it — a short honest page beats a padded one.
- `PmKisan24viKist2026.tsx` (953 w) is in the same category.

**Fix for the other 9 — add depth, not filler.** Per article, in priority order:
1. One real, cited case or dataset (PIB / NABARD / state department / KVK / verified news + link) — this is the pattern the repo already uses successfully in `loan-mandi-pashupalan/*`, see `articles-todo.md`.
2. A "what goes wrong and how to fix it" section with concrete error strings farmers actually see.
3. A documents/eligibility table where relevant.
4. Expand FAQs to 8–10 questions that are genuinely distinct (see #9).
5. A `Sources` block with clickable links (see #6).

Target: **1,400–1,800 words** — matching the site's own median, not an arbitrary word count.

---

## 4. WARNING — 8 PM-Kisan process articles share an identical section skeleton

Heading-set Jaccard **= 1.00** (i.e. the same normalised `<SH>` section sequence) across these four, which are mutually identical:

- `PmKisanFaceAuthenticationEkyc.tsx`
- `PmKisanCscRegistrationCharges.tsx`
- `PmKisanBankAccountChangeProcess.tsx`
- `PmKisanVoluntarySurrenderGuide.tsx`

Plus two more identical pairs found by the same test:
- `maandhan/PmKisanMaandhanEligibilityDocuments.tsx` ↔ `maandhan/PmKisanMaandhanAutoDebitPooraSach.tsx`
- `loan-mandi-pashupalan/EnamRegistrationKaiseKare.tsx` ↔ `loan-mandi-pashupalan/MspList202627.tsx`

And near-clones at Jaccard 0.75: `PmKisanStateNodalOfficerList` ↔ `PmKisanMobileNumberChangeUpdate`; `maandhan/PmkmyVsApyComparison2026` ↔ `maandhan/MaandhanContributionGuide`.

The shared skeleton is: *hook → kya hai → kaun use kare → step-by-step → common errors → CSC se bhi ho jaata hai → documents → uske baad kya → har state mein hai kya*. Two of them even carry a byte-identical section heading, `CSC Center Se Bhi Karwa Sakte Ho`.

**Why this matters:** the *words* differ (body overlap is low), so this isn't classic duplicate content. But an identical section order across 8 pages is the single clearest "generated from one template" signal, and it's what "AI uniform" describes. It also creates avoidable competition between the pages.

**Fix — restructure, don't rewrite:** give each article the shape its own question deserves.
- `PmKisanCscRegistrationCharges` → lead with the money: official fee table, what an operator may legally charge, receipt/complaint path, "what ₹500 actually buys you". Fee-transparency page, not a how-to.
- `PmKisanFaceAuthenticationEkyc` → troubleshooting-first: failure modes (low light, worn fingerprints, old Android, app version) → decision tree → OTP/biometric fallback.
- `PmKisanBankAccountChangeProcess` → NPCI/DBT seeding as the spine, with a timeline table (day 0 → day 30) and "what happens to the instalment stuck mid-change".
- `PmKisanVoluntarySurrenderGuide` → who *must* surrender, recovery/repayment consequences, then the process. Consequences before steps.
- Same treatment for the three other pairs: pick one distinct spine each (comparison table / calendar / checklist / decision tree) and stop repeating the boilerplate `CSC Center Se Bhi Karwa Sakte Ho` section — it becomes one shared component referenced by a single line, not a re-written section in every article.

Acceptance: no article pair may exceed heading-set Jaccard **0.50** after the pass.

---

## 5. NOTICE — Repeated boilerplate blocks

| Repeats | Block | Where it should live |
|---|---|---|
| 10 articles | `Ye article sirf madad ke liye hai. Final decision ke liye official portal ya krishi office se sampark karein.` | Already partly available as `Disclaimer` in `components/ArticleShared.tsx` — use the component everywhere instead of inlining the sentence, and give the component 3–4 rotating variants so the rendered text isn't identical site-wide. |
| 4 articles | `…10 second baad portal khulega… official PM Kisan portal khulne wala hai… cancel…` | Belongs in the `ExternalLinkButton` / `GovLink` component, not in article prose. |
| 4 articles | `…aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial…` | Same — one shared financial-disclaimer component. |
| 3 articles | `Yeh article general information ke liye hai. Actual costs, subsidies aur procedures…` | Same. |
| 11 articles | Section heading `Sources` — this one is *good*, keep it, just extend to the other 46 (see #6). |

Total: **536** distinct 12-word blocks appear in more than one article file. The overwhelming majority are these disclaimer/CTA boilerplates, not real content — so componentising them fixes almost the whole number.

---

## 6. NOTICE — 46 of 72 articles have no `Sources` section

`articles-todo.md` records the project's own rule: *"Real sourced kisan stories only (PIB/NABARD/state dept/verified news + link)"* and confirms all 11 `loan-mandi-pashupalan` articles got a linked Sources block. The other 46 never did.

Measured external-domain link counts per article are also very low: the median article links to **2** external domains, and 4 articles link to **zero** (`rajya-yojana/KrishakUnnatiYojanaStatusCheck`, `rajya-yojana/PmKisanPatiPatniRule`, `rajya-yojana/OdishaCmKisanStatusCheck`, `rajya-yojana/KrishakBandhuStatusCheck`).

**Fix:** add a `Sources` block (same markup as the `loan-mandi-pashupalan` ones) to every article, citing the specific government page for each number quoted in the article. Where a number in an existing article **cannot be sourced, remove the number** rather than invent a citation. Priority: the 4 zero-external-link `rajya-yojana` articles first — they quote state amounts and instalment dates with nothing behind them.

---

## 7. NOTICE — 10 articles with zero FAQs; 2 pages with no FAQPage schema

Components with no FAQ data at all:
`kisanguides/CHCPortal`, `kisanguides/DripSprinkler`, `kisanguides/MadhumakhiPalan`, `kisanguides/MushroomKheti`, `kisanguides/PMatsyaSampada`, `kisanguides/PMFMEYojana`, `kisanguides/SilageMaking`, `kisanguides/VerminCompost`, `maandhan/PmKisanMaandhanStatusCheckOnline` — plus `BakriPalanYojana` which has 7 (fine).

Live pages shipping **no `FAQPage` JSON-LD** (checked across all 94 URLs — only these two):
- `/articles/custom-hiring-centre-chc-portal`
- `/articles/drip-sprinkler-irrigation-subsidy`

The other 7 kisanguides render FAQ-ish prose but not through the `FAQBlock` component, so they get no structured data.

**Fix:** move each kisanguide's Q&A prose into the standard `FAQS_DATA` + `FAQBlock` pattern (5–8 real questions each). Both zero-schema pages are also on the thin list (#3), so do them in the same commit. **Do not** add FAQs the article doesn't actually answer just to get the schema.

---

## 8. NOTICE — 1,515 em-dashes (the site's loudest AI tell)

Per-article counts, highest first: `BiharPashupalanLoanYojana` 56, `SabziBhavGuidePyazAlooTamatar` 54, `RashtriyaGokulMissionSubsidy` 52, `SilageMaking` 51, `MurgiPalanLoanNlmSubsidy` 50, `RajasthanKisanSammanNidhi9000` 47, `SbiDairyLoanInterestRate` 46, `EnamRegistrationKaiseKare` 45, `JansamarthPortalLoanApply` 43, `StateKisanYojanaHub` 42, `KrishakBandhuStatusCheck` 42, `OdishaCmKisanStatusCheck` 41.

Other tells are mercifully rare and mostly fine as brand voice: `yaad rakhein` 18, `seedhi baat` 7, `sach yeh hai` 7, `jo koi nahi batata` 4, `bottom line` 3, `decision framework` 3.

**Fix:** not a find-and-replace. Cap em-dashes at ~5 per article by rewriting those sentences — split into two short sentences, or use a comma / colon / brackets. Hindi-Hinglish readers get shorter sentences anyway, so this improves readability, not just the AI signal. Also retire the English-idiom headings (`Bottom Line`, `Decision Framework`, `Real Risks — Jo Koi Nahi Batata`) in favour of the plain-Hinglish question headings the better articles already use.

Repeated section headings worth de-duplicating while you're in there: `Aksar Puche Jane Wale Sawal` appears in 17 articles under 4 different spellings (`Aksar Puche Jane Wale Sawal`, `Aksar Poochhe Jaane Wale Sawaal`, `FAQ — Aapke Sawaal`, `Frequently Asked Questions (FAQs)`) — pick one canonical form site-wide.

---

## 9. NOTICE — 4 FAQ questions duplicated across articles

Out of 485 total FAQ questions site-wide, only 4 are duplicated — this is a small, precise fix:

1. `Pichhli kist mili thi, is baar nahi aayi. Naam kat gaya kya?`
2. `Meri kist "rejected" dikha rahi hai, kya karein?`
3. `Kya mujhe iske liye alag se application deni padegi?`
4. `Girdawari mein fasal galat darj ho gayi hai, kist par asar padega kya?`

All 4 pairs involve `StateKisanYojanaHub` ↔ `MpKisanKalyanYojanaKist`, so **fixing #1 resolves this issue too.** Re-verify after the hub rewrite; no separate work expected.

---

## Execution order

| Wave | Work | Files touched | Why first |
|---|---|---|---|
| **1** | Issue #1 — rewrite `StateKisanYojanaHub.tsx` | 1 | Only true duplicate-content bug; also clears #9 |
| **2** | Issue #2 — title/H1 alignment | 4 data files (+1 check script) | Highest page-count-per-edit ratio; zero prose risk |
| **3** | Issue #5 — componentise boilerplate | `ArticleShared.tsx` + ~15 articles | Removes most of the 536 repeated blocks in one structural change |
| **4** | Issue #3 + #7 — 11 thin articles, FAQs added in the same commits | 11 | Real writing; slowest per page |
| **5** | Issue #4 — restructure the 8 template-clone articles | 8 | Needs #3's depth work to land first |
| **6** | Issue #6 — Sources across 46 articles | 46 | Bulk, mechanical-ish; batch by section |
| **7** | Issue #8 — em-dash + heading voice pass | 72 | Do last, as a single editorial sweep over already-final text |

## Ground rules for whoever executes this

- **Never invent a number.** Amounts, dates, subsidy percentages, interest rates, helpline numbers: cite the government source or drop the claim. This plan deliberately contains no guessed figures.
- **One branch + one PR per wave.** No auto-merge; every PR gets reviewed.
- **`PmKisan25viKist2027` and `PmKisan24viKist2026` stay honest.** Their shortness reflects that the date genuinely isn't announced. Padding them with speculation would make the site worse, not better.
- **Voice stays as-is.** Hinglish, farmer-facing, second person. The goal is to remove machine *uniformity*, not the house style.
- **Update `articles-todo.md`** as each wave lands — the repo already uses it as the tracker.

## Re-verification after each wave

Re-run the same measurements and require:
- max article-pair 7-gram overlap **< 0.06** (currently 0.263)
- max heading-set Jaccard **< 0.50** (currently 1.00)
- 0 duplicate H1s (currently 1)
- title/H1 keyword mismatches **= 0** (currently 58)
- 0 articles under **1,100** prose words, except the two intentionally-short instalment pages
- em-dashes **< 6** per article (currently up to 56)
- every article has a `Sources` block (currently 26 of 72)
- 0 duplicate FAQ questions (currently 4)

Then re-crawl the sitemap and re-check in a browser.
