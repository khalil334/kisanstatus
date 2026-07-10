'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-23T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Credit Card Guide', emoji: '💳' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  { q: 'FTO Generated ka matlab kya hai?', a: 'Dekho bhai, Fund Transfer Order. Government ne bank ko funds bhejne ka order de diya hai. Paisa confirm hai, bas bank processing baaki hai. 7-15 din mein account mein aayega.' },
  { q: 'FTO ke baad kitne din mein paisa aata hai?', a: 'SBI/PNB: 8-10 din bhai. HDFC/ICICI: 10-14 din. BOB: 12-15 din. Regional Rural Banks: 15-20 din. Post Office: 15-25 din. 15 din se zyada ho jaye toh bank visit karo.' },
  { q: 'Credit Release Pending kitne din rehta hai?', a: 'Normally 3-10 din bhai. 15 din se zyada = Aadhaar seeding ya NPCI mapping mein problem. Bank jaa ke dono check karwao.' },
  { q: '24vi kist kab release hogi?', a: 'October 2026 mein expected hai bhai. September end tak FTO generate hona shuru hoga. eKYC complete walon ka pehle aayega.' },
  { q: '15 din baad bhi paisa nahi aaya — kya karein?', a: 'Pehle bank jaa ke Aadhaar seeding check. Phir NPCI mapping verify. Account active hai confirm. Phir 155261 call. Last option CSC visit.' },
  { q: 'Bina eKYC ke FTO generate hota hai?', a: 'Nahi bhai. 2026 mein bina digital verification ke koi kist nahi. Pehle eKYC karo, phir 24vi (Oct 2026) ka wait.' },
  { q: 'FTO reject kyun hota hai?', a: 'Account band, Aadhaar seeding galat, naam mismatch, IFSC invalid, ya account dormant. Zyadatar cases mein Aadhaar seeding missing hoti hai.' },
  { q: 'Kya FTO ke baad credit reject ho sakti hai?', a: 'Haan bhai, lekin kam hota hai. Account band ya details galat hone par. Isliye bank details updated rakho.' },
  { q: 'Post Office account mein kitne din lagte hain?', a: 'Sabse zyada bhai — 15-25 din. Thoda wait karo. 25 din tak wait karo, phir helpline call.' },
  { q: 'Mobile number change ho gaya toh status kaise check karein?', a: 'OTP nahi milega bhai. CSC jaa ke mobile update karwao pehle. Phir status check karo. Yeh bahut zaroori hai.' },
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

export default function PmKisanFtoGeneratedKaMatlabKyaHai({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">FTO Status</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Payment Status</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            FTO Generated Ka Matlab Kya Hai? Paisa Kab Aayega?
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
            src={article.ogImage || '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp'}
            alt="FTO Generated meaning explained — PM Kisan Fund Transfer Order status 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            FTO Generated = Paisa Confirm Hai
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Status Samajh Nahi Aa Raha?</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            <em>"FTO dikh raha hai par paisa nahi aaya. Kya government ne dhokha de diya?"</em>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong>Nahi bhai! Yeh achhi baat hai.</strong> FTO matlab Fund Transfer Order. Government ne bank ko paisa bhejne ka order de diya hai. Bas bank process kar raha hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>FTO Ka Matlab Kya Hai?</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai suno, seedha jawab deta hoon.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-5 mb-6">
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li><strong>FTO Generated</strong> = Government ne order de diya</li>
              <li><strong>Credit Release Pending</strong> = Bank process kar raha hai</li>
              <li><strong>Paisa aayega</strong> = 7-15 din mein</li>
            </ul>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek example deta hoon. Maan lo aapne cheque likha. Cheque likhna matlab order de diya. Ab bank ka kaam hai use cash karna. FTO woh cheque hai bhai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Teen steps hain:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <span className="text-2xl block mb-2">📝</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Step 1</p>
              <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">Cheque likha (Order ban gaya)</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-center">
              <span className="text-2xl block mb-2">🏦</span>
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm">Step 2</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">Bank process kar raha</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <span className="text-2xl block mb-2">💰</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm">Step 3</p>
              <p className="text-xs text-green-700 dark:text-green-400 mt-1">Paisa account mein</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Abhi aap step 2 par ho. Bas thoda wait karo.
          </p>
        </section>

        <section className="mb-8">
          <SH>24vi Kist Kab Aayegi?</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            October 2026 mein expected hai. Lekin ye depend karta hai ki aapne eKYC kab ki.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kab eKYC Ki</th>
                  <th className="p-3 text-left">Kab Aayegi</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['September se pehle', 'October ke pehle hafte', '✅ Pehle Aayega'],
                  ['September mein', 'October ke end tak', '⏳ Thoda baad mein'],
                  ['Abhi tak nahi ki', '25vi kist (Feb 2027)', '❌ 24vi nahi milegi'],
                ].map(([cat, timing, status], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{cat}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{timing}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DB>
            <strong>Ek baat yaad rakhna:</strong> Abhi tak eKYC nahi ki bhai? Toh 24vi nahi milegi. Pehle authentication karo, phir 25vi (Feb 2027) ka wait karo.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Har Bank Ka Apna Time</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har bank alag time leta hai. Maine kuch banks ka time note kiya hai:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Bank</th>
                  <th className="p-3 text-center">Kitne Din</th>
                  <th className="p-3 text-left">Speed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SBI', '8-10', 'Sabse fast'],
                  ['PNB', '10-12', 'Theek hai'],
                  ['HDFC / ICICI', '10-14', 'Private banks'],
                  ['Bank of Baroda', '12-15', 'Thoda slow'],
                  ['Regional Rural Banks', '15-20', 'Slow'],
                  ['Post Office', '15-25', 'Sabse slow'],
                ].map(([bank, days, speed], i) => (
                  <tr key={bank} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{bank}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-center font-bold text-xs text-green-700 dark:text-green-400">{days}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Meri salah:</strong> SBI/PNB mein 10 din baad bank jao bhai. Chhote banks mein 15-20 din wait karo.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Mobile Se Status Kaise Check Karein?</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai bahut simple hai. Ye steps follow karo:
          </p>

          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Farmers Corner mein jao → <strong>Beneficiary Status</strong> par click karo</SI>
            <SI n={3}>Aadhaar number daalo (dhyan se, ek digit bhi galat nahi hona chahiye)</SI>
            <SI n={4}>OTP verify karo → phir <strong>Get Data</strong> button dabao</SI>
            <SI n={5}>Table mein FTO status dikhega + credit release status bhi</SI>
          </StepList>
          
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              🔍 Abhi Status Check Karo
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Official PM Kisan portal par jakar apna FTO status dekho. 10 second baad portal khulega.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PM Kisan Beneficiary Status',
                'PM Kisan portal khulne wala hai. Thoda wait karo...',
                'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Yahan Click Karo → FTO Status Check Hoga
            </button>
          </div>

          <WB>
            <strong>Kuch common problems:</strong> OTP nahi aa raha = mobile change hua, CSC jao. "Record Not Found" = Aadhaar galat ya enrollment nahi hui. Server down = subah 10-11 baje try karo.
          </WB>
        </section>

        <section className="mb-8">
          <SH>15 Din Ho Gaye Par Paisa Nahi Aaya?</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Tension mat lo bhai. Ye 5 steps follow karo:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 dark:border-red-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Pehle: Aadhaar Seeding Check</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bank jao → Counter par bolo "Aadhaar seeding check karo" → Agar "Not Seeded" dikhe toh turant karwao. Zyadatar problems yahi hoti hain.</p>
            </div>
            <div className="border-l-4 border-orange-500 dark:border-orange-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Doosra: NPCI Mapping</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bank manager se bolo: "DBT ke liye NPCI mapping active hai kya?" Thoda mushkil sunne mein hai lekin woh samajh jayenge bhai.</p>
            </div>
            <div className="border-l-4 border-yellow-500 dark:border-yellow-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Teesra: Account Active Hai?</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Agar 6 mahine se transaction nahi hua toh account dormant ho jata hai. ₹100 deposit karo → same day active ho jayega.</p>
            </div>
            <div className="border-l-4 border-blue-500 dark:border-blue-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Chautha: Helpline Par Call</h3>
              <p className="text-xs text-[var(--color-text-muted)]">📞 155261 ya 1800115526 par call karo (subah 9 se shaam 6 baje tak). Aadhaar + enrollment + account number ready rakho bhai.</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Aakhri: CSC Visit</h3>
              <p className="text-xs text-[var(--color-text-muted)]">CSC operator poora case check karke complaint register karega. 3-5 din mein kaam ho jayega.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>State Ke Hisaab Se Time</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state mein alag time lagta hai. Maine kuch states ka time note kiya hai:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-center">Kitna Time</th>
                  <th className="p-3 text-left">Kyun</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['UP', '7-10 din', 'Fast processing'],
                  ['Punjab / Haryana', '8-12 din', 'Achha system'],
                  ['MP', '12-15 din', 'Medium speed'],
                  ['Bihar / Jharkhand', '15-20 din', 'Verification slow'],
                  ['Rajasthan', '15-20 din', 'Bank coordination'],
                  ['West Bengal', '20-30 din', 'Sabse slow'],
                ].map(([state, delay, reason], i) => (
                  <tr key={state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-center font-bold text-xs text-[var(--color-text)]">{delay}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-fto-faq-kisanstatus.webp"
            alt="PM Kisan FTO frequently asked questions — common doubts about fund transfer order"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            FTO Se Jude Aksar Puche Jane Wale Sawal
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="FTO Status FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            FTO dikh raha hai = <strong>ghabrao mat bhai</strong>. Paisa confirm hai. 7-15 din wait karo. Uske baad bhi na aaye toh:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Bank jaa ke <strong>Aadhaar seeding</strong> check karo</li>
            <li><strong>NPCI mapping</strong> verify karo</li>
            <li>Helpline <strong>155261</strong> par call karo</li>
          </ol>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            🔗 PM Kisan Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Apna FTO status, beneficiary list, aur saari jaankari ke liye official portal par jaayein. 10 second baad portal khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PM Kisan Official Portal',
              'PM Kisan portal khulne wala hai. Thoda wait karo...',
              'https://pmkisan.gov.in/BeneficiaryStatus.aspx'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            📥 Yahan Click Karo → PM Kisan Portal Khulega
          </button>
        </div>

        <CalcBanner
          icon="📅"
          title="Apni Kist Track Karo"
          desc="Kitni kist aayi, FTO status kya hai, arrears kitne — sab jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}