import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojna/namo-shetkari-yojana-status-check-2026';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
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

const FAQS_DATA = [
  {
    q: 'Kya mujhe Namo Shetkari ke liye alag se registration karna padega?',
    a: 'Is scheme ka apna koi application form hi nahi hai — beneficiary list PM Kisan ke Maharashtra wale database se uthai jaati hai. Is liye aapka kaam do jagah hai: PM Kisan mein record chaalu rakhein aur 7/12 Utara mein apna naam durust rakhein. Portal par "registration" ka wada karne wali site private hai, official nahi.',
  },
  {
    q: 'Namo Shetkari hapta kadhi milel?',
    a: 'Pattern ye raha hai ki state ka hapta PM Kisan ki kist aane ke kuch hafton baad release hota hai — kyunki list PM Kisan ke verified data se banti hai. ⚠️ Agle hapte ki koi date officially announce nahi hui hai; GR (Government Resolution) nikalne ke baad hi tareekh pakki hoti hai.',
  },
  {
    q: 'Mera naam beneficiary list mein nahi hai, kya karein?',
    a: 'Pehle check karein ki aap PM Kisan mein eligible hain ya nahi. Agar PM Kisan mein hain, toh apne taluka krishi adhikari (TAL) se sampark karein aur apna 7/12 Utara aur Aadhaar details verify karwayein.',
  },
  {
    q: 'nsmny.mahait.org phone par nahi khul raha — doosra raasta kya hai?',
    a: 'Hapte ke release ke dinon mein portal par load bahut badh jaata hai, is liye page atakna aam baat hai. Do raaste hain: kuch ghante baad raat mein try karein, ya CSC/Mahaonline kendra par free check karwa lein. Offline dekhna ho to talathi office chale jaayein — gaon ki poori suchi wahan har waqt maujood rehti hai.',
  },
  {
    q: 'Maharashtra chhod diya hai, lekin zameen wahin hai — hapta aayega?',
    a: 'Namo Shetkari Maharashtra ke apne budget se milta hai aur iske liye rehna Maharashtra mein hona zaroori hai, is liye rajya chhodne par ye hapta ruk jaata hai — chahe khet wahin ho. PM Kisan par iska koi asar nahi hota; wo central scheme hai aur naye rajya mein bhi chalti rehti hai.',
  },
  {
    q: 'Zameen joint naam par hai (bhai-behen ya pita ke saath), kisko paisa milega?',
    a: 'Jo sadasya PM Kisan mein registered hai, paisa usi ke account mein aayega. Joint 7/12 mein har hissedaar apna alag PM Kisan registration karwa sakta hai agar uska hissa record mein alag darj hai. Bina batwara ke ek hi registration chalta hai.',
  },
  {
    q: 'Hapta aadha aaya, ₹3,000 ki jagah kam amount dikha, aisa kyun?',
    a: 'Namo Shetkari ka hapta fixed ₹3,000 hota hai, kam nahi aata. Agar kam amount dikha hai toh wo kisi aur scheme ki entry hai. Passbook mein transaction ka naam dekhein — NSMNY wali entry hamesha poori ₹3,000 ki hoti hai.',
  },
];

export default function NamoShetkariYojanaStatusCheck2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> ⚠️ Agle hapte ki koi official release date announce nahi hui hai.
        Maharashtra sarkar ne saaf kiya hai ki PM Kisan mein eligible kisanon ko alag se apply
        nahi karna hai. Paisa nahi aaya hai to neeche diye tareeke se apna{' '}
        <strong>namo shetkari yojana status check</strong> kar lein.
      </InfoBox>

      <h1>Namo Shetkari Yojana Status Check 2026: Hapta, Beneficiary List aur Registration Guide</h1>

      <p>
        Maharashtra mein PM Kisan ke beneficiaries ko state apni taraf se ek alag
        hapta deti hai — <strong>नमो शेतकरी महासन्मान निधी</strong> (Namo Shetkari
        Mahasanman Nidhi).
      </p>

      <p>
        Suno zara, do sawaal har baar wahi hote hain. Paisa kab aayega? List mein naam hai ya nahi?
        Neeche dono ka jawab hai — status dekhne ka tareeka, hapte ka waqt, aur naam kat
        jaane ki asli wajahein, bina ghumaye, seedhi baat, jaise koi apna hi samjha raha ho.
      </p>

      <Fig
        src="hero.webp"
        alt="Maharashtra ka shetkari apne ganne ke khet mein mobile par Namo Shetkari hapta ka status dekh raha hai"
        caption="Namo Shetkari Mahasanman Nidhi — PM Kisan ke saath Maharashtra ka apna alag hapta"
        width={1200}
        height={675}
        priority
      />

      <ExternalLinkButton
        href="https://nsmny.mahait.org"
        label="Official Portal — Namo Shetkari Mahasanman Nidhi"
      />

      <h2>7/12 Utara — Maharashtra Ka Sabse Zaroori Kagaz</h2>

      <p>
        Is scheme mein baar-baar 7/12 Utara (saat-baara) ka zikr aata hai, isliye do minute
        ismein laga lein. 7/12 Maharashtra ka land record document hai: form 7 mein malik ka
        naam aur rights hote hain, form 12 mein fasal ka record. Namo Shetkari aur PM Kisan
        dono ke liye aapka naam isi document mein hona chahiye.
      </p>

      <p>
        Ab ye record online hai. <code>bhulekh.mahabhumi.gov.in</code> par district, taluka
        aur gaon chun kar apna survey number daalne se digital 7/12 dikh jaata hai. Do
        cheezein check karein: naam ki spelling Aadhaar se milti hai ya nahi, aur zameen ka
        type "sheti" (agricultural) likha hai ya nahi. Naam mein farak ho toh talathi ke
        paas correction application deni hoti hai. Ye chhota sa kaam aage ki saari
        payments ko atakne se bacha leta hai, kyunki har season verification isi record se
        hota hai.
      </p>

      <h2>Eligible Kaun Hai</h2>

      <p>
        Is scheme ka labh uthane ke liye aapko niche di gayi sharton ko poora karna hoga:
      </p>

      <ul>
        <li>Rehna Maharashtra mein: permanent residence Maharashtra ka ho — sirf khet Maharashtra mein hona kaafi nahi hai.</li>
        <li>PM Kisan ki file chaalu: central record hold ya rejected na ho; wahan atakte hi state ka hapta bhi ruk jaata hai.</li>
        <li>7/12 Utara mein naam: cultivable land ka record aapke naam par ho, aur zameen ka type "sheti" darj ho.</li>
        <li>Naam ki spelling milti ho: Aadhaar, bank aur 7/12 — teeno mein ek hi spelling. Marathi/English ka farak bhi verification atka deta hai.</li>
        <li>e-KYC poori: Aadhaar seeding aur mobile linking dono complete hon.</li>
      </ul>

      <h2>Scheme Kaam Kaise Karti Hai, Aur Kitna Paisa Banta Hai</h2>

      <p>
        Namo Shetkari Mahasanman Nidhi Maharashtra sarkar ki ek flagship scheme hai. Iska seedha connection PM Kisan Samman Nidhi se hai. Agar aap PM Kisan ke eligible beneficiary hain, toh Maharashtra sarkar aapko har saal extra ₹6,000 deti hai. Ye raashi do kiston (installments) mein ₹3,000-₹3,000 karke di jaati hai.
      </p>

      <p>
        <strong>Central Aur State — Saal Bhar Ka Jod</strong>
      </p>

      <SchemeTable>
        <tr>
          <th>Yojana</th>
          <th>Annual Amount</th>
          <th>Installment Breakup</th>
          <th>Source</th>
        </tr>
        <tr>
          <td>PM Kisan Samman Nidhi</td>
          <td>₹6,000</td>
          <td>3 × ₹2,000</td>
          <td>Central Government</td>
        </tr>
        <tr>
          <td>Namo Shetkari Mahasanman Nidhi</td>
          <td>₹6,000</td>
          <td>2 × ₹3,000</td>
          <td>Maharashtra State Government</td>
        </tr>
        <tr>
          <td><strong>Total Combined Benefit</strong></td>
          <td><strong>₹12,000</strong></td>
          <td><strong>5 Installments</strong></td>
          <td><strong>Combined</strong></td>
        </tr>
      </SchemeTable>

      <p>
        Matlab Maharashtra ke ek eligible kisan ke haath saal bhar mein ₹12,000 aate hain:
        ₹6,000 central se aur ₹6,000 state se. Ye raqam beej, khaad aur diesel jaise
        kharchon ke waqt kaam aati hai.
      </p>

      <h2>Sabse Badi Khasiyat: Alag Se Apply Nahi Karna Padta</h2>

      <p>
        Is scheme ka sabse bada advantage ye hai ki aapko namo shetkari yojana registration ke liye alag se koi form nahi bharna padta. Maharashtra sarkar seedha PM Kisan ke database ko use karti hai.
      </p>

      <p>
        PM Kisan ki list mein naam hai aur domicile Maharashtra ka hai? Bas. Itne se aap
        eligible ho jaate hain. Paisa seedha bank account mein aata hai — na form, na
        line, na agent.
      </p>

      <p>
        Iska doosra pehlu bhi note kar lein: PM Kisan hi is scheme ki jad hai. e-KYC pending
        ho ya bank account mismatch ho, to state ka hapta bhi wahi ruk jaata hai.
      </p>

      <p>
        Ek aur baat jo auto-enrollment ke saath aati hai: aap kuch "select" nahi kar sakte.
        Kai kisan taluka office jaakar poochhte hain ki Namo Shetkari ka form kahan milega.
        Aisa koi form hai hi nahi. Agar PM Kisan mein ho, toh andar ho; nahi ho, toh pehle PM
        Kisan mein registration karwana padega (wo CSC centre se ya <code>pmkisan.gov.in</code>
        par khud hota hai), aur uske approve hone ke baad state ki list mein naam apne aap
        aa jaata hai. Beech ka koi shortcut nahi hai, aur jo agent shortcut ka dawa kare wo
        paisa banane ke liye keh raha hai.
      </p>

      <p>
        Ek padosi ne bataya tha — Nashik ki taraf ka ek shetkari teen baar taluka office gaya "Namo
        Shetkari ka form" maangne. Teeno baar khaali haath lauta. Baad mein pata chala uska PM
        Kisan record pehle se approved tha aur pehli kist account mein aa bhi chuki thi; usne
        passbook update hi nahi karwayi thi. Galati mat karna, maine dekha hai log yahi karte hain.
      </p>

      <Fig
        src="vidarbha-cotton-farmer.webp"
        alt="Vidarbha ke kapas ke khet mein mahila shetkari kapas chun rahi hai — Namo Shetkari ki madad kheti ke kharche mein"
        caption="Vidarbha se Konkan tak — hapta buwai aur katai ke kharche ke waqt sabse zyada kaam aata hai"
      />

      <h2>Namo Shetkari Hapta Kadhi Milel — Kist Ka Waqt</h2>

      <p>
        Namo shetkari hapta kadhi milel — ye sawaal sabse zyada poochha jaata
        hai. Maharashtra sarkar aam taur par PM Kisan ki kist ke kuch hafte baad apni kist
        release karti hai. Iski wajah technical hai: state pehle central ki disbursement file
        ka intezaar karti hai, taaki wahi verified data use ho aur double-checking na karni
        pade. Isliye PM Kisan ka aana ek tarah ka signal hai ki ab state ka hapta paas hai.
      </p>

      <SchemeTable>
        <tr>
          <th>Installment</th>
          <th>Period</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1st Installment</td>
          <td>March - April 2026</td>
          <td>Released</td>
        </tr>
        <tr>
          <td>2nd Installment</td>
          <td>⚠️ Date announce nahi hui</td>
          <td>Pending</td>
        </tr>
      </SchemeTable>

      <InfoBox type="info">
        <strong>Note:</strong> Kabhi-kabhi treasury se fund release hone mein thoda samay lag jata hai. Agar PM Kisan aa gaya hai lekin Namo Shetkari nahi aaya, toh 15-20 din ka intezaar karna normal hai. Hairaan mat ho, ye deri system ki hai, aapke record ki nahi.
      </InfoBox>

      <p>
        9va hapta (9th instalment) kab aayega — yeh sawaal aajkal sabse zyada
        poochha ja raha hai. Achha haan, ek aur baat — Scheme 2023 se chal rahi hai, har saal do-teen kist aati hain, toh
        ginti ab aage badh chuki hai. Official date sirf portal aur sarkari announcement se
        confirm hoti hai — aur pichhla pattern yahi raha hai ki nayi kist PM Kisan ki latest
        kist ke kuch hafte baad aati hai. Status check ka tareeka har kist ke liye same rehta
        hai — neeche wale steps follow karein.
      </p>

      <h2>Status Check Karna</h2>

      <p>
        Portal par status dekhna jaldi ho jaayega. Aadhaar number paas rakhein:
      </p>

      <Fig
        src="status-check-csc.webp"
        alt="CSC centre par operator shetkari ko Namo Shetkari portal par beneficiary status check karke dikha raha hai"
        caption="Portal mobile par bhi khulta hai — na khule to CSC ya Mahaonline centre par free check karwao"
      />

      <ol>
        <li>Apne browser mein official website <code>nsmny.mahait.org</code> kholein.</li>
        <li>Homepage par "Beneficiary Status" ya "अपनी स्थिति जांचें" ke option par click karein.</li>
        <li>Apna Aadhaar Number enter karein.</li>
        <li>Screen par dikh raha CAPTCHA code enter karein.</li>
        <li>"Get Status" ya "Search" button par click karein.</li>
        <li>Ab aapke saamne ek detail page khulega jisme aapka naam, gaon, taluka, zila, aur payment status (Released, Pending, ya Failed) dikhayi dega.</li>
      </ol>

      <ExternalLinkButton
        href="https://nsmny.mahait.org"
        label="Check Status on Official NSMNY Portal"
      />

      <h2>Beneficiary List 2026 PDF Mein Naam Dhoondhna</h2>

      <p>
        Poore gaon ya taluke ka hisaab dekhna ho — kis-kis ka naam bana hai — to{' '}
        namo shetkari yojana beneficiary list 2026 PDF portal par khud download
        ki jaa sakti hai:
      </p>

      <ol>
        <li>Portal ke "Reports" section mein jaayein.</li>
        <li>Zila chunein, phir Taluka, phir apna gaon — teeno ek ke baad ek load hote hain.</li>
        <li>Report kholein; ye PDF ke roop mein download hoti hai.</li>
        <li>PDF mein naam Marathi mein bhi ho sakte hain. Apna naam na mile toh pita ke naam ya masked Aadhaar digits se milayen.</li>
      </ol>

      <p>
        List gram panchayat ke notice board par bhi lagti hai, khaas kar kist release ke
        aas-paas. Agar internet ki dikkat hai toh talathi office mein bhi yahi list milti
        hai. Talathi ke paas gaon ke 7/12 records bhi hote hain, isliye naam missing hone
        par wahi sabse pehla aur sabse kaam ka stop hai: ek hi jagah par list bhi dikh
        jaati hai aur land record ki galti bhi pakdi jaati hai.
      </p>

      <h2>Passbook Mein Entry Kaise Pehchanein</h2>

      <p>
        Ek chhoti si cheez jo bahut confusion bachati hai: dono schemes ka paisa ek hi
        account mein aata hai, lekin entries alag naam se aati hain. PM Kisan ki entry mein
        "PMKISAN" ka reference hota hai. Namo Shetkari ki entry state treasury se aati hai
        aur usme "NSMNY" ya Mahait/treasury ka code dikhta hai. Amount se bhi farak saaf
        hai: central wali ₹2,000 hoti hai, state wali ₹3,000.
      </p>

      <p>
        Isliye jab koi kahe "paisa aa gaya", toh pehle entry dekh lein — kaun si aayi
        hai? Aadhi shikayatein sirf is galatfehmi ki hoti hain: ₹2,000 aaya, log samajh
        lete hain poori payment aa gayi, jabki state ke ₹3,000 abhi pipeline mein hote
        hain. Mobile banking ya SMS alert mein bhi yahi codes dikhte hain.
      </p>

      <h2>PM Kisan Aa Gaya, Namo Shetkari Nahi Aaya — Ye Kyun Hota Hai</h2>

      <p>
        Yahi baat baar-baar sunne ko milti hai — pm kisan aaya namo shetkari nahi aaya. Chaar
        wajahein hain jinme se koi ek nikalti hai:
      </p>

      <Fig
        src="bank-dbt-check.webp"
        alt="Shetkari cooperative bank mein passbook lekar Aadhaar seeding aur DBT activation confirm karwa raha hai"
        caption="PM Kisan aaya par Namo Shetkari nahi — pehla shak DBT aur NPCI seeding par jaata hai"
      />

      <h3>1. Bank Account DBT Enabled Nahi Hai</h3>
      <p>
        Agar aapka bank account NPCI (National Payments Corporation of India) mapper mein Aadhaar ke saath linked nahi hai, toh state government ka paisa fail ho jayega, bhale hi PM Kisan ka paisa aa gaya ho (kyunki kabhi-kabhi PM Kisan account number se bhi process ho jata hai, lekin state schemes strict DBT follow karti hain).
      </p>

      <h3>2. Naam Mein Mismatch</h3>
      <p>
        Agar Aadhaar card, bank account, aur PM Kisan database mein aapka naam bilkul same nahi hai (jaise "Ramesh Kumar" vs "Ramesh K."), toh payment reject ho sakti hai.
      </p>

      <h3>3. PM Kisan Status Mein Koi Dikkat</h3>
      <p>
        Kyunki ye scheme PM Kisan par dependent hai, agar aapka PM Kisan status "Rejected" ya "On Hold" hai, toh Namo Shetkari ka paisa bhi nahi aayega. Pehle PM Kisan portal par apna status theek karein.
      </p>

      <h3>4. List Se Naam Kat Jane Ki Wajah</h3>
      <p>
        Kai baar kisanon ka naam achanak list se kat jata hai. Iski wajah ye ho sakti hai:
      </p>
      <ul>
        <li>Aapne ya aapke parivar ne pichhle saal Income Tax return file kiya ho.</li>
        <li>Parivar mein koi sadasya government job par ho.</li>
        <li>Zameen ke records (7/12 Utara) mein koi dispute ya error ho.</li>
        <li>Aapne PM Kisan se voluntarily surrender kar diya ho.</li>
      </ul>

      <h2>Payment Fail Ho Gayi — Ab Kya</h2>

      <ol>
        <li>PFMS Portal Check Karein: <code>pfms.nic.in</code> par jaakar "Know Your Payments" mein apna bank account number aur IFSC code daalein. Yahan pata chalega ki paisa fail kyun hua.</li>
        <li>Bank Branch Jaayein: Apne bank manager se milen aur "Aadhaar Seeding" aur "DBT Activation" confirm karein.</li>
        <li>Taluka Agriculture Office (TAL) Se Sampark Karein: Agar bank sab theek hai, toh apne taluka ke krishi adhikari se milen. Wo aapka data portal par re-verify karwa sakte hain.</li>
      </ol>

      <Fig
        src="gram-panchayat-help.webp"
        alt="Shetkari gram panchayat office ke bahar krishi adhikari se Namo Shetkari payment fail hone ki baat kar rahe hain"
        caption="Bank theek ho phir bhi paisa na aaye to gram panchayat ya taluka krishi office se re-verify karwao"
      />

      <h2>Ek Aam Timeline — Do Acre Wale Kisan Ka Hisaab</h2>

      <p>
        Rule sookhe lagte hain — ye baat samajhna zaroori hai, kyunki ye samajhne se hi aage ka kaam banta hai. Isliye ek aam pattern se samajhein — ye kahani taluka
        krishi office mein har season dohrayi jaati hai. Do acre wala kisan, PM Kisan
        2019 se aa raha hai. Namo Shetkari shuru hone par usne kuch nahi kiya — aur pehli
        kist apne aap aa gayi, kyunki list PM Kisan ke data se bani thi. Doosri kist ke
        waqt problem: PM Kisan ki e-KYC expire ho gayi thi. Central wali kist bhi ruki
        aur state wali bhi — dono ek hi record par khadi hain. CSC par biometric e-KYC
        karwane ke baad agli release mein dono kistein ek saath aayi — ruki hui raqam
        scheme ke record mein rehti hai, khatam nahi hoti.
      </p>

      <p>
        Aise case se teen aadatein nikalti hain, jo har Maharashtra ke kisan ke kaam ki
        hain: har season se pehle e-KYC ka status dekhna, 7/12 mein naam ki spelling
        Aadhaar se milana, aur passbook mein dono entries (PMKISAN aur state wali) alag
        pehchaan kar likhna. In teen kaamon ke baad status check karna sirf tasalli ka
        kaam reh jaata hai — rukavat aane ki jagah hi nahi bachti.
      </p>

      <h2>Shikayat Ka Raasta — Kisse Kya Poochhein</h2>

      <p>
        Kist ruki ho to shikayat ka darwaza problem ke hisaab se chunein. e-KYC aur bank
        seeding ki dikkat CSC aur bank branch ka kaam hai — wahan portal ki shikayat le
        jaane ka fayda nahi. 7/12 ke record ki galti talathi ke paas jaati hai. Aur list ya
        payment se judi baat apne taluka krishi adhikari ke office mein likhit dein —
        registration number, Aadhaar aur problem ek line mein likh kar, paavti ke saath.
        PM Kisan side ki dikkat ke liye helpline 155261 alag se hai. Ek hi shikayat sab
        jagah daalne ke bajaye sahi jagah ek baar daalna hamesha tez kaam karta hai.
      </p>

      <h2>Dusre Rajya Se Hain?</h2>

      <p>Aur bhi states hain, unka bhi dekh lo:</p>

      <ul>
        <li>
          <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
            Rajasthan wale kisanon ke liye ₹9,000 wali Kisan Samman Nidhi ka pura hisaab
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
            Andhra Pradesh ki Annadata Sukhibhava, jahan bataidar bhi cover hote hain
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
            Madhya Pradesh ki CM Kisan Kalyan Yojana ka kist update
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            Har rajya ki kisan yojana ka side-by-side comparison
          </Link>
        </li>
      </ul>

      <p>
        Maharashtra ke bahar rehte hain to ye scheme aap par laagu nahi hoti, lekin aapke
        rajya ka apna intezaam ho sakta hai — upar wali lists mein dekh lein.
      </p>

      <h2>Namo Shetkari — Aur Kuch Jaanna Hai?</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS_DATA.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Namo Shetkari Mahasanman Nidhi FAQ 2026</p>
        <div className="space-y-3">
          {FAQS_DATA.map(({ q, a }) => (
            <details
              key={q}
              className="border border-[var(--color-border)] rounded-xl overflow-hidden group"
            >
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>{q}</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <InfoBox type="tip">
        <strong>Fraud se bachein:</strong> Is scheme mein bharne ke liye koi form hi nahi hai, is liye "registration karwa dunga" ya "hapta jaldi nikalwa dunga" kehne wala har aadmi jhooth bol raha hai. Status dekhna, e-KYC aur 7/12 correction — sab sarkari raste se free hote hain. Aisi demand par apne Taluka Krishi Adhikari (TAO) office mein ya Maharashtra ke Anti-Corruption Bureau ki helpline <strong>1064</strong> par shikayat darj karwaayein.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Ye article sirf madad ke liye hai. Final decision ke liye official portal ya krishi office se sampark karein.
        </p>
      </div>

    </article>
  );
}
