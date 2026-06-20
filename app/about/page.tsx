/**
 * About Page — KisanStatus.com
 * ~316 words visible content
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us – KisanStatus.com | PM Kisan Jankari Site',
  description:
    'KisanStatus.com ek independent informational website hai jo Indian kisaanon ke liye PM Kisan Samman Nidhi ki sahi jankari deti hai. Hamare baare mein jaaniye.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/about' },
  openGraph: {
    title: 'About Us – KisanStatus.com',
    description: 'PM Kisan ki sahi jankari dene wali website ke baare mein jaaniye.',
    type: 'website',
    url: 'https://kisanstatus.com/about',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KisanStatus.com',
  url: 'https://kisanstatus.com',
  foundingDate: '2025',
  founder: { '@type': 'Person', name: 'Sidhu Singh' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'kisanstatus.support@gmail.com',
    contactType: 'customer support',
    availableLanguage: ['Hindi', 'English'],
  },
  description: 'PM Kisan Status Check, installment dates aur sarkari yojanaon ki jankari ke liye India ki ek bharosemand website.',
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">About KisanStatus.com</h1>
          <p className="text-green-200 text-sm mt-1">Indian Kisaanon Ki Awaaz — PM Kisan ki sahi jankari</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* About site */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🌾 KisanStatus.com Kya Hai?</h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>KisanStatus.com</strong> ek independent informational website hai jo Indian kisaanon ke liye
              PM Kisan Samman Nidhi Yojana ki sahi aur up-to-date jankari provide karti hai. Yeh website
              Government of India ya PM Kisan scheme se kisi bhi tarah officially affiliated nahi hai.
            </p>
            <p>
              Hamara uddeshya simple hai — har kisan ko ghar baithe PM Kisan ka status check karna, kist ki
              date jaanna, eKYC kaise karein samajhna, aur payment se judi samasya ka hal dhundna aasaan ho jaye.
              Lakho kisaanon ke paas sahi jankari ka abhav hota hai, isliye yeh platform unke liye banaya gaya hai.
            </p>
            <p>
              Yahan di gayi sari jankari verified official sources — khaskar <strong>pmkisan.gov.in</strong> — se
              li jaati hai aur regularly update ki jaati hai taaki kabhi purani ya galat information na mile.
            </p>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
              <strong>⚠️ Zaruri Suchna:</strong> Hum aapka Aadhaar number, bank account ya koi bhi personal data
              collect nahi karte. Official kaam ke liye hamesha{' '}
              <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                pmkisan.gov.in ↗
              </a>{' '}
              hi use karein.
            </div>
          </div>
        </div>

        {/* What we cover */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Hum Kya Cover Karte Hain</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '✅', title: 'PM Kisan Status Check', desc: 'Beneficiary status aur payment history guide' },
              { icon: '📅', title: 'Kist Ki Dates', desc: '23vi kist kab aayegi — har update' },
              { icon: '🔐', title: 'eKYC Guide', desc: 'OTP aur biometric eKYC step-by-step' },
              { icon: '📋', title: 'Beneficiary List', desc: 'State aur district wise naam check' },
              { icon: '📝', title: 'New Registration', desc: 'PM Kisan registration poora tarika' },
              { icon: '💸', title: 'Payment Problems', desc: 'Payment nahi aayi? Karan aur hal' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <span className="text-xl shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { value: '12 Cr+', label: 'Kisaan Labhanvit', icon: '👨‍🌾' },
            { value: '₹6,000', label: 'Saalana Sahayata', icon: '💰' },
            { value: '23vi', label: 'Aane Wali Kist', icon: '📅' },
            { value: '28+', label: 'States Covered', icon: '🗺️' },
          ].map((stat) => (
            <div key={stat.label} className="card text-center py-4">
              <div className="text-2xl mb-1" aria-hidden="true">{stat.icon}</div>
              <div className="text-xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="card border-primary-200 bg-green-50">
          <h2 className="text-lg font-bold text-gray-900 mb-3">🔗 Useful Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/author" className="btn-secondary text-sm">👤 Author — Sidhu Singh</Link>
            <Link href="/contact" className="btn-secondary text-sm">📧 Contact Us</Link>
            <Link href="/official-links" className="btn-secondary text-sm">🏛️ Sarkari Links</Link>
            <Link href="/pm-kisan-status" className="btn-primary text-sm">✅ Status Check</Link>
          </div>
        </div>

      </div>
    </>
  );
}
