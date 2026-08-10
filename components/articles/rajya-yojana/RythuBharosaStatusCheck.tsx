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

const FAQS_DATA = [
  {
    q: 'Kya mujhe Rythu Bharosa ke liye alag se apply karna padega?',
    a: 'Nahi. Dharani portal par aapka naam land owner ke roop mein registered hai toh aap automatically eligible hain. Sarkar khud data utha kar payment bhejti hai.',
  },
  {
    q: 'Rythu Bharosa per acre amount kitna hai?',
    a: 'Har acre ke liye saal mein ₹12,000 milte hain, jo do kiston (₹6,000 Kharif aur ₹6,000 Rabi) mein baante jaate hain.',
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
        Do cheezein is scheme ko baaki state schemes se alag banati hain. Raqam per acre
        tay hoti hai. Aur release ek saath nahi hota — phase mein hota hai. Dono ka asar
        seedha aapke status par padta hai, aur dono ko na samajhne se hi aadhi ghabrahat
        paida hoti hai. Neeche wahi samjhaya hai.
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
        lagta hai: har acre cultivable land par ₹12,000 saalana, yaani ₹6,000 Kharif mein aur ₹6,000
        Rabi mein.
      </p>

      <p>
        Do acre wale kisan ko season mein ₹12,000 milega, ek acre wale ko ₹6,000. Isi
        wajah se gaon mein har aadmi ka amount alag dikhta hai — aur ye farak koi gadbad
        nahi, scheme ka design hai.
      </p>

      <p>
        Guntas ka hisaab bhi note kar lein, kyunki Telangana mein zameen aksar acre-gunta mein boli
        jaati hai. Ek acre mein 40 guntas hote hain. Portal par land extent decimal mein dikhta hai:
        maan lijiye aapke paas 2 acre 20 guntas hai, toh system 2.5 acre padhega aur season ka
        ₹15,000 banega. Agar aapko lagta hai ki amount kam aaya hai, toh sabse pehle apna land
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
          <td>₹12,000 per year (₹6,000 per season)</td>
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
          <td>Land Eligibility</td>
          <td>Cultivable (arable) land only — real estate layouts, industrial aur non-cultivable plots bahar</td>
        </tr>
      </SchemeTable>

      <InfoBox type="info">
        <strong>Dhyan Dein:</strong> Paisa sirf us zameen par banta hai jo actually kheti ke
        kaam mein hai. Satellite mapping aur Bhu Bharati record se ye verify hota hai — real
        estate layout, industrial plot ya barson se parti padi zameen is scheme se bahar hai.
        Isliye pattadar passbook mein zameen hone ka matlab automatic payment nahi hai.
      </InfoBox>

      <Fig
        src="paddy-per-acre-farming.webp"
        alt="Telangana ka kisan dhaan ke khet mein pani chhod raha hai — Rythu Bharosa per acre ke hisaab se milta hai"
        caption="Zameen jitni zyada, madad utni badi — isi liye har kisan ke account mein alag raqam aati hai"
      />

      <h2>Padosi Ko Mil Gaya, Mujhe Nahi — Phase System Samjhein</h2>

      <p>
        Padosi ke account mein credit, aapke mein sannata — gussa aana laazmi hai. Lekin
        ruko. Ye shikayat sabse zyada aati hai, aur iski wajah aksar koi galti nahi hoti.
        Wajah hai <strong>phase wise payment</strong>.
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
        Matlab "Processing" dikhne ka arth paisa atak jaana nahi hai. Aapke mandal ka
        phase aana baaki hai. Bas itna.
      </p>

      <h2>Apna Hisaab Dekho</h2>

      <p>
        Portal par ye jaldi ho jaayega. Aadhaar number saath rakhein. Account number se bhi hota
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
        kuch administrative cheezein sudhri hain. Do badi tabdeeliyan hain: amount ₹10,000 se
        badhkar ₹12,000 per acre saalana ho gaya, aur eligibility ab sirf cultivable zameen tak
        seemit hai. Rythu Bandhu ke zamane mein real estate layout aur parti zameen par bhi paisa
        chala jaata tha, jis par kaafi aalochana hui thi:
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
          <td>₹10,000/year (₹5,000/season)</td>
          <td>₹12,000/year (₹6,000/season)</td>
        </tr>
        <tr>
          <td>Land Eligibility</td>
          <td>Pattadar passbook ke aadhaar par, kheti ho ya na ho</td>
          <td>Sirf cultivable land — satellite mapping se verify</td>
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
        Status dekh liya. Phase bhi nikal gaya. Phir bhi account khaali? Ab baat alag hai —
        yahan sach mein kuch atka hai. Aise cases mein inme se koi ek wajah nikalti hai:
      </p>

      <h3>1. Dharani Portal Mein Naam Update Nahi Hai</h3>
      <p>
        <strong>Hal:</strong> Rythu Bharosa ka data seedha Dharani portal se aata hai. Agar aapne haal hi mein zameen khareedi hai ya virasat (inheritance) mein mili hai, lekin Dharani par mutation (namantaran) nahi hua, toh paisa purane malik ke account mein jaane ki koshish karega ya fail ho jayega. Turant MRO (Mandal Revenue Officer) office jaakar Dharani update karwayein.
      </p>

      <Fig
        src="bank-aadhaar-seeding.webp"
        alt="Kisan bank branch mein passbook lekar account active karwane aur Aadhaar NPCI seeding check karwane aaya hai"
        caption="Dormant account aur missing Aadhaar seeding — do sabse aam wajah jinse payment fail hoti hai"
      />

      <h3>2. Bank Account Dormant Ya Band Hai</h3>
      <p>
        Hal: Agar aapka bank account lambey samay se use nahi hua hai, toh wo "Dormant" ho sakta hai. Bank jaakar account ko "Active" karwayein aur DBT (Direct Benefit Transfer) enable karwayein.
      </p>

      <h3>3. Aadhaar Seeding Missing Hai</h3>
      <p>
        <strong>Hal:</strong> Telangana sarkar ab strict DBT follow karti hai. Apne bank branch mein jaakar confirm karein ki aapka account NPCI mapper mein aapke Aadhaar number se linked hai.
      </p>

      <h3>4. "Disputed Land" Status</h3>
      <p>
        Hal: Agar zameen par koi court case ya parivarik vivad (family dispute) hai, toh Dharani portal par us par "Disputed" ka tag lag jata hai. Aise cases mein payment tab tak roki jaati hai jab tak vivad khatam nahi ho jata.
      </p>

      <h2>Virasat Ki Zameen — Sabse Zyada Atakne Wala Case</h2>

      <p>
        Ek scenario itna common hai ki alag se likhna zaroori hai. Pita ka dehant ho gaya.
        Zameen ab bete-betiyon ke naam aani hai, lekin Dharani par mutation abhi purane
        naam par hi hai. Aise mein Rythu Bharosa ka paisa purane record ke hisaab se
        process hota hai, aur dehant ke baad account freeze hone se payment fail ho jaati
        hai. Ghar pehle hi dukh mein hai, upar se ye jhamela.
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

      <h2>Guntas Ka Hisaab — Apni Raqam Khud Nikaalein</h2>

      <p>
        Telangana mein zameen acre aur guntas mein boli jaati hai — ek acre mein 40 guntas.
        Scheme ka hisaab bhi isi par chalta hai, isliye apna anumaanit figure nikaalna aasan
        hai. Pattadar passbook mein likha extent lein — maan lijiye 2 acre 20 guntas, yaani
        2.5 acre. Saal ka ₹12,000 prati acre matlab ₹30,000, aur ek season (Kharif ya Rabi)
        ka credit iska aadha — ₹15,000. Credit is hisaab se kam aaye to pehla shak extent
        par karein: Dharani mein darj rakba passbook se milaayein, kyunki payment Dharani
        ke record par banti hai, aapki yaaddasht par nahi.
      </p>

      <p>
        Do baatein is hisaab mein aksar bhool hoti hain. Pehli — payment sirf un khaton par
        banti hai jo Dharani mein saaf hain; disputed ya prohibited list wali zameen ka
        hissa apne aap kat jaata hai. Doosri — alag-alag gaon mein zameen ke tukde hon to
        har khata alag process hota hai, aur alag dinon par alag credit aa sakte hain.
        Poora jod milaane se pehle sab khaton ke credit gin lein.
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

      <h2>Naye Kisan Ka Pehla Season — Kis Kram Mein Kya Karein</h2>

      <p>
        Zameen abhi naam par aayi hai — kharidi ya virasat se — to Rythu Bharosa ka safar
        Dharani se shuru hota hai, portal se nahi. Kram ye hai: pehle registration ya
        succession ke zariye Dharani mein apna naam pattadar ke roop mein darj karwaayein
        aur nayi pattadar passbook lein. Phir bank mein Aadhaar seeding confirm karein —
        payment NPCI mapper se hoti hai, sirf khaata khula hona kaafi nahi. Iske baad kuch
        karna nahi hai; list Dharani ke record se banti hai aur naya khata agle season ke
        phase mein apne aap ginti mein aa jaata hai.
      </p>

      <p>
        Pehle season mein sabse aam galti intezaar ki disha galat hona hai — log portal
        par apna naam dhoondhte rehte hain jabki asli rukavat Dharani ke record ya bank
        seeding mein hoti hai. Passbook mil gayi, seeding ho gayi, phir bhi do season tak
        kuch na aaye — tab MRO office mein apne khate ki sthiti likhit mein poochhein.
        Wahan ke record mein hi dikhega ki khata kis phase mein hai ya kis wajah se ruka
        hai.
      </p>

      <h2>Baaki Rajyon Ka Hisaab</h2>

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
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            Har state ki kisan yojana ka comparison ek hi table mein — kis rajya mein kitna milta hai, ek nazar mein
          </Link>
        </li>
      </ul>

      <p>
        Per-acre wala hisaab Telangana ki khaas baat hai. Baaki rajyon mein amount fixed hota hai,
        chahe zameen kitni bhi ho.
      </p>

      <h2>Rythu Bharosa — Jo Log Aksar Poochhte Hain</h2>

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
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Rythu Bharosa FAQ 2026</p>
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
        <strong>Fraud se bachein:</strong> Rythu Bharosa registration ya status theek karne ke liye koi bhi sarkari officer ya agent aapse paise nahi maangta. Ye scheme 100% free hai. Agar koi "commission" maange, toh turant MRO office ya 1800-425-0888 (Telangana Kisan Call Center) par shikayat karein.
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
