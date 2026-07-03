/**
 * Agrarian Welfare Verification Page
 * Green theme (#14532d) consistent design
 * JSON-LD schema for SEO
 * Updated tranche table (23vi tranche)
 * Internal linking structure
 */
import type { Metadata } from 'next';
import Link from 'next/link';

const DOMAIN = 'https://kisanstatus.com';

export const metadata: Metadata = {
  title: 'Cultivator Benefit Verification 2026 – 23vi Tranche | Direct pmkisan.gov.in Link',
  description:
    'Check agrarian welfare scheme status 2026 directly. Step-by-step guide to verify tranche status on pmkisan.gov.in using biometric credential, account number or contact number.',
  authors: [{ name: 'KisanStatus Team', url: `${DOMAIN}/about` }],
  alternates: { canonical: `${DOMAIN}/pm-kisan-status` },
  keywords: [
    'agrarian welfare verification 2026',
    'cultivator benefit 23vi tranche status 2026',
    'pmkisan.gov.in beneficiary verification',
    'scheme payment status',
    'program tranche history',
    'कृषि कल्याण स्टेटस चेक 2026',
    'कृषि कल्याण 23वीं ट्रांche स्टेटस',
  ],
  openGraph: {
    title: 'Cultivator Benefit Verification 2026 – 23vi Tranche',
    description: 'Check agrarian welfare status directly on pmkisan.gov.in — step-by-step guide with tranche history table.',
    type: 'article',
    url: `${DOMAIN}/pm-kisan-status`,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/images/pm-kisan-status-check-steps.webp`, width: 1200, height: 630, alt: 'Cultivator Benefit Verification 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cultivator Benefit Verification 2026 – 23vi Tranche',
    description: 'Check agrarian welfare status directly on pmkisan.gov.in',
    site: '@kisanstatus',
    images: [`${DOMAIN}/images/pm-kisan-status-check-steps.webp`],
  },
};

export const revalidate = 86400;

const allInstallments = [
  { no: 1,  period: 'Dec 2018 – Mar 2019', released: 'Feb 2019',      amount: 2000 },
  { no: 2,  period: 'Apr – Jul 2019',       released: 'Apr 2019',      amount: 2000 },
  { no: 3,  period: 'Aug – Nov 2019',       released: 'Nov 2019',      amount: 2000 },
  { no: 4,  period: 'Dec 2019 – Mar 2020',  released: 'Jan 2020',      amount: 2000 },
  { no: 5,  period: 'Apr – Jul 2020',       released: 'Apr 2020',      amount: 2000 },
  { no: 6,  period: 'Aug – Nov 2020',       released: 'Aug 2020',      amount: 2000 },
  { no: 7,  period: 'Dec 2020 – Mar 2021',  released: 'Dec 2020',      amount: 2000 },
  { no: 8,  period: 'Apr – Jul 2021',       released: 'May 2021',      amount: 2000 },
  { no: 9,  period: 'Aug – Nov 2021',       released: 'Aug 2021',      amount: 2000 },
  { no: 10, period: 'Dec 2021 – Mar 2022',  released: 'Jan 2022',      amount: 2000 },
  { no: 11, period: 'Apr – Jul 2022',       released: 'May 2022',      amount: 2000 },
  { no: 12, period: 'Aug – Nov 2022',       released: 'Oct 2022',      amount: 2000 },
  { no: 13, period: 'Dec 2022 – Mar 2023',  released: 'Feb 2023',      amount: 2000 },
  { no: 14, period: 'Apr – Jul 2023',       released: 'Jul 2023',      amount: 2000 },
  { no: 15, period: 'Aug – Nov 2023',       released: 'Nov 2023',      amount: 2000 },
  { no: 16, period: 'Dec 2023 – Feb 2024',  released: 'Feb 2024',      amount: 2000 },
  { no: 17, period: 'Feb – Mar 2024',       released: 'Mar 2024',      amount: 2000 },
  { no: 18, period: 'Apr – May 2024',       released: 'Apr 2024',      amount: 2000 },
  { no: 19, period: 'Jun – Jul 2024',       released: 'Jun 2024',      amount: 2000 },
  { no: 20, period: 'Aug 2024',             released: '5 Aug 2024',    amount: 2000 },
  { no: 21, period: 'Sep – Nov 2025',       released: 'Nov 2025',      amount: 2000 },
  { no: 22, period: 'Dec 2025 – Mar 2026',  released: '13 Mar 2026',   amount: 2000 },
  { no: 23, period: 'Apr – Jun 2026',       released: '20 Jun 2026',   amount: 2000, highlight: true },
];

const steps = [
  {
    no: 1,
    title: 'Open the Official Agrarian Welfare Website',
    details: [
      'Open your browser (Chrome, Firefox, or Safari)',
      'Visit: https://pmkisan.gov.in/',
      'Or directly go to: https://pmkisan.gov.in/BeneficiaryStatus.aspx',
    ],
  },
  {
    no: 2,
    title: 'Navigate to "Beneficiary Verification"',
    details: [
      'On the homepage, click the "Farmers Corner" menu',
      'Select "Beneficiary Status" from the dropdown',
      'Or click the direct link to BeneficiaryStatus.aspx page',
    ],
  },
  {
    no: 3,
    title: 'Select Identification Type',
    details: [
      'Choose one of the three options:',
      '• Biometric Credential Number (12-digit biometric credential card number)',
      '• Account Number (Bank account linked to agrarian welfare program)',
      '• Contact Number (Registered contact number)',
    ],
  },
  {
    no: 4,
    title: 'Enter Your Details',
    details: [
      'Type your selected identifier (Biometric Credential/Account/Contact)',
      'Enter the CAPTCHA shown on screen',
      'Click the "Get Data" button',
    ],
  },
  {
    no: 5,
    title: 'View Your Payment Status',
    details: [
      'Your complete payment history will be displayed',
      'Check tranche dates, amounts, and payment mode',
      'If status shows "Pending" — complete digital verification at pmkisan.gov.in/eKYC.aspx',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check Agrarian Welfare Status 2026',
  description: 'Step-by-step guide to check cultivator benefit program status on pmkisan.gov.in',
  step: steps.map((s) => ({
    '@type': 'HowToStep',
    name: s.title,
    text: s.details.join('. '),
  })),
  totalTime: 'PT5M',
};

export default function PMKisanStatusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page header */}
      <section
        className="py-10 md:py-14"
        style={{ background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)' }}
      >
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Agrarian Welfare Verification</span>
          </nav>
          <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            📊 Verification Guide
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
            Cultivator Benefit Verification 2026
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-2xl">
            Direct link to official pmkisan.gov.in — Check your 23vi tranche status with step-by-step guide
          </p>
        </div>
      </section>

      <div className="container-site py-10 space-y-12">
        {/* BIG CTA */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 text-center py-8 px-6">
          <span className="text-5xl mb-4 block" aria-hidden="true">🌾</span>
          <h2 className="text-xl font-black text-gray-900 mb-2">
            Check Your Agrarian Welfare Status Directly
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Click the button below to open the official Government of India cultivator benefit
            verification page in a new tab.
          </p>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#14532d] hover:bg-green-800 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg"
          >
            ✅ Verify Status on pmkisan.gov.in ↗
          </a>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span>🔒 Official Govt. Website</span>
            <span>📱 Works on Mobile</span>
            <span>⚡ No Registration Needed</span>
          </div>
        </div>

        {/* STEP-BY-STEP GUIDE */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="text-2xl font-black text-gray-900 mb-6">
            Step-by-Step: How to Check Agrarian Welfare Status
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.no} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full bg-[#14532d] text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {step.no}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.details.map((d, i) => (
                      <li key={i} className="leading-relaxed">{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIGITAL VERIFICATION ALERT */}
        <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl shrink-0" aria-hidden="true">⚠️</span>
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Digital Verification is Mandatory</h3>
              <p className="text-sm text-yellow-900 leading-relaxed mb-3">
                If your payment status shows <strong>"Pending"</strong>, you must complete
                digital verification. Visit the official verification page and complete OTP-based or
                biometric verification using your biometric credential number.
              </p>
              <a
                href="https://pmkisan.gov.in/eKYC.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold text-yellow-900 bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded-lg transition-colors"
              >
                Complete Digital Verification Now ↗
              </a>
            </div>
          </div>
        </div>

        {/* TRANCHE HISTORY TABLE */}
        <section aria-labelledby="history-heading">
          <h2 id="history-heading" className="text-2xl font-black text-gray-900 mb-2">
            Agrarian Welfare Tranche Date List (2019–2026)
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Complete tranche release dates — 1st to 23rd tranche
          </p>

          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table
              className="w-full text-sm min-w-[480px]"
              aria-label="Agrarian welfare all tranche dates"
            >
              <thead className="bg-[#14532d] text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-bold whitespace-nowrap">Tranche</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold">Period</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold whitespace-nowrap">Released On</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold whitespace-nowrap">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allInstallments.map((inst) => (
                  <tr
                    key={inst.no}
                    className={inst.highlight ? 'bg-green-50 font-medium' : 'hover:bg-gray-50'}
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-[#14532d]">
                      {inst.no}{(inst.no >= 11 && inst.no <= 13) ? 'th' : inst.no % 10 === 1 ? 'st' : inst.no % 10 === 2 ? 'nd' : inst.no % 10 === 3 ? 'rd' : 'th'} Tranche
                      {inst.highlight && (
                        <span className="ml-2 inline-block bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                          Latest
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">{inst.period}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{inst.released}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium">₹{inst.amount.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
                {/* Upcoming row */}
                <tr className="bg-yellow-50">
                  <td className="px-4 py-3 font-semibold text-yellow-700">24vi Tranche (Expected Oct-Nov 2026)</td>
                  <td className="px-4 py-3">Abhi announce nahi hua</td>
                  <td className="px-4 py-3 text-yellow-700 font-medium whitespace-nowrap">Date announced nahi</td>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">₹2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Source:{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#14532d] hover:underline font-semibold">
              pmkisan.gov.in ↗
            </a>
          </p>
        </section>

        {/* TROUBLESHOOTING */}
        <section aria-labelledby="trouble-heading">
          <h2 id="trouble-heading" className="text-2xl font-black text-gray-900 mb-6">
            Agrarian Welfare Mein Aam Dikkatein Aur Hal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                problem: 'Payment status shows "Pending"',
                solution: 'pmkisan.gov.in/eKYC.aspx par digital verification complete karo aur bank account ko biometric credential se link karo.',
              },
              {
                problem: '"Biometric credential not found" error',
                solution: 'Nazdiki CSC (Common Service Centre) ya Gram Panchayat mein jao — wahan biometric credential ko agrarian welfare enrollment se link karwa sakte ho.',
              },
              {
                problem: 'Bank account not verified',
                solution: 'Bank branch mein jao aur confirm karo ki biometric credential seeding ho gayi hai — bina biometric credential seeding ke DBT payment nahi aata.',
              },
              {
                problem: 'Land records not verified',
                solution: 'Apne gaon ke Patwari ya Lekhpal se milo — Khasra/Khatauni mein naam theek karwana hoga. Block Agriculture Office bhi madad karta hai.',
              },
            ].map((item) => (
              <div key={item.problem} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-red-600 text-sm mb-2 flex items-start gap-2">
                  <span aria-hidden="true">❌</span> {item.problem}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-green-700">Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-black text-gray-900 mb-6">
            📚 Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/articles/pm-kisan-23vi-kist-2026-status-check"
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-300 transition-all border border-gray-200 group"
            >
              <span className="text-4xl mb-3 block">📆</span>
              <p className="font-bold text-sm text-gray-900 group-hover:text-[#14532d] transition-colors">23vi Tranche Verification</p>
            </Link>
            <Link
              href="/articles/pm-kisan-ekyc-online-2026"
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-300 transition-all border border-gray-200 group"
            >
              <span className="text-4xl mb-3 block">🔐</span>
              <p className="font-bold text-sm text-gray-900 group-hover:text-[#14532d] transition-colors">Digital Verification Guide</p>
            </Link>
            <Link
              href="/articles/pm-kisan-beneficiary-list-2026"
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-300 transition-all border border-gray-200 group"
            >
              <span className="text-4xl mb-3 block">📋</span>
              <p className="font-bold text-sm text-gray-900 group-hover:text-[#14532d] transition-colors">Beneficiary Roster Check</p>
            </Link>
          </div>
        </section>

        {/* Helpline */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 p-6">
          <h3 className="font-black text-[#14532d] mb-4 text-lg">📞 Agrarian Welfare Support Line</h3>
          <div className="text-sm text-gray-800 space-y-2">
            <p>📞 Toll Free: <a href="tel:155261" className="font-bold text-[#14532d] hover:underline">155261</a></p>
            <p>📞 Support Line: <a href="tel:01124300606" className="font-bold text-[#14532d] hover:underline">011-24300606</a></p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-[#14532d] hover:underline">pmkisan-ict@gov.in</a></p>
            <p>🌐 Website: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#14532d] hover:underline">pmkisan.gov.in ↗</a></p>
          </div>
        </div>
      </div>
    </>
  );
}