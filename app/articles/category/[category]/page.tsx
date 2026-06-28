/**
 * app/articles/category/[category]/page.tsx — SERVER COMPONENT
 * ✅ SSG — generateStaticParams se saari category pages build time par banengi
 * ✅ Unique metadata har category ke liye
 * ✅ JSON-LD CollectionPage schema
 * ✅ Same design as ArticlesClient
 * ✅ SEO v3.0: Keywords removed, og:locale fixed to en_IN
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, CATEGORIES, type CategorySlug } from '@/lib/articles-data';

const DOMAIN = 'https://kisanstatus.com';

export const revalidate = 86400;

// ── Category-wise metadata for SEO ─────────────────────────────────────────
const CATEGORY_SEO: Record<CategorySlug, { title: string; description: string; emoji: string }> = {
  'status-check': {
    title: 'PM Kisan Status Check Guides 2026 — Kist, FTO, Land Seeding',
    description: 'PM Kisan status check, 23vi/24vi kist, FTO generated, land seeding, beneficiary list — sab guides Hindi mein. Free aur simple.',
    emoji: '📊',
  },
  'ekyc': {
    title: 'PM Kisan eKYC Guides 2026 — Aadhaar OTP & CSC Verification',
    description: 'PM Kisan eKYC kaise karein — ghar baithe Aadhaar OTP se ya CSC center par biometric se. Complete guide Hindi mein.',
    emoji: '🔐',
  },
  'payment': {
    title: 'PM Kisan Payment Issues 2026 — Failed, Rejected, RFT, PFMS Fix',
    description: 'PM Kisan payment fail, rejected list, RFT signed, PFMS pending — sabhi payment problems ke solutions step-by-step Hindi mein.',
    emoji: '💸',
  },
  'loan': {
    title: 'Kisan Loan & KCC Guides 2026 — Credit Card, Tractor Loan, Bank Loan',
    description: 'Kisan Credit Card (KCC) online apply, tractor loan bina down payment, bank loan kaise le — complete guide Hindi mein.',
    emoji: '💰',
  },
  'registration': {
    title: 'PM Kisan Registration Guide 2026 — Naye Kisan Kaise Register Karein',
    description: 'PM Kisan Samman Nidhi mein naye farmer kaise register karein — eligibility, documents, step-by-step process Hindi mein.',
    emoji: '📝',
  },
  'farming': {
    title: 'Farming Schemes 2026 — Soil Health Card, PMFBY, AgriStack, Nano DAP',
    description: 'Soil Health Card, PMFBY crop insurance, AgriStack farmer ID, Nano DAP price — sabhi farming schemes ki complete guide.',
    emoji: '🌱',
  },
  'correction': {
    title: 'PM Kisan Correction Guides 2026 — Name, Mobile, Aadhaar, Bank Fix',
    description: 'PM Kisan naam correction, mobile number change, Aadhaar mismatch fix, bank account update — sab online kaise karein.',
    emoji: '✏️',
  },
};

// ── Generate all category pages at build time (SSG) ────────────────────────
export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({
    category,
  }));
}

// ── Dynamic metadata for each category ─────────────────────────────────────
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
    // ❌ BUG 1 FIXED: keywords COMPLETELY REMOVED
    authors: [{ name: 'Sidhu Singh', url: `${DOMAIN}/about` }],
    alternates: { canonical: url }, // ✅ Canonical already present
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url,
      siteName: 'KisanStatus.com',
      locale: 'en_IN', // ✅ BUG 3 FIXED: en_IN for Hinglish content
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

// ── Category page component ────────────────────────────────────────────────
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES[category as CategorySlug];
  const seo = CATEGORY_SEO[category as CategorySlug];

  // Agar invalid category aayi toh 404
  if (!cat || !seo) {
    notFound();
  }

  const articles = ARTICLES.filter((a) => a.category === category);
  const url = `${DOMAIN}/articles/category/${category}`;

  // JSON-LD CollectionPage schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: seo.title,
    description: seo.description,
    url,
    inLanguage: 'en-IN', // ✅ BUG 3: Consistent with og:locale
    isPartOf: { '@type': 'WebSite', name: 'KisanStatus.com', url: DOMAIN },
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

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: url },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="py-10 md:py-14"
          style={{ background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)' }}
        >
          <div className="container-site text-center">
            {/* Breadcrumb */}
            <nav className="text-green-300 text-xs mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-bold">{cat.name}</span>
            </nav>

            <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              {seo.emoji} {cat.name} Guides
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
              {seo.title}
            </h1>
            <p className="text-green-200 text-sm md:text-base max-w-xl mx-auto mb-4">
              {seo.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-green-300 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">
                📚 {articles.length} Articles
              </span>
            </div>
          </div>
        </section>

        {/* Category Filter Buttons */}
        <div className="container-site py-6">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Link
              href="/articles"
              className="px-4 py-2 rounded-full text-sm font-bold bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-all"
            >
              📚 Saare ({ARTICLES.length})
            </Link>
            {Object.entries(CATEGORIES).map(([slug, c]) => {
              const count = ARTICLES.filter((a) => a.category === slug).length;
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
                >
                  {c.name} ({count})
                </Link>
              );
            })}
          </div>

          {/* Articles Grid */}
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Is category mein abhi koi article nahi hai.</p>
              <Link
                href="/articles"
                className="text-green-700 font-bold hover:underline mt-4 inline-block"
              >
                ← Saare Articles Dekho
              </Link>
            </div>
          ) : (
            <section>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{seo.emoji}</span>
                <h2 className="text-lg font-black text-gray-900">{cat.name} Articles</h2>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {articles.length} articles
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full border border-gray-200 hover:border-green-300"
                  >
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start bg-green-100 text-green-700 mb-3">
                        {seo.emoji} {cat.name}
                      </span>
                      <p className="font-black text-gray-900 text-sm leading-snug group-hover:text-green-700 transition-colors mb-2">
                        {article.title}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
                        {article.desc}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">✍️ Sidhu Singh</span>
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

          {/* Back to All Articles */}
          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg"
            >
              📚 Saare Articles Dekho
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}