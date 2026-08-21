# Content Audit — Duplicate & AI-Uniform Articles

**Repo:** khalil334/kisanstatus · **Audited commit:** 9ca66994 · **Date:** 2026-08-21
**Scope:** 124 article components under `components/articles/` + 86 metadata entries in `lib/*-data.ts`.

**Method:** n-gram shingle similarity (4/5-gram Jaccard + containment) on extracted prose (CSS/JSX boilerplate stripped), heading-structure fingerprinting, component-usage signatures, and title/slug topic-overlap analysis.

---

## 1. Verdict (TL;DR)

- ❌ **No exact or near-duplicate article content found.** Highest prose similarity between any two articles is ~3% — far below duplicate threshold (~30%+).
- ⚠️ **Strong template/structural uniformity** (AI-assisted production pattern) across several article groups — not plagiarism, but a "same skeleton, different words" footprint.
- ⚠️ **Topic-overlap / keyword-cannibalization risks** in a few clusters (listed below) — separate articles competing for the same search intent.
- ✅ English↔Hindi article pairs are **intentional translations**, properly cross-linked via `lib/hindi-hreflang.ts` (29 hreflang pairs) — these are NOT duplicates.

---

## 2. Content near-duplicates

None at article level. Only overlap found (shared code, not article prose):

| Similarity | File A | File B | Nature |
|---|---|---|---|
| j=0.19 (raw) / 0.06 (prose) | `rajya-yojana/tools/KrishakBandhuChecker.tsx` | `rajya-yojana/tools/OdishaCmKisanChecker.tsx` | Interactive checker **tools** sharing UI scaffolding — refactor into one shared component, not a content issue |
| j=0.10 | `rajya-yojana/tools/OdishaCmKisanChecker.tsx` | `rajya-yojana/tools/PmKisanFamilyChecker.tsx` | Same — shared tool scaffolding |

---

## 3. Topic-overlap / cannibalization risks (same intent, separate articles)

These are distinct texts but target overlapping queries. Recommend consolidating or sharply differentiating titles/H1s:

1. **PM Kisan kist series** — `PmKisan24viKist2026`, `PmKisan25viKist2027`, `PmKisan26viKist` (the 26vi one is thin: ~1,800 words vs 4,100–4,400). All compete on "PM Kisan kist kab aayegi". Suggest: one evergreen "next kist" URL, or clear archival strategy for past kists.
2. **eKYC pair** — `PmKisanEkycOnline2026` vs `PmKisanFaceAuthenticationEkyc`. Face-auth is a subset of eKYC; both target "PM Kisan eKYC". Differentiate H1/title or merge face-auth as a section.
3. **Maandhan overview vs cluster** — `PmKisanMaandhanYojanaPension` (overview, title "PM Kisan Maandhan 2026: ₹3000 Pension") vs 13 deep-dives in `components/articles/maandhan/`. Overview title collides almost 1:1 with `PmKisanMaandhanRegistration2026` ("PM Kisan Maandhan Registration: ₹3000 Pension"). Fix: make the overview a hub page and remove "₹3000 Pension" from one of the two titles.
4. **Bank-account change pair** — `PmKisanBankAccountChangeProcess` (PM Kisan) vs `maandhan/pmkmy-bank-account-change` (Maandhan). Different schemes, near-identical query shape — ensure titles clearly say "PM Kisan" vs "Maandhan (PMKMY)".
5. **Helpline pair** — `pm-kisan-helpline-155261` vs `maandhan/pmkmy-grievance-complaint-helpline`. Same as above: scheme disambiguation in title/H1.

---

## 4. AI-uniform (template-produced) article groups

Prose is varied per article, but these groups share an identical component skeleton (same imports, same section order: intro → figures → SchemeTable/DB → InfoBox → FAQ block → JSON-LD → RelatedArticles → AuthorBox), a hallmark of batch/AI-assisted generation:

| Group | Files | Shared skeleton |
|---|---|---|
| loan-mandi-pashupalan core | 13 files (e.g. `BiharPashupalanLoanYojana`, `DairyFarmLoanWithoutCollateral`, `EnamRegistrationKaiseKare`, `GehuKaBhavMspVsMandi`, `JansamarthPortalLoanApply`, `MandiBhavAppComparison`, `MspList202627`, `RashtriyaGokulMissionSubsidy`, `SabziBhavGuidePyazAlooTamatar`, `SbiDairyLoanInterestRate`, + 3 root articles) | AuthorBox, BottomNav, DB, Disclaimer, FAQBlock, GovLink, IB, SH, SI |
| kisanguides subsidy set | 6 files (`MadhumakhiPalan`, `MushroomKheti`, `PMFMEYojana`, `PMatsyaSampada`, `SilageMaking`, `VerminCompost`) | AuthorBox, ExternalLinkButton, FAQBlock, GuideDisclaimer |
| root "2026" set | 5 files (`KisanRinKahaSeLe2026`, `KisanTractorLoan2026`, `NanoDap500mlPriceInIndia2026`, `PmKisan25viKist2027`, `PmKisanCorrectionForm2026`) | + CalcBanner variant |
| hindi-yojana-2026 set | 5 files (`FasalBimaClaimStatusHindi`, `KisanKarjMafiAllStatesHindi`, `MgnregaPashuShedYojanaHindi`, `PmKisanHelpline155261Hindi`, `PmKisanKhadYojanaSachHindi`) | Head + Image + Link minimal skeleton |
| rajya-yojana status set | 5 files (`AnnadataSukhibhavaStatusCheck`, `KrishakUnnatiYojanaStatusCheck`, `MpKisanKalyanYojanaKist`, `NamoShetkariYojanaStatus`, `RythuBharosaStatusCheck`) | Fig, InfoBox, SchemeTable |

Other uniformity signals:
- **Formulaic titles:** ~70% follow "`<Topic> 2026: <Hook>`" pattern.
- **Identical FAQ/JSON-LD scaffolding** repeated verbatim in 32+ files (schema code, fine for SEO, but each file re-declares the same `FAQBlock`/`SH`/`IB` helper components inline — should be extracted to shared `components/ui/`).
- **Uniform figure blocks** (`width=1200 height=675/800`, same figcaption styling) in 29+ files.

**Note:** structural uniformity here is a maintainability + "pattern footprint" concern, not a duplicate-content penalty risk — Google indexes prose, and the prose is distinct.

---

## 5. English ↔ Hindi translation pairs (intentional, NOT duplicates)

29 pairs mapped in `lib/hindi-hreflang.ts` (`HINDI_TO_HINGLISH`), e.g.:

- `PmKisan25viKist2027` ↔ `hi/pm-kisan-25vi-kist`
- `PmKisanEkycOnline2026` ↔ `hi/ekyc-mobile-se`
- `annadata-sukhibhava-status-check-2026` ↔ `hi/annadata-sukhibhava-status`
- `gau-mutra-kharid-yojana-up-2026` ↔ `hi/gau-mutra-kharid-yojana`
- …(full map in `lib/hindi-hreflang.ts`)

Measured cross-language prose overlap ≤ 2% (different scripts, genuinely rewritten). Keep hreflang tags intact; no action needed. Hindi files not present in the map should be added if an English counterpart exists.

---

## 6. Recommendations (priority order)

1. Consolidate/differentiate the **kist series** (esp. thin `PmKisan26viKist`).
2. Fix title collisions in the **Maandhan cluster** (overview vs registration).
3. Extract repeated inline helpers (`FAQBlock`, `SH`, `IB`, `Fig`, checker-tool scaffolding) into `components/ui/` — cuts ~30–40% duplicated JSX code.
4. Vary the title formula on new articles to reduce the AI-batch footprint.
5. Verify every Hindi article has a `hindi-hreflang.ts` entry where an English twin exists.

---
*Generated by automated audit: prose shingling (4/5-gram Jaccard/containment), heading fingerprints, component signatures. No content was modified.*
