'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';

// Key statistics — updated for 2026
const STATS = {
  registeredCultivators: '11 Cr+',
  receivedTranche: '9.44 Cr+',
  annualBenefit: '₹6,000',
  perTranche: '₹2,000',
  currentTranche: '23',
  nextTranche: '24',
  currentTrancheDate: '20 June 2026',
  nextTrancheDate: 'October 2026',
  totalArticles: '26+',
};

// Featured articles — varied keywords for SEO
const TOP_ARTICLES = [
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'Self-Enrolled Status Verification 2026',
    emoji: '📋',
    image: '/images/pm-kisan-self-registered-status/pm-kisan-portal-homepage.webp',
    desc: 'Self enrollment ka status kaise verify karein — step-by-step guide',
    category: 'Verification',
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Analysis Card Complete Guide 2026',
    emoji: '🌱',
    image: '/images/soil-health-card-complete-guide-2026.webp',
    desc: 'Mitti analysis card download, status check, PDF download — complete guide',
    category: 'Farming',
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'Agrarian Welfare Complete Guide 2026',
    emoji: '📖',
    image: '/images/pm-kisan-status-check-hero.webp',
    desc: 'Saari problems ka solution — status verification, digital verification, payment, rejection',
    category: 'Guide',
  },
];

// Category color mapping
const CAT_COLORS: Record<string, string> = {
  Verification: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Farming: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Guide: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
};

// Ticker items — live updates with varied keywords
const TICKER_ITEMS = [
  `🔴 LIVE: Agrarian Welfare ${STATS.currentTranche}vi Tranche — ${STATS.currentTrancheDate} ko ${STATS.perTranche} release ho chuki hai`,
  `⏳ ${STATS.nextTranche}vi Tranche Expected: ${STATS.nextTrancheDate} — Digital verification abhi complete karo`,
  '🔐 Digital Verification Mandatory: Bina verification tranche NAHI milegi — official portal par karo',
  '📞 Support Line: 155261 | Toll Free: 1800-115-526',
  `✅ ${STATS.registeredCultivators} registered cultivators — ${STATS.receivedTranche} ko ${STATS.currentTranche}vi tranche mil chuki hai`,
];

// FAQ section — common questions with varied terminology
const FAQS = [
  {
    q: 'Agrarian welfare ki 23वीं tranche कब आई?',
    a: `23वीं tranche ${STATS.currentTrancheDate} को release हो चुकी है — ${STATS.registeredCultivators} registered cultivators में से ${STATS.receivedTranche} cultivators को ${STATS.perTranche} DBT से मिले हैं। अगर अभी तक पैसा नहीं आया तो digital verification और bank में biometric credential seeding ज़रूर check करें।`,
  },
  {
    q: 'Digital verification नहीं हुई तो क्या पैसा आएगा?',
    a: 'नहीं — बिना digital verification के कोई भी tranche नहीं आती। Verification free है: official portal → Verification → Biometric credential number → OTP verify। या नज़दीकी CSC center जाएं — बिल्कुल मुफ्त।',
  },
  {
    q: 'Status में "Land Integration No" दिखाए तो क्या करें?',
    a: 'इसका मतलब आपकी ज़मीन official portal से link नहीं हुई। Fix: पटवारी/लेखपाल से मिलें, Khasra-Khatauni अपडेट करवाएं, Block Agriculture Officer को application दें। 15-30 दिन में status verify करें।',
  },
];

// FAQ structured data for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

// Article list structured data
const articleListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Agrarian Welfare Latest Guides 2026',
  url: 'https://kisanstatus.com',
  numberOfItems: TOP_ARTICLES.length,
  itemListElement: TOP_ARTICLES.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://kisanstatus.com/articles/${a.slug}`,
    name: a.title,
    description: a.desc,
  })),
};

// Article image component with fallback
function ArticleImage({ src, alt, emoji }: { src: string; alt: string; emoji: string }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 shrink-0">
      {!error ? (
        <>
          {!loaded && <div className="absolute inset-0 bg-[var(--color-border)] animate-pulse z-10" />}
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
            loading="lazy"
            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        </>
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10">
          <span className="text-5xl" role="img" aria-label={alt}>{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      <span className="absolute top-3 left-3 bg-amber-400 text-gray-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md z-20">NEW</span>
      <span className="absolute bottom-3 left-3 text-2xl drop-shadow-lg z-20" role="img" aria-hidden="true">{emoji}</span>
    </div>
  );
}

// Hero background image with fallback
function HeroImage() {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-emerald-600 z-0" />;
  }

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/hero-kisan-field.webp"
        alt="Agrarian welfare beneficiaries in green field - Bharat ki cultivator shakti"
        fill
        sizes="100vw"
        priority={true}
        quality={75}
        className="object-cover opacity-20"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function HomeContent() {
  return (
    <div className="page-transition">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />

      {/* Ticker — live updates */}
      <div className="bg-red-600 text-white py-2 px-4" role="banner" aria-label="Latest updates">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs font-medium">
          {TICKER_ITEMS.slice(0, 3).map((item, i) => (
            <span key={i} className="flex items-center gap-1">{item}</span>
          ))}
        </div>
      </div>

      {/* Hero section — main CTA */}
      <section
        className="relative overflow-hidden bg-green-warm-gradient dark:from-green-950 dark:via-green-900 dark:to-emerald-950"
        aria-label="Hero section - Agrarian Welfare Verification"
      >
        <HeroImage />
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-400/20 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -right-10 w-80 h-80 rounded-full bg-amber-400/15 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="container-site relative z-10 max-w-3xl px-4 py-14 md:py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-100 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider backdrop-blur-sm">
            🌾 India Ka #1 Agrarian Welfare Information Portal
          </div>

          <h1 className="font-black text-white leading-[1.15] mb-4 tracking-tight drop-shadow-lg">
            <span className="text-3xl md:text-5xl block">Cultivator Benefit Verification —</span>
            <span className="text-2xl md:text-4xl block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-300">
              कृषि कल्याण {STATS.currentTranche}वीं ट्रांche 2026
            </span>
          </h1>

          <h2 className="text-base md:text-lg text-green-50 mb-6 max-w-xl leading-relaxed font-normal drop-shadow-md">
            Kisan bhai — <strong className="text-white">{STATS.currentTranche}vi tranche {STATS.currentTrancheDate} ko release ho chuki hai!</strong> Apna status abhi verify karo, digital verification complete karo, paisa aaya ya nahi dekho. <span className="text-yellow-200 font-semibold">Sab free — 10 minute mein.</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/articles/pm-kisan-23vi-kist-2026-status-check"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/40 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              aria-label={`Verify ${STATS.currentTranche}vi tranche status`}
            >
              📆 {STATS.currentTranche}vi Tranche Status Dekho
            </Link>
            <Link
              href="/articles/pm-kisan-ekyc-online-2026"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 backdrop-blur-sm focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="Complete digital verification"
            >
              🔐 Digital Verification Karo — Free
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-8 text-[11px] text-green-100 drop-shadow-md">
            {['✅ 100% Free', '🔒 Koi Data Store Nahi', '🏛️ Official Portal Verified', '📞 Support Line: 155261'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems — quick solutions */}
      <section className="py-12 bg-[var(--color-card)]" aria-labelledby="problems-heading">
        <div className="container-site px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🤔 Aapki Problem Kya Hai?</span>
            <h2 id="problems-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">Seedha Solution — Click Karo</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-lg mx-auto">Sabse common problems ke step-by-step guides</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { icon: '💸', title: 'Tranche Nahi Aayi', sub: 'Payment pending ya failed', href: '/articles/pm-kisan-payment-failed-status-2026', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', tag: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' },
              { icon: '🔐', title: 'Digital Verification Karna Hai', sub: 'OTP ya CSC — dono free', href: '/articles/pm-kisan-ekyc-online-2026', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', tag: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
              { icon: '❌', title: 'Rejected Ho Gaya', sub: 'Rejection reason pata karo', href: '/articles/pm-kisan-rejected-list-2026', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', tag: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
              { icon: '✏️', title: 'Naam Galat Hai', sub: '15 min mein fix karo', href: '/articles/pm-kisan-name-correction-online-2026', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', tag: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`${c.bg} ${c.border} border rounded-2xl p-4 flex flex-col gap-2 hover:shadow-lg hover:scale-[1.02] transition-all no-underline group h-full focus:ring-2 focus:ring-green-500 focus:outline-none`}
                aria-label={`${c.title} - ${c.sub}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl" role="img" aria-hidden="true">{c.icon}</span>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${c.tag}`}>Guide</span>
                </div>
                <h3 className="font-bold text-[var(--color-text)] text-sm leading-tight">{c.title}</h3>
                <p className="text-[var(--color-text-muted)] text-xs leading-snug">{c.sub}</p>
                <span className="text-xs font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all inline-flex items-center gap-1 mt-auto">Padho →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/articles" className="text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] hover:underline focus:ring-2 focus:ring-green-500 focus:outline-none rounded">
              Saari Problems Dekho →
            </Link>
          </div>
        </div>
      </section>

      {/* Cultivators showcase — statistics */}
      <section className="py-14 bg-gradient-to-b from-green-50 to-[var(--color-card)] dark:from-green-950/30 dark:to-[var(--color-card)]" aria-labelledby="cultivators-heading">
        <div className="container-site px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🌾 Hamare Cultivators</span>
            <h2 id="cultivators-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">Bharat Ki Asli Taqat</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">11 Crore+ cultivators ko agrarian welfare se mil raha hai har saal ₹6,000</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-10">
            <Image
              src="/indian-farmers-wheat-field.webp"
              alt="Indian Cultivators in Green Wheat Field - Agrarian Welfare Beneficiaries"
              width={1200}
              height={630}
              quality={80}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-2">Cultivator Benefit Program</h3>
                <p className="text-green-200 text-sm md:text-base">Har cultivator ko ₹2,000 har 4 mahine mein — Seedha bank account mein</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Registered Cultivators', value: '11 Cr+', icon: '👨‍🌾' },
              { label: 'Received Payment', value: '9.44 Cr+', icon: '💰' },
              { label: 'Per Year', value: '₹6,000', icon: '📅' },
              { label: 'Per Tranche', value: '₹2,000', icon: '💵' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-card)] rounded-2xl p-5 shadow-lg border-2 border-[var(--color-border)] text-center hover:shadow-xl transition-all">
                <div className="text-3xl mb-2" role="img" aria-hidden="true">{stat.icon}</div>
                <div className="text-2xl font-black text-[var(--color-primary)] mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-muted)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — 3 step process */}
      <section className="py-14 bg-[var(--color-card)]" aria-labelledby="how-heading">
        <div className="container-site px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">📋 Process</span>
            <h2 id="how-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">Agrarian Welfare — 3 Steps Mein Complete</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">Bas ye 3 kaam karo, ₹2,000 har 4 mahine mein seedha bank mein</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { step: '01', title: 'Enrollment Karo', desc: 'Official portal par jaake biometric credential number se enroll karo', icon: '📝', color: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' },
              { step: '02', title: 'Digital Verification Complete Karo', desc: 'OTP ya biometric se verification verify karo — bilkul free', icon: '🔐', color: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' },
              { step: '03', title: '₹2,000 Paao', desc: 'Har 4 mahine mein seedha bank account mein paisa', icon: '💰', color: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' },
            ].map((item) => (
              <div key={item.step} className={`${item.color} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all`}>
                <span className="text-4xl mb-3 block" role="img" aria-hidden="true">{item.icon}</span>
                <span className="inline-block bg-[var(--color-card)] text-[var(--color-text-muted)] text-xs font-black px-3 py-1 rounded-full mb-3">Step {item.step}</span>
                <h3 className="font-bold text-[var(--color-text)] text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles — featured content */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-[var(--color-card)] dark:from-gray-900/50 dark:to-[var(--color-card)]" aria-labelledby="latest-heading">
        <div className="container-site px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🆕 Nayi Guides</span>
            <h2 id="latest-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">ताज़ी जानकारी हिंदी में</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">Practical step-by-step guides — government copy-paste nahi</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {TOP_ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline h-full flex flex-col focus:ring-2 focus:ring-green-500 focus:outline-none"
                aria-label={`Read article: ${a.title}`}
              >
                <ArticleImage src={a.image} alt={a.title} emoji={a.emoji} />
                <div className="p-4 flex-col flex-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full self-start ${CAT_COLORS[a.category] ?? 'bg-gray-100 text-gray-600'}`}>{a.category}</span>
                  <h3 className="font-bold text-[var(--color-text)] text-sm leading-snug mt-2 mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">{a.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mb-3 line-clamp-2">{a.desc}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)] mt-auto">
                    <span className="text-[11px] text-[var(--color-text-muted)]">✍️ KisanStatus Team</span>
                    <span className="text-xs font-bold text-[var(--color-primary)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Padho →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-600/30 focus:ring-2 focus:ring-green-300 focus:outline-none"
              aria-label={`View all ${STATS.totalArticles} guides`}
            >
              📚 Saari {STATS.totalArticles} Guides Dekho
            </Link>
          </div>
        </div>
      </section>

      {/* Modern farming — technology section */}
      <section className="py-14 bg-gradient-to-b from-amber-50 to-[var(--color-card)] dark:from-amber-950/20 dark:to-[var(--color-card)]" aria-labelledby="modern-heading">
        <div className="container-site px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🚜 Modern Farming</span>
            <h2 id="modern-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">Technology + Kheti</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">Agrarian welfare ke saath modern farming se double income</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-10">
            <Image
              src="/modern-farming-technology-india.webp"
              alt="Modern Farming Technology in India - Tractor, Mobile App, Digital Agriculture for Cultivators"
              width={1200}
              height={630}
              quality={80}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                {[
                  { icon: '📱', title: 'Mobile Se Apply', sub: 'Ghar baithe enrollment' },
                  { icon: '🌐', title: 'Online Status', sub: 'Kabhi bhi verify karo' },
                  { icon: '💳', title: 'Direct Bank', sub: 'DBT se seedha account' },
                ].map((item) => (
                  <div key={item.title} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl mb-2" role="img" aria-hidden="true">{item.icon}</div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-xs opacity-90">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features grid — removed broken link */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '🌱', title: 'Soil Analysis Card', desc: 'Mitti testing free', color: 'bg-green-500' },
              { icon: '💧', title: 'Irrigation Support', desc: 'Water management', color: 'bg-blue-500' },
              { icon: '🌾', title: 'Crop Protection', desc: 'Fasal suraksha', color: 'bg-amber-500' },
              { icon: '📊', title: 'Procurement Rate', desc: 'Mandi bhav jaano', color: 'bg-purple-500' },
            ].map((feature) => (
              <div key={feature.title} className="bg-[var(--color-card)] rounded-2xl p-6 shadow-lg border-2 border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4`} role="img" aria-hidden="true">{feature.icon}</div>
                <h3 className="font-bold text-[var(--color-text)] text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <div className="container-site pb-10 px-4">
        <p className="text-center text-amber-700 bg-amber-50 border border-amber-200 dark:text-amber-300 dark:bg-amber-900/20 dark:border-amber-800 rounded-xl px-4 py-3 text-xs max-w-2xl mx-auto" role="note">
          ⚠️ <strong>Disclaimer:</strong> KisanStatus.com ek independent information portal hai. Yeh Government of India ya official portal ka official platform nahi hai.
        </p>
      </div>

      {/* FAQ section */}
      <FAQSection faqs={FAQS} />
    </div>
  );
}