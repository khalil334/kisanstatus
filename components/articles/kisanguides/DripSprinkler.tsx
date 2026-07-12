import Image from 'next/image';
import Link from 'next/link';
import { GovLink } from '@/components/ArticleShared';

export default function DripSprinkler() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/kisanguides/drip-sprinkler-hero.webp" 
        alt="Drip Irrigation System in Agricultural Field - PMKSY Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Drip aur Sprinkler Irrigation Subsidy 2026: Paani Bachao, 75% Tak Subsidy Paao - Complete Guide
      </h1>
      
      <p className="text-lg mb-4">
        Micro-irrigation systems - drip aur sprinkler - kisaanon ke liye game-changer ban gaye hain. Paani ki bachat, bijli ka bill kam, khaad ki efficiency, aur production mein izafa. PM Krishi Sinchayee Yojana (PMKSY) ke tehat 55-75% subsidy available hai.
      </p>
      
      <p className="mb-6">
        <strong>Illustrative Example:</strong> Maan lijiye ek farmer ke paas 10-15 acre zameen hai jahan fruits ya vegetables ugaye jaate hain. Pehle flood irrigation use hota tha - paani ka bill aur bijli ka kharcha kaafi zyada. Drip installation ke baad paani ka bill 50-60% kam ho gaya. Khaad ka kharcha bhi 25-30% tak kam (fertigation se). Production mein bhi 20-25% tak izafa dekha gaya. 55-60% subsidy milne ki wajah se investment 2-3 saal mein recover ho gaya.
      </p>

      <Image 
        src="/images/kisanguides/drip-vs-sprinkler-comparison.webp" 
        alt="Comparison between Drip and Sprinkler Irrigation Systems" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Drip aur Sprinkler Mein Kya Farak Hai? Kaunsa Chunein?
      </h2>
      
      <p className="mb-4">
        Dono systems alag hain. Alag crops ke liye suitable hain. Confusion door karte hain.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Feature</th>
              <th className="py-2 px-4 border-b text-left">Drip Irrigation</th>
              <th className="py-2 px-4 border-b text-left">Sprinkler Irrigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">How it Works</td>
              <td className="py-2 px-4 border-b">Paani seedha plant ki jad (root) mein boond-boond girata hai</td>
              <td className="py-2 px-4 border-b">Paani fuhara (spray) ban kar girata hai, baarish jaisa</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Water Saving</td>
              <td className="py-2 px-4 border-b">60-70%</td>
              <td className="py-2 px-4 border-b">30-40%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Best For Crops</td>
              <td className="py-2 px-4 border-b">Row crops: Sugarcane, Cotton, Vegetables, Fruits (anar, angur, kela)</td>
              <td className="py-2 px-4 border-b">Close-growing crops: Wheat, Maize, Soybean, Groundnut, Fodder</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Cost per Acre</td>
              <td className="py-2 px-4 border-b">₹25,000 - ₹50,000</td>
              <td className="py-2 px-4 border-b">₹15,000 - ₹30,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Fertigation Possible?</td>
              <td className="py-2 px-4 border-b">Yes - khaad paani mein mila kar de sakte hain</td>
              <td className="py-2 px-4 border-b">Limited - kuch cases mein possible</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Uneven Land Par</td>
              <td className="py-2 px-4 border-b">Works well - pressure compensated drippers</td>
              <td className="py-2 px-4 border-b">Works well - paani evenly distribute hota hai</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Maintenance</td>
              <td className="py-2 px-4 border-b">Moderate - drippers block ho sakte hain</td>
              <td className="py-2 px-4 border-b">Low - simple system</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Simple rule hai. Row crops (ganna, cotton, sabziyan, fruits) ke liye drip. Close-growing crops (gehu, makka, soyabean) ke liye sprinkler.
      </p>

      <p className="mb-6">
        Apne area ke KVK officers se consult karein. Wo specific crop aur soil type ke liye best option bata sakte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        PMKSY Subsidy: Kitni Milti Hai? Complete Breakdown
      </h2>
      
      <p className="mb-4">
        Pradhan Mantri Krishi Sinchayee Yojana ke under "Per Drop More Crop" component hai. Micro-irrigation par subsidy milti hai. Kuch states mein drip aur sprinkler ki maximum subsidy % alag ho sakti hai - drip ke liye thodi zyada, isliye apne state ki system-wise rates zaroor check karein.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3">Subsidy Structure (2026):</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Small/Marginal Farmers (5 hectare tak):</span>
            <span className="font-semibold">55-75% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>{'Other Farmers (>5 hectare):'}</span>
            <span className="font-semibold">45-55% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>SC/ST/Women Farmers:</span>
            <span className="font-semibold">Kai states mein priority ya additional benefit (zila Agriculture Dept se confirm karein)</span>
          </li>
          <li className="flex justify-between">
            <span>Hilly/NE States:</span>
            <span className="font-semibold">75-90% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>Maximum Subsidy Limit:</span>
            <span className="font-semibold">State aur crop type ke hisaab se alag (notified rates check karein)</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Example dekhte hain. Small farmer hain, 2 acre zameen. Drip irrigation lagwate hain jiska cost ₹40,000/acre hai. Investment ke liye aap <Link href="/kisanguides/kisan-credit-card-online-apply-2026" className="text-blue-600 hover:underline">Kisan Credit Card</Link> ya <Link href="/kisanguides/kisan-rin-kaha-se-le-2026" className="text-blue-600 hover:underline">bank loan</Link> le sakte hain.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Total cost: ₹80,000 (2 acre)</li>
        <li>Subsidy (60%): ₹48,000</li>
        <li>Aapka out-of-pocket: ₹32,000</li>
        <li>ROI period: 1-2 saal (paani aur khaad ki bachat se)</li>
      </ul>

      <p className="mb-6">
        State-wise subsidy percentages alag hote hain. Apne zila ke Agriculture Department portal par jaakar exact figures check karein. Har state ki scheme thodi different hoti hai.
      </p>

      <Image 
        src="/images/kisanguides/irrigation-subsidy-calculation.webp" 
        alt="Irrigation Subsidy Calculation and ROI Analysis Chart" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Real Benefits: Kitna Bachat Hoti Hai?
      </h2>
      
      <p className="mb-4">
        Industry observations ke mutabik yeh benefits milte hain. Real numbers dekhte hain.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-amber-900 italic">
          <strong>Note:</strong> Ye figures illustrative hain aur area, crop type, aur management ke hisaab se vary kar sakte hain. Apne local conditions ka assessment zaroor karein.
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Benefit</th>
              <th className="py-2 px-4 border-b text-left">Drip Irrigation</th>
              <th className="py-2 px-4 border-b text-left">Sprinkler Irrigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Water Saving</td>
              <td className="py-2 px-4 border-b">60-70%</td>
              <td className="py-2 px-4 border-b">30-40%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Electricity Bill Reduction</td>
              <td className="py-2 px-4 border-b">50-60%</td>
              <td className="py-2 px-4 border-b">25-35%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Fertilizer Saving (Fertigation)</td>
              <td className="py-2 px-4 border-b">25-35%</td>
              <td className="py-2 px-4 border-b">10-15%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Yield Increase</td>
              <td className="py-2 px-4 border-b">20-30%</td>
              <td className="py-2 px-4 border-b">15-25%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Labor Cost Reduction</td>
              <td className="py-2 px-4 border-b">40-50%</td>
              <td className="py-2 px-4 border-b">30-40%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">ROI Period</td>
              <td className="py-2 px-4 border-b">1-3 years</td>
              <td className="py-2 px-4 border-b">2-4 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        <strong>Illustrative Example:</strong> Ek typical 5 acre fruit orchard par drip lagane ka case dekhte hain. Pehle flood irrigation mein annual cost ₹6-8 lakh hoti thi (paani, bijli, khaad, labor mila kar). Drip ke baad yeh cost ₹3-4 lakh reh gayi. Annual saving ₹2.5-4 lakh. Drip ka cost ₹2-2.5 lakh (after subsidy). Investment 6-12 mahine mein recover.
      </p>

      <p className="mb-6">
        Yield mein bhi 20-25% tak izafa ho sakta hai. Yeh figures crop type, location, aur management quality par depend karte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Application Process: Step-by-Step Guide
      </h2>
      
      <p className="mb-4">
        Micro-irrigation subsidy ke liye apply karne ka process detailed hai. Straightforward hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 1: Eligibility Check Karein</h3>
          <p className="mt-2">
            Farmer hone chahiye. Zameen honi chahiye - owned ya leased. Water source hona chahiye - borewell, canal, tank. Koi loan default nahi hona chahiye.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 2: State Portal Par Register Karein</h3>
          <p className="mt-2">
            Apne state ke Agriculture Department ki official website par jaakar registration karein. Har state ka apna portal hai. Apne zila ke Agriculture Department office se portal ka exact URL aur registration process pata karein.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 3: Site Survey</h3>
          <p className="mt-2">
            Portal par application submit karne ke baad department ke officers ya empanelled vendor aapke khet ka survey karenge. Zameen ka size aur shape, water source capacity, crop pattern, topography - sab check karenge. Survey ke baad system design banaya jata hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 4: Quotation aur Approval</h3>
          <p className="mt-2">
            Vendor quotation dega - system ka cost, subsidy amount, aapka share. Aap approve karein. Phir bank loan arrange karein agar zaroorat ho.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 5: Installation</h3>
          <p className="mt-2">
            Vendor system install karega. 3-7 din lagte hain area ke hisaab se. Installation ke baad testing hoti hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 6: Subsidy Release</h3>
          <p className="mt-2">
            Installation complete hone par verification hoti hai. Phir subsidy seedhe bank account mein aati hai, ya vendor ko directly payment hoti hai. Aapko sirf apna share dena hota hai.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Poora process 2-4 months lag sakta hai. Season se pehle apply karein.
      </p>

      <GovLink
        href="https://pmksy.gov.in/"
        label="PMKSY Official Portal"
        guide="State-wise Guidelines Check Karein"
        portalName="pmksy.gov.in"
      />

      <Image 
        src="/images/kisanguides/irrigation-application-process.webp" 
        alt="Farmer applying for irrigation subsidy at agriculture office" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Additional Schemes: Aur Kya Fayda Utha Sakte Hain?
      </h2>
      
      <p className="mb-4">
        PMKSY ke alawa bhi kai schemes hain jo micro-irrigation ko support karti hain.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-900">1. State-Level Micro-Irrigation Schemes:</strong>
            <p className="mt-1 text-gray-700">
              Har state ki apni schemes hoti hain jo PMKSY ke saath stack hoti hain. Inme additional 10-20% subsidy mil sakti hai. Apne zila ke Agriculture Department se latest information lein. State schemes periodically update hoti hain.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">2. Solar Pump Integration:</strong>
            <p className="mt-1 text-gray-700">
              Agar borewell par solar pump lagate hain <Link href="/kisanguides/pm-kusum-solar-pump-subsidy" className="text-blue-600 hover:underline">PM-KUSUM scheme</Link> ke tehat 60-90% subsidy milti hai. Bijli ka bill zero ho jata hai. Drip + Solar = maximum savings.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">3. Fertigation Training:</strong>
            <p className="mt-1 text-gray-700">
              Drip irrigation ke saath fertigation seekhein. Khaad paani mein milakar dena. 25-35% bachat hoti hai. KVKs free training dete hain - apne nazdeeki KVK se contact karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">4. Water Conservation Schemes:</strong>
            <p className="mt-1 text-gray-700">
              Farm pond, check dam, aur doosre water conservation structures par bhi subsidy milti hai. Drip ke saath combine karke maximum benefit lein.
            </p>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks aur Challenges - Transparency Zaroori Hai
      </h2>
      
      <p className="mb-4">
        Micro-irrigation sunne mein perfect lagta hai. Par kuch challenges hain.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Dripper Blockage (Sabse Common Problem)</h3>
          <p className="mt-2">
            Paani mein salt hai ya sand hai toh drippers block ho sakte hain. Har 15-30 din mein acid flushing karni padti hai. ₹500-1,000 per acre. Ignore kiya toh 20-30% drippers kharab ho sakte hain. Regular maintenance zaroori hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Initial Investment</h3>
          <p className="mt-2">
            Subsidy ke baad bhi ₹20,000-40,000 per acre lagta hai. Chhote kisaanon ke liye bada amount hai. Loan lena padta hai. EMI deni padti hai. Crop fail ho gayi toh loan repay karna mushkil hota hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Technical Knowledge Required</h3>
          <p className="mt-2">
            Drip/sprinkler chalana seekhna padta hai. Pressure kya rakhna hai, kab kitna paani dena hai, fertigation kaise karna hai. Bina training ke system properly kaam nahi karta. KVK se training zaroor lein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Vendor Quality Issues</h3>
          <p className="mt-2">
            Kuch vendors sasta material use karte hain. Pipes patli hoti hain, drippers kharab quality ke hote hain. 2-3 saal mein system kharab ho jata hai. Hamesha reputed vendor choose karein. Warranty check karein - minimum 5 years.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Crop Change Flexibility</h3>
          <p className="mt-2">
            Drip specific crops ke liye design hota hai. Agar crop change karna chahte hain toh drip kaam nahi aayega. Crop rotation plan karke hi invest karein.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Maintenance: System Ko Kaise Maintain Karein?
      </h2>
      
      <p className="mb-4">
        Micro-irrigation system ki proper maintenance zaroori hai. 10-15 saal tak kaam kare.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">Daily Maintenance:</h3>
        <ul className="space-y-2">
          <li>✓ Filter check karein - saaf hone chahiye</li>
          <li>✓ Pressure gauge dekhein - normal range mein hona chahiye</li>
          <li>✓ Leaks check karein - koi pipe toota toh nahi</li>
        </ul>

        <h3 className="font-bold text-lg mb-3 mt-4">Weekly Maintenance:</h3>
        <ul className="space-y-2">
          <li>✓ Filter cleaning (backwashing)</li>
          <li>✓ Drippers check karein - sab chal rahe hain ya nahi</li>
          <li>✓ Flush lines - end caps khol kar paani nikalein</li>
        </ul>

        <h3 className="font-bold text-lg mb-3 mt-4">Monthly Maintenance:</h3>
        <ul className="space-y-2">
          <li>✓ Acid flushing (agar salt buildup hai)</li>
          <li>✓ Filter element replacement (agar zaroorat ho)</li>
          <li>✓ Complete system inspection</li>
        </ul>

        <h3 className="font-bold text-lg mb-3 mt-4">Annual Maintenance:</h3>
        <ul className="space-y-2">
          <li>✓ Complete system flush</li>
          <li>✓ Worn-out parts replacement</li>
          <li>✓ Pressure test</li>
        </ul>
      </div>

      <p className="mb-6">
        Maintenance cost ₹1,000-2,000 per acre per year hoti hai. Ignore kiya toh 3-4 saal mein poora system kharab ho sakta hai.
      </p>

      <Image 
        src="/images/kisanguides/irrigation-maintenance-guide.webp" 
        alt="Irrigation System Maintenance and Care Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        Micro-irrigation unke liye hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Water scarcity face kar rahe hain</li>
        <li>Bijli ka bill bahut zyada hai</li>
        <li>High-value crops ugao (fruits, vegetables, sugarcane)</li>
        <li>₹20,000-40,000 per acre invest kar sakte hain (after subsidy)</li>
        <li>Technical knowledge seekhne ki ichha hai</li>
        <li>Long-term vision hai (5+ saal)</li>
      </ul>

      <p className="mb-4">
        Micro-irrigation unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Low-value crops ugao (jahan ROI 5+ saal mein ho)</li>
        <li>Har saal crop change karte hain</li>
        <li>Maintenance nahi kar sakte</li>
        <li>Paani abundant hai (canal area mein jahan paani free hai)</li>
      </ul>

      <p className="mb-6">
        Pehli category mein aate hain toh micro-irrigation ek bahut achha investment hai. 55-75% subsidy mil rahi hai. ROI 1-3 saal mein ho jata hai. Uske baad pure savings.
      </p>

      <p className="mb-6">
        <strong>Meri advice:</strong> Pehle apne zila ke Agriculture Department jayein. Wahan officers hote hain jo guide karte hain. Exact subsidy bataenge, vendors ki list denge. Phir 2-3 vendors se quotation lein, compare karein. Phir apply karein.
      </p>

      <p className="mb-6">
        Apne crop ki water requirement samjhein. Har crop ko kitna paani chahiye, kab chahiye - yeh jaankari hone se aap system ko optimally use kar sakte hain. Local KVK ya Agriculture University se crop-wise water requirement guide mil jayegi.
      </p>

      <p className="mb-6">
        Micro-irrigation ek game-changer hai. Paani bachana, bijli bachana, khaad bachana, aur production badhana - sab ek saath. Sahi se use kiya jaye toh 2-3 saal mein investment nikal jata hai. Uske baad pure profit.
      </p>

      {/* Related Articles Section - Stylish UI/UX */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">💧</span>
          Related Resources on KisanStatus
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Irrigation aur farming subsidies se related aur bhi helpful guides:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Solar Energy Category */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white text-2xl">
                ☀️
              </div>
              <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-300">
                Solar Energy Solutions
              </h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/kisanguides/pm-kusum-solar-pump-subsidy" 
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors group"
                >
                  <span className="text-yellow-600 group-hover:translate-x-1 transition-transform">→</span>
                  <div>
                    <div className="font-semibold">PM-KUSUM Solar Pump Subsidy</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">60-90% subsidy on solar pumps</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Water Conservation Category */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                💧
              </div>
              <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300">
                Water Management
              </h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/kisanguides/water-conservation-schemes" 
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  <div>
                    <div className="font-semibold">Water Conservation Schemes</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Farm pond, check dam subsidies</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <h4 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
            <span className="text-2xl"></span>
            More Farming Guides
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link 
              href="/kisanguides/bakri-palan-yojana-nlm-subsidy" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              <span className="text-green-600">🐐</span>
              <span className="font-medium">Bakri Palan NLM Subsidy</span>
            </Link>
            <Link 
              href="/kisanguides/chc-portal-custom-hiring-centre" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              <span className="text-green-600">🚜</span>
              <span className="font-medium">Custom Hiring Centre (CHC)</span>
            </Link>
            <Link 
              href="/kisanguides/organic-farming-guide" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              <span className="text-green-600">🌱</span>
              <span className="font-medium">Organic Farming Guide</span>
            </Link>
            <Link 
              href="/kisanguides/poultry-farming-subsidy" 
              className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              <span className="text-green-600">🐔</span>
              <span className="font-medium">Poultry Farming Subsidy</span>
            </Link>
          </div>
        </div>
      </div>

      <p className="mb-6 italic text-gray-600">
        Note: Is article ki information general guidance ke liye hai. Costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se alag ho sakte hain. Financial decisions lene se pehle agriculture officers ya irrigation experts se consult karna samajhdari hai. Guidelines aur prices periodically update hote hain - latest info ke liye official sources check karein.
      </p>
    </article>
  );
}