https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Fhindi-yojana
token ke lye card do ahrefs ko skip karo 
मेरे components/articles/hindi-yojana/KisanKarjMafiList2027.tsx में FAQS और RELATED const declarations abhi bhi hain aur JSX mein use ho rahe hain — shared components hata diye hain lekin yeh consts aur unka JSX usage abhi bhi hai:

1. `const FAQS = [...]` declaration hatao
2. `const RELATED = [...]` declaration hatao  
3. JSX mein jahan `<FAQBlock items={FAQS} />` tha, wahan FAQ content directly inline likh do (same questions/answers text, bas component ke bina)
4. JSX mein jahan `<RelatedArticles items={RELATED} />` tha, wahan related articles ke links/text directly inline likh do

Rule: Content (words, questions, answers, links) bilkul same rakhni hai — sirf rendering style change karo. Const declarations aur shared component usage hata ke directly JSX mein likh do. Baqi koi file mat chhedo.
