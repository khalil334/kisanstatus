import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, AUTHOR_IMAGE, AUTHOR_IMAGE_URL, AUTHOR_BIO, AUTHOR_LINKEDIN, SUPPORT_EMAIL, DEFAULT_OG_IMAGE, SOCIAL_LINKS } from '@/lib/site-config';
import { ARTICLES } from '@/lib/articles-data';

export const metadata: Metadata = {
  title: 'About Us - PM Kisan Verified Guidance',
  description: `KisanStatus ek independent portal hai jo Indian kisanon ko PM Kisan verification, eKYC, payment fix aur enrollment ki free, verified Hinglish guidance deta hai.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Us - ${SITE_NAME} | PM Kisan Verified Guidance`,
    description: 'PM Kisan verified guidance dene wali independent website ke baare mein jaaniye. Free, trusted, aur saral Hinglish mein.',
    type: 'website',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} - About Us`, type: 'image/webp' }],
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  foundingDate: '2025',
  founder: { '@type': 'Person', name: AUTHOR_NAME, url: AUTHOR_URL, image: AUTHOR_IMAGE_URL },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.whatsapp, AUTHOR_LINKEDIN],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'kisanstatus.support@gmail.com',
    contactType: 'customer support',
    availableLanguage: ['Hindi', 'English'],
  },
  description: 'PM Kisan beneficiary verification, installment dates, eKYC, payment solutions — India ka trusted independent agrarian welfare portal.',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
  image: AUTHOR_IMAGE_URL,
  jobTitle: 'Agricultural Content Expert',
  worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  email: SUPPORT_EMAIL,
  knowsAbout: ['PM Kisan Samman Nidhi', 'Kisan Credit Card', 'Krishi Yojana', 'Farm Subsidies India'],
  description: AUTHOR_BIO,
  sameAs: [AUTHOR_LINKEDIN],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: `${SITE_URL}/about`,
    },
  ],
};

const TOPICS = [
  { title: 'Beneficiary Verification', desc: 'Status check aur payment history guide' },
  { title: 'Installment Dates', desc: 'Har tranche ki date aur update' },
  { title: 'Digital Authentication', desc: 'eKYC OTP aur biometric step-by-step' },
  { title: 'Beneficiary Roster', desc: 'State aur district wise naam check' },
  { title: 'New Enrollment', desc: 'Registration poora tarika' },
  { title: 'Payment Issues Fix', desc: 'Credit nahi aayi? Karan aur hal' },
];

const STATS = [
  { value: '12 Cr+', label: 'Kisan Labhanvit', icon: '' },
  { value: '₹6,000', label: 'Saalana Sahayata' },
  { value: `${ARTICLES.length}+`, label: 'Verified Guides' },
  { value: '36', label: 'States Covered' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

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
          <p className="text-green-200 text-sm">Bharatiya Kisanon Ki Awaaz — PM Kisan aur Krishi Yojanaon ki Verified Guidance</p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-10">

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            {SITE_NAME} Kya Hai?
          </h2>
          <div className="space-y-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              <strong>{SITE_NAME}</strong> ek independent informational portal hai jo Indian kisanon ke liye
              PM Kisan aur anya krishi yojanaon ki verified, up-to-date guidance provide karta hai. Yeh portal
              Government of India ya kisi sarkari scheme se officially affiliated nahi hai.
            </p>
            <p>
              Humara maksad bilkul seedha hai: Har kisan ko ghar baithe PM Kisan beneficiary verification,
              installment dates, eKYC process aur payment issues ka asaan aur tested solution mile —
              bina kisi agent ya middleman ke chakkar mein pade.
            </p>
            <p>
              Hum jante hain ki kai baar sarkari portals complex ya English mein hote hain, jisse sahi
              jankari tak pahunchne mein dikkat hoti hai. Hum isi kami ko pura karte hain — bilkul saral
              Hinglish mein, step-by-step aur verified solutions ke saath. Aap hamare{' '}
              <Link href="/articles" className="text-[var(--color-primary)] font-bold underline hover:text-green-700 dark:hover:text-green-400">
                verified guides section
              </Link>{' '}
              mein jakar apne sawalon ke jawab dhoondh sakte hain.
            </p>
            <p>
              Sari guidance verified official sources — khaaskar <strong>pmkisan.gov.in</strong> — se li jaati hai
              aur regularly update ki jaati hai.
            </p>
          </div>
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <p className="text-sm text-amber-900 dark:text-amber-300">
              <strong>Zaruri Suchna:</strong> Hum aapka Aadhaar, bank account ya koi personal data collect nahi karte.
              Official kaam ke liye hamesha{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-700 dark:hover:text-amber-200">
                pmkisan.gov.in ↗
              </a>{' '}
              hi use karein.
            </p>
          </div>
        </section>

        <section id="author" className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-5 pb-2 border-b-2 border-[var(--color-border)]">
            Author Ke Baare Mein
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 shadow-lg border-4 border-[var(--color-primary)]">
              <Image
                src={AUTHOR_IMAGE}
                alt={AUTHOR_NAME}
                width={112}
                height={112}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-black text-[var(--color-text)]">{AUTHOR_NAME}</h3>
              <p className="text-sm text-green-700 dark:text-green-400 font-semibold mt-0.5">
                Founder &amp; Agricultural Content Expert
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-3">{AUTHOR_BIO}</p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-2">
                Zyada tar guides PM Kisan, KCC loan, tractor subsidy aur mandi bhav par hain —
                yani wahi cheezein jinke baare me log sabse zyada poochte hain. Koi topic chahiye
                jo abhi cover nahi hua? Email kar dijiye, list me daal loonga.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text)] text-xs font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Email Karein
                </a>
                <a
                  href={AUTHOR_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a66c2] text-white text-xs font-bold rounded-xl hover:bg-[#084d92] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-xs font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Sabhi Guides Padhein
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
             Hum Kya Cover Karte Hain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TOPICS.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div>
                  <p className="font-bold text-[var(--color-text)] text-sm">{item.title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl text-center py-5 px-3">
              <div className="text-2xl mb-1" aria-hidden="true">{stat.icon}</div>
              <div className="text-xl font-black text-[var(--color-primary)]">{stat.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <section className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">Useful Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
               Contact Us
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
               All Articles
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
               Free Calculators
            </Link>
          </div>
        </section>

        <div className="p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl text-xs text-[var(--color-text-muted)] leading-relaxed">
          <p className="font-bold text-[var(--color-text)] mb-2">Disclaimer</p>
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
