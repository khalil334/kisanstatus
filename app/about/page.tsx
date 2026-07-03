import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import { ARTICLES } from '@/lib/articles-data';

export const metadata: Metadata = {
  title: `About Us – ${SITE_NAME} | PM Kisan Verified Guidance Portal`,
  description: `${SITE_NAME} ek independent portal hai jo Indian kisanon ke liye PM Kisan verification, eKYC, payment fix, enrollment ki verified guidance provide karta hai. Hamare baare mein jaaniye.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Us – ${SITE_NAME}`,
    description: 'PM Kisan verified guidance dene wali website ke baare mein jaaniye. Independent, free, Hinglish mein.',
    type: 'website',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  foundingDate: '2025',
  founder: { '@type': 'Organization', name: AUTHOR_NAME },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'kisanstatus.support@gmail.com',
    contactType: 'customer support',
    availableLanguage: ['Hindi', 'English'],
  },
  description: 'PM Kisan beneficiary verification, installment dates, eKYC, payment solutions — India ka trusted independent agrarian welfare portal.',
};

const TOPICS = [
  { icon: '✅', title: 'Beneficiary Verification', desc: 'Status check aur payment history guide' },
  { icon: '📅', title: 'Installment Dates', desc: 'Har tranche ki date aur update' },
  { icon: '🔐', title: 'Digital Authentication', desc: 'eKYC OTP aur biometric step-by-step' },
  { icon: '📋', title: 'Beneficiary Roster', desc: 'State aur district wise naam check' },
  { icon: '📝', title: 'New Enrollment', desc: 'Registration poora tarika' },
  { icon: '💸', title: 'Payment Issues Fix', desc: 'Credit nahi aayi? Karan aur hal' },
];

const STATS = [
  { value: '12 Cr+', label: 'Kisan Labhanvit', icon: '👨‍🌾' },
  { value: '₹6,000', label: 'Saalana Sahayata', icon: '💰' },
  { value: `${ARTICLES.length}+`, label: 'Verified Guides', icon: '📚' },
  { value: '36', label: 'States Covered', icon: '🗺️' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">About Us</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
            About {SITE_NAME}
          </h1>
          <p className="text-green-200 text-sm">Indian Kisanon Ki Awaaz — Verified Agricultural Guidance</p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-10">

        {/* What Is KisanStatus */}
        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            🌾 {SITE_NAME} Kya Hai?
          </h2>
          <div className="space-y-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              <strong>{SITE_NAME}</strong> ek independent informational portal hai jo Indian kisanon ke liye
              PM Kisan aur anya krishi yojanaon ki verified, up-to-date guidance provide karta hai. Yeh portal
              Government of India ya kisi sarkari scheme se officially affiliated nahi hai.
            </p>
            <p>
              Simple mission: Har kisan ko ghar baithe beneficiary verification, installment dates, eKYC process,
              aur payment issues ka solution aasani se mile — bina kisi agent ya middleman ke.
            </p>
            <p>
              Kai kisanon ke paas sahi resources ka abhav hota hai. Sarkari portals complex hain, English mein hain,
              ya slow hain. Hum us gap ko bridge karte hain — <strong>simple Hinglish mein, tested solutions ke saath.</strong>
            </p>
            <p>
              Sari guidance verified official sources — khaaskar <strong>pmkisan.gov.in</strong> — se li jaati hai
              aur regularly update ki jaati hai.
            </p>
          </div>
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <p className="text-sm text-amber-900 dark:text-amber-300">
              <strong>⚠️ Zaruri Suchna:</strong> Hum aapka Aadhaar, bank account ya koi personal data collect nahi karte.
              Official kaam ke liye hamesha{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-700 dark:hover:text-amber-200">
                pmkisan.gov.in ↗
              </a>{' '}
              hi use karein.
            </p>
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            📋 Hum Kya Cover Karte Hain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TOPICS.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <span className="text-xl shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="font-bold text-[var(--color-text)] text-sm">{item.title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl text-center py-5 px-3">
              <div className="text-2xl mb-1" aria-hidden="true">{stat.icon}</div>
              <div className="text-xl font-black text-[var(--color-primary)]">{stat.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <section className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">🔗 Useful Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              📧 Contact Us
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              📚 All Articles
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              🧮 Free Calculators
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl text-xs text-[var(--color-text-muted)] leading-relaxed">
          <p className="font-bold text-[var(--color-text)] mb-2">⚠️ Disclaimer</p>
          <p className="mb-2">
            {SITE_NAME} ek independent informational website hai. Hum Government of India, PM Kisan, ya kisi sarkari vibhag se affiliated nahi hain.
          </p>
          <p>
            Official verification, enrollment, ya payment related kaam ke liye hamesha{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline font-bold">
              pmkisan.gov.in ↗
            </a>{' '}
            ya nazdeeki CSC centre / Agriculture Office visit karein.
          </p>
        </div>
      </div>
    </>
  );
}