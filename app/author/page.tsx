/**
 * Author Page — Sidhu Singh | KisanStatus.com
 * ~346 words visible content | Schema.org Person markup
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sidhu Singh — Author | KisanStatus.com',
  description:
    'Sidhu Singh ek agricultural expert hain jo PM Kisan aur sarkari yojanaon ki sahi jankari Indian kisaanon tak pahunchate hain. KisanStatus.com ke founder aur author.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/author' }],
  alternates: { canonical: 'https://kisanstatus.com/author' },
  openGraph: {
    title: 'Sidhu Singh — Agricultural Expert & Author | KisanStatus.com',
    description: 'PM Kisan expert Sidhu Singh ke baare mein jaaniye — KisanStatus.com ke founder.',
    type: 'profile',
    url: 'https://kisanstatus.com/author',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sidhu Singh',
  url: 'https://kisanstatus.com/author',
  jobTitle: 'Agricultural Expert & Farmer Advocate',
  email: 'kisanstatus.support@gmail.com',
  worksFor: {
    '@type': 'Organization',
    name: 'KisanStatus.com',
    url: 'https://kisanstatus.com',
  },
  knowsAbout: [
    'PM Kisan Samman Nidhi',
    'Agricultural Schemes India',
    'Farmer Welfare Programs',
    'eKYC Process',
    'Beneficiary Status Check',
    'Kisan Credit Card',
    'PMFBY Crop Insurance',
  ],
  description: 'Indian farmers ke liye PM Kisan aur sarkari yojanaon ki sahi jankari dene wala agricultural expert aur KisanStatus.com ka founder.',
  sameAs: ['https://kisanstatus.com'],
};

export default function AuthorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Author</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Sidhu Singh</h1>
          <p className="text-green-200 text-sm mt-1">Agricultural Expert &amp; Farmer Advocate — KisanStatus.com</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* Author card */}
        <div className="card mb-8 border-green-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0">
              <div
                className="w-28 h-28 rounded-full bg-green-100 border-4 border-green-300 flex items-center justify-center text-5xl shadow-md"
                aria-label="Author avatar"
              >
                🌾
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900">Sidhu Singh</h2>
              <p className="text-primary-600 font-semibold text-sm mt-0.5">Agricultural Expert &amp; Farmer Advocate</p>
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
                {['PM Kisan Expert', 'Kisan Welfare', 'Sarkari Yojana', 'eKYC Guide', 'Agricultural Policy'].map((tag) => (
                  <span key={tag} className="text-xs bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full border border-green-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Sidhu Singh</strong> ek dedicated agricultural expert hain jo Indian kisaanon ke haq mein kaam karte hain.
              Unka mission hai ki har kisan ko PM Kisan Samman Nidhi aur doosri sarkari yojanaon ki sahi, aasaan aur
              up-to-date jankari mile — bina kisi pareshan ke.
            </p>
            <p>
              Unhone <strong>KisanStatus.com</strong> isliye banaya kyunki lakho kisaanon ko sahi jankari ke liye baar baar
              sarkari daftaron ke chakkar lagane padte the. Yeh website unhi kisaanon ke liye hai — jinhein ghar baithe
              apna PM Kisan status check karna ho, kist ki date jaanni ho, ya eKYC kaise kare yeh samajhna ho.
            </p>
            <p>
              Sidhu Singh agricultural policy aur kisan welfare ke baare mein gehri samajh rakhte hain. Unka maanna hai ki
              sahi jankari se lais kisan hi apna haq le sakta hai. Isliye is website par har article real kisaanon ki
              zaroorat ko dhyan mein rakh kar likha gaya hai — saral Hinglish mein, step-by-step format mein.
            </p>
            <p>
              Yahan di gayi sari jankari verified official sources — khaskar <strong>pmkisan.gov.in</strong> aur
              agriculture.gov.in — se li jaati hai aur har nai update ke saath website refresh ki jaati hai.
            </p>
          </div>
        </div>

        {/* Articles by author */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Sidhu Singh Ke Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/pm-kisan-21vi-installment-status-check', title: 'PM Kisan 21vi Kist Status', icon: '📅' },
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
            Agar koi article mein galti dikhti hai ya naya topic suggest karna chahte hain, directly email karein.
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
