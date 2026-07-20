'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GovLink } from '@/components/ArticleShared';

export default function DripSprinkler() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <Image 
        src="/images/kisanguides/drip-sprinkler-hero.webp" 
        alt="Drip Irrigation System in Agricultural Field - PMKSY Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-8 shadow-md w-full object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Drip aur Sprinkler Irrigation Subsidy 2026: Paani Bachao, 75% Tak Subsidy Paao (Ground Reality Guide)
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600 not-prose">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Seedhi baat:</strong> Micro-irrigation ab koi "luxury" nahi, balki kheti bachane ki majboori ban chuka hai. PM Krishi Sinchayee Yojana (PMKSY) ke tahat 55% se 75% tak subsidy available hai, lekin iska sahi faayda tabhi milega jab aap system ko sirf lagwa kar chhod na dein, balki uski maintenance aur sahi use karna seekhein. Yahan koi hawa mein nahi, sirf khet ke asli numbers aur facts hain.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Bharat mein groundwater level tezi se gir raha hai, aur bijli ke tariff lagatar badh rahe hain. Aise mein flood irrigation (khal se paani chhodna) ek tarah ka financial suicide hai. Micro-irrigation systems — Drip aur Sprinkler — ne kisaanon ke liye game badal diya hai. Paani ki bachat, bijli ke bill mein kami, khaad (fertilizer) ki efficiency, aur sabse badhkar production mein 20-30% tak ka izafa.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Ek Real Example:</strong> Maharashtra ke ek kisan ke paas 10 acre anar (pomegranate) ka bagicha tha. Pehle flood irrigation mein mahine ka ₹15,000+ ka paani aur bijli ka kharcha aata tha, aur khaad bhi zyada lagti thi. Drip installation ke baad, paani ka kharcha 60% kam ho gaya. Fertigation (paani ke saath khaad) se fertilizer ka kharcha 30% bacha. 60% subsidy milne ki wajah se, unka poora investment sirf 18 mahine mein recover ho gaya. Uske baad har saal ka pure profit hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Drip aur Sprinkler Mein Asal Farak Kya Hai? Kaunsa Chunein?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dono systems ka kaam karne ka tarika alag hai, aur dono alag crops ke liye bane hain. Market mein aksar vendors dono mein se koi ek zabardasti thoopne ki koshish karte hain. Confusion door karte hain:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Feature</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Drip Irrigation</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Sprinkler Irrigation</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Kaam karne ka tarika</td>
              <td className="py-3 px-4">Paani seedha plant ki jad (root zone) mein boond-boond girata hai.</td>
              <td className="py-3 px-4">Paani fuhara (spray) ban kar upar se girata hai, bilkul baarish ki tarah.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Paani ki Bachat</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">60% - 70%</td>
              <td className="py-3 px-4">30% - 40%</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Best Crops</td>
              <td className="py-3 px-4">Row crops: Ganna, Cotton, Sabziyan, Fruits (Anar, Angur, Kela, Aam).</td>
              <td className="py-3 px-4">Close-growing crops: Gehu, Makka, Soyabean, Moongfali, Chara (Fodder).</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Andazan Cost (per acre)</td>
              <td className="py-3 px-4">₹25,000 - ₹50,000</td>
              <td className="py-3 px-4">₹15,000 - ₹30,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Fertigation (Khaad ke saath)</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Excellent (100% efficient)</td>
              <td className="py-3 px-4">Limited (Foliar spray ke roop mein)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Uneven/Zameen par</td>
              <td className="py-3 px-4">Bahut achha (Pressure compensated drippers ke saath).</td>
              <td className="py-3 px-4">Achha (Lekin hawa zyada ho toh paani udh sakta hai).</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Maintenance</td>
              <td className="py-3 px-4">Moderate (Drippers block ho sakte hain, filter saaf karna padta hai).</td>
              <td className="py-3 px-4">Low (System simple hai, bas nozzle check karna hota hai).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Simple Rule:</strong> Agar aapki fasal ki row (qataar) clear hai aur paani seedha jad tak pahunchana hai (jaise fruits ya sabzi), toh <strong>Drip</strong> hi best hai. Agar aap gehu, makka ya chara ugate hain jahan poori zameen par paani chahiye, toh <strong>Sprinkler</strong> lagwayein.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Final decision lene se pehle apne nazdeeki <strong>Krishi Vigyan Kendra (KVK)</strong> ke expert se zameen ki mitti aur crop pattern ke baare mein zaroor consult karein. Zameen ki quality aur nutrient level samajhne ke liye pehle se apna <Link href="/articles/farming/soil-health-card-complete-guide-2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Soil Health Card</Link> banwa kar rakhein, isse aapko sahi fertilizer schedule banane mein madad milegi.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        PMKSY Subsidy: Kitni Milti Hai? (Complete Breakdown)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) ke under "Per Drop More Crop" component hai, jo micro-irrigation ko promote karta hai. Subsidy ka structure state ke hisaab se thoda vary karta hai, lekin central guidelines kuch is tarah hain:
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-200">Subsidy Structure (2026 Guidelines):</h3>
        <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Small/Marginal Farmers (5 hectare tak):</span>
            <span className="font-bold text-blue-700 dark:text-blue-300">55% - 75% subsidy</span>
          </li>
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Other Farmers (&gt;5 hectare):</span>
            <span className="font-bold text-blue-700 dark:text-blue-300">45% - 55% subsidy</span>
          </li>
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>SC/ST/Women Farmers:</span>
            <span className="font-bold text-blue-700 dark:text-blue-300">Kai states mein 5% - 10% extra top-up</span>
          </li>
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Hilly/NE States:</span>
            <span className="font-bold text-blue-700 dark:text-blue-300">75% - 90% subsidy</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Maximum Subsidy Limit:</span>
            <span className="font-bold text-blue-700 dark:text-blue-300">State notified rates ke hisaab se (usually ₹50K-₹1L per hectare)</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Investment ka Hisab (Example):</strong> Maan lijiye aap ek small farmer hain aur aapke paas 2 acre zameen hai. Aap drip irrigation lagwate hain jiska total notified cost ₹40,000 per acre hai. 
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li>Total Project Cost: ₹80,000 (2 acre)</li>
        <li>Sarkari Subsidy (60% maan kar): ₹48,000</li>
        <li>Aapka Out-of-Pocket Kharcha: ₹32,000</li>
        <li><strong>ROI Period:</strong> 1-2 saal (sirf paani, bijli aur khaad ki bachat se)</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar aapke paas ₹32,000 cash nahi hai, toh aap <Link href="/articles/loan/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC)</Link> ke through bahut kam byaaj par loan le sakte hain, jiski EMI aapki monthly bachat se aaram se cover ho jayegi.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        System ke Main Components: Kya Khareed Rahe Hain, Pata Honi Chahiye
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Vendor aapse baat kare toh aapko pata hona chahiye ki aapke paise kahan lag rahe hain. Ek standard drip system mein ye cheezein shamil hoti hain:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Water Source & Pump:</strong> Borewell, canal, ya tank se paani kheenchne ke liye.</li>
        <li><strong>Filtration Unit (Sabse Zaroori):</strong> Sand media filter ya disc filter. Agar paani mein gandagi hai aur filter achha nahi hai, toh poora system 6 mahine mein jam (choke) ho jayega.</li>
        <li><strong>Fertigation Tank/Venturi:</strong> Jisme aap paani ke saath ghulansheel khaad (water-soluble fertilizer) milate hain.</li>
        <li><strong>Mainline & Sub-main Pipes:</strong> Paani ko khet ke alag-alag hisson tak le jaane wali moti pipes (usually PVC ya HDPE).</li>
        <li><strong>Laterals & Drippers:</strong> Patli pipes jo row ke saath bichhti hain. Inme har thodi door par drippers (emitters) lage hote hain jo paani drop karte hain. Hamesha <em>Pressure Compensated (PC)</em> drippers maangein, taaki zameen ke dhalaan (slope) par bhi sabhi paudhon ko barabar paani mile.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Application Process: Step-by-Step (Bina Agent Ke)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Process thoda detailed hai, lekin agar aap khud follow karein toh bilkul seedha hai. Kisi "consultant" ko 10-15% commission dene ki bilkul zaroorat nahi hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Eligibility aur Documents Taiyar Karein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Aapke paas zameen ke kagaz (7/12, Khatauni, ya valid lease), Aadhaar, Bank Passbook, aur borewell ka registration (agar applicable ho) hona chahiye. Koi agricultural loan default nahi hona chahiye.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">State Portal Par Registration</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Apne state ke Agriculture Department ki official micro-irrigation website par jaakar registration karein. Har state ka apna portal hai (jaise Maharashtra ka 'Jalyukt Shivar' ya Gujarat ka 'MIS'). Exact URL apne zila office se confirm karein.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Site Survey aur Estimation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Application ke baad, department ka officer ya empanelled vendor aapke khet ka survey karega. Wo zameen ka size, shape, water source capacity, aur crop pattern dekh kar ek official "Estimate" banayega.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Quotation Approval aur Installation</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Estimate approve hone ke baad, aapko apna hissa (subsidy ke baad ka amount) bank mein jama karna hoga ya loan arrange karna hoga. Uske baad vendor 3-7 din mein system install kar dega.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Verification aur Subsidy Release</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Installation ke baad, department dobara verify karega ki system sach mein laga hai aur chal raha hai. Uske baad subsidy ki raashi seedhe aapke bank account mein (DBT) ya vendor ko directly transfer ho jayegi.</p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Poora process 2 se 4 mahine le sakta hai. Isliye hamesha <strong>season shuru hone se kam se kam 3 mahine pehle</strong> apply karna shuru kar dein.
      </p>

      <GovLink
        href="https://pmksy.gov.in/"
        label="PMKSY Official Portal"
        guide="State-wise Guidelines Check Karein"
        portalName="pmksy.gov.in"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Real Risks aur Challenges (Jo Vendor Nahi Batata)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Micro-irrigation sunne mein perfect lagta hai, lekin ground level par kuch challenges hote hain jinse aapko pehle se tayyar rehna chahiye:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">1. Dripper Blockage (Sabse Common Problem)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Agar paani mein salt (khara pan) ya ret (sand) hai, toh drippers ke chhote chhed jam sakte hain. Har 15-30 din mein <strong>acid flushing</strong> karni padti hai (₹500-₹1,000 per acre). Agar isse ignore kiya, toh 20-30% drippers kharab ho jayenge aur paudhe sookh jayenge.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">2. Vendor Quality Issues</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Kuch vendors sasta material use karte hain taaki unka margin badhe. Pipes patli hoti hain, aur drippers 1-2 saal mein kharab ho jate hain. <strong>Solution:</strong> Hamesha BIS certified (ISI mark) wala saaman hi maangein aur written mein kam se kam 5 saal ki warranty lein.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">3. Technical Knowledge ki Kami</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Drip chalana sirf valve kholna nahi hai. Pressure kitna rakhna hai, kab kitna paani dena hai, aur fertigation kaise karni hai — ye seekhna padta hai. Bina training ke system properly kaam nahi karta. Apne nazdeeki KVK se free training zaroor lein.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">4. Crop Change Flexibility</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Drip system specific crop ki row spacing ke hisaab se design hota hai. Agar aap aaj ganna laga rahe hain aur kal soyabean lagana chahte hain, toh purana drip kaam nahi aayega. Hamesha apne long-term crop rotation plan ke hisaab se hi design karwayein.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Maintenance: System Ko 10-15 Saal Kaise Chalayein?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Micro-irrigation system ki proper maintenance hi iski lambi umar ki kunji hai. Maintenance cost lagbhag ₹1,000-₹2,000 per acre per year aati hai, jo ki system ko badalne ke muqable bahut kam hai.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Daily/Weekly Routine:</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Filter ko roz check karein aur pressure gauge dekhein.</li>
              <li>✓ Hafte mein ek baar filter ki backwashing (safai) karein.</li>
              <li>✓ Laterals ke end caps khol kar 2 minute tak paani bahne dein (flushing) taaki andar ki gandagi nikal jaye.</li>
              <li>✓ Kisi bhi toote hue pipe ya leaking dripper ko turant replace karein.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Monthly/Annual Routine:</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Mahine mein ek baar acid flushing karein (agar paani khara hai) taaki calcium deposits saaf hon.</li>
              <li>✓ Saal ke ant mein poore system ko high pressure se flush karein.</li>
              <li>✓ Worn-out parts (jaise purane gaskets ya valves) ko replace karein.</li>
              <li>✓ Winter mein system ko puri tarah khali kar dein taaki paani jam kar pipes na phade.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Additional Schemes: Aur Kya Fayda Utha Sakte Hain?
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PMKSY ke alawa bhi kai schemes hain jo micro-irrigation ko aur bhi zyada profitable bana deti hain:
      </p>

      <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
        <li>
          <strong className="text-gray-900 dark:text-gray-100">Solar Pump Integration:</strong> Agar aap borewell par solar pump lagate hain, toh <Link href="/articles/farming/PmKusumYojanaSolarSubsidy2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM-KUSUM scheme</Link> ke tahat aapko 60% se 90% tak subsidy mil sakti hai. Drip + Solar = Bijli ka bill bilkul zero. Yeh combination long-term mein sabse zyada paisa bachata hai.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-100">State-Level Top-up Schemes:</strong> Kai states (jaise Gujarat, Maharashtra, Karnataka) PMKSY ke upar apni taraf se additional 10-20% subsidy deti hain. Apne zila ke Agriculture Department se latest "Micro-Irrigation Top-up" scheme ke baare mein zaroor puchen.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-100">Fertigation Training:</strong> Drip ke saath fertigation seekhna bahut zaroori hai. Khaad ko paani mein ghool kar dene se 25-35% tak khaad ki bachat hoti hai. KVKs iski free training dete hain. Fertilizer efficiency aur badhane ke liye aap <Link href="/articles/farming/NanoDap500mlPriceInIndia2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Nano DAP</Link> jaise advanced products ka bhi upyog kar sakte hain.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Final Decision: Kya Yeh Aapke Liye Sahi Hai?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Aapke ilake mein paani ki kami (water scarcity) hai.</li>
            <li>• Aapka bijli ka bill bahut zyada aata hai.</li>
            <li>• Aap high-value crops (fruits, vegetables, sugarcane) ugao.</li>
            <li>• Aap ₹20,000-₹40,000 per acre invest kar sakte hain (subsidy ke baad).</li>
            <li>• Aap thodi technical knowledge seekhne aur regular maintenance karne ke liye taiyar hain.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Aap low-value crops ugao jahan ROI 5+ saal mein aaye.</li>
            <li>• Aap har 6 mahine mein bilkul alag tarah ki crop lagate hain (crop rotation bahut extreme ho).</li>
            <li>• Aapke paas system ki chhoti-moti maintenance karne ka time ya interest nahi hai.</li>
            <li>• Aapke ilake mein canal ka paani bilkul free aur abundant hai (phir bhi long-term sochna chahiye).</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Meri aakhri salah:</strong> Bina research ke kisi vendor ki baaton mein aakar decision na lein. Pehle apne zila ke Agriculture Department jayein. Wahan ke officers aapko exact subsidy, eligible vendors ki list, aur crop-wise water requirement guide denge. Uske baad kam se kam 3 vendors se quotation lein, unke purane installations dekhne jayein, aur phir hi apply karein.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Micro-irrigation ek game-changer hai. Paani bachana, bijli bachana, khaad bachana, aur production badhana — ye sab ek saath mumkin hai. Sahi se use kiya jaye toh 2-3 saal mein investment nikal jata hai, aur uske baad har saal ka extra profit hai.
      </p>

      {/* Related Articles Section */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">💧</span>
          Related Articles on KisanStatus
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Irrigation aur farming subsidies se related aur bhi helpful guides:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link 
            href="/articles/farming/custom-hiring-centre-chc-portal" 
            className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🚜</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Custom Hiring Centre</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Machinery rental business aur 50% subsidy</div>
            </div>
          </Link>

          <Link 
            href="/articles/farming/pm-matsya-sampada-yojana-fish-farming" 
            className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🐟</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PM Matsya Sampada</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Fisheries aur biofloc par 60% tak subsidy</div>
            </div>
          </Link>

          <Link 
            href="/articles/farming/PmfbyCropInsurance2026"
            className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🛡️</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PMFBY Fasal Bima Yojana</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Fasal kharab hone par pura nuksan cover</div>
            </div>
          </Link>

          <Link 
            href="/articles/farming/silage-making-business-guide"
            className="flex items-start gap-3 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-4 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🌾</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Silage Making Business</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Chara conservation se 40% tak bachat</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article sirf jankari aur guidance ke liye hai. Machinery ke daam, subsidy ke pratishat, aur sarkari rules samay-samay par aur state ke hisaab se badal sakte hain. Koi bhi paisa invest karne se pehle apne nazdeeki Krishi Vibhag (Agriculture Department) office se latest guidelines aur empanelled vendors ki list zaroor confirm karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}