'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ARTICLES, getLatestArticles, CATEGORIES } from '@/lib/articles-data';

const TOP_ARTICLES_LIMIT = 3;

// Schema.org structured data for SEO
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KisanStatus',
  url: 'https://kisanstatus.com',
  logo: 'https://kisanstatus.com/logo.svg',
  description: 'India ka #1 PM Kisan Samman Nidhi portal — status check, kist updates, aur kisan guides',
  sameAs: [
    'https://twitter.com/kisanstatus',
    'https://facebook.com/kisanstatus',
  ],
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KisanStatus',
  url: 'https://kisanstatus.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kisanstatus.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

function ArticleImage({ image, emoji, title }: { image: string; emoji: string; title: string }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0"
      style={{ aspectRatio: '16/9' }}
    >
      {!error && image ? (
        <>
          {!loaded && <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse z-10" />}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            loading="lazy"
            decoding="async"
            className={`object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        </>
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
    <article
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col no-underline h-full border transition-all duration-500 ease-out ${
        showNewBadge
          ? 'border-green-500/50 dark:border-green-600/50 shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20'
          : 'border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-black/30'
      } hover:-translate-y-2`}
    >
      <Link href={`/articles/${article.slug}`} className="sr-only" aria-label={`Padhein: ${article.title}`}>
        {article.title}
      </Link>
      <div className="relative overflow-hidden">
        <ArticleImage
          image={article.ogImage || ''}
          emoji={emoji}
          title={article.title}
        />
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
          <Link
            href={`/articles/${article.slug}`}
            className="text-sm font-bold text-green-700 dark:text-green-400 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5"
            aria-label={`Padhein: ${article.title}`}
          >
            Padhein
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomeContent() {
  const latestArticles = getLatestArticles(TOP_ARTICLES_LIMIT);
  const allArticles = ARTICLES;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* JSON-LD Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-20 md:py-28 overflow-hidden" aria-labelledby="hero-heading">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} aria-hidden="true" />
        
        <div className="container-site mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-800 dark:text-green-300 text-sm font-bold px-5 py-2.5 rounded-full mb-8 shadow-sm border border-green-200/50 dark:border-green-700/50">
              <span className="text-lg" aria-hidden="true">🌾</span>
              <span>India Ka #1 PM Kisan Portal</span>
            </div>
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-7 tracking-tight">
              PM Kisan Status
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Check 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              24vi kist October 2026 mein aane wali hai! <span className="font-bold text-gray-900 dark:text-white">₹2,000</span> seedha bank account mein.
              Status verify karo, eKYC complete karo — sab kuch <span className="font-bold text-green-700 dark:text-green-400">bilkul free!</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/articles/PmKisan24viKist2026"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40"
                aria-label="PM Kisan 24vi Kist ka status check karein"
              >
                <span className="text-xl" aria-hidden="true">📅</span>
                <span>24vi Kist Status</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-lg hover:shadow-xl"
                aria-label="Sabhi articles dekhein"
              >
                <span className="text-xl" aria-hidden="true">📚</span>
                <span>Sabhi Articles</span>
              </Link>
            </div>
          </div>

          {/* Hero Image — ✅ OPTIMIZED FOR LCP & CLS */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-600/20 dark:to-emerald-600/20 rounded-3xl blur-2xl" aria-hidden="true" />
            <figure className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              {/* ✅ CLS FIX: Aspect ratio container with fill */}
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
                  decoding="async"
                />
              </div>
              <figcaption className="sr-only">
                PM Kisan Samman Nidhi ke labharthi kisan gehu ki fasal kaat rahe hain
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Stats Section — ✅ CLS FIX: Reserve space with Tailwind classes */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">PM Kisan Yojana ke aankde</h2>
        <div className="container-site mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
            {[
              { icon: '👨‍🌾', value: '11 Cr+', label: 'Registered Kisan', color: 'from-green-500 to-emerald-500' },
              { icon: '💰', value: '9.44 Cr+', label: 'Payment Pa Chuke', color: 'from-blue-500 to-cyan-500' },
              { icon: '📅', value: '₹6,000', label: 'Saalana Benefit', color: 'from-amber-500 to-orange-500' },
              { icon: '💵', value: '₹2,000', label: 'Har Kist', color: 'from-purple-500 to-pink-500' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-7 text-center border border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden min-h-[200px]"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="calculator-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-800 dark:text-blue-300 text-sm font-bold px-5 py-2.5 rounded-full mb-6 shadow-sm border border-blue-200/50 dark:border-blue-700/50">
              <span className="text-lg" aria-hidden="true">🧮</span>
              <span>Free Tools</span>
            </div>
            <h2 id="calculator-heading" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-5 tracking-tight">
              Kisan Calculator Suite
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              PM Kisan benefit, MSP earnings, crop profit, KCC EMI — sab ek jagah, <span className="font-bold text-blue-700 dark:text-blue-400">bilkul free!</span>
            </p>
          </div>

          <nav aria-label="Kisan calculators">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {[
                { href: '/calculator/pm-kisan-benefit', icon: '🌾', bg: 'from-yellow-400 to-amber-500', title: 'PM Kisan Benefit', desc: 'Kitni kist mili, kitni pending — saal ka total hisaab' },
                { href: '/calculator/msp-income', icon: '💰', bg: 'from-orange-400 to-red-500', title: 'MSP Income', desc: 'Fasal ki paidavar × MSP rate = guaranteed kamai' },
                { href: '/calculator/crop-profit', icon: '📊', bg: 'from-green-400 to-emerald-500', title: 'Crop Profit', desc: 'Kharcha vs kamai — shuddh munafa jaano per acre' },
                { href: '/calculator/kcc-loan-emi', icon: '🏦', bg: 'from-blue-400 to-cyan-500', title: 'KCC Loan EMI', desc: '4% byaj par monthly EMI aur total interest' },
              ].map((calc, i) => (
                <Link
                  key={i}
                  href={calc.href}
                  className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/80 hover:-translate-y-1 overflow-hidden"
                  aria-label={`${calc.title} calculator kholiye`}
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${calc.bg} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} aria-hidden="true" />
                  <div className="relative flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${calc.bg} rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`} aria-hidden="true">
                      {calc.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
                        {calc.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{calc.desc}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          <div className="text-center mt-12">
            <Link
              href="/calculator"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40"
              aria-label="Sabhi calculators dekhein"
            >
              <span className="text-xl" aria-hidden="true">🧮</span>
              <span>Sab Calculators Kholo</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images — ✅ CLS FIX: Explicit aspect ratio */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="featured-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="featured-heading" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              🌾 Bharat Ki Kheti
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Hamari Pehchaan — Hamari Shaan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { src: '/annadata-farmers-group.webp', title: '🌾 Hamare Annadata', desc: 'Bharat ki kheti - duniya ki sabse badi kheti', border: 'border-green-400 dark:border-green-600' },
              { src: '/digital-farming-tech.webp', title: '🚜 Aadhunik Kheti', desc: 'Technology se badhti kheti ki kamai', border: 'border-blue-400 dark:border-blue-600' },
            ].map((item, i) => (
              <figure
                key={i}
                className={`group relative rounded-3xl overflow-hidden shadow-2xl border-4 ${item.border} hover:shadow-3xl transition-all duration-500 hover:-translate-y-2`}
                style={{ aspectRatio: '3/2' }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
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

      {/* Latest Articles */}
      <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="articles-heading">
        <div className="container-site mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-800 dark:text-green-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-green-200/50 dark:border-green-700/50">
                <span className="text-lg" aria-hidden="true">✨</span>
                <span>Latest Updates</span>
              </div>
              <h2 id="articles-heading" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
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
              <ArticleCard
                key={article.slug}
                article={article}
                showNewBadge={index < TOP_ARTICLES_LIMIT}
              />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/articles"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40"
              aria-label={`Sabhi ${allArticles.length} articles dekhein`}
            >
              <span className="text-xl" aria-hidden="true">📚</span>
              <span>Sabhi {allArticles.length} Articles Dekho</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="quicklinks-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="quicklinks-heading" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              🤔 Aapki Problem Kya Hai?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Turant solution paayein</p>
          </div>
          <nav aria-label="Quick links to popular articles">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { href: '/articles/PmKisan24viKist2026', icon: '📊', title: 'Status Check', desc: 'Kist aayi ya nahi', color: 'from-blue-500 to-cyan-500' },
                { href: '/articles/KisanCreditCardOnlineApply2026', icon: '', title: 'KCC Apply', desc: '₹5 Lakh Loan', color: 'from-green-500 to-emerald-500' },
                { href: '/articles/PmKisanBeneficiaryList2026', icon: '📋', title: 'Beneficiary List', desc: 'Naam check karo', color: 'from-red-500 to-pink-500' },
                { href: '/articles/soil-health-card-complete-guide-2026', icon: '', title: 'Soil Health Card', desc: 'Mitti test karo', color: 'from-purple-500 to-indigo-500' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  aria-label={`${link.title}: ${link.desc}`}
                >
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