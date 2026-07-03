'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-04-01T00:00:00+05:30';
const MODIFIED  = '2026-06-23T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-23vi-kist-2026-status-check`;

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'eKYC Complete Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary List Check', emoji: '📋' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile Number Update', emoji: '📱' },
  { slug: 'agristack-kya-hai', title: 'AgriStack Farmer ID', emoji: '🌐' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Registration', emoji: '📝' },
];

// FAQ structured data for Google rich snippets
const FAQS_DATA = [
  { q: 'PM Kisan 23vi kist kab aayi?', a: '20 June 2026 ko PM Modi ne Hooghly, West Bengal se release ki. 9.44 crore kisanon ko ₹2,000 — total ₹18,880 crore DBT se transfer hue.' },
  { q: '24vi kist kab aayegi?', a: 'Pattern ke hisaab se August-November 2026 mein expected hai. Exact date official announcement par confirm hogi.' },
  { q: 'Status check par kuch nahi dikh raha?', a: 'Registration number sahi dalo. Yaad nahi toh "Know your registration no." se mobile/Aadhaar se pehle number dhundho.' },
  { q: 'eKYC zaroori hai kya?', a: 'Haan, mandatory hai. Bina eKYC ke kist band. pmkisan.gov.in par OTP se ya CSC biometric se turant karo.' },
  { q: 'Naya registration kaise karein?', a: 'pmkisan.gov.in → New Farmer Registration → Aadhaar + zameen documents + bank details. Ya CSC center jao.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function PmKisan23viKistStatusCheck2026() {
  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link><span>/</span>
            <span className="text-white">23vi Kist Status Check</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📆 Kist Status Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 23vi Kist 2026: Release Ho Gayi! Status Check, Date & Eligibility
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Released Banner */}
        <div className="mb-6 inline-block rounded-full bg-green-100 border border-green-300 px-5 py-2 text-sm font-black text-green-800">
          ✅ 23vi Kist Released — 20 June 2026 — ₹2,000 per kisan
        </div>

        {/* Hero Image — Next.js Image for auto optimization */}
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <Image
            src="/images/payment-success.webp"
            alt="PM Kisan 23vi kist payment successful — kisan ke bank account mein paisa transfer"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan 23vi Kist — 9.44 Crore Kisanon Ko ₹2,000 Mila</p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>PM Kisan 23vi kist release ho chuki hai.</strong> Pradhan Mantri Narendra Modi ne Hooghly, West Bengal se yeh installment digitally release ki, jisse <strong>9.44 crore se zyada kisanon</strong> ko ₹2,000 mila — total <strong>₹18,880 crore</strong> DBT se transfer hue.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Agar aapko abhi tak paisa aaya ya nahi confirm karna hai, toh neeche step-by-step guide follow karo.
          </p>
          <p className="text-gray-700 text-sm mb-4">Sab clear ho jayega.</p>
          <IB>
            <strong>✅ Yaad Rakho:</strong> Paisa seedha Aadhaar-linked bank account mein aata hai. Kisi bichauliye ya agent ki zaroorat nahi. Koi paisa maange toh fraud hai.
          </IB>
        </section>

        {/* Kist Details Table */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            PM Kisan 23vi Kist Details
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            PM Kisan Yojana mein har saal <strong>3 kist</strong> aati hain — har ek <strong>₹2,000</strong> ki, har 4 mahine mein. 23vi kist April-July 2026 cycle ki hai. Pattern ke hisaab se <strong>24vi kist August-November 2026</strong> mein expected hai.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Installment</th>
                  <th className="p-3 text-left">Release Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kist: '23vi Kist', date: '20 June 2026', amount: '₹2,000', status: '✅ Released', highlight: true },
                  { kist: '22vi Kist', date: '13 March 2026', amount: '₹2,000', status: 'Released', highlight: false },
                  { kist: '21vi Kist', date: 'November 2025', amount: '₹2,000', status: 'Released', highlight: false },
                  { kist: '24vi Kist', date: 'Expected: Aug–Nov 2026', amount: '₹2,000', status: '⏳ Expected', highlight: false, upcoming: true },
                ].map((row) => (
                  <tr key={row.kist} className={row.highlight ? 'bg-green-50 font-medium' : row.upcoming ? 'bg-yellow-50' : 'bg-white'}>
                    <td className="p-3 border-b font-semibold text-xs">{row.kist}</td>
                    <td className="p-3 border-b text-xs text-gray-700">{row.date}</td>
                    <td className="p-3 border-b text-xs font-medium">{row.amount}</td>
                    <td className="p-3 border-b text-xs">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        row.highlight ? 'bg-green-100 text-green-800' :
                        row.upcoming ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Note: 24vi kist ki exact date abhi officially announce nahi hui.</p>
        </section>

        {/* Status Check Steps */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Status Check Guide — Mobile Se
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Ghar baithe mobile se status check karo:
          </p>
          <StepList>
            <SI n={1}>Official website <strong>pmkisan.gov.in</strong> par jao</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> → <strong>"Know Your Status"</strong> click karo</SI>
            <SI n={3}>Apna <strong>Registration Number</strong> dalo (yaad nahi toh "Know your registration no." se mobile/Aadhaar se nikalo)</SI>
            <SI n={4}><strong>Captcha</strong> bharo → <strong>"Get Data"</strong> click karo</SI>
            <SI n={5}>Status dikh jayega — <strong>23vi kist aayi ya nahi, sab kuch dikhega</strong></SI>
          </StepList>
          <IB>
            <strong>💡 FTO Processed?</strong> Agar status mein "FTO Processed" likha hai toh Fund Transfer Order successful hai — paisa 24-48 ghante mein account mein aa jayega.
          </IB>
          <WB>
            <strong>📱 Mobile App:</strong> PM Kisan Mobile App (Play Store) se bhi status check, eKYC, aur details update kar sakte ho. Website slow ho toh app try karo.
          </WB>
        </section>

        {/* Eligibility */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Eligibility — Kaun Apply Kar Sakta Hai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-black text-green-800 text-sm mb-2">✅ Eligible</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>✓ Cultivable zameen wale small/marginal farmers</li>
                <li>✓ Zameen official land records mein ho</li>
                <li>✓ Aadhaar card mandatory</li>
                <li>✓ Bank account Aadhaar-linked</li>
                <li>✓ Women farmers (apne naam par zameen)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-black text-red-800 text-sm mb-2">❌ Not Eligible</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>✗ Income tax payers</li>
                <li>✗ Sarkari employees (Group D chhodkar)</li>
                <li>✗ Pension ₹10,000+/month wale</li>
                <li>✗ Doctors, Engineers, CA, Lawyers</li>
                <li>✗ Institutional landholders (trust/company)</li>
                <li>✗ MPs, MLAs, Mayors, Panchayat Chairpersons</li>
              </ul>
            </div>
          </div>
          <DB>
            <strong>⚠️ Dhyan Dein:</strong> Family ke ek bhi member upar wali list mein aata hai toh poora parivar ineligible. Ek family = ek beneficiary.
          </DB>
        </section>

        {/* Common Problems */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Common Problems & Solutions
          </h2>
          <div className="space-y-3">
            {[
              { err: 'Paisa Nahi Aaya', fix: 'pmkisan.gov.in par status check karo. eKYC pending? → Complete karo. Land Seeding nahi? → Patwari se verify karwao. NPCI link nahi? → Bank jao. FTO Processed? → 24-48 ghante wait karo.' },
              { err: 'eKYC Pending', fix: 'pmkisan.gov.in → eKYC → Aadhaar OTP se verify karo. Ya CSC center par biometric se karwao. Bina eKYC ke kist nahi milegi.' },
              { err: 'Aadhaar Authentication Failed', fix: 'Naam mismatch hai. Block Agriculture Officer (BAO) se milo, written application do. Naam exactly Aadhaar jaisa hona chahiye.' },
              { err: 'Payment Reversed / Wapas Aa Gayi', fix: 'Bank account inactive ya naam mismatch. Bank jao → Account activate karwao → Portal par updated bank details daalo.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 border-b border-red-100 px-4 py-2.5">
                  <p className="font-black text-red-800 text-sm">❌ {err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <span className="text-green-600 font-black text-xs shrink-0">✅ FIX:</span>
                    <p className="text-xs text-green-800 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Helpline */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 p-5 mb-8">
          <h3 className="font-black text-[#14532d] mb-3 text-base">📞 PM Kisan Helpline</h3>
          <div className="text-sm text-gray-800 space-y-1">
            <p>📞 Toll Free: <a href="tel:155261" className="font-bold text-[#14532d] hover:underline">155261</a></p>
            <p>📞 Helpline: <a href="tel:01124300606" className="font-bold text-[#14532d] hover:underline">011-24300606</a></p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-[#14532d] hover:underline">pmkisan-ict@gov.in</a></p>
            <p>🌐 Portal: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#14532d] hover:underline">pmkisan.gov.in ↗</a></p>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Aksar Puche Jane Wale Sawal
          </h2>
          <SvgFAQ caption="PM Kisan 23vi Kist FAQ 2026 — Real Answers" />
          <div className="space-y-3 mt-4">
            {FAQS_DATA.map(({ q, a }) => (
              <details key={q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 font-semibold text-gray-900 cursor-pointer bg-gray-50 hover:bg-green-50 text-sm flex justify-between items-center gap-3">
                  <span>{q}</span>
                  <span className="text-green-600 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="p-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Status Check Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
        />

        <CalcBanner />
        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}