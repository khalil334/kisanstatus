import Link from 'next/link';
import Image from 'next/image';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

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
    a: 'Haan, zyadatar rajyon mein dono milti hain. Kendra sarkar apna ₹6,000 deti hai aur pradesh ki yojana us ke upar judti hai. Dono ke portal judaa hain, kiston ki dates bhi judaa hain, aur ek ka status doosre par asar nahi daalta. Sirf itna dhyan rakhein ki kai jagah beneficiary list kendriya data se hi banti hai, isliye wo record active rehna zaroori hai.',
  },
  {
    q: 'Kis state mein kisan ko sabse zyada paisa milta hai?',
    a: 'Fixed amount wali schemes mein Andhra Pradesh ki Annadata Sukhibhava sabse aage hai, jahan kendriya hissa milakar saal ka ₹20,000 tak banta hai. Lekin Telangana ka hisaab per acre chalta hai, isliye zyada zameen wale khetihar ko wahan isse bhi upar mil sakta hai. Seedha comparison mushkil hai kyunki har jagah ka model apna-apna hai.',
  },
  {
    q: 'Main ek state se doosre state shift ho gaya hoon, kya purani state ki kist milti rahegi?',
    a: 'Nahi. Har rajya ki yojana mein wahan ka nivasi hona zaroori shart hai. Shift hone par purani jagah ki eligibility khatam ho jaati hai. Naye pradesh mein wahan ke niyam ke hisaab se dobara register hona padta hai, aur zameen bhi wahin honi chahiye.',
  },
  {
    q: 'Mere state ki koi kisan yojana kyun nahi hai?',
    a: 'Har sarkar apna budget dekh kar faisla karti hai. Kai jagah cash transfer ki jagah bijli subsidy, karz maafi ya fasal bonus jaise doosre raaste chune gaye hain. Apne yahan ka naam is list mein na ho to iska matlab ye nahi ki koi madad nahi milti, bas seedha income-support model nahi hai. Apne krishi vibhag ki website par current schemes zaroor dekh lein.',
  },
  {
    q: 'Rajya ki yojana ke liye kya alag se application deni padti hai?',
    a: 'Ye apne yahan ke model par depend karta hai. MP aur Maharashtra kendriya data se khud hi list bana lete hain, wahan kuch nahi karna padta. West Bengal aur Odisha mein apna judaa panjikaran hai. Neeche har block mein ye baat saaf likhi hai.',
  },
  {
    q: 'PM Kisan aata hai lekin rajya ki kist nahi aayi, kya karein?',
    a: 'Dono judaa systems hain, isliye ye normal hai. Pehle apne yahan ki website par sthiti dekhein. Aksar wajah e-KYC pending hona, bank account NPCI se seed na hona, ya land record mein naam ka farak hoti hai. Screen par kuch samajh na aaye to apne block ke krishi karyalay ya panchayat mein poochhein.',
  },
  {
    q: 'Kya bataidar (tenant farmer) ko bhi state yojana ka paisa milta hai?',
    a: 'Zyadatar jagah nahi, kyunki list land record se banti hai. Andhra Pradesh iska exception hai, jahan Annadata Sukhibhava mein registered tenant farmers bhi aate hain. West Bengal mein bhagchasi ka record panchayat ke paas ho to Krishak Bandhu mil sakta hai. Baaki jagah zameen apne naam par honi chahiye.',
  },
  {
    q: 'Chhattisgarh ki Krishak Unnati Yojana is list se alag kaise hai?',
    a: 'Wahan paisa saal ke fixed amount ki jagah dhan ki kharidi se juda hai. Annadata ne kitna dhan becha, us par antar rashi milti hai. Kharif 2026 se dhan chhod kar doosri fasal lagane par per acre input sahayata ka naya raasta bhi khula hai. Isliye wahan ki raqam har khetihar ke liye apni-apni banti hai.',
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
        <strong>Latest Update:</strong> Neeche diye amounts har rajya ki official website aur
        hamare rajya-war guides se milaye gaye hain. Jahan current raqam confirm nahi ho paayi,
        wahan saaf likha hai ki site par khud dekh lein. Koi bhi figure WhatsApp forward se
        nahi liya gaya.
      </InfoBox>

      <h1>State Kisan Yojana List 2026: Sabhi Rajya Ka Amount, Portal Aur Status Link Ek Jagah</h1>

      <p>
        Matlab, PM Kisan ka ₹6,000 to poore desh mein ek jaisa hai. Asli farak rajya ki apni yojana
        se padta hai. Rajasthan ka khetihar saal mein ₹9,000 tak pahunchta hai, Maharashtra ka
        ₹12,000, aur Andhra Pradesh ka ₹20,000 tak. Sochiye — wahi zameen, wahi mehnat, aur
        income-support mein itna antar bas is baat se ki khet kis seema ke andar hai.
      </p>

      <p>
        Ye page usi antar ko ek jagah rakhta hai: kahan kaunsi scheme chal rahi hai,
        kitna paisa banta hai, sarkari website kaunsi hai, aur sthiti dekhne ka seedha raasta kya
        hai. Har jagah ke liye hamara detail guide judaa maujood hai, jiska link table mein hai.
      </p>

      <Fig
        src="hero.webp"
        alt="Bharat ke vibhinn rajyon ke annadata apne khet mein, rajya-war yojana ka comparison"
        caption="Har rajya ki apni income-support yojana, apni website aur apna hisaab hai"
        width={1200}
        height={675}
        priority
      />

      <h2>Sabhi States Ka Comparison Table</h2>

      <p>
        Pehle poori tasveer dekh lein. Amount wale column mein wahi likha hai jo sarkari
        website ya cabinet notification se confirm hai. Detail har guide mein hai.
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
        <strong>Dhyan rakhein:</strong> Rajya schemes ke amounts cabinet decisions se badalte
        rehte hain, aur internet par purane figures saalon tak ghoomte hain. Payment se pehle
        apne yahan ki official site par current raqam ek baar zaroor dekh lein.
      </InfoBox>

      <h2>Rajya-War Short Hisaab</h2>

      <h3>Madhya Pradesh — CM Kisan Kalyan Yojana</h3>
      <p>
        Kendriya hisse ke barabar ₹6,000 saalana, teen kiston mein. Suchi kendriya data se banti
        hai, judaa application nahi deni padti. Sthiti SAARA portal par milti hai aur girdawari
        ka record yahan khaas maayne rakhta hai. Poora tareeka{' '}
        <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">MP wale guide</Link> mein hai.
      </p>

      <h3>Rajasthan — Mukhyamantri Kisan Samman Nidhi</h3>
      <p>
        Pradesh apni taraf se ₹3,000 saalana jodta hai, jisse total ₹9,000 banta hai. Yahan ka
        gatekeeper Jan Aadhaar hai; uske bina kist atakti hai. ₹12,000 wale prastav ki asliyat
        samet poora hisaab{' '}
        <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000">Rajasthan guide</Link> mein
        likha hai.
      </p>

      <h3>Maharashtra — Namo Shetkari Mahasanman Nidhi</h3>
      <p>
        Kendra se eligible laabharthi ko pradesh ₹6,000 aur deta hai, do kiston mein ₹3,000 karke.
        Judaa apply nahi karna padta. 7/12 utara yahan ka sabse zaroori kagaz hai. Sthiti ka
        raasta{' '}
        <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026">Namo Shetkari guide</Link>{' '}
        mein dekhein.
      </p>

      <h3>Andhra Pradesh — Annadata Sukhibhava</h3>
      <p>
        Fixed-amount schemes mein sabse bada package: kendriya hissa milakar saal ka ₹20,000 tak.
        Iski sabse judi baat ye hai ki registered bataidar bhi cover hote hain, jo kahin aur
        nahi hota. Kist ka season-wise hisaab{' '}
        <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">AP guide</Link> mein hai.
      </p>

      <h3>Telangana — Rythu Bharosa</h3>
      <p>
        Yahan hisaab per acre chalta hai: har acre cultivable land par ₹12,000 saalana, aadha
        Kharif mein aur aadha Rabi mein. Do acre wale ko chaar acre wale se aadha milta hai,
        isliye gaon mein har khaate ki raqam judi dikhti hai. Guntas ka hisaab aur phase
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
        KALIA ki jagah aayi scheme. Chhote aur seemant khetihar ko ₹4,000 saalana, aur landless
        agricultural households ke liye judaa track par ₹12,500. Do tracks ka farak samajhna
        yahan sabse zaroori hai, jo{' '}
        <Link href="/rajya-yojana/odisha-cm-kisan-status-check-2026">Odisha guide</Link> mein
        khula hai.
      </p>

      <h3>Chhattisgarh — Krishak Unnati Yojana</h3>
      <p>
        Ye is list ki sabse hatke scheme hai. Fixed saalana amount nahi milta; paisa dhan ki
        sarkari kharidi se juda hai aur antar rashi ke roop mein aata hai. Kharif 2026 se dhan
        ki jagah doosri fasal lagane par per acre input sahayata ka naya component bhi juda hai.
        Hisaab{' '}
        <Link href="/rajya-yojana/krishak-unnati-yojana-status-check-2026">Krishak Unnati guide</Link>{' '}
        mein hai.
      </p>

      <Fig
        src="india-farm-fields.webp"
        alt="Bharat ke vibhinn rajyon ke khet, har jagah income-support ka judaa model"
        caption="Ek jaisi zameen, doosra pradesh, doosra paisa. Model ka farak note kar lo"
      />

      <h2>Rajya Ka Paisa Kendriya Hisse Ke Upar Kaise Judta Hai</h2>

      <p>
        Is poore system ko samajhne ki chaabi ek hi hai: pradesh ki yojana PM Kisan ki jagah
        nahi leti, us ke upar judti hai. Kendra apna ₹6,000 teen kiston mein bhejta
        hai. Rajya apna hissa apne schedule par, apni treasury se, aur aksar doosre hi
        record se bhejta hai. Do judi machinein, ek hi khaata.
      </p>

      <p>
        Isi wajah se teen baatein hamesha yaad rakhne layak hain. Pehli, dono ki kist kabhi ek
        saath nahi aati; 15 se 30 din ka farak aam hai. Doosri, ek ruk jaaye to doosri apne aap
        nahi rukti; dono ke kaaran apne-apne hote hain. Teesri, kai jagah beneficiary suchi
        kendriya data se hi banti hai, isliye wahan ka e-KYC expire hona pradesh ki kist
        bhi rok sakta hai.
      </p>

      <p>
        Jod ka hisaab har jagah apna banta hai. MP aur Maharashtra apna ₹6,000 milakar
        laabharthi ko total ₹12,000 tak pahunchate hain. Rajasthan ₹3,000 jodkar ₹9,000 tak. Andhra
        Pradesh ka combined figure ₹20,000 tak jaata hai. Telangana aur Chhattisgarh fixed
        amount ke bajaye zameen ya fasal se juda model chalate hain, isliye wahan ka total har
        khetihar ke liye apna-apna hota hai.
      </p>

      <h2>Application Ka Farak — Kahan Khud Karna Hai, Kahan Apne Aap Hota Hai</h2>

      <p>
        Kya aapko form bharna padega? Jawab apne yahan ke model par nirbhar hai. Suchi do
        tarah se banti hai, aur ye farak jaanna zaroori hai — isi se tay hota hai ki aapko kuch
        karna hai ya sirf intezaar.
      </p>

      <p>
        <strong>Apne aap judne wali jagah:</strong> MP aur Maharashtra apni suchi kendriya
        data se banate hain. Yahan judaa application ka koi form hi nahi hai — PM Kisan mein
        active hain to naam khud aa jaata hai. Iska doosra pehlu ye hai ki wahan ki koi bhi
        problem (e-KYC expire, land seeding pending) yahan double nuksan
        karti hai: dono kist ek saath rukti hain.
      </p>

      <p>
        <strong>Judaa panjikaran wali jagah:</strong> West Bengal (Krishak Bandhu), Odisha
        (CM Kisan) aur Andhra Pradesh apna enrolment khud chalate hain. Yahan kendriya list
        mein hona kaafi nahi — sarkari website ya camp mein apna naam khud judwana padta
        hai. Naye laabharthi, virasat mein zameen paane wale, ya doosri jagah se aane wale log
        aksar isi kadam par chook jaate hain aur saalon tak sochte rehte hain ki paisa apne
        aap aayega.
      </p>

      <p>
        Agar aapko yaad nahi ki aapke yahan kaunsa model hai, to upar wale table se apna
        guide kholiye — har guide mein enrolment ka poora tareeka saaf likha hai.
      </p>

      <h2>Kist Ka Calendar — Saal Bhar Mein Kab Kya Aata Hai</h2>

      <p>
        Har jagah ka apna schedule hai, lekin ek mota pattern jaan lena kaam aata hai. Kendriya
        teen kistein aam taur par April–July, August–November aur December–March ke
        windows mein aati hain. MP aur Maharashtra apne hapte inhi ke
        aas-paas, lekin apne hi dinon par bhejte hain — isliye mahine mein do judaa credit
        dikhna bilkul normal hai. Telangana ka per-acre model Kharif aur Rabi ke season se
        juda hai, to wahan saal mein do bade credit aate hain. Aur Chhattisgarh ki antar
        rashi ka time dhan kharidi ke season ke baad ka hai — hapte ka nahi, release ka
        intezaar hota hai.
      </p>

      <p>
        Iska practical matlab: pichle saal ke credit ki dates passbook se
        nikaal kar likh lein. Agla saal lagbhag usi pattern par chalega, aur “paisa late
        hai ya meri file atki hai” ka farak aap khud pehchaan lenge — poore gaon mein kisi
        ko nahi aaya to wo late release hai, sirf aapko nahi aaya to wo aapki file ka
        mamla hai. Dono ka ilaaj judaa hai: pehle mein intezaar, doosre mein bank ya site
        ki jaanch.
      </p>

      <h2>Do Khetihar, Do Pradesh — Hisaab Ka Farak Ek Misaal Se</h2>

      <p>
        Do bhai, do judaa message, aur dono ke sawaal ka jawab ek hi tha. Ek MP mein basa tha,
        doosra border
        paar Maharashtra mein. Dono ke paas lagbhag barabar zameen, par saal ke ant mein
        credit ka jod judaa nikla. Dono ko laga kisi ek ke saath galti hui hai. Galti nahi
        thi — bas do jagah ke do model the. Rehne do, wo baat aur hai; hisaab dekhiye.
      </p>

      <p>
        Model ka farak numbers mein sabse saaf dikhta hai. Maan lijiye do khetihar hain, dono ke
        paas teen-teen acre zameen hai. Pehla Madhya Pradesh mein hai: use kendra ka ₹6,000
        aur pradesh ka ₹6,000 — kul ₹12,000 saalana milega, zameen teen acre ho ya paanch,
        raqam wahi rahegi. Doosra Telangana mein hai: wahan hisaab per acre hai, isliye teen
        acre par ₹36,000 saalana banta hai — lekin ek acre wale padosi ko sirf ₹12,000.
      </p>

      <p>
        Ab teesra naam jodein — Chhattisgarh ka, jo dhan bechta hai. Uski raqam na fixed hai
        na per acre; wo is par nirbhar hai ki samiti mein kitne quintal dhan darj hua. Achhi
        fasal ke saal zyada, kam kharidi ke saal kam. Teeno barabar mehnat karte hain,
        lekin teeno ki jaanch bilkul judi cheez hai — pehle ko sirf hapte ki date
        dekhni hai, doosre ko apna land record, aur teesre ko kharidi ki entry. Isi liye is
        page par har guide judaa hai; ek hi formula sab par nahi chalta.
      </p>

      <h2>Naye Laabharthi Ke Liye Pehla Kadam — Rajya Koi Bhi Ho</h2>

      <p>
        Zameen abhi naam par aayi hai — kharidi ho, virasat ho ya batwaara — to income-support
        ka raasta har jagah ek hi point se shuru hota hai: <strong>revenue record mein
        apna naam durust karwana</strong>. Mutation jab tak poora nahi hota, koi bhi website
        aapko khatedar nahi maanti, aur bina khatedar bane na kendriya grant banta hai na
        pradesh ki madad.
      </p>

      <p>
        Mutation ke baad ka kram simple hai: pehle PM Kisan ka panjikaran (kyunki kai
        jagah isi se suchi banti hai), phir apne yahan ke model ke hisaab se judaa
        enrolment ya intezaar. Aur form bharte waqt hi teen cheezein milaa lein —
        Aadhaar ki spelling, bank khaate ka naam, aur land record ka naam. Teeno ek jaise
        hue to aage ka safar bina rukavat ka rehta hai; ek bhi alag hua to kisi na kisi
        kist par file atkegi.
      </p>

      <h2>Jaanch Se Pehle Ye Teen Cheezein Har Jagah Common Hain</h2>

      <p>
        Website chahe koi bhi ho, atakne ki wajahein lagbhag wahi rehti hain. Bank account
        NPCI se seeded ho — warna payment bank se wapas laut jaati hai. Aadhaar, bank aur
        land record mein naam ki spelling ek jaisi ho. Aur e-KYC current ho. Ye aakhri wali
        sabse dhokha deti hai: screen par green dikhta hai, umeed bandhti hai, aur paisa phir
        bhi nahi aata.
      </p>

      <p>
        In teeno mein se koi bhi problem ho to pehle use theek karayein, uske baad hi kist ka
        intezaar karein. Ulta mat karna — log yahi ulta karte hain, maine dekha hai — pehle intezaar,
        baad mein sudhaar. Ye kaam CSC, bank branch aur tehsil se ho jaate hain. Ek baar theek
        hone par saalon chalte hain, toh der mat karo.
      </p>

      <h2>Chaar Cheezein Jo Haath Ke Paas Rehni Chahiye</h2>

      <p>
        Portal koi bhi ho, poochhi jaane wali cheezein lagbhag wahi hoti hain. Ek baar ye
        chaar cheezein ek jagah likh kar rakh lein to har season ki jaanch mein
        itna time nahi lagta: apna panjikaran/application number (har jagah ka apna
        format hai), Aadhaar number, bank khaate ke aakhri chaar ank, aur wo mobile number
        jo record mein darj hai. West Bengal mein Aadhaar ki jagah Voter ID (EPIC) chalta
        hai — wahan wo number likhein.
      </p>

      <p>
        Aur ek aadat jo har jagah kaam aati hai: screen ka screenshot le lein,
        khaas kar jab koi problem dikhe. Baad mein CSC ya krishi karyalay mein
        baat karte waqt “us din site ye dikha rahi thi” ka saboot yahi screenshot hota
        hai. Data update hota rehta hai, aur purani screen dobara nahi milti.
      </p>

      <h2>Aapka Rajya List Mein Nahi Hai?</h2>

      <p>
        Uttar Pradesh, Bihar, Punjab, Haryana jaise kai bade pradeshon mein abhi PM Kisan jaisi
        judaa rajya-level income-support scheme nahi chal rahi. Iska matlab ye nahi ki wahan
        annadata ke liye kuch nahi hai. Ye sarkarein doosre raaste se madad deti hain: kahin bijli
        subsidy, kahin fasal bonus, kahin karz maafi ke rounds.
      </p>

      <p>
        Aise mein do kaam karein. Pehla, kendriya record durust rakhein, kyunki wahi
        base hai. Doosra, apne krishi vibhag ki site par current schemes ka page
        dekhte rahein, kyunki naye elections aur naye budget ke saath nayi schemes aati rehti
        hain. Jab bhi kahin nayi income-support yojana shuru hogi, hum is page ko update
        kar denge.
      </p>

      <h2>Zameen Do Pradeshon Mein Ho To Kya Hota Hai</h2>

      <p>
        Border ke gaon mein ye sawaal aam hai — kuch zameen idhar, kuch udhar.
        Kis ka claim kahan banega? Kendriya grant par is se farak nahi padta; wo
        poore desh ki scheme hai aur parivaar ko ek hi grant deti hai, zameen chahe jahan ho.
        Lekin rajya ka niyam judaa hai: har sarkar
        sirf apne yahan ki zameen aur apne nivasi ko ginti hai. Matlab MP ki zameen
        par MP ki scheme ka claim banega aur Rajasthan wali zameen us hisaab se Rajasthan
        ke niyam par jaayegi — lekin nivasi to aap ek hi jagah ke hain, isliye vyavhaar
        mein aam taur par ek hi yojana milti hai. Aise case mein apne dono taraf
        ke patwari se record saaf karwa lena hi sabse pehla kadam hai.
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

      <h2>Rajya Kisan Yojana — Common Doubts</h2>

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
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Pradesh-war comparison — jo uljhanein sabse common hain</p>
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
        <strong>Fraud se bachein:</strong> Koi bhi sarkari yojana registration ya status theek
        karne ke naam par paise nahi maangti. Koi "fees" maange to wo fraud hai. Shikayat apne
        krishi vibhag ya panchayat karyalay mein darj karein. Ek aur aam tareeka
        WhatsApp par ghoomta "nayi yojana, itna paisa milega" wala message hai jisme link kisi
        private website ka hota hai — aisi kisi bhi khabar ko pehle apne yahan ki sarkari
        site par milaayein. Sarkari announcement hamesha .gov.in ya .nic.in wale pate par
        milti hai, aur Aadhaar ya bank ki jaankari kisi link par bharne ki zaroorat kabhi
        nahi hoti. Jo scheme is page ki list mein nahi hai aur portal par bhi nahi dikh rahi,
        use lekar CSC ya kisi agent ko paisa dena seedha nuksan hai.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Amounts aur niyam har rajya ke cabinet decisions se badal sakte hain. Final jaankari
          ke liye apne yahan ki official site ya krishi karyalay se confirm karein.
        </p>
      </div>

    </article>
  );
}
