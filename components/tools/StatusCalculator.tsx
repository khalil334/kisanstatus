'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CalculatorResult {
  totalKists: number;
  totalAmount: number;
  receivedKists: number;
  receivedAmount: number;
  pendingKists: number;
  pendingAmount: number;
  registrationYear: number;
}

export default function StatusCalculator() {
  const [state, setState] = useState('');
  const [regDate, setRegDate] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const calculateStatus = () => {
    if (!state || !regDate) {
      alert('Please select State and Registration Date');
      return;
    }

    // Parse registration date
    const regYear = new Date(regDate).getFullYear();
    const currentYear = 2026;
    
    // PM Kisan started in 2019
    // From 2019 to 2026 = 7 years × 3 kists = 21 kists maximum
    // But we calculate from registration year
    
    let totalKists = 0;
    
    if (regYear <= 2019) {
      // Registered before or in 2019 - eligible for all kists
      totalKists = 23; // 23vi kist tak (June 2026)
    } else if (regYear >= 2026) {
      // Registered in 2026 - only recent kists
      totalKists = 1; // Only 23vi kist
    } else {
      // Calculate kists from registration year to 2026
      const yearsDiff = currentYear - regYear;
      totalKists = yearsDiff * 3; // 3 kists per year
      
      // Adjust for partial year
      const regMonth = new Date(regDate).getMonth() + 1;
      if (regMonth <= 4) {
        totalKists += 3; // Full year
      } else if (regMonth <= 8) {
        totalKists += 2; // 2 kists
      } else {
        totalKists += 1; // 1 kist
      }
    }

    // Current kist is 23 (June 2026)
    const currentKist = 23;
    const receivedKists = Math.min(totalKists, currentKist);
    const pendingKists = Math.max(0, totalKists - currentKist);

    const perKist = 2000;
    const totalAmount = totalKists * perKist;
    const receivedAmount = receivedKists * perKist;
    const pendingAmount = pendingKists * perKist;

    setResult({
      totalKists,
      totalAmount,
      receivedKists,
      receivedAmount,
      pendingKists,
      pendingAmount,
      registrationYear: regYear,
    });

    setShowGuide(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container-site max-w-4xl mx-auto px-4">

        {/* Hero Section */}
        <div className="text-center mb-10 bg-gradient-to-br from-green-800 to-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <span className="bg-white/20 text-green-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
             Free Tool
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4">
            🧮 PM Kisan Status Calculator 2026
          </h1>
          <p className="text-green-100 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Jaaniye kitni kist aapko milni chahiye, total kitna paisa aapka banta hai, aur pending amount kya hai.
          </p>
        </div>

        {/* Input Form Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             Apni Details Daalein
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* State Select */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Apna State Chunein *
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white"
              >
                <option value="">-- Select State --</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Other">Other State</option>
              </select>
            </div>

            {/* Registration Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Registration Date (Approximate) *
              </label>
              <input
                type="month"
                value={regDate}
                onChange={(e) => setRegDate(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            {/* Registration Number */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                PM Kisan Registration Number (Optional)
              </label>
              <input
                type="text"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                placeholder="e.g. 1234567890123"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 Yeh sirf reference ke liye hai - hum koi data store nahi karte
              </p>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateStatus}
            className="w-full mt-8 bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.01] shadow-lg shadow-green-600/30 flex items-center justify-center gap-2"
          >
            🚀 Calculate My Status
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            🔒 Aapki details sirf calculation ke liye hain. Hum koi data store nahi karte.
          </p>
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6 md:p-8 mb-8 fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              ✅ Aapka Estimated Status
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 border-2 border-green-100 p-6 rounded-xl text-center">
                <p className="text-xs text-green-700 font-bold uppercase mb-2">Total Expected</p>
                <p className="text-3xl font-black text-green-800">₹{result.totalAmount.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">{result.totalKists} Kists</p>
              </div>
              <div className="bg-blue-50 border-2 border-blue-100 p-6 rounded-xl text-center">
                <p className="text-xs text-blue-700 font-bold uppercase mb-2">Mil Chuki Hai</p>
                <p className="text-3xl font-black text-blue-800">₹{result.receivedAmount.toLocaleString()}</p>
                <p className="text-sm text-blue-600 mt-1">{result.receivedKists} Kists</p>
              </div>
              <div className="bg-amber-50 border-2 border-amber-100 p-6 rounded-xl text-center">
                <p className="text-xs text-amber-700 font-bold uppercase mb-2">Pending Hai</p>
                <p className="text-3xl font-black text-amber-800">₹{result.pendingAmount.toLocaleString()}</p>
                <p className="text-sm text-amber-600 mt-1">{result.pendingKists} Kists</p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-700 space-y-3">
              <p className="flex items-start gap-2">
                <span className="text-lg">📅</span>
                <span><strong>Registration Year:</strong> {result.registrationYear}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-lg">💵</span>
                <span><strong>Calculation:</strong> PM Kisan 2019 mein shuru hua. Har saal 3 kist (₹6,000) milti hai.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-lg">✅</span>
                <span><strong>Current Status:</strong> 23vi Kist (June 2026) release ho chuki hai.</span>
              </p>
              {result.pendingKists > 0 && (
                <p className="flex items-start gap-2 text-amber-700">
                  <span className="text-lg">⏳</span>
                  <span><strong>Pending:</strong> {result.pendingKists} kist abhi aani baaki hai (Expected: Oct 2026)</span>
                </p>
              )}
            </div>

            {/* Warning Note */}
            <div className="mt-6 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl flex gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-sm text-amber-800 font-semibold mb-1">Important Note:</p>
                <p className="text-xs text-amber-700">
                  Yeh ek estimated calculator hai. Exact payment status check karne ke liye official PM Kisan portal par jayein.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl text-center transition-all hover:scale-[1.01] shadow-lg"
              >
                🏛️ Official Site Par Verify Karein →
              </a>
              <button
                onClick={() => setShowGuide(!showGuide)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 rounded-xl text-center transition-all"
              >
                📖 Step-by-Step Guide {showGuide ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        )}

        {/* Step-by-Step Guide */}
        {showGuide && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              📖 Official Site Par Status Kaise Check Karein
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">PM Kisan Portal Kholein</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Official website <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold underline">pmkisan.gov.in</a> par jayein.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 text-xs text-gray-500">
                    💡 Tip: Hamesha official site use karein - koi bhi third-party site par apni details na daalein.
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">"Beneficiary Status" Par Click Karein</h3>
                  <p className="text-sm text-gray-600">
                    Homepage par right side mein "Farmers Corner" section mein "Beneficiary Status" ka option hoga.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Apni Details Daalein</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Aap 3 tarah se search kar sakte hain:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>✅ Aadhaar Number se</li>
                    <li>✅ Mobile Number se</li>
                    <li>✅ PM Kisan Registration Number se</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Captcha Code Daalein</h3>
                  <p className="text-sm text-gray-600">
                    Screen par dikha captcha code enter karein aur "Get Data" button par click karein.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Status Dekhein</h3>
                  <p className="text-sm text-gray-600">
                    Aapka complete payment history dikh jayega - kitni kist mili, kab mili, aur pending hai ya nahi.
                  </p>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="text-xl">❓</span>
                Koi Problem Hai?
              </h3>
              <p className="text-sm text-blue-800 mb-4">
                Agar aapko status check karne mein koi dikkat aa rahi hai, toh humari detailed guides padhein:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="bg-white hover:bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 font-semibold transition-colors">
                  📆 23vi Kist Status Check Guide →
                </Link>
                <Link href="/articles/pm-kisan-ekyc-online-2026" className="bg-white hover:bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 font-semibold transition-colors">
                   eKYC Complete Guide →
                </Link>
                <Link href="/articles/pm-kisan-payment-failed-status-2026" className="bg-white hover:bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 font-semibold transition-colors">
                   Payment Failed Solution →
                </Link>
                <Link href="/articles/pm-kisan-problems-solution-guide-2026" className="bg-white hover:bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700 font-semibold transition-colors">
                  🔧 All Problems Solution →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6"> Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-900 mb-2">Yeh calculator 100% accurate hai?</h3>
              <p className="text-sm text-gray-600">
                Nahi, yeh ek estimated calculator hai. Exact status ke liye official PM Kisan portal par check karein.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-900 mb-2">Kya meri details safe hain?</h3>
              <p className="text-sm text-gray-600">
                Haan, bilkul safe hain. Hum koi data store nahi karte. Saari calculation aapke browser mein hoti hai.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-900 mb-2">PM Kisan ki next kist kab aayegi?</h3>
              <p className="text-sm text-gray-600">
                24vi Kist October 2026 mein expected hai. eKYC complete rakhein taaki payment time par mile.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Agar payment fail ho jaye toh kya karein?</h3>
              <p className="text-sm text-gray-600">
                Payment fail hone par pehle apna eKYC check karein, phir bank account verify karein. Detailed guide ke liye <Link href="/articles/pm-kisan-payment-failed-status-2026" className="text-green-600 underline">yahan click karein</Link>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}