import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { LanguageProvider } from '@/lib/LanguageContext';

const SITE_URL = 'https://kisanstatus.com';
const SITE_NAME = 'KisanStatus';
const AUTHOR = 'Sidhu Singh';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PM Kisan Status Check 2026 – 23vi Kist Released',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'PM Kisan 23vi kist 20 June 2026 ko release — ₹2000 seedha bank mein. Apna status check karo, eKYC karo, beneficiary list dekho. 100% free guide Hindi mein.',
  keywords: [
    'PM Kisan status check 2026',
    'PM Kisan 23vi kist',
    'PM Kisan 24vi kist',
    'PM Kisan Samman Nidhi',
    'pmkisan.gov.in status',
    'PM Kisan eKYC 2026',
    'PM Kisan beneficiary list',
    'PM Kisan payment status',
    'PM Kisan registration',
    'PM Kisan rejected list',
    'PM Kisan name correction',
    'PM Kisan land seeding',
    'PM Kisan FTO generated',
    'Kisan Credit Card 2026',
    'Soil Health Card 2026',
    'Nano DAP price 2026',
    'PMFBY crop insurance',
    'AgriStack farmer ID',
    'पीएम किसान स्टेटस',
    'पीएम किसान 23वीं किस्त',
    'पीएम किसान सम्मान निधि',
    'पीएम किसान ईकेवाईसी',
    'मिट्टी स्वास्थ्य कार्ड',
    'किसान क्रेडिट कार्ड',
  ],
  authors: [{ name: AUTHOR, url: `${SITE_URL}/about` }],
  creator: AUTHOR,
  publisher: SITE_NAME,
  category: 'Agriculture',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    siteName: SITE_NAME,
    title: 'PM Kisan Status Check 2026 – 23vi Kist Released',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai. Apna status abhi check karo.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'KisanStatus - PM Kisan Status Check 2026',
        type: 'image/webp',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KisanStatus - PM Kisan Status Check 2026',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan 23vi Kist Released — Status Check 2026',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai.',
    images: ['/og-image.webp'],
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
        {/* ✅ FIXED: DNS prefetch — sirf zaroori domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ PERFORMANCE: Font display=swap se render-blocking fix */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* LCP image preload */}
        <link
          rel="preload"
          href="/images/hero-banner.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16A34A" />
        <meta name="theme-color" content="#14532d" media="(prefers-color-scheme: dark)" />

        {/* ✅ FIXED: SearchAction → /articles instead of broken /search */}
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
                  '@type': 'Person',
                  name: AUTHOR,
                  url: `${SITE_URL}/about`,
                },
              },
            ]),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-surface text-text-primary antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>

        {/* ✅ PERFORMANCE: GA4 lazy load — afterInteractive se page pehle dikhega */}
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