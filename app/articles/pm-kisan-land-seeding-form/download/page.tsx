'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LandSeedingDownloadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const state = searchParams.get('state');
  const redirectUrl = searchParams.get('redirect');
  const finalUrl = redirectUrl || 'https://pmkisan.gov.in';

  const stateInfo: Record<string, { name: string; portal: string; details: string }> = {
    'uttar-pradesh': {
      name: 'Uttar Pradesh',
      portal: 'UP Bhulekh Portal',
      details: 'UP land seeding form, khasra khatauni, PM Kisan beneficiary list',
    },
    'bihar': {
      name: 'Bihar',
      portal: 'Bihar Bhumi Portal',
      details: 'Bihar land seeding form, khasra naksha, PM Kisan status check',
    },
    'madhya-pradesh': {
      name: 'Madhya Pradesh',
      portal: 'MP Bhu-Abhilekh Portal',
      details: 'MP land seeding form, khatauni online, PM Kisan land record',
    },
    'rajasthan': {
      name: 'Rajasthan',
      portal: 'Rajasthan Apna Khata Portal',
      details: 'Rajasthan land seeding form, jamabandi, PM Kisan application',
    },
  };

  const info = state ? stateInfo[state] : null;

  const handleDownload = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-6">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <Link href="/articles/pm-kisan-land-seeding-form-pdf-2026" className="hover:text-white transition-colors">Land Seeding Form</Link>
            <span>/</span>
            <span className="text-white font-bold">Download</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
            {info ? `${info.name} Land Seeding Form Download` : 'Land Seeding Form Download'}
          </h1>
        </div>
      </div>

      <div className="container-site max-w-3xl py-12 px-4">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-blue-500 dark:border-blue-700 p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white mb-3">
              {info ? `${info.name} Land Seeding Form` : 'Land Seeding Form'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {info?.details}
            </p>
          </div>

          {/* Download Button */}
          <div className="mb-6">
            <button
              onClick={handleDownload}
              disabled={isRedirecting}
              className={`w-full px-8 py-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg ${
                isRedirecting ? 'animate-pulse cursor-not-allowed' : ''
              }`}
            >
              {isRedirecting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Redirecting to Official Portal...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  📥 Click to Download PDF
                </span>
              )}
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              Click karne par aap {info?.portal || 'Official Portal'} par redirect honge
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-sm">
              📌 Zaroori Jaankari:
            </h3>
            <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc list-inside">
              <li>Land seeding form download karne ke liye upar diye gaye button par click karein</li>
              <li>Form official government portal se download hoga</li>
              <li>Form bilkul free hai - koi charge nahi dena hai</li>
              <li>Form download karne ke baad Patwari se verify karwayein</li>
              <li>Block Agriculture Office mein submit karein</li>
            </ul>
          </div>

          {/* Alternative Links */}
          <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-center">
              Anya Rajya (Other States):
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/articles/pm-kisan-land-seeding-form-pdf-2026#uttar-pradesh"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Uttar Pradesh
              </Link>
              <Link
                href="/articles/pm-kisan-land-seeding-form-pdf-2026#bihar"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Bihar
              </Link>
              <Link
                href="/articles/pm-kisan-land-seeding-form-pdf-2026#madhya-pradesh"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Madhya Pradesh
              </Link>
              <Link
                href="/articles/pm-kisan-land-seeding-form-pdf-2026#rajasthan"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Rajasthan
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-black text-gray-800 dark:text-white mb-4">
            {info ? `${info.name} Land Seeding Form - Complete Guide` : 'Land Seeding Form Process'}
          </h2>
          <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-3">
            <p>
              {info ? `${info.name} mein PM Kisan yojana ka labh lene ke liye land seeding form bharna bahut zaroori hai.` : 'PM Kisan yojana ka labh lene ke liye land seeding form bharna bahut zaroori hai.'}
            </p>
            <p>
              Is form ke through aapki zameen ka record government database mein link hota hai.
              Khasra number, khatauni details aur zameen ka area form mein bharna padta hai.
            </p>
            <p>
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Aadhaar Card</li>
              <li>Khatauni Copy</li>
              <li>Khasra Naksha</li>
              <li>Bank Passbook</li>
              <li>Passport Size Photo</li>
            </ul>
            <p>
              <strong>Processing Time:</strong> Form submit karne ke baad Patwari verification aur BAO approval mein 15-30 din lagte hain.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/articles/pm-kisan-land-seeding-form-pdf-2026"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
          >
            ← Wapas Land Seeding Form Guide Par Jaayein
          </Link>
        </div>
      </div>
    </div>
  );
}