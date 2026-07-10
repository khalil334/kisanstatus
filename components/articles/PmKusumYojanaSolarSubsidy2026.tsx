'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-08T10:00:00+05:30';
const MODIFIED = '2026-07-11T10:00:00+05:30';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Apply Online', emoji: '💳' },
  { slug: 'KisanTractorLoan2026', title: 'Tractor Loan Bina Down Payment', emoji: '🚜' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card Guide', emoji: '🌱' },
  { slug: 'PmfbyCropInsurance2026', title: 'Fasal Bima Yojana 2026', emoji: '🛡️' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🧪' },
];

const FAQS_DATA = [
  {
    q: 'solar pump subsidy ka paisa seedha account mein aata hai ya vendor ko?',
    a: 'Seedha tumhare bank account mein. Vendor ko sirf tumhara hissa dena hota hai.',
  },
  {
    q: 'kya bina zameen ke solar pump mil sakta hai?',
    a: 'Nahi bhai. Kam se kam 0.5 acre zameen chahiye jisme tumhara naam ho.',
  },
  {
    q: 'pm kusum yojana helpline number kya hai?',
    a: 'National: 1800-180-3333 (toll free). Har state ka alag number bhi hota hai portal par.',
  },
  {
    q: 'ek kisan kitne solar pump le sakta hai?',
    a: 'Ek beneficiary ek hi pump ka eligible hai same survey number par. Alag plot hai toh dobara apply kar sakte ho.',
  },
  {
    q: 'solar pump lagwane ke baad bijli bill aayega kya?',
    a: 'Component B (standalone) mein bilkul nahi. Component C (grid-connected) mein extra bijli bechoge toh ulta paisa milega.',
  },
  {
    q: 'barish na ho toh solar pump chalega kya?',
    a: 'Cloudy din mein output 30-40% kam hota hai lekin band nahi hota. Battery backup option bhi available hai kuch states mein.',
  },
  {
    q: 'vendor khud choose kar sakte hain ya govt assign karti hai?',
    a: 'Govt empanelled vendors ki list portal par hoti hai. Usme se apna pasand ka vendor select kar sakte ho. Bahar se koi private vendor nahi chalega.',
  },
  {
    q: 'application ke baad survey kab hota hai?',
    a: 'Aam taur par 15-30 din mein agriculture officer ya vendor site visit karta hai. Kabhi kabhi delay hota hai — helpline par follow up karo.',
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
              📌 Thoda wait karo. Official PM Kusum portal khulne wala hai.
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

export default function PmKusumYojanaSolarSubsidy2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Solar Pump Subsidy</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">☀️ PM Kusum Yojana 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kusum Yojana Solar Pump Subsidy 2026: 60% Subsidy Kaise Milegi, Apply Karne Ka Sahi Tarika
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

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
          Bhai, sach bataun? Diesel pump chalane wale kisan ka haal dekh ke dil dukhta hai.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-5">
          Har mahine ₹4,000-6,000 tel mein phoonk dete hain. Kabhi kabhi diesel mehnga ho jata hai, kabhi pump kharab. Bijli walo ka bhi yahi haal — bill aata hai toh paseena chhoot jata hai. Aur load shedding alag tension.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
          Mere gaon ke Ram Singh kaka ne 2024 mein <strong>pm kusum yojana solar pump subsidy</strong> se 3HP pump lagwaya. Pehle wo saal ka ₹55,000 diesel pe udate the. Ab? Zero. Ek rupaya nahi. Wo kehte hain "beta, 5 saal pehle kyun nahi lagwaya."
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aaj main wahi sab kuch samjhaunga jo kisi agent ya CSC wale ko puchne par bhi clear jawab nahi milta. Eligibility, real cost, state-wise process, rejection se bachne ke tarike — sab kuch. Seedhi baat, no bakwaas.
        </p>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kusum-yojana-solar-subsidy-2026/solar-pump-hero.webp'}
            alt="Indian farmer standing proudly next to installed solar water pump in lush green field with panels tilted at angle"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Solar Pump = Free Paani, Zero Tension
          </p>
        </div>

        <section className="mb-8">
          <SH>PM Kusum Yojana Kya Hai? Seedhi Bhasha Mein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Naam bada hai — Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan. Par kaam simple: <strong>kisan ko free bijli do, diesel hatayo.</strong>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isme 3 hisse hain. Tumhe bas dusra wala chahiye:
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-[var(--color-border)] rounded-xl opacity-70">
              <p className="font-black text-[var(--color-text-muted)] text-sm mb-1">Component A — Bade Solar Plants</p>
              <p className="text-xs text-[var(--color-text-muted)]">Banjar zameen par mega projects. Individual kisan se lena-dena nahi.</p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600 rounded-xl relative">
              <span className="absolute -top-3 right-4 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">TUMHARA YE HAI ⭐</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">Component B — Standalone Solar Pump</p>
              <p className="text-xs text-[var(--color-text-muted)]">Apne khet mein akela solar pump lagao. 60% tak subsidy. Diesel/grid replace karne walon ko priority milti hai. <strong>Kusum yojana component b standalone solar pump</strong> yahi hai jiske liye tum yahan aaye ho.</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-[var(--color-border)] rounded-xl opacity-70">
              <p className="font-black text-[var(--color-text-muted)] text-sm mb-1">Component C — Grid Connected</p>
              <p className="text-xs text-[var(--color-text-muted)]">Pehle se bijli connection hai? Usko solarize karo. Extra power becho DISCOM ko. Kamai bhi.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kaun Le Sakta Hai? (Aur Kaun Nahi)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse pehle ye check kar lo ki tum eligible ho ya nahi. Baad mein reject hone se behtar hai abhi pata chal jaye.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-3">✅ Haan, Apply Kar Sakte Ho</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1.5">
                <li>✓ Indian citizen ho</li>
                <li>✓ Zameen tumhare naam par registered hai</li>
                <li>✓ Min 0.5 acre (2HP ke liye), 2+ acre (5HP ke liye)</li>
                <li>✓ Khatauni/Khasra updated hai</li>
                <li>✓ Bank account Aadhaar se juda hai</li>
                <li>✓ SC/ST ho toh extra subsidy milegi</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-3">❌ Sorry, Eligible Nahi Ho</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1.5">
                <li>✗ Zameen kiraye/lease par hai (owner consent nahi)</li>
                <li>✗ Land record mein naam galat/purana hai</li>
                <li>✗ Same plot par pehle solar pump laga hua hai</li>
                <li>✗ Income tax payer (kuch states mein bar hai)</li>
                <li>✗ Government employee ho</li>
              </ul>
            </div>
          </div>

          <WB>
            <strong>Sabse Badi Galti Jo Log Karte Hain:</strong> Apply kar dete hain bina <strong>pm kusum yojana land record verification</strong> kiye. Phir 2 mahine baad rejection letter aata hai. Pehle Patwari/Tehsildar se Khatauni update karwao, naam match karwao Aadhaar se, tabhi form bharo.
          </WB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kusum-yojana-solar-subsidy-2026/diesel-vs-solar-comparison.webp"
            alt="Split image showing rusty old diesel pump on left side vs shiny new solar pump with panels on right side in same farm setting"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Purana Diesel vs Naya Solar — Fark Khud Dekho
          </p>
        </div>

        <section className="mb-8">
          <SH>Kitna Paisa Bachega? Real Numbers Dekho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Chalo ab asli baat — <strong>solar pump subsidy scheme for farmers 2026</strong> mein kitna milta hai?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Formula simple: Centre 30% + State 30% = Total 60%. Tumhari jeb se sirf 40%. SC/ST kisanon ko kuch states mein <strong>90 percent subsidy solar pump</strong> bhi milti hai.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Subsidy %</th>
                  <th className="p-3 text-left">3HP Ki Kimat (Tumhari Jeb Se)</th>
                  <th className="p-3 text-left">Special Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { state: 'Rajasthan', sub: '60-70%', price: '₹35K-45K', note: 'SC/ST ko 75%' },
                  { state: 'UP', sub: '60%', price: '₹40K-55K', note: 'CSC apply option' },
                  { state: 'MP', sub: '60%', price: '₹38K-50K', note: 'Fast approval' },
                  { state: 'Maharashtra', sub: '60-65%', price: '₹42K-58K', note: 'Grid option popular' },
                  { state: 'Bihar', sub: '60%', price: '₹40K-52K', note: 'Diesel replace priority' },
                  { state: 'Haryana', sub: '60-75%', price: '₹30K-40K', note: 'Best subsidy rate' },
                  { state: 'Gujarat', sub: '60%', price: '₹38K-48K', note: 'SKY scheme merge' },
                ].map((r) => (
                  <tr key={r.state} className="bg-[var(--color-card)] hover:bg-[var(--color-bg-alt)] transition-colors">
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs">{r.state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{r.sub}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs">{r.price}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[10px] text-[var(--color-text-muted)]">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DB>
            <strong>Real Example:</strong> Jaipur ke Mohan Lal ji ne 3HP solar pump lagwaya 2025 mein. Total cost ₹1,40,000 thi. Subsidy mili ₹84,000. Unhone sirf ₹56,000 diye. Pehle diesel pe saal ka ₹50,000 jaata tha. Matlab <strong>ek saal mein hi investment recover</strong>. Agla 24 saal pure profit.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Kaagaz Ready Rakho — Ye Chahiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Form bharne baithe toh beech mein rukna mat pade. Ye sab pehle se phone/PDF mein rako:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {[
              'Aadhaar Card (clear photo)',
              'Bank Passbook front page',
              'Khatauni / Khasra / 7-12 Utara',
              'Passport size photo (white bg)',
              'Mobile number (Aadhaar linked)',
              'Caste certificate (SC/ST only)',
              'Old pump bill/photo (if replacing)',
              'Electricity bill (Component C only)',
            ].map((d) => (
              <div key={d} className="flex items-center gap-2 p-2.5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-lg">
                <span className="text-green-600 dark:text-green-400 font-bold text-sm shrink-0">✓</span>
                <span className="text-xs text-[var(--color-text)]">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-text-muted)] italic">
            💡 Blur photo upload mat karna bhai. Reject hone ka #1 reason yahi hai. Clear scan ya acche phone se click karo.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kusum-yojana-solar-subsidy-2026/application-form-screenshot.webp"
            alt="Screenshot of PM Kusum online registration form showing Aadhaar field, land details and pump selection dropdown"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Portal Par Form Bharna Simple Hai — Bas Sahi Details Daalo
          </p>
        </div>

        <section className="mb-8">
          <SH>Ghar Baithe Apply Kaise Karein (Portal Se)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Pm kusum yojana online apply kaise kare 2026</strong> — bahut simple hai. Agent ko ₹500 dene ki zaroorat nahi:
          </p>
          <StepList>
            <SI n={1}>Apne state ka PM Kusum portal kholo (links neeche hain)</SI>
            <SI n={2}>"New Registration" ya "Beneficiary Apply" click karo</SI>
            <SI n={3}>Aadhaar number daalo → OTP aayega → Verify karo</SI>
            <SI n={4}>Form bharna shuru: naam, pata, zameen ka survey number, pump size</SI>
            <SI n={5}>Documents upload karo (jo upar list mein bataye)</SI>
            <SI n={6}>Submit dabao → Reference Number milega → Screenshot le lo</SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 Abhi Apply Karo
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official PM Kusum portal par jakar apna <strong>pm kusum yojana registration form</strong> bharo. 10 second baad portal khulega.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kusum Official Portal',
                'PM Kusum portal khulne wala hai. Thoda wait karo...',
                'https://pmkusum.mnre.gov.in'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Yahan Click Karo → PM Kusum Portal Khulega
            </button>
          </div>

          <IB>
            <strong>Zaruri Tip:</strong> <strong>Pm kusum yojana registration form kaise bhare</strong> mein sabse important field hai "Survey/Khasra Number." Ise Khatauni se exactly copy karo. Ek digit bhi galat = rejection.
          </IB>
        </section>

        <section className="mb-8">
          <SH>State Wise Direct Links & Process</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state ka apna portal hai. National portal se redirect hota hai lekin direct link zyada fast kaam karta hai:
          </p>
          <div className="space-y-3">
            {[
              { name: 'Rajasthan', portal: 'rajkusum.in', note: '70% subsidy | District officer verify karta hai | 30-45 din approval', tag: 'Best Subsidy' },
              { name: 'Uttar Pradesh', portal: 'upkusum.in', note: '60% subsidy | CSC centers par bhi apply | Khatauni mandatory', tag: '' },
              { name: 'Madhya Pradesh', portal: 'mpkusum.mp.gov.in', note: '60% subsidy | Fastest processing | Online + offline dono', tag: 'Fast Approval' },
              { name: 'Maharashtra', portal: 'pmkusum.mahadiscom.in', note: '60-65% subsidy | MahaDISCOM handles | Grid-connected popular', tag: '' },
              { name: 'Bihar', portal: 'breb.bihar.gov.in/kusum', note: '60% subsidy | BREB implements | Diesel replacement priority', tag: '' },
              { name: 'Haryana', portal: 'haryanakusum.in', note: '60-75% subsidy | Highest for SC/ST | Online tracking easy', tag: 'Top Choice' },
            ].map((s) => (
              <div key={s.name} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-black text-[var(--color-primary)] text-sm">{s.name}</p>
                  {s.tag && <span className="text-[9px] font-bold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">{s.tag}</span>}
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mb-1">{s.portal}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Application Ka Status Kaise Dekhein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Form bhar diya. Ab wait mat karte raho — khud track karo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            State portal par "Track Application" ya "Check Status" option hota hai. Reference number ya Aadhaar daalo. Status dikhega: <em>Pending Verification → Approved → Vendor Assigned → Installed → Subsidy Released.</em>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Pm kusum yojana status check online</strong> karne par agar 30 din se zyada "Pending" dikhe toh helpline par call karo. Kabhi kabhi file atak jaati hai — follow up zaroori hai.
          </p>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">
              🔍 Status Check Karo
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              Official portal par jakar apna <strong>pm kusum yojana status check</strong> karo. 10 second baad portal khulega.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kusum Status Check',
                'PM Kusum portal khulne wala hai. Thoda wait karo...',
                'https://pmkusum.mnre.gov.in'
              )}
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Yahan Click Karo → Status Check Hoga
            </button>
          </div>
        </section>

        <section className="mb-8">
          <SH>Reject Kyu Hoti Hai? Ye 5 Galtiyan Mat Karna</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Pm kusum yojana application rejected reasons</strong> jaan lo pehle se. 90% rejections inhi wajah se hote hain:
          </p>
          <div className="space-y-2">
            {[
              { err: 'Naam Mismatch (Khatauni ≠ Aadhaar)', fix: 'Patwari se pehle correct karwao. Spelling, father name, surname — sab match hona chahiye.' },
              { err: 'Duplicate Application', fix: 'Ek baar hi apply karo. Do baar submit kiya toh dono reject. System pakad leta hai.' },
              { err: 'Blur/Incomplete Documents', fix: 'Fresh clear photos use karo. Aadhaar ka corner kata hua ya dhundhla = instant reject.' },
              { err: 'Galat Pump Size vs Land Area', fix: '0.5 acre par 5HP maangoge toh nahi milega. Rule: 2HP=min 0.5 acre, 3HP=1 acre, 5HP=2+ acre.' },
              { err: 'Already Beneficiary on Same Plot', fix: 'Same survey number par dobara eligible nahi. Alag plot hai toh nayi Khatauni ke saath apply karo.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2">
                  <p className="font-black text-red-800 dark:text-red-300 text-xs">❌ {err}</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/10">
                  <p className="text-xs text-green-800 dark:text-green-300"><span className="font-bold">FIX:</span> {fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kusum-yojana-solar-subsidy-2026/state-portal-screenshot.webp"
            alt="PM Kusum state portal dashboard showing application status tracker with green approved badge"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Portal Par Status Track Karna Aasaan Hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Diesel vs Solar — Hisaab Kitab Dekho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Numbers jhooth nahi bolte. <strong>Solar pump vs diesel pump cost comparison</strong> dekho:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Cheez</th>
                  <th className="p-3 text-left">Diesel Pump 😩</th>
                  <th className="p-3 text-left">Solar Pump ☀️</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'Khareedne Ka Kharcha', d: '₹25K-35K', s: '₹40K-55K (subsidy baad)' },
                  { item: 'Saal Ka Fuel/Bijli', d: '₹40K-60K 💸', s: '₹0 FREE ✅' },
                  { item: 'Maintenance/Saal', d: '₹5K-8K', s: '₹500-1K' },
                  { item: 'Umar', d: '8-10 saal', s: '25 saal' },
                  { item: '5 Saal Total Kharcha', d: '₹2.5 Lakh+', s: '₹45K-60K' },
                  { item: 'Pareshani', d: 'Fuel lao, repair karao', s: 'Lagao aur bhool jao' },
                ].map((r) => (
                  <tr key={r.item} className="bg-[var(--color-card)]">
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs">{r.item}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-red-700 dark:text-red-400">{r.d}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>Purana diesel pump se solar pump mein badlaw kaise kare:</strong> Portal par apply karte waqt "Replacement of Existing Pump" select karo. Purane pump ka photo/bill upload karo. Replacement cases ko approval mein priority milti hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Private Company Se Mat Lagwana!</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kuch dealers bolenge "hum sasta laga denge." Suno mat. <strong>Pm kusum yojana vs private solar company</strong> ka farq samjho:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ PM Kusum</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• 60-90% subsidy</li>
                <li>• Govt approved vendor</li>
                <li>• 5 saal warranty compulsory</li>
                <li>• NABARD loan 4-6%</li>
                <li>• Service guarantee</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Private Dealer</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• Full price (no subsidy)</li>
                <li>• Quality uncertain</li>
                <li>• Warranty dealer mood par</li>
                <li>• Personal loan 12-18%</li>
                <li>• Complaint sunne wala koi nahi</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] italic">
            Jab sarkaar 60% de rahi hai toh private wale ko full price kyun dena? Samajhdari wali baat nahi hai bhai.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Jo Sawal Har Kisan Puchta Hai
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kusum Solar Pump FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bhai, Ab Socho Mat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Solar pump ek baar lagao, agle 25 saal sukoon se kheti karo. Diesel ka kharcha khatam, bijli ka bill zero, paani jab chahiye tab milega.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Lekin ek cheez yaad rakho — <strong>subsidy quota limited hota hai</strong>. Jab state ka quota fill ho jata hai toh agli window ka wait karna padta hai. Isliye aaj hi apply karo. Kal ka intezaar mat karo.
          </p>
          <p className="text-xs text-green-700 dark:text-green-400 italic mt-2">
            💡 Meri personal advice: Documents aaj ready karo, kal subah portal par apply karo. Jitni jaldi form jayegi, utni jaldi pump lagega.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            🔗 PM Kusum Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            <strong>PM Kusum yojana apply online</strong> karne ke liye, <strong>PM Kusum yojana status check</strong> karne ke liye, ya helpline number ke liye official portal par jaayein. 10 second baad portal khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PM Kusum Official Portal',
              'PM Kusum portal khulne wala hai. Thoda wait karo...',
              'https://pmkusum.mnre.gov.in'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            📥 Yahan Click Karo → PM Kusum Portal Khulega
          </button>
        </div>

        <CalcBanner
          icon="☀️"
          title="Kitna Bachoge? Calculate Karo"
          desc="Diesel vs Solar — 5 saal ka total saving jaano"
          primaryCta={{ href: '/calculator/crop-profit', label: '📊 Profit Calc →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calc' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/KisanCreditCardOnlineApply2026', l: '💳 KCC Loan' },
          { href: '/articles/KisanTractorLoan2026', l: '🚜 Tractor Loan' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}