'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ARTICLES, getLatestArticles, CATEGORIES } from '@/lib/articles-data';

const TOP_ARTICLES_LIMIT = 3;

/* ─── Article Card (unchanged) ─── */
function ArticleImage({ image, emoji, title }: { image: string; emoji: string; title: string }) {
return (
  <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0" style={{ aspectRatio: '16/9' }}>
    {image ? (
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
        loading="lazy"
        decoding="async"
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700" role="img" aria-label={title}>
        <span className="text-6xl" aria-hidden="true">{emoji}</span>
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
    <span className="absolute bottom-3 left-4 text-2xl drop-shadow-lg z-20" aria-hidden="true">{emoji}</span>
  </div>
);
}

function ArticleCard({ article, showNewBadge = false }: { article: typeof ARTICLES[0]; showNewBadge?: boolean }) {
const categoryInfo = CATEGORIES[article.category] as { name: string; nameHi: string; icon: string } | undefined;
const emoji = categoryInfo?.icon || '';
const categoryName = categoryInfo?.nameHi || categoryInfo?.name || 'Article';

return (
  <article className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col no-underline h-full border transition-all duration-500 ease-out ${
    showNewBadge
      ? 'border-green-500/50 dark:border-green-600/50 shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20'
      : 'border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-black/30'
  } hover:-translate-y-2`}>
    <Link href={`/articles/${article.slug}`} className="sr-only" aria-label={`Padhein: ${article.title}`}>
      {article.title}
    </Link>
    <div className="relative overflow-hidden">
      <ArticleImage image={article.ogImage || ''} emoji={emoji} title={article.title} />
      {showNewBadge && (
        <div className="absolute top-4 right-4 z-30">
          <span className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            NEW
          </span>
        </div>
      )}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 w-fit mb-4 border border-green-200/50 dark:border-green-700/50">
        <span className="text-base">{emoji}</span>
        <span>{categoryName}</span>
      </span>
      <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300 mb-3 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">
        {article.desc}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">✍️ KisanStatus Team</span>
        <Link href={`/articles/${article.slug}`} className="text-sm font-bold text-green-700 dark:text-green-400 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5" aria-label={`Padhein: ${article.title}`}>
          Padhein
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </div>
  </article>
);
}

/* ─── Hybrid Homepage: Best of Both ─── */
export default function HomeContent() {
const latestArticles = getLatestArticles(TOP_ARTICLES_LIMIT);
const allArticles = ARTICLES;

return (
  <main className="min-h-screen bg-white dark:bg-gray-900">
    
    {/* ═══════════════════════════════════════
        HERO — Purana Style (Direct CTA) + Naya Search
        ═══════════════════════════════════════ */}
    <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 dark:from-green-900 dark:via-green-800 dark:to-emerald-900 py-16 md:py-24 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" aria-hidden="true" />
      
      <div className="container-site mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
            <span aria-hidden="true">🌾</span>
            India Ka #1 PM Kisan Portal
          </div>
          
          {/* Headline — PURANA STYLE (Direct) */}
          <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            PM Kisan Status
            <span className="block text-green-200">Check 2026</span>
          </h1>
          
          {/* Subheadline — PURANA STYLE */}
          <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            24vi kist <span className="font-bold text-white">October 2026</span> mein aane wali hai! 
            <span className="font-bold text-white"> ₹2,000</span> seedha bank account mein.
            Status verify karo, eKYC complete karo — sab kuch <span className="font-bold text-white">bilkul free!</span>
          </p>
          
          {/* Search Bar — NAYA STYLE */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Search: PM Kisan, KCC Loan, Tractor Subsidy..." 
                className="w-full px-5 py-4 pl-12 rounded-xl border-0 text-gray-900 placeholder-gray-400 text-sm bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true">🔍</span>
            </div>
            <button className="px-8 py-4 bg-yellow-300 hover:bg-yellow-200 text-green-900 font-bold rounded-xl text-sm transition-colors shadow-xl whitespace-nowrap">
              Search
            </button>
          </div>
          
          {/* CTA Buttons — PURANA STYLE */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/articles/PmKisan24viKist2026" className="group inline-flex items-center gap-2.5 bg-white text-green-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
              <span className="text-xl" aria-hidden="true">📅</span>
              <span>24vi Kist Status</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/articles" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30">
              <span className="text-xl" aria-hidden="true">📚</span>
              <span>Sabhi Articles</span>
            </Link>
          </div>
          
          {/* Trust pills — NAYA STYLE */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-green-200">
            <span className="px-3 py-1.5 bg-white/10 rounded-full">✅ 11 Cr+ Registered Kisan</span>
            <span className="px-3 py-1.5 bg-white/10 rounded-full">✅ 50+ Govt Schemes</span>
            <span className="px-3 py-1.5 bg-white/10 rounded-full">✅ 100% Free Tools</span>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        TRUST STATS — NAYA STYLE
        ═══════════════════════════════════════ */}
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="sr-only">Trust Indicators</h2>
      <div className="container-site mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '11 Cr+', label: 'Registered Kisan' },
            { value: '50+', label: 'Govt Schemes' },
            { value: '₹6,000', label: 'Annual Benefit' },
            { value: '4.8★', label: 'User Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-green-600 dark:text-green-400">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        PRODUCT CATEGORIES — NAYA STYLE
        ═══════════════════════════════════════ */}
    <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="tools-heading">
      <div className="container-site mx-auto px-4">
        <div className="text-center mb-14">
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Explore Kisan Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
            Har kisan ki zaroorat ke tools — ek jagah, bilkul free
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { 
              href: '/articles/PmKisan24viKist2026', 
              icon: '💰', 
              bg: 'bg-green-50 dark:bg-green-900/20', 
              border: 'border-green-200 dark:border-green-800',
              iconBg: 'bg-green-100 dark:bg-green-800',
              title: 'PM Kisan Status', 
              desc: '24vi kist kab aayegi? Status check, eKYC, beneficiary list — sab yahan.' 
            },
            { 
              href: '/articles/KisanCreditCardOnlineApply2026', 
              icon: '💳', 
              bg: 'bg-blue-50 dark:bg-blue-900/20', 
              border: 'border-blue-200 dark:border-blue-800',
              iconBg: 'bg-blue-100 dark:bg-blue-800',
              title: 'KCC Loan', 
              desc: '₹5 Lakh tak loan, 4% interest. Online apply process aur document checklist.' 
            },
            { 
              href: '/articles/KisanTractorLoan2026', 
              icon: '🚜', 
              bg: 'bg-amber-50 dark:bg-amber-900/20', 
              border: 'border-amber-200 dark:border-amber-800',
              iconBg: 'bg-amber-100 dark:bg-amber-800',
              title: 'Tractor Subsidy', 
              desc: 'SMAM subsidy 35-50%. Bina down payment ke tractor kaise lein.' 
            },
            { 
              href: '/calculator/kcc-loan-emi', 
              icon: '🧮', 
              bg: 'bg-purple-50 dark:bg-purple-900/20', 
              border: 'border-purple-200 dark:border-purple-800',
              iconBg: 'bg-purple-100 dark:bg-purple-800',
              title: 'EMI Calculator', 
              desc: 'Loan amount, interest, tenure daalo — monthly EMI turant calculate karo.' 
            },
            { 
              href: '/articles/PmfbyCropInsurance2026', 
              icon: '🌱', 
              bg: 'bg-emerald-50 dark:bg-emerald-900/20', 
              border: 'border-emerald-200 dark:border-emerald-800',
              iconBg: 'bg-emerald-100 dark:bg-emerald-800',
              title: 'Farming Schemes', 
              desc: 'PMFBY, Soil Health Card, Nano DAP, AgriStack — sab schemes ki jankari.' 
            },
            { 
              href: '/articles', 
              icon: '📚', 
              bg: 'bg-rose-50 dark:bg-rose-900/20', 
              border: 'border-rose-200 dark:border-rose-800',
              iconBg: 'bg-rose-100 dark:bg-rose-800',
              title: 'Latest Articles', 
              desc: 'PM Kisan updates, farming tips, loan guides — Hindi mein simple bhasha.' 
            },
          ].map((tool, i) => (
            <Link 
              key={i} 
              href={tool.href}
              className={`group relative ${tool.bg} border-2 ${tool.border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {tool.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        RATE COMPARISON — NAYA STYLE
        ═══════════════════════════════════════ */}
    <section className="py-20 bg-green-50 dark:bg-green-900/10" aria-labelledby="rates-heading">
      <div className="container-site mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="rates-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
            Compare Rates Today
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
            Quickly compare loan rates and see how they stack up
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { 
              label: 'KCC Loan', 
              rate: '4.0%', 
              sub: 'Interest p.a. · SBI/PNB/BOB',
              badge: '↓ 2% lower than personal loan',
              badgeColor: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
            },
            { 
              label: 'Tractor Loan', 
              rate: '8.5%', 
              sub: 'Interest p.a. · With SMAM Subsidy',
              badge: '↓ 35% subsidy available',
              badgeColor: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
            },
            { 
              label: 'PM Kisan', 
              rate: '₹2,000', 
              sub: 'Per kist · 3 kist yearly',
              badge: '24vi kist Oct 2026 expected',
              badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30'
            },
          ].map((card, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {card.label}
              </div>
              <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-1">
                {card.rate}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {card.sub}
              </div>
              <div className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${card.badgeColor}`}>
                {card.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        HERO IMAGE — PURANA (PRESERVED)
        ═══════════════════════════════════════ */}
    <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="hero-image-heading">
      <div className="container-site mx-auto px-4">
        <h2 id="hero-image-heading" className="sr-only">Kisan Hero Image</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-600/20 dark:to-emerald-600/20 rounded-3xl blur-2xl" aria-hidden="true" />
          <figure className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
              <Image
                src="/hero-wheat-field.webp"
                alt="Bharatiya kisan gehu ke khet mein kaam karte hue - PM Kisan Samman Nidhi yojana ke labharthi"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xVsgH1fZ//2Q=="
                className="object-cover"
              />
            </div>
            <figcaption className="sr-only">PM Kisan Samman Nidhi ke labharthi kisan gehu ki fasal kaat rahe hain</figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        FEATURED IMAGES — PURANA (PRESERVED)
        ═══════════════════════════════════════ */}
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="featured-heading">
      <div className="container-site mx-auto px-4">
        <div className="text-center mb-14">
          <h2 id="featured-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            🌾 Bharat Ki Kheti
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Hamari Pehchaan — Hamari Shaan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { src: '/annadata-farmers-group.webp', title: '🌾 Hamare Annadata', desc: 'Bharat ki kheti - duniya ki sabse badi kheti', border: 'border-green-400 dark:border-green-600' },
            { src: '/digital-farming-tech.webp', title: '💻 Aadhunik Kheti', desc: 'Technology se badhti kheti ki kamai', border: 'border-blue-400 dark:border-blue-600' },
          ].map((item, i) => (
            <figure key={i} className={`group relative rounded-3xl overflow-hidden shadow-2xl border-4 ${item.border} hover:shadow-3xl transition-all duration-500 hover:-translate-y-2`} style={{ aspectRatio: '3/2' }}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xVsgH1fZ//2Q=="
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-black text-2xl mb-2 drop-shadow-lg">{item.title}</h3>
                <p className="text-gray-200 text-base drop-shadow-md">{item.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        LATEST ARTICLES — PURANA (PRESERVED)
        ═══════════════════════════════════════ */}
    <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="articles-heading">
      <div className="container-site mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-800 dark:text-green-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-green-200/50 dark:border-green-700/50">
              <span className="text-lg" aria-hidden="true">✨</span>
              <span>Latest Updates</span>
            </div>
            <h2 id="articles-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Naye Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Latest guides aur updates</p>
          </div>
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {latestArticles.length} latest
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {latestArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} showNewBadge={index < TOP_ARTICLES_LIMIT} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/articles" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40">
            <span className="text-xl" aria-hidden="true">📚</span>
            <span>Sabhi {allArticles.length} Articles Dekho</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        APP DOWNLOAD — NAYA STYLE
        ═══════════════════════════════════════ */}
    <section className="py-20 bg-gray-900 dark:bg-black" aria-labelledby="app-heading">
      <div className="container-site mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <h2 id="app-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
              Track Everything in One App
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              PM Kisan status, loan EMI calculator, mandi bhav — sab ek app mein. Download karo aur updates paao.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <span className="text-xl">🍎</span> App Store
              </button>
              <button className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl text-sm flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors">
                <span className="text-xl">🤖</span> Play Store
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 justify-center md:justify-start">
              <span>⭐ 4.8 Rating</span>
              <span>·</span>
              <span>100K+ Downloads</span>
            </div>
          </div>
          <div className="w-48 h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center text-7xl border border-green-500/30">
            📱
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════
        QUICK LINKS — PURANA (PRESERVED)
        ═══════════════════════════════════════ */}
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="quicklinks-heading">
      <div className="container-site mx-auto px-4">
        <div className="text-center mb-14">
          <h2 id="quicklinks-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            🤔 Aapki Problem Kya Hai?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Turant solution paayein</p>
        </div>
        <nav aria-label="Quick links to popular articles">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { href: '/articles/PmKisan24viKist2026', icon: '📊', title: 'Status Check', desc: 'Kist aayi ya nahi', color: 'from-blue-500 to-cyan-500' },
              { href: '/articles/KisanCreditCardOnlineApply2026', icon: '💳', title: 'KCC Apply', desc: '₹5 Lakh Loan', color: 'from-green-500 to-emerald-500' },
              { href: '/articles/PmKisanBeneficiaryList2026', icon: '📋', title: 'Beneficiary List', desc: 'Naam check karo', color: 'from-red-500 to-pink-500' },
              { href: '/articles/soil-health-card-complete-guide-2026', icon: '🧪', title: 'Soil Health Card', desc: 'Mitti test karo', color: 'from-purple-500 to-indigo-500' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 overflow-hidden" aria-label={`${link.title}: ${link.desc}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${link.color} mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} aria-hidden="true">
                    <div className="text-4xl">{link.icon}</div>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>

  </main>
);
}
