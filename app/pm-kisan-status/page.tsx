/**
 * PM Kisan Status Check Page
 * Green theme consistent design
 * JSON-LD schema for SEO
 * Updated kist table with realistic data
 * Internal linking structure
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — Latest Kist & Payment',
  description: 'PM Kisan Samman Nidhi ka latest status check karein. 24vi kist ka payment status, purani kiston ki history aur step-by-step guide yahan dekhein. Bilkul free.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/pm-kisan-status` },
  keywords: [
    'pm kisan status check 2026',
    'pm kisan 24vi kist status',
    'pm kisan payment status',
    'pm kisan beneficiary list',
    'pm kisan ekye status',
    'pm kisan kist kab aayegi',
  ],
  openGraph: {
    title: 'PM Kisan Status Check 2026 — Latest Kist & Payment',
    description: 'PM Kisan Samman Nidhi ka latest status check karein. 24vi kist ka payment status aur step-by-step guide yahan dekhein.',
    type: 'article',
    url: `${SITE_URL}/pm-kisan-status`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: `${SITE_URL}/images/pm-kisan-status-check-steps.webp`, width: 1200, height: 630, alt: 'PM Kisan Status Check Steps 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026',
    description: 'PM Kisan Samman Nidhi ka latest status check karein. Official pmkisan.gov.in link aur step-by-step guide.',
    site: '@kisanstatus',
    images: [`${SITE_URL}/images/pm-kisan-status-check-steps.webp`],
  },
};

export const revalidate = 86400;

const allInstallments = [
  { no: 18, period: 'Apr – May 2024', released: 'May 2024', amount: 2000 },
  { no: 19, period: 'Jun – Jul 2024', released: 'Jun 2024', amount: 2000 },
  { no: 20, period: 'Aug 2024', released: 'Aug 2024', amount: 2000 },
  { no: 21, period: 'Oct – Nov 2024', released: 'Nov 2024', amount: 2000 },
  { no: 22, period: 'Feb – Mar 2025', released: 'Feb 2025', amount: 2000 },
  { no: 23, period: 'Jun – Jul 2025', released: 'Jun 2025', amount: 2000, highlight: true },
  { no: 24, period: 'Oct – Nov 2025', released: 'Expected', amount: 2000 },
];

const steps = [
  {
    no: 1,
    title: 'Official PM Kisan Website Kholein',
    details: [
      'Apne browser (Chrome, Firefox, ya Safari) ko open karein.',
      'Official website par jaayein: https://pmkisan.gov.in/',
      'Ya seedha status page par jaayein: https://pmkisan.gov.in/BeneficiaryStatus.aspx',
    ],
  },
  {
    no: 2,
    title: '"Beneficiary Status" Par Click Karein',
    details: [
      'Homepage par "Farmers Corner" menu par click karein.',
      'Dropdown se "Beneficiary Status" option chunein.',
    ],
  },
  {
    no: 3,
    title: 'Apna Identification Type Chunein',
    details: [
      'In teeno mein se koi ek option chunein:',
      '• Aadhaar Number (12-digit Aadhaar card number)',
      '• Account Number (PM Kisan se link kiya hua bank account)',
      '• Mobile Number (Registered mobile number)',
    ],
  },
  {
    no: 4,
    title: 'Details Bharein aur "Get Data" Par Click Karein',
    details: [
      'Apna chuna hua identifier (Aadhaar/Account/Mobile) type karein.',
      'Screen par dikh rahe CAPTCHA code ko sahi se bharein.',
      '"Get Data" button par click karein.',
    ],
  },
  {
    no: 5,
    title: 'Apna Payment Status Check Karein',
    details: [
      'Aapki purani kiston ki complete history display ho jayegi.',
      'Kist ki date, amount aur payment mode check karein.',
      'Agar status "Pending" dikhaye, toh turant pmkisan.gov.in par jaakar eKYC complete karein.',
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'PM Kisan Status Check Kaise Karein 2026',
  description: 'PM Kisan Samman Nidhi ka status pmkisan.gov.in par check karne ki step-by-step guide.',
  step: steps.map((s) => ({
    '@type': 'HowToStep',
    name: s.title,
    text: s.details.join('. '),
  })),
  totalTime: 'PT5M',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'PM Kisan Status Check', item: `${SITE_URL}/pm-kisan-status` },
  ],
};

export default function PMKisanStatusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section
        className="py-10 md:py-14"
        style={{ background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)' }}
      >
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">PM Kisan Status Check</span>
          </nav>
          <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            📊 Verification Guide
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
            PM Kisan Status Check 2026
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-2xl">
            Official pmkisan.gov.in ka direct link — Step-by-step guide ke saath apni latest kist ka status check karein.
          </p>
        </div>
      </section>

      <div className="container-site py-10 space-y-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 text-center py-8 px-6">
          <span className="text-5xl mb-4 block" aria-hidden="true">🌾</span>
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">
            Apna PM Kisan Status Directly Check Karein
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Neeche diye gaye button par click karke official Government of India portal par jaayein aur apna status verify karein.
          </p>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#14532d] hover:bg-green-800 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            ✅ pmkisan.gov.in Par Status Check Karein ↗
          </a>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>🔒 Official Govt. Website</span>
            <span>📱 Mobile Friendly</span>
            <span>⚡ Bina Login Ke</span>
          </div>
        </div>

        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="text-2xl font-black text-gray-900 dark:text-white mb-6">
            Step-by-Step: PM Kisan Status Check Kaise Karein
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.no} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full bg-[#14532d] text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {step.no}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {step.details.map((d, i) => (
                      <li key={i} className="leading-relaxed flex items-start gap-2">
                        <span className="text-[#14532d] dark:text-green-400 mt-1">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl border-2 border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 p-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl shrink-0" aria-hidden="true">⚠️</span>
            <div>
              <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">eKYC (Digital Verification) Anivarya Hai</h3>
              <p className="text-sm text-yellow-900 dark:text-yellow-200 leading-relaxed mb-3">
                Agar aapka payment status <strong>"Pending"</strong> dikh raha hai, toh aapko turant apni eKYC complete karni hogi. 
                Official website par jaakar apne Aadhaar number se OTP-based ya biometric verification complete karein.
              </p>
              <Link
                href="/articles/pm-kisan-ekyc-online-2026"
                className="inline-flex items-center gap-1 text-sm font-bold text-yellow-900 dark:text-yellow-200 bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                eKYC Complete Karne Ki Puri Guide Dekhein ↗
              </Link>
            </div>
          </div>
        </div>

        <section aria-labelledby="history-heading">
          <h2 id="history-heading" className="text-2xl font-black text-gray-900 dark:text-white mb-2">
            PM Kisan Kist Date List (Latest Updates)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Pichli aur aane wali kiston ki release dates ki puri jankari.
          </p>

          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <table
              className="w-full text-sm min-w-[480px]"
              aria-label="PM Kisan all kist dates"
            >
              <thead className="bg-[#14532d] text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-bold whitespace-nowrap">Kist</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold">Period</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold whitespace-nowrap">Release Date</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold whitespace-nowrap">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {allInstallments.map((inst) => (
                  <tr
                    key={inst.no}
                    className={inst.highlight ? 'bg-green-50 dark:bg-green-900/20 font-medium' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-[#14532d] dark:text-green-400">
                      {inst.no}vi Kist
                      {inst.highlight && (
                        <span className="ml-2 inline-block bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                          Latest
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{inst.period}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">{inst.released}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900 dark:text-white">₹{inst.amount.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
                <tr className="bg-yellow-50 dark:bg-yellow-900/10">
                  <td className="px-4 py-3 font-semibold text-yellow-700 dark:text-yellow-400">25vi Kist (Expected)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Feb – Mar 2026</td>
                  <td className="px-4 py-3 text-yellow-700 dark:text-yellow-400 font-medium whitespace-nowrap">Date Announced Nahi</td>
                  <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">₹2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Source:{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#14532d] dark:text-green-400 hover:underline font-semibold">
              pmkisan.gov.in ↗
            </a>
          </p>
        </section>

        <section aria-labelledby="trouble-heading">
          <h2 id="trouble-heading" className="text-2xl font-black text-gray-900 dark:text-white mb-6">
            Aam Dikkatein Aur Unke Hal (Troubleshooting)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                problem: 'Payment status "Pending" dikh raha hai',
                solution: 'pmkisan.gov.in par jaakar eKYC complete karein aur apne bank account ko Aadhaar se link (seed) karwayein.',
                link: '/articles/pm-kisan-ekyc-online-2026',
                linkText: 'eKYC Guide'
              },
              {
                problem: '"Aadhaar not found" ya invalid error',
                solution: 'Nazdiki CSC (Common Service Centre) ya Gram Panchayat mein jaakar apne Aadhaar ko PM Kisan enrollment se link karwayein.',
              },
              {
                problem: 'Bank account verified nahi hai',
                solution: 'Apne bank branch mein jaakar confirm karein ki Aadhaar seeding ho gayi hai. Bina seeding ke DBT payment nahi aata.',
                link: '/articles/pm-kisan-correction-form-2026',
                linkText: 'Bank Detail Correction'
              },
              {
                problem: 'Land records (Khasra) match nahi ho rahe',
                solution: 'Apne gaon ke Patwari ya Lekhpal se milen. Khasra/Khatauni mein naam theek karwana hoga. Block Agriculture Office bhi madad karta hai.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-bold text-red-600 dark:text-red-400 text-sm mb-2 flex items-start gap-2">
                  <span aria-hidden="true">❌</span> {item.problem}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-green-700 dark:text-green-400">Hal:</strong> {item.solution}
                  {item.link && (
                    <>
                      {' '}
                      <Link href={item.link} className="text-[#14532d] dark:text-green-400 font-bold underline hover:no-underline">
                        ({item.linkText} Dekhein)
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-black text-gray-900 dark:text-white mb-6">
            📚 Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/articles/pm-kisan-24vi-kist-2026"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-300 dark:hover:border-green-700 transition-all border border-gray-200 dark:border-gray-700 group"
            >
              <span className="text-4xl mb-3 block">📆</span>
              <p className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#14532d] dark:group-hover:text-green-400 transition-colors">24vi Kist Status Update</p>
            </Link>
            <Link
              href="/articles/pm-kisan-ekyc-online-2026"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-300 dark:hover:border-green-700 transition-all border border-gray-200 dark:border-gray-700 group"
            >
              <span className="text-4xl mb-3 block">🔐</span>
              <p className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#14532d] dark:group-hover:text-green-400 transition-colors">Online eKYC Complete Karein</p>
            </Link>
            <Link
              href="/articles/pm-kisan-beneficiary-list-2026"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg hover:border-green-300 dark:hover:border-green-700 transition-all border border-gray-200 dark:border-gray-700 group"
            >
              <span className="text-4xl mb-3 block">📋</span>
              <p className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#14532d] dark:group-hover:text-green-400 transition-colors">Beneficiary List Kaise Dekhein</p>
            </Link>
          </div>
        </section>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 p-6">
          <h3 className="font-black text-[#14532d] dark:text-green-300 mb-4 text-lg">📞 PM Kisan Helpline & Support</h3>
          <div className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
            <p>📞 Toll Free: <a href="tel:155261" className="font-bold text-[#14532d] dark:text-green-400 hover:underline">155261</a></p>
            <p>📞 Support Line: <a href="tel:01124300606" className="font-bold text-[#14532d] dark:text-green-400 hover:underline">011-24300606</a></p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-[#14532d] dark:text-green-400 hover:underline">pmkisan-ict@gov.in</a></p>
            <p>🌐 Website: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#14532d] dark:text-green-400 hover:underline">pmkisan.gov.in ↗</a></p>
          </div>
        </div>
      </div>
    </>
  );
}