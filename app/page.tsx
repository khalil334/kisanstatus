import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { Suspense } from 'react';
import { 
  SITE_URL, 
  SITE_NAME, 
  SITE_TAGLINE, 
  SITE_DESCRIPTION, 
  AUTHOR_NAME, 
  AUTHOR_URL, 
  DEFAULT_OG_IMAGE,
  GLOBAL_KEYWORDS 
} from '@/lib/site-config';

export const metadata: Metadata = {
  // ✅ Homepage ke liye specific, strong title
  title: `${SITE_NAME}: PM Kisan Status, Farming Guides & Subsidy Info 2026`,
  description: SITE_DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      'hi-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  // ✅ Broadened Keywords for Homepage
  keywords: [
    ...GLOBAL_KEYWORDS,
    'pm kisan status check 2026',
    'pm kisan 24vi kist',
    'kisan samman nidhi verification',
    'farming business ideas hindi',
    'agriculture subsidy india',
    'kisan loan kaise le',
  ],
  openGraph: {
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Complete Agriculture & Farming Resource Portal`,
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
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
  category: 'Agriculture & Farming',
};

export const revalidate = 3600;

function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* ✅ CLS FIX: Use aspect ratio instead of fixed height */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gradient-to-r from-green-800 to-green-600">
        <div className="container-site h-full flex items-center">
          <div className="max-w-2xl px-4">
            <div className="h-12 bg-white/20 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-full mb-2 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-5/6 mb-6 animate-pulse" />
            <div className="h-12 bg-white/30 rounded w-48 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="container-site py-12 px-4">
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
  return (
    <>
      {/* ✅ Preload critical hero image for LCP optimization */}
      <link
        rel="preload"
        as="image"
        href="/hero-banner.webp"
        type="image/webp"
        fetchPriority="high"
      />

      {/* Note: WebSite & Organization JSON-LD schema is already injected globally in app/layout.tsx */}
      
      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>
    </>
  );
}