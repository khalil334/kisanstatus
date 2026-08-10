https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Frajya-yojana
token ke lye card do
3 articles fix karny ke bad direct merge karke phr next 3 py start kam start karo har 3 articles fix karny ke bad auto merge karke ye file update kardia karo
 मेरे KisanStatus.com के components/articles/rajya-yojana folder के 10 articles को fix करो। 2 problems hain:

## Problem 1: Word Count 2000+ नहीं है
सिर्फ 1/10 files 2000+ words है। Baaki 9 thin content हैं:

| File | Current Words | Target |
|------|---------------|--------|
| KrishakUnnatiYojanaStatusCheck.tsx | 606 | ~2,000+ |
| StateKisanYojanaHub.tsx | 653 | ~2,000+ |
| OdishaCmKisanStatusCheck.tsx | 945 | ~2,000+ |
| PmKisanPatiPatniRule.tsx | 1,078 | ~2,000+ |
| MpKisanKalyanYojanaKist.tsx | 1,377 | ~2,000+ |
| RythuBharosaStatusCheck.tsx | 1,460 | ~2,000+ |
| AnnadataSukhibhavaStatusCheck.tsx | 1,606 | ~2,000+ |
| NamoShetkariYojanaStatus.tsx | 1,622 | ~2,000+ |
| KrishakBandhuStatusCheck.tsx | 1,775 | ~2,100+ |

Fix: Words delete मत करो — genuinely useful detail add karo: state-specific examples, district-wise differences, document checklists, real farmer experiences, timeline scenarios, common mistakes.

## Problem 2: ArticleShared Component हटाओ
सभी 10 files में `@/components/ArticleShared` import है और FAQBlock use ho raha hai:

- `@/components/ArticleShared` import hatao
- `FAQBlock` component hatao — FAQ content directly inline JSX mein likho
- Tool components (jaise `KrishakBandhuChecker`, `OdishaCmKisanChecker`, `PmKisanFamilyChecker`) unchanged रहें
- Baaki imports (React, Next, images) unchanged रहें

## Rules:
- Content length same या बढ़नी चाहिए — कम नहीं
- Facts, dates, amounts, official links unchanged
- Image paths (`hero.webp`, `status-check-phone.webp` etc.) unchanged रहें
- Opening style diverse रहे — har article ka intro unique रहे
- Same TSX format में output do
