'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-21T08:00:00+05:30';
const MODIFIED = '2026-07-22T08:00:00+05:30';

const RELATED_CARDS = [
  { 
    slug: 'pm-kisan-maandhan-registration-2026', 
    title: 'Complete Registration Guide', 
    desc: 'Step-by-step process to apply online or at a CSC center.',
    emoji: '📝' 
  },
  { 
    slug: 'pm-kisan-maandhan-eligibility-documents', 
    title: 'Eligibility & Documents', 
    desc: 'Detailed checklist of documents and exact eligibility rules.',
    emoji: '📄' 
  },
  { 
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules', 
    title: 'Withdrawal & Refund Rules', 
    desc: 'What happens to your money if you exit the scheme early?',
    emoji: '💸' 
  },
];

const FAQS_DATA = [
  {
    q: '30 saal ki umar mein join karne par total kitna paisa dena padega?',
    a: 'Agar aap 30 saal ki umar mein join karte hain, toh aapko har mahine ₹100 dene honge. 60 saal tak (30 saal ya 360 mahine) mein aapka total contribution ₹36,000 hoga.',
  },
  {
    q: 'Kya sarkar sach mein utna hi paisa deti hai jitna kisan deta hai?',
    a: 'Haan, aur kabhi-kabhi usse zyada bhi. Central aur State government milkar aapke contribution ke barabar ya usse thoda zyada amount aapke pension fund mein daalti hain.',
  },
  {
    q: 'Agar main 40 saal ki umar mein join karta hoon, toh kya mujhe ₹3,000 pension milegi?',
    a: 'Haan, bilkul. 40 saal ki umar mein join karne par monthly contribution ₹200 hoga, lekin 60 saal ki umar puri hone par aapko fixed ₹3,000 mahina hi milega.',
  },
  {
    q: 'Kya monthly contribution amount badh sakta hai?',
    a: 'Nahi. Ek baar jab aapki umar ke hisaab se monthly contribution fix ho jata hai, toh wo 60 saal ki umar tak same rehta hai.',
  },
  {
    q: 'Pension ka paisa kis tarah se calculate hota hai?',
    a: 'Ye LIC ke pension fund management rules par based hai. Aapka paisa aur sarkar ka paisa milkar ek corpus banata hai, jisse 60 saal ke baad monthly ₹3,000 generate hote hain.',
  },
  {
    q: 'Kya main apna contribution online check kar sakta hoon?',
    a: 'Haan, PM Kisan Maandhan portal ya mobile app par login karke aap apna total accumulated corpus aur ab tak ki gayi payments dekh sakte hain.',
  },
];

// ✅ YEH LINE SABSE ZARURI HAI: EXPORT DEFAULT
export default function PmKisanMaandhanPensionCalculator({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-calculator-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan Maandhan Pension Calculator: Age Ke Hisaab Se Kitna Contribution Dena Hoga",
              "description": "PM Kisan Maandhan Yojana ka complete pension calculator guide. Janie apni umar ke hisaab se monthly contribution aur 60 saal ke baad ₹3000 pension ka exact hisaab.",
              "author": { 
                "@type": "Organization", 
                "name": "KisanStatus Team", 
                "url": "https://kisanstatus.com/about" 
              },
              "publisher": { 
                "@type": "Organization", 
                "name": "KisanStatus", 
                "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.png" } 
              },
              "datePublished": PUBLISHED,
              "dateModified": MODIFIED,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kisanstatus.com/maandhan/${article.slug}` }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS_DATA.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            }
          ]
        })}
      </Script>

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
            PM Kisan Maandhan Pension Calculator: Age Ke Hisaab Se Kitna Contribution Dena Hoga
          </h1>
          
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/maandhan/pension-calculator-hero.webp"
            alt="Farmer calculating monthly pension contribution with a chart showing age-wise amounts"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Apni Umar Ke Hisaab Se Exact Contribution Jaanein
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> PM Kisan Maandhan mein monthly contribution aapki <strong>entry age</strong> par depend karta hai. 18 saal ki umar mein join karne par sirf ₹55 mahina dena hota hai, jabki 40 saal ki umar mein join karne par ₹200 mahina dena hoga. 60 saal ki umar puri hone par, aapko fixed ₹3,000 mahina pension milegi.
          </p>
        </div>

        <section className="mb-8">
          <SH>Maandhan Calculator Ka Hissaab Kaise Kaam Karta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan sochte hain ki "₹55 mahina dekar ₹3,000 kaise mil sakte hain?" Iska jawab simple hai: Ye ek <strong>co-contributory pension scheme</strong> hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iska matlab hai ki aap jo paisa dete hain, uske barabar paisa Central aur State government milkar aapke pension fund mein daalti hain. Ye dono paise milkar LIC ke paas invest hote hain. Jab aap 60 saal ke hote hain, toh ye fund aapko har mahine ₹3,000 dene ke liye sufficient ho jata hai.
          </p>
          <WB>
            <strong>Important Note:</strong> Aapka monthly contribution amount ek baar fix ho jane ke baad <strong>kabhi nahi badhta</strong>. Chahe 10 saal baad mehngai kitni bhi badh jaye, aapko wahi purana amount dena hoga.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Age-Wise Monthly Contribution Chart (2026 Updated)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Neeche di gayi table mein har umar ke liye exact monthly contribution aur 60 saal tak ka total amount diya gaya hai:
          </p>
          
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Entry Age</th>
                  <th className="p-3 text-left">Monthly Contribution</th>
                  <th className="p-3 text-left">Total (Till 60)</th>
                  <th className="p-3 text-left">Pension (60+ Age)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['18 Years', '₹55', '₹27,720', '₹3,000/mo'],
                  ['20 Years', '₹60', '₹28,800', '₹3,000/mo'],
                  ['25 Years', '₹75', '₹31,500', '₹3,000/mo'],
                  ['30 Years', '₹100', '₹36,000', '₹3,000/mo'],
                  ['35 Years', '₹140', '₹42,000', '₹3,000/mo'],
                  ['40 Years', '₹200', '₹48,000', '₹3,000/mo'],
                ].map(([age, monthly, total, pension], i) => (
                  <tr key={age} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{age}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)] font-bold">{monthly}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{total}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{pension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/contribution-chart-infographic.webp"
              alt="Infographic showing age-wise monthly contribution for PM Kisan Maandhan Yojana"
              width={800}
              height={400}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Jitni Jaldi Join Karenge, Utna Kam Monthly Paisa Dena Hoga
            </p>
          </div>

          <IB>
            <strong>Pro Tip:</strong> Agar aapki umar 18-25 saal ke beech hai, toh ye scheme aapke liye sabse zyada faydemand hai. Sirf ₹55-₹75 mahina dekar aap apne budhape ko secure kar sakte hain.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Manual Calculation Kaise Karein? (Step-by-Step)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aapko table dekhne ke bajaye khud calculate karna hai, toh ye simple formula use karein:
          </p>
          <StepList>
            <SI n={1}>Apni current umar (age) note karein (Example: 28 saal).</SI>
            <SI n={2}>60 mein se apni current umar ghata dein (60 - 28 = 32 saal).</SI>
            <SI n={3}>Ab in 32 saalon ko mahino mein badlein (32 x 12 = 384 mahine).</SI>
            <SI n={4}>28 saal ki umar ke liye monthly contribution (maan lijiye ₹90) ko 384 se guna (multiply) kar dein.</SI>
            <SI n={5}>Result: ₹90 x 384 = ₹34,560. Ye aapka total contribution hoga 60 saal tak.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Common Confusions Aur Unke Solutions</SH>
          <div className="space-y-3">
            {[
              { 
                confusion: 'Mera contribution amount har saal badh jayega?', 
                solution: 'Bilkul nahi. Ek baar jo amount aapki age ke hisaab se fix ho gaya, wo 60 saal tak same rahega.' 
              },
              { 
                confusion: 'Agar main beech mein paisa dena band kar doon toh?', 
                solution: "Aisa karne par aapka account 'inactive' ho jayega. Penalty ke saath purana paisa jama karke hi account dobara active hoga." 
              },
              { 
                confusion: 'Kya mujhe ₹3,000 ke alawa koi bonus milega?', 
                solution: 'Nahi, scheme ke tahat fixed ₹3,000 mahina hi milta hai. Lekin agar kisan ki mrityu ho jati hai, toh spouse ko pension ka 50% (₹1,500) family pension ke roop mein milta hai.' 
              },
            ].map(({ confusion, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-amber-600 dark:text-amber-400 mb-2">❓ {confusion}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Sachai:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Frequently Asked Questions (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Maandhan Calculator FAQ" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat (Bottom Line)</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Bhai, hisaab bilkul clear hai: jitni jaldi aap is scheme se judenge, aapko utna hi kam monthly paisa dena hoga. 18 saal ki umar mein sirf ₹55 mahina ek bohot chhoti rakam hai, lekin 60 saal ki umar mein ye ₹3,000 mahina aapke liye ek badi rahath ban sakta hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Agar aapne abhi tak <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="underline text-blue-600 dark:text-blue-400 font-medium">registration</Link> nahi karwaya hai, toh aaj hi apne documents check karein aur apply karein.
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
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link 
                key={card.slug} 
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
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

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: '📝 Registration' },
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: '📄 Eligibility' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}