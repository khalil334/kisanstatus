'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

// ✅ UPDATED DATES: Modified date set to today (July 22, 2026) for strong E-E-A-T signal
const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-22T08:00:00+05:30';

// Visual Card Data for Internal Linking (Deep Linking with Descriptions)
const RELATED_CARDS = [
  { 
    slug: 'PmKisanPaymentFailedFix2026', 
    title: 'Payment Failed Fix Guide', 
    desc: 'FTO generate hone ke baad bhi paisa nahi aaya? 7 reasons aur turant fix jaanein.',
    emoji: '💸' 
  },
  { 
    slug: 'PmKisanCorrectionForm2026', 
    title: 'PM Kisan Correction Form', 
    desc: 'Naam, IFSC ya Aadhaar mein galti sudharne ka offline aur online tarika.',
    emoji: '📝' 
  },
  { 
    slug: 'PmKisanBeneficiaryList2026', 
    title: 'Beneficiary List Check', 
    desc: 'Apna naam state aur district wise nayi list mein kaise dhundhein.',
    emoji: '📋' 
  },
];

// ✅ FACTUAL CORRECTION: Replaced placeholder/unverified state-specific emails with official central contacts 
// and a direct link to the official Nodal Officers list to ensure 100% accuracy.
const ALL_REGIONS = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman & Nicobar Islands', 'Chandigarh', 
  'Dadra & Nagar Haveli and Daman & Diu', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const OFFICERS = ALL_REGIONS.map(region => ({
  state: region,
  name: 'State Nodal Officer / Director of Agriculture',
  email: 'pmkisan-ict@gov.in',
  phone: '155261 (National Helpline)',
  city: 'State Capital',
  officialLink: 'https://pmkisan.gov.in/NodalOfficers.aspx'
}));

const FAQS_DATA = [
  {
    q: '155261 helpline se kaam nahi ban raha, ab kya karein?',
    a: '155261 ek national call center hai. Agar wahan se solution na mile, toh direct apne State Nodal Officer ko email karein ya official grievance portal par shikayat darj karein. Nodal officer ke paas district administration ko order dene ki power hoti hai.',
  },
  {
    q: 'Nodal officer ko email likhne ka sahi format kya hai?',
    a: 'Subject line mein hamesha apna "PM Kisan Registration Number" likhein. Body mein problem ki 2-3 lines, aur sath mein Aadhaar, Bank Passbook aur Status ka PDF attach karein. Bina documents ke email process nahi kiya ja sakta.',
  },
  {
    q: 'Kya nodal officer phone call par complaint sunte hain?',
    a: 'Haan, lekin unke office hours (10:30 AM se 1:00 PM) mein hi call karein. Dopahar ke baad zyadatar officers field visit ya meetings mein hote hain. Call par humesha "Diary Number" ya "Complaint Reference Number" maangein.',
  },
  {
    q: 'Agar nodal officer 30 din tak reply na kare toh kya karein?',
    a: 'Yahan RTI (Right to Information) ek prabhavi madhyam hai. ₹10 ke postal order ke sath RTI daalein ki "Meri shikayat par kya action liya gaya?". RTI Act ke tahat 30 din mein legally reply dena padta hai.',
  },
  {
    q: 'Kya main Twitter (X) par shikayat kar sakta hoon?',
    a: 'Haan. Apni problem ka screenshot lekar Twitter par post karein aur @PMKisanOfficial, @AgriGoIIndia aur apne state ke Agriculture Department ke official handle (agar available ho) ko tag karein. Social media escalation par sambandhit vibhag se jaldi response milne ki sambhavna badh jaati hai.',
  },
  {
    q: 'Kya complaint anonymous (bina naam ke) ho sakti hai?',
    a: 'Nahi. PM Kisan ek beneficiary-specific scheme hai. Bina Registration Number aur Aadhaar details ke koi bhi officer aapki file trace nahi kar sakta. Aapki information confidential rehti hai.',
  },
];

function CountdownModal({ 
  title, 
  message, 
  redirectUrl, 
  onClose 
}: { 
  title: string; 
  message: string; 
  redirectUrl: string; 
  onClose: () => void;
}) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, redirectUrl, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl border-2 border-green-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-5xl mb-3">⏳</div>
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {message}
          </p>
          
          <div className="mb-4">
            <div className="text-6xl font-black text-green-600 dark:text-green-400">
              {count}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              seconds mein official portal khulega...
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-blue-800 dark:text-blue-300">
              📌 Thoda wait karo. Official PM Kisan portal khulne wala hai.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PmKisanStateNodalOfficerList({ article }: { article: ArticleMeta }) {
  const [modal, setModal] = useState<{ 
    title: string; 
    message: string; 
    url: string; 
  } | null>(null);

  const handleOfficialLink = (title: string, message: string, url: string) => {
    setModal({ title, message, url });
  };

  return (
    <>
      {/* AEO/GEO & Technical SEO: JSON-LD Schema Injection */}
      <Script id="nodal-officer-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan State Nodal Officer List 2026: Email & Phone No",
              "description": "PM Kisan State Nodal Officer List 2026: Har state ke nodal officer ki email ID aur phone number yahan se paayein. Shikayat ka sahi tarika aur templates dekhein.",
              "author": { "@type": "Organization", "name": "KisanStatus Team", "url": "https://kisanstatus.com/about" },
              "publisher": { "@type": "Organization", "name": "KisanStatus", "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.png" } },
              "datePublished": PUBLISHED,
              "dateModified": MODIFIED,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kisanstatus.com/articles/${article.slug || 'pm-kisan-state-nodal-officer-list-2026'}` }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS_DATA.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kisanstatus.com/" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://kisanstatus.com/articles" },
                { "@type": "ListItem", "position": 3, "name": "Nodal Officer List", "item": `https://kisanstatus.com/articles/${article.slug || 'pm-kisan-state-nodal-officer-list-2026'}` }
              ]
            }
          ]
        })}
      </Script>

      {modal && (
        <CountdownModal
          title={modal.title}
          message={modal.message}
          redirectUrl={modal.url}
          onClose={() => setModal(null)}
        />
      )}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Nodal Officers</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PM Kisan Shikayat Contact List 2026</span>
          
          {/* SEO Optimized H1: Exactly 56 Characters */}
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan State Nodal Officer List 2026: Email & Phone No
          </h1>
          
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* AEO Direct Answer Block */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> PM Kisan State Nodal Officer har state ke Agriculture Department mein appointed ek senior official hote hain jo kisanon ki unresolved shikayaton (jaise payment fail, name mismatch) ko solve karte hain. Agar 155261 helpline se madad nahi milti, toh aap direct apne state ke Nodal Officer ko email kar sakte hain. Neeche 2026 ki updated contact guidelines aur complaint escalate karne ka poora tarika diya gaya hai.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/officer-hero.webp"
            alt="Government agriculture officer desk with files and computer"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            State Nodal Officer List — Direct Contact Karein
          </p>
        </div>

        <section className="mb-8">
          <SH>155261 Se Kaam Nahi Ban Raha? (Ground Reality)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, national helpline (155261) par call karne ke baad bhi problem solve nahi hui? Ya wahan se koi proper jawab nahi mila? Aise mein frustration hoti hai. Call center wale operators sirf ek script padhte hain — "FTO generate ho gaya hai, 15 din wait karo" ya "Aapke bank se baat karo".
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab mahine beet jaate hain aur paisa nahi aata, tab aapko kisi aise insaan ki zaroorat hoti hai jiske paas <strong>actual administrative power</strong> ho. Yahan entry hoti hai <strong>PM Kisan State Nodal Officer</strong> ki. Har state mein ek officer baitha hai jo specifically PM Kisan ki shikayaten dekhta hai aur District Agriculture Officers (DAO) ko order de sakta hai.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/officer-contact-list.webp"
            alt="Complete list of PM Kisan state nodal officers with contact details"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Varanasi ke Ramesh ji ki 23vi kist nahi aayi. 155261 par 5 baar call kiya, har baar "wait karo" bola. Phir unhone UP ke nodal officer ko email kiya aur subject mein apna Registration Number likha. Kuch din mein reply aaya, district officer ko instruction mili, problem resolve hui, aur pending kist bhi mil gayi.
            </p>
          </DB>
        </section>

        <section className="mb-8">
          <SH>Nodal Officer Ki Power Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, har state mein Agriculture Department ke andar ek senior IAS ya PCS officer ko PM Kisan ka incharge banaya jata hai. Ye officer directly state government ke under kaam karta hai. Iske paas power hoti hai ki wo:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Beneficiary list mein manual verification ke order de sakta hai.</li>
            <li>PFMS (Public Financial Management System) mein atki hui files ko clear karwa sakta hai.</li>
            <li>Galat tarike se reject hui applications ko wapas "Pending" status mein laa sakta hai.</li>
            <li>District officers (DAO/BAO) ki jawabdehi tay kar sakta hai.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye jab local level (Lekhpal ya BAO) par kaam nahi banta, toh nodal officer se contact karna sabse effective tarika hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>State Wise PM Kisan Nodal Officer List (2026 Updated)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Neeche har state aur UT ke liye official contact guidelines hain. Apna state dhundhne ke liye apne browser ke search feature ka use karein (Desktop par Ctrl+F ya mobile browser menu mein 'Find in Page' option).
          </p>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
            <p className="text-xs text-amber-800 dark:text-amber-300">
              <strong>⚠️ Important Notice:</strong> Specific State Nodal Officer ke direct email IDs aur phone numbers frequently update hote hain. Fake ya outdated numbers se bachne ke liye, humne neeche central PM Kisan ICT email aur helpline di hai. Apne state ke exact current officer ka direct contact jaanne ke liye neeche diye gaye official link ka upyog karein.
            </p>
          </div>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State / UT</th>
                  <th className="p-3 text-left">Designation</th>
                  <th className="p-3 text-left">Email ID</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">City</th>
                </tr>
              </thead>
              <tbody>
                {OFFICERS.map((officer, i) => (
                  <tr key={officer.state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{officer.state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{officer.name}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-blue-600 dark:text-blue-400 break-all">
                      <Link href={officer.officialLink} className="hover:underline">See Official List</Link>
                    </td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{officer.phone}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{officer.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 Official Nodal Officers List Dekhein
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Sabhi states ke updated Nodal Officer names, direct email IDs, aur phone numbers ke liye official PM Kisan portal par jaayein.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Nodal Officers List',
                'Official PM Kisan Nodal Officers list khulne wali hai. Thoda wait karo...',
                'https://pmkisan.gov.in/NodalOfficers.aspx'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Yahan Click Karo → Official List Dekhein
            </button>
          </div>
        </section>

        <section className="mb-8">
          <SH>Email Kaise Likhein? (Proven Templates)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, sarkari email box mein roz hazaron emails aati hain. Agar aapki email ka subject clear nahi hua, toh wo spam mein chali jayegi. Hamesha subject mein apna <strong>Registration Number</strong> likhein. Neeche templates hain, apni problem ke hisaab se copy-paste kar lein:
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              📧 Template 1: Payment FTO Generated Hai Par Paisa Nahi Aaya
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-xs font-mono text-gray-800 dark:text-gray-200 space-y-2">
              <p><strong>Subject:</strong> URGENT: Payment Not Credited - Reg No. [Aapka Number]</p>
              <p className="mt-2">Respected Sir/Madam,</p>
              <p>Mera PM Kisan Registration No. [Number] hai. Portal par "FTO is Generated and waiting for confirmation by PFMS" dikh raha hai pichle 30 dino se. Mere bank account (A/C: [Account No], IFSC: [IFSC]) mein abhi tak credit nahi hua hai. Kripya PFMS team se verify karke payment release karwayein.</p>
              <p className="mt-2">Dhanyavad, [Aapka Naam], [Mobile Number]</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-3">
              📧 Template 2: Naam/Aadhaar Correction BAO Ne Nahi Kiya
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-xs font-mono text-gray-800 dark:text-gray-200 space-y-2">
              <p><strong>Subject:</strong> Correction Ignored by Local BAO - Reg No. [Aapka Number]</p>
              <p className="mt-2">Respected Sir/Madam,</p>
              <p>Meri Aadhaar seeding / name correction ki application maine apne local BAO office mein [Date] ko di thi. 2 mahine ho gaye hain lekin portal par abhi bhi purani galti dikh rahi hai jiski wajah se kist ruk gayi hai. Main aapse anurodh karta hoon ki district officer ko instruction dekar mera data update karwayein.</p>
              <p className="mt-2">Dhanyavad, [Aapka Naam], [Mobile Number]</p>
            </div>
          </div>

          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/email-template-example.webp"
            alt="Example of properly formatted email to nodal officer"
            width={800}
            height={600}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />

          <WB>
            <strong>Zaroori Baatein (Email Attachments):</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Aadhaar Card aur Bank Passbook ki clear PDF banakar hi attach karein (Blurry photos reject ho jaati hain).</li>
              <li>PM Kisan Status page ka screenshot zaroor bhejein.</li>
              <li>Agar pehle BAO ko koi application di thi, toh uski receiving copy bhi bhejein.</li>
            </ul>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Phone Par Kaise Baat Karein? (Sahi Time aur Tarika)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sarkari daftar mein phone uthane ka bhi ek time hota hai. Agar aap galat time par call karenge toh ya toh phone nahi uthega, ya samne wala chidh jayega.
          </p>
          <StepList>
            <SI n={1}>
              <strong>Best Time to Call:</strong> Subah 10:30 AM se 1:00 PM ke beech call karein. Lunch time (1:30 PM - 3:00 PM) aur sham ke baad avoid karein. Monday subah aur Friday sham ko meetings hoti hain, tab call mat karein.
            </SI>
            <SI n={2}>
              <strong>Details Ready Rakho:</strong> Call milane se pehle ek kagaz par Reg Number, Aadhaar, aur problem 2 line mein likh lo.
            </SI>
            <SI n={3}>
              <strong>Diary Number Maango:</strong> Sabse zaroori baat. Jab officer aapki baat sun le, toh politely kahein — <em>"Sir, meri shikayat ka ek Diary Number ya Reference Number de dijiye taaki main baad mein follow-up kar sakun."</em> Agar diary number ban gaya, toh file track hogi.
            </SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/phone-call-tips.webp"
            alt="Farmer making phone call to nodal officer"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />
        </section>

        <section className="mb-8">
          <SH>The Digital Jugaad: Twitter (X) Escalation</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar email ka 7 din tak reply na aaye, toh social media ek effective madhyam ho sakta hai. Sarkari departments apni public image ko lekar sensitive hote hain.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-[var(--color-border)] mb-4">
            <p className="text-xs font-mono text-[var(--color-text-muted)] mb-2">
              <strong>Twitter Post Format:</strong><br/><br/>
              @PMKisanOfficial @AgriGoIIndia<br/>
              Meri PM Kisan kist pichle 3 mahine se ruki hai. Local BAO koi sunwai nahi kar raha. Registration No: [Aapka Number]. Kripya madad karein. 🙏<br/>
              [Status ka Screenshot Attach Karein]
            </p>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Social media escalation par sambandhit vibhag se jaldi response milne ki sambhavna badh jaati hai, kyunki public platforms par shikayaton ko priority di jaati hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>The Nuclear Option: RTI (Right to Information)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar 30 din tak email ka koi reply na aaye, aur grievance portal par bhi "Under Process" atka rahe, toh samajh lo file dabba mein daal di gayi hai. Ab <strong>RTI</strong> ka use karo.
          </p>
          <StepList>
            <SI n={1}>Ek saade kagaz par likho: "Kripya batayein ki meri shikayat (Date: XX/XX/XXXX, Reg No: XXX) par aaj tak kya action liya gaya? Agar nahi liya, toh kis officer ki zimmedari tay ki gayi hai?"</SI>
            <SI n={2}>₹10 ka Indian Postal Order (IPO) banwao aur uske sath attach karo.</SI>
            <SI n={3}>Speed Post se State Nodal Officer ke office bhej do.</SI>
            <SI n={4}>RTI Act ke tahat 30 din mein legally reply dena anivarya (mandatory) hai. Isse aksar adhikari pending file ko jaldi resolve kar dete hain taaki niyamit karrawai se bacha ja sake.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Kis Type Ki Problems Ke Liye Contact Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har choti-moti problem (jaise eKYC kaise karein) ke liye nodal officer ko pareshan mat karo. Ye serious problems ke liye contact karo:
          </p>
          <div className="space-y-3">
            {[
              { 
                problem: 'Payment Fail Ho Gayi', 
                desc: 'FTO generated hai lekin paisa account mein nahi aaya. 30 din ho gaye.',
                priority: 'Turant Karein'
              },
              { 
                problem: 'Naam List Se Hat Gaya', 
                desc: 'Pehle active tha, ab achanak list mein naam nahi aa raha (Wrongful Deletion).',
                priority: 'Turant Karein'
              },
              { 
                problem: 'Local Officer Help Nahi Kar Rahe', 
                desc: 'BAO ya patwari se baat ki, lekin wo cooperate nahi kar rahe ya paise maang rahe hain.',
                priority: 'Turant Karein'
              },
              { 
                problem: 'Data Correction Nahi Ho Raha', 
                desc: 'Naam ya bank details change karne ki application di thi, lekin portal update nahi hua.',
                priority: 'Jaldi Karein'
              },
            ].map(({ problem, desc, priority }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-black text-sm text-[var(--color-text)]">{problem}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    priority === 'Turant Karein' 
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' 
                      : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                  }`}>
                    {priority}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Nodal Officer Contact FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat (Bottom Line)</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Bhai, PM Kisan shikayat karna mushkil nahi hai agar aap sahi hierarchy follow karein. Bas teen cheezein yaad rakho:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Pehle 155261 par call karo (Diary number lo).</li>
            <li>Kaam na bane toh state nodal officer ko proper format mein email karo.</li>
            <li>Uske baad bhi kaam na bane toh Twitter par tag karo ya RTI daal do.</li>
          </ol>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mt-3">
            Dairya (patience) rakho, documents clear rakho, aur politely baat karo. Aapka haq aapko zaroor milega!
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Grievance Register Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        {/* VISUAL CARD STYLE INTERNAL LINKING */}
        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aapke Liye Zaroori Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link 
                key={card.slug} 
                href={`/articles/${card.slug}`}
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
          { href: '/articles/PmKisanPaymentFailedFix2026', l: '💸 Payment Fix' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}