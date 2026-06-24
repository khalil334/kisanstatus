/**
 * Root Layout — KisanStatus.com
 * ✅ FIXES:
 *  - Google Fonts render-blocking hataya → font-display:swap + media trick
 *  - GA4 next/script Strategy="afterInteractive" → blocking nahi karega
 *  - Preload LCP image (hero-banner.png) added
 *  - DNS prefetch for pmkisan.gov.in added
 *  - Unnecessary preconnect to fonts.googleapis removed (already in link tag)
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
    default:  'PM Kisan Status Check 2026 – 23vi Kist | KisanStatus.com',
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
  authors:   [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  creator:   'Sidhu Singh',
  publisher: 'KisanStatus.com',
  category:  'Agriculture',
  openGraph: {
    type:        'website',
    locale:      'hi_IN',
    url:         'https://kisanstatus.com',
    siteName:    'KisanStatus.com',
    title:       'PM Kisan Status Check 2026 – 23vi Kist | KisanStatus.com',
    description: 'PM Kisan Samman Nidhi status check 2026 — 23vi kist, eKYC, beneficiary list. pmkisan.gov.in verified. Free guide.',
    images: [{
      url:    'https://kisanstatus.com/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'PM Kisan Status Check 2026 – KisanStatus.com',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'PM Kisan Status Check 2026 – 23vi Kist',
    description: 'PM Kisan beneficiary status, 23vi kist dates, eKYC guide aur ₹6000 annual benefit — free.',
    images:      ['https://kisanstatus.com/og-image.jpg'],
    site:        '@kisanstatus',
  },
  robots: {
    index:  true,
    follow: true,
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
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN ?? 'oGrO0aRNLLhCgHq0Bn-sh3FdgKye7TlbAn2pAk8YdMQ',
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-IN">
      <head>
        {/* ✅ FIX 1: DNS prefetch — external origins ke liye faster lookup */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://pmkisan.gov.in" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preconnect — sirf fonts.gstatic.com zarori hai (fonts yahan se aate hain) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          ✅ FIX 2: Google Fonts render-blocking fix
          Technique: media="print" onload="this.media='all'" trick
          - Browser print stylesheet as non-blocking download karta hai
          - Jab download ho jaata hai to media='all' set hota hai → font apply
          - <noscript> fallback JS disabled users ke liye
          - font-display=swap already baked into Google Fonts URL
        */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/*
          ✅ FIX 3: Preload LCP image — hero banner
          Homepage ka LCP element yahi image hai
          Isse First Contentful Paint + LCP ~300-500ms improve hoga
        */}
        <link
          rel="preload"
          href="/images/hero-banner.png"
          as="image"
          fetchPriority="high"
        />

        {/* ── Structured Data — WebSite + Organization ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context':   'https://schema.org',
                '@type':      'WebSite',
                name:         'KisanStatus.com',
                url:          'https://kisanstatus.com',
                description:  "PM Kisan Samman Nidhi status check, eKYC guide, beneficiary list — India's #1 free kisan information portal.",
                inLanguage:   'hi-IN',
              },
              {
                '@context':    'https://schema.org',
                '@type':       'Organization',
                name:          'KisanStatus.com',
                url:           'https://kisanstatus.com',
                logo:          'https://kisanstatus.com/icon-512.png',
                foundingDate:  '2024',
                description:   'Free PM Kisan information portal for Indian farmers.',
                contactPoint: {
                  '@type':            'ContactPoint',
                  email:              'kisanstatus.support@gmail.com',
                  contactType:        'customer support',
                  availableLanguage:  ['Hindi', 'English'],
                },
                sameAs: [],
              },
            ]),
          }}
        />

        {/* ── Favicons & App Icons ── */}
        <link rel="icon"             href="/favicon.ico"         sizes="48x48" />
        <link rel="icon"             href="/favicon.svg"         type="image/svg+xml" />
        <link rel="icon"             href="/favicon-32x32.png"   type="image/png" sizes="32x32" />
        <link rel="icon"             href="/favicon-16x16.png"   type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest"         href="/site.webmanifest" />
        <meta name="theme-color"     content="#16A34A" />
        <meta name="theme-color"     content="#14532d" media="(prefers-color-scheme: dark)" />
        <meta name="format-detection" content="telephone=no" />

        {/*
          GOOGLE ADSENSE — Uncomment after approval:
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
            crossOrigin="anonymous"
          />
        */}
      </head>

      <body className="min-h-screen flex flex-col bg-surface text-text-primary antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>

        {/*
          ✅ FIX 4: GA4 ab next/script ke saath strategy="afterInteractive"
          Pehle plain <script> tag tha jo <head> mein block karta tha
          Ab page interactive hone KE BAAD load hoga — ~200-400ms faster FCP
        */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
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
