import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME} | Sampark Karein & Support`,
  description: `KisanStatus se sampark karein. Website feedback, content correction, ya kisi bhi sawaal ke liye humein email karein. Hum 24-48 ghante mein reply karte hain.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Contact Us — ${SITE_NAME} | Sampark Karein`,
    description: `KisanStatus se sampark karein. Website feedback, content correction, ya kisi bhi sawaal ke liye humein email karein.`,
    type: 'website',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
  },
  twitter: {
    card: 'summary',
    title: `Contact Us — ${SITE_NAME}`,
    description: `KisanStatus se sampark karein. Website feedback, content correction, ya kisi bhi sawaal ke liye humein email karein.`,
  },
};

const OFFICIAL_CONTACTS = [
  { icon: '📞', label: 'Helpline 1', value: '155261', href: 'tel:155261' },
  { icon: '📞', label: 'Helpline 2', value: '011-24300606', href: 'tel:01124300606' },
  { icon: '✉️', label: 'Official Email', value: 'pmkisan-ict@gov.in', href: 'mailto:pmkisan-ict@gov.in' },
  { icon: '🌐', label: 'Official Portal', value: 'pmkisan.gov.in', href: 'https://pmkisan.gov.in' },
];

const HELP_ITEMS = [
  { icon: '✅', text: 'Website content mein koi galti ya sudhaar suggest karna ho', canHelp: true },
  { icon: '✅', text: 'Naye article ya topic ka suggestion dena ho', canHelp: true },
  { icon: '✅', text: 'Website se juda technical feedback ya bug report karna ho', canHelp: true },
  { icon: '✅', text: 'Collaboration ya partnership ke liye baat karni ho', canHelp: true },
  { icon: '❌', text: 'PM Kisan payment ya account se judi samasyayein (iske liye official helpline par call karein)', canHelp: false },
  { icon: '❌', text: 'Aadhaar ya bank account update karna ho (iske liye nazdeeki Agriculture office ya CSC centre jaayein)', canHelp: false },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact & Support', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Contact & Support</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
            Contact & Support
          </h1>
          <p className="text-green-200 text-sm">Koi sawaal, feedback ya suggestion hai? Hum aapki madad ke liye yahan hain.</p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-10">

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-xl mb-8 text-sm text-amber-900 dark:text-amber-300">
          <strong>⚠️ Zaruri Suchna:</strong> {SITE_NAME} ek independent informational portal hai aur kisi sarkari vibhag se affiliated nahi hai.
          PM Kisan payment, status ya kisi bhi official kaam ke liye seedha{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-700 dark:hover:text-amber-200">pmkisan.gov.in ↗</a>{' '}
          ya helpline <strong>155261</strong> ka hi upyog karein.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-black text-[var(--color-text)] mb-3 flex items-center gap-2">
              <span aria-hidden="true">📧</span> Email Karein
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
              Website feedback, content correction, ya collaboration ke liye humein email karein. 
              Hum aamtaur par 24–48 ghante ke andar reply karne ki koshish karte hain.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
              Agar aapko kisi specific topic par jankari chahiye, toh pehle hamare{' '}
              <Link href="/articles" className="text-[var(--color-primary)] font-bold underline hover:text-green-700 dark:hover:text-green-400">
                Verified Guides Section
              </Link>{' '}
              ko zaroor check karein.
            </p>
            <a
              href="mailto:kisanstatus.support@gmail.com"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              📧 kisanstatus.support@gmail.com
            </a>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-black text-[var(--color-text)] mb-3 flex items-center gap-2">
              <span aria-hidden="true">👨‍🌾</span> Hamari Team
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700 flex items-center justify-center text-2xl">
                🌾
              </div>
              <div>
                <p className="font-bold text-[var(--color-text)]">{AUTHOR_NAME}</p>
                <p className="text-xs text-[var(--color-primary)]">PM Kisan Experts & Kisan Advocates</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Team Profile Dekhen →
            </Link>
          </div>
        </div>

        <section className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4 flex items-center gap-2">
            <span aria-hidden="true">🏛️</span> PM Kisan Official Helpline
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Payment, status, enrollment ya kisi bhi sarkari kaam ke liye seedha official sources se hi sampark karein:
          </p>
          <div className="space-y-3">
            {OFFICIAL_CONTACTS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-3 bg-[var(--color-card)] rounded-xl border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <span className="text-xl shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.label}</p>
                  <p className="font-bold text-[var(--color-primary)] text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">Hum Kis Mein Help Kar Sakte Hain?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {HELP_ITEMS.map((item) => (
              <div key={item.text} className={`flex items-start gap-2 ${item.canHelp ? 'text-[var(--color-text-muted)]' : 'text-red-600 dark:text-red-400'}`}>
                <span className={item.canHelp ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'} aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}