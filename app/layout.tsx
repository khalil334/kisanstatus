import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { LanguageProvider } from '@/lib/LanguageContext';
import { 
  SITE_URL, 
  SITE_NAME, 
  SITE_TAGLINE, 
  SITE_DESCRIPTION, 
  AUTHOR_NAME, 
  AUTHOR_URL, 
  DEFAULT_OG_IMAGE, 
  LOGO_URL, 
  SUPPORT_EMAIL,
  GLOBAL_KEYWORDS 
} from '@/lib/site-config';

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
});

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
  // ✅ DYNAMIC TITLE: Har page ke title ke aage " | KisanStatus" lagayega
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: GLOBAL_KEYWORDS, // ✅ GLOBAL KEYWORDS ADDED
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  publisher: SITE_NAME,
  category: 'Agriculture & Farming',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'hi-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Indian Agriculture & Farming Guides`,
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
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
    <html lang="hi-IN" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* ✅ PRECONNECT: Sirf essential third-party resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* ✅ HERO IMAGE PRELOAD - LCP ke liye critical */}
        <link
          rel="preload"
          as="image"
          href="/hero-wheat-field.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ CRITICAL CSS INLINE - Render blocking reduce karne ke liye */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                margin: 0;
                font-family: var(--font-poppins, system-ui, -apple-system, sans-serif);
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              .min-h-screen { min-height: 100vh; }
              .flex { display: flex; }
              .flex-col { flex-direction: column; }
              .flex-1 { flex: 1 1 0%; }
              
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              .animate-pulse {
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
            `,
          }}
        />

        {/* ✅ CONSOLIDATED JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: SITE_NAME,
                url: SITE_URL,
                description: SITE_DESCRIPTION,
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
                  url: LOGO_URL,
                  width: 512,
                  height: 512,
                },
                foundingDate: '2024',
                description: SITE_DESCRIPTION,
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: SUPPORT_EMAIL,
                  contactType: 'customer support',
                  availableLanguage: ['Hindi', 'English'],
                  areaServed: 'IN',
                },
                founder: {
                  '@type': 'Organization',
                  name: AUTHOR_NAME,
                  url: AUTHOR_URL,
                },
                sameAs: [
                  'https://www.facebook.com/profile.php?id=61590430994270',
                  'https://twitter.com/kisanstatus',
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
          <Header />
          
          <main id="main-content" className="flex-1 scroll-smooth">
            {children}
          </main>
          
          <Footer />
        </LanguageProvider>

        {/* ✅ GA4: afterInteractive */}
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
                anonymize_ip: true,
                send_page_view: true
              });
            `,
          }}
        />

        {/* ✅ Vercel Analytics — Production only */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}