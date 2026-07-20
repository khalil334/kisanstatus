import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide',
  description: 'Mushroom (khumbi) farming complete guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.',
  keywords: [
    'mushroom kheti',
    'oyster mushroom farming',
    'mushroom subsidy 2026',
    'button mushroom kheti',
    'mushroom business profit',
    'khumbi ki kheti'
  ],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide',
    description: 'Mushroom farming guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/farming/mushroom-kheti-nhb-subsidy',
    images: [
      {
        url: 'https://kisanstatus.com/images/kisanguides/Mushroomhero.webp',
        width: 1200,
        height: 630,
        alt: 'Oyster Mushroom Farming Setup in Dark Room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide',
    description: 'Mushroom farming guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.',
    images: ['https://kisanstatus.com/images/kisanguides/Mushroomhero.webp'],
  },
  alternates: {
    canonical: 'https://kisanstatus.com/articles/farming/mushroom-kheti-nhb-subsidy',
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
      '@id': 'https://kisanstatus.com/articles/farming/mushroom-kheti-nhb-subsidy/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' },
        { '@type': 'ListItem', position: 3, name: 'Farming', item: 'https://kisanstatus.com/articles/category/farming' },
        { '@type': 'ListItem', position: 4, name: 'Mushroom Kheti' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/farming/mushroom-kheti-nhb-subsidy/#article',
      headline: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide',
      description: 'Mushroom farming guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.',
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
        '@id': 'https://kisanstatus.com/articles/farming/mushroom-kheti-nhb-subsidy/',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/farming/mushroom-kheti-nhb-subsidy/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kya mushroom farming se kamre mein smell ya badboo aati hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Proper sterilization aur ventilation hone par smell minimal hoti hai. Par agar contamination ho jaye (green mold ya bacteria), toh foul smell aa sakti hai. Spent straw ko time par hata dena chahiye - agar 3-4 din se zyada pada rahe toh decomposition se smell aa sakti hai. Achhi ventilation aur regular cleaning se yeh problem avoid ki ja sakti hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya bina AC ke button mushroom ki kheti ho sakti hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technically possible hai par commercially viable nahi. Button mushroom ko 14-18°C constant temperature chahiye. North India ke plains mein garmiyon mein 40-45°C tak temperature hota hai. Cooler ya evaporative cooling se 3-5 degree tak hi kami la sakte hain, jo kaafi nahi hai. Himachal, Uttarakhand jaise pahadi ilaqon mein bina AC ke ho sakta hai, par plains mein AC mandatory hai - jiska electricity bill ₹15,000-25,000 mahina aa sakta hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pehli flush fail ho jaye ya contamination ho jaye toh kya karein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sabse pehle affected bags ko turant isolate karein aur kamre se bahar nikal dein. Baaki bags ko check karein - agar mycelium white aur healthy hai toh doosri flush aa sakti hai. Sterilization dobara karein (formalin spray), ventilation badhayein, aur humidity adjust karein. Pehli flush fail hone par discourage na hon - yeh learning curve ka part hai. Agli batch mein sterilization aur spawning process ko aur careful karein.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya mushroom farming mein insurance ya crop protection scheme hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Abhi mushroom farming ke liye dedicated crop insurance scheme limited hai. Kuch states mein horticulture crops ke under coverage mil sakta hai, par contamination ya temperature fluctuation jaise risks generally cover nahi hote. PM Fasal Bima Yojana (PMFBY) mostly field crops ke liye hai. Isliye risk management ke liye proper training, quality spawn, aur gradual scaling hi sabse achha protection hai. Kuch private insurers horticulture ventures ke liye policies offer karte hain - nazdeeki insurance company se inquire karein.',
          },
        },
      ],
    },
  ],
};

export default function MushroomKheti() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Image 1: Hero Image (LCP Optimization) */}
      <Image 
        src="/images/kisanguides/Mushroomhero.webp" 
        alt="Oyster Mushroom Farming Setup in Dark Room - NHB Subsidy Guide" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Mushroom (Khumbi) Ki Kheti 2026: Kamre Mein Shuru Karein, Subsidy aur Real Profit Guide
      </h1>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic">
        Himachal Pradesh ke Solan district ko "Mushroom City of India" kaha jata hai, jahan dashakon se commercial mushroom farming hoti aa rahi hai. Par ab yeh kaam sirf pahadi ilaqon tak seemit nahi raha.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Aksar dekha jata hai ki naye farmers jo chhote kamron (jaise 10x10 feet) mein Oyster mushroom ugate hain, unhe shuru ke 1-2 cycles mein contamination ya temperature issues ki wajah se 20-30% crop loss ka saamna karna padta hai. Lekin jab sterilization aur humidity control ka practical cycle samajh aa jata hai, tabhi is business mein consistent profit nikalna shuru hota hai. Yeh hai mushroom farming ki asliyat - kam jagah, kam investment, par technical samajh behad zaroori hai.
      </p>

      {/* Image 2: Mushroom Varieties */}
      <Image 
        src="/images/kisanguides/varieties-comparison.webp" 
        alt="Different Mushroom Varieties - Oyster, Button, Milky Comparison" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Mushroom Farming Kyun? Zameen Nahi, Sirf Controlled Jagah Chahiye
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kheti-baadi mein sabse badi problem zameen ki hoti hai. Par mushroom farming mein aapko sirf ek andhera kamra chahiye jahan temperature 20-30 degree Celsius aur humidity 70-85% maintain ho sake.
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Chhat, storeroom, basement, ya koi bhi khaali jagah kaam aa sakti hai. Bas 10x10 feet ka kamra bhi shuruwat ke liye kaafi hai. Yeh is business ko urban aur semi-urban areas mein bhi viable banata hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Market demand ki baat karein toh mushroom ka consumption India mein pichle kuch saalon mein tezi se badha hai. Urban areas mein log ab health-conscious ho gaye hain, aur mushroom protein ka achha source mana jata hai. Hotels, restaurants, aur local catering businesses regular buyers ban sakte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kaunsi Variety Chunein? Oyster, Button, ya Milky - Reality Check
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Naye farmers sabse badi galti yahi karte hain - seedha Button mushroom par jump kar lete hain kyunki market mein iski demand zyada hoti hai. Par Button mushroom ko strict controlled environment (AC, precise humidity control) chahiye, jiska setup aur maintenance kharcha bahut zyada hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap pehli baar shuru kar rahe hain, toh Oyster mushroom se start lena behtar rehta hai. Yeh kam temperature variation mein bhi ugg jata hai, iski bimariyan relatively kam hoti hain, aur spawn (beej) aasani se aur saste mein mil jata hai.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Variety</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Temperature</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Cycle Time</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Market Rate</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Difficulty</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Oyster (Dhingri)</td>
              <td className="py-3 px-4">20-30°C</td>
              <td className="py-3 px-4">35-45 days</td>
              <td className="py-3 px-4">₹120-200/kg</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Easy - Beginners ke liye</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Button (Safed)</td>
              <td className="py-3 px-4">14-18°C (AC zaroori)</td>
              <td className="py-3 px-4">45-60 days</td>
              <td className="py-3 px-4">₹180-300/kg</td>
              <td className="py-3 px-4">Hard - Technical knowledge chahiye</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Milky (Safed Dhingri)</td>
              <td className="py-3 px-4">28-35°C</td>
              <td className="py-3 px-4">40-50 days</td>
              <td className="py-3 px-4">₹150-220/kg</td>
              <td className="py-3 px-4">Medium - Garmiyon ke liye</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Shiitake</td>
              <td className="py-3 px-4">15-22°C</td>
              <td className="py-3 px-4">90-120 days</td>
              <td className="py-3 px-4">₹400-800/kg</td>
              <td className="py-3 px-4">Very Hard - Expert level</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Krishi anusandhan sansthanon (jaise DMR, Solan) ke general data ke mutabiq, India mein total mushroom production ka bada hissa Oyster aur Milky varieties se aata hai kyunki yeh Indian climate ke liye relatively zyada suitable hain. Button mushroom ka share mostly Himachal, Haryana, aur Punjab ke controlled setups tak seemit hai.
      </p>

      {/* Image 3: Setup Process */}
      <Image 
        src="/images/kisanguides/setup-process.webp" 
        alt="Mushroom Farming Setup Process - Bag Filling and Spawning" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kitna Paisa Lagega? 100-Bag Unit ka Realistic Budget
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh ek chhota setup hai jo beginners ke liye ideal mana jata hai. 100 bags se aap mahine ka 60-80 kg mushroom produce kar sakte hain (3-4 flushes mein). 
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: Neeche diye gaye numbers estimated ranges hain. Yeh aapke local material rates, inflation, aur field conditions ke hisaab se badal sakte hain.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">100-Bag Oyster Mushroom Unit Setup (Latest Estimates)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Room Preparation (shelving, insulation, ventilation):</span>
            <span className="font-semibold">₹15,000 - ₹25,000</span>
          </li>
          <li className="flex justify-between">
            <span>Paddy Straw (bhoosa) - 10 quintal:</span>
            <span className="font-semibold">₹8,000 - ₹12,000</span>
          </li>
          <li className="flex justify-between">
            <span>Spawn (beej) - 25-30 kg:</span>
            <span className="font-semibold">₹5,000 - ₹7,500</span>
          </li>
          <li className="flex justify-between">
            <span>Polythene bags (100 pieces):</span>
            <span className="font-semibold">₹1,500 - ₹2,500</span>
          </li>
          <li className="flex justify-between">
            <span>Formalin, Bavistin, and other chemicals:</span>
            <span className="font-semibold">₹2,000 - ₹3,000</span>
          </li>
          <li className="flex justify-between">
            <span>Sprayer, thermometer, hygrometer:</span>
            <span className="font-semibold">₹2,500 - ₹4,000</span>
          </li>
          <li className="flex justify-between">
            <span>Labor (pasting, filling, maintenance - 2 months):</span>
            <span className="font-semibold">₹8,000 - ₹12,000</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Investment Range:</span>
            <span className="text-green-700 dark:text-green-400">₹42,000 - ₹66,000</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Yeh ek chhota initial investment hai. Par isse expand karne ke liye aapko working capital chahiye hoga. <Link href="/articles/loan/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC)</Link> se aap short-term working capital arrange kar sakte hain, jisme timely repayment par interest rate kam milta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sarkari Subsidy: NHB, PM FME, aur State Schemes
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mushroom farming ko promote karne ke liye sarkar ke paas kai schemes hain. Par har scheme ki apni eligibility hai, isliye pehle samajh lein ki aap kaunsi ke liye qualify karte hain.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">1. NHB (National Horticulture Board) Credit-Linked Back-End Subsidy:</strong>
            Yeh popular schemes mein se ek hai. Bade units par aapko project cost ka ek certain percentage subsidy mil sakti hai. Yeh subsidy bank loan lene ke baad back-end par milti hai - matlab pehle loan lo, phir subsidy claim karo.
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic">
              Disclaimer: NHB ki guidelines update hoti rehti hain. Latest subsidy % aur eligibility ke liye nazdeeki Horticulture Department office se confirm karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">2. PM FME Yojana:</strong>
            Agar aap mushroom ko process karke bechna chahte hain (dry mushroom, pickle, powder), toh <Link href="/articles/farming/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> ke under 35% subsidy mil sakti hai (maximum ₹10 lakh). Yeh individual farmers aur SHGs ke liye hai.
          </li>
          
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">3. PMEGP / Agri Infrastructure:</strong>
            Chhote units ke liye yeh scheme useful hai. 25-35% subsidy (rural areas mein zyada) mil sakti hai. Maximum project cost ₹25 lakh hai aur yeh KVIC ke through apply hota hai.
          </li>

          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">4. State-Level Horticulture Schemes:</strong>
            Har state ki apni schemes hoti hain (jaise UP, Haryana, Maharashtra mein alag-alag names se). Inme chhote farmers ko 40-50% tak ka financial assistance mil sakta hai.
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic">
              Disclaimer: State schemes ke details vary karti hain. Apne zila ke Horticulture Officer se latest information lein.
            </p>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aap NHB subsidy ke liye apply karna chahte hain, toh neeche diya gaya button aapko official portal par le jayega. Wahan aap latest guidelines aur application process dekh sakte hain:
      </p>

      <ExternalLinkButton 
        url="https://nhb.gov.in/" 
        label="NHB Official Portal - Subsidy Guidelines Check Karein" 
      />

      {/* Image 4: Harvesting */}
      <Image 
        src="/images/kisanguides/harvesting-mushroom.webp" 
        alt="Fresh Oyster Mushroom Harvesting from Growing Bags" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Step-by-Step Process: Oyster Mushroom Kaise Ugayein?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Oyster mushroom ki farming 4 main steps mein hoti hai. Har step critical hai - ek chhoti si galti poori crop kharab kar sakti hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Chaff (Bhoosa) ki Preparation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Paddy straw ko 2-3 inch ke pieces mein kaat lein. Phir isko paani mein 16-18 ghante tak bhigo dein. Iske baad paani nikaal kar straw ko achhi tarah squeeze karein - moisture content 65-70% hona chahiye. Agar zyada paani hoga toh fungus nahi ugega, kam hoga toh straw sookh jayega.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Sterilization (Sabse Important)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bhige hue straw ko 60-90 minute tak steam se treat karein. Iske liye drum ya boiler use hota hai. Yeh step contamination ko khatam karta hai. Formalin (2%) aur Bavistin (0.1%) ka solution bhi use hota hai. Sterilization ke baad straw ko thanda hone dein (room temperature tak).</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Spawning (Beej Dalna)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Thande hue straw ko polythene bags mein bharein. Har layer mein spawn (mushroom seed) daalein - typically 3-4 layers. Ek bag mein 5-7 kg straw aur 200-250 gram spawn lagta hai. Bags ko tight band kar dein aur unme 10-12 chhed (holes) kar dein ventilation ke liye.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Incubation aur Fruiting</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bags ko andhere kamre mein shelving par rakhein. Temperature 22-28°C aur humidity 70-80% maintain karein. 18-22 din mein bags white mycelium se bhar jayenge (spawn run). Uske baad bags ko kholein aur fresh air, light, aur humidity provide karein. 7-10 din mein pehli flush (crop) taiyar ho jayegi.</p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek bag se typically 3-4 flushes aati hain, total 1-1.5 kg mushroom. 100 bags se aap mahine ka 60-80 kg produce kar sakte hain. Pehli flush sabse badi hoti hai, baad wali flushes chhoti hoti jati hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        1 Saal Ka Profit Calculation: Realistic Expectations
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh calculation 100-bag unit ke liye hai, jo saal mein 8-10 cycles complete karta hai (har cycle 45-50 din). 
      </p>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm italic">
        Note: Yeh figures average estimates hain. Actual production, market rates, aur expenses aapke management aur local conditions par depend karte hain.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Item</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Quantity</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Rate</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-semibold" colSpan={4}>Revenue (Annual)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Mushroom Production</td>
              <td className="py-3 px-4">600-700 kg/year</td>
              <td className="py-3 px-4">₹150/kg (avg)</td>
              <td className="py-3 px-4">₹90,000 - ₹1,05,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Spent Straw (waste as manure)</td>
              <td className="py-3 px-4">1-2 ton</td>
              <td className="py-3 px-4">₹5/kg</td>
              <td className="py-3 px-4">₹5,000 - ₹10,000</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-bold text-green-800 dark:text-green-300" colSpan={3}>Total Revenue</td>
              <td className="py-3 px-4 font-bold text-green-700 dark:text-green-400">₹95,000 - ₹1,15,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-semibold" colSpan={4}>Expenses (Annual)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Raw Material (straw, spawn, chemicals)</td>
              <td className="py-3 px-4">8-10 cycles</td>
              <td className="py-3 px-4">₹15,000-20,000/cycle</td>
              <td className="py-3 px-4">₹1,20,000 - ₹2,00,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Labor</td>
              <td className="py-3 px-4">12 months</td>
              <td className="py-3 px-4">₹5,000-8,000/month</td>
              <td className="py-3 px-4">₹60,000 - ₹96,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Electricity, Water, Misc</td>
              <td className="py-3 px-4">12 months</td>
              <td className="py-3 px-4">₹2,000-3,000/month</td>
              <td className="py-3 px-4">₹24,000 - ₹36,000</td>
            </tr>
            <tr className="bg-red-50 dark:bg-red-900/20">
              <td className="py-3 px-4 font-bold text-red-800 dark:text-red-300" colSpan={3}>Total Expenses</td>
              <td className="py-3 px-4 font-bold text-red-700 dark:text-red-400">₹2,04,000 - ₹3,32,000</td>
            </tr>
            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
              <td className="py-3 px-4 font-bold text-lg text-yellow-800 dark:text-yellow-300" colSpan={3}>Net Profit (Year 1)</td>
              <td className="py-3 px-4 font-bold text-lg text-yellow-800 dark:text-yellow-300">Loss ya Break-even</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Rukiye, ghabraiye mat. Yeh numbers dekh kar lag raha hoga ki loss ho raha hai. Par yahan ek important baat hai - <strong>pehla saal learning year hota hai</strong>. Mortality rate 20-30% ho sakta hai, aur aap abhi scale nahi kar rahe hote.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Jab aap 300-500 bags tak expand karte hain (Year 2-3), tab economies of scale kaam aati hain. 500 bags unit par annual net profit ₹2-3 lakh ho sakta hai. Aur agar aap value addition karte hain (dry mushroom, powder, pickle), toh margins 3-4x badh jate hain.
      </p>

      {/* Image 5: Final Products */}
      <Image 
        src="/images/kisanguides/final-products.webp" 
        alt="Fresh and Dried Mushroom Products Ready for Market" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mushroom farming mein risks bahut hain, aur yeh risks khet ki farming se alag hain. Yahan ek chhoti si galti poori crop kharab kar sakti hai.
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Contamination (Sabse Bada Risk)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Green mold (Trichoderma), black mold, aur bacteria aapke mushroom ko khatam kar sakte hain. Agar sterilization proper nahi hua, ya kamre mein hygiene maintain nahi hui, toh 50-100% crop loss ho sakta hai. Ek baar contamination ho gaya, toh us bag ko turant remove karna padta hai, warna doosre bags mein bhi fail jayega.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Temperature aur Humidity Fluctuation</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Mushroom bahut sensitive hota hai. Temperature 2-3 degree bhi upar-neeche hua toh growth ruk jati hai. Humidity kam hui toh mushroom sookh jata hai, zyada hui toh bacteria attack karte hain. Garmiyon mein North India mein temperature 40-45°C tak chala jata hai, jahan AC ya cooler zaroori ho jata hai. Iska electricity bill bahut aata hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Market Price Volatility</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Mushroom ka shelf life bahut kam hota hai - sirf 2-3 din. Agar aap time par nahi bech paye, toh kharab ho jayega. Kuch areas mein oversupply ho jata hai aur rates ₹80-100/kg tak gir jate hain. Aapke paas cold storage nahi hai toh aap forced sale karenge.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Quality Spawn ki Availability</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Achha spawn milna mushkil hota hai. Local market mein kharab quality ka spawn milta hai jisse germination rate kam hota hai. Reputed labs ya government institutes se hi spawn khareedein. Saste spawn ke chakkar mein poori crop kharab ho sakti hai.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Training Kahan Se Lein? Yeh Skip Mat Karna
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mushroom farming mein technical knowledge bahut zaroori hai. Bina training ke aap contamination control, temperature management, aur harvesting techniques nahi seekh payenge. Result? Pehle hi cycle mein loss.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        5-7 din ki training lein. Cost ₹2,000-5,000 hoti hai (kuch jagah free bhi milti hai). Training mein aap seekhenge:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li>Spawn quality kaise pehchanein</li>
        <li>Sterilization techniques</li>
        <li>Spawning process</li>
        <li>Temperature aur humidity control</li>
        <li>Harvesting aur packaging</li>
        <li>Contamination management</li>
        <li>Post-harvest handling</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Reliable training centers:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
        <li>
          <strong>Directorate of Mushroom Research (DMR), Solan (HP):</strong> Premier institute. Inke regular training programs hote hain. Website par check karein:
        </li>
      </ul>

      <ExternalLinkButton 
        url="https://dmr.icar.gov.in/" 
        label="DMR Solan - Training Programs Check Karein" 
      />

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li>
          <strong>Krishi Vigyan Kendra (KVK):</strong> Har district mein KVK mushroom farming training deta hai. Free ya nominal fee mein.
        </li>
        <li>
          <strong>State Agriculture Universities:</strong> Jaise PAU Ludhiana, GBPUAT Pantnagar, CSAUAT Kanpur. Wo certificate courses bhi karate hain.
        </li>
        <li>
          <strong>Private Training Centers:</strong> Kuch successful farmers paid training dete hain (5,000-10,000 for 5-7 days). Yeh practical hota hai.
        </li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Training ke baad kam se kam 1 mahina kisi experienced farmer ke yahan kaam karein. Theoretical knowledge aur practical experience dono zaroori hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Waste Management: Spent Straw Se Extra Income
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mushroom farming ka ek bada fayda yeh hai ki waste bhi value create karta hai. Spent straw (jo mushroom nikalne ke baad bachta hai) bahut achha organic fertilizer hota hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aap isko 2 tarah se use kar sakte hain:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li>Direct khet mein use karein - nitrogen rich hota hai</li>
        <li>
          <Link href="/articles/farming/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Vermi compost</Link> banakar bechein - ₹15-20/kg milta hai
        </li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Ek 100-bag unit se saal mein 2-3 ton spent straw nikalta hai. Isko bech kar aap ₹10,000-15,000 extra kama sakte hain. Yeh aapke overall profitability ko improve karta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Kam jagah (100-200 sq ft) available hai</li>
            <li>• Daily 3-4 hours de sakte hain (monitoring zaroori hai)</li>
            <li>• ₹50,000-1 lakh initial investment kar sakte hain</li>
            <li>• Technical details seekhne ki ichha hai</li>
            <li>• Urban ya semi-urban area mein hain (market access achha hai)</li>
            <li>• Women entrepreneurs (yeh business women ke liye bahut suitable hai)</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Temperature control nahi kar sakte (AC/coolers afford nahi kar sakte)</li>
            <li>• Daily monitoring nahi kar sakte (yeh 365 din ka kaam hai)</li>
            <li>• Market access nahi hai (door daraz gaon mein mushkil hai)</li>
            <li>• Technical knowledge seekhne ki ichha nahi hai</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aap seriously interested hain, toh pehle training lein (5-7 din ka course), phir local successful farmers se milein aur unke challenges samjhein. Uske baad chhote scale (100 bags) se start karein, pehle 2-3 cycles mein practical experience gain karein, aur phir gradually expand karein. Subsidy ka fayda zaroor uthayein, par apni planning subsidy ke bina karein - agar mil gayi toh bonus samjhein. Ek aur important point: <Link href="/articles/farming/soil-health-card-complete-guide-2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">organic farming</Link> ka angle bhi consider karein kyunki organic mushroom ka market rate 20-30% zyada milta hai.
      </p>

      {/* FAQ Section */}
      <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">1. Kya mushroom farming se kamre mein smell ya badboo aati hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Proper sterilization aur ventilation hone par smell minimal hoti hai. Par agar contamination ho jaye (green mold ya bacteria), toh foul smell aa sakti hai. Spent straw ko time par hata dena chahiye - agar 3-4 din se zyada pada rahe toh decomposition se smell aa sakti hai. Achhi ventilation aur regular cleaning se yeh problem avoid ki ja sakti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">2. Kya bina AC ke button mushroom ki kheti ho sakti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Technically possible hai par commercially viable nahi. Button mushroom ko 14-18°C constant temperature chahiye. North India ke plains mein garmiyon mein 40-45°C tak temperature hota hai. Cooler ya evaporative cooling se 3-5 degree tak hi kami la sakte hain, jo kaafi nahi hai. Himachal, Uttarakhand jaise pahadi ilaqon mein bina AC ke ho sakta hai, par plains mein AC mandatory hai - jiska electricity bill ₹15,000-25,000 mahina aa sakta hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3. Pehli flush fail ho jaye ya contamination ho jaye toh kya karein?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Sabse pehle affected bags ko turant isolate karein aur kamre se bahar nikal dein. Baaki bags ko check karein - agar mycelium white aur healthy hai toh doosri flush aa sakti hai. Sterilization dobara karein (formalin spray), ventilation badhayein, aur humidity adjust karein. Pehli flush fail hone par discourage na hon - yeh learning curve ka part hai. Agli batch mein sterilization aur spawning process ko aur careful karein.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">4. Kya mushroom farming mein insurance ya crop protection scheme hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Abhi mushroom farming ke liye dedicated crop insurance scheme limited hai. Kuch states mein horticulture crops ke under coverage mil sakta hai, par contamination ya temperature fluctuation jaise risks generally cover nahi hote. PM Fasal Bima Yojana (PMFBY) mostly field crops ke liye hai. Isliye risk management ke liye proper training, quality spawn, aur gradual scaling hi sabse achha protection hai. Kuch private insurers horticulture ventures ke liye policies offer karte hain - nazdeeki insurance company se inquire karein.</p>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (horticulture officers, agriculture officers) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}