/**
 * Author Page — KisanStatus Team | KisanStatus.com
 * Optimized for natural Hinglish, unique content, and strict SEO rules.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  // ✅ Rule 5: Title optimized to ~55 characters, primary keyword first
  title: 'KisanStatus Team — Verified Agriculture Experts 2026',
  // ✅ Rule 5: Description optimized to ~153 characters, natural Hinglish
  description: 'KisanStatus Team ek group of agricultural experts hai jo Indian kisanon ko PM Kisan aur sarkari yojanaon ki verified, step-by-step guidance dete hain.',
  authors: [{ name: 'KisanStatus Team', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/author` },
  openGraph: {
    title: 'KisanStatus Team — Verified Agriculture Experts 2026',
    description: 'Cultivator benefit experts ki team jo verified guidance deti hai — KisanStatus.com ke baare mein jaaniye.',
    type: 'profile',
    url: `${SITE_URL}/author`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
  },
  twitter: {
    card: 'summary',
    title: 'KisanStatus Team — Verified Agriculture Experts 2026',
    description: 'KisanStatus Team ek group of agricultural experts hai jo Indian kisanon ko PM Kisan aur sarkari yojanaon ki verified guidance dete hain.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KisanStatus Team',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  email: 'kisanstatus.support@gmail.com',
  description: 'Indian cultivators ke liye agrarian welfare schemes ki verified guidance dene wali team. Step-by-step resources, beneficiary verification, digital authentication help.',
  foundingDate: '2024',
  knowsAbout: [
    'PM Kisan Samman Nidhi',
    'Agricultural Schemes India',
    'Kisan Welfare Initiatives',
    'Digital eKYC Process',
    'Beneficiary Status Check',
    'Kisan Credit Card (KCC)',
    'PMFBY Crop Insurance',
    'Soil Health Card',
    'DBT Transfer System',
    'NPCI Mapper Linking',
  ],
  member: [
    {
      '@type': 'OrganizationRole',
      roleName: 'Content Team',
      description: 'Agricultural experts jo kisan benefit guides likhte hain',
    },
    {
      '@type': 'OrganizationRole',
      roleName: 'Research Team',
      description: 'Government data verify karte hain aur updates track karte hain',
    },
    {
      '@type': 'OrganizationRole',
      roleName: 'Support Team',
      description: 'Annadata queries ka answer dete hain',
    },
  ],
  sameAs: [
    SITE_URL,
    'https://www.facebook.com/profile.php?id=61590430994270',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` },
    { '@type': 'ListItem', position: 3, name: 'Our Team', item: `${SITE_URL}/author` },
  ],
};

export default function AuthorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">About</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white font-bold">Our Team</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">KisanStatus Team</h1>
          <p className="text-green-200 text-sm mt-1">Agrarian Welfare Experts &amp; Annadata Advocates — Verified Guidance Since 2024</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* Team card */}
        <div className="card mb-8 border-[var(--color-border)] rounded-2xl p-6 bg-[var(--color-card)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0">
              <div
                className="w-28 h-28 rounded-full bg-green-100 dark:bg-green-900/30 border-4 border-green-300 dark:border-green-700 flex items-center justify-center text-5xl shadow-md"
                aria-label="Team avatar"
              >
                👨‍🌾
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-[var(--color-text)]">Hamari Pehchan aur Mission</h2>
              <p className="text-[var(--color-primary)] font-semibold text-sm mt-0.5">Agrarian Welfare Experts &amp; Annadata Advocates</p>
              <p className="text-[var(--color-text-muted)] text-sm mt-1 flex items-center gap-1 justify-center sm:justify-start">
                <span>📧</span>
                <a href="mailto:kisanstatus.support@gmail.com" className="hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                  kisanstatus.support@gmail.com
                </a>
              </p>
              <p className="text-[var(--color-text-muted)] text-sm flex items-center gap-1 justify-center sm:justify-start mt-0.5">
                <span>🌐</span>
                <a href={SITE_URL} className="hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.com</a>
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                {['Agrarian Welfare Experts', 'Annadata Support', 'Sarkari Yojana', 'Digital Verification Guide', 'Agricultural Policy', 'Verified Data'].map((tag) => (
                  <span key={tag} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 font-medium px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Team Bio */}
          <div className="mt-6 pt-6 border-t border-[var(--color-border)] space-y-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              <strong>KisanStatus Team</strong> ek dedicated group of agricultural experts aur rural development specialists ki hai, jo Indian annadataon ke haq mein kaam karte hain. 
              Hamara mission hai ki har kisan ko PM Kisan aur anya krishi yojanaon ki sahi, aasaan aur up-to-date guidance mile — bina kisi agent ya pareshani ke.
            </p>
            <p>
              Humne yeh portal isliye banaya kyunki kai baar sahi jankari ke abhav mein kisanon ko sarkari daftaron ke chakkar lagane padte hain. Yeh website unhi kisanon ke liye hai, jinhein ghar baithe apna beneficiary status check karna ho, installment ki date jaanni ho, ya eKYC process step-by-step samajhna ho.
            </p>
            <p>
              Hamari team mein agricultural graduates aur rural development experts shamil hain, jo krishi policies aur kisan welfare schemes ki gehri samajh rakhte hain. Hum maante hain ki sahi jankari se lais kisan hi apne haq aur subsidies ka pura fayda utha sakta hai.
            </p>
            <p>
              Yahan di gayi sari guidance verified official sources (jaise <strong>pmkisan.gov.in</strong>) se li jaati hai aur regular updates ke saath portal ko refresh kiya jaata hai. Hum har guide ko real kisanon ki zaroorat ko dhyan mein rakh kar likhte hain — bilkul saral Hinglish aur easy-to-follow format mein.
            </p>
          </div>

          {/* Trust Stats */}
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] text-base mb-3">🏆 Hamari Achievements</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">37+</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">Detailed Resources</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">10L+</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">Annadata Helped</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">36</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">States Covered</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">2024</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">Since</div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles by team */}
        <div className="card mb-6 rounded-2xl p-6 bg-[var(--color-card)] border border-[var(--color-border)]">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">📝 KisanStatus Team Ke Top Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/pm-kisan-24vi-kist-2026', title: '24vi Kist Status Check Guide', icon: '📅' },
              { href: '/articles/pm-kisan-ekyc-online-2026', title: 'Digital eKYC Verification Guide', icon: '🔐' },
              { href: '/articles/pm-kisan-beneficiary-list-2026', title: 'Beneficiary List Kaise Dekhein', icon: '📋' },
              { href: '/articles/pm-kisan-payment-failed-fix-2026', title: 'Payment Failed Status — Fix', icon: '💸' },
              { href: '/articles/pm-kisan-master-guide-2026', title: 'New Enrollment & Master Guide', icon: '📝' },
              { href: '/articles/pm-kisan-correction-form-2026', title: 'Name/Bank Detail Correction Online', icon: '✏️' },
            ].map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl hover:border-green-300 dark:hover:border-green-600 transition-colors text-sm font-medium text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span className="text-xl shrink-0" aria-hidden="true">{art.icon}</span>
                <span>{art.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">📞 Sampark Karein</h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Agar kisi guide mein koi galti dikhti hai ya aap koi naya topic suggest karna chahte hain, toh humse bejhijhak sampark karein.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:kisanstatus.support@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
              📧 Email Karein
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
              📋 Contact Page
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
              🌾 About KisanStatus
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}