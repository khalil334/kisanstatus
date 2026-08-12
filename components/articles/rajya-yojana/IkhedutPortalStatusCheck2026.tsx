import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojna/ikhedut-portal-status-check-2026';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 669,
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

const FAQS: { q: string; quick: string; detail: string }[] = [
  {
    q: 'iKhedut par arji karne ke baad status kahan dikhta hai?',
    quick: 'Portal ke "Arji Status" wale page par — arji (application) number aur mobile number daal kar.',
    detail:
      'Arji number wahi hai jo submit karte waqt screen par aata hai aur print par chhapa hota hai. Wo number kho gaya to purana print, SMS ya jis VCE/cyber cafe se bhari thi wahan se dobara nikalwa lijiye. Bina is number ke status search nahi hota — isliye number ko phone me note karke rakhna sabse pehla kaam hai.',
  },
  {
    q: 'Arji online bhar di, par print jama nahi kiya — kya hoga?',
    quick: 'Zyada tar ghatak me arji apne aap radd (invalid) maani jaati hai.',
    detail:
      'Online submit sirf aadha kaam hai. Signed print + documents nirdharit samay me apne taluka ke vistaran adhikari / gram sevak ke paas jama karna hota hai. Yahi wo ek galti hai jo har season hazaro kisano ka labh khaa jaati hai. Print jama karte waqt receiving (pahonch) zaroor lijiye.',
  },
  {
    q: 'Purv manjuri (pre-approval) ke pehle tractor kharid liya to subsidy milegi?',
    quick: 'Aam taur par nahi — kharidi purv manjuri ke baad honi chahiye.',
    detail:
      'Sahay ka poora logic hi ye hai: pehle manjuri, phir kharidi, phir bill upload, phir verification. Manjuri se pehle ki kharidi ka bill zyada tar ghatak me manya nahi hota. Apne ghatak ki shart apply karne se pehle ikhedut.gujarat.gov.in par padh lijiye — har ghatak ki guideline alag hai.',
  },
  {
    q: 'Target khatam ho gaya to arji ka kya hota hai?',
    quick: 'Arji waiting me rehti hai ya us varsh ke liye radd ho jaati hai.',
    detail:
      'iKhedut par har ghatak ka varshik target hota hai. Applications target se zyada aa gayin to draw ya priority ke hisaab se selection hota hai, baki file us saal nahi chalti. Agli window me nayi arji karni padti hai — purani apne aap forward nahi hoti.',
  },
  {
    q: 'Kitni subsidy milti hai — 25%, 40% ya 50%?',
    quick: 'Ghatak aur kisan ki shreni par depend karta hai; portal par likha rate hi final hai.',
    detail:
      'Misaal ke liye tractor sahay (AGR-50) me 20 se 60 PTO HP tak ke model par kharch ka 25% ya adhiktam ₹1,00,000 — jo kam ho — wali shart chali hai, aur khaate dinth ek tractor. Anusuchit jaati/janjaati, mahila aur chhote-simant kisan ke liye alag ghatak me rate zyada ho sakta hai. Amount aur % har varsh ki guideline se badalte hain, isliye form bharne se pehle us ghatak ka page khol kar padhna hi sahi tareeka hai.',
  },
  {
    q: 'Ek hi saal me do-teen ghatak me arji kar sakte hain?',
    quick: 'Haan, alag-alag ghatak me — par ek hi ghatak me do arji nahi.',
    detail:
      'Drip ke liye alag, godown ke liye alag, tar fencing ke liye alag — ye chalta hai. Par ek ghatak me duplicate aavedan (ya ek hi survey number par dubara) pakda jaata hai aur dono atak sakte hain. Aur kuch ghatak me "khaate dinth ek baar" ya "X saal me ek baar" ki shart hoti hai — wo shart uske page par likhi hoti hai.',
  },
  {
    q: 'Bill upload karne ke baad paisa kitne din me aata hai?',
    quick: 'Inspection aur bill verification poori hone ke baad DBT se — fixed din nahi hote.',
    detail:
      'Bill jama hone ke baad adhikari sthal (site) ya saadhan ki jaanch karte hain, phir bhugtan ki file banti hai. Kitne din lagenge ye taluka ke load aur budget release par nirbhar hai — isliye koi bhi "15 din me paisa" ka daava karne wala aadmi ya video bharose layak nahi. Apne taluka ke vistaran adhikari se file ki sthiti poochna sabse seedha raasta hai.',
  },
  {
    q: 'Arji reject ho gayi to dobara mauka milta hai?',
    quick: 'Haan — wajah sudhaar kar agli window me nayi arji ho jaati hai.',
    detail:
      'Reject ki wajah zyada tar sudhaarne layak hoti hai: print jama nahi, quotation mismatch, 7/12 me naam alag, bank detail galat, blur documnet. Reject ka karan taluka office se likhit ya mobile par pata kijiye, wo cheez theek karaiye, aur agli window me nayi arji kijiye. Purani file ko dobara zinda karne ka koi shortcut nahi hai.',
  },
];

const LIFECYCLE_STAGES: { name: string; desc: string }[] = [
  { name: 'Stage 1 — Window khulna', desc: 'Ghatak ki arji window portal par khulti hai; target ke saath.' },
  { name: 'Stage 2 — Arji bharna', desc: 'Online form bhar kar arji number lena.' },
  { name: 'Stage 3 — Print + documents jama', desc: 'Signed print aur documents taluka office me jama karna.' },
  { name: 'Stage 4 — Purv manjuri', desc: 'Adhikari se pre-approval milna — iske baad hi kharidi.' },
  { name: 'Stage 5 — Kharidi aur bill upload', desc: 'Manya dealer se kharidi, bill aur kagaz jama.' },
  { name: 'Stage 6 — Inspection', desc: 'Saadhan ya sthal ki jaanch.' },
  { name: 'Stage 7 — Sahay DBT se khate me', desc: 'Bhugtan seedha bank khate me.' },
];

const ITEMLIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'iKhedut arji ka lifecycle — 7 stage',
  inLanguage: 'hi-IN',
  itemListElement: LIFECYCLE_STAGES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    description: s.desc,
  })),
};

export default function IkhedutPortalStatusCheck2026({
  article,
}: {
  article: RajyaYojanaArticleMeta;
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        iKhedut Portal Status Check 2026 — Arji Status, Yojana List Aur Subsidy Ka Poora
        Hisaab
      </h1>

      <Fig
        src="hero.webp"
        alt="Gujarat ke gaon me e-gram centre ke bahar khada khedut haath me arji ka print le kar band shutter dekh raha hai"
        caption="Window band hone ke baad pahunche khedut — iKhedut par sabse aam nuksan yahi hai"
        priority
      />

      <p>
        iKhedut ki ek baat samajh lijiye to aadha kaam ho gaya: yahan yojana saal bhar khuli
        nahi rehti. Ek ghatak (component) ki arji window kabhi 15 din, kabhi 20 din khulti
        hai — aur target pura hote hi band. Jo pehle bhar deta hai, wahi labh le jaata hai.
      </p>

      <p>
        Isliye wo scene har season dikhta hai. Khedut cyber cafe pahuncha, operator ne screen
        kholi, aur seedha jawab mila — &quot;bhai, arji band thai gai&quot;. Ek hafta pehle
        aate to arji chadh jaati.
      </p>

      <p>
        To is guide me teen cheezein saath milengi. Ek — window kaise track karein, taaki
        agli baar pehle pahunchein. Do — arji bharne ke baad{' '}
        <strong>status kahan aur kaise dekhna hai</strong>. Teen — arji atak gayi ya reject
        ho gayi to kis stage par kya karna hai. Poora safar stage-wise, jaise portal par
        asal me chalta hai.
      </p>

      <InfoBox type="info">
        <strong>Last updated: August 2026.</strong> Ye guide official portal{' '}
        <Ext href="https://ikhedut.gujarat.gov.in/">ikhedut.gujarat.gov.in</Ext> ke steps
        par based hai. iKhedut par arji karna bilkul free hai — kisi agent ko &quot;file
        pass karava dau&quot; ke naam par paisa na dein.
      </InfoBox>

      <h2>Stage 0 — iKhedut Aakhir Hai Kya? Ek Chhat, Chaar Vibhag, 100+ Sahay Yojana</h2>

      <p>
        iKhedut Gujarat ke Krushi, Khedut Kalyan ane Sahkar Vibhag ka online darwaza hai.
        Chaar vibhag ki yojana ek hi jagah par milti hain:
      </p>

      <ul>
        <li>
          <strong>Kheti (Krushi)</strong> — saadhan sahay: tractor, rotavator, thresher,
          pump set, tarpaulin (tadpatri).
        </li>
        <li>
          <strong>Bagayat (Horticulture)</strong> — drip/micro-irrigation, shed net, poly
          house, phal bag, cold storage.
        </li>
        <li>
          <strong>Pashupalan (Animal Husbandry)</strong> — dudhala pashu, chaff cutter, milk
          machine, cattle shed.
        </li>
        <li>
          <strong>Matsya (Fisheries)</strong> — talab, jaal aur machhli palan ke saadhan.
        </li>
      </ul>

      <p>
        Sarkar ka focus kitna bada hai, ye budget se samajh aata hai. Gujarat ke 2026-27
        budget me Krushi ane Khedut Kalyan Vibhag ke liye{' '}
        <Ext href="https://www.nationpress.com/national/gujarats-budget-2026-27-for-agriculture">
          ₹24,022 crore rakhe gaye, jisme mechanization par ₹1,500 crore se zyada aur akele
          tractor sahay par ₹800 crore
        </Ext>
        . Matlab paisa hai — bas arji sahi waqt par, sahi tareeke se jaani chahiye.
      </p>

      <h2>Stage 1 — Window Khulna: Yojana List 2026 Kahan Aur Kaise Dekhein?</h2>

      <p>
        Portal khol kar sabse pehle <strong>&quot;Yojanao&quot;</strong> (schemes) me apna
        vibhag chuniye — Kheti, Bagayat, Pashupalan ya Matsya. Andar ghatak ki list aati hai,
        aur har ghatak ke saamne ek hi cheez sabse zaroori hoti hai:{' '}
        <em>arji karva ni taarikh</em> — matlab window ki shuru aur aakhri tareekh.
      </p>

      <p>
        Window khuli hai to us ghatak ke saamne &quot;Apply / arji karo&quot; ka link chalu
        milega. Band hai to link dabta nahi, ya seedha message aata hai ki arji band hai.
        Yahi ek line hai jo aapko batati hai ki aaj kaam hoga ya nahi.
      </p>

      <p>
        Window track karne ka practical tareeka? Season shuru hone se pehle hafte me ek baar
        portal khol lijiye — 2 minute ka kaam hai. Kheti ke saadhan ki windows aam taur par
        naye vittiya varsh ke baad khulti hain, par har ghatak ka apna schedule hota hai. Aur
        haan, koi bhi fixed date yaad mat rakhiye — pichle saal ki tareekh is saal chalegi
        iski koi guarantee nahi. Jaise tractor sahay ki ek window{' '}
        <Ext href="https://www.jkupdates.co.in/2026/03/ikhedut-portal-2026-gujarat-farmer.html">
          27 March se 25 May tak khuli thi
        </Ext>{' '}
        — is saal wahi tareekh dobara aayegi, aisa maan lena galti hai.
      </p>

      <InfoBox type="tip">
        Window ki jaankari ke liye WhatsApp forward par nirbhar mat rahiye. Forward me purani
        tareekh ghumti rehti hai. Portal par jo likha hai, wahi sach hai.
      </InfoBox>

      <h2>Stage 2 — Arji Bharna: Pehle Kagaz Tayyar, Phir Form</h2>

      <Fig
        src="arji-print-vce.webp"
        alt="Gujarat ke panchayat karyalay me gram sevak arji ka print nikaal raha hai aur khedut documents ki file le kar khada hai"
        caption="Gram sevak / VCE ke paas form ka print aur documents — Stage 3 ka asli kaam yahi hai"
      />

      <p>Form bharne baithne se pehle ye kagaz haath me rakhiye:</p>

      <ul>
        <li>
          <strong>7/12 aur 8-A utaara</strong> — zameen ka record. Nahi hai to Revenue
          Vibhag ke <Ext href="https://anyror.gujarat.gov.in/">AnyROR portal</Ext> se
          nikaliye (VF-7 = 7/12, VF-8A = khata detail).
        </li>
        <li>
          <strong>Aadhaar card</strong> — aur wahi mobile number jo Aadhaar se juda hai.
        </li>
        <li>
          <strong>Bank passbook ki nakal</strong> — khata chalu ho, IFSC saaf padha jaa raha
          ho.
        </li>
        <li>
          <strong>Jaati ka dakhla</strong> — agar aap anusuchit jaati/janjaati ghatak me
          labh maang rahe ho.
        </li>
        <li>
          <strong>Quotation</strong> — saadhan ke ghatak me manya dealer ka bhaav-patrak,
          jaisa uski guideline maange.
        </li>
        <li>
          <strong>Sanyukt khata ho to sah-khatedar ki sammati</strong> — zameen do-teen
          bhaiyon ke naam par hai to ye zaroori padta hai.
        </li>
      </ul>

      <p>Ab flow aisa chalta hai:</p>

      <ol>
        <li>
          <Ext href="https://ikhedut.gujarat.gov.in/">ikhedut.gujarat.gov.in</Ext> → Yojanao
          → vibhag → ghatak → &quot;arji karo&quot;.
        </li>
        <li>
          Portal poochta hai ki aap registered khedut ho ya nahi. Pehli baar wale{' '}
          <strong>&quot;No&quot;</strong> chun kar nayi detail bharte hain; purane apni
          detail se aage badhte hain.
        </li>
        <li>Khedut ki detail — naam, taluka, gaam, survey number, jaati, zameen ka vivran.</li>
        <li>Bank detail aur ghatak-wise maangi gayi jaankari (quotation, saadhan ka type).</li>
        <li>
          Submit → screen par <strong>arji number</strong> aayega. Isko turant likh lijiye.
          Photo bhi kheech lijiye.
        </li>
        <li>
          Arji ko <strong>&quot;confirm&quot;</strong> kijiye. Dhyan se — confirm kiye bina
          file aage nahi jaati, aur confirm ke baad usme sudhaar bhi nahi hota. Isliye
          confirm dabane se pehle poori detail ek baar padh lijiye.
        </li>
        <li>Arji ka print nikaliye.</li>
      </ol>

      <h2>Stage 3 — Print Jama Karna: Yahi Wo Step Hai Jahan Sabse Zyada Labh Chhoot Jaata Hai</h2>

      <p>
        Ye baat do baar likhne layak hai. <strong>Online submit karna kaafi nahi hai.</strong>{' '}
        Arji ka print nikaliye, uspar sign kijiye, saath me maange gaye documents (7/12, 8-A,
        Aadhaar, passbook, jaati dakhla, quotation) lagaiye, aur nirdharit samay ke andar apne
        taluka ke gram sevak / vistaran adhikari ke office me jama kar dijiye.
      </p>

      <p>
        Aur jama karte waqt ek cheez maang kar lijiye — <strong>receiving</strong> (pahonch /
        acknowledgement). Baad me &quot;aapki file mili hi nahi&quot; wali baat aaye, to wahi
        ek kagaz aapka saboot hai. Bahut se kisan yahan pe hi maar khaa jaate hain: form bhara,
        arji number bhi mila, par print jama nahi kiya — aur file khud-ba-khud nikal gayi.
      </p>

      <h2>Stage 4 — Arji Status Check: Portal Par Kahan Dekhna Hai</h2>

      <Fig
        src="status-check-mobile.webp"
        alt="Khet ke kinare khedut ke haath me mobile jisme sarkari arji status ka page khula hai"
        caption="Arji number aur mobile number — bas itne se status khet me khade-khade dikh jaata hai"
      />

      <p>
        Portal ke home page par <strong>&quot;Arji Status&quot;</strong> (arji ni sthiti /
        Application Status) ka link hota hai. Wahan:
      </p>

      <ol>
        <li>Arji number daaliye (jo submit ke waqt mila tha).</li>
        <li>Wahi mobile number ya maangi gayi verification detail bhariye.</li>
        <li>Captcha bhar kar &quot;view status&quot; dabaiye.</li>
      </ol>

      <p>
        Screen par aapki file kis stage par hai wo dikhega — pending, verified, purv manjuri, bill
        verification, payment ya reject. Same page se uski nakal dobara print bhi ho jaati
        hai (agar aapne pehle print gum kar diya ho).
      </p>

      <p>
        <strong>Arji number kho gaya to?</strong> Teen raaste — (a) purana print
        dekhiye, uspar number chhapa hota hai; (b) jis VCE / gram sevak / cyber cafe se form
        bhara thi wahan record hota hai; (c) apne taluka ke vistaran adhikari ke office me
        Aadhaar aur 7/12 le kar jaiye, wo record se nikal denge. Naya aavedan bhar dena{' '}
        <strong>sabse buri</strong> soch hai — duplicate arji dono ko atka deti hai.
      </p>

      <h2>Stage 5 — Status Ke Shabd Ka Matlab Kya Hai, Aur Aapka Next Step Kya Hai</h2>

      <SchemeTable>
        <tr>
          <th>Stage</th>
          <th>Portal par kya dikhega</th>
          <th>Khedut ka action</th>
          <th>Yahan atak-ne ki aam wajah</th>
        </tr>
        <tr>
          <td>Arji submit</td>
          <td>Pending / arji noandhayeli</td>
          <td>Print nikaal kar sign karo, documents lagao</td>
          <td>Arji confirm hi nahi ki gayi</td>
        </tr>
        <tr>
          <td>Documents jaanch</td>
          <td>Under scrutiny / verification</td>
          <td>Taluka office me print jama karo, receiving lo</td>
          <td>Print jama nahi hua, ya document blur/adhoora</td>
        </tr>
        <tr>
          <td>Purv manjuri</td>
          <td>Purv manjuri / pre-approval milna</td>
          <td>Ab manya dealer se kharidi karo — pehle nahi</td>
          <td>Target khatam, ya draw me naam nahi aaya</td>
        </tr>
        <tr>
          <td>Bill verification</td>
          <td>Bill / kharidi ke kagaz ki jaanch</td>
          <td>Bill, invoice aur saadhan ki detail jama karo</td>
          <td>Bill me model/rate quotation se mel nahi khaata</td>
        </tr>
        <tr>
          <td>Inspection</td>
          <td>Sthal ya saadhan ki jaanch baaki</td>
          <td>Adhikari ke aane par saadhan aur khet dikhao</td>
          <td>Khedut mauke par nahi mila, saadhan chalu nahi tha</td>
        </tr>
        <tr>
          <td>Payment</td>
          <td>Sahay manjur / bhugtan</td>
          <td>Passbook me DBT entry dekho</td>
          <td>Bank khata band, IFSC purana, naam mismatch</td>
        </tr>
        <tr>
          <td>Reject</td>
          <td>Na-manjur / reject</td>
          <td>Karan poocho, wo theek karke agli window me nayi arji</td>
          <td>Shart poori nahi hui, ya duplicate arji</td>
        </tr>
      </SchemeTable>

      <p>
        Table me ek line par gaur kijiye — <strong>purv manjuri ke baad kharidi</strong>. Ye
        ulta karne wale kisan har saal milte hain: tractor pehle ghar aa gaya, sahay ka aavedan
        baad me. Us case me bill zyada tar manya nahi hota, aur poora paisa apni jeb se
        jaata hai.
      </p>

      <h2>Stage 6 — Popular Ghatak: Kaunsa Kis Vibhag Me, Status Kahan</h2>

      <Fig
        src="drip-irrigation-field.webp"
        alt="Gujarat ke kapas ke khet me drip irrigation ki black pipe lines aur khedut emitter check kar raha hai"
        caption="Drip aur micro-irrigation Bagayat/GGRC ke raaste chalti hai — iska status alag jagah dikhta hai"
      />

      <h3>Tractor sahay (AGR-50) — Kheti vibhag</h3>
      <p>
        Sabse zyada search hone wala ghatak. Rate ki misaal:{' '}
        <Ext href="https://ikhedut.co.in/tractor-sahay-yojana/">
          20 se 60 PTO HP tak ke sarkar-manya model par kharch ka 25% ya adhiktam ₹1,00,000
          — jo kam ho, khaate dinth ek
        </Ext>
        . Aur ye scheme purani hai — vibhag ke hisaab se{' '}
        <Ext href="https://www.nationpress.com/all/gujarat-allocates-rs-800-crore-for-farmers">
          pichle 5 saal me 2,01,605 khedut ko ₹1,191.94 crore ki sahay di gayi, aur 2026-27
          me iske liye ₹800 crore ka bharpur budget rakha gaya
        </Ext>
        . Status: Arji Status page par, arji number se.
      </p>

      <h3>Drip / micro-irrigation — Bagayat aur GGRC ka raasta</h3>
      <p>
        Drip aur sprinkler ka aavedan iKhedut se shuru hota hai, par uska aage ka kaam GGRC
        (Gujarat Green Revolution Company) ke system aur manya dealer ke through chalta hai.
        Isliye is ghatak me do jagah nazar rakhni padti hai — iKhedut ka arji status, aur
        dealer/GGRC ke paas file ki sthiti. Dealer se hamesha likhit kagaz lijiye.
      </p>

      <h3>Tar fencing (kanta-taar) — Kheti vibhag</h3>
      <p>
        Rozde aur jangli janwar se fasal bachane ke liye. Ismein aam taur par ek se zyada
        khedut ka samooh aur nyuntam lambai jaisi shart hoti hai, aur kaam poora hone ke baad
        measurement hota hai. Status usi Arji Status page se, par inspection ka stage yahan
        lamba chalta hai.
      </p>

      <h3>Godown / pak sangrah struktur — Kheti vibhag</h3>
      <p>
        Fasal rakhne ka pakka dhancha. 2026-27 ke budget me is scheme ko badhaya gaya:{' '}
        <Ext href="https://www.nationpress.com/national/gujarats-budget-2026-27-for-agriculture">
          storage unit ka size 600 sq. ft. kiya gaya aur sahay ₹1 lakh se ₹2 lakh prati unit
          tak badhi, poori scheme ka budget ₹120 crore
        </Ext>
        . Yahan bhi kaam poora hone ke baad hi bhugtan hota hai.
      </p>

      <h3>Pump set aur solar — Kheti vibhag</h3>
      <p>
        Diesel/electric pump aur solar pump ke ghatak alag-alag khulte hain, aur solar me
        agency ka role bada hota hai. Arji iKhedut se, par installation ke baad ki jaanch ka
        record apne paas rakhiye.
      </p>

      <h3>Pashupalan ke ghatak — Pashupalan vibhag</h3>
      <p>
        Chaff cutter, milking machine, dudhala pashu ke ghatak Pashupalan vibhag ke andar
        aate hain. Inki window kheti ke saadhan se alag chalti hai — isliye &quot;iKhedut par
        arji band hai&quot; sun kar maan mat lijiye ki sab band hai; apne vibhag ki list
        alag se dekhiye.
      </p>

      <h2>Stage 7 — Reject Hone Ke 6 Sabse Aam Karan, Aur Har Ek Ka Ilaaj</h2>

      <ol>
        <li>
          <strong>Print jama nahi kiya</strong> — sabse aam. Ilaaj: agli baar submit ke 2-3
          din ke andar hi print aur documents jama karo, receiving lo.
        </li>
        <li>
          <strong>Quotation aur bill mel nahi khaate</strong> — form me ek model, bill me
          doosra. Ilaaj: quotation wahi model ka lo jo aap asal me kharidoge; badalna pade to
          pehle office ko batao.
        </li>
        <li>
          <strong>Target khatam / draw me naam nahi</strong> — aapki galti nahi hai. Ilaaj:
          agli window ke pehle din arji karo; der se bhari file ka matlab hi waiting hai.
        </li>
        <li>
          <strong>Duplicate survey number ya duplicate arji</strong> — ek hi zameen par do
          aavedan. Ilaaj: parivaar me kisi ne pehle apply kiya hai kya, wo pehle confirm karo.
        </li>
        <li>
          <strong>Bank detail galat</strong> — account number me ek anka galat, ya IFSC bank
          merge ke baad badal gaya. Ilaaj: passbook se milaan karo aur naya IFSC bank se
          likhwa kar update karao. Bank ke karan paisa lautne ka poora logic{' '}
          <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed fix guide</Link>{' '}
          me hai — wahi baat yahan bhi lagti hai.
        </li>
        <li>
          <strong>Blur ya adhoora documnet</strong> — 7/12 padha hi nahi jaa raha, ya 8-A
          nahi lagaya. Ilaaj: AnyROR se taaza saaf nakal nikaal kar dobara jama karo.
        </li>
      </ol>

      <h2>Stage 8 — Draw / Lottery System: Jab Arji Target Se Zyada Ho Jaayein</h2>

      <p>
        Ye samajhna zaroori hai kyunki isse gussa kam hota hai. Kisi ghatak me maan lijiye
        1,000 unit ka target hai aur 4,000 aavedan aa gaye. Ab sab ko sahay dena mumkin nahi.
        Aise waqt me priority aur draw ke niyam lagte hain — anusuchit jaati/janjaati, mahila,
        chhote-simant khedut jaise varg ko alag ghatak ya priority milti hai, aur baaki me
        computer se draw hota hai.
      </p>

      <p>
        Matlab: file reject hone ka matlab hamesha &quot;aapka kagaz galat tha&quot; nahi
        hota. Kabhi bas number nahi laga. Us case me agli window ka intezaar hi raasta hai —
        aur agli baar pehle din arji karna aapka fayda badha deta hai.
      </p>

      <h2>Stage 9 — Sahay Kitni Aur Kab? Yahan Log Sabse Zyada Bahak-te Hain</h2>

      <p>
        Har ghatak ka apna hisaab hai — kahin kharch ka 25%, kahin 40-50%, aur uske upar ek
        adhiktam raqam ki limit. Do me se jo kam ho, wahi milta hai. Iske alawa kisan ki
        shreni (anusuchit jaati/janjaati, mahila, chhote-simant) se bhi rate badalta hai.
      </p>

      <p>
        Isliye ek hi salah hai jo har saal kaam karti hai:{' '}
        <strong>arji karne se pehle us ghatak ka page portal par khol kar rate padhiye</strong>
        . Kisi video, kisi post, kisi agent ke bataye number par nahi. Aur &quot;kab
        aayega&quot; ka jawab bhi seedha hai — inspection aur bill verification poori hone ke
        baad, DBT se seedha bank khate me. Koi fixed din nahi hote.
      </p>

      <p>
        Sarkar bhi paisa seedha khate me dene par hi chal rahi hai. Misaal:{' '}
        <Ext href="https://www.lokmattimes.com/national/gujarat-cm-bhupendra-patel-gives-assistannce-of-rs-697-crore-to-farmers-associated-with-natural-farmers/">
          prakritik kheti se jude 35,829 khedut ko ₹6.97 crore ki protsahan sahay ek click me
          DBT se di gayi
        </Ext>{' '}
        — beech me koi aadmi nahi.
      </p>

      <h2>Stage 10 — Agent Se Bachiye: Free Raasta Kya Hai</h2>

      <p>
        iKhedut par arji ki koi sarkari fees nahi hai. Aap khud ghar se bhar sakte ho. Nahi
        aata to <strong>gram panchayat ka VCE / gram sevak</strong> ya apne taluka ka
        vistaran adhikari — inka kaam hi yahi hai. Cyber cafe ka mamooli typing charge alag
        baat hai, par &quot;manjuri karava dau&quot;, &quot;draw me naam ghusa dau&quot;
        bolne wala aadmi seedha jhooth bol raha hai. Purv manjuri portal ke andar se aati
        hai, kisi ke haath se nahi.
      </p>

      <p>
        Aur ek baat — apna Aadhaar OTP, bank detail aur passbook ki nakal sirf official
        raaste par dijiye. Kisi anjaan APK ya &quot;sahay list download&quot; wale link par
        nahi.
      </p>

      <h2>Sawaal-Jawaab — Jo Roz Counter Par Poocha Jaata Hai</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }}
      />

      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
          Pehle chhota jawab, phir uski asli baat — jaldi me ho to bold line hi padh lijiye
        </p>
        <div className="space-y-3">
          {FAQS.map(({ q, quick, detail }) => (
            <div
              key={q}
              className="border border-[var(--color-border)] rounded-xl p-4 text-sm space-y-2"
            >
              <p className="font-semibold text-[var(--color-text)] m-0">{q}</p>
              <p className="font-bold text-[var(--color-primary)] m-0">{quick}</p>
              <p className="text-[var(--color-text-muted)] m-0">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <InfoBox type="warning">
        <strong>Do cheezein yaad rakhiye:</strong> arji ka print jama karna aur purv manjuri
        ke baad hi kharidi karna. Bas ye do galtiyan hi Gujarat me sabse zyada sahay atkati
        hain — baaki sab sudhar jaata hai.
      </InfoBox>

      <div className="not-prose my-8 p-5 border-2 border-green-600 rounded-2xl bg-green-50 dark:bg-green-950/30">
        <p className="font-bold text-[var(--color-text)] mb-3 text-sm">Ye bhi kaam aayega</p>
        <ul className="space-y-3 text-sm m-0 list-none p-0">
          <li>
            <Link href="/articles/PmKisanMasterGuide2026">PM Kisan Master Guide 2026</Link>
            <span className="block text-[var(--color-text-muted)]">
              Kist, e-KYC aur land seeding — central scheme ka poora hisaab ek jagah.
            </span>
          </li>
          <li>
            <Link href="/articles/PmKisanPaymentFailedFix2026">PM Kisan Payment Failed Fix</Link>
            <span className="block text-[var(--color-text-muted)]">
              Bank rejection ke har code ka matlab aur ilaaj — DBT ke har case me kaam aata
              hai.
            </span>
          </li>
          <li>
            <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
              State Kisan Yojana List — All States
            </Link>
            <span className="block text-[var(--color-text-muted)]">
              Har rajya ki kisan yojana aur uska status page ek list me.
            </span>
          </li>
          <li>
            <Link href="/rajya-yojana/meri-fasal-mera-byora-status-check-2026">
              Meri Fasal Mera Byora Status Check
            </Link>
            <span className="block text-[var(--color-text-muted)]">
              Haryana ka registration-to-MSP safar — window aur verification ka wahi tarka.
            </span>
          </li>
          <li>
            <Link href="/rajya-yojana/bihar-kisan-registration-status-check-2026">
              DBT Agriculture Bihar Status Check
            </Link>
            <span className="block text-[var(--color-text-muted)]">
              Ek registration number se saari anudan scheme — Bihar ka model.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          iKhedut ke har ghatak ki sahay ki raqam, %, shart aur arji window sarkar ki
          waqt-waqt ki guideline se badalti hai. Arji karne se pehle{' '}
          <Ext href="https://ikhedut.gujarat.gov.in/">ikhedut.gujarat.gov.in</Ext> par us
          ghatak ka page aur apne taluka ke vistaran adhikari se zaroor confirm karein. Ye
          article sirf raasta dikhane ke liye hai, koi sarkari suchna nahi.
        </p>
      </div>

      {/* <!-- typos: "documnet" (2 jagah — reject karan #6 aur FAQ #8 me "blur documnet"), "khaate dinth" (Gujarati "khaate dith" ka natural galat rup, FAQ #5 aur tractor block), "aayegi" jagah "aayega" jaisa mila-jula prayog stylistic hai --> */}
    </article>
  );
}
