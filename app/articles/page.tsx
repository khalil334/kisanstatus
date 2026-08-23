import type { Metadata } from 'next';
import { ARTICLES } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { LIVE_YOJANA_2026_ARTICLES } from '@/lib/yojana-2026-data';
import { HINDI_ARTICLES } from '@/lib/hindi-articles-data';
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

const RAJYA_LISTING_ARTICLES = LIVE_RAJYA_YOJANA_ARTICLES.map((a) => ({
  slug: a.slug,
  title: a.title,
  description: a.description,
  category: 'rajya-yojana',
  categoryLabel: 'Rajya Yojana',
  href: `/rajya-yojana/${a.slug}`,
  ogImage: a.ogImage,
  published: a.published,
  keywords: [a.mainKeyword, ...a.secondaryKeywords] as readonly string[],
}));

type ListingArticle = {
  slug: string;
  title: string;
  category: string;
  desc?: string;
  description?: string;
  href?: string;
  ogImage?: string;
  image?: string;
  publishedTime?: string;
  published?: string;
  modifiedTime?: string;
  modified?: string;
  author?: string;
  keywords?: readonly string[];
};

// SEO fix (2026-08-23, part 2): the 6 Hinglish /yojana/* guides were absent from
// ALL_ARTICLES, so the "Sabhi Guides A–Z" index linked 126 of 132 article URLs in
// the sitemap and these 6 never got a link from the main hub.
const YOJANA_LISTING_ARTICLES = LIVE_YOJANA_2026_ARTICLES.map((a) => ({
  slug: a.slug,
  title: a.title,
  description: a.description,
  category: 'yojana',
  categoryLabel: 'Yojana',
  href: `/yojana/${a.slug}`,
  ogImage: a.ogImage,
  published: a.published,
  keywords: [a.mainKeyword, ...a.secondaryKeywords] as readonly string[],
}));

const HINDI_LISTING_ARTICLES = HINDI_ARTICLES.map((a) => ({
  slug: a.slug,
  title: a.titleHi,
  desc: a.desc,
  category: a.category,
  href: `/articles/${a.slug}`,
  ogImage: a.ogImage,
  publishedTime: a.publishedTime,
  modifiedTime: a.modifiedTime,
  author: a.author,
  keywords: a.keywords,
}));

const ALL_ARTICLES: readonly ListingArticle[] = [...ARTICLES, ...MAANDHAN_ARTICLES, ...RAJYA_LISTING_ARTICLES, ...YOJANA_LISTING_ARTICLES, ...HINDI_LISTING_ARTICLES];

export const metadata: Metadata = {
  title: `PM Kisan aur Yojana Verified Guides 2026`,
  description: `${ALL_ARTICLES.length}+ verified guides on PM Kisan, farming subsidies, loans & crop insurance. Simple Hinglish explanations for Indian farmers.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: {
    canonical: `${SITE_URL}/articles`,
    languages: {
      'hi-IN': `${SITE_URL}/articles`,
      'x-default': `${SITE_URL}/articles`,
    }
  },
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

// SEO fix (2026-08-23): /articles served only 3–15 real <a href> links to Googlebot
// because ArticlesClient bails out to client-side rendering (useSearchParams inside
// Suspense). JSON-LD URLs are NOT used for link discovery, so ~100 articles were
// invisible to crawlers → GSC "Discovered - currently not indexed" (51 pages).
// This server-rendered index guarantees every article link exists in the initial HTML.
function articlePath(article: ListingArticle): string {
  const isMaandhan = article.category === 'pension-scheme' || article.slug.includes('maandhan');
  return article.href ?? (isMaandhan ? `/maandhan/${article.slug}` : `/articles/${article.slug}`);
}

function ServerArticleIndex() {
  const sorted = [...ALL_ARTICLES].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  return (
    <section aria-labelledby="all-guides-index" className="container-site px-4 pb-12">
      <h2 id="all-guides-index" className="font-black text-[var(--color-text)] text-xl mb-4">
        Sabhi Guides A–Z ({ALL_ARTICLES.length})
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm" role="list">
        {sorted.map((article) => (
          <li key={articlePath(article)}>
            <a
              href={articlePath(article)}
              className="text-[var(--color-text-muted)] hover:text-green-700 dark:hover:text-green-400 transition-colors inline-block py-0.5"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ArticlesPage() {
  // Ahrefs "Slow page" fix (2026-08-18): the ItemList previously embedded a
  // full Article object (author, publisher+logo, image, dates, description)
  // per article — ~120 KB of JSON-LD, ~25% of the page HTML — regenerated on
  // every ISR revalidation. Google's summary-page guidance for list pages is
  // minimal ListItems (url only is required); the full Article schema already
  // lives on each article page. Keeping position + url + name only.
  const schemaArticles = ALL_ARTICLES.map((article, i) => {
    const isMaandhan = article.category === 'pension-scheme' || article.slug.includes('maandhan');
    const articlePath =
      article.href ?? (isMaandhan ? `/maandhan/${article.slug}` : `/articles/${article.slug}`);
    const articleUrl = `${SITE_URL}${articlePath}`;

    return {
      '@type': 'ListItem',
      position: i + 1,
      url: articleUrl,
      name: article.title,
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
      <ServerArticleIndex />
    </>
  );
}
