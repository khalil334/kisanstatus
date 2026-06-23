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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

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
              loading="lazy" className="object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500 italic">
            Illustration: representative visual only. Actual results depend on crop type, soil, weather, and usage.
          </p>
        </section>

        {/* Dosage */}
        <section id="dosage" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nano DAP Dosage Per Acre — Crop-wise Chart</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-dosage-chart.webp"
              alt="Nano DAP dosage per acre spray chart — wheat paddy cotton maize"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <strong>Important:</strong> Yeh chart sirf general reference ke liye hai. Exact dosage IFFCO ke
            official label aur apne local KVK se confirm karein.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-green-50">
                <tr>
                  <th className="border border-gray-200 px-3 py-2 text-left">Crop / Fasal</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Dosage/Acre</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Sprays</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Best Time</th>
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
                  <tr key={crop}>
                    <td className="border border-gray-200 px-3 py-2 font-medium">{crop}</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700 font-semibold">{dose}</td>
                    <td className="border border-gray-200 px-3 py-2">{sprays}</td>
                    <td className="border border-gray-200 px-3 py-2">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Use */}
        <section id="how-to-use" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Nano DAP — Step by Step</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-how-to-use.webp"
              alt="Nano DAP foliar spray step by step guide for Indian farmers"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <ol className="list-decimal list-inside space-y-3 leading-relaxed">
            <li><strong>Paani mein mix karein:</strong> 500ml Nano DAP ko 100-150 litre paani mein mix karein. 15L pump mein 50-75ml daalein.</li>
            <li><strong>Achhe se hilayein:</strong> Bottle ko shake karein taaki nano particles evenly mix ho jayein.</li>
            <li><strong>Sahi time spray karein:</strong> Morning ya evening mein spray karein — dopahar mein garmi ki wajah se avoid karein.</li>
            <li><strong>Dono taraf spray karein:</strong> Pattiyyon ke upar aur neeche dono taraf spray karein.</li>
            <li><strong>Mausam check karein:</strong> Spray ke 4-6 ghante baad baarish nahi honi chahiye.</li>
            <li><strong>Pesticides ke saath test karein:</strong> Mix karne se pehle chhote area par compatibility test karein.</li>
          </ol>

          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <strong>💡 Tip:</strong> Fine spray nozzle use karein — absorption behtar hoti hai.
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nano DAP vs Traditional DAP — Full Comparison</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-vs-traditional-dap.webp"
              alt="Nano DAP vs traditional DAP fertilizer comparison India 2026"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm">
            <strong>Note:</strong> Nano DAP traditional DAP ka pura substitute nahi hai.
            IFFCO aur agriculture experts dono ka sahi combination recommend karte hain.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-green-50">
                <tr>
                  <th className="border border-gray-200 px-3 py-2 text-left">Feature</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Nano DAP</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Traditional DAP</th>
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
                  <tr key={feature}>
                    <td className="border border-gray-200 px-3 py-2 font-medium">{feature}</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700">{nano}</td>
                    <td className="border border-gray-200 px-3 py-2">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Where to Buy */}
        <section id="where-to-buy" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Buy Nano DAP Online in India</h2>

          <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-buy-online.webp"
              alt="Buy Nano DAP online India — IFFCO Amazon Flipkart Krishi Kendra"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {[
              ['1. IFFCO Official Website', 'Sabse trustworthy source — original product guarantee milti hai.'],
              ['2. Amazon India / Flipkart', 'Official sellers ke dwara available. Ratings aur reviews check karein.'],
              ['3. Krishi Kendra / State Portals', 'Government authorized sources — subsidy milne ki sambhavna hoti hai.'],
              ['4. Local Krishi Kendra', 'Offline option — zyada farmers prefer karte hain.'],
            ].map(([title, body]) => (
              <div key={title} className="flex gap-3">
                <span className="text-green-600 font-bold shrink-0">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-700 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <strong>Important:</strong> Original packaging check karein — QR code scan karein.
            Agar loan chahiye fertilizer ke liye, toh{' '}
            <Link href="/articles/kisan-credit-card-online-apply-2026" className="text-green-700 underline">
              Kisan Credit Card guide
            </Link>{' '}
            padho.
          </div>
        </section>

        {/* Calculator CTA */}
        <section id="farming-tools" className="mb-10 bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">🧮 Useful Farming Calculators</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ['/calculator', 'Farming Calculators', 'Sabhi kisan calculators ek jagah'],
              ['/calculator/kcc-loan-emi', 'KCC Loan EMI', 'Kisan Credit Card EMI calculate karo'],
              ['/calculator/msp-income', 'MSP Income', 'Fasal ki income estimate karo'],
            ].map(([href, title, desc]) => (
              <Link key={href} href={href} className="block bg-white border border-green-300 rounded-xl p-4 hover:border-green-500 hover:shadow-sm transition">
                <span className="font-semibold text-gray-900 block mb-1">{title}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Crops */}
        <section id="crops" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaunsi Fasalon Ke Liye Nano DAP?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['🌾 Cereals (Anaj)', 'Gehu, Dhan, Makka, Jowar, Bajra'],
              ['🫘 Pulses (Dalhan)', 'Chana, Moong, Urad, Masoor'],
              ['🌻 Oilseeds (Telhan)', 'Soybean, Sarson, Mungfali, Til'],
              ['💚 Cash Crops', 'Cotton, Sugarcane, Potato, Sabziyan'],
            ].map(([title, crops]) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-700">{crops}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section id="mistakes" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed text-gray-700">
            <li><strong>Zyada quantity use karna</strong> — paudhe jal sakte hain.</li>
            <li><strong>Dopahar mein spray karna</strong> — garmi mein pattiyan jal sakti hain.</li>
            <li><strong>Sirf ek baar spray karna</strong> — 2-3 sprays mein behtar result milta hai.</li>
            <li><strong>Expired product use karna</strong> — manufacturing date zaroor check karein.</li>
            <li><strong>Galat paani ratio</strong> — galat mix se effectiveness kam hoti hai.</li>
            <li><strong>Baarish se pehle spray karna</strong> — 4-6 ghante dry weather chahiye.</li>
          </ul>
        </section>

        {/* Expert Tip */}
        <section className="mb-10 bg-green-50 border border-green-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">💡 Expert Tip — KisanStatus.com Advisory</h2>
          <p className="mb-3 leading-relaxed">
            Nano DAP ka result tab behtar milta hai jab early growth stage mein use karein, aur flowering par doosra spray karein.
          </p>
          <p className="leading-relaxed">
            <strong>Hamesha IFFCO ke official recommendations aur apne local KVK ki guidelines follow karein</strong> —
            woh aapke khet aur region ke hisaab se sabse accurate advice de sakte hain.
          </p>
        </section>

        {/* Farmer Experiences */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Representative Farmer Experiences</h2>
          <p className="mb-4 text-sm text-gray-500 italic">
            Niche diye gaye anubhav common farmer feedback patterns par based representative examples hain.
          </p>
          <blockquote className="border-l-4 border-green-400 pl-4 mb-6 italic leading-relaxed bg-gray-50 py-3 pr-4 rounded-r-xl">
            &ldquo;Pehle 50 kg DAP bag uthana padta tha — ab sirf ek bottle lekar spray kar deta hoon. Gehu mein achha result mila, lekin saath mein compost aur paani dena bhi zaroori hai.&rdquo;
            <footer className="mt-2 text-sm font-semibold text-gray-700 not-italic">— Representative: Wheat farmer, Uttar Pradesh</footer>
          </blockquote>
          <blockquote className="border-l-4 border-green-400 pl-4 italic leading-relaxed bg-gray-50 py-3 pr-4 rounded-r-xl">
            &ldquo;Maine galti se dopahar mein spray kar diya — kuch pattiyan jal gayi thi. Ab hamesha shaam ko spray karta hoon.&rdquo;
            <footer className="mt-2 text-sm font-semibold text-gray-700 not-italic">— Representative: Paddy farmer, Punjab</footer>
          </blockquote>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQs)</h2>

          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
            <Image
              src="/images/nano-dap-faq-quick-reference.webp"
              alt="Nano DAP quick reference — price dosage benefits FAQ infographic"
              fill sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy" className="object-cover"
            />
          </div>

          <FaqItem q="Q1. Nano DAP 500ml Price in India 2026 kya hai?" a="2026 mein Nano DAP 500ml ki price lagbhag ₹250 se ₹350 ke beech mein hai. Subsidy ke saath ₹200-₹280 mein bhi mil sakta hai. Exact price authorized dealer se confirm karein." />
          <FaqItem q="Q2. IFFCO Nano DAP 500ml price aaj kya hai?" a="IFFCO Nano DAP 500ml ki current price lagbhag ₹280 se ₹320 ke beech mein hai. Subsidy ke saath kuch states mein ₹220-₹270 tak milta hai." />
          <FaqItem q="Q3. Nano DAP kaun si company banati hai?" a="IFFCO (Indian Farmers Fertiliser Cooperative Limited) Nano DAP banati hai — India ki sabse badi fertilizer cooperative society." />
          <FaqItem q="Q4. Nano DAP aur traditional DAP mein kya farak hai?" a="Nano DAP liquid foliar spray hai, traditional DAP granular soil application hai. Kai experts dono ka combination recommend karte hain." />
          <FaqItem q="Q5. Nano DAP ka dosage 1 acre ke liye kitna hai?" a="Label ke anusaar 1 acre ke liye 500ml Nano DAP — 100-150 litre paani mein mila kar 2-3 baar spray. Exact dosage KVK se confirm karein." />
          <FaqItem q="Q6. Kya Nano DAP urea ke saath mix ho sakta hai?" a="Kisi bhi fertilizer ya pesticide ke saath mix karne se pehle compatibility test karein ya KVK se salah lein. IFFCO guidelines follow karna sabse safe hai." />
          <FaqItem q="Q7. Nano DAP kis fasal ke liye use hota hai?" a="Gehu, dhan, makka, soybean, sarson, cotton, sugarcane, sabziyan — sabhi major crops ke liye. Dosage fasal ke hisaab se alag hota hai." />
          <FaqItem q="Q8. Nano DAP kitni baar spray karein?" a="Generally 2-3 baar — pehla early growth (15-20 din), doosra flowering stage. Kuch fasalon mein teesra fruiting stage par." />
          <FaqItem q="Q9. Nano DAP online kahan se kharidein?" a="IFFCO official website, Amazon, Flipkart, ya local Krishi Kendra. Hamesha authorized seller se original packaging check karke kharidein." />
          <FaqItem q="Q10. Nano DAP ka result kitne din mein dikhta hai?" a="Spray ke 7-10 din mein farak dikhna shuru ho sakta hai. 2-3 sprays ke baad clearer result. Soil, mausam, aur fasal ke hisaab se alag ho sakta hai." />
        </section>

        {/* Disclaimer */}
        <section className="mb-10 space-y-4 text-sm text-gray-600">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="text-base font-bold text-gray-900 mb-2">⚠️ Disclaimer</h3>
            <p className="leading-relaxed mb-2">
              Is article mein di gayi prices June 2026 ki estimated values hain — state, dealer, aur season ke hisaab se badal sakti hain.
              KisanStatus.com kisi bhi price ki guarantee nahi deta.
            </p>
            <p className="leading-relaxed">
              Nano DAP use karne se pehle apne local KVK ya IFFCO recommendations se salah lein.
              <strong> Koi bhi fixed result ya guarantee nahi di jaati.</strong>
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">📚 Related Articles</h2>
          <ul className="space-y-2">
            {[
              ['/articles/kisan-credit-card-online-apply-2026', 'Kisan Credit Card Online Apply 2026'],
              ['/articles/pm-kisan-beneficiary-list-2026', 'PM Kisan Beneficiary List 2026'],
              ['/articles/pm-kisan-23vi-kist-2026-status-check', 'PM Kisan 23vi Kist Status Check 2026'],
              ['/articles/pm-kisan-registration-online-2026', 'PM Kisan Registration Online 2026'],
            ].map(([href, title]) => (
              <li key={href}>
                <Link href={href} className="text-blue-700 underline hover:text-blue-900 text-sm">{title}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="mb-4 leading-relaxed">
            Kisan bhaiyon, Nano DAP 500ml ek modern aur convenient fertilizer option hai jo sahi tarike se
            use karne par farming ko easier aur cost-effective bana sakta hai.
          </p>
          <p className="mb-4 leading-relaxed">
            Lekin yaad rakhein — <strong>koi bhi fertilizer akela kaam nahi karta.</strong> Samay par paani,
            achha beej, aur sahi dekh-bhaal bhi zaroori hai. Pehli baar use kar rahe hain toh chhote area par test karein.
          </p>
          <p className="font-semibold text-green-700">🌱 Aapki fasal hamesha hari-bhari rahe! Dhanyavaad!</p>
        </section>

        {/* About Author */}
        <section className="border-t border-gray-200 pt-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">About the Author</h2>
          <p className="leading-relaxed text-gray-700">
            Yeh article <strong>Sidhu Singh</strong> dwara likha gaya hai — KisanStatus.com ke agricultural expert
            jo Indian farmers ke liye government schemes, fertilizer pricing, aur farming guides likhte hain.
          </p>
        </section>

      </article>
    </>
  );
}
