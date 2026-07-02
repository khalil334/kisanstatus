/**
 * Official Government Links Page — KisanStatus.com
 * ✅ FIXED: Removed unused Link import
 */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sarkari Portals — Farmer Welfare & Agriculture Ministry Official Links | KisanStatus.com',
  description:
    'DBT portals, cultivator verification, beneficiary status, Krishi Mantralaya — sabhi government portals ke direct references ek jagah. pmkisan.gov.in aur doosre sarkari resources.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/official-links' },
  keywords: [
    'farmer welfare portals',
    'DBT transfer links',
    'cultivator verification portals',
    'agriculture ministry websites',
    'kisan helpline contacts',
    'agrarina scheme links',
    'rural development portals',
  ],
  openGraph: {
    title: 'Government Portals — Farmer Welfare & Agriculture Ministry Resources',
    description: 'DBT portals aur sabhi sarkari resources ke direct references ek jagah. 23vi tranche released 20 June 2026.',
    type: 'website',
    url: 'https://kisanstatus.com/official-links',
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [
      {
        url: 'https://kisanstatus.com/images/pm-kisan-beneficiary-list-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Government Portals for Farmer Welfare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government Portals — Farmer Welfare & Agriculture Ministry Resources',
    description: 'DBT portals aur sabhi sarkari resources ke direct references ek jagah.',
    images: ['https://kisanstatus.com/images/pm-kisan-beneficiary-list-2026.webp'],
  },
  robots: { index: true, follow: true },
};

const officialLinks = [
  {
    category: '🌾 Main Beneficiary Portal',
    links: [
      { label: 'Official Homepage', url: 'https://pmkisan.gov.in/', desc: 'Pradhan Mantri Kisan Samman Nidhi ka primary portal' },
      { label: 'Beneficiary Status Verification', url: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx', desc: 'Apna payment status check karo' },
      { label: 'Approved Recipients Dashboard', url: 'https://pmkisan.gov.in/Dashboard.aspx', desc: 'State, district, block, gaon ke hisaab se roster' },
      { label: 'New Cultivator Enrollment', url: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx', desc: 'Naye farmers ka enrollment' },
      { label: 'UID Correction Portal', url: 'https://pmkisan.gov.in/UpdateAadharNo.aspx', desc: 'Identity number mein correction karo' },
    ],
  },
  {
    category: '🔐 Digital Verification & Land Mapping',
    links: [
      { label: 'Farmers Corner (All Services)', url: 'https://pmkisan.gov.in/FarmersCorner.aspx', desc: 'Digital verification, status check, aur sabhi services' },
      { label: 'Zameen Record Integration Status', url: 'https://pmkisan.gov.in/LandSeeding.aspx', desc: 'Land mapping verification status dekho' },
      { label: 'Installment Payment History', url: 'https://pmkisan.gov.in/AccountStatus.aspx', desc: 'Pichli tranches ka payment history check karo' },
    ],
  },
  {
    category: '🏛️ Krishi Mantralaya & National Portals',
    links: [
      { label: 'Ministry of Agriculture & Farmers Welfare', url: 'https://agriculture.gov.in/', desc: 'Krishi Mantralaya ka official website' },
      { label: 'Mobile Application (Android)', url: 'https://play.google.com/store/apps/details?id=com.nic.project.pmkisan', desc: 'Official Android app' },
      { label: 'Digital India Portal', url: 'https://digitalindia.gov.in/', desc: 'Digital India — e-governance services' },
      { label: 'India.gov.in National Portal', url: 'https://www.india.gov.in/', desc: 'Government of India ka main portal' },
    ],
  },
  {
    category: '🌱 Agrarian Welfare Schemes',
    links: [
      { label: 'PM Fasal Bima Yojana (PMFBY)', url: 'https://pmfby.gov.in/', desc: 'Pradhan Mantri Fasal Bima Yojana — crop insurance' },
      { label: 'Kisan Credit Card (KCC)', url: 'https://www.nabard.org/content.aspx?id=595', desc: 'Kisan Credit Card scheme information' },
      { label: 'Soil Health Card', url: 'https://soilhealth.dac.gov.in/', desc: 'Apni zameen ka soil health card dekho' },
      { label: 'PM Krishi Sinchai Yojana', url: 'https://pmksy.gov.in/', desc: 'Sinchai se sambandhit yojana' },
      { label: 'e-NAM (National Agriculture Market)', url: 'https://enam.gov.in/', desc: 'Online agriculture market — fasal becho' },
    ],
  },
  {
    category: '📞 Helpline & Support Contacts',
    links: [
      { label: 'Primary Helpline — 155261', url: 'tel:155261', desc: 'Toll-free helpline — 24/7 available' },
      { label: 'Alternate Contact — 011-24300606', url: 'tel:01124300606', desc: 'Direct helpline number' },
      { label: 'Email Support', url: 'mailto:pmkisan-ict@gov.in', desc: 'Email karein: pmkisan-ict@gov.in' },
      { label: 'Kisan Call Center — 1800-180-1551', url: 'tel:18001801551', desc: 'Agriculture helpline — free call' },
    ],
  },
];

export default function OfficialLinksPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <a 
              href="/" 
              className="hover:text-white underline font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              🏠 Home
            </a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Government Portals</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">🏛️ Sarkari Official Portals</h1>
          <p className="text-green-200 text-sm mt-1">DBT portals aur sabhi government resources ke direct references — ek jagah</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-4xl mx-auto">

        {/* Disclaimer banner */}
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-800 rounded-xl mb-8 text-sm text-amber-900 dark:text-amber-200">
          <strong>⚠️ Important:</strong> Neeche diye gaye saare references official government websites ke hain.
          KisanStatus.com in links ka sirf reference deta hai — hum koi government website nahi hain.
          Official kaam ke liye hamesha{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 rounded">
            pmkisan.gov.in ↗
          </a>{' '}
          ka hi use karein.
        </div>

        {/* Links by category */}
        <div className="space-y-8">
          {officialLinks.map((section) => (
            <div key={section.category} className="card">
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

        {/* Bottom note */}
        <div className="mt-8 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            <strong>KisanStatus.com</strong> ek informational website hai. Upar diye gaye references sirf aapki
            suvidha ke liye hain. Koi bhi official kaam seedha government website par hi karein.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/articles/pm-kisan-23vi-kist-2026-status-check" className="btn-primary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2">✅ 23vi Tranche Status</a>
            <a href="/articles/pm-kisan-ekyc-online-2026" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">🔐 Digital Verification Guide</a>
            <a href="/contact" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">📧 Contact Us</a>
          </div>
        </div>

      </div>
    </>
  );
}