import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { Suspense } from 'react';

const SITE_URL = 'https://kisanstatus.com';
const SITE_NAME = 'KisanStatus';
const AUTHOR = 'KisanStatus Team';

export const metadata: Metadata = {
  title: 'Agrarian Welfare Verification 2026 — 23vi Tranche Released | ₹2000 Direct',
  description: 'Cultivator benefit 23vi tranche 20 June 2026 ko release ho gayi — ₹2000 seedha bank account mein. Status verify karo, digital verification complete karo, eligible farmers roster dekho. 100% free guidance Hinglish mein.',
  authors: [{ name: AUTHOR, url: `${SITE_URL}/about` }],
  alternates: { 
    canonical: `${SITE_URL}/`,
    languages: {
      'hi-IN': `${SITE_URL}/`,
      'en-US': `${SITE_URL}/en`,
    },
  },
  keywords: [
    'agrarian welfare verification 2026',
    'cultivator benefit 23vi tranche',
    'scheme status check online',
    'program digital verification',
    'eligible farmers roster',
    'benefit payment status',
    'kisan yojana 2026',
    'central program verification',
  ],
  openGraph: {
    title: 'Agrarian Welfare Verification 2026 — 23vi Tranche Released',
    description: '₹2000 seedha bank account mein — 9.44 Crore+ cultivators ko mil chuki hai. Apna status abhi verify karo!',
    type: 'website',
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [
      {
        url: `${SITE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Agrarian Welfare Verification 2026 - KisanStatus',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrarian Welfare Verification 2026 — 23vi Tranche Released',
    description: '₹2000 seedha bank account mein — 9.44 Crore+ cultivators ko mil chuki hai. Apna status abhi verify karo!',
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

function HomeLoading() {
  return (
    <div className="min-h-screen">
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
      {/* ✅ FIX #1: fetchPriority="high" added — CRITICAL for LCP */}
      <link
        rel="preload"
        as="image"
        href="/hero-kisan-field.webp"
        type="image/webp"
        fetchPriority="high"
      />

      {/* ✅ FIX #2: Removed duplicate font preload — layout.tsx already handles this via next/font with preload:true */}
      {/* Duplicate preload causes double network request = slower FCP */}

      {/* Homepage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            description: 'Cultivator benefit program verification, digital authentication guide, eligible farmers roster — India ka free agrarian welfare resource portal.',
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

      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>
    </>
  );
}