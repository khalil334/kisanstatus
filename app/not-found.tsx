import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/40 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Code */}
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-black text-green-200 select-none">404</span>
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
          Page Nahi Mila 😅
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto">
          Aap jis page ko dhoond rahe hain woh shayad delete ho gaya hai ya URL galat hai. Neeche diye gaye options try karein:
        </p>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-600/30"
          >
            🏠 Homepage Par Jao
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold px-6 py-3 rounded-xl text-sm border border-gray-200 transition-all hover:scale-105"
          >
            📚 Saari Guides Dekho
          </Link>
        </div>

        {/* Popular Links */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="font-bold text-gray-900 text-sm mb-3">🔥 Sabse Zyada Padhe Jaane Wale:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '📆 23vi Kist Status' },
              { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 eKYC Guide' },
              { href: '/calculator/quick-status-check', label: '🔍 Quick Status Checker' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Payment Failed Fix' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all text-center"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Helpline */}
        <p className="mt-6 text-xs text-gray-400">
          📞 Koi problem? Helpline: <strong className="text-gray-600">155261</strong> (Toll Free)
        </p>
      </div>
    </div>
  );
}