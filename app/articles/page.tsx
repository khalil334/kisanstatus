import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import { 
  SITE_URL, 
  SITE_NAME, 
  AUTHOR_NAME, 
  AUTHOR_URL, 
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION 
} from '@/lib/site-config';
import ArticlesClient from './ArticlesClient';

export const revalidate = 3600;

export const metadata: Metadata = {
  // ✅ Rule 5: Title optimized to ~60 characters, primary keyword first
  title: `Kisan Guides 2026 — ${ARTICLES.length}+ Verified PM Kisan Resources`,
  // ✅ Rule 5: Description optimized to ~155 characters, natural Hinglish
  description: `${ARTICLES.length}+ verified guides on PM Kisan, farming subsidies, loans, crop insurance & profitable businesses like bakri palan. Simple Hinglish explanations.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { 
    canonical: `${SITE_URL}/articles`,
    languages: {
      'hi-IN': `${SITE_URL}/articles`,
      'x-default': `${SITE_URL}/articles`,
    }
  },
  keywords: [
    'kisan status guides',
    'pm kisan resources 2026',
    'krishi guides hindi',
    'agriculture business ideas',
    'kisan loan guide',
    'farming subsidy yojana',
    'pm kisan ekyc guide',
    'pm kisan payment fix',
    'crop insurance guide',
    'soil health card guide',
    'bakri palan yojana',
    'mushroom kheti guide',
  ],
  openGraph: {
    title: `Kisan Guides 2026 — ${ARTICLES.length}+ Verified Resources`,
    description: 'PM Kisan, farming subsidies, loans, crop insurance, and business guides — sab ek jagah. Simple Hinglish mein.',
    type: 'website',
    url: `${SITE_URL}/articles`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'KisanStatus Complete Agriculture Resource Library 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Kisan Guides 2026 — ${ARTICLES.length}+ Verified Resources`,
    description: 'PM Kisan, farming subsidies, loans, crop insurance, and business guides — sab ek jagah Hinglish mein.',
    site: '@kisanstatus',
    creator: '@kisanstatus',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Agriculture & Farming',
};

export default function ArticlesPage() {
  // ✅ Rule 9: Enhanced ItemList Schema for better Google indexing
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `KisanStatus Guides & Resources 2026 — ${ARTICLES.length}+ Articles`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/articles`,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    numberOfItems: ARTICLES.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ARTICLES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Article',
          url: `${SITE_URL}/articles/${a.slug}`,
          name: a.title,
          description: a.desc,
        }
      })),
    },
  };

  // ✅ Rule 9: BreadcrumbList Schema added for this top-level page
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'All Guides & Articles', item: `${SITE_URL}/articles` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticlesClient articles={ARTICLES} />
    </>
  );
}