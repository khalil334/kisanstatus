import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { Suspense } from 'react';

const SITE_URL = 'https://kisanstatus.com';
const SITE_NAME = 'KisanStatus';
const AUTHOR = 'KisanStatus Team';

export const metadata: Metadata = {
  title: 'PM Kisan Status Check 2026 — 23vi Kist Released | ₹2000 Direct',
  description: 'PM Kisan 23vi kist 20 June 2026 ko release — ₹2000 seedha bank mein. Status check karo, eKYC karo, beneficiary list dekho. 100% free guide Hindi mein.',
  authors: [{ name: AUTHOR, url: `${SITE_URL}/about` }],
  alternates: { 
    canonical: `${SITE_URL}/`,
    languages: {
      'hi-IN': `${SITE_URL}/`,
      'en-US': `${SITE_URL}/en`,
    },
  },
  keywords: [
    'PM Kisan status check 2026',
    'PM Kisan 23vi kist',
    'PM Kisan Samman Nidhi',
    'kisan status check online',
    'PM Kisan eKYC',
    'PM Kisan beneficiary list',
    'PM Kisan payment status',
    'kisan yojana 2026',
  ],
  openGraph: {
    title: 'PM Kisan Status Check 2026 — 23vi Kist Released',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai. Apna status abhi check karo!',
    type: 'website',
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [
      {
        url: `${SITE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'PM Kisan Status Check 2026 - KisanStatus',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan Status Check 2026 — 23vi Kist Released',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai. Apna status abhi check karo!',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    images: [`${SITE_URL}/og-image.webp`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN ?? 'oGrO0aRNLLhCgHq0Bn-sh3FdgKye7TlbAn2pAk8YdMQ',
  },
  metadataBase: new URL(SITE_URL),
  category: 'Agriculture',
};

export const revalidate = 3600;

// ✅ NEW: Loading component for Suspense
function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <div className="relative h-[500px] bg-gradient-to-r from-green-800 to-green-600">
        <div className="container-site h-full flex items-center">
          <div className="max-w-2xl">
            <div className="h-12 bg-white/20 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-5/6 mb-6 animate-pulse"></div>
            <div className="h-12 bg-white/30 rounded w-48 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Content Skeletons */}
      <div className="container-site py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ✅ NEW: Preload hero image for LCP (homepage specific) */}
      <link
        rel="preload"
        as="image"
        href="/hero-kisan-field.webp"
        type="image/webp"
      />
      
      {/* ✅ NEW: Preload critical fonts */}
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      />

      {/* ✅ NEW: Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: 'PM Kisan Samman Nidhi status check, eKYC guide, beneficiary list — India ka free kisan information portal.',
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
          }),
        }}
      />

      {/* ✅ NEW: Suspense for better loading UX */}
      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>
    </>
  );
}