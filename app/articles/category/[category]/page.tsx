/**
 * app/articles/category/[category]/page.tsx — SERVER COMPONENT
 * SSG with generateStaticParams — all category pages built at build time
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ARTICLES, CATEGORIES, type CategorySlug, getCategoryInfo } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const revalidate = 86400;

// ═══════════════════════════════════════════════════════════
// CATEGORY SEO CONFIG
// ═══════════════════════════════════════════════════════════

const CATEGORY_SEO: Record<CategorySlug, { title: string; description: string; emoji: string; keywords: string[] }> = {
  'status-check': {
    title: 'PM Kisan Status Check 2026 — Beneficiary Verification, Installment Status, FTO',
    description: 'PM Kisan status check, 23vi/24vi installment verification, FTO meaning, land seeding status, beneficiary list — sab ek jagah.',
    emoji: '📊',
    keywords: ['pm kisan status check', 'beneficiary verification', 'installment status 2026', 'fto meaning'],
  },
  'ekyc': {
    title: 'PM Kisan eKYC 2026 — OTP & Biometric Verification Guide',
    description: 'PM Kisan eKYC kaise karein — ghar baithe OTP se ya CSC center par biometric fingerprint se. Step-by-step Hinglish guide.',
    emoji: '🔐',
    keywords: ['pm kisan ekyc', 'biometric verification', 'otp authentication', 'csc ekyc'],
  },
  'payment': {
    title: 'PM Kisan Payment Issues 2026 — Failed, Rejected, DBT Problems Fix',
    description: 'Payment fail, rejected list, RFT signed, PFMS pending, DBT transfer issues — sabhi payment problems ke tested solutions.',
    emoji: '💸',
    keywords: ['pm kisan payment failed', 'rejected list fix', 'dbt transfer problem', 'rft signed meaning'],
  },
  'loan': {
    title: 'Kisan Loan Guide 2026 — KCC, Tractor Loan, Agricultural Credit',
    description: 'Kisan Credit Card (KCC) online apply 4% interest mein, tractor loan bina down payment, agricultural credit kaise le.',
    emoji: '💰',
    keywords: ['kisan credit card', 'tractor loan', 'agricultural credit', 'kcc apply online'],
  },
  'registration': {
    title: 'PM Kisan Registration 2026 — Naye Kisan Kaise Apply Karein',
    description: 'PM Kisan scheme mein naye farmer kaise register karein — eligibility, documents, online application process.',
    emoji: '📝',
    keywords: ['pm kisan registration', 'new farmer enrollment', 'apply online 2026'],
  },
  'farming': {
    title: 'Agricultural Schemes 2026 — Soil Card, PMFBY, AgriStack, Nano DAP',
    description: 'Soil Health Card, PMFBY crop insurance, AgriStack digital ID, Nano DAP pricing — complete farming schemes information.',
    emoji: '🌱',
    keywords: ['soil health card', 'pmfby crop insurance', 'agristack', 'nano dap price'],
  },
  'correction': {
    title: 'PM Kisan Correction 2026 — Name, Mobile, Bank Account Fix',
    description: 'Naam correction, mobile number change, bank account update, Aadhaar mismatch fix — sab correction guides.',
    emoji: '✏️',
    keywords: ['pm kisan name correction', 'mobile number change', 'bank account update'],
  },
  'mandi': {
    title: 'Aaj Ka Mandi Bhav 2026 — Sabzi & Fruit Rates Daily Update',
    description: 'Aaj ka mandi bhav — aloo, pyaaz, tamatar ke wholesale rates. Daily updated market prices across Indian mandis.',
    emoji: '🏪',
    keywords: ['aaj ka mandi bhav', 'sabzi rates', 'fruit prices today'],
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
  const catInfo = CATEGORIES[category as CategorySlug];

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
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

  const articles = ARTICLES.filter((a) => a.category === category);

  // Category counts for filter pills
  const categoryCounts: Record<string, number> = {};
  for (const slug of Object.keys(CATEGORIES)) {
    categoryCounts[slug] = ARTICLES.filter((a) => a.category === slug).length;
  }

  const url = `${SITE_URL}/articles/category/${category}`;

  // Schemes mentioned in this category
  const schemesInCategory = [...new Set(
    articles.flatMap((a) => a.schemes ?? [])
  )];

  // Collection Schema (SEO)
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
      { '@type': 'ListItem', position: 3, name: cat.nameHi || cat.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-[var(--color-bg)]">
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
              <span className="text-white font-bold">{cat.nameHi || cat.name}</span>
            </nav>

            <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              {seo.emoji} {cat.nameHi || cat.name}
            </span>
            <h1 id="category-heading" className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
              {seo.title}
            </h1>
            <p className="text-green-200 text-sm md:text-base max-w-2xl mx-auto mb-4 leading-relaxed">
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
              className="px-4 py-2 rounded-full text-sm font-bold bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)] transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                      : 'bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {c.icon} {c.nameHi || c.name} ({count})
                </Link>
              );
            })}
          </div>

          {/* Articles Grid or Empty State */}
          {articles.length === 0 ? (
            <div className="text-center py-16 bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)]">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-[var(--color-text-muted)] text-lg mb-4">Is category mein abhi koi resource nahi hai.</p>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                ← Saare Resources Dekho
              </Link>
            </div>
          ) : (
            <section aria-labelledby="articles-heading">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">{seo.emoji}</span>
                <h2 id="articles-heading" className="text-lg font-black text-[var(--color-text)]">
                  {cat.nameHi || cat.name} Resources
                </h2>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-0.5 rounded-full">
                  {articles.length} articles
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="bg-[var(--color-card)] rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full border border-[var(--color-border)] hover:border-green-500 dark:hover:border-green-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    aria-label={`Read: ${article.title}`}
                  >
                    {article.ogImage && (
                      <div className="relative h-40 w-full overflow-hidden bg-[var(--color-bg-alt)] shrink-0">
                        <Image
                          src={article.ogImage}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 mb-3">
                        {seo.emoji} {cat.nameHi || cat.name}
                      </span>
                      <h3 className="font-black text-[var(--color-text)] text-sm leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-3 flex-1">
                        {article.desc}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[var(--color-border)]">
                        <span className="text-[11px] text-[var(--color-text-muted)]">✍️ {AUTHOR_NAME}</span>
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
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            >
              📚 Saare Resources Dekho
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}