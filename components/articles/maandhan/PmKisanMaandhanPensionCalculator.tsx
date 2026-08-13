'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';
import { AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

const PUBLISHED = '2026-03-20T10:58:55+05:30';
const MODIFIED = '2026-04-03T18:06:25+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-registration-2026',
    title: 'Complete Registration Guide',
    desc: 'Step-by-step process to apply online or at a CSC center.',
  },
  {
    slug: 'pm-kisan-maandhan-eligibility-documents',
    title: 'Eligibility & Documents',
    desc: 'Detailed checklist of documents and exact eligibility rules.',
  },
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Withdrawal & Refund Rules',
    desc: 'What happens to your money if you exit the scheme early?',
  },
];

const CONTRIBUTION_DATA: { age: number; monthly: number; total: number }[] = [
  { age: 18, monthly: 55, total: 27720 }, { age: 19, monthly: 58, total: 28536 },
  { age: 20, monthly: 61, total: 29280 }, { age: 21, monthly: 64, total: 29952 },
  { age: 22, monthly: 68, total: 31008 }, { age: 23, monthly: 72, total: 31968 },
  { age: 24, monthly: 76, total: 32832 }, { age: 25, monthly: 80, total: 33600 },
  { age: 26, monthly: 85, total: 34680 }, { age: 27, monthly: 90, total: 35640 },
  { age: 28, monthly: 95, total: 36480 }, { age: 29, monthly: 100, total: 37200 },
  { age: 30, monthly: 105, total: 37800 }, { age: 31, monthly: 110, total: 38280 },
  { age: 32, monthly: 120, total: 40320 }, { age: 33, monthly: 130, total: 42120 },
  { age: 34, monthly: 140, total: 43680 }, { age: 35, monthly: 150, total: 45000 },
  { age: 36, monthly: 160, total: 46080 }, { age: 37, monthly: 170, total: 46920 },
  { age: 38, monthly: 180, total: 47520 }, { age: 39, monthly: 190, total: 47880 },
  { age: 40, monthly: 200, total: 48000 },
];

function PensionCalculatorWidget() {
  const [ageInput, setAgeInput] = useState('30');
  const parsedAge = parseInt(ageInput, 10);

  const result = useMemo(() => {
    if (!parsedAge || parsedAge < 18 || parsedAge > 40) return null;
    return CONTRIBUTION_DATA.find((r) => r.age === parsedAge) ?? null;
  }, [parsedAge]);

  const isOutOfRange = ageInput !== '' && (!parsedAge || parsedAge < 18 || parsedAge > 40);

  return (
    <div className="my-6 rounded-2xl border-2 border-green-500 bg-green-50 dark:bg-green-900/20 p-5 md:p-6">
      <h3 className="font-black text-green-800 dark:text-green-300 text-base md:text-lg mb-3">
         Apni Umar Daalkar Hisaab Nikaalein
      </h3>
      <label htmlFor="pmkmy-age-input" className="block text-xs font-medium text-[var(--color-text-muted)] mb-1">
        Apni current age (18–40) daalein
      </label>
      <input
        id="pmkmy-age-input"
        type="number"
        min={18}
        max={40}
        value={ageInput}
        onChange={(e) => setAgeInput(e.target.value)}
        className="w-full md:w-40 px-3 py-2 rounded-lg border border-green-400 bg-white dark:bg-gray-800 text-[var(--color-text)] font-bold text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Jaise: 30"
      />

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-green-200 dark:border-green-800">
            <p className="text-[10px] uppercase tracking-wide text-[var(--color-text-muted)] mb-1">Har Mahine</p>
            <p className="text-xl font-black text-[var(--color-text)]">₹{result.monthly}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-green-200 dark:border-green-800">
            <p className="text-[10px] uppercase tracking-wide text-[var(--color-text-muted)] mb-1">60 Tak Total (Apna Hissa)</p>
            <p className="text-xl font-black text-[var(--color-text)]">₹{result.total.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-green-200 dark:border-green-800">
            <p className="text-[10px] uppercase tracking-wide text-[var(--color-text-muted)] mb-1">60+ Pension</p>
            <p className="text-xl font-black text-green-700 dark:text-green-400">₹3,000/mo</p>
          </div>
        </div>
      )}

      {isOutOfRange && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-3">
          Ye scheme sirf 18 se 40 saal ki age walon ke liye hai. Kripya isi range mein age daalein.
        </p>
      )}

      <p className="text-[11px] text-[var(--color-text-muted)] mt-3">
        Note: Sarkar aapke barabar hissa alag se apni taraf se jama karti hai — upar diya total sirf aapka personal yogdaan hai.
      </p>
    </div>
  );
}

const FAQS_DATA = [
  {
    q: '30 saal ki umar mein judne par 60 tak total kitna dena hoga?',
    a: '30 saal par entry rate ₹105 per mahina baithti hai. 360 mahino (30 saal) mein aapka apna hissa ₹37,800 ban jata hai, aur itna hi paisa sarkar ki taraf se alag se jama hota hai.',
  },
  {
    q: 'Sarkar sach mein barabar paisa dalti hai, ya sirf naam ka hai?',
    a: 'Nahi, ye real hai — isi wajah se scheme ko "co-contributory" kaha jata hai. Kisan jitna dega, Central aur State government milkar utna hi apni taraf se pension fund mein dalte hain, jo LIC ke through invest hota hai.',
  },
  {
    q: 'Ek baar rate lock ho jaye to badal sakte hain kya?',
    a: 'Nahi. Jis age mein enroll karte hain, usi ke hisaab se rate 60 saal tak fix rehta hai — na ghatta hai na badhta hai, mehngai se bhi koi farak nahi padta.',
  },
  {
    q: 'Beech mein ek installment miss ho jaye to?',
    a: 'Account inactive ho sakta hai, aur dobara chalu karne ke liye bacha hua paisa penalty ke saath bharna padta hai. Isliye zyadatar log NPCI auto-debit lagwa lete hain taaki ye jhanjhat hi na ho.',
  },
  {
    q: 'Saal mein ek baar lump-sum dekar bhi kaam chal sakta hai kya?',
    a: 'Abhi ke rules mein aisa koi provision nahi hai — payment structure poori tarah monthly cycle par based hai.',
  },
  {
    q: '18 saal se chhoti umar mein ya 40 ke baad apply kar sakte hain?',
    a: 'Nahi, entry sirf 18 se 40 saal ke beech hi allowed hai. Isse bahar ki age walon ke liye ye scheme applicable nahi hoti.',
  },
  {
    q: 'PM Kisan Samman Nidhi aur PM Kisan Maandhan ek hi scheme hai kya?',
    a: 'Bilkul alag hain. Samman Nidhi mein saal ke ₹6,000 seedha account mein aate hain, jabki Maandhan ek pension scheme hai jisme aap khud paisa jama karte hain aur 60 ke baad monthly pension milti hai. Dono ka fayda saath-saath liya ja sakta hai.',
  },
  {
    q: 'Subscriber ki death ho jaye to pariwar ko kya milta hai?',
    a: 'Agar death 60 saal se pehle ho jaye, to jeevansaathi is scheme ko wahi se continue kar sakte hain, ya jama ki gayi rakam interest ke saath wapas le sakte hain. 60 ke baad death hone par jeevansaathi ko 50% family pension milti rehti hai.',
  },
  {
    q: 'Registered mobile number ya bank account badalna ho to kya karein?',
    a: 'Nazdeeki CSC center jaakar ya PM-KMY portal mein login karke apna updated bank account aur mobile number seed karwaya ja sakta hai. Existing auto-debit mandate naye account ke liye dobara set karna padta hai.',
  },
  {
    q: 'Kya mahila kisano ke liye rate ya rules alag hain?',
    a: 'Nahi, contribution rate poori tarah age par based hai, gender par nahi. Male aur female kisan dono same table follow karte hain aur eligibility criteria bhi samaan rehte hain.',
  },
  {
    q: 'Kya PM-KMY subscriber dusri koi kisan-related scheme bhi le sakta hai?',
    a: 'Haan, PM-KMY lene se PM Kisan Samman Nidhi ya doosri farmer-welfare schemes ka fayda lena band nahi hota. Ye alag-alag purpose ke liye bani schemes hain aur inhe saath mein liya ja sakta hai, jab tak har scheme ki apni eligibility poori ho.',
  },
];

export default function PmKisanMaandhanPensionCalculator({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan Maandhan Pension Calculator: Umar Ke Hisaab Se Kitna Jama Karna Hoga",
              "description": "Apni age ke hisaab se jaanein PM Kisan Maandhan Yojana mein har mahine kitna dena hoga aur 60 ke baad ₹3000 pension kaise milegi — poora hisaab table aur example ke saath.",
              "author": {
                "@type": "Person",
                "name": AUTHOR_NAME,
                "url": AUTHOR_URL
              },
              "publisher": {
                "@type": "Organization",
                "name": "KisanStatus",
                "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.png" }
              },
              "datePublished": PUBLISHED,
              "dateModified": MODIFIED,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kisanstatus.com/maandhan/${article.slug}` }
            }
          ]
        }) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Pension Calculator</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Contribution Guide</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Pension Calculator: Umar Ke Hisaab Se Kitna Jama Karna Hoga
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/pension-calculator-hero.webp"
            alt="Farmer calculating monthly pension contribution with a chart showing age-wise amounts"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Apni Umar Daalkar Exact Rakam Jaanein
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            Khet-kheti se retirement ke baad fixed income kaha se aayegi — ye sawal har chhote aur seemant kisan ko kabhi na kabhi pareshan karta hai. PM Kisan Maandhan Yojana (PM-KMY) isi gap ko bharne ke liye bani hai: aap thodi rakam jama karte hain, sarkar utni hi apni taraf se dalti hai, aur poora paisa LIC manage karta hai. Neeche diye calculator mein apni age daalkar seedha exact rakam dekh lijiye.
          </p>
        </div>

        <PensionCalculatorWidget />

        <section className="mb-8">
          <SH>Ye Fund Kaam Kaise Karta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse pehla sawal yahi aata hai — itni chhoti rakam se itni badi pension kaise ban jaati hai? Wajah simple hai: paisa akela nahi jama hota. Kisan jo bhi de, utna (kai age groups mein usse zyada bhi) Central aur State sarkar milkar dalti hain. Dono hisse LIC ke pension fund mein invest hote hain, aur 60 ki age par ek fixed payout shuru ho jata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Practical baat: jitni jaldi entry hogi, utna kam bharna padega. 25 saal ki age mein judne par outflow ₹80 per mahina rehta hai, jabki 40 saal mein wahi target pura karne ke liye ₹200 per mahina dena padta hai — farak seedha double se zyada ka hai.
          </p>
          <WB>
            Ek baar age ke hisaab se rate fix ho gayi, to wo 60 saal tak same rehti hai — na mehngai se badhti hai, na kisi aur wajah se.
          </WB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Ye model dusri jagah bhi dekha jata hai — jaise EPF mein employer aur employee dono contribute karte hain — lekin PM-KMY ka faayda ye hai ki isme entry barrier bahut kam hai. Formal job na hone par bhi, sirf zameen ka record aur Aadhaar dikhakar koi bhi eligible kisan is structure ka hissa ban sakta hai. Fund ka poora record LIC ke system mein digitally maintain hota hai, isliye subscriber apna status kabhi bhi portal par check kar sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Hisaab Se Pehle: Kya Aap Join Kar Sakte Hain?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Calculator tabhi kaam ka hai jab aap scheme join kar sakte hon — entry window 18–40 saal ki hai aur zameen 2 hectare tak. Poori shartein aur documents alag checklist mein:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Eligibility Checklist Kholein →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>18 Se 40 Saal Tak — Har Age Ka Poora Hisaab</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pichle section mein kuch chuni hui ages dikhayi thi. Yahan har single saal (18 se 40 tak) ki rate ek saath di gayi hai, taaki table mein apni exact age dhoondhne ke liye idhar-udhar na jaana pade.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Har Mahine</th>
                  <th className="p-3 text-left">60 Tak Total</th>
                </tr>
              </thead>
              <tbody>
                {CONTRIBUTION_DATA.map((row, i) => (
                  <tr key={row.age} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{row.age} Years</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)] font-bold">₹{row.monthly}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">₹{row.total.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/contribution-chart-infographic.webp"
              alt="Infographic showing age-wise monthly contribution for PM Kisan Maandhan Yojana"
              width={800}
              height={400}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Jitni Jaldi Judenge, Utna Kam Dena Hoga
            </p>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Har age par 60 ki umar ke baad milne wali pension ek hi rehti hai — ₹3,000 per mahina. Yani entry age chahe kuch bhi ho, final payout same hai; sirf raasta pahunchne mein lagne wali rakam alag-alag hai. Isi wajah se experts hamesha kehte hain ki jitni kam age mein enroll karo, utna faayda milta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Khud Se Hisaab Lagana Ho To Ye Steps Try Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar upar wali table se bhi kisi ko manual formula samajhna hai — ya scheme kaise structure ki gayi hai ye jaanna hai — to ek 35 saal ki age ka example lekar dekhte hain:
          </p>
          <StepList>
            <SI n={1}>Current age note karein — is example mein 35 saal.</SI>
            <SI n={2}>60 mein se current age ghatayein: 60 − 35 = 25 saal.</SI>
            <SI n={3}>Saal ko mahino mein badlein: 25 × 12 = 300 mahine.</SI>
            <SI n={4}>35 saal ke liye tay rate (₹150) ko 300 se multiply karein.</SI>
            <SI n={5}>Result: ₹150 × 300 = ₹45,000 — 60 saal tak ka total apna hissa, aur sarkar isi ke barabar alag se jama karegi.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Isi se samajh aata hai ki 18 aur 40 saal ki entry mein itna farak kyun hai — jitna zyada waqt fund ko milta hai, per-mahina burden utna hi halka rehta hai. Note karne wali baat ye bhi hai ki rate table mein round figures mein nahi, balki actuarial calculation se decide ki gayi hai, isliye kisi age mein rate ka jump doosri age se thoda zyada ya kam lag sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kya Ye Yojana Sach Mein Fayde Ka Sauda Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har scheme ke apne plus-minus hote hain, aur Maandhan bhi isse alag nahi. Decision lene se pehle dono side dekh lena sahi rehta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-2">
            <strong className="text-[var(--color-text)]">Fayde ki taraf:</strong> sarkar barabar hissa daalti hai, rate ek baar fix hone ke baad kabhi nahi badhta, aur chhoti age mein shuru karne walon ke liye ye kisi bhi private pension plan se sasta pad jata hai. Ek aur badi baat — enrollment process kaafi simple hai aur isme koi medical test ya complicated paperwork nahi maanga jata.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong className="text-[var(--color-text)]">Dhyan rakhne wali baatein:</strong> beech mein scheme chhodne par nuksan ho sakta hai (interest kam milta hai ya sirf mool wapas milta hai, exit age par depend karta hai), aur agar kisi mahine paisa na ho to penalty lagti hai. Pension amount bhi fix ₹3,000 hi rehta hai — bhavishya mein mehngai badhne par ye badhega ya nahi, iski koi guarantee official documents mein nahi di gayi. Isliye join karne se pehle apni monthly capacity ko lambe samay ke liye confirm kar lena zaroori hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>APY Ke Numbers Se Compare Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Same ₹3000 pension ke liye APY mein aapko apni jeb se lagbhag dugna dena padta hai kyunki wahan government match nahi hai — dono ke numbers side-by-side comparison article mein hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">PMKMY vs APY Scorecard →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Pariwar Ka Hisaab Alag Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Death ke baad spouse ke paas kya options hain — scheme continue karna, corpus lena ya ₹1,500 family pension — iska pura ganit family pension rules wale article mein worked examples ke saath hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/family-pension-rules" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Family Pension Rules & Claim Process →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Details Update Karni Hon To</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Contribution jis account se kat raha hai use badalna ho, ya registered mobile number update karna ho — dono ke step-by-step process alag guides mein hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pmkmy-bank-account-change" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Bank Account Change Process →</Link>
            <Link href="/maandhan/pmkmy-grievance-complaint-helpline" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Helpline & Grievance Guide →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Calculate Karte Waqt Ye Galtiyan Na Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Registration se pehle apna hisaab lagate waqt kuch aam galtiyan bahut log kar dete hain, jo baad mein confusion create karti hain.
          </p>
          <StepList>
            <SI n={1}>Birthday se pehle wali age use kar lena — enrollment ke waqt "nearest birthday age" ka niyam lagta hai, isliye exact last-birthday age hi table mein check karein.</SI>
            <SI n={2}>Ye sochna ki total jama rakam hi pension ka corpus hai — asal corpus isse double hota hai kyunki sarkar ka hissa alag se judta hai.</SI>
            <SI n={3}>Auto-debit set na karna aur har mahine manually yaad rakhne par depend karna — ek miss hone se dobara penalty ke saath bharna padta hai.</SI>
            <SI n={4}>Landholding record update na rakhna — eligibility 2 hectare tak ki zameen se judi hai, isliye khatauni record current honi chahiye.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Ye chaaron galtiyan chhoti lagti hain, lekin inme se koi bhi ek baad mein exit ke waqt ya pension shuru hone ke waqt paisa kam milne ya delay hone ki wajah ban sakti hai. Isliye enrollment se pehle in points ko ek baar khud check kar lena behtar rehta hai, bajaye baad mein CSC operator ke paas baar-baar chakkar lagane ke.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Frequently Asked Questions (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Maandhan Calculator FAQ" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Calculator Ka Asli Sabak: Har Birthday Mehenga Hai</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Upar ke calculations mein ek pattern chhupa hai jo table dekhe bina nahi dikhta: 25 se 40 ke beech monthly contribution ₹80 se ₹200 ho jaata hai — yaani wahi ₹3,000 pension, dhaai guna daam par. Enrollment ki umar hi is scheme ka asli "interest rate" hai. Calculator se apni exact umar ka slab nikaal lein aur usi ko final maan kar plan karein — andaaze ka slab aur asli slab mein farak aksar form bharte waqt hi pata chalta hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Slab confirm ho jaye toh <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="underline text-blue-600 dark:text-blue-400 font-medium">registration</Link> se pehle nominee ka naam bhi tay kar lein — spouse continuation aur ₹1,500 family pension ka poora ganit usi entry par depend karta hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Check Contribution Status"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Pension Se Jude Aur Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} bioKey="PmKisanMaandhanPensionCalculator" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: 'Registration' },
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: 'Eligibility' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
