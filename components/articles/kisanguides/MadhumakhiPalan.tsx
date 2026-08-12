import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { Metadata } from 'next';
import { AuthorBox, FAQBlock } from '@/components/ArticleShared';
import { AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';
import GuideDisclaimer from '@/components/GuideDisclaimer';
import { getArticleBySlug } from '@/lib/articles-data';

export const metadata: Metadata = {
  title: 'Madhumakhi Palan 2026: KVIC Subsidy, Profit & Complete Guide',
  description: 'Madhumakhi palan (beekeeping) ka complete guide. Janein KVIC subsidy, bee box price, Apis mellifera farming aur honey business ki ground reality aur profit margin.',
  keywords: ['madhumakhi palan', 'beekeeping subsidy 2026', 'KVIC honey mission', 'chhote scale par bee farming kaise shuru karein', 'bee box price', 'honey business profit in india', 'apis mellifera farming'],
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  openGraph: {
    title: 'Madhumakhi Palan 2026: KVIC Subsidy, Profit & Complete Guide',
    description: 'Madhumakhi palan ka complete guide. Janein bee farming, KVIC subsidy, bee box price aur honey business ki ground reality.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/madhumakhi-palan-kvic-subsidy',
    images: [{ url: 'https://kisanstatus.com/images/kisanguides/madhumakhi-palan-hero.webp', width: 1200, height: 630, alt: 'Beekeeping Boxes in Mustard Field - Apis Mellifera Colony' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhumakhi Palan 2026: KVIC Subsidy, Profit & Complete Guide',
    description: 'Madhumakhi palan ka complete guide. Janein bee farming, KVIC subsidy, bee box price aur honey business ki ground reality.',
    images: ['https://kisanstatus.com/images/kisanguides/madhumakhi-palan-hero.webp']
  },
  alternates: { canonical: 'https://kisanstatus.com/articles/madhumakhi-palan-kvic-subsidy' },
};

const madhumakhiPalanFaqs = [
  {
    q: 'Kya madhumakhi ke kaatne se pehle allergy test karwana zaroori hai?',
    a: 'Haan, agar aapko pehle se asthma ya kisi insect sting se severe reaction ki history hai, toh doctor se consult karna chahiye. Anaphylactic shock ek real risk hai, bhale hi wo rare ho. Pehli baar hive kholte waqt hamesha kisi experienced saathi ke saath rahein.',
  },
  {
    q: 'Padosi pesticide spray kare toh?',
    a: (
      <>
        Turant upay mushkil hai, lekin agar advance mein pata chal jaye, toh hive ke entrance ko temporary mesh se band karke 2-3 din ke liye dark, cool jagah par shift kar dena chahiye. Long-term mein <Link href="/articles/vermi-compost-business-guide" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">organic farming zones</Link> ke paas hi apiary setup karna safe hai.
      </>
    ),
    schemaText:
      'Turant upay mushkil hai, lekin agar advance mein pata chal jaye, toh hive ke entrance ko temporary mesh se band karke 2-3 din ke liye dark, cool jagah par shift kar dena chahiye. Long-term mein organic farming zones ke paas hi apiary setup karna safe hai.',
  },
  {
    q: 'Terrace par bee box rakhna safe hai?',
    a: 'Technically possible hai, lekin practical nahi. Bees ko paas mein paani ka source aur ample flora chahiye hota hai. Terrace par paani ki kami aur padosiyon ki shikayat ka risk hamesha rehta hai.',
  },
  {
    q: 'Purane frames reuse karne ka risk?',
    a: 'Bahut zyada risk. Purane frames mein American Foulbrood jaisi deadly diseases ke spores saalon tak zinda reh sakte hain. Naye beginner ko hamesha naye, sterilized frames ke saath shuruat karni chahiye.',
  },
];

export default function MadhumakhiPalan() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <Image
        src="/images/kisanguides/madhumakhi-palan-hero.webp"
        alt="Beekeeping Boxes in Mustard Field - Apis Mellifera Colony"
        width={1200}
        height={630}
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Madhumakhi Palan 2026: Shahad Se Kamayein, Khet Ka Yield Badhayein - Complete Guide
      </h1>

      <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Sach kahoon toh:</strong> Jo log sirf YouTube videos dekhkar bina practical training ke seedha 40-50 boxes kharid kar khet mein phenk dete hain, wo aksar pehle saal ke lean period (May-June) mein hi demotivate ho kar chhod dete hain. Lekin agar isse ek proper business ki tarah treat kiya jaye, toh iski "dohri kamai" (shahad + pollination) ise ek highly profitable venture bana deti hai.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Himachal Pradesh aur Uttarakhand ke apple belts mein toh kisaan khud beekeepers ko paise dekar apne orchards mein colonies rakhwate hain, kyunki unhe pata hai ki bina pollination ke phal ki quality aur quantity dono 30-40% tak gir jati hai. Yeh article aapko KVIC subsidy, breed selection, aur ground-level management ki complete jankari dega.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Apis Mellifera vs. Apis Cerana: Sahi Choice Kaise Karein?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Naye log aksar desi madhumakhi (Apis cerana indica) ki taraf jhukte hain, yeh soch kar ki yeh local hai aur sambhalna aasaan hoga. Commercial scale par yeh soch mehngi pad sakti hai. Desi madhumakhi mein "swarming" (colony ka bhag jana) ki tendency bahut zyada hoti hai, jisse production unpredictable ho jati hai.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <caption className="sr-only">Comparison between Apis Mellifera and Apis Cerana for beekeeping</caption>
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Feature</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Apis Mellifera (European)</th>
              <th scope="col" className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Apis Cerana (Indian)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Shahad Production</td>
              <td className="py-3 px-4">8-15 kg/colony/year</td>
              <td className="py-3 px-4">3-6 kg/colony/year</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Colony Size</td>
              <td className="py-3 px-4">40,000-60,000 bees</td>
              <td className="py-3 px-4">10,000-20,000 bees</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Swarming Tendency</td>
              <td className="py-3 px-4">Kam (hive mein stable rehti hai)</td>
              <td className="py-3 px-4">Zyada (jaldi bhag jati hai)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Best For</td>
              <td className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Commercial beekeeping</td>
              <td className="py-3 px-4">Small scale, specific hilly areas</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Note: Latest KVIC guidelines ke anusaar, Apis mellifera ko commercial projects ke liye zyada recommend kiya jata hai.</p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Agar serious income chahiye, toh Apis mellifera hi sahi choice hai. Iski production capacity 2-3 guna zyada hai. Colony khareedte waqt vendor ki credibility check karna behad zaroori hai. Ek healthy, young queen wali colony ka rate market mein ₹3,500-4,500 ke aas-paas hota hai, lekin yeh long term mein behtar production deti hai.
      </p>

      <Image
        src="/images/kisanguides/beekeeping-equipment-tools.webp"
        alt="Essential Beekeeping Equipment and Tools - Smoker, Veil, Hive Tool, and Protective Gear"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        50-Box Unit Setup: Realistic Cost Breakdown
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Commercial level par shuru karne ke liye 50 boxes ek realistic starting point mana jata hai. Dhyan rahe, yeh number field conditions, state, aur vendor ke hisaab se badal sakta hai. Neeche diya gaya breakdown approximate market rates par based hai:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">50-Box Beekeeping Unit Setup (Latest Estimates)</h3>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex justify-between">
            <span>Bee Boxes (50 colonies with bees & frames):</span>
            <span className="font-semibold">₹1.75 Lakh - ₹2.25 Lakh</span>
          </li>
          <li className="flex justify-between">
            <span>Beekeeping Tools (smoker, veil, hive tool, gloves):</span>
            <span className="font-semibold">₹5,000 - ₹8,000</span>
          </li>
          <li className="flex justify-between">
            <span>Honey Extractor (manual, 4-frame radial):</span>
            <span className="font-semibold">₹8,000 - ₹15,000</span>
          </li>
          <li className="flex justify-between">
            <span>Sugar Feed (emergency feeding for lean months):</span>
            <span className="font-semibold">15,000 - ₹20,000</span>
          </li>
          <li className="flex justify-between">
            <span>Medicines (Varroa mite control, antibiotics):</span>
            <span className="font-semibold">₹3,000 - ₹5,000</span>
          </li>
          <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-3 font-bold text-base text-gray-900 dark:text-gray-100">
            <span>Total Investment Range:</span>
            <span className="text-green-700 dark:text-green-400">₹2.1 Lakh - ₹2.8 Lakh</span>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Kisan Credit Card (KCC)</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Beekeeping ke liye low-interest loan. 4% interest rate with timely repayment.</p>
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 text-sm font-medium">KCC Guide →</Link>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2"> PM FME Yojana</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Food processing unit ke liye 35% subsidy. Honey packaging aur branding ke liye ideal.</p>
          <Link href="/articles/pm-fme-yojana-food-processing" className="text-green-600 hover:underline dark:text-green-400 text-sm font-medium">PM FME Details →</Link>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sarkari Subsidy: Process Aur Ground Reality
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        National Beekeeping and Honey Mission (NBHM), jo KVIC ke under aata hai, is sector ko boost dene ke liye active hai. Lekin ek kadwi sachai yeh hai ki subsidy process mein 3-6 mahine lag sakte hain. Mera strong suggestion hai ki apna kaam subsidy ke intezaar mein na rokiye. Pehle apni pocket se setup karein, application daal dein, aur agar aa gayi toh use future expansion ya equipment upgrade mein lagayein.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">KVIC Beekeeping Scheme:</strong>
            Bee boxes, extractors, aur protective gear par 50% tak ki subsidy milti hai. SC/ST, women, aur North-East regions mein yeh limit 75-80% tak ja sakti hai. Application aapke nazdeeki KVIC office ya registered NGO ke through jati hai.
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-200 block mb-1">PMEGP / Agri Infrastructure:</strong>
            Rural areas mein beekeeping projects par 25-35% subsidy milti hai. Maximum project cost ₹25 lakh hai. Detailed guidelines ke liye apne nazdeeki bank ya agriculture office se sampark karein.
          </li>
        </ul>
      </div>

      <ExternalLinkButton
        url="https://www.honeymission.com/"
        label="National Honey Mission Portal - Apply Karein"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Month-by-Month Management Calendar
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Beekeeping calendar ko samajhna hi is business ki backbone hai. Har season ki apni challenges hoti hain. Ek successful beekeeper hamesha agle mausam ki tayari aaj se karta hai.
      </p>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 my-6 not-prose">
        <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 text-sm">Practical Tips Before Purchasing Bees:</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Hamesha registered aur certified beekeepers se hi colony khareedein.</li>
          <li>Queen bee ki age aur health check karein (active egg-laying honi chahiye).</li>
          <li>Frame par brood pattern regular aur compact hona chahiye.</li>
          <li>Colony mein kisi bhi tarah ke disease (jaise Varroa mite) ke lakshan na hon.</li>
        </ul>
      </div>

      <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Jan - March (Build-up Phase):</strong> Sarson aur litchi ke bloom ke dauran colony tezi se expand karti hai. Yahan <strong>bee swarm control</strong> ke practical tarike aana chahiye, jaise time par super chamber add karna taaki bees ko shahad store karne ki jagah mile aur wo bhage nahi.</li>
        <li><strong>April - June (Lean/Summer Period):</strong> Flora kam ho jata hai. Colony ko zinda rakhne ke liye 1:1 ratio ka sugar syrup feed karna padta hai. Paani ki availability ensure karein, warna bees paani dhoondhne ke chakkar mein mar jati hain.</li>
        <li><strong>July - September (Monsoon Risks):</strong> High humidity ke karan fungal infections aur wax moth ka khatra badh jata hai. Hive ko elevated (zameen se upar) rakhein aur ventilation achha rakhein.</li>
        <li><strong>October - December (Main Honey Flow):</strong> Eucalyptus, Sunflower, aur Ber ke phoolon ke dauran main honey extraction hota hai. Is time Varroa mite treatment zaroor karein taaki winter colony strong rahe.</li>
      </ul>

      <Image
        src="/images/kisanguides/bee-colony-inspection.webp"
        alt="Close-up view of beekeeper inspecting wooden bee frame with queen bee and brood pattern"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Honey Marketing: Bulk Trader vs. D2C Brand
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sirf production kaafi nahi hai, sahi daam par bechna hi asli game-changer hai. Naye beekeepers aksar yeh galti karte hain ki wo apna saara shahad local traders ko bulk mein saste daam (₹250-300/kg) par bech dete hain, jabki market price uska dugna hota hai.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Mera suggestion yeh hoga ki shuru ke 6 mahine local D2C (WhatsApp groups, local societies, farmer markets) par focus karein. Wahan aap aaram se ₹400-600/kg ka rate le sakte hain. "Chunk honey" ya "Honey with Comb" ko glass jars mein pack karke premium price par becha ja sakta hai, kyunki consumers ise 100% pure maante hain.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Packaged honey bechne ke liye <strong>honey business mein FSSAI license ki zaroorat</strong> hoti hai, jiska basic registration cost ₹5,000-10,000 aata hai aur yeh online aasani se ho jata hai. Ek achha label design aur NABL certified lab se testing report aapke product ki value ko 3x badha deti hai.
      </p>

      <Image
        src="/images/kisanguides/honey-harvesting-process.webp"
        alt="Beekeeper extracting golden honey from wooden frames using manual extractor machine"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <Image
        src="/images/kisanguides/honey-value-addition-products.webp"
        alt="Beautifully arranged glass jars of branded packaged honey and natural honeycomb for retail sale"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
        <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm">Common Mistakes Jo Naye Beekeepers Karte Hain:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Overcrowding:</strong> Ek hi jagah par bahut saare boxes rakh dena, jisse bees mein competition aur disease failne ka khatra badh jata hai.</li>
          <li><strong>Ignoring Varroa Mite:</strong> Yeh sabse common disease hai. Iska regular treatment na karne se poori colony khatam ho sakti hai.</li>
          <li><strong>Poor Record Keeping:</strong> Vaccination, breeding, aur honey extraction ka record na rakhna future planning aur subsidy claims mein rukawat ban sakta hai.</li>
          <li><strong>Wrong Placement:</strong> Hive ko direct dhoop ya hawa ki tez direction mein rakhna, jisse bees stress mein aa jati hain.</li>
        </ul>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-6 not-prose">
        <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm">Biosecurity aur Disease Prevention Basics:</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Farm mein entry par proper hygiene maintain karein.</li>
          <li>Naye colonies ko 15-30 din alag quarantine karein.</li>
          <li>Regular hive cleaning aur disinfection karein.</li>
          <li>Dead bees ya infected frames ko turant remove aur destroy karein.</li>
          <li>Visitors ko hive ke paas limited access dein.</li>
        </ul>
      </div>

      <h2 id="faq" className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Frequently Asked Questions (Unexpected Realities)
      </h2>
      <FAQBlock faqs={madhumakhiPalanFaqs} variant="cards" />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Final Assessment: Kya Yeh Business Aapke Liye Hai?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Beekeeping un logon ke liye viable hai jo apne khet ya orchard ke saath-saath daily 1-2 hours hive inspection de sakte hain, aur bees ke stings se ghabrate nahi hain. Yeh business unke liye bilkul nahi hai jo quick returns ki expectation rakhte hain ya heavy pesticide use wale agricultural zones ke beech mein rehte hain.
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800 mb-8 not-prose">
        <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Risk Management</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Subsidy ek bonus hai, guarantee nahi. Apna business plan aise banayein jaise subsidy milegi hi nahi. Risk management ke liye, kuch regions mein beekeeping units ke liye bhi insurance options explore kiye ja sakte hain.</p>
        <Link href="/articles/PmfbyCropInsurance2026" className="text-amber-700 hover:underline dark:text-amber-400 text-sm font-medium">PM Fasal Bima Yojana (PMFBY) →</Link>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Sources & References
      </h2>
      <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400 not-prose">
        <li><strong>KVIC (Khadi and Village Industries Commission):</strong> Official guidelines for beekeeping subsidies and training.</li>
        <li><strong>National Beekeeping and Honey Mission (NBHM):</strong> Government of India portal for scheme details and application.</li>
        <li><strong>Krishi Vigyan Kendra (KVK):</strong> District-level practical training modules and apiculture support.</li>
        <li><strong>FSSAI:</strong> Regulatory guidelines for packaged honey and food safety licensing.</li>
      </ul>

      <AuthorBox modified={getArticleBySlug('madhumakhi-palan-kvic-subsidy')!.modifiedTime} />

      <GuideDisclaimer
        consult="apiculture officers, KVIC officials, ya bank managers"
        modified={getArticleBySlug('madhumakhi-palan-kvic-subsidy')!.modifiedTime}
      />
    </article>
  );
}
