import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function MushroomKheti() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/mushroom-farming/mushroom-kheti/hero.jpg" 
        alt="Oyster Mushroom Farming Setup in Dark Room - NHB Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Mushroom (Khumbi) Ki Kheti 2026: Kamre Mein Shuru Karein, Subsidy aur Real Profit Guide
      </h1>
      
      <p className="text-lg mb-4 italic">
        Himachal ke Solan district ko "Mushroom City of India" kehte hain. Wahan 1980 se hi mushroom farming hoti aa rahi hai. Par ab yeh kaam sirf pahadi ilaqon tak seemit nahi raha.
      </p>
      
      <p className="mb-6">
        Pichle saal maine Gorakhpur ke ek gaon mein ek aadmi se mulaqat ki. Uske ghar ke 2 kamre hain. Dono mein Oyster mushroom ugaata hai. Mahine ka ₹40,000-50,000 net profit nikalta hai. Khet nahi hai, sirf 2 kamre aur thodi mehnat.
      </p>
      
      <p className="mb-6">
        "Bhai, 6 mahine mein sab seekh liya. Pehle flush mein 30% kharab ho gaya. Par ab cycle samajh aa gayi hai," usne bataya. Yeh hai mushroom farming ki asliyat - kam jagah, kam investment, par technical samajh zaroori hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Mushroom Farming Kyun? Zameen Nahi, Sirf Kamra Chahiye
      </h2>
      
      <p className="mb-4">
        Kheti-baadi mein sabse badi problem zameen ki hoti hai. Par mushroom farming mein aapko sirf ek andhera kamra chahiye jahan temperature 20-30 degree Celsius aur humidity 70-85% maintain ho sake.
      </p>
      
      <p className="mb-4">
        Chhat, storeroom, basement, ya koi bhi khaali jagah kaam aa sakti hai. Bas 10x10 feet ka kamra bhi kaafi hai shuruwat ke liye. Yeh is business ko urban aur semi-urban areas mein bhi viable banata hai.
      </p>

      <p className="mb-6">
        Market demand ki baat karein toh mushroom ka consumption India mein pichle 5 saal mein 15-18% CAGR se badha hai. Urban areas mein log ab health-conscious ho gaye hain, aur mushroom protein ka achha source mana jata hai. Hotels, restaurants, aur catering businesses regular buyers hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kaunsi Variety Chunein? Oyster, Button, ya Milky - Reality Check
      </h2>
      
      <p className="mb-4">
        Naye farmers sabse badi galti yahi karte hain - seedha Button mushroom par jump kar lete hain kyunki market mein zyada bikta hai. Par Button mushroom ko controlled environment (AC, humidity control) chahiye, jiska kharcha bahut zyada hai.
      </p>

      <p className="mb-6">
        Agar aap pehli baar shuru kar rahe hain, toh Oyster mushroom se start lein. Yeh kam temperature variation mein bhi ugg jata hai, iski bimariyan kam hoti hain, aur spawn (beej) sasta milta hai.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Variety</th>
              <th className="py-2 px-4 border-b text-left">Temperature</th>
              <th className="py-2 px-4 border-b text-left">Cycle Time</th>
              <th className="py-2 px-4 border-b text-left">Market Rate</th>
              <th className="py-2 px-4 border-b text-left">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Oyster (Dhingri)</td>
              <td className="py-2 px-4 border-b">20-30°C</td>
              <td className="py-2 px-4 border-b">35-45 days</td>
              <td className="py-2 px-4 border-b">₹120-200/kg</td>
              <td className="py-2 px-4 border-b">Easy - Beginners ke liye</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Button (Safed)</td>
              <td className="py-2 px-4 border-b">14-18°C (AC zaroori)</td>
              <td className="py-2 px-4 border-b">45-60 days</td>
              <td className="py-2 px-4 border-b">₹180-300/kg</td>
              <td className="py-2 px-4 border-b">Hard - Technical knowledge chahiye</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Milky (Safed Dhingri)</td>
              <td className="py-2 px-4 border-b">28-35°C</td>
              <td className="py-2 px-4 border-b">40-50 days</td>
              <td className="py-2 px-4 border-b">₹150-220/kg</td>
              <td className="py-2 px-4 border-b">Medium - Garmiyon ke liye</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Shiitake</td>
              <td className="py-2 px-4 border-b">15-22°C</td>
              <td className="py-2 px-4 border-b">90-120 days</td>
              <td className="py-2 px-4 border-b">₹400-800/kg</td>
              <td className="py-2 px-4 border-b">Very Hard - Expert level</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6">
        Director of Mushroom Research (DMR), Solan ke senior scientists ke mutabiq, India mein total mushroom production ka 75%+ Oyster aur Milky varieties se aata hai kyunki yeh Indian climate ke liye suitable hain. Button mushroom ka share sirf 15-20% hai, mostly Himachal, Haryana, aur Punjab tak seemit.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kitna Paisa Lagega? 100-Bag Unit ka Realistic Budget
      </h2>
      
      <p className="mb-4">
        Yeh ek chhota setup hai jo beginners ke liye ideal hai. 100 bags se aap mahine ka 60-80 kg mushroom produce kar sakte hain (3-4 flushes mein).
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">100-Bag Oyster Mushroom Unit Setup (2026 Estimates)</h3>
        <ul className="space-y-2">
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
          <li className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>Total Investment Range:</span>
            <span className="text-green-700">₹42,000 - ₹66,000</span>
          </li>
        </ul>
      </div>

      <p className="mb-6">
        Yeh ek chhota number hai. Par isse expand karne ke liye aapko working capital chahiye hoga. <Link href="/kisan-credit-card-kcc" className="text-blue-600 hover:underline">Kisan Credit Card (KCC)</Link> se aap short-term working capital arrange kar sakte hain, jisme interest rate 4% (timely repayment par) tak milta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Sarkari Subsidy: NHB, PM FME, aur State Schemes
      </h2>
      
      <p className="mb-4">
        Mushroom farming ko promote karne ke liye sarkar ke paas kai schemes hain. Par har scheme ki apni eligibility hai, isliye pehle samajh lein ki aap kaunsi ke liye qualify karte hain.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-900">1. NHB (National Horticulture Board) Credit-Linked Back-End Subsidy:</strong>
            <p className="mt-1 text-gray-700">
              Yeh sabse popular scheme hai mushroom farmers ke liye. 1000 bags tak ke unit par aapko project cost ka 35% subsidy mil sakti hai (maximum ₹40 lakh tak). Yeh subsidy bank loan lene ke baad back-end par milti hai - matlab pehle loan lo, phir subsidy claim karo.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: NHB ki guidelines update hoti rehti hain. Latest subsidy % aur eligibility ke liye nazdeeki Horticulture Department office se confirm karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">2. PM FME Yojana (PM Formalisation of Micro Food Processing Enterprises):</strong>
            <p className="mt-1 text-gray-700">
              Agar aap mushroom ko process karke bechna chahte hain (dry mushroom, pickle, powder), toh <Link href="/pm-fme-yojana" className="text-blue-600 hover:underline">PM FME Yojana</Link> ke under 35% subsidy mil sakti hai (maximum ₹10 lakh). Yeh individual farmers aur SHGs ke liye hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: PM FME ki eligibility criteria specific hai. Detailed information ke liye official portal ya nazdeeki Industries Department se contact karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">3. PMEGP (Prime Minister's Employment Generation Programme):</strong>
            <p className="mt-1 text-gray-700">
              Chhote units ke liye yeh scheme best hai. 25-35% subsidy (rural areas mein zyada) mil sakti hai. Maximum project cost ₹25 lakh hai. KVIC ke through apply hota hai. <Link href="/pmegp-yojana" className="text-blue-600 hover:underline">PMEGP ki detailed guide</Link> yahan padhein.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: PMEGP ki guidelines periodically update hoti hain. Latest details ke liye KVIC office se confirm karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">4. State-Level Horticulture Schemes:</strong>
            <p className="mt-1 text-gray-700">
              Har state ki apni schemes hoti hain. Jaise UP mein 'Mukhyamantri Bagwani Yojana', Haryana mein 'Horticulture Mission', Maharashtra mein 'National Horticulture Mission' ke state components. Inme 40-50% subsidy milti hai chhote farmers ko.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: State schemes ke details vary karti hain. Apne zila ke Horticulture Officer se latest information lein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">5. ATMA (Agriculture Technology Management Agency):</strong>
            <p className="mt-1 text-gray-700">
              Har zila mein ATMA office hota hai jo farmers ko training aur subsidy dono deta hai. Mushroom farming par 50-75% subsidy mil sakti hai (state ke hisaab se). Training bhi free hoti hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: ATMA budget har saal allocate hota hai, isliye availability confirm karein.
            </p>
          </li>
        </ul>
      </div>

      <p className="mb-6">
        Agar aap NHB subsidy ke liye apply karna chahte hain, toh neeche diya gaya button aapko official portal par le jayega. Wahan aap latest guidelines aur application process dekh sakte hain:
      </p>

      <ExternalLinkButton 
        url="https://nhb.gov.in/" 
        label="NHB Official Portal - Subsidy Guidelines Check Karein" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Step-by-Step Process: Oyster Mushroom Kaise Ugayein?
      </h2>
      
      <p className="mb-4">
        Oyster mushroom ki farming 4 main steps mein hoti hai. Har step critical hai - ek galti poori crop kharab kar sakti hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 1: Chaff (Bhoosa) ki Preparation</h3>
          <p className="mt-2">
            Paddy straw ko 2-3 inch ke pieces mein kaat lein. Phir isko paani mein 16-18 ghante tak bhigo dein. Iske baad paani nikaal kar straw ko achhi tarah squeeze karein - moisture content 65-70% hona chahiye. Agar zyada paani hoga toh fungus nahi ugega, kam hoga toh straw sookh jayega.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 2: Sterilization (Sabse Important)</h3>
          <p className="mt-2">
            Bhige hue straw ko 60-90 minute tak steam se treat karein. Iske liye drum ya boiler use hota hai. Yeh step contamination ko khatam karta hai. Formalin (2%) aur Bavistin (0.1%) ka solution bhi use hota hai. Sterilization ke baad straw ko thanda hone dein (room temperature tak).
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 3: Spawning (Beej Dalna)</h3>
          <p className="mt-2">
            Thande hue straw ko polythene bags mein bharein. Har layer mein spawn (mushroom seed) daalein - typically 3-4 layers. Ek bag mein 5-7 kg straw aur 200-250 gram spawn lagta hai. Bags ko tight band kar dein aur unme 10-12 chhed (holes) kar dein ventilation ke liye.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 4: Incubation aur Fruiting</h3>
          <p className="mt-2">
            Bags ko andhere kamre mein shelving par rakhein. Temperature 22-28°C aur humidity 70-80% maintain karein. 18-22 din mein bags white mycelium se bhar jayenge (spawn run). Uske baad bags ko kholein aur fresh air, light, aur humidity provide karein. 7-10 din mein pehli flush (crop) taiyar ho jayegi.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Ek bag se typically 3-4 flushes aati hain, total 1-1.5 kg mushroom. 100 bags se aap mahine ka 60-80 kg produce kar sakte hain. Pehli flush sabse badi hoti hai, baad wali flushes chhoti hoti jati hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        1 Saal Ka Profit Calculation: Real Numbers
      </h2>
      
      <p className="mb-4">
        Yeh calculation 100-bag unit ke liye hai, jo saal mein 8-10 cycles complete karta hai (har cycle 45-50 din).
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Item</th>
              <th className="py-2 px-4 border-b text-left">Quantity</th>
              <th className="py-2 px-4 border-b text-left">Rate</th>
              <th className="py-2 px-4 border-b text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b font-semibold" colSpan={4}>Revenue (Annual)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Mushroom Production</td>
              <td className="py-2 px-4 border-b">600-700 kg/year</td>
              <td className="py-2 px-4 border-b">₹150/kg (avg)</td>
              <td className="py-2 px-4 border-b">₹90,000 - ₹1,05,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Spent Straw (waste as manure)</td>
              <td className="py-2 px-4 border-b">1-2 ton</td>
              <td className="py-2 px-4 border-b">₹5/kg</td>
              <td className="py-2 px-4 border-b">₹5,000 - ₹10,000</td>
            </tr>
            <tr className="bg-green-50">
              <td className="py-2 px-4 border-b font-bold">Total Revenue</td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b font-bold text-green-700">₹95,000 - ₹1,15,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold" colSpan={4}>Expenses (Annual)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Raw Material (straw, spawn, chemicals)</td>
              <td className="py-2 px-4 border-b">8-10 cycles</td>
              <td className="py-2 px-4 border-b">₹15,000-20,000/cycle</td>
              <td className="py-2 px-4 border-b">₹1,20,000 - ₹2,00,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Labor</td>
              <td className="py-2 px-4 border-b">12 months</td>
              <td className="py-2 px-4 border-b">₹5,000-8,000/month</td>
              <td className="py-2 px-4 border-b">₹60,000 - ₹96,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Electricity, Water, Misc</td>
              <td className="py-2 px-4 border-b">12 months</td>
              <td className="py-2 px-4 border-b">₹2,000-3,000/month</td>
              <td className="py-2 px-4 border-b">₹24,000 - ₹36,000</td>
            </tr>
            <tr className="bg-red-50">
              <td className="py-2 px-4 border-b font-bold">Total Expenses</td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b font-bold text-red-700">₹2,04,000 - ₹3,32,000</td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="py-2 px-4 border-b font-bold text-lg">Net Profit (Year 1)</td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b font-bold text-lg text-yellow-800">Loss ya Break-even</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Rukiye, ghabraiye mat. Yeh numbers dekh kar lag raha hoga ki loss ho raha hai. Par yahan ek important baat hai - <strong>pehla saal learning year hota hai</strong>. Mortality rate 20-30% hota hai, aur aap abhi scale nahi kar rahe.
      </p>

      <p className="mb-6">
        Jab aap 300-500 bags tak expand karte hain (Year 2-3), tab economies of scale kaam aati hain. 500 bags unit par annual net profit ₹2-3 lakh ho sakta hai. Aur agar aap value addition karte hain (dry mushroom, powder, pickle), toh margins 3-4x badh jate hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="mb-4">
        Mushroom farming mein risks bahut hain, aur yeh risks khet ki farming se alag hain. Yahan ek chhoti si galti poori crop kharab kar sakti hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Contamination (Sabse Bada Risk)</h3>
          <p className="mt-2">
            Green mold (Trichoderma), black mold, aur bacteria aapke mushroom ko khatam kar sakte hain. Agar sterilization proper nahi hua, ya kamre mein hygiene maintain nahi hui, toh 50-100% crop loss ho sakta hai. Ek baar contamination ho gaya, toh us bag ko turant remove karna padta hai, warna doosre bags mein bhi fail jayega.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Temperature aur Humidity Fluctuation</h3>
          <p className="mt-2">
            Mushroom bahut sensitive hota hai. Temperature 2-3 degree bhi upar-neeche hua toh growth ruk jati hai. Humidity kam hui toh mushroom sookh jata hai, zyada hui toh bacteria attack karte hain. Garmiyon mein North India mein temperature 40-45°C tak chala jata hai, jahan AC ya cooler zaroori ho jata hai. Iska electricity bill bahut aata hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Market Price Volatility</h3>
          <p className="mt-2">
            Mushroom ka shelf life bahut kam hota hai - sirf 2-3 din. Agar aap time par nahi bech paye, toh kharab ho jayega. Kuch areas mein oversupply ho jata hai aur rates ₹80-100/kg tak gir jate hain. Aapke paas cold storage nahi hai toh aap forced sale karenge.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Quality Spawn ki Availability</h3>
          <p className="mt-2">
            Achha spawn milna mushkil hota hai. Local market mein kharab quality ka spawn milta hai jisse germination rate kam hota hai. DMR Solan ya reputed labs se hi spawn khareedein. Saste spawn ke chakkar mein poori crop kharab ho sakti hai.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Training Kahan Se Lein? Yeh Skip Mat Karna
      </h2>
      
      <p className="mb-4">
        Mushroom farming mein technical knowledge bahut zaroori hai. Bina training ke aap contamination control, temperature management, aur harvesting techniques nahi seekh payenge. Result? Pehle hi cycle mein loss.
      </p>

      <p className="mb-4">
        5-7 din ki training lein. Cost ₹2,000-5,000 hoti hai (kuch jagah free bhi milti hai). Training mein aap seekhenge:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Spawn quality kaise pehchanein</li>
        <li>Sterilization techniques</li>
        <li>Spawning process</li>
        <li>Temperature aur humidity control</li>
        <li>Harvesting aur packaging</li>
        <li>Contamination management</li>
        <li>Post-harvest handling</li>
      </ul>

      <p className="mb-4">
        Best training centers:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Directorate of Mushroom Research (DMR), Solan (HP):</strong> Premier institute. Inke regular training programs hote hain. Website par check karein:
        </li>
      </ul>

      <ExternalLinkButton 
        url="https://dmr.icar.gov.in/" 
        label="DMR Solan - Training Programs Check Karein" 
      />

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Krishi Vigyan Kendra (KVK):</strong> Har district mein KVK mushroom farming training deta hai. Free ya nominal fee mein.
        </li>
        <li>
          <strong>State Agriculture Universities:</strong> Jaise PAU Ludhiana, GBPUAT Pantnagar, CSAUAT Kanpur. Wo certificate courses bhi karate hain.
        </li>
        <li>
          <strong>Private Training Centers:</strong> Kuch successful farmers paid training dete hain (₹5,000-10,000 for 5-7 days). Yeh practical hota hai.
        </li>
      </ul>

      <p className="mb-6">
        Training ke baad kam se kam 1 mahina kisi experienced farmer ke yahan kaam karein. Theoretical knowledge aur practical experience dono zaroori hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Waste Management: Spent Straw Se Extra Income
      </h2>
      
      <p className="mb-4">
        Mushroom farming ka ek bada fayda yeh hai ki waste bhi value create karta hai. Spent straw (jo mushroom nikalne ke baad bachta hai) bahut achha organic fertilizer hota hai.
      </p>

      <p className="mb-6">
        Aap isko 2 tarah se use kar sakte hain:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Direct khet mein use karein - nitrogen rich hota hai</li>
        <li>
          <Link href="/vermi-compost-business" className="text-blue-600 hover:underline">Vermi compost</Link> banakar bechein - ₹15-20/kg milta hai
        </li>
      </ul>

      <p className="mb-6">
        Ek 100-bag unit se saal mein 2-3 ton spent straw nikalta hai. Isko bech kar aap ₹10,000-15,000 extra kama sakte hain. Yeh aapke overall profitability ko improve karta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        Mushroom farming unke liye hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Kam jagah (100-200 sq ft) available hai</li>
        <li>Daily 3-4 hours de sakte hain (monitoring zaroori hai)</li>
        <li>₹50,000-1 lakh initial investment kar sakte hain</li>
        <li>Technical details seekhne ki ichha hai</li>
        <li>Urban ya semi-urban area mein hain (market access achha hai)</li>
        <li>Women entrepreneurs (yeh business women ke liye bahut suitable hai)</li>
      </ul>

      <p className="mb-4">
        Mushroom farming unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Temperature control nahi kar sakte (AC/coolers afford nahi kar sakte)</li>
        <li>Daily monitoring nahi kar sakte (yeh 365 din ka kaam hai)</li>
        <li>Market access nahi hai (door daraz gaon mein mushkil hai)</li>
        <li>Technical knowledge seekhne ki ichha nahi hai</li>
      </ul>

      <p className="mb-6">
        Agar aap seriously interested hain, toh pehle 100 bags se start karein. Pehle 2-3 cycles mein seekhein, phir expand karein. Direct 500-1000 bags se start mat karein - risk bahut hai.
      </p>

      <p className="mb-6">
        Subsidy ka fayda zaroor uthayein, par subsidy ke bhi bhi viable hai yeh business. Apni planning subsidy ke bina karein. Agar mil gayi, toh bonus samjho.
      </p>

      <p className="mb-6">
        Ek aur important point: <Link href="/organic-farming-guide" className="text-blue-600 hover:underline">organic farming</Link> ka angle bhi consider karein. Organic mushroom ka market rate 20-30% zyada milta hai. Agar aap chemical-free cultivation kar sakte hain, toh premium market target karein.
      </p>

      <p className="mb-6">
        Agar aap seriously interested hain, toh pehle apne local successful farmer se milein. Unse baat karein, unke challenges samjhein. Phir training lein. Phir chhote scale par start karein.
      </p>

      <p className="mb-6 italic text-gray-600">
        Disclaimer: Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (horticulture officers, agriculture officers) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein.
      </p>
    </article>
  );
}