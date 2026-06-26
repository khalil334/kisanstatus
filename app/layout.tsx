/**
 * Root Layout — KisanStatus.com
 * ✅ SEO OPTIMIZED v3.0
 * ✅ NEXT.JS 15 COMPATIBLE
 * ✅ PERFORMANCE OPTIMIZED
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
    'PM Kisan 23vi kist status check 2026 — ₹2000 seedha bank mein. eKYC guide, beneficiary list, payment fail solution, Soil Health Card, KCC loan — sab free. pmkisan.gov.in verified.',
  keywords: [
    // Primary Keywords
    'PM Kisan Status Check 2026',
    'PM Kisan 23vi kist',
    'PM Kisan 24vi kist',
    'PM Kisan installment status',
    'PM Kisan beneficiary status',
    'pmkisan.gov.in status check',
    'PM Kisan payment status',
    
    // Scheme Related
    'PM Kisan Samman Nidhi 2026',
    'kisan samman nidhi',
    'PM Kisan Yojana',
    'PM Kisan scheme',
    
    // eKYC & Registration
    'PM Kisan eKYC 2026',
    'PM Kisan registration online',
    'PM Kisan rejected list',
    'PM Kisan name correction',
    'PM Kisan mobile number change',
    
    // Financial
    'PM Kisan ₹6000 benefit',
    'PM Kisan ₹2000 kist',
    'PM Kisan payment date',
    'PM Kisan bank account',
    
    // Farming & Agriculture
    'Soil Health Card 2026',
    'Mitti swasthya card',
    'Kisan Credit Card 2026',
    'KCC loan apply',
    'Nano DAP price 2026',
    'PMFBY crop insurance',
    'AgriStack farmer ID',
    
    // Problem-Solution
    'PM Kisan payment failed',
    'PM Kisan land seeding',
    'PM Kisan FTO generated',
    'PM Kisan problems solution',
    
    // Hindi Keywords
    'पीएम किसान स्टेटस चेक 2026',
    'पीएम किसान 23वीं किस्त',
    'पीएम किसान सम्मान निधि',
    'पीएम किसान ईकेवाईसी',
    'मिट्टी स्वास्थ्य कार्ड',
    'किसान क्रेडिट कार्ड',
    
    // Helpline & Support
    'PM Kisan helpline number',
    'PM Kisan customer care',
    'kisan status check',
    'pm kisan helpline',
  ],
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  creator: 'Sidhu Singh',
  publisher: 'KisanStatus.com',
  category: 'Agriculture',
  
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://kisanstatus.com',
    siteName: 'KisanStatus.com',
    title: 'PM Kisan Status Check 2026 – 23vi Kist Released | KisanStatus.com',
    description: 'PM Kisan 23vi kist 20 June 2026 ko release ho chuki hai — ₹2000 seedha bank mein. Status check karo, eKYC karo, paisa aaya ya nahi dekho. 100% free guide.',
    images: [{
      url: 'https://kisanstatus.com/og-image.webp',
      width: 1200,
      height: 630,
      alt: 'PM Kisan Status Check 2026 – KisanStatus.com',
      type: 'image/webp',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'PM Kisan 23vi Kist Released — Status Check 2026',
    description: '₹2000 seedha bank mein — 9.44 Crore+ kisanon ko mil chuki hai. Apna status abhi check karo!',
    images: ['https://kisanstatus.com/og-image.webp'],
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
  
  alternates: {
    canonical: 'https://kisanstatus.com',
  },
  
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN ?? 'oGrO0aRNLLhCgHq0Bn-sh3FdgKye7TlbAn2pAk8YdMQ',
  },
  
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'content-language': 'hi-IN, en-IN',
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-IN" suppressHydrationWarning>
      <head>
        {/* ✅ DNS prefetch — external origins ke liye faster lookup */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://pmkisan.gov.in" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preconnect — sirf fonts.gstatic.com zarori hai */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ Google Fonts render-blocking fix */}
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

        {/* ✅ Preload LCP image — hero banner */}
        <link
          rel="preload"
          href="/images/hero-banner.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* ── Structured Data — WebSite + Organization + SearchAction ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'KisanStatus.com',
                url: 'https://kisanstatus.com',
                description: "PM Kisan Samman Nidhi status check, eKYC guide, beneficiary list, Soil Health Card, KCC loan — India's #1 free kisan information portal.",
                inLanguage: 'hi-IN',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://kisanstatus.com/search?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'KisanStatus.com',
                url: 'https://kisanstatus.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://kisanstatus.com/logo.webp',
                  width: 512,
                  height: 512,
                },
                foundingDate: '2024',
                description: 'Free PM Kisan information portal for Indian farmers. Status check, eKYC guide, beneficiary list, and farming schemes.',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'kisanstatus.support@gmail.com',
                  contactType: 'customer support',
                  availableLanguage: ['Hindi', 'English'],
                  areaServed: 'IN',
                },
                sameAs: [],
                founder: {
                  '@type': 'Person',
                  name: 'Sidhu Singh',
                  url: 'https://kisanstatus.com/about',
                },
              },
            ]),
          }}
        />

        {/* ── Favicons & App Icons ── */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16A34A" />
        <meta name="theme-color" content="#14532d" media="(prefers-color-scheme: dark)" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Sidhu Singh" />
        <meta name="copyright" content="© 2026 KisanStatus.com" />
        <meta name="language" content="Hindi" />
        <meta name="revisit-after" content="1 days" />

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

        {/* ✅ GA4 with next/script strategy="afterInteractive" */}
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
                send_page_view: true,
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