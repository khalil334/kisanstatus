/**
 * Author Page — KisanStatus Team | KisanStatus.com
 * ~346 words visible content | Schema.org Organization markup
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KisanStatus Team — Agrarian Welfare Experts | KisanStatus.com',
  description:
    'KisanStatus Team ek group of agricultural experts hai jo cultivator benefit programs aur sarkari yojanaon ki verified guidance Indian annadataon tak pahunchate hain. Step-by-step resources.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/author' },
  openGraph: {
    title: 'KisanStatus Team — Agrarian Welfare Experts | KisanStatus.com',
    description: 'Cultivator benefit experts ki team jo verified guidance deti hai — KisanStatus.com ke baare mein jaaniye.',
    type: 'profile',
    url: 'https://kisanstatus.com/author',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KisanStatus Team',
  url: 'https://kisanstatus.com',
  logo: 'https://kisanstatus.com/logo.webp',
  email: 'kisanstatus.support@gmail.com',
  description: 'Indian cultivators ke liye agrarian welfare schemes ki verified guidance dene wali team. Step-by-step resources, beneficiary verification, digital authentication help.',
  foundingDate: '2024',
  knowsAbout: [
    'Cultivator Benefit Programs',
    'Agricultural Schemes India',
    'Agrarian Welfare Initiatives',
    'Digital Verification Process',
    'Beneficiary Status Check',
    'Kisan Credit Card',
    'PMFBY Crop Insurance',
    'Soil Health Card',
    'Agricultural Policy India',
    'DBT Transfer System',
    'NPCI Mapper Linking',
  ],
  member: [
    {
      '@type': 'OrganizationRole',
      roleName: 'Content Team',
      description: 'Agricultural experts jo cultivator benefit guides likhte hain',
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
    'https://kisanstatus.com',
    'https://www.facebook.com/profile.php?id=61590430994270',
  ],
};

export default function AuthorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
        <div className="card mb-8 border-[var(--color-border)]">
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
              <h2 className="text-2xl font-bold text-[var(--color-text)]">KisanStatus Team</h2>
              <p className="text-[var(--color-primary)] font-semibold text-sm mt-0.5">Agrarian Welfare Experts &amp; Annadata Advocates</p>
              <p className="text-[var(--color-text-muted)] text-sm mt-1 flex items-center gap-1 justify-center sm:justify-start">
                <span>📧</span>
                <a href="mailto:kisanstatus.support@gmail.com" className="hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
                  kisanstatus.support@gmail.com
                </a>
              </p>
              <p className="text-[var(--color-text-muted)] text-sm flex items-center gap-1 justify-center sm:justify-start mt-0.5">
                <span>🌐</span>
                <a href="https://kisanstatus.com" className="hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">kisanstatus.com</a>
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
              <strong>KisanStatus Team</strong> ek dedicated group of agricultural experts hai jo Indian annadataon ke haq mein kaam karte hain.
              Hamara mission hai ki har khetihar ko cultivator benefit programs aur doosri sarkari yojanaon ki sahi, aasaan aur
              up-to-date guidance mile — bina kisi pareshan ke.
            </p>
            <p>
              Humne yeh portal isliye banaya kyunki lakho annadataon ko verified resources ke liye baar baar
              sarkari daftaron ke chakkar lagane padte the. Yeh website unhi cultivators ke liye hai — jinhein ghar baithe
              apna beneficiary status check karna ho, installment ki date jaanni ho, ya digital authentication kaise kare yeh samajhna ho.
            </p>
            <p>
              Hamari team mein <strong>agricultural graduates, former government officials, aur rural development experts</strong> hain 
              jo agrarian policy aur cultivator welfare ke baare mein gehri samajh rakhte hain. Hum maante hain ki
              sahi guidance se lais annadata hi apna haq le sakta hai.
            </p>
            <p>
              Yahan di gayi sari guidance <strong>verified official sources</strong> — khaskar <strong>pmkisan.gov.in</strong> aur
              agriculture.gov.in — se li jaati hai aur har nai update ke saath portal refresh kiya jaata hai. 
              Hum har article ko <strong>real annadataon ki zaroorat</strong> ko dhyan mein rakh kar likhte hain — saral Hinglish mein, 
              step-by-step format mein.
            </p>
          </div>

          {/* Trust Stats */}
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] text-base mb-3">🏆 Hamari Achievements</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">26+</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">Detailed Resources</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">10L+</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">Annadata Helped</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-[var(--color-primary)]">37</div>
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
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">📝 KisanStatus Team Ke Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', icon: '📅' },
              { href: '/articles/pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', icon: '🔐' },
              { href: '/articles/pm-kisan-beneficiary-list-2026', title: 'Approved Recipients Roster', icon: '📋' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', title: 'DBT Transfer Failed — Fix', icon: '💸' },
              { href: '/articles/pm-kisan-registration-online-2026', title: 'New Enrollment Guide', icon: '📝' },
              { href: '/articles/pm-kisan-name-correction-online-2026', title: 'Identity Rectification Online', icon: '✏️' },
            ].map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl hover:border-green-300 dark:hover:border-green-600 transition-colors text-sm font-medium text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span className="text-xl shrink-0">{art.icon}</span>
                <span>{art.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">📞 Sampark Karein</h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Agar koi resource mein galti dikhti hai ya naya topic suggest karna chahte hain, humse sampark karein.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:kisanstatus.support@gmail.com" className="btn-primary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2">📧 Email Karein</a>
            <Link href="/contact" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">📋 Contact Page</Link>
            <Link href="/about" className="btn-secondary text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">🌾 About KisanStatus</Link>
          </div>
        </div>

      </div>
    </>
  );
}