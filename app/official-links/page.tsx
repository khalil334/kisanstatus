/**
 * Official Government Links Page — KisanStatus.com
 * Verified central administration resources collection for cultivators
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Official Links 2026 — Sarkari Portal & Helpline',
  description: 'PM Kisan aur Krishi Mantralaya ke sabhi official links, beneficiary status check, eKYC, aur helpline numbers ek hi jagah. Verified aur updated.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/official-links` },
  keywords: [
    'pm kisan official website',
    'pm kisan helpline number',
    'pm kisan beneficiary status link',
    'krishi mantralaya official website',
    'pm kisan land seeding link',
    'kisan credit card official link',
    'pmfby official website',
    'soil health card portal link',
  ],
  openGraph: {
    title: 'PM Kisan Official Links 2026 — Sarkari Portal & Helpline',
    description: 'PM Kisan aur Krishi Mantralaya ke sabhi official links, beneficiary status check, eKYC, aur helpline numbers ek hi jagah.',
    type: 'website',
    url: `${SITE_URL}/official-links`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [
      {
        url: `${SITE_URL}/images/pm-kisan-beneficiary-list-2026.webp`,
        width: 1200,
        height: 630,
        alt: 'PM Kisan Official Links and Resources 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Official Links 2026',
    description: 'PM Kisan aur Krishi Mantralaya ke sabhi official links, beneficiary status check, eKYC, aur helpline numbers ek hi jagah.',
    images: [`${SITE_URL}/images/pm-kisan-beneficiary-list-2026.webp`],
  },
  robots: { index: true, follow: true },
};

const officialLinks = [
  {
    category: '🌾 PM Kisan Mukhya Portal',
    links: [
      { label: 'PM Kisan Official Homepage', url: 'https://pmkisan.gov.in/', desc: 'PM Kisan Samman Nidhi ka primary dashboard' },
      { label: 'Beneficiary Status Check', url: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx', desc: 'Apna payment aur beneficiary status check karein' },
      { label: 'Beneficiary List Dashboard', url: 'https://pmkisan.gov.in/Dashboard.aspx', desc: 'State, district, block aur gaon ke hisaab se list' },
      { label: 'New Farmer Registration', url: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx', desc: 'Naye kisanon ke liye online registration form' },
      { label: 'Aadhaar Number Correction', url: 'https://pmkisan.gov.in/UpdateAadharNo.aspx', desc: 'Aadhaar number mein sudhaar ya correction karein' },
    ],
  },
  {
    category: '🔐 eKYC aur Land Seeding',
    links: [
      { label: 'Farmers Corner (Sabhi Services)', url: 'https://pmkisan.gov.in/FarmersCorner.aspx', desc: 'eKYC, status check aur anya sabhi services' },
      { label: 'Land Seeding Status Check', url: 'https://pmkisan.gov.in/LandSeeding.aspx', desc: 'Apne land record ki mapping aur verification status' },
      { label: 'Payment History Check', url: 'https://pmkisan.gov.in/AccountStatus.aspx', desc: 'Pichli kiston (tranches) ka payment history dekhein' },
    ],
  },
  {
    category: '🏛️ Krishi Mantralaya aur National Platforms',
    links: [
      { label: 'Ministry of Agriculture & Farmers Welfare', url: 'https://agriculture.gov.in/', desc: 'Krishi Mantralaya ki official website' },
      { label: 'PM Kisan Mobile App (Android)', url: 'https://play.google.com/store/apps/details?id=com.nic.project.pmkisan', desc: 'PM Kisan ki official Android mobile application' },
      { label: 'Digital India Platform', url: 'https://digitalindia.gov.in/', desc: 'Digital India e-governance services' },
      { label: 'India.gov.in National Portal', url: 'https://www.india.gov.in/', desc: 'Government of India ka main national gateway' },
    ],
  },
  {
    category: '🌱 Kisan Hit Yojanaein',
    links: [
      { label: 'PM Fasal Bima Yojana (PMFBY)', url: 'https://pmfby.gov.in/', desc: 'Pradhan Mantri Fasal Bima Yojana — crop insurance' },
      { label: 'Kisan Credit Card (KCC)', url: 'https://www.nabard.org/content.aspx?id=595', desc: 'KCC loan aur credit facility ki jankari' },
      { label: 'Soil Health Card Portal', url: 'https://soilhealth.dac.gov.in/', desc: 'Apni zameen ka Soil Health Card online dekhein' },
      { label: 'PM Krishi Sinchayee Yojana (PMKSY)', url: 'https://pmksy.gov.in/', desc: 'Sinchai (irrigation) se sambandhit sarkari yojana' },
      { label: 'e-NAM (National Agriculture Market)', url: 'https://enam.gov.in/', desc: 'Online agriculture market — fasal ki behtar keemat' },
    ],
  },
  {
    category: '📞 Helpline aur Sahayata',
    links: [
      { label: 'PM Kisan Helpline — 155261', url: 'tel:155261', desc: 'Toll-free assistance — 24/7 uplabdh' },
      { label: 'Alternate Helpline — 011-24300606', url: 'tel:01124300606', desc: 'Direct support number' },
      { label: 'Email Support', url: 'mailto:pmkisan-ict@gov.in', desc: 'Email karein: pmkisan-ict@gov.in' },
      { label: 'Kisan Call Center — 1800-180-1551', url: 'tel:18001801551', desc: 'Krishi salah aur assistance — muft call' },
    ],
  },
];

export default function OfficialLinksPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Official Government Links', item: `${SITE_URL}/official-links` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="hover:text-white underline font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              🏠 Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Official Links</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">🏛️ Sarkari Official Platforms</h1>
          <p className="text-green-200 text-sm mt-1">PM Kisan aur Krishi Mantralaya ke verified official links aur resources — ek hi jagah</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-4xl mx-auto">

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-800 rounded-xl mb-8 text-sm text-amber-900 dark:text-amber-200">
          <strong>⚠️ Zaruri Suchna:</strong> Neeche diye gaye saare links official government websites ke hain.
          KisanStatus.com in links ka sirf reference deta hai — hum koi government website nahi hain.
          Official kaam ke liye hamesha{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded">
            pmkisan.gov.in ↗
          </a>{' '}
          ka hi upyog karein.
        </div>

        <div className="space-y-8">
          {officialLinks.map((section) => (
            <div key={section.category} className="card bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
              <h2 className="text-lg font-bold text-[var(--color-text)] mb-4 pb-2 border-b border-[var(--color-border)]">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 p-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)] transition-colors">
                        {link.label}
                        {link.url.startsWith('http') && <span className="ml-1 text-[var(--color-text-muted)]">↗</span>}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            <strong>{SITE_NAME}</strong> ek independent informational website hai. Upar diye gaye links sirf aapki
            suvidha ke liye hain. Koi bhi official kaam seedha sarkari website par hi karein.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              href="/articles/pm-kisan-24vi-kist-2026" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              ✅ 24vi Kist Status
            </Link>
            <Link 
              href="/articles/pm-kisan-ekyc-online-2026" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              🔐 eKYC Guide
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              📧 Contact Us
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}