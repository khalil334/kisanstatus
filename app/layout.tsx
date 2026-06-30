import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { LanguageProvider } from '@/lib/LanguageContext';

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700'],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

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
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
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
              });
            `,
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}