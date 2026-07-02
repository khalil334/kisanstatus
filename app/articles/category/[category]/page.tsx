/**
 * app/articles/category/[category]/page.tsx — SERVER COMPONENT
 * SSG with generateStaticParams — all category pages built at build time
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';

const DOMAIN = 'https://kisanstatus.com';

export const revalidate = 86400;

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

  const url = `${DOMAIN}/articles/category/${category}`;

  return {
    title: seo.title,
    description: seo.description,
    authors: [{ name: 'KisanStatus Team', url: `${DOMAIN}/about` }],
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url,
      siteName: 'KisanStatus',
      locale: 'hi_IN',
      images: [{ url: `${DOMAIN}/og-image.webp`, width: 1200, height: 630, alt: seo.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      site: '@kisanstatus',
      images: [`${DOMAIN}/og-image.webp`],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES[category as CategorySlug];
  const seo = CATEGORY_SEO[category as CategorySlug];

  if (!cat || !seo) notFound();

  // Filter once, use everywhere
  const articles = ARTICLES.filter((a) => a.category === category);
  const url = `${DOMAIN}/articles/category/${category}`;

  // SEO: Fixed language to hi-IN
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: seo.title,
    description: seo.description,
    url,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: 'KisanStatus', url: DOMAIN },
    numberOfItems: articles.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${DOMAIN}/articles/${a.slug}`,
        name: a.title,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: url },
    ],
  };

  // Pre-calculate category counts
  const categoryCounts = Object.fromEntries(
    Object.keys(CATEGORIES).map((slug) => [
      slug,
      ARTICLES.filter((a) => a.category === slug).length,
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-gray-50">
        <section
          className="py-10 md:py-14"
          style={{ background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)' }}
          aria-labelledby="category-heading"
        >
          <div className="container-site text-center">
            <nav className="text-green-300 text-xs mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-bold">{cat.name}</span>
            </nav>

            <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              {seo.emoji} {cat.name} Resources
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
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="navigation" aria-label="Category filters">
            <Link
              href="/articles"
              className="px-4 py-2 rounded-full text-sm font-bold bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-all"
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
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#14532d] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {c.name} ({count})
                </Link>
              );
            })}
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Is category mein abhi koi resource nahi hai.</p>
              <Link href="/articles" className="text-green-700 font-bold hover:underline mt-4 inline-block">
                ← Saare Resources Dekho
              </Link>
            </div>
          ) : (
            <section aria-labelledby="articles-heading">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl" aria-hidden="true">{seo.emoji}</span>
                <h2 id="articles-heading" className="text-lg font-black text-gray-900">{cat.name} Resources</h2>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {articles.length} resources
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full border border-gray-200 hover:border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    aria-label={`Read: ${article.title}`}
                  >
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start bg-green-100 text-green-700 mb-3">
                        {seo.emoji} {cat.name}
                      </span>
                      <h3 className="font-black text-gray-900 text-sm leading-snug group-hover:text-green-700 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">{article.desc}</p>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">✍️ KisanStatus Team</span>
                        <span className="text-xs font-bold text-green-700 group-hover:translate-x-1 transition-transform inline-block">
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