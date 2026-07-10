'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-04-01T08:00:00+05:30';
const MODIFIED = '2026-07-11T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price', emoji: '🧪' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Guide', emoji: '💳' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'PMFBY enrollment kaise karein?',
    a: 'Loanee farmers ka automatic ho jata hai bank se. Non-loanee ko pmfby.in par jana padega ya CSC se form bharna padega. 31 July se pehle karo kharif ke liye.',
  },
  {
    q: 'Premium kitna dena padta hai?',
    a: 'Kharif mein 2%, Rabi mein 1.5%, Horticulture mein 5%. Baaki sab sarkar deti hai subsidy mein. Matlab ₹50,000 ki fasal ka sirf ₹1,000 premium lagega.',
  },
  {
    q: 'Claim kitne din mein milta hai?',
    a: 'Assessment ke 2 mahine ke andar paisa aana chahiye. State yield data bhejti hai → verify hota hai → paisa seedha account mein.',
  },
  {
    q: 'Kya tenant farmer bhi le sakta hai?',
    a: 'Haan bilkul. Bas landowner ka NOC ya lease agreement chahiye. Tenant farmers bhi cover hote hain.',
  },
  {
    q: 'Claim reject kyun hota hai?',
    a: '48 ghante ki deadline miss ho gayi, premium nahi bhara, crop notified nahi hai, ya documents adhure hain. Receipt sambhal ke rakhna.',
  },
  {
    q: 'Individual loss par bhi claim milta hai?',
    a: 'Haan. Ola, flood, landslide jaisi localized calamity par 48 ghante mein report karo. Individual assessment hota hai.',
  },
  {
    q: 'Kya PMFBY compulsory hai?',
    a: 'Loanee ke liye haan. Non-loanee voluntary hai. Par lena chahiye — 2% premium mein itna bada cover mil raha hai.',
  },
  {
    q: 'Online status kaise check karein?',
    a: 'pmfby.in par jao → Application Status → Aadhaar ya registration number daalo. Pura track kar sakte ho.',
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
              📌 Thoda wait karo. Official PMFBY portal khulne wala hai.
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

export default function PmfbyCropInsurance2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Fasal Bima Yojana</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🛡️ PMFBY Guide 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMFBY Crop Insurance 2026: Kisan Fasal Bima Yojana Se Sirf 2% Premium Mein Fasal Suraksha
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
            src={article.ogImage || '/images/articles/pmfby-crop-insurance-2026/hero-image.webp'}
            alt="PMFBY crop insurance India 2026 — kisan fasal suraksha yojana enrollment"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PMFBY — Chhoti Si Premium, Badi Suraksha
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Socho Zara</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Poora saal mehnat. Beej, khaad, mazdoori — lakho kharch. Phir ek toofan, ek sukha — sab khatam.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            PMFBY isi dar ko khatam karta hai. ₹1 lakh ki fasal ka premium? Sirf ₹2,000. Baaki sarkar deti hai. Miss mat karo yeh deal bhai.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/infographic.webp"
            alt="PMFBY infographic — premium rates, coverage, claim timeline explained visually"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PMFBY Ek Nazar Mein — Premium, Coverage, Claim Process
          </p>
        </div>

        <section className="mb-8">
          <SH>PMFBY Kya Hai? (PM Kisan Fasal Bima Yojana Meaning)</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, <strong>PMFBY ka matlab</strong> hai Pradhan Mantri Fasal Bima Yojana. 2016 se chal rahi hai. Sukha, baadh, toofan, keede — kisi bhi wajah se fasal kharab ho toh paisa milta hai. Seedha bank account mein.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye scheme un kisanon ke liye hai jo <strong>kisan fasal Bima Yojana online apply</strong> karna chahte hain. Bahut simple process hai.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-xl">2%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Kharif</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-xl">1.5%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Rabi</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-xl">5%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Horticulture</p>
            </div>
          </div>
          <IB>
            <strong>Example:</strong> Gehun — Sum Insured ₹50,000. Aapka premium = ₹750 sirf. Baaki sarkar degi. Fasal poori kharab = poora ₹50,000 milega.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kya Kya Cover Hota Hai?</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dekho bhai, PMFBY mein bahut kuch cover hota hai. Par kuch cheezein nahi hoti. Ye dhyan se padhna:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Haan</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Sukha, Baadh, Toofan</li>
                <li>✓ Ola (Hailstorm)</li>
                <li>✓ Keede, Bimari</li>
                <li>✓ Landslide</li>
                <li>✓ Post-harvest loss (14 din)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Nahi</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ War / Nuclear</li>
                <li>✗ Jaan boojh kar nuksan</li>
                <li>✗ Unnotified crops</li>
                <li>✗ Late enrollment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>PMFBY Enrollment Kaise Karein? (Online + Offline)</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Loanee farmers:</strong> Bank automatic karta hai. Aapko kuch nahi karna.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Non-loanee:</strong> Khud karna padega. <strong>PMFBY online apply karne ka tarika</strong> bahut simple hai:
          </p>
          <StepList>
            <SI n={1}>pmfby.in ya CSC jao</SI>
            <SI n={2}>Form bharo — land + crop details</SI>
            <SI n={3}>Documents do — Aadhaar, Khatauni, Passbook</SI>
            <SI n={4}>Premium pay karo</SI>
            <SI n={5}>Receipt sambhalo — claim mein chahiye</SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 Abhi Enroll Karo
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official PMFBY portal par jakar apna <strong>PMFBY enrollment online</strong> karo. 10 second baad portal khulega.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PMFBY Official Portal',
                'PMFBY portal khulne wala hai. Thoda wait karo...',
                'https://pmfby.gov.in'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Yahan Click Karo → PMFBY Portal Khulega
            </button>
          </div>

          <DB>
            <strong>Deadline:</strong> Kharif = July 31. Rabi = Dec 31. Miss mat karna bhai!
          </DB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/status-check.webp"
            alt="PMFBY application status check online — enrollment verification portal"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Apna Enrollment Status Online Check Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>PMFBY Claim Kaise Milega? (Step by Step)</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Fasal kharab ho gayi? Tension mat lo. Ye karo turant:
          </p>
          <StepList>
            <SI n={1}><strong>48 ghante mein</strong> insurance company ko batao</SI>
            <SI n={2}>Damaged crop ki <strong>photos lo</strong></SI>
            <SI n={3}>Patwari se <strong>loss certificate</strong> lo</SI>
            <SI n={4}>Claim form submit karo bank mein</SI>
            <SI n={5}>Verification ke baad paisa <strong>seedha account</strong> mein</SI>
          </StepList>
          <DB>
            <strong>Sabse Important:</strong> 48 ghante! Isse zyada delay hua toh claim reject. Photos + certificate + written complaint — teeno ready rakho.
          </DB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/payment-received.webp"
            alt="PMFBY claim payment received in bank account — successful compensation"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Claim Approved — Paisa Seedha Bank Account Mein
          </p>
        </div>

        <section className="mb-8">
          <SH>PMFBY Premium Calculation Kaise Karein?</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, premium calculate karna bahut simple hai. <strong>PMFBY premium calculator</strong> use karo ya khud calculate karo:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Crop Type</th>
                  <th className="p-3 text-left">Premium Rate</th>
                  <th className="p-3 text-left">Example (₹50,000)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kharif (Dhaan, Maize)', '2%', '₹1,000'],
                  ['Rabi (Gehun, Chana)', '1.5%', '₹750'],
                  ['Horticulture (Sabzi, Phal)', '5%', '₹2,500'],
                  ['Commercial Crops', '5%', '₹2,500'],
                ].map(([crop, rate, example], i) => (
                  <tr key={crop} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{crop}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{rate}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Baaki sab sarkar subsidy mein deti hai. Aapko bas itna hi dena hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>PMFBY Documents List</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Enrollment ke liye ye documents ready rakho:
          </p>

          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Aadhaar Card</li>
            <li>Bank Passbook (Aadhaar linked)</li>
            <li>Khatauni / Land Records</li>
            <li>Khasra Number</li>
            <li>Mobile Number (registered)</li>
            <li>Passport Size Photo</li>
          </ul>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Tenant farmers ko landowner ka NOC ya lease agreement bhi chahiye.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PMFBY FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Dekho bhai, kheti mein risk toh hai hi. Mausam ka bharosa nahi. PMFBY ek chhoti si premium mein yeh risk hata deta hai. Ignore karne ka koi reason nahi. Deadline se pehle karo, receipt sambhalo, aur agar loss ho toh 48 ghante mein report karo. Itna hi karna hai.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            🔗 PMFBY Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            <strong>PMFBY enrollment online</strong> karne ke liye, <strong>PMFBY status check</strong> karne ke liye, ya claim submit karne ke liye official portal par jaayein. 10 second baad portal khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PMFBY Official Portal',
              'PMFBY portal khulne wala hai. Thoda wait karo...',
              'https://pmfby.gov.in'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            📥 Yahan Click Karo → PMFBY Portal Khulega
          </button>
        </div>

        <CalcBanner
          icon="🛡️"
          title="Premium Calculate Karo"
          desc="Crop value daalo — premium jaano"
          primaryCta={{ href: '/calculator/crop-profit', label: '🌾 Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Guide' },
          { href: '/articles/soil-health-card-complete-guide-2026', l: '🌱 Soil' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: '💳 KCC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}