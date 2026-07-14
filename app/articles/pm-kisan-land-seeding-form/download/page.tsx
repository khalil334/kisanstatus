'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export default function LandSeedingDownloadPage() {
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const state = searchParams.get('state') || 'Apna Rajya';
  const redirectUrl = searchParams.get('redirect') || 'https://pmkisan.gov.in';

  const handleDownload = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false); // Reset state after opening
    }, 500);
  };

  const pageTitle = `${state} PM Kisan Land Seeding Form PDF Download (2026)`;

  // ✅ Schema.org: BreadcrumbList (Rule 9 compliance)
  // Note: Current page 'item' omitted to prevent client-side hydration mismatch
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: 'Land Seeding Form Guide', item: `${SITE_URL}/articles/pm-kisan-land-seeding-form-pdf-2026` },
      { '@type': 'ListItem', position: 4, name: pageTitle },
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
              <Link href="/articles/pm-kisan-land-seeding-form-pdf-2026" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Land Seeding Form</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white font-bold">Download</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {pageTitle}
            </h1>
          </div>
        </div>

        <div className="container-site max-w-3xl py-12 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-green-500 dark:border-green-700 p-6 md:p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4" aria-hidden="true">📄</div>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white mb-3">
                {state} Land Seeding Form PDF Download Link
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-lg mx-auto">
                Yahan se aap {state} ka official PM Kisan Land Seeding Form PDF bilkul free mein download kar sakte hain.
              </p>
            </div>

            <div className="mb-6">
              <button
                onClick={handleDownload}
                disabled={isRedirecting}
                className={`w-full px-8 py-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 ${
                  isRedirecting ? 'animate-pulse cursor-not-allowed' : ''
                }`}
                aria-label={`Download ${state} Land Seeding Form PDF`}
              >
                {isRedirecting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Official Portal Par Redirect Ho Raha Hai...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    📥 {state} Land Seeding Form PDF Download Karein
                  </span>
                )}
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                Button par click karte hi aap seedha {state} ke official Bhulekh ya revenue portal par pahunch jayenge.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm flex items-center gap-2">
                <span aria-hidden="true">📌</span> Zaroori Jaankari aur Process:
              </h3>
              <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-2 list-disc list-inside">
                <li>Yeh form PDF format mein hota hai aur ise download karna bilkul <strong>free</strong> hai. Kisi bhi agent ya middleman ko paise na dein.</li>
                <li>Form ko print nikalne ke baad, apne nazdeeki Patwari ya Lekhpal se details zaroor verify karwayein.</li>
                <li>Sahi details bharne ke baad ise apne Block Agriculture Office ya nazdeeki CSC centre mein submit karein.</li>
                <li>
                  Agar aapka naam PM Kisan beneficiary list mein nahi dikh raha hai ya details galat hain, toh pehle hamari{' '}
                  <Link href="/articles/pm-kisan-master-guide-2026" className="underline font-bold hover:text-blue-900 dark:hover:text-blue-200">
                    PM Kisan New Registration & Correction Guide
                  </Link>{' '}
                  zaroor padhein.
                </li>
              </ul>
            </div>

            <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-center text-sm">
                🗺️ Anya Rajya (Other States) Ke Liye Link:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/articles/pm-kisan-land-seeding-form-pdf-2026#uttar-pradesh"
                  className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-800 dark:hover:text-green-300 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Uttar Pradesh
                </Link>
                <Link
                  href="/articles/pm-kisan-land-seeding-form-pdf-2026#bihar"
                  className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-800 dark:hover:text-green-300 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Bihar
                </Link>
                <Link
                  href="/articles/pm-kisan-land-seeding-form-pdf-2026#madhya-pradesh"
                  className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-800 dark:hover:text-green-300 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Madhya Pradesh
                </Link>
                <Link
                  href="/articles/pm-kisan-land-seeding-form-pdf-2026#rajasthan"
                  className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-800 dark:hover:text-green-300 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Rajasthan
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/articles/pm-kisan-land-seeding-form-pdf-2026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              ← Wapas Main Land Seeding Form Guide Par Jaayein
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}