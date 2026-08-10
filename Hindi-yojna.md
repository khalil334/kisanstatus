https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Frajya-yojana
मेरे KisanStatus.com के components/articles/rajya-yojana folder के 10 articles को fix करो। 2 problems hain:

## Problem 1: Word Count 2000+ नहीं है
सिर्फ 1/10 files 2000+ words है। बाकी 9 thin content हैं:

| File | Current Words | Target |
|------|---------------|--------|
| KrishakBandhu | 1,963 | ~2,100+ |
| KrishakUnnati | 1,170 | ~2,000+ |
| MP KisanKalyan | 1,516 | ~2,000+ |
| NamoShetkari | 1,622 | ~2,000+ |
| Odisha CM Kisan | 1,658 | ~2,000+ |
| PatiPatni Rule | 1,388 | ~2,000+ |
| RythuBharosa | 1,582 | ~2,000+ |
| Annadata | 1,714 | ~2,000+ |
| StateKisanHub | 830 | ~2,000+ |

Fix: Words delete मत करो — genuinely useful detail add karo: state-specific examples, district-wise differences, document checklists, real farmer experiences, timeline scenarios, common mistakes.

## Problem 2: Shared Components हटाओ
सभी 10 files में FAQBlock और ArticleShared components हैं। Hindi-yojana की तरह इन्हें हटाओ:

- `FAQBlock` component hatao — FAQ content directly inline JSX mein likho
- `ArticleShared` import hatao — const declarations (FAQS, RELATED) inline mein convert karo
- Baaki imports (React, Next) unchanged रहें

## Rules:
- Content length same या बढ़नी चाहिए — कम नहीं
- Facts, dates, amounts, official links unchanged
- Opening style diverse रहे — har article ka intro unique रहे
- Same TSX format में output do
