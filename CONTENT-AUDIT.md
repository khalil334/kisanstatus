# KisanStatus — Content Quality Audit

> Automated scan of all 115 article components + 110 data-file entries on `main`.
> Checks: duplicate/near-duplicate text, thin content, keyword cannibalization,
> AI-pattern phrases, sentence/paragraph uniformity, cloned article structure.
> Method: 6-word shingle Jaccard similarity for duplicates, keyword/title overlap
> from the `lib/*data*.ts` entries, phrase-frequency scan for AI tells.

**Overall verdict: healthy.** No thin articles, no true duplicate content, no
uniform AI sentence rhythm. The issues below are worth fixing but none is severe.

---

## 1. Duplicate / near-duplicate content

| Severity | Finding |
|---|---|
| 🟢 None | No article pair exceeds 0.18 text similarity. The 24vi/25vi/26vi kist trio and the two FTO articles share <5% text — properly differentiated. |
| 🟡 Minor | `rajya-yojana/tools/KrishakBandhuChecker.tsx` ↔ `tools/OdishaCmKisanChecker.tsx` — 0.18 similarity. These are checker-tool templates, acceptable, but vary the surrounding copy (intro, FAQ) so the tool pages don't read as clones. |

Hindi/English sibling pages (`hi/odisha-cm-kisan-status` ↔ EN Odisha page,
`hi/gau-mutra-kharid-yojana` ↔ EN gau-mutra, `hi/pati-patni-pm-kisan-rule` ↔ EN
pati-patni, `hi/ekyc-mobile-se` ↔ EN eKYC) are all correctly declared in
`lib/hindi-hreflang.ts` — **not** duplication problems. ✅

## 2. Thin / low-value articles

**None.** Excluding the unused `ArticleStub.tsx` (108 words) and the four
interactive checker tools, every article has 1,100–5,500 words of visible text
(median ≈ 3,100). Shortest real articles — still fine, but the first two are
newer and could grow with the next news cycle:

| Words | Article |
|---|---|
| 1,130 | `hindi-rajya-yojana/UpKisanKarjRahatListHindi.tsx` |
| 1,286 | `PmKisan26viKist.tsx` (new; will grow as dates announce) |
| 1,336 | `FtoStatusCheckPaisaKabAayega.tsx` (new companion page) |

🗑️ `components/articles/ArticleStub.tsx` is referenced nowhere — safe to delete.

## 3. Keyword cannibalization

### 🔴 Fix these two

1. **`hi/karj-mafi-list` ↔ `up-kisan-karj-rahat-list-2026`** — 0.83 title
   overlap ("किसान कर्ज माफी लिस्ट" vs "UP किसान कर्ज राहत लिस्ट") and NOT
   paired in `hindi-hreflang.ts`, so Google sees two competing loan-waiver list
   pages. Fix: make `hi/karj-mafi-list` the all-states hub, link it prominently
   to the UP page as the UP detail, and keep "UP" out of the hub's keywords.
   Also note the hub says **2027** while the UP page says **2026** — align the
   year to whichever waiver cycle is actually live (don't invent one).

2. **`fto will be generated` keyword assigned to BOTH FTO articles**
   (`pm-kisan-fto-generated-ka-matlab-kya-hai` and
   `fto-status-check-paisa-kab-aayega`). Keep it only on the status-check page
   (that's the "will be" waiting intent); the meaning page owns "fto full form"
   / "fto generated ka matlab".

### 🟡 Watch

- **Maandhan cluster** (12 pages all titled "PM Kisan Maandhan …") — high title
  overlap is inherent to a hub-and-spoke cluster and fine *as long as* each page
  targets a distinct query (registration / calculator / status / helpline etc.,
  which they do). Keep interlinking them to one hub page.
- Duplicate keyword strings on EN/HI sibling pages (`gau mutra`, `ekyc`) are
  harmless because hreflang pairs them — but ideally give the Hindi page
  Devanagari-only keyword variants.

## 4. AI-pattern language

No English LLM tells ("delve", "furthermore", "comprehensive guide", "in
conclusion") — clean. But a few Hinglish stock phrases repeat enough across
articles to look templated:

| Uses | Articles | Phrase | Action |
|---|---|---|---|
| 43 | 24 | "ghar baithe" | Worst offenders: `PmKisanEkycOnline2026` (5x), `PmKisanCscRegistrationCharges` (4x), `PmKisanCorrectionForm2026` (3x), `PmKisanMasterGuide2026` (3x). Cap at 1 per article; vary with "mobile se", "bina kahin jaaye", or just drop it. |
| 36 | 29 | "sabse pehle" | `KrishakUnnatiYojanaStatusCheck` (4x), FTO-meaning article (3x). Vary step openers: "pehla kaam", "shuruaat …se", or plain numbered steps. |
| 16 | 15 | "step-by-step process" | Filler; the steps themselves show it. Remove or say "poora tareeka". |
| 10 | 9 | "dhyan rakhein" | Fine at this level; don't let it grow. |

## 5. Sentence / paragraph uniformity

**Clean.** No article shows the suspicious flat sentence-length distribution
(stdev < 5 words) typical of unedited AI output. Sentence lengths vary
naturally across all 110 articles.

## 6. Cloned article structure

- **No two articles share an identical section-component sequence** — good.
- **No FAQ question is reused verbatim across articles** — good.
- The only repeated heading across articles is "Sources" (13x), which is
  intentional and fine.
- Heading *counts* cluster around 10–13 H2s per article. That's a house style,
  not a red flag, but when writing the next batch, vary the shape: some short
  answer-first pages (5–6 H2s), some deep guides — identical skeleton depth
  across a whole site is a weak template signal.

---

## Action checklist (priority order)

- [ ] De-cannibalize `hi/karj-mafi-list` vs `up-kisan-karj-rahat-list-2026` (hub/spoke + fix year mismatch 2027 vs 2026)
- [ ] Remove `fto will be generated` keyword from the FTO-meaning article (keep on status-check page)
- [ ] Trim "ghar baithe" in the 4 worst articles; trim "sabse pehle" in `KrishakUnnatiYojanaStatusCheck` + FTO-meaning
- [ ] Delete unused `components/articles/ArticleStub.tsx`
- [ ] Differentiate intro/FAQ copy on the two checker-tool pages
- [ ] Optional: grow `UpKisanKarjRahatListHindi` (1,130w) next time UP announces a waiver update
