/**
 * app/articles/page.tsx — SERVER COMPONENT
 * ✅ 'use client' nahi hai — revalidate kaam karega
 * ✅ Schema server-side render hoga
 */
import { ARTICLES } from '@/lib/articles-data';
import ArticlesClient from './ArticlesClient';

const DOMAIN = 'https://kisanstatus.com';

export const revalidate = 86400;

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