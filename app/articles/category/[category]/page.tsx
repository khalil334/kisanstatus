/**
 * app/articles/category/[category]/page.tsx — SERVER COMPONENT
 * SSG with generateStaticParams — all category pages built at build time
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const revalidate = 86400;

// Safe accessor for optional nameHi field
// CATEGORIES type mein nameHi abhi nahi hai — jab add hoga toh yeh automatically kaam karega
function getCatName(cat: { name: string; nameHi?: string }): string {
  return cat.nameHi || cat.name;
}

// ═══════════════════════════════════════════════════════════
// CATEGORY SEO CONFIG
// Eventually merge into CATEGORIES in articles-data.ts
// ═══════════════════════════════════════════════════════════

const CATEGORY_SEO: Record<CategorySlug, { title: string; description: string; emoji: string }> = {
  'status-check': {
    title: 'Beneficiary Verification Guides 2026 — Installment Status, FTO, Land Integration',
    description: 'Scheme status check, 23vi/24vi installment, monetary transfer directive, land record linking — sab processes Hinglish mein.',
    emoji: '📊',
  },
  'ekyc': {
    title: 'Digital Authentication Guides 2026 — Biometric OTP & CSC Verification',
    description: 'Biometric authentication kaise karein — ghar baithe OTP se ya CSC center par fingerprint se.',
    emoji: '🔐',
  },
  'payment': {
    title: 'Credit Transfer Issues 2026 — Failed, Rejected, RFT, PFMS Solutions',
    description: 'Payment fail, rejected list, RFT signed, PFMS pending — sabhi transfer problems ke tested solutions.',
    emoji: '💸',
  },
  'loan': {
    title: 'Agricultural Credit & KCC Guides 2026 — Credit Card, Tractor Finance, Bank Loans',
    description: 'Kisan Credit Card (KCC) online apply, tractor loan bina down payment, bank credit kaise le.',
    emoji: '💰',
  },
  'registration': {
    title: 'Scheme Enrollment Guide 2026 — Naye Kisan Kaise Register Karein',
    description: 'Agrarian welfare program mein naye farmer kaise register karein — eligibility, documents, process.',
    emoji: '📝',
  },
  'farming': {
    title: 'Agricultural Programs 2026 — Soil Analysis, Crop Insurance, Digital ID, Nano Fertilizer',
    description: 'Soil health analysis, crop insurance, digital farmer ID, nano fertilizer pricing — complete information.',
    emoji: '🌱',
  },
  'correction': {
    title: 'Identity Rectification Guides 2026 — Name, Mobile, Biometric, Bank Update',
    description: 'Naam correction, mobile number change, biometric credential mismatch fix, bank account update.',
    emoji: '✏️',
  },
  'mandi': {
    title: 'Market Rates Today 2026 — Live Vegetable aur Fruit Prices',
    description: 'Aaj ka mandi bhav — aloo, pyaaz, tamatar ke wholesale rates. Daily updated market prices.',
    emoji: '🏪',
  },
};

// ═══════════════════════════════════════════════════════════
// STATIC PARAMS & METADATA
// ═══════════════════════════════════════════════════════════

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const seo = CATEGORY_SEO[category as CategorySlug];
  if (!seo) return { title: 'Category Not Found' };

  const url = `${SITE_URL}/articles/category/${category}`;

  return {
    title: seo.title,
    description: seo.description,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: seo.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      site: '@kisanstatus',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// ═══════════════════════════════════════════════════════════
// PAGE RENDERER
// ═══════════════════════════════════════════════════════════

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES[category as CategorySlug];
  const seo = CATEGORY_SEO[category as CategorySlug];

  if (!cat || !seo) notFound();

  // Single pass filter + counts
  const articles = ARTICLES.filter((a) => a.category === category);

  const categoryCounts: Record<string, number> = {};
  for (const slug of Object.keys(CATEGORIES)) {
    categoryCounts[slug] = 0;
  }
  for (const a of ARTICLES) {
    if (categoryCounts[a.category] !== undefined) {
      categoryCounts[a.category]++;
    }
  }

  const url = `${SITE_URL}/articles/category/${category}`;

  const schemesInCategory = [...new Set(
    articles.flatMap((a) => a.schemes ?? [])
  )];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: seo.title,
    description: seo.description,
    url,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    numberOfItems: articles.length,
    keywords: articles.flatMap((a) => a.keywords.slice(0, 3)).join(', '),
    about: schemesInCategory.map((s) => ({ '@type': 'Thing', name: s })),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/articles/${a.slug}`,
        name: a.title,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: getCatName(cat), item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-gray-50 dark:bg-[var(--color-bg)]">
        {/* Hero Section */}
        <section
          className="py-10 md:py-14 bg-gradient-to-br from-green-950 via-green-900 to-green-800"
          aria-labelledby="category-heading"
        >
          <div className="container-site text-center">
            <nav className="text-green-300 text-xs mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-bold">{getCatName(cat)}</span>
            </nav>

            <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              {seo.emoji} {getCatName(cat)} Resources
            </span>
            <h1 id="category-heading" className="text-2xl md:text-4xl font-black text-white mb-3">
              {seo.title}
            </h1>
            <p className="text-green-200 text-sm md:text-base max-w-xl mx-auto mb-4">
              {seo.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-green-300 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">📚 {articles.length} Resources</span>
            </div>
          </div>
        </section>

        <div className="container-site py-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="navigation" aria-label="Category filters">
            <Link
              href="/articles"
              className="px-4 py-2 rounded-full text-sm font-bold bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              📚 Saare ({ARTICLES.length})
            </Link>
            {Object.entries(CATEGORIES).map(([slug, c]) => {
              const count = categoryCounts[slug] || 0;
              if (count === 0) return null;
              const isActive = slug === category;
              return (
                <Link
                  key={slug}
                  href={`/articles/category/${slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    isActive
                      ? 'bg-[#14532d] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {getCatName(c)} ({count})
                </Link>
              );
            })}
          </div>

          {/* Articles Grid or Empty State */}
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Is category mein abhi koi resource nahi hai.</p>
              <Link href="/articles" className="text-green-700 font-bold hover:underline mt-4 inline-block focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                ← Saare Resources Dekho
              </Link>
            </div>
          ) : (
            <section aria-labelledby="articles-heading">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl" aria-hidden="true">{seo.emoji}</span>
                <h2 id="articles-heading" className="text-lg font-black text-gray-900 dark:text-[var(--color-text)]">
                  {getCatName(cat)} Resources
                </h2>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {articles.length} resources
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="bg-white dark:bg-[var(--color-card)] rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full border border-gray-200 dark:border-[var(--color-border)] hover:border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    aria-label={`Read: ${article.title}`}
                  >
                    {article.ogImage && (
                      <div className="relative h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                        <Image
                          src={article.ogImage}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 mb-3">
                        {seo.emoji} {getCatName(cat)}
                      </span>
                      <h3 className="font-black text-gray-900 dark:text-[var(--color-text)] text-sm leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-[var(--color-text-muted)] leading-relaxed line-clamp-3 flex-1">
                        {article.desc}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-[var(--color-border)]">
                        <span className="text-[11px] text-gray-400">✍️ {AUTHOR_NAME}</span>
                        <span className="text-xs font-bold text-green-700 dark:text-green-400 group-hover:translate-x-1 transition-transform inline-block">
                          Padho →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            >
              📚 Saare Resources Dekho
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}