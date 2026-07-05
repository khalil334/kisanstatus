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
  // ✅ FIX #2: Template removed - pages apna complete title define karenge
  title: {
    default: 'PM Kisan Samman Nidhi Status Check 2026 — KisanStatus',
  },
  // ✅ FIX #6: "Agrarian Welfare Scheme" → "PM Kisan Samman Nidhi"
  // ✅ FIX #5: "digital verification" → "eKYC"
  description:
    'PM Kisan Samman Nidhi 24vi kist October 2026 mein aane wali hai — ₹2000 seedha bank account mein. Status check karo, eKYC complete karo, beneficiary roster dekho. 100% free guidance Hinglish mein.',
  authors: [{ name: AUTHOR, url: `${SITE_URL}/about` }],
  creator: AUTHOR,
  publisher: SITE_NAME,
  category: 'Agriculture',
  
  alternates: {
    canonical: SITE_URL,
    languages: {
      'hi-IN': `${SITE_URL}/`,
      'en-US': `${SITE_URL}/en`,
      'x-default': `${SITE_URL}/`,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'PM Kisan Samman Nidhi Status Check 2026 — KisanStatus',
    description: 'PM Kisan Samman Nidhi 24vi kist October 2026 mein aane wali hai — ₹2000 seedha bank account mein.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'KisanStatus - PM Kisan Samman Nidhi Portal 2026',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    title: 'PM Kisan Samman Nidhi Status Check 2026 — KisanStatus',
    description: 'PM Kisan Samman Nidhi 24vi kist October 2026 mein aane wali hai — ₹2000 seedha bank account mein.',
    images: ['/og-image.webp'],
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
        <link rel="alternate" hrefLang="hi-IN" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-US" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ FIX #6: Schema description updated */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: SITE_NAME,
                url: SITE_URL,
                description: 'PM Kisan Samman Nidhi verification, eKYC guide, beneficiary roster — India ka free PM Kisan resource portal.',
                inLanguage: 'hi-IN',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
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
                description: 'Free PM Kisan Samman Nidhi resource portal for Indian cultivators.',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'kisanstatus.support@gmail.com',
                  contactType: 'customer support',
                  availableLanguage: ['Hindi', 'English'],
                  areaServed: 'IN',
                },
                founder: {
                  '@type': 'Person',
                  name: AUTHOR,
                  url: `${SITE_URL}/about`,
                },
                sameAs: [
                  'https://www.facebook.com/profile.php?id=61590430994270',
                ],
              },
            ]),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-surface text-text-primary antialiased font-sans">
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

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script
          id="ga4-init"
          strategy="lazyOnload"
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

        {process.env.NODE_ENV === 'production' && <Analytics />}

        <Script
          id="scroll-restoration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
              }
              
              window.addEventListener('popstate', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
            `,
          }}
        />

        <Script
          id="focus-management"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
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