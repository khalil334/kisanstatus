/**
 * New PM Kisan Registration Page
 * Complete guide: How to apply/register for PM Kisan Samman Nidhi Yojana
 * Official registration link: https://pmkisan.gov.in/NewFarmerRegistration.aspx
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PM Kisan New Registration 2026 – How to Apply Online at pmkisan.gov.in',
  description:
    'Apply for PM Kisan Samman Nidhi Yojana 2026. Step-by-step guide to register online at pmkisan.gov.in/NewFarmerRegistration.aspx. Documents required, eligibility criteria, and direct registration link.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/new-registration' },
  keywords: [
    'PM Kisan new registration 2026',
    'PM Kisan apply online',
    'pmkisan.gov.in registration form',
    'PM Kisan Samman Nidhi apply',
    'PM Kisan registration documents',
  ],
  // ✅ FIX: OpenGraph metadata added
  openGraph: {
    title: 'PM Kisan New Registration 2026 – Apply Online Guide',
    description: 'Step-by-step guide to register for PM Kisan Samman Nidhi Yojana 2026. Documents, eligibility, and direct official link.',
    url: 'https://kisanstatus.com/new-registration',
    siteName: 'KisanStatus.com',
    type: 'article',
    locale: 'hi_IN',
    images: [
      {
        url: 'https://kisanstatus.com/images/pm-kisan-registration-online-2026.webp',
        width: 1200,
        height: 630,
        alt: 'PM Kisan New Registration 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan New Registration 2026 – Apply Online',
    description: 'Step-by-step guide to register for PM Kisan Samman Nidhi Yojana 2026.',
    images: ['https://kisanstatus.com/images/pm-kisan-registration-online-2026.webp'],
  },
};

// ✅ FIX: Official government registration links updated
const OFFICIAL_LINKS = {
  registration: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx',  // Updated!
  portal:       'https://pmkisan.gov.in/',
  ekyc:         'https://pmkisan.gov.in/FarmersCorner.aspx',          // Updated!
  status:       'https://pmkisan.gov.in/BeneficiaryStatus.aspx',
  helpline:     'tel:155261',
};

// Documents required for registration
const documents = [
  { icon: '🪪', name: 'Aadhaar Card',        desc: '12-digit Aadhaar number — mandatory for all applicants' },
  { icon: '🏦', name: 'Bank Account Details', desc: 'Account number + IFSC code linked to Aadhaar for DBT payment' },
  { icon: '📜', name: 'Land Records',          desc: 'Khasra / Khatauni / Patta showing land ownership in your name' },
  { icon: '📱', name: 'Mobile Number',          desc: 'Aadhaar-linked mobile number for OTP verification' },
  { icon: '🗺️', name: 'Address Proof',          desc: 'Village, Tehsil, District details matching land records' },
];

// Step-by-step registration guide
const steps = [
  {
    no: 1,
    title: 'Visit Official Registration Page',
    desc: 'Open your browser and go directly to the official PM Kisan new farmer registration page.',
    link: { label: 'Open Registration Form ↗', href: OFFICIAL_LINKS.registration },
    tip: 'Use Chrome or Firefox for best results. Works on both mobile and desktop.',
  },
  {
    no: 2,
    title: 'Select "New Farmer Registration"',
    desc: 'On the registration page, choose either "Rural Farmer Registration" or "Urban Farmer Registration" based on your location.',
    tip: 'Most farmers should choose "Rural Farmer Registration".',
  },
  {
    no: 3,
    title: 'Enter Your Aadhaar Number',
    desc: 'Type your 12-digit Aadhaar card number correctly. Select your State from the dropdown menu. Enter the CAPTCHA code shown on screen.',
    tip: 'Double-check your Aadhaar number — errors will cause registration failure.',
  },
  {
    no: 4,
    title: 'OTP Verification',
    desc: 'Click "Get OTP". An OTP will be sent to your Aadhaar-linked mobile number. Enter the OTP within 10 minutes to verify your identity.',
    tip: 'If you don\'t receive OTP, ensure your mobile number is linked to Aadhaar at your nearest UIDAI centre.',
  },
  {
    no: 5,
    title: 'Fill Personal & Land Details',
    desc: 'Enter your complete details: Full name (as on Aadhaar), Father\'s name, Gender, Category (SC/ST/General), Address, State, District, Sub-District, Block, Village.',
    tip: 'All details must exactly match your Aadhaar card and land records.',
  },
  {
    no: 6,
    title: 'Enter Bank Account Details',
    desc: 'Provide your bank account number and IFSC code. This account will receive ₹2000 installments via Direct Benefit Transfer (DBT). Ensure Aadhaar is seeded with this bank account.',
    tip: 'Verify the IFSC code from your passbook or cheque book. Wrong IFSC = payment failure.',
  },
  {
    no: 7,
    title: 'Enter Land Information',
    desc: 'Enter your land ownership details: Survey/Khasra number, land area in hectares, and ownership type. This must match official land records at your State\'s Revenue Department.',
    tip: 'Contact your local Patwari/Lekhpal if you are unsure about Khasra numbers.',
  },
  {
    no: 8,
    title: 'Submit and Save Registration Number',
    desc: 'Review all entered details carefully. Click "Submit for Aadhaar Authentication". After successful submission, save or screenshot your PM Kisan Registration Number for future reference.',
    tip: 'Write down your Registration Number — you will need it to check application status.',
  },
  {
    no: 9,
    title: 'Complete eKYC',
    desc: 'After registration, complete your eKYC verification at pmkisan.gov.in/FarmersCorner.aspx. eKYC is mandatory to receive payments. You can do OTP-based eKYC or visit a CSC centre for biometric eKYC.',
    link: { label: 'Complete eKYC ↗', href: OFFICIAL_LINKS.ekyc },
    tip: 'eKYC must be completed before the next installment date to receive payment.',
  },
];

// FAQ for registration
const regFaqs = [
  {
    q: 'Who can apply for PM Kisan Yojana?',
    a: 'Any small or marginal farmer who owns cultivable land can apply. Excluded: Government employees, income tax payers, holders of constitutional posts, professionals (doctors, lawyers, engineers, etc.).',
  },
  {
    q: 'How long does PM Kisan registration approval take?',
    a: 'After submitting your registration, it typically takes 2-4 weeks for verification by the State Government. You can check your registration status at pmkisan.gov.in.',
  },
  {
    q: 'Can farmers without smartphones register for PM Kisan?',
    a: 'Yes. Visit your nearest Common Service Centre (CSC), Gram Panchayat office, or Agriculture Department. They will assist you with registration free of charge.',
  },
  {
    q: 'What if my registration is rejected?',
    a: 'Common rejection reasons: Aadhaar-bank account not linked, incorrect land records, ineligible category. Visit your local Agriculture Department or PM Kisan helpline (155261) for assistance.',
  },
];

export default function NewRegistrationPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">New Registration</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            PM Kisan New Registration 2026
          </h1>
          <p className="text-green-100 mt-2 text-sm md:text-base">
            Official website par apply kaise kare — documents, eligibility, aur steps — sab yahan hai
          </p>
        </div>
      </div>

      <div className="container-site py-10 space-y-12">

        {/* ── BIG CTA — Direct Registration Link ── */}
        <div className="rounded-xl border-2 border-primary-600 bg-green-50 p-6 md:p-8 text-center">
          <div className="text-4xl mb-3" aria-hidden="true">📝</div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            PM Kisan Mein Nayi Registration Karo — Official Link
          </h2>
          <p className="text-gray-600 text-sm mb-2 max-w-lg mx-auto">
            Neeche button dabao aur seedha <strong>Government of India</strong> ki official PM Kisan
            registration website par chale jao.
          </p>
          {/* ✅ FIX: Updated URL */}
          <p className="text-xs text-gray-500 mb-6 font-mono bg-white inline-block px-3 py-1 rounded border">
            🔗 pmkisan.gov.in/NewFarmerRegistration.aspx
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={OFFICIAL_LINKS.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8"
              aria-label="Open official PM Kisan registration form on pmkisan.gov.in"
            >
              📝 Register on pmkisan.gov.in ↗
            </a>
            <a
              href={OFFICIAL_LINKS.ekyc}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              🔐 Complete eKYC ↗
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            🔒 Aap seedha Government of India ki website par jayenge — bilkul safe aur muft
          </p>
        </div>

        {/* ── Benefit Summary ── */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="PM Kisan benefits">
          {[
            { icon: '💰', label: '₹6,000 / Year',      sub: 'Total annual benefit' },
            { icon: '📅', label: '3 Installments',      sub: '₹2,000 every 4 months' },
            { icon: '🏦', label: 'Direct Bank Transfer', sub: 'DBT to your account' },
          ].map((item) => (
            <div key={item.label} className="card text-center">
              <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
              <div className="font-bold text-gray-900 text-lg">{item.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </section>

        {/* ── Documents Required ── */}
        <section aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="section-title mb-2">
            Documents Required for Registration
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Keep these documents ready before starting the online registration process
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div key={doc.name} className="card flex gap-3 items-start">
                <span className="text-2xl shrink-0" aria-hidden="true">{doc.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{doc.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step-by-step registration guide ── */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="section-title mb-2">
            Step-by-Step Registration Guide
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Follow all 9 steps carefully to complete your PM Kisan registration successfully
          </p>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.no} className="card">
                <div className="flex gap-4">
                  {/* Step number */}
                  <div
                    className="shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm"
                    aria-hidden="true"
                  >
                    {step.no}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{step.desc}</p>

                    {/* Optional direct link */}
                    {step.link && (
                      <a
                        href={step.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 underline hover:no-underline mb-2"
                      >
                        {step.link.label}
                      </a>
                    )}

                    {/* Tip box */}
                    <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-100 rounded px-3 py-2 mt-1">
                      <span className="text-yellow-600 text-sm shrink-0" aria-hidden="true">💡</span>
                      <p className="text-xs text-yellow-800 leading-relaxed">{step.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Eligibility reminder ── */}
        <section aria-labelledby="elig-heading">
          <h2 id="elig-heading" className="section-title mb-5">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card border-l-4 border-green-500">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span aria-hidden="true">✅</span> Who Can Apply
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {[
                  'Small and marginal farmers with cultivable land',
                  'Farmers whose names appear in land records',
                  'Both individual and joint landholders',
                  'Farmers from all 28 states and 8 UTs of India',
                  'Landless farmers in some special categories (state-specific)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4 border-red-400">
              <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <span aria-hidden="true">❌</span> Who CANNOT Apply
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {[
                  'Current and former Central/State Government employees',
                  'Income tax payers (last assessment year)',
                  'Retired pensioners getting ₹10,000+/month',
                  'Professionals: Doctors, Lawyers, Engineers, CAs',
                  'Members of Parliament, State Legislatures, Municipal Mayors',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-title mb-5">Registration FAQs</h2>
          <div className="space-y-3 max-w-3xl">
            {regFaqs.map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="font-semibold text-gray-900 text-sm mb-2 flex items-start gap-2">
                  <span className="text-primary-600 shrink-0" aria-hidden="true">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── All Official Links ── */}
        <section className="news-box" aria-labelledby="links-heading">
          <h2 id="links-heading" className="font-semibold text-green-800 mb-3 text-base">
            🔗 All Official PM Kisan Government Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: 'New Farmer Registration',     href: OFFICIAL_LINKS.registration, desc: 'Apply for PM Kisan Yojana' },
              { label: 'Beneficiary Status Check',    href: OFFICIAL_LINKS.status,       desc: 'Check payment status' },
              { label: 'eKYC Verification',           href: OFFICIAL_LINKS.ekyc,         desc: 'Complete mandatory eKYC' },
              { label: 'PM Kisan Official Portal',    href: OFFICIAL_LINKS.portal,       desc: 'Main government website' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 bg-white rounded border border-green-200 hover:border-primary-600 transition-colors group"
                aria-label={`${link.label} — ${link.desc}`}
              >
                <span className="text-lg shrink-0" aria-hidden="true">🌐</span>
                <div>
                  <div className="font-semibold text-green-800 text-sm group-hover:text-primary-700">
                    {link.label} ↗
                  </div>
                  <div className="text-xs text-green-700 mt-0.5">{link.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Helpline ── */}
        <div className="card bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-3">Need Help with Registration?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span aria-hidden="true">📞</span>
              <div>
                <div className="font-medium">Toll Free</div>
                <a href="tel:155261" className="text-primary-600 underline font-semibold">155261</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span aria-hidden="true">📞</span>
              <div>
                <div className="font-medium">Helpline</div>
                <a href="tel:01124300606" className="text-primary-600 underline font-semibold">011-24300606</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span aria-hidden="true">📧</span>
              <div>
                <div className="font-medium">Email</div>
                <a href="mailto:pmkisan-ict@gov.in" className="text-primary-600 underline">pmkisan-ict@gov.in</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            You can also visit your nearest <strong>Common Service Centre (CSC)</strong> or
            <strong> Gram Panchayat office</strong> for free registration assistance.
          </p>
        </div>

      </div>
    </>
  );
}