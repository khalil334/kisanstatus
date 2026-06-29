'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';

const STATS = {
  registeredFarmers: '11 Cr+',
  receivedKist: '9.44 Cr+',
  annualBenefit: '₹6,000',
  perKist: '₹2,000',
  currentKist: '23',
  nextKist: '24',
  currentKistDate: '20 June 2026',
  nextKistDate: 'October 2026',
  totalArticles: '26+',
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  
  return { ref, visible };
}

const TOP_ARTICLES = [
  {
    slug: 'pm-kisan-self-registered-status-check',
    title: 'PM Kisan Self Registered Status Check 2026',
    emoji: '📋',
    image: '/images/pm-kisan-self-registered-status/pm-kisan-portal-homepage.webp',
    desc: 'Self registration ka status kaise check karein — step-by-step guide',
    category: 'Status',
  },
  {
    slug: 'soil-health-card-complete-guide-2026',
    title: 'Soil Health Card Complete Guide 2026',
    emoji: '🌱',
    image: '/images/soil-health-card-complete-guide-2026.webp',
    desc: 'Mitti health card download, status check, PDF download — complete guide',
    category: 'Farming',
  },
  {
    slug: 'pm-kisan-complete-guide',
    title: 'PM Kisan Complete Guide 2026',
    emoji: '📖',
    image: '/images/pm-kisan-status-check-hero.webp',
    desc: 'Saari problems ka solution — status check, eKYC, payment, rejection',
    category: 'Guide',
  },
];

const CAT_COLORS: Record<string, string> = {
  Status: 'bg-blue-100 text-blue-700',
  Farming: 'bg-amber-100 text-amber-700',
  Guide: 'bg-rose-100 text-rose-700',
};

const TICKER_ITEMS = [
  `🔴 LIVE: PM Kisan ${STATS.currentKist}vi Kist — ${STATS.currentKistDate} ko ${STATS.perKist} release ho chuki hai`,
  `⏳ ${STATS.nextKist}vi Kist Expected: ${STATS.nextKistDate} — eKYC abhi complete karo`,
  '🔐 eKYC Mandatory: Bina eKYC kist NAHI milegi — pmkisan.gov.in par karo',
  ' Helpline: 155261 | Toll Free: 1800-115-526',
  `✅ ${STATS.registeredFarmers} registered farmers — ${STATS.receivedKist} ko ${STATS.currentKist}vi kist mil chuki hai`,
];

const FAQS = [
  {
    q: 'पीएम किसान की 23वीं किस्त कब आई?',
    a: `23वीं किस्त ${STATS.currentKistDate} को release हो चुकी है — ${STATS.registeredFarmers} registered farmers में से ${STATS.receivedKist} farmers को ${STATS.perKist} DBT से मिले हैं। अगर अभी तक पैसा नहीं आया तो eKYC और bank में Aadhaar seeding ज़रूर check करें।`,
  },
  {
    q: 'पीएम किसान eKYC नहीं हुई तो क्या पैसा आएगा?',
    a: 'नहीं — बिना eKYC के कोई भी किस्त नहीं आती। eKYC free है: pmkisan.gov.in → eKYC → Aadhaar number → OTP verify। या नज़दीकी CSC center जाएं — बिल्कुल मुफ्त।',
  },
  {
    q: 'पीएम किसान स्टेटस में "Land Seeding No" दिखाए तो क्या करें?',
    a: 'इसका मतलब आपकी ज़मीन PM Kisan portal से link नहीं हुई। Fix: पटवारी/लेखपाल से मिलें, Khasra-Khatauni अपडेट करवाएं, Block Agriculture Officer को application दें। 15-30 दिन में status check करें।',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const articleListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'PM Kisan Latest Guides 2026',
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

function Reveal({ children, delay = 0, className = '' }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) {
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

function ArticleImage({ src, alt, emoji }: { src: string; alt: string; emoji: string }) {
  const [error, setError] = useState(false);
  
  return (
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 shrink-0">
      {!error ? (
        <Image 
          src={src} 
          alt={alt} 
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setError(true)}
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-5xl">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
      <span className="absolute top-3 left-3 bg-amber-400 text-gray-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md z-20">NEW</span>
      <span className="absolute bottom-3 left-3 text-2xl drop-shadow-lg z-20">{emoji}</span>
    </div>
  );
}

// ✅ REALISTIC WHEAT STALK COMPONENT
function WheatStalk({ x, height, lean, delay, color, earColor }: { 
  x: number; 
  height: number; 
  lean: number; 
  delay: number;
  color: string;
  earColor: string;
}) {
  const topX = x + lean;
  const topY = 200 - height;
  const midX = x + lean * 0.5;
  const midY = 200 - height * 0.5;
  
  return (
    <g className="wheat-stalk" style={{ animationDelay: `${delay}s` }}>
      {/* Stem */}
      <path
        d={`M${x},200 Q${midX},${midY} ${topX},${topY}`}
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Wheat Ear (Head) - Realistic oval shape */}
      <ellipse
        cx={topX}
        cy={topY - 8}
        rx="4"
        ry="12"
        fill={earColor}
        transform={`rotate(${lean * 0.5} ${topX} ${topY - 8})`}
      />
      
      {/* Grain details on ear */}
      <ellipse cx={topX - 1} cy={topY - 14} rx="1.5" ry="2" fill="#92400e" opacity="0.6" />
      <ellipse cx={topX + 1} cy={topY - 10} rx="1.5" ry="2" fill="#92400e" opacity="0.6" />
      <ellipse cx={topX - 1} cy={topY - 6} rx="1.5" ry="2" fill="#92400e" opacity="0.6" />
      
      {/* Awns (whiskers) on top - realistic wheat feature */}
      <line x1={topX} y1={topY - 18} x2={topX - 3} y2={topY - 28} stroke={earColor} strokeWidth="0.8" opacity="0.8" />
      <line x1={topX} y1={topY - 18} x2={topX + 3} y2={topY - 28} stroke={earColor} strokeWidth="0.8" opacity="0.8" />
      <line x1={topX} y1={topY - 18} x2={topX} y2={topY - 30} stroke={earColor} strokeWidth="0.8" opacity="0.8" />
      <line x1={topX} y1={topY - 15} x2={topX - 4} y2={topY - 22} stroke={earColor} strokeWidth="0.8" opacity="0.7" />
      <line x1={topX} y1={topY - 15} x2={topX + 4} y2={topY - 22} stroke={earColor} strokeWidth="0.8" opacity="0.7" />
      
      {/* Leaves */}
      <path
        d={`M${x + lean * 0.3},${200 - height * 0.4} Q${x + lean * 0.3 - 8},${200 - height * 0.5} ${x + lean * 0.3 - 12},${200 - height * 0.6}`}
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d={`M${x + lean * 0.6},${200 - height * 0.7} Q${x + lean * 0.6 + 8},${200 - height * 0.8} ${x + lean * 0.6 + 12},${200 - height * 0.9}`}
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </g>
  );
}

export default function HomeContent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />

      {/* Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden flex items-center">
        <span className="shrink-0 bg-red-800 font-black text-xs px-3 py-0.5 mr-3 uppercase tracking-widest rounded-sm">
          🔴 LIVE
        </span>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-16 whitespace-nowrap text-xs font-medium animate-marquee">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="shrink-0">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* HERO — Realistic Wheat Field with Wind Animation */}
      <section 
        className="relative overflow-hidden py-14 md:py-20"
        aria-label="Hero"
      >
        {/* Sky Gradient Background - Golden Hour */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1e3a5f 0%, #f59e0b 40%, #fbbf24 60%, #fcd34d 80%, #92400e 100%)'
          }}
        />

        {/* Sun */}
        <div className="absolute top-8 right-16 md:right-24 w-24 h-24 md:w-36 md:h-36 rounded-full bg-yellow-200 blur-2xl animate-pulse-slow" />
        <div className="absolute top-12 right-20 md:right-28 w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-100" />

        {/* Wind Particles - Floating */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="wind-particle wind-particle-1" />
          <div className="wind-particle wind-particle-2" />
          <div className="wind-particle wind-particle-3" />
          <div className="wind-particle wind-particle-4" />
          <div className="wind-particle wind-particle-5" />
        </div>

        {/* ✅ REALISTIC WHEAT FIELD */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 overflow-hidden">
          {/* Ground base */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900 to-amber-700" />

          {/* Wheat Layer 1 - Back (Darker, smaller) */}
          <svg 
            className="absolute bottom-12 w-full h-full wheat-sway-slow"
            viewBox="0 0 1200 200" 
            preserveAspectRatio="none"
            style={{ transformOrigin: 'bottom center' }}
          >
            {Array.from({ length: 80 }).map((_, i) => (
              <WheatStalk
                key={`w1-${i}`}
                x={(i / 80) * 1200 + Math.random() * 10}
                height={80 + Math.random() * 40}
                lean={(Math.random() - 0.5) * 25}
                delay={Math.random() * 2}
                color="#92400e"
                earColor="#b45309"
              />
            ))}
          </svg>

          {/* Wheat Layer 2 - Middle */}
          <svg 
            className="absolute bottom-8 w-full h-full wheat-sway"
            viewBox="0 0 1200 200" 
            preserveAspectRatio="none"
            style={{ transformOrigin: 'bottom center' }}
          >
            {Array.from({ length: 60 }).map((_, i) => (
              <WheatStalk
                key={`w2-${i}`}
                x={(i / 60) * 1200 + Math.random() * 15}
                height={90 + Math.random() * 50}
                lean={(Math.random() - 0.5) * 35}
                delay={Math.random() * 2}
                color="#b45309"
                earColor="#d97706"
              />
            ))}
          </svg>

          {/* Wheat Layer 3 - Front (Brighter, larger) */}
          <svg 
            className="absolute bottom-0 w-full h-full wheat-sway-fast"
            viewBox="0 0 1200 200" 
            preserveAspectRatio="none"
            style={{ transformOrigin: 'bottom center' }}
          >
            {Array.from({ length: 45 }).map((_, i) => (
              <WheatStalk
                key={`w3-${i}`}
                x={(i / 45) * 1200 + Math.random() * 20}
                height={100 + Math.random() * 60}
                lean={(Math.random() - 0.5) * 45}
                delay={Math.random() * 2}
                color="#d97706"
                earColor="#f59e0b"
              />
            ))}
          </svg>
        </div>

        {/* Content */}
        <div className="container-site relative z-10 max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-100 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider backdrop-blur-sm">
            🌾 India Ka #1 PM Kisan Information Portal
          </div>

          <h1 className="font-black text-white leading-[1.15] mb-4 tracking-tight drop-shadow-lg">
            <span className="text-3xl md:text-5xl block">PM Kisan Status Check —</span>
            <span className="text-2xl md:text-4xl block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-300">
              पीएम किसान {STATS.currentKist}वीं किस्त 2026
            </span>
          </h1>

          <h2 className="text-base md:text-lg text-amber-50 mb-6 max-w-xl leading-relaxed font-normal drop-shadow-md">
            Kisan bhai — <strong className="text-white">{STATS.currentKist}vi kist {STATS.currentKistDate} ko release ho chuki hai!</strong> Apna status abhi check karo, eKYC complete karo, paisa aaya ya nahi dekho. <span className="text-yellow-200 font-semibold">Sab free — 10 minute mein.</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link 
              href="/articles/pm-kisan-23vi-kist-2026-status-check" 
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-amber-900/40"
            >
              📆 {STATS.currentKist}vi Kist Status Dekho
            </Link>
            <Link 
              href="/articles/pm-kisan-ekyc-online-2026" 
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 backdrop-blur-sm"
            >
              🔐 eKYC Karo — Free
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-8 text-[11px] text-amber-100 drop-shadow-md">
            {['✅ 100% Free', '🔒 Koi Data Store Nahi', '🏛️ pmkisan.gov.in Verified', '📞 Helpline: 155261'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TOP PROBLEMS */}
      <section className="py-12 bg-white" aria-labelledby="problems-heading">
        <div className="container-site px-4">
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🤔 Aapki Problem Kya Hai?</span>
              <h2 id="problems-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Seedha Solution — Click Karo</h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">Sabse common problems ke step-by-step guides</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { icon: '💸', title: 'Kist Nahi Aayi', sub: 'Payment pending ya failed', href: '/articles/pm-kisan-payment-failed-status-2026', bg: 'bg-red-50', border: 'border-red-200', tag: 'bg-red-100 text-red-700' },
              { icon: '', title: 'eKYC Karna Hai', sub: 'OTP ya CSC — dono free', href: '/articles/pm-kisan-ekyc-online-2026', bg: 'bg-green-50', border: 'border-green-200', tag: 'bg-green-100 text-green-700' },
              { icon: '❌', title: 'Rejected Ho Gaya', sub: 'Rejection reason pata karo', href: '/articles/pm-kisan-rejected-list-2026', bg: 'bg-orange-50', border: 'border-orange-200', tag: 'bg-orange-100 text-orange-700' },
              { icon: '✏️', title: 'Naam Galat Hai', sub: '15 min mein fix karo', href: '/articles/pm-kisan-name-correction-online-2026', bg: 'bg-purple-50', border: 'border-purple-200', tag: 'bg-purple-100 text-purple-700' },
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
          
          <Reveal delay={300}>
            <div className="text-center mt-6">
              <Link href="/articles" className="text-sm font-bold text-green-700 hover:text-green-800 hover:underline">
                Saari Problems Dekho →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AGRICULTURE IMAGE 1: Indian Farmers in Field */}
      <section className="py-14 bg-gradient-to-b from-green-50 to-white" aria-labelledby="farmers-heading">
        <div className="container-site px-4">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider"> Hamare Kisan</span>
              <h2 id="farmers-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Bharat Ki Asli Taqat</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">11 Crore+ kisanon ko PM Kisan se mil raha hai har saal ₹6,000</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-10">
              <Image
                src="/indian-farmers-wheat-field.webp"
                alt="Indian Farmers in Green Wheat Field - PM Kisan Samman Nidhi Beneficiaries"
                width={1200}
                height={630}
                quality={80}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 1200px"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-black mb-2">PM Kisan Samman Nidhi</h3>
                  <p className="text-green-200 text-sm md:text-base">Har kisan ko ₹2,000 har 4 mahine mein — Seedha bank account mein</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Registered Farmers', value: '11 Cr+', icon: '👨‍🌾' },
              { label: 'Received Payment', value: '9.44 Cr+', icon: '💰' },
              { label: 'Per Year', value: '6,000', icon: '' },
              { label: 'Per Kist', value: '₹2,000', icon: '💵' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-green-100 text-center hover:shadow-xl transition-all">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-green-700 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 bg-white" aria-labelledby="how-heading">
        <div className="container-site px-4">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">📋 Process</span>
              <h2 id="how-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">PM Kisan — 3 Steps Mein Complete</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Bas ye 3 kaam karo, ₹2,000 har 4 mahine mein seedha bank mein</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              {
                step: '01',
                title: 'Registration Karo',
                desc: 'pmkisan.gov.in par jaake Aadhaar number se register karo',
                icon: '📝',
                color: 'bg-blue-50 border-blue-200',
              },
              {
                step: '02',
                title: 'eKYC Complete Karo',
                desc: 'OTP ya biometric se eKYC verify karo — bilkul free',
                icon: '',
                color: 'bg-green-50 border-green-200',
              },
              {
                step: '03',
                title: '₹2,000 Paao',
                desc: 'Har 4 mahine mein seedha bank account mein paisa',
                icon: '💰',
                color: 'bg-amber-50 border-amber-200',
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className={`${item.color} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all`}>
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <span className="inline-block bg-white text-gray-700 text-xs font-black px-3 py-1 rounded-full mb-3">
                    Step {item.step}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="latest-heading">
        <div className="container-site px-4">
          <Reveal>
            <div className="text-center mb-8">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider"> Nayi Guides</span>
              <h2 id="latest-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">ताज़ी जानकारी हिंदी में</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Practical step-by-step guides — government copy-paste nahi</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {TOP_ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link href={`/articles/${a.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline h-full flex flex-col">
                  <ArticleImage src={a.image} alt={a.title} emoji={a.emoji} />
                  <div className="p-4 flex-col flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full self-start ${CAT_COLORS[a.category] ?? 'bg-gray-100 text-gray-600'}`}>{a.category}</span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mt-2 mb-1.5 group-hover:text-green-700 transition-colors">{a.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{a.desc}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                      <span className="text-[11px] text-gray-400">✍️ KisanStatus Team</span>
                      <span className="text-xs font-bold text-green-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Padho →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-10">
              <Link href="/articles" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-600/30">
                📚 Saari {STATS.totalArticles} Guides Dekho
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AGRICULTURE IMAGE 2: Modern Farming + Technology */}
      <section className="py-14 bg-gradient-to-b from-amber-50 to-white" aria-labelledby="modern-heading">
        <div className="container-site px-4">
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider"> Modern Farming</span>
              <h2 id="modern-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Technology + Kheti</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">PM Kisan ke saath modern farming se double income</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-10">
              <Image
                src="/modern-farming-technology-india.webp"
                alt="Modern Farming Technology in India - Tractor, Mobile App, Digital Agriculture for PM Kisan Farmers"
                width={1200}
                height={630}
                quality={80}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 1200px"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="font-bold">Mobile Se Apply</div>
                    <div className="text-xs opacity-90">Ghar baithe registration</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl mb-2">🌐</div>
                    <div className="font-bold">Online Status</div>
                    <div className="text-xs opacity-90">Kabhi bhi check karo</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl mb-2">💳</div>
                    <div className="font-bold">Direct Bank</div>
                    <div className="text-xs opacity-90">DBT se seedha account</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '', title: 'Soil Health Card', desc: 'Mitti testing free', color: 'bg-green-500' },
              { icon: '', title: 'Irrigation Support', desc: 'Water management', color: 'bg-blue-500' },
              { icon: '🌾', title: 'Crop Insurance', desc: 'Fasal suraksha', color: 'bg-amber-500' },
              { icon: '', title: 'Market Price', desc: 'Mandi bhav jaano', color: 'bg-purple-500' },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="container-site pb-10 px-4">
        <p className="text-center text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs max-w-2xl mx-auto">
          ⚠️ <strong>Disclaimer:</strong> KisanStatus.com ek independent information portal hai. Yeh Government of India ya pmkisan.gov.in ka official platform nahi hai.
        </p>
      </div>

      {/* FAQ */}
      <FAQSection faqs={FAQS} />
      
      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .wind-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: windFloat linear infinite;
        }
        .wind-particle-1 { top: 30%; left: -10px; animation-duration: 8s; animation-delay: 0s; }
        .wind-particle-2 { top: 50%; left: -10px; animation-duration: 10s; animation-delay: 2s; }
        .wind-particle-3 { top: 20%; left: -10px; animation-duration: 12s; animation-delay: 4s; }
        .wind-particle-4 { top: 60%; left: -10px; animation-duration: 9s; animation-delay: 1s; }
        .wind-particle-5 { top: 40%; left: -10px; animation-duration: 11s; animation-delay: 3s; }
        @keyframes windFloat {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 20px)) translateY(-30px); opacity: 0; }
        }
        
        /* ✅ REALISTIC WHEAT SWAY ANIMATIONS */
        .wheat-sway-slow {
          animation: wheatSwaySlow 5s ease-in-out infinite;
        }
        .wheat-sway {
          animation: wheatSway 4s ease-in-out infinite;
        }
        .wheat-sway-fast {
          animation: wheatSwayFast 3.5s ease-in-out infinite;
        }
        .wheat-stalk {
          transform-origin: bottom center;
          animation: wheatStalkSway 3s ease-in-out infinite;
        }
        
        @keyframes wheatSwaySlow {
          0%, 100% { transform: rotate(-1.5deg) skewX(-1deg); }
          50% { transform: rotate(2deg) skewX(1deg); }
        }
        @keyframes wheatSway {
          0%, 100% { transform: rotate(-2deg) skewX(-1.5deg); }
          50% { transform: rotate(2.5deg) skewX(1.5deg); }
        }
        @keyframes wheatSwayFast {
          0%, 100% { transform: rotate(-3deg) skewX(-2deg); }
          50% { transform: rotate(3.5deg) skewX(2deg); }
        }
        @keyframes wheatStalkSway {
          0%, 100% { transform: rotate(-2deg); }
          25% { transform: rotate(1deg); }
          50% { transform: rotate(3deg); }
          75% { transform: rotate(0deg); }
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
      `}</style>
    </>
  );
}