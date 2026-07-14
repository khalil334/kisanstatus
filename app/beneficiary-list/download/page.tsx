'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

function DownloadContent() {
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const redirectUrl = searchParams.get('redirect') || 'https://pmkisan.gov.in/BeneficiaryList.aspx';

  // Auto countdown for better UX
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleDownload = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 500);
  };

  // ✅ Rule 9: BreadcrumbList Schema for this specific download page
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: 'PM Kisan Beneficiary List Download', item: `${SITE_URL}/articles/pm-kisan-beneficiary-list-2026` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="bg-[var(--color-primary)] py-6">
          <div className="container-site max-w-3xl">
            <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white font-bold">Beneficiary List Download</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
              PM Kisan Beneficiary List Download (2026)
            </h1>
          </div>
        </div>

        <div className="container-site max-w-3xl py-12 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-green-500 dark:border-green-700 p-6 md:p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4" aria-hidden="true">📥</div>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white mb-3">
                Official Beneficiary List
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-lg mx-auto">
                Yahan se aap seedha official PM Kisan portal par jakar apne rajya, jile aur gaon ki beneficiary list dekh ya download kar sakte hain.
              </p>
            </div>

            <div className="mb-6">
              <button
                onClick={handleDownload}
                disabled={isRedirecting || countdown > 0}
                className={`w-full px-8 py-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 ${
                  isRedirecting ? 'animate-pulse cursor-not-allowed' : ''
                }`}
                aria-label="Official PM Kisan Portal par jakar Beneficiary List download karein"
              >
                {isRedirecting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Official Portal Par Redirect Ho Raha Hai...
                  </span>
                ) : countdown > 0 ? (
                  <span className="flex items-center justify-center gap-2">
                    ⏳ Button {countdown} second mein active hoga...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    📥 Official Portal Par Jakar List Dekhein / Download Karein
                  </span>
                )}
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                Button par click karte hi aap ek naye tab mein seedha pmkisan.gov.in par pahunch jayenge.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm flex items-center gap-2">
                <span aria-hidden="true">ℹ️</span> List Dekhne Ka Sahi Tarika:
              </h3>
              <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-2 list-disc list-inside">
                <li>Upar diye gaye button par click karke official portal kholein.</li>
                <li>Yeh service bilkul <strong>free</strong> hai. Kisi bhi agent ya middleman ko paise na dein.</li>
                <li>Portal par apna <strong>State → District → Block → Village</strong> select karke list search karein.</li>
                <li>Agar aapke paas Aadhaar number ya registered mobile number hai, toh aap 'Beneficiary Status' option se apna naam direct bhi check kar sakte hain.</li>
                <li>
                  Agar aapka naam list mein nahi mil raha hai ya details galat hain, toh pehle hamari{' '}
                  <Link href="/articles/pm-kisan-correction-form-2026" className="underline font-bold hover:text-blue-900 dark:hover:text-blue-200">
                    Name/Bank Detail Correction Guide
                  </Link>{' '}
                  zaroor padhein.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-4">
              <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 text-sm flex items-center gap-2">
                <span aria-hidden="true">⚠️</span> Agar Portal Load Na Ho Ya Error Aaye:
              </h3>
              <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-2 list-disc list-inside">
                <li>Apna internet connection check karein.</li>
                <li>Page ko refresh karein (F5 ya Ctrl+R dabayein).</li>
                <li>Kisi dusre browser (jaise Chrome, Firefox, ya Edge) mein try karein.</li>
                <li>Peak hours (subah 10 baje se shaam 4 baje) mein sarkari server par load zyada ho sakta hai, thodi der baad try karein.</li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Link
              href="/articles/PmKisanBeneficiaryList2026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              ← Wapas Beneficiary List Guide Par Jaayein
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Main article mein rejection ke karan, status check karne ka tarika, aur aksar puche jaane wale sawal (FAQ) bhi diye gaye hain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BeneficiaryListDownloadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse" aria-hidden="true">⏳</div>
          <p className="text-lg font-bold text-gray-700 dark:text-gray-300">Loading Download Page...</p>
        </div>
      </div>
    }>
      <DownloadContent />
    </Suspense>
  );
}