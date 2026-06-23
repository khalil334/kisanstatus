'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ArticleMeta } from '@/lib/articles-data';

// ─────────────────────────────────────────────────────────────
// REUSABLE FAQ ITEM
// ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{q}</h3>
      <p className="text-gray-700 leading-relaxed">{a}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nano DAP 500ml Price in India 2026: Latest Price, Dosage & Benefits',
  description: 'Complete guide on Nano DAP 500ml price in India 2026 — IFFCO price today, state-wise rates, dosage per acre, benefits, and online buying options.',
  image: [
    'https://kisanstatus.com/images/nano-dap-500ml-bottle-hero.webp',
    'https://kisanstatus.com/images/nano-dap-price-banner-2026.webp',
  ],
  author: { '@type': 'Person', name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' },
  publisher: {
    '@type': 'Organization',
    name: 'KisanStatus.com',
    url: 'https://kisanstatus.com',
    logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
  },
  datePublished: '2026-06-21T08:00:00+05:30',
  dateModified: '2026-06-21T08:00:00+05:30',
  inLanguage: 'hi-IN',
  isAccessibleForFree: true,
  articleSection: 'Agriculture',
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
    { '@type': 'ListItem', position: 3, name: 'Nano DAP 500ml Price in India 2026', item: 'https://kisanstatus.com/articles/nano-dap-500ml-price-in-india-2026' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Nano DAP 500ml Price in India 2026 kya hai?', acceptedAnswer: { '@type': 'Answer', text: '2026 mein Nano DAP 500ml bottle ki price lagbhag ₹250 se ₹350 ke beech mein hai. Subsidy ke saath yeh ₹200 se ₹280 mein bhi mil sakta hai. Exact price state aur dealer ke hisaab se alag hota hai.' } },
    { '@type': 'Question', name: 'IFFCO Nano DAP 500ml price aaj kya hai?', acceptedAnswer: { '@type': 'Answer', text: 'IFFCO Nano DAP 500ml ki current price lagbhag ₹280 se ₹320 ke beech mein hai authorized dealers par. Latest price ke liye IFFCO ki official website ya apne najdeeki authorized dealer se confirm karein.' } },
    { '@type': 'Question', name: 'Nano DAP ka dosage 1 acre ke liye kitna hai?', acceptedAnswer: { '@type': 'Answer', text: 'Label ke anusaar 1 acre ke liye generally 500ml Nano DAP istemal kiya jata hai, jise 100-150 litre paani mein mila kar 2-3 baar spray kiya jata hai.' } },
    { '@type': 'Question', name: 'Nano DAP aur traditional DAP mein kya farak hai?', acceptedAnswer: { '@type': 'Answer', text: 'Nano DAP liquid form mein hai aur foliar spray ke roop mein use hota hai. Traditional DAP granular form mein hai jo soil mein apply kiya jata hai. Kai experts dono ka combination recommend karte hain.' } },
    { '@type': 'Question', name: 'Nano DAP online kahan se kharidein?', acceptedAnswer: { '@type': 'Answer', text: 'IFFCO official website, Amazon, Flipkart, ya local Krishi Kendra se kharid sakte hain. Hamesha authorized seller se hi kharidein.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use Nano DAP Correctly – Step by Step',
  description: 'Step-by-step guide to mixing and spraying IFFCO Nano DAP 500ml on crops for best results.',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', name: 'Paani mein mix karein', text: '500ml Nano DAP ko 100-150 litre paani mein mix karein.' },
    { '@type': 'HowToStep', name: 'Achhe se mix karein', text: 'Bottle ko achhe se hilayein taaki nano particles evenly mix ho jayein.' },
    { '@type': 'HowToStep', name: 'Sahi time par spray karein', text: 'Morning ya evening mein spray karein — dopahar mein spray na karein.' },
    { '@type': 'HowToStep', name: 'Pattiyon ke dono taraf spray karein', text: 'Spray paudhon ki pattiyon ke upri aur neeche dono taraf karein.' },
    { '@type': 'HowToStep', name: 'Mausam dekhein', text: 'Spray karne ke 4-6 ghante baad baarish na ho.' },
  ],
};

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT — follows kisanstatus.com pattern
// ─────────────────────────────────────────────────────────────
export default function NanoDap500mlPriceInIndia2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-10 text-gray-800">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-4 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-green-700">Articles</Link>
          <span>/</span>
          <span className="text-gray-700">Nano DAP Price 2026</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Nano DAP 500ml Price in India 2026: Latest Price, Dosage &amp; Benefits
          </h1>
          <p className="text-sm text-gray-500 italic mb-4">KisanStatus.com – Kisan Ki Apni Website</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 border-y border-gray-200 py-3">
            <span><strong>Published:</strong> 21 June 2026</span>
            <span><strong>Last Updated:</strong> 21 June 2026</span>
            <span><strong>Reading Time:</strong> ~13 min read</span>
            <span><strong>Author:</strong> Sidhu Singh</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden">
          <Image
            src="/images/nano-dap-500ml-bottle-hero.webp"
            alt="IFFCO Nano DAP 500ml bottle price in India 2026"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
          <h2 className="text-base font-bold text-gray-900 mb-2">⚡ Quick Answer</h2>
          <p className="leading-relaxed text-gray-800">
            <strong>IFFCO Nano DAP 500ml ki price India mein 2026 mein lagbhag ₹250 se ₹350 hai</strong>{' '}
            (subsidy ke saath ₹200-₹280 tak). Label ke anusaar dosage{' '}
            <strong>1 acre ke liye 500ml hai, 100-150 litre paani mein mila kar 2-3 baar foliar spray</strong>{' '}
            ke roop mein. Exact price aur dosage apne authorized dealer ya IFFCO ki official website se confirm karein.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <h2 className="text-lg font-semibold mb-3">📋 Table of Contents</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
            <li><a href="#introduction" className="hover:underline">Nano DAP Kya Hai?</a></li>
            <li><a href="#price-2026" className="hover:underline">Nano DAP 500ml Price in India 2026</a></li>
            <li><a href="#price-today" className="hover:underline">State-wise Price Today</a></li>
            <li><a href="#price-factors" className="hover:underline">Price Factors</a></li>
            <li><a href="#benefits" className="hover:underline">Nano DAP Benefits</a></li>
            <li><a href="#dosage" className="hover:underline">Dosage Per Acre (Crop-wise Chart)</a></li>
            <li><a href="#how-to-use" className="hover:underline">How to Use – Step by Step</a></li>
            <li><a href="#comparison" className="hover:underline">Nano DAP vs Traditional DAP</a></li>
            <li><a href="#where-to-buy" className="hover:underline">Where to Buy Online</a></li>
            <li><a href="#crops" className="hover:underline">Kaunsi Fasalon ke Liye?</a></li>
            <li><a href="#mistakes" className="hover:underline">Common Mistakes</a></li>
            <li><a href="#faqs" className="hover:underline">FAQs</a></li>
            <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
          </ul>
        </nav>

        {/* Introduction */}
        <section id="introduction" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nano DAP Kya Hai?</h2>
          <p className="mb-4 leading-relaxed">
            Namaste kisan bhaiyon! Aaj hum baat karenge ek modern fertilizer ke baare mein —
            <strong> IFFCO Nano DAP 500ml</strong>. Agar aap soch rahe hain ki Nano DAP kya hai,
            iski kimat kya hai, aur kaise use karein — toh yeh guide aapke liye hai.
          </p>
          <p className="mb-4 leading-relaxed">
            <strong>Results har khet mein alag ho sakte hain</strong> — yeh depend karta hai fasal ki
            type, soil condition, paani ki supply, aur recommended usage par.
          </p>
          <p className="mb-4 leading-relaxed">
            Agar aap{' '}
            <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-700 underline hover:text-green-900">
              PM Kisan 23vi Kist Status
            </Link>{' '}
            ya{' '}
            <Link href="/articles/pm-kisan-beneficiary-list-2026" className="text-green-700 underline hover:text-green-900">
              PM Kisan Beneficiary List
            </Link>{' '}
            check karna chahte hain, woh guides bhi padh sakte hain.
          </p>
        </section>

        {/* Price 2026 */}
        <section id="price-2026" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nano DAP 500ml Price in India 2026</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-price-banner-2026.webp"
              alt="Nano DAP 500ml price update June 2026 India"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed">
            <strong>2026 mein Nano DAP 500ml bottle ki market price lagbhag ₹250 se ₹350 ke beech mein hai.</strong>{' '}
            Government subsidy ke saath kuch jagah ₹200 se ₹280 mein bhi milta hai.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Comparison Table</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-green-50">
                <tr>
                  <th className="border border-gray-200 px-3 py-2 text-left">Brand / Source</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Price Range (₹)</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['IFFCO Nano DAP (MRP)', '₹280 – ₹350', '500ml Bottle'],
                  ['IFFCO Nano DAP (Subsidized)', '₹200 – ₹280', '500ml Bottle'],
                  ['Nano DAP 1 Litre', '₹500 – ₹650', '1 Litre Bottle'],
                  ['Traditional DAP (Granular)', '₹1,350 – ₹1,650 per 50kg', '50kg Bag'],
                ].map(([brand, price, qty]) => (
                  <tr key={brand}>
                    <td className="border border-gray-200 px-3 py-2">{brand}</td>
                    <td className="border border-gray-200 px-3 py-2 font-semibold text-green-700">{price}</td>
                    <td className="border border-gray-200 px-3 py-2">{qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            Note: Yeh prices June 2026 ki estimated values hain. Actual prices state, dealer, aur subsidy policy ke hisaab se badal sakte hain.
          </p>
        </section>

        {/* State-wise Price */}
        <section id="price-today" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IFFCO Nano DAP 500ml Price Today — State-wise</h2>
          <p className="mb-6 leading-relaxed">
            <strong>Haryana, Punjab, Uttar Pradesh, Maharashtra, aur Gujarat</strong> mein demand zyada hai,
            isliye yahan availability bhi achi hai.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-green-50">
                <tr>
                  <th className="border border-gray-200 px-3 py-2 text-left">State</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Price Range (₹)</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Subsidized (₹)</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Availability</th>
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
                  <tr key={state}>
                    <td className="border border-gray-200 px-3 py-2 font-medium">{state}</td>
                    <td className="border border-gray-200 px-3 py-2">{price}</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700">{sub}</td>
                    <td className="border border-gray-200 px-3 py-2">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm leading-relaxed">
            <strong>Important:</strong> Yeh prices sirf estimated reference ke liye hain.
            Hamesha authorized dealer ya IFFCO ki official website se hi kharidein.
          </p>
        </section>

        {/* Price Factors */}
        <section id="price-factors" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors Affecting Nano DAP Price</h2>
          <div className="space-y-4">
            {[
              ['1. Location & State Subsidies', 'Har state ka apna subsidy structure hota hai. Kuch states mein government direct subsidy deti hai jisse price kam ho jata hai.'],
              ['2. Dealer Commission', 'Har retailer apna commission add karta hai. Wholesale mein saste milte hain.'],
              ['3. Demand & Supply', 'Sowing season mein demand zyada hoti hai, toh price thoda badh sakta hai.'],
              ['4. Online vs Offline', 'Online platforms pe kabhi-kabhi discount milta hai, jabki local shop pe fixed price hota hai.'],
              ['5. Brand & Packaging', 'IFFCO original product ki kimat thodi zyada hoti hai — quality verified rehti hai.'],
            ].map(([title, body]) => (
              <div key={title} className="border-l-4 border-green-400 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="leading-relaxed text-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nano DAP Benefits for Farmers</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-benefits-farmers.webp"
              alt="Nano DAP benefits for Indian farmers — healthy crops, low cost"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <strong>Note:</strong> In benefits ka asar fasal ki type, soil condition, paani ki supply,
            aur sahi usage par depend karta hai — har khet mein result alag ho sakta hai.
          </p>

          <div className="space-y-4">
            {[
              ['💧 Kam Quantity, Zyada Kaam', 'Label ke anusaar 500ml Nano DAP 1 acre ke liye istemal hota hai vs 50kg traditional DAP bag — kam mehnat, kam transport cost.'],
              ['⚡ Tezi Se Absorb Hota Hai', 'Nano particles ki wajah se foliar spray ke roop mein jaldi absorb hota hai.'],
              ['🌱 Fasal Mein Sambhavit Sudhar', 'Kuch kisanon ke anubhav ke hisaab se yield mein sudhar dekha gaya hai — lekin fixed guarantee nahi.'],
              ['🌍 Soil Health Par Kam Asar', 'Kam quantity mein use hota hai, isliye soil pH par comparatively kam asar.'],
              ['💰 Cost Effective Ho Sakta Hai', '₹300 ki bottle vs ₹1,500 ka DAP bag — 1 acre ke hisaab se comparison karo.'],
              ['🌿 Environment Ke Liye Behtar', 'Kam quantity use hone se groundwater pollution ka khatra comparatively kam.'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="leading-relaxed text-gray-700">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-before-after-comparison.webp"
              alt="Nano DAP foliar spray — crop growth illustration before and after"
              fill sizes="(max-width: 768px) 100vw, 768px"
              l