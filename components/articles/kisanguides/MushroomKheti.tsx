import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';
import { AuthorBox, FAQBlock } from '@/components/ArticleShared';
import { AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import GuideDisclaimer from '@/components/GuideDisclaimer';
import { getArticleBySlug } from '@/lib/articles-data';

export const metadata: Metadata = {
  title: 'Mushroom Kheti 2026: Subsidy, Profit aur Complete Guide',
  description: 'Chhote kamre mein oyster mushroom kaise ugayein. NHB subsidy process, 100-bag setup cost, aur sachcha profit calculation janein.',
  keywords: ['mushroom farming in small room at home profit', 'oyster mushroom spawn price in India 2026', 'khumbi ki kheti mein kitna pani lagta hai', 'green mold in mushroom treatment home remedy', 'mushroom business plan 10x10 room', 'nhb mushroom subsidy'],
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  openGraph: {
    title: 'Mushroom Kheti 2026: Subsidy, Profit aur Complete Guide',
    description: 'Chhote kamre mein oyster mushroom kaise ugayein. NHB subsidy process, 100-bag setup cost, aur sachcha profit calculation janein.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy',
    images: [{ url: 'https://kisanstatus.com/images/kisanguides/Mushroomhero.webp', width: 1200, height: 630, alt: 'Oyster Mushroom Farming Setup in Dark Room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mushroom Kheti 2026: Subsidy, Profit aur Complete Guide',
    description: 'Chhote kamre mein oyster mushroom kaise ugayein. NHB subsidy process, 100-bag setup cost, aur sachcha profit calculation janein.',
    images: ['https://kisanstatus.com/images/kisanguides/Mushroomhero.webp']
  },
  alternates: { canonical: 'https://kisanstatus.com/articles/mushroom-kheti-nhb-subsidy' },
};

const mushroomKhetiFaqs = [
  {
    q: 'Kya 10x10 feet ke chhote kamre mein mushroom farming profitable hai?',
    a: 'Haan, 100-150 bags aaram se aa jate hain. Pehle saal seekhne ka hota hai, isliye break-even hona bhi badi baat hai. Doosre saal se direct marketing karke 20-25% net margin nikalna shuru ho jata hai.',
  },
  {
    q: 'Khumbi ke kamre mein badboo ya smell kyun aati hai?',
    a: 'Agar sterilization sahi se hua ho toh smell minimal hoti hai. Lekin agar straw zyada geela chhod diya ya koi bag kharab ho gaya aur use waqt par bahar nahi nikala, toh ammonia ya sadan ki badboo aane lagti hai.',
  },
  {
    q: 'Green mold (hara fungus) dikhe toh turant kya karein?',
    a: 'Us bag ko chupke se kamre se bahar nikal kar jala dein ya gehra gaad dein. Bachaye hue bags ke aas-paas Neem oil (5ml/litre) ya Trichoderma viride spray karein. Bleaching powder se farsh saaf karein.',
  },
  {
    q: 'Asli mushroom beej (spawn) kahan se aur kitne mein milega?',
    a: '2026 mein certified labs se oyster spawn ka rate ₹180 se ₹250 per kg hai. Hamesha DMR Solan ya state agricultural university ke authorized vendors se hi lein. Local mandi ke anjaam sources se bachein.',
  },
  {
    q: 'NHB mushroom subsidy kitni milti hai aur kaise apply karein?',
    a: 'NHB back-ended capital subsidy deta hai, jiska percentage state aur unit size ke hisaab se badalta hai — zyadatar general category ke liye 40% ke aas-paas rehta hai. Apply apne zila Horticulture Office se ya NHB ke online portal se hota hai, project report ke saath.',
  },
];

export default function MushroomKheti() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
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
        Mushroom (Khumbi) Ki Kheti 2026: Kamre Mein Shuru Karein, NHB Subsidy aur Real Profit Guide
      </h1>

      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Pehle yeh jaan lein:</strong> YouTube par "zero investment, mahine ke lakhon" wale videos dekhkar bahut se naujawan seedha 200-300 bags laga lete hain. Par 15 din baad jab green mold (hara fungus) puri batch kharab kar deta hai, tab pata chalta hai ki khumbi ugana sirf bags latakane ka naam nahi hai. Yeh ek controlled science hai. Jab aap sterilization aur humidity control ka practical tareeka samajh jate hain, tabhi yeh business ek stable income source ban pata hai.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Himachal ke Solan ko "Mushroom City" kaha jata hai, lekin ab yeh zaroori nahi ki aap pahadi ilaqe mein hi rahein. Ek saamanaya chhat, storeroom, ya basement bhi ab commercial production ke liye kaafi hai. Shart sirf ek hai: controlled environment. Market mein protein-rich food ki maang tezi se badh rahi hai. Local hotels, hostels, aur health-conscious families regular khareedar ban sakte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Variety Selection: Oyster, Button, ya Milky?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Naye farmers aksar seedha Button (Safed) mushroom par jump kar lete hain kyunki local mandi mein iska rate achha milta hai. Yeh ek badi galti ho sakti hai. Button mushroom ko 14-18°C ka constant temperature chahiye, jiske liye AC ya heavy cooling setup mandatory hai. Bijli ka bill hi aapka shuruati munafa kha jayega.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Pehli baar shuruat kar rahe hain toh Oyster (Dhingri) ya Milky se start lein. Oyster 20-30°C ke beech aaram se ugg jata hai, iski rog pratirodhak shamta achhi hoti hai, aur bej aasani se uplabdh hai.
      </p>

      <Image
        src="/images/kisanguides/varieties-comparison.webp"
        alt="Different Mushroom Varieties - Oyster, Button, Milky, and Shiitake Comparison Chart"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <caption className="sr-only">Comparison between Mushroom Varieties for farming</caption>
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Variety</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Ideal Temp</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Cycle Duration</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Approx Market Rate</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Beginner Friendly</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Oyster (Dhingri)</td>
              <td className="py-3 px-4">20-30°C</td>
              <td className="py-3 px-4">35-45 days</td>
              <td className="py-3 px-4">₹120 - ₹200/kg</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Highly Recommended</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Button (Safed)</td>
              <td className="py-3 px-4">14-18°C (AC Mandatory)</td>
              <td className="py-3 px-4">45-60 days</td>
              <td className="py-3 px-4">₹180 - ₹300/kg</td>
              <td className="py-3 px-4 text-red-600 dark:text-red-400 font-medium">Avoid initially</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Milky (Safed Dhingri)</td>
              <td className="py-3 px-4">28-35°C</td>
              <td className="py-3 px-4">40-50 days</td>
              <td className="py-3 px-4">₹150 - ₹220/kg</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Best for Summers</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Latest NHB guidelines ke anusaar, Oyster aur Milky varieties ko Indian plains ke climate ke liye zyada suitable mana jata hai.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        100-Bag Unit ka Realistic Budget: Hidden Costs
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Commercial level par 100 bags ek manageable starting point hai. Isse aap mahine ka 60-80 kg produce kar sakte hain. Aksar guides sirf raw material ka kharcha batati hain, lekin ground level par kuch hidden costs bhi hote hain.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">100-Bag Oyster Unit Setup (2026 Estimates)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Room Prep (Shelving, insulation, basic ventilation):</span>
            <span className="font-semibold">₹15,000 - ₹25,000</span>
          </li>
          <li className="flex justify-between">
            <span>Paddy Straw (Bhoosa) - 10 quintal + transport:</span>
            <span className="font-semibold">₹9,000 - ₹13,000</span>
          </li>
          <li className="flex justify-between">
            <span>Certified Spawn (Beej) - 25 to 30 kg:</span>
            <span className="font-semibold">₹5,500 - ₹7,500</span>
          </li>
          <li className="flex justify-between">
            <span>UV-treated Polythene bags (100 pieces):</span>
            <span className="font-semibold">₹1,500 - ₹2,500</span>
          </li>
          <li className="flex justify-between">
            <span>Chemicals (Formalin, Bavistin, Bleaching powder):</span>
            <span className="font-semibold">₹2,000 - ₹3,000</span>
          </li>
          <li className="flex justify-between">
            <span>Tools (Sprayer, digital thermo-hygrometer, gloves):</span>
            <span className="font-semibold">₹3,000 - ₹4,500</span>
          </li>
          <li className="flex justify-between">
            <span>Miscellaneous & Contingency (10% buffer):</span>
            <span className="font-semibold">₹4,000 - ₹6,000</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Realistic Investment:</span>
            <span className="text-green-700 dark:text-green-400">₹40,000 - ₹61,500</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Is capital ko manage karne ke liye <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">KCC card</Link> ek behtareen vikalp hai. Mushroom farming ko officially horticulture activity ke under cover kiya jata hai. Chhote scale par food processing ke liye <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME subsidy guide</Link> se 35% tak ki subsidy claim ki ja sakti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Step-by-Step Process: Oyster Mushroom Kaise Ugayein?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek chhoti si laparwahi poori batch kharab kar sakti hai. In instructions ko dhyan se follow karein.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Chaff (Bhoosa) ki Preparation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Paddy straw ko 2-3 inch ke chhote tukdon mein kaat lein. Ise saaf paani mein 16-18 ghante tak bhigo kar rakhein. Paani nikaal kar straw ko achhi tarah nichod lein. Moisture content 65-70% hona chahiye. Simple test: mutthi mein bhar kar nichodein, paani ki boondein na girein, lekin hath geela mehsoos ho. Zyada geela straw contamination ko invite karta hai.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Sterilization (Sabse Critical Phase)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bhige hue straw ko 60-90 minute tak ubalte paani ya steam se treat karein. Yeh harmful bacteria aur mold ke spores ko khatam karta hai. Chemical method mein Formalin (2 ml per litre) aur Bavistin (1 gram per litre) ka solution use hota hai. Dhyan rahe: agar formalin ki smell tez reh gayi, toh aapka beej (spawn) mar jayega. Achhi tarah nichodna zaroori hai.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Spawning (Beej Milana)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Thande hue straw ko saaf polythene bags mein bharein. Layer method sabse safe hai: 3 inch straw, thoda beej, phir 3 inch straw. Ek standard bag mein 5-7 kg straw aur 200-250 gram spawn lagta hai. Bags ko tight band karke 10-12 jagah sui se chhed kar dein taaki air circulation ho sake. Yeh kaam hamesha saaf hath ya gloves pehen kar hi karein.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Incubation aur Fruiting</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Bags ko andhere, shaant kamre mein shelving par rakhein. Temperature 22-28°C aur humidity 70-80% maintain karein. 18-22 din mein bags safed mycelium (jaal) se puri tarah bhar jayenge. Jab ye safed jaal dikhne lage, toh bags ko kholein aur kamre mein subah-shaam paani ka chhidkav (fogging) karein. Direct bag par paani na dalein.</p>
          </div>
        </div>
      </div>

      <Image
        src="/images/kisanguides/setup-process.webp"
        alt="Mushroom Farming Setup Process - Bag Filling, Spawning and Incubation Steps"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Disease Management: Green Mold aur Bacterial Blotch
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Fungi cultivation mein rog tezi se failta hai. Prevention hi best cure hai.
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-8 text-gray-700 dark:text-gray-300">
        <li><strong>Green Mold (Trichoderma):</strong> Agar bag mein hara chhakka dikhayi de, toh us bag ko usi waqt kamre se bahar nikal kar jala dein ya gehra gaad dein. Bachaye hue bags ke aas-paas <em>Trichoderma viride</em> ka live culture spray karein, jo is harmful fungus ko kha jata hai. Neem oil spray (5ml/litre) bhi ek asardaar upay hai.</li>
        <li><strong>Bacterial Blotch:</strong> Mushroom ke cap par peele ya bhure dhabbe. Iska karan zyada nami aur hawa ka na rukna hai. Watering foran band karein, exhaust fan chalayein, aur bleaching powder ke halke solution se floor saaf karein.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Marketing Strategy: ₹150/kg Kaise Kamayein?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sabse badi galti jo naye farmers karte hain, wo hai local mandi ke beechwiye (middleman) par depend rehna. Wahan aapko ₹60-80/kg hi milenge. Apna profit margin badhane ke liye ye tareeke apnayen:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Direct B2B Tie-ups</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Apne shehar ke 4-5 local restaurants, dhabas, ya marriage halls ke manager se mil kar sample dein. Unhe regular supply ka rate ₹120-140/kg offer karein. Wo khushi se khareedenge kyunki unhe fresh produce chahiye hota hai.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Value Addition (Drying)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Agar market mein demand kam hai, toh mushroom ko solar dryer ya ghar par dhoop mein sukhha kar powder bana lein. Dried mushroom ka shelf life 6 mahine tak hoti hai aur rate ₹800-1000/kg tak ja sakta hai.</p>
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
        Yeh calculation 100-bag unit ke liye hai, jo saal mein 8-10 cycles complete karta hai. Pehla saal seekhne ka saal hota hai. 30-40% bags kharab ho sakte hain. Isliye Year 1 mein break-even hona bhi ek badi jeet hai.
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
              <td className="py-3 px-4">₹150/kg (avg direct sale)</td>
              <td className="py-3 px-4">₹90,000 - ₹1,05,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Spent Straw (waste as organic manure)</td>
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
              <td className="py-3 px-4">Raw Material (straw, spawn, chemicals per cycle)</td>
              <td className="py-3 px-4">8-10 cycles</td>
              <td className="py-3 px-4">₹12,000-15,000/cycle</td>
              <td className="py-3 px-4">₹96,000 - ₹1,50,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Labor (Self + 1 helper)</td>
              <td className="py-3 px-4">12 months</td>
              <td className="py-3 px-4">₹4,000-6,000/month</td>
              <td className="py-3 px-4">₹48,000 - ₹72,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Electricity, Water, Packaging</td>
              <td className="py-3 px-4">12 months</td>
              <td className="py-3 px-4">₹1,500-2,500/month</td>
              <td className="py-3 px-4">₹18,000 - ₹30,000</td>
            </tr>
            <tr className="bg-red-50 dark:bg-red-900/20">
              <td className="py-3 px-4 font-bold text-red-800 dark:text-red-300" colSpan={3}>Total Expenses</td>
              <td className="py-3 px-4 font-bold text-red-700 dark:text-red-400">₹1,62,000 - ₹2,52,000</td>
            </tr>
            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
              <td className="py-3 px-4 font-bold text-lg text-yellow-800 dark:text-yellow-300" colSpan={3}>Net Profit (Year 1)</td>
              <td className="py-3 px-4 font-bold text-lg text-yellow-800 dark:text-yellow-300">Break-even to ₹30,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Year 2-3 mein jab aapka process set ho jata hai aur aap waste kam kar lete hain, tab net profit margin 25-35% tak aaram se pahunch sakta hai.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        NHB Subsidy For Mushroom Farming: Process Aur Ground Reality
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        National Horticulture Board (NHB) aur State Horticulture Departments is sector ko boost dete hain. NHB ki subsidy back-ended capital investment scheme ke through aati hai — matlab pehle aap poora unit lagate hain, phir claim karte hain, tab paisa milta hai. General category kisano ke liye ye zyadatar 40% ke aas-paas rehta hai, SC/ST aur North-East ke liye percentage thoda zyada ho sakta hai state guidelines ke hisaab se.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek kadwi sachai yeh hai ki subsidy process mein 3-6 mahine lag sakte hain, aur paperwork thoda complex hota hai.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Mera strong suggestion hai: apna kaam subsidy ke intezaar mein na rokiye. Pehle apni pocket se chhota setup karein, bank se loan lein, aur application daal dein. Agar subsidy aa gayi, toh use future expansion mein lagayein. Apne zila ke Horticulture Officer se mil kar latest state-specific scheme ki jankari le lein.
      </p>

      <ExternalLinkButton
        url="https://nhb.gov.in/"
        label="NHB Official Portal - Subsidy Guidelines Check Karein"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Related Guides on KisanStatus
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mb-10 not-prose">
        <Link href="/articles/KisanCreditCardOnlineApply2026" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">KCC Loan 2026</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Mushroom farming ke liye kam byaj dar par loan kaise lein aur documents ki list.</p>
        </Link>
        <Link href="/articles/pm-fme-yojana-food-processing" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">PM FME Yojana</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Mushroom drying aur pickle banane ke liye 35% subsidy aur loan process.</p>
        </Link>
        <Link href="/articles/KisanTractorLoan2026" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">Tractor Loan 2026</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Agar aap apni kheti ko next level par le jana chahte hain, toh tractor loan aur finance ki details.</p>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions
      </h2>
      <FAQBlock faqs={mushroomKhetiFaqs} variant="inline" />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Final Decision: Kya Yeh Aapke Liye Sahi Hai?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Kam jagah (100-200 sq ft) available hai.</li>
            <li>• Daily 3-4 hours de sakte hain (monitoring zaroori hai).</li>
            <li>• ₹40,000-60,000 initial investment kar sakte hain.</li>
            <li>• Technical details seekhne ki ichha hai.</li>
            <li>• Urban ya semi-urban area mein hain (market access achha hai).</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Temperature control nahi kar sakte.</li>
            <li>• Daily monitoring nahi kar sakte (yeh 365 din ka kaam hai).</li>
            <li>• Market access nahi hai (door daraz gaon mein mushkil hai).</li>
            <li>• Technical knowledge seekhne ki ichha nahi hai.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Ek Cheez Ka Khayal Rakhein:</strong> Bina research ke kisi private vendor ki baaton mein aakar decision na lein jo "lakhon ka profit" ka wada karein. Pehle apne nazdeeki Krishi Vigyan Kendra (KVK) jayein. Wahan ke officers aapko exact subsidy, eligible vendors ki list, aur free practical training ke baare mein guide karenge. Uske baad kam se kam 3 vendors se quotation lein, unke purane installations dekhne jayein, aur phir hi apply karein.
      </p>

      <Image
        src="/images/kisanguides/packaged-products.webp"
        alt="Fresh and Dried Mushroom Products Ready for Market - Packaging and Branding"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Jankari Ke Official Sources
      </h2>
      <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400 not-prose">
        <li><strong>National Horticulture Board (NHB):</strong> Official guidelines for mushroom farming subsidies, training modules, and back-ended capital assistance.</li>
        <li><strong>Directorate of Mushroom Research (DMR), Solan:</strong> Government of India premier portal for scheme details, spawn quality standards, and application protocols.</li>
        <li><strong>Apne Zile Ka KVK:</strong> District-level practical training modules, hands-on mushroom cultivation support, and local vendor verification.</li>
        <li><strong>FSSAI Ka License:</strong> Regulatory guidelines for packaged mushroom, food safety licensing, and value-added product norms.</li>
      </ul>

      <AuthorBox modified={getArticleBySlug('mushroom-kheti-nhb-subsidy')!.modifiedTime} bioKey="MushroomKheti" />

      <GuideDisclaimer
        consult="horticulture officers, NHB officials, ya bank managers"
        modified={getArticleBySlug('mushroom-kheti-nhb-subsidy')!.modifiedTime}
      />
    </article>
  );
}
