import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { 
  SITE_URL, 
  SITE_NAME, 
  AUTHOR_NAME, 
  AUTHOR_URL, 
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT 
} from '@/lib/site-config';
import ArticlesClient from './ArticlesClient';

export const revalidate = 3600;

const ALL_ARTICLES = [...ARTICLES, ...MAANDHAN_ARTICLES];

export const metadata: Metadata = {
  title: `Kisan Guides 2026 — ${ALL_ARTICLES.length}+ Resources`,
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
    'pm kisan maandhan yojana',
    'kisan pension scheme',
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
  const orgPublisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: LOGO_WIDTH,
      height: LOGO_HEIGHT,
    },
  };

  const toAbsolute = (img?: string) =>
    !img ? DEFAULT_OG_IMAGE : img.startsWith('http') ? img : `${SITE_URL}${img}`;

  const schemaArticles = ALL_ARTICLES.map((article: any, i) => {
    const isMaandhan = article.category === 'pension-scheme' || article.slug.includes('maandhan');
    const articleUrl = isMaandhan 
      ? `${SITE_URL}/maandhan/${article.slug}` 
      : `${SITE_URL}/articles/${article.slug}`;

    const published = article.publishedTime || article.published;
    const modified = article.modifiedTime || article.modified || published;
    const authorName = article.author || AUTHOR_NAME;

    return {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Article',
        '@id': articleUrl,
        url: articleUrl,
        name: article.title,
        headline: article.title,
        description: article.desc || article.description || 'KisanStatus verified guide',
        image: toAbsolute(article.ogImage || article.image),
        inLanguage: 'hi-IN',
        ...(published ? { datePublished: published } : {}),
        ...(modified ? { dateModified: modified } : {}),
        author: {
          '@type': 'Organization',
          name: authorName,
          url: AUTHOR_URL,
        },
        publisher: orgPublisher,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
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
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: ALL_ARTICLES.length,
      itemListElement: schemaArticles,
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
      <ArticlesClient articles={ALL_ARTICLES} />
    </>
  );
}
