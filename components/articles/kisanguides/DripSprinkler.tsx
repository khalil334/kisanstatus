import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Disclaimer } from '@/components/ArticleShared';
import { EXTERNAL_LINK_PROPS } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Drip aur Sprinkler Subsidy: PDMC ke 55% / 45% Niyam Aur Poora Process',
  description: 'Micro-irrigation subsidy ka asli structure — PDMC ke tahat small/marginal kisan ko 55% aur baaki kisan ko 45% assistance, unit cost norms, state top-up, application steps aur maintenance reality.',
  keywords: ['drip irrigation subsidy', 'sprinkler irrigation subsidy', 'PDMC per drop more crop', 'micro irrigation unit cost', 'water conservation', 'irrigation subsidy'],
  authors: [{ name: 'Manish Kumar', url: 'https://kisanstatus.com/about' }],
  openGraph: {
    title: 'Drip aur Sprinkler Subsidy: PDMC ke 55% / 45% Niyam Aur Poora Process',
    description: 'Micro-irrigation subsidy ka asli structure — PDMC assistance rates, unit cost norms, state top-up aur application process.',
    type: 'article',
    locale: 'hi_IN',
    siteName: 'KisanStatus.com',
    url: 'https://kisanstatus.com/articles/drip-sprinkler-irrigation-subsidy',
    images: [{ url: 'https://kisanstatus.com/images/kisanguides/drip-sprinkler-hero.webp', width: 1200, height: 630, alt: 'Drip and Sprinkler Irrigation System in Agricultural Field' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drip aur Sprinkler Subsidy: PDMC ke 55% / 45% Niyam',
    description: 'Micro-irrigation subsidy ka asli structure — PDMC assistance rates, unit cost norms aur application process.',
    images: ['https://kisanstatus.com/images/kisanguides/drip-sprinkler-hero.webp'],
  },
  alternates: { canonical: 'https://kisanstatus.com/articles/drip-sprinkler-irrigation-subsidy' },
};

export default function DripSprinkler() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">

      <Image
        src="/images/kisanguides/drip-sprinkler-hero.webp"
        alt="Drip aur sprinkler irrigation system khet mein lagaya hua"
        width={1200}
        height={630}
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        Drip aur Sprinkler Subsidy: PDMC ke asli 55% / 45% niyam aur poora process
      </h1>

      <div className="mb-8 p-5 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2">
          <strong>Pehle ek galatfehmi door kar dein.</strong> Bazaar mein &ldquo;drip par 75% subsidy&rdquo;,
          &ldquo;90% subsidy&rdquo; jaise dawe bahut chalte hain. Central scheme ka notified rate itna nahi hai.
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          Government ka apna statement saaf hai: micro-irrigation par assistance{' '}
          <strong>55% small &amp; marginal kisan ko aur 45% doosre kisano ko</strong> — aur wo bhi
          <em> indicative unit cost</em> par, aapke vendor ke bill par nahi. Kuch states iske upar apna
          top-up dete hain, isliye kahin-kahin total figure zyada dikhta hai. Vo state ka hissa hai,
          central rate nahi.{' '}
          <a href="https://www.global-agriculture.com/india-region/micro-irrigation-centrally-sponsored-scheme-css-of-per-drop-more-crop-pdmc/" {...EXTERNAL_LINK_PROPS} className="underline">
            (DA&amp;FW ka Feb 2024 official statement)
          </a>
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Flood irrigation mein khet tak pahunche paani ka bada hissa evaporation, runoff aur deep
        percolation mein nikal jaata hai — field-level efficiency aam taur par 30–40% ke aas-paas
        maani jaati hai, jabki drip/sprinkler jaisi pressurised systems 70–90% tak pahunchti hain.
        Isi farak par poori scheme khadi hai. Neeche wahi likha hai jo official documents se verify
        ho paaya; jo cheez sirf vendor ki zubaani hai, use maine number ki shakal mein nahi likha.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Drip aur Sprinkler mein asal farak kya hai?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dono ka kaam paani bachana hai, lekin dono alag tarah ki fasal ke liye bane hain:
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <caption className="sr-only">Comparison between Drip and Sprinkler Irrigation</caption>
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Feature</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Drip Irrigation</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Sprinkler Irrigation</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Kaam karne ka tarika</td>
              <td className="py-3 px-4">Paani pipe aur emitter ke zariye seedha jad (root zone) tak boond-boond pahunchta hai.</td>
              <td className="py-3 px-4">Nozzle se paani fuhare ki shakal mein upar se girta hai, baarish jaisa pattern.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Paani ki bachat (field studies)</td>
              <td className="py-3 px-4" colSpan={2}>
                AICRP jaise field studies micro-irrigation par roughly <strong>30–70% paani ki bachat</strong> aur
                drip fertigation ke saath <strong>26–45% tak yield increase</strong> report karte hain. Ye ek
                range hai — aapka actual result soil, crop aur system design par depend karega.{' '}
                <a href="https://bharatnotes.com/resources/key-terms/micro-irrigation-drip-sprinkler--13-water-resources-irrigation-india/" {...EXTERNAL_LINK_PROPS} className="underline">
                  [AICRP data summary]
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Kis fasal par</td>
              <td className="py-3 px-4">Widely-spaced / row crops: ganna, cotton, sabziyan, bagwani (orchards).</td>
              <td className="py-3 px-4">Close-growing crops: gehu, makka, dalhan, tilhan; sandy soil aur uneven zameen par bhi.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Cost</td>
              <td className="py-3 px-4" colSpan={2}>
                Iska ek all-India number likhna galat hoga. Subsidy aapke <strong>state ke notified
                indicative unit cost</strong> par nikalti hai, jo crop spacing aur system type ke hisaab se
                alag-alag hai. Sahi figure sirf apne state agriculture department ki current cost norms
                list se lein — aur uska print quotation ke saath rakhein.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        <strong>Aasaan rule:</strong> fasal ki qataar (row) clear hai to <strong>drip</strong>;
        gehu-makka-chara jaisi ghani fasal hai to <strong>sprinkler</strong>. Bagwani mein drip ka
        fertigation fayda sabse zyada dikhta hai, kyunki khaad bhi paani ke saath jad tak jaati hai.
      </p>

      <Image
        src="/images/kisanguides/drip-vs-sprinkler-comparison.webp"
        alt="Drip vs sprinkler irrigation ka comparison — working mechanism aur upyog"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Subsidy kitni milti hai — aur kis cheez par
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Micro-irrigation ka central component hai <strong>Per Drop More Crop (PDMC)</strong>. Ek
        administrative baat pehle, kyunki iski wajah se online bahut purani jankari ghoom rahi hai:
        PDMC 2015-16 se 2021-22 tak PMKSY ke component ke roop mein chalta tha, aur{' '}
        <strong>2022-23 se ye Rashtriya Krishi Vikas Yojana (RKVY / PM-RKVY) ke tahat</strong>{' '}
        implement ho raha hai.{' '}
        <a href="https://www.global-agriculture.com/india-region/micro-irrigation-centrally-sponsored-scheme-css-of-per-drop-more-crop-pdmc/" {...EXTERNAL_LINK_PROPS} className="underline">
          [DA&amp;FW]
        </a>{' '}
        Isliye kahin form &ldquo;RKVY&rdquo; kehta hai aur kahin &ldquo;PMKSY&rdquo; — dono ek hi
        micro-irrigation assistance ki baat kar rahe hain.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
        <h3 className="font-bold text-lg mb-4 text-blue-900 dark:text-blue-200">
          PDMC financial assistance (official rates)
        </h3>
        <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2 gap-4">
            <span>Small &amp; Marginal farmers</span>
            <span className="font-bold text-blue-700 dark:text-blue-300 shrink-0">55% of unit cost</span>
          </li>
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2 gap-4">
            <span>Other farmers</span>
            <span className="font-bold text-blue-700 dark:text-blue-300 shrink-0">45% of unit cost</span>
          </li>
          <li className="flex justify-between items-center border-b border-blue-100 dark:border-blue-800 pb-2 gap-4">
            <span>North Eastern &amp; Himalayan states</span>
            <span className="font-bold text-blue-700 dark:text-blue-300 shrink-0">25% higher unit cost</span>
          </li>
          <li className="flex justify-between items-center gap-4">
            <span>Low micro-irrigation penetration wale states</span>
            <span className="font-bold text-blue-700 dark:text-blue-300 shrink-0">15% higher unit cost</span>
          </li>
        </ul>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 mb-0">
          Source: Department of Agriculture &amp; Farmers Welfare statement, Feb 2024 —{' '}
          <a href="https://www.global-agriculture.com/india-region/micro-irrigation-centrally-sponsored-scheme-css-of-per-drop-more-crop-pdmc/" {...EXTERNAL_LINK_PROPS} className="underline">
            full text
          </a>
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          <strong>Ye chhoti si line hi sabse zyada confusion mitati hai:</strong> NE aur Himalayan
          states ke liye subsidy <em>percentage</em> nahi badhta — <em>unit cost</em> 25% zyada maana
          jaata hai (low-penetration states mein 15% zyada). Percentage wahi 55/45 rehta hai.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          Yahi wajah hai ki &ldquo;hilly states mein 90% subsidy&rdquo; jaisa dawa official documents se
          match nahi karta. Kisi bhi vendor ke aise claim par uska likhit government order maangein.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-200">
        Eligibility ki wo shartein jo log baad mein jaan kar pachtate hain
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
        <li>Assistance ek beneficiary ko <strong>5 hectare tak</strong> ke area par milti hai.</li>
        <li>
          Usi zameen par dobara subsidy <strong>7 saal baad</strong> hi milegi — yaani pehli baar
          system lagwate waqt hi crop plan theek se soch lena zaroori hai.
        </li>
        <li>Aadhaar-linked bank account chahiye, kyunki release DBT route se hota hai.</li>
        <li>
          Minimum area, allowed crop-spacing aur eligible system types state guideline se tay hote
          hain — inhe apne district agriculture office se likhit mein confirm karein.
        </li>
      </ul>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-8">
        5 hectare cap aur 7-saal repeat rule ka source: DA&amp;FW / PDMC scheme details —{' '}
        <a href="https://hiindia.com/agriculture-ministry-offers-more-flexibility-to-states-for-promoting-drip-sprinkler-irrigation/" {...EXTERNAL_LINK_PROPS} className="underline">
          Oct 2025 ministry statement
        </a>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-200">
        Subsidy ka hisaab kaise nikalta hai (mechanics, invented figures ke bina)
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yahan main jaan-boojh kar rupee amount nahi likh raha, kyunki unit cost state aur system ke
        hisaab se badalta hai aur ek galat number aapke budget ka poora andaza bigaad sakta hai.
        Iski jagah wo formula lein jisme aap apne state ki asli figure daal dein:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-4 not-prose">
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Apne area ke liye <strong>notified indicative unit cost</strong> nikaalein (state agriculture department ki cost norms list).</li>
          <li>Apni category tay karein: small/marginal (55%) ya other (45%).</li>
          <li><strong>Subsidy = unit cost × aapka rate.</strong> Dhyan rahe: unit cost, vendor quotation nahi.</li>
          <li>State top-up hai to wo alag se jodein — sirf tab jab wo state order mein likha ho.</li>
          <li>
            <strong>Aapka kharcha = vendor ka final bill − subsidy.</strong> Agar quotation notified norms se
            upar chala gaya, to poora extra hissa aapki jeb se jaata hai — ye sabse aam surprise hai.
          </li>
        </ol>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Baaki hissa cash mein nahi de sakte to{' '}
        <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Kisan Credit Card (KCC)</Link>{' '}
        ke through credit ek raasta hai — byaaj aur eligibility apne bank se confirm karein.
      </p>

      <Image
        src="/images/kisanguides/irrigation-subsidy-calculation.webp"
        alt="Irrigation subsidy calculation — unit cost aur farmer share ka breakdown"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        State top-up: total figure yahin se badalta hai
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        DA&amp;FW khud kehta hai ki &ldquo;some States provide additional incentives / top up
        subsidy&rdquo;. Iska seedha matlab: aapke padosi zile ka kisan zyada subsidy paa sakta hai
        sirf isliye ki uska state top-up de raha hai. Isliye central rate ke saath apne state ka
        current order dekhna zaroori hai.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Top-up state budget par depend karta hai aur saal-dar-saal badal sakta hai — pichle saal ka
        percentage is saal guarantee nahi hai. States ko resource jutane mein madad ke liye NABARD ke
        paas <strong>Micro Irrigation Fund (MIF)</strong> banaya gaya hai (initial corpus ₹5,000 crore);
        October 2024 mein Union Cabinet ne iska continuation approve kiya aur interest subvention 3%
        se <strong>2%</strong> kar diya.{' '}
        <a href="https://bharatnotes.com/resources/key-terms/micro-irrigation-drip-sprinkler--13-water-resources-irrigation-india/" {...EXTERNAL_LINK_PROPS} className="underline">
          [MIF details]
        </a>
      </p>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-8 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>Apne state ka sach pata karne ka tarika:</strong> apne state ke agriculture /
          horticulture department portal par &ldquo;micro irrigation&rdquo; ya &ldquo;PDMC&rdquo;
          section kholein aur teen cheezein dhundhein — (1) current financial year ki cost norms
          list, (2) top-up percentage wala order, (3) empanelled vendor list. Teeno ka PDF
          download kar lein. Jo baat in PDFs mein nahi hai, wo aapke case mein applicable nahi maani
          jaayegi, chahe vendor kuch bhi kahe.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        System ke main components (aur kis par paisa bachana mehenga padta hai)
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        <li><strong>Water source &amp; pump:</strong> borewell, canal ya tank — system design isi ke discharge aur pressure par bharosa karta hai.</li>
        <li>
          <strong>Filtration unit:</strong> sand media ya disc filter. Sabse zyada kanjoosi yahin hoti hai
          aur sabse zyada nuksan bhi — filter chhota pad gaya to emitters ka choke hona tay hai.
        </li>
        <li><strong>Fertigation venturi / tank:</strong> ghulansheel khaad paani ke saath dene ke liye. Drip ka asli fayda isi se aata hai.</li>
        <li><strong>Mainline &amp; sub-main:</strong> khet ke hisson tak paani le jaane wali moti pipes.</li>
        <li><strong>Laterals &amp; drippers/nozzles:</strong> row ke saath bichhne wali patli pipes; spacing crop ke hisaab se.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Apply kaise karein — step by step
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Application state ke portal se hota hai, central portal se nahi. Har state ka apna system
        hai (jaise Maharashtra ka MahaDBT), aur field verification har jagah hota hai. Sequence
        aam taur par aisa chalta hai:
      </p>
      <ol className="list-decimal pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-6">
        <li>
          <strong>Documents pehle taiyar karein:</strong> land record (7/12 ya khatauni), Aadhaar,
          Aadhaar-linked bank passbook, photo, aur small/marginal category ka proof agar aap us
          category mein claim kar rahe hain. Category proof hi aapke 55% vs 45% ka faisla karta hai.
        </li>
        <li>
          <strong>State portal par registration aur application:</strong> apne state agriculture /
          horticulture department ke portal par micro-irrigation component chunein. Yahin par system
          type aur area bharna hota hai — area galat bhara to aage estimation bhi galat banega.
        </li>
        <li>
          <strong>Field survey aur technical estimation:</strong> department ka officer soil, water
          source aur crop pattern dekh kar system design aur eligible unit cost tay karta hai. Isi
          step par aapko apni actual subsidy figure milti hai — ise likhit mein lein.
        </li>
        <li>
          <strong>Empanelled vendor se quotation aur approval:</strong> approved / empanelled vendor
          list se hi quotation lein aur <em>approval se pehle material na khareedein</em>. Bina
          approval ki purchase aksar reject hoti hai, aur wo nuksan poora aapka hota hai.
        </li>
        <li>
          <strong>Installation, verification, phir DBT release:</strong> installation ke baad dobara
          verification hota hai; clear hone par subsidy DBT se aapke account mein aati hai. Release ka
          exact timeline state ke process aur fund availability par depend karta hai — koi fixed
          din-count guarantee nahi hai, isliye apne district office se hi current status poochein.
        </li>
      </ol>

      <Image
        src="/images/kisanguides/irrigation-application-process.webp"
        alt="Micro-irrigation subsidy application process — registration, survey aur verification steps"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
        <h3 className="font-bold text-red-800 dark:text-red-300 mb-2 text-sm">⚠️ Jahan log sabse zyada phanste hain</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Quotation vs unit cost ka gap:</strong> subsidy notified cost par hai. Vendor ka bill upar gaya to farak poora aapka.</li>
          <li><strong>Approval se pehle kharidari:</strong> file mein pre-approval nahi hai to claim atak jaata hai.</li>
          <li><strong>Emitter choking:</strong> khaare / retiley paani mein filtration aur flushing ka schedule lazmi hai. Chemical treatment ka interval apne system ke manufacturer manual se lein — har paani ke liye ek hi formula nahi hota.</li>
          <li><strong>Non-standard material:</strong> BIS-certified saaman aur likhit warranty maangein; empanelment list se cross-check karein.</li>
          <li><strong>Sirf valve kholna kaafi nahi:</strong> pressure, irrigation timing aur fertigation dose seekhna padta hai — install ke waqt vendor se demo aur manual dono lein.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Maintenance: system ki umar aapke routine par hai
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Micro-irrigation ek machine hai, ek baar ka kharcha nahi. Neeche wahi practices hain jo
        manufacturer manuals aur extension advisories mein aam taur par aati hain — exact interval
        aapke paani ki quality aur apne system ke manual se tay hoga:
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border border-gray-200 dark:border-gray-700 not-prose">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Rozana / haftawari</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Filter aur pressure gauge par nazar rakhein — pressure girna pehla warning signal hai.</li>
              <li>✓ Filter backwash / cleaning routine follow karein.</li>
              <li>✓ Laterals ke end caps khol kar flushing karein.</li>
              <li>✓ Leak ya toota pipe turant theek karein; ek leak poore block ka pressure kharab karti hai.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">Season / saal ke hisaab se</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✓ Chemical / acid treatment manual ke interval par — andaze se nahi.</li>
              <li>✓ Season khatam hone par poore system ka high-pressure flush.</li>
              <li>✓ Ghise emitters aur nozzles replace karein, taaki discharge uniform rahe.</li>
              <li>✓ Off-season mein system khaali karke rakhein.</li>
            </ul>
          </div>
        </div>
      </div>

      <Image
        src="/images/kisanguides/irrigation-maintenance-guide.webp"
        alt="Irrigation system maintenance — filter cleaning, flushing aur seasonal care"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Isi ke saath kya-kya jod sakte hain
      </h2>
      <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
        <li>
          <strong className="text-gray-900 dark:text-gray-100">Solar pump (PM-KUSUM Component B):</strong>{' '}
          standalone solar agriculture pump par central financial assistance <strong>30%</strong> hoti hai
          (special category areas jaise NE states, J&amp;K, Himachal, Uttarakhand mein <strong>50%</strong>),
          aur state ka hissa aam taur par kam se kam 30% — isse kisan ka share ghat kar 10–40% ke beech
          aata hai. Subsidy benchmark ya tender cost, jo kam ho, us par milti hai.{' '}
          <a href="https://heavendesigns.in/blog/pm-kusum-component-b-c-ips-explained/" {...EXTERNAL_LINK_PROPS} className="underline">
            [Component B CFA structure]
          </a>{' '}
          Detail ke liye{' '}
          <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">PM-KUSUM guide</Link>{' '}
          dekhein aur apne state nodal agency ka current split confirm karein.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-100">Fertigation:</strong> drip ke saath khaad
          paani mein ghol kar dene se application efficiency behtar hoti hai; AICRP-type studies drip
          fertigation ke saath yield increase report karti hain. Ghulansheel product jaise{' '}
          <Link href="/articles/NanoDap500mlPriceInIndia2026" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Nano DAP</Link>{' '}
          ka dose apne soil test aur label ke hisaab se rakhein.
        </li>
        <li>
          <strong className="text-gray-900 dark:text-gray-100">State top-up:</strong> upar §state section
          mein bataya hua current order check karein — yahi aapka net kharcha sabse zyada badalta hai.
        </li>
      </ul>

      <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">✅ Aapke liye theek hai, agar</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Aapke ilake mein paani ki kami hai ya water table gir raha hai.</li>
            <li>• Pumping ka bijli/diesel kharcha aapke input cost mein bada hissa hai.</li>
            <li>• Aap high-value ya row crop / bagwani karte hain.</li>
            <li>• Aap farmer share afford kar sakte hain aur maintenance routine nibha sakte hain.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">❌ Ruk kar sochein, agar</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Har season crop aur spacing badalta hai (layout dobara karna padega).</li>
            <li>• Water source hi bharosemand nahi hai — system paani banata nahi, bachata hai.</li>
            <li>• Filter cleaning aur flushing ke liye kisi ke paas time nahi hoga.</li>
            <li>• 7-saal repeat rule ke chalte aapko jaldi layout badalna pad sakta hai.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Scheme kitni bad chuki hai (context ke liye)
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Official data ke mutabik PDMC ke tahat 2015-16 se 22 July 2025 tak{' '}
        <strong>102.56 lakh hectare</strong> micro-irrigation ke under aa chuka hai.{' '}
        <a href="https://hiindia.com/agriculture-ministry-offers-more-flexibility-to-states-for-promoting-drip-sprinkler-irrigation/" {...EXTERNAL_LINK_PROPS} className="underline">
          [Ministry statement, Oct 2025]
        </a>{' '}
        Isi statement mein ye bhi hai ki states ko ab kharch limits se aage jaane ki zyada
        flexibility di gayi hai — yani aane wale saalon mein state-level variation aur badh sakta
        hai. Isliye is page ka number nahi, <em>tareeka</em> yaad rakhein: apne state ka current
        order hi aapka sach hai.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 mb-8 not-prose">
        <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-gray-100">Is page ki limitations (saaf-saaf)</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Yahan diye rates <strong>central PDMC</strong> ke hain. Aapka final figure state top-up aur notified unit cost se badlega.</li>
          <li>Hum per-acre rupee cost nahi de rahe, kyunki wo state-notified norms se aata hai — andaza dena aapke budget ke liye risk hai.</li>
          <li>Portal ka layout aur form fields states badalte rehte hain; steps ko structure ki tarah lein, screenshot ki tarah nahi.</li>
          <li>Scheme ka administrative naam badal chuka hai (PMKSY → RKVY/PM-RKVY route) — purane articles isi wajah se alag baat kehte hain.</li>
        </ul>
      </div>

      <Disclaimer />
    </article>
  );
}
