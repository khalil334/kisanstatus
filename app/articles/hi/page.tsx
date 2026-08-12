import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getHindiArticlesByFreshness, HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { CATEGORIES } from '@/lib/articles-data';
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

export const revalidate = 3600;

const PAGE_URL = `${SITE_URL}/articles/hi`;
const PAGE_TITLE = `हिंदी योजना गाइड — ${HINDI_ARTICLES.length} आसान गाइड | ${SITE_NAME}`;
const PAGE_DESC =
  'पीएम किसान, कर्ज माफी, ट्रैक्टर सब्सिडी, KCC और मंडी भाव — सभी योजना गाइड आसान हिंदी में। हर गाइड step-by-step, बिना मुश्किल शब्दों के।';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESC,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'hi-IN': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'KisanStatus हिंदी योजना गाइड' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    site: '@kisanstatus',
    creator: '@kisanstatus',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
  category: 'Agriculture & Farming',
};

export default function HindiArticlesHubPage() {
  const articles = getHindiArticlesByFreshness();

  const orgPublisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: LOGO_URL, width: LOGO_WIDTH, height: LOGO_HEIGHT },
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: orgPublisher,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((a, i) => {
        const url = `${SITE_URL}/articles/${a.slug}`;
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Article',
            '@id': url,
            url,
            name: a.titleHi,
            headline: a.titleHi,
            description: a.desc,
            image: a.ogImage.startsWith('http') ? a.ogImage : `${SITE_URL}${a.ogImage}`,
            inLanguage: 'hi-IN',
            datePublished: a.publishedTime,
            dateModified: a.modifiedTime,
            author: { '@type': 'Person', name: a.author, url: AUTHOR_URL },
            publisher: orgPublisher,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
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
      { '@type': 'ListItem', position: 2, name: 'All Guides & Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: 'हिंदी योजना गाइड', item: PAGE_URL },
    ],
  };

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
                <Link href="/articles" className="hover:text-amber-700 dark:hover:text-amber-400">All Guides</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-gray-900 dark:text-white">हिंदी गाइड</li>
            </ol>
          </nav>

          <div className="mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-800 dark:text-amber-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-amber-200/50 dark:border-amber-700/50">
              <span aria-hidden="true">अ</span>
              <span>हिंदी गाइड</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              हिंदी में योजना गाइड
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl">
              पीएम किसान, कर्ज माफी, सब्सिडी, KCC और मंडी भाव — सभी {articles.length} गाइड आसान हिंदी में, step-by-step।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => {
              const categoryInfo = CATEGORIES[a.category] as { name: string; nameHi: string; icon: string } | undefined;
              const emoji = categoryInfo?.icon || '📄';
              const categoryName = categoryInfo?.nameHi || categoryInfo?.name || 'Guide';
              return (
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
                      <span className="absolute bottom-3 left-4 text-2xl drop-shadow-lg z-20" aria-hidden="true">{emoji}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 w-fit mb-4 border border-amber-200/50 dark:border-amber-700/50">
                      <span className="text-base" aria-hidden="true">{emoji}</span>
                      <span>{categoryName}</span>
                    </span>
                    <h2 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300 mb-3 line-clamp-2">
                      {a.titleHi}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">{a.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">✍️ Manish Kumar</span>
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
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-300 hover:underline"
            >
              सभी guides (Hinglish + हिंदी) देखें →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
