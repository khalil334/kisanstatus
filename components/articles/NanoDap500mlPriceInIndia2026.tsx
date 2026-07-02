import Image from 'next/image';
import Link from 'next/link';
import type { ArticleMeta } from '@/lib/articles-data';

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-[var(--color-border)] py-5">
      <h3 className="font-semibold text-[var(--color-text)] text-lg mb-2">{q}</h3>
      <p className="text-[var(--color-text-muted)] leading-relaxed">{a}</p>
    </div>
  );
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'IFFCO Liquid DAP 500ml Price in India 2026: Latest Rate, Application & Benefits',
  description: 'Complete guide on liquid DAP 500ml price in India 2026 — IFFCO rate today, state-wise pricing, foliar dosage per acre, crop benefits, and online purchasing options.',
  image: [
    'https://kisanstatus.com/images/nano-dap-500ml-bottle-hero.webp',
    'https://kisanstatus.com/images/nano-dap-price-banner-2026.webp',
  ],
  author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' },
  publisher: {
    '@type': 'Organization',
    name: 'KisanStatus.com',
    url: 'https://kisanstatus.com',
    logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
  },
  datePublished: '2026-06-21T08:00:00+05:30',
  dateModified: '2026-06-24T08:00:00+05:30',
  inLanguage: 'hi-IN',
  isAccessibleForFree: true,
  articleSection: 'Modern Agricultural Inputs',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kisanstatus.com/articles/nano-dap-500ml-price-in-india-2026',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'Liquid DAP 500ml Price in India 2026', item: 'https://kisanstatus.com/articles/nano-dap-500ml-price-in-india-2026' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Liquid DAP 500ml Price in India 2026 kya hai?', acceptedAnswer: { '@type': 'Answer', text: '2026 mein liquid DAP 500ml bottle ki price lagbhag ₹250 se ₹350 ke beech mein hai. Subsidy ke saath yeh ₹200 se ₹280 mein bhi mil sakta hai. Exact price state aur dealer ke hisaab se alag hota hai.' } },
    { '@type': 'Question', name: 'IFFCO liquid DAP 500ml price aaj kya hai?', acceptedAnswer: { '@type': 'Answer', text: 'IFFCO liquid DAP 500ml ki current price lagbhag ₹280 se ₹320 ke beech mein hai authorized dealers par. Latest price ke liye IFFCO ki official website ya apne najdeeki authorized dealer se confirm karein.' } },
    { '@type': 'Question', name: 'Liquid DAP ka foliar dosage 1 acre ke liye kitna hai?', acceptedAnswer: { '@type': 'Answer', text: 'Label ke anusaar 1 acre ke liye generally 500ml liquid DAP istemal kiya jata hai, jise 100-150 litre paani mein mila kar 2-3 baar spray kiya jata hai.' } },
    { '@type': 'Question', name: 'Liquid DAP aur traditional DAP mein kya farak hai?', acceptedAnswer: { '@type': 'Answer', text: 'Liquid DAP foliar spray ke roop mein use hota hai. Traditional DAP granular form mein hai jo soil mein apply kiya jata hai. Kai experts dono ka combination recommend karte hain.' } },
    { '@type': 'Question', name: 'Liquid DAP online kahan se kharidein?', acceptedAnswer: { '@type': 'Answer', text: 'IFFCO official website, Amazon, Flipkart, ya local Krishi Kendra se kharid sakte hain. Hamesha authorized seller se hi kharidein.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Apply Liquid DAP Correctly – Step by Step',
  description: 'Step-by-step guide to mixing and spraying IFFCO liquid DAP 500ml on crops for best results.',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', name: 'Paani mein mix karein', text: '500ml liquid DAP ko 100-150 litre paani mein mix karein.' },
    { '@type': 'HowToStep', name: 'Achhe se mix karein', text: 'Bottle ko achhe se hilayein taaki nano particles evenly mix ho jayein.' },
    { '@type': 'HowToStep', name: 'Sahi time par spray karein', text: 'Morning ya evening mein spray karein — dopahar mein spray na karein.' },
    { '@type': 'HowToStep', name: 'Pattiyon ke dono taraf spray karein', text: 'Spray paudhon ki pattiyon ke upri aur neeche dono taraf karein.' },
    { '@type': 'HowToStep', name: 'Mausam dekhein', text: 'Spray karne ke 4-6 ghante baad baarish na ho.' },
  ],
};

export default function NanoDap500mlPriceInIndia2026(_: { article: ArticleMeta }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-10 text-[var(--color-text)]">

        <nav className="text-xs text-[var(--color-text-muted)] mb-4 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Articles</Link>
          <span>/</span>
          <span className="text-[var(--color-text)]">Liquid DAP Price 2026</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight mb-3">
            IFFCO Liquid DAP 500ml Price in India 2026: Latest Rate, Application &amp; Benefits
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] italic mb-4">KisanStatus.com – Cultivator Ki Apni Website</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--color-text-muted)] border-y border-[var(--color-border)] py-3">
            <span><strong>Published:</strong> 21 June 2026</span>
            <span><strong>Last Updated:</strong> 24 June 2026</span>
            <span><strong>Reading Time:</strong> ~13 min read</span>
            <span><strong>Author:</strong> KisanStatus Team</span>
          </div>
        </header>

        <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden">
          <Image
            src="/images/nano-dap-500ml-bottle-hero.webp"
            alt="IFFCO liquid DAP 500ml bottle price in India 2026"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-10">
          <h2 className="text-base font-bold text-[var(--color-text)] mb-2">⚡ Quick Answer</h2>
          <p className="leading-relaxed text-[var(--color-text-muted)]">
            <strong>IFFCO liquid DAP 500ml ki price India mein 2026 mein lagbhag ₹250 se ₹350 hai</strong>{' '}
            (subsidy ke saath ₹200-₹280 tak). Label ke anusaar dosage{' '}
            <strong>1 acre ke liye 500ml hai, 100-150 litre paani mein mila kar 2-3 baar foliar spray</strong>{' '}
            ke roop mein. Exact price aur dosage apne authorized dealer ya IFFCO ki official website se confirm karein.
          </p>
        </div>

        <nav className="bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl p-5 mb-10">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">📋 Table of Contents</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><a href="#introduction" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Yeh Product Kya Hai?</a></li>
            <li><a href="#price-2026" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">500ml Bottle Price in India 2026</a></li>
            <li><a href="#price-today" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">State-wise Price Today</a></li>
            <li><a href="#price-factors" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Price Factors</a></li>
            <li><a href="#benefits" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Foliar Spray Benefits</a></li>
            <li><a href="#dosage" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Dosage Per Acre (Crop-wise Chart)</a></li>
            <li><a href="#how-to-use" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">How to Apply – Step by Step</a></li>
            <li><a href="#comparison" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Modern vs Traditional Fertilizer</a></li>
            <li><a href="#where-to-buy" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Where to Buy Online</a></li>
            <li><a href="#crops" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Kaunsi Fasalon ke Liye?</a></li>
            <li><a href="#mistakes" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Common Mistakes</a></li>
            <li><a href="#faqs" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">FAQs</a></li>
            <li><a href="#conclusion" className="text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Conclusion</a></li>
          </ul>
        </nav>

        <section id="introduction" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Yeh Product Kya Hai?</h2>
          <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
            Namaste cultivator bhaiyon! Aaj hum baat karenge ek modern agricultural input ke baare mein —
            <strong> IFFCO ka advanced liquid fertilizer</strong>. Agar aap soch rahe hain ki yeh product kya hai,
            iski kimat kya hai, aur kaise apply karein — toh yeh guide aapke liye hai.
          </p>
          <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
            <strong>Results har khet mein alag ho sakte hain</strong> — yeh depend karta hai fasal ki
            type, soil condition, paani ki supply, aur recommended usage par.
          </p>
          <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
            Agar aap{' '}
            <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
              23vi Tranche Verification
            </Link>{' '}
            ya{' '}
            <Link href="/articles/pm-kisan-beneficiary-list-2026" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
              Approved Recipients Roster
            </Link>{' '}
            check karna chahte hain, woh guides bhi padh sakte hain.
          </p>
        </section>

        <section id="price-2026" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">500ml Bottle Price in India 2026</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-price-banner-2026.webp"
              alt="Liquid DAP 500ml price update June 2026 India"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
            <strong>2026 mein yeh 500ml bottle ki market price lagbhag ₹250 se ₹350 ke beech mein hai.</strong>{' '}
            Government subsidy ke saath kuch jagah ₹200 se ₹280 mein bhi milta hai.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Price Comparison Table</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-[var(--color-border)] text-sm">
              <thead className="bg-[var(--color-bg-alt)]">
                <tr>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Brand / Source</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Price Range (₹)</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['IFFCO (MRP)', '₹280 – ₹350', '500ml Bottle'],
                  ['IFFCO (Subsidized)', '₹200 – ₹280', '500ml Bottle'],
                  ['1 Litre Bottle', '₹500 – ₹650', '1 Litre Bottle'],
                  ['Traditional DAP (Granular)', '₹1,350 – ₹1,650 per 50kg', '50kg Bag'],
                ].map(([brand, price, qty]) => (
                  <tr key={brand} className="odd:bg-[var(--color-card)] even:bg-[var(--color-bg-alt)]">
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text)]">{brand}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 font-semibold text-green-700 dark:text-green-400">{price}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-muted)]">{qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] italic leading-relaxed">
            Note: Yeh prices June 2026 ki estimated values hain. Actual prices state, dealer, aur subsidy policy ke hisaab se badal sakte hain.
          </p>
        </section>

        <section id="price-today" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">IFFCO Product Price Today — State-wise</h2>
          <p className="mb-6 leading-relaxed text-[var(--color-text-muted)]">
            <strong>Haryana, Punjab, Uttar Pradesh, Maharashtra, aur Gujarat</strong> mein demand zyada hai,
            isliye yahan availability bhi achi hai.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-[var(--color-border)] text-sm">
              <thead className="bg-[var(--color-bg-alt)]">
                <tr>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">State</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Price Range (₹)</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Subsidized (₹)</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Availability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Uttar Pradesh', '₹260 – ₹330', '₹210 – ₹260', 'High'],
                  ['Punjab', '₹270 – ₹340', '₹220 – ₹270', 'High'],
                  ['Haryana', '₹270 – ₹340', '₹220 – ₹270', 'High'],
                  ['Rajasthan', '₹280 – ₹350', '₹230 – ₹280', 'Medium'],
                  ['Madhya Pradesh', '₹260 – ₹330', '₹210 – ₹260', 'Medium'],
                  ['Maharashtra', '₹280 – ₹350', '₹230 – ₹280', 'High'],
                  ['Gujarat', '₹270 – ₹340', '₹220 – ₹270', 'High'],
                  ['Bihar', '₹260 – ₹330', '₹210 – ₹260', 'Medium'],
                  ['West Bengal', '₹280 – ₹350', '₹230 – ₹280', 'Medium'],
                  ['Karnataka', '₹290 – ₹360', '₹240 – ₹290', 'Medium'],
                  ['Tamil Nadu', '₹290 – ₹360', '₹240 – ₹290', 'Medium'],
                  ['Telangana', '₹280 – ₹350', '₹230 – ₹280', 'Medium'],
                  ['Andhra Pradesh', '₹280 – ₹350', '₹230 – ₹280', 'Medium'],
                  ['Odisha', '₹270 – ₹340', '₹220 – ₹270', 'Low'],
                  ['Assam', '₹290 – ₹360', '₹240 – ₹290', 'Low'],
                ].map(([state, price, sub, avail]) => (
                  <tr key={state} className="odd:bg-[var(--color-card)] even:bg-[var(--color-bg-alt)]">
                    <td className="border border-[var(--color-border)] px-3 py-2 font-medium text-[var(--color-text)]">{state}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-muted)]">{price}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-green-700 dark:text-green-400">{sub}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-muted)]">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <strong>Important:</strong> Yeh prices sirf estimated reference ke liye hain.
            Hamesha authorized dealer ya IFFCO ki official website se hi kharidein.
          </p>
        </section>

        <section id="price-factors" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Factors Affecting Price</h2>
          <div className="space-y-4">
            {[
              ['1. Location & State Subsidies', 'Har state ka apna subsidy structure hota hai. Kuch states mein government direct subsidy deti hai jisse price kam ho jata hai.'],
              ['2. Dealer Commission', 'Har retailer apna commission add karta hai. Wholesale mein saste milte hain.'],
              ['3. Demand & Supply', 'Sowing season mein demand zyada hoti hai, toh price thoda badh sakta hai.'],
              ['4. Online vs Offline', 'Online platforms pe kabhi-kabhi discount milta hai, jabki local shop pe fixed price hota hai.'],
              ['5. Brand & Packaging', 'IFFCO original product ki kimat thodi zyada hoti hai — quality verified rehti hai.'],
            ].map(([title, body]) => (
              <div key={title} className="border-l-4 border-green-400 dark:border-green-600 pl-4">
                <h3 className="font-semibold text-[var(--color-text)] mb-1">{title}</h3>
                <p className="leading-relaxed text-[var(--color-text-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Foliar Spray Benefits for Cultivators</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-benefits-farmers.webp"
              alt="Liquid DAP benefits for Indian cultivators — healthy crops, low cost"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-[var(--color-text-muted)]">
            <strong>Note:</strong> In benefits ka asar fasal ki type, soil condition, paani ki supply,
            aur sahi usage par depend karta hai — har khet mein result alag ho sakta hai.
          </p>

          <div className="space-y-4">
            {[
              ['💧 Kam Quantity, Zyada Kaam', 'Label ke anusaar 500ml yeh product 1 acre ke liye istemal hota hai vs 50kg traditional DAP bag — kam mehnat, kam transport cost.'],
              ['⚡ Tezi Se Absorb Hota Hai', 'Nano-scale particles ki wajah se foliar spray ke roop mein jaldi absorb hota hai.'],
              ['🌱 Fasal Mein Sambhavit Sudhar', 'Kuch cultivators ke anubhav ke hisaab se yield mein sudhar dekha gaya hai — lekin fixed guarantee nahi.'],
              ['🌍 Soil Health Par Kam Asar', 'Kam quantity mein use hota hai, isliye soil pH par comparatively kam asar.'],
              ['💰 Cost Effective Ho Sakta Hai', '₹300 ki bottle vs ₹1,500 ka DAP bag — 1 acre ke hisaab se comparison karo.'],
              ['🌿 Environment Ke Liye Behtar', 'Kam quantity use hone se groundwater pollution ka khatra comparatively kam.'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">{title}</h3>
                <p className="leading-relaxed text-[var(--color-text-muted)]">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-before-after-comparison.webp"
              alt="Foliar spray — crop growth illustration before and after"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)] italic">
            Illustration: representative visual only. Actual results depend on crop type, soil, weather, and usage.
          </p>
        </section>

        <section id="dosage" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Foliar Dosage Per Acre — Crop-wise Chart</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-500ml-bottle-hero.webp"
              alt="500ml dosage guide India 2026"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-[var(--color-text-muted)]">
            <strong>Important:</strong> Yeh chart sirf general reference ke liye hai. Exact dosage IFFCO ke
            official label aur apne local KVK se confirm karein.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-[var(--color-border)] text-sm">
              <thead className="bg-[var(--color-bg-alt)]">
                <tr>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Crop / Fasal</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Dosage/Acre</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Sprays</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Best Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gehu (Wheat)', '400-500ml', '2-3', '15-20 din aur flowering'],
                  ['Dhan (Paddy)', '500ml', '2-3', 'Tillering aur flowering'],
                  ['Makka (Maize)', '500ml', '2', '15 din aur 40 din baad'],
                  ['Soybean', '400-500ml', '2', 'Pre-flowering aur pod filling'],
                  ['Sarson (Mustard)', '400ml', '2', 'Rosette aur flowering'],
                  ['Cotton', '500ml', '2-3', 'Square formation aur boll'],
                  ['Sugarcane', '500-600ml', '3', '30, 60, 90 din ke baad'],
                  ['Sabziyan (Vegetables)', '300-400ml', '2-3', '15 din aur flowering'],
                ].map(([crop, dose, sprays, time]) => (
                  <tr key={crop} className="odd:bg-[var(--color-card)] even:bg-[var(--color-bg-alt)]">
                    <td className="border border-[var(--color-border)] px-3 py-2 font-medium text-[var(--color-text)]">{crop}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-green-700 dark:text-green-400 font-semibold">{dose}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-muted)]">{sprays}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-muted)]">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="how-to-use" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Apply — Step by Step</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-benefits-farmers.webp"
              alt="Foliar spray step by step guide for Indian cultivators"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <ol className="list-decimal list-inside space-y-3 leading-relaxed text-[var(--color-text-muted)]">
            <li><strong>Paani mein mix karein:</strong> 500ml product ko 100-150 litre paani mein mix karein. 15L pump mein 50-75ml daalein.</li>
            <li><strong>Achhe se hilayein:</strong> Bottle ko shake karein taaki particles evenly mix ho jayein.</li>
            <li><strong>Sahi time spray karein:</strong> Morning ya evening mein spray karein — dopahar mein garmi ki wajah se avoid karein.</li>
            <li><strong>Dono taraf spray karein:</strong> Pattiyyon ke upar aur neeche dono taraf spray karein.</li>
            <li><strong>Mausam check karein:</strong> Spray ke 4-6 ghante baad baarish nahi honi chahiye.</li>
            <li><strong>Pesticides ke saath test karein:</strong> Mix karne se pehle chhote area par compatibility test karein.</li>
          </ol>

          <div className="mt-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl p-4">
            <strong className="text-[var(--color-text)]">💡 Tip:</strong> <span className="text-[var(--color-text-muted)]">Fine spray nozzle use karein — absorption behtar hoti hai.</span>
          </div>
        </section>

        <section id="comparison" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Modern vs Traditional Fertilizer — Full Comparison</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-vs-traditional-dap-comparison.webp"
              alt="Modern vs traditional fertilizer comparison India 2026"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-sm text-[var(--color-text-muted)]">
            <strong>Note:</strong> Yeh product traditional DAP ka pura substitute nahi hai.
            IFFCO aur agriculture experts dono ka sahi combination recommend karte hain.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-[var(--color-border)] text-sm">
              <thead className="bg-[var(--color-bg-alt)]">
                <tr>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Feature</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Modern Product</th>
                  <th className="border border-[var(--color-border)] px-3 py-2 text-left text-[var(--color-text)]">Traditional DAP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Form', 'Liquid (Spray)', 'Granular (Dana)'],
                  ['Quantity per Acre', '500ml', '50kg Bag'],
                  ['Cost per Acre', '₹250-₹350', '₹1,350-₹1,650'],
                  ['Application', 'Foliar Spray', 'Soil Application'],
                  ['Absorption', 'Comparatively Fast', 'Slower (needs water)'],
                  ['Transport Cost', 'Low', 'High (heavy bags)'],
                  ['Environmental Impact', 'Lower runoff risk', 'Higher if overused'],
                ].map(([feature, nano, trad]) => (
                  <tr key={feature} className="odd:bg-[var(--color-card)] even:bg-[var(--color-bg-alt)]">
                    <td className="border border-[var(--color-border)] px-3 py-2 font-medium text-[var(--color-text)]">{feature}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-green-700 dark:text-green-400">{nano}</td>
                    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-muted)]">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="where-to-buy" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Where to Buy Online in India</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-buy-online-fertilizer.webp"
              alt="Buy online India — IFFCO Amazon Flipkart Krishi Kendra"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {[
              ['1. IFFCO Official Website', 'Sabse trustworthy source — original product guarantee milti hai.'],
              ['2. Amazon India / Flipkart', 'Official sellers ke dwara available. Ratings aur reviews check karein.'],
              ['3. Krishi Kendra / State Portals', 'Government authorized sources — subsidy milne ki sambhavna hoti hai.'],
              ['4. Local Krishi Kendra', 'Offline option — zyada cultivators prefer karte hain.'],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold shrink-0">✅</span>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">{title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-[var(--color-text-muted)]">
            <strong>Important:</strong> Original packaging check karein — QR code scan karein.
            Agar loan chahiye fertilizer ke liye, toh{' '}
            <Link href="/articles/kisan-credit-card-online-apply-2026" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">
              Kisan Credit Card guide
            </Link>{' '}
            padho.
          </div>
        </section>

        <section id="farming-tools" className="mb-10 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">🧮 Useful Cultivation Calculators</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ['/calculator', 'Farming Calculators', 'Sabhi cultivator calculators ek jagah'],
              ['/calculator/kcc-loan-emi', 'KCC Loan EMI', 'Kisan Credit Card EMI calculate karo'],
              ['/calculator/msp-income', 'MSP Income', 'Fasal ki income estimate karo'],
            ].map(([href, title, desc]) => (
              <Link key={href} href={href} className="block bg-[var(--color-card)] border border-green-300 dark:border-green-700 rounded-xl p-4 hover:border-green-500 dark:hover:border-green-600 hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span className="font-semibold text-[var(--color-text)] block mb-1">{title}</span>
                <span className="text-sm text-[var(--color-text-muted)]">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="crops" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Kaunsi Fasalon Ke Liye?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['🌾 Cereals (Anaj)', 'Gehu, Dhan, Makka, Jowar, Bajra'],
              ['🫘 Pulses (Dalhan)', 'Chana, Moong, Urad, Masoor'],
              ['🌻 Oilseeds (Telhan)', 'Soybean, Sarson, Mungfali, Til'],
              ['💚 Cash Crops', 'Cotton, Sugarcane, Potato, Sabziyan'],
            ].map(([title, crops]) => (
              <div key={title} className="bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl p-4">
                <h3 className="font-semibold text-[var(--color-text)] mb-1">{title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{crops}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="mistakes" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed text-[var(--color-text-muted)]">
            <li><strong>Zyada quantity use karna</strong> — paudhe jal sakte hain.</li>
            <li><strong>Dopahar mein spray karna</strong> — garmi mein pattiyan jal sakti hain.</li>
            <li><strong>Sirf ek baar spray karna</strong> — 2-3 sprays mein behtar result milta hai.</li>
            <li><strong>Expired product use karna</strong> — manufacturing date zaroor check karein.</li>
            <li><strong>Galat paani ratio</strong> — galat mix se effectiveness kam hoti hai.</li>
            <li><strong>Baarish se pehle spray karna</strong> — 4-6 ghante dry weather chahiye.</li>
          </ul>
        </section>

        <section className="mb-10 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">💡 Expert Tip — KisanStatus.com Advisory</h2>
          <p className="mb-3 leading-relaxed text-[var(--color-text-muted)]">
            Yeh product ka result tab behtar milta hai jab early growth stage mein use karein, aur flowering par doosra spray karein.
          </p>
          <p className="leading-relaxed text-[var(--color-text-muted)]">
            <strong>Hamesha IFFCO ke official recommendations aur apne local KVK ki guidelines follow karein</strong> —
            woh aapke khet aur region ke hisaab se sabse accurate advice de sakte hain.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Representative Cultivator Experiences</h2>
          <p className="mb-4 text-sm text-[var(--color-text-muted)] italic">
            Niche diye gaye anubhav common cultivator feedback patterns par based representative examples hain.
          </p>
          <blockquote className="border-l-4 border-green-400 dark:border-green-600 pl-4 mb-6 italic leading-relaxed bg-[var(--color-bg-alt)] py-3 pr-4 rounded-r-xl">
            <p className="text-[var(--color-text-muted)]">&ldquo;Pehle 50 kg DAP bag uthana padta tha — ab sirf ek bottle lekar spray kar deta hoon. Gehu mein achha result mila, lekin saath mein compost aur paani dena bhi zaroori hai.&rdquo;</p>
            <footer className="mt-2 text-sm font-semibold text-[var(--color-text)] not-italic">— Representative: Wheat cultivator, Uttar Pradesh</footer>
          </blockquote>
          <blockquote className="border-l-4 border-green-400 dark:border-green-600 pl-4 italic leading-relaxed bg-[var(--color-bg-alt)] py-3 pr-4 rounded-r-xl">
            <p className="text-[var(--color-text-muted)]">&ldquo;Maine galti se dopahar mein spray kar diya — kuch pattiyan jal gayi thi. Ab hamesha shaam ko spray karta hoon.&rdquo;</p>
            <footer className="mt-2 text-sm font-semibold text-[var(--color-text)] not-italic">— Representative: Paddy cultivator, Punjab</footer>
          </blockquote>
        </section>

        <section id="faqs" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Frequently Asked Questions (FAQs)</h2>

          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-500ml-bottle-hero.webp"
              alt="Quick reference — price dosage benefits FAQ"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>

          <FaqItem q="Q1. 500ml Bottle Price in India 2026 kya hai?" a="2026 mein yeh 500ml bottle ki price lagbhag ₹250 se ₹350 ke beech mein hai. Subsidy ke saath ₹200-₹280 mein bhi mil sakta hai. Exact price authorized dealer se confirm karein." />
          <FaqItem q="Q2. IFFCO product price aaj kya hai?" a="IFFCO ka yeh product lagbhag ₹280 se ₹320 ke beech mein hai. Subsidy ke saath kuch states mein ₹220-₹270 tak milta hai." />
          <FaqItem q="Q3. Kaun si company banati hai?" a="IFFCO (Indian Farmers Fertiliser Cooperative Limited) yeh product banati hai — India ki sabse badi fertilizer cooperative society." />
          <FaqItem q="Q4. Traditional DAP se kya farak hai?" a="Yeh product foliar spray hai, traditional DAP granular soil application hai. Kai experts dono ka combination recommend karte hain." />
          <FaqItem q="Q5. Foliar dosage 1 acre ke liye kitna hai?" a="Label ke anusaar 1 acre ke liye 500ml — 100-150 litre paani mein mila kar 2-3 baar spray. Exact dosage KVK se confirm karein." />
          <FaqItem q="Q6. Kya urea ke saath mix ho sakta hai?" a="Kisi bhi fertilizer ya pesticide ke saath mix karne se pehle compatibility test karein ya KVK se salah lein. IFFCO guidelines follow karna sabse safe hai." />
          <FaqItem q="Q7. Kis fasal ke liye use hota hai?" a="Gehu, dhan, makka, soybean, sarson, cotton, sugarcane, sabziyan — sabhi major crops ke liye. Dosage fasal ke hisaab se alag hota hai." />
          <FaqItem q="Q8. Kitni baar spray karein?" a="Generally 2-3 baar — pehla early growth (15-20 din), doosra flowering stage. Kuch fasalon mein teesra fruiting stage par." />
          <FaqItem q="Q9. Online kahan se kharidein?" a="IFFCO official website, Amazon, Flipkart, ya local Krishi Kendra. Hamesha authorized seller se original packaging check karke kharidein." />
          <FaqItem q="Q10. Result kitne din mein dikhta hai?" a="Spray ke 7-10 din mein farak dikhna shuru ho sakta hai. 2-3 sprays ke baad clearer result. Soil, mausam, aur fasal ke hisaab se alag ho sakta hai." />
        </section>

        <section className="mb-10 space-y-4 text-sm text-[var(--color-text-muted)]">
          <div className="bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl p-5">
            <h3 className="text-base font-bold text-[var(--color-text)] mb-2">⚠️ Disclaimer</h3>
            <p className="leading-relaxed mb-2">
              Is article mein di gayi prices June 2026 ki estimated values hain — state, dealer, aur season ke hisaab se badal sakti hain.
              KisanStatus.com kisi bhi price ki guarantee nahi deta.
            </p>
            <p className="leading-relaxed">
              Yeh product use karne se pehle apne local KVK ya IFFCO recommendations se salah lein.
              <strong> Koi bhi fixed result ya guarantee nahi di jaati.</strong>
            </p>
          </div>
        </section>

        <section className="mb-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">📚 Related Articles</h2>
          <ul className="space-y-2">
            {[
              ['/articles/kisan-credit-card-online-apply-2026', 'Kisan Credit Card Online Apply 2026'],
              ['/articles/pm-kisan-beneficiary-list-2026', 'Approved Recipients Roster 2026'],
              ['/articles/pm-kisan-23vi-kist-2026-status-check', '23vi Tranche Verification 2026'],
              ['/articles/pm-kisan-registration-online-2026', 'New Enrollment Guide 2026'],
            ].map(([href, title]) => (
              <li key={href}>
                <Link href={href} className="text-blue-700 dark:text-blue-400 underline hover:text-blue-900 dark:hover:text-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">{title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="conclusion" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Conclusion</h2>
          <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
            Cultivator bhaiyon, yeh 500ml bottle ek modern aur convenient fertilizer option hai jo sahi tarike se
            use karne par farming ko easier aur cost-effective bana sakta hai.
          </p>
          <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
            Lekin yaad rakhein — <strong>koi bhi fertilizer akela kaam nahi karta.</strong> Samay par paani,
            achha beej, aur sahi dekh-bhaal bhi zaroori hai. Pehli baar use kar rahe hain toh chhote area par test karein.
          </p>
          <p className="font-semibold text-green-700 dark:text-green-400">🌱 Aapki fasal hamesha hari-bhari rahe! Dhanyavaad!</p>
        </section>

        <section className="border-t border-[var(--color-border)] pt-8 mb-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">About the Team</h2>
          <p className="leading-relaxed text-[var(--color-text-muted)]">
            Yeh article <strong>KisanStatus Team</strong> dwara likha gaya hai — KisanStatus.com ke agricultural experts
            jo Indian cultivators ke liye government schemes, fertilizer pricing, aur farming guides likhte hain.
          </p>
        </section>

      </article>
    </>
  );
}