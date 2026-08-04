import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import { FAQBlock } from '@/components/ArticleShared';

const IMG_BASE = '/images/articles/rajya-yojna/rythu-bharosa-status-check-2026';

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
    q: 'Kya mujhe Rythu Bharosa ke liye alag se apply karna padega?',
    a: 'Nahi. Dharani portal par aapka naam land owner ke roop mein registered hai toh aap automatically eligible hain. Sarkar khud data utha kar payment bhejti hai.',
  },
  {
    q: 'Rythu Bharosa per acre amount kitna hai?',
    a: 'Har acre ke liye saal mein ₹10,000 milte hain, jo do kiston (₹5,000 Kharif aur ₹5,000 Rabi) mein baante jaate hain.',
  },
  {
    q: 'Mera status "Sanctioned" hai lekin paisa nahi aaya, kya karein?',
    a: '"Sanctioned" ka matlab hai sarkar ne paisa manzoor kar liya, lekin bank tak dispatch nahi hua. 3-5 kaam ke din intezaar karein. Phir bhi na aaye toh bank se NPCI seeding check karwayein.',
  },
  {
    q: 'Kya tenant farmers (bataidar) ko Rythu Bharosa milta hai?',
    a: 'Filhal nahi. Ye scheme zameen ke malikon aur Podu (tribal) rights holders ke liye hai. Bataidar kisanon ke liye sarkar alag se kuch credit guarantee schemes chalati hai.',
  },
  {
    q: 'Agar maine zameen bech di hai, toh kya mujhe paisa milega?',
    a: 'Nahi. Payment us vyakti ko jaati hai jiska naam Dharani portal par current owner ke roop mein darj hai. Bechne ke baad aapka naam list se hata diya jaata hai.',
  },
  {
    q: 'Zameen do alag mandals mein hai, status kaise dekhein?',
    a: 'Har survey number apne mandal ke record se process hota hai. Aadhaar se search karne par dono parcels ki entries dikhni chahiye. Agar ek parcel missing hai, toh us mandal ke MRO office mein alag se check karwayein — dono payments alag-alag phase mein aa sakti hain.',
  },
];

export default function RythuBharosaStatusCheck2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Nayi kist ki prakriya shuru ho chuki hai. Release phase-wise aur
        acreage ke hisaab se ho raha hai. Isliye padosi ko paisa mil jaana aur aapko na milna abhi
        normal hai. Status dekhne ka tareeka neeche hai.
      </InfoBox>

      <h1>Rythu Bharosa Status Check 2026: Payment, Per Acre Amount aur Phase-Wise List Guide</h1>

      <p>
        Telangana mein <strong>Rythu Bharosa</strong> (purana naam Rythu Bandhu) season shuru hone se
        pehle hi kisan ke haath mein paisa de deti hai, taaki beej aur khaad ke liye sahukar ke paas na
        jaana pade.
      </p>

      <p>
        Do cheezein is scheme ko baaki state schemes se alag banati hain: raqam per acre tay hoti hai,
        aur release ek saath nahi, phase mein hota hai. Dono ka asar seedha aapke status par padta hai.
        Neeche wahi samjhaya hai.
      </p>

      <Fig
        src="hero.webp"
        alt="Telangana ka rythu apne dhaan ke khet mein mobile par Rythu Bharosa payment status dekh raha hai"
        caption="Rythu Bharosa — Telangana mein per acre ke hisaab se seedha bank account mein madad"
        width={1200}
        height={675}
        priority
      />

      <ExternalLinkButton
        href="https://rytubharosa.cgg.gov.in"
        label="Official Portal — Rythu Bharosa Telangana"
      />

      <h2>Per Acre Ke Hisaab Se Paisa — Ganit Kya Hai</h2>

      <p>
        Baaki schemes ki tarah yahan har kisan ko ek jaisa amount nahi milta. Hisaab zameen ke maap se
        lagta hai: har acre cultivable land par ₹10,000 saalana, yaani ₹5,000 Kharif mein aur ₹5,000
        Rabi mein.
      </p>

      <p>
        Do acre wale kisan ko season mein ₹10,000 milega, ek acre wale ko ₹5,000. Isi wajah se gaon
        mein har aadmi ka amount alag dikhta hai.
      </p>

      <p>
        Guntas ka hisaab bhi samajh lein, kyunki Telangana mein zameen aksar acre-gunta mein boli
        jaati hai. Ek acre mein 40 guntas hote hain. Portal par land extent decimal mein dikhta hai:
        maan lijiye aapke paas 2 acre 20 guntas hai, toh system 2.5 acre padhega aur season ka
        ₹12,500 banega. Agar aapko lagta hai ki amount kam aaya hai, toh sabse pehle apna land
        extent Dharani ke record se milayen. Aksar "kam paisa aaya" ki shikayat asal mein guntas ke
        galat record ki hoti hai.
      </p>

      <SchemeTable>
        <tr>
          <th>Parameter</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>Scheme Name</td>
          <td>Rythu Bharosa (Previously Rythu Bandhu)</td>
        </tr>
        <tr>
          <td>Benefit Per Acre</td>
          <td>₹10,000 per year (₹5,000 per season)</td>
        </tr>
        <tr>
          <td>Payment Mode</td>
          <td>Direct Benefit Transfer (DBT) to Bank Account</td>
        </tr>
        <tr>
          <td>Eligibility</td>
          <td>All land-owning farmers in Telangana (including tribal farmers with Podu rights)</td>
        </tr>
        <tr>
          <td>Maximum Limit</td>
          <td>Up to 5 acres per farmer family (as per recent policy updates)</td>
        </tr>
      </SchemeTable>

      <InfoBox type="info">
        <strong>Dhyan Dein:</strong> Agar aapke paas 5 acre se zyada zameen hai, toh bhi aapko sirf 5 acre tak ka hi benefit (₹25,000 per season) milega. Ye limit sarkar ne chhote aur simant kisanon ko zyada se zyada fayda pahunchane ke liye lagayi hai.
      </InfoBox>

      <Fig
        src="paddy-per-acre-farming.webp"
        alt="Telangana ka kisan dhaan ke khet mein pani chhod raha hai — Rythu Bharosa per acre ke hisaab se milta hai"
        caption="Raqam per acre tay hoti hai — zyada zameen, zyada madad; isi liye har kisan ka amount alag hota hai"
      />

      <h2>Padosi Ko Mil Gaya, Mujhe Nahi — Phase System Samjhein</h2>

      <p>
        Ye shikayat sabse zyada aati hai, aur iski wajah koi galti nahi hai. Wajah hai <strong>phase
        wise payment</strong>.
      </p>

      <p>
        Poore state ko ek din mein paisa nahi jaata. Kis mandal ka number pehle aayega, ye teen
        cheezon par tay hota hai:
      </p>
      <ul>
        <li><strong>District aur Mandal-wise verification:</strong> Pehle un districts ko priority di jaati hai jahan land records (Dharani portal) 100% updated hain.</li>
        <li><strong>Account Seeding Status:</strong> Jin kisanon ke bank accounts Aadhaar aur NPCI se pehle se linked hain, unki payment pehle phase mein nikal jaati hai.</li>
        <li><strong>Podu (Tribal) Land Verification:</strong> Tribal areas mein zameen ke rights verify hone mein thoda extra samay lagta hai, isliye wahan ki payment baad ke phases mein aati hai.</li>
      </ul>

      <p>
        Matlab "Processing" dikhne ka arth paisa atak jaana nahi hai. Aapke mandal ka phase aana baaki
        hai, bas.
      </p>

      <h2>Apna Status Kaise Dekhein</h2>

      <p>
        Portal par do minute ka kaam hai. Aadhaar number saath rakhein. Account number se bhi hota
        hai, par Aadhaar zyada reliable nikalta hai:
      </p>

      <Fig
        src="dharani-land-record.webp"
        alt="Kisan Mandal Revenue Office mein adhikari ke saath computer par Dharani portal ka land record dekh raha hai"
        caption="Rythu Bharosa ka data Dharani portal se aata hai — record galat hoga to status bhi galat dikhega"
      />

      <ol>
        <li>Apne mobile ya computer ke browser mein official website <code>rytubharosa.cgg.gov.in</code> kholein.</li>
        <li>Homepage par "Rythu Bharosa Status" ya "Beneficiary Status" ke option par click karein.</li>
        <li>Aapke paas do options honge: "Aadhaar Number" ya "Account Number" se search karna. Aadhaar number sabse reliable hai.</li>
        <li>Apna 12-digit <strong>Aadhaar Number</strong> enter karein.</li>
        <li>Screen par dikh raha CAPTCHA code enter karein aur "Get Details" ya "Submit" par click karein.</li>
        <li>Ek naya page khulega jisme aapka naam, father/husband ka naam, gaon, mandal, district, land extent (acreage), aur current <strong>rythu bharosa payment status</strong> (Sanctioned, Disbursed, ya Pending) dikhayi dega.</li>
      </ol>

      <ExternalLinkButton
        href="https://rytubharosa.cgg.gov.in"
        label="Check Status on Official Rythu Bharosa Portal"
      />

      <h2>Gaon Ki List Mein Naam Dhoondhna</h2>

      <p>
        Lagta hai naam chhoot gaya hai? To gaon ki poori list dekh lein. Notice board par bhi lagti
        hai, par portal se PDF nikaal lena aasan padta hai:
      </p>

      <ol>
        <li>Rythu Bharosa portal par "Reports" ya "Beneficiary List" section mein jaayein.</li>
        <li>Apna <strong>Zila (District)</strong>, <strong>Mandal</strong>, aur <strong>Panchayat/Village</strong> select karein.</li>
        <li>Financial Year aur Season (Kharif/Rabi) select karein.</li>
        <li>"Get List" par click karein.</li>
        <li>Ek PDF ya table generate hoga jisme aapke gaon ke sabhi beneficiaries ke naam, account numbers (masked), aur amount likha hoga. Apna naam dhundhein.</li>
      </ol>

      <h2>Rythu Bandhu Se Rythu Bharosa — Kya Badla</h2>

      <p>
        Gaon mein aaj bhi purana naam hi chalta hai. Kaam karne ka tareeka wahi hai; naam badla hai aur
        kuch administrative cheezein sudhri hain. Sabse badi tabdeeli 5 acre ki cap hai. Rythu Bandhu
        ke zamane mein badi zameen walon ko lakhon rupaye tak mil jaate the, jis par kaafi aalochana
        hui thi. Ab family ke level par 5 acre ki seema hai, jisse budget ka bada hissa chhote kisanon
        tak pahunchta hai:
      </p>

      <SchemeTable>
        <tr>
          <th>Feature</th>
          <th>Rythu Bandhu (Old Name)</th>
          <th>Rythu Bharosa (New Name)</th>
        </tr>
        <tr>
          <td>Basic Concept</td>
          <td>Investment Support</td>
          <td>Investment Support (Same)</td>
        </tr>
        <tr>
          <td>Amount Per Acre</td>
          <td>₹10,000/year</td>
          <td>₹10,000/year (₹5,000/season)</td>
        </tr>
        <tr>
          <td>Land Limit</td>
          <td>No strict upper limit initially</td>
          <td>Capped at 5 acres per family for equitable distribution</td>
        </tr>
        <tr>
          <td>Tribal Farmers</td>
          <td>Required complex Podu pattas</td>
          <td>Simplified verification for Podu land rights</td>
        </tr>
        <tr>
          <td>Portal Integration</td>
          <td>Standalone</td>
          <td>Deeply integrated with Dharani Land Records Portal</td>
        </tr>
      </SchemeTable>

      <h2>Phase Aa Gaya Par Paisa Nahi — Chaar Wajahein</h2>

      <p>
        Status dekh liya, phase bhi nikal gaya, phir bhi account khaali hai. Aise cases mein inme se
        koi ek wajah nikalti hai:
      </p>

      <h3>1. Dharani Portal Mein Naam Update Nahi Hai</h3>
      <p>
        <strong>Solution:</strong> Rythu Bharosa ka data seedha Dharani portal se aata hai. Agar aapne haal hi mein zameen khareedi hai ya virasat (inheritance) mein mili hai, lekin Dharani par mutation (namantaran) nahi hua, toh paisa purane malik ke account mein jaane ki koshish karega ya fail ho jayega. Turant MRO (Mandal Revenue Officer) office jaakar Dharani update karwayein.
      </p>

      <Fig
        src="bank-aadhaar-seeding.webp"
        alt="Kisan bank branch mein passbook lekar account active karwane aur Aadhaar NPCI seeding check karwane aaya hai"
        caption="Dormant account aur missing Aadhaar seeding — do sabse aam wajah jinse payment fail hoti hai"
      />

      <h3>2. Bank Account Dormant Ya Band Hai</h3>
      <p>
        <strong>Solution:</strong> Agar aapka bank account lambey samay se use nahi hua hai, toh wo "Dormant" ho sakta hai. Bank jaakar account ko "Active" karwayein aur DBT (Direct Benefit Transfer) enable karwayein.
      </p>

      <h3>3. Aadhaar Seeding Missing Hai</h3>
      <p>
        <strong>Solution:</strong> Telangana sarkar ab strict DBT follow karti hai. Apne bank branch mein jaakar confirm karein ki aapka account NPCI mapper mein aapke Aadhaar number se linked hai.
      </p>

      <h3>4. "Disputed Land" Status</h3>
      <p>
        <strong>Solution:</strong> Agar zameen par koi court case ya parivarik vivad (family dispute) hai, toh Dharani portal par us par "Disputed" ka tag lag jata hai. Aise cases mein payment tab tak roki jaati hai jab tak vivad khatam nahi ho jata.
      </p>

      <h2>Virasat Ki Zameen — Sabse Zyada Atakne Wala Case</h2>

      <p>
        Ek scenario itna common hai ki alag se likhna zaroori hai. Pita ka dehant ho gaya, zameen
        ab bete-betiyon ke naam aani hai, lekin Dharani par mutation abhi purane naam par hi hai.
        Aise mein Rythu Bharosa ka paisa purane record ke hisaab se process hota hai aur dehant ke
        baad account freeze hone se payment fail ho jaati hai.
      </p>

      <p>
        Iska rasta succession mutation hai. Dharani portal par "Succession" module se online
        application hoti hai. Chahiye hota hai: death certificate, family member certificate
        (Meeseva se banta hai), sabhi legal heirs ke Aadhaar, aur agar koi heir apna hissa chhod
        raha hai toh registered relinquishment deed. MRO verification ke baad naye pattadar
        passbooks bante hain. Process mein aam taur par 3 se 6 hafte lagte hain. Jab tak mutation
        complete nahi hota, us zameen ki Rythu Bharosa payment rukegi — isliye is kaam ko season
        shuru hone se pehle nipta lena sabse samajhdari ka kadam hai.
      </p>

      <Fig
        src="mandal-revenue-office.webp"
        alt="Kisan Mandal Revenue Office ke bahar line mein khade hain mutation aur Dharani correction ke liye"
        caption="Mutation, disputed tag ya naam ki galti — yeh sirf MRO office mein hi theek hota hai"
      />

      <h2>Rythu Bharosa Aur PM Kisan — Dono Ek Saath Milte Hain</h2>

      <p>
        Kai kisan sochte hain ki state scheme mili toh central wali cut jayegi. Aisa nahi hai.
        Rythu Bharosa aur PM Kisan bilkul alag-alag systems hain aur dono ka paisa ek hi account
        mein aa sakta hai. Farq itna hai ki PM Kisan mein amount fixed ₹6,000 saalana hai (zameen
        chahe kitni bhi ho), jabki Rythu Bharosa per acre chalti hai.
      </p>

      <p>
        Lekin dono ke records alag chalte hain, aur yahi se dikkat aati hai. Dharani mein aapka
        record perfect ho sakta hai aur phir bhi PM Kisan mein e-KYC pending hone se central wali
        kist ruk sakti hai — ya iska ulta. Isliye season mein ek baar dono status alag-alag check
        kar lein: Rythu Bharosa portal par state wali, aur <code>pmkisan.gov.in</code> par central
        wali. Passbook mein entry dekhte waqt bhi dhyan rakhein: Rythu Bharosa ki entry mein
        "RYTHU" ya treasury ka reference hota hai, jabki PM Kisan ki entry "PMKISAN" naam se aati
        hai. Isse turant pata chal jaata hai ki kaun sa paisa aaya aur kaun sa atka hai.
      </p>

      <h2>Status Check Se Pehle Ye Teen Cheezein Saath Rakhein</h2>

      <ul>
        <li>
          <strong>Pattadar Passbook:</strong> Ismein aapka khata number aur land extent likha hota
          hai. Portal ka data isi se milana hai.
        </li>
        <li>
          <strong>Aadhaar Card:</strong> Status search Aadhaar se hi sabse sahi baithti hai. Number
          yaad ho toh bhi card saath rakhein, kyunki spelling milani pad sakti hai.
        </li>
        <li>
          <strong>Bank Passbook (updated):</strong> Payment aayi ya nahi, iska final proof passbook
          ki entry hai. Portal par "Disbursed" aur account mein credit ke beech 2-3 din ka gap
          normal hai.
        </li>
      </ul>

      <h2>Telangana Se Bahar Ke Kisan Yahan Dekhein</h2>

      <p>
        Per-acre wala hisaab Telangana ki khaas baat hai. Baaki rajyon mein amount fixed hota hai,
        chahe zameen kitni bhi ho. Apne rajya ka tareeka yahan hai:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
            Annadata Sukhibhava — padosi state AP ka scheme, jahan bataidar bhi cover hote hain
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
            Rajasthan mein ₹9,000 wali Kisan Samman Nidhi ka status
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">
            Maharashtra ki Namo Shetkari Mahasanman Nidhi
          </Link>
        </li>
      </ul>

      <p>
        Kis rajya mein kitna milta hai, ek nazar mein:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            Har state ki kisan yojana ka comparison ek hi table mein
          </Link>
        </li>
      </ul>

      <h2>Rythu Bharosa — Aksar Poochhe Jaane Wale Sawaal</h2>

      <FAQBlock faqs={FAQS_DATA} caption="Rythu Bharosa FAQ 2026" />

      <h2>Related Articles</h2>
      <ul>
        <li>
          <Link href="/articles/PmKisan24viKist2026">
            PM Kisan 24vi Kist 2026 — Next Installment Date aur Status
          </Link>
        </li>
        <li>
          <Link href="/articles/pm-kisan-pati-patni-dono-ko-milega">
            Ek parivar mein pati-patni dono ko PM Kisan milta hai ya nahi — family rule
          </Link>
        </li>
      </ul>

      <InfoBox type="tip">
        <strong>Surakshit Rahein:</strong> Rythu Bharosa registration ya status theek karne ke liye koi bhi sarkari officer ya agent aapse paise nahi maangta. Ye scheme 100% free hai. Agar koi "commission" maange, toh turant MRO office ya 1800-425-0888 (Telangana Kisan Call Center) par shikayat karein.
      </InfoBox>

    </article>
  );
}