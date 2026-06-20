/**
 * Root Layout — KisanStatus.com
 * Includes: Poppins font, Header, Footer, Google Analytics 4, Vercel Analytics + SpeedInsights
 *
 * SETUP REQUIRED:
 *   1. Replace 'G-XXXXXXXXXX' below OR set NEXT_PUBLIC_GA_ID in .env.local
 *   2. For AdSense: Replace 'ca-pub-XXXXXXXXXX' with your Publisher ID
 */

import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { LanguageProvider } from '@/lib/LanguageContext';

// ── Site-wide metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://kisanstatus.com'),
  title: {
    default: 'PM Kisan Status Check 2026 – 23vi Kist | KisanStatus.com',
    template: '%s | KisanStatus.com',
  },
  description:
    'PM Kisan Samman Nidhi status check 2026 — 23vi kist, eKYC guide, beneficiary list, payment fail solution. pmkisan.gov.in se verified. Sidhu Singh.',
  keywords: [
    'PM Kisan Status Check 2026',
    'PM Kisan 23vi kist',
    'PM Kisan installment status',
    'PM Kisan beneficiary status',
    'pmkisan.gov.in status check',
    'PM Kisan payment status',
    'kisan samman nidhi 2026',
    'PM Kisan eKYC 2026',
    'PM Kisan rejected list',
    'PM Kisan registration online',
    'kisan status check',
    'pm kisan helpline',
  ],
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  creator: 'Sidhu Singh',
  publisher: 'KisanStatus.com',
  category: 'Agriculture',
  openGraph: {
    type:      'website',
    locale:    'hi_IN',
    url:       'https://kisanstatus.com',
    siteName:  'KisanStatus.com',
    title:     'PM Kisan Status Check 2026 – 23vi Kist | KisanStatus.com',
    description:
      'PM Kisan Samman Nidhi status check 2026 — 23vi kist, eKYC, beneficiary list. pmkisan.gov.in verified. Free guide.',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'PM Kisan Status Check 2026 – KisanStatus.com',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'PM Kisan Status Check 2026 – 23vi Kist',
    description: 'PM Kisan beneficiary status, 23vi kist dates, eKYC guide aur ₹6000 annual benefit — free.',
    images:      ['/og-image.jpg'],
    site:        '@kisanstatus',
  },
  robots: {
    index:                    true,
    follow:                   true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  alternates: {
    canonical: 'https://kisanstatus.com',
    languages: {
      'hi-IN': 'https://kisanstatus.com',
      'en-IN': 'https://kisanstatus.com',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN ?? 'be2e3b2083954889',
  },
};

// ── Root Layout Component ─────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-IN">
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Poppins font — 400/500/600/700 weights */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ── Structured Data — WebSite + Organization ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'KisanStatus.com',
                url: 'https://kisanstatus.com',
                description: 'PM Kisan Samman Nidhi status check, eKYC guide, beneficiary list — India\'s #1 free kisan information portal.',
                inLanguage: 'hi-IN',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: { '@type': 'EntryPoint', urlTemplate: 'https://kisanstatus.com/search?q={search_term_string}' },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'KisanStatus.com',
                url: 'https://kisanstatus.com',
                logo: 'https://kisanstatus.com/icon-512.png',
                foundingDate: '2024',
                description: 'Free PM Kisan information portal for Indian farmers.',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'kisanstatus.support@gmail.com',
                  contactType: 'customer support',
                  availableLanguage: ['Hindi', 'English'],
                },
                sameAs: [],
              },
            ]),
          }}
        />

        {/* ── Favicons & App Icons ── */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16A34A" />
        <meta name="theme-color" content="#14532d" media="(prefers-color-scheme: dark)" />
        {/* Prevent phone number auto-detection */}
        <meta name="format-detection" content="telephone=no" />

        {/*
          ══════════════════════════════════════════════════════
          GOOGLE ADSENSE SETUP — KisanStatus.com
          ══════════════════════════════════════════════════════
          Step 1: Apply at https://adsense.google.com
          Step 2: After approval, get your Publisher ID (ca-pub-XXXXXXXXXX)
          Step 3: Replace XXXXXXXXXX below with your actual ID
          Step 4: Uncomment the script tag below
          Step 5: Update public/ads.txt with your publisher ID
          ══════════════════════════════════════════════════════
        */}
        {/*
          ══════════════════════════════════════════════════
          GOOGLE ADSENSE — READY TO ACTIVATE
          ══════════════════════════════════════════════════
          Step 1: Apply → https://adsense.google.com
          Step 2: Get Publisher ID → ca-pub-XXXXXXXXXX
          Step 3: Replace XXXXXXXXXX in line below
          Step 4: Remove the comment tags around the script
          Step 5: Update public/ads.txt with same publisher ID
          ══════════════════════════════════════════════════
        */}
        {/* ADSENSE_PLACEHOLDER — Remove comment tags after approval:
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
        */}
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-text-primary antialiased">
        {/* ── Google Analytics 4 ── */}
        {/* TODO: Set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX in .env.local */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <LanguageProvider>
          {/* ── Site Header ── */}
          <Header />

          {/* ── Main Content ── */}
          <main className="flex-1">{children}</main>

          {/* ── Site Footer ── */}
          <Footer />
        </LanguageProvider>

        {/* ── Vercel Analytics — tracks page views automatically ── */}
        <Analytics />

        {/* ── Vercel Speed Insights — monitors Core Web Vitals ── */}
        <SpeedInsights />
      </body>
    </html>
  );
}
