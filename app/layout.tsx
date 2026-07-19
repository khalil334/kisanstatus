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
  AUTHOR_BIO,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT,
  SUPPORT_EMAIL,
  HELPLINE_CLEAN,
  HELPLINE_ALT_CLEAN,
  GLOBAL_KEYWORDS,
  SOCIAL_LINKS,
  SUPPORT_HOURS,
  GOOGLE_SITE_VERIFICATION,
  BING_VERIFICATION,
  YANDEX_VERIFICATION,
  GTM_ID,
} from '@/lib/site-config';

const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#16A34A' },
    { media: '(prefers-color-scheme: dark)', color: '#050D05' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: GLOBAL_KEYWORDS,
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
        alt: `${SITE_NAME} - PM Kisan, Krishi Yojana & Farming Guides in Hindi`,
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': BING_VERIFICATION,
      'yandex-verification': YANDEX_VERIFICATION,
    },
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': SITE_NAME,
    'application-name': SITE_NAME,
    'msapplication-TileColor': '#16A34A',
    'msapplication-config': '/browserconfig.xml',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#16A34A' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="hi-IN"
      dir="ltr"
      suppressHydrationWarning
      className={poppins.variable}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://region1.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${SITE_URL}#website`,
                name: SITE_NAME,
                url: SITE_URL,
                description: SITE_DESCRIPTION,
                inLanguage: 'hi-IN',
                publisher: {
                  '@id': `${SITE_URL}#organization`,
                },
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
                '@id': `${SITE_URL}#organization`,
                name: SITE_NAME,
                alternateName: 'Kisan Status',
                url: SITE_URL,
                logo: {
                  '@type': 'ImageObject',
                  '@id': `${SITE_URL}#logo`,
                  url: LOGO_URL,
                  width: LOGO_WIDTH,
                  height: LOGO_HEIGHT,
                  caption: SITE_NAME,
                },
                image: {
                  '@id': `${SITE_URL}#logo`,
                },
                foundingDate: '2024',
                description: SITE_DESCRIPTION,
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    '@id': `${SITE_URL}#contact-primary`,
                    telephone: `+91-${HELPLINE_CLEAN}`,
                    email: SUPPORT_EMAIL,
                    contactType: 'customer support',
                    availableLanguage: ['Hindi', 'English'],
                    areaServed: {
                      '@type': 'Country',
                      name: 'India',
                    },
                    hoursAvailable: {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: SUPPORT_HOURS.days,
                      opens: SUPPORT_HOURS.open,
                      closes: SUPPORT_HOURS.close,
                      timeZone: SUPPORT_HOURS.timezone,
                    },
                  },
                  {
                    '@type': 'ContactPoint',
                    '@id': `${SITE_URL}#contact-alt`,
                    telephone: `+91-${HELPLINE_ALT_CLEAN}`,
                    contactType: 'technical support',
                    availableLanguage: ['Hindi', 'English'],
                    areaServed: {
                      '@type': 'Country',
                      name: 'India',
                    },
                  },
                ],
                founder: {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}#founder`,
                  name: AUTHOR_NAME,
                  url: AUTHOR_URL,
                  description: AUTHOR_BIO,
                },
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                  addressRegion: 'India',
                },
                sameAs: [
                  SOCIAL_LINKS.facebook,
                  SOCIAL_LINKS.twitter,
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                '@id': `${SITE_URL}#breadcrumb`,
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE_URL,
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id': `${SITE_URL}#webpage`,
                url: SITE_URL,
                name: `${SITE_NAME} — ${SITE_TAGLINE}`,
                description: SITE_DESCRIPTION,
                inLanguage: 'hi-IN',
                isPartOf: {
                  '@id': `${SITE_URL}#website`,
                },
                about: {
                  '@id': `${SITE_URL}#organization`,
                },
                primaryImageOfPage: {
                  '@id': `${SITE_URL}#logo`,
                },
              },
            ]),
          }}
        />
      </head>

      <body
        className="min-h-screen flex flex-col antialiased bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-200"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        >
          Skip to main content
        </a>

        <LanguageProvider>
          <Header />
          <main
            id="main-content"
            className="flex-1 scroll-smooth"
            role="main"
          >
            {children}
          </main>
          <Footer />
        </LanguageProvider>

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
                cookie_flags: 'SameSite=None;Secure',
                cookie_domain: 'auto',
                cookie_expires: 63072000,
                allow_google_signals: true,
                allow_ad_personalization_signals: false,
                restricted_data_processing: false,
                transport_type: 'beacon',
              });
            `,
          }}
        />

        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
