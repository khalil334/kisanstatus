/**
 * /contact — KisanStatus.com
 * Contact & Support Information Page — SEO optimized
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact & Support — KisanStatus.com | Sampark Karein',
  description:
    'KisanStatus.com se sampark karein. Website feedback, content correction ya koi sawaal ke liye humein email karein — kisanstatus.support@gmail.com',
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/contact' },
  robots: { index: true, follow: false },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Contact & Support</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Contact & Support</h1>
          <p className="text-green-200 text-sm mt-1">Sawaal? Feedback? Hum yahan hain.</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* Notice */}
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl mb-8 text-sm text-amber-900">
          <strong>⚠️ Zaruri Suchna:</strong> KisanStatus.com ek informational portal hai, Government se affiliated nahi hai.
          Agrarian welfare payment ya official problems ke liye seedha{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold">pmkisan.gov.in ↗</a>{' '}
          ya helpline <strong>155261</strong> use karein.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span aria-hidden="true">📧</span> Email Karein
            </h2>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Website feedback, content correction, ya collaboration ke liye email karein.
              Hum 24–48 ghante mein reply karte hain.
            </p>
            <a href="mailto:kisanstatus.support@gmail.com" className="btn-primary w-full text-center block text-sm">
              📧 kisanstatus.support@gmail.com
            </a>
          </div>

          {/* Team */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span aria-hidden="true">👨‍🌾</span> Hamari Team
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center text-2xl">
                🌾
              </div>
              <div>
                <p className="font-bold text-gray-900">KisanStatus Team</p>
                <p className="text-xs text-primary-600">Agrarian Welfare Experts &amp; Annadata Advocates</p>
              </div>
            </div>
            <Link href="/author" className="btn-secondary w-full text-center block text-sm">
              Team Profile Dekhen →
            </Link>
          </div>
        </div>

        {/* Official Helpline */}
        <div className="card border-green-200 bg-green-50 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span aria-hidden="true">🏛️</span> Agrarian Welfare Official Helpline
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Cultivator benefit payment, status, enrollment ya koi bhi sarkari kaam ke liye seedha official se sampark karein:
          </p>
          <div className="space-y-3">
            {[
              { icon: '📞', label: 'Helpline 1', value: '155261', href: 'tel:155261' },
              { icon: '📞', label: 'Helpline 2', value: '011-24300606', href: 'tel:01124300606' },
              { icon: '✉️', label: 'Official Email', value: 'pmkisan-ict@gov.in', href: 'mailto:pmkisan-ict@gov.in' },
              { icon: '🌐', label: 'Official Portal', value: 'pmkisan.gov.in', href: 'https://pmkisan.gov.in' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-200 hover:border-green-400 transition-colors"
              >
                <span className="text-xl shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="font-semibold text-primary-700 text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* What we help with */}
        <div className="card">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Hum Kis Mein Help Kar Sakte Hain?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              { icon: '✅', text: 'Website content mein galti milne par' },
              { icon: '✅', text: 'Naye article ka suggestion' },
              { icon: '✅', text: 'Technical feedback ya bug report' },
              { icon: '✅', text: 'Collaboration ya partnership' },
              { icon: '❌', text: 'Cultivator benefit payment problems (official helpline call karo)' },
              { icon: '❌', text: 'Biometric credential/bank account update (Agriculture office jao)' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2 text-gray-700">
                <span className={item.icon === '✅' ? 'text-green-600' : 'text-red-500'} aria-hidden="true">
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}