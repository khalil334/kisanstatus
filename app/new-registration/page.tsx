/**
 * New Agrarian Welfare Enrollment Page
 * Complete guide: How to apply/enroll for cultivator benefit program
 * Official enrollment link: https://pmkisan.gov.in/NewFarmerRegistration.aspx
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agrarian Welfare Scheme Enrollment 2026 – How to Apply Online at pmkisan.gov.in',
  description:
    'Apply for cultivator benefit program 2026. Step-by-step guide to enroll online at pmkisan.gov.in/NewFarmerRegistration.aspx. Documents required, eligibility criteria, and direct enrollment link.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/new-registration' },
  keywords: [
    'agrarian welfare scheme enrollment 2026',
    'cultivator benefit program apply online',
    'pmkisan.gov.in enrollment form',
    'central program application',
    'scheme enrollment documents',
    'farmer benefit registration',
  ],
  openGraph: {
    title: 'Agrarian Welfare Enrollment 2026 – Apply Online Guide',
    description: 'Step-by-step guide to enroll for cultivator benefit program 2026. Documents, eligibility, and direct official link.',
    url: 'https://kisanstatus.com/new-registration',
    siteName: 'KisanStatus.com',
    type: 'article',
    locale: 'hi_IN',
    images: [
      {
        url: 'https://kisanstatus.com/images/pm-kisan-registration-online-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Agrarian Welfare Enrollment 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrarian Welfare Enrollment 2026 – Apply Online',
    description: 'Step-by-step guide to enroll for cultivator benefit program 2026.',
    images: ['https://kisanstatus.com/images/pm-kisan-registration-online-2026.webp'],
  },
};

// Official government enrollment links
const OFFICIAL_LINKS = {
  registration: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx',
  portal:       'https://pmkisan.gov.in/',
  ekyc:         'https://pmkisan.gov.in/FarmersCorner.aspx',
  status:       'https://pmkisan.gov.in/BeneficiaryStatus.aspx',
  helpline:     'tel:155261',
};

// Documents required for enrollment
const documents = [
  { icon: '🪪', name: 'Biometric Credential Card',        desc: '12-digit biometric credential number — mandatory for all applicants' },
  { icon: '🏦', name: 'Bank Account Details', desc: 'Account number + IFSC code linked to biometric credential for DBT payment' },
  { icon: '📜', name: 'Land Records',          desc: 'Khasra / Khatauni / Patta showing land ownership in your name' },
  { icon: '📱', name: 'Contact Number',          desc: 'Biometric credential-linked contact number for OTP verification' },
  { icon: '🗺️', name: 'Address Proof',          desc: 'Village, Tehsil, District details matching land records' },
];

// Step-by-step enrollment guide
const steps = [
  {
    no: 1,
    title: 'Visit Official Enrollment Page',
    desc: 'Open your browser and go directly to the official agrarian welfare scheme new farmer enrollment page.',
    link: { label: 'Open Enrollment Form ↗', href: OFFICIAL_LINKS.registration },
    tip: 'Use Chrome or Firefox for best results. Works on both mobile and desktop.',
  },
  {
    no: 2,
    title: 'Select "New Farmer Enrollment"',
    desc: 'On the enrollment page, choose either "Rural Farmer Enrollment" or "Urban Farmer Enrollment" based on your location.',
    tip: 'Most cultivators should choose "Rural Farmer Enrollment".',
  },
  {
    no: 3,
    title: 'Enter Your Biometric Credential Number',
    desc: 'Type your 12-digit biometric credential card number correctly. Select your State from the dropdown menu. Enter the CAPTCHA code shown on screen.',
    tip: 'Double-check your biometric credential number — errors will cause enrollment failure.',
  },
  {
    no: 4,
    title: 'OTP Verification',
    desc: 'Click "Get OTP". An OTP will be sent to your biometric credential-linked contact number. Enter the OTP within 10 minutes to verify your identity.',
    tip: 'If you don\'t receive OTP, ensure your contact number is linked to biometric credential at your nearest UIDAI centre.',
  },
  {
    no: 5,
    title: 'Fill Personal & Land Details',
    desc: 'Enter your complete details: Full name (as on biometric credential), Father\'s name, Gender, Category (SC/ST/General), Address, State, District, Sub-District, Block, Village.',
    tip: 'All details must exactly match your biometric credential card and land records.',
  },
  {
    no: 6,
    title: 'Enter Bank Account Details',
    desc: 'Provide your bank account number and IFSC code. This account will receive ₹2000 tranches via Direct Benefit Transfer (DBT). Ensure biometric credential is seeded with this bank account.',
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
    title: 'Submit and Save Enrollment Number',
    desc: 'Review all entered details carefully. Click "Submit for Biometric Credential Authentication". After successful submission, save or screenshot your Agrarian Welfare Enrollment Number for future reference.',
    tip: 'Write down your Enrollment Number — you will need it to check application status.',
  },
  {
    no: 9,
    title: 'Complete Digital Verification',
    desc: 'After enrollment, complete your digital verification at pmkisan.gov.in/FarmersCorner.aspx. Digital verification is mandatory to receive payments. You can do OTP-based verification or visit a CSC centre for biometric verification.',
    link: { label: 'Complete Digital Verification ↗', href: OFFICIAL_LINKS.ekyc },
    tip: 'Digital verification must be completed before the next tranche date to receive payment.',
  },
];

// FAQ for enrollment
const regFaqs = [
  {
    q: 'Who can apply for agrarian welfare scheme?',
    a: 'Any small or marginal cultivator who owns cultivable land can apply. Excluded: Government employees, income tax payers, holders of constitutional posts, professionals (doctors, lawyers, engineers, etc.).',
  },
  {
    q: 'How long does agrarian welfare enrollment approval take?',
    a: 'After submitting your enrollment, it typically takes 2-4 weeks for verification by the State Government. You can check your enrollment status at pmkisan.gov.in.',
  },
  {
    q: 'Can cultivators without smartphones enroll for agrarian welfare?',
    a: 'Yes. Visit your nearest Common Service Centre (CSC), Gram Panchayat office, or Agriculture Department. They will assist you with enrollment free of charge.',
  },
  {
    q: 'What if my enrollment is rejected?',
    a: 'Common rejection reasons: Biometric credential-bank account not linked, incorrect land records, ineligible category. Visit your local Agriculture Department or agrarian welfare helpline (155261) for assistance.',
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
            <span className="text-white">New Enrollment</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Agrarian Welfare Scheme Enrollment 2026
          </h1>
          <p className="text-green-100 mt-2 text-sm md:text-base">
            Official website par apply kaise kare — documents, eligibility, aur steps — sab yahan hai
          </p>
        </div>
      </div>

      <div className="container-site py-10 space-y-12">

        {/* BIG CTA — Direct Enrollment Link */}
        <div className="rounded-xl border-2 border-primary-600 bg-green-50 p-6 md:p-8 text-center">
          <div className="text-4xl mb-3" aria-hidden="true">📝</div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Agrarian Welfare Mein Nayi Enrollment Karo — Official Link
          </h2>
          <p className="text-gray-600 text-sm mb-2 max-w-lg mx-auto">
            Neeche button dabao aur seedha <strong>Government of India</strong> ki official agrarian welfare
            enrollment website par chale jao.
          </p>
          <p className="text-xs text-gray-500 mb-6 font-mono bg-white inline-block px-3 py-1 rounded border">
            🔗 pmkisan.gov.in/NewFarmerRegistration.aspx
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={OFFICIAL_LINKS.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8"
              aria-label="Open official agrarian welfare enrollment form on pmkisan.gov.in"
            >
              📝 Enroll on pmkisan.gov.in ↗
            </a>
            <a
              href={OFFICIAL_LINKS.ekyc}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              🔐 Complete Digital Verification ↗
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            🔒 Aap seedha Government of India ki website par jayenge — bilkul safe aur muft
          </p>
        </div>

        {/* Benefit Summary */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Agrarian welfare benefits">
          {[
            { icon: '💰', label: '₹6,000 / Year',      sub: 'Total annual benefit' },
            { icon: '📅', label: '3 Tranches',      sub: '₹2,000 every 4 months' },
            { icon: '🏦', label: 'Direct Bank Transfer', sub: 'DBT to your account' },
          ].map((item) => (
            <div key={item.label} className="card text-center">
              <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
              <div className="font-bold text-gray-900 text-lg">{item.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </section>

        {/* Documents Required */}
        <section aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="section-title mb-2">
            Documents Required for Enrollment
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Keep these documents ready before starting the online enrollment process
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

        {/* Step-by-step enrollment guide */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="section-title mb-2">
            Step-by-Step Enrollment Guide
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Follow all 9 steps carefully to complete your agrarian welfare enrollment successfully
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

        {/* Eligibility reminder */}
        <section aria-labelledby="elig-heading">
          <h2 id="elig-heading" className="section-title mb-5">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card border-l-4 border-green-500">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span aria-hidden="true">✅</span> Who Can Apply
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {[
                  'Small and marginal cultivators with cultivable land',
                  'Cultivators whose names appear in land records',
                  'Both individual and joint landholders',
                  'Cultivators from all 28 states and 8 UTs of India',
                  'Landless cultivators in some special categories (state-specific)',
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

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-title mb-5">Enrollment FAQs</h2>
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

        {/* All Official Links */}
        <section className="news-box" aria-labelledby="links-heading">
          <h2 id="links-heading" className="font-semibold text-green-800 mb-3 text-base">
            🔗 All Official Agrarian Welfare Government Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: 'New Farmer Enrollment',     href: OFFICIAL_LINKS.registration, desc: 'Apply for agrarian welfare scheme' },
              { label: 'Beneficiary Status Check',    href: OFFICIAL_LINKS.status,       desc: 'Check payment status' },
              { label: 'Digital Verification',           href: OFFICIAL_LINKS.ekyc,         desc: 'Complete mandatory digital verification' },
              { label: 'Agrarian Welfare Official Portal',    href: OFFICIAL_LINKS.portal,       desc: 'Main government website' },
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

        {/* Helpline */}
        <div className="card bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-3">Need Help with Enrollment?</h3>
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
            <strong> Gram Panchayat office</strong> for free enrollment assistance.
          </p>
        </div>

      </div>
    </>
  );
}