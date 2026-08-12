import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'gehu-ka-bhav-msp-vs-mandi', title: 'Gehu Ka Bhav — MSP vs Mandi', emoji: '🌾' },
  { slug: 'mandi-bhav-today', title: 'Daily Mandi Bhav Dekhein' },
  { slug: 'enam-registration-kaise-kare', title: 'eNAM Registration', emoji: '🏪' },
  { slug: 'mandi-bhav-app-comparison', title: 'Kaunsa Mandi App Sahi' },
  { slug: 'sabzi-bhav-guide-pyaz-aloo-tamatar', title: 'Sabzi Ke Rate Kaise Samjhein', emoji: '🧅' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Kaise Banega' },
];

const FAQS_DATA = [
  {
    q: 'Gehu ka MSP 2026-27 kitna hai?',
    a: 'Gehu ka MSP ₹2,585 per quintal hai — pichhle saal ke ₹2,425 se ₹160 zyada. Ye rate Rabi Marketing Season 2026-27 ke liye hai, jo CCEA ne 1 October 2025 ko approve kiya tha. Ek quintal matlab 100 kilo, toh per kilo ke hisaab se ₹25.85 banta hai.',
  },
  {
    q: 'Dhan (paddy) ka MSP 2026-27 kya hai?',
    a: 'Common variety ka ₹2,441 aur Grade A ka ₹2,461 per quintal. Dono mein ₹72 ki badhotri hui hai. Grade A ka rate zyada hota hai kyunki uske grain ki quality aur milling recovery behtar maani jati hai — lekin ye grading mandi mein hoti hai, aap khud decide nahi karte.',
  },
  {
    q: 'Is saal sabse zyada MSP kis fasal ka badha?',
    a: 'Kharif mein sunflower seed ka — poore ₹622 per quintal, ₹7,721 se ₹8,343. Uske baad cotton (₹557), nigerseed (₹515) aur til (₹500). Rabi mein safflower sabse aage raha, ₹600 ki badhotri ke saath ₹6,540. Sarkar ka maqsad saaf hai: oilseeds ki kheti badhao, import kam karo.',
  },
  {
    q: 'MSP par fasal bechna zaroori hai kya?',
    a: 'Nahi, zaroori nahi. MSP ek floor price hai, majboori nahi. Agar mandi ka rate MSP se upar chal raha hai toh khule bazaar mein bechna zyada faydemand hai. MSP tab kaam aata hai jab market rate gir jaye — us waqt sarkari agency aapse MSP par kharid legi.',
  },
  {
    q: 'MSP par bechne ke liye registration kahan karna padta hai?',
    a: 'Apne state ke procurement portal par. Har state ka apna portal hai — UP mein fcs.up.gov.in, MP mein mpeuparjan.nic.in, Punjab mein anaaj kharid portal, Haryana mein Meri Fasal Mera Byora. Registration ki window sowing ke baad khulti hai aur procurement season se pehle band ho jati hai, isliye date miss mat karo.',
  },
  {
    q: 'MSP par bechne ke baad paisa kitne din mein aata hai?',
    a: 'Rules ke hisaab se 48-72 ghante mein DBT se seedha bank account mein. Practice mein 3-7 din lag jaate hain, aur peak season mein isse zyada bhi. Paisa usi account mein aayega jo procurement registration mein diya tha — isliye account active hona chahiye aur KYC poori honi chahiye.',
  },
  {
    q: 'Sabhi 22 faslon par sarkari kharid hoti hai?',
    a: 'MSP declare 22+ faslon ka hota hai, lekin bade paimane par kharid sirf dhan, gehu aur kuch dalhan-tilhan ki hoti hai. Baaki faslon mein kharid tab hoti hai jab rate MSP se neeche gir jaye aur state PSS (Price Support Scheme) activate kar de. Isliye MSP ka rate dekhna kaafi nahi — apne state mein us fasal ki kharid ho rahi hai ya nahi, ye bhi confirm karna padta hai.',
  },
  {
    q: 'MSP kaun tay karta hai aur kaise?',
    a: 'CACP (Commission for Agricultural Costs and Prices) recommendation deta hai, aur CCEA (Cabinet Committee on Economic Affairs) usko approve karta hai. Formula 2018-19 budget mein tay hua tha — MSP kam se kam production cost ka 1.5 guna. Cost mein hired labour, seed, khaad, sinchai, machine, leased land ka rent aur family labour ki imputed value — sab shamil hoti hai.',
  },
  {
    q: 'A2+FL aur C2 cost mein kya fark hai, aur ye baat kyun uthti hai?',
    a: 'A2+FL mein paid-out kharche aur family labour ki value gini jati hai. C2 mein inke upar apni zameen ka rent aur fixed capital ka interest bhi joda jata hai — matlab C2 ka figure bada hota hai. Sarkar MSP A2+FL par 50% margin laga kar nikalti hai; kisan sangathan C2 par 50% ki maang karte hain. Isi wajah se har announcement ke baad ye bahes chalti hai.',
  },
  {
    q: 'MSP list ka official PDF kahan milega?',
    a: 'PIB ki press release (pib.gov.in) par har announcement ke saath poori crop-wise table hoti hai. Iske alawa CACP ki site cacp.dacnet.nic.in aur Agriculture Ministry ki agricoop.gov.in par bhi rates milte hain. Kisi bhi WhatsApp forward ya blog par bharosa karne se pehle in official sources par rate cross-check kar lena.',
  },
];

type Row = {
  crop: string;
  msp: string;
  prev: string;
  inc: string;
  margin: string;
};

const KHARIF_ROWS: Row[] = [
  { crop: 'Dhan (Common)', msp: '2,441', prev: '2,369', inc: '+72', margin: '50%' },
  { crop: 'Dhan (Grade A)', msp: '2,461', prev: '2,389', inc: '+72', margin: '50%' },
  { crop: 'Jowar (Hybrid)', msp: '4,023', prev: '3,699', inc: '+324', margin: '50%' },
  { crop: 'Jowar (Maldandi)', msp: '4,073', prev: '3,749', inc: '+324', margin: '50%' },
  { crop: 'Bajra', msp: '2,900', prev: '2,775', inc: '+125', margin: '56%' },
  { crop: 'Ragi', msp: '5,205', prev: '4,886', inc: '+319', margin: '50%' },
  { crop: 'Makka (Maize)', msp: '2,410', prev: '2,400', inc: '+10', margin: '56%' },
  { crop: 'Tur / Arhar', msp: '8,450', prev: '8,000', inc: '+450', margin: '54%' },
  { crop: 'Moong', msp: '8,780', prev: '8,768', inc: '+12', margin: '61%' },
  { crop: 'Urad', msp: '8,200', prev: '7,800', inc: '+400', margin: '51%' },
  { crop: 'Mungfali (Groundnut)', msp: '7,517', prev: '7,263', inc: '+254', margin: '50%' },
  { crop: 'Sunflower Seed', msp: '8,343', prev: '7,721', inc: '+622', margin: '50%' },
  { crop: 'Soybean (Yellow)', msp: '5,708', prev: '5,328', inc: '+380', margin: '50%' },
  { crop: 'Til (Sesamum)', msp: '10,346', prev: '9,846', inc: '+500', margin: '50%' },
  { crop: 'Nigerseed (Ramtil)', msp: '10,052', prev: '9,537', inc: '+515', margin: '50%' },
  { crop: 'Kapas (Medium Staple)', msp: '8,267', prev: '7,710', inc: '+557', margin: '50%' },
  { crop: 'Kapas (Long Staple)', msp: '8,667', prev: '8,110', inc: '+557', margin: '50%' },
];

const RABI_ROWS: (Row & { cop: string })[] = [
  { crop: 'Gehu (Wheat)', msp: '2,585', prev: '2,425', inc: '+160', cop: '1,239', margin: '109%' },
  { crop: 'Jau (Barley)', msp: '2,150', prev: '1,980', inc: '+170', cop: '1,361', margin: '58%' },
  { crop: 'Chana (Gram)', msp: '5,875', prev: '5,650', inc: '+225', cop: '3,699', margin: '59%' },
  { crop: 'Masur (Lentil)', msp: '7,000', prev: '6,700', inc: '+300', cop: '3,705', margin: '89%' },
  { crop: 'Sarson (Rapeseed & Mustard)', msp: '6,200', prev: '5,950', inc: '+250', cop: '3,210', margin: '93%' },
  { crop: 'Safflower (Kusum)', msp: '6,540', prev: '5,940', inc: '+600', cop: '4,360', margin: '50%' },
];

export default function MspList202627({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">MSP List 2026-27</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            MSP List 2026-27: Rabi &amp; Kharif Ki Poori Table, Pichhle Saal Se Comparison
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Last Updated: 5 August 2026</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/msp-list-2026-27/kharid-kendra.webp"
            alt="Sarkari kharid kendra par gehu ki dheri ke paas khada kisan"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>TL;DR — seedha kaam ki baat:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Gehu <strong>₹2,585</strong>, dhan (common) <strong>₹2,441</strong>, chana <strong>₹5,875</strong>, sarson <strong>₹6,200</strong> per quintal — poori Rabi + Kharif table neeche.</li>
            <li>Sabse badi badhotri tilhan mein: sunflower <strong>+₹622</strong>, nigerseed +₹515, til +₹500.</li>
            <li>MSP par bechne ke liye <strong>state portal par registration + token</strong> zaroori — window miss ki toh season gaya.</li>
            <li>Sabse zyada paisa <strong>nami (moisture)</strong> mein katta hai — bechne se pehle 1-2 din dhoop mein sukhao.</li>
            <li><strong>Abhi check karo:</strong> apne state ka procurement portal (UP: fcs.up.gov.in, MP: mpeuparjan.nic.in) — registration window.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 5 August 2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Fasal katne ke baad sabse pehla sawal yahi hota hai — is baar sarkari rate kya hai? MSP ka number
          pata ho toh mandi mein vyapari ke saamne aapki position mazboot hoti hai. Pata na ho toh jo rate
          mil jaye, wahi mannna padta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Is page par 2026-27 marketing season ki poori MSP list hai — 17 Kharif entries aur 6 Rabi faslein,
          pichhle saal ke rate ke saath. Neeche ye bhi samjhaya hai ki ye rate kaise banta hai, kahan actually
          milta hai, aur kab MSP chhod kar khule bazaar mein bechna behtar rehta hai.
        </p>

        <IB>
          <strong>Do announcements, do season:</strong> Rabi 2026-27 ke rate CCEA ne 1 October 2025 ko approve
          kiye (gehu, chana, sarson wagairah). Kharif 2026-27 ke rate 13 May 2026 ko aaye (dhan, kapas, soybean
          wagairah). Isliye ek hi &quot;2026-27 list&quot; mein dono announcements ke numbers aate hain.
        </IB>

        <SH>🌾 Rabi MSP 2026-27 — Gehu, Chana, Sarson</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Rabi ki bo-ai October-December mein hoti hai aur katai March-April mein. Is season ki khaas baat:
          gehu ka margin 109% nikla — matlab MSP production cost se do guna se bhi upar hai. Safflower mein
          badhotri sabse zyada rahi.
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">Rabi crops MSP 2026-27 with previous year comparison and margin over cost</caption>
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Fasal</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">MSP 2026-27</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">2025-26</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">Badhotri</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">Lagat</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">Margin</th>
              </tr>
            </thead>
            <tbody>
              {RABI_ROWS.map((r, i) => (
                <tr key={r.crop} className={i % 2 === 1 ? 'bg-[var(--color-bg-alt)]' : ''}>
                  <td className="border border-[var(--color-border)] p-3 font-semibold">{r.crop}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right font-bold text-green-700 dark:text-green-400">₹{r.msp}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right text-[var(--color-text-muted)]">₹{r.prev}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right">{r.inc}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right text-[var(--color-text-muted)]">₹{r.cop}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right font-semibold">{r.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[var(--color-text-muted)] mt-2 italic">
            Sabhi rate ₹ per quintal (100 kg). Lagat = all-India weighted average cost of production (A2+FL).
            Source: CCEA decision, 1 October 2025 — PIB press release.
          </p>
        </div>

        <Image
          src="/images/articles/loan-mandi-pashupalan/msp-list-2026-27/gehu-baali.webp"
          alt="Katai ke waqt gehu ki pakki baali kisan ke haath mein"
          width={1000}
          height={558}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <SH>☀️ Kharif MSP 2026-27 — Dhan, Kapas, Dalhan, Tilhan</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kharif ki bo-ai monsoon ke saath June-July mein hoti hai. 14 faslon ke rate declare hote hain, lekin
          dhan, jowar aur kapas ki do-do grades hone ki wajah se table mein 17 entries banti hain.
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">Kharif crops MSP 2026-27 with previous year comparison and margin over cost</caption>
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Fasal</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">MSP 2026-27</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">2025-26</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">Badhotri</th>
                <th className="border border-[var(--color-border)] p-3 text-right font-black">Margin</th>
              </tr>
            </thead>
            <tbody>
              {KHARIF_ROWS.map((r, i) => (
                <tr key={r.crop} className={i % 2 === 1 ? 'bg-[var(--color-bg-alt)]' : ''}>
                  <td className="border border-[var(--color-border)] p-3 font-semibold">{r.crop}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right font-bold text-green-700 dark:text-green-400">₹{r.msp}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right text-[var(--color-text-muted)]">₹{r.prev}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right">{r.inc}</td>
                  <td className="border border-[var(--color-border)] p-3 text-right font-semibold">{r.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[var(--color-text-muted)] mt-2 italic">
            Sabhi rate ₹ per quintal. Source: CCEA decision, 13 May 2026 — PIB press release.
            Kharif 2026-27 ke liye anumanit payout ₹2.60 lakh crore aur procurement target 824.41 lakh metric tonne.
          </p>
        </div>

        <Image
          src="/images/articles/loan-mandi-pashupalan/msp-list-2026-27/dhan-katai.webp"
          alt="Kharif season mein dhan ki katai karte kisan"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <SH>Is Baar Kahan Sabse Zyada Fayda Hua</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Table lambi hai, isliye seedhe kaam ki baat. Tilhan (oilseeds) mein badhotri sabse tez rahi —
          sunflower ₹622, til ₹500, nigerseed ₹515. Iski wajah policy hai: India abhi bhi khaane ka tel bahut
          import karta hai, aur sarkar chahti hai kisan tilhan ki taraf shift karein.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Doosri taraf makka aur moong ko dekho — sirf ₹10 aur ₹12 ki badhotri. Ye almost flat hai. Iska matlab
          ye nahi ki fasal kharab hai; inka margin pehle se hi upar chal raha tha (makka 56%, moong 61% — poori
          list mein sabse zyada). Jab margin already achha ho, CACP badhotri dheemi rakhta hai.
        </p>

        <DB>
          Ek galti se bachna: MSP ki badhotri ko munafe ki badhotri na samjho. ₹622 badhne ka fayda tabhi hai
          jab aap wo fasal ugaate ho <em>aur</em> aapke ilaake mein uski kharid hoti ho. Sunflower ka MSP poore
          desh mein ek hai, lekin uski sarkari kharid har district mein nahi hoti.
        </DB>

        <SH>MSP Ka Number Kaise Banta Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Process har saal ek jaisa chalta hai:
        </p>
        <StepList>
          <SI n={1}>
            <strong>CACP data jama karta hai</strong> — sabhi rajyon se production cost, mandi ke rate,
            demand-supply, import-export ke aankde.
          </SI>
          <SI n={2}>
            <strong>All-India weighted average cost nikalti hai</strong> (A2+FL method) — paid-out kharche plus
            family labour ki value.
          </SI>
          <SI n={3}>
            <strong>Us cost par kam se kam 50% margin</strong> lagta hai. Ye rule 2018-19 ke budget mein tay hua tha.
          </SI>
          <SI n={4}>
            <strong>CACP recommendation bhejti hai</strong> Agriculture Ministry ko.
          </SI>
          <SI n={5}>
            <strong>CCEA approve karti hai</strong> — Rabi ke rate bo-ai se pehle (September-October), Kharif ke
            rate monsoon se pehle (May-June).
          </SI>
        </StepList>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yahin se wo bahes shuru hoti hai jo aapne news mein dekhi hogi. Sarkar A2+FL cost par 50% jodti hai.
          Kisan sangathan kehte hain C2 cost par 50% mile — C2 mein apni zameen ka rent aur fixed capital ka
          interest bhi shamil hota hai, toh base bada hota hai aur MSP bhi upar aata hai. Dono taraf ka apna
          hisaab hai, aur ye maang har announcement ke baad dohrai jati hai.
        </p>

        <WB>
          MSP ka matlab guaranteed kharid nahi hai. Rate declare hona aur aapki fasal ka sarkari kharid hona —
          do alag cheezein hain. Dhan aur gehu mein kharid ka network mazboot hai; baaki faslon mein state ko
          PSS activate karna padta hai, aur wo tab hota hai jab market rate MSP se neeche gir jaye.
        </WB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/msp-list-2026-27/boriyon-tulai.webp"
          alt="Kharid kendra par gehu ki boriyon ki tulai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <SH>🏪 MSP Par Bechna Hai Toh Kya Karna Padega</SH>
        <StepList>
          <SI n={1}>
            <strong>State procurement portal par registration</strong> — window sowing ke baad khulti hai.
            UP: fcs.up.gov.in, MP: mpeuparjan.nic.in, Haryana: Meri Fasal Mera Byora, Punjab: anaaj kharid portal.
          </SI>
          <SI n={2}>
            <strong>Documents ready rakho</strong> — Aadhaar, bank passbook, aur zameen ke kagaz
            (khatauni/khasra ya girdawari). Bank account active ho aur naam kagzon se match kare.
          </SI>
          <SI n={3}>
            <strong>Token ya slot lo</strong> — zyadatar states token system par chalte hain. Token ki tareekh
            par hi upaj centre le jani hoti hai.
          </SI>
          <SI n={4}>
            <strong>Quality norms samjho</strong> — nami (moisture), toota daana, mitti-kachra: sab ki limit
            hoti hai. Limit se bahar hui toh rate mein cut lagta hai ya lot reject ho jata hai.
          </SI>
          <SI n={5}>
            <strong>Receipt sambhal ke rakho</strong> — kaante ki parchi aur procurement slip. Payment mein
            dikkat aayi toh yahi kaam aayegi.
          </SI>
          <SI n={6}>
            <strong>Payment DBT se aayegi</strong> — rules mein 48-72 ghanta, practice mein 3-7 din. Peak season
            mein isse zyada bhi lag sakta hai.
          </SI>
        </StepList>

        <IB>
          Nami wala point sabse zyada paisa khata hai. Gehu mein aam tor par 12% aur dhan mein 17% ki limit hoti
          hai. Ek-do din dhoop mein sukha lena rate ke cut se sasta padta hai — centre par pahunch kar pata
          chalne se pehle hi ye kaam kar lo.
        </IB>

        <GovLink
          href="https://pib.gov.in"
          label="Official MSP Press Release Dekho"
          guide="PIB Par Jao"
          guideHref="/articles/mandi-bhav-today"
          portalName="pib.gov.in"
        />

        <Image
          src="/images/articles/loan-mandi-pashupalan/msp-list-2026-27/gehu-dheri.webp"
          alt="Mandi mein gehu ki dheri par boli — vyapari aur kisan"
          width={1000}
          height={558}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <SH>MSP Par Bechein Ya Mandi Mein — Faisla Kaise Karein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Har season ye sawal aata hai. Seedha jawab: dono rate compare karo, aur sirf rate nahi — kharche aur
          risk bhi.
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">MSP procurement versus open mandi sale comparison</caption>
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Pehlu</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">MSP / Sarkari Kharid</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Khuli Mandi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Rate</td>
                <td className="border border-[var(--color-border)] p-3">Fixed, poore desh mein ek</td>
                <td className="border border-[var(--color-border)] p-3">Roz badalta hai — MSP se upar bhi, neeche bhi</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Payment</td>
                <td className="border border-[var(--color-border)] p-3">DBT se bank mein, 3-7 din</td>
                <td className="border border-[var(--color-border)] p-3">Cash ya udhaar — vyapari par depend</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Quality check</td>
                <td className="border border-[var(--color-border)] p-3">Sakht norms, cut lag sakta hai</td>
                <td className="border border-[var(--color-border)] p-3">Aksar aankh se andaza</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Jhanjhat</td>
                <td className="border border-[var(--color-border)] p-3">Registration, token, kagaz</td>
                <td className="border border-[var(--color-border)] p-3">Fasal le jao aur bech do</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Kab behtar hai</td>
                <td className="border border-[var(--color-border)] p-3">Jab mandi rate MSP se neeche ho</td>
                <td className="border border-[var(--color-border)] p-3">Jab mandi rate MSP se upar ho</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Practical tareeka: bechne se 2-3 din pehle apne district ka rate dekho, MSP se compare karo, aur
          transport-mazdoori ka kharcha ghatao. Agar mandi ka rate MSP se ₹100-150 upar hai lekin centre aapke
          gaon ke paas hai, toh MSP wala option kabhi kabhi phir bhi sasta pad jata hai. Rate dekhne ke liye{' '}
          <Link href="/articles/mandi-bhav-today" className="text-green-700 dark:text-green-400 underline font-semibold">
            aaj ka mandi bhav
          </Link>{' '}
          ya{' '}
          <Link href="/articles/mandi-bhav-app-comparison" className="text-green-700 dark:text-green-400 underline font-semibold">
            mandi bhav apps
          </Link>{' '}
          kaam aayenge. Gehu ke liye humne{' '}
          <Link href="/articles/gehu-ka-bhav-msp-vs-mandi" className="text-green-700 dark:text-green-400 underline font-semibold">
            alag se MSP vs mandi comparison
          </Link>{' '}
          likha hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/msp-list-2026-27/msp-hisaab.webp"
          alt="Kisan copy mein MSP aur mandi rate ka hisaab likhta hua"
          width={1000}
          height={558}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <SH>Char Galat Baatein Jo Aksar Suni Jati Hain</SH>
        <div className="space-y-3 my-4">
          <div className="p-4 border border-[var(--color-border)] rounded-xl">
            <p className="font-bold text-sm text-[var(--color-text)] mb-1">&quot;MSP par bechna kanooni haq hai&quot;</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Abhi nahi. MSP ek policy hai, kanoon nahi. Legal guarantee ki maang lambe waqt se chal rahi hai,
              lekin filhaal koi aisa qanoon nahi hai jo har fasal ki MSP par kharid ko binding banata ho.
            </p>
          </div>
          <div className="p-4 border border-[var(--color-border)] rounded-xl">
            <p className="font-bold text-sm text-[var(--color-text)] mb-1">&quot;MSP har state mein alag hota hai&quot;</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              MSP poore desh mein ek hi hota hai. Kuch states apni taraf se bonus dete hain, toh wahan total
              rate zyada ban jata hai — lekin base MSP wahi rehta hai.
            </p>
          </div>
          <div className="p-4 border border-[var(--color-border)] rounded-xl">
            <p className="font-bold text-sm text-[var(--color-text)] mb-1">&quot;Sarkar jitna laoge utna kharid legi&quot;</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Kai states mein per-acre ya per-farmer limit hoti hai, jo girdawari ke record se tay hoti hai.
              Registration ke waqt apni limit confirm kar lena behtar hai.
            </p>
          </div>
          <div className="p-4 border border-[var(--color-border)] rounded-xl">
            <p className="font-bold text-sm text-[var(--color-text)] mb-1">&quot;WhatsApp par aayi list sahi hoti hai&quot;</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Har saal purane saal ki list nayi bata kar ghoomti hai. Rate ke saath season likha hona chahiye —
              &quot;Rabi 2026-27&quot; ya &quot;Kharif 2026-27&quot;. Season likha na ho toh us list par bharosa mat karo.
            </p>
          </div>
        </div>

        <SH>Aam Galtiyan — Jo Registration Aur Kharid Mein Files Rukwati Hain</SH>
        <StepList>
          <SI n={1}><strong>Naam ka mismatch:</strong> Aadhaar mein "Ram Kumar", khatauni mein "Ramkumar", bank mein "R. Kumar" — aur registration atak gaya. Portal par form bharne se pehle teeno kagaz saamne rakh kar naam ki spelling milao. Hazaron files isi ek wajah se rukti hain.</SI>
          <SI n={2}><strong>Registration window miss karna:</strong> window sowing ke baad khulti hai aur kharid shuru hone se pehle band ho jati hai. "Katai ke baad dekhenge" wali soch season kha jati hai — abhi apne state portal par dates check karo.</SI>
          <SI n={3}><strong>Agent ke bharose sab chhod dena:</strong> CSC ya agent se form bharwana theek hai, lekin apna registration number aur token ki tareekh khud likh kar rakho. Agent ka phone band hua toh aapke paas kuch proof hona chahiye.</SI>
          <SI n={4}><strong>Bank account inactive ya bina-Aadhaar-linked hona:</strong> payment DBT se aati hai — account dormant hua ya NPCI mapping nahi hai toh paisa latak jata hai. Bechne se pehle branch se confirm karo.</SI>
          <SI n={5}><strong>Geeli fasal le jaana:</strong> moisture limit (gehu ~12%, dhan ~17%) paar hui toh cut ya reject. Kaante par pahunch kar rona free hai, pehle sukhana sasta hai.</SI>
        </StepList>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            2026-27 mein gehu ₹2,585 aur dhan ₹2,441 (common) par hai. Badhotri sabse zyada tilhan mein hui —
            sunflower ₹622, nigerseed ₹515, til ₹500. Makka aur moong lagbhag wahin rahe kyunki unka margin
            pehle se upar tha.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            MSP ko floor samjho, target nahi. Bechne se pehle mandi ka rate check karo, procurement portal par
            registration time se karwa lo, aur nami ka dhyan rakho — sabse zyada paisa wahin katta hai.{' '}
            <strong>Abhi apne state ke procurement portal par jao aur registration status check karo.</strong>
          </p>
        </div>

        <SH>FAQ — Aapke Sawaal</SH>
        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            CCEA press release, Rabi Marketing Season 2026-27 MSP — 1 October 2025.{' '}
            <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in</a>
          </li>
          <li>
            CCEA press release, Kharif Marketing Season 2026-27 MSP (14 crops) — 13 May 2026.{' '}
            <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in</a>
          </li>
          <li>
            Commission for Agricultural Costs &amp; Prices — cost concepts aur MSP methodology.{' '}
            <a href="https://cacp.dacnet.nic.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">cacp.dacnet.nic.in</a>
          </li>
          <li>
            Ministry of Agriculture &amp; Farmers Welfare.{' '}
            <a href="https://agricoop.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">agricoop.gov.in</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} />
        <BottomNav extraLinks={[
          { href: '/articles/mandi-bhav-today', l: 'Mandi Ke Aaj Ke Rates' },
          { href: '/articles/gehu-ka-bhav-msp-vs-mandi', l: '🌾 Gehu MSP vs Mandi' },
          { href: '/articles/category/mandi', l: 'Mandi-Bhav Section' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
