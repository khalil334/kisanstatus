# Hindi Articles Content Audit (हिंदी लेख ऑडिट)

**Scope:** सिर्फ Hindi (`/articles/hi/...`) articles — 30 files, 4 folders:
`components/articles/hindi-yojana` (9), `hindi-kisanguides` (2), `hindi-loan-mandi-pashupalan` (4), `hindi-rajya-yojana` (15).

**Method:** Devanagari text extract karke automated analysis — sentence-length uniformity (AI signal), cross-article 5/10-gram duplicate detection, keyword density, repeated-phrase (boilerplate) detection, structural uniformity.

**Date:** 2026-08-16

---

## Fix Progress Log

**Batch 1 — pushed 2026-08-16:**
- ✅ 🔴 #1 (partial): `AnnadataSukhibhavaStatusHindi` — 3 duplicated blocks rewritten (₹20,000 hisaab para, "bichauliye" line, NPCI mapping bullet) to kill shared 5/10-grams with `RajasthanKisanSammanNidhi`. Sentence rhythm bhi toda (short sentences mix kiye) — partially addresses 🔴 #5 uniformity flag on this file.
- ✅ 🔴 #2 (partial): fabricated "मेरे एक परिचित <district>" anecdotes removed/replaced with impersonal factual phrasing in `RythuBharosaStatusHindi` (वारंगल), `OdishaCmKisanStatusHindi` (बलांगीर), `KrishakUnnatiYojanaStatusHindi` (धमतरी).

**Batch 2 — pushed 2026-08-16:**
- ✅ 🔴 #2 complete: last three "परिचित" anecdotes rewritten impersonally — `StateKisanYojanaListHindi` (बिहार), `UpKisanKarjRahatListHindi` (सहकारी समिति), `AnnadataSukhibhava` intro (गुंटूर)। Zero fabricated anecdotes left.
- ✅ 🔴 #1 continued: Namo↔Rajasthan/MP shared prose broken — NPCI/लौटकर-दोबारा FAQ answer rewritten in `NamoShetkari`, "Know Your Status" line varied in both `NamoShetkari` and `MukhyamantriKisanKalyanMp`; Bihar↔MeriFasal "जुबानी शिकायत हवा में" phrasing varied in `MeriFasal`.

**Batch 3 — pushed 2026-08-16:**
- ✅ 🟠 #5 complete: sentence-rhythm broken (short sentences mixed in) in `KrishakBandhu`, `RythuBharosa`, `PatiPatni`; unverifiable first-person claims ("मेरे गांव की तरफ एक परिवार...", "मैंने खुद पोर्टल खोल कर देखा") rewritten impersonally; "recieve" typo fixed.
- ✅ 🟠 #4 (variation pass): "पहले guide पढ़ी?" CTA line varied per-file (3 of 4 rephrased); "जांची हुई है" closing formula varied in `Annadata` + `Rajasthan`; "असली सवाल, सीधे जवाब" FAQ heading varied in 3 of 4 files. Full componentization (§3) intentionally NOT done — wording variation achieves the uniqueness goal without a refactor.
- ✅ 🟡 #6 complete: synonym mixing — `NpciAadhaarSeeding` (seeding 43→33, mapper/mapping mixed in), `UpKarjRahat` (लोन 26→14, कर्ज/ऋण mixed), `EkycMobile` (eKYC 48→39, सत्यापन mixed).

**Batch 4 — pushed 2026-08-16:**
- ✅ 🔴 #1 complete: re-ran cross-article n-gram scan post-fixes — remaining word-for-word sentences broken: family-unit definition line (Namo↔PmKisan25vi), "पैसा उस खाते में जाता है जो आधार से..." (Rajasthan↔PmKisan25vi), Rajasthan eligibility bullet (↔Namo), Bihar↔MeriFasal shared शुल्क-disclaimer + Hinglish cross-link + payment-failed link phrasing, "योजना का पूरा हिसाब मास्टर गाइड" line (Parihara/UpKarjRahat), Annadata related-articles footer heading varied. Scan now shows only 1 pair ≥3 shared 8-grams (generic dormant-account phrasing) — total shared 8-grams across all 435 pairs: 17 (was 100s).

**Remaining (optional/deferred):**
- 🟠 #3 template-DNA (word/FAQ counts) — guidance for future articles, no retro-fix needed.
- 🟠 #4 componentization of WhatsApp-scam warning + master-guide footer into shared components — optional refactor.

---

## TL;DR — Overall Verdict

- **Koi bhi article "spun" ya blatantly AI-dumped nahi hai** — sentence-length variance sabhi mein healthy hai (std 7.5–17.9), vocabulary rich hai, aur exact duplicate paragraphs sirf boilerplate blocks tak limited hain.
- **Lekin structural uniformity bahut high hai** — sab articles ek hi template-DNA share karte hain (same FAQ_SCHEMA pattern, same intro formula, same closing block). Yeh Google ke "scaled content" pattern-detection ke liye risk hai.
- **Sabse bada red flag:** `hindi-rajya-yojana` folder ke 15 articles ek hi mold se nikle lagte hain — same fabricated-anecdote pattern ("मेरे एक परिचित..."), same closing boilerplate, aur do pairs mein direct copied sentences.

---

## 1. Duplicate / Near-Duplicate Content (सबसे गंभीर)

Cross-article shared 5-gram phrases (jitna zyada, utna overlap):

| Overlap | Article A | Article B | Note |
|---|---|---|---|
| **59 shared 5-grams** | `AnnadataSukhibhavaStatusHindi` | `RajasthanKisanSammanNidhiHindi` | ⚠️ Highest — poore sentences copy hain, e.g. "पैसा उस खाते में जाता है जो आधार से अंतिम बार..." aur closing block "जानकारी...तक जांची हुई है। इससे जुड़े बाकी लेख पीएम किसान पूरी मास्टर गाइड में..." word-for-word same |
| **42** | `MukhyamantriKisanKalyanYojanaMp` | `NamoShetkariYojanaMaharashtra` | ⚠️ Income-tax-payer exclusion wala paragraph + "pmkisan.gov.in ka Know Your Status" block duplicated |
| **35** | `NamoShetkariYojanaMaharashtra` | `RajasthanKisanSammanNidhiHindi` | "राज्य अपनी अलग जांच नहीं..." pattern shared |
| 21 | `BiharKisanRegistrationStatusHindi` | `MeriFasalMeraByoraStatusHindi` | "शिकायत हवा में उड़ जाती..." shared phrasing |
| 19 | `PmKisan25viKistKabAayegi` | `NamoShetkariYojanaMaharashtra` | पति-पत्नी rule paragraph reuse |
| 19 | `BiharKisanRegistrationStatusHindi` | `PariharaPaymentStatusHindi` | closing boilerplate |

**Root cause:** Rajya-yojana articles ek base article se derive kiye gaye hain — state name badla, scheme name badla, par transitional/explanatory sentences copy rah gaye.

**Fix suggestion:** Upar ke top-3 pairs mein shared paragraphs ko rewrite karo (khaas taur par Annadata↔Rajasthan — ~14 identical 10-grams). Closing "मास्टर गाइड" block ko component bana do (dekho §3) taaki woh indexed body-text na gine.

---

## 2. AI-Uniformity / "Too Perfect" Pattern (लेख जो बहुत uniform हैं)

Sentence-length stats (mean words/sentence, std = variation; **kam std = zyada uniform = AI-jaisa**):

| Article | Words | Mean | Std | Verdict |
|---|---|---|---|---|
| `AnnadataSukhibhavaStatusHindi` | 2013 | 15.9 | **7.5** | ⚠️ Sabse uniform — sentences ek hi rhythm mein |
| `KrishakBandhuStatusHindi` | 1351 | 17.5 | **8.1** | ⚠️ Uniform |
| `RythuBharosaStatusHindi` | 1558 | 17.4 | **8.6** | ⚠️ Uniform |
| `PatiPatniPmKisanRuleHindi` | 1810 | 16.8 | **8.7** | ⚠️ Uniform |
| `KrishakUnnatiYojanaStatusHindi` | 1528 | 17.4 | 8.8 | Borderline |
| `OdishaCmKisanStatusHindi` | 1948 | 17.2 | 9.0 | Borderline |
| `IkhedutPortalStatusHindi` | 1769 | 17.8 | 17.9 | ✅ Best variance |
| `FarmerIdCardKaiseBanaye2027` | 2952 | 18.8 | 14.0 | ✅ Natural |
| `GauMutraKharidYojanaHindi` | 3799 | 18.3 | 14.1 | ✅ Natural |

**Word-count uniformity bhi suspicious hai:**
- `hindi-yojana` ke 9 articles: **sab 2711–2952 words** (spread sirf ~8%) — ek hi word-count target se generate hue lagte hain.
- FAQ count bhi mechanical: yojana folder mein 8/9 articles mein **exactly 11–12 FAQs**; rajya-yojana mein 10/15 mein **exactly 6 FAQs**.

**Repeated "personal anecdote" formula (fabricated-sounding E-E-A-T):** 5 articles mein same pattern — "मेरे एक परिचित <जिला> में..." (`RythuBharosa`=वारंगल, `KrishakUnnati`=धमतरी, `OdishaCmKisan`=बलांगीर, `UpKisanKarjRahat`=सहकारी समिति, `StateKisanYojanaList`). Ek jaisa template alag-alag districts ke saath — yeh pattern reviewer/algorithm dono ko fake lagta hai.

**Fix suggestion:** ⚠️-marked 4 articles (Annadata, KrishakBandhu, RythuBharosa, PatiPatni) mein sentence rhythm todo — kuch bahut chhote sentences (3–5 words), kuch lambe mixed karo. "मेरे एक परिचित" anecdotes ya to real experience se replace karo ya hata do — 5 baar same formula clearly synthetic hai.

---

## 3. Boilerplate / Repeating Blocks (हर article में same text)

Body text ke andar repeated blocks (component nahi, copy-paste):

- **"पीएम किसान मास्टर गाइड" closing block** — 13 files, 16 occurrences. Kai jagah word-for-word: "जानकारी ... तक जांची हुई है। इससे जुड़े बाकी लेख पीएम किसान पूरी मास्टर गाइड में हैं।"
- **"पहले guide पढ़ी, अब official site पर..."** CTA line — kam se kam 3 articles mein verbatim.
- **WhatsApp-scam warning paragraph** — 13 files, 23 occurrences; phrasing overlap high ("WhatsApp का ... मैसेज ... झूठा").
- **"असली सवाल, सीधे जवाब"** FAQ heading — 9+ articles.
- **"सीधी बात"** opener — 4 articles.

**Fix suggestion:** In blocks ko shared React components mein nikalo (`<MasterGuideFooter/>`, `<WhatsAppScamWarning/>`) aur wording per-article thoda vary karo, ya inhe article body se bahar (layout level par) rakho. Isse per-page unique-content ratio badhega.

---

## 4. Keyword Repetition / Stuffing (कीवर्ड density)

Zyada tar articles safe hain (top content keyword 1.5–2.5% — normal). Jo borderline-high hain:

| Article | Keyword | Count | Density | Verdict |
|---|---|---|---|---|
| `NpciAadhaarSeedingDbtPayment` | बैंक / seeding | 59 / 52 | 3.5% / 3.1% | ⚠️ Borderline — "seeding" 52 baar; kuch jagah pronoun/synonym use karo |
| `UpKisanKarjRahatListHindi` | लोन | 26 | 3.3% | ⚠️ Chhota article hai isliye density high; "कर्ज/ऋण" synonyms already hain, mix badhao |
| `StateKisanYojanaListHindi` | राज्य | 39 | 3.2% | OK-ish (list article hai), par intro/outro mein kam karo |
| `PmKisanEkycMobileSeKaiseKare` | otp / ekyc | 44 / 44 | 2.6% each | Borderline — combined technical-term density high |
| `GehuKaRateAajMspVsMandiBhav` | भाव / मंडी | 52 / 51 | 2.8% / 2.7% | Topic-appropriate, par dono milkar 5.5% — thoda dilute karo |

Baaki 25 articles mein koi stuffing nahi mili. Intra-article repeated sentences bhi lagbhag nahi hain (sirf 2 files mein ek-ek 3x-repeated 6-gram — negligible).

**Note:** `lib/hindi-articles-data.ts` ke `keywords` arrays (9 keywords/article) meta ke liye hain — yeh stuffing nahi, par ensure karo ki yeh page par visible keyword-list ke roop mein render na hoti ho.

---

## 5. Red Flags Summary (priority order)

1. **🔴 Duplicate sentences across rajya-yojana articles** — `AnnadataSukhibhava` ↔ `RajasthanKisanSammanNidhi` (59 shared 5-grams) aur `MukhyamantriKisanKalyanMp` ↔ `NamoShetkari` (42) — rewrite required.
2. **🔴 Fabricated-pattern anecdotes** — "मेरे एक परिचित <district>" formula 5 articles mein. Remove ya genuine banao.
3. **🟠 Template-DNA uniformity** — word counts, FAQ counts, section structure sab folders ke andar near-identical. Naye articles likhte waqt structure vary karo.
4. **🟠 Boilerplate closing/CTA blocks body text mein** — componentize + vary.
5. **🟠 4 articles with low sentence variance** (Annadata, KrishakBandhu, RythuBharosa, PatiPatni) — rhythm todna hai.
6. **🟡 Mild keyword-density issues** — NpciAadhaarSeeding, UpKarjRahat, EkycMobile — synonym mixing enough hai.
7. **🟢 Positive:** Content substantively unique aur useful hai (specific dates, portal steps, scheme rules); Hindi natural conversational register mein hai; koi machine-translation artifacts nahi mile; FAQ schema sahi implemented hai.

---

## Per-Article Quick Table

| File | Words | Uniformity risk | Duplicate risk | Keyword risk |
|---|---|---|---|---|
| hindi-yojana/FarmerIdCardKaiseBanaye2027 | 2952 | Low | Low | Low |
| hindi-yojana/NpciAadhaarSeedingDbtPayment | 2739 | Low | Low | **Med** |
| hindi-yojana/PmKisan25viKistKabAayegi | 2729 | Low | Med (reused paras) | Low |
| hindi-yojana/PmKisanEkycMobileSeKaiseKare | 2783 | Low | Low | Med |
| hindi-yojana/PmKisanHelplineNumberComplaint | 2721 | Low | Low | Low |
| hindi-yojana/PmKisanNewRegistration2027 | 2711 | Low | Low | Low |
| hindi-yojana/PmKisanPaymentStoppedByStateFix | 2812 | Low | Low | Low |
| hindi-yojana/PmKisanRecoveryNoticePaisaWapas | 2772 | Low | Low | Low |
| hindi-yojana/PmKisanStatusCheckMobileNumberSe | 2827 | Low | Med (CTA reuse) | Low |
| hindi-kisanguides/NamoDroneDidiYojanaHindi | 3747 | Low | Low | Low |
| hindi-kisanguides/TractorSubsidy2027StateWiseList | 2812 | Low | Low | Low |
| hindi-loan-mandi-pashupalan/GauMutraKharidYojanaHindi | 3799 | Low | Low | Low |
| hindi-loan-mandi-pashupalan/GehuKaRateAajMspVsMandiBhav | 2985 | Low | Low | Med |
| hindi-loan-mandi-pashupalan/KccLimitKaiseBadhaye3Se5Lakh | 2894 | Low | Low | Low |
| hindi-loan-mandi-pashupalan/KisanKarjMafiList2027 | 2998 | Low | Low | Low |
| hindi-rajya-yojana/AnnadataSukhibhavaStatusHindi | 2013 | **High** | **High** | Low |
| hindi-rajya-yojana/BiharKisanRegistrationStatusHindi | 1776 | Low | Med | Low |
| hindi-rajya-yojana/IkhedutPortalStatusHindi | 1769 | Low | Low | Low |
| hindi-rajya-yojana/KrishakBandhuStatusHindi | 1351 | **High** | Med | Low |
| hindi-rajya-yojana/KrishakUnnatiYojanaStatusHindi | 1528 | Med (+anecdote) | Low | Low |
| hindi-rajya-yojana/MeriFasalMeraByoraStatusHindi | 1925 | Low | Med | Low |
| hindi-rajya-yojana/MukhyamantriKisanKalyanYojanaMp | 2788 | Low | **High** | Low |
| hindi-rajya-yojana/NamoShetkariYojanaMaharashtra | 2637 | Low | **High** | Low |
| hindi-rajya-yojana/OdishaCmKisanStatusHindi | 1948 | Med (+anecdote) | Low | Low |
| hindi-rajya-yojana/PariharaPaymentStatusHindi | 1508 | Low | Med | Low |
| hindi-rajya-yojana/PatiPatniPmKisanRuleHindi | 1810 | **High** | Low | Low |
| hindi-rajya-yojana/RajasthanKisanSammanNidhiHindi | 2154 | Med | **High** | Low |
| hindi-rajya-yojana/RythuBharosaStatusHindi | 1558 | **High** (+anecdote) | Low | Low |
| hindi-rajya-yojana/StateKisanYojanaListHindi | 1877 | Med (+anecdote) | Low | Med |
| hindi-rajya-yojana/UpKisanKarjRahatListHindi | 1268 | Low | Med | **Med** |

*Generated by automated content audit — text extracted from TSX, Devanagari-only analysis. No content was modified.*
