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
        CHC Business 2026: Tractor Kiraye Par De Kar Paisa Kamayein
      </h1>
      
      <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
        Kisaan bhaiyon, suno. Aapke paas tractor hai? Doosre kisaan bhi hain jinke paas nahi hai. Beech mein aap aa jao — paisa banao. Yeh hai CHC ka dhandha.
      </p>
      
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        85% kisaanon ke paas 2 hectare se kam zameen hai. Tractor khareedna inke bas ki baat nahi. Par kheti toh karni hai. Yahan aapka kaam shuru hota hai.
      </p>

      <Image 
        src="/images/kisanguides/pchc-portal-farmer-tractor.webp" 
        alt="Indian farmer operating tractor at Custom Hiring Centre for rental services" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Yeh dhandha hai kya?
      </h2>
      
      <p className="mb-4">
        Simple si baat hai. Sarkar se subsidy le kar machinery khareedo. Gaon ke kisaanon ko kiraye par do. Rent lo. Paisa kamao.
      </p>
      
      <p className="mb-4">
        Socho — Uber jaisa. Aapke paas gaadi (tractor) hai. Zarooratmand aapke paas aayega. Aap kiraya loge. Bas.
      </p>

      <p className="mb-6">
        Abhi har block mein CHC nahi hai. 20-25% blocks mein hi hai. Scope bahut bacha hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        SMAM: 40-50% sarkari madad
      </h2>
      
      <p className="mb-4">
        CHC kholne ke liye sarkar 40-50% paisa deti hai. Tractor chhod kar baaki sab implements par.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3 text-blue-900 dark:text-blue-200">Kitna milega:</h3>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Chhote kisaan (2 hectare tak):</span>
            <span className="font-semibold">50%</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Baaki sab kisaan:</span>
            <span className="font-semibold">40%</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>SC/ST/Mahila kisaan:</span>
            <span className="font-semibold">50%</span>
          </li>
          <li className="flex justify-between border-b border-blue-100 dark:border-blue-800 pb-2">
            <span>Pahadi states:</span>
            <span className="font-semibold">50-60%</span>
          </li>
          <li className="flex justify-between">
            <span>Group mein apply (7-10 kisaan):</span>
            <span className="font-semibold">Jaldi approval</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Tractor par subsidy nahi milti. Par uske saath lagne wale saare samaan par milti hai — rotavator, happy seeder, laser leveler, sab.
      </p>

      <p className="mb-6">
        Example: ₹30 lakh ki machinery khareedi. 40% subsidy = ₹12 lakh. Aapko sirf ₹18 lakh dene hain. Bada fayda hai.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-lg mb-3 text-yellow-800 dark:text-yellow-300">
          Punjab/Haryana/UP/Delhi wale dhyan dein
        </h3>
        <p className="mb-2 text-yellow-900 dark:text-yellow-200">
          Aapke liye alag scheme hai — CRM. Happy Seeder aur straw management samaan par <strong>80% subsidy</strong> milti hai. Yeh SMAM se alag hai. Dono ka fayda ek saath nahi le sakte. CRM wala behtar hai aapke liye.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Kaunsa samaan khareedna chahiye?
      </h2>
      
      <p className="mb-4">
        Har jagah demand alag hoti hai. Par kuch cheezein har jagah chalti hain.
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-amber-900 dark:text-amber-200 italic">
          <strong>Note:</strong> Ye daam sirf andaza hain. Aapke area ke hisaab se upar neeche ho sakte hain. Pehle local market check karo.
        </p>
      </div>

      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Samaan</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Kimat</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Kiraya</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Season</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Paisa wapas</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Rotavator</td>
              <td className="py-3 px-4">₹80K-1.5L</td>
              <td className="py-3 px-4">₹600-800/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">6-8 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Happy Seeder</td>
              <td className="py-3 px-4">₹1.2-1.8L</td>
              <td className="py-3 px-4">₹1,000-1,500/acre</td>
              <td className="py-3 px-4">Oct-Nov</td>
              <td className="py-3 px-4">4-6 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Laser Leveler</td>
              <td className="py-3 px-4">₹2.5-4L</td>
              <td className="py-3 px-4">₹800-1,200/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">8-12 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Seed Drill</td>
              <td className="py-3 px-4">₹60K-1.2L</td>
              <td className="py-3 px-4">₹400-600/acre</td>
              <td className="py-3 px-4">Bijai ka time</td>
              <td className="py-3 px-4">6-10 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Boom Sprayer</td>
              <td className="py-3 px-4">₹1-2L</td>
              <td className="py-3 px-4">₹500-800/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">5-8 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Reaper/Harvester</td>
              <td className="py-3 px-4">₹2-3.5L</td>
              <td className="py-3 px-4">₹1,500-2,500/acre</td>
              <td className="py-3 px-4">Katne ka time</td>
              <td className="py-3 px-4">4-6 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Straw Reaper</td>
              <td className="py-3 px-4">₹1.5-2.5L</td>
              <td className="py-3 px-4">₹1,000-1,500/acre</td>
              <td className="py-3 px-4">Katne ka time</td>
              <td className="py-3 px-4">3-5 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Paddy Transplanter</td>
              <td className="py-3 px-4">₹1.5-2.5L</td>
              <td className="py-3 px-4">₹1,200-1,800/acre</td>
              <td className="py-3 px-4">Kharif</td>
              <td className="py-3 px-4">4-6 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Mulcher</td>
              <td className="py-3 px-4">₹80K-1.5L</td>
              <td className="py-3 px-4">₹600-1,000/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">6-10 mahine</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Potato Planter</td>
              <td className="py-3 px-4">₹1-2L</td>
              <td className="py-3 px-4">₹1,500-2,500/acre</td>
              <td className="py-3 px-4">Aloo ka time</td>
              <td className="py-3 px-4">3-5 mahine</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Shuru mein 5-7 samaan se kaam chalao. Jo zyada bikta ho wahi lo. Punjab/Haryana mein happy seeder, laser leveler, straw reaper zyada bikte hain. MP/UP mein seed drill, rotavator, sprayer. South mein paddy transplanter.
      </p>

      <p className="mb-6">
        Apne state ke Agriculture Department ki site ya agrimachinery.nic.in par exact list check karo. Har state mein thoda farq hota hai.
      </p>

      <Image 
        src="/images/kisanguides/pchc-portal-implements.webp" 
        alt="Various agricultural implements - Rotavator, Happy Seeder, Laser Leveler displayed at CHC" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Total kharcha kitna aayega?
      </h2>
      
      <p className="mb-4">
        Punjab/Haryana jaisa high-demand area maan ke chalte hain. Bijli ka bill kam karne ke liye{' '}
        <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          Solar Pump Yojana
        </Link>{' '}
        bhi dekh lo.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">1 Tractor + 8 Samaan ka hisaab</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Tractor (55 HP, naya):</span>
            <span className="font-semibold">₹7-9 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Rotavator (7 feet):</span>
            <span className="font-semibold">₹1-1.3 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Happy Seeder:</span>
            <span className="font-semibold">₹1.4-1.7 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Laser Leveler:</span>
            <span className="font-semibold">₹3-3.8 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Seed Drill:</span>
            <span className="font-semibold">₹80K-1.1 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Boom Sprayer:</span>
            <span className="font-semibold">₹1.2-1.8 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Straw Reaper:</span>
            <span className="font-semibold">₹1.8-2.3 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Mulcher:</span>
            <span className="font-semibold">₹1-1.4 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Aur chhote samaan:</span>
            <span className="font-semibold">₹50-80K</span>
          </li>
          <li className="flex justify-between border-t-2 border-gray-300 dark:border-gray-600 pt-2 font-bold">
            <span>Total samaan:</span>
            <span>₹16.7-21.4 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>Shed/Storage:</span>
            <span className="font-semibold">₹1.5-2.5 lakh</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span>6 mahine ka kharcha:</span>
            <span className="font-semibold">₹2-3 lakh</span>
          </li>
          <li className="flex justify-between border-t-2 border-gray-300 dark:border-gray-600 pt-2 font-bold text-lg">
            <span>Total paisa lagayenge:</span>
            <span className="text-green-700 dark:text-green-400">₹20.2-26.9 lakh</span>
          </li>
          <li className="flex justify-between bg-green-50 dark:bg-green-900/20 p-2 rounded mt-2">
            <span className="font-semibold">Sarkar degi (40%):</span>
            <span className="font-semibold text-green-700 dark:text-green-400">₹5-7 lakh</span>
          </li>
          <li className="flex justify-between bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded font-bold">
            <span>Aapko dena padega:</span>
            <span className="text-yellow-800 dark:text-yellow-300">₹15.2-19.9 lakh</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Itna paisa ek saath nahi hai? Loan le sakte ho.{' '}
        <Link href="/articles/KisanTractorLoan2026" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          Tractor Loan Guide
        </Link>{' '}
        padho — 7 saal tak ka loan milta hai, 9-11% byaaj.
      </p>

      <p className="mb-6">
        7-10 kisaan milkar group bana ke apply karo. Approval jaldi milta hai. FPO bana ke bhi apply kar sakte ho — unhe priority milti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Apply kaise karein?
      </h2>
      
      <p className="mb-4">
        Thoda lamba process hai par seedha hai. Step-by-step follow karo:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 1: Kaun ban sakta hai</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Kisaan hona chahiye. Zameen honi chahiye. Tractor hona chahiye ya khareedne ki taakat. Group mein 7-10 kisaan hone chahiye.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 2: Zila office jao</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Agriculture Officer se milo. Current rules batayenge. Apne state ki site ya agrimachinery.nic.in par details check karo.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 3: Form bhariye</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Online ya offline. Ye kagaz lagenge:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Aadhaar, PAN</li>
            <li>Zameen ka kagaz</li>
            <li>Bank passbook (last 6 mahine)</li>
            <li>Jaati praman (agar SC/ST)</li>
            <li>Tractor RC (agar hai)</li>
            <li>3 dukaan se quotation</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 4: Aapki zameen dekhenge</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Department ke adhikari aayenge. Shed hai, jagah sahi hai, plan theek hai — ye check karenge.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 5: Paisa milega</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Haan milne par bank se loan lo. Samaan khareedo. Phir sarkar ka paisa claim karo. Seedhe account mein aayega ya loan mein adjust hoga.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Step 6: Portal par naam likhwao</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            State CHC portal par apna samaan dikhayo. Kisaan online dekh kar book karenge. Bina iske order nahi milenge.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Poora kaam 3-6 mahine mein ho jata hai. Koi fees nahi lagti. Sab free hai.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">
          Sarkari links:
        </h3>
        <ExternalLinkButton 
          url="https://agrimachinery.nic.in"
          label="Agriculture Machinery Portal"
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
        Mahine ka kitna banega?
      </h2>
      
      <p className="mb-4">
        Sabse zaroori sawaal. Ek andaza dekho:
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-amber-900 dark:text-amber-200 italic">
          <strong>Note:</strong> Ye sirf andaza hai. Aapke area, season aur competition ke hisaab se alag hoga.
        </p>
      </div>

      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Samaan</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Mahine mein kitni baar</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Rate</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Kamai</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Tractor</td>
              <td className="py-3 px-4">150 ghante</td>
              <td className="py-3 px-4">₹900/ghanta</td>
              <td className="py-3 px-4">₹1,35,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Rotavator</td>
              <td className="py-3 px-4">60 acre</td>
              <td className="py-3 px-4">₹700/acre</td>
              <td className="py-3 px-4">₹42,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Happy Seeder</td>
              <td className="py-3 px-4">40 acre</td>
              <td className="py-3 px-4">₹1,200/acre</td>
              <td className="py-3 px-4">₹48,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Laser Leveler</td>
              <td className="py-3 px-4">50 acre</td>
              <td className="py-3 px-4">₹1,000/acre</td>
              <td className="py-3 px-4">₹50,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Boom Sprayer</td>
              <td className="py-3 px-4">80 acre</td>
              <td className="py-3 px-4">₹600/acre</td>
              <td className="py-3 px-4">₹48,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Straw Reaper</td>
              <td className="py-3 px-4">30 acre</td>
              <td className="py-3 px-4">₹1,200/acre</td>
              <td className="py-3 px-4">₹36,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Baaki samaan</td>
              <td className="py-3 px-4">Alag-alag</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4">₹40,000</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20">
              <td className="py-3 px-4 font-bold text-green-800 dark:text-green-300" colSpan={3}>Total mahine ki kamai</td>
              <td className="py-3 px-4 font-bold text-green-700 dark:text-green-400">₹3,99,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 font-bold text-gray-900 dark:text-gray-100">
        Kharcha:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Diesel: ₹60-80K/mahina</li>
        <li>Driver (1-2): ₹25-35K</li>
        <li>Repair: ₹15-25K</li>
        <li>Bima: ₹3-5K</li>
        <li>Aur: ₹10-15K</li>
        <li><strong>Total kharcha: ₹1.13-1.6 lakh</strong></li>
      </ul>

      <p className="mb-4 font-bold text-lg text-gray-900 dark:text-gray-100">
        Haath mein aayega: ₹2.4-2.85 lakh/mahina
      </p>

      <p className="mb-6">
        Ye tab jab poora season chal raha ho. Shuru ke 6 mahine mein ₹1-1.5 lakh hi aayega. Customer banane mein time lagta hai. Doosre saal ₹2-3 lakh tak pahunch jayega.
      </p>

      <p className="mb-4">
        Loan EMI bhi hai. ₹15 lakh ka loan, 7 saal, 10% — toh ₹26K/mahina EMI. Phir bhi ₹2 lakh+ bachta hai.
      </p>

      <p className="mb-6">
        Season ka farq yaad rakho. Kharif (June-Oct) aur Rabi (Oct-March) mein dhamaal hai. Garmi (April-June) mein 40-50% kam. Pura saal ka hisaab rakhna padega.
      </p>

      <Image 
        src="/images/kisanguides/chc-portal-profit.webp" 
        alt="CHC profit calculation chart showing monthly revenue and expenses breakdown" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700 dark:text-red-400">
        Problems jo koi nahi batata
      </h2>
      
      <p className="mb-4">
        Dhandha achha hai par mushkilein hain. Pehle se jaan lo.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Machine kharab ho gayi</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Sabse badi dikkat. Kharab hui toh kiraya band. Customer doosre CHC par chala jayega. Season mein 100-150 ghante chalti hai — toot-phoot hoti hai. Spare parts aur mechanic pehle se rakh lo. 10-15% repair ke liye alag rakho.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Paisa nahi dete</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Kisaan udhaar par lete hain. Fasal katne ke baad denge. 2-3 mahine late ho jata hai. Kabhi default bhi. Advance lo ya hissa hissa lo. Cash flow sambhalna mushkil hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Driver ka jhagda</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Achha driver milta nahi. Jo milta hai season mein chhod deta hai — doosra zyada deta hai. Ya nashe mein chalata hai, machine toot ti hai. Training aur nazar rakhna zaroori hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Doosra CHC aa gaya</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Ek hi gaon mein do CHC ho gaye toh rate gir jayenge. 2019 mein Punjab mein yahi hua — 20-30% kam ho gaye. Jagah soch samajh ke chuno.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Mausam ka khel</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Baadh, sukha, ya achanak baarish — kheti bigad jati hai. Demand achanak band. 2022 mein Punjab mein October mein baarish hui — sabki kamai kam hui.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Loan ka bojh</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            ₹15-20 lakh ka loan hai toh ₹25-35K EMI hai. 2-3 mahine kamai hui toh default ho sakta hai. Apni aukaat se zyada mat uthao.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Portal par kaise register honge?
      </h2>
      
      <p className="mb-4">
        Har state ka alag portal hai. Samaan dikhayo, kisaan online book karega. Bina iske order nahi milenge.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">State-wise registration:</h3>
        <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
          Apne state ki Agriculture Department site ya{' '}
          <a href="https://agrimachinery.nic.in" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            agrimachinery.nic.in
          </a>{' '}
          par check karo. Har state ka alag tareeka hai.
        </p>
      </div>

      <p className="mb-4 text-gray-900 dark:text-gray-100 font-semibold">
        Kaise karein:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Portal par jao, "CHC Registration" dhoondo</li>
        <li>Apna naam, pata, phone daalo</li>
        <li>Samaan ki details daalo — brand, model, saal, photo</li>
        <li>Rate card banao — har samaan ka kiraya</li>
        <li>Calendar set karo — kab available ho</li>
        <li>Bank account daalo (paisa aane ke liye)</li>
        <li>Submit karo, verify hone par kaam shuru</li>
      </ol>

      <p className="mb-6">
        Ek baar register ho gaye toh kisaan online dekh kar book karenge. Payment bhi online hogi. Udhaar ka jhagda kam hoga.
      </p>

      <p className="mb-6">
        Bank loan ke liye bhi yeh registration kaam aati hai. Proof milta hai ki aap sach mein dhandha kar rahe ho.
      </p>

      <Image 
        src="/images/kisanguides/chc-portal-registration.webp" 
        alt="Farmer registering on state CHC portal using computer at agriculture office" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md w-full object-cover" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Training kahan se lein?
      </h2>
      
      <p className="mb-4">
        Bina seekhe mat koodo. Machine jaldi tootegi. Customer bhi naraz hoga.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          <strong>State Agriculture Department:</strong> Free training dete hain. 3-7 din ki hoti hai.
        </li>
        <li>
          <strong>CIMAE, Bhopal:</strong> Achhi training. Advanced cheezein sikhte hain.
        </li>
        <li>
          <strong>Company wale:</strong> Mahindra, Sonalika, John Deere — apne dealers se training dete hain.
        </li>
        <li>
          <strong>KVK:</strong> Har district mein hai. CHC management sikhaate hain.
        </li>
        <li>
          <strong>Pehle se CHC chala rahe hain:</strong> Unke paas 5-7 din kaam karo. Sabse behtareen training hai yeh.
        </li>
      </ul>

      <p className="mb-6 text-gray-900 dark:text-gray-100 font-semibold">
        Kya seekhoge:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Har samaan ka sahi istemal</li>
        <li>Roz-marra ki safai</li>
        <li>Chhoti problems ka ilaj</li>
        <li>Customer se baat-cheet</li>
        <li>Hisab-kitab rakhna</li>
        <li>Suraksha ke niyam</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800 dark:text-green-400">
        Dheere dheere badho
      </h2>
      
      <p className="mb-4">
        Ek din mein bada mat bano. Step-by-step chalo.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Phase 1: Shuruat (0-6 mahine)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Apna tractor + 3-4 samaan. Subsidy ke liye apply karo. 10-15 regular customer banao. Dekho kya bikta hai. Investment: ₹5-8 lakh (subsidy ke baad).
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Phase 2: Badhao (6-18 mahine)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            20-30 customer ho gaye toh aur samaan lo. 1-2 driver rakh lo. Paas ke gaon mein bhi jao. Portal par active raho. Investment: ₹8-12 lakh aur.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Phase 3: Dhamaka (18+ mahine)</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Doosra tractor lo. Bade samaan — combine harvester, paddy transplanter. Multiple driver. Doosri jagah bhi khol lo.{' '}
            <Link href="/articles/PMFMEYojana" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              PMFME Yojana
            </Link>{' '}
            se 35% aur mil sakta hai. Investment: ₹15-25 lakh.
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
        Aapke liye sahi hai ya nahi?
      </h2>
      
      <p className="mb-4 text-gray-900 dark:text-gray-100 font-semibold">
        CHC aapke liye hai agar:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Kisaan ho, zameen hai</li>
        <li>Tractor hai ya khareed sakte ho</li>
        <li>₹15-20 lakh laga sakte ho (subsidy ke baad)</li>
        <li>Machinery samajhte ho ya seekhna chahte ho</li>
        <li>Customer se baat kar sakte ho</li>
        <li>Roz 8-10 ghante de sakte ho</li>
        <li>Area mein demand hai</li>
        <li>Dhairy hai — shuruat mein time lagta hai</li>
      </ul>

      <p className="mb-4 text-gray-900 dark:text-gray-100 font-semibold">
        CHC aapke liye nahi agar:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Machinery se darte ho</li>
        <li>Customer handle nahi kar sakte</li>
        <li>Jaldi paisa chahiye</li>
        <li>Risk nahi le sakte</li>
        <li>Non-agricultural area mein ho</li>
      </ul>

      <p className="mb-6">
        Pehli category mein ho toh CHC bahut achha dhandha hai. 40-50% sarkari madad mil rahi hai — iska fayda uthao. Par yaad rakho — yeh sofe baithne ka kaam nahi hai. Roz mehnat karni padegi.
      </p>

      <p className="mb-6">
        <strong>Meri salah:</strong> Pehle apne area ka survey karo. 5-10 CHC wale se baat karo. Unki mushkilein jaano. Phir zila office jao. Uske baad chhote se shuru karo. Confidence aaye toh badho.
      </p>

      <p className="mb-6">
        CHC ek achha mauka hai. Sarkar bhi promote kar rahi hai. Sahi se karo toh 2-3 saal mein ₹2-3 lakh mahina aasani se hai. Par mehnat bahut hai — yeh "passive income" nahi hai.
      </p>

      <p className="mb-6">
        Sach mein interested ho toh pehle apne nazdeeki Agriculture Department office jao. Wahan officers hain jo guide karenge. Exact tareeka batayenge.
      </p>

      {/* Related Articles */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">🚜</span>
          Aur bhi padho
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          In guides se aur fayda hoga:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link 
            href="/articles/BakriPalanYojana"
            className="flex items-center gap-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🐐</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Bakri Palan Subsidy</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">50% sarkari madad</div>
            </div>
          </Link>

          <Link 
            href="/articles/PMatsyaSampada" 
            className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🐟</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Machli Palan Yojana</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Fisheries subsidy</div>
            </div>
          </Link>

          <Link 
            href="/articles/PmfbyCropInsurance2026"
            className="flex items-center gap-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🛡️</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Fasal Bima Yojana</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Fasal ka bima</div>
            </div>
          </Link>

          <Link 
            href="/articles/PmKisanMaandhanYojanaPension"
            className="flex items-center gap-3 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">👴</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Kisan Pension</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">₹3000/mahina pension</div>
            </div>
          </Link>

          <Link 
            href="/articles/MushroomKheti"
            className="flex items-center gap-3 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-4 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🍄</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Mushroom Kheti</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Kam jagah mein zyada paisa</div>
            </div>
          </Link>
        </div>
      </div>

      <p className="mt-8 mb-6 italic text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <strong>Note:</strong> Ye sirf jankari hai. Kimat, subsidy aur rules aapke area ke hisaab se alag ho sakte hain. Paisa lagane se pehle zila office ya kisi expert se salah lein. Last updated: July 2026.
      </p>
    </article>
  );
}
