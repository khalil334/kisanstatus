'use client';

import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function CHCPortal() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <Image 
        src="/images/kisanguides/chc-portal-hero.webp" 
        alt="Custom Hiring Centre with Tractor and Farm Implements - SMAM Subsidy Guide 2026" 
        width={800} 
        height={450} 
        className="rounded-xl mb-8 shadow-md w-full object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        CHC Business 2026: Tractor aur Implements Kiraye Par De Kar Paisa Kamayein (Ground Reality)
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600 not-prose">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Seedhi baat:</strong> CHC (Custom Hiring Centre) koi "get-rich-quick" scheme nahi hai. Lekin agar aapke paas tractor hai aur aap isse ek proper business ki tarah manage karte hain, toh yeh gaon ka sabse stable aur profitable dhandha ban sakta hai. Yahan koi hawa mein nahi, sirf ground-level facts aur numbers hain.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Bharat mein 85% se zyada kisaanon ke paas 2 hectare (5 acre) se kam zameen hai. Aise chhote kisaan ke liye ₹8-10 lakh ka naya tractor khareedna namumkin hai, lekin unhe kheti toh karni hi hai. Yahan aapka role aata hai. Aap machinery khareedte hain, aur unhe ghanton ya acre ke hisaab se kiraye par dete hain. Simple "Uber for Tractors" model, lekin gaon ke hisaab se.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Abhi bhi desh ke 70-75% blocks mein proper, registered CHC nahi hai. Scope bahut bada hai, lekin competition bhi badh raha hai. Isliye sirf tractor rakhna kaafi nahi, sahi planning aur management chahiye.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        SMAM Subsidy: Sach aur Jhooth
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sub-Mission on Agricultural Mechanization (SMAM) ke tahat sarkar CHC kholne ke liye 40% se 50% tak subsidy deti hai. Lekin yahan ek bahut bada confusion hai jiska fayda local agents uthate hain.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5 mb-6 not-prose">
        <h3 className="font-bold text-lg mb-3 text-red-900 dark:text-red-200 flex items-center gap-2">
          <span>⚠️</span> Sabse Bada Jhooth: "Free Tractor"
        </h3>
        <p className="text-sm text-red-800 dark:text-red-300">
          Koi bhi scheme aapko <strong>Tractor par subsidy nahi deti</strong>. Subsidy sirf tractor ke peeche lagne wale implements (Rotavator, Happy Seeder, Laser Leveler, etc.) par milti hai. Agar koi agent aapse kehta hai ki "₹50,000 do, free tractor dilwa dunga", toh wo 100% scam hai. Door raho.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Subsidy ka asli breakdown kuch aisa hota hai:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Shreni (Category)</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Subsidy % (Implement par)</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Max Limit (Approx)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Chhote/Seemant Kisan (2 hectare tak)</td>
              <td className="py-3 px-4 font-semibold">50%</td>
              <td className="py-3 px-4">₹5 Lakh tak</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Baaki sabhi Kisan</td>
              <td className="py-3 px-4 font-semibold">40%</td>
              <td className="py-3 px-4">₹5 Lakh tak</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">SC/ST/Mahila Kisan</td>
              <td className="py-3 px-4 font-semibold">50%</td>
              <td className="py-3 px-4">₹5 Lakh tak</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Pahadi States (J&K, HP, Uttarakhand, NE)</td>
              <td className="py-3 px-4 font-semibold">50% - 60%</td>
              <td className="py-3 px-4">₹5 Lakh tak</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Custom Hiring Centre (Group/FPO of 7-11 members)</td>
              <td className="py-3 px-4 font-semibold">40% - 50%</td>
              <td className="py-3 px-4">₹10 Lakh tak (Higher limit)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Pro Tip:</strong> Agar aap Punjab, Haryana, ya Western UP se hain, toh SMAM ke alawa <strong>CRM (Crop Residue Management)</strong> scheme bhi check karein. Isme Happy Seeder aur Straw Management equipment par 80% tak subsidy milti hai, jo SMAM se kahin behtar hai. Dono schemes ka ek saath fayda nahi le sakte, toh apne hisaab se calculate karo.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kaunsa Samaan Khareedein? (Regional Demand ke Hisaab Se)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Har ilake ki demand alag hoti hai. Punjab mein Happy Seeder ki bhookh hai, jabki MP ya UP mein Rotavator aur Seed Drill zyada bikte hain. South India mein Paddy Transplanter ka demand year-round rehta hai. Shuruat mein 5-7 high-demand implements se start karein.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Implement</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Andazan Kimat</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Kiraya (Avg)</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Peak Season</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">ROI Time</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Rotavator (7-8 ft)</td>
              <td className="py-3 px-4">₹90K - ₹1.4L</td>
              <td className="py-3 px-4">₹600 - ₹800/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">6-8 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Happy Seeder / Zero Till</td>
              <td className="py-3 px-4">₹1.2L - ₹1.8L</td>
              <td className="py-3 px-4">₹1,000 - ₹1,500/acre</td>
              <td className="py-3 px-4">Oct - Nov</td>
              <td className="py-3 px-4">4-5 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Laser Land Leveler</td>
              <td className="py-3 px-4">₹2.5L - ₹4.0L</td>
              <td className="py-3 px-4">₹800 - ₹1,200/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">8-12 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Seed Drill (Pneumatic)</td>
              <td className="py-3 px-4">₹70K - ₹1.2L</td>
              <td className="py-3 px-4">₹400 - ₹600/acre</td>
              <td className="py-3 px-4">Bijai (Jun/Nov)</td>
              <td className="py-3 px-4">6-9 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Boom Sprayer (Tractor mounted)</td>
              <td className="py-3 px-4">₹1.0L - ₹2.0L</td>
              <td className="py-3 px-4">₹500 - ₹800/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
              <td className="py-3 px-4">5-8 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Straw Reaper / Balers</td>
              <td className="py-3 px-4">₹1.5L - ₹3.0L</td>
              <td className="py-3 px-4">₹1,000 - ₹1,800/acre</td>
              <td className="py-3 px-4">Apr - May (Gehu)</td>
              <td className="py-3 px-4">3-5 mahine</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Paddy Transplanter (8-row)</td>
              <td className="py-3 px-4">₹2.0L - ₹3.5L</td>
              <td className="py-3 px-4">₹1,500 - ₹2,500/acre</td>
              <td className="py-3 px-4">Jun - Jul</td>
              <td className="py-3 px-4">4-6 mahine</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Hamesha apne nazdeeki <strong>Krishi Vigyan Kendra (KVK)</strong> ya District Agriculture Officer se puch kar hi final list banayein. Har state ki "Priority List" alag hoti hai, aur agar aap priority list wala samaan khareedte hain, toh subsidy approval bahut jaldi milta hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Total Investment aur Hidden Costs (Real Hisab)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Bahut log sirf machinery ka daam dekhte hain, lekin CHC chalane mein "hidden costs" hote hain jo profit kha jate hain. Ek standard 55 HP Tractor + 6-7 implements ke setup ka realistic hisab dekhein:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">1 Tractor + 7 Implements Setup (Approx)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Tractor (55 HP, Naya, with basic implements):</span>
            <span className="font-semibold">₹7.5 - ₹9.0 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Additional Implements (Rotavator, Seeder, Leveler, Sprayer, etc.):</span>
            <span className="font-semibold">₹8.0 - ₹12.0 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Shed / Secure Storage (Construction ya Rent):</span>
            <span className="font-semibold">₹1.5 - ₹3.0 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Initial Working Capital (Diesel, Driver advance, Marketing):</span>
            <span className="font-semibold">₹1.0 - ₹1.5 Lakh</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Project Cost:</span>
            <span>₹18.0 - ₹25.5 Lakh</span>
          </li>
          <li className="flex justify-between text-green-700 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 p-2 rounded mt-2">
            <span>Sarkari Subsidy (Approx 40% on implements):</span>
            <span>- ₹4.0 - ₹6.0 Lakh</span>
          </li>
          <li className="flex justify-between text-yellow-800 dark:text-yellow-300 font-bold text-base bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded mt-1">
            <span>Aapko Arrange Karna Hai (Loan + Own):</span>
            <span>₹14.0 - ₹19.5 Lakh</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aapke paas itna cash nahi hai, toh bank loan ek achha option hai. Tractor aur implements dono collateral ke taur par kaam aate hain. <Link href="/articles/KisanTractorLoan2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Tractor Loan Guide</Link> mein detail mein bataya gaya hai ki kaise aap 7-8 saal ke liye kam byaaj (9-11%) par loan le sakte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Group Formation Hack:</strong> Agar aap akele apply kar rahe hain, toh process thoda slow ho sakta hai. Agar aap 7-10 kisaanon ko mila kar ek "Group" ya "FPO" banakar apply karte hain, toh sarkar aapki application ko priority deti hai aur subsidy limit bhi thodi zyada hoti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Subsidy Lene Ka Sahi Process (Bina Agent Ke)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Process thoda lamba hai (3-6 mahine), lekin agar aap khud track karein toh bilkul seedha hai. Kisi "consultant" ko 10-15% commission dene ki zaroorat nahi hai.
      </p>

      <div className="space-y-6 mb-8 not-prose">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">District Agriculture Office (DAO) Visit</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Seedha apne zila ke Krishi Vibhag ke office jayein. Wahan se current year ki "Priority List" aur application form lein. Officer se puchen ki is waqt kis implement par approval jaldi mil raha hai.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Quotations aur DPR Taiyar Karein</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Kam se kam 3 alag-alag authorized dealers se rate quotation lein (dated aur signed). Inke basis par ek simple Detailed Project Report (DPR) banayein jisme bataya ho ki aapka CHC kahan hoga aur kitne kisaanon ko serve karega.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Online Portal par Registration</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Apne state ke specific agriculture portal ya <a href="https://agrimachinery.nic.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">agrimachinery.nic.in</a> par register karein. Saare documents (Aadhaar, Land Record, Bank Passbook, Caste Certificate if applicable) upload karein.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Physical Verification</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Application submit karne ke baad, department ka koi na koi officer aapki zameen aur proposed shed ki physical verification karne aayega. Ensure karein ki jagah saaf ho aur boundary dikhai de.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Purchase aur Reimbursement</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Approval aane ke baad, aapko machinery khareedni hoti hai aur bill submit karna hota hai. Uske baad subsidy ki raashi seedhe aapke bank account mein DBT ke through aati hai, ya phir aapke loan account mein adjust ho jati hai.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Monthly Income vs Expense: Ground Reality
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh wo hisab hai jo koi brochure mein nahi likhta. Peak season (Oct-Nov aur March-April) mein kamai achhi hoti hai, lekin summer (May-July) mein demand 60-70% gir jati hai. Ek realistic, conservative monthly estimate (peak season mein) kuch aisa dikhta hai:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
          <thead className="bg-amber-100 dark:bg-amber-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-amber-900 dark:text-amber-200">Source</th>
              <th className="py-3 px-4 border-b text-left text-amber-900 dark:text-amber-200">Monthly Usage</th>
              <th className="py-3 px-4 border-b text-left text-amber-900 dark:text-amber-200">Gross Income</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Tractor (Harrowing/Transport)</td>
              <td className="py-3 px-4">120 Hours</td>
              <td className="py-3 px-4">₹1,08,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Rotavator</td>
              <td className="py-3 px-4">50 Acres</td>
              <td className="py-3 px-4">₹35,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Laser Leveler / Seeder</td>
              <td className="py-3 px-4">40 Acres</td>
              <td className="py-3 px-4">₹40,000</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4">Sprayer / Reaper</td>
              <td className="py-3 px-4">30 Acres</td>
              <td className="py-3 px-4">₹25,000</td>
            </tr>
            <tr className="bg-green-50 dark:bg-green-900/20 font-bold">
              <td className="py-3 px-4 text-green-800 dark:text-green-300" colSpan={2}>Total Gross Monthly Income</td>
              <td className="py-3 px-4 text-green-700 dark:text-green-400">₹2,08,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-semibold">Ab isme se kharcha nikalte hain:</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Diesel & Lubricants:</strong> ₹50,000 - ₹70,000 (Sabse bada kharcha)</li>
        <li><strong>Driver Salary (1-2 drivers):</strong> ₹25,000 - ₹35,000 (Base + Incentive)</li>
        <li><strong>Repair & Maintenance:</strong> ₹10,000 - ₹15,000 (Belts, blades, grease)</li>
        <li><strong>Insurance & Misc:</strong> ₹3,000 - ₹5,000</li>
        <li><strong>Total Monthly Expense:</strong> <span className="font-bold text-red-600 dark:text-red-400">₹88,000 - ₹1,25,000</span></li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-8 border-l-4 border-blue-600 not-prose">
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Net Profit (Peak Season):</strong> ₹80,000 se ₹1,20,000 prati mahina. <br/>
          <span className="text-sm italic">Note: Lean season (garmiyon) mein yeh profit aadha ya usse bhi kam ho jata hai. Isliye saal bhar ka average nikal kar hi loan ki EMI (approx ₹25K-₹30K) plan karein.</span>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        5 Badi Problems Jo Koi Pehle Nahi Batata
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dhandha profitable hai, lekin isme wo mushkilein hain jo sirf field mein utarne ke baad pata chalti hain:
      </p>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">1. Driver Ka Jhagda (Sabse Badi Dikkat)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Achha aur imaandaar driver dhoondhna sone ka anda dhoondhne jaisa hai. Peak season mein drivers gaon chhod kar doosri jagah chale jate hain jahan zyada paisa milta hai. <strong>Solution:</strong> Sirf salary par driver na rakhein. "Base Salary + ₹50 per acre incentive" ka model banayein taaki wo khud zyada kaam karne mein interested rahe.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">2. Udhaari aur Payment Delay</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Gaon mein rishton ki wajah se kisaan kaam karwa kar kehte hain "Fasal katne ke baad dunga". 3-4 mahine baad paisa mangne par jhagda hota hai. <strong>Solution:</strong> Naye customers se 50% advance lo. Sirf purane aur trusted customers ko hi 15 din ka credit do.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">3. Machine Breakdown During Peak</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Jab sabse zyada demand hoti hai (jaise Gehu katne ka time), tabhi belt tootna ya blade kharab hona aam baat hai. Agar machine 2 din kharab rahi, toh customer doosre CHC ke paas chala jayega aur wapas nahi aayega. <strong>Solution:</strong> Hamesha extra belts, blades, aur grease stock mein rakhein. Ek local mechanic se pakka samjhauta kar lein.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">4. Off-Season Mein Paisa Kaise Aaye?</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">May aur June mein kheti ka kaam kam hota hai. Agar aapne sirf kheti par depend rehna hai, toh 4 mahine loss hoga. <strong>Solution:</strong> Off-season mein tractor ko construction material dhone, mitti khodai (earthmoving) ke liye trailer lagakar, ya phir <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Solar Pump</Link> installation jaise kaamon mein lagayein.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">5. Local Competition aur Rate War</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Agar aapke gaon mein pehle se 2-3 CHC hain, aur aap teesra khol rahe hain, toh log aapas mein rate kam karke market kharab kar denge. <strong>Solution:</strong> Jagah chunne se pehle 10-15 km ke radius ka survey karein. Agar demand supply se zyada hai, tabhi enter karein.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Dheere-Dheere Scale Kaise Karein? (3-Phase Plan)
      </h2>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek din mein bada business nahi banta. Isse step-by-step build karein:
      </p>

      <ul className="list-none space-y-4 mb-8 not-prose">
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">P1</span>
          <div>
            <strong className="block text-gray-900 dark:text-gray-100">Phase 1: Shuruat (Mahine 0-6)</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Apne existing tractor ke saath sirf 3-4 high-demand implements (jaise Rotavator, Seed Drill, Sprayer) se shuru karein. Subsidy ke liye apply karein. Focus sirf 10-15 loyal customers banane par ho. Investment: ₹5-8 Lakh (own + subsidy).</span>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">P2</span>
          <div>
            <strong className="block text-gray-900 dark:text-gray-100">Phase 2: Stabilization (Mahine 6-18)</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Jab cash flow stable ho jaye, toh 1-2 aur expensive implements (jaise Laser Leveler ya Happy Seeder) add karein. Ek full-time driver hire karein. Apne CHC ko state ke online portal par register karwa dein taaki online bookings aana shuru hon.</span>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">P3</span>
          <div>
            <strong className="block text-gray-900 dark:text-gray-100">Phase 3: Expansion (Mahine 18+)</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Ab aap doosra tractor ya ek bada machine (jaise Combine Harvester ya Paddy Transplanter) add kar sakte hain. Agar aap kisanon ki produce ko process karna chahte hain, toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> ke tahat food processing unit ke liye bhi 35% subsidy le sakte hain.</span>
          </div>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kya Yeh Business Aapke Liye Sahi Hai?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Aapke paas khud ki zameen aur tractor hai.</li>
            <li>• Aap machinery ki basic maintenance khud samajh sakte hain.</li>
            <li>• Aap gaon ke logon se achha rapport (rishta) bana sakte hain.</li>
            <li>• Aapke paas shuruat ke 6 mahine chalne ka financial buffer hai.</li>
            <li>• Aap rozana 8-10 ghante field mein de sakte hain.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Aap sochte hain ki yeh "passive income" hai aur aap ghar baithe paisa kamayenge.</li>
            <li>• Aap machinery ke technical mamlon se bilkul darte hain.</li>
            <li>• Aapko 2-3 mahine ke andar hi apna paisa wapas chahiye.</li>
            <li>• Aapke ilake mein pehle se bahut saare CHC hain aur kheti kam hai.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Meri aakhri salah:</strong> Bina survey ke chhalaang na lagayein. Apne ilake ke 2-3 purane CHC owners se jaa kar milo. Unse unki sabse badi problem puchho. Uske baad hi apne zila office ka chakkar lagayein. CHC ek bahut achha business model hai, lekin yeh unhi ke liye hai jo mehnat aur dimaag dono lagane ko taiyar hain.
      </p>

      {/* Related Articles */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">📚</span>
          Aur Bhi Padhein (Related Guides)
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          In verified articles se aapke farming business ko aur clarity milegi:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link 
            href="/articles/bakri-palan-yojana-nlm-subsidy"
            className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🐐</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Bakri Palan Subsidy (NLM)</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">50% sarkari madad aur pura process</div>
            </div>
          </Link>

          <Link 
            href="/articles/pm-matsya-sampada-yojana-fish-farming" 
            className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🐟</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PM Matsya Sampada Yojana</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Machli palan par 60% tak subsidy</div>
            </div>
          </Link>

          <Link 
            href="/articles/PmfbyCropInsurance2026"
            className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🛡️</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">PMFBY Fasal Bima Yojana</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Fasal kharab hone par pura nuksan cover</div>
            </div>
          </Link>

          <Link 
            href="/articles/PmKisanMaandhanYojanaPension"
            className="flex items-start gap-3 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">👴</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Kisan Maandhan Pension</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">60 saal ki umar ke baad ₹3000/mahina</div>
            </div>
          </Link>

          <Link 
            href="/articles/mushroom-kheti-nhb-subsidy"
            className="flex items-start gap-3 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-4 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🍄</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">Mushroom (Khumbi) Kheti</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Kam jagah mein high profit business</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article sirf jankari aur guidance ke liye hai. Machinery ke daam, subsidy ke pratishat, aur sarkari rules samay-samay par aur state ke hisaab se badal sakte hain. Koi bhi paisa invest karne se pehle apne nazdeeki Krishi Vibhag (Agriculture Department) office se latest guidelines zaroor confirm karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}