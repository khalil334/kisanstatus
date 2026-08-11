import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

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
    q: 'Is state top-up ka amount kitna hai?',
    a: 'State top-up ₹6,000 saalana hai, teen kiston mein ₹2,000-₹2,000. Scheme 2020 mein ₹4,000 se shuru hui thi, baad mein ise ₹6,000 kar diya gaya. PM Kisan ke ₹6,000 ke saath jodkar MP ke kisan ko total ₹12,000 saalana milta hai.',
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
        Har kist ₹2,000 ki hoti hai. ⚠️ WhatsApp par ghoom rahi "confirmed date" ka koi aadhaar nahi hai —
        jab tak SAARA portal par notification na dikhe, koi bhi tareekh pakki na maanein.
      </InfoBox>

      <h1>
        MP CM Kisan Kalyan Yojana Kist Kab Aayegi: Status Check, Amount aur SAARA Portal
        Guide
      </h1>

      <p>
        <strong>CM Kisan Kalyan Yojana kist kab aayegi</strong> — MP ke kisan yahi poochhte
        hain. Aur jawab dene wali aadhi websites? Afwaah chhaap deti hain. Amount par bhi
        wahi haal: kahin purana ₹4,000 likha hai, kahin ₹2,000 ki ek kist ko hi saal ka
        total bata diya jaata hai. Pareshan kisan aur confuse ho jaata hai.
      </p>

      <p>
        Samajhne ki baat yeh hai — neeche jo bhi likha hai wo SAARA portal aur official guidelines se hai. Kitna paisa
        banta hai, kaun eligible hai, aur na aane par kahan jaana hai. Teen cheezein, sidhi
        baat.
      </p>

      <Fig
        src="hero.webp"
        alt="Madhya Pradesh ka kisan gehun ke khet mein mobile par apni state kist ka status dekh raha hai"
        caption="MP CM Kisan Kalyan Yojana — PM Kisan ke saath state ki apni kist, status SAARA portal par milta hai"
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
        Ye MP sarkar ki apni scheme hai, lekin iski list PM Kisan se banti hai. Maqsad
        seedha hai — beej, khaad aur sinchai ke kharche mein thodi raahat. Bade dawe nahi,
        bas season ke kharch ka sahara.
      </p>

      <p>
        Scheme September 2020 mein shuru hui thi, tab CM ne elaan kiya tha ki PM Kisan ke
        har beneficiary ko state apni taraf se top-up degi. Shuruaat mein amount ₹4,000
        saalana tha (do kiston mein ₹2,000-₹2,000), baad mein ise badha kar ₹6,000 kar diya
        gaya — teen kiston mein ₹2,000 har baar.
      </p>

      <p>
        Yahi purana ₹4,000 ka figure aaj tak internet par ghoomta hai aur confusion ki jad hai.
        Ek galti aur aam hai: log ₹2,000 ki ek kist ko hi saal ka poora amount samajh lete hain.
      </p>

      <p>
        Seedha hisaab ye hai: PM Kisan ke ₹6,000 ke upar state ka{' '}
        <strong>₹6,000 saalana</strong>, teen kiston mein. Yaani MP ke eligible kisan ko
        milaakar <strong>₹12,000 saalana</strong>. Aapke apne account ka sach jaanna ho toh
        passbook aur SAARA dashboard, bas yahi do jagah dekhein.
      </p>

      <InfoBox type="warning">
        <strong>Satark Rahein:</strong> ₹4,000 wala figure purana hai — wo scheme ke shuruaati
        saalon ka amount tha. Aur kist late hone par koi "jaldi nikalwane" ka dawa kare toh wo
        fraud hai. Status sirf SAARA portal se dekhein.
      </InfoBox>

      <p>
        <strong>Dono Yojana Ka Amount Ek Saath</strong>
      </p>

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
          <td>₹6,000</td>
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

      <h2>Kaun Eligible Hai, Kaun Nahi</h2>

      <p>
        Jad PM Kisan hi hai, isliye shartein lagbhag wahi hain, kuch state ke apne rules ke saath:
      </p>

      <h3>Mandatory Conditions:</h3>
      <ul>
        <li>
          <strong>MP domicile:</strong> Permanent residence Madhya Pradesh ka ho — kheti MP
          mein aur rehna kisi doosre rajya mein, is combination par top-up nahi banta.
        </li>
        <li>
          <strong>PM Kisan record chaalu:</strong> Central scheme mein aapki file active ho;
          wahan hold lagte hi state ki kist bhi ruk jaati hai.
        </li>
        <li>
          <strong>Zameen RoR mein aapke naam:</strong> Cultivable land ka record of rights
          aapke naam par darj ho, sirf kabza kaafi nahi.
        </li>
        <li>
          <strong>Girdawari mein fasal darj:</strong> Jis season ki fasal SAARA mein darj
          nahi, us season ki state kist atak sakti hai — ye MP ki apni extra shart hai.
        </li>
        <li>
          <strong>e-KYC poori:</strong> PM Kisan wali e-KYC ho chuki ho — Aadhaar bank se seeded
          ho aur mobile number link ho, dono shartein zaroori hain.
        </li>
      </ul>

      <h3>Exclusion List (Kaun Nahi Le Sakta):</h3>
      <ul>
        <li>Institutional landholders (Trusts, Mandirs, Societies).</li>
        <li>Wo parivar jisme koi member government employee (Group A, B, C, D) ho.</li>
        <li>Retired pensioners jinki monthly pension ₹10,000 se adhik ho.</li>
        <li>Wo kisan jinhone pichhle vitthiya varsh mein Income Tax return file kiya ho.</li>
        <li>Professionals (Doctors, Engineers, Lawyers, CAs) jo registered hain.</li>
      </ul>

      <h2>PM Kisan Aur MP Ki Scheme — Do Juda Cheezein</h2>

      <p>Dono ek hi lagti hain, hain nahi. Fark yahan saaf hai:</p>

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
          <td>₹6,000 (State Top-up)</td>
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
          <td>155261 (PM Kisan helpline)</td>
          <td>MP CM Helpline 181</td>
        </tr>
      </SchemeTable>

      <h2>SAARA Portal Kya Hai — Aur Wahi Kyun</h2>

      <p>
        SAARA (Smart Application for Revenue Administration) MP sarkar ka revenue department
        wala system hai. Isi mein girdawari (fasal ka record), land records aur farmer
        schemes ka data ek saath chalta hai. Status isi liye SAARA par dikhta hai, kisi
        doosre portal par nahi.
      </p>

      <p>
        Ye jaanna kaam ka hai kyunki aapki kist ka connection seedha girdawari se hai: jis
        season mein aapki zameen par fasal darj nahi hoti, us season ki state kist atak
        sakti hai, chahe PM Kisan aata rahe. Girdawari har season Patwari karta hai, aur
        SAARA app se kisan khud bhi apni fasal darj kar sakta hai.
      </p>

      <h2>SAARA Portal Par Apna Status Kaise Dekhein (MP Saara Payment Status)</h2>

      <p>
        <strong>MP Saara payment status</strong> ho ya <strong>CM Kisan beneficiary status</strong> —
        dono isi SAARA portal par dikhte hain. Poora kaam online hai, bilkul free, kisi kiosk ki
        zaroorat nahi. Aadhaar number ya registered mobile paas rakhein, OTP usi number par aayega:
      </p>

      <Fig
        src="saara-portal-status-check.webp"
        alt="CSC kiosk par operator kisan ko SAARA portal par Kisan Kalyan Yojana ka status check karke dikha raha hai"
        caption="SAARA portal mobile par bhi khulta hai — na khule to CSC ya kiosk par free check ho jaata hai"
      />

      <ol>
        <li>
          Apne mobile ya computer ke browser mein <code>saara.mp.gov.in</code> kholein.
        </li>
        <li>Homepage par "Farmer Services" ya "Kisan Kalyan Yojana" ka option dhundhein.</li>
        <li>"Beneficiary Status" ya "Kist Status" par click karein.</li>
        <li>
          Apna Aadhaar Number ya Registered Mobile Number enter karein.
        </li>
        <li>
          OTP verify karein (ye usi number par aayega jo PM Kisan/State database mein
          registered hai).
        </li>
        <li>
          Dashboard par aapko "Payment Status", "Pending Amount", aur "Bank Account
          Details" dikhayi dengi.
        </li>
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

      <h2>Gaon Ki List Mein Apna Naam</h2>

      <p>
        Khud eligible lagte hain par paisa nahi aaya? Pehle list mein naam hai ya nahi, ye
        dekh lein. Beneficiary list SAARA portal se hi nikalti hai:
      </p>

      <ol>
        <li>Portal par "Reports" ya "Beneficiary List" section kholein.</li>
        <li>Zila, Janpad aur Gram Panchayat — teeno dropdown apne gaon ke hisaab se bharein.</li>
        <li>List generate karein; MP mein ye aksar PDF ke roop mein utarti hai.</li>
        <li>
          PDF mein apna naam khud dhoondhein — computer par Ctrl+F, phone ke PDF app mein
          search icon. Naam ki spelling RoR wali rakhein, kyunki list wahi se banti hai.
        </li>
      </ol>

      <p>
        PM Kisan mein naam hai par is list mein nahi? Aksar ye data sync ka glitch hota hai. Nazdeeki
        CSC ya Gram Panchayat se sync karwane ko kahein.
      </p>

      <h2>Kist Ka Waqt — Pichhle Saalon Ka Pattern</h2>

      <p>
        Fixed date? Koi nahi hai. State sarkar national calendar se nahi chalti. Zyada waqt nahi lagta
        release ke baad, lekin pichhle saalon ka pattern itna zaroor batata hai:
      </p>

      <ul>
        <li>
          <strong>Pehli Kist:</strong> Aam taur par PM Kisan ki kist aane ke 1-2 mahine baad
          release hoti hai.
        </li>
        <li>
          <strong>Dusri Kist (agar applicable ho):</strong> Vitthiya varsh ke ant mein
          (February-March) release ki jaati hai.
        </li>
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
        PM Kisan aa gaya aur state ka nahi aaya? Ye normal hai, bilkul normal, dono ka
        release cycle apna hai aur state treasury se fund nikalne mein 15 se 30 din lag hi
        jaate hain — toh intezaar khalta hai, samajh mein aata hai, par ye deri gadbad ki
        nishani nahi hai.
      </p>

      <h2>Girdawari — Wo Kadam Jo MP Ke Kisan Bhool Jaate Hain</h2>

      <p>
        Baaki states mein aisa koi season-wise requirement nahi hai, isliye bahar se aaye
        logon ko ye cheez pata hi nahi hoti. MP mein har season (Kharif aur Rabi) mein
        girdawari hoti hai — record banta hai ki kis khet mein kya boya gaya. Patwari ye
        record banata hai. Lekin patwari bhi insaan hai; galti aur der, dono common hain.
      </p>

      <p>
        Kisan khud bhi <strong>MP Kisan App</strong> se apni girdawari darj kar sakta hai.
        Khet par khade hokar app kholein, fasal select karein, photo khinchein aur submit
        kar dein. GPS se location verify hoti hai. Bas thodi der ka kaam hai, aur fayde do milte hain:
        state kist ka data clean rehta hai, aur fasal bima ya muavze ke waqt bhi wahi record
        kaam aata hai.
      </p>

      <p>
        Agar aapki kist bina wajah atki lag rahi hai aur bank sab theek keh raha hai, toh
        girdawari record zaroor check karwayein — ye wo kona hai jahan koi nahi dekhta.
      </p>

      <h2>Saal Bhar Ke Chhote Kaam</h2>

      <p>
        Is scheme mein application nahi hai, lekin iska matlab ye nahi ki kuch karna hi nahi
        hai. Saal mein chaar chhote kaam hain jo waqt par ho jaayein to kist kabhi nahi
        atakti.
      </p>

      <p>
        <strong>Season ki shuruaat mein girdawari.</strong> Kharif aur Rabi — dono season
        mein apni fasal ki entry confirm karein, chahe patwari ne kar di ho. MP Kisan App
        se khud darj karna sabse pakka raasta hai; upar iska tareeka likha hai.
      </p>

      <p>
        Sehore ke ek kisan ne WhatsApp pe screenshot bheja tha — bank, Aadhaar, e-KYC sab perfect,
        phir bhi state kist do season se nahi aayi. Aakhir mein nikli girdawari: patwari ne us
        season uski fasal darj hi nahi ki thi. App se khud entry karne ke baad agli kist aa gayi.
        Chhodo, wo purani baat hai — par sabak wahi hai, girdawari khud check karo.
      </p>

      <p>
        <strong>PM Kisan ki e-KYC current rakhein.</strong> MP ki list PM Kisan ke data se
        banti hai, isliye e-KYC expire hone ka nuksan dohra hai — central aur state, dono
        kist rukti hain. Saal mein ek baar, kisi bhi kist ke aane se pehle, pmkisan.gov.in
        par apna e-KYC status dekh lein.
      </p>

      <p>
        <strong>Bank ka record taaza rakhein.</strong> Khaata band ya dormant na ho, Aadhaar
        seeding NPCI mein active ho, aur mobile number wahi ho jo aaj chal raha hai. Ye
        teeno kaam bank branch mein ek hi visit mein ho jaate hain.
      </p>

      <p>
        <strong>Har credit ki entry milaayein.</strong> PM Kisan aur state ki kist alag-alag
        dinon par aati hai, isliye passbook mein dono entries alag pehchaanein. Ek aayi aur
        doosri nahi — to problem sirf us system mein dhoondhein jiski kist ruki hai; dono
        ke portal aur helpline alag hain.
      </p>

      <h2>Baaki States Mein Kitna Milta Hai</h2>

      <p>
        MP ke bahar rehte hain to ye top-up aap par laagu nahi hota, aur girdawari-based
        shart bhi sirf MP mein hai. Kai rajyon ka top-up MP se kai guna bada hai, kuch mein
        bilkul nahi hai. Kis rajya mein kya hai — ye niche wale articles kholte hi samajh aa jaayega:
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
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            State Kisan Yojana List — Sabhi States Ka Comparison Table, amount aur portal ek saath
          </Link>
        </li>
      </ul>

      <h2>"Payment Successful" Dikha, Paisa Nahi Aaya — Ab Kya</h2>

      <p>
        Sabse zyada confusion isi baat pe hota hai: portal par status green, passbook khaali. Dil toot jaata hai
        thoda. Pehle mujhe bhi lagta tha ki portal galat hai — par nahi, kahani aage hoti hai. Ya phir seedha "Rejected" aa jaata hai — bina ye bataye ki kyun. Teen jagah
        check karni hoti hai, isi order mein:
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
        SAARA ke alawa, aap <code>pfms.nic.in</code> par jaakar "Know Your Payments" section
        mein apna bank account number aur IFSC code daal kar check kar sakte hain ki paisa
        bank tak pahuncha hai ya beech mein fail hua hai.
      </p>

      <h3>3. Janpad Panchayat ya Tehsil Se Sampark Karein</h3>
      <p>
        Agar PFMS mein "Payment Failed" dikh raha hai, toh iska matlab hai ki bank ne paisa
        wapas bhej diya hai (shayad account band hone ya naam mismatch ki wajah se). Aise
        mein apne block ke Agriculture Development Officer (ADO) ya Patwari se milkar apne
        bank details update karwayein.
      </p>

      <Fig
        src="janpad-panchayat-office.webp"
        alt="Kisan Janpad Panchayat office ke counter par apni bank details aur record update karwane ke liye khade hain"
        caption="Payment Failed dikhe to Janpad Panchayat ya Tehsil office mein ADO/Patwari se details update karwao"
      />

      <h2>Shikayat Ka Raasta — CM Helpline 181 Ka Sahi Istemaal</h2>

      <p>
        SAARA ya bank se baat na bane to MP ke paas ek kaam ka hathiyaar hai — CM Helpline
        181. Call karne se pehle teen cheezein saamne rakhein: apna PM Kisan registration
        number, Aadhaar, aur samasya ek line mein. Complaint number jo mile use likh kar
        rakhein; follow-up isi number se hota hai aur har complaint ka jawab dena vibhag ki
        zimmedari hai. Ek hi baat ka dhyan rakhein — complaint mein wahi likhwaayein jo
        sach mein problem hai. “Paisa nahi aaya” se behtar hai “PM Kisan ki kist aayi,
        state ki nahi aayi, bank kehta hai koi credit nahi” — jitna saaf record, utna
        jaldi kaam.
      </p>

      <h2>MP Kisan Kalyan — Jo Log Aksar Poochhte Hain</h2>

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
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">MP ke kisano ne jo poochha — CM Kisan Kalyan Yojana par seedhe jawab</p>
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
        <strong>Fraud se bachein:</strong> SAARA par status dekhna, e-KYC karna aur bank
        details update karwana — teeno kaam bilkul free hain. Kist "jaldi nikalwane" ya list
        mein entry "chadhwane" ke liye koi paisa maange, to wo fraud hai: ye dono kaam sirf
        Patwari, ADO aur portal ke raste hote hain. Aisi demand par MP CM Helpline
        <strong> 181</strong> par shikayat darj karwaayein.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Ye sirf ek margdarshak lekh hai. Kist ki tareekh aur raqam par bharosa Saara portal ki official suchna ya patwari/tehsil office se hi karein.
        </p>
      </div>

    </article>
  );
}
