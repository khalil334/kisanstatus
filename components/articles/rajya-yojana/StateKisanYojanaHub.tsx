import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import { FAQBlock } from '@/components/ArticleShared';

const IMG_BASE = '/images/articles/rajya-yojna/mp-kisan-kalyan-yojana-kist-status';

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
    q: 'Kya mujhe iske liye alag se application deni padegi?',
    a: 'Nahi. Agar PM Kisan mein registered hain aur MP ke nivaasi hain, sarkar khud hi is scheme mein daal deti hai. Koi alag form nahi bharna padta.',
  },
  {
    q: 'MP Kisan Kalyan Yojana ka amount kitna hai?',
    a: 'Abhi ₹6,000 saalana hai, teen kiston mein. 2020 mein ye ₹4,000 se shuru hui thi, 2023 mein badhi. Internet par ₹4,000 wala purana figure ab bhi ghoom raha hai — us par mat jaayein.',
  },
  {
    q: 'Meri kist "Rejected" dikha rahi hai, kya karein?',
    a: 'Zyadatar case mein bank account DBT se juda nahi hota, ya Aadhaar mein naam thoda alag likha hota hai. Bank jaakar NPCI seeding check karwayein. Zaroorat pade to Patwari se land record mein naam theek karwayein.',
  },
  {
    q: 'Kya main apna status mobile se check kar sakta hoon?',
    a: 'Haan, SAARA portal mobile par bhi khulta hai. OTP registered number par aata hai.',
  },
  {
    q: 'Agar main MP se bahar shift ho gaya hoon, toh kya mujhe paisa milega?',
    a: 'Nahi. MP ka domicile zaroori shart hai — shift hone ke baad eligibility khatam ho jaati hai.',
  },
  {
    q: 'Girdawari mein fasal galat darj ho gayi hai, kist par asar padega kya?',
    a: 'Seedha asar aam taur par nahi padta, par galat record aage bima aur muavze mein pareshaan karta hai. MP Kisan App se objection darj karein ya Patwari se milein — season khatam hone se pehle theek karwana aasan rehta hai.',
  },
  {
    q: 'Pichhli kist mili thi, is baar nahi aayi. Naam kat gaya kya?',
    a: 'Zaroori nahi. SAARA par status dekhein — "eligible" dikhe to bas release ka intezaar hai. "Not eligible" ya record gayab ho, tab Janpad Panchayat mein poochhein. Aksar wajah e-KYC expire hona ya land record update na hona hoti hai, document theek karte hi hal ho jaata hai.',
  },
  {
    q: 'Kya is kist par income tax lagta hai?',
    a: 'Ye agricultural income support ke roop mein aati hai, isliye zyadatar chhote-marginal kisan ke liye taxable nahi maani jaati. Waise bhi jo already ITR file karte hain wo scheme se bahar hain. Apne specific case ke liye CA se hi poochh lein, ye general jaankari hai.',
  },
  {
    q: 'Ek hi parivaar mein do log alag PM Kisan record par hain, dono ko milega?',
    a: 'Agar genuinely alag zameen, alag khaton mein register hain, aur family definition (pati-patni + nabaalig bachche = ek unit) todi nahi ja rahi, to mil sakta hai. Duplicate family record pakda gaya to dono ki kist rukti hai, aur recovery bhi ho sakti hai.',
  },
];

export default function MPCMKisanKalyanYojanaKistStatus() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Agli kist ki date SAARA portal par abhi announce nahi hui.
        Pichhli kist ₹2,000 ki thi. WhatsApp par ghoom rahi "confirmed date" ka koi aadhaar nahi hai —
        jab tak portal khud na dikhaye, use expected hi maanein.
      </InfoBox>

      <h1>MP CM Kisan Kalyan Yojana Kist Kab Aayegi: Status Check, Amount aur SAARA Portal Guide</h1>

      <p>
        Kist kab aayegi — yahi ek sawaal MP ke kisan ghar-ghar poochhte hain. Aur jawab dene wali
        aadhi websites afwaah chhaap deti hain. Amount ka bhi wahi haal hai: kahin purana ₹4,000
        likha milta hai, jabki current amount ₹6,000 hai.
      </p>

      <p>
        Neeche jo hai wo SAARA portal aur official records se liya gaya hai. Kitna paisa banta hai,
        kaun eligible hai, kist ka pattern kaisa rehta hai — sab ek jagah.
      </p>

      <Fig
        src="hero.webp"
        alt="Madhya Pradesh ka kisan gehun ke khet mein mobile par CM Kisan Kalyan Yojana ki kist ka status dekh raha hai"
        caption="MP CM Kisan Kalyan Yojana — PM Kisan ke saath state ki alag kist, SAARA portal par status milta hai"
        width={1200}
        height={675}
        priority
      />

      <ExternalLinkButton
        href="https://saara.mp.gov.in"
        label="Official Portal — SAARA MP Govt"
      />

      <h2>Ye Scheme Kahan Se Aayi, Aur Kitna Paisa Banta Hai</h2>

      <p>
        Ye MP sarkar ki apni scheme hai, lekin list PM Kisan se banti hai. Maqsad seedha hai — beej,
        khaad aur sinchai ke kharche mein thodi raahat.
      </p>

      <p>
        Scheme September 2020 mein shuru hui. Tab CM ne elaan kiya tha ki har PM Kisan beneficiary
        ko state apni taraf se top-up degi. Shuruaati amount ₹4,000 tha. 2023 mein cabinet ne isse
        badhakar ₹6,000 kar diya — ye badhotri ek official cabinet decision se hui, sirf bhaashan
        se nahi. Isi wajah se kai purani websites aaj bhi ₹4,000 dikhati hain, jinhe update hi nahi
        kiya gaya.
      </p>

      <p>
        SAARA portal aur pichhle vitthiya varsh ke installment records — jismein 14vi-15vi kist
        July 2026 mein saath release hui — dono confirm karte hain ki current amount ₹6,000 saalana
        hai, teen kiston mein, ₹2,000 har kist. Apne account ka sach jaanna ho to bas do jagah
        dekhein: passbook aur SAARA dashboard.
      </p>

      <InfoBox type="warning">
        <strong>Satark Rahein:</strong> ₹4,000 wale dawe outdated hain, 2023 se pehle ka amount tha.
        ₹10,000 total (PM Kisan + state) likha mile to wo bhi purana hisaab hai — current total
        ₹12,000 hai. Status hamesha SAARA portal se hi confirm karein.
      </InfoBox>

      <SchemeTable>
        <tr>
          <th>Yojana</th>
          <th>Annual Amount</th>
          <th>Source</th>
          <th>Frequency</th>
        </tr>
        <tr>
          <td>PM Kisan Samman Nidhi</td>
          <td>₹6,000</td>
          <td>Central Govt</td>
          <td>3 Installments (₹2,000 each)</td>
        </tr>
        <tr>
          <td>MP CM Kisan Kalyan Yojana</td>
          <td>₹6,000 (Verified)</td>
          <td>MP State Govt</td>
          <td>3 Installments (₹2,000 each)</td>
        </tr>
        <tr>
          <td><strong>Total Expected</strong></td>
          <td><strong>₹12,000</strong></td>
          <td><strong>Combined</strong></td>
          <td><strong>Varies</strong></td>
        </tr>
      </SchemeTable>

      <h2>SAARA Portal Kya Hai — Aur Wahi Kyun</h2>

      <p>
        SAARA (Smart Application for Revenue Administration) MP ke revenue department ka system hai.
        Girdawari, land records aur kisan schemes ka data isi ek jagah chalta hai. Status isi liye
        SAARA par dikhta hai, kisi alag yojana portal par nahi.
      </p>

      <p>
        Ye baat samajhna zaroori hai kyunki kist ka connection seedha girdawari se hai. Jis season
        aapki zameen par fasal darj nahi hoti, us season state ki kist atak sakti hai — chahe PM
        Kisan aata rahe. Girdawari har season Patwari karta hai, aur SAARA app se kisan khud bhi
        apni fasal darj kar sakta hai.
      </p>

      <h2>SAARA Portal Par Apna Status Kaise Dekhein</h2>

      <p>
        Poora kaam online hai aur free hai. Aadhaar number ya registered mobile paas rakhein, OTP
        usi par aayega.
      </p>

      <Fig
        src="saara-portal-status-check.webp"
        alt="CSC kiosk par operator kisan ko SAARA portal par Kisan Kalyan Yojana ka status check karke dikha raha hai"
        caption="SAARA portal mobile par bhi khulta hai — na khule to CSC ya kiosk par free check ho jaata hai"
      />

      <ol>
        <li>Mobile ya computer ke browser mein <code>saara.mp.gov.in</code> kholein.</li>
        <li>Homepage par "Farmer Services" ya "Kisan Kalyan Yojana" dhundhein.</li>
        <li>"Beneficiary Status" ya "Kist Status" par click karein.</li>
        <li><strong>Aadhaar Number</strong> ya <strong>Registered Mobile Number</strong> daalein.</li>
        <li>OTP verify karein — wo usi number par aayega jo PM Kisan/State database mein hai.</li>
        <li>Dashboard par "Payment Status", "Pending Amount", aur "Bank Account Details" dikh jaayenge.</li>
      </ol>

      <ExternalLinkButton
        href="https://saara.mp.gov.in"
        label="Check Status on SAARA Portal"
      />

      <Fig
        src="wheat-harvest-mp.webp"
        alt="Madhya Pradesh mein gehun ki katai ke baad kisan tractor trolley mein fasal load kar rahe hain"
        caption="Kist ka timing aksar rabi katai aur kharif buwai ke kharche ke aas-paas rakha jaata hai"
      />

      <h2>Kist Ka Waqt — Pichhle Saalon Ka Pattern</h2>

      <p>
        Fixed date koi nahi hai. State sarkar national calendar se nahi chalti. Pattern ye batata
        hai: pehli kist aam taur par PM Kisan ki kist ke 1-2 mahine baad release hoti hai, aur baaki
        kisten saal bhar mein phaili rehti hain — kabhi do kisten ek saath bhi aati hain, jaise
        July 2026 mein 14vi-15vi kist saath aayi.
      </p>

      <p>
        Release aksar kisi event ke saath hota hai. CM ke haathon ek program mein single click se
        transfer hota hai, aur us din lakhs of accounts mein ek saath paisa credit hota hai. Matlab
        jab tak aisa program schedule nahi hota, intezaar chalta rehta hai. Newspaper mein "CM ne
        transfer kiya" ki khabar dikhe aur aapke account mein kuch na aaye — us se pehle koi bhi
        date sirf afwaah hai.
      </p>

      <p>PM Kisan aa gaya aur state ka nahi aaya? Ye normal hai. Alag release cycle, alag treasury process — 15 se 30 din ka farak aam baat hai.</p>

      <h3>Saal Bhar Ka Rough Calendar</h3>

      <p>
        Kiston ki exact date kabhi fix nahi hoti, lekin pichhle kai saalon ka data ek saath dekhein
        to ek loose pattern nazar aata hai. Ye guarantee nahi hai, sirf itna samajhne ke liye hai
        ki kist der se aa rahi hai ya abhi season hi nahi aaya.
      </p>

      <p>
        Kharif ki girdawari poori hone ke baad, Oct-Dec ke aas-paas pehla window khulta hai — kai
        saal pehli kist yahin aayi hai. Naya vitthiya varsh shuru hone par, Jan-Mar mein, budget
        allocation ka asar dikhta hai aur ye rabi katai se pehle ka waqt doosri kist ke liye common
        raha hai. Fir Jun-Aug mein, jab kharif buwai ka kharcha sabse zyada hota hai, state teesri
        kist ya pending kisten ek saath release karti hai — jaisa July 2026 mein hua.
      </p>

      <p>
        Kist is window ke aas-paas nahi aayi to iska matlab "rok di gayi" nahi hota. Pehle SAARA
        par status dekhein, uske baad hi pareshaan hon.
      </p>

      <h2>Kaun Eligible Hai, Kaun Nahi</h2>

      <p>Jad PM Kisan hi hai, isliye shartein lagbhag wahi hain — kuch state ke apne add-on ke saath.</p>

      <h3>Mandatory Conditions:</h3>
      <ul>
        <li><strong>MP Ka Nivasi:</strong> Permanent residence Madhya Pradesh mein hona chahiye.</li>
        <li><strong>PM Kisan Mein Active:</strong> Central scheme mein record chalu haalat mein ho.</li>
        <li><strong>Landholding:</strong> Cultivable land honi chahiye, record of rights mein naam ho.</li>
        <li><strong>e-KYC:</strong> Aadhaar seeding aur mobile linking complete ho — bina iske kist nahi aati, status "Approved" hi kyun na dikhe.</li>
      </ul>

      <h3>Exclusion List:</h3>
      <ul>
        <li>Institutional landholders — Trusts, Mandirs, Societies.</li>
        <li>Wo parivar jisme koi member government employee ho (Group A, B, C, D).</li>
        <li>Retired pensioners jinki monthly pension ₹10,000 se adhik ho.</li>
        <li>Jinhone pichhle vitthiya varsh mein Income Tax return file kiya ho.</li>
        <li>Practising professionals — doctor, engineer, lawyer, CA.</li>
      </ul>

      <h2>Registration Se Pehle Ye Kaagaz Tayaar Rakhein</h2>

      <p>
        Zyadatar kisan is scheme mein automatic map ho jaate hain. Lekin naye landholder ya wo log
        jinka record kabhi verify nahi hua, unke liye paanch cheezein pehle se ready rakhna kaam
        aasan kar deta hai.
      </p>

      <SchemeTable>
        <tr>
          <th>Kaagaz</th>
          <th>Kis kaam aata hai</th>
        </tr>
        <tr>
          <td>Aadhaar card</td>
          <td>e-KYC aur DBT dono isi par tikte hain</td>
        </tr>
        <tr>
          <td>Land record — Khasra / Khatauni</td>
          <td>Kis naam par aur kitni zameen, yahi se eligibility tay hoti hai</td>
        </tr>
        <tr>
          <td>Bank passbook (NPCI-seeded account)</td>
          <td>Bina seeding payment bank se wapas chali jaati hai</td>
        </tr>
        <tr>
          <td>Aadhaar se linked chalu mobile number</td>
          <td>OTP aur payment SMS yahin pahunchte hain</td>
        </tr>
        <tr>
          <td>PM Kisan registration number</td>
          <td>State ka record isi se cross-verify hota hai</td>
        </tr>
      </SchemeTable>

      <p>
        Chhoti si baat, par waqt bahut bachaati hai — land record, Aadhaar aur bank, teeno jagah
        naam ki spelling ek jaisi rakhein. Naam ka farak baad mein sudharna sabse dheema kaam hai,
        kyunki wo tehsil aur bank dono jagah alag se karana padta hai.
      </p>

      <h2>"Payment Successful" Dikha, Paisa Nahi Aaya — Ab Kya</h2>

      <p>
        Ye shikayat aam hai. Portal par status green hai, passbook khaali — ya seedha "Rejected"
        aa jaata hai. Teen jagah check karni hoti hai, isi order mein.
      </p>

      <Fig
        src="bank-npci-mapping.webp"
        alt="Kisan bank branch mein passbook dikhakar DBT aur NPCI Aadhaar mapping check karwa raha hai"
        caption={'"Payment Successful" par paisa nahi aaya — sabse pehle bank mein NPCI mapping check karwao'}
      />

      <h3>1. Bank Account aur NPCI Mapping</h3>
      <p>
        Zyadatar cases yahin nikalte hain — account DBT ke liye enabled hi nahi hota. Branch mein
        jaakar bas itna poochhein: "mera account NPCI mapper mein Aadhaar se linked hai ya nahi?"
        Na ho to wahin link karwa lein, active hone mein 7-10 din lagte hain.
      </p>

      <h3>2. PFMS Portal Par Track Karein</h3>
      <p>
        SAARA ke alawa <code>pfms.nic.in</code> par jaakar "Know Your Payments" mein bank account
        number aur IFSC daal kar dekh sakte hain — paisa bank tak pahuncha ya beech mein fail hua.
      </p>

      <h3>3. Janpad Panchayat ya Tehsil</h3>
      <p>
        PFMS mein "Payment Failed" dikhe to iska matlab bank ne paisa wapas bhej diya — account band
        hone ya naam mismatch ki wajah se. Block ke ADO ya Patwari se milkar bank details update
        karwayein.
      </p>

      <Fig
        src="janpad-panchayat-office.webp"
        alt="Kisan Janpad Panchayat office ke counter par apni bank details aur record update karwane ke liye khade hain"
        caption="Payment Failed dikhe to Janpad Panchayat ya Tehsil office mein ADO/Patwari se details update karwao"
      />

      <h2>Sab Kuch Theek Hai Phir Bhi Paisa Nahi Aaya</h2>

      <p>
        Bank, PFMS aur girdawari — teeno theek dikh rahe hain, aur phir bhi kai mahine se kist
        nahi aayi. Ab sirf wait karne se kaam nahi chalega.
      </p>

      <p>
        Pehle SAARA portal ki grievance window mein online complaint darj karein — isi se ek
        complaint ID milti hai. Fir CM Helpline 181 par usi ID ke saath call karein, ye seedha
        department ko forward karta hai. Wahan se bhi hal na nikle to zile ke Deputy Director
        Agriculture (DDA) office mein likhit shikayat jama karein, complaint ID ki copy ke saath.
      </p>

      <p>
        Complaint ID sambhal kar rakhein. Dobara follow-up karte waqt yahi sabse pehla sawaal
        poocha jaata hai, aur bina ID ke shikayat trace karna mushkil ho jaata hai.
      </p>

      <h2>Beneficiary List Mein Naam Dhoondhna</h2>

      <p>
        Khud eligible lagte hain par paisa nahi aaya? Pehle list mein naam hai ya nahi, ye dekh
        lein.
      </p>

      <ol>
        <li>SAARA portal par "Reports" ya "Beneficiary List" section mein jaayein.</li>
        <li><strong>Zila</strong>, <strong>Janpad</strong>, aur <strong>Gram Panchayat</strong> select karein.</li>
        <li>"Search" ya "Download PDF" par click karein.</li>
        <li>List mein apna naam ya pitaji/pati ka naam search karein (Ctrl+F se jaldi mil jaata hai).</li>
      </ol>

      <p>
        PM Kisan mein naam hai par is list mein nahi? Aksar ye data sync ka glitch hota hai —
        nazdeeki CSC ya Gram Panchayat se sync karwane ko kahein.
      </p>

      <h2>Girdawari — Wo Kadam Jo MP Ke Kisan Bhool Jaate Hain</h2>

      <p>
        Baaki states mein aisa koi season-wise requirement nahi hai, isliye bahar se aaye logon ko
        ye cheez pata hi nahi hoti. MP mein har season — Kharif aur Rabi — girdawari hoti hai, yaani
        record banta hai ki kis khet mein kya boya gaya. Patwari ye record banata hai, aur galti ya
        der dono common hain.
      </p>

      <p>
        Kisan khud bhi MP Kisan App se apni girdawari darj kar sakta hai. Khet par khade hokar app
        kholein, fasal select karein, photo khinchein aur submit kar dein — GPS se location verify
        ho jaati hai. Das minute ka kaam, do fayde: state kist ka data clean rehta hai, aur fasal
        bima ya muavze ke waqt bhi wahi record kaam aata hai.
      </p>

      <p>Kist bina wajah atki lag rahi hai aur bank sab theek keh raha hai? Girdawari record check karwayein — ye wo kona hai jahan koi nahi dekhta.</p>

      <h2>PM Kisan Aur MP Ki Scheme — Do Alag Cheezein</h2>

      <p>Dono ek hi lagti hain, hain nahi. Fark saaf hai:</p>

      <SchemeTable>
        <tr>
          <th>Parameter</th>
          <th>PM Kisan Samman Nidhi</th>
          <th>MP CM Kisan Kalyan Yojana</th>
        </tr>
        <tr>
          <td>Laagu Karne Wali Sarkar</td>
          <td>Bharat Sarkar (Central)</td>
          <td>Madhya Pradesh Sarkar (State)</td>
        </tr>
        <tr>
          <td>Varshik Raashi</td>
          <td>₹6,000</td>
          <td>₹6,000 (Verified State Top-up)</td>
        </tr>
        <tr>
          <td>Portal</td>
          <td>pmkisan.gov.in</td>
          <td>saara.mp.gov.in</td>
        </tr>
        <tr>
          <td>Application</td>
          <td>CSC ya Self-Registration</td>
          <td>Auto-mapped (PM Kisan data se)</td>
        </tr>
        <tr>
          <td>Helpline</td>
          <td>155261</td>
          <td>CM Helpline 181 / Krishi Vibhag 0755-2551717</td>
        </tr>
      </SchemeTable>

      <h2>MP Se Bahar Ke Kisan Yahan Dekhein</h2>

      <p>
        MP ka domicile nahi hai to ye scheme laagu nahi hoti. Amount har rajya mein alag hai — kahin
        PM Kisan se dugna, kahin MP jitna hi. Apne rajya ka aankda yahan dekhein:
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
          <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">
            Namo Shetkari Mahasanman Nidhi (Maharashtra)
          </Link>
        </li>
      </ul>

      <p>Sabhi rajyon ka amount aur portal ek saath:</p>

      <ul>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            State Kisan Yojana List — Sabhi States Ka Comparison Table
          </Link>
        </li>
      </ul>

      <h2>MP Kisan Kalyan — Aksar Poochhe Jaane Wale Sawaal</h2>

      <FAQBlock faqs={FAQS_DATA} caption="MP CM Kisan Kalyan Yojana FAQ 2026" />

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
        <strong>Surakshit Rahein:</strong> Koi bhi sarkari yojana registration ya status theek karne
        ke naam par aapse paise nahi maangti. Koi "fees" maange to wo fraud hai — turant 1064
        (Kisan Call Center) par shikayat darj karein.
      </InfoBox>

    </article>
  );
}
