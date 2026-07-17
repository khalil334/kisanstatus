
# Let me create the optimized layout.tsx file

layout_content = '''import type { Metadata, Viewport } from 'next';
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
    { media: '(prefers-color-scheme: dark)', color: '#15803D' },
  ],
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
        alt: `${SITE_NAME} - Kisan Yojana, PM Kisan Status & Farming Guides`,
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
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="preload" as="image" href="/hero-wheat-field.webp" type="image/webp" fetchPriority="high" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              margin: 0;
              font-family: var(--font-poppins, system-ui, -apple-system, sans-serif);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            /* Dark mode text visibility fix - ensures all text is readable */
            html.dark body {
              background-color: #0a0f0a;
              color: #e8f5e9;
            }
            html.dark h1, html.dark h2, html.dark h3, html.dark h4, html.dark h5, html.dark h6 {
              color: #f0fdf4;
            }
            html.dark p, html.dark span, html.dark li {
              color: #dcfce7;
            }
            html.dark a {
              color: #86efac;
            }
            html.dark a:hover {
              color: #4ade80;
            }
            html.dark .text-gray-600, html.dark .text-gray-500, html.dark .text-gray-400 {
              color: #a7f3d0 !important;
            }
            html.dark .text-gray-300, html.dark .text-gray-200 {
              color: #bbf7d0 !important;
            }
            html.dark .text-gray-800, html.dark .text-gray-900 {
              color: #f0fdf4 !important;
            }
            html.dark .bg-white {
              background-color: #1a2e1a !important;
            }
            html.dark .bg-gray-50, html.dark .bg-gray-100 {
              background-color: #142414 !important;
            }
            html.dark .bg-gray-200 {
              background-color: #1e3a1e !important;
            }
            html.dark .border-gray-200, html.dark .border-gray-300 {
              border-color: #2d5a2d !important;
            }
            /* Card backgrounds in dark mode */
            html.dark .card, html.dark [class*="card"] {
              background-color: #1a2e1a;
              border-color: #2d5a2d;
            }
            /* Button text fix */
            html.dark button:not([class*="bg-green"]):not([class*="bg-primary"]) {
              color: #dcfce7;
            }
            /* Input fields */
            html.dark input, html.dark textarea, html.dark select {
              background-color: #142414;
              color: #e8f5e9;
              border-color: #2d5a2d;
            }
            html.dark input::placeholder, html.dark textarea::placeholder {
              color: #6b9e6b;
            }
            /* Table fixes */
            html.dark table {
              color: #dcfce7;
            }
            html.dark th {
              background-color: #1e3a1e;
              color: #f0fdf4;
            }
            html.dark td {
              border-color: #2d5a2d;
            }
            /* Navigation fixes */
            html.dark nav, html.dark header {
              background-color: #0f1f0f;
            }
            html.dark nav a, html.dark header a {
              color: #bbf7d0;
            }
            /* Footer fixes */
            html.dark footer {
              background-color: #0a140a;
              color: #a7f3d0;
            }
            html.dark footer a {
              color: #86efac;
            }
            /* Sidebar / aside fixes */
            html.dark aside {
              background-color: #142414;
              color: #dcfce7;
            }
            /* Blockquote */
            html.dark blockquote {
              background-color: #1e3a1e;
              border-left-color: #16a34a;
              color: #bbf7d0;
            }
            /* Code blocks */
            html.dark code, html.dark pre {
              background-color: #0f1f0f;
              color: #86efac;
            }
            /* Scrollbar dark mode */
            html.dark ::-webkit-scrollbar {
              width: 8px;
            }
            html.dark ::-webkit-scrollbar-track {
              background: #0a0f0a;
            }
            html.dark ::-webkit-scrollbar-thumb {
              background: #2d5a2d;
              border-radius: 4px;
            }
            html.dark ::-webkit-scrollbar-thumb:hover {
              background: #3d7a3d;
            }
            /* Skip link accessibility */
            .skip-link {
              position: absolute;
              top: -40px;
              left: 0;
              background: #16A34A;
              color: white;
              padding: 8px 16px;
              z-index: 100;
              text-decoration: none;
              border-radius: 0 0 8px 0;
              font-weight: 600;
              transition: top 0.2s;
            }
            .skip-link:focus {
              top: 0;
            }
          `,
        }} />
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
      <body className="min-h-screen flex flex-col antialiased bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-200">
        <a href="#main-content" className="skip-link">
          मुख्य सामग्री पर जाएं
        </a>
        <LanguageProvider>
          <Header />
          <main id="main-content" className="flex-1 scroll-smooth">
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
                anonymize_ip: true,
                send_page_view: true
              });
            `,
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
'''

# Save to output
with open('/mnt/agents/output/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_content)

print("✅ layout.tsx saved successfully!")
print(f"📁 File size: {len(layout_content)} characters")