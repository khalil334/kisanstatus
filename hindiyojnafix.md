https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Fhindi-yojana
token ke lye card do ahrefs ko skip karo 
मेरे KisanStatus.com के 3 critical issues fix करो — index करने से पहले यeh zaroori hain:

## Issue 1: KisanKarjMafiList2027.tsx — Shared Components Hatao
`components/articles/hindi-yojana/KisanKarjMafiList2027.tsx` mein abhi bhi `FAQBlock`, `RelatedArticles`, aur `StepList` shared components use ho rahe hain. Baaki 14 files independent hain. Is file se yeh 3 components hatao aur unka content directly inline JSX mein likh do. Import statements bhi hatao.

## Issue 2: Hreflang Tags Add Karo
`app/articles/hi/[slug]/page.tsx` (ya jahan bhi Hindi articles ka layout/head hai) mein yeh tags add karo:

```html
<link rel="alternate" hreflang="hi" href={`https://kisanstatus.com/articles/hi/${slug}`} />
<link rel="alternate" hreflang="en" href={`https://kisanstatus.com/articles/${hinglishSlug}`} />
