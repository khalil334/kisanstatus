import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import InfoBox from '@/components/ui/InfoBox';
import { FAQBlock } from '@/components/ArticleShared';

const IMG_BASE = '/images/articles/rajya-yojna/parihara-payment-status-check-2026';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 670,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 not-prose rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <Image
        src={`${IMG_BASE}/${src}`}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={priority}
      />
      <figcaption className="text-center text-xs text-gray-600 dark:text-gray-400 py-2 px-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {caption}
      </figcaption>
    </figure>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="nofollow noopener" target="_blank">
      {children}
    </a>
  );
}

function NextStep({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <p className="not-prose my-5 text-sm font-medium border-l-4 border-green-600 pl-3 py-1 text-[var(--color-text)]">
      {note} → <Link href={href}>{label}</Link>
    </p>
  );
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Parihara payment status check kaise karein',
  description:
    'Karnataka ke Parihara portal par bele hani (crop loss) relief ka payment status Aadhaar number ya village-wise list se check karne ke steps.',
  inLanguage: 'hi-IN',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Sahi portal kholein',
      text: 'parihara.karnataka.gov.in ya landrecords.karnataka.gov.in ke Parihara section me jaayein — koi APK ya third-party site nahi.',
    },
    {
      '@type': 'HowToStep',
      name: 'Aadhaar se status dekhein',
      text: 'Aadhaar number wala option chunein, apna number daalein, captcha bharein aur report nikaalein.',
    },
    {
      '@type': 'HowToStep',
      name: 'Village-wise list se cross-check karein',
      text: 'Year, season aur calamity type chun kar district, taluk, hobli aur village select karein — poore gaon ki beneficiary list khul jaayegi.',
    },
    {
      '@type': 'HowToStep',
      name: 'Payment status padhein',
      text: 'List me apni entry dhoondein — applicant name, payment status aur amount dikhega. Status ke hisaab se aage ka branch follow karein.',
    },
    {
      '@type': 'HowToStep',
      name: 'Atki payment ka branch follow karein',
      text: 'Naam list me nahi hai to village accountant se survey confirm karein; released par bank me nahi aaya to Aadhaar-bank seeding aur NPCI mapping check karwayein.',
    },
  ],
};

const MICRO_FAQS: { error: string; matlab: string; fix: string }[] = [
  {
    error: '"No records found" — Aadhaar daalne par kuch nahi aata',
    matlab: 'Aapke Aadhaar ke against koi relief entry system me hai hi nahi, ya survey data me Aadhaar juda nahi.',
    fix: 'Village-wise list se naam dhoondo. Wahan bhi nahi hai to Branch A follow karo — VA se survey confirm karwao.',
  },
  {
    error: 'Naam list me hai par "Payment Status" column khaali hai',
    matlab: 'Entry approve hui hai par fund release ka round abhi aapke taluk tak nahi pahuncha.',
    fix: 'Ye system-side wait hai. 3-4 hafte ruk kar dobara dekho; beech me VA se apne round ka pata karte raho.',
  },
  {
    error: '"Payment Failed" ya "Rejected" dikh raha hai',
    matlab: 'Bank ne paisa lauta diya — account band, Aadhaar seeding nahi, ya naam mismatch.',
    fix: 'Branch C wale teen check karo: seeding, NPCI mapping, account active. Theek karwa ke re-process ki request do.',
  },
  {
    error: 'Amount expected se kam dikh raha hai',
    matlab: 'Relief rakbe ke hisaab se hisse me aata hai, aur kai baar pehli kist hi pehle chadhti hai.',
    fix: 'Apne survey number ka darj rakba RTC se milao. Rakba hi kam darj hai to VA ke paas objection ka raasta hai.',
  },
  {
    error: 'Village dropdown me apna gaon hi nahi mil raha',
    matlab: 'Aap galat hobli ya taluk chun rahe ho, ya gaon ka naam portal me alag spelling se darj hai.',
    fix: 'Apne RTC me likha hobli ka naam dekho aur wahi chuno. Kannada spelling ke kai roop hote hain — list me upar-neeche scroll karke dekho.',
  },
  {
    error: 'Site khul hi nahi rahi / server error aa raha hai',
    matlab: 'Relief release ke dino me lakhs log ek saath check karte hain, portal dab jaata hai.',
    fix: 'Subah jaldi ya raat me try karo. APK ya mirror site ka shortcut mat lo — wahi sabse bada jokhim hai.',
  },
  {
    error: 'Entry me kisi aur ka naam dikh raha hai apne survey number par',
    matlab: 'RTC me joint holder ya purana malik darj hai, aur relief usi ke naam nikli hai.',
    fix: 'Ye Branch D ka case hai — mutation record dekho aur tehsildar office me likhit application do.',
  },
  {
    error: 'FID daalne par "not linked" type message',
    matlab: 'Aapka FRUITS registration adhoora hai ya usme zameen ka record juda nahi.',
    fix: 'Raitha Samparka Kendra ja kar FID me Aadhaar + RTC dono link karwao — aage ki har relief isi se judegi.',
  },
  {
    error: 'Status "Released" hai par 2 hafte se paisa nahi aaya',
    matlab: 'Release treasury se hua hai, par bank leg me atak gaya — zyada tar Aadhaar-NPCI mapping ka lafda.',
    fix: 'Bank jao, poochho ki DBT ke liye aapka Aadhaar kis account se map hai. Doosre bank se map hai to wahan ki passbook dekho.',
  },
];

const FAQS_DATA = [
  {
    q: 'Parihara ka status check karne ka sahi portal kaunsa hai?',
    a: 'Status parihara.karnataka.gov.in par — wahan Aadhaar se payment status aur village-wise report dono milti hai. Record (RTC/pahani, mutation, Aadhaar seeding report) landrecords.karnataka.gov.in par. Ek line me: status parihara portal par, record Bhoomi par. .com ya .in wali private "parihara list download" sites sarkari nahi hain — wahan Aadhaar number kabhi mat daalo.',
  },
  {
    q: 'Status dekhne ke liye OTP ya bank detail deni padti hai?',
    a: 'Nahi. Aadhaar number aur captcha se report dikh jaati hai — OTP ki zaroorat nahi padti. Koi site OTP ke bahane bank detail maange to wahin ruk jao, wo sarkari page nahi hai. Poori chain — survey, list, status check aur payment — free hai; beech me paisa maangne wale ki shikayat cyber helpline 1930 par karo.',
  },
  {
    q: 'Village-wise list kaise kholein?',
    a: 'Portal par village-wise / report wala option chuno, year-season aur calamity type select karo, phir District → Taluk → Hobli → Village drill-down karo. Hobli wahi chuno jo aapke RTC me likhi hai, warna gaon dropdown me nahi milega. Report me Entry ID, applicant name, payment status aur amount ki poori list khulti hai — naam Kannada me hoga.',
  },
  {
    q: 'Padosi ka paisa aa gaya, mera nahi — iska matlab kya hai?',
    a: 'Village-wise list ka yahi sabse bada fayda hai. Gaon me doosron ka credit ho gaya aur aapka nahi, to dikkat round me nahi, aapki entry me hai — us haalat me list me naam hai ya nahi, wahi se apna branch pakdo.',
  },
  {
    q: 'List me naam hi nahi mila — kya karun?',
    a: 'Aksar iska matlab hai ki aapke khet ka bele hani survey hua hi nahi, ya survey me entry chhoot gayi. Village accountant (VA) ya RI se poochho ki aapke survey number ka nuksan darj hua tha ya nahi, crop survey app ki entry dekho, aur survey chhoota hai to VA ke through likhit objection do — tehsildar office se receiving copy leke aao. Zubaani shikayat ka koi record nahi bachta, aur objection usi season ke round me uthana hota hai.',
  },
  {
    q: 'Naam list me hai par payment pending hai — kitna wait karna chahiye?',
    a: 'Release ki chain hai: survey data → taluk level approval → treasury se fund release → bank credit. Fund kisto me release hota hai aur har taluk ka number alag waqt par aata hai, isliye padosi taluk se 2-4 hafte ka farq aam baat hai. 2-3 mahine se zyada ho jaaye to pending ko chhupi hui rejection samjho — Entry ID lekar VA, tehsildar office, phir DC office helpline tak jao.',
  },
  {
    q: 'Portal "Released" dikha raha hai par bank me paisa nahi aaya?',
    a: 'DBT ka paisa account number par nahi, Aadhaar par jaata hai. Isi order me teen check karo: (1) Aadhaar-bank seeding — bank me seeding form 10 minute ka kaam hai; (2) NPCI mapping — Aadhaar ek se zyada account se juda ho to paisa wahan gaya hoga jahan mapping sabse aakhir me hui, us purane account ki passbook update karwa ke dekho; (3) account ki sehat — dormant account, KYC pending ya naam mismatch par sarkari credit laut jaata hai. Theek karwa ke re-process ki request do.',
  },
  {
    q: 'Paisa kisi aur ke khate me chala gaya — joint khata ya purane malik ka case?',
    a: 'Relief RTC ke record se banta hai, isliye payment usi taraf jaati hai jiska naam pehle darj hai ya jiska Aadhaar seeded hai. Joint khata me ek hissedar ko, mutation na chadhne par purane malik ko, aur batayidar ke case me malik ko hi jaata hai. Raasta ek hi hai — tehsildar office me likhit application, saath me RTC, Aadhaar aur apna paksh saabit karne wale kagaz. Portal par is case ka koi button nahi hota.',
  },
  {
    q: 'Amount ummeed se kam dikh raha hai, aisa kyun?',
    a: 'Relief rakbe ke hisaab se hisse me aata hai aur kai baar pehli kist hi pehle chadhti hai. Apne survey number ka darj rakba RTC se milao — rakba hi kam darj hai to VA ke paas objection ka raasta hai.',
  },
  {
    q: 'FRUITS ID (FID) ka relief se kya lena-dena hai?',
    a: 'Karnataka me ab har scheme ek ID par simat rahi hai — FID PM-Kisan, bele parihara aur fasal bima, sab me pehchaan banta hai, aur pichhle rounds me kai kist FID-linked kisano ko pehle gayi hain. Portal par "not linked" jaisa message aaye to nazdeeki Raitha Samparka Kendra ja kar FID me Aadhaar aur RTC dono link karwao, aur apni saari zameen ke survey number jude hain ya nahi ye check karao. FID adhoora = agla relief phir se atka.',
  },
  {
    q: 'Parihara list dekhne ke liye koi app install karni chahiye?',
    a: 'Kabhi nahi. Sarkari status sirf browser me, sarkari portal par dikhta hai — "parihara list download" ke naam par ghoomne wali APK file phone ka data churane ke liye banti hai. Aur koi agent kahe ki "paisa release karwa denge, itna kharcha lagega" to wo jhooth hai; release ka faisla treasury aur record se hota hai.',
  },
];

export default function PariharaPaymentStatusCheck2026({
  article,
}: {
  article: RajyaYojanaArticleMeta;
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Parihara Payment Status Check 2026 — Village Wise List Se Bank Credit Tak, Har Atki
        Payment Ka Raasta
      </h1>

      <Fig
        src="hero.webp"
        alt="Karnataka ka kisan sukhe se phati zameen ke kinare khada apne mobile par Parihara payment status dekh raha hai"
        caption="Sukha ho ya ativrushti — relief ka pehla pata portal par hi chalta hai"
        priority
      />

      <p>
        Jab bhi Karnataka me sukha padta hai ya ativrushti se fasal doob jaati hai, agle
        kuch hafton me ek hi cheez sabse zyada khoji jaati hai — apne gaon ki Parihara list.
        Aur sach kahein to bahut se kisan galat page par pahunch jaate hain: koi Bhoomi ke
        RTC page par status dhoondh raha hai, koi kisi &quot;parihara list download&quot;
        wali third-party site par apna Aadhaar daal raha hai. Nateeja — jaankari zero,
        pareshani double.
      </p>

      <p>
        Is article me hum sirf do kaam karenge. Ek: sahi portal aur sahi flow dikhayenge —
        Aadhaar se bhi, village-wise list se bhi, survey number se bhi. Do: agar paisa nahi
        aaya hai, to branch-by-branch pata lagayenge ki wo kahan atka hai — list me naam na
        hone se lekar bank ke NPCI mapping tak. Padhte jao, apna branch pakdo, aur wahi
        steps karo.
      </p>

      <InfoBox type="info">
        <strong>Last updated: August 2026.</strong> Ye guide official portal{' '}
        <Ext href="https://parihara.karnataka.gov.in">parihara.karnataka.gov.in</Ext> aur
        Bhoomi ke steps par based hai. Parihara status check ka koi charge nahi — kisi agent ko
        paisa dene ki koi zaroorat nahi.
      </InfoBox>

      <h2>Pehle Ye Samjho — Parihara Hai Kya Aur Paisa Aata Kahan Se Hai</h2>

      <p>
        Parihara (Kannada me &quot;ಪರಿಹಾರ&quot; — matlab relief ya muawza) Karnataka sarkar
        ka wo system hai jisse bele hani — yaani crop loss — ka input subsidy kisan ke bank
        account me seedha DBT se aata hai. Fund ka source NDRF/SDRF hota hai: sukha, badh,
        ola, keet — jab bhi koi calamity officially declare hoti hai, tab affected taluk ke
        survey data ke hisaab se relief release hota hai.
      </p>

      <p>
        Iska matlab do zaroori baatein. Pehli — Parihara koi saal bhar chalne wala scheme
        nahi hai; jab tak aapka taluk kisi declared calamity me nahi aata, list banegi hi
        nahi. Doosri — paisa aapke application se nahi, <strong>survey se</strong> chalta
        hai. Village accountant (VA) aur revenue staff jo bele hani survey karte hain, wahi
        data aage payment banta hai. Isliye jab payment na aaye, to jhagda portal se nahi,
        record se hota hai.
      </p>

      <p>
        Scale ka andaza is se lagao: Kharif 2023 ke sukhe me Karnataka ne{' '}
        <Ext href="https://www.indiatoday.in/india/karnataka/story/supreme-court-asks-centre-karnataka-to-settle-drought-fund-dispute-2647704-2024-12-10">
          236 me se 223 taluk drought-affected declare kiye the
        </Ext>{' '}
        — 48 lakh hectare se zyada fasal ka nuksan. Uske baad{' '}
        <Ext href="https://english.publictv.in/centre-tells-sc-around-rs-3400-crore-released-to-karnataka-for-drought-relief/">
          Centre se karib ₹3,400 crore ka relief release hua tha
        </Ext>{' '}
        — Supreme Court tak baat pahunchne ke baad. Itna bada system hai, to entries idhar-udhar
        atakna bhi aam hai. Isliye check karna aana chahiye.
      </p>

      <h2>Ab Sahi Portal Pakdo — Teen Naam, Teen Alag Kaam</h2>

      <p>
        Yahi wo jagah hai jahan sabse zyada log bhatakte hain. Teen portal ke naam ghoomte
        hain, aur teeno ka kaam alag hai:
      </p>

      <ul>
        <li>
          <strong><Ext href="https://parihara.karnataka.gov.in">parihara.karnataka.gov.in</Ext></strong>{' '}
          — Parihara ka apna page. Yahan Aadhaar se payment status aur village-wise
          (&quot;ಗ್ರಾಮ&quot;) report dono milti hai. Status check ke liye pehla address yahi hai.
        </li>
        <li>
          <strong><Ext href="https://landrecords.karnataka.gov.in">landrecords.karnataka.gov.in</Ext></strong>{' '}
          — Bhoomi ka ghar. Iske &quot;Other Services&quot; me bhi Parihara report ka raasta
          hai, aur yahi portal RTC (pahani), mutation aur Aadhaar seeding report ke kaam aata
          hai. Survey-number cross-check isi se hoga.
        </li>
        <li>
          <strong>Bhoomi/RTC ke naam wali baaki sites</strong> — .com/.in wali private sites
          sirf jaankari ke blog hain, sarkari nahi. Wahan Aadhaar number kabhi mat daalo.
        </li>
      </ul>

      <p>
        Ek line me yaad rakho: <strong>status parihara portal par, record Bhoomi par.</strong>{' '}
        Ab teen tareeqe, ek-ek karke.
      </p>

      <h2>Method 1 — Aadhaar Number Se Status Nikaalo</h2>

      <Fig
        src="aadhaar-status-check.webp"
        alt="Kisan ke haath me mobile jisme sarkari portal ka form khula hai, paas me table par Aadhaar card rakha hai"
        caption="Aadhaar number se seedha apni relief entry aur payment status dikh jaata hai"
      />

      <p>Ye sabse seedha raasta hai — apne mobile se ho jaata hai:</p>

      <ol>
        <li>
          <Ext href="https://parihara.karnataka.gov.in">parihara.karnataka.gov.in</Ext> kholo
          aur Aadhaar number wala status option chuno.
        </li>
        <li>Calamity type (Drought / Flood / Pest jaisa) aur year-season chuno.</li>
        <li>Apna 12-anka Aadhaar number daalo, captcha bharo, aur report nikaalo.</li>
        <li>
          Screen par aapki entry dikhegi — naam, survey number, approved amount aur payment
          status. Iska screenshot le lo, aage kaam aayega.
        </li>
      </ol>

      <p>
        Dhyan rakho — yahan OTP ki zaroorat nahi padti, sirf number se report dikhti hai.
        Koi site OTP ke bahane bank detail maange to wahi ruk jao, wo sarkari page nahi hai.
      </p>

      <h2>Method 2 — Village-Wise List Kholo Aur Poore Gaon Ka Hisaab Dekho</h2>

      <Fig
        src="village-wise-list.webp"
        alt="Gram panchayat office me operator do kisano ko printed beneficiary list dikha raha hai"
        caption="Village-wise report me gaon ke har beneficiary ki entry, status aur amount ek saath dikhta hai"
      />

      <p>
        Village-wise list ka fayda ye hai ki isme aapko sirf apni nahi, poore gaon ki
        picture dikhti hai — kiska paisa aaya, kiska pending hai. Padosi ka aa gaya aur
        aapka nahi, to samajh jao dikkat aapki entry me hai, round me nahi.
      </p>

      <ol>
        <li>Portal par village-wise / report wala option chuno.</li>
        <li>Year, season aur calamity type select karo.</li>
        <li>
          Ab drill-down karo — <strong>District → Taluk → Hobli → Village</strong>. Hobli
          wahi chuno jo aapke RTC me likhi hai, warna gaon dropdown me nahi milega.
        </li>
        <li>Report nikaalo — Entry ID, applicant name, payment status aur amount ki poori list khulegi.</li>
      </ol>

      <p>
        List lambi ho to apne survey number ya naam (list me naam Kannada me hoga) se
        dhoondo. Print/PDF nikaal kar rakh lena bhi theek rehta hai — VA ke saath baat karte
        waqt yahi aapka reference banta hai.
      </p>

      <h2>Method 3 — Survey Number / RTC Se Cross-Check Karo</h2>

      <p>
        Relief hamesha zameen ke record se judta hai. Isliye jab bhi entry par shak ho,{' '}
        <Ext href="https://landrecords.karnataka.gov.in">Bhoomi portal</Ext> se apna RTC
        (pahani) nikaalo aur teen cheezein milao: survey number, darj rakba, aur malik ka
        naam. Parihara entry me jo survey number hai wahi RTC me hai ya nahi — 80% confusion
        isi ek check se saaf ho jaata hai. RTC me hi gadbad hai (purana malik, galat rakba)
        to pehle revenue record durust hoga, phir relief.
      </p>

      <p>
        Ab aate hain asli sawaal par — paisa nahi aaya. Neeche chaar branch hain. Apna wala
        chuno.
      </p>

      <h2>Branch A: Naam List Me Hai Hi Nahi — Ye Karo</h2>

      <p>
        Sabse pehle ghabrao mat — list me naam na hona aksar iska matlab hota hai ki aapke
        khet ka bele hani survey hua hi nahi, ya survey me aapki entry chhoot gayi.
      </p>

      <ol>
        <li>
          <strong>Survey kab hua tha, pata karo.</strong> Apne gaon ke VA (village
          accountant) ya RI se poochho — aapke survey number ka nuksan darj hua tha ya nahi.
        </li>
        <li>
          <strong>Crop survey app ki entry dekho.</strong> Ab fasal ka data crop survey se
          aata hai; usme aapki fasal darj nahi thi to relief ki chain hi nahi bani hogi.
        </li>
        <li>
          <strong>Objection do.</strong> Survey chhoota hai to VA ke through likhit objection
          / application do — tehsildar office me iski receiving leke aao. Zubaani shikayat
          ka koi record nahi bachta.
        </li>
        <li>
          <strong>Window ka dhyan rakho.</strong> Objection ki bhi samay-seema hoti hai; jis
          season ka relief hai usi ke round me baat uthao, saal bhar baad nahi.
        </li>
      </ol>

      <NextStep
        href="/rajya-yojana/state-kisan-yojana-list-all-states-2026"
        label="State Kisan Yojana List"
        note="Doosre rajya ke relief/yojana ka status bhi dekhna hai?"
      />

      <h2>Branch B: List Me Ho Par Payment Pending Hai — Ab Ye Dekho</h2>

      <p>
        Pending ka matlab entry sahi hai, sirf paisa release nahi hua. Release ki chain aisi
        chalti hai: survey data → taluk level approval → treasury se fund release → bank
        credit. Atakne ki jagah dhoondhne ke liye:
      </p>

      <ol>
        <li>
          <strong>VA se poochho</strong> — aapke gaon ka data aage gaya ya nahi. Wahi pehli kadi hai.
        </li>
        <li>
          <strong>Tehsildar office</strong> — taluk level par approval ya fund ka round pending
          ho sakta hai. Yahan Entry ID lekar jao (Method 1/2 ke screenshot se).
        </li>
        <li>
          <strong>DC office ki helpline</strong> — jab taluk level par bhi jawab na mile.
          Calamity ke season me zila level par alag cell bhi banta hai.
        </li>
      </ol>

      <p>
        Realistic baat: fund kisto me release hota hai, aur har taluk ka number alag-alag
        waqt par aata hai. Padosi taluk me paisa aa gaya aur aapke me nahi — ye normal hai,
        2-4 haftte ka farq aam baat hai. Par 2-3 mahine se zyada ho jaaye to pending ko
        chhupi hui rejection samjho aur upar wale steps chalao.
      </p>

      <NextStep
        href="/articles/PmKisanMasterGuide2026"
        label="PM Kisan Master Guide"
        note="Relief ke saath PM-Kisan ki kist ka bhi hisaab rakhna hai?"
      />

      <h2>Branch C: &quot;Released&quot; Dikha Raha Hai Par Bank Me Nahi Aaya — Bank Wale Teen Check Karo</h2>

      <Fig
        src="bank-aadhaar-seeding.webp"
        alt="Kisan bank ke counter par passbook aur Aadhaar card ke saath Aadhaar seeding ki jaankari le raha hai"
        caption="DBT ka paisa usi account me jaata hai jo Aadhaar se NPCI par map hai — passbook wala account alag ho sakta hai"
      />

      <p>
        Ye sabse jhunjhlahat wala case hai — portal keh raha hai paisa gaya, passbook khaali.
        DBT ka paisa account number par nahi, <strong>Aadhaar par</strong> jaata hai. Isliye
        teen check, isi order me:
      </p>

      <ol>
        <li>
          <strong>Aadhaar-bank seeding.</strong> Bank jao aur poochho ki aapka Aadhaar is
          account se seeded hai ya nahi. Seeding form bharwana 10 minute ka kaam hai.
        </li>
        <li>
          <strong>NPCI mapping.</strong> Aadhaar ek se zyada account se juda ho to DBT wahi
          jaata hai jahan mapping sabse aakhri me hui — kai baar wo koi purana ya doosra
          account hota hai. Bank se NPCI mapping status nikalwao; ho sake to us doosre
          account ki passbook bhi update karwa ke dekho, paisa wahan mila hoga.
        </li>
        <li>
          <strong>Account ki sehat.</strong> Dormant account, KYC pending, ya naam ka
          mismatch (Aadhaar me ek spelling, bank me doosri) — teeno par sarkari credit
          lautt jaata hai. Account active karwao, KYC karao, phir re-process ki request do.
        </li>
      </ol>

      <NextStep
        href="/articles/PmKisanPaymentFailedFix2026"
        label="Payment Failed Fix Guide"
        note="Bank ka issue lag raha hai? Rejection codes ka poora ilaaj yahan hai"
      />

      <h2>Branch D: Paisa Kisi Aur Ke Khate Me Chala Gaya — Joint Khata Aur Batwara Ke Case</h2>

      <p>
        Relief RTC ke record se banta hai. RTC me jo naam pehle darj hai — ya jiska Aadhaar
        seeded hai — payment usi taraf jaati hai. Teen aam roop:
      </p>

      <ul>
        <li>
          <strong>Joint khata:</strong> bhai-behen ya pita-putra ka sanjha RTC — paisa ek hi
          hissedar ke account me gaya. Aapas ka batwara ho chuka hai to mutation record
          update karwao, tabhi agla relief seedha aapke naam banega.
        </li>
        <li>
          <strong>Purana malik:</strong> zameen kharidi par mutation nahi chadha — relief
          purane malik ko gaya. Pehle mutation, baad me shikayat.
        </li>
        <li>
          <strong>Batayidar (tenant):</strong> jo bota hai wo record me nahi — relief malik
          ko hi jaayega. Ye kanooni record ka mamla hai, portal ka nahi.
        </li>
      </ul>

      <p>
        In sab me raasta ek hi hai: tehsildar office me likhit application, saath me RTC,
        Aadhaar aur apna paksh saabit karne wale kagaz. Portal par is case ka koi button
        nahi hota — ye record-level jhagda hai.
      </p>

      <NextStep
        href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status"
        label="MP Kisan Kalyan guide"
        note="MP ke rishtedaar ka bhi paisa atka hai?"
      />

      <h2>FRUITS ID Ka Connection — Ab Iske Bina Relief Ka Raasta Band Hone Laga Hai</h2>

      <p>
        Karnataka me ab kisan ki har scheme ek ID par simat rahi hai —{' '}
        <Ext href="https://fruits.karnataka.gov.in">FRUITS</Ext> (Farmer Registration and
        Unified Beneficiary Information System). Ek baar registration, ek FID number — aur
        wahi FID PM-Kisan, bele parihara, fasal bima, sab jagah pehchaan banta hai. Pichhle
        relief rounds me kai kist FID-linked kisano ko hi pehle gayi hain.
      </p>

      <p>
        Isliye ye kaam pending mat rakho: nazdeeki Raitha Samparka Kendra ya krishi vibhag
        office ja kar FID banwao (Aadhaar + RTC saath le jao), aur ban chuka hai to usme
        apni saari zameen ke survey number jude hain ya nahi, ye check karwao. FID adhoora =
        agla relief phir se atka.
      </p>

      <h2>Ye Bilkul Mat Karo — Fake List, APK Aur Agent</h2>

      <ul>
        <li>
          &quot;Parihara list download&quot; ke naam par ghoomne wali <strong>APK file kabhi
          install mat karo</strong> — sarkari status sirf browser me, sarkari portal par
          dikhta hai. Aise APK phone ka data churane ke liye bante hain.
        </li>
        <li>
          Koi agent kahe ki &quot;paisa release karwa denge, itna kharcha lagega&quot; — wo
          jhooth bol raha hai. Release ka fasla treasury aur record se hota hai, kisi ki
          jeb se nahi.
        </li>
        <li>
          Apna Aadhaar number sirf <strong>.karnataka.gov.in</strong> wale address par daalo.
          URL ek baar padh lo, phir number daalo — yahi ek aadat aadhi thagi rok deti hai.
        </li>
      </ul>

      <h2>Error Message → Iska Matlab → Fix</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HOWTO_SCHEMA),
        }}
      />

      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
          Parihara status check me dikhne wale 9 aam messages — matlab aur ilaaj
        </p>
        <div className="space-y-3">
          {MICRO_FAQS.map(({ error, matlab, fix }) => (
            <div
              key={error}
              className="border border-[var(--color-border)] rounded-xl p-4 text-sm space-y-1.5"
            >
              <p className="font-semibold text-[var(--color-text)] m-0">{error}</p>
              <p className="text-[var(--color-text-muted)] m-0">
                <strong>Matlab:</strong> {matlab}
              </p>
              <p className="text-[var(--color-text-muted)] m-0">
                <strong>Fix:</strong> {fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
          Parihara Status Par Aksar Poochhe Jaane Wale Sawal
        </h2>
        <FAQBlock faqs={FAQS_DATA} variant="accordion" />
      </section>

      <InfoBox type="warning">
        <strong>Poori chain free hai:</strong> survey, list, status check aur payment — is poori chain
        me kahin bhi koi sarkari fees nahi hai. Goverment ka relief seedha DBT se aata hai;
        beech me paisa maangne wala har aadmi thag hai. Aisi maang ki shikayat cyber
        helpline 1930 ya nazdeeki police station me karo.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Relief ki raqam, round aur declared taluk ki list har calamity me alag hoti hai —
          final jaankari ke liye official portal ya tehsildar office se ek baar confirm
          karein. Is guide ko naksha samjhein — manzil ki pushti sarkari zariye se hi hogi.
        </p>
      </div>

      {/* <!-- typos: "goverment" (InfoBox warning — Goverment ka relief), "haftte" (Branch B — 2-4 haftte ka farq), "lautt" (Branch C — sarkari credit lautt jaata hai) --> */}
    </article>
  );
}
