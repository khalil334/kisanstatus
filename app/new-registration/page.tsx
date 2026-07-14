/**
 * PM Kisan New Registration Page
 * Complete guide: How to apply/enroll for PM Kisan Samman Nidhi
 * Official enrollment link: https://pmkisan.gov.in/NewFarmerRegistration.aspx
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan New Registration 2026 — Online Apply Kaise Karein',
  description: 'PM Kisan Samman Nidhi me naya registration kaise karein? Step-by-step guide, zaroori documents, eligibility aur official apply link yahan dekhein.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/new-registration` },
  keywords: [
    'pm kisan new registration 2026',
    'pm kisan online apply kaise kare',
    'pmkisan.gov.in registration form',
    'pm kisan documents required',
    'naye kisan ke liye registration',
    'pm kisan eligibility criteria',
  ],
  openGraph: {
    title: 'PM Kisan New Registration 2026 — Online Apply Guide',
    description: 'PM Kisan Samman Nidhi me naya registration kaise karein? Zaroori documents, eligibility aur official apply link yahan dekhein.',
    url: `${SITE_URL}/new-registration`,
    siteName: SITE_NAME,
    type: 'article',
    locale: 'hi_IN',
    images: [
      {
        url: `${SITE_URL}/images/pm-kisan-registration-online-2026.webp`,
        width: 1200,
        height: 630,
        alt: 'PM Kisan New Registration 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan New Registration 2026 — Online Apply',
    description: 'PM Kisan Samman Nidhi me naya registration kaise karein? Step-by-step guide aur official link.',
    images: [`${SITE_URL}/images/pm-kisan-registration-online-2026.webp`],
  },
};

const OFFICIAL_LINKS = {
  registration: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx',
  portal:       'https://pmkisan.gov.in/',
  ekyc:         'https://pmkisan.gov.in/FarmersCorner.aspx',
  status:       'https://pmkisan.gov.in/BeneficiaryStatus.aspx',
  helpline:     'tel:155261',
};

const documents = [
  { icon: '🪪', name: 'Aadhaar Card', desc: '12-digit Aadhaar number — sabhi applicants ke liye anivarya (mandatory)' },
  { icon: '🏦', name: 'Bank Account Details', desc: 'Account number aur IFSC code, jo Aadhaar se link ho (DBT payment ke liye)' },
  { icon: '📜', name: 'Land Records (Khasra/Khatauni)', desc: 'Aapke naam par zameen ki maliki dikhane wale sarkari records' },
  { icon: '📱', name: 'Mobile Number', desc: 'Aadhaar se link kiya gaya mobile number (OTP verification ke liye)' },
  { icon: '🗺️', name: 'Address Proof', desc: 'Gaon, Tehsil, aur Zile ki details jo land records se match karein' },
];

const steps = [
  {
    no: 1,
    title: 'Official Registration Page Par Jaayein',
    desc: 'Apne browser mein seedha PM Kisan ke naye kisan registration page ko open karein.',
    link: { label: 'Registration Form Kholein ↗', href: OFFICIAL_LINKS.registration },
    tip: 'Best results ke liye Chrome ya Firefox browser ka use karein. Mobile aur desktop dono par kaam karta hai.',
  },
  {
    no: 2,
    title: '"New Farmer Registration" Chunein',
    desc: 'Registration page par, apni location ke hisaab se "Rural Farmer Registration" ya "Urban Farmer Registration" chunein.',
    tip: 'Zyadatar kisanon ko "Rural Farmer Registration" hi chunna chahiye.',
  },
  {
    no: 3,
    title: 'Apna Aadhaar Number Daalein',
    desc: 'Apna 12-digit Aadhaar number sahi se type karein. Dropdown menu se apna State chunein aur screen par dikh rahe CAPTCHA code ko bharein.',
    tip: 'Aadhaar number dobara check kar lein — galti hone par registration fail ho jayega.',
  },
  {
    no: 4,
    title: 'OTP Verification',
    desc: '"Get OTP" par click karein. Aapke Aadhaar-linked mobile number par ek OTP aayega. Apni pehchan verify karne ke liye 10 minute ke andar OTP daalein.',
    tip: 'Agar OTP nahi aata, toh nazdeeki UIDAI centre jaakar apne mobile number ko Aadhaar se link karwayein.',
  },
  {
    no: 5,
    title: 'Personal aur Land Details Bharein',
    desc: 'Apni puri jankari bharein: Pura naam (jaisa Aadhaar par hai), Pita ka naam, Gender, Category (SC/ST/General), Address, State, District, Block, aur Village.',
    tip: 'Saari details aapke Aadhaar card aur land records se bilkul match honi chahiye.',
  },
  {
    no: 6,
    title: 'Bank Account Details Daalein',
    desc: 'Apna bank account number aur IFSC code provide karein. Is account mein ₹2,000 ki kist DBT ke through aayegi. Ensure karein ki is bank account mein Aadhaar seeding ho.',
    tip: 'IFSC code apne passbook ya cheque book se verify karein. Galat IFSC = Payment fail.',
  },
  {
    no: 7,
    title: 'Land Information Enter Karein',
    desc: 'Apni zameen ki maliki ki details bharein: Survey/Khasra number, zameen ka area (hectare mein), aur ownership type. Yeh aapke State Revenue Department ke records se match hona chahiye.',
    tip: 'Agar aapko Khasra number nahi pata, toh apne local Patwari ya Lekhpal se sampark karein.',
  },
  {
    no: 8,
    title: 'Submit Karein aur Registration Number Save Karein',
    desc: 'Saari bhari hui details ko dhyan se review karein. "Submit for Aadhaar Authentication" par click karein. Successful submission ke baad, future reference ke liye apna PM Kisan Registration Number save ya screenshot kar lein.',
    tip: 'Apna Registration Number likh kar rakh lein — application status check karne ke liye iski zaroorat padegi.',
  },
  {
    no: 9,
    title: 'eKYC (Digital Verification) Complete Karein',
    desc: 'Registration ke baad, pmkisan.gov.in par jaakar apni eKYC (Digital Verification) zaroor complete karein. Payment prapt karne ke liye yeh anivarya hai. Aap OTP-based verification kar sakte hain ya biometric verification ke liye nazdeeki CSC centre ja sakte hain.',
    link: { label: 'eKYC Complete Karein ↗', href: OFFICIAL_LINKS.ekyc },
    tip: 'Aane wali kist ka payment prapt karne ke liye eKYC next tranche date se pehle complete honi chahiye.',
  },
];

const regFaqs = [
  {
    q: 'PM Kisan Yojana ke liye kaun apply kar sakta hai?',
    a: 'Koi bhi chhota ya seemant (small/marginal) kisan jiske paas khetyogya zameen hai, apply kar sakta hai. Sarkari karmachari, income tax payee, aur professionals (doctors, lawyers, engineers, etc.) iske liye eligible nahi hain.',
  },
  {
    q: 'PM Kisan registration approve hone mein kitna samay lagta hai?',
    a: 'Registration submit karne ke baad, State Government dwara verification mein aamtaur par 2 se 4 hafte lagte hain. Aap pmkisan.gov.in par apna registration status check kar sakte hain.',
  },
  {
    q: 'Kya bina smartphone ke PM Kisan registration ho sakta hai?',
    a: 'Haan, bilkul. Aap apne nazdeeki Common Service Centre (CSC), Gram Panchayat office, ya Agriculture Department ja sakte hain. Woh aapki madad karenge aur yeh seva bilkul muft hai.',
  },
  {
    q: 'Agar mera registration reject ho jaye toh kya karein?',
    a: 'Rejection ke common karan hain: Aadhaar-bank account link na hona, galat land records, ya ineligible category. Sahayata ke liye apne local Agriculture Department ya PM Kisan helpline (155261) par sampark karein.',
  },
];

export default function NewRegistrationPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: 'PM Kisan New Registration 2026', item: `${SITE_URL}/new-registration` },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'PM Kisan New Registration 2026 — Online Apply Kaise Karein',
    description: 'PM Kisan Samman Nidhi me naya registration kaise karein? Step-by-step guide, zaroori documents, eligibility aur official apply link.',
    image: `${SITE_URL}/images/pm-kisan-registration-online-2026.webp`,
    author: {
      '@type': 'Organization',
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: '2025-01-01',
    dateModified: '2026-01-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/new-registration`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: regFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">New Registration</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            PM Kisan New Registration 2026
          </h1>
          <p className="text-green-100 mt-2 text-sm md:text-base">
            Official website par apply kaise karein — documents, eligibility, aur step-by-step process sab yahan hai.
          </p>
        </div>
      </div>

      <div className="container-site py-10 space-y-12">

        <div className="rounded-xl border-2 border-primary-600 bg-green-50 dark:bg-green-900/20 dark:border-green-700 p-6 md:p-8 text-center">
          <div className="text-4xl mb-3" aria-hidden="true">📝</div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            PM Kisan Mein Naya Registration Karein — Official Link
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 max-w-lg mx-auto">
            Neeche button dabayein aur seedha <strong>Government of India</strong> ki official PM Kisan registration website par chale jayein.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 font-mono bg-white dark:bg-gray-800 inline-block px-3 py-1 rounded border">
            🔗 pmkisan.gov.in/NewFarmerRegistration.aspx
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={OFFICIAL_LINKS.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Open official PM Kisan registration form on pmkisan.gov.in"
            >
              📝 pmkisan.gov.in par Register Karein ↗
            </a>
            <Link
              href="/articles/pm-kisan-ekyc-online-2026"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              🔐 eKYC Kaise Karein (Guide)
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            🔒 Aap seedha Government of India ki website par jayenge — bilkul safe aur muft.
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="PM Kisan benefits">
          {[
            { icon: '💰', label: '₹6,000 / Saal', sub: 'Total saalana labh' },
            { icon: '📅', label: '3 Kist (Tranches)', sub: 'Har 4 mahine mein ₹2,000' },
            { icon: '🏦', label: 'Direct Bank Transfer', sub: 'DBT seedha aapke account mein' },
          ].map((item) => (
            <div key={item.label} className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
              <div className="font-bold text-gray-900 dark:text-white text-lg">{item.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </section>

        <section aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="text-xl font-bold text-[var(--color-text)] mb-2">
            Registration Ke Liye Zaroori Documents
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
            Online registration process shuru karne se pehle yeh documents taiyaar rakhein.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div key={doc.name} className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-4 flex gap-3 items-start">
                <span className="text-2xl shrink-0" aria-hidden="true">{doc.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{doc.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="text-xl font-bold text-[var(--color-text)] mb-2">
            Step-by-Step Registration Guide
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Apna PM Kisan registration safaltapoorvak complete karne ke liye in 9 steps ko dhyan se follow karein.
          </p>

          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.no} className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5">
                <div className="flex gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm"
                    aria-hidden="true"
                  >
                    {step.no}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{step.desc}</p>

                    {step.link && (
                      <a
                        href={step.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400 underline hover:no-underline mb-2"
                      >
                        {step.link.label}
                      </a>
                    )}

                    <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 rounded-lg px-3 py-2 mt-1">
                      <span className="text-yellow-600 dark:text-yellow-400 text-sm shrink-0" aria-hidden="true">💡</span>
                      <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed">{step.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="elig-heading">
          <h2 id="elig-heading" className="text-xl font-bold text-[var(--color-text)] mb-5">Eligibility Criteria (Yogyata)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 border-l-4 border-l-green-500">
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <span aria-hidden="true">✅</span> Kaun Apply Kar Sakta Hai
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                {[
                  'Chhote aur seemant (small/marginal) kisan jinke paas khetyogya zameen hai',
                  'Ve kisan jinka naam land records (khasra/khatauni) mein hai',
                  'Individual aur joint landholders (pati-patni dono)',
                  'Bharat ke saare 28 rajya aur 8 kendrashasit pradesh (UTs) ke kisan',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 border-l-4 border-l-red-400">
              <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <span aria-hidden="true">❌</span> Kaun Apply Nahi Kar Sakta
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                {[
                  'Maujuda aur purane Central/State Government karmachari',
                  'Income tax payee (pichhle assessment year mein)',
                  'Retired pensioners jo ₹10,000+ prati maah pension lete hain',
                  'Professionals: Doctors, Lawyers, Engineers, Chartered Accountants (CAs)',
                  'Sansad (MP), Vidhayak (MLA), aur Municipal Mayors ke members',
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

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl font-bold text-[var(--color-text)] mb-5">Registration FAQs</h2>
          <div className="space-y-3 max-w-3xl">
            {regFaqs.map((faq) => (
              <div key={faq.q} className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 shrink-0 font-bold" aria-hidden="true">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="news-box bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6" aria-labelledby="links-heading">
          <h2 id="links-heading" className="font-semibold text-green-800 dark:text-green-300 mb-3 text-base">
            🔗 Saare Official PM Kisan Government Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'New Farmer Registration', href: OFFICIAL_LINKS.registration, desc: 'PM Kisan ke liye naya apply karein' },
              { label: 'Beneficiary Status Check', href: OFFICIAL_LINKS.status, desc: 'Apna payment status check karein' },
              { label: 'eKYC (Digital Verification)', href: OFFICIAL_LINKS.ekyc, desc: 'Anivarya digital verification complete karein' },
              { label: 'PM Kisan Official Portal', href: OFFICIAL_LINKS.portal, desc: 'Mukhya sarkari website' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-800 hover:border-primary-600 dark:hover:border-primary-500 transition-colors group"
                aria-label={`${link.label} — ${link.desc}`}
              >
                <span className="text-lg shrink-0" aria-hidden="true">🌐</span>
                <div>
                  <div className="font-semibold text-green-800 dark:text-green-300 text-sm group-hover:text-primary-700 dark:group-hover:text-primary-400">
                    {link.label} ↗
                  </div>
                  <div className="text-xs text-green-700 dark:text-green-400 mt-0.5">{link.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="card bg-gray-50 dark:bg-gray-800/50 border border-[var(--color-border)] rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Registration Mein Madad Chahiye?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <span aria-hidden="true">📞</span>
              <div>
                <div className="font-medium">Toll Free Helpline</div>
                <a href="tel:155261" className="text-primary-600 dark:text-primary-400 underline font-semibold">155261</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span aria-hidden="true">📞</span>
              <div>
                <div className="font-medium">Landline Helpline</div>
                <a href="tel:01124300606" className="text-primary-600 dark:text-primary-400 underline font-semibold">011-24300606</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span aria-hidden="true">📧</span>
              <div>
                <div className="font-medium">Official Email</div>
                <a href="mailto:pmkisan-ict@gov.in" className="text-primary-600 dark:text-primary-400 underline">pmkisan-ict@gov.in</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Aap muft registration sahayata ke liye apne nazdeeki <strong>Common Service Centre (CSC)</strong> ya <strong>Gram Panchayat office</strong> mein bhi ja sakte hain.
          </p>
        </div>

      </div>
    </>
  );
}