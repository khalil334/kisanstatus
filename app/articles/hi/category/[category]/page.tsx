import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getHindiArticlesByCategory, HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { CATEGORIES, type CategorySlug } from '@/lib/categories';
import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_NAME,
  AUTHOR_URL,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT,
} from '@/lib/site-config';

const CATEGORY_DATA: Record<CategorySlug, {
  title: string;
  description: string;
  keywords: string[];
}> = {
  'status-check': {
    title: 'पीएम किसान स्टेटस चेक और सत्यापन — हिंदी गाइड',
    description:
      'पीएम किसान किस्त, बेनिफिशियरी लिस्ट, eKYC, NPCI आधार सीडिंग और रिकवरी नोटिस — स्टेटस से जुड़ी हर समस्या की step-by-step हिंदी गाइड।',
    keywords: ['पीएम किसान स्टेटस', 'pm kisan status hindi', 'किस्त कब आएगी', 'ekyc kaise kare', 'बेनिफिशियरी लिस्ट'],
  },
  'loan': {
    title: 'किसान लोन और क्रेडिट — हिंदी गाइड',
    description:
      'KCC लिमिट कैसे बढ़ाएं, कर्ज माफी लिस्ट में नाम कैसे देखें और किसान क्रेडिट कार्ड के नियम — किसान लोन और क्रेडिट की हर समस्या की step-by-step आसान हिंदी गाइड यहां पढ़ें।',
    keywords: ['किसान लोन', 'kcc limit', 'कर्ज माफी लिस्ट', 'किसान क्रेडिट कार्ड हिंदी'],
  },
  'farming': {
    title: 'खेती और योजनाएं — हिंदी गाइड',
    description:
      'Farmer ID कार्ड, फसल बीमा और खेती से जुड़ी सरकारी योजनाओं की आसान हिंदी गाइड — step-by-step, बिना मुश्किल शब्दों के।',
    keywords: ['farmer id card hindi', 'खेती योजना', 'किसान योजना हिंदी'],
  },
  'mandi': {
    title: 'मंडी भाव और बाजार दरें — हिंदी गाइड',
    description:
      'गेहूं का आज का रेट, MSP vs मंडी भाव और अपनी मंडी की ताज़ा दरें — फसल बेचने से पहले सही भाव जानने का आसान तरीका, सब सरल हिंदी में एक जगह।',
    keywords: ['गेहूं का रेट आज', 'मंडी भाव हिंदी', 'msp रेट'],
  },
  'pashupalan': {
    title: 'पशुपालन और मत्स्य पालन — हिंदी गाइड',
    description:
      'गौ मूत्र खरीद योजना, डेयरी लोन और मत्स्य पालन — पशुपालन से जुड़ी हर सरकारी योजना की पात्रता, सब्सिडी और आवेदन का तरीका, आसान हिंदी में।',
    keywords: ['पशुपालन योजना', 'गौ मूत्र खरीद योजना', 'pashupalan yojana hindi'],
  },
  'agri-business': {
    title: 'कृषि व्यवसाय और सब्सिडी — हिंदी गाइड',
    description:
      'ट्रैक्टर सब्सिडी, नमो ड्रोन दीदी योजना और कृषि व्यवसाय की सरकारी स्कीमें — पात्रता, सब्सिडी की रकम और आवेदन का पूरा तरीका, आसान हिंदी में।',
    keywords: ['ट्रैक्टर सब्सिडी', 'नमो ड्रोन दीदी योजना', 'कृषि सब्सिडी हिंदी'],
  },
};

export const revalidate = 86400;

export async function generateStaticParams() {
  // Only categories that actually have Hindi articles get a page.
  const withArticles = new Set(HINDI_ARTICLES.map((a) => a.category));
  return [...withArticles].map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryData = CATEGORY_DATA[category as CategorySlug];
  const categoryInfo = CATEGORIES[category as CategorySlug];

  if (!categoryData || !categoryInfo) {
    notFound();
  }

  const url = `${SITE_URL}/articles/hi/category/${category}`;

  return {
    title: categoryData.title,
    description: categoryData.description,
    keywords: categoryData.keywords,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: {
      canonical: url,
      languages: { 'hi-IN': url, 'x-default': url },
    },
    openGraph: {
      title: categoryData.title,
      description: categoryData.description,
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: categoryData.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: categoryData.title,
      description: categoryData.description,
      site: '@kisanstatus',
      images: [DEFAULT_OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function HindiCategoryPage({
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

  const articles = getHindiArticlesByCategory(category as CategorySlug);
  const url = `${SITE_URL}/articles/hi/category/${category}`;

  const orgPublisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: LOGO_URL, width: LOGO_WIDTH, height: LOGO_HEIGHT },
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryData.title,
    description: categoryData.description,
    url,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: orgPublisher,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((a, i) => {
        const articleUrl = `${SITE_URL}/articles/${a.slug}`;
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Article',
            '@id': articleUrl,
            url: articleUrl,
            name: a.titleHi,
            headline: a.titleHi,
            description: a.desc,
            image: a.ogImage.startsWith('http') ? a.ogImage : `${SITE_URL}${a.ogImage}`,
            inLanguage: 'hi-IN',
            datePublished: a.publishedTime,
            dateModified: a.modifiedTime,
            author: { '@type': 'Person', name: a.author, url: AUTHOR_URL },
            publisher: orgPublisher,
            mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
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
      { '@type': 'ListItem', position: 2, name: 'हिंदी गाइड', item: `${SITE_URL}/articles/hi` },
      { '@type': 'ListItem', position: 3, name: categoryInfo.nameHi, item: url },
    ],
  };

  const otherCategories = (Object.keys(CATEGORIES) as CategorySlug[]).filter(
    (c) => c !== category && HINDI_ARTICLES.some((a) => a.category === c),
  );

  return (
    <main lang="hi" className="min-h-screen bg-amber-50/40 dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-16 md:py-20">
        <div className="container-site mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber-700 dark:hover:text-amber-400">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles/hi" className="hover:text-amber-700 dark:hover:text-amber-400">हिंदी गाइड</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-gray-900 dark:text-white">
                {categoryInfo.nameHi}
              </li>
            </ol>
          </nav>

          <div className="mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-800 dark:text-amber-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-amber-200/50 dark:border-amber-700/50">
              <span aria-hidden="true">अ</span>
              <span>हिंदी गाइड</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              {categoryInfo.nameHi}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl">
              {categoryInfo.descriptionHi} — {articles.length} गाइड आसान हिंदी में।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col no-underline h-full border border-amber-200/60 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-amber-900/10 dark:hover:shadow-black/30 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <Link href={`/articles/${a.slug}`} className="sr-only" aria-label={`पढ़ें: ${a.titleHi}`}>
                  {a.titleHi}
                </Link>
                <div className="relative overflow-hidden">
                  <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={a.ogImage}
                      alt={a.titleHi}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                      loading="lazy"
                      decoding="async"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300 mb-3 line-clamp-2">
                    {a.titleHi}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">{a.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{AUTHOR_NAME}</span>
                    <Link
                      href={`/articles/${a.slug}`}
                      className="text-sm font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5"
                      aria-label={`पढ़ें: ${a.titleHi}`}
                    >
                      पढ़ें
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {otherCategories.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">दूसरी श्रेणियां</h2>
              <div className="flex flex-wrap gap-3">
                {otherCategories.map((c) => (
                  <Link
                    key={c}
                    href={`/articles/hi/category/${c}`}
                    className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 shadow-sm transition-colors"
                  >
                    {CATEGORIES[c].nameHi}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="text-center mt-14">
            <Link
              href="/articles/hi"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-300 hover:underline"
            >
              सभी हिंदी गाइड देखें →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
