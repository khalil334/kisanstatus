import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { Suspense } from 'react';
import { 
  SITE_URL, 
  SITE_NAME, 
  SITE_DESCRIPTION, 
  AUTHOR_NAME, 
  AUTHOR_URL, 
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  GLOBAL_KEYWORDS,
} from '@/lib/site-config';

// Single canonical title for the homepage. It must stay aligned with the on-page
// H1 ("PM Kisan Status Check 2026") AND with og:title/twitter:title below —
// when those three disagree Google discards <title> and substitutes its own SERP
// title (Ahrefs "Page and SERP titles do not match"). Change all three or none.
const HOME_TITLE = `PM Kisan Status Check 2026 | ${SITE_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
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
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Complete Agriculture & Farming Resource Portal`,
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    title: HOME_TITLE,
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
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

export const revalidate = 3600;

function HomeLoading() {
  return (
    <div 
      className="min-h-screen bg-[var(--color-bg)]" 
      aria-busy="true" 
      aria-label="Page content loading, please wait"
    >
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gradient-to-r from-green-800 to-green-600">
        <div className="container-site h-full flex items-center">
          <div className="max-w-2xl px-4 w-full">
            <div className="h-12 bg-white/20 rounded-lg w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-full mb-2 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-5/6 mb-6 animate-pulse" />
            <div className="h-12 bg-white/30 rounded-lg w-48 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="container-site py-12 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl animate-pulse" />
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm font-medium text-[var(--color-text-muted)] animate-pulse">
            Kripya thoda intezar karein, content load ho raha hai...
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${SITE_URL}#webpage`,
            url: SITE_URL,
            name: `PM Kisan Status & Farming Guides 2026 | ${SITE_NAME}`,
            description: SITE_DESCRIPTION,
            inLanguage: 'hi-IN',
            isPartOf: {
              '@id': `${SITE_URL}#website`,
            },
            about: {
              '@id': `${SITE_URL}#organization`,
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: DEFAULT_OG_IMAGE,
              width: 1200,
              height: 630,
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'PM Kisan 24vi Kist Status',
                  url: `${SITE_URL}/articles/PmKisan24viKist2026`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'PM Kisan eKYC Guide',
                  url: `${SITE_URL}/articles/PmKisanEkycOnline2026`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Farming Calculators',
                  url: `${SITE_URL}/calculator`,
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'KCC Loan Apply',
                  url: `${SITE_URL}/articles/KisanCreditCardOnlineApply2026`,
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Tractor Subsidy',
                  url: `${SITE_URL}/articles/KisanTractorLoan2026`,
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  name: 'PM Kisan Maandhan Registration 2026',
                  url: `${SITE_URL}/maandhan/pm-kisan-maandhan-registration-2026`,
                },
                {
                  '@type': 'ListItem',
                  position: 7,
                  name: 'PM Kisan Maandhan Eligibility & Documents',
                  url: `${SITE_URL}/maandhan/pm-kisan-maandhan-eligibility-documents`,
                },
                {
                  '@type': 'ListItem',
                  position: 8,
                  name: 'PM Kisan Maandhan Pension Calculator',
                  url: `${SITE_URL}/maandhan/pm-kisan-maandhan-pension-calculator`,
                },
                {
                  '@type': 'ListItem',
                  position: 9,
                  name: 'PM Kisan Maandhan Withdrawal & Refund Rules',
                  url: `${SITE_URL}/maandhan/pm-kisan-maandhan-withdrawal-refund-rules`,
                },
                {
                  '@type': 'ListItem',
                  position: 10,
                  name: 'PM Kisan Maandhan Auto Debit Ka Sach',
                  url: `${SITE_URL}/maandhan/pm-kisan-maandhan-auto-debit-poora-sach`,
                },
                {
                  '@type': 'ListItem',
                  position: 11,
                  name: 'PM Kisan Maandhan Status Check Online',
                  url: `${SITE_URL}/maandhan/pm-kisan-maandhan-status-check-online`,
                },
              ],
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.hero-description'],
            },
            publisher: {
              '@type': 'Organization',
              '@id': `${SITE_URL}#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: {
                '@type': 'ImageObject',
                url: LOGO_URL,
                width: 512,
                height: 512,
              },
            },
          }),
        }}
      />
      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>
    </>
  );
}