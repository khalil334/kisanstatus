/**
 * PM Kisan Status Check Page
 * "PM Kisan Beneficiary Status 2026 Direct Link"
 * Complete step-by-step guide + installment history table
 */
import type { Metadata } from 'next';
import Link from 'next/link';

// ── Page metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'PM Kisan Beneficiary Status Check 2026 – 23vi Kist | Direct pmkisan.gov.in Link',
  description:
    'Check PM Kisan Samman Nidhi Status 2026 directly. Step-by-step guide to check installment status on pmkisan.gov.in using Aadhaar, account number or mobile number.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/pm-kisan-status' },
  keywords: [
    'PM Kisan status check 2026',
    'PM Kisan 23vi kist status 2026',
    'pmkisan.gov.in beneficiary status',
    'PM Kisan payment status',
  ],
};

export const revalidate = 86400;

// ── Full installment history (2019–2024) ──────────────────────────────────────
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
  { no: 22, period: 'Dec 2025 – Mar 2026',  released: '13 Mar 2026',   amount: 2000, highlight: true },
];

// ── Detailed steps ────────────────────────────────────────────────────────────
const steps = [
  {
    no: 1,
    title: 'Open the Official PM Kisan Website',
    details: [
      'Open your browser (Chrome, Firefox, or Safari)',
      'Visit: https://pmkisan.gov.in/',
      'Or directly go to: https://pmkisan.gov.in/BeneficiaryStatus.aspx',
    ],
  },
  {
    no: 2,
    title: 'Navigate to "Beneficiary Status"',
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
      '• Aadhaar Number (12-digit Aadhaar card number)',
      '• Account Number (Bank account linked to PM Kisan)',
      '• Mobile Number (Registered mobile number)',
    ],
  },
  {
    no: 4,
    title: 'Enter Your Details',
    details: [
      'Type your selected identifier (Aadhaar/Account/Mobile)',
      'Enter the CAPTCHA shown on screen',
      'Click the "Get Data" button',
    ],
  },
  {
    no: 5,
    title: 'View Your Payment Status',
    details: [
      'Your complete payment history will be displayed',
      'Check installment dates, amounts, and payment mode',
      'If status shows "Pending" — complete eKYC at pmkisan.gov.in/eKYC.aspx',
    ],
  },
];

// ── Page Component ────────────────────────────────────────────────────────────
export default function PMKisanStatusPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">PM Kisan Status</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            PM Kisan Beneficiary Status 2026
          </h1>
          <p className="text-green-100 mt-2 text-sm md:text-base">
            Direct link to official pmkisan.gov.in — Check your 22vi/23vi kist status
          </p>
        </div>
      </div>

      <div className="container-site py-10 space-y-12">
        {/* ── BIG CTA ── */}
        <div className="card text-center py-8">
          <span className="text-4xl mb-4 block" aria-hidden="true">🌾</span>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Check Your PM Kisan Status Directly
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Click the button below to open the official Government of India PM Kisan
            beneficiary status page in a new tab.
          </p>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8"
          >
            ✅ Check Status on pmkisan.gov.in ↗
          </a>
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
            <span>🔒 Official Govt. Website</span>
            <span>📱 Works on Mobile</span>
            <span>⚡ No Registration Needed</span>
          </div>
        </div>

        {/* ── STEP-BY-STEP GUIDE ── */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="section-title mb-6">
            Step-by-Step: How to Check PM Kisan Status
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.no} className="card flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {step.no}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
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

        {/* ── EKYC ALERT ── */}
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0" aria-hidden="true">⚠️</span>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">eKYC is Mandatory</h3>
              <p className="text-sm text-yellow-900 leading-relaxed">
                If your payment status shows <strong>"Pending"</strong>, you must complete
                eKYC verification. Visit the official eKYC page and complete OTP-based or
                biometric verification using your Aadhaar number.
              </p>
              <a
                href="https://pmkisan.gov.in/eKYC.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-yellow-800 underline hover:no-underline"
              >
                Complete eKYC Now ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── INSTALLMENT HISTORY TABLE ── */}
        <section aria-labelledby="history-heading">
          <h2 id="history-heading" className="section-title mb-2">
            PM Kisan Installment Date List (2019–2026)
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Complete installment release dates — 1st to 22nd installment
          </p>

          <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
            <table
              className="data-table w-full text-sm min-w-[480px]"
              aria-label="PM Kisan all installment dates"
            >
              <thead>
                <tr>
                  <th scope="col" className="whitespace-nowrap">Installment</th>
                  <th scope="col">Period</th>
                  <th scope="col" className="whitespace-nowrap">Released On</th>
                  <th scope="col" className="whitespace-nowrap">Amount</th>
                </tr>
              </thead>
              <tbody>
                {allInstallments.map((inst) => (
                  <tr
                    key={inst.no}
                    className={inst.highlight ? 'bg-green-50 font-medium' : ''}
                  >
                    <td className="whitespace-nowrap font-semibold text-primary-700">
                      {inst.no}{(inst.no >= 11 && inst.no <= 13) ? 'th' : inst.no % 10 === 1 ? 'st' : inst.no % 10 === 2 ? 'nd' : inst.no % 10 === 3 ? 'rd' : 'th'} Installment
                      {inst.highlight && (
                        <span className="ml-2 badge-accent text-xs !py-0">Latest</span>
                      )}
                    </td>
                    <td>{inst.period}</td>
                    <td className="whitespace-nowrap">{inst.released}</td>
                    <td className="whitespace-nowrap font-medium">₹{inst.amount.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
                {/* Upcoming row */}
                <tr className="bg-yellow-50">
                  <td className="font-semibold text-yellow-700">23vi Kist (Expected Jun-Jul 2026)</td>
                  <td>Abhi announce nahi hua</td>
                  <td className="text-yellow-700 font-medium">Date announced nahi</td>
                  <td className="font-medium">₹2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Source:{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
              pmkisan.gov.in ↗
            </a>
          </p>
        </section>

        {/* ── TROUBLESHOOTING ── */}
        <section aria-labelledby="trouble-heading">
          <h2 id="trouble-heading" className="section-title mb-6">
            PM Kisan Mein Aam Dikkatein Aur Hal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                problem: 'Payment status shows "Pending"',
                solution: 'pmkisan.gov.in/eKYC.aspx par eKYC complete karo aur bank account ko Aadhaar se link karo.',
              },
              {
                problem: '"Aadhaar not found" error',
                solution: 'Nazdiki CSC (Common Service Centre) ya Gram Panchayat mein jao — wahan Aadhaar ko PM Kisan registration se link karwa sakte ho.',
              },
              {
                problem: 'Bank account not verified',
                solution: 'Bank branch mein jao aur confirm karo ki Aadhaar seeding ho gayi hai — bina Aadhaar seeding ke DBT payment nahi aata.',
              },
              {
                problem: 'Land records not verified',
                solution: 'Apne gaon ke Patwari ya Lekhpal se milo — Khasra/Khatauni mein naam theek karwana hoga. Block Agriculture Office bhi madad karta hai.',
              },
            ].map((item) => (
              <div key={item.problem} className="card">
                <h3 className="font-semibold text-red-600 text-sm mb-2 flex items-start gap-2">
                  <span aria-hidden="true">❌</span> {item.problem}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Helpline ── */}
        <div className="news-box">
          <h3 className="font-semibold text-green-800 mb-2">PM Kisan Helpline</h3>
          <div className="text-sm text-green-900 space-y-1">
            <p>📞 Toll Free: <a href="tel:155261" className="font-semibold underline">155261</a></p>
            <p>📞 Helpline: <a href="tel:01124300606" className="font-semibold underline">011-24300606</a></p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-semibold underline">pmkisan-ict@gov.in</a></p>
            <p>🌐 Website: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold underline">pmkisan.gov.in ↗</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
