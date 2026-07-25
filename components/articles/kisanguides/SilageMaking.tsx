import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Silage Business 2026: SMAM Subsidy & Profit Guide',
  description: 'Packaged green fodder business ka complete guide. Janein maize silage plant kaise lagayein, SMAM subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
  keywords: [
    'silage making business',
    'maize silage plant',
    'SMAM subsidy',
    'silage business profit',
    'green fodder business',
    'dairy farm silage'
  ],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'Silage Business 2026: SMAM Subsidy & Profit Guide',
    description: 'Packaged green fodder business ka complete guide. Janein maize silage plant kaise lagayein, SMAM subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/farming/silage-making-business-guide',
    images: [
      {
        url: 'https://kisanstatus.com/images/kisanguides/silage-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Silage Packets Stacked Near Dairy Farm - Agri Business Guide 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silage Business 2026: SMAM Subsidy & Profit Guide',
    description: 'Packaged green fodder business ka complete guide. Janein maize silage plant kaise lagayein, SMAM subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
    images: ['https://kisanstatus.com/images/kisanguides/silage-hero.webp'],
  },
  alternates: {
    canonical: 'https://kisanstatus.com/articles/farming/silage-making-business-guide',
  },
};

// ── Schema Markup (JSON-LD) ───────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kisanstatus.com/#organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kisanstatus.com/logo.webp',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kisanstatus.com/articles/farming/silage-making-business-guide/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'Farming', item: 'https://kisanstatus.com/articles/category/farming' },
        { '@type': 'ListItem', position: 4, name: 'Silage Making Business', item: 'https://kisanstatus.com/articles/farming/silage-making-business-guide' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/farming/silage-making-business-guide/#article',
      headline: 'Silage Making Business 2026: SMAM Subsidy & Real Profit Guide',
      description: 'Packaged green fodder business ka complete guide. Janein maize silage plant kaise lagayein, SMAM subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
      image: 'https://kisanstatus.com/images/kisanguides/silage-hero.webp',
      author: {
        '@type': 'Organization',
        name: 'KisanStatus Team',
        url: 'https://kisanstatus.com/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'KisanStatus.com',
        logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' },
      },
      datePublished: '2026-01-15',
      dateModified: '2026-07-21',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://kisanstatus.com/articles/farming/silage-making-business-guide/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/farming/silage-making-business-guide/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Packaged fodder packet kholne ke baad kitne din tak use karna chahiye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Packet khulne ke 3-4 din ke andar use kar lena chahiye. Uske baad hawa lagne se fermentation reverse ho jata hai aur fungus lag sakta hai. Rozana thoda-thoda kaat kar nikalna sahi tarika hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya yeh preserved fodder sirf gaay/bhains ke liye hai ya bakri/bhed bhi kha sakti hain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bakri, bhed aur ghode bhi khila sakte hain. Bas quantity alag hogi — chhote janwaron ke liye 1-2 kg rozana kaafi hai, bhains ko 8-10 kg tak chahiye.',
          },
        },
        {
          '@type': 'Question',
          name: 'Off-season (garmiyon) mein machinery aur staff ka kya karein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Garmiyon mein demand girti hai kyunki hari ghaas khud hi available ho jaati hai. Ye time machinery servicing ke liye use karo. Staff ko hay making ya mineral mixture blending jaisa kaam do, taaki fixed cost nikalta rahe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya packaged fodder banane ke liye koi special training ya license chahiye?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Udyam Registration aur GST basic zaroorat hai. Branded feed bechna ho toh FSSAI license lagega. NDDB ya KVK ke short-term courses se fermentation aur quality control ka practical gyaan mil jata hai.',
          },
        },
      ],
    },
  ],
};

export default function SilageMaking() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Image 1: Hero Image (LCP Optimization) */}
      <Image 
        src="/images/kisanguides/silage-hero.webp" 
        alt="Silage Packets Stacked Near Dairy Farm - Agri Business Guide 2026" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Silage (Packaged Green Fodder) Business 2026: Makka ko Preserve Karke Lakhon Kamayein
      </h1>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic">
        Sardiyon mein (December-February) hari ghaas milna mushkil ho jaata hai. Dairy farmers pareshan hote hain, doodh production gir jata hai. Silage — anaerobic tarike se preserve kiya hara chara — isi gap ko bharta hai.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Dairy belts mein iski demand tezi se badh rahi hai. Model simple hai: khet mein makka ugao, kaato, airtight packets mein pack karo, aur dairy farmers ko becho. Margin achha hai, aur zyada log is technical process se abhi bhi anjaan hain — isliye competition kam hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Silage Hai Kya? Dairy Farmers Ise Kyun Khareedte Hain?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Naya concept nahi hai ye. Hari ghaas — mostly maize — ko bina oxygen ke heavy-duty plastic packets mein seal kar dete hain. Andar natural fermentation shuru hoti hai. Lactic acid bacteria badhte hain, pH 4.0 ke aas-paas aa jata hai, aur ghaas kharab hone se bach jaati hai.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sahi tarike se bana hua fodder 6 mahine tak fresh rehta hai. Nutrition bhi maintain rehti hai — crude protein 7-9%, dry matter 30-35%.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-semibold">
        Farmers ise regular kyun khareedte hain:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Sardiyon mein shortage:</strong> December se February tak fresh fodder milna mushkil hota hai.</li>
        <li><strong>Consistent nutrition:</strong> Har packet ki quality same rehti hai, doodh ki quantity stable rehti hai.</li>
        <li><strong>Easy storage:</strong> 6 mahine kharab nahi hota, bas chhaon mein rakh do.</li>
        <li><strong>Labour efficiency:</strong> 25 kg ka packet uthana aur khilana jhanjhat-free hai.</li>
      </ul>

      {/* Image 2: Silage Machinery */}
      <Image 
        src="/images/kisanguides/silage-machinery.webp" 
        alt="Chaff Cutter and Silage Bag Sealing Machine in Action" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Business Model Kaise Kaam Karta Hai
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Basic production flow kuch aisa hai:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Makka ki kheti karein</strong> ya kisaanon se contract farming par khareedein.</li>
          <li><strong>60-70 din mein harvest karein</strong> — jab makka dough stage mein ho, lagbhag 70% moisture par.</li>
          <li><strong>Chaff cutter se kaatein</strong> — 1-2 inch ke pieces mein.</li>
          <li><strong>Fodder bags mein bharein</strong> — 25 kg ya 50 kg ke UV-treated plastic bags.</li>
          <li><strong>Sealing machine se seal karein</strong> — bilkul air-tight.</li>
          <li><strong>45-60 din ferment hone dein</strong> — thandi chhaon mein stack karke.</li>
          <li><strong>Dairy farmers ko supply karein</strong> — ₹300-₹400 per 25 kg packet, market rate ke hisaab se.</li>
        </ol>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Model 1 — Apni zameen par makka ugana:</strong> 5-10 acre zameen ho toh khud ugao. Margin zyada milta hai (40-50%), par investment aur risk bhi zyada hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Model 2 — Kisaanon se khareedna:</strong> Sirf processing unit lagao, local makka khareedo, preserve karo aur becho. Margin kam hai (20-30%), par risk kam hai aur scale karna aasan hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kitna Paisa Lagega — Realistic Budget
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Medium-scale unit ka budget dekhte hain — jo mahine mein 3,000-4,000 packets (25 kg each) bana sake.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: ye numbers estimated ranges hain, local rates aur field conditions ke hisaab se upar-neeche ho sakte hain.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Fodder Processing Unit Setup (2026 Estimates)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Chaff Cutter Machine (10 HP, diesel/electric):</span>
            <span className="font-semibold">₹80,000 - ₹1,20,000</span>
          </li>
          <li className="flex justify-between">
            <span>Bag Sealing Machine:</span>
            <span className="font-semibold">₹40,000 - ₹60,000</span>
          </li>
          <li className="flex justify-between">
            <span>Weighing Scale (100 kg capacity):</span>
            <span className="font-semibold">₹8,000 - ₹12,000</span>
          </li>
          <li className="flex justify-between">
            <span>Storage Shed (200 sq ft, temporary):</span>
            <span className="font-semibold">₹30,000 - ₹50,000</span>
          </li>
          <li className="flex justify-between">
            <span>Plastic Bags (initial stock — 5,000 pieces):</span>
            <span className="font-semibold">₹25,000 - ₹35,000</span>
          </li>
          <li className="flex justify-between">
            <span>Working Capital (1 month raw material):</span>
            <span className="font-semibold">₹1,00,000 - ₹1,50,000</span>
          </li>
          <li className="flex justify-between">
            <span>Transportation (used tractor/tempo):</span>
            <span className="font-semibold">₹1,50,000 - ₹2,50,000</span>
          </li>
          <li className="flex justify-between">
            <span>Licenses, Misc:</span>
            <span className="font-semibold">₹20,000 - ₹30,000</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Investment Range:</span>
            <span className="text-green-700 dark:text-green-400">₹4,53,000 - ₹7,07,000</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Is investment ke liye <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC)</Link> ek badhiya option hai — working capital ke liye limit badhwa sakte ho.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Machinery ke liye <a href="https://www.mudra.org.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">Mudra Loan</a> bhi le sakte ho — Tarun category mein ₹10 lakh tak bina collateral ke milta hai.
      </p>

      {/* Image 3: Silage Packets */}
      <Image 
        src="/images/kisanguides/silage-packets.webp" 
        alt="Stacked Silage Bags Ready for Dairy Farm Distribution" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sarkari Subsidy: SMAM, AIF, PM FME
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kai schemes hain jinka fayda uthaya ja sakta hai, par har ek ki apni eligibility hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">1. SMAM (Sub-Mission on Agricultural Mechanization):</strong>
            Chaff cutter aur sealing machine par 40-50% subsidy — general category 40%, SC/ST/women 50%. Ek machine par maximum ₹1-2 lakh.
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic">
              SMAM ke rules state-wise alag hote hain, apne zila Agriculture Department se latest figures le lena.
            </p>
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">2. Agriculture Infrastructure Fund (AIF):</strong>
            Processing plant ya storage unit ke liye 7 saal tak 3% interest subsidy. Maximum loan ₹2 crore.
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic">
              Eligibility bank-specific hoti hai, nazdeeki bank se poora detail confirm kar lena.
            </p>
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">3. PM FME Yojana:</strong>
            Branded packaging mein bechna ho toh <Link href="/articles/farming/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME</Link> ke under 35% tak subsidy mil sakti hai, maximum ₹10 lakh. Micro food processing units ke liye hai.
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic">
              Exact criteria official portal ya Industries Department se check karo.
            </p>
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">4. State-Level Fodder Development Schemes:</strong>
            Haryana mein "Fodder Development Scheme", Rajasthan mein "Mukhyamantri Pashudhan Vikas Yojana" — processing units par 30-50% subsidy.
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic">
              State ke hisaab se badalta hai, Animal Husbandry Department se latest jaankari lo.
            </p>
          </li>
        </ul>
      </div>

      <ExternalLinkButton 
        url="https://nddb.org/" 
        label="NDDB Official Portal - Dairy Schemes Check Karein" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Ek Packet Mein Kitna Profit Hai
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        25 kg packet ka cost breakdown — Model 2 ke hisaab se, yaani kisaanon se makka khareed kar.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Item</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Cost per 25 kg Packet</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Green Maize (35-40 kg fresh weight):</td>
              <td className="py-3 px-4">₹105 - ₹140</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Plastic Bag:</td>
              <td className="py-3 px-4">₹5 - ₹7</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Labor (cutting, filling, sealing):</td>
              <td className="py-3 px-4">₹10 - ₹15</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Electricity/Diesel (machine running):</td>
              <td className="py-3 px-4">₹5 - ₹8</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Transportation (to customer):</td>
              <td className="py-3 px-4">₹10 - ₹15</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Misc (packaging, wastage, etc):</td>
              <td className="py-3 px-4">₹5 - ₹10</td>
            </tr>
            <tr className="bg-red-50 dark:bg-red-900/20">
              <td className="py-3 px-4 font-bold text-red-800 dark:text-red-300">Total Cost:</td>
              <td className="py-3 px-4 font-bold text-red-700 dark:text-red-400">₹140 - ₹195</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Selling Price:</td>
              <td className="py-3 px-4">₹300 - ₹400</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-bold text-green-800 dark:text-green-300">Net Profit per Packet:</td>
              <td className="py-3 px-4 font-bold text-green-700 dark:text-green-400">₹105 - ₹260</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Average profit ₹150-180 per packet maan lo. 3,000 packets mahine mein bechoge toh monthly profit ₹4.5-5.4 lakh, saal ka ₹50-65 lakh ban sakta hai. Shuruaati 6 mahine mein realistically 1,000-1,500 packets hi bikenge, tab bhi monthly ₹1.5-2.7 lakh banta hai — bura nahi hai.
      </p>

      {/* Image 4: Dairy Farm Delivery */}
      <Image 
        src="/images/kisanguides/silage-dairy-farm.webp" 
        alt="Silage Delivery to Local Dairy Farm - Business Execution" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Real Risks — Jo Koi Nahi Batata
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sunne mein simple lagta hai. Field mein kuch cheezein pareshan karti hain.
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Packet Failure — Sabse Badi Problem</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Sealing thik nahi hui, ya bag mein chhed reh gaya, toh oxygen andar chala jata hai — fungus lagta hai, smell aati hai. Shuru mein 100 mein se 5-10 packets aise fail ho sakte hain. Quality control par sabse zyada dhyan yahi rakhna padta hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Raw Material Price Fluctuation</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Makka ka rate season ke hisaab se upar-neeche hota rehta hai. Baadh ya sukha aaye toh price 30-50% tak badh sakta hai. Advance contract nahi kiya toh margin ghat jaata hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Seasonal Demand</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">October-March mein demand peak par rehti hai. Garmiyon mein 40-50% gir jaati hai kyunki hari ghaas khud milne lagti hai. 6 mahine ka cash flow sambhalna aata hai toh hi tikoge.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Customer Payment Delays</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Dairy farms aksar udhaar par lete hain — 15-30 din ka credit cycle common hai. Working capital kam ho toh cash flow atak jata hai. Shuru se hi advance ya partial payment ka system rakho.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Customers Kaise Dhundhein
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sabse bada challenge yahi hai. Kuch tarike jo kaam karte hain:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Local Dairy Farms Par Direct Visit:</strong> Apne area ke 20-30 dairy farms ki list banao. Pehla order free sample ke saath do. Quality achhi lagi toh 70% cases mein order mil jata hai.</li>
        <li><strong>Dairy Cooperatives Se Tie-Up:</strong> Amul, Mother Dairy, Sudha jaise cooperatives ke local collection centers se baat karo — wo member farmers ko recommend kar sakte hain.</li>
        <li><strong>WhatsApp Groups:</strong> Gaon ke dairy farmer groups mein daily rate aur availability daalte raho, saath photos-videos bhi.</li>
        <li><strong>Contract Farming with Dairy Farms:</strong> 50+ bhains wale bade farms ke saath annual contract karo — fixed quantity, fixed rate.</li>
      </ul>

      {/* Image 5: Legal & Documents */}
      <Image 
        src="/images/kisanguides/silage-documents.webp" 
        alt="Silage Business Legal Documents and Licenses Checklist" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Legal Requirements
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Legally shuru karne ke liye ye basic cheezein chahiye:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Udyam Registration:</strong> Free hai, online ho jata hai. MSME benefits bhi milte hain.</li>
        <li><strong>GST Registration:</strong> Turnover ₹20 lakh se upar ho toh zaroori. Packaged fodder par GST 5% hai.</li>
        <li><strong>FSSAI License:</strong> Branded "animal feed" ke roop mein bech rahe ho toh chahiye. Basic registration ₹100 saal ka hai.</li>
        <li><strong>NOC from Local Authorities:</strong> Gram panchayat ya municipal corporation se, kabhi-kabhi pollution control board se bhi.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kya Ye Aapke Liye Sahi Hai
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Dairy belt mein rehte ho (Haryana, Punjab, Gujarat, UP west, Maharashtra).</li>
            <li>• 5-10 acre zameen hai, ya contract farming kar sakte ho.</li>
            <li>• ₹5-7 lakh initial investment ho sakta hai.</li>
            <li>• Marketing aati hai, customers khud dhundh sakte ho.</li>
            <li>• Rozana 6-8 ghante de sakte ho, production plus delivery dono.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Non-dairy area mein ho — customers milna mushkil hoga.</li>
            <li>• Zameen nahi hai aur contract farming bhi option nahi hai.</li>
            <li>• Marketing se bachte ho — sirf production karke baithna nahi chalega.</li>
            <li>• Quick returns chahte ho — pehle 6 mahine sirf setup karne mein jaate hain.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Pehli category mein aate ho toh chhote scale se shuru karo. Pehle 6 mahine seekho, customers banao, process samjho — fir expand karo. Seedhe ₹20 lakh laga kar badi machine mat lo, pehle market prove karo.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Subsidy ka fayda zaroor uthao — 40-50% tak machinery par mil rahi hai. Par guaranteed nahi hai. Application process mein 3-6 mahine lag sakte hain, isliye planning subsidy ke bina karo. Mil gayi toh bonus samajh lo.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Seriously interested ho toh pehle apne area ke 5-10 dairy farms se baat karo. Puchho — packaged fodder use karte hain ya nahi, kahan se lete hain, rate kya chalta hai. Research pehle, decision baad mein.
      </p>

      {/* FAQ Section */}
      <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">1. Packaged fodder packet kholne ke baad kitne din tak use karna chahiye?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Packet khulne ke 3-4 din ke andar use kar lena chahiye. Uske baad hawa lagne se fermentation reverse ho jata hai aur fungus lag sakta hai. Rozana thoda-thoda kaat kar nikalna sahi tarika hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">2. Kya yeh preserved fodder sirf gaay/bhains ke liye hai ya bakri/bhed bhi kha sakti hain?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Bakri, bhed aur ghode bhi khila sakte hain. Bas quantity alag hogi — chhote janwaron ke liye 1-2 kg rozana kaafi hai, bhains ko 8-10 kg tak chahiye.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3. Off-season (garmiyon) mein machinery aur staff ka kya karein?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Garmiyon mein demand girti hai kyunki hari ghaas khud hi available ho jaati hai. Ye time machinery servicing ke liye use karo. Staff ko hay making ya mineral mixture blending jaisa kaam do, taaki fixed cost nikalta rahe.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">4. Kya packaged fodder banane ke liye koi special training ya license chahiye?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Udyam Registration aur GST basic zaroorat hai. Branded feed bechna ho toh FSSAI license lagega. NDDB ya KVK ke short-term courses se fermentation aur quality control ka practical gyaan mil jata hai.</p>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures location aur circumstances ke hisaab se badal sakte hain. Koi bhi financial decision lene se pehle qualified professionals (agriculture officers, CAs) se consult karein. Latest information ke liye official sources se verify karte rahein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}
