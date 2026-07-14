import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology',
  description: 'PM Matsya Sampada Yojana ka complete guide. Janein fish farming subsidy kaise lein, biofloc technology, pond setup, aur real profit calculation.',
  keywords: [
    'pm matsya sampada yojana',
    'fish farming subsidy',
    'matsya sampada benefits',
    'biofloc technology',
    'fish pond setup',
    'aquaculture business'
  ],
  authors: [{ name: 'KisanStatus Team' }],
  openGraph: {
    title: 'PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology',
    description: 'PM Matsya Sampada Yojana ka complete guide. Janein fish farming subsidy kaise lein, biofloc technology, pond setup, aur real profit calculation.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    images: [
      {
        url: '/images/kisanguides/fish-farming-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Fish Pond with Rohu and Catla - PM Matsya Sampada Yojana Subsidy Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Matsya Sampada Yojana 2026: Complete Guide',
    description: 'Janein fish farming subsidy kaise lein, biofloc technology, aur pond setup ki ground reality.',
    images: ['/images/kisanguides/fish-farming-hero.webp'],
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
      '@id': 'https://kisanstatus.com/articles/pm-matsya-sampada/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'PM Matsya Sampada' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/pm-matsya-sampada/#article',
      headline: 'PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology',
      description: 'PM Matsya Sampada Yojana ka complete guide. Janein fish farming subsidy kaise lein, biofloc technology, pond setup, aur real profit calculation.',
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
      dateModified: '2026-07-14',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://kisanstatus.com/articles/pm-matsya-sampada/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/pm-matsya-sampada/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kya kiraye ki zameen par fish farming karne par subsidy milti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, lekin rent agreement kam se kam 7-10 saal ka hona chahiye. Subsidy ke liye aapka pond construction ya setup apni ownership mein hona chahiye. Rent par sirf operational costs cover hote hain.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya biofloc technology mein electricity ka kharcha bahut zyada hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, biofloc mein aerators 24x7 chalne padte hain. Ek 10-tank setup ka monthly electricity bill ₹3,000 - ₹5,000 tak aa sakta hai. Solar panels lagane se yeh cost kam ki ja sakti hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pehli baar fish farming karne wale ke liye kaunsi technology best hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional pond farming sabse best hai beginners ke liye. Isme risk kam hai, technical complexity kam hai, aur PMMSY subsidy bhi ispar zyada milti hai (40-60%).',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya fish farming mein insurance available hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kuch states mein PM Fasal Bima Yojana ke under fisheries ko cover kiya ja raha hai. Natural calamities, disease outbreak, aur flood ke liye insurance available hai. Apne zila ke fisheries office se pata karein.',
          },
        },
      ],
    },
  ],
};

export default function PMatsyaSampada() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Image 
        src="/images/kisanguides/fish-farming-hero.webp" 
        alt="Fish Pond with Rohu and Catla - PM Matsya Sampada Yojana Subsidy Guide" 
        width={1200} 
        height={630} 
        priority
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology, aur Real Profit
      </h1>
      
      <p className="text-lg mb-4 italic">
        Fish farming mein ek common pattern dekha jata hai: pehle saal mein oxygen management ya disease control mein galtiyan hoti hain, jisse lagbhag 20-30% tak crop loss ho sakta hai. Par experience ke saath, doosre-teesre saal tak returns stabilize ho jate hain aur profit consistent hone lagta hai.
      </p>
      
      <p className="mb-6">
        Machli palan mein paani ki quality, oxygen level, aur feed management seedha aapke profit se juda hai. Ek chhoti si chook poori crop khatam kar sakti hai. Lekin jab management sahi hota hai, toh returns kaafi achhe milte hain. Isme sarkar ki PM Matsya Sampada Yojana (PMMSY) 40-60% tak ki subsidy dekar is business ko aur bhi viable bana deti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Aquaculture Kyun? India Ka Fisheries Sector Boom Par Hai
      </h2>
      
      <p className="mb-4">
        India duniya mein machli production mein teesre number par hai. Par domestic consumption abhi bhi demand se kam hai. Per capita fish consumption India mein sirf 5-6 kg/year hai, jabki global average 20 kg hai. Matlab isme abhi bhi kaafi growth potential hai.
      </p>
      
      <p className="mb-4">
        Export ki baat karein toh India saal ka ₹50,000+ crore ka seafood export karta hai, jisme shrimp (jhinga) sabse zyada hota hai. Domestic market bhi tez grow kar raha hai kyunki urban areas mein log ab protein-rich diet par zyada focus kar rahe hain.
      </p>

      <p className="mb-6">
        Ek aur bada fayda yeh hai ki machli palan ko agriculture activity mana jata hai, isliye individual farmers par isse hone wali income par income tax nahi lagta.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kaunsi Technology Chunein? Traditional Ponds vs Biofloc vs RAS
      </h2>
      
      <p className="mb-4">
        Aquaculture mein mukhya roop se 3 technologies use hoti hain. Har ek ki apni cost, complexity, aur returns hain, jisse naye farmers aksar confuse ho jaate hain.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Technology</th>
              <th className="py-2 px-4 border-b text-left">Setup Cost</th>
              <th className="py-2 px-4 border-b text-left">Production</th>
              <th className="py-2 px-4 border-b text-left">Best Fish Species</th>
              <th className="py-2 px-4 border-b text-left">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Traditional Pond</td>
              <td className="py-2 px-4 border-b">₹1.5-2.5 lakh/acre</td>
              <td className="py-2 px-4 border-b">3-5 ton/acre/year</td>
              <td className="py-2 px-4 border-b">Rohu, Catla, Mrigal (IMC)</td>
              <td className="py-2 px-4 border-b">Easy - Beginners ke liye</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Biofloc Technology</td>
              <td className="py-2 px-4 border-b">₹3-5 lakh (10 tank setup)</td>
              <td className="py-2 px-4 border-b">8-12 kg/tank/cycle</td>
              <td className="py-2 px-4 border-b">Singhi, Magur, Tilapia, Pangasius</td>
              <td className="py-2 px-4 border-b">Medium - Technical knowledge chahiye</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">RAS (Recirculating Aquaculture System)</td>
              <td className="py-2 px-4 border-b">₹15-25 lakh</td>
              <td className="py-2 px-4 border-b">20-30 kg/tank/cycle</td>
              <td className="py-2 px-4 border-b">High-value: Pangasius, Barramundi</td>
              <td className="py-2 px-4 border-b">Hard - Advanced technology</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Central Institute of Freshwater Aquaculture (CIFA), Bhubaneswar ke scientists ke mutabiq, agar aap pehli baar shuru kar rahe hain toh traditional pond se shuruat karna behtar rehta hai. Isme risk kam hai, technical complexity kam hai, aur PMMSY subsidy bhi ispar zyada milti hai.
      </p>

      <p className="mb-6">
        Biofloc technology tab choose karein jab aapke paas zameen kam hai par investment capacity zyada hai. Urban areas mein yeh popular ho rahi hai kyunki kam space mein zyada production hota hai. Par isme electricity cost zyada hai (aerators 24x7 chalte hain), aur technical knowledge zaroori hai.
      </p>

      {/* Image 2: Fish Varieties */}
      <Image 
        src="/images/kisanguides/fish-varieties.webp" 
        alt="Different Fish Species - Rohu, Catla, Mrigal for Fish Farming" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kitna Paisa Lagega? 1 Acre Pond ka Realistic Budget
      </h2>
      
      <p className="mb-4">
        Yeh ek 1 acre traditional pond ka budget hai, jisme IMC (Indian Major Carps - Rohu, Catla, Mrigal) pale jayengi.
      </p>

      <p className="mb-4 text-sm text-gray-600 italic">
        Note: Neeche diye gaye numbers estimated ranges hain. Yeh aapke local material rates, inflation, aur field conditions ke hisaab se badal sakte hain.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">1 Acre Fish Pond Setup (2026 Estimates)</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Pond Construction (excavation, bund, drainage):</span>
            <span className="font-semibold">₹80,000 - ₹1,20,000</span>
          </li>
          <li className="flex justify-between">
            <span>Fingerlings (10,000-12,000 pieces):</span>
            <span className="font-semibold">₹25,000 - ₹35,000</span>
          </li>
          <li className="flex justify-between">
            <span>Fish Feed (1 year - 8-10 ton):</span>
            <span className="font-semibold">₹2,00,000 - ₹2,50,000</span>
          </li>
          <li className="flex justify-between">
            <span>Lime, Fertilizer, Medicines:</span>
            <span className="font-semibold">₹15,000 - ₹25,000</span>
          </li>
          <li className="flex justify-between">
            <span>Aerator (1 HP, if needed):</span>
            <span className="font-semibold">₹25,000 - ₹35,000</span>
          </li>
          <li className="flex justify-between">
            <span>Nets, Equipment, Misc:</span>
            <span className="font-semibold">₹15,000 - ₹25,000</span>
          </li>
          <li className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>Total Investment Range:</span>
            <span className="text-green-700">₹3,60,000 - ₹4,90,000</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Yeh investment lagti hai. Par agar aapke paas <Link href="/kisan-credit-card-kcc" className="text-blue-600 hover:underline">Kisan Credit Card (KCC)</Link> hai, toh fisheries ke liye bhi loan mil jata hai. KCC ke under ₹3 lakh tak loan milta hai, aur interest rate 4% (timely repayment par) hai.
      </p>

      <p className="mb-6">
        Ek aur option hai <Link href="/mudra-loan-kisan" className="text-blue-600 hover:underline">Mudra Loan</Link> - Tarun category mein ₹10 lakh tak bina collateral ke mil jata hai. Fish farming unit ke liye yeh perfect fit hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        PM Matsya Sampada Yojana (PMMSY) Subsidy: Complete Details
      </h2>
      
      <p className="mb-4">
        PMMSY 2020 mein launch hui thi, 5 saal ke liye (2020-2025). Budget ₹20,000+ crore hai. Yeh scheme fisheries sector ko transform karne ke liye hai.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-900">1. New Pond Construction:</strong>
            <p className="mt-1 text-gray-700">
              General category ko 40% subsidy milti hai (maximum ₹5 lakh per hectare). SC/ST, women, aur North-East states mein 60% subsidy milti hai (maximum ₹7.5 lakh per hectare). Yeh subsidy pond excavation, bund construction, aur drainage system par milti hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: PMMSY ki guidelines update hoti rehti hain. Latest subsidy % aur eligibility ke liye nazdeeki Fisheries Department office se confirm karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">2. Biofloc/RAS Setup:</strong>
            <p className="mt-1 text-gray-700">
              Biofloc technology par 60% subsidy milti hai (maximum ₹10 lakh). RAS par bhi 60% subsidy hai (maximum ₹15 lakh). Yeh high-tech systems ke liye hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: Biofloc/RAS ki subsidy limits change hoti hain. Latest details ke liye official portal check karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">3. Cold Storage aur Processing Unit:</strong>
            <p className="mt-1 text-gray-700">
              Agar aap fish processing unit ya cold storage lagana chahte hain, toh 35-50% subsidy mil sakti hai. <Link href="/pm-fme-yojana" className="text-blue-600 hover:underline">PM FME Yojana</Link> ke under bhi food processing units par 35% subsidy milti hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: Processing unit ki eligibility criteria specific hai. Detailed information ke liye official portal ya nazdeeki Fisheries Department se contact karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">4. Feed Mill Setup:</strong>
            <p className="mt-1 text-gray-700">
              Fish feed mill lagane par 40-50% subsidy milti hai. Agar aap apna feed banana chahte hain (jo cost 20-30% kam kar deta hai), toh yeh option consider karein. <Link href="/agriculture-infrastructure-fund" className="text-blue-600 hover:underline">Agriculture Infrastructure Fund</Link> ke under bhi 3% interest subsidy mil sakti hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: Feed mill ki subsidy limits vary karti hain. Latest details ke liye Fisheries Department se confirm karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">5. Ornamental Fish Farming:</strong>
            <p className="mt-1 text-gray-700">
              Agar aap decorative/aquarium fish paalna chahte hain, toh 50-60% subsidy milti hai. Isme margin bahut zyada hai (₹50-500 per fish), par market access zaroori hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: Ornamental fish ki market demand vary karti hai. Apne area mein demand check karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">6. PMEGP (Prime Minister's Employment Generation Programme):</strong>
            <p className="mt-1 text-gray-700">
              Chhote fish farming units par 25-35% subsidy mil sakti hai (rural areas mein zyada). Maximum project cost ₹25 lakh hai. KVIC ke through apply hota hai. <Link href="/pmegp-yojana" className="text-blue-600 hover:underline">PMEGP ki detailed guide</Link> yahan padhein.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: PMEGP ki guidelines periodically update hoti hain. Latest details ke liye KVIC office se confirm karein.
            </p>
          </li>
        </ul>
      </div>

      <p className="mb-6">
        Agar aap PMMSY ke under apply karna chahte hain, toh neeche diya gaya button aapko official portal par le jayega:
      </p>

      <ExternalLinkButton 
        url="https://pmmsy.dahd.nic.in/" 
        label="PMMSY Official Portal - Apply Karein" 
      />

      {/* Image 3: Application Process */}
      <Image 
        src="/images/kisanguides/fish-farming-application.webp" 
        alt="Entrepreneur Applying for Fish Farming Loan and Subsidy" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Step-by-Step Process: Traditional Pond Mein Machli Kaise Paalein?
      </h2>
      
      <p className="mb-4">
        Traditional pond farming mein 5 main steps hote hain. Har step critical hai - ek galti poori crop kharab kar sakti hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 1: Pond Preparation (Sabse Important)</h3>
          <p className="mt-2">
            Pond ko pehle dry karein (agar purana hai). Phir lime (chuna) daalein - 200-250 kg/acre. Yeh pH balance karta hai aur parasites mar deta hai. 7-10 din baad cow dung (gobar) daalein - 500 kg/acre. Yeh natural plankton (machliyon ka food) grow karta hai. Phir paani bharein - 1.5-2 meter depth tak.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 2: Fingerling Stocking</h3>
          <p className="mt-2">
            Achhe quality ke fingerlings (5-8 cm size) khareedein. IMC (Indian Major Carps) ka ratio yeh rakhein: Catla 30%, Rohu 40%, Mrigal 30%. Per acre 10,000-12,000 fingerlings stock karein. Fingerlings hamesha reputed hatchery se lein - government hatcheries ya certified private hatcheries.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 3: Feeding Management</h3>
          <p className="mt-2">
            Pehle 2 mahine natural food (plankton) kaafi hota hai. Uske baad supplementary feed dena padta hai - rice bran, mustard oil cake, aur commercial fish feed (pellets). Feed conversion ratio (FCR) 1.5-2:1 hona chahiye - matlab 1.5-2 kg feed se 1 kg machli banti hai. Daily 2-3% body weight feed dein.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 4: Water Quality Management</h3>
          <p className="mt-2">
            Dissolved oxygen (DO) 5 ppm se upar hona chahiye. Agar kam hai toh aerators chalayein. pH 7-8.5 ke beech hona chahiye. Ammonia aur nitrite levels check karte rahein. Har 15-20 din mein 20-25% paani replace karein. Water quality kits available hain - ₹2,000-3,000 mein mil jaate hain.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 5: Harvesting</h3>
          <p className="mt-2">
            10-12 mahine mein machliyan marketable size tak pahunch jati hain (Rohu 1-1.5 kg, Catla 1.5-2 kg, Mrigal 800g-1 kg). Harvesting se pehle pond ka paani nikalein, nets se machliyan pakdein. Immediate ice mein pack karein taaki freshness maintain rahe.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Composite fish culture (IMC) mein 3 species ek saath paalne ka fayda yeh hai ki inki feeding habits alag hoti hain. Catla surface feeder hai, Rohu column feeder, aur Mrigal bottom feeder. Isse pond ki saari space utilize hoti hai aur production naturally maximize hota hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        3 Saal Ka Profit Calculation: Real Numbers
      </h2>
      
      <p className="mb-4">
        Yeh calculation 1 acre traditional pond ke liye hai, jisme IMC (Rohu, Catla, Mrigal) pale jati hain.
      </p>

      <p className="mb-4 text-sm text-gray-600 italic">
        Note: Yeh figures average estimates hain. Actual production, market rates, aur expenses aapke management aur local conditions par depend karte hain.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Item</th>
              <th className="py-2 px-4 border-b text-left">Year 1</th>
              <th className="py-2 px-4 border-b text-left">Year 2</th>
              <th className="py-2 px-4 border-b text-left">Year 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b font-semibold" colSpan={4}>Revenue</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Production (ton/acre)</td>
              <td className="py-2 px-4 border-b">3-4 ton</td>
              <td className="py-2 px-4 border-b">4-5 ton</td>
              <td className="py-2 px-4 border-b">5-6 ton</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Average Rate (₹/kg)</td>
              <td className="py-2 px-4 border-b">₹120-150</td>
              <td className="py-2 px-4 border-b">₹130-160</td>
              <td className="py-2 px-4 border-b">₹140-170</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Total Revenue</td>
              <td className="py-2 px-4 border-b">₹3,60,000 - ₹6,00,000</td>
              <td className="py-2 px-4 border-b">₹5,20,000 - ₹8,00,000</td>
              <td className="py-2 px-4 border-b">₹7,00,000 - ₹10,20,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold" colSpan={4}>Expenses</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Feed (main cost - 60-70%)</td>
              <td className="py-2 px-4 border-b">₹2,00,000 - ₹2,50,000</td>
              <td className="py-2 px-4 border-b">₹2,50,000 - ₹3,00,000</td>
              <td className="py-2 px-4 border-b">₹3,00,000 - ₹3,50,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Fingerlings, Medicines, Misc</td>
              <td className="py-2 px-4 border-b">₹50,000 - ₹70,000</td>
              <td className="py-2 px-4 border-b">₹60,000 - ₹80,000</td>
              <td className="py-2 px-4 border-b">₹70,000 - ₹90,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Total Expenses</td>
              <td className="py-2 px-4 border-b">₹2,50,000 - ₹3,20,000</td>
              <td className="py-2 px-4 border-b">₹3,10,000 - ₹3,80,000</td>
              <td className="py-2 px-4 border-b">₹3,70,000 - ₹4,40,000</td>
            </tr>
            <tr className="bg-green-50">
              <td className="py-2 px-4 border-b font-bold">Net Profit (Annual)</td>
              <td className="py-2 px-4 border-b font-bold text-green-700">₹1,10,000 - ₹2,80,000</td>
              <td className="py-2 px-4 border-b font-bold text-green-700">₹2,10,000 - ₹4,20,000</td>
              <td className="py-2 px-4 border-b font-bold text-green-700">₹3,30,000 - ₹5,80,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Year 1 mein profit kam hota hai kyunki pond establish ho raha hota hai, aur aap seekh rahe hote hain. Year 2-3 tak aapka experience badh jata hai, mortality rate kam hota hai, aur production improve hota hai.
      </p>

      <p className="mb-6">
        Agar aap high-value fish paalte hain (jaise Pangasius, Tilapia, ya Ornamental fish), toh margins 2-3x zyada ho sakte hain. Par inki market access aur technical knowledge bhi zyada chahiye.
      </p>

      {/* Image 4: Packaged Fish Products */}
      <Image 
        src="/images/kisanguides/fish-products-market.webp" 
        alt="Fresh and Processed Fish Products Ready for Market Sale" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="mb-4">
        Machli palan shuru mein aasaan lagta hai, par isme risks kaafi hain. In baaton ka dhyan rakhna zaroori hai:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Disease Outbreak (Sabse Bada Risk)</h3>
          <p className="mt-2">
            Bacterial infections, fungal infections, aur parasitic infections poori crop khatam kar sakte hain. Kuch saalon mein disease outbreaks se significant crop losses hue hain. Biosecurity measures zaroori hain - pond disinfection, healthy fingerlings, aur water quality management.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Oxygen Depletion</h3>
          <p className="mt-2">
            Subah ke time par dissolved oxygen kam ho jata hai. Agar 3 ppm se neeche chala gaya, toh fish suffocate ho kar mar jati hain. Garmiyon mein yeh risk zyada hota hai. Aerators zaroori hain, aur backup power (generator) bhi hona chahiye. Power cut mein 1-2 ghante mein poori crop mar sakti hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Flood aur Drought</h3>
          <p className="mt-2">
            Heavy rain mein pond overflow ho sakta hai - machliyan bah nikalti hain. Ya phir drought mein paani kam ho jata hai - oxygen aur temperature problems aati hain. Kuch saalon mein baadh (floods) se kai fish farms ko nuksan hua hai. Location selection aur pond design bahut zaroori hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Feed Cost Volatility</h3>
          <p className="mt-2">
            Fish feed ka cost total expense ka 60-70% hota hai. Agar soyabean ya fish meal ke prices badh gaye, toh feed mehnga ho jata hai. Kuch saalon mein feed prices mein significant badhotri hui hai. Apna feed mill lagana ek option hai, par usme bhi investment lagti hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Market Price Fluctuation</h3>
          <p className="mt-2">
            Festival season (Durga Puja, Diwali) mein rates achhe milte hain. Par off-season mein rates lagbhag 20-30% gir jate hain. Agar aapke paas cold storage nahi hai, toh forced sale karni padti hai. <Link href="/pm-kisan-sampada-yojana" className="text-blue-600 hover:underline">PM Kisan Sampada Yojana</Link> ke under cold storage par subsidy milti hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Predators aur Theft</h3>
          <p className="mt-2">
            Birds (kingfisher, cormorant), snakes, aur otters machliyan kha jaate hain. Netting zaroori hai. Gaon mein theft bhi hota hai - ek raat mein poora pond khaali ho sakta hai. Fencing aur security zaroori hai.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Training Kahan Se Lein? Yeh Skip Mat Karna
      </h2>
      
      <p className="mb-4">
        Machli palan mein technical knowledge bahut zaroori hai. Bina proper training ke water quality management, disease diagnosis, aur feeding techniques seekhna mushkil hota hai, jisse pehle hi cycle mein nuksan ho sakta hai.
      </p>

      <p className="mb-4">
        7-15 din ki training lein. Cost ₹3,000-10,000 hoti hai (kuch jagah free bhi milti hai). Training mein aap seekhenge:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Pond construction aur design</li>
        <li>Water quality testing aur management</li>
        <li>Fingerling selection aur stocking density</li>
        <li>Feed formulation aur feeding schedule</li>
        <li>Disease identification aur treatment</li>
        <li>Harvesting techniques</li>
        <li>Post-harvest handling</li>
        <li>Record keeping</li>
      </ul>

      <p className="mb-4">
        Best training centers:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Central Institute of Freshwater Aquaculture (CIFA), Bhubaneswar:</strong> Premier institute. Inke regular training programs hote hain. Website par check karein:
        </li>
      </ul>

      <ExternalLinkButton 
        url="https://www.cifa.in/" 
        label="CIFA Bhubaneswar - Training Programs Check Karein" 
      />

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Central Institute of Brackishwater Aquaculture (CIBA), Chennai:</strong> Agar aap shrimp farming karna chahte hain, toh yeh best institute hai.
        </li>
        <li>
          <strong>Krishi Vigyan Kendra (KVK):</strong> Har district mein KVK fish farming training deta hai. Free ya nominal fee mein. Practical hands-on training hoti hai.
        </li>
        <li>
          <strong>State Fisheries Departments:</strong> Har state ki apni training centers hain. Wo regular training programs karte hain.
        </li>
        <li>
          <strong>Successful Fish Farmers:</strong> Kuch experienced farmers paid training dete hain (₹5,000-15,000 for 7-10 days). Yeh sabse practical hota hai kyunki aap real farm par kaam seekhte hain.
        </li>
      </ul>

      <p className="mb-6">
        Training ke baad kam se kam 1 mahina kisi experienced farmer ke yahan kaam karein. Theoretical knowledge aur practical experience dono zaroori hain. Ek full cycle dekhna zaroori hai taaki aapko saare challenges ka experience ho.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Waste Management: Fish Pond Water Se Kheti Karein
      </h2>
      
      <p className="mb-4">
        Fish farming ka ek bada fayda yeh hai ki pond water bahut nutrient-rich hota hai. Isko aap khet mein use kar sakte hain - free fertilizer milta hai.
      </p>

      <p className="mb-6">
        Aap yeh bhi kar sakte hain:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Pond water se vegetables ugayein (aquaponics)</li>
        <li>
          Fish waste se <Link href="/vermi-compost-business" className="text-blue-600 hover:underline">vermi compost</Link> banayein - ₹15-20/kg milta hai
        </li>
        <li>Integrated farming - pond ke kinare poultry ya duck farming karein (unke droppings fish food bante hain)</li>
      </ul>

      <p className="mb-6">
        Integrated farming se aap multiple income streams create kar sakte hain. Ek acre pond + poultry + vegetables se saal ka ₹8-10 lakh tak ho sakta hai.
      </p>

      {/* Image 5: Documents Checklist */}
      <Image 
        src="/images/kisanguides/fish-farming-documents.webp" 
        alt="Fish Farming Application Documents - Aadhaar, PAN, Land Records" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full h-auto object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        Yeh business unke liye behtar hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Zameen hai (preferably low-lying area jahan paani bhara rehta hai)</li>
        <li>Water source available hai (borewell, canal, ya natural water body)</li>
        <li>Daily 2-3 hours de sakte hain (monitoring zaroori hai)</li>
        <li>₹3-5 lakh initial investment kar sakte hain</li>
        <li>Technical details seekhne ki ichha hai</li>
        <li>Market access hai (nazdeeki mandi ya direct buyers)</li>
        <li>Patience hai (pehla saal learning year hota hai)</li>
      </ul>

      <p className="mb-4">
        Yeh business unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Water availability nahi hai</li>
        <li>Daily monitoring nahi kar sakte</li>
        <li>Technical knowledge seekhne ki ichha nahi hai</li>
        <li>Quick money chahte hain (pehla saal learning year hota hai)</li>
        <li>Risk nahi le sakte (disease outbreak mein poori crop ja sakti hai)</li>
      </ul>

      <p className="mb-6">
        Agar aap pehle category mein aate hain, toh 1 acre se start karein. Pehle saal seekhein, mistakes karein, experience gain karein. Phir Year 2 mein 2-3 acres tak expand karein. Direct 5-10 acres se start mat karein - risk bahut hai.
      </p>

      <p className="mb-6">
        Subsidy ka fayda zaroor uthayein. 40-60% subsidy mil rahi hai, isse na lena bewakoofi hogi. Par yaad rakho - subsidy milna guaranteed nahi hai. Application process mein 3-6 months lag sakte hain. Isliye apni planning subsidy ke bina karein. Agar mil gayi, toh bonus samjho.
      </p>

      <p className="mb-6">
        Ek aur point: <Link href="/fasal-bima-yojana" className="text-blue-600 hover:underline">Fasal Bima Yojana (PMFBY)</Link> ke under ab fisheries ko bhi cover kiya ja raha hai kuch states mein. Apne zila ke fisheries office se pata karein ki aapke area mein insurance available hai ya nahi. Natural calamities mein yeh bahut kaam aata hai.
      </p>

      <p className="mb-6">
        Agar aap isme serious hain, toh pehle apne ilaake ke kisi experienced machli palak se milein aur unke challenges samjhein. Uske baad training lein aur chhote scale par shuruat karein. Sahi planning aur mehnat se yeh ek sustainable income source ban sakta hai.
      </p>

      {/* FAQ Section */}
      <h2 id="faq" className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Kya kiraye ki zameen par fish farming karne par subsidy milti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Haan, lekin rent agreement kam se kam 7-10 saal ka hona chahiye. Subsidy ke liye aapka pond construction ya setup apni ownership mein hona chahiye. Rent par sirf operational costs cover hote hain.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Kya biofloc technology mein electricity ka kharcha bahut zyada hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Haan, biofloc mein aerators 24x7 chalne padte hain. Ek 10-tank setup ka monthly electricity bill ₹3,000 - ₹5,000 tak aa sakta hai. Solar panels lagane se yeh cost kam ki ja sakti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Pehli baar fish farming karne wale ke liye kaunsi technology best hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Traditional pond farming sabse best hai beginners ke liye. Isme risk kam hai, technical complexity kam hai, aur PMMSY subsidy bhi ispar zyada milti hai (40-60%).</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Kya fish farming mein insurance available hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Kuch states mein PM Fasal Bima Yojana ke under fisheries ko cover kiya ja raha hai. Natural calamities, disease outbreak, aur flood ke liye insurance available hai. Apne zila ke fisheries office se pata karein.</p>
        </div>
      </div>

      <p className="mb-6 italic text-gray-600">
        Disclaimer: Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (fisheries officers, aquaculture experts) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein.
      </p>
    </article>
  );
}