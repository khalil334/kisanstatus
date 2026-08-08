import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HINDI_ARTICLES, HINDI_ARTICLES_MAP } from '@/lib/hindi-articles-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const revalidate = 86400;

export async function generateStaticParams() {
  return HINDI_ARTICLES.map((a) => ({ slug: a.slug }));
}

// Unknown slugs => real HTTP 404 (same pattern as app/articles/[slug]).
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = HINDI_ARTICLES_MAP[slug];
  if (!article) notFound();

  const url = `${SITE_URL}/articles/hindi/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: article.titleHi,
    description: article.desc,
    keywords: [...article.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: article.titleHi,
      description: article.desc,
      url,
      siteName: SITE_NAME,
      type: 'article',
      locale: 'hi_IN',
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.titleHi,
      description: article.desc,
    },
  };
}

export default async function HindiArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = HINDI_ARTICLES_MAP[slug];
  if (!article) notFound();

  const url = `${SITE_URL}/articles/hindi/${slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.titleHi,
    description: article.desc,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime,
    inLanguage: 'hi-IN',
    author: { '@type': 'Organization', name: article.author, url: `${SITE_URL}/about` },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        {' › '}
        <Link href="/articles" className="hover:underline">Articles</Link>
      </nav>
      <article lang="hi">
        <h1 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
          {article.titleHi}
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          {article.author} · अपडेटेड: {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}
        </p>
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
