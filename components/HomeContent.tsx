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
    <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-green-50 dark:from-green-900/30 to-emerald-100 dark:to-emerald-900/20 shrink-0">
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
        <div className="h-full w-full flex items-center justify-center" role="img" aria-label={title}>
          <span className="text-5xl" aria-hidden="true">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
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
      className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full border ${
        showNewBadge
          ? 'border-green-300 dark:border-green-700'
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
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-20">
            NEW
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 w-fit mb-2">
          {emoji} {categoryName}
        </span>
        <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
          {article.desc}
        </p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
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
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 py-16 md:py-24 overflow-hidden">
        {/*
          FIX #1: Replaced CSS background-image (bg-[url(...)]) with next/image + priority.
          CSS backgrounds are NOT discovered/preloaded by the browser preload scanner,
          which was delaying LCP. next/image with `priority` injects a <link rel="preload">
          in <head>, so this loads immediately instead of after CSS parsing.
        */}
        <Image
          src="/indian-farmers-wheat-field.webp"
          alt=""
          fill
          priority
          quality={60}
          sizes="100vw"
          className="object-cover opacity-20"
          aria-hidden="true"
        />
        <div className="container-site mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 border border-white/30 text-green-100 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
              🌾 India Ka #1 PM Kisan Samman Nidhi Portal
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              PM Kisan Status Check 2026
            </h1>
            <p className="text-green-100 text-lg md:text-xl mb-6 leading-relaxed">
              24vi kist October 2026 mein aane wali hai! ₹2,000 seedha bank account mein. Status verify karo, eKYC complete karo — sab kuch free!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/articles/PmKisan24viKist2026"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                📅 24vi Kist Status
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-bold px-6 py-3 rounded-xl transition-all backdrop-blur-sm"
              >
                📚 Sabhi Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container-site mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center border-2 border-green-200 dark:border-green-800">
              <div className="text-3xl mb-2">👨‍🌾</div>
              <div className="text-2xl md:text-3xl font-black text-green-700 dark:text-green-400 mb-1">11 Cr+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Registered Kisan</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center border-2 border-blue-200 dark:border-blue-800">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl md:text-3xl font-black text-blue-700 dark:text-blue-400 mb-1">9.44 Cr+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Payment Pa Chuke</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 text-center border-2 border-amber-200 dark:border-amber-800">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-2xl md:text-3xl font-black text-amber-700 dark:text-amber-400 mb-1">₹6,000</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Saalana</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center border-2 border-purple-200 dark:border-purple-800">
              <div className="text-3xl mb-2">💵</div>
              <div className="text-2xl md:text-3xl font-black text-purple-700 dark:text-purple-400 mb-1">₹2,000</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Har Kist</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-14 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
        </div>

        <div className="container-site mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              🧮 Free Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Kisan Calculator Suite
            </h2>
            <p className="text-green-200 text-base md:text-lg max-w-2xl mx-auto">
              PM Kisan benefit, MSP earnings, crop profit, KCC EMI, fertilizer cost — sab ek jagah, bilkul free!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
            <Link
              href="/calculator/pm-kisan-benefit"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 hover:border-yellow-400/50 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  🌾
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-yellow-300 transition-colors">PM Kisan Benefit</h3>
                  <p className="text-green-200 text-xs leading-relaxed">Kitni kist mili, kitni pending — saal ka total hisaab</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/msp-income"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 hover:border-yellow-400/50 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  💰
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-yellow-300 transition-colors">MSP Income</h3>
                  <p className="text-green-200 text-xs leading-relaxed">Fasal ki paidavar × MSP rate = guaranteed kamai</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/crop-profit"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 hover:border-yellow-400/50 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-yellow-300 transition-colors">Crop Profit</h3>
                  <p className="text-green-200 text-xs leading-relaxed">Kharcha vs kamai — shuddh munafa jaano per acre</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/kcc-loan-emi"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 hover:border-yellow-400/50 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  🏦
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-yellow-300 transition-colors">KCC Loan EMI</h3>
                  <p className="text-green-200 text-xs leading-relaxed">4% byaj par monthly EMI aur total interest</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/fertilizer-cost"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 hover:border-yellow-400/50 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  🌿
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-yellow-300 transition-colors">Fertilizer Cost</h3>
                  <p className="text-green-200 text-xs leading-relaxed">Urea, DAP, MOP — NPK kharcha per acre</p>
                </div>
              </div>
            </Link>

            <Link
              href="/calculator/irrigation-cost"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 hover:border-yellow-400/50 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  💧
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-yellow-300 transition-colors">Irrigation Cost</h3>
                  <p className="text-green-200 text-xs leading-relaxed">Drip vs flood — paani aur bijli ka kharcha</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-xl"
            >
              🧮 Sab Calculators Kholo →
            </Link>
            <p className="text-green-300/70 text-xs mt-3">
              100% Free • Koi Login Nahi • Instant Results
            </p>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-white dark:from-gray-900/50 dark:to-gray-800">
        <div className="container-site mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-8 text-center">
            🌾 Bharat Ki Kheti - Hamari Pehchaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-green-200 dark:border-green-800 group">
              {/*
                FIX #2: Same wheat-field image was being requested twice on this page
                (once in the hero, once here). Swapped this one for the "modern farming"
                image so only ONE unique heavy image competes for bandwidth with the
                LCP image up top.
              */}
              <Image
                src="/modern-farming-technology-india.webp"
                alt="Indian farmers working in wheat field - Bharat ki kheti"
                width={600}
                height={400}
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-1">🌾 Hamare Annadata</h3>
                <p className="text-green-200 text-sm">Bharat ki kheti - duniya ki sabse badi kheti</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-blue-200 dark:border-blue-800 group">
              <Image
                src="/modern-farming-technology-india.webp"
                alt="Modern farming technology in India - Digital agriculture"
                width={600}
                height={400}
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-1">🚜 Aadhunik Kheti</h3>
                <p className="text-blue-200 text-sm">Technology se badhti kheti ki kamai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-site mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">✨</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Naye Articles</h2>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-full">
              {latestArticles.length} latest
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                showNewBadge={index < TOP_ARTICLES_LIMIT}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              📚 Sabhi {allArticles.length} Articles Dekho →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container-site mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 text-center">
            🤔 Aapki Problem Kya Hai?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              href="/articles/PmKisan24viKist2026"
              className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Status Check</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Kist aayi ya nahi</p>
            </Link>
            <Link
              href="/articles/KisanCreditCardOnlineApply2026"
              className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">💳</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">KCC Apply</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">₹5 Lakh Loan</p>
            </Link>
            <Link
              href="/articles/PmKisanBeneficiaryList2026"
              className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">📋</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Beneficiary List</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Naam check karo</p>
            </Link>
            <Link
              href="/articles/soil-health-card-complete-guide-2026"
              className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Soil Health Card</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Mitti test karo</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
