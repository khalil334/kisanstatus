'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-23T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-24vi-kist', title: '24vi Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-complete-guide', title: 'Complete Master Guide', emoji: '📚' },
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Credit Card Guide', emoji: '💳' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  { q: 'FTO Generated ka matlab kya hai?', a: 'Fund Transfer Order. Administration ne bank ko funds bhejne ka order de diya. Achhi khabar hai — paisa confirm hai, bas bank processing baaki. 7-15 din mein account mein aayega.' },
  { q: 'FTO ke baad kitne din mein paisa aata hai?', a: 'SBI/PNB: 8-10 din. HDFC/ICICI: 10-14 din. BOB: 12-15 din. Regional Rural Banks: 15-20 din. Post Office: 15-25 din. 15 din se zyada ho jaye toh bank visit karo.' },
  { q: 'Credit Release Pending kitne din rehta hai?', a: 'Normally 3-10 din. 15 din se zyada = Aadhaar seeding ya NPCI mapping mein problem. Bank jaake dono check karwao.' },
  { q: '24vi tranche kab release hogi?', a: 'October 2026 mein expected hai. September end tak FTO generate hona shuru hoga. eKYC complete walon ka pehle aayega.' },
  { q: '15 din baad bhi paisa nahi aaya — kya karein?', a: 'Step 1: Bank jaake Aadhaar seeding check. Step 2: NPCI mapping verify. Step 3: Account active hai confirm. Step 4: 155261 call. Step 5: CSC visit.' },
  { q: 'Bina eKYC ke FTO generate hota hai?', a: 'Nahi. 2026 mein bina digital verification ke koi installment nahi. Pehle eKYC karo, phir 24vi (Oct 2026) ka wait.' },
  { q: 'FTO reject kyun hota hai?', a: 'Account band, Aadhaar seeding galat, naam mismatch, IFSC invalid, ya account dormant. Sabse common: Aadhaar seeding missing (90% cases).' },
  { q: 'Kya FTO ke baad credit reject ho sakti hai?', a: 'Haan, lekin rare (<5%). Account band ya details galat hone par. Isliye bank details updated rakho.' },
  { q: 'Post Office account mein kitne din lagte hain?', a: 'Sabse zyada — 15-25 din. Patience rakho. 25 din tak wait karo, phir helpline call.' },
  { q: 'Mobile number change ho gaya toh status kaise check karein?', a: 'OTP nahi milega. CSC jaake mobile update karwao pehle. Phir status check karo. Yeh bahut zaroori hai.' },
];

export default function PmKisanFtoGeneratedKaMatlabKyaHai({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">FTO Status Explained</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Payment Status Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            FTO Generated Ka Matlab Kya Hai? Paisa Kab Aayega? Complete Guide 2026
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

        {/* IMAGE 1: Hero */}
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
            FTO Generated = Achhi Khabar — Paisa Confirm Hai
          </p>
        </div>

        {/* Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Status Samajh Nahi Aa Raha?</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            <em>"FTO dikh raha hai par paisa nahi aaya. Kya administration ne dhokha de diya?"</em>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong>Nahi! Yeh achhi khabar hai.</strong> FTO = Fund Transfer Order. Administration ne bank ko paisa bhejne ka order de diya. Bas bank processing baaki hai.
          </p>
        </div>

        {/* FTO Simple Meaning */}
        <section className="mb-8">
          <SH>FTO Ka Simple Matlab — 2 Minute Mein</SH>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="font-black text-green-800 dark:text-green-300 text-base mb-2">✅ Short Answer:</p>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li><strong>FTO Generated</strong> = Administration ne order de diya</li>
              <li><strong>Credit Release Pending</strong> = Bank process kar raha hai</li>
              <li><strong>Paisa aayega</strong> = 7-15 din mein</li>
            </ul>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3">Real Life Example:</h3>
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
            <strong>FTO</strong> woh pehla step hai jab cheque likh diya. Ab bank ka kaam hai use cash karna.
          </p>
        </section>

        {/* 24vi Tranche Timing */}
        <section className="mb-8">
          <SH>24vi Tranche Kab Release Hogi?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Timing</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['eKYC Before September', 'Oct First Week', '✅ Pehle Aayega'],
                  ['eKYC September Mein', 'Oct Mid - End', '⏳ Baad Mein'],
                  ['eKYC Abhi Tak Nahi', 'Next Installment (25vi)', '❌ Nahi Milega'],
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
            <strong>Warning:</strong> Abhi tak eKYC nahi ki? 24vi nahi milegi. Pehle authentication karo, phir 25vi (Feb 2027) ka wait.
          </DB>
        </section>

        {/* Bank Wise Timing */}
        <section className="mb-8">
          <SH>Bank Wise Credit Timing</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Bank</th>
                  <th className="p-3 text-center">Days</th>
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
            <strong>Tip:</strong> SBI/PNB mein 10 din baad bank jaao. Chhote banks mein 15-20 din wait karo.
          </IB>
        </section>

        {/* Mobile Verification */}
        <section className="mb-8">
          <SH>Mobile Se Status Check — 5 Steps</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> open karo</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong></SI>
            <SI n={3}>Aadhaar number carefully enter karo</SI>
            <SI n={4}>OTP verify karo → <strong>Get Data</strong></SI>
            <SI n={5}>Table mein FTO status + credit release status dikhega</SI>
          </StepList>
          <WB>
            <strong>Common Problems:</strong> OTP nahi aa raha = mobile change hua, CSC jaao. "Record Not Found" = Aadhaar galat ya enrollment nahi. Server down = subah 10-11 baje try karo.
          </WB>
        </section>

        {/* 15 Din Baad Bhi Nahi Aaye */}
        <section className="mb-8">
          <SH>15 Din Baad Bhi Paisa Nahi? 5 Step Solution</SH>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 dark:border-red-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Step 1: Aadhaar Seeding Check (90% Problem Yahi)</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bank jaao → Counter par bolo "Aadhaar seeding check" → "Not Seeded" = turant karwao.</p>
            </div>
            <div className="border-l-4 border-orange-500 dark:border-orange-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Step 2: NPCI Mapping Verify</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bank manager se bolo: "DBT ke liye NPCI mapping active hai kya?" Technical hai lekin woh samajh jayenge.</p>
            </div>
            <div className="border-l-4 border-yellow-500 dark:border-yellow-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Step 3: Account Active Hai?</h3>
              <p className="text-xs text-[var(--color-text-muted)]">6 mahine se transaction nahi = dormant. ₹100 deposit karo → same day active.</p>
            </div>
            <div className="border-l-4 border-blue-500 dark:border-blue-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Step 4: Helpline Call</h3>
              <p className="text-xs text-[var(--color-text-muted)]">📞 155261 / 1800115526 (9AM-6PM). Aadhaar + enrollment + account number ready rakho.</p>
            </div>
            <div className="border-l-4 border-green-500 dark:border-green-700 pl-4 py-1">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-1">Step 5: CSC Visit (Last Option)</h3>
              <p className="text-xs text-[var(--color-text-muted)]">CSC operator poora case check karke complaint register karega. 3-5 din mein resolution.</p>
            </div>
          </div>
        </section>

        {/* State Wise Delay */}
        <section className="mb-8">
          <SH>State Wise Delay Analysis</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-center">Delay</th>
                  <th className="p-3 text-left">Reason</th>
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

        {/* IMAGE 2: FAQ */}
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

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="FTO Status FAQ 2026 — Verified Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            FTO dikh raha hai = <strong>ghabrao mat</strong>. Paisa confirm hai. 7-15 din wait karo. Uske baad bhi na aaye toh:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Bank jaake <strong>Aadhaar seeding</strong> check karo</li>
            <li><strong>NPCI mapping</strong> verify karo</li>
            <li>Helpline <strong>155261</strong> par call karo</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — FTO Check"
          guide="Abhi Status Dekho"
          guideHref="/articles/pm-kisan-complete-guide"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📅"
          title="Apni Installment Track Karo"
          desc="Kitni kist aayi, FTO status kya hai, arrears kitne — sab jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-24vi-kist', l: '📅 24vi Status' },
          { href: '/articles/pm-kisan-complete-guide', l: '📚 Master Guide' },
          { href: '/articles/pm-kisan-beneficiary-list-2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}