'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuickStatusChecker() {
  const [aadhaar, setAadhaar] = useState('');
  const [mobile, setMobile] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Official PM Kisan Status Page URL
  const OFFICIAL_URL = 'https://pmkisan.gov.in/BeneficiaryStatus.aspx';

  const handleCheckNow = () => {
    setError('');
    
    // Validation: Kam se kam ek field bhara hona chahiye
    if (!aadhaar && !mobile && !regNumber) {
      setError('⚠️ Kripya kam se kam ek detail (Aadhaar, Mobile ya Registration Number) daalein.');
      return;
    }

    // Aadhaar Validation (12 digits)
    if (aadhaar && (aadhaar.length !== 12 || !/^\d+$/.test(aadhaar))) {
      setError('⚠️ Aadhaar number 12 digits ka hona chahiye.');
      return;
    }

    // Mobile Validation (10 digits, 6-9 se shuru)
    if (mobile && (mobile.length !== 10 || !/^[6-9]\d{9}$/.test(mobile))) {
      setError('⚠️ Mobile number 10 digits ka hona chahiye (6-9 se shuru).');
      return;
    }

    // Show processing animation for 2 seconds (SEO & UX trick)
    setIsProcessing(true);
    
    setTimeout(() => {
      // Redirect to official site
      window.open(OFFICIAL_URL, '_blank');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container-site max-w-2xl mx-auto px-4">

        {/* Hero Section */}
        <div className="text-center mb-8 bg-gradient-to-br from-green-800 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
          <span className="bg-white/20 text-green-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            🔍 Instant Status Check
          </span>
          <h1 className="text-3xl md:text-4xl font-black mt-4 mb-3">
            PM Kisan Status Check 2026
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-xl mx-auto">
            Apna Aadhaar, Mobile ya Registration number daalein aur 23vi Kist ka real status check karein.
          </p>
        </div>

        {/* Main Tool Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          
          {/* Processing State (The 2-second delay UI) */}
          {isProcessing ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Processing Your Request...</h3>
              <p className="text-gray-500 text-sm">Redirecting to Secure PM Kisan Portal...</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                📝 Apni Details Daalein
              </h2>

              <div className="space-y-4">
                {/* Aadhaar Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aadhaar Number <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    placeholder="1234 5678 9012"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-lg tracking-wider"
                  />
                </div>

                {/* Mobile Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-lg tracking-wider"
                  />
                </div>

                {/* Registration Number Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration Number <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="1234567890123"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-lg"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 text-center">
                  {error}
                </div>
              )}

              {/* Check Now Button */}
              <button
                onClick={handleCheckNow}
                className="w-full mt-8 bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.01] shadow-lg shadow-green-600/30 flex items-center justify-center gap-2"
              >
                🔍 Check My Status Now
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                🔒 100% Safe. Aapka data kisi server par save nahi hoga.
              </p>
            </>
          )}
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-2xl block mb-2">💰</span>
            <p className="font-bold text-gray-900 text-sm">₹2,000 Kist</p>
            <p className="text-xs text-gray-500 mt-1">Seedha bank mein</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-2xl block mb-2">🔐</span>
            <p className="font-bold text-gray-900 text-sm">eKYC Zaroori</p>
            <p className="text-xs text-gray-500 mt-1">Bina eKYC payment ruki</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center">
            <span className="text-2xl block mb-2">📞</span>
            <p className="font-bold text-gray-900 text-sm">Helpline: 155261</p>
            <p className="text-xs text-gray-500 mt-1">Free Govt Helpline</p>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-900 mb-4">📚 Agar Status Check Karne Mein Problem Aaye:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 eKYC Kaise Karein' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Payment Failed Fix' },
              { href: '/articles/pm-kisan-land-seeding-status-check', label: '🌾 Land Seeding Problem' },
              { href: '/articles/pm-kisan-name-correction-online-2026', label: '✏️ Naam Correction' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="p-3 bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center">
          <strong>⚠️ Note:</strong> Yeh tool aapko seedha official PM Kisan portal par le jayega. Real status sirf pmkisan.gov.in par hi check hota hai.
        </div>
      </div>
    </div>
  );
}