/**
 * Author Page — KisanStatus Team | KisanStatus.com
 * ~346 words visible content | Schema.org Organization markup
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KisanStatus Team — About Us | KisanStatus.com',
  description:
    'KisanStatus Team ek group of agricultural experts hai jo PM Kisan aur sarkari yojanaon ki sahi jankari Indian kisaanon tak pahunchate hain. Verified information, step-by-step guides.',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/author' },
  openGraph: {
    title: 'KisanStatus Team — Agricultural Experts | KisanStatus.com',
    description: 'PM Kisan experts ki team jo verified jankari deti hai — KisanStatus.com ke baare mein jaaniye.',
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
  description: 'Indian farmers ke liye PM Kisan aur sarkari yojanaon ki verified jankari dene wali team. Step-by-step guides, status check, eKYC help.',
  foundingDate: '2024',
  knowsAbout: [
    'PM Kisan Samman Nidhi',
    'Agricultural Schemes India',
    'Farmer Welfare Programs',
    'eKYC Process',
    'Beneficiary Status Check',
    'Kisan Credit Card',
    'PMFBY Crop Insurance',
    'Soil Health Card',
    'Agricultural Policy India',
  ],
  member: [
    {
      '@type': 'OrganizationRole',
      roleName: 'Content Team',
      description: 'Agricultural experts jo PM Kisan guides likhte hain',
    },
    {
      '@type': 'OrganizationRole',
      roleName: 'Research Team',
      description: 'Government data verify karte hain aur updates track karte hain',
    },
    {
      '@type': 'OrganizationRole',
      roleName: 'Support Team',
      description: 'Farmer queries ka answer dete hain',
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
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Our Team</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">KisanStatus Team</h1>
          <p className="text-green-200 text-sm mt-1">Agricultural Experts &amp; Farmer Advocates — Verified Information Since 2024</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* Team card */}
        <div className="card mb-8 border-green-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0">
              <div
                className="w-28 h-28 rounded-full bg-green-100 border-4 border-green-300 flex items-center justify-center text-5xl shadow-md"
                aria-label="Team avatar"
              >
                👨‍🌾
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900">KisanStatus Team</h2>
              <p className="text-primary-600 font-semibold text-sm mt-0.5">Agricultural Experts &amp; Farmer Advocates</p>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1 justify-center sm:justify-start">
                <span>📧</span>
                <a href="mailto:kisanstatus.support@gmail.com" className="hover:text-primary-600 transition-colors">
                  kisanstatus.support@gmail.com
                </a>
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1 justify-center sm:justify-start mt-0.5">
                <span>🌐</span>
                <a href="https://kisanstatus.com" className="hover:text-primary-600 transition-colors">kisanstatus.com</a>
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                {['PM Kisan Experts', 'Kisan Welfare', 'Sarkari Yojana', 'eKYC Guide', 'Agricultural Policy', 'Verified Data'].map((tag) => (
                  <span key={tag} className="text-xs bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full border border-green-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Team Bio */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>KisanStatus Team</strong> ek dedicated group of agricultural experts hai jo Indian kisaanon ke haq mein kaam karte hain.
              Hamara mission hai ki har kisan ko PM Kisan Samman Nidhi aur doosri sarkari yojanaon ki sahi, aasaan aur
              up-to-date jankari mile — bina kisi pareshan ke.
            </p>
            <p>
              Humne <strong>KisanStatus.com</strong> isliye banaya kyunki lakho kisaanon ko sahi jankari ke liye baar baar
              sarkari daftaron ke chakkar lagane padte the. Yeh website unhi kisaanon ke liye hai — jinhein ghar baithe
              apna PM Kisan status check karna ho, kist ki date jaanni ho, ya eKYC kaise kare yeh samajhna ho.
            </p>
            <p>
              Hamari team mein <strong>agricultural graduates, former government officials, aur rural development experts</strong> hain 
              jo PM Kisan policy aur kisan welfare ke baare mein gehri samajh rakhte hain. Hum maante hain ki
              sahi jankari se lais kisan hi apna haq le sakta hai.
            </p>
            <p>
              Yahan di gayi sari jankari <strong>verified official sources</strong> — khaskar <strong>pmkisan.gov.in</strong> aur
              agriculture.gov.in — se li jaati hai aur har nai update ke saath website refresh ki jaati hai. 
              Hum har article ko <strong>real kisaanon ki zaroorat</strong> ko dhyan mein rakh kar likhte hain — saral Hinglish mein, 
              step-by-step format mein.
            </p>
          </div>

          {/* Trust Stats */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-3">🏆 Hamari Achievements</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">26+</div>
                <div className="text-xs text-gray-600 mt-1">Detailed Guides</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">10L+</div>
                <div className="text-xs text-gray-600 mt-1">Farmers Helped</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">37</div>
                <div className="text-xs text-gray-600 mt-1">States Covered</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">2024</div>
                <div className="text-xs text-gray-600 mt-1">Since</div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles by team */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📝 KisanStatus Team Ke Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', title: 'PM Kisan 23vi Kist Status', icon: '📅' },
              { href: '/articles/pm-kisan-ekyc-online-2026', title: 'PM Kisan eKYC Online Guide', icon: '🔐' },
              { href: '/articles/pm-kisan-beneficiary-list-2026', title: 'Beneficiary List Check', icon: '📋' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', title: 'Payment Nahi Aayi — Fix', icon: '💸' },
              { href: '/articles/pm-kisan-registration-online-2026', title: 'New Registration Guide', icon: '📝' },
              { href: '/articles/pm-kisan-name-correction-online-2026', title: 'Name Correction Online', icon: '✏️' },
            ].map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl hover:border-green-300 transition-colors text-sm font-medium text-gray-800"
              >
                <span className="text-xl shrink-0">{art.icon}</span>
                <span>{art.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-green-50 border-green-200">
          <h2 className="text-lg font-bold text-gray-900 mb-3">📞 Sampark Karein</h2>
          <p className="text-sm text-gray-700 mb-4">
            Agar koi article mein galti dikhti hai ya naya topic suggest karna chahte hain, humse sampark karein.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:kisanstatus.support@gmail.com" className="btn-primary text-sm">📧 Email Karein</a>
            <Link href="/contact" className="btn-secondary text-sm">📋 Contact Page</Link>
            <Link href="/about" className="btn-secondary text-sm">🌾 About KisanStatus</Link>
          </div>
        </div>

      </div>
    </>
  );
}