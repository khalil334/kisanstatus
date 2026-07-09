'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BeneficiaryListDownloadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectUrl = searchParams.get('redirect') || '/beneficiary-list';

  const handleDownload = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="bg-[var(--color-primary)] py-6">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <Link href="/beneficiary-list" className="hover:text-white transition-colors">Beneficiary List</Link>
            <span>/</span>
            <span className="text-white font-bold">Download</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
            PM Kisan Beneficiary List Download
          </h1>
        </div>
      </div>

      <div className="container-site max-w-3xl py-12 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-green-500 dark:border-green-700 p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white mb-3">
              PM Kisan Beneficiary List
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Official government portal se beneficiary list download karein
            </p>
          </div>

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
              Click karne par aap official PM Kisan portal par redirect honge
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-sm">
              📌 Zaroori Jaankari:
            </h3>
            <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1 list-disc list-inside">
              <li>Beneficiary list download karne ke liye upar diye gaye button par click karein</li>
              <li>List official government portal se download hogi</li>
              <li>Form bilkul free hai - koi charge nahi dena hai</li>
              <li>Apna naam check karne ke liye Aadhaar number ya mobile number chahiye</li>
            </ul>
          </div>

          <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-center">
              Anya Rajya (Other States):
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/beneficiary-list/uttar-pradesh"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Uttar Pradesh
              </Link>
              <Link
                href="/beneficiary-list/bihar"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Bihar
              </Link>
              <Link
                href="/beneficiary-list/madhya-pradesh"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Madhya Pradesh
              </Link>
              <Link
                href="/beneficiary-list/rajasthan"
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
              >
                Rajasthan
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/beneficiary-list"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
          >
            ← Wapas Beneficiary List Par Jaayein
          </Link>
        </div>
      </div>
    </div>
  );
}