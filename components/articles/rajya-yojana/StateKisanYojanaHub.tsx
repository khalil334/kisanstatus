import Link from 'next/link';
import Image from 'next/image';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import { FAQBlock } from '@/components/ArticleShared';

const IMG_BASE = '/images/articles/rajya-yojna/state-kisan-yojana-list-all-states-2026';

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
    q: 'Kya PM Kisan aur state ki yojana dono ek saath milti hain?',
    a: 'Haan, zyadatar states mein dono milti hain. PM Kisan central sarkar deti hai aur state yojana us ke upar alag se aati hai. Dono ke portal alag hain, kist ki dates alag hain, aur ek ka status doosre par asar nahi daalta. Sirf itna dhyan rakhein ki kuch states apni list PM Kisan ke data se hi banati hain, isliye PM Kisan ka record active rehna zaroori hai.',
  },
  {
    q: 'Kis state mein kisan ko sabse zyada paisa milta hai?',
    a: 'Fixed amount wali schemes mein Andhra Pradesh ki Annadata Sukhibhava sabse aage hai, jahan PM Kisan milakar saal ka ₹20,000 tak banta hai. Lekin Telangana ka hisaab per acre hai, isliye zyada zameen wale kisan ko wahan isse bhi zyada mil sakta hai. Seedha comparison mushkil hai kyunki har state ka model alag hai.',
  },
  {
    q: 'Main ek state se doosre state shift ho gaya hoon, kya purani state ki kist milti rahegi?',
    a: 'Nahi. Har state yojana mein us state ka nivasi hona zaroori shart hai. Shift hone par purani state ki eligibility khatam ho jaati hai. Nayi state mein wahan ki scheme ke niyam ke hisaab se alag se register hona padta hai, aur zameen bhi usi state mein honi chahiye.',
  },
  {
    q: 'Mere state ki koi kisan yojana kyun nahi hai?',
    a: 'Har state apna budget dekh kar faisla karti hai. Kuch states cash transfer ki jagah bijli subsidy, karz maafi ya fasal bonus jaise doosre raaste chunti hain. Aapke state ka naam is list mein na ho to iska matlab ye nahi ki koi madad nahi milti, bas seedha income-support model nahi hai. Apne krishi vibhag ke portal par current schemes zaroor dekh lein.',
  },
  {
    q: 'State yojana ke liye kya alag se application deni padti hai?',
    a: 'Ye state par depend karta hai. MP aur Maharashtra jaise states PM Kisan ke data se khud hi list bana lete hain, wahan kuch nahi karna padta. West Bengal aur Odisha jaise states mein apna alag registration hai. Neeche har state ke block mein ye baat alag se likhi hai.',
  },
  {
    q: 'PM Kisan aata hai lekin state ki kist nahi aayi, kya karein?',
    a: 'Dono alag systems hain, isliye ye normal hai. Pehle apni state ke portal par status dekhein. Aksar wajah e-KYC pending hona, bank account NPCI se seed na hona, ya state ke land record mein naam ka farak hoti hai. Status mein kuch samajh na aaye to apne block ke krishi karyalay ya panchayat mein poochhein.',
  },
  {
    q: 'Kya bataidar (tenant farmer) ko bhi state yojana ka paisa milta hai?',
    a: 'Zyadatar states mein nahi, kyunki list land record se banti hai. Andhra Pradesh iska exception hai, jahan Annadata Sukhibhava mein registered tenant farmers bhi aate hain. West Bengal mein bhagchasi ka record panchayat ke paas ho to Krishak Bandhu mil sakta hai. Baaki states mein zameen apne naam par honi chahiye.',
  },
  {
    q: 'Chhattisgarh ki Krishak Unnati Yojana is list se alag kaise hai?',
    a: 'Wahan paisa saal ke fixed amount ki jagah dhan ki kharidi se juda hai. Kisan ne kitna dhan becha, us par antar rashi milti hai. Kharif 2026 se dhan chhod kar doosri fasal lagane par per acre input sahayata ka naya raasta bhi khula hai. Isliye wahan ka amount har kisan ke liye alag banta hai.',
  },
];

const STATE_SCHEMES = [
  {
    state: 'Madhya Pradesh',
    scheme: 'CM Kisan Kalyan Yojana',
    amount: '₹6,000 / saal (3 × ₹2,000)',
    portal: 'saara.mp.gov.in',
    guide: '/rajya-yojana/mp-kisan-kalyan-yojana-kist-status',
  },
  {
    state: 'Rajasthan',
    scheme: 'Mukhyamantri Kisan Samman Nidhi',
    amount: '₹3,000 / saal (3 × ₹1,000)',
    portal: 'rajsahakar.rajasthan.gov.in',
    guide: '/rajya-yojana/rajasthan-kisan-samman-nidhi-9000',
  },
  {
    state: 'Maharashtra',
    scheme: 'Namo Shetkari Mahasanman Nidhi',
    amount: '₹6,000 / saal (2 × ₹3,000)',
    portal: 'nsmny.mahait.org',
    guide: '/rajya-yojana/namo-shetkari-yojana-status-check-2026',
  },
  {
    state: 'Andhra Pradesh',
    scheme: 'Annadata Sukhibhava',
    amount: '₹20,000 tak / saal (PM Kisan milakar)',
    portal: 'annadathasukhibhava.ap.gov.in',
    guide: '/rajya-yojana/annadata-sukhibhava-status-check-2026',
  },
  {
    state: 'Telangana',
    scheme: 'Rythu Bharosa',
    amount: '₹12,000 / acre / saal (per acre hisaab)',
    portal: 'rytubharosa.cgg.gov.in',
    guide: '/rajya-yojana/rythu-bharosa-status-check-2026',
  },
  {
    state: 'West Bengal',
    scheme: 'Krishak Bandhu',
    amount: '₹4,000 se ₹10,000 / saal (zameen par slab)',
    portal: 'krishakbandhu.wb.gov.in',
    guide: '/rajya-yojana/krishak-bandhu-status-check-2026',
  },
  {
    state: 'Odisha',
    scheme: 'CM Kisan Yojana',
    amount: '₹4,000 / saal (landless ke liye ₹12,500)',
    portal: 'cmkisan.odisha.gov.in',
    guide: '/rajya-yojana/odisha-cm-kisan-status-check-2026',
  },
  {
    state: 'Chhattisgarh',
    scheme: 'Krishak Unnati Yojana',
    amount: 'Dhan kharidi par antar rashi (fixed nahi)',
    portal: 'khadya.cg.nic.in',
    guide: '/rajya-yojana/krishak-unnati-yojana-status-check-2026',
  },
];

export default function StateKisanYojanaHub() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">

      <InfoBox type="update" date="6 August 2026">
        <strong>Latest Update:</strong> Neeche diye amounts har state ke official portal aur
        hamare state-wise guides se milaye gaye hain. Jis state ka current amount portal se
        confirm nahi ho paya, wahan saaf likha hai ki portal par confirm karein. Koi bhi figure
        WhatsApp forward se nahi liya gaya.
      </InfoBox>

      <h1>State Kisan Yojana List 2026: Sabhi Rajya Ka Amount, Portal Aur Status Link Ek Jagah</h1>

      <p>
        PM Kisan ka ₹6,000 to poore desh mein ek jaisa hai. Asli farak state ki apni yojana se
        padta hai. Rajasthan ka kisan saal mein ₹9,000 tak pahunchta hai, Maharashtra ka ₹12,000,
        aur Andhra Pradesh ka ₹20,000 tak. Wahi kaam karne wale do kisanon ki income-support mein
        itna antar sirf is baat se aata hai ki unki zameen kis state mein hai.
      </p>

      <p>
        Ye page usi antar ko ek jagah rakhta hai: kis state mein kaunsi scheme chal rahi hai,
        kitna paisa banta hai, official portal kaunsa hai, aur status check ka seedha raasta kya
        hai. Har state ke liye hamara detail guide alag se maujood hai, jiska link table mein hai.
      </p>

      <Fig
        src="hero.webp"
        alt="Bharat ke alag alag rajyon ke kisan apne khet mein, har state ki apni kisan yojana ka comparison"
        caption="Har state ki apni income-support yojana, apna portal aur apna hisaab hai"
        width={1200}
        height={675}
        priority
      />

      <h2>Sabhi States Ka Comparison Table</h2>

      <p>
        Pehle poori tasveer dekh lein. Amount wale column mein wahi likha hai jo state ke apne
        portal ya cabinet notification se confirm hai. Detail har state ke guide mein hai.
      </p>

      <SchemeTable>
        <tr>
          <th>State</th>
          <th>Scheme</th>
          <th>Amount</th>
          <th>Official Portal</th>
          <th>Hamara Guide</th>
        </tr>
        {STATE_SCHEMES.map((s) => (
          <tr key={s.state}>
            <td><strong>{s.state}</strong></td>
            <td>{s.scheme}</td>
            <td>{s.amount}</td>
            <td><code>{s.portal}</code></td>
            <td>
              <Link href={s.guide}>Status guide</Link>
            </td>
          </tr>
        ))}
      </SchemeTable>

      <InfoBox type="warning">
        <strong>Dhyan rakhein:</strong> State schemes ke amounts cabinet decisions se badalte
        rehte hain, aur internet par purane figures saalon tak ghoomte hain. Payment se pehle
        apne state ke official portal par current amount ek baar zaroor dekh lein.
      </InfoBox>

      <h2>State Ka Paisa PM Kisan Ke Upar Kaise Judta Hai</h2>

      <p>
        Is poore system ko samajhne ki chaabi ek hi hai: state yojana PM Kisan ki jagah nahi
        leti, us ke upar judti hai. Central sarkar apna ₹6,000 teen kiston mein bhejti hai.
        State apna hissa alag schedule par, alag treasury se, aur aksar alag portal ke record
        se bhejti hai.
      </p>

      <p>
        Isi wajah se teen baatein hamesha yaad rakhne layak hain. Pehli, dono ki kist kabhi ek
        saath nahi aati; 15 se 30 din ka farak aam hai. Doosri, ek ruk jaaye to doosri apne aap
        nahi rukti; dono ke apne alag kaaran hote hain. Teesri, kai states apni beneficiary list
        PM Kisan ke data se hi banati hain, isliye PM Kisan ka e-KYC expire hona state ki kist
        bhi rok sakta hai.
      </p>

      <p>
        Jod ka hisaab har state mein alag banta hai. MP aur Maharashtra apna ₹6,000 milakar
        kisan ko total ₹12,000 tak pahunchate hain. Rajasthan ₹3,000 jodkar ₹9,000 tak. Andhra
        Pradesh ka combined figure ₹20,000 tak jaata hai. Telangana aur Chhattisgarh fixed
        amount ke bajaye zameen ya fasal se juda model chalate hain, isliye wahan ka total har
        kisan ke liye alag hota hai.
      </p>

      <h2>Har State Ka Short Hisaab</h2>

      <h3>Madhya Pradesh — CM Kisan Kalyan Yojana</h3>
      <p>
        PM Kisan ke barabar ₹6,000 saalana, teen kiston mein. List PM Kisan ke data se banti
        hai, alag application nahi deni padti. Status SAARA portal par milta hai aur girdawari
        ka record yahan khaas maayne rakhta hai. Poora tareeka{' '}
        <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">MP wale guide</Link> mein hai.
      </p>

      <h3>Rajasthan — Mukhyamantri Kisan Samman Nidhi</h3>
      <p>
        State apni taraf se ₹3,000 saalana jodta hai, jisse total ₹9,000 banta hai. Yahan ka
        gatekeeper Jan Aadhaar hai; uske bina kist atakti hai. ₹12,000 wale prastav ki asliyat
        samet poora hisaab{' '}
        <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">Rajasthan guide</Link> mein
        likha hai.
      </p>

      <h3>Maharashtra — Namo Shetkari Mahasanman Nidhi</h3>
      <p>
        PM Kisan ke eligible kisan ko state ₹6,000 aur deti hai, do kiston mein ₹3,000 karke.
        Alag se apply nahi karna padta. 7/12 utara yahan ka sabse zaroori kagaz hai. Status ka
        raasta{' '}
        <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">Namo Shetkari guide</Link>{' '}
        mein dekhein.
      </p>

      <h3>Andhra Pradesh — Annadata Sukhibhava</h3>
      <p>
        Fixed-amount schemes mein sabse bada package: PM Kisan milakar saal ka ₹20,000 tak.
        Iski sabse alag baat ye hai ki registered bataidar kisan bhi cover hote hain, jo baaki
        states mein nahi hota. Kist ka season-wise hisaab{' '}
        <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">AP guide</Link> mein hai.
      </p>

      <h3>Telangana — Rythu Bharosa</h3>
      <p>
        Yahan hisaab per acre chalta hai: har acre cultivable land par ₹12,000 saalana, aadha
        Kharif mein aur aadha Rabi mein. Do acre wale ko chaar acre wale se aadha milta hai,
        isliye gaon mein har account ka amount alag dikhta hai. Guntas ka hisaab aur phase
        system{' '}
        <Link href="/rajya-yojana/rythu-bharosa-status-check-2026">Rythu Bharosa guide</Link> mein
        samjhaya hai.
      </p>

      <h3>West Bengal — Krishak Bandhu</h3>
      <p>
        Zameen ke slab par ₹4,000 se ₹10,000 saalana, do kiston mein. Pehchaan ka mukhya zariya
        Aadhaar nahi, Voter ID (EPIC) hai. Saath mein ₹2 lakh ka death benefit bhi judta hai.
        Slab ka logic aur EPIC se status check ka tareeka{' '}
        <Link href="/rajya-yojana/krishak-bandhu-status-check-2026">Krishak Bandhu guide</Link>{' '}
        mein hai.
      </p>

      <h3>Odisha — CM Kisan Yojana</h3>
      <p>
        KALIA ki jagah aayi scheme. Chhote aur seemant kisan ko ₹4,000 saalana, aur landless
        agricultural households ke liye alag track par ₹12,500. Do alag tracks ka farak samajhna
        yahan sabse zaroori hai, jo{' '}
        <Link href="/rajya-yojana/odisha-cm-kisan-status-check-2026">Odisha guide</Link> mein
        khula hai.
      </p>

      <h3>Chhattisgarh — Krishak Unnati Yojana</h3>
      <p>
        Ye is list ki sabse alag scheme hai. Fixed saalana amount nahi milta; paisa dhan ki
        sarkari kharidi se juda hai aur antar rashi ke roop mein aata hai. Kharif 2026 se dhan
        ki jagah doosri fasal lagane par per acre input sahayata ka naya component bhi juda hai.
        Hisaab{' '}
        <Link href="/rajya-yojana/krishak-unnati-yojana-status-check-2026">Krishak Unnati guide</Link>{' '}
        mein hai.
      </p>

      <Fig
        src="india-farm-fields.webp"
        alt="Bharat ke alag rajyon ke khet, har state mein kisan yojana ka alag model"
        caption="Ek jaisi zameen, alag state, alag paisa. Model ka farak samajhna zaroori hai"
      />

      <h2>Aapka State List Mein Nahi Hai?</h2>

      <p>
        Uttar Pradesh, Bihar, Punjab, Haryana jaise kai bade states mein abhi PM Kisan jaisi
        alag state-level income-support scheme nahi chal rahi. Iska matlab ye nahi ki wahan
        kisan ke liye kuch nahi hai. Ye states doosre raaste se madad dete hain: kahin bijli
        subsidy, kahin fasal bonus, kahin karz maafi ke rounds.
      </p>

      <p>
        Aise mein do kaam karein. Pehla, PM Kisan ka apna record durust rakhein, kyunki wahi
        base hai. Doosra, apne state ke krishi vibhag ke portal par current schemes ka page
        dekhte rahein, kyunki naye elections aur naye budget ke saath nayi schemes aati rehti
        hain. Jab bhi koi state nayi income-support yojana shuru karegi, hum is page ko update
        kar denge.
      </p>

      <h2>Status Check Se Pehle Ye Teen Cheezein Har State Mein Common Hain</h2>

      <p>
        Portal chahe koi bhi ho, atakne ki wajahein lagbhag wahi rehti hain. Bank account NPCI
        se seeded hona chahiye, warna payment bank se wapas chali jaati hai. Aadhaar, bank aur
        land record mein naam ki spelling ek jaisi honi chahiye. Aur e-KYC current honi chahiye,
        kyunki expire hone par status green dikhte hue bhi paisa nahi aata.
      </p>

      <p>
        In teeno mein se koi bhi problem ho to pehle use theek karayein, uske baad hi kist ka
        intezaar karein. Ye kaam CSC, bank branch aur tehsil se ho jaate hain aur ek baar theek
        hone par saalon chalte hain.
      </p>

      <h2>Sources</h2>

      <ul>
        <li>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">
            PM Kisan Samman Nidhi — official portal (Central)
          </a>
        </li>
        <li>
          <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">
            SAARA Portal — MP CM Kisan Kalyan Yojana
          </a>
        </li>
        <li>
          <a href="https://rajsahakar.rajasthan.gov.in/citizen/cmkisanstatus" target="_blank" rel="noopener noreferrer">
            Raj Sahakar — Rajasthan CM Kisan status check
          </a>
        </li>
        <li>
          <a href="https://nsmny.mahait.org" target="_blank" rel="noopener noreferrer">
            Namo Shetkari Mahasanman Nidhi — Maharashtra official portal
          </a>
        </li>
        <li>
          <a href="https://annadathasukhibhava.ap.gov.in" target="_blank" rel="noopener noreferrer">
            Annadata Sukhibhava — Andhra Pradesh official portal
          </a>
        </li>
        <li>
          <a href="https://rytubharosa.cgg.gov.in" target="_blank" rel="noopener noreferrer">
            Rythu Bharosa — Telangana official portal
          </a>
        </li>
        <li>
          <a href="https://krishakbandhu.wb.gov.in" target="_blank" rel="noopener noreferrer">
            Krishak Bandhu — West Bengal official portal
          </a>
        </li>
        <li>
          <a href="https://cmkisan.odisha.gov.in" target="_blank" rel="noopener noreferrer">
            CM Kisan Yojana — Odisha official portal
          </a>
        </li>
        <li>
          <a href="https://khadya.cg.nic.in" target="_blank" rel="noopener noreferrer">
            Khadya Vibhag Chhattisgarh — Krishak Unnati Yojana
          </a>
        </li>
      </ul>

      <h2>State Kisan Yojana — Aksar Poochhe Jaane Wale Sawaal</h2>

      <FAQBlock faqs={FAQS_DATA} caption="State-wise kisan yojana comparison FAQ 2026" />

      <InfoBox type="tip">
        <strong>Fraud se bachein:</strong> Koi bhi sarkari yojana registration ya status theek
        karne ke naam par paise nahi maangti. Koi "fees" maange to wo fraud hai. Shikayat apne
        state ke krishi vibhag ya panchayat karyalay mein darj karein.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Amounts aur niyam har state ke cabinet decisions se badal sakte hain. Final jaankari
          ke liye apne state ke official portal ya krishi karyalay se confirm karein.
        </p>
      </div>

    </article>
  );
}
