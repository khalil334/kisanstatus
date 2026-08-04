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
    a: 'Alag form ka koi provision hi nahi hai. Is scheme ki list seedhi PM Kisan ke MP wale record se banti hai, is liye aapka kaam sirf itna hai ki PM Kisan mein aapka record chalu ho aur girdawari mein aapki fasal darj ho. Ye do cheezein theek hain to naam apne aap list mein aa jaata hai.',
  },
  {
    q: 'MP Kisan Kalyan Yojana ka amount kitna hai?',
    a: 'Official records aur SAARA portal ke mutabik ye raqam ₹1,000 saalana rahi hai. Internet par chal rahi ₹4,000 ya ₹6,000 ki afwaahon par dhyan na dein jab tak gazette notification na aa jaye.',
  },
  {
    q: 'Meri kist "Rejected" dikha rahi hai, kya karein?',
    a: 'Rejection ki sabse badi wajah bank account ka DBT se na juda hona ya Aadhaar mein naam ka mismatch hai. Bank mein jaakar NPCI Seeding status check karwayein, aur zaroorat pade toh Patwari se land record mein naam sudharwayein.',
  },
  {
    q: 'SAARA portal phone par khulta hai ya CSC jaana padega?',
    a: 'Haan, saara.mp.gov.in phone ke browser mein bhi chal jaata hai — OTP usi number par aayega jo PM Kisan/state database mein chadha hai. Purana number chadha ho aur OTP na aaye to portal par zor lagane ke bajaye seedha CSC ya kiosk par jaayein; wahan free check ho jaata hai aur number update ka raasta bhi wahin se milta hai.',
  },
  {
    q: 'MP chhod kar doosre rajya mein bas gaya hoon — top-up milta rahega?',
    a: 'State top-up MP ke apne budget se aata hai, is liye MP ka permanent residence chhodne ke baad ye kist band ho jaati hai. Dhyan dein ki PM Kisan par iska koi asar nahi padta — wo central scheme hai aur aapke naye rajya mein bhi chalti rehti hai. Naye rajya ka apna top-up hai ya nahi, wo alag se dekhna hoga.',
  },
  {
    q: 'Girdawari mein fasal galat darj ho gayi hai, kist par asar padega kya?',
    a: 'Kist par seedha asar aam taur par nahi padta, lekin record galat rehna aage bima aur muavze mein dikkat karta hai. MP Kisan App se aapatti (objection) darj karein ya Patwari se sudharwayein. Season khatam hone se pehle correction karwana aasan rehta hai.',
  },
  {
    q: 'Pichhli kist mili thi, is baar nahi aayi. Naam kat gaya kya?',
    a: 'Zaroori nahi. Pehle SAARA par status dekhein. Agar wahan "eligible" dikh raha hai toh sirf release ka intezaar hai. "Not eligible" ya record gayab dikhe tab Janpad Panchayat mein poochhein — aksar e-KYC expire hone ya land record update ki wajah se temporary hold hota hai, jo document theek karte hi hat jaata hai.',
  },
];

export default function MPCMKisanKalyanYojanaKistStatus() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="4 August 2026">
        <strong>Latest Update:</strong> Agli kist ki date SAARA portal par abhi announce nahi hui hai.
        Pichhli kist ₹1,000 ki thi. WhatsApp par ghoom rahi "confirmed date" ka koi aadhaar nahi hai.
        Jab tak portal par notification na dikhe, use "expected" hi maanein.
      </InfoBox>

      <h1>MP CM Kisan Kalyan Yojana Kist Kab Aayegi: Status Check, Amount aur SAARA Portal Guide</h1>

      <p>
        <strong>CM Kisan Kalyan Yojana kist kab aayegi</strong> — MP ke kisan yahi poochhte hain, aur
        jawab dene wali aadhi websites afwaah chhaap deti hain. Amount par bhi wahi haal: kahin ₹4,000
        likha hai, kahin ₹6,000.
      </p>

      <p>
        Neeche jo bhi likha hai wo SAARA portal aur official guidelines se hai. Kitna paisa banta hai,
        kaun eligible hai, aur na aane par kahan jaana hai. Teen cheezein, sidhi baat.
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
        Ye MP sarkar ki apni scheme hai, lekin iski list PM Kisan se banti hai. Maqsad wahi hai:
        beej, khaad aur sinchai ke kharche mein thodi raahat.
      </p>

      <p>
        Scheme September 2020 mein shuru hui thi, tab CM ne elaan kiya tha ki PM Kisan ke har
        beneficiary ko state apni taraf se top-up degi. Shuruaat mein amount ₹4,000 saalana tha,
        baad mein badha kar ₹6,000 karne ka elaan bhi hua. Yahi purane elaan aaj tak internet par
        ghoomte hain aur confusion ki jad hain. Lekin elaan aur actual disbursement do alag
        cheezein hain: budget allocation ke hisaab se kiston ka amount badalta raha hai.
      </p>

      <p>
        Amount par confusion isliye asli hai. Internet par ₹2,000, ₹4,000, ₹6,000 — sab likha mil
        jaata hai. SAARA portal aur pichhle vitthiya varsh ke records kehte hain: PM Kisan ke
        ₹6,000 ke upar <strong> ₹1,000 saalana</strong>, ek ya do kiston mein. Aapke apne account
        ka sach jaanna ho toh passbook aur SAARA dashboard, bas yahi do jagah dekhein.
      </p>

      <InfoBox type="warning">
        <strong>Satark Rahein:</strong> ₹4,000 ya ₹6,000 wale dawe purane ya galat hain. Gazette
        notification aaye bina koi badha hua amount maan lena bekaar hai. Status sirf SAARA portal
        se dekhein.
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
          <td>₹1,000 (Verified)</td>
          <td>MP State Govt</td>
          <td>Usually 1-2 Installments</td>
        </tr>
        <tr>
          <td><strong>Total Expected</strong></td>
          <td><strong>₹7,000</strong></td>
          <td><strong>Combined</strong></td>
          <td><strong>Varies</strong></td>
        </tr>
      </SchemeTable>

      <h2>SAARA Portal Kya Hai — Aur Wahi Kyun</h2>

      <p>
        SAARA (Smart Application for Revenue Administration) MP sarkar ka revenue department wala
        system hai. Isi mein girdawari (fasal ka record), land records aur kisan schemes ka data
        ek saath chalta hai. CM Kisan Kalyan ka status isi liye SAARA par dikhta hai, kisi alag
        yojana portal par nahi. Ye jaanna kaam ka hai kyunki aapki kist ka connection seedha
        girdawari se hai: jis season mein aapki zameen par fasal darj nahi hoti, us season ki
        state kist atak sakti hai, chahe PM Kisan aata rahe. Girdawari har season Patwari karta
        hai, aur SAARA app se kisan khud bhi apni fasal darj kar sakta hai.
      </p>

      <h2>SAARA Portal Par Apna Status Kaise Dekhein</h2>

      <p>
        Poora kaam online hai aur free hai. Aadhaar number ya registered mobile paas rakhein, OTP
        usi number par aayega:
      </p>

      <Fig
        src="saara-portal-status-check.webp"
        alt="CSC kiosk par operator kisan ko SAARA portal par Kisan Kalyan Yojana ka status check karke dikha raha hai"
        caption="SAARA portal mobile par bhi khulta hai — na khule to CSC ya kiosk par free check ho jaata hai"
      />

      <ol>
        <li>Apne mobile ya computer ke browser mein <code>saara.mp.gov.in</code> kholein.</li>
        <li>Homepage par "Farmer Services" ya "Kisan Kalyan Yojana" ka option dhundhein.</li>
        <li>"Beneficiary Status" ya "Kist Status" par click karein.</li>
        <li>Apna <strong>Aadhaar Number</strong> ya <strong>Registered Mobile Number</strong> enter karein.</li>
        <li>OTP verify karein (ye OTP usi number par aayega jo PM Kisan/State database mein registered hai).</li>
        <li>Dashboard par aapko "Payment Status", "Pending Amount", aur "Bank Account Details" dikhayi dengi.</li>
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
        Fixed date koi nahi hai; state sarkar national calendar se nahi chalti. Lekin pichhle
        saalon ka pattern itna batata hai:
      </p>

      <ul>
        <li><strong>Pehli Kist:</strong> Aam taur par PM Kisan ki kist aane ke 1-2 mahine baad release hoti hai.</li>
        <li><strong>Dusri Kist (agar applicable ho):</strong> Vitthiya varsh ke ant mein (February-March) release ki jaati hai.</li>
      </ul>

      <p>
        Release aksar kisi event ke saath hota hai. MP mein kist ka paisa CM ke haathon ek
        program mein single click se transfer hota hai, aur us din lakhs of accounts mein ek
        saath credit aata hai. Iska matlab ye bhi hai ki jab tak aisa program schedule nahi
        hota, kist ka intezaar chalta rehta hai. Newspaper mein "CM ne transfer kiya" wali
        khabar dikhe aur aapke account mein kuch na aaye, tab pareshan hona banta hai; us se
        pehle ki har date afwaah hai.
      </p>

      <p>
        PM Kisan aa gaya aur state ka nahi aaya? Ye normal hai. Dono ka release cycle alag hai, aur
        state treasury se fund nikalne mein 15 se 30 din lag jaate hain.
      </p>

      <h2>Kaun Eligible Hai, Kaun Nahi</h2>

      <p>
        Jad PM Kisan hi hai, isliye shartein lagbhag wahi hain, kuch state ke apne rules ke saath:
      </p>

      <h3>Mandatory Conditions:</h3>
      <ul>
        <li><strong>MP domicile:</strong> Permanent residence Madhya Pradesh ka ho — kheti MP mein aur rehna kisi doosre rajya mein, is combination par top-up nahi banta.</li>
        <li><strong>PM Kisan record chaalu:</strong> Central scheme mein aapki file active ho; wahan hold lagte hi state ki kist bhi ruk jaati hai.</li>
        <li><strong>Zameen RoR mein aapke naam:</strong> Cultivable land ka record of rights aapke naam par darj ho, sirf kabza kaafi nahi.</li>
        <li><strong>Girdawari mein fasal darj:</strong> Jis season ki fasal SAARA mein darj nahi, us season ki state kist atak sakti hai — ye MP ki apni extra shart hai.</li>
        <li><strong>e-KYC poori:</strong> Aadhaar seeding aur mobile linking dono complete hon.</li>
      </ul>

      <h3>Exclusion List (Kaun Nahi Le Sakta):</h3>
      <ul>
        <li>Institutional landholders (Trusts, Mandirs, Societies).</li>
        <li>Wo parivar jisme koi member government employee (Group A, B, C, D) ho.</li>
        <li>Retired pensioners jinki monthly pension ₹10,000 se adhik ho.</li>
        <li>Wo kisan jinhone pichhle vitthiya varsh mein Income Tax return file kiya ho.</li>
        <li>Professionals (Doctors, Engineers, Lawyers, CAs) jo registered hain.</li>
      </ul>

      <h2>"Payment Successful" Dikha, Paisa Nahi Aaya — Ab Kya</h2>

      <p>
        Ye aam shikayat hai: portal par status green hai, passbook khaali. Ya phir seedha "Rejected"
        aa jaata hai. Teen jagah check karni hoti hai, isi order mein:
      </p>

      <Fig
        src="bank-npci-mapping.webp"
        alt="Kisan bank branch mein passbook dikhakar DBT aur NPCI Aadhaar mapping check karwa raha hai"
        caption={'"Payment Successful" par paisa nahi aaya — sabse pehle bank mein NPCI mapping check karwao'}
      />

      <h3>1. Bank Account aur NPCI Mapping Check Karein</h3>
      <p>
        Zyadatar cases yahin nikalte hain: account DBT ke liye enabled hi nahi hota. Branch mein
        jaakar bas itna poochhein: "mera account NPCI mapper mein Aadhaar se linked hai ya nahi?" Na ho
        to wahin link karwa lein.
      </p>

      <h3>2. PFMS Portal Par Track Karein</h3>
      <p>
        SAARA portal ke alawa, aap <code>pfms.nic.in</code> par jaakar "Know Your Payments" section mein apna bank account number aur IFSC code daal kar check kar sakte hain ki paisa bank tak pahuncha hai ya beech mein fail hua hai.
      </p>

      <h3>3. Janpad Panchayat ya Tehsil Se Sampark Karein</h3>
      <p>
        Agar PFMS mein "Payment Failed" dikh raha hai, toh iska matlab hai ki bank ne paisa wapas bhej diya hai (shayad account band hone ya naam mismatch ki wajah se). Aise mein apne block ke Agriculture Development Officer (ADO) ya Patwari se milkar apne bank details update karwayein.
      </p>

      <Fig
        src="janpad-panchayat-office.webp"
        alt="Kisan Janpad Panchayat office ke counter par apni bank details aur record update karwane ke liye khade hain"
        caption="Payment Failed dikhe to Janpad Panchayat ya Tehsil office mein ADO/Patwari se details update karwao"
      />

      <h2>Beneficiary List Mein Naam Dhoondhna</h2>

      <p>
        Khud eligible lagte hain par paisa nahi aaya? Pehle list mein naam hai ya nahi, ye dekh lein.
        <strong> Kisan kalyan yojana beneficiary list MP</strong> portal se hi nikalti hai:
      </p>

      <ol>
        <li>SAARA portal par "Reports" ya "Beneficiary List" section kholein.</li>
        <li>Zila, Janpad aur Gram Panchayat — teeno dropdown apne gaon ke hisaab se bharein.</li>
        <li>List generate karein; MP mein ye aksar PDF ke roop mein utarti hai.</li>
        <li>PDF mein apna naam khud dhoondhein — computer par Ctrl+F, phone ke PDF app mein search icon. Naam ki spelling RoR wali rakhein, kyunki list wahi se banti hai.</li>
      </ol>

      <p>
        PM Kisan mein naam hai par is list mein nahi? Aksar ye data sync ka glitch hota hai. Nazdeeki
        CSC ya Gram Panchayat se sync karwane ko kahein.
      </p>

      <h2>Girdawari — Wo Kadam Jo MP Ke Kisan Bhool Jaate Hain</h2>

      <p>
        Baaki states mein aisa koi season-wise requirement nahi hai, isliye bahar se aaye logon ko
        ye cheez pata hi nahi hoti. MP mein har season (Kharif aur Rabi) mein girdawari hoti hai,
        yaani record banta hai ki kis khet mein kya boya gaya. Patwari ye record banata hai, lekin
        galti ya der dono common hain.
      </p>

      <p>
        Kisan khud bhi <strong>MP Kisan App</strong> se apni girdawari darj kar sakta hai. Khet
        par khade hokar app kholein, fasal select karein, photo khinchein aur submit kar dein. GPS
        se location verify hoti hai. Ye 10 minute ka kaam do fayde deta hai: state kist ka data
        clean rehta hai, aur fasal bima ya muavze ke waqt bhi wahi record kaam aata hai. Agar
        aapki kist bina wajah atki lag rahi hai aur bank sab theek keh raha hai, toh girdawari
        record zaroor check karwayein — ye wo kona hai jahan koi nahi dekhta.
      </p>

      <h2>PM Kisan Aur MP Ki Scheme — Do Alag Cheezein</h2>

      <p>
        Dono ek hi lagti hain, hain nahi. Fark yahan saaf hai:
      </p>

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
          <td>₹1,000 (Verified State Top-up)</td>
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
          <td>MP Kisan Call Center (Toll-Free)</td>
        </tr>
      </SchemeTable>

      <h2>MP Se Bahar Ke Kisan Yahan Dekhein</h2>

      <p>
        MP ke bahar rehte hain to ye top-up aap par laagu nahi hota, aur girdawari-based shart bhi
        sirf MP mein hai. Kai rajyon ka top-up MP se kai guna bada hai, kuch mein bilkul nahi hai —
        apne rajya ka asli aankda yahan dekhein:
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

      <p>
        Sabhi rajyon ka amount aur portal ek saath:
      </p>

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
          <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega">
            Pati-Patni Dono Ko PM Kisan Milega Ya Nahi? (Family Rules Explained)
          </Link>
        </li>
      </ul>

      <InfoBox type="tip">
        <strong>Surakshit Rahein:</strong> SAARA par status dekhna, e-KYC karna aur bank details update karwana — teeno kaam bilkul free hain. Kist "jaldi nikalwane" ya list mein naam "chadhwane" ke naam par koi paisa maange, to wo fraud hai: ye dono kaam sirf Patwari, ADO aur portal ke raste hote hain. Aisi demand par 1064 (MP Kisan Call Center) par shikayat darj karwaayein.
      </InfoBox>

    </article>
  );
}