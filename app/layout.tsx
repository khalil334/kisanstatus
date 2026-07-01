import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { LanguageProvider } from '@/lib/LanguageContext';

// ✅ OPTIMIZED: Only load weights you actually use
const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
});

const SITE_URL = 'https://kisanstatus.com';
const SITE_NAME = 'KisanStatus';
const AUTHOR = 'KisanStatus Team';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#16A34A' },
    { media: '(prefers-color-scheme: dark)', color: '#14532d' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PM Kisan Status Check 2026 – 23vi Kist Released',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'PM Kisan 23vi kist 20 June 2026 ko release — ₹2000 seedha bank mein. Apna status check karo, eKYC karo, beneficiary list dekho. 100% free guide Hindi mein.',
  authors: [{ name: AUTHOR, url: `${SITE_URL}/about` }],
  creator: AUTHOR,
  publisher: SITE_NAME,
  category: 'Agriculture',
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'KisanStatus - PM Kisan Status Check 2026',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kisanstatus',
    creator: '@kisanstatus',
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
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

// ✅ NEW: Loading component for Suspense
function LayoutLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-IN" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* ✅ OPTIMIZED: Preconnect to critical domains only */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* ✅ OPTIMIZED: Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ FIXED: Only preload hero image on homepage */}
        {/* Remove this line - let individual pages handle their own preloading */}

        {/* Structured Data - WebSite & Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: SITE_NAME,
                url: SITE_URL,
                logo: {
                  '@type': 'ImageObject',
                  url: `${SITE_URL}/logo.webp`,
                  width: 512,
                  height: 512,
                },
                foundingDate: '2024',
                description: 'Free PM Kisan information portal for Indian farmers.',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'kisanstatus.support@gmail.com',
                  contactType: 'customer support',
                  availableLanguage: ['Hindi', 'English'],
                  areaServed: 'IN',
                },
                founder: {
                  '@type': 'Organization',
                  name: AUTHOR,
                  url: `${SITE_URL}/about`,
                },
              },
            ]),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-surface text-text-primary antialiased font-sans">
        {/* ✅ NEW: Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Skip to main content
        </a>

        <LanguageProvider>
          <Suspense fallback={<LayoutLoading />}>
            <Header />
          </Suspense>
          
          <main id="main-content" className="flex-1 scroll-smooth">
            <Suspense fallback={<LayoutLoading />}>
              {children}
            </Suspense>
          </main>
          
          <Suspense fallback={<LayoutLoading />}>
            <Footer />
          </Suspense>
        </LanguageProvider>

        {/* ✅ OPTIMIZED: Google Analytics with WORKER strategy */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="worker"
        />
        <Script
          id="ga4-init"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
              });
            `,
          }}
        />

        {/* ✅ OPTIMIZED: Vercel Analytics */}
        <Analytics />

        {/* ✅ NEW: Scroll restoration script */}
        <Script
          id="scroll-restoration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
              }
              
              // Smooth scroll to top on page navigation
              window.addEventListener('popstate', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
            `,
          }}
        />

        {/* ✅ NEW: Focus management for keyboard navigation */}
        <Script
          id="focus-management"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Detect keyboard navigation
              document.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                  document.body.classList.add('keyboard-navigation');
                }
              });
              
              document.addEventListener('mousedown', function() {
                document.body.classList.remove('keyboard-navigation');
              });
            `,
          }}
        />
      </body>
    </html>
  );
}