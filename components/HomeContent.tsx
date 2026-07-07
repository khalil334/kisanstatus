'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ARTICLES, getLatestArticles, CATEGORIES } from '@/lib/articles-data';

const TOP_ARTICLES_LIMIT = 3;

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
          {!loaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            loading="lazy"
            className={`object-cover group-hover:scale-105 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" role="img" aria-label={title}>
          <span className="text-5xl" aria-hidden="true">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <span className="absolute bottom-2 left-3 text-xl drop-shadow z-20" aria-hidden="true">{emoji}</span>
    </div>
  );
}

function ArticleCard({ article, showNewBadge = false }: { article: typeof ARTICLES[0]; showNewBadge?: boolean }) {
  const categoryInfo = CATEGORIES[article.category] as { name: string; nameHi: string; icon: string } | undefined;
  const emoji = categoryInfo?.icon || '📄';
  const categoryName = categoryInfo?.nameHi || categoryInfo?.name || 'Article';

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full border ${
        showNewBadge
          ? 'border-green-500 dark:border-green-600 shadow-lg'
          : 'border-gray-200 dark:border-gray-700'
      }`}
      aria-label={`Read: ${article.title}`}
    >
      <div className="relative">
        <ArticleImage
          image={article.ogImage || ''}
          emoji={emoji}
          title={article.title}
        />
        {showNewBadge && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
            NEW
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 w-fit mb-3">
          {emoji} {categoryName}
        </span>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mb-3">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-4">
          {article.desc}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400">✍️ KisanStatus Team</span>
          <span className="text-sm font-bold text-green-700 dark:text-green-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Padhein →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomeContent() {
  const latestArticles = getLatestArticles(TOP_ARTICLES_LIMIT);
  const allArticles = ARTICLES;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Clean Professional */}
      <section className="relative bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container-site mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-bold px-4 py-2 rounded-full mb-6">
              🌾 India Ka #1 PM Kisan Portal
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              PM Kisan Status Check 2026
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              24vi kist October 2026 mein aane wali hai! ₹2,000 seedha bank account mein. 
              Status verify karo, eKYC complete karo — sab kuch free!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/articles/PmKisan24viKist2026"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                📅 24vi Kist Status
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                📚 Sabhi Articles
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/indian-farmers-wheat-field.webp"
              alt="Indian farmers in wheat field - PM Kisan Samman Nidhi beneficiaries"
              width={1200}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Clean */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-site mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-4xl mb-3">👨‍🌾</div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">11 Cr+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Registered Kisan</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-4xl mb-3">💰</div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">9.44 Cr+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Payment Pa Chuke</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-4xl mb-3">📅</div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">₹6,000</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Saalana Benefit</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-4xl mb-3">💵</div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">₹2,000</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Har Kist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Clean */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-bold px-4 py-2 rounded-full mb-4">
              🧮 Free Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Kisan Calculator Suite
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              PM Kisan benefit, MSP earnings, crop profit, KCC EMI — sab ek jagah, bilkul free!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link
              href="/calculator/pm-kisan-benefit"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-xl transition-all group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  🌾
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">PM Kisan Benefit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Kitni kist mili, kitni pending — saal ka total hisaab</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/msp-income"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-xl transition-all group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  💰
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">MSP Income</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Fasal ki paidavar × MSP rate = guaranteed kamai</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/crop-profit"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-xl transition-all group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Crop Profit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Kharcha vs kamai — shuddh munafa jaano per acre</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/kcc-loan-emi"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-xl transition-all group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  🏦
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">KCC Loan EMI</h