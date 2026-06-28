'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuickStatusChecker() {
  const [aadhaar, setAadhaar] = useState('');
  const [mobile, setMobile] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [redirectFailed, setRedirectFailed] = useState(false);

  const OFFICIAL_URL = 'https://pmkisan.gov.in/BeneficiaryStatus.aspx';
  const FALLBACK_URL = 'https://pmkisan.gov.in';

  const handleCheckNow = () => {
    setError('');
    setRedirectFailed(false);

    if (!aadhaar && !mobile && !regNumber) {
      setError('⚠️ Kam se kam ek detail daalein — Aadhaar, Mobile ya Registration Number.');
      return;
    }

    if (aadhaar && (aadhaar.length !== 12 || !/^\d+$/.test(aadhaar))) {
      setError('⚠️ Aadhaar number 12 digits ka hona chahiye.');
      return;
    }

    if (mobile && (mobile.length !== 10 || !/^[6-9]\d{9}$/.test(mobile))) {
      setError('⚠️ Mobile number 10 digits ka hona chahiye (6-9 se shuru).');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      try {
        const newWindow = window.open(OFFICIAL_URL, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          setRedirectFailed(true);
        }
      } catch {
        setRedirectFailed(true);
      }
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/40 py-8 md:py-12">
      <div className="container-site max-w-2xl mx-auto px-4">

        {/* Hero — Glassmorphism Digital Style */}
        <div className="relative text-center mb-8 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl shadow-green-900/20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-green-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              🔍 Instant Status Check
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3 leading-tight">
              PM Kisan Status Check 2026
            </h1>
            <p className="text-green-100/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Apna Aadhaar, Mobile ya Registration number daalein aur 23vi Kist ka real status check karein.
            </p>
          </div>
        </div>

        {/* Main Tool Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 border border-white/60 p-6 md:p-8">

          {/* Redirect Failed Message */}
          {redirectFailed && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800 font-semibold mb-2">⚠️ Portal directly open nahi hua?</p>
              <p className="text-xs text-blue-700 mb-3">
                pmkisan.gov.in sirf India mein accessible hai. Agar aap bahar desh se hain ya popup blocker on hai, toh neeche button se manually jaayein:
              </p>
              <a
                href={FALLBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                🏛️ pmkisan.gov.in Kholein →
              </a>
            </div>
          )}

          {/* Processing State */}
          {isProcessing ? (
            <div className="text-center py-16">
              <div className="relative inline-block mb-6">
                <div className="w-14 h-14 border-4 border-green-200 rounded-full" />
                <div className="absolute top-0 left-0 w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Processing...</h3>
              <p className="text-gray-500 text-sm">Secure PM Kisan Portal par redirect ho raha hai</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-lg">📝</span>
                Apni Details Daalein
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Aadhaar Number <span className="text-gray-400 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    placeholder="XXXX XXXX XXXX"
                    className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-lg tracking-[0.15em] font-mono placeholder:tracking-normal placeholder:font-sans placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Mobile Number <span className="text-gray-400 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-lg tracking-[0.15em] font-mono placeholder:tracking-normal placeholder:font-sans placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Registration Number <span className="text-gray-400 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="PM Kisan Registration ID"
                    className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-lg font-mono placeholder:font-sans placeholder:text-gray-300"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 text-center font-medium animate-pulse">
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckNow}
                className="w-full mt-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-green-600/30 active:scale-[0.99] flex items-center justify-center gap-2"
              >
                🔍 Check My Status Now
              </button>

              <p className="text-center text-[11px] text-gray-400 mt-4 flex items-center justify-center gap-1">
                🔒 100% Safe — Aapka data kisi server par save nahi hota
              </p>
            </>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { icon: '💰', title: '₹2,000', sub: 'Per Kist', color: 'from-amber-50 to-orange-50', border: 'border-amber-200' },
            { icon: '🔐', title: 'eKYC', sub: 'Zaroori Hai', color: 'from-green-50 to-emerald-50', border: 'border-green-200' },
            { icon: '📞', title: '155261', sub: 'Helpline', color: 'from-blue-50 to-cyan-50', border: 'border-blue-200' },
          ].map(({ icon, title, sub, color, border }) => (
            <div key={title} className={`bg-gradient-to-br ${color} ${border} border p-4 rounded-xl text-center`}>
              <span className="text-xl block mb-1">{icon}</span>
              <p className="font-black text-gray-900 text-sm">{title}</p>
              <p className="text-[10px] text-gray-500 font-medium">{sub}</p>
            </div>
          ))}
        </div>

        {/* Related Guides + Official Source */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-sm">📚 Problem Aaye Toh Yeh Padhein:</h3>
            <a
              href="https://pmkisan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
            >
              🏛️ Official Source: pmkisan.gov.in ↗
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '📆 23vi Kist Status Guide' },
              { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 eKYC Kaise Karein' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Payment Failed Fix' },
              { href: '/articles/pm-kisan-land-seeding-status-check', label: '🌾 Land Seeding Problem' },
              { href: '/articles/pm-kisan-name-correction-online-2026', label: '✏️ Naam Correction' },
              { href: '/articles/pm-kisan-self-registered-status-check', label: '📋 Self Registered Check' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer with Source */}
        <div className="mt-5 p-3 bg-amber-50/80 border border-amber-200/60 rounded-xl text-[11px] text-amber-800 text-center leading-relaxed">
          ⚠️ Yeh tool aapko seedha official <strong>pmkisan.gov.in</strong> portal par le jayega. Real status sirf official source par hi check hota hai. KisanStatus.com ek independent information portal hai.
        </div>
      </div>
    </div>
  );
}