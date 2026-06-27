/**
 * app/articles/page.tsx — SERVER COMPONENT
 * ✅ 'use client' nahi hai — revalidate kaam karega
 * ✅ Schema server-side render hoga
 * ✅ FIXED: Proper metadata + canonical URL added
 */
import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import ArticlesClient from './ArticlesClient';

const DOMAIN = 'https://kisanstatus.com';

export const revalidate = 86400;

// ✅ ADDED: Proper metadata with correct canonical URL
export const metadata: Metadata = {
  title: 'All PM Kisan Articles & Guides 2026 — KisanStatus.com',
  description: 'PM Kisan status check, eKYC, loan, payment fix, registration guides — sab Hindi mein. Free aur simple.',
  alternates: { canonical: `${DOMAIN}/articles` },
  openGraph: {
    title: 'All PM Kisan Articles & Guides 2026',
    description: '24+ free guides — status check, eKYC, loan, payment fix, registration. Sab Hindi mein.',
    type: 'website',
    url: `${DOMAIN}/articles`,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: 'PM Kisan Articles 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All PM Kisan Articles & Guides 2026',
    description: '24+ free guides — status check, eKYC, loan, payment fix, registration. Sab Hindi mein.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/og-image.webp`],
  },
};

export default function ArticlesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PM Kisan Guides 2026 — KisanStatus.com',
    url: `${DOMAIN}/articles`,
    numberOfItems: ARTICLES.length,
    itemListElement: ARTICLES.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${DOMAIN}/articles/${a.slug}`,
      name: a.title,
    })),
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