 https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Frajya-yojana
har 3 articles fix karny ke bad auto merge karke ye file update kardia karo
folder के 10 articles को completely humanize करो। ये problems fix करो:

## Problem 1: Word Count 2000+
9 files अभी भी 2000 से कम हैं — सिर्फ genuinely useful information add करो, fake story मत भरो:

| File | Current | Target |
|------|---------|--------|
| KrishakUnnati | 1,407 | 2,000+ |
| OdishaCmKisan | 1,254 | 2,000+ |
| StateKisanHub | 1,763 | 2,000+ |
| PmKisanPatiPatni | 1,691 | 2,000+ |
| MpKisanKalyan | 1,717 | 2,000+ |
| KrishakBandhu | 1,784 | 2,100+ |
| RythuBharosa | 1,815 | 2,000+ |
| Annadata | 1,802 | 2,000+ |
| NamoShetkari | 1,925 | 2,000+ |

## Problem 2: AI Uniformity हटाओ
- **Paragraph length vary करो** — कुछ paragraphs 2-3 lines के, कुछ 5-6 lines के, कुछ 8-10 lines के हों। सब same length मत रखो।
- **Sentence length vary करो** — short sentences (5-8 words) और long sentences (15-25 words) mix करो।
- **Line starters diversify करो** — हर paragraph अलग word से शुरू हो। "इसलिए", "इसीलिए", "इसका मतलब", "यही वजह" जैसे same transition words repeat मत करो।
- **Paragraph style vary करो** — कुछ paragraphs direct info दें, कुछ rhetorical question से शुरू हों, कुछ caution note हों, कुछ real example हों।

## Problem 3: Real Stories + Source Links
- **Fake "रामलाल" जैसे names मत लिखो** — अगर example दो तो real news source से लो (PIB, state government portals, newspaper reports)
- **Har real claim ke source mention करो** — "महाराष्ट्र सरकार के budget 2026 के अनुसार" या "PIB की 15 मार्च 2026 की release के मुताबिक"
- **Real helpline numbers, real portal links, real dates** ही use करो — guess मत करो

## Problem 4: Human Voice
- **Colloquial tone** — जैसे किसान से बात कर रहे हों, textbook नहीं
- **Imperfections रखो** — थोड़ी grammatical roughness, थोड़ा Hinglish mix
- **Emotions दिखाओ** — frustration, hope, caution, relief — robotic नहीं

## Rules:
- Image paths (`hero.webp`, `status-check-phone.webp` etc.) unchanged रहें
- Facts, dates, amounts, official links unchanged रहें
- Same TSX format में output do
- Words delete मत करो — सिर्फ add और replace करो

---

## Progress Tracker (updated 2026-08-10)

Word counts re-verified from source on 2026-08-10 (prose words, JSX/imports stripped) —
all 10 files were already 2,000+ after PRs #188–191, so this pass focused on
Problems 2–4 (AI uniformity, no fake names, human voice). No facts/amounts/links/images changed.

| Batch | Files | Status |
|-------|-------|--------|
| 1 | KrishakUnnati (2,222), OdishaCmKisan (2,134), StateKisanHub (2,383) | done — PR #192 merged |
| 2 | PmKisanPatiPatni (2,187), MpKisanKalyan (2,104), RythuBharosa (2,133) | done — PR #193 merged |
| 3 | KrishakBandhu (2,133), Annadata (2,203), NamoShetkari (2,153) — fictional "Ganesh" example removed | done — PR #194 merged |
| 4 | RajasthanKisanSammanNidhi9000 (2,423) + this tracker update | done — PR #195 |
