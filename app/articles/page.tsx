import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';
import ArticlesClient from './ArticlesClient';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `PM Kisan Guides & Resources 2026 — ${ARTICLES.length}+ Verified Articles`,
  description: `${ARTICLES.length}+ verified PM Kisan resources — status check, eKYC, payment fix, enrollment, crop insurance, soil health card. Hinglish mein simple explanations.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/articles` },
  keywords: [
    'pm kisan guides',
    'pm kisan resources 2026',
    'pm kisan articles',
    'kisan status check guide',
    'pm kisan ekyc guide',
    'pm kisan payment fix',
    'pm kisan registration guide',
    'pm kisan crop insurance',
    'soil health card guide',
    'kisan credit card guide',
  ],
  openGraph: {
    title: `PM Kisan Guides 2026 — ${ARTICLES.length}+ Verified Resources`,
    description: 'Status check, eKYC, payment fix, enrollment, crop insurance, soil health card — sab ek jagah. Hinglish mein.',
    type: 'website',
    url: `${SITE_URL}/articles`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'PM Kisan Complete Resource Library 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `PM Kisan Guides 2026 — ${ARTICLES.length}+ Verified Resources`,
    description: 'Status check, eKYC, payment fix, enrollment, crop insurance — sab ek jagah Hinglish mein.',
    site: '@kisanstatus',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ArticlesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `PM Kisan Guides & Resources 2026 — ${ARTICLES.length}+ Articles`,
    description: 'Comprehensive PM Kisan resource collection — verification, eKYC, payment, enrollment, insurance, soil health in Hinglish.',
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
        url: `${SITE_URL}/articles/${a.slug}`,
        name: a.title,
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