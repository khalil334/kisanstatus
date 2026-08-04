import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

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

export default function RythuBharosaStatusCheck2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Telangana sarkar ne Rythu Bharosa ki nayi kist ki prakriya shuru kar di hai. Payment ab 'phase-wise' aur acreage (zameen ke maap) ke hisaab se release ho rahi hai. Isliye agar aapke padosi ko paisa mil gaya hai aur aapko nahi, toh ghabrayein nahi — ye normal process hai. Apna <strong>rythu bharosa status check</strong> niche diye gaye official steps se karein.
      </InfoBox>

      <h1>Rythu Bharosa Status Check 2026: Payment, Per Acre Amount aur Phase-Wise List Guide</h1>

      <p>
        Telangana ke kisanon ke liye <strong>Rythu Bharosa</strong> (pehle Rythu Bandhu ke naam se jaani jaati thi) ek jeevan-rekha ke samaan hai. Ye scheme kisanon ko kheti ki shuruat mein hi beej, khaad aur anya input costs ke liye direct financial support provide karti hai. Lekin har saal kiston ke release ke dauran sabse bada sawal yahi uthta hai ki paisa kab aayega aur kaise pata karein ki hamara naam <strong>rythu bandhu list</strong> mein shamil hai ya nahi.
      </p>

      <p>
        Is comprehensive guide mein hum aapko batayenge ki kaise aap apna <strong>rythu bharosa status check</strong> kar sakte hain, <strong>rythu bharosa per acre amount</strong> kitna hai, aur <strong>rythu bharosa phase wise payment</strong> system kaise kaam karta hai taaki aap befikr ho kar apni kheti par dhyan de sakein.
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

      <h2>Rythu Bharosa Kya Hai aur Per Acre Amount Kitna Hai?</h2>

      <p>
        Rythu Bharosa (Rythu Bandhu) Telangana sarkar ki flagship investment support scheme hai. Iska mukhya uddeshya kisanon ko kharif aur rabi mausam mein kheti ke liye zaroori inputs khareedne mein madad karna hai, taaki unhe sahukaron se karz na lena pade.
      </p>

      <p>
        Sabse important baat ye hai ki is scheme mein paisa fixed nahi hota, balki ye <strong>rythu bharosa per acre amount</strong> ke hisaab se calculate hota hai. Telangana sarkar ne har acre cultivable land ke liye ₹10,000 saalana (₹5,000 Kharif + ₹5,000 Rabi) nirdharit kiye hain. 
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

      <h2>Rythu Bharosa Phase Wise Payment: Paisa "Late" Kyun Lagta Hai?</h2>

      <p>
        Kai baar kisan shikayat karte hain ki unka paisa "late" aa raha hai, jabki unke gaon ke doosre kisanon ko mil gaya hai. Iska jawab <strong>rythu bharosa phase wise payment</strong> system mein chhupa hai.
      </p>

      <p>
        Telangana sarkar ek saath pure state ko paisa release nahi karti. Payment ko alag-alag phases mein baanta jata hai based on:
      </p>
      <ul>
        <li><strong>District aur Mandal-wise verification:</strong> Pehle un districts ko priority di jaati hai jahan land records (Dharani portal) 100% updated hain.</li>
        <li><strong>Account Seeding Status:</strong> Jin kisanon ke bank accounts Aadhaar aur NPCI se pehle se linked hain, unki payment pehle phase mein nikal jaati hai.</li>
        <li><strong>Podu (Tribal) Land Verification:</strong> Tribal areas mein zameen ke rights verify hone mein thoda extra samay lagta hai, isliye wahan ki payment baad ke phases mein aati hai.</li>
      </ul>

      <p>
        Isliye, agar aapka <strong>rythu bharosa payment status</strong> "Processing" dikhata hai, toh iska matlab ye nahi ki paisa nahi aayega. Bas aapka phase abhi aana baaki hai.
      </p>

      <h2>Rythu Bharosa Status Check Kaise Karein? (Step-by-Step)</h2>

      <p>
        Apna status check karna bahut aasan hai. Telangana sarkar ne iske liye ek dedicated aur user-friendly portal banaya hai. Niche diye gaye steps ko follow karein:
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

      <h2>Rythu Bandhu List Kaise Dekhein? (Village Wise)</h2>

      <p>
        Agar aapko lagta hai ki aapka naam list mein miss ho gaya hai, toh aap apne gaon ki <strong>rythu bandhu list</strong> check kar sakte hain. Ye list gaon ke notice board par bhi lagayi jaati hai, lekin online dekhna zyada aasan hai.
      </p>

      <ol>
        <li>Rythu Bharosa portal par "Reports" ya "Beneficiary List" section mein jaayein.</li>
        <li>Apna <strong>Zila (District)</strong>, <strong>Mandal</strong>, aur <strong>Panchayat/Village</strong> select karein.</li>
        <li>Financial Year aur Season (Kharif/Rabi) select karein.</li>
        <li>"Get List" par click karein.</li>
        <li>Ek PDF ya table generate hoga jisme aapke gaon ke sabhi beneficiaries ke naam, account numbers (masked), aur amount likha hoga. Apna naam dhundhein.</li>
      </ol>

      <h2>Rythu Bandhu vs Rythu Bharosa: Kya Fark Hai?</h2>

      <p>
        Bahut se log aaj bhi purane naam se is scheme ko jaante hain. <strong>Rythu bandhu vs rythu bharosa</strong> mein koi bada functional fark nahi hai, bas naam aur kuch administrative improvements kiye gaye hain.
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

      <h2>Payment Nahi Aayi? Common Problems aur Solutions</h2>

      <p>
        Agar aapne <strong>rythu bharosa status check</strong> kiya aur paisa nahi mila, toh niche diye gaye common reasons ko check karein:
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

      <Fig
        src="mandal-revenue-office.webp"
        alt="Kisan Mandal Revenue Office ke bahar line mein khade hain mutation aur Dharani correction ke liye"
        caption="Mutation, disputed tag ya naam ki galti — yeh sirf MRO office mein hi theek hota hai"
      />

      <h2>Kya Aap Dusre State Se Hain?</h2>

      <p>
        Agar aap Telangana ke nivaasi nahi hain, toh ye scheme aap par laagu nahi hoti. Lekin humne India ke doosre mukhya rajyon ki kisan yojanaon par bhi detail se likha hai. Apne state ki jaankari ke liye in links par jaayein:
      </p>

      <ul>
        <li>
          <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
            Annadata Sukhibhava (Andhra Pradesh) — Tenant Farmers ke liye bhi
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">
            Rajasthan Kisan Samman Nidhi 9000: Status aur Badhotri Update
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">
            Namo Shetkari Mahasanman Nidhi (Maharashtra)
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

      <h2>FAQs — Rythu Bharosa</h2>

      <h3>1. Kya mujhe Rythu Bharosa ke liye alag se apply karna padega?</h3>
      <p>
        Nahi. Agar aapka naam Dharani portal par land owner ke roop mein registered hai, toh aap automatically eligible hain. Sarkar khud se data utha kar payment bhejti hai.
      </p>

      <h3>2. Rythu Bharosa per acre amount kitna hai?</h3>
      <p>
        Har acre ke liye saal mein ₹10,000 milte hain, jo do kiston (₹5,000 Kharif aur ₹5,000 Rabi) mein baante jaate hain.
      </p>

      <h3>3. Mera status "Sanctioned" hai lekin paisa nahi aaya, kya karein?</h3>
      <p>
        "Sanctioned" ka matlab hai ki sarkar ne paisa manzoor kar liya hai, lekin abhi bank tak dispatch nahi hua hai. 3-5 kaam ke din intezaar karein. Agar fir bhi na aaye, toh apne bank se NPCI seeding check karwayein.
      </p>

      <h3>4. Kya tenant farmers (bataidar) ko Rythu Bharosa milta hai?</h3>
      <p>
        Nahi, filhal ye scheme sirf zameen ke malikon (land owners) aur Podu (tribal) rights holders ke liye hai. Tenant farmers ko iska direct benefit nahi milta, halanki sarkar unke liye alag se kuch credit guarantee schemes chala rahi hai.
      </p>

      <h3>5. Agar maine zameen bech di hai, toh kya mujhe paisa milega?</h3>
      <p>
        Nahi. Payment us vyakti ko milti hai jiska naam Dharani portal par current owner ke roop mein registered hai. Bechne ke baad aapka naam list se hata diya jayega.
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
        <strong>Surakshit Rahein:</strong> Rythu Bharosa registration ya status theek karne ke liye koi bhi sarkari officer ya agent aapse paise nahi maangta. Ye scheme 100% free hai. Agar koi "commission" maange, toh turant MRO office ya 1800-425-0888 (Telangana Kisan Call Center) par shikayat karein.
      </InfoBox>

    </article>
  );
}