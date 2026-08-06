import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES, CATEGORIES, getArticlesByCategory, type CategorySlug } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';
import ArticlesClient from '../../ArticlesClient';

const CATEGORY_DATA: Record<CategorySlug, {
  title: string;
  description: string;
  emoji: string;
  keywords: string[];
}> = {
  'status-check': {
    title: 'PM Kisan Status Check & Verification Guides 2026',
    description: 'PM Kisan status check, beneficiary list verification, aur FTO generated ka matlab jaanein. 2026 ki latest, verified step-by-step guides.',
    emoji: '📊',
    keywords: ['pm kisan status check', 'beneficiary verification', 'installment status 2026', 'FTO generated', 'kist status'],
  },
  'loan': {
    title: 'Kisan Credit & Loan Guides 2026 — KCC',
    description: 'Kisan Credit Card (KCC), tractor loan, aur 4% interest par personal loan kaise lein. 2026 ki complete application process aur eligibility guides.',
    emoji: '💰',
    keywords: ['kisan credit card', 'KCC loan 2026', 'tractor loan', 'kisan personal loan', '4% interest loan'],
  },
  'farming': {
    title: 'Modern Farming & Schemes Guides 2026',
    description: 'Soil Health Card, Nano DAP, PMFBY crop insurance aur AgriStack ki puri jankari. Modern kheti aur sarkari yojanaon ke liye verified Hindi guides.',
    emoji: '🌱',
    keywords: ['soil health card', 'nano DAP 2026', 'PMFBY crop insurance', 'AgriStack', 'modern farming'],
  },
  'mandi': {
    title: 'Mandi Bhav & Market Rates 2026',
    description: 'Aaj ka mandi bhav aur daily updated wholesale rates. Apne shehar ke sabzi, anaj aur fruit ke aaj ke bhav aur market trends yahan check karein.',
    emoji: '📈',
    keywords: ['mandi bhav today', 'sabzi bhav', 'fruit rates 2026', 'wholesale prices', 'aaj ka bhav'],
  },
  'pashupalan': {
    title: 'Pashupalan & Matsya Palan Subsidy Guides 2026',
    description: 'Bakri palan, madhumakhi palan, machli palan aur silage ki subsidy, loan aur profit ki puri jankari. NLM, KVIC aur PM Matsya Sampada Yojana ki guides.',
    emoji: '🐄',
    keywords: ['bakri palan yojana', 'madhumakhi palan subsidy', 'machli palan loan', 'PM Matsya Sampada Yojana', 'silage business'],
  },
  'agri-business': {
    title: 'Agri Business Subsidy Guides 2026 — Mushroom',
    description: 'Mushroom kheti, vermi compost, food processing aur drip irrigation subsidy kaise milegi. NHB, PM-FME aur CHC portal ki step-by-step guides.',
    emoji: '🏭',
    keywords: ['mushroom kheti subsidy', 'vermi compost business', 'PM FME yojana', 'custom hiring centre', 'drip irrigation subsidy'],
  },
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryData = CATEGORY_DATA[category as CategorySlug];
  const categoryInfo = CATEGORIES[category as CategorySlug];

  if (!categoryData || !categoryInfo) {
    return {
      title: 'Category Not Found',
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/articles/category/${category}`;
  const displayTitle = categoryData.title;
  const displayDescription = categoryData.description;

  return {
    title: displayTitle,
    description: displayDescription,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    keywords: categoryData.keywords,
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: displayTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: displayDescription,
      site: '@kisanstatus',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = CATEGORY_DATA[category as CategorySlug];
  const categoryInfo = CATEGORIES[category as CategorySlug];

  if (!categoryData || !categoryInfo) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category as CategorySlug);
  const url = `${SITE_URL}/articles/category/${category}`;

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryData.title,
    description: categoryData.description,
    url: url,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryArticles.length,
      itemListElement: categoryArticles.map((a, i) => {
        const articleUrl = `${SITE_URL}/articles/${a.slug}`;
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Article',
            '@id': articleUrl,
            url: articleUrl,
            name: a.title,
            headline: a.title,
            description: a.desc,
            inLanguage: 'hi-IN',
            ...(a.ogImage ? { image: `${SITE_URL}${a.ogImage}` } : {}),
            ...(a.publishedTime ? { datePublished: a.publishedTime } : {}),
            ...(a.modifiedTime ? { dateModified: a.modifiedTime } : {}),
            author: {
              '@type': 'Organization',
              name: a.author || AUTHOR_NAME,
              url: AUTHOR_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': articleUrl,
            },
          },
        };
      }),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: categoryData.title, item: url },
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

      {}
      <section className="bg-gradient-to-r from-green-800 to-green-600 py-12 md:py-16">
        <div className="container-site mx-auto px-4 text-center">
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">
            {categoryData.emoji}
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
            {categoryData.title}
          </h1>
          <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto mb-6">
            {categoryData.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
              📚 {categoryArticles.length} Verified Guides
            </span>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors"
            >
              ← Sabhi Kisan Guides Dekhein
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="py-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-site mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(CATEGORIES).map(([slug, cat]) => {
              const isActive = slug === category;
              const catInfo = cat as { name: string; nameHi: string; icon: string };
              return (
                <Link
                  key={slug}
                  href={`/articles/category/${slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {catInfo.icon} {catInfo.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <div className="container-site mx-auto py-10">
        {categoryArticles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Is category mein abhi koi guide available nahi hai
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Hum jaldi hi yahan naye updates aur helpful articles add karenge. Tab tak aap hamare anya verified guides check kar sakte hain.
            </p>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              ← Sabhi Articles Dekhein
            </Link>
          </div>
        ) : (
          <ArticlesClient articles={categoryArticles} showHero={false} />
        )}
      </div>
    </>
  );
}
