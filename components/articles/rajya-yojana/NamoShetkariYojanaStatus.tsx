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

export default function NamoShetkariYojanaStatusCheck2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Namo Shetkari Yojana ka agla hapta (installment) release hone ki prakriya shuru ho chuki hai. Maharashtra sarkar ne clear kiya hai ki jo kisan PM Kisan mein eligible hain, unhe alag se apply karne ki zaroorat nahi hai. Agar aapka paisa nahi aaya hai, toh niche diye gaye steps se apna <strong>namo shetkari yojana status check</strong> karein.
      </InfoBox>

      <h1>Namo Shetkari Yojana Status Check 2026: Hapta, Beneficiary List aur Registration Guide</h1>

      <p>
        Maharashtra ke kisanon ke liye ek bahut badi raahat ki scheme hai <strong>नमो शेतकरी महासन्मान निधी</strong> (Namo Shetkari Mahasanman Nidhi). Is scheme ka mukhya uddeshya PM Kisan Samman Nidhi ke beneficiaries ko state ki taraf se extra financial support dena hai. Lekin kai kisanon ke dimaag mein ye sawal ghoom raha hai ki unka paisa kab aayega aur kaise pata karein ki unka naam list mein hai ya nahi.
      </p>

      <p>
        Is detailed guide mein hum step-by-step batayenge ki kaise aap apna <strong>namo shetkari yojana status check</strong> kar sakte hain, <strong>namo shetkari hapta kadhi milel</strong> ( installment kab milega), aur agar aapka naam list se kat gaya hai toh uski wajah kya ho sakti hai.
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

      <h2>Namo Shetkari Yojana Kya Hai aur Isme Kitna Paisa Milta Hai?</h2>

      <p>
        Namo Shetkari Mahasanman Nidhi Maharashtra sarkar ki ek flagship scheme hai. Iska seedha connection PM Kisan Samman Nidhi se hai. Agar aap PM Kisan ke eligible beneficiary hain, toh Maharashtra sarkar aapko har saal extra ₹6,000 deti hai. Ye raashi do kiston (installments) mein ₹3,000-₹3,000 karke di jaati hai.
      </p>

      <p>
        Iska matlab ye hua ki ek Maharashtra ke eligible kisan ko saal mein total ₹12,000 (₹6,000 Central + ₹6,000 State) milte hain. Ye scheme kisanon ko beej, khaad, aur kheti ke dusre zaroori kharchon ko poora karne mein madad karti hai.
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

      <h2>Sabse Badi Khasiyat: Alag Se Apply Nahi Karna Padta</h2>

      <p>
        Is scheme ka sabse bada advantage ye hai ki aapko <strong>namo shetkari yojana registration</strong> ke liye alag se koi form nahi bharna padta. Maharashtra sarkar seedha PM Kisan ke database ko use karti hai. 
      </p>

      <p>
        Agar aapka naam PM Kisan ki beneficiary list mein hai aur aap Maharashtra ke sthayi nivasi hain, toh aap automatically is scheme ke liye eligible ho jaate hain. Sarkar aapke bank account mein seedha paisa bhej deti hai. Lekin agar aapka PM Kisan status mein koi dikkat hai (jaise e-KYC pending ya bank account mismatch), toh state scheme ka paisa bhi ruk jayega.
      </p>

      <Fig
        src="vidarbha-cotton-farmer.webp"
        alt="Vidarbha ke kapas ke khet mein mahila shetkari kapas chun rahi hai — Namo Shetkari ki madad kheti ke kharche mein"
        caption="Vidarbha se Konkan tak — hapta buwai aur katai ke kharche ke waqt sabse zyada kaam aata hai"
      />

      <h2>Namo Shetkari Hapta Kadhi Milel? (Expected Installment Dates)</h2>

      <p>
        Kisanon ke liye sabse important sawal ye hai ki <strong>namo shetkari hapta kadhi milel</strong>. Maharashtra sarkar aam taur par PM Kisan ki kist aane ke kuch hafton baad apni kist release karti hai. 
      </p>

      <SchemeTable>
        <tr>
          <th>Installment</th>
          <th>Expected Period</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1st Installment</td>
          <td>March - April 2026</td>
          <td>✅ Released</td>
        </tr>
        <tr>
          <td>2nd Installment</td>
          <td>August - September 2026</td>
          <td>⏳ Processing / Expected</td>
        </tr>
      </SchemeTable>

      <InfoBox type="info">
        <strong>Note:</strong> Kabhi-kabhi treasury se fund release hone mein thoda samay lag jata hai. Agar PM Kisan aa gaya hai lekin Namo Shetkari nahi aaya, toh 15-20 din ka intezaar karna normal hai.
      </InfoBox>

      <h2>Namo Shetkari Yojana Status Check Kaise Karein? (Step-by-Step)</h2>

      <p>
        Apna <strong>namo shetkari yojana status check</strong> karna bahut aasan hai. Niche diye gaye steps ko follow karein:
      </p>

      <Fig
        src="status-check-csc.webp"
        alt="CSC centre par operator shetkari ko Namo Shetkari portal par beneficiary status check karke dikha raha hai"
        caption="Portal mobile par bhi khulta hai — na khule to CSC ya Mahaonline centre par free check karwao"
      />

      <ol>
        <li>Apne browser mein official website <code>nsmny.mahait.org</code> kholein.</li>
        <li>Homepage par "Beneficiary Status" ya "अपनी स्थिति जांचें" ke option par click karein.</li>
        <li>Apna <strong>Aadhaar Number</strong> enter karein.</li>
        <li>Screen par dikh raha CAPTCHA code enter karein.</li>
        <li>"Get Status" ya "Search" button par click karein.</li>
        <li>Ab aapke saamne ek detail page khulega jisme aapka naam, gaon, taluka, zila, aur payment status (Released, Pending, ya Failed) dikhayi dega.</li>
      </ol>

      <ExternalLinkButton
        href="https://nsmny.mahait.org"
        label="Check Status on Official NSMNY Portal"
      />

      <h2>Namo Shetkari Beneficiary List Kaise Dekhein?</h2>

      <p>
        Agar aap jaanna chahte hain ki aapke gaon ya taluke mein kin-kin kisanon ko is scheme ka labh mil raha hai, toh aap <strong>namo shetkari beneficiary list</strong> bhi dekh sakte hain.
      </p>

      <ol>
        <li>Official portal ke "Reports" ya "Beneficiary List" section mein jaayein.</li>
        <li>Apna Zila (District), Taluka, aur Gram Panchayat select karein.</li>
        <li>"Search" ya "Download PDF" par click karein.</li>
        <li>List mein apna naam ya apne parivar ke kisi sadasya ka naam search karein.</li>
      </ol>

      <h2>PM Kisan Aaya, Namo Shetkari Nahi Aaya: Iski Wajah Kya Ho Sakti Hai?</h2>

      <p>
        Ye ek bahut common problem hai. Kai kisan report karte hain ki unhe <strong>pm kisan aaya namo shetkari nahi aaya</strong>. Iske kuch mukhya karan ho sakte hain:
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

      <h2>Agar Payment Fail Ho Jaye Toh Kya Karein?</h2>

      <ol>
        <li><strong>PFMS Portal Check Karein:</strong> <code>pfms.nic.in</code> par jaakar "Know Your Payments" mein apna bank account number aur IFSC code daalein. Yahan pata chalega ki paisa fail kyun hua.</li>
        <li><strong>Bank Branch Jaayein:</strong> Apne bank manager se milen aur "Aadhaar Seeding" aur "DBT Activation" confirm karein.</li>
        <li><strong>Taluka Agriculture Office (TAL) Se Sampark Karein:</strong> Agar bank sab theek hai, toh apne taluka ke krishi adhikari se milen. Wo aapka data portal par re-verify karwa sakte hain.</li>
      </ol>

      <Fig
        src="gram-panchayat-help.webp"
        alt="Shetkari gram panchayat office ke bahar krishi adhikari se Namo Shetkari payment fail hone ki baat kar rahe hain"
        caption="Bank theek ho phir bhi paisa na aaye to gram panchayat ya taluka krishi office se re-verify karwao"
      />

      <h2>Eligibility: Kaun Le Sakta Hai Ye Labh?</h2>

      <p>
        Is scheme ka labh uthane ke liye aapko niche di gayi sharton ko poora karna hoga:
      </p>

      <ul>
        <li><strong>Maharashtra Ka Nivasi:</strong> Applicant ka permanent residence Maharashtra mein hona chahiye.</li>
        <li><strong>PM Kisan Beneficiary:</strong> Aapka naam PM Kisan ki active beneficiary list mein hona chahiye.</li>
        <li><strong>Landholding:</strong> Aapke paas cultivable land honi chahiye (7/12 Utara mein naam hona chahiye).</li>
        <li><strong>e-KYC Complete:</strong> Aadhaar seeding aur mobile linking complete honi chahiye.</li>
      </ul>

      <h2>Kya Aap Dusre State Se Hain?</h2>

      <p>
        Agar aap Maharashtra ke nivaasi nahi hain, toh ye scheme aap par laagu nahi hoti. Lekin chinta na karein, humne India ke doosre mukhya rajyon ki kisan yojanaon par bhi detail se likha hai. Apne state ki jaankari ke liye in links par jaayein:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
            Rajasthan Kisan Samman Nidhi 9000: Status aur Badhotri Update
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
            Annadata Sukhibhava (Andhra Pradesh) — Tenant Farmers ke liye bhi
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
            MP CM Kisan Kalyan Yojana — Latest Kist Update
          </Link>
        </li>
      </ul>

      <p>
        Sabhi state schemes ka ek saath overview dekhne ke liye:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            State Kisan Yojana List — Sabhi States Ka Comparison Table
          </Link>
        </li>
      </ul>

      <h2>FAQs — Namo Shetkari Yojana</h2>

      <h3>1. Kya mujhe Namo Shetkari ke liye alag se registration karna padega?</h3>
      <p>
        Nahi. Agar aap PM Kisan mein registered hain aur Maharashtra ke nivasi hain, toh aap automatically eligible hain. Alag se koi registration ya form bharne ki zaroorat nahi hai.
      </p>

      <h3>2. Namo Shetkari hapta kadhi milel?</h3>
      <p>
        Aam taur par ye hapta PM Kisan ki kist aane ke 2-4 hafton baad release hota hai. Agla installment August-September 2026 ke beech expected hai.
      </p>

      <h3>3. Mera naam beneficiary list mein nahi hai, kya karein?</h3>
      <p>
        Pehle check karein ki aap PM Kisan mein eligible hain ya nahi. Agar PM Kisan mein hain, toh apne taluka krishi adhikari (TAL) se sampark karein aur apna 7/12 Utara aur Aadhaar details verify karwayein.
      </p>

      <h3>4. Kya main apna status mobile se check kar sakta hoon?</h3>
      <p>
        Haan, bilkul. Official portal <code>nsmny.mahait.org</code> mobile-friendly hai. Aap apne registered mobile number par aaye OTP ke zariye kabhi bhi apna status check kar sakte hain.
      </p>

      <h3>5. Agar main Maharashtra se bahar shift ho gaya hoon, toh kya mujhe paisa milega?</h3>
      <p>
        Nahi. Ye scheme sirf Maharashtra ke sthayi nivaasiyon (permanent residents) ke liye hai. Agar aapka domicile badal gaya hai, toh aap is scheme ke eligible nahi rahenge.
      </p>

      <h2>Related Articles</h2>
      <ul>
        <li>
          <Link href="/articles/PmKisan24viKist2026">
            PM Kisan 24vi Kist 2026 — Next Installment Date aur Status
          </Link>
        </li>
        <li>
          <Link href="/articles/pm-kisan-pati-patni-dono-ko-milega">
            Pati-Patni Dono Ko PM Kisan Milega Ya Nahi? (Family Rules Explained)
          </Link>
        </li>
      </ul>

      <InfoBox type="tip">
        <strong>Surakshit Rahein:</strong> Koi bhi sarkari yojana registration ya status theek karne ke naam par aapse paise nahi maangti. Namo Shetkari Yojana 100% free hai. Agar koi aapse "fees" maange, toh wo fraud hai. Turant 1800-233-0880 (Maharashtra Kisan Call Center) par shikayat darj karein.
      </InfoBox>

    </article>
  );
}