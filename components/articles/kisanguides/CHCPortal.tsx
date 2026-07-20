'use client';

import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Hiring Centre (CHC) 2026: Tractor Rental Business Guide',
  description: 'CHC portal guide. Janein tractor aur farm implements kiraye par dekar paisa kaise kamayein, SMAM subsidy, aur real profit calculation.',
  keywords: ['custom hiring centre', 'CHC portal', 'tractor rental business', 'SMAM subsidy', 'farm machinery rental', 'agricultural equipment'],
  authors: [{ name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'Custom Hiring Centre (CHC) 2026: Tractor Rental Business Guide',
    description: 'CHC portal guide. Janein tractor aur farm implements kiraye par dekar paisa kaise kamayein, SMAM subsidy, aur real profit calculation.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/custom-hiring-centre-chc-portal',
    images: [{ url: 'https://kisanstatus.com/images/kisanguides/chc-portal-hero.webp', width: 1200, height: 630, alt: 'Custom Hiring Centre with Tractor and Farm Implements' }],
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Custom Hiring Centre (CHC) 2026: Tractor Rental Business Guide', 
    description: 'CHC portal guide. Janein tractor aur farm implements kiraye par dekar paisa kaise kamayein.', 
    images: ['https://kisanstatus.com/images/kisanguides/chc-portal-hero.webp'] 
  },
  alternates: { canonical: 'https://kisanstatus.com/articles/custom-hiring-centre-chc-portal' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://kisanstatus.com/#organization', name: 'KisanStatus.com', url: 'https://kisanstatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp', width: 250, height: 60 } },
    { '@type': 'BreadcrumbList', '@id': 'https://kisanstatus.com/articles/custom-hiring-centre-chc-portal/#breadcrumb', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com/' }, { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://kisanstatus.com/articles' }, { '@type': 'ListItem', position: 3, name: 'CHC Portal', item: 'https://kisanstatus.com/articles/custom-hiring-centre-chc-portal' }] },
    { '@type': 'Article', '@id': 'https://kisanstatus.com/articles/custom-hiring-centre-chc-portal/#article', headline: 'Custom Hiring Centre (CHC) 2026: Tractor Rental Business Guide', description: 'CHC portal guide. Janein tractor aur farm implements kiraye par dekar paisa kaise kamayein.', author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' }, publisher: { '@type': 'Organization', name: 'KisanStatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' } }, datePublished: '2026-01-15', dateModified: '2026-07-21', mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kisanstatus.com/articles/custom-hiring-centre-chc-portal/' } }
  ]
};

export default function CHCPortal() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Image 
        src="/images/kisanguides/chc-portal-hero.webp" 
        alt="Custom Hiring Centre with Tractor and Farm Implements" 
        width={1200} 
        height={630} 
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Custom Hiring Centre (CHC) 2026: Tractor aur Implements Kiraye Par De Kar Paisa Kamayein
      </h1>
      
      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Ground Reality:</strong> Field reports aur CHC operators ke practical experience ke mutabik, jo log bina proper market research ke seedha 5-10 lakh ka equipment kharid lete hain, wo aksar pehle saal mein hi struggle karte hain. Lekin agar sahi planning aur location selection ho, toh yeh ek highly profitable business ban sakta hai.
        </p>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Bharat mein 85% se zyada kisaanon ke paas 2 hectare (5 acre) se kam zameen hai. Aise chhote kisaan ke liye ₹8-10 lakh ka naya tractor khareedna namumkin hai. Yahan aapka role aata hai - aap machinery khareedte hain, aur unhe ghanton ya acre ke hisaab se kiraye par dete hain.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        SMAM Subsidy: Sach aur Jhooth
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sub-Mission on Agricultural Mechanization (SMAM) ke tahat sarkar CHC kholne ke liye 40% se 50% tak subsidy deti hai. Lekin yahan ek bahut bada confusion hai.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5 mb-6 not-prose">
        <h3 className="font-bold text-lg mb-3 text-red-900 dark:text-red-200 flex items-center gap-2">
          <span>⚠️</span> Sabse Bada Jhooth: "Free Tractor"
        </h3>
        <p className="text-sm text-red-800 dark:text-red-300">
          Koi bhi scheme aapko <strong>Tractor par subsidy nahi deti</strong>. Subsidy sirf tractor ke peeche lagne wale implements (Rotavator, Happy Seeder, Laser Leveler, etc.) par milti hai. Agar koi agent aapse kehta hai ki "₹50,000 do, free tractor dilwa dunga", toh wo 100% scam hai.
        </p>
      </div>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <caption className="sr-only">SMAM Subsidy Breakdown for CHC</caption>
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
              <td className="py-3 px-4">Custom Hiring Centre (Group/FPO)</td>
              <td className="py-3 px-4 font-semibold">40% - 50%</td>
              <td className="py-3 px-4">10 Lakh tak</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kaunsa Samaan Khareedein? (Regional Demand)
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Har ilake ki demand alag hoti hai. Punjab mein Happy Seeder ki bhookh hai, jabki MP ya UP mein Rotavator aur Seed Drill zyada bikte hain.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Implement</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Andazan Kimat</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Kiraya (Avg)</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Peak Season</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Rotavator (7-8 ft)</td>
              <td className="py-3 px-4">₹90K - ₹1.4L</td>
              <td className="py-3 px-4">₹600 - ₹800/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Happy Seeder</td>
              <td className="py-3 px-4">1.2L - ₹1.8L</td>
              <td className="py-3 px-4">₹1,000 - ₹1,500/acre</td>
              <td className="py-3 px-4">Oct - Nov</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Laser Land Leveler</td>
              <td className="py-3 px-4">2.5L - ₹4.0L</td>
              <td className="py-3 px-4">₹800 - ₹1,200/acre</td>
              <td className="py-3 px-4">Saal bhar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Total Investment aur Hidden Costs
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ek standard 55 HP Tractor + 6-7 implements ke setup ka realistic hisab:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">1 Tractor + 7 Implements Setup</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Tractor (55 HP, Naya):</span>
            <span className="font-semibold">₹7.5 - ₹9.0 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Additional Implements:</span>
            <span className="font-semibold">₹8.0 - ₹12.0 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Shed / Storage:</span>
            <span className="font-semibold">₹1.5 - ₹3.0 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Working Capital:</span>
            <span className="font-semibold">₹1.0 - ₹1.5 Lakh</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Project Cost:</span>
            <span>₹18.0 - ₹25.5 Lakh</span>
          </li>
          <li className="flex justify-between text-green-700 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 p-2 rounded mt-2">
            <span>Sarkari Subsidy (40% on implements):</span>
            <span>- ₹4.0 - ₹6.0 Lakh</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Is initial capital ko manage karne ke liye <Link href="/articles/KisanTractorLoan2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Tractor Loan Guide</Link> mein detail mein bataya gaya hai ki kaise aap 7-8 saal ke liye kam byaaj (9-11%) par loan le sakte hain.
      </p>

      <Image 
        src="/images/kisanguides/chc-portal-registration.webp" 
        alt="CHC Portal Registration and Application Process" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Apply Kaise Karein? (Step-by-Step)
      </h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        <li>District Agriculture Office (DAO) visit karein.</li>
        <li>Priority list aur application form lein.</li>
        <li>3 alag-alag dealers se rate quotation lein.</li>
        <li>DPR (Detailed Project Report) banayein.</li>
        <li>State portal ya <a href="https://agrimachinery.nic.in" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">agrimachinery.nic.in</a> par register karein.</li>
        <li>Documents upload karein.</li>
        <li>Physical verification ka wait karein.</li>
        <li>Approval aane par machinery khareedein.</li>
      </ol>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
        <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm">⚠️ Common Mistakes:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Driver ka jhagda:</strong> Achha driver dhoondhna mushkil hai. "Base Salary + Incentive" model banayein.</li>
          <li><strong>Udhaari:</strong> Naye customers se 50% advance lein.</li>
          <li><strong>Machine breakdown:</strong> Hamesha extra belts, blades stock mein rakhein.</li>
          <li><strong>Off-season:</strong> Garmiyon mein demand 60-70% gir jati hai.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Monthly Income vs Expense: Ground Reality
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Peak season (Oct-Nov aur March-April) mein kamai achhi hoti hai:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <thead className="bg-amber-100 dark:bg-amber-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-amber-900 dark:text-amber-200">Source</th>
              <th className="py-3 px-4 border-b text-left text-amber-900 dark:text-amber-200">Monthly Usage</th>
              <th className="py-3 px-4 border-b text-left text-amber-900 dark:text-amber-200">Gross Income</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4">Tractor</td>
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
              <td className="py-3 px-4">40,000</td>
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
        <li><strong>Diesel & Lubricants:</strong> ₹50,000 - ₹70,000</li>
        <li><strong>Driver Salary:</strong> ₹25,000 - ₹35,000</li>
        <li><strong>Repair & Maintenance:</strong> ₹10,000 - ₹15,000</li>
        <li><strong>Total Monthly Expense:</strong> <span className="font-bold text-red-600 dark:text-red-400">₹88,000 - ₹1,25,000</span></li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-8 border-l-4 border-blue-600 not-prose">
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Net Profit (Peak Season):</strong> ₹80,000 se ₹1,20,000 prati mahina.<br/>
          <span className="text-sm italic">Note: Lean season mein yeh profit aadha ho jata hai.</span>
        </p>
      </div>

      <Image 
        src="/images/kisanguides/chc-portal-scale.webp" 
        alt="CHC Business Scaling and Growth Strategy" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Dheere-Dheere Scale Kaise Karein?
      </h2>
      <ul className="list-none space-y-4 mb-8 not-prose">
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">P1</span>
          <div>
            <strong className="block text-gray-900 dark:text-gray-100">Phase 1: Shuruat (Mahine 0-6)</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Apne existing tractor ke saath 3-4 implements se shuru karein. Investment: ₹5-8 Lakh.</span>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">P2</span>
          <div>
            <strong className="block text-gray-900 dark:text-gray-100">Phase 2: Stabilization (Mahine 6-18)</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">1-2 aur expensive implements add karein. Ek full-time driver hire karein.</span>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">P3</span>
          <div>
            <strong className="block text-gray-900 dark:text-gray-100">Phase 3: Expansion (Mahine 18+)</strong>
            <span className="text-sm text-gray-700 dark:text-gray-300">Doosra tractor ya bada machine add karein. <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM FME Yojana</Link> se processing unit bhi laga sakte hain.</span>
          </div>
        </li>
      </ul>

      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Haan, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Aapke paas khud ki zameen aur tractor hai.</li>
            <li>• Machinery ki basic maintenance samajh sakte hain.</li>
            <li>• Gaon ke logon se achha rapport bana sakte hain.</li>
            <li>• Shuruat ke 6 mahine chalne ka financial buffer hai.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Nahi, agar:</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• "Passive income" ki expectation hai.</li>
            <li>• Machinery ke technical mamlon se darte hain.</li>
            <li>• 2-3 mahine mein paisa wapas chahiye.</li>
            <li>• Aapke ilake mein pehle se bahut CHC hain.</li>
          </ul>
        </div>
      </div>

      <Image 
        src="/images/kisanguides/chc-portal-profit.webp" 
        alt="CHC Business Profit Calculation and ROI Analysis" 
        width={800} 
        height={450} 
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose" 
      />

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Yeh article sirf jankari aur guidance ke liye hai. Machinery ke daam, subsidy ke pratishat, aur sarkari rules samay-samay par badal sakte hain. Koi bhi paisa invest karne se pehle qualified professionals se consult karein. Last updated: July 2026.
        </p>
      </div>
    </article>
  );
}