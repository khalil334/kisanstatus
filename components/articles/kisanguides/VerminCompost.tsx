import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vermi Compost Business 2026: PKVY Subsidy & Profit Guide',
  description: 'Vermi compost business complete guide. Janein organic fertilizer kaise banayein, PKVY subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
  keywords: [
    'vermi compost business',
    'organic fertilizer business',
    'PKVY subsidy',
    'vermi compost profit',
    'earthworm farming',
    'gobar se khaad banana'
  ],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'Vermi Compost Business 2026: PKVY Subsidy & Profit Guide',
    description: 'Vermi compost business complete guide. Janein organic fertilizer kaise banayein, PKVY subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/vermi-compost-business-guide',
    images: [
      {
        url: 'https://kisanstatus.com/images/kisanguides/vermi-compost-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Vermi Compost Pit with Earthworms - Organic Fertilizer Business Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vermi Compost Business 2026: PKVY Subsidy & Profit Guide',
    description: 'Vermi compost business complete guide. Janein organic fertilizer kaise banayein, PKVY subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
    images: ['https://kisanstatus.com/images/kisanguides/vermi-compost-hero.webp'],
  },
  alternates: {
    canonical: 'https://kisanstatus.com/articles/vermi-compost-business-guide',
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
      '@id': 'https://kisanstatus.com/articles/vermi-compost-business-guide/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'Farming', item: 'https://kisanstatus.com/articles/category/farming' },
        { '@type': 'ListItem', position: 4, name: 'Vermi Compost Business' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/vermi-compost-business-guide/#article',
      headline: 'Vermi Compost Business 2026: PKVY Subsidy & Profit Guide',
      description: 'Vermi compost business complete guide. Janein organic fertilizer kaise banayein, PKVY subsidy, machinery cost aur real profit calculation ke baare mein sab kuch.',
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
      dateModified: '2026-08-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://kisanstatus.com/articles/vermi-compost-business-guide/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/vermi-compost-business-guide/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kya vermi compost ko chemical fertilizer ke saath mix karke use kar sakte hain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, shuruat mein aap vermi compost ko chemical fertilizer ke saath 50:50 ratio mein mix karke use kar sakte hain. Isse mitti ko organic matter milta hai aur chemical ka shock bhi kam hota hai. Dheere-dheere chemical ki matra kam karke sirf organic par shift ho sakte hain.',
          },
        },
        {
          '@type': 'Question',
          name: 'Agar galti se earthworms mar jayein, toh poori batch kharab ho jati hai ya bachayi ja sakti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Agar worms mar bhi jayein, toh organic material phir bhi decompose hota hai, lekin usme vermi compost wali premium quality (microbial activity) nahi aati. Usse aap normal FYM (Farm Yard Manure) ke roop mein bech sakte hain, jiska rate thoda kam (₹5-8/kg) hota hai. Agli batch ke liye naye worms lene padenge.',
          },
        },
        {
          '@type': 'Question',
          name: 'Branded packaging mein bechne ke liye FSSAI zaroori hai ya sirf lab report kaafi hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vermi compost ek "fertilizer" hai, "food" nahi, isliye iske liye FSSAI ki zaroorat nahi hoti. Iske liye FCO (Fertilizer Control Order) ke under state agriculture department se registration aur authorized lab se quality testing report kaafi hoti hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya vermi compost ki jagah normal gobar ki khaad (FYM) use nahi ki ja sakti?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normal gobar ki khaad (FYM) mein bhi nutrients hote hain, lekin vermi compost mein earthworms ki wajah se enzymes aur beneficial microbes ki matra 10-20 guna zyada hoti hai. Yeh mitti ki structure ko FYM ke mukable jaldi aur behtar tarike se improve karti hai, isliye iska market rate aur demand dono zyada hain.',
          },
        },
      ],
    },
  ],
};

export default function VerminCompost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {}
      <Image 
        src="/images/kisanguides/vermi-compost-hero.webp" 
        alt="Vermi Compost Pit with Earthworms - Organic Fertilizer Business Guide" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Vermi Compost Business 2026: Gobar Se Organic Khaad Banakar Extra Income Kamayein
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Sach kahoon toh:</strong> Chemical fertilizers ke daam lagatar badhne se kisaanon ki lagat badh rahi hai. Aise mein, apne hi khet ke gobar aur kachre ko khaad mein badalna ek practical aur sasta solution ban gaya hai.
        </p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Pehle saal shayad ye sirf apne khet ke liye banaya jaye, lekin jab quality set ho jati hai, toh ise bechkar ek alag income stream banayi ja sakti hai. Cost ₹5 - ₹8 per kg aati hai, aur achhi quality ka rate ₹15 - ₹20 per kg mil jata hai. Kachre ko khaad mein badalna aur usse paisa kamana ek proven model hai, kyunki organic farming ko sarkar actively promote kar rahi hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Organic Fertilizer Hai Kya? Aur Kisaan Ise Kyun Khareedte Hain?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh organic fertilizer earthworms (kenchue) ki madad se banta hai. Science simple hai - earthworms organic waste (gobar, sookhe patte, kitchen waste) khaate hain, aur unka waste (castings) bahut nutrient-rich khaad banta hai.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Is khaad mein NPK (Nitrogen, Phosphorus, Potassium) ke alawa micronutrients bhi hote hain jo chemical fertilizers mein nahi hote. Soil structure improve hota hai, water retention badhta hai, aur microbial activity increase hoti hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-semibold">
        Kisaan isliye regular khareedte hain kyunki:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Chemical fertilizer ke daam bahut badh gaye hain:</strong> DAP ₹1,400 - ₹1,500/bag aur Urea ₹300 - ₹350/bag ke aas-paas hai.</li>
        <li><strong>Soil health kharab ho rahi hai:</strong> 20-30 saal se sirf chemical use hone se mitti mein organic matter kam ho gaya hai.</li>
        <li><strong>Organic farming ka trend:</strong> Organic products ka market rate 30-50% zyada milta hai.</li>
        <li><strong>Government push:</strong> Soil Health Card scheme ke through organic matter badhane par zor diya ja raha hai.</li>
        <li><strong>Long-term benefit:</strong> Ek baar use karne se soil structure permanently improve hota hai.</li>
      </ul>

      {}
      <Image 
        src="/images/kisanguides/vermi-compost-pits.webp" 
        alt="Well-organized Vermi Compost Pits in a Shaded Area" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kaam Karne Ka Tarika: Business Model
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Is kaam ka basic flow samajhna zaroori hai:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Raw material ikhatta karo:</strong> Gobar, sookhe patte, kitchen waste, crop residue.</li>
          <li><strong>Pits ya beds banao:</strong> Cemented ya non-cemented, 10x3x2 feet size.</li>
          <li><strong>Layering karo:</strong> Organic waste ki layer, uske upar earthworms.</li>
          <li><strong>Maintain karo:</strong> Moisture, temperature, aur aeration ka dhyan rakho.</li>
          <li><strong>45-60 din mein compost taiyar:</strong> Earthworms waste ko khaad mein badal dete hain.</li>
          <li><strong>Harvest karo:</strong> Earthworms alag karo, khaad sukhao, sieve karo.</li>
          <li><strong>Pack karo aur becho:</strong> ₹15 - ₹25 per kg rate par.</li>
        </ol>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Model 1: Apne gobar se banao.</strong> Agar aapke paas 5-10 gaaye/bhains hain, toh unka gobar use karo. Raw material free hai, sirf processing cost hai. Margin 70-80% tak ho sakta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Model 2: Gobar khareed kar banao.</strong> Aap dairy farms se gobar khareedo (₹2 - ₹3 per kg), process karo, becho. Margin 40-50% hota hai, par scale bada kar sakte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Model 3: Waste collection service.</strong> Urban areas se kitchen waste ya garden waste collect karo (free ya nominal charge), usse organic khaad banao, becho. Isme raw material free hai, par logistics cost lagti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kitna Paisa Lagega? Realistic Budget Breakdown
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek medium-scale unit ka budget banate hain - jo mahine mein 2-3 ton organic fertilizer produce kar sake.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: Neeche diye gaye numbers estimated ranges hain. Yeh aapke local material rates, inflation, aur field conditions ke hisaab se badal sakte hain.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Vermi Compost Unit Setup (2026 Estimates)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Land Preparation (leveling, drainage):</span>
            <span className="font-semibold">₹10,000 - ₹20,000</span>
          </li>
          <li className="flex justify-between">
            <span>Pit Construction (10 pits, 10x3x2 ft each):</span>
            <span className="font-semibold">₹50,000 - ₹80,000</span>
          </li>
          <li className="flex justify-between">
            <span>Earthworms (Eisenia fetida - 100 kg):</span>
            <span className="font-semibold">₹20,000 - ₹30,000</span>
          </li>
          <li className="flex justify-between">
            <span>Shed/Storage (temporary, 200 sq ft):</span>
            <span className="font-semibold">₹30,000 - ₹50,000</span>
          </li>
          <li className="flex justify-between">
            <span>Tools (pitchfork, sieve, watering can, weighing scale):</span>
            <span className="font-semibold">₹8,000 - ₹12,000</span>
          </li>
          <li className="flex justify-between">
            <span>Packaging Material (bags, stitching machine):</span>
            <span className="font-semibold">₹10,000 - ₹15,000</span>
          </li>
          <li className="flex justify-between">
            <span>Working Capital (2 months raw material):</span>
            <span className="font-semibold">₹20,000 - ₹30,000</span>
          </li>
          <li className="flex justify-between">
            <span>Licenses, Misc:</span>
            <span className="font-semibold">5,000 - ₹10,000</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Investment Range:</span>
            <span className="text-green-700 dark:text-green-400">₹1,53,000 - ₹2,47,000</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Is investment ko manage karne ke liye Kisan Credit Card (KCC) ek badhiya vikalp hai, jisme working capital ke liye limit badhwa sakte hain. Setup cost ke liye official Mudra Loan bhi le sakte hain - Shishu category mein ₹50,000 tak, Kishor mein ₹5 lakh tak bina collateral ke mil jata hai.
      </p>

      {}
      <Image 
        src="/images/kisanguides/vermi-compost-packaging.webp" 
        alt="Branded Vermi Compost Bags Ready for Market Sale" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sarkari Subsidy: Organic Farming Schemes
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sarkari schemes ki baat karein, toh is field mein kai financial benefits ka fayda uthaya ja sakta hai. Har yojana ki apni eligibility criteria hoti hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">1. Paramparagat Krishi Vikas Yojana (PKVY):</strong>
            Yeh scheme organic farming ko promote karti hai. Vermi compost units par 50-75% subsidy milti hai. Maximum subsidy ₹50,000 - ₹1 lakh per unit. FPOs aur SHGs ko priority milti hai.
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">2. Mission Organic Value Chain Development (MOVCDNER):</strong>
            North-East states ke liye special scheme. Vermi compost units par 75-90% subsidy milti hai. Maximum subsidy ₹2 lakh tak.
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">3. Soil Health Management Scheme:</strong>
            Organic matter badhane ke liye yeh scheme hai. Vermi compost units par 50% subsidy milti hai. Maximum subsidy ₹25,000 - ₹50,000.
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">4. PM FME Yojana:</strong>
            Agar aap vermi compost ko branded packaging mein bechna chahte hain, toh PM FME ke under 35% subsidy mil sakti hai (maximum ₹10 lakh).
          </li>
        </ul>
        <p className="mt-4 text-xs text-gray-600 dark:text-gray-400 italic border-t border-blue-200 dark:border-blue-800 pt-3">
          <strong>Note:</strong> In schemes ki guidelines state ke hisaab se vary karti hain. Apply karne se pehle apne nazdeeki Agriculture Department se latest norms zaroor confirm karein.
        </p>
      </div>

      <ExternalLinkButton 
        url="https://pgsindia-ncof.gov.in/" 
        label="PGS India Portal - Organic Farming Schemes Check Karein" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Step-by-Step Process: Vermi Compost Kaise Banayein?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Organic khaad banana ek scientific process hai. Har step important hai - ek chhoti si galti poori batch kharab kar sakti hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Pit Preparation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">10x3x2 feet size ki pit banao. Cemented ya non-cemented dono chalega, par non-cemented better hai kyunki drainage achhi hoti hai. Floor thoda sloped rakho taaki excess paani nikal sake. Shade mein banao - direct sunlight nahi honi chahiye.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Raw Material Collection</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Organic waste ikhatta karo - gobar, sookhe patte, crop residue, kitchen waste. Green waste (fresh leaves) aur brown waste (dry leaves) ka ratio 1:2 rakho.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Pre-Composting</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Raw material ko 15-20 din pehle se heap mein rako. Roz paani chhidko, turn karo. Isse material partially decompose ho jata hai, aur earthworms ke liye easy ho jata hai.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Layering</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Pit mein pehle 2-3 inch sookhe patte ya bhoosa bichhao (drainage layer). Uske upar 4-6 inch pre-composted material daalo. Uske upar 1-2 kg earthworms (Eisenia fetida) daalo. Phir 4-6 inch aur material daalo. Top par 2-3 inch mitti daal do.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Maintenance</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Moisture maintain karo - 60-70% hona chahiye. Haath se dabao toh paani na nikle, par geela feel ho. Temperature 25-35°C ke beech rakho. Har 7-10 din mein lightly turn karo for aeration.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Harvesting (45-60 Din Baad)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Jab material dark brown ho jaye, smell na aaye, aur crumbly texture ho jaye, toh compost taiyar hai. Earthworms ko alag karo - light se bhagao. Compost ko 2-3 din dhoop mein sukhao, sieve karo (5-10 mm mesh).</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Unit Economics: Ek Kg Mein Kitna Profit Hai?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek kg organic fertilizer ka cost breakdown dekhte hain. Yeh numbers Model 2 (gobar khareed kar) ke liye hain.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Item</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Cost per Kg</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Raw Material (gobar, dry leaves):</td>
              <td className="py-3 px-4">₹2 - ₹3</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Earthworms (depreciation over 6 months):</td>
              <td className="py-3 px-4">₹0.50 - ₹1</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Labor (pit preparation, maintenance, harvesting):</td>
              <td className="py-3 px-4">2 - ₹3</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Water, Electricity, Misc:</td>
              <td className="py-3 px-4">₹0.50 - ₹1</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Packaging (bags, stitching):</td>
              <td className="py-3 px-4">₹1 - ₹2</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Transportation (to customer):</td>
              <td className="py-3 px-4">₹1 - ₹2</td>
            </tr>
            <tr className="bg-red-50 dark:bg-red-900/20">
              <td className="py-3 px-4 font-bold">Total Cost:</td>
              <td className="py-3 px-4 font-bold text-red-700 dark:text-red-400">7 - ₹12</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Selling Price:</td>
              <td className="py-3 px-4">15 - ₹25</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-bold text-green-800 dark:text-green-300">Net Profit per Kg:</td>
              <td className="py-3 px-4 font-bold text-green-700 dark:text-green-400">₹3 - ₹18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Average profit ₹10 - ₹12 per kg maan kar chaliye. Agar aap mahine mein 2 ton (2,000 kg) bechte hain, toh monthly profit ₹20,000 - ₹24,000, aur saal ka ₹2.4 - ₹2.9 lakh ban sakta hai.
      </p>

      {}
      <Image 
        src="/images/kisanguides/vermi-compost-market.webp" 
        alt="Vermi Compost Being Delivered to Local Farmers and Nurseries" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh process sunne mein simple lagta hai, par field mein kuch challenges aate hain:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">1. Earthworm Mortality (Sabse Badi Problem)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Earthworms bahut sensitive hote hain. Temperature 40°C se upar gaya, ya moisture 50% se neeche chala gaya, toh mar jayenge. Pesticide residue wala material daal diya, toh mar jayenge. Ek baar worms mar gaye, toh dobara khareedne padenge (₹200 - ₹300 per kg).</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">2. Quality Control</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Agar compost properly decompose nahi hua, ya pH theek nahi hai, toh customers complaint karenge. Lab testing zaroori hai - ₹2,000 - ₹5,000 per sample. Bina testing ke branded product nahi bech sakte.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">3. Seasonal Demand</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Kharif (June-October) aur Rabi (October-March) mein demand peak par hoti hai. Garmiyon (April-June) mein demand 30-40% kam ho jati hai. Aapko 12 months ka cash flow manage karna padta hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">4. Raw Material Availability</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Gobar ki availability consistent nahi hoti. Sardiyon mein doodh kam hota hai, toh gobar bhi kam. Agar aapne advance mein contract nahi kiya, toh raw material nahi milega.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Customers Kaise Dhundhein? Marketing Strategy
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Is field mein sabse bada challenge customers dhundhna hai. Kuch proven strategies:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Local Organic Farmers Par Direct Visit:</strong> Apne area ke 20-30 organic farmers ki list banao. Pehla order discount par do. 60% cases mein quality achhi hui toh order mil jata hai.</li>
        <li><strong>Nursery aur Garden Centers:</strong> Plant nurseries aur landscaping companies se tie-up karo. Wo regular customers hain.</li>
        <li><strong>Urban Terrace Gardeners:</strong> Cities mein terrace gardening ka trend hai. WhatsApp groups join karo. Online becho - Branded packaging mein 5 kg, 10 kg packs becho.</li>
        <li><strong>FPOs aur Cooperatives:</strong> Farmer Producer Organizations se tie-up karo. Wo apne member farmers ko organic inputs recommend karte hain.</li>
      </ul>

      {}
      <Image 
        src="/images/kisanguides/vermi-compost-docs.webp" 
        alt="Vermi Compost Business Legal Documents and Lab Testing Reports" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Legal Requirements: Kya Kya Chahiye?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh venture legally shuru karne ke liye kuch basic licenses chahiye:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Udyam Registration:</strong> Free hai, online ho jata hai. MSME benefits milte hain.</li>
        <li><strong>FCO Registration:</strong> Fertilizer Control Order ke under state agriculture department se registration zaroori hai.</li>
        <li><strong>Lab Testing:</strong> Har batch ko test karna padega - NPK content, heavy metals, pH. ₹2,000 - ₹5,000 per sample.</li>
        <li><strong>NOC from Local Authorities:</strong> Gram panchayat ya municipal corporation se.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Related Guides & Financial Support
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
            💳 Kisan Credit Card (KCC)
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Working capital aur setup cost ke liye low-interest loan. 4% interest rate with timely repayment.</p>
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 text-sm font-medium flex items-center gap-1">
            KCC Guide Padhein <span>→</span>
          </Link>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
            🏭 PM FME Yojana
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Branded packaging aur value addition ke liye 35% tak subsidy. Maximum ₹10 lakh.</p>
          <Link href="/articles/pm-fme-yojana-food-processing" className="text-green-600 hover:underline dark:text-green-400 text-sm font-medium flex items-center gap-1">
            PM FME Details Dekhein <span>→</span>
          </Link>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            ️ PM Fasal Bima Yojana
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Agricultural business ke liye crop insurance coverage. Natural calamities se protection.</p>
          <Link href="/articles/PmfbyCropInsurance2026" className="text-amber-700 hover:underline dark:text-amber-400 text-sm font-medium flex items-center gap-1">
            PMFBY Guide Padhein <span>→</span>
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
            <li>• Gaon ya semi-urban area mein rehte hain.</li>
            <li>• 5-10 gaaye/bhains hain (ya dairy farms se gobar mil sakta hai).</li>
            <li>• ₹1.5 - ₹2.5 lakh initial investment kar sakte hain.</li>
            <li>• Marketing skills hain (customers dhundh sakte hain).</li>
            <li>• Daily 3-4 hours de sakte hain (monitoring zaroori hai).</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Urban area mein hain jahan raw material nahi milta.</li>
            <li>• Raw material (gobar, organic waste) available nahi hai.</li>
            <li>• Marketing nahi kar sakte (sirf production karke baith nahi sakte).</li>
            <li>• Quick money chahte hain (pehle 6 mahine building phase hai).</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap pehle category mein aate hain, toh chhote scale par start karein. Pehle 6 mahine seekhein, customers banao, process samjho. Phir gradually expand karein. Direct 20-30 pits mat banao - pehle prove karo ki market hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Subsidy ka fayda zaroor uthayein. 50-75% subsidy mil rahi hai organic farming schemes mein. Par yaad rakho - subsidy milna guaranteed nahi hai. Application process mein 3-6 months lag sakte hain. Isliye apni planning subsidy ke bina karein. Agar mil gayi, toh bonus samjho.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aap seriously interested hain, toh pehle apne area ke 5-10 organic farmers se baat karein. Unse pata karein ki wo vermi compost use karte hain ya nahi, kahan se khareedte hain, rate kya hai. Market research karo, phir decision lo.
      </p>

      {}
      <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">1. Chemical fertilizer ke saath mix kar sakte hain?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Haan, shuruat mein aap vermi compost ko chemical fertilizer ke saath 50:50 ratio mein mix karke use kar sakte hain. Isse mitti ko organic matter milta hai aur chemical ka shock bhi kam hota hai. Dheere-dheere chemical ki matra kam karke sirf organic par shift ho sakte hain.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">2. Earthworms mar jayein toh batch kharab?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Agar worms mar bhi jayein, toh organic material phir bhi decompose hota hai, lekin usme vermi compost wali premium quality nahi aati. Usse aap normal FYM ke roop mein bech sakte hain (₹5 - ₹8/kg). Agli batch ke liye naye worms lene padenge.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3. Branded packaging ke liye FSSAI zaroori hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Vermi compost ek "fertilizer" hai, "food" nahi, isliye iske liye FSSAI ki zaroorat nahi hoti. Iske liye FCO (Fertilizer Control Order) ke under state agriculture department se registration aur authorized lab se quality testing report kaafi hoti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">4. Normal gobar ki khaad (FYM) use nahi kar sakte?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Normal gobar ki khaad (FYM) mein bhi nutrients hote hain, lekin vermi compost mein earthworms ki wajah se enzymes aur beneficial microbes ki matra 10-20 guna zyada hoti hai. Yeh mitti ki structure ko FYM ke mukable jaldi aur behtar tarike se improve karti hai.</p>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (agriculture officers, CAs) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}