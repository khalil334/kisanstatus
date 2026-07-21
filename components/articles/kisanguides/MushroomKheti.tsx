'use client';

import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide',
  description: 'Mushroom (khumbi) farming complete guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.',
  keywords: ['mushroom kheti', 'oyster mushroom farming', 'mushroom subsidy', 'button mushroom kheti', 'mushroom business', 'khumbi ki kheti'],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide',
    description: 'Mushroom farming guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy',
    images: [{ url: 'https://kisanstatus.com/images/kisanguides/Mushroomhero.webp', width: 1200, height: 630, alt: 'Oyster Mushroom Farming Setup in Dark Room' }],
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide', 
    description: 'Mushroom farming guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.', 
    images: ['https://kisanstatus.com/images/kisanguides/Mushroomhero.webp'] 
  },
  alternates: { canonical: 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://kisanstatus.com/#organization', name: 'KisanStatus.com', url: 'https://kisanstatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp', width: 250, height: 60 } },
    { '@type': 'BreadcrumbList', '@id': 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy/#breadcrumb', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' }, { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' }, { '@type': 'ListItem', position: 3, name: 'Mushroom Kheti', item: 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy' }] },
    { '@type': 'Article', '@id': 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy/#article', headline: 'Mushroom Kheti 2026: NHB Subsidy, Profit & Complete Guide', description: 'Mushroom farming guide. Janein oyster mushroom kaise ugayein, NHB subsidy, 100-bag unit cost, aur real profit calculation.', author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }, publisher: { '@type': 'Organization', name: 'KisanStatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' } }, datePublished: '2026-01-15', dateModified: '2026-07-21', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy/' } },
    { '@type': 'FAQPage', '@id': 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy/#faq', mainEntity: [
        { '@type': 'Question', name: 'Kya mushroom farming se kamre mein smell ya badboo aati hai?', acceptedAnswer: { '@type': 'Answer', text: 'Proper sterilization aur ventilation hone par smell minimal hoti hai. Par agar contamination ho jaye (green mold ya bacteria), toh foul smell aa sakti hai. Spent straw ko time par hata dena chahiye.' } },
        { '@type': 'Question', name: 'Kya bina AC ke button mushroom ki kheti ho sakti hai?', acceptedAnswer: { '@type': 'Answer', text: 'Technically possible hai par commercially viable nahi. Button mushroom ko 14-18°C constant temperature chahiye. Plains mein AC mandatory hai.' } },
        { '@type': 'Question', name: 'Pehli flush fail ho jaye ya contamination ho jaye toh kya karein?', acceptedAnswer: { '@type': 'Answer', text: 'Affected bags ko turant isolate karein aur kamre se bahar nikal dein. Sterilization dobara karein aur humidity adjust karein.' } },
        { '@type': 'Question', name: 'Kya mushroom farming mein insurance ya crop protection scheme hai?', acceptedAnswer: { '@type': 'Answer', text: 'Kuch states mein horticulture crops ke under coverage mil sakta hai, par contamination ya temperature fluctuation jaise risks generally cover nahi hote.' } }
      ] 
    }
  ]
};

export default function MushroomKheti() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Image 
        src="/images/kisanguides/Mushroomhero.webp" 
        alt="Oyster Mushroom Farming Setup in Dark Room" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Mushroom (Khumbi) Ki Kheti 2026: Kamre Mein Shuru Karein, Subsidy aur Real Profit Guide
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Sach kahoon toh:</strong> Jo log sirf YouTube videos dekhkar bina practical training ke seedha 100-200 bags laga dete hain, wo aksar pehle 1-2 cycles mein contamination ya temperature issues ki wajah se 20-30% crop loss ka saamna karte hain. Lekin jab sterilization aur humidity control ka practical cycle samajh aa jata hai, tabhi is business mein consistent profit nikalna shuru hota hai.
        </p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Himachal Pradesh ke Solan district ko "Mushroom City of India" kaha jata hai, jahan dashakon se commercial mushroom farming hoti aa rahi hai. Par ab yeh kaam sirf pahadi ilaqon tak seemit nahi raha. Kam jagah, kam investment, par technical samajh behad zaroori hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Mushroom Farming Kyun? Zameen Nahi, Sirf Controlled Jagah Chahiye
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kheti-baadi mein sabse badi problem zameen ki hoti hai. Par mushroom farming mein aapko sirf ek andhera kamra chahiye jahan temperature 20-30 degree Celsius aur humidity 70-85% maintain ho sake. Chhat, storeroom, basement, ya koi bhi khaali jagah kaam aa sakti hai. Bas 10x10 feet ka kamra bhi shuruwat ke liye kaafi hai.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Market demand ki baat karein toh mushroom ka consumption India mein pichle kuch saalon mein tezi se badha hai. Urban areas mein log ab health-conscious ho gaye hain, aur mushroom protein ka achha source mana jata hai. Hotels, restaurants, aur local catering businesses regular buyers ban sakte hain.
      </p>

      <Image 
        src="/images/kisanguides/varieties-comparison.webp" 
        alt="Different Mushroom Varieties - Oyster, Button, Milky, and Shiitake Comparison Chart" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kaunsi Variety Chunein? Oyster, Button, ya Milky - Reality Check
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Naye log aksar seedha Button mushroom par jump kar lete hain kyunki market mein iski demand zyada hoti hai. Par Button mushroom ko strict controlled environment (AC, precise humidity control) chahiye, jiska setup aur maintenance kharcha bahut zyada hai.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap pehli baar shuru kar rahe hain, toh Oyster mushroom se start lena behtar rehta hai. Yeh kam temperature variation mein bhi ugg jata hai, iski bimariyan relatively kam hoti hain, aur spawn (beej) aasani se aur saste mein mil jata hai.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <caption className="sr-only">Comparison between Mushroom Varieties for farming</caption>
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Variety</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Temperature</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Cycle Time</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Market Rate</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Difficulty</th>
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
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Latest NHB guidelines ke anusaar, Oyster aur Milky varieties ko Indian climate ke liye zyada suitable mana jata hai.</p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Krishi anusandhan sansthanon (jaise DMR, Solan) ke general data ke mutabik, India mein total mushroom production ka bada hissa Oyster aur Milky varieties se aata hai kyunki yeh Indian climate ke liye relatively zyada suitable hain.
      </p>

      <Image 
        src="/images/kisanguides/setup-process.webp" 
        alt="Mushroom Farming Setup Process - Bag Filling, Spawning and Incubation Steps" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kitna Paisa Lagega? 100-Bag Unit ka Realistic Budget
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Commercial level par shuru karne ke liye 100 bags ek realistic starting point mana jata hai. 100 bags se aap mahine ka 60-80 kg mushroom produce kar sakte hain (3-4 flushes mein). Dhyan rahe, yeh number field conditions, state, aur vendor ke hisaab se badal sakta hai.
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
        Is initial capital ko manage karne ke liye <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC)</Link> ek badhiya vikalp hai, kyunki mushroom farming ko officially agriculture activity ke under cover kiya jata hai aur ispar byaj dar kam hoti hai. Chhote scale par <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> ya Mudra loan bhi bina collateral ke support provide kar sakte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sarkari Subsidy: Process Aur Ground Reality
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        National Horticulture Board (NHB) aur State Horticulture Departments is sector ko boost dene ke liye active hain. Lekin ek kadwi sachai yeh hai ki subsidy process mein 3-6 mahine lag sakte hain. Mera strong suggestion hai ki apna kaam subsidy ke intezaar mein na rokiye. Pehle apni pocket se setup karein, application daal dein, aur agar aa gayi toh use future expansion ya equipment upgrade mein lagayein.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">NHB (National Horticulture Board):</strong>
            Bade units par project cost ka ek certain percentage subsidy milti hai. Yeh subsidy bank loan lene ke baad back-end par milti hai. Latest guidelines ke liye NHB portal check karein.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">PM FME Yojana:</strong>
            Agar aap mushroom ko process karke bechna chahte hain (dry mushroom, pickle, powder), toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> ke under 35% subsidy mil sakti hai (maximum ₹10 lakh).
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">State-Level Horticulture Schemes:</strong>
            Har state ki apni schemes hoti hain. Inme chhote farmers ko 40-50% tak ka financial assistance mil sakta hai. Apne zila ke Horticulture Officer se latest information lein.
          </li>
        </ul>
      </div>

      <ExternalLinkButton 
        url="https://nhb.gov.in/" 
        label="NHB Official Portal - Subsidy Guidelines Check Karein" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Step-by-Step Process: Oyster Mushroom Kaise Ugayein?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Oyster mushroom ki farming 4 main steps mein hoti hai. Har step critical hai - ek chhoti si galti poori batch kharab kar sakti hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Chaff (Bhoosa) ki Preparation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Paddy straw ko 2-3 inch ke pieces mein kaat lein. Phir isko paani mein 16-18 ghante tak bhigo dein. Iske baad paani nikaal kar straw ko achhi tarah squeeze karein - moisture content 65-70% hona chahiye. Yeh step bahut important hai kyunki agar straw zyada geela hua toh contamination ka khatra badh jata hai.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Sterilization (Sabse Important)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bhige hue straw ko 60-90 minute tak steam se treat karein. Yeh step contamination ko khatam karta hai. Formalin (2%) aur Bavistin (0.1%) ka solution bhi use hota hai. Dhyan rahe, sterilization ke bina aage ka kaam bekar hai - green mold aur bacteria poora kaam kharab kar sakte hain.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Spawning (Beej Dalna)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Thande hue straw ko polythene bags mein bharein. Har layer mein spawn daalein. Ek bag mein 5-7 kg straw aur 200-250 gram spawn lagta hai. Bags ko tight band kar dein aur unme 10-12 chhed kar dein taaki air circulation ho sake. Yeh step clean hands aur gloves ke saath karna chahiye.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Incubation aur Fruiting</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bags ko andhere kamre mein shelving par rakhein. Temperature 22-28°C aur humidity 70-80% maintain karein. 18-22 din mein bags white mycelium se bhar jayenge. Uske baad bags ko kholein aur fresh air, light, aur humidity provide karein. Pehli flush 25-30 din mein aa jayegi.</p>
          </div>
        </div>
      </div>

      <Image 
        src="/images/kisanguides/harvesting-mushroom.webp" 
        alt="Fresh Oyster Mushroom Harvesting from Growing Bags - Ready for Market" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        1 Saal Ka Profit Calculation: Realistic Expectations
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh calculation 100-bag unit ke liye hai, jo saal mein 8-10 cycles complete karta hai. Ground reality kuch aisi hoti hai (approximate market rates ke hisaab se, state-wise variation ho sakta hai):
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
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
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Pehla saal learning year hota hai. Year 2-3 mein economies of scale se profit margin 25-30% tak pahunch sakta hai.</p>
      </div>

      <Image 
        src="/images/kisanguides/packaged-products.webp" 
        alt="Fresh and Dried Mushroom Products Ready for Market - Packaging and Branding" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mushroom farming sunne mein simple lagta hai, par ground level par kuch challenges hote hain jinse aapko pehle se tayyar rehna chahiye:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">1. Contamination (Sabse Bada Risk)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Green mold (Trichoderma), black mold, aur bacteria poori batch khatam kar sakte hain. Agar sterilization proper nahi hua, ya kamre mein hygiene maintain nahi hui, toh 50-100% crop loss ho sakta hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">2. Temperature aur Humidity Fluctuation</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Mushroom bahut sensitive hota hai. Temperature 2-3 degree bhi upar-neeche hua toh growth ruk jati hai. Humidity kam hui toh mushroom sookh jata hai, zyada hui toh bacteria attack karte hain.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">3. Seasonal Demand</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Kharif (June-October) aur Rabi (October-March) mein demand peak par hoti hai. Garmiyon (April-June) mein demand 30-40% kam ho jati hai. Aapko 12 months ka cash flow manage karna padta hai.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">4. Quality Spawn ki Availability</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Achha spawn milna mushkil hota hai. Local market mein kharab quality ka spawn milta hai jisse germination rate kam hota hai. Hamesha reputed labs ya government institutes se hi spawn khareedein.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Room aur Equipment Maintenance: Har Cycle Mein Kya Zaroori Hai?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mushroom farming mein room aur equipment ki proper maintenance hi contamination-free cycles ki kunji hai. Har cycle ke baad proper sanitization se aap apne setup ko saalon tak use kar sakte hain aur recurring cost ko control mein rakh sakte hain.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Daily/Weekly Routine:</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Temperature aur humidity roz check karein.</li>
              <li>✓ Hafte mein ek baar room ki proper ventilation karein.</li>
              <li>✓ Spent straw (kharab bags) ko turant room se bahar nikal dein.</li>
              <li>✓ Kisi bhi contaminated bag ko turant destroy karein.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Monthly/Annual Routine:</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Mahine mein ek baar room ko formalin se fumigate karein.</li>
              <li>✓ Saal ke ant mein poore room ko high pressure se wash karein.</li>
              <li>✓ Shelving aur tools ko disinfect karein.</li>
              <li>✓ Winter mein room ko properly seal karein taaki temperature maintain rahe.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (Unexpected Realities)
      </h2>
      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">1. Kya mushroom farming se kamre mein smell ya badboo aati hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Proper sterilization aur ventilation hone par smell minimal hoti hai. Par agar contamination ho jaye (green mold ya bacteria), toh foul smell aa sakti hai. Spent straw ko time par hata dena chahiye - agar 3-4 din se zyada pada rahe toh decomposition se smell aa sakti hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">2. Kya bina AC ke button mushroom ki kheti ho sakti hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Technically possible hai par commercially viable nahi. Button mushroom ko 14-18°C constant temperature chahiye. North India ke plains mein garmiyon mein 40-45°C tak temperature hota hai. Cooler ya evaporative cooling se 3-5 degree tak hi kami la sakte hain, jo kaafi nahi hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3. Pehli flush fail ho jaye ya contamination ho jaye toh kya karein?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Sabse pehle affected bags ko turant isolate karein aur kamre se bahar nikal dein. Baaki bags ko check karein - agar mycelium white aur healthy hai toh doosri flush aa sakti hai. Sterilization dobara karein (formalin spray), ventilation badhayein, aur humidity adjust karein.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">4. Kya mushroom farming mein insurance ya crop protection scheme hai?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Abhi mushroom farming ke liye dedicated crop insurance scheme limited hai. Kuch states mein horticulture crops ke under coverage mil sakta hai, par contamination ya temperature fluctuation jaise risks generally cover nahi hote. Risk management ke liye proper training aur gradual scaling hi sabse achha protection hai.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Final Decision: Kya Yeh Aapke Liye Sahi Hai?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Kam jagah (100-200 sq ft) available hai.</li>
            <li>• Daily 3-4 hours de sakte hain (monitoring zaroori hai).</li>
            <li>• ₹50,000-1 lakh initial investment kar sakte hain.</li>
            <li>• Technical details seekhne ki ichha hai.</li>
            <li>• Urban ya semi-urban area mein hain (market access achha hai).</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Temperature control nahi kar sakte (AC/coolers afford nahi kar sakte).</li>
            <li>• Daily monitoring nahi kar sakte (yeh 365 din ka kaam hai).</li>
            <li>• Market access nahi hai (door daraz gaon mein mushkil hai).</li>
            <li>• Technical knowledge seekhne ki ichha nahi hai.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Meri aakhri salah:</strong> Bina research ke kisi vendor ki baaton mein aakar decision na lein. Pehle apne nazdeeki Krishi Vigyan Kendra (KVK) jayein. Wahan ke officers aapko exact subsidy, eligible vendors ki list, aur free training ke baare mein guide karenge. Uske baad kam se kam 3 vendors se quotation lein, unke purane installations dekhne jayein, aur phir hi apply karein.
      </p>

      {/* Sources & References */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sources & References
      </h2>
      <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400 not-prose">
        <li><strong>National Horticulture Board (NHB):</strong> Official guidelines for mushroom farming subsidies and training.</li>
        <li><strong>Directorate of Mushroom Research (DMR), Solan:</strong> Government of India portal for scheme details and application.</li>
        <li><strong>Krishi Vigyan Kendra (KVK):</strong> District-level practical training modules and mushroom cultivation support.</li>
        <li><strong>FSSAI:</strong> Regulatory guidelines for packaged mushroom and food safety licensing.</li>
      </ul>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article general educational purpose ke liye hai. Actual costs, subsidies, aur procedures aapke location, state policies, aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial investment karne se pehle qualified professionals (horticulture officers, NHB officials, ya bank managers) se consult karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}