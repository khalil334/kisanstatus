import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { Suspense } from 'react';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — 24vi Kist Coming Soon | ₹2000 Direct Bank Mein',
  description: 'PM Kisan 24vi kist October 2026 mein aane wali hai — ₹2000 seedha bank account mein. Status verify karo, eKYC complete karo, beneficiary roster dekho. Free guidance Hinglish mein.',
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      'hi-IN': `${SITE_URL}/`,
    },
  },
  keywords: [
    'pm kisan status check 2026',
    'pm kisan 24vi kist',
    'kisan samman nidhi verification',
    'pm kisan ekyc online',
    'beneficiary list check',
    'pm kisan payment status',
    'kisan yojana 2026',
    'pm kisan registration',
  ],
  openGraph: {
    title: 'PM Kisan Status Check 2026 — 24vi Kist Coming Soon',
    description: '₹2000 seedha bank account mein — 9.44 Crore+ kisanon ko mil chuki. Apna status abhi verify karo!',
    type: 'website',
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'PM Kisan Status Check 2026 - KisanStatus',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026 — 24vi Kist Coming Soon',
    description: '₹2000 seedha bank account mein — 9.44 Crore+ kisanon ko mil chuki. Apna status abhi verify karo!',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(SITE_URL),
  category: 'Agriculture',
};

export const revalidate = 86400;

function HomeLoading() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] bg-gradient-to-r from-green-800 to-green-600">
        <div className="container-site h-full flex items-center">
          <div className="max-w-2xl">
            <div className="h-12 bg-white/20 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-full mb-2 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-5/6 mb-6 animate-pulse" />
            <div className="h-12 bg-white/30 rounded w-48 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="container-site py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'PM Kisan verification, eKYC guide, beneficiary roster — India ka free agrarian welfare resource portal.',
    inLanguage: 'hi-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/articles?category=all`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.webp`,
      },
    },
  };

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/hero-kisan-field.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>
    </>
  );
}