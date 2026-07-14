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
  title: `KisanStatus Guides 2026 — ${ARTICLES.length}+ Verified Agriculture & PM Kisan Resources`,
  description: `${ARTICLES.length}+ verified guides on PM Kisan, farming subsidies, agriculture loans, crop insurance, and profitable businesses (bakri palan, mushroom, madhumakhi). Simple Hinglish explanations.`,
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
    title: `KisanStatus Guides 2026 — ${ARTICLES.length}+ Verified Resources`,
    description: 'PM Kisan, farming subsidies, agriculture loans, crop insurance, and business guides — sab ek jagah. Simple Hinglish mein.',
    type: 'website',
    url: `${SITE_URL}/articles`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'KisanStatus Complete Agriculture Resource Library 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `KisanStatus Guides 2026 — ${ARTICLES.length}+ Verified Resources`,
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
  // ✅ PRO SEO FIX: Enhanced ItemList Schema with 'description' for better Google indexing
  const schema = {
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
          description: a.desc, // ✅ Google ab har article ka description bhi samajh payega
        }
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ArticlesClient articles={ARTICLES} />
    </>
  );
}