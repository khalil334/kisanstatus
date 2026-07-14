import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function CHCPortal() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed">
      <Image 
        src="/images/kisanguides/chc-portal-hero.webp" 
        alt="Custom Hiring Centre with Tractor and Farm Implements - SMAM Subsidy Guide 2026" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
        Custom Hiring Centre (CHC) 2026: Apna Tractor Kiraye Par De Kar Mahine Ka ₹50,000+ Kamayein
      </h1>
      
      <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
        Custom Hiring Centre (CHC) ek aisa business model hai jahan aap agricultural machinery khareed kar doosre kisaanon ko rent par dete hain. SMAM scheme ke tehat 40-50% subsidy milne ki wajah se yeh ek profitable opportunity ban gaya hai.
      </p>
      
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        India mein 85% kisaanon ke paas 2 hectare se kam zameen hai, isliye wo mehngi machinery khareed nahi sakte. CHC in kisaanon ko affordable rates par equipment provide karta hai, aur aap achhi kamai kar sakte hain.
      </p>

      <Image 
        src="/images/kisanguides/pchc-portal-farmer-tractor.webp" 
        alt="Indian farmer operating tractor at Custom Hiring Centre for rental services" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
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

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        SMAM Scheme: Machinery Par 40-50% Subsidy
      </h2>
      
      <p className="mb-4">
        CHC kholne ke liye SMAM (Sub-Mission on Agricultural Mechanization) scheme ke under 40-50% subsidy milti hai. Capital investment par yeh subsidy hai - tractor chhod kar baaki sab implements par.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-200">Subsidy Structure:</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Small/Marginal Farmers (2 hectare tak):</span>
            <span className="font-semibold">50% subsidy</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Other Farmers:</span>
            <span className="font-semibold">40% subsidy</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>SC/ST/Women Farmers:</span>
            <span className="font-semibold">50% subsidy</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>North-East/Hilly States:</span>
            <span className="font-semibold">50-60% subsidy</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Subsidy Amount:</span>
            <span className="font-semibold text-right text-sm">Project cost ke 40-50% (exact ceiling state-wise vary karti hai)</span>
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

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3 text-yellow-800 dark:text-yellow-300">
          🌾 CRM Scheme - Punjab/Haryana/UP/Delhi Farmers Ke Liye Special
        </h3>
        <p className="mb-2 text-yellow-900 dark:text-yellow-200">
          <strong>Important:</strong> Agar aap Punjab, Haryana, Uttar Pradesh, ya Delhi NCR region se hain, toh Happy Seeder, Super Seeder, aur straw management machinery par <strong>CRM (Crop Residue Management) Scheme</strong> ke tehat <strong>80% subsidy</strong> milti hai - jo SMAM ke generic 40-50% se kaafi zyada hai.
        </p>
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          Yeh SMAM se ALAG scheme hai. Dono schemes ka benefit ek saath nahi mil sakta, lekin CRM machinery ke liye specifically better option hai.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Kaunsi Machinery Khareedein? High-Demand Implements List
      </h2>
      
      <p className="mb-4">
        Har region ki demand alag hoti hai. Par kuch implements hain jo har jagah chalte hain. Industry observations ke mutabik yeh implements sabse zyada demand mein hain.
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-amber-900 dark:text-amber-200 italic">
          <strong>Note:</strong> Ye rates/figures illustrative hain aur area, season, aur competition ke hisaab se significantly vary kar sakte hain. Apne local market ka research zaroor karein before investment decision.
        </p>
      </div>

      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Implement</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Approx Cost</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Rent Rate</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Demand Season</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">ROI Period</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Rotavator</td>
              <td className="py-3 px-4">₹80,000 - ₹1,50,000</td>
              <td className="py-3 px-4">₹600-800/acre</td>
              <td className="py-3 px-4">Year-round</td>
              <td className="py-3 px-4">6-8 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Happy Seeder</td>
              <td className="py-3 px-4">₹1,20,000 - ₹1,80,000</td>
              <td className="py-3 px-4">₹1,000-1,500/acre</td>
              <td className="py-3 px-4">Oct-Nov (Rabi)</td>
              <td className="py-3 px-4">4-6 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Laser Land Leveler</td>
              <td className="py-3 px-4">₹2,50,000 - ₹4,00,000</td>
              <td className="py-3 px-4">₹800-1,200/acre</td>
              <td className="py-3 px-4">Year-round</td>
              <td className="py-3 px-4">8-12 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Seed Drill (Multi-crop)</td>
              <td className="py-3 px-4">₹60,000 - ₹1,20,000</td>
              <td className="py-3 px-4">₹400-600/acre</td>
              <td className="py-3 px-4">Sowing season</td>
              <td className="py-3 px-4">6-10 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Boom Sprayer</td>
              <td className="py-3 px-4">₹1,00,000 - ₹2,00,000</td>
              <td className="py-3 px-4">₹500-800/acre</td>
              <td className="py-3 px-4">Year-round</td>
              <td className="py-3 px-4">5-8 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Reaper/Harvester (Small)</td>
              <td className="py-3 px-4">₹2,00,000 - ₹3,50,000</td>
              <td className="py-3 px-4">₹1,500-2,500/acre</td>
              <td className="py-3 px-4">Harvest season</td>
              <td className="py-3 px-4">4-6 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Straw Reaper</td>
              <td className="py-3 px-4">₹1,50,000 - ₹2,50,000</td>
              <td className="py-3 px-4">₹1,000-1,500/acre</td>
              <td className="py-3 px-4">Harvest season</td>
              <td className="py-3 px-4">3-5 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Puddle (Paddy transplanter)</td>
              <td className="py-3 px-4">₹1,50,000 - ₹2,50,000</td>
              <td className="py-3 px-4">₹1,200-1,800/acre</td>
              <td className="py-3 px-4">Kharif season</td>
              <td className="py-3 px-4">4-6 months</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Mulcher</td>
              <td className="py-3 px-4">₹80,000 - ₹1,50,000</td>
              <td className="py-3 px-4">₹600-1,000/acre</td>
              <td className="py-3 px-4">Year-round</td>
              <td className="py-3 px-4">6-10 months</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Potato Planter/Digger</td>
              <td className="py-3 px-4">₹1,00,000 - ₹2,00,000</td>
              <td className="py-3 px-4">₹1,500-2,500/acre</td>
              <td className="py-3 px-4">Potato season</td>
              <td className="py-3 px-4">3-5 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Shuru mein 5-7 implements se start karein. Jo zyada demand mein ho wahi lo. Punjab/Haryana mein happy seeder, laser leveler, straw reaper ki demand zyada hai. MP/UP mein seed drill, rotavator, boom sprayer. South India mein paddy transplanter, puddle.
      </p>

      <p className="mb-6">
        Apne state ke Agriculture Department ki official website ya agrimachinery.nic.in portal par jaakar implement-wise subsidy ki exact list check karein. Har state mein rates thode alag hote hain.
      </p>

      <Image 
        src="/images/kisanguides/pchc-portal-implements.webp" 
        alt="Various agricultural implements - Rotavator, Happy Seeder, Laser Leveler displayed at CHC" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Complete Setup Cost: Kitna Paisa Lagega?
      </h2>
      
      <p className="mb-4">
        Ek realistic CHC setup ka budget banate hain. Punjab/Haryana ke liye hai yeh - high demand area. Bijli ka bill kam karne ke liye aap{' '}
        <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          PM-KUSUM Solar Pump Yojana
        </Link>{' '}
        bhi check kar sakte hain jisse operational cost reduce hoti hai.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">CHC Setup Cost (1 Tractor + 8 Implements)</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Tractor (55 HP, new):</span>
            <span className="font-semibold">₹7,00,000 - ₹9,00,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Rotavator (7 feet):</span>
            <span className="font-semibold">₹1,00,000 - ₹1,30,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Happy Seeder:</span>
            <span className="font-semibold">₹1,40,000 - ₹1,70,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Laser Land Leveler:</span>
            <span className="font-semibold">₹3,00,000 - ₹3,80,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Seed Drill (Multi-crop):</span>
            <span className="font-semibold">₹80,000 - ₹1,10,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Boom Sprayer:</span>
            <span className="font-semibold">₹1,20,000 - ₹1,80,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Straw Reaper:</span>
            <span className="font-semibold">₹1,80,000 - ₹2,30,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Mulcher:</span>
            <span className="font-semibold">₹1,00,000 - ₹1,40,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Other (tools, spare parts):</span>
            <span className="font-semibold">₹50,000 - ₹80,000</span>
          </li>
          <li className="flex justify-between border-t-2 border-gray-300 dark:border-gray-600 pt-2 font-bold">
            <span>Total Machinery Cost:</span>
            <span>₹16,70,000 - ₹21,40,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Shed/Storage (1000 sq ft):</span>
            <span className="font-semibold">₹1,50,000 - ₹2,50,000</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Working Capital (6 months):</span>
            <span className="font-semibold">₹2,00,000 - ₹3,00,000</span>
          </li>
          <li className="flex justify-between border-t-2 border-gray-300 dark:border-gray-600 pt-2 font-bold text-lg">
            <span>Total Investment:</span>
            <span className="text-green-700 dark:text-green-400">₹20,20,000 - ₹26,90,000</span>
          </li>
          <li className="flex justify-between bg-green-50 dark:bg-green-900/20 p-2 rounded mt-2">
            <span className="font-semibold">Less: 40% Subsidy (on implements only):</span>
            <span className="font-semibold text-green-700 dark:text-green-400">₹5,00,000 - ₹7,00,000</span>
          </li>
          <li className="flex justify-between bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded font-bold">
            <span>Net Investment (After Subsidy):</span>
            <span className="text-yellow-800 dark:text-yellow-300">₹15,20,000 - ₹19,90,000</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Yeh investment lagti hai. Par loans available hain. Hamari{' '}
        <Link href="/articles/KisanTractorLoan2026" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          Kisan Tractor Loan Guide 2026
        </Link>{' '}
        mein detailed process bataya gaya hai - 7 saal tak ke liye milta hai, interest rate 9-11%. Implements par SMAM subsidy mil jayegi.
      </p>

      <p className="mb-6">
        Group (7-10 farmers) milkar apply karte hain toh approval chances zyada hote hain. Har farmer apna contribution dega, sab milkar CHC chalayenge. FPO (Farmer Producer Organization) banakar bhi apply kar sakte hain - FPOs ko priority milti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Application Process: Step-by-Step Guide
      </h2>
      
      <p className="mb-4">
        CHC kholne ka process thoda lamba hai par straightforward hai. Yeh steps follow karein:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 1: Eligibility Check Karein</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Farmer hona chahiye. Zameen honi chahiye - owned ya leased. Tractor hona chahiye ya khareedne ki capacity. Group application mein kam se kam 7-10 farmers hone chahiye.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 2: State Agriculture Department Se Milein</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Zila ke Agriculture Officer ya Deputy Director se milein. Current guidelines denge wo. Apne state ke Agriculture Department ki official website ya agrimachinery.nic.in par state-wise CHC registration details check karein. Digital record ke liye AgriStack portal bhi check kar sakte hain.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 3: Application Form Bharein</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Online ya offline form bharein. Documents lagayein:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Aadhaar card, PAN card</li>
            <li>Land documents (registry/lease)</li>
            <li>Bank passbook (last 6 months)</li>
            <li>Caste certificate (if SC/ST)</li>
            <li>Tractor RC (agar already hai)</li>
            <li>Machinery quotations (3 dealers se)</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 4: Site Inspection</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Department ke officers aapki zameen aur shed dekhne aayenge. Location suitable hai, storage space hai, plan realistic hai - yeh check karenge.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 5: Approval aur Subsidy Release</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Approval milne par bank loan arrange karein. Machinery khareedein. Phir subsidy claim karein. Subsidy seedhe bank account mein aati hai, ya bank loan mein adjust ho jati hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 6: CHC Portal Par Register Karein</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Machinery ki details state CHC portal par upload karein. Kisaan online dekh kar book kar sakte hain. Bahut important hai yeh - bina registration ke portal se orders nahi milenge.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Poora process 3-6 months lag sakta hai. Patience rakhein. Application mein koi fee nahi lagti - sab free hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
          Official Resources:
        </h3>
        <ExternalLinkButton 
          url="https://agrimachinery.nic.in"
          label="Visit Agriculture Machinery Portal - agrimachinery.nic.in"
        />
      </div>

      <Image 
        src="/images/kisanguides/chc-portal-application.webp" 
        alt="Farmer filling CHC subsidy application form with documents at agriculture office" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Business Model: Mahine Ka Kitna Kamai Hogi?
      </h2>
      
      <p className="mb-4">
        Sabse important sawaal - paisa kitna banega? Ek illustrative calculation dekhte hain.
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-amber-900 dark:text-amber-200 italic">
          <strong>Disclaimer:</strong> Ye rates/figures illustrative hain aur area, season, aur competition ke hisaab se significantly vary kar sakte hain. Apne local market ka research zaroor karein before investment decision.
        </p>
      </div>

      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Implement</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Monthly Usage (avg)</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Rate</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Monthly Revenue</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Tractor (rental)</td>
              <td className="py-3 px-4">150 hours</td>
              <td className="py-3 px-4">₹900/hour</td>
              <td className="py-3 px-4">₹1,35,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Rotavator</td>
              <td className="py-3 px-4">60 acres</td>
              <td className="py-3 px-4">₹700/acre</td>
              <td className="py-3 px-4">₹42,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Happy Seeder</td>
              <td className="py-3 px-4">40 acres</td>
              <td className="py-3 px-4">₹1,200/acre</td>
              <td className="py-3 px-4">₹48,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Laser Leveler</td>
              <td className="py-3 px-4">50 acres</td>
              <td className="py-3 px-4">₹1,000/acre</td>
              <td className="py-3 px-4">₹50,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Boom Sprayer</td>
              <td className="py-3 px-4">80 acres</td>
              <td className="py-3 px-4">₹600/acre</td>
              <td className="py-3 px-4">₹48,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Straw Reaper</td>
              <td className="py-3 px-4">30 acres (seasonal)</td>
              <td className="py-3 px-4">₹1,200/acre</td>
              <td className="py-3 px-4">₹36,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Other implements</td>
              <td className="py-3 px-4">Various</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4">₹40,000</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-bold text-green-800 dark:text-green-300" colSpan={3}>Total Monthly Revenue</td>
              <td className="py-3 px-4 font-bold text-green-700 dark:text-green-400">₹3,99,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 font-bold text-gray-900 dark:text-gray-100">
        Expenses:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Diesel (tractor): ₹60,000-80,000/month</li>
        <li>Driver salary (1-2 drivers): ₹25,000-35,000</li>
        <li>Maintenance & repairs: ₹15,000-25,000</li>
        <li>Insurance: ₹3,000-5,000/month</li>
        <li>Misc (transport, misc): ₹10,000-15,000</li>
        <li><strong>Total Monthly Expenses: ₹1,13,000-1,60,000</strong></li>
      </ul>

      <p className="mb-4 font-bold text-lg text-gray-900 dark:text-gray-100">
        Net Monthly Profit: ₹2,40,000-2,85,000
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

      <Image 
        src="/images/kisanguides/chc-portal-profit.webp" 
        alt="CHC profit calculation chart showing monthly revenue and expenses breakdown" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700 dark:text-red-400">
        Real Risks - Jo Koi Nahi Batata
      </h2>
      
      <p className="mb-4">
        CHC business sunne mein simple lagta hai. Par risks hain. Yeh woh cheezein hain jo aapko pata honi chahiye - sachhai yeh hai.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Machine Breakdown (Sabse Badi Problem)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Machinery kharab ho gayi toh rental income band. Customers doosre CHC par shift ho jayenge. Season mein har machine ko 100-150 hours chalti hai - wear and tear bahut hota hai. Spare parts aur local mechanic ka intezam pehle se rakho. Budget mein 10-15% maintenance cost zaroor rakho.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Payment Recovery</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Kisaan aksar udhaar par lete hain - fasal katne ke baad denge. Kabhi-kabhi payment 2-3 mahine late ho jata hai. Kuch cases mein default bhi ho jata hai. Advance payment ya partial payment ka system rakho. Cash flow manage karna mushkil ho jata hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Driver Issues</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Achha driver milna mushkil hai. Jo milta hai wo season mein chhod deta hai - doosra CHC zyada deta hai. Ya phir drunk driving, careless operation se machinery kharab ho jati hai. Driver training aur monitoring zaroori hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Competition</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Area mein doosre CHC khul gaye toh rates gir sakte hain. 2019 mein Punjab mein CHC boom hua, kai areas mein rates 20-30% gir gaye. Location selection bahut zaroori hai - aise area chuno jahan competition kam ho.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Weather Dependency</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Baadh, sukha, ya unexpected rainfall se kheti ka schedule bigad jata hai. Demand suddenly drop ho sakti hai. 2022 mein Punjab mein unexpected October rain se kai farmers ki fasal kharab hui - CHC owners ki bhi income kam hui.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Loan Burden</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Business expected level par nahi chala toh loan EMI dena mushkil ho jata hai. ₹15-20 lakh ka loan hai toh monthly ₹25,000-35,000 EMI hai. 2-3 mahine income kam hui toh default ho sakta hai. Apni capacity se zyada loan mat lo.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        CHC Portal Par Kaise Register Karein?
      </h2>
      
      <p className="mb-4">
        Har state ka apna CHC portal hai. Yahan machinery ki details daalte hain, kisaan online book kar sakte hain. Bahut important hai yeh - bina registration ke portal se orders nahi milenge.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">State-wise CHC Registration:</h3>
        <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
          Apne state ke Agriculture Department ki official website ya{' '}
          <a href="https://agrimachinery.nic.in" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            agrimachinery.nic.in
          </a>{' '}
          portal par state-wise CHC registration details check karein. Har state ka alag registration process aur portal ho sakta hai.
        </p>
      </div>

      <p className="mb-4 text-gray-900 dark:text-gray-100 font-semibold">
        Registration process:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
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
        Agriculture business loan ke liye bhi CHC registration zaroori hai. Banks ko proof chahiye ki aap actually kaam kar rahe hain.
      </p>

      <Image 
        src="/images/kisanguides/chc-portal-registration.webp" 
        alt="Farmer registering on state CHC portal using computer at agriculture office" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Training Kahan Se Lein?
      </h2>
      
      <p className="mb-4">
        CHC chalane ke liye technical knowledge zaroori hai. Machinery operation, maintenance, customer handling - sab seekhna padta hai. Bina training ke machinery jaldi kharab ho jati hai. Irrigation implements use karne ke liye drip-sprinkler guide bhi padh sakte hain.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
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

      <p className="mb-6 text-gray-900 dark:text-gray-100 font-semibold">
        Training mein aap seekhenge:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Machinery operation (har implement ka sahi use)</li>
        <li>Basic maintenance (daily, weekly, monthly)</li>
        <li>Troubleshooting (common problems ka solution)</li>
        <li>Customer handling aur rate negotiation</li>
        <li>Record keeping (accounting, usage logs)</li>
        <li>Safety protocols</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Scale-Up Strategy: Chhote Se Bade Tak
      </h2>
      
      <p className="mb-4">
        CHC business ko step-by-step scale karein. Direct badi investment mat karo. Dheere dheere badho.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Phase 1: Pilot (0-6 months)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Existing tractor ke saath 3-4 implements lo. Subsidy ke liye apply karo. 10-15 regular customers banao. Seekho ki kya kaam kar raha hai, kya nahi. Investment: ₹5-8 lakh (after subsidy).
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Phase 2: Growth (6-18 months)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            20-30 regular customers ho jayein tab aur implements lo. 1-2 drivers hire karo. Nearby villages mein expand karo. CHC portal par active raho. Investment: ₹8-12 lakh additional.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Phase 3: Expansion (18+ months)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Ab doosra tractor lo, aur high-value implements (combine harvester, paddy transplanter). Multiple drivers hire karo. Nearby blocks mein expand karo. Agar possible ho toh doosra CHC kholo doosri location par. Value addition ke liye{' '}
            <Link href="/articles/kisanguides/PMFMEYojana" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              PMFME Yojana Guide
            </Link>{' '}
            se subsidy le sakte hain. Investment: ₹15-25 lakh.
          </p>
        </div>
      </div>

      <Image 
        src="/images/kisanguides/chc-portal-scale.webp" 
        alt="CHC business expansion from small to large scale - multiple tractors and implements" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Kya Aapke Liye Sahi Hai? Final Decision Framework
      </h2>
      
      <p className="mb-4 text-gray-900 dark:text-gray-100 font-semibold">
        CHC business unke liye hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Already farmer hain, zameen hai</li>
        <li>Tractor already hai (ya khareedne ki capacity hai)</li>
        <li>₹15-20 lakh initial investment kar sakte hain (after subsidy)</li>
        <li>Technical knowledge hai machinery ki (ya seekhne ki ichha)</li>
        <li>Customer handling skills hain</li>
        <li>Daily 8-10 hours de sakte hain (season mein)</li>
        <li>Area mein demand hai (dairy belt, progressive farmers)</li>
        <li>Patience hai (pehle 6 mahine building phase hai)</li>
      </ul>

      <p className="mb-4 text-gray-900 dark:text-gray-100 font-semibold">
        CHC business unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
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
        CHC ek emerging opportunity hai. Sarkar isko bahut promote kar rahi hai. Sahi se execute karein toh 2-3 saal mein ₹2-3 lakh per month profit possible hai. Par mehnat bahut hai - yeh passive income nahi hai.
      </p>

      <p className="mb-6">
        Seriously interested hain toh pehle apne nazdeeki Agriculture Department office jayein. Wahan officers hote hain jo CHC ke baare mein guide karte hain. Exact guidelines batayenge, application mein help karenge.
      </p>

      {/* Related Articles Section - Stylish UI/UX */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">🚜</span>
          Related Articles on KisanStatus
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Farming machinery aur subsidies se related aur bhi helpful guides:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link 
            href="/articles/kisanguides/BakriPalanYojana"
            className="flex items-center gap-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🐐</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Bakri Palan NLM Subsidy</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">50% subsidy on goat farming</div>
            </div>
          </Link>

          <Link 
            href="/articles/kisanguides/PMatsyaSampada" 
            className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🐟</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PM Matsya Sampada</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Fisheries subsidy scheme</div>
            </div>
          </Link>

          <Link 
            href="/articles/PmfbyCropInsurance2026"
            className="flex items-center gap-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🛡️</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PMFBY Crop Insurance</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Crop insurance protection</div>
            </div>
          </Link>

          <Link 
            href="/articles/PmKisanMaandhanYojanaPension"
            className="flex items-center gap-3 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">👴</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PM Kisan Maandhan</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Pension for farmers</div>
            </div>
          </Link>

          <Link 
            href="/articles/kisanguides/MushroomKheti"
            className="flex items-center gap-3 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-4 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🍄</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Mushroom Kheti</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Complete mushroom guide</div>
            </div>
          </Link>
        </div>
      </div>

      <p className="mt-8 mb-6 italic text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <strong>Note:</strong> Is article ki information general guidance ke liye hai. Costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se alag ho sakte hain. Financial decisions lene se pehle agriculture officers ya irrigation experts se consult karna samajhdari hai. Guidelines aur prices periodically update hote hain - latest info ke liye official sources check karein.
      </p>
    </article>
  );
}