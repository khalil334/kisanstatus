import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import ArticlesClient from './ArticlesClient';

const DOMAIN = 'https://kisanstatus.com';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Agrarian Welfare Scheme — Complete Resource Library 2026',
  description: `${ARTICLES.length}+ verified resources covering verification, digital authentication, credit options, payment solutions, enrollment processes — Hinglish mein simple explanations ke saath.`,
  authors: [{ name: 'KisanStatus Team', url: `${DOMAIN}/about` }],
  alternates: { canonical: `${DOMAIN}/articles` },
  openGraph: {
    title: 'Agrarian Welfare Scheme — Complete Resource Library 2026',
    description: `${ARTICLES.length}+ verified resources — verification, digital authentication, credit options, payment solutions, enrollment. Hinglish mein simple explanations.`,
    type: 'website',
    url: `${DOMAIN}/articles`,
    siteName: 'KisanStatus',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'Agrarian Welfare Resources 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrarian Welfare Scheme — Complete Resource Library 2026',
    description: `${ARTICLES.length}+ verified resources covering verification, digital authentication, credit options, payment solutions, enrollment processes.`,
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function ArticlesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Agrarian Welfare Scheme — Complete Resource Library 2026',
    description: 'Comprehensive collection of cultivator benefit program resources in Hinglish',
    url: `${DOMAIN}/articles`,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: 'KisanStatus', url: DOMAIN },
    numberOfItems: ARTICLES.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ARTICLES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${DOMAIN}/articles/${a.slug}`,
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