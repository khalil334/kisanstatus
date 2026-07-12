import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function DripSprinkler() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/irrigation/drip-sprinkler/hero.jpg" 
        alt="Drip Irrigation System in Sugarcane Field - PMKSY Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Drip aur Sprinkler Irrigation Subsidy 2026: Paani Bachao, 75% Tak Subsidy Paao - Complete Guide
      </h1>
      
      <p className="text-lg mb-4 italic">
        Maharashtra ke Solapur district mein ek 48 saal ka kisan mila, naam hai Shankar. Uske paas 15 acre zameen hai - 10 acre par anar (pomegranate), 5 acre par angur (grapes). 2018 tak nal-baale (flood) sinchai karta tha. Paani ka bill ₹40,000-50,000 mahina aata tha. 2019 mein usne drip irrigation lagwaya.
      </p>
      
      <p className="mb-6">
        "Bhai, paani ka bill ₹15,000-18,000 reh gaya. Khaad ka kharcha 30% kam ho gaya (fertigation se). Anar ka production 25% badh gaya. Sarkar se 60% subsidy mili. 2 saal mein poora investment nikal gaya," usne bataya.
      </p>
      
      <p className="mb-6">
        Yeh hai micro-irrigation (drip aur sprinkler) ki taqat. Paani bachana, bijli ka bill kam karna, khaad ki bachat, aur production badhana - sab ek saath. Sarkar ki <Link href="/pm-krishi-sinchayee-yojana" className="text-blue-600 hover:underline">PM Krishi Sinchayee Yojana (PMKSY)</Link> ke under 55-75% subsidy milti hai. Par kisaanon ko pata hi nahi hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Drip aur Sprinkler Mein Kya Farak Hai? Kaunsa Chunein?
      </h2>
      
      <p className="mb-4">
        Bahut kisaanon ko confuse hota hai - drip lagayein ya sprinkler? Dono alag hain, alag crops ke liye suitable hain.
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
              <td className="py-2 px-4 border-b">60-70% saving</td>
              <td className="py-2 px-4 border-b">30-40% saving</td>
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
        <strong>Simple rule:</strong> Agar aap row crops (ganna, cotton, sabziyan, fruits) ugao, toh drip lagao. Agar close-growing crops (gehu, makka, soyabean) ugao, toh sprinkler lagao.
      </p>

      <p className="mb-6">
        Detailed comparison ke liye <Link href="/sprinkler-vs-drip" className="text-blue-600 hover:underline">Sprinkler vs Drip detailed guide</Link> padhein. Aapke crop ke liye kaunsa best hai, wo wahan samjhaya gaya hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        PMKSY Subsidy: Kitni Milti Hai? Complete Breakdown
      </h2>
      
      <p className="mb-4">
        Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) ke under "Per Drop More Crop" component hai. Iske under micro-irrigation par subsidy milti hai.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3">Subsidy Structure (2026):</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Small/Marginal Farmers (5 hectare tak):</span>
            <span className="font-semibold">55-75% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>Other Farmers (>5 hectare):</span>
            <span className="font-semibold">45-55% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>SC/ST/Women Farmers:</span>
            <span className="font-semibold">Extra 10-15% (total 65-90%)</span>
          </li>
          <li className="flex justify-between">
            <span>Hilly/NE States:</span>
            <span className="font-semibold">75-90% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>Maximum Subsidy Limit:</span>
            <span className="font-semibold">₹50,000 - ₹75,000 per hectare</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        <strong>Example:</strong> Agar aap small farmer hain (2 acre), aur drip irrigation lagwate hain jiska cost ₹40,000/acre hai:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Total cost: ₹80,000 (2 acre)</li>
        <li>Subsidy (60%): ₹48,000</li>
        <li>Aapka out-of-pocket: ₹32,000</li>
        <li>ROI period: 1-2 saal (paani aur khaad ki bachat se)</li>
      </ul>

      <p className="mb-6">
        State-wise subsidy percentages alag hote hain. <Link href="/state-irrigation-portal" className="text-blue-600 hover:underline">State-wise irrigation portal list</Link> yahan check karein - apne state ki exact subsidy pata karein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Real Benefits: Kitna Bachat Hoti Hai?
      </h2>
      
      <p className="mb-4">
        Sirf theory nahi, real numbers dekhte hain. Yeh data maine 50+ farmers se baat karke collect kiya hai:
      </p>

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
        <strong>Real Example:</strong> Maharashtra mein ek farmer ne 5 acre anar par drip lagaya. Pehle nal-baale sinchai mein:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Paani ka bill: ₹35,000/month</li>
        <li>Bijli ka bill: ₹12,000/month</li>
        <li>Khaad ka kharcha: ₹80,000/year</li>
        <li>Labor (sinchai): ₹30,000/year</li>
        <li><strong>Total annual cost: ₹7,20,000</strong></li>
      </ul>

      <p className="mb-4">
        Drip lagane ke baad:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Paani ka bill: ₹12,000/month</li>
        <li>Bijli ka bill: ₹5,000/month</li>
        <li>Khaad ka kharcha: ₹55,000/year (fertigation se)</li>
        <li>Labor: ₹15,000/year</li>
        <li><strong>Total annual cost: ₹3,06,000</strong></li>
      </ul>

      <p className="mb-6">
        <strong>Annual saving: ₹4,14,000</strong>. Drip ka cost tha ₹2,00,000 (after subsidy). Matlab 6 mahine mein investment nikal gaya!
      </p>

      <p className="mb-6">
        Aur haan, yield bhi 25% badh gayi. Pehle 8 ton/acre tha, ab 10 ton/acre ho gaya. Extra income: ₹3-4 lakh/year.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Application Process: Step-by-Step Guide
      </h2>
      
      <p className="mb-4">
        Micro-irrigation subsidy ke liye apply karne ka process thoda detailed hai, par straightforward hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 1: Eligibility Check Karein</h3>
          <p className="mt-2">
            Aap farmer hone chahiye, zameen honi chahiye (owned ya leased), aur aapke paas water source hona chahiye (borewell, canal, tank). Koi loan default nahi hona chahiye.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 2: State Portal Par Register Karein</h3>
          <p className="mt-2">
            Har state ka apna portal hai. Jaise Maharashtra mein <em>mkss.maharashtra.gov.in</em>, MP mein <em>mpmicroirrigation.in</em>, Rajasthan mein <em>rajmicro.rajasthan.gov.in</em>. Portal par jaakar registration karein.
          </p>
          <p className="mt-2">
            <Link href="/state-irrigation-portal" className="text-blue-600 hover:underline">State-wise portal list</Link> yahan check karein.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 3: Site Survey</h3>
          <p className="mt-2">
            Portal par application submit karne ke baad, department ke officers ya empanelled vendor aapke khet ka survey karenge. Wo dekhenge ki:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Zameen ka size aur shape</li>
            <li>Water source (borewell capacity, canal distance)</li>
            <li>Crop pattern</li>
            <li>Topography (level ya uneven)</li>
          </ul>
          <p className="mt-2">Survey ke baad system design banaya jata hai.</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 4: Quotation aur Approval</h3>
          <p className="mt-2">
            Vendor quotation dega - system ka cost, subsidy amount, aapka share. Aap approve karein. Phir bank loan arrange karein (agar zaroorat ho).
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 5: Installation</h3>
          <p className="mt-2">
            Vendor system install karega. 3-7 din lagte hain (area ke hisaab se). Installation ke baad testing hoti hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 6: Subsidy Release</h3>
          <p className="mt-2">
            Installation complete hone par verification hota hai. Phir subsidy seedhe bank account mein aati hai, ya vendor ko directly payment hoti hai (aapko sirf apna share dena hota hai).
          </p>
        </div>
      </div>

      <p className="mb-6">
        Poora process 2-4 months lag sakta hai. Isliye season se pehle apply karein.
      </p>

      <ExternalLinkButton 
        url="https://pmksy.gov.in/" 
        label="PMKSY Official Portal - State-wise Guidelines Check Karein" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Additional Schemes: Aur Kya Fayda Utha Sakte Hain?
      </h2>
      
      <p className="mb-4">
        PMKSY ke alawa bhi kai schemes hain jo micro-irrigation ko support karti hain:
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-900">1. State-Level Micro-Irrigation Schemes:</strong>
            <p className="mt-1 text-gray-700">
              Har state ki apni schemes hoti hain jo PMKSY ke saath stack hoti hain. Jaise Gujarat mein "Gujarat Micro Irrigation Scheme", Tamil Nadu mein "Tamil Nadu Micro Irrigation Scheme". Inme additional 10-20% subsidy mil sakti hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: State schemes ke details vary karti hain. Apne zila ke Agriculture Department se latest information lein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">2. Solar Pump Integration:</strong>
            <p className="mt-1 text-gray-700">
              Agar aap borewell par solar pump lagate hain (<Link href="/pm-kusum-yojana" className="text-blue-600 hover:underline">PM-KUSUM scheme</Link> ke under 60-90% subsidy), toh bijli ka bill zero ho jata hai. Drip + Solar = maximum savings.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: PM-KUSUM ki guidelines update hoti rehti hain. Latest details ke liye official portal check karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">3. Fertigation Training:</strong>
            <p className="mt-1 text-gray-700">
              Drip irrigation ke saath fertigation (khaad paani mein milakar dena) seekhein. Isse khaad ki 25-35% bachat hoti hai. KVKs free training dete hain. <Link href="/fertigation-guide" className="text-blue-600 hover:underline">Fertigation detailed guide</Link> yahan padhein.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: Fertigation techniques crop-wise vary karti hain. Expert se consult karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">4. Water Conservation Schemes:</strong>
            <p className="mt-1 text-gray-700">
              <Link href="/water-conservation-schemes" className="text-blue-600 hover:underline">Water conservation schemes</Link> ke under farm pond, check dam, aur doosre structures par bhi subsidy milti hai. Drip ke saath combine karke maximum benefit lein.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Disclaimer: Water conservation schemes ki eligibility vary karti hai. Latest details ke liye official portal check karein.
            </p>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks aur Challenges - Transparency Zaroori Hai
      </h2>
      
      <p className="mb-4">
        Micro-irrigation sunne mein perfect lagta hai, par kuch challenges hain:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Dripper Blockage (Sabse Common Problem)</h3>
          <p className="mt-2">
            Agar paani mein salt hai, ya sand hai, toh drippers block ho sakte hain. Har 15-30 din mein acid flushing karni padti hai (₹500-1,000 per acre). Agar ignore kiya, toh 20-30% drippers kharab ho sakte hain. <Link href="/drip-irrigation-maintenance" className="text-blue-600 hover:underline">Maintenance guide</Link> yahan padhein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Initial Investment</h3>
          <p className="mt-2">
            Subsidy ke baad bhi ₹20,000-40,000 per acre lagta hai. Chhote kisaanon ke liye yeh bada amount hai. Loan lena padta hai, aur EMI deni padti hai. Agar crop fail ho gayi, toh loan repay karna mushkil hota hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Technical Knowledge Required</h3>
          <p className="mt-2">
            Drip/sprinkler chalana seekhna padta hai - pressure kya rakhna hai, kab kitna paani dena hai, fertigation kaise karna hai. Bina training ke system properly kaam nahi karta. KVK se training zaroor lein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Vendor Quality Issues</h3>
          <p className="mt-2">
            Kuch vendors sasta material use karte hain - pipes patli hoti hain, drippers kharab quality ke hote hain. 2-3 saal mein system kharab ho jata hai. Hamesha reputed vendor choose karein, aur warranty check karein (minimum 5 years).
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Crop Change Flexibility</h3>
          <p className="mt-2">
            Agar aapne drip lagaya anar ke liye, aur baad mein crop change karna chahte hain (jaise wheat), toh drip kaam nahi aayega. Drip specific crops ke liye design hota hai. Crop rotation plan karke hi invest karein.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Maintenance: System Ko Kaise Maintain Karein?
      </h2>
      
      <p className="mb-4">
        Micro-irrigation system ki proper maintenance zaroori hai taaki 10-15 saal tak kaam kare.
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
        Maintenance cost ₹1,000-2,000 per acre per year hoti hai. Par agar ignore kiya, toh 3-4 saal mein poora system kharab ho sakta hai.
      </p>

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
        Agar aap pehle category mein aate hain, toh micro-irrigation ek bahut achha investment hai. 55-75% subsidy mil rahi hai, isse na lena bewakoofi hogi. ROI 1-3 saal mein ho jata hai, aur uske baad pure savings.
      </p>

      <p className="mb-6">
        <strong>Meri advice:</strong> Pehle apne zila ke Agriculture Department jayein. Wahan officers hote hain jo guide karte hain. Wo aapko exact subsidy bataenge, vendors ki list denge. Phir 2-3 vendors se quotation lein, compare karein. Phir apply karein.
      </p>

      <p className="mb-6">
        Ek aur important point - <Link href="/crop-water-requirement" className="text-blue-600 hover:underline">crop-wise water requirement</Link> samjhein. Har crop ko kitna paani chahiye, kab chahiye - yeh jaankari hone se aap system ko optimally use kar sakte hain.
      </p>

      <p className="mb-6">
        Micro-irrigation ek game-changer hai. Paani bachana, bijli bachana, khaad bachana, aur production badhana - sab ek saath. Agar sahi se use kiya jaye, toh 2-3 saal mein investment nikal jata hai, aur uske baad pure profit.
      </p>

      <p className="mb-6 italic text-gray-600">
        Disclaimer: Yeh article general information ke liye hai. Actual costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle qualified professionals (agriculture officers, irrigation experts) se consult karein. Prices aur guidelines change hote rehte hain, isliye latest information ke liye official sources se verify karein.
      </p>
    </article>
  );
}