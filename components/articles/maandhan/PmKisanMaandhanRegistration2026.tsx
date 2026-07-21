'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

// ✅ FIX 1: MODIFIED date corrected to past date (not future)
const PUBLISHED = '2024-01-15T08:00:00+05:30';
const MODIFIED = '2026-07-21T08:00:00+05:30';

const RELATED_CARDS = [
  { 
    slug: 'pm-kisan-maandhan-eligibility-documents', 
    title: 'Eligibility & Documents', 
    desc: 'Detailed checklist of documents and exact eligibility rules.',
    emoji: '📄' 
  },
  { 
    slug: 'pm-kisan-maandhan-pension-calculator', 
    title: 'Pension Calculator', 
    desc: 'Calculate exact monthly contribution based on your current age.',
    emoji: '🧮' 
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
    q: 'Maandhan Yojana ke liye umar (age) kya honi chahiye?',
    a: 'Is scheme ka fayda uthane ke liye kisan ki umar 18 se 40 saal ke beech honi anivarya hai. 40 saal se upar ke kisan isme naya registration nahi kara sakte.',
  },
  {
    q: 'Kya main Maandhan aur Atal Pension Yojana (APY) dono le sakta hoon?',
    a: 'Nahi. Sarkar ke niyam ke mutabik, ek kisan ek waqt mein sirf ek hi pension scheme (APY ya Maandhan) ka labh utha sakta hai.',
  },
  {
    q: 'Registration ke liye bank account zaroori hai?',
    a: 'Haan, bilkul. Aapka bank account Aadhaar se link (NPCI seeded) hona chahiye taaki monthly contribution aur future pension seedha aapke account mein aa sake.',
  },
  {
    q: 'Agar kisan ki mrityu ho jaye toh pension kisko milegi?',
    a: 'Agar pension shuru hone se pehle ya baad mein kisan ki mrityu ho jati hai, toh unka spouse (patni/pati) scheme mein shamil ho sakta hai aur aage ka contribution dekar pension le sakta hai.',
  },
  {
    q: 'CSC center par registration karwane mein kitna kharcha aata hai?',
    a: 'CSC par registration bilkul free hai. Wo sirf aapse pehla monthly contribution (₹55 se ₹200) jama karne ko kahenge. Koi extra "registration fee" nahi deni hai.',
  },
  {
    q: 'Kya pension direct bank account mein aata hai?',
    a: 'Haan, 60 saal ki umar puri hone ke baad ₹3,000 ki monthly pension seedha aapke linked bank account mein DBT ke zariye aayegi.',
  },
];

export default function PmKisanMaandhanRegistration2026({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-reg-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan Maandhan Registration 2026: ₹3000 Pension Apply Process",
              "description": "PM Kisan Maandhan Yojana online registration ka pura process, eligibility, aur documents. Sirf ₹55/month mein ₹3000 pension kaise lein.",
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
            <span className="text-white font-bold">Registration Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>
          
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Registration: ₹3000 Pension Apply Process
          </h1>
          
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/maandhan/registration-hero.webp"
            alt="Farmer at CSC center filling pension registration form with operator assistance"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Budhape Ki Suraksha — Sirf ₹55 Mahina Se Shuru
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> Maandhan Yojana mein registration ke liye kisan ki umar 18-40 saal aur zameen 2 hectare se kam honi chahiye. Aap nazdiki CSC center jakar ya online portal par apply kar sakte hain. Shuruwat mein sirf ₹55 mahina dena padta hai, aur 60 saal ki umar ke baad ₹3,000 mahina pension milti hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Maandhan Yojana Aakhir Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dekho bhai, kheti mein mehnat toh bohot hai, lekin jab umar dhhal jati hai toh income kam ho jati hai. Isi baat ko samajh kar sarkar ne ye national pension scheme shuru ki jo chhote aur seemant (marginal) kisanon ko budhape mein financial security deti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iska sabse bada fayda ye hai ki isme kisan ko apni jeb se bohot kam paisa lagana padta hai. Baaki hissa sarkar aur state government deti hai. Aur jab aap 60 saal ke ho jaate hain, toh har mahine ₹3,000 ki pension milti hai. (Eligibility aur documents ki puri list hamare <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="underline text-blue-600 dark:text-blue-400 font-medium">dedicated eligibility guide</Link> mein hai).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-2xl mb-1">₹3,000</p>
              <p className="text-xs text-[var(--color-text-muted)]">Monthly Pension (60+ Age)</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-2xl mb-1">18-40</p>
              <p className="text-xs text-[var(--color-text-muted)]">Eligible Age Group</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-2xl mb-1">2 Hectare</p>
              <p className="text-xs text-[var(--color-text-muted)]">Max Land Limit</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kaun Apply Kar Sakta Hai? (Eligibility Criteria)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har kisan is scheme ka hissa nahi ban sakta. Sarkar ne kuch strict rules banaye hain taaki fayda unhi ko mile jinhe sach mein zaroorat hai.
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-green-600 dark:text-green-400 mb-1">✅ Umra (Age)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aapki umar 18 se 40 saal ke beech honi chahiye.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-green-600 dark:text-green-400 mb-1">✅ Zameen Ki Seema</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aapke paas 2 hectare (lagbhag 5 acre) ya usse kam zameen honi chahiye.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-green-600 dark:text-green-400 mb-1">✅ PM Kisan Beneficiary</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aapka naam <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-blue-600 dark:text-blue-400 font-medium">PM Kisan ki list</Link> mein hona zaroori hai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-600 dark:text-red-400 mb-1">❌ Kaun Apply Nahi Kar Sakta?</p>
              <p className="text-xs text-[var(--color-text-muted)]">Jo kisan pehle se kisi aur pension scheme ka labh le raha hai, wo isme register nahi ho sakta.</p>
            </div>
          </div>
          
          <IB>
            <strong>CSC Ground Reality:</strong> Bahut se kisan joint family ki zameen par apply karte hain. Yaad rakhein, agar zameen baap ya family head ke naam par hai, toh <em>unki</em> umar consider hogi, aapki nahi. Agar baap ki umar 40 se upar hai, toh application turant reject ho jayegi. Isliye pehle Khatauni mein apna naam alag karwayein, phir apply karein.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Registration Ke Liye Kaun Se Documents Chahiye?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC center jane se pehle ye documents apne paas zaroor rakhein:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { doc: 'Aadhaar Card', note: 'Mobile number link hona zaroori hai.' },
              { doc: 'Bank Passbook', note: 'Aadhaar seeding (NPCI) honi chahiye.' },
              { doc: 'Mobile Phone', note: 'OTP verify karne ke liye.' },
              { doc: 'Land Record (Khatauni)', note: 'Zameen ke size ka proof.' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📄 {doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>

          {/* IMAGE 2: Documents Checklist Visual */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/required-documents.webp"
              alt="Aadhaar card, bank passbook, mobile phone and land records arranged for registration"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Registration Ke Liye Zaroori Documents
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Registration Kaise Karein? (2 Tarike)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aap is scheme mein 2 tarikon se jud sakte hain:
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 1: CSC Center Se (Sabse Aasan)</h3>
          <StepList>
            <SI n={1}>Apna Aadhaar, Bank Passbook aur Mobile lekar CSC jayein. Subah 10-11 baje jayein — dopahar mein rush hota hai.</SI>
            <SI n={2}>Operator ko kahein ki "<strong>Maandhan Yojana</strong> mein register karna hai".</SI>
            <SI n={3}>Operator aapka Aadhaar number daal kar details verify karega. Agar OTP nahi aata, toh mobile number Aadhaar se link karwayein.</SI>
            <SI n={4}>Aapki umar ke hisaab se monthly contribution batayega (jaise 18 saal ke liye ₹55, 30 saal ke liye ₹100).</SI>
            <SI n={5}>Pehla contribution UPI ya cash se pay karein. Operator se receipt zaroor lein.</SI>
            <SI n={6}>Aapke mobile par confirmation SMS aayega — iska screenshot le kar save kar lein. Ye aapka proof hai.</SI>
          </StepList>

          <WB>
            <strong>Bachne Ki Tip:</strong> CSC operators kabhi-kabhi "service charge", "form fee" ya "processing charge" ke naam par ₹100-200 extra maang lete hain. Yaad rakhein, registration bilkul free hai. Aapko sirf apna pehla monthly contribution (jo umar ke hisaab se ₹55 se ₹200 ke beech hota hai) dena hota hai. Agar koi zyada maange, toh turant 1800-300-8380 (CSC helpline) par complaint karein.
          </WB>

          {/* IMAGE 3: CSC Registration Process */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/csc-registration-process.webp"
              alt="Farmer submitting documents at CSC counter for pension scheme registration"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC Center Par Registration — Sirf 10 Minute Ka Kaam
            </p>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 2: Online Portal / App Se</h3>
          <StepList>
            <SI n={1}>Google Play Store se "PM Kisan Maandhan App" download karein.</SI>
            <SI n={2}>App khol kar "New Registration" par click karein. Agar app nahi milta, toh pmkisan.gov.in par jaayein.</SI>
            <SI n={3}>Aadhaar number daalein aur OTP verify karein. Agar OTP nahi aata, toh mobile number Aadhaar se link karein.</SI>
            <SI n={4}>Form mein apni zameen ki details (Khasra/Khatauni number) aur bank account ki jankari bharein.</SI>
            <SI n={5}>Monthly contribution ka amount select karke UPI se payment karein.</SI>
            <SI n={6}>Form submit kar dein. Aapke mobile par registration confirmation SMS aayega — isko save kar lein.</SI>
          </StepList>

          {/* IMAGE 4: Online App Registration */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/online-app-registration.webp"
              alt="Mobile app interface showing step-by-step online registration process"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Ghar Baithe Mobile App Se Registration
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Monthly Contribution: Umar Ke Hisaab Se</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jitni jaldi aap join karenge, utna hi kam monthly paisa dena padega. Upar diye gaye table mein age-wise contribution diya gaya hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Entry Age</th>
                  <th className="p-3 text-left">Monthly Contribution</th>
                  <th className="p-3 text-left">Total (Till 60)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['18 Years', '₹55', '₹13,200'],
                  ['25 Years', '₹75', '₹27,000'],
                  ['30 Years', '₹100', '₹36,000'],
                  ['35 Years', '₹140', '₹42,000'],
                  ['40 Years', '₹200', '₹48,000'],
                ].map(([age, monthly, total], i) => (
                  <tr key={age} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{age}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)] font-bold">{monthly}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* IMAGE 5: Contribution Infographic */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/contribution-table-infographic.webp"
              alt="Visual chart showing monthly contribution amounts from age 18 to 40 years"
              width={800}
              height={400}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Age-wise Contribution Breakdown
            </p>
          </div>

          <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mb-4">
            Exact calculation ke liye hamara <Link href="/maandhan/pm-kisan-maandhan-pension-calculator" className="underline text-blue-600 dark:text-blue-400 font-medium">Pension Calculator</Link> use karein.
          </p>
        </section>

        {/* ✅ FIXED SECTION 1: Removed fake testimonial, kept factual comparison */}
        <section className="mb-8">
          <SH>Maandhan vs APY: Kya Aapki Pension Scheme Sahi Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kisan bhaiyon mein aksar ye confusion hoti hai ki <strong>Atal Pension Yojana (APY)</strong> aur <strong>Maandhan Yojana</strong> mein kya farq hai. Dono pension schemes hain, lekin inka structure alag hai. 
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Maandhan Yojana</strong> specifically chhote aur seemant kisanon ke liye design ki gayi hai, jahan central aur state government dono ka contribution milta hai. Wahi <strong>APY</strong> sabhi citizens ke liye open hai, lekin usme kisanon ke liye koi extra state subsidy nahi hoti. Isliye, agar aap PM Kisan beneficiary hain, toh Maandhan aapke liye zyada faydemand hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">Maandhan Yojana</th>
                  <th className="p-3 text-left">Atal Pension Yojana (APY)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Target Group', 'Only Kisans', 'All Citizens'],
                  ['Max Land Limit', '2 Hectare', 'No Limit'],
                  ['Monthly Contribution', '₹55 - ₹200', 'Varies by Age & Pension Slab'],
                  ['Pension Amount', 'Fixed ₹3,000', '₹1,000 - ₹5,000'],
                  ['Additional Benefits', 'State Govt. Subsidy (for eligible)', 'No Extra Subsidy'],
                ].map(([feature, maandhan, apy], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{feature}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)] font-bold">{maandhan}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{apy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Important Tip:</strong> Agar aap dono schemes mein registered hain, toh sarkar aapke registration ko <em>reject kar degi</em>. Isliye pehle check karein ki aap kisi bhi scheme mein registered hain ya nahi.
          </p>
        </section>

        {/* ✅ FIXED SECTION 2: Removed fake anecdote & fake contact details. Added official links. */}
        <section className="mb-8">
          <SH>Registration Mein Dikkat Aaye Toh Kahan Karein Complaint?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aapki registration mein koi dikkat aati hai ya application zyada dinon tak pending hai, toh aapko apne state ke nodal officer ya district agriculture office se sampark karna chahiye. Sarkar ne har state ke liye alag se grievance redressal mechanism banaya hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aap official PM Kisan portal par jaakar apne state ke specific nodal officer ki updated contact details aur email ID check kar sakte hain. Complaint karte waqt apna <strong>Registration Number</strong> aur <strong>Application Date</strong> zaroor mention karein taaki aapki problem jaldi track aur resolve ho sake.
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">🔗 Official Grievance Links:</p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-1">
              <li><Link href="https://pmkisan.gov.in/Grievance.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">PM Kisan Grievance Portal</Link></li>
              <li><Link href="https://pmkisan.gov.in/NodalOfficers.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">State-wise Nodal Officers List</Link></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes</SH>
          
          {/* IMAGE 6: Bank Seeding Warning */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/maandhan/bank-passbook-seeding.webp"
              alt="Bank passbook showing NPCI seeding stamp for direct benefit transfer"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Bank Account NPCI Seeding Zaroori Hai
            </p>
          </div>

          <div className="space-y-3">
            {[
              { 
                mistake: 'Mobile Number Aadhaar Se Link Nahi', 
                fix: 'OTP verify nahi hoga. Pehle UIDAI center jakar mobile link karwayein.' 
              },
              { 
                mistake: 'Bank Account NPCI Seeded Nahi', 
                fix: 'Branch jakar DBT ke liye Aadhaar link karwayein.' 
              },
              { 
                mistake: 'Zameen 2 Hectare Se Zyada', 
                fix: 'Khatauni check karein.' 
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Fix:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            FAQs
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Maandhan Registration FAQ" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Bhai, ye scheme ek bohot hi achhi hai. Agar aapki umar 40 saal se kam hai aur zameen 2 hectare se kam hai, toh aaj hi CSC jakar registration kara lein. Deri karne se monthly contribution badh jata hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Official Website"
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
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: '📄 Eligibility' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: '🧮 Calculator' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
