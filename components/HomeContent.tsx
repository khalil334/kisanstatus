'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import AiAssistant from '@/components/AiAssistant';
import KisanTemplates from '@/components/KisanTemplates';

// ── CENTRALIZED STATS (FIXED: 23vivi → 23vi) ─────────────────────────────
const STATS = {
  registeredFarmers: '11 Cr+',
  receivedKist: '9.44 Cr+',
  annualBenefit: '₹6,000',
  perKist: '₹2,000',
  currentKist: '23',          // ✅ FIXED: '23vi' → '23'
  nextKist: '24',             // ✅ FIXED: '24vi' → '24'
  currentKistDate: '20 June 2026',
  nextKistDate: 'October 2026',
  totalArticles: '24+',
};

// ── Scroll reveal hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ── Articles data ───────────────────────────────────────────────────────────
const NEW_ARTICLES = [
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Health Card Complete Guide 2026',
    emoji: '🌱',
    image: '/images/soil-health-card-complete-guide-2026.webp',
    desc: 'Mitti health card download, status check, PDF download aur registration — complete guide',
    category: 'Farming',
    keywords: {
      hinglish: ['Soil Health Card', 'Download', 'Status Check', 'PDF'],
      hindi: ['मिट्टी स्वास्थ्य कार्ड', 'डाउनलोड', 'स्टेटस चेक'],
    },
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'PM Kisan Complete Guide 2026',
    emoji: '📖',
    image: '/images/pm-kisan-status-check-hero.webp',
    desc: 'Saari problems ka solution — status check, eKYC, payment, rejection — ek hi guide mein',
    category: 'Guide',
    keywords: {
      hinglish: ['Complete Guide', 'All Problems', 'Solution'],
      hindi: ['पूर्ण गाइड', 'सभी समस्याएं', 'समाधान'],
    },
  },
  {
    slug: 'pm-kisan-24vi-kist',
    title: 'PM Kisan 24vi Kist 2026',
    emoji: '📆',
    image: '/images/pm-kisan-24vi-kist-october-2026.webp',
    desc: '24vi kist kab aayegi — status check, date aur payment guide',
    category: 'Status',
    keywords: {
      hinglish: ['24vi Kist', 'October 2026', 'Next Installment'],
      hindi: ['24वीं किस्त', 'अगली किस्त कब आएगी'],
    },
  },
  {
    slug: 'pm-kisan-mobile-number-change',
    title: 'PM Kisan Mobile Number Change 2026',
    emoji: '📱',
    image: '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp',
    desc: 'Mobile number change karo online ya CSC se — step by step',
    category: 'Correction',
    keywords: {
      hinglish: ['Mobile Change', 'CSC Center', 'Number Update'],
      hindi: ['मोबाइल नंबर बदलें', 'नंबर अपडेट'],
    },
  },
  {
    slug: 'agristack-kya-hai',
    title: 'AgriStack Kya Hai 2026',
    emoji: '🌐',
    image: '/images/agristack-kya-hai-infographic.webp',
    desc: 'Farmer ID kya hoti hai, AgriStack registration aur fayde',
    category: 'Digital',
    keywords: {
      hinglish: ['AgriStack', 'Farmer ID', 'Digital Registration'],
      hindi: ['किसान आईडी', 'डिजिटल रजिस्ट्रेशन'],
    },
  },
  {
    slug: 'nano-dap-500ml-price-in-india-2026',
    title: 'Nano DAP 500ml Price in India 2026',
    emoji: '🧴',
    image: '/images/nano-dap-500ml-price-india-2026.webp',
    desc: 'IFFCO Nano DAP price, dosage per acre aur kahan se kharidein',
    category: 'Farming',
    keywords: {
      hinglish: ['Nano DAP Price', 'IFFCO 2026', 'Fertilizer'],
      hindi: ['नैनो डीएपी', 'खाद की कीमत'],
    },
  },
  {
    slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai',
    title: 'PM Kisan FTO Generated Ka Matlab',
    emoji: '📄',
    image: '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp',
    desc: 'FTO Generated dikhta hai? Matlab kya hai aur payment kab aayegi',
    category: 'Payment',
    keywords: {
      hinglish: ['FTO Generated', 'Payment Pending', 'FTO Status'],
      hindi: ['पेमेंट कब आएगी', 'FTO का मतलब'],
    },
  },
];

const CAT_COLORS: Record<string, string> = {
  Status: 'bg-blue-100 text-blue-700',
  Payment: 'bg-green-100 text-green-700',
  Correction: 'bg-purple-100 text-purple-700',
  Farming: 'bg-amber-100 text-amber-700',
  Digital: 'bg-teal-100 text-teal-700',
  Guide: 'bg-rose-100 text-rose-700',
};

// ── Ticker messages ───────────────────────────────────────────────────────
const TICKER_ITEMS = [
  `🔴 LIVE: PM Kisan ${STATS.currentKist}vi Kist — ${STATS.currentKistDate} ko ${STATS.perKist} release ho chuki hai`,
  `⏳ ${STATS.nextKist}vi Kist Expected: ${STATS.nextKistDate} — eKYC abhi complete karo`,
  '🔐 eKYC Mandatory: Bina eKYC kist NAHI milegi — pmkisan.gov.in par karo',
  '📞 Helpline: 155261 | Toll Free: 1800-115-526',
  `✅ ${STATS.registeredFarmers} registered farmers — ${STATS.receivedKist} ko ${STATS.currentKist}vi kist mil chuki hai`,
  '🌾 KisanStatus.com — Sabhi Kisanon Ke Liye — 100% Free',
  '🌱 NEW: Soil Health Card Guide — Mitti testing se lekar PDF download tak',
];

// ── FAQs ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'पीएम किसान की 23वीं किस्त कब आई?',
    a: `23वीं किस्त ${STATS.currentKistDate} को release हो चुकी है — ${STATS.registeredFarmers} registered farmers mein se ${STATS.receivedKist} farmers को ${STATS.perKist} DBT से मिले हैं। अगर अभी तक पैसा नहीं आया तो eKYC और bank में Aadhaar seeding ज़रूर check करें। Status check: pmkisan.gov.in → Beneficiary Status।`,
  },
  {
    q: 'पीएम किसान eKYC नहीं हुई तो क्या पैसा आएगा?',
    a: 'नहीं — बिना eKYC के कोई भी किस्त नहीं आती, चाहे registration कितना भी सही हो। eKYC free है: pmkisan.gov.in → eKYC → Aadhaar number → OTP verify। या नज़दीकी CSC center जाएं — बिल्कुल मुफ्त।',
  },
  {
    q: 'पीएम किसान स्टेटस में "Land Seeding No" दिखाए तो क्या करें?',
    a: 'इसका मतलब आपकी ज़मीन PM Kisan portal से link नहीं हुई। Fix: 1) अपने पटवारी/लेखपाल से मिलें 2) Khasra-Khatauni अपडेट करवाएं 3) Block Agriculture Officer को application दें 4) 15-30 दिन में status check करें।',
  },
  {
    q: 'पीएम किसान में नाम गलत है तो payment आएगी क्या?',
    a: 'नहीं — name mismatch से eKYC fail होती है और payment रुक जाती है। Fix: pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Name Correction। Aadhaar card देखकर बिल्कुल same spelling डालें। 15-20 दिन में update होगा।',
  },
  {
    q: 'KCC (किसान क्रेडिट कार्ड) लोन कैसे मिलेगा?',
    a: 'KCC के लिए: 1) नज़दीकी SBI/PNB/Bank of Baroda जाएं 2) KCC application form भरें 3) Aadhaar, land records, photo दें 4) 7-14 दिन में approval। Interest 7% p.a. (subsidy के साथ 4% effective)। ₹1.6 लाख तक बिना collateral।',
  },
  {
    q: 'Soil Health Card (मिट्टी स्वास्थ्य कार्ड) कैसे बनवाएं?',
    a: 'Soil Health Card के लिए: 1) नज़दीकी CSC center या agriculture office जाएं 2) Registration form भरें 3) Mitti ka sample dein 4) 15-30 दिन में card mil jayega। Ye bilkul free hai — download: soilhealth.dac.gov.in',
  },
];

// ── Schema ─────────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KisanStatus.com',
  url: 'https://kisanstatus.com',
  description: 'PM Kisan Samman Nidhi status check, eKYC guide, kist dates, beneficiary list aur free agricultural calculators.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kisanstatus.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  inLanguage: ['hi-IN', 'en-IN'],
};

const articleListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'PM Kisan Latest Guides 2026',
  url: 'https://kisanstatus.com',
  numberOfItems: NEW_ARTICLES.length,
  itemListElement: NEW_ARTICLES.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://kisanstatus.com/articles/${a.slug}`,
    name: a.title,
    description: a.desc,
  })),
};

// ── Reveal wrapper ──────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Ticker ──────────────────────────────────────────────────────────────────
function NewsTicker() {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden flex items-center">
      <span className="shrink-0 bg-red-800 font-black text-xs px-3 py-0.5 mr-3 uppercase tracking-widest rounded-sm">
        🔴 LIVE
      </span>
      <div className="overflow-hidden flex-1">
        <div className="flex gap-16 whitespace-nowrap text-xs font-medium" style={{ animation: 'marquee 35s linear infinite' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="shrink-0">{item}</span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// ── Breaking Alert ──────────────────────────────────────────────────────────
function BreakingAlert() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-3 flex items-start gap-3">
      <span className="shrink-0 bg-white text-green-700 text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider mt-0.5">
        Breaking
      </span>
      <p className="text-sm font-bold flex-1">
        🎉 PM Kisan {STATS.currentKist}vi Kist — {STATS.perKist} seedha {STATS.receivedKist} farmers ke bank mein aa gayi!{' '}
        <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="underline text-white/90 hover:text-white">
          Apna status check karo →
        </Link>
      </p>
      <button onClick={() => setVisible(false)} className="shrink-0 text-white/70 hover:text-white text-lg leading-none mt-0.5" aria-label="Close">
        ×
      </button>
    </div>
  );
}

// ── Stat Box ────────────────────────────────────────────────────────────────
function StatBox({ icon, value, label, sub, delay }: { icon: string; value: string; label: string; sub: string; delay: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className="text-center p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s ease ${delay}ms` }}
    >
      <span className="text-3xl block mb-1">{icon}</span>
      <p className="font-black text-2xl text-green-800 tabular-nums">{value}</p>
      <p className="font-bold text-gray-800 text-xs mt-0.5">{label}</p>
      <p className="text-gray-400 text-[10px]">{sub}</p>
    </div>
  );
}

// ── Article Image ───────────────────────────────────────────────────────────
function ArticleImage({ src, alt, emoji }: { src: string; alt: string; emoji: string }) {
  const [error, setError] = useState(false);
  return (
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 shrink-0">
      {!error ? (
        <img src={src} alt={alt} width={400} height={176} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" onError={() => setError(true)} />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-5xl">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute top-3 left-3 bg-amber-400 text-gray-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">NEW</span>
      <span className="absolute bottom-3 left-3 text-2xl drop-shadow-lg">{emoji}</span>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function HomeContent() {
  const statsReveal = useScrollReveal();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />

      <NewsTicker />
      <BreakingAlert />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#03150b 0%,#0b3320 35%,#14532d 65%,#1d6b3d 100%)', minHeight: '580px' }} aria-label="Hero">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-400/15 blur-[80px] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -right-10 w-80 h-80 rounded-full bg-amber-400/10 blur-[80px] pointer-events-none" aria-hidden="true" />

        <div className="absolute right-0 top-0 h-full w-1/2 lg:w-3/5 opacity-35 lg:opacity-45 pointer-events-none" aria-hidden="true">
          <img src="/images/hero-banner.webp" alt="" className="h-full w-full object-cover object-left" style={{ maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 100%)' }} loading="eager" fetchPriority="high" width={800} height={580} />
        </div>

        <div className="container-site relative z-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider backdrop-blur-sm">
              🌾 India Ka #1 PM Kisan Information Portal
            </div>

            <h1 className="font-black text-white leading-[1.15] mb-4 tracking-tight">
              <span className="text-3xl md:text-5xl block">PM Kisan Status Check —</span>
              <span className="text-2xl md:text-4xl block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-yellow-200">
                पीएम किसान {STATS.currentKist}वीं किस्त 2026
              </span>
            </h1>

            <h2 className="text-base md:text-lg text-green-100/85 mb-5 max-w-xl leading-relaxed font-normal">
              Kisan bhai — <strong className="text-white">{STATS.currentKist}vi kist {STATS.currentKistDate} ko release ho chuki hai!</strong> Apna status abhi check karo: eKYC complete karo, bank Aadhaar seed karo, paisa aaya ya nahi dekho. <span className="text-green-300 font-semibold">Sab free — 10 minute mein.</span>
            </h2>

            <div className="flex items-start gap-3 bg-green-500/20 border border-green-400/40 rounded-xl px-4 py-3 max-w-lg mb-6 backdrop-blur-sm">
              <span className="text-green-300 text-xl shrink-0">✅</span>
              <div>
                <p className="text-white font-bold text-sm">{STATS.currentKist}vi Kist Release Ho Chuki — {STATS.currentKistDate}!</p>
                <p className="text-green-200 text-xs mt-0.5">Paisa aaya ya nahi — abhi status check karo. eKYC pending hai to turant karo.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-300 text-gray-900 font-black px-5 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/40">
                📆 {STATS.currentKist}vi Kist Status Dekho
              </Link>
              <Link href="/articles/pm-kisan-ekyc-online-2026" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all hover:scale-105 backdrop-blur-sm">
                🔐 eKYC Karo — Free
              </Link>
              <Link href="/calculator" className="inline-flex items-center gap-2 bg-amber-400/25 hover:bg-amber-400/35 border border-amber-300/50 text-amber-200 font-bold px-5 py-3 rounded-xl text-sm transition-all hover:scale-105">
                🧮 Kisan Calculator
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-green-700/70 to-green-600/70 px-5 py-4">
                <h3 className="text-white font-black text-base flex items-center gap-2">🏛️ PM Kisan — Quick Info 2026</h3>
              </div>
              <div className="divide-y divide-white/5" ref={statsReveal.ref}>
                {[
                  { icon: '💰', label: 'Saalana Labh', value: STATS.annualBenefit, sub: '3 kiston mein', grad: 'from-emerald-400 to-green-600' },
                  { icon: '🏦', label: 'Per Kist', value: STATS.perKist, sub: 'Seedha bank mein', grad: 'from-blue-400 to-cyan-600' },
                  { icon: '👨‍', label: 'Registered Farmers', value: STATS.registeredFarmers, sub: 'Poore India mein', grad: 'from-amber-400 to-orange-500' },
                  { icon: '✅', label: `${STATS.currentKist}vi Kist`, value: 'Released', sub: STATS.currentKistDate, grad: 'from-green-400 to-emerald-600' },
                  { icon: '⏳', label: `${STATS.nextKist}vi Kist`, value: 'Expected', sub: STATS.nextKistDate, grad: 'from-yellow-400 to-amber-500' },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center justify-between px-5 py-3 transition-all duration-500" style={{ opacity: statsReveal.visible ? 1 : 0, transform: statsReveal.visible ? 'translateX(0)' : 'translateX(-16px)', transitionDelay: `${i * 80}ms` }}>
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">{s.icon}</span>
                      <div>
                        <p className="text-white/60 text-[11px] leading-none mb-0.5">{s.label}</p>
                        <p className="text-white/40 text-[10px]">{s.sub}</p>
                      </div>
                    </div>
                    <span className={`font-black text-sm bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}>{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl text-sm transition-colors">
                  📖 {STATS.currentKist}vi Kist Status Guide Padho
                </Link>
                <p className="text-center text-white/30 text-[10px] mt-2">Guide padhne ke baad official site par jao</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-green-950/90 border-b border-green-900 py-2.5">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-green-400">
            {['✅ 100% Free', '🔒 Koi Data Store Nahi', '🏛️ pmkisan.gov.in Verified', '📞 Helpline: 155261', '✍️ Sidhu Singh — Agricultural Expert'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox icon="👨‍🌾" value={STATS.registeredFarmers} label="Registered Farmers" sub="Poore India mein" delay={0} />
            <StatBox icon="💰" value={STATS.annualBenefit} label="Saalana Labh" sub="Har eligible kisan ko" delay={100} />
            <StatBox icon="✅" value={STATS.currentKist} label="Kist Ab Tak" sub={`${STATS.currentKistDate} tak`} delay={200} />
            <StatBox icon="📱" value="100% Free" label="Yeh Portal" sub="Koi hidden charge nahi" delay={300} />
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-12 bg-white" aria-labelledby="problems-heading">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🤔 Aapki Problem Kya Hai?</span>
              <h2 id="problems-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">PM Kisan Problem — Seedha Solution</h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">Jo problem hai uska naam click karo — step by step guide milegi</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: '💸', title: 'Kist Nahi Aayi', sub: 'Payment pending ya failed', href: '/articles/pm-kisan-payment-failed-status-2026', bg: 'bg-red-50', border: 'border-red-200', tag: 'bg-red-100 text-red-700' },
              { icon: '🔐', title: 'eKYC Karna Hai', sub: 'OTP ya CSC — dono free', href: '/articles/pm-kisan-ekyc-online-2026', bg: 'bg-green-50', border: 'border-green-200', tag: 'bg-green-100 text-green-700' },
              { icon: '❌', title: 'Rejected Ho Gaya', sub: 'Rejection reason pata karo', href: '/articles/pm-kisan-rejected-list-2026', bg: 'bg-orange-50', border: 'border-orange-200', tag: 'bg-orange-100 text-orange-700' },
              { icon: '✏️', title: 'Naam Galat Hai', sub: '15 min mein fix karo', href: '/articles/pm-kisan-name-correction-online-2026', bg: 'bg-purple-50', border: 'border-purple-200', tag: 'bg-purple-100 text-purple-700' },
              { icon: '🌾', title: 'Land Seeding No', sub: 'Zameen link nahi — yeh karo', href: '/articles/pm-kisan-land-seeding-status-check', bg: 'bg-yellow-50', border: 'border-yellow-200', tag: 'bg-yellow-100 text-yellow-700' },
              { icon: '📝', title: 'Pehli Baar Register', sub: 'New farmer registration free', href: '/articles/pm-kisan-registration-online-2026', bg: 'bg-blue-50', border: 'border-blue-200', tag: 'bg-blue-100 text-blue-700' },
              { icon: '📋', title: 'List Mein Naam', sub: 'Village wise dekho', href: '/articles/pm-kisan-beneficiary-list-2026', bg: 'bg-teal-50', border: 'border-teal-200', tag: 'bg-teal-100 text-teal-700' },
              { icon: '🔧', title: 'Koi Aur Problem', sub: '10 common problems guide', href: '/articles/pm-kisan-problems-solution-guide-2026', bg: 'bg-gray-50', border: 'border-gray-200', tag: 'bg-gray-100 text-gray-700' },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 60}>
                <Link href={c.href} className={`${c.bg} ${c.border} border rounded-2xl p-4 flex flex-col gap-2 hover:shadow-lg hover:scale-[1.02] transition-all no-underline group h-full`}>
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{c.icon}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${c.tag}`}>Guide</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{c.title}</h3>
                  <p className="text-gray-500 text-xs leading-snug">{c.sub}</p>
                  <span className="text-xs font-bold text-gray-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 mt-auto">Padho →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="latest-heading">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🆕 Nayi Guides — Abhi Update Ki Gayi</span>
              <h2 id="latest-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">PM Kisan — ताज़ी जानकारी हिंदी में</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Har article ek real problem solve karta hai — <strong>sirf government info nahi, practical step-by-step guide</strong></p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEW_ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link href={`/articles/${a.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline h-full flex flex-col">
                  <ArticleImage src={a.image} alt={a.title} emoji={a.emoji} />
                  <div className="p-4 flex flex-col flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full self-start ${CAT_COLORS[a.category] ?? 'bg-gray-100 text-gray-600'}`}>{a.category}</span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mt-2 mb-1.5 group-hover:text-green-700 transition-colors">{a.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{a.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {a.keywords.hinglish.map(kw => (
                        <span key={kw} className="text-[10px] bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded-full font-medium" title={`Search in Hinglish: ${kw}`}>{kw}</span>
                      ))}
                      {a.keywords.hindi.map(kw => (
                        <span key={kw} className="text-[10px] bg-blue-50 border border-blue-200 text-blue-700 px-2 py-0.5 rounded-full font-medium" title={`Search in Hindi: ${kw}`}>{kw}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                      <span className="text-[11px] text-gray-400">✍️ Sidhu Singh</span>
                      <span className="text-xs font-bold text-green-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Guide Padho →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="flex flex-col items-center mt-10 gap-3">
              <Link href="/articles" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:scale-105 shadow-lg shadow-green-600/30">
                📚 Saari Guides Dekho — View All Articles
              </Link>
              <p className="text-gray-400 text-xs">{STATS.totalArticles} guides — PM Kisan, KCC, PMFBY, AgriStack, Soil Health Card aur zyada</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-white" aria-labelledby="mission-heading">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🏛️ Hamara Mission</span>
              <h2 id="mission-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">KisanStatus.com — भारत के किसानों की अपनी website</h2>
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto text-center text-gray-600 text-sm leading-relaxed mb-10 space-y-3">
            <p>Bhai, <strong>{STATS.registeredFarmers} se zyada farmers</strong> PM Kisan se jude hain — lekin lakho kisan har saal sirf isliye kist se reh jaate hain kyunki unhe pata nahi eKYC kaise hoti hai, land seeding kya hoti hai, ya naam mismatch kaise fix karte hain.</p>
            <p>KisanStatus.com ka ek hi kaam hai — <strong>government ke complex process ko simple Hinglish mein samjhana.</strong> Har article real farmer problems se likha gaya hai — government website copy-paste nahi.</p>
            <p>Yeh platform <strong>Sidhu Singh</strong> manage karte hain — agricultural content expert jo pichhle 5 saal se Indian farmers ko government schemes navigate karne mein help kar rahe hain.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: '✅', title: '100% Free', sub: 'Koi guide, tool ya info — kabhi charge nahi.' },
              { icon: '🔒', title: 'Data Safe', sub: 'Koi Aadhaar ya mobile store nahi hota.' },
              { icon: '🏛️', title: 'Verified Info', sub: 'Sab pmkisan.gov.in se verify ki gayi.' },
              { icon: '✍️', title: 'Real Content', sub: 'Government copy-paste nahi — apna likha.' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
                  <span className="text-2xl block mb-2">{f.icon}</span>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-snug">{f.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="text-center text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs max-w-2xl mx-auto mt-8">⚠️ <strong>Disclaimer:</strong> KisanStatus.com ek independent information portal hai. Yeh Government of India ya pmkisan.gov.in ka official platform nahi hai.</p>
          </Reveal>
        </div>
      </section>

      <KisanTemplates />
      <FAQSection faqs={FAQS} />
      <AiAssistant />
    </>
  );
}