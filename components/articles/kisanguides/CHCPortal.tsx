import Image from 'next/image';
import Link from 'next/link';
import { GovLink } from '@/components/ArticleShared';

export default function CHCPortal() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/farm-machinery/chc-portal/hero.jpg" 
        alt="Custom Hiring Centre with Tractor and Farm Implements - SMAM Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Custom Hiring Centre (CHC) 2026: Apna Tractor Kiraye Par De Kar Mahine Ka ₹50,000+ Kamayein - Complete Guide
      </h1>
      
      <p className="text-lg mb-4 italic">
        Punjab ke Patiala district mein 38 saal ka kisan Gurpreet mila jiske paas 12 acre zameen hai, 2019 mein usne SMAM scheme ke under 50% subsidy par tractor, happy seeder, rotavator, laser land leveler khareeda. Aaj monthly income ₹65,000-75,000 hai. Sirf machinery rent se.
      </p>
      
      <p className="mb-6">
        "Bhai, mera apna kaam toh 3-4 mahine mein khatam ho jata hai. Baaki 8 mahine yeh machinery gaon ke doosre kisaanon ko rent par deta hoon. Tractor ₹800-1,000 per hour, happy seeder ₹1,200 per acre, laser leveler ₹800 per acre. Mahine ka ₹50,000-60,000 aaram se nikal aata hai," usne bataya.
      </p>
      
      <p className="mb-6">
        Custom Hiring Centre ka model hai yeh. Sarkar chahti hai har gaon mein ek CHC ho jahan kisaanon ko sasti machinery rent par mile. Aap CHC khol kar achhi kamai kar sakte hain - 40-50% subsidy ke saath.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        CHC Hai Kya? Aur Yeh Business Model Kaise Kaam Karta Hai?
      </h2>
      
      <p className="mb-4">
        Mehngi agricultural machinery khareedte hain subsidy ke saath, gaon ke doosre kisaanon ko rent par dete hain - "Uber for Tractors" jaisa sochiye. Aapke paas machinery hai, zarooratmand kisaan aapke paas aate hain, aap rent lete hain.
      </p>
      
      <p className="mb-4">
        India mein 85% kisaanon ke paas 2 hectare se kam zameen hai. Mehnga tractor ya combine harvester khareed nahi sakte. Par kheti toh karni hai. Yahan CHC kaam aata hai - wo aapse machinery rent par lete hain jab zaroorat ho.
      </p>

      <p className="mb-6">
        Sarkar ka target hai har block mein kam se kam ek CHC. Abhi sirf 20-25% blocks mein CHC hain. Scope bahut hai abhi bhi.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        SMAM Scheme: Machinery Par 40-50% Subsidy
      </h2>
      
      <p className="mb-4">
        CHC kholne ke liye SMAM (Sub-Mission on Agricultural Mechanization) scheme ke under 40-50% subsidy milti hai. Capital investment par yeh subsidy hai - tractor chhod kar baaki sab implements par.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3">Subsidy Structure:</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Small/Marginal Farmers (2 hectare tak):</span>
            <span className="font-semibold">50% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>Other Farmers:</span>
            <span className="font-semibold">40% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>SC/ST/Women Farmers:</span>
            <span className="font-semibold">50% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>North-East/Hilly States:</span>
            <span className="font-semibold">50-60% subsidy</span>
          </li>
          <li className="flex justify-between">
            <span>Maximum Subsidy Limit:</span>
            <span className="font-semibold">₹20 lakh per CHC unit</span>
          </li>
          <li className="flex justify-between">
            <span>Group Application (7-10 farmers):</span>
            <span className="font-semibold">Higher chances of approval</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Tractor par subsidy nahi milti SMAM ke under. Par tractor ke saath lagne wale sab implements par subsidy milti hai - rotavator, happy seeder, laser leveler, seed drill, sab par.
      </p>

      <p className="mb-6">
        Example dekhte hain. ₹30 lakh ki machinery khareedte hain tractor chhod kar, toh 40% subsidy = ₹12 lakh. Out-of-pocket kharcha sirf ₹18 lakh. Bada advantage hai yeh.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kaunsi Machinery Khareedein? High-Demand Implements List
      </h2>
      
      <p className="mb-4">
        Har region ki demand alag hoti hai. Par kuch implements hain jo har jagah chalte hain. Yeh list maine actual CHC owners se baat karke banayi hai - real data hai yeh.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Implement</th>
              <th className="py-2 px-4 border-b text-left">Approx Cost</th>
              <th className="py-2 px-4 border-b text-left">Rent Rate</th>
              <th className="py-2 px-4 border-b text-left">Demand Season</th>
              <th className="py-2 px-4 border-b text-left">ROI Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Rotavator</td>
              <td className="py-2 px-4 border-b">₹80,000 - ₹1,50,000</td>
              <td className="py-2 px-4 border-b">₹600-800/acre</td>
              <td className="py-2 px-4 border-b">Year-round</td>
              <td className="py-2 px-4 border-b">6-8 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Happy Seeder</td>
              <td className="py-2 px-4 border-b">₹1,20,000 - ₹1,80,000</td>
              <td className="py-2 px-4 border-b">₹1,000-1,500/acre</td>
              <td className="py-2 px-4 border-b">Oct-Nov (Rabi)</td>
              <td className="py-2 px-4 border-b">4-6 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Laser Land Leveler</td>
              <td className="py-2 px-4 border-b">₹2,50,000 - ₹4,00,000</td>
              <td className="py-2 px-4 border-b">₹800-1,200/acre</td>
              <td className="py-2 px-4 border-b">Year-round</td>
              <td className="py-2 px-4 border-b">8-12 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Seed Drill (Multi-crop)</td>
              <td className="py-2 px-4 border-b">₹60,000 - ₹1,20,000</td>
              <td className="py-2 px-4 border-b">₹400-600/acre</td>
              <td className="py-2 px-4 border-b">Sowing season</td>
              <td className="py-2 px-4 border-b">6-10 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Boom Sprayer</td>
              <td className="py-2 px-4 border-b">₹1,00,000 - ₹2,00,000</td>
              <td className="py-2 px-4 border-b">₹500-800/acre</td>
              <td className="py-2 px-4 border-b">Year-round</td>
              <td className="py-2 px-4 border-b">5-8 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Reaper/Harvester (Small)</td>
              <td className="py-2 px-4 border-b">₹2,00,000 - ₹3,50,000</td>
              <td className="py-2 px-4 border-b">₹1,500-2,500/acre</td>
              <td className="py-2 px-4 border-b">Harvest season</td>
              <td className="py-2 px-4 border-b">4-6 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Straw Reaper</td>
              <td className="py-2 px-4 border-b">₹1,50,000 - ₹2,50,000</td>
              <td className="py-2 px-4 border-b">₹1,000-1,500/acre</td>
              <td className="py-2 px-4 border-b">Harvest season</td>
              <td className="py-2 px-4 border-b">3-5 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Puddle (Paddy transplanter)</td>
              <td className="py-2 px-4 border-b">₹1,50,000 - ₹2,50,000</td>
              <td className="py-2 px-4 border-b">₹1,200-1,800/acre</td>
              <td className="py-2 px-4 border-b">Kharif season</td>
              <td className="py-2 px-4 border-b">4-6 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Mulcher</td>
              <td className="py-2 px-4 border-b">₹80,000 - ₹1,50,000</td>
              <td className="py-2 px-4 border-b">₹600-1,000/acre</td>
              <td className="py-2 px-4 border-b">Year-round</td>
              <td className="py-2 px-4 border-b">6-10 months</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Potato Planter/Digger</td>
              <td className="py-2 px-4 border-b">₹1,00,000 - ₹2,00,000</td>
              <td className="py-2 px-4 border-b">₹1,500-2,500/acre</td>
              <td className="py-2 px-4 border-b">Potato season</td>
              <td className="py-2 px-4 border-b">3-5 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Shuru mein 5-7 implements se start karein. Jo zyada demand mein ho wahi lo. Punjab/Haryana mein happy seeder, laser leveler, straw reaper ki demand zyada hai. MP/UP mein seed drill, rotavator, boom sprayer. South India mein paddy transplanter, puddle.
      </p>

      <p className="mb-6">
        State ke Agriculture Department portal par jaakar implement-wise subsidy ki exact list check karein. Har state mein rates thode alag hote hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Complete Setup Cost: Kitna Paisa Lagega?
      </h2>
      
      <p className="mb-4">
        Ek realistic CHC setup ka budget banate hain. Punjab/Haryana ke liye hai yeh - high demand area.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">CHC Setup Cost (1 Tractor + 8 Implements)</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Tractor (55 HP, new):</span>
            <span className="font-semibold">₹7,00,000 - ₹9,00,000</span>
          </li>
          <li className="flex justify-between">
            <span>Rotavator (7 feet):</span>
            <span className="font-semibold">₹1,00,000 - ₹1,30,000</span>
          </li>
          <li className="flex justify-between">
            <span>Happy Seeder:</span>
            <span className="font-semibold">₹1,40,000 - ₹1,70,000</span>
          </li>
          <li className="flex justify-between">
            <span>Laser Land Leveler:</span>
            <span className="font-semibold">₹3,00,000 - ₹3,80,000</span>
          </li>
          <li className="flex justify-between">
            <span>Seed Drill (Multi-crop):</span>
            <span className="font-semibold">₹80,000 - ₹1,10,000</span>
          </li>
          <li className="flex justify-between">
            <span>Boom Sprayer:</span>
            <span className="font-semibold">₹1,20,000 - ₹1,80,000</span>
          </li>
          <li className="flex justify-between">
            <span>Straw Reaper:</span>
            <span className="font-semibold">₹1,80,000 - ₹2,30,000</span>
          </li>
          <li className="flex justify-between">
            <span>Mulcher:</span>
            <span className="font-semibold">₹1,00,000 - ₹1,40,000</span>
          </li>
          <li className="flex justify-between">
            <span>Other (tools, spare parts):</span>
            <span className="font-semibold">₹50,000 - ₹80,000</span>
          </li>
          <li className="flex justify-between border-t pt-2">
            <span className="font-semibold">Total Machinery Cost:</span>
            <span className="font-semibold">₹16,70,000 - ₹21,40,000</span>
          </li>
          <li className="flex justify-between">
            <span>Shed/Storage (1000 sq ft):</span>
            <span className="font-semibold">₹1,50,000 - ₹2,50,000</span>
          </li>
          <li className="flex justify-between">
            <span>Working Capital (6 months):</span>
            <span className="font-semibold">₹2,00,000 - ₹3,00,000</span>
          </li>
          <li className="flex justify-between border-t-2 pt-2 font-bold text-lg">
            <span>Total Investment:</span>
            <span className="text-green-700">₹20,20,000 - ₹26,90,000</span>
          </li>
          <li className="flex justify-between bg-green-50 p-2 rounded">
            <span className="font-semibold">Less: 40% Subsidy (on implements only):</span>
            <span className="font-semibold text-green-700">₹5,00,000 - ₹7,00,000</span>
          </li>
          <li className="flex justify-between bg-yellow-50 p-2 rounded font-bold">
            <span>Net Investment (After Subsidy):</span>
            <span className="text-yellow-800">₹15,20,000 - ₹19,90,000</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Yeh investment lagti hai. Par loans available hain. <Link href="/articles/KisanTractorLoan2026" className="text-blue-600 hover:underline">Tractor loan guide</Link> mein detailed process bataya gaya hai - 7 saal tak ke liye milta hai, interest rate 9-11%. Implements par SMAM subsidy mil jayegi.
      </p>

      <p className="mb-6">
        Group (7-10 farmers) milkar apply karte hain toh approval chances zyada hote hain. Har farmer apna contribution dega, sab milkar CHC chalayenge. FPO (Farmer Producer Organization) banakar bhi apply kar sakte hain - FPOs ko priority milti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Application Process: Step-by-Step Guide
      </h2>
      
      <p className="mb-4">
        CHC kholne ka process thoda lamba hai. Straightforward hai. Yeh steps follow karein:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 1: Eligibility Check Karein</h3>
          <p className="mt-2">
            Farmer hona chahiye. Zameen honi chahiye - owned ya leased. Tractor hona chahiye ya khareedne ki capacity. Group application mein kam se kam 7-10 farmers hone chahiye.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 2: State Agriculture Department Se Milein</h3>
          <p className="mt-2">
            Zila ke Agriculture Officer ya Deputy Director se milein. Current guidelines denge wo. Har state ka portal alag hai - Punjab mein <em>agripb.gov.in</em>, Haryana mein <em>meri fasal</em> portal, UP mein <em>upagripard.gov.in</em>, etc.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 3: Application Form Bharein</h3>
          <p className="mt-2">
            Online ya offline form bharein. Documents lagayein:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Aadhaar card, PAN card</li>
            <li>Land documents (registry/lease)</li>
            <li>Bank passbook (last 6 months)</li>
            <li>Caste certificate (if SC/ST)</li>
            <li>Tractor RC (agar already hai)</li>
            <li>Machinery quotations (3 dealers se)</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 4: Site Inspection</h3>
          <p className="mt-2">
            Department ke officers aapki zameen aur shed dekhne aayenge. Location suitable hai, storage space hai, plan realistic hai - yeh check karenge.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 5: Approval aur Subsidy Release</h3>
          <p className="mt-2">
            Approval milne par bank loan arrange karein. Machinery khareedein. Phir subsidy claim karein. Subsidy seedhe bank account mein aati hai, ya bank loan mein adjust ho jati hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Step 6: CHC Portal Par Register Karein</h3>
          <p className="mt-2">
            Machinery ki details state CHC portal par upload karein. Kisaan online dekh kar book kar sakte hain. Bahut important hai yeh - bina registration ke portal se orders nahi milenge.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Poora process 3-6 months lag sakta hai. Patience rakhein. Application mein koi fee nahi lagti - sab free hai.
      </p>

      <GovLink
        href="https://agrimachinery.gov.in/"
        label="Agriculture Machinery Portal"
        guide="State-wise Guidelines Check Karein"
        portalName="agrimachinery.gov.in"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Business Model: Mahine Ka Kitna Kamai Hogi?
      </h2>
      
      <p className="mb-4">
        Sabse important sawaal - paisa kitna banega? Ek realistic calculation dekhte hain.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Implement</th>
              <th className="py-2 px-4 border-b text-left">Monthly Usage (avg)</th>
              <th className="py-2 px-4 border-b text-left">Rate</th>
              <th className="py-2 px-4 border-b text-left">Monthly Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Tractor (rental)</td>
              <td className="py-2 px-4 border-b">150 hours</td>
              <td className="py-2 px-4 border-b">₹900/hour</td>
              <td className="py-2 px-4 border-b">₹1,35,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Rotavator</td>
              <td className="py-2 px-4 border-b">60 acres</td>
              <td className="py-2 px-4 border-b">₹700/acre</td>
              <td className="py-2 px-4 border-b">₹42,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Happy Seeder</td>
              <td className="py-2 px-4 border-b">40 acres</td>
              <td className="py-2 px-4 border-b">₹1,200/acre</td>
              <td className="py-2 px-4 border-b">₹48,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Laser Leveler</td>
              <td className="py-2 px-4 border-b">50 acres</td>
              <td className="py-2 px-4 border-b">₹1,000/acre</td>
              <td className="py-2 px-4 border-b">₹50,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Boom Sprayer</td>
              <td className="py-2 px-4 border-b">80 acres</td>
              <td className="py-2 px-4 border-b">₹600/acre</td>
              <td className="py-2 px-4 border-b">₹48,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Straw Reaper</td>
              <td className="py-2 px-4 border-b">30 acres (seasonal)</td>
              <td className="py-2 px-4 border-b">₹1,200/acre</td>
              <td className="py-2 px-4 border-b">₹36,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Other implements</td>
              <td className="py-2 px-4 border-b">Various</td>
              <td className="py-2 px-4 border-b">-</td>
              <td className="py-2 px-4 border-b">₹40,000</td>
            </tr>
            <tr className="bg-green-50">
              <td className="py-2 px-4 border-b font-bold" colSpan={3}>Total Monthly Revenue</td>
              <td className="py-2 px-4 border-b font-bold text-green-700">₹3,99,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        <strong>Expenses:</strong>
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Diesel (tractor): ₹60,000-80,000/month</li>
        <li>Driver salary (1-2 drivers): ₹25,000-35,000</li>
        <li>Maintenance & repairs: ₹15,000-25,000</li>
        <li>Insurance: ₹3,000-5,000/month</li>
        <li>Misc (transport, misc): ₹10,000-15,000</li>
        <li><strong>Total Monthly Expenses: ₹1,13,000-1,60,000</strong></li>
      </ul>

      <p className="mb-4">
        <strong>Net Monthly Profit: ₹2,40,000-2,85,000</strong>
      </p>

      <p className="mb-6">
        Yeh numbers tab hain jab consistently kaam kar rahe hain. Shuru ke 6 mahine mein shayad ₹1-1.5 lakh hi kama paoge. Customers build karne mein time lagta hai. Par Year 2 tak ₹2-3 lakh per month tak pahunch sakte hain.
      </p>

      <p className="mb-4">
        Loan EMI bhi deduct karni hai. ₹15 lakh ka loan hai 7 saal ke liye 10% interest par, toh monthly EMI ₹26,000 aati hai. Tab bhi net profit ₹2 lakh+ per month rehta hai.
      </p>

      <p className="mb-6">
        Ek aur point - seasonal variation. Kharif (June-October) aur Rabi (October-March) mein demand peak par hoti hai. Garmiyon (April-June) mein demand 40-50% kam ho jati hai. 12 months ka cash flow manage karna padta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="mb-4">
        CHC business sunne mein simple lagta hai. Par risks hain. Yeh woh cheezein hain jo aapko pata honi chahiye - sachhai yeh hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Machine Breakdown (Sabse Badi Problem)</h3>
          <p className="mt-2">
            Machinery kharab ho gayi toh rental income band. Customers doosre CHC par shift ho jayenge. Season mein har machine ko 100-150 hours chalti hai - wear and tear bahut hota hai. Spare parts aur local mechanic ka intezam pehle se rakho. Budget mein 10-15% maintenance cost zaroor rakho.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Payment Recovery</h3>
          <p className="mt-2">
            Kisaan aksar udhaar par lete hain - fasal katne ke baad denge. Kabhi-kabhi payment 2-3 mahine late ho jata hai. Kuch cases mein default bhi ho jata hai. Advance payment ya partial payment ka system rakho. Cash flow manage karna mushkil ho jata hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Driver Issues</h3>
          <p className="mt-2">
            Achha driver milna mushkil hai. Jo milta hai wo season mein chhod deta hai - doosra CHC zyada deta hai. Ya phir drunk driving, careless operation se machinery kharab ho jati hai. Driver training aur monitoring zaroori hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Competition</h3>
          <p className="mt-2">
            Area mein doosre CHC khul gaye toh rates gir sakte hain. 2019 mein Punjab mein CHC boom hua, kai areas mein rates 20-30% gir gaye. Location selection bahut zaroori hai - aise area chuno jahan competition kam ho.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Weather Dependency</h3>
          <p className="mt-2">
            Baadh, sukha, ya unexpected rainfall se kheti ka schedule bigad jata hai. Demand suddenly drop ho sakti hai. 2022 mein Punjab mein unexpected October rain se kai farmers ki fasal kharab hui - CHC owners ki bhi income kam hui.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Loan Burden</h3>
          <p className="mt-2">
            Business expected level par nahi chala toh loan EMI dena mushkil ho jata hai. ₹15-20 lakh ka loan hai toh monthly ₹25,000-35,000 EMI hai. 2-3 mahine income kam hui toh default ho sakta hai. Apni capacity se zyada loan mat lo.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        CHC Portal Par Kaise Register Karein?
      </h2>
      
      <p className="mb-4">
        Har state ka apna CHC portal hai. Yahan machinery ki details daalte hain, kisaan online book kar sakte hain. Bahut important hai yeh - bina registration ke portal se orders nahi milenge.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">State-wise CHC Portals:</h3>
        <ul className="space-y-2">
          <li><strong>Punjab:</strong> agripb.gov.in (Farm Machinery Management)</li>
          <li><strong>Haryana:</strong> merifasal.haryana.gov.in</li>
          <li><strong>Uttar Pradesh:</strong> upagrimachinery.gov.in</li>
          <li><strong>Madhya Pradesh:</strong> mpchc.in</li>
          <li><strong>Rajasthan:</strong> rajchc.rajasthan.gov.in</li>
          <li><strong>Maharashtra:</strong> mahachc.maharashtra.gov.in</li>
        </ul>
      </div>

      <p className="mb-4">
        Registration process:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Portal par jayein, "CHC Registration" option dhundhein</li>
        <li>Apni details bharein - naam, address, contact</li>
        <li>Machinery ki details upload karein - brand, model, year, photo</li>
        <li>Rate card set karein - har implement ka rent rate</li>
        <li>Availability calendar set karein - kab available hai</li>
        <li>Bank account details dein (payment ke liye)</li>
        <li>Submit karein, verification ke baad approval milega</li>
      </ol>

      <p className="mb-6">
        Ek baar register ho gaye toh kisaan aapko online dekh kar book kar sakte hain. Payment bhi online hoti hai. Recovery ka issue kam hota hai.
      </p>

      <p className="mb-6">
        Agriculture business loan ke liye bhi CHC registration zaroori hai. Banks ko proof chahiye ki aap actually kaam kar rahe hain. <Link href="/articles/KisanRinKahaSeLe2026" className="text-blue-600 hover:underline">Kisan loan guide</Link> mein doosre options bhi hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Training Kahan Se Lein?
      </h2>
      
      <p className="mb-4">
        CHC chalane ke liye technical knowledge zaroori hai. Machinery operation, maintenance, customer handling - sab seekhna padta hai. Bina training ke machinery jaldi kharab ho jati hai.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>State Agriculture Departments:</strong> Har state CHC owners ke liye free training karti hai. 3-7 din ki training hoti hai.
        </li>
        <li>
          <strong>CIMAE (Central Institute of Agricultural Engineering), Bhopal:</strong> Premier institute. Advanced training programs.
        </li>
        <li>
          <strong>Machine Manufacturers:</strong> Jaise Mahindra, Sonalika, John Deere - wo apne dealers ke through training dete hain.
        </li>
        <li>
          <strong>KVKs:</strong> Har district mein KVK CHC management training deta hai.
        </li>
        <li>
          <strong>Successful CHC Owners:</strong> Apne area mein jo pehle se CHC chala rahe hain, unse 5-7 din kaam karke seekho. Sabse practical training hai yeh.
        </li>
      </ul>

      <p className="mb-6">
        Training mein aap seekhenge:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Machinery operation (har implement ka sahi use)</li>
        <li>Basic maintenance (daily, weekly, monthly)</li>
        <li>Troubleshooting (common problems ka solution)</li>
        <li>Customer handling aur rate negotiation</li>
        <li>Record keeping (accounting, usage logs)</li>
        <li>Safety protocols</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Scale-Up Strategy: Chhote Se Bade Tak
      </h2>
      
      <p className="mb-4">
        CHC business ko step-by-step scale karein. Direct badi investment mat karo. Dheere dheere badho.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Phase 1: Pilot (0-6 months)</h3>
          <p className="mt-2">
            Existing tractor ke saath 3-4 implements lo. Subsidy ke liye apply karo. 10-15 regular customers banao. Seekho ki kya kaam kar raha hai, kya nahi. Investment: ₹5-8 lakh (after subsidy).
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Phase 2: Growth (6-18 months)</h3>
          <p className="mt-2">
            20-30 regular customers ho jayein tab aur implements lo. 1-2 drivers hire karo. Nearby villages mein expand karo. CHC portal par active raho. Investment: ₹8-12 lakh additional.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Phase 3: Expansion (18+ months)</h3>
          <p className="mt-2">
            Ab doosra tractor lo, aur high-value implements (combine harvester, paddy transplanter). Multiple drivers hire karo. Nearby blocks mein expand karo. Agar possible ho toh doosra CHC kholo doosri location par. Investment: ₹15-25 lakh.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        CHC business unke liye hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Already farmer hain, zameen hai</li>
        <li>Tractor already hai (ya khareedne ki capacity hai)</li>
        <li>₹15-20 lakh initial investment kar sakte hain (after subsidy)</li>
        <li>Technical knowledge hai machinery ki (ya seekhne ki ichha)</li>
        <li>Customer handling skills hain</li>
        <li>Daily 8-10 hours de sakte hain (season mein)</li>
        <li>Area mein demand hai (dairy belt, progressive farmers)</li>
        <li>Patience hai (pehle 6 mahine building phase hai)</li>
      </ul>

      <p className="mb-4">
        CHC business unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Machinery se comfortable nahi hain</li>
        <li>Customer handling nahi kar sakte</li>
        <li>Quick money chahte hain (pehle 6 mahine building phase hai)</li>
        <li>Risk nahi le sakte (loan burden, machine breakdown)</li>
        <li>Non-agricultural area mein hain (customers nahi milenge)</li>
      </ul>

      <p className="mb-6">
        Pehli category mein aate hain toh CHC ek bahut profitable business hai. 40-50% subsidy mil rahi hai, isse na lena bewakoofi hogi. Par yaad rakho - yeh passive income nahi hai. Daily mehnat karni padegi, machines maintain karni padengi, customers handle karne padenge.
      </p>

      <p className="mb-6">
        <strong>Meri advice:</strong> Pehle apne area ka market research karo. 5-10 existing CHC owners se baat karo, unke challenges samjho. Phir apne zila ke Agriculture Officer se milo, guidelines lo. Phir chhote scale par start karo - 3-4 implements se. Jab confidence aa jaye tab expand karo.
      </p>

      <p className="mb-6">
        Ek aur important point - <Link href="/articles/silage-making-business-guide" className="text-blue-600 hover:underline">silage making</Link> ya <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline">vermi compost</Link> jaise doosre agri-businesses ke saath CHC ko combine karo. Multiple income streams ban jayenge. Ek machine se ek kaam nahi hota, par 5-6 machines se year-round income hoti hai.
      </p>

      <p className="mb-6">
        CHC ek emerging opportunity hai. Sarkar isko bahut promote kar rahi hai. Sahi se execute karein toh 2-3 saal mein ₹2-3 lakh per month profit possible hai. Par mehnat bahut hai - yeh passive income nahi hai.
      </p>

      <p className="mb-6">
        Seriously interested hain toh pehle apne nazdeeki Agriculture Department office jayein. Wahan officers hote hain jo CHC ke baare mein guide karte hain. Exact guidelines batayenge, application mein help karenge.
      </p>

      <p className="mb-6 italic text-gray-600">
        Note: Is article ki information general guidance ke liye hai. Costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se alag ho sakte hain. Financial decisions lene se pehle agriculture officers ya CAs se consult karna samajhdari hai. Guidelines aur prices periodically update hote hain - latest info ke liye official sources check karein.
      </p>
    </article>
  );
}