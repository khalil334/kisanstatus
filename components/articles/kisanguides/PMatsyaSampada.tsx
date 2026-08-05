import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PM Matsya Sampada Yojana 2026: 60% Subsidy & Complete Guide',
  description: 'PM Matsya Sampada Yojana complete guide. Janein fish farming subsidy, biofloc technology, pond setup aur real profit calculation ke baare mein.',
  keywords: [
    'pm matsya sampada yojana',
    'fish farming subsidy',
    'matsya sampada benefits',
    'biofloc technology',
    'fish pond setup',
    'aquaculture business'
  ],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'PM Matsya Sampada Yojana 2026: 60% Subsidy & Complete Guide',
    description: 'PM Matsya Sampada Yojana complete guide. Janein fish farming subsidy, biofloc technology, pond setup aur real profit calculation ke baare mein.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming',
    images: [
      {
        url: 'https://kisanstatus.com/images/kisanguides/fish-farming-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Fish Pond with Rohu and Catla - PM Matsya Sampada Yojana Subsidy Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Matsya Sampada Yojana 2026: 60% Subsidy & Complete Guide',
    description: 'PM Matsya Sampada Yojana complete guide. Janein fish farming subsidy, biofloc technology, pond setup aur real profit calculation ke baare mein.',
    images: ['https://kisanstatus.com/images/kisanguides/fish-farming-hero.webp'],
  },
  alternates: {
    canonical: 'https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming',
  },
};

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
      '@id': 'https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'Farming', item: 'https://kisanstatus.com/articles/category/farming' },
        { '@type': 'ListItem', position: 4, name: 'PM Matsya Sampada' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming/#article',
      headline: 'PM Matsya Sampada Yojana 2026: 60% Subsidy & Complete Guide',
      description: 'PM Matsya Sampada Yojana complete guide. Janein fish farming subsidy, biofloc technology, pond setup aur real profit calculation ke baare mein.',
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
        '@id': 'https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/farming/pm-matsya-sampada-yojana-fish-farming/#faq',
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
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {}
      <Image 
        src="/images/kisanguides/fish-farming-hero.webp" 
        alt="Fish Pond with Rohu and Catla - PM Matsya Sampada Yojana Subsidy Guide" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology, aur Real Profit
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Sach kahoon toh:</strong> Machli palan mein pehle saal oxygen management ya disease control mein chhoti galtiyan 20-30% tak crop loss karwa sakti hain. Par experience ke saath, doosre-teesre saal tak returns stabilize ho jate hain aur profit consistent hone lagta hai.
        </p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Aquaculture mein paani ki quality, oxygen level, aur feed management seedha aapki jeb se juda hai. Ek chhoti si chook poori crop khatam kar sakti hai. Lekin jab management sahi hota hai, toh returns kaafi achhe milte hain. Isme sarkar ki PM Matsya Sampada Yojana (PMMSY) 40-60% tak ki financial assistance dekar is business ko aur bhi viable bana deti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Matsya Palan Kyun? India Ka Fisheries Sector Boom Par Hai
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        India duniya mein machli production mein teesre number par hai. Par domestic consumption abhi bhi demand se kam hai. Per capita fish consumption India mein sirf 5-6 kg/year hai, jabki global average 20 kg hai. Matlab isme abhi bhi kaafi growth potential hai.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Export ki baat karein toh India saal ka ₹50,000+ crore ka seafood export karta hai, jisme shrimp (jhinga) sabse zyada hota hai. Domestic market bhi tez grow kar raha hai kyunki urban areas mein log ab protein-rich diet par zyada focus kar rahe hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek aur bada fayda yeh hai ki machli palan ko agriculture activity mana jata hai, isliye individual farmers par isse hone wali income par income tax nahi lagta.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kaunsi Technology Chunein? Traditional Ponds vs Biofloc vs RAS
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aquaculture mein mukhya roop se 3 technologies use hoti hain. Har ek ki apni cost, complexity, aur returns hain, jisse naye farmers aksar confuse ho jaate hain.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Technology</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Setup Cost</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Production</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Best Fish Species</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Difficulty</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Traditional Pond</td>
              <td className="py-3 px-4">₹1.5-2.5 lakh/acre</td>
              <td className="py-3 px-4">3-5 ton/acre/year</td>
              <td className="py-3 px-4">Rohu, Catla, Mrigal (IMC)</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Easy - Beginners ke liye</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Biofloc Technology</td>
              <td className="py-3 px-4">₹3-5 lakh (10 tank setup)</td>
              <td className="py-3 px-4">8-12 kg/tank/cycle</td>
              <td className="py-3 px-4">Singhi, Magur, Tilapia, Pangasius</td>
              <td className="py-3 px-4">Medium - Technical knowledge chahiye</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">RAS (Recirculating Aquaculture System)</td>
              <td className="py-3 px-4">₹15-25 lakh</td>
              <td className="py-3 px-4">20-30 kg/tank/cycle</td>
              <td className="py-3 px-4">High-value: Pangasius, Barramundi</td>
              <td className="py-3 px-4">Hard - Advanced technology</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        CIFA, Bhubaneswar ke experts maante hain ki agar aap pehli baar shuru kar rahe hain toh traditional pond se shuruat karna behtar rehta hai. Isme risk kam hai, technical complexity kam hai, aur PMMSY subsidy bhi ispar zyada milti hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Biofloc technology tab choose karein jab aapke paas zameen kam hai par investment capacity zyada hai. Urban areas mein yeh popular ho rahi hai kyunki kam space mein zyada production hota hai. Par isme electricity cost zyada hai (aerators 24x7 chalte hain), aur technical knowledge zaroori hai.
      </p>

      {}
      <Image 
        src="/images/kisanguides/fish-varieties.webp" 
        alt="Different Fish Species - Rohu, Catla, Mrigal for Fish Farming" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kitna Paisa Lagega? 1 Acre Pond ka Realistic Budget
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh ek 1 acre traditional pond ka budget hai, jisme IMC (Indian Major Carps - Rohu, Catla, Mrigal) pale jayengi.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: Neeche diye gaye numbers estimated ranges hain. Yeh aapke local material rates, inflation, aur field conditions ke hisaab se badal sakte hain.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">1 Acre Fish Pond Setup (2026 Estimates)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
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
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Investment Range:</span>
            <span className="text-green-700 dark:text-green-400">₹3,60,000 - ₹4,90,000</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh investment lagti hai. Par agar aapke paas <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC)</Link> hai, toh fisheries ke liye bhi loan mil jata hai. KCC ke under ₹3 lakh tak loan milta hai, aur interest rate 4% (timely repayment par) hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek aur option hai official <a href="https://www.mudra.org.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">Mudra Loan</a> - Tarun category mein ₹10 lakh tak bina collateral ke mil jata hai. Fish farming unit ke liye yeh perfect fit hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        PM Matsya Sampada Yojana (PMMSY) Subsidy: Complete Details
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PMMSY 2020 mein launch hui thi, jiska budget ₹20,000+ crore hai. Yeh scheme fisheries sector ko transform karne ke liye design ki gayi hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">1. Naya Talab Nirman (New Pond Construction):</strong>
            General category ko 40% subsidy milti hai (maximum ₹5 lakh per hectare). SC/ST, mahila kisan, aur North-East states mein yeh limit 60% (₹7.5 lakh per hectare) tak ja sakti hai. Yeh sahayata pond excavation, bund construction, aur drainage system par milti hai.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">2. Biofloc aur RAS Setup:</strong>
            High-tech systems jaise Biofloc par 60% subsidy (max ₹10 lakh) aur RAS par 60% (max ₹15 lakh) mil sakti hai.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">3. Cold Storage aur Processing Unit:</strong>
            Agar aap fish processing unit ya cold storage lagana chahte hain, toh 35-50% subsidy mil sakti hai. <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> ke under bhi food processing units par 35% subsidy milti hai.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">4. Feed Mill Setup:</strong>
            Fish feed mill lagane par 40-50% subsidy milti hai. Agar aap apna feed banana chahte hain (jo cost 20-30% kam kar deta hai), toh yeh option consider karein. Official <a href="https://agriinfra.dac.gov.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">Agriculture Infrastructure Fund</a> ke under bhi 3% interest subsidy mil sakti hai.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">5. Ornamental Fish Farming:</strong>
            Agar aap decorative/aquarium fish paalna chahte hain, toh 50-60% subsidy milti hai. Isme margin bahut zyada hai (₹50-500 per fish), par market access zaroori hai.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">6. PMEGP (Prime Minister's Employment Generation Programme):</strong>
            Chhote fish farming units par 25-35% subsidy mil sakti hai (rural areas mein zyada). Maximum project cost ₹25 lakh hai. KVIC ke through apply hota hai. Official <a href="https://www.pmegp.in/" className="text-blue-600 hover:underline dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">PMEGP portal</a> par details check karein.
          </li>
        </ul>
        <p className="mt-4 text-xs text-gray-600 dark:text-gray-400 italic border-t border-blue-200 dark:border-blue-800 pt-3">
          <strong>Note:</strong> PMMSY aur related schemes ki guidelines aur subsidy limits samay-samay par update hoti rehti hain. Apply karne se pehle apne nazdeeki Fisheries Department office se latest norms zaroor confirm karein.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        PMMSY Documents Required
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Subsidy application ke liye yeh documents taiyar rakhein:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Aadhaar Card aur PAN Card</strong> (self-attested copies)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Zameen ke kagaz</strong> - Registry, Khatauni, ya kam se kam 7-10 saal ka registered lease agreement</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Bank passbook</strong> aur ek cancelled cheque (account verification ke liye)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Pond construction ka quotation/estimate</strong> - registered contractor ya engineer se</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Fisheries Department se NOC</strong> (No Objection Certificate) - agar aapke state mein zaroori ho</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Passport size photographs</strong> (2-4 copies)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>Project Report (DPR)</strong> - Detailed Project Report kisi consultant se banwayein</span>
          </li>
        </ul>
      </div>

      {}
      <Image 
        src="/images/kisanguides/fish-farming-documents.webp" 
        alt="Fish Farming Application Documents - Aadhaar, PAN, Land Records" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Sab documents self-attested hone chahiye. Original documents verification time par dikhane padenge. Application process mein 3-6 mahine lag sakte hain, isliye patience rakhein.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aap PMMSY ke under apply karna chahte hain, toh neeche diya gaya button aapko official portal par le jayega:
      </p>

      <ExternalLinkButton 
        url="https://pmmsy.dahd.nic.in/" 
        label="PMMSY Official Portal - Apply Karein" 
      />

      {}
      <Image 
        src="/images/kisanguides/fish-farming-application.webp" 
        alt="Entrepreneur Applying for Fish Farming Loan and Subsidy" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Step-by-Step Process: Traditional Pond Mein Machli Kaise Paalein?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Traditional pond farming mein 5 main steps hote hain. Har step critical hai - ek galti poori crop kharab kar sakti hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Pond Preparation (Sabse Important)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Pond ko pehle dry karein (agar purana hai). Phir lime (chuna) daalein - 200-250 kg/acre. Yeh pH balance karta hai aur parasites mar deta hai. 7-10 din baad cow dung (gobar) daalein - 500 kg/acre. Yeh natural plankton (machliyon ka food) grow karta hai. Phir paani bharein - 1.5-2 meter depth tak.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Fingerling Stocking</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Achhe quality ke fingerlings (5-8 cm size) khareedein. IMC (Indian Major Carps) ka ratio yeh rakhein: Catla 30%, Rohu 40%, Mrigal 30%. Per acre 10,000-12,000 fingerlings stock karein. Fingerlings hamesha reputed hatchery se lein - government hatcheries ya certified private hatcheries.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Feeding Management</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Pehle 2 mahine natural food (plankton) kaafi hota hai. Uske baad supplementary feed dena padta hai - rice bran, mustard oil cake, aur commercial fish feed (pellets). Feed conversion ratio (FCR) 1.5-2:1 hona chahiye - matlab 1.5-2 kg feed se 1 kg machli banti hai. Daily 2-3% body weight feed dein.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Water Quality Management</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Dissolved oxygen (DO) 5 ppm se upar hona chahiye. Agar kam hai toh aerators chalayein. pH 7-8.5 ke beech hona chahiye. Ammonia aur nitrite levels check karte rahein. Har 15-20 din mein 20-25% paani replace karein. Water quality kits available hain - ₹2,000-3,000 mein mil jaate hain.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Harvesting</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">10-12 mahine mein machliyan marketable size tak pahunch jati hain (Rohu 1-1.5 kg, Catla 1.5-2 kg, Mrigal 800g-1 kg). Harvesting se pehle pond ka paani nikalein, nets se machliyan pakdein. Immediate ice mein pack karein taaki freshness maintain rahe.</p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Composite fish culture (IMC) mein 3 species ek saath paalne ka fayda yeh hai ki inki feeding habits alag hoti hain. Catla surface feeder hai, Rohu column feeder, aur Mrigal bottom feeder. Isse pond ki saari space utilize hoti hai aur production naturally maximize hota hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        3 Saal Ka Profit Calculation: Real Numbers
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh calculation 1 acre traditional pond ke liye hai, jisme IMC (Rohu, Catla, Mrigal) pale jati hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: Yeh figures average estimates hain. Actual production, market rates, aur expenses aapke management aur local conditions par depend karte hain.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Item</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Year 1</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Year 2</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Year 3</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-semibold" colSpan={4}>Revenue</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Production (ton/acre)</td>
              <td className="py-3 px-4">3-4 ton</td>
              <td className="py-3 px-4">4-5 ton</td>
              <td className="py-3 px-4">5-6 ton</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Average Rate (₹/kg)</td>
              <td className="py-3 px-4">₹120-150</td>
              <td className="py-3 px-4">₹130-160</td>
              <td className="py-3 px-4">₹140-170</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Total Revenue</td>
              <td className="py-3 px-4">₹3,60,000 - ₹6,00,000</td>
              <td className="py-3 px-4">₹5,20,000 - ₹8,00,000</td>
              <td className="py-3 px-4">₹7,00,000 - ₹10,20,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-semibold" colSpan={4}>Expenses</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Feed (main cost - 60-70%)</td>
              <td className="py-3 px-4">₹2,00,000 - ₹2,50,000</td>
              <td className="py-3 px-4">₹2,50,000 - ₹3,00,000</td>
              <td className="py-3 px-4">₹3,00,000 - ₹3,50,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Fingerlings, Medicines, Misc</td>
              <td className="py-3 px-4">₹50,000 - ₹70,000</td>
              <td className="py-3 px-4">₹60,000 - ₹80,000</td>
              <td className="py-3 px-4">₹70,000 - ₹90,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Total Expenses</td>
              <td className="py-3 px-4">₹2,50,000 - ₹3,20,000</td>
              <td className="py-3 px-4">₹3,10,000 - ₹3,80,000</td>
              <td className="py-3 px-4">₹3,70,000 - ₹4,40,000</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-bold text-green-800 dark:text-green-300" colSpan={3}>Net Profit (Annual)</td>
              <td className="py-3 px-4 font-bold text-green-700 dark:text-green-400">₹1,10,000 - ₹2,80,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Year 1 mein profit kam hota hai kyunki pond establish ho raha hota hai, aur aap seekh rahe hote hain. Year 2-3 tak aapka experience badh jata hai, mortality rate kam hota hai, aur production improve hota hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aap high-value fish paalte hain (jaise Pangasius, Tilapia, ya Ornamental fish), toh margins 2-3x zyada ho sakte hain. Par inki market access aur technical knowledge bhi zyada chahiye.
      </p>

      {}
      <Image 
        src="/images/kisanguides/fish-products-market.webp" 
        alt="Fresh and Processed Fish Products Ready for Market Sale" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Machli palan shuru mein aasaan lagta hai, par isme risks kaafi hain. In baaton ka dhyan rakhna zaroori hai:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">1. Disease Outbreak (Sabse Bada Khatra)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Bacterial infections, fungal infections, aur parasitic infections poori crop khatam kar sakte hain. Biosecurity measures zaroori hain - pond disinfection, healthy fingerlings, aur water quality management.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">2. Oxygen ki Kami (Suffocation Risk)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Subah ke time par dissolved oxygen kam ho jata hai. Agar 3 ppm se neeche chala gaya, toh fish suffocate ho kar mar jati hain. Garmiyon mein yeh risk zyada hota hai. Aerators zaroori hain, aur backup power (generator) bhi hona chahiye.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">3. Baadh (Flood) aur Sukha (Drought)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Heavy rain mein pond overflow ho sakta hai - machliyan bah nikalti hain. Ya phir drought mein paani kam ho jata hai. Location selection aur pond design bahut zaroori hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">4. Feed ke Daam mein Utaar-Chadhaav</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Fish feed ka cost total expense ka 60-70% hota hai. Agar soyabean ya fish meal ke prices badh gaye, toh feed mehnga ho jata hai. Apna feed mill lagana ek option hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">5. Market Rate ka Girna</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Festival season (Durga Puja, Diwali) mein rates achhe milte hain. Par off-season mein rates lagbhag 20-30% gir jate hain. Agar aapke paas cold storage nahi hai, toh forced sale karni padti hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">6. Shikari Janwar aur Chori</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Birds (kingfisher, cormorant), snakes, aur otters machliyan kha jaate hain. Netting zaroori hai. Gaon mein theft bhi hota hai. Fencing aur security zaroori hai.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Training Kahan Se Lein? Yeh Skip Mat Karna
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Machli palan mein technical knowledge bahut zaroori hai. Bina proper training ke water quality management, disease diagnosis, aur feeding techniques seekhna mushkil hota hai, jisse pehle hi cycle mein nuksan ho sakta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        7-15 din ki training lein. Cost ₹3,000-10,000 hoti hai (kuch jagah free bhi milti hai). Training mein aap seekhenge pond construction, water quality testing, fingerling selection, feed formulation, disease identification, aur harvesting techniques.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Best training centers:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
        <li>
          <strong>Central Institute of Freshwater Aquaculture (CIFA), Bhubaneswar:</strong> Premier institute. Inke regular training programs hote hain. Website par check karein:
        </li>
      </ul>

      <ExternalLinkButton 
        url="https://www.cifa.in/" 
        label="CIFA Bhubaneswar - Training Programs Check Karein" 
      />

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
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

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Training ke baad kam se kam 1 mahina kisi experienced farmer ke yahan kaam karein. Theoretical knowledge aur practical experience dono zaroori hain. Ek full cycle dekhna zaroori hai taaki aapko saare challenges ka experience ho.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Waste Management: Fish Pond Water Se Kheti Karein
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Fish farming ka ek bada fayda yeh hai ki pond water bahut nutrient-rich hota hai. Isko aap khet mein use kar sakte hain - free fertilizer milta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aap yeh bhi kar sakte hain:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li>Pond water se vegetables ugayein (aquaponics)</li>
        <li>
          Fish waste se <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">vermi compost</Link> banayein - ₹15-20/kg milta hai
        </li>
        <li>Integrated farming - pond ke kinare poultry ya duck farming karein (unke droppings fish food bante hain)</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Integrated farming se aap multiple income streams create kar sakte hain. Ek acre pond + poultry + vegetables se saal ka ₹8-10 lakh tak ho sakta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Related Guides & Financial Support
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            💳 Kisan Credit Card (KCC)
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Fisheries ke liye low-interest loan. 4% interest rate with timely repayment aur flexible limits.</p>
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 text-sm font-medium flex items-center gap-1">
            KCC Guide Padhein <span>→</span>
          </Link>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            🏭 PM FME Yojana
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Fish processing aur cold storage units ke liye 35% tak subsidy. Branded packaging ke liye ideal.</p>
          <Link href="/articles/pm-fme-yojana-food-processing" className="text-green-600 hover:underline dark:text-green-400 text-sm font-medium flex items-center gap-1">
            PM FME Details Dekhein <span>→</span>
          </Link>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            🛡️ PM Fasal Bima Yojana (PMFBY)
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Natural calamities, disease outbreak, aur flood ke liye fisheries insurance coverage.</p>
          <Link href="/articles/PmfbyCropInsurance2026" className="text-amber-700 hover:underline dark:text-amber-400 text-sm font-medium flex items-center gap-1">
            Insurance Guide Padhein <span>→</span>
          </Link>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
            ♻️ Vermi Compost Business
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Fish waste aur pond sludge ko organic fertilizer mein badal kar extra income generate karein.</p>
          <Link href="/articles/vermi-compost-business-guide" className="text-purple-600 hover:underline dark:text-purple-400 text-sm font-medium flex items-center gap-1">
            Vermi Compost Guide <span>→</span>
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Zameen hai (preferably low-lying area jahan paani bhara rehta hai)</li>
            <li>• Water source available hai (borewell, canal, ya natural water body)</li>
            <li>• Daily 2-3 hours de sakte hain (monitoring zaroori hai)</li>
            <li>• ₹3-5 lakh initial investment kar sakte hain</li>
            <li>• Technical details seekhne ki ichha hai</li>
            <li>• Market access hai (nazdeeki mandi ya direct buyers)</li>
            <li>• Patience hai (pehla saal learning year hota hai)</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Water availability nahi hai</li>
            <li>• Daily monitoring nahi kar sakte</li>
            <li>• Technical knowledge seekhne ki ichha nahi hai</li>
            <li>• Quick money chahte hain (pehla saal learning year hota hai)</li>
            <li>• Risk nahi le sakte (disease outbreak mein poori crop ja sakti hai)</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap pehle category mein aate hain, toh 1 acre se start karein. Pehle saal seekhein, mistakes karein, experience gain karein. Phir Year 2 mein 2-3 acres tak expand karein. Direct 5-10 acres se start mat karein - risk bahut hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Subsidy ka fayda zaroor uthayein. 40-60% subsidy mil rahi hai, isse na lena bewakoofi hogi. Par yaad rakho - subsidy milna guaranteed nahi hai. Application process mein 3-6 months lag sakte hain. Isliye apni planning subsidy ke bina karein. Agar mil gayi, toh bonus samjho.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek aur point: <Link href="/articles/PmfbyCropInsurance2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Fasal Bima Yojana (PMFBY)</Link> ke under ab fisheries ko bhi cover kiya ja raha hai kuch states mein. Apne zila ke fisheries office se pata karein ki aapke area mein insurance available hai ya nahi. Natural calamities mein yeh bahut kaam aata hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aap isme serious hain, toh pehle apne ilaake ke kisi experienced machli palak se milein aur unke challenges samjhein. Uske baad training lein aur chhote scale par shuruat karein. Sahi planning aur mehnat se yeh ek sustainable income source ban sakta hai.
      </p>

      {}
      <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">1. Kya kiraye ki zameen par fish farming karne par subsidy milti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Haan, lekin rent agreement kam se kam 7-10 saal ka hona chahiye. Subsidy ke liye aapka pond construction ya setup apni ownership mein hona chahiye. Rent par sirf operational costs cover hote hain.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">2. Kya biofloc technology mein electricity ka kharcha bahut zyada hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Haan, biofloc mein aerators 24x7 chalne padte hain. Ek 10-tank setup ka monthly electricity bill ₹3,000 - ₹5,000 tak aa sakta hai. Solar panels lagane se yeh cost kam ki ja sakti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3. Pehli baar fish farming karne wale ke liye kaunsi technology best hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Traditional pond farming sabse best hai beginners ke liye. Isme risk kam hai, technical complexity kam hai, aur PMMSY subsidy bhi ispar zyada milti hai (40-60%).</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">4. Kya fish farming mein insurance available hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Kuch states mein PM Fasal Bima Yojana ke under fisheries ko cover kiya ja raha hai. Natural calamities, disease outbreak, aur flood ke liye insurance available hai. Apne zila ke fisheries office se pata karein.</p>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (fisheries officers, aquaculture experts) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}