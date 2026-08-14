import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav' },
  { slug: 'mandi-bhav-app-comparison', title: 'Best Mandi Bhav Apps' },
  { slug: 'msp-list-2026-27', title: 'MSP List 2026-27' },
];

const FAQS_DATA = [
  {
    q: 'Pyaz ka bhav saal mein kab sabse zyada hota hai?',
    a: 'Aam pattern mein August se October ke beech — kyunki us waqt rabi ka stored pyaz khatam hone lagta hai aur kharif ka naya pyaz abhi mandi mein poora nahi aaya hota. Yeh supply gap hi price spike banata hai. Lekin yeh guarantee nahi hai — jis saal sarkar buffer stock (NAFED/NCCF) zyada offload karti hai ya kharif jaldi aa jata hai, spike chhota reh jaata hai.',
  },
  {
    q: 'Kaunsa pyaz store hota hai — rabi ya kharif?',
    a: 'Sirf rabi pyaz (March-May harvest) 4-6 mahine tak store ho sakta hai — iski skin sookhi aur tight hoti hai. Kharif pyaz (October-December harvest) mein nami zyada hoti hai, woh 1-2 mahine mein kharab hone lagta hai. Isliye storage se hold karke bechne ki strategy sirf rabi crop par chalti hai.',
  },
  {
    q: 'Aloo cold storage mein rakhne ka kharcha kitna hota hai?',
    a: 'Rate region aur storage par alag hota hai — aam taur par per bag (50 kg) seasonal rate ke hisaab se charge hota hai, plus loading-unloading aur transport. Exact rate apne nazdeeki cold storage se pucho aur likhwa lo. Hisaab simple rakho: storage ka total kharcha + transport + apna byaj jitna hai, bhav usse zyada badhe tabhi hold karna faydemand hai.',
  },
  {
    q: 'Tamatar store kyon nahi hota?',
    a: 'Tamatar perishable hai — normal condition mein hafte bhar ke andar kharab ho jaata hai aur cold storage mein bhi lambi holding practical nahi hai. Isliye tamatar mein "hold karke bechna" wali strategy hai hi nahi. Tamatar ka game timing of planting hai — aisi variety aur planting time chuno ki aapki harvest us window mein aaye jab supply kam hoti hai.',
  },
  {
    q: 'NAFED buffer stock ka kisan ke bhav par kya asar hota hai?',
    a: 'Do taraf se. Jab bhav girta hai toh NAFED/NCCF Price Stabilisation Fund ke under kisano se pyaz kharidte hain — isse mandi mein neeche ka support ban jaata hai. Aur jab retail bhav chadhta hai (aksar September-October ke aas paas) toh yahi stock market mein utara jaata hai — isse upar ka spike dab jaata hai. Matlab: bahut bada price boom aane ki umeed par poora stock hold karna ab pehle se zyada risky hai.',
  },
  {
    q: 'Mandi bhav roz kahan check karein?',
    a: 'Sabse bharosemand sarkari source Agmarknet hai (agmarknet.gov.in) — desh bhar ki mandiyon ke daily rates. eNAM app par bhi registered mandiyon ke live bhav milte hain. Alag-alag apps ka comparison humne Mandi Bhav Apps guide mein detail se kiya hai. Bechne se pehle 2-3 nazdeeki mandiyon ka rate compare karna 5 minute ka kaam hai jo seedha paisa bachata hai.',
  },
  {
    q: 'Pyaz-aloo-tamatar par MSP kyon nahi hai?',
    a: 'MSP sirf 23 notified crops (anaaj, dalein, tilhan, kuch cash crops) par hota hai — sabziyan isme nahi aati. Isliye pyaz-aloo-tamatar ka bhav poori tarah demand-supply par chalta hai, aur isi wajah se inme utar-chadhav bhi sabse zyada hai. Sarkar ka intervention buffer stock aur kabhi-kabhi export policy ke through hota hai, MSP ke through nahi.',
  },
  {
    q: 'Kya cold storage ke against loan milta hai?',
    a: 'Haan — isko pledge finance ya warehouse receipt loan kehte hain. Aloo cold storage mein rakh kar uski receipt ke against bank se loan mil sakta hai. Isse fayda yeh hai ki haath-kharch ki zaroorat bhi poori ho jaati hai aur stock hold bhi rehta hai. KCC limit bhi working capital ke liye kaam aati hai — dono options apne bank se discuss karo.',
  },
  {
    q: 'Sabzi mandi mein commission aur katauti kitni hoti hai?',
    a: 'State aur mandi ke hisaab se alag hai — commission (aadhat), mandi fee, tulai, palledari/mathadi jaisi katautiyan hoti hain. Maharashtra ki onion mandiyon mein Mathadi levy alag se lagti hai. Bechne se pehle patti (bill) ki har line samjho aur ek hi mandi par depend na raho — eNAM ke through doosri mandiyon mein bechne ka option bhi khula rakho.',
  },
  {
    q: 'Kya contract farming tamatar mein better hai?',
    a: 'Processing companies (ketchup, puree walon) ke saath contract par fixed rate mil jaata hai — mandi ke crash se bachav ho jaata hai, lekin boom ka fayda bhi nahi milta. Jinke paas volume hai aur mandi ka utar-chadhav jhelne ki capacity nahi, unke liye aadha volume contract + aadha open market ek balanced rasta hai.',
  },
];

export default function SabziBhavGuidePyazAlooTamatar({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Pyaz-Aloo-Tamatar Bhav Guide</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Pyaz, Aloo, Tamatar Kab Bechein? Seasonal Price Cycle, Cold Storage Ka Hisaab Aur NAFED Ka Asar — Poori Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Last Updated: 05/08/2026</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/sabzi-bhav-guide-pyaz-aloo-tamatar/sabzi-mandi.webp"
            alt="Subah ki sabzi mandi — pyaz, aloo, tamatar ke crate aur boriyaan"
            width={1200}
            height={669}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>Teen fasal, teen alag calendar:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Pyaz-aloo-tamatar par <strong>MSP nahi hota</strong> — bhav pura demand-supply ka khel hai, timing hi hathiyar hai.</li>
            <li>Sirf <strong>rabi pyaz aur aloo store</strong> hote hain — tamatar mein hold ki strategy hai hi nahi, wahan planting ki timing hi game hai.</li>
            <li>Pyaz ka aam pattern: <strong>Aug-Oct supply gap</strong> mein bhav sabse tez — par NAFED/NCCF buffer ise dabata hai, poora stock hold mat karo.</li>
            <li>Hold ka hisaab kagaz par: storage + transport + byaj se zyada bhav badhe <strong>tabhi</strong> jeet hai.</li>
            <li><strong>Abhi check karo:</strong> agmarknet.gov.in par apni mandi ka aaj ka rate.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 05/08/2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Pyaz, aloo aur tamatar — teeno ka ek hi dard hai: jab kisan ke paas maal hota hai tab bhav nahi hota,
          aur jab bhav hota hai tab maal nahi bachta. Yeh koi kismat ka khel nahi hai — teeno sabziyon ka apna
          ek <strong>seasonal cycle</strong> hai jo har saal lagbhag same pattern par chalta hai. Jo kisan yeh
          cycle samajh leta hai, woh harvest ke din ki bheed mein bechne ke bajaye apni timing khud tay karta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Neeche teeno crops ka cycle alag-alag samjhaya hai — kab supply zyada hoti hai, kab gap aata
          hai, cold storage ka hisaab kab banta hai aur kab nahi, aur NAFED ka buffer stock aapki planning ko
          kaise badalta hai. Sab MSP se bahar ki cheezein hain, isliye yahan bhav ka gyan hi asli hathiyar hai.
        </p>

        <IB>
          Pehli baat note kar lo — pyaz, aloo, tamatar par <strong>MSP nahi hota</strong>. MSP sirf 23 notified
          crops par hai. Sabzi ka bhav pura demand-supply ka khel hai, isliye timing hi sab kuch hai. MSP wali
          fasal ka hisaab samajhna ho toh <Link href="/articles/msp-list-2026-27" className="underline font-bold">MSP ka
          poora rate chart</Link> dekho.
        </IB>

        <SH>Pyaz — Do Fasal, Ek Gap, Aur Wahi Kahani Har Saal</SH>
        <Image
          src="/images/articles/loan-mandi-pashupalan/sabzi-bhav-guide-pyaz-aloo-tamatar/pyaz-khudai.webp"
          alt="Khet mein pyaz ki khudai — boriyon mein bharti hui fasal"
          width={900}
          height={502}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Pyaz ki kahani do fasal par tiki hai. <strong>Rabi pyaz</strong> (March-May mein
          harvest) — saal ke total production ka sabse bada hissa, aur yahi woh pyaz hai jo 4-6 mahine store ho
          sakta hai. <strong>Kharif pyaz</strong> (October-December harvest) — nami wala, jaldi kharab hone
          wala, seedha mandi jaane wala.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Mahine</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Mandi mein kya chal raha hai</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Bhav ka rukh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">March-May</td>
                <td className="border border-[var(--color-border)] p-3">Rabi harvest ka flood — sab ek saath bechte hain</td>
                <td className="border border-[var(--color-border)] p-3">Sabse neeche — kai baar lagat ke barabar</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">June-July</td>
                <td className="border border-[var(--color-border)] p-3">Stored rabi pyaz market mein aata rehta hai</td>
                <td className="border border-[var(--color-border)] p-3">Dheere-dheere sudhaar</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">August-October</td>
                <td className="border border-[var(--color-border)] p-3">Stored stock ghat raha, kharif abhi aaya nahi — supply gap</td>
                <td className="border border-[var(--color-border)] p-3">Saal ka sabse tez daur (aksar)</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Nov-Feb</td>
                <td className="border border-[var(--color-border)] p-3">Kharif aur late-kharif ki arrival</td>
                <td className="border border-[var(--color-border)] p-3">Wapas neeche ki taraf</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Strategy isse seedhi nikalti hai — rabi pyaz ugane wale ke paas asli power hai: achhi tarah sukha kar,
          hawadaar kanda chawl/storage mein rakh kar August-October ki window ka intezaar. Lekin do shart hain.
          Pehli — storage loss hota hai (sadna, weight loss, sprouting), toh 100 bori rakhi ho aur kuch mahine baad
          85-90 nikle, yeh hisaab pehle se lagao. Doosri — <strong>NAFED factor</strong>, jo neeche alag se
          samjhaya hai.
        </p>
        <WB>
          Kharif pyaz walo ke liye saaf baat: aapka pyaz store nahi hoga. Usse hold karne ki koshish mein sadaane
          se behtar hai harvest ke baad jaldi, par 2-3 mandiyon ka rate compare karke bechna. Kharif ka fayda
          timing mein nahi, us window mein hai jab stored rabi khatam ho chuka hota hai — November ki early
          arrival aksar achha rate pakad leti hai.
        </WB>

        <SH>NAFED Buffer Stock — Jo Aapki Strategy Badal Deta Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Sarkar ke liye pyaz political sabzi hai — bhav chadhte hi shor machta hai. Isliye Price Stabilisation
          Fund (PSF) ke under NAFED aur NCCF har saal rabi season mein kisano se pyaz kharid kar buffer stock
          banate hain (lakhon tonne ka target rehta hai), aur jab retail bhav chadhta hai — aam taur par
          September-October ke aas paas — toh yahi stock sasti rate par market mein utara jaata hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kisan ke liye iske do matlab hain. Achha matlab: jab bhav crash hota hai, PSF procurement ek floor bana
          deti hai — mandi rate girne par NAFED ki kharid ka rate check karo, kai baar wahi behtar hota hai.
          Kadwa matlab: <strong>bahut bade price boom ka intezaar mat karo</strong>. Jaise hi bhav tez hota hai,
          buffer stock utar aata hai aur spike dab jaata hai. Isliye stored pyaz ko ek saath nahi, 2-3 lot mein
          bechna — kuch August mein, kuch September-October mein — akalmandi hai. Average achha mil jaata hai aur
          poora risk ek din par nahi lagta.
        </p>

        <SH>Aloo — Cold Storage Ka Khel, Par Hisaab Ke Saath</SH>
        <Image
          src="/images/articles/loan-mandi-pashupalan/sabzi-bhav-guide-pyaz-aloo-tamatar/cold-storage.webp"
          alt="Aloo cold storage ke andar — boriyon ke oonche stack"
          width={1200}
          height={669}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aloo ki main fasal January-March mein nikalti hai (UP-Agra belt, West Bengal, Bihar, Punjab). Harvest
          ke waqt mandi mein itna maal hota hai ki bhav zameen par hota hai. Aloo ki khoobi yeh hai ki yeh
          <strong> cold storage mein October-November tak aaram se rakha ja sakta hai</strong> — isliye aloo mein
          "kab bechein" ka sawal asal mein "storage ka hisaab banta hai ya nahi" ka sawal hai.
        </p>
        <StepList>
          <SI n={1}><strong>Storage ka total kharcha jodo:</strong> per-bag seasonal rate + transport + loading-unloading + chhatai. Apne nazdeeki cold storage se current rate likhwa kar lo — yeh region ke hisaab se alag hota hai.</SI>
          <SI n={2}><strong>Apne paise ka byaj jodo:</strong> jo paisa aloo mein atka hai, woh 6-8 mahine kaam nahi karega. KCC ka byaj hi sahi — woh bhi cost hai.</SI>
          <SI n={3}><strong>Weight loss aur sortage ka margin rakho:</strong> nikaalte waqt kuch bags kharab niklenge, weight bhi ghatega. 5-10% ka margin maan kar chalo.</SI>
          <SI n={4}><strong>Ab break-even nikalo:</strong> harvest ka bhav + total kharcha = woh rate jisse upar bikne par hi hold karna faydemand tha. Yeh number likh kar rakho aur mandi bhav is se compare karte raho.</SI>
          <SI n={5}><strong>Paise ki zaroorat ho toh pledge loan lo:</strong> cold storage receipt ke against bank loan (warehouse receipt finance) mil jaata hai — stock hold bhi rahega, cash bhi aa jayega.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aloo ka price pattern bhi supply gap wala hi hai — harvest (Jan-March) par sabse sasta, phir jaise-jaise
          cold storage ka stock nikalta hai, August se November tak bhav aam taur par behtar hota jaata hai.
          Ek apwaad bhi hai: jis saal storage mein maal zyada bhara hota hai, us saal ka September bhi thanda reh
          sakta hai. Isliye storage bharne se pehle yeh pata karo ki is saal aas-paas ke storages kitne bhare
          hain — yeh chhoti si jaankari aadhi strategy hai.
        </p>

        <SH>Tamatar — Store Nahi Hota, Isliye Game Alag Hai</SH>
        <Image
          src="/images/articles/loan-mandi-pashupalan/sabzi-bhav-guide-pyaz-aloo-tamatar/tamatar-crate.webp"
          alt="Crate mein taiyar pakka tamatar — mandi le jaane ke liye"
          width={1200}
          height={669}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Tamatar teeno mein sabse alag hai — <strong>yeh store hota hi nahi</strong>. Na kisan ke level par, na
          practically cold storage mein. Iska matlab: "hold karke bechna" wali poori strategy tamatar mein zero
          hai. Toh tamatar mein paisa kaise banta hai? Jawab: <strong>planting ki timing se</strong>, selling ki
          timing se nahi.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Tamatar ka bhav saal mein aam taur par do baar aag pakadta hai. Pehla — <strong>monsoon window
          (June-August)</strong>: barsaat se field crop kharab hota hai, transport tootta hai, supply girti hai
          aur bhav ek dum chadh jaata hai. Doosra — kabhi-kabhi sardi ke shuru mein, jab ek belt ki fasal khatam
          aur doosri shuru hone ke beech gap aata hai. In windows mein jiski harvest taiyar hoti hai, wohi asli
          munafa kamata hai — baaki waqt tamatar aksar lagat par ya usse neeche bikta hai.
        </p>
        <DB>
          Tamatar mein glut ka scene sabse khatarnak hai — jab sab ke paas ek saath maal aata hai toh bhav itna
          girta hai ki tudai-transport ka kharcha bhi nahi nikalta, aur kisan ko fasal sadak par phenkni padti
          hai. Isse bachne ke teen raste: staggered planting (ek saath sab mat lagao, 15-20 din ke gap par lagao),
          processing companies se contract (fixed rate — boom nahi, par crash bhi nahi), aur nazdeeki sheher ki
          retail/direct supply jahan mandi se behtar rate milta hai.
        </DB>

        <SH>2026 Ka Asli Scene — Nashik Se Seedha Sabak</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh cycle kitaabi baat nahi hai — 2026 ka rabi season khud dekho. May 2026 mein rabi harvest ke flood
          mein Nashik belt ki mandiyon mein average pyaz ₹800-1,000 per quintal tak gira, aur Nandgaon APMC ke
          bahar kisano ne pyaz phenk kar protest kiya. Sarkar ko 26 May se Nashik district ke liye ₹1,580 ka
          Minimum Assured Procurement Price (MAPP) lana pada (
          <a href="https://www.freepressjournal.in/pune/nashik-onion-gets-mapp-support-1580-per-quintal-rate-effective" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: Free Press Journal, May 2026</a>).
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur phir wahi hua jo har saal hota hai — mahine bhar mein hi open market sudhra: June ke aakhir tak
          Lasalgaon jaisi mandiyon mein rate chadh kar ₹2,628 per quintal tak pahunch gaya, aur kisan NAFED ke
          kharid kendra chhod kar wapas khule bazaar mein bechne lage (
          <a href="https://datamap.co.in/news/nashik-farmers-shun-nafed-onion-procurement-as-open-market-prices-75ee6d91-322f-4061-b601-200909dce0a3" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: Free Press Journal, June 2026</a>).
          Sabak seedha hai: harvest ke din ki bheed mein poora maal bechna sabse mehnga faisla hai — jo hafte-do
          hafte ka bhi sabr rakh saka, uska average behtar nikla.
        </p>

        <SH>Roz Ka Bhav Check Karna — 5 Minute Ki Aadat</SH>
        <Image
          src="/images/articles/loan-mandi-pashupalan/sabzi-bhav-guide-pyaz-aloo-tamatar/bhav-check.webp"
          alt="Mandi jaane se pehle kisan phone par bhav check karta hua"
          width={1200}
          height={669}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Cycle samajhna aadhi baat hai — doosri aadhi baat hai apni mandi ka asli rate roz dekhna. Sarkari source
          Agmarknet (agmarknet.gov.in) par desh bhar ki mandiyon ke daily rates milte hain, aur eNAM app par
          registered mandiyon ka live bhav. Bechne se pehle 2-3 nazdeeki mandiyon ka rate compare karo — kai baar
          50 km door wali mandi ka rate transport ka kharcha nikaal kar bhi behtar baithta hai.
        </p>
        <GovLink
          href="https://agmarknet.gov.in"
          label="Agmarknet — Daily Mandi Rates (Govt of India)"
          guide="Portal Kholo"
          portalName="agmarknet.gov.in"
        />
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kaunsa app sabse kaam ka hai — iska poora comparison{' '}
          <Link href="/articles/mandi-bhav-app-comparison" className="underline font-bold">Mandi Bhav Apps
          Guide</Link> mein hai. Aur agar aap eNAM ke through doosri mandiyon mein bechne ka rasta kholna chahte
          ho toh <Link href="/articles/enam-registration-kaise-kare" className="underline font-bold">eNAM par
          panjikaran ki step-by-step guide</Link> dekho — registration ek baar ka kaam hai, option hamesha ke liye khul jaata hai.
        </p>

        <SH>5 Galtiyan Jo Sabzi Kisan Ka Munafa Kha Jaati Hain</SH>
        <Image
          src="/images/articles/loan-mandi-pashupalan/sabzi-bhav-guide-pyaz-aloo-tamatar/sabzi-boli.webp"
          alt="Sabzi mandi mein boli — buyers crate ke aas-paas"
          width={1200}
          height={669}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <StepList>
          <SI n={1}><strong>Harvest ke din hi poora maal bech dena</strong> — wahi din hota hai jab mandi mein supply sabse zyada aur bhav sabse kam hota hai. Jo store ho sakta hai (rabi pyaz, aloo), uska plan pehle se banao.</SI>
          <SI n={2}><strong>Poora stock ek hi baar bechna</strong> — 2-3 lot mein becho. Peak pakadne ki koshish mein poora maal late karne se average bigad jaata hai; lot mein bechne se risk bant jaata hai.</SI>
          <SI n={3}><strong>Storage ka hisaab lagaye bina aloo bharna</strong> — storage + byaj + loss jodne par kai baar hold karna ghaate ka sauda nikalta hai. Break-even pehle nikalo, storage baad mein bharo.</SI>
          <SI n={4}><strong>Sirf apni mandi ka rate dekhna</strong> — paas ki mandiyon aur eNAM ka rate compare karna 5 minute ka kaam hai. Patti ki katautiyan (commission, tulai, palledari) bhi mandi-mandi alag hoti hain.</SI>
          <SI n={5}><strong>NAFED/buffer stock ko ignore karna</strong> — pyaz mein bade boom ka intezaar karne walo ka stock aksar tab bikta hai jab sarkar buffer utar chuki hoti hai. Sarkari intervention ab cycle ka permanent hissa hai — strategy usi ke hisaab se banao.</SI>
        </StepList>

        <SH>FAQ — Aksar Puche Jaane Wale Sawal</SH>
        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            Free Press Journal — Nashik onion MAPP ₹1,580 order, May 2026.{' '}
            <a href="https://www.freepressjournal.in/pune/nashik-onion-gets-mapp-support-1580-per-quintal-rate-effective" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">freepressjournal.in</a>
          </li>
          <li>
            Free Press Journal (via DataMap) — Nashik farmers shun NAFED as open market hits ₹2,628, June 2026.{' '}
            <a href="https://datamap.co.in/news/nashik-farmers-shun-nafed-onion-procurement-as-open-market-prices-75ee6d91-322f-4061-b601-200909dce0a3" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">datamap.co.in</a>
          </li>
          <li>
            Agmarknet — daily mandi rates, Govt of India.{' '}
            <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">agmarknet.gov.in</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} bioKey="SabziBhavGuidePyazAlooTamatar" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Sabhi Guides' },
          { href: '/articles/category/mandi', l: 'Mandi Bhav Guides' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
