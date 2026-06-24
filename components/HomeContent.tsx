/**
 * HomeContent.tsx — KisanStatus.com v20
 * Full SEO: Professional homepage, Hindi+Hinglish, E-E-A-T, YMYL-safe
 * No big gov links — "guide padho pehle" system
 * Author: Sidhu Singh
 * v20: 3 naye articles add kiye + Latest Articles section
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import AiAssistant from '@/components/AiAssistant';
import KisanTemplates from '@/components/KisanTemplates';

const ARTICLES = [
  { slug:'kisan-credit-card-online-apply-2026',             title:'Kisan Credit Card Online Apply 2026',    emoji:'💳', image:null, desc:'KCC apply karo ₹5 lakh tak loan limit, 4% interest se shuru',    category:'Loan',         isNew:true  },
  { slug:'pm-kisan-23vi-kist-2026-status-check',            title:'PM Kisan 23vi Kist Status Check 2026',   emoji:'📆', image:null, desc:'23vi kist kab aayegi — status check, date aur eligibility',      category:'Status',       isNew:true  },
  { slug:'pm-kisan-ekyc-online-2026',                       title:'PM Kisan eKYC Online 2026',              emoji:'🔐', image:null, desc:'Ghar baithe free mein eKYC karo — OTP ya CSC dono tarike',        category:'eKYC',         isNew:true  },
  { slug:'pm-kisan-payment-failed-status-2026',             title:'PM Kisan Payment Failed Fix 2026',       emoji:'💸', image:null, desc:'Payment nahi aayi? Bank error, NPCI issue — seedha solution',    category:'Payment',      isNew:true  },
  { slug:'pm-kisan-rejected-list-2026',                     title:'PM Kisan Rejected List 2026',            emoji:'📋', image:null, desc:'Rejected kyun hua? 10 reasons aur har ek ka fix',               category:'Rejection',    isNew:true  },
  { slug:'pm-kisan-registration-online-2026',               title:'PM Kisan Registration Online 2026',      emoji:'📝', image:null, desc:'Pehli baar register karna hai? Documents se lekar submit tak',   category:'Registration', isNew:true  },
  { slug:'pm-kisan-name-correction-online-2026',            title:'PM Kisan Name Correction 2026',          emoji:'✏️', image:null, desc:'Naam mein spelling galat hai? Ghar baithe 15 min mein fix',     category:'Correction',   isNew:true  },
  { slug:'pm-kisan-beneficiary-list-2026',                  title:'PM Kisan Beneficiary List 2026',         emoji:'📋', image:null, desc:'Apne gaon ki poori list dekho — naam hai ya nahi check karo',   category:'List',         isNew:true  },
  { slug:'pm-kisan-installment-history-check-online',       title:'PM Kisan Kist History Check',            emoji:'📊', image:null, desc:'Kaunsi kist kab aayi — poori history ek jagah dekho',           category:'History',      isNew:false },
  { slug:'pm-kisan-land-seeding-status-check',              title:'PM Kisan Land Seeding Status',           emoji:'🌾', image:null, desc:'Land Seeding No dikhta hai? Yeh karo — patwari se step tak',    category:'Land',         isNew:false },
  { slug:'pm-kisan-beneficiary-list-village-wise-2026',     title:'Village Wise Beneficiary List 2026',     emoji:'🏘️', image:null, desc:'Gaon wise naam dhundho — state aur block filter se',            category:'List',         isNew:false },
  { slug:'kisan-rin-kaha-se-le-2026',                       title:'Kisan Loan Kahan Se Le 2026',            emoji:'💰', image:null, desc:'KCC, SBI, NABARD — kaunsa loan best hai aur kaise milega',      category:'Loan',         isNew:false },
  { slug:'pmfby-crop-insurance-2026',                       title:'PMFBY Fasal Bima Yojana 2026',           emoji:'🌱', image:null, desc:'Fasal bima claim kaise kare — premium se lekar settlement tak', category:'Insurance',    isNew:false },
  { slug:'kisan-tractor-loan-2026',                         title:'Kisan Tractor Loan 2026',                emoji:'🚜', image:null, desc:'Tractor kharidna hai? Kaunsa loan, kitni EMI — complete guide', category:'Loan',         isNew:false },
  { slug:'pm-kisan-21vi-installment-status-check',          title:'PM Kisan 21vi Kist Status Check',        emoji:'📅', image:null, desc:'21vi kist aayi ki nahi — mobile se 2 minute mein check karo',  category:'Status',       isNew:false },
  { slug:'pm-kisan-correction-deactivate-block-guide-2026', title:'PM Kisan Correction & Deactivate Guide', emoji:'🛠️', image:null, desc:'Naam, bank, zameen — correction guide aur deactivate fix',    category:'Correction',   isNew:false },
  { slug:'pm-kisan-problems-solution-guide-2026',           title:'PM Kisan 10 Common Problems — Fix',      emoji:'🔧', image:null, desc:'RFT pending, PFMS error, payment fail — 10 problems ka hal',   category:'Problems',     isNew:false },
  { slug:'pm-kisan-fto-generated-ka-matlab-kya-hai',        title:'PM Kisan FTO Generated Ka Matlab',       emoji:'📄', image:null, desc:'FTO Generated dikhta hai? Matlab kya hai aur payment kab aayegi', category:'Payment', isNew:true  },
  { slug:'pm-kisan-24vi-kist',                              title:'PM Kisan 24vi Kist 2026',                emoji:'📆', image:null, desc:'24vi kist kab aayegi — status check, date aur payment guide',   category:'Status',       isNew:true  },
  { slug:'agristack-kya-hai',                               title:'AgriStack Kya Hai 2026',                 emoji:'🌐', image:null, desc:'Farmer ID kya hoti hai, AgriStack registration aur fayde',       category:'Problems',     isNew:true  },
  { slug:'pm-kisan-mobile-number-change',                   title:'PM Kisan Mobile Number Change 2026',     emoji:'📱', image:null, desc:'Mobile number change karo online ya CSC se — step by step',     category:'Correction',   isNew:true  },
  // ── IMAGE THUMBNAIL ARTICLE ──────────────────────────────────────────────
  { slug:'nano-dap-500ml-price-in-india-2026',              title:'Nano DAP 500ml Price in India 2026',     emoji:'🧴', image:'/images/nano-dap-500ml-price-india-2026.webp', desc:'IFFCO Nano DAP 500ml ki price, dosage per acre aur kahan se kharidein — complete guide', category:'Loan', isNew:true },
];

// ── Devanagari Hindi FAQs — voice search optimized ──────────────────────────
const FAQS = [
  {
    q:'पीएम किसान की 23वीं किस्त कब आई?',
    a:'23वीं किस्त 20 जून 2026 को release हो चुकी है — 9.44 करोड़ से ज़्यादा किसानों को ₹2,000 DBT से मिले हैं। अगर अभी तक पैसा नहीं आया तो eKYC और bank में Aadhaar seeding ज़रूर check करें। Status check: pmkisan.gov.in → Beneficiary Status।',
  },
  {
    q:'पीएम किसान eKYC नहीं हुई तो क्या पैसा आएगा?',
    a:'नहीं — बिना eKYC के कोई भी किस्त नहीं आती, चाहे registration कितना भी सही हो। eKYC free है: pmkisan.gov.in → eKYC → Aadhaar number → OTP verify। या नज़दीकी CSC center जाएं — बिल्कुल मुफ्त।',
  },
  {
    q:'पीएम किसान स्टेटस में "Land Seeding No" दिखाए तो क्या करें?',
    a:'इसका मतलब आपकी ज़मीन PM Kisan portal से link नहीं हुई। Fix: 1) अपने पटवारी/लेखपाल से मिलें 2) Khasra-Khatauni अपडेट करवाएं 3) Block Agriculture Officer को application दें 4) 15-30 दिन में status check करें।',
  },
  {
    q:'पीएम किसान में नाम गलत है तो payment आएगी क्या?',
    a:'नहीं — name mismatch से eKYC fail होती है और payment रुक जाती है। Fix: pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Name Correction। Aadhaar card देखकर बिल्कुल same spelling डालें। 15-20 दिन में update होगा।',
  },
  {
    q:'KCC (किसान क्रेडिट कार्ड) लोन कैसे मिलेगा?',
    a:'KCC के लिए: 1) नज़दीकी SBI/PNB/Bank of Baroda जाएं 2) KCC application form भरें 3) Aadhaar, land records, photo दें 4) 7-14 दिन में approval। Interest 7% p.a. (subsidy के साथ 4% effective)। ₹1.6 लाख तक बिना collateral।',
  },
];

const faqSchema = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity: FAQS.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})),
};

const websiteSchema = {
  '@context':'https://schema.org','@type':'WebSite',
  name:'KisanStatus.com', url:'https://kisanstatus.com',
  description:'PM Kisan Samman Nidhi status check, eKYC guide, 23vi kist dates, beneficiary list aur free agricultural calculators — India ke kisan ke liye.',
  potentialAction:{'@type':'SearchAction',target:'https://kisanstatus.com/search?q={search_term_string}','query-input':'required name=search_term_string'},
};

const STATS = [
  { label:'Saalana Labh',    value:'₹6,000',   sub:'3 kiston mein',       icon:'💰', grad:'from-emerald-400 to-green-600'  },
  { label:'Per Kist',        value:'₹2,000',   sub:'Seedha bank mein',    icon:'🏦', grad:'from-blue-400 to-cyan-600'      },
  { label:'Registered Kisan',value:'11 Cr+',   sub:'Poore India mein',    icon:'👨‍🌾', grad:'from-amber-400 to-orange-500'   },
  { label:'22vi Kist',       value:'Released', sub:'13 March 2026',       icon:'✅', grad:'from-green-400 to-emerald-600'  },
  { label:'23vi Kist',       value:'Released', sub:'20 June 2026',        icon:'✅', grad:'from-green-400 to-emerald-600'  },
  { label:'24vi Kist',       value:'Expected', sub:'Aug–Nov 2026',        icon:'⏳', grad:'from-yellow-400 to-amber-500'   },
];

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const categories = ['All','Status','eKYC','Payment','Registration','Correction','List','Loan','Insurance','Problems','History','Land'];
  const filtered = activeTab==='All' ? ARTICLES : ARTICLES.filter(a=>a.category===activeTab);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema)}}/>

      {/* ══════════════════════════════════════════════════════════
          HERO — Strong hook, Hinglish + Hindi keywords
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{background:'linear-gradient(135deg,#052e16 0%,#14532d 50%,#166534 100%)',minHeight:'520px'}} aria-label="Hero">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true"
          style={{backgroundImage:'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 55px),repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 55px)'}}/>
        {/* Real hero banner image — right side */}
        <div className="absolute right-0 top-0 h-full w-1/2 lg:w-3/5 opacity-30 lg:opacity-40" aria-hidden="true">
          <img
            src="/images/hero-banner.png"
            alt=""
            className="h-full w-full object-cover object-left"
            style={{maskImage:'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 100%)', WebkitMaskImage:'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,1) 100%)'}}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="container-site relative z-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* LEFT — Hook copy */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider">
              🌾 India Ka #1 PM Kisan Information Portal
            </div>

            {/* H1 — Primary hook with Devanagari */}
            <h1 className="font-black text-white leading-[1.15] mb-4 tracking-tight">
              <span className="text-3xl md:text-5xl block">
                PM Kisan Status Check —
              </span>
              <span className="text-2xl md:text-4xl block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-yellow-200">
                पीएम किसान 23वीं किस्त 2026
              </span>
            </h1>

            {/* H2 — Semantic subheading */}
            <h2 className="text-base md:text-lg text-green-100/85 mb-5 max-w-xl leading-relaxed font-normal">
              Kisan bhai — <strong className="text-white">23vi kist 20 June 2026 ko release ho chuki hai!</strong> Apna status abhi check karo:
              eKYC complete karo, bank Aadhaar seed karo, paisa aaya ya nahi dekho.{' '}
              <span className="text-green-300 font-semibold">Sab free — 10 minute mein.</span>
            </h2>

            {/* Urgency alert */}
            <div className="flex items-start gap-3 bg-green-500/20 border border-green-400/40 rounded-xl px-4 py-3 max-w-lg mb-6">
              <span className="text-green-300 text-xl shrink-0">✅</span>
              <div>
                <p className="text-white font-bold text-sm">23vi Kist Release Ho Chuki — 20 June 2026!</p>
                <p className="text-green-200 text-xs mt-0.5">Paisa aaya ya nahi — abhi status check karo. eKYC pending hai to turant karo.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/articles/pm-kisan-23vi-kist-2026-status-check"
                className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-300 text-gray-900 font-black px-5 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/40">
                📆 23vi Kist Status Dekho
              </Link>
              <Link href="/articles/pm-kisan-ekyc-online-2026"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all hover:scale-105">
                🔐 eKYC Karo — Free
              </Link>
              <Link href="/calculator"
                className="inline-flex items-center gap-2 bg-amber-400/25 hover:bg-amber-400/35 border border-amber-300/50 text-amber-200 font-bold px-5 py-3 rounded-xl text-sm transition-all hover:scale-105">
                🧮 Kisan Calculator
              </Link>
            </div>

            {/* Search intent keywords — visible as tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                'PM Kisan 23vi Kist','eKYC 2026','Payment Failed','Rejected List',
                'Name Correction','Beneficiary List','Land Seeding',
              ].map(tag=>(
                <span key={tag} className="text-[11px] bg-white/10 border border-white/15 text-green-200 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — Quick info card */}
          <div className="lg:col-span-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-700/60 to-green-600/60 border-b border-white/10 px-5 py-4">
              <h3 className="text-white font-black text-base flex items-center gap-2">
                <span>🏛️</span> PM Kisan — Quick Info 2026
              </h3>
            </div>
            <div className="divide-y divide-white/8">
              {STATS.map(s=>(
                <div key={s.label} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">{s.icon}</span>
                    <div>
                      <p className="text-white/55 text-[11px] leading-none mb-0.5">{s.label}</p>
                      <p className="text-white/35 text-[10px]">{s.sub}</p>
                    </div>
                  </div>
                  <span className={`font-black text-sm bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="p-4">
              <Link href="/articles/pm-kisan-23vi-kist-2026-status-check"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl text-sm transition-colors">
                📖 23vi Kist Status Guide Padho
              </Link>
              <p className="text-center text-white/30 text-[10px] mt-2">Guide padhne ke baad official site par jao</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-green-950/90 border-b border-green-900 py-2.5">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-green-400">
            {['✅ 100% Free','🔒 Koi Data Store Nahi','🏛️ pmkisan.gov.in Verified','📞 Helpline: 155261','✍️ Sidhu Singh — Agricultural Expert'].map(t=>(
              <span key={t} className="flex items-center gap-1">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          PROBLEM → SOLUTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white" aria-labelledby="problems-heading">
        <div className="container-site">
          <div className="text-center mb-8">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🤔 Aapki Problem Kya Hai?</span>
            <h2 id="problems-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              PM Kisan Problem — Seedha Solution
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">Jo problem hai uska naam click karo — step by step guide milegi</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {icon:'💸',title:'Kist Nahi Aayi',         sub:'Payment pending ya failed',   href:'/articles/pm-kisan-payment-failed-status-2026',  bg:'bg-red-50',      border:'border-red-200',    tag:'bg-red-100 text-red-700'    },
              {icon:'🔐',title:'eKYC Karna Hai',          sub:'OTP ya CSC — dono free',      href:'/articles/pm-kisan-ekyc-online-2026',             bg:'bg-green-50',    border:'border-green-200',  tag:'bg-green-100 text-green-700'},
              {icon:'❌',title:'Rejected Ho Gaya',        sub:'Rejection reason pata karo',  href:'/articles/pm-kisan-rejected-list-2026',           bg:'bg-orange-50',   border:'border-orange-200', tag:'bg-orange-100 text-orange-700'},
              {icon:'✏️',title:'Naam Galat Hai',          sub:'15 min mein fix karo',        href:'/articles/pm-kisan-name-correction-online-2026',  bg:'bg-purple-50',   border:'border-purple-200', tag:'bg-purple-100 text-purple-700'},
              {icon:'🌾',title:'Land Seeding No',         sub:'Zameen link nahi — yeh karo', href:'/articles/pm-kisan-land-seeding-status-check',    bg:'bg-yellow-50',   border:'border-yellow-200', tag:'bg-yellow-100 text-yellow-700'},
              {icon:'📝',title:'Pehli Baar Register',     sub:'New farmer registration free',href:'/articles/pm-kisan-registration-online-2026',     bg:'bg-blue-50',     border:'border-blue-200',   tag:'bg-blue-100 text-blue-700'  },
              {icon:'📋',title:'List Mein Naam Check',    sub:'Village wise dekho',          href:'/articles/pm-kisan-beneficiary-list-2026',        bg:'bg-teal-50',     border:'border-teal-200',   tag:'bg-teal-100 text-teal-700'  },
              {icon:'🔧',title:'Koi Aur Problem',         sub:'10 common problems guide',    href:'/articles/pm-kisan-problems-solution-guide-2026', bg:'bg-gray-50',     border:'border-gray-200',   tag:'bg-gray-100 text-gray-700'  },
            ].map(c=>(
              <Link key={c.href} href={c.href}
                className={`${c.bg} ${c.border} border rounded-2xl p-4 flex flex-col gap-2 hover:shadow-lg hover:scale-[1.02] transition-all no-underline group`}>
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{c.icon}</span>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${c.tag}`}>Guide</span>
                </div>
                <p className="font-black text-gray-900 text-sm leading-tight group-hover:text-green-700 transition-colors">{c.title}</p>
                <p className="text-[11px] text-gray-500">{c.sub}</p>
                <span className="text-[11px] font-bold text-green-700 mt-auto group-hover:translate-x-1 transition-transform inline-block">Padho →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LATEST ARTICLES SECTION — Saare articles cards mein
      ══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gray-50" aria-labelledby="articles-heading">
        <div className="container-site">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">📚 Helpful Guides</span>
            <h2 id="articles-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Sabse Kaam Ki Guides
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">Category choose karo ya sabhi guides dekho</p>
          </div>

          {/* Category filter /articles page par hai — homepage par nahi */}

          {/* Articles Grid — sirf NEW articles dikhao, max 6 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTICLES.filter(a => a.isNew).slice(0, 6).map(article => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:border-green-300 hover:scale-[1.01] transition-all no-underline group"
              >
                {/* Thumbnail — image if available, else emoji */}
                {article.image ? (
                  <div className="w-full h-36 overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-full h-20 flex items-center justify-center bg-green-50">
                    <span className="text-4xl">{article.emoji}</span>
                  </div>
                )}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    {article.isNew && (
                      <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-0.5 rounded-full">NEW</span>
                    )}
                  </div>
                  <p className="font-black text-gray-900 text-sm leading-tight group-hover:text-green-700 transition-colors">
                    {article.title}
                  </p>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{article.desc}</p>
                  <span className="text-[12px] font-bold text-green-700 mt-auto group-hover:translate-x-1 transition-transform inline-block">
                    Padho →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/20"
            >
              📚 Saari Guides Dekho — {ARTICLES.length} Articles
              <span className="text-green-200">→</span>
            </Link>
            <p className="text-gray-400 text-xs mt-2">PM Kisan, eKYC, Loan, Insurance — sab topics</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          E-E-A-T SECTION — Authority, Mission, Disclaimer
      ══════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-green-950 text-white" aria-labelledby="mission-heading">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <span className="inline-block bg-green-800 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">🏛️ Hamara Mission</span>
              <h2 id="mission-heading" className="text-xl font-black text-white mb-4">
                KisanStatus.com — भारत के किसानों की अपनी website
              </h2>
              <div className="text-sm text-green-100/80 leading-relaxed space-y-3">
                <p>
                  Hum ek team hain jo India ke 11 crore+ kisan bhaion ke liye kaam karti hai. Hamar maqsad hai ki PM Kisan, eKYC, beneficiary list, payment status — sab kuch aasaan Hindi/Hinglish mein milna chahiye. Bina kisi confusion ke.
                </p>
                <p>
                  <strong className="text-white">Sidhu Singh</strong> — hamare lead writer — 8 saal se agriculture aur government schemes cover kar rahe hain. Unka poora focus hai ki kisan bhai ghar baithe apni problems solve kar sakein.
                </p>
                <p className="text-green-300/70 text-xs border-t border-green-800 pt-3">
                  ⚠️ Disclaimer: Yeh website PM Kisan ki official website nahi hai. Hum sirf guide aur information provide karte hain. Official kaam ke liye pmkisan.gov.in par jayein.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon:'✅', title:'100% Free', sub:'Koi charge nahi — kabhi bhi' },
                { icon:'🔒', title:'Privacy Safe', sub:'Koi data store ya share nahi' },
                { icon:'📝', title:'Expert Written', sub:'Sidhu Singh — 8 saal experience' },
                { icon:'🔄', title:'Daily Update', sub:'Latest info — roz update hoti hai' },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-3 bg-green-900/50 border border-green-800 rounded-xl px-4 py-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-green-400 text-[11px]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════════════════════ */}
      <FAQSection faqs={FAQS} />

      {/* ══════════════════════════════════════════════════════════
          AI ASSISTANT
      ══════════════════════════════════════════════════════════ */}
      <AiAssistant />

      {/* ══════════════════════════════════════════════════════════
          KISAN TEMPLATES
      ══════════════════════════════════════════════════════════ */}
      <KisanTemplates />
    </>
  );
}
