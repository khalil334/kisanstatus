import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function PMatsyaSampada() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/fish-farming/pm-matsya/hero.jpg" 
        alt="Fish Pond with Rohu and Catla - PM Matsya Sampada Yojana Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        PM Matsya Sampada Yojana 2026: Machli Palan par 60% Subsidy, Biofloc Technology, aur Real Profit
      </h1>
      
      <p className="text-lg mb-4 italic">
        Andhra Pradesh ke West Godavari district mein ek 45 saal ka kisan mila. Uske paas 2 acre zameen thi jo neechi thi - paani bhara rehta tha. Kheti nahi hoti thi. 2021 mein usne PM Matsya Sampada Yojana ke under 4 ponds banwaye. Aaj saal ka ₹15-18 lakh ka turnover hai.
      </p>
      
      <p className="mb-6">
        "Bhai, pehle saal mein 2 ponds mein oxygen kam ho gaya, 30% machliyan mar gayi. ₹80,000 ka loss hua. Par doosre saal se sab control mein aa gaya. Ab saal ka ₹6-7 lakh net profit hota hai," usne bataya.
      </p>
      
      <p className="mb-6">
        Yeh hai fish farming ki asliyat - paani ki quality, oxygen level, feed management - sab critical hai. Ek galti poori crop khatam kar sakti hai. Par jab sab sahi chala, toh returns bahut achhe hain. Sarkar ki PM Matsya Sampada Yojana (PMMSY) isko aur bhi viable bana deti hai 40-60% subsidy ke saath.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Fish Farming Kyun? India Ka Fisheries Sector Boom Par Hai
      </h2>
      
      <p className="mb-4">
        India duniya mein machli production mein teesre number par hai. Par domestic consumption abhi bhi demand se kam hai. Per capita fish consumption India mein sirf 5-6 kg/year hai, jabki global average 20 kg hai. Matlab abhi bhi bahut growth potential hai.
      </p>
      
      <p className="mb-4">
        Export ki baat karein toh India saal ka ₹50,000+ crore ka seafood export karta hai. Shrimp (jhinga) sabse zyada export hota hai - USA, Europe, Japan mein. Par domestic market bhi tez grow kar raha hai - urban areas mein log ab protein-rich diet par focus kar rahe hain.
      </p>

      <p className="mb-6">
        Ek aur advantage - fish farming ko agriculture activity mana jata hai, isliye ispar income tax nahi lagta (agar individual farmer hain). Yeh ek bada financial benefit hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kaunsi Machli Paalein? Traditional Ponds vs Biofloc vs RAS - Reality Check
      </h2>
      
      <p className="mb-4">
        Fish farming mein 3 main technologies hain. Har ek ki apni cost, complexity, aur returns hain. Naye farmers aksar confuse ho jaate hain ki kaunsa choose karein.
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
        Central Institute of Freshwater Aquaculture (CIFA), Bhubaneswar ke scientists ke mutabiq, agar aap pehli baar shuru kar rahe hain toh traditional pond se start lein. Isme risk kam hai, technical complexity kam hai, aur PMMSY subsidy bhi ispar zyada milti hai.
      </p>

      <p className="mb-6">
        Biofloc technology tab choose karein jab aapke paas zameen kam hai par investment capacity zyada hai. Urban areas mein yeh popular ho rahi hai kyunki kam space mein zyada production hota hai. Par isme electricity cost zyada hai (aerators 24x7 chalte hain), aur technical knowledge zaroori hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kitna Paisa Lagega? 1 Acre Pond ka Realistic Budget
      </h2>
      
      <p className="mb-4">
        Yeh ek 1 acre traditional pond ka budget hai, jisme IMC (Indian Major Carps - Rohu, Catla, Mrigal) pale jayengi.
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
        Ek important baat - composite fish culture (IMC) mein 3 species ek saath pale jati hain kyunki inki feeding habits alag hain. Catla surface feeder hai, Rohu column feeder, Mrigal bottom feeder. Isse pond ki saari space utilize hoti hai aur production maximize hota hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        3 Saal Ka Profit Calculation: Real Numbers
      </h2>
      
      <p className="mb-4">
        Yeh calculation 1 acre traditional pond ke liye hai, jisme IMC (Rohu, Catla, Mrigal) pale jati hain.
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

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="mb-4">
        Fish farming sunne mein simple lagti hai, par risks bahut hain. Yeh woh cheezein hain jo aapko pata honi chahiye:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Disease Outbreak (Sabse Bada Risk)</h3>
          <p className="mt-2">
            Bacterial infections (Aeromonas, Vibrio), fungal infections, aur parasitic infections poori crop khatam kar sakte hain. 2022 mein Andhra Pradesh mein shrimp farms mein White Spot Syndrome se 40-50% crop loss hua tha. Biosecurity measures zaroori hain - pond disinfection, healthy fingerlings, aur water quality management.
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
            Heavy rain mein pond overflow ho sakta hai - machliyan bah nikalti hain. Ya phir drought mein paani kam ho jata hai - oxygen aur temperature problems aati hain. 2023 mein Assam mein floods se kai fish farms khatam ho gaye the. Location selection aur pond design bahut zaroori hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Feed Cost Volatility</h3>
          <p className="mt-2">
            Fish feed ka cost total expense ka 60-70% hota hai. Agar soyabean ya fish meal ke prices badh gaye, toh feed mehnga ho jata hai. 2022 mein feed prices 30-40% badh gaye the. Apna feed mill lagana ek option hai, par usme bhi investment lagti hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Market Price Fluctuation</h3>
          <p className="mt-2">
            Festival season (Durga Puja, Diwali) mein rates achhe milte hain. Par off-season mein rates 20-30% gir jate hain. Agar aapke paas cold storage nahi hai, toh forced sale karni padti hai. <Link href="/pm-kisan-sampada-yojana" className="text-blue-600 hover:underline">PM Kisan Sampada Yojana</Link> ke under cold storage par subsidy milti hai.
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
        Fish farming mein technical knowledge bahut zaroori hai. Bina training ke aap water quality management, disease diagnosis, aur feeding techniques nahi seekh payenge. Result? Pehle hi cycle mein loss.
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

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        Fish farming unke liye hai jo:
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
        Fish farming unke liye nahi hai jo:
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
        Ek aur important point: <Link href="/fasal-bima-yojana" className="text-blue-600 hover:underline">Fasal Bima Yojana (PMFBY)</Link> ke under ab fisheries ko bhi cover kiya ja raha hai kuch states mein. Apne zila ke fisheries office se pata karein ki aapke area mein insurance available hai ya nahi. Natural calamities mein yeh bahut kaam aata hai.
      </p>

      <p className="mb-6">
        Agar aap seriously interested hain, toh pehle apne local successful fish farmer se milein. Unse baat karein, unke challenges samjhein. Phir training lein. Phir chhote scale par start karein. Fish farming ek profitable business hai - agar sahi se kiya jaye, toh life-long income de sakta hai.
      </p>

      <p className="mb-6 italic text-gray-600">
        Disclaimer: Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (fisheries officers, aquaculture experts) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein.
      </p>
    </article>
  );
}