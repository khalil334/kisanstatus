import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data'; // ✅ ADDED: Maandhan articles import
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

// ✅ COMBINE BOTH ARRAYS INTO ONE
const ALL_ARTICLES = [...ARTICLES, ...MAANDHAN_ARTICLES];

export const metadata: Metadata = {
  title: `Kisan Guides 2026 — ${ALL_ARTICLES.length}+ Resources | ${SITE_NAME}`,
  description: `${ALL_ARTICLES.length}+ verified guides on PM Kisan, farming subsidies, loans & crop insurance. Simple Hinglish explanations for Indian farmers.`,
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
    'pm kisan maandhan yojana', // ✅ ADDED
    'kisan pension scheme',     // ✅ ADDED
  ],
  openGraph: {
    title: `Kisan Guides 2026 — ${ALL_ARTICLES.length}+ Verified Resources`,
    description: 'PM Kisan, farming subsidies, loans, crop insurance, and business guides — sab ek jagah. Simple Hinglish mein.',
    type: 'website',
    url: `${SITE_URL}/articles`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'KisanStatus Complete Agriculture Resource Library 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Kisan Guides 2026 — ${ALL_ARTICLES.length}+ Verified Resources`,
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
  // ✅ FIX: Schema mein correct URL generate karna (Maandhan articles ke liye /maandhan/ prefix)
  const schemaArticles = ALL_ARTICLES.map((a, i) => {
    // Check if it's a maandhan article based on category or slug
    const isMaandhan = a.category === 'pension-scheme' || a.slug.includes('maandhan');
    const articleUrl = isMaandhan 
      ? `${SITE_URL}/maandhan/${a.slug}` 
      : `${SITE_URL}/articles/${a.slug}`;
      
    return {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Article',
        url: articleUrl,
        name: a.title,
        description: a.desc || a.description, // Handle both possible key names
      },
    };
  });

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `KisanStatus Guides & Resources 2026 — ${ALL_ARTICLES.length}+ Articles`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/articles`,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    numberOfItems: ALL_ARTICLES.length, // ✅ UPDATED
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: schemaArticles, // ✅ UPDATED
    },
  };

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
      {/* ✅ PASS COMBINED ARRAY TO CLIENT */}
      <ArticlesClient articles={ALL_ARTICLES} />
    </>
  );
}