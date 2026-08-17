import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojna/krishak-unnati-yojana-status-check-2026';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
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
    q: 'Krishak Unnati Yojana ka paisa kis hisaab se milta hai?',
    a: 'Ye antar rashi (differential) hai — jo dhan aapne samiti mein support price par becha, uske total daam ko ₹3,100 prati quintal tak pahunchane ke liye state sarkar bachi hui raqam alag se deti hai. Matlab jitna dhan becha, utna hi hisaab. Zameen ke rakbe par seedha nahi, bechi gayi maatra par payment banti hai — aur kharidi ki seema 21 quintal prati acre hai.',
  },
  {
    q: 'Is baar paisa ek saath kyun aaya, kiston mein kyun nahi?',
    a: 'Pehle antar rashi kai kiston mein aati thi. 2026 se sarkar ne ise ekmusht (single installment) kar diya — Kharif 2025-26 ki poori raqam Holi se pehle ek hi baar mein release karne ka faisla cabinet ne liya tha. Isliye agar aap purane pattern ka intezaar kar rahe hain ki "doosri kist kab aayegi", to samajh lein ki ab doosri kist hoti hi nahi.',
  },
  {
    q: 'Maine dhan society mein becha, token bhi kata — phir bhi paisa nahi aaya. Kahan atka?',
    a: 'Pehla kaam — apni samiti se kharidi ki entry confirm karein ki aapke naam par kitne quintal darj hue. Entry sahi hai to mamla bank side ka hai: account band, dormant, ya Aadhaar se link na hona payment lautne ki sabse aam wajahein hain. Kharidi ki entry hi galat ya adhoori hai, to sudhaar samiti aur khadya vibhag ke record se hi hoga — bank ke chakkar se kuch nahi milega.',
  },
  {
    q: 'Kya bataidar ya adhiya par kheti karne wale ko bhi antar rashi milti hai?',
    a: 'Payment usi kisan ko jaati hai jiske naam par dhan ki kharidi samiti mein darj hui hai. Registration zameen ke record se juda hota hai, isliye vyavhaar mein raqam usi ke khaate mein aati hai jiska naam kisan panjiyan mein hai. Adhiya ka aapsi hisaab kisan aur bataidar ke beech ka mamla rehta hai — scheme usme dakhal nahi deti.',
  },
  {
    q: 'Naye ₹15,000 prati acre wale faayde ka status alag se kahan dikhega?',
    a: 'Wo alag component hai — Kharif 2026 se dhan chhodkar doosri fasal (dalhan, tilhan, makka, kodo, kutki, ragi, kapas) lene par input sahayata milegi. Iska hisaab AgriStack registration aur digital crop survey se chalega, isliye pehla kadam apna farmer registration aur girdawari-jaisi fasal entry sahi karwana hai. Bina digital survey mein fasal darj hue claim banta hi nahi.',
  },
  {
    q: 'Antar rashi par koi tax ya katauti hoti hai kya?',
    a: 'Scheme ki taraf se koi katauti nahi hoti — jitni raqam banti hai utni hi DBT se khaate mein aati hai. Agar khaate mein kam raqam dikhe to wajah bank side ki ho sakti hai: minimum balance charge, loan ki EMI ka auto-debit, ya KCC ki vasooli. Passbook ki entry dhyan se padhein — scheme ka credit alag line mein dikhta hai.',
  },
  {
    q: 'Samiti wale kehte hain "record bhej diya", bank kehta hai "kuch nahi aaya" — kis par bharosa karein?',
    a: 'Dono sach bol sakte hain, kyunki beech mein teesri kadi hai — treasury se payment file release hona. Samiti ka kaam kharidi ka record bhejna hai, bank ka kaam aaya hua paisa credit karna. Release ke baad bhi 3-5 kaam ke din lag jaate hain. Itne din baad bhi kuch na aaye to apne kshetra ke khadya vibhag karyalay mein kharidi ID ke saath likhit shikayat karein.',
  },
];

export default function KrishakUnnatiYojanaStatusCheck({ article }: { article: RajyaYojanaArticleMeta }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Krishak Unnati Yojana Status Check 2026: Antar Rashi, ₹3,100 Ka Hisaab Aur Naya ₹15,000 Wala Faayda
      </h1>

      <Fig
        src="hero.webp"
        alt="Chhattisgarh ka kisan apne pake dhan ke khet mein katayi ki hui baaliyan haath mein liye khada hai"
        caption="Krishak Unnati Yojana — Chhattisgarh ke dhan bechne wale kisanon ki antar-rashi scheme"
        priority
      />

      <p>
        Bhai, Chhattisgarh mein dhan bechna aadha kaam hai. Baaki aadha? Intezaar.
      </p>

      <p>
        Antar rashi kab aayegi, kitni banegi, aur agar na aaye to poochhein kis se — yahi
        teen sawaal har season lautkar aate hain. Krishak Unnati Yojana ka dhaancha baaki
        rajyon ki kisan-nidhi schemes se alag hai: yahan paisa zameen ke rakbe par nahi,
        samiti mein bechi gayi dhan ki maatra par banta hai. Isliye status
        samajhne ka tareeka bhi alag hai. Is page par wahi poora raasta hai — kharidi ki
        entry se lekar passbook ke credit tak, aur Kharif 2026 se shuru hue naye ₹15,000
        prati acre wale badlaav tak.
      </p>

      <InfoBox type="update" date="04/08/2026">
        <strong>Do badi baatein:</strong> Kharif 2025-26 ki antar rashi is baar ekmusht release
        hui — lagbhag 25 lakh kisanon ko. Aur cabinet ne Kharif 2026 se scheme ka naya roop
        manzoor kiya hai: dhan ki jagah doosri fasal lene par ₹15,000 prati acre input
        sahayata. Dono ka hisaab neeche alag-alag samjhaya gaya hai.
      </InfoBox>

      <h2>Season Ki Poori Timeline — Ek Kisan Ki Nazar Se</h2>

      <p>
        Scheme ko kagaz par samajhna ek baat hai, season ke hisaab se jeena doosri. Neeche
        wahi kram hai jis kram mein ek aam kisan ka saal chalta hai — kaunsa kaam kis mausam
        mein aata hai aur kis kadam par laaparwahi baad mein bhaari padti hai.
      </p>

      <p>
        <strong>Bawai se pehle:</strong> kisan panjiyan ki jaanch. Naya khaata kharida ho,
        batwaara hua ho, ya pichle saal koi entry galat rahi ho — sudhaar ka sahi waqt yahi
        hai. Season shuru hone ke baad panjiyan mein badlav karwana lambi line ka kaam ban
        jaata hai, aur kharidi ke waqt tak galti reh gayi to uska asar seedha is raqam
        par padta hai.
      </p>

      <p>
        <strong>Kharidi ke dauraan:</strong> token, taul, parchi — teeno ka record apne paas.
        Samiti par bheed ke dinon mein entry ki galti sabse zyada hoti hai. Taul ke saath hi
        parchi ki maatra apni aankhon se milaayein; ghar aakar milaane par galti pakdi
        bhi jaaye to saabit karna mushkil ho jaata hai. Ek hi season mein kai baar dhan
        bechne wale kisan har trip ki parchi alag sambhaalein — ye raqam kul maatra par
        banti hai, aur ek parchi kho jaana seedha nuksan hai.
      </p>

      <p>
        <strong>Kharidi ke baad, release se pehle:</strong> intezaar ka daur. Lekin khaali
        intezaar nahi. Isi beech bank ka kaam nipta lein — khaata active hai ya nahi, Aadhaar
        seeding hui hai ya nahi, mobile number bank record mein current hai ya nahi. Release
        ke din ye sab pehle se durust ho to paisa seedha aata hai. Release ke baad bhaagdaud
        shuru ki to? Hafte nikal jaate hain, aur haath mein sirf token number reh jaata hai.
      </p>

      <p>
        <strong>Release ke baad:</strong> passbook ya statement mein credit ki jaanch, aur
        raqam ka apna hisaab. Bechi gayi kul maatra aapko pata hai, prati quintal ka antar
        sarkar ne bata diya hai — dono ko guna karke apna anumaanit figure nikaal lein.
        Credit us se kam aaye to farak ki wajah dhoondhne ka aadhaar yahi hisaab banta hai.
      </p>

      <h2>Kharif 2026 Se Naya Roop — ₹15,000 Prati Acre Ka Matlab</h2>

      <p>
        June 2026 mein cabinet ne scheme ka naya swaroop manzoor kiya. Ab dhan ke saath-saath
        ek doosra raasta bhi khula hai: jo kisan dhan ki jagah <strong>dalhan, tilhan, makka,
        kodo, kutki, ragi ya kapas</strong> lagayega, use <strong>₹15,000 prati acre</strong> ki
        input sahayata milegi. Kyun? Sarkar ka maqsad saaf hai — paani ki khapat kam karna
        aur kisan ki aamdani ko sirf dhan ke bharose se nikaalna. Dhan mein paani bhi zyada
        lagta hai aur mandi ka jokhim bhi ek hi fasal par tika rehta hai.
      </p>

      <Fig
        src="ragi-millet-crop.webp"
        alt="Kisan apne khet mein ragi ki hari fasal ki baaliyan jaanch raha hai"
        caption="Kodo, kutki, ragi jaise millets ab ₹15,000 prati acre wale naye component mein aate hain"
      />

      <p>
        Is naye faayde ka system bhi naya hai. Ye purani samiti-kharidi wali chain se nahi,
        balki <strong>Integrated Farmer Portal, AgriStack registration aur digital crop
        survey</strong> se chalega. Teen cheezein pehle se durust honi chahiye: farmer
        registration, zameen ka record, aur survey mein darj fasal. Fasal boi kuch aur,
        survey mein darj kuch aur — claim wahin ruk jaayega. Ruk kya, banega hi nahi.
        Naye season mein sabse samajhdari ka kaam yahi hai ki bawai ke baad crop survey ki
        entry apne saamne confirm karwa lein.
      </p>

      <InfoBox type="warning">
        Differential wala component aur ₹15,000 wala component do alag cheezein hain. Dono ka
        paisa, process aur record alag chalega. Kisi agent ke ye kehne par ki "dono ek saath
        dilwa denge, kharcha lagega" — samajh jaayein ki baat galat hai. Scheme mein kahin
        koi fees nahi lagti.
      </InfoBox>

      <h2>Kagaz Jo Har Season Kaam Aate Hain</h2>

      <p>
        Ek cheez reh gayi — in kagzon ki photo phone mein bhi rakh lijiye. Aap soch rahe
        honge ki original hi kaafi hai; hai, par mandi mein original nikaalna hamesha aasan
        nahi hota. Aur bas, yehi tha.
      </p>

      <Fig
        src="kisan-documents.webp"
        alt="Mez par rakhe kisan ke kagzaat — zameen ka record, passbook aur notebook"
        caption="Kisan code, taul parchi, passbook — teen kagaz jo har shikayat mein sabse pahle maange jaate hain"
      />

      <ul>
        <li>
          <strong>Kisan panjiyan / kisan code</strong> — kharidi aur payment dono isi se
          judte hain. Number kahin likh kar rakhein.
        </li>
        <li>
          <strong>Token aur taul parchi</strong> — bechi gayi maatra ka ekmatra saboot.
        </li>
        <li>
          <strong>Aadhaar-linked bank passbook</strong> — DBT isi khaate mein aayega; seeding
          bank jaakar ek baar confirm kara lein.
        </li>
        <li>
          <strong>Zameen ka record (B1/khasra)</strong> — naye ₹15,000 wale component mein
          AgriStack registration ke liye zaroori.
        </li>
      </ul>

      <h2>Ye Scheme Baaki Kisan Yojanaon Se Alag Kyun Hai</h2>

      <p>
        PM Kisan ya Rythu Bharosa jaise schemes mein raqam fix hoti hai — itne acre, itna
        paisa. Yahan ganit doosra hai. Kendra sarkar dhan ka support price tay karti hai,
        aur Chhattisgarh sarkar ne kisanon se vaada kiya hai ki unke dhan ka daam
        <strong> ₹3,100 prati quintal</strong> tak pahunchega. Support price aur ₹3,100 ke
        beech ka jo antar hai, wahi antar rashi ke roop mein alag se khaate mein aata hai.
        Jaan lo to hisaab aasan hai, na jaano to har saal confusion.
      </p>

      <p>
        Seedha matlab? Jitna zyada dhan becha, utni badi raqam. Lekin ek seema ke
        saath — samiti prati acre <strong>21 quintal tak</strong> hi kharidti hai. Isi wajah se
        do kisanon ki raqam kabhi ek jaisi nahi hoti. "Mere padosi ko itna mila, mujhe kam
        kyun?" — is sawaal ka jawab gusse mein nahi, bechi gayi maatra ke record mein milta
        hai. Record kholo, toh hisaab saaf, bas.
      </p>

      <SchemeTable>
        <tr>
          <th>Baat</th>
          <th>Hisaab</th>
        </tr>
        <tr>
          <td>Dhan ka kul daam (support price + antar rashi)</td>
          <td>₹3,100 prati quintal</td>
        </tr>
        <tr>
          <td>Kharidi ki seema</td>
          <td>21 quintal prati acre</td>
        </tr>
        <tr>
          <td>Payment ka tareeka</td>
          <td>DBT — seedha bank khaate mein, 2026 se ekmusht</td>
        </tr>
        <tr>
          <td>Kharif 2025-26 mein kharidi</td>
          <td>Lagbhag 141 lakh metric tonne, 25 lakh se zyada kisanon se</td>
        </tr>
      </SchemeTable>

      <Fig
        src="dhan-kharidi-kendra.webp"
        alt="Chhattisgarh ke dhan kharidi kendra par bori mein bhara dhan aur taul ke intezaar mein khade kisan"
        caption="Antar rashi ka poora hisaab samiti ki kharidi entry se shuru hota hai"
      />

      <h2>Antar Rashi Ka Apna Hisaab Kaise Lagayein</h2>

      <p>
        Credit aane se pehle apna anumaanit figure nikaal lena sabse kaam ki aadat hai.
        Do numbers chahiye, bas. Ek — bechi gayi kul maatra (taul parchiyon ka jod, quintal
        mein). Do — us saal ki prati quintal antar rashi (support price aur ₹3,100 ka farak,
        jo release ke waqt announcements mein saaf likha hota hai). Dono ka guna kar lein —
        wahi aapka differential hai. Misaal: 40 quintal becha, antar ₹800 prati quintal
        nikla, to khaate mein ₹32,000 aana chahiye. Na kam, na zyada.
      </p>

      <p>
        Credit is hisaab se kam aaye to farak do hi jagah ho sakta hai — ya kharidi ki
        entry mein maatra kam darj hai (samiti ka mamla), ya bank side mein koi katauti hui
        hai (passbook ki debit entries dekhein). Farak jahan ka hai, shikayat wahin le
        jaayein; galat darwaze par khada hona hi sabse zyada waqt kha jaata hai.
      </p>

      <h2>Passbook Mein Credit Kaise Pehchanein</h2>

      <p>
        Ye credit passbook mein ek alag entry ke roop mein dikhta hai — dhan
        bechne ke waqt mila support price pehle hi aa chuka hota hai, isliye do alag-alag
        credit hona bilkul normal hai. Yahan ek aam chook hoti hai. Kai kisan support price
        ki entry dekh kar samajh lete hain ki poora paisa aa gaya, aur differential ka
        intezaar hi chhod dete hain. Baad mein pata chale to afsos hi bachta hai.
      </p>

      <Fig
        src="bank-passbook-entry.webp"
        alt="Kisan bank counter par apni passbook ki entries check kar raha hai"
        caption="Support price aur antar rashi — passbook mein do alag credit entries banti hain"
      />

      <p>
        Passbook update karwate waqt entry ki date bhi dekhein. Release ke baad bhi alag-alag
        banks mein credit 3-5 kaam ke din aage-peechhe ho sakta hai. SMS na aana koi nishani
        nahi hai — kai baar credit aa jaata hai aur SMS aata hi nahi, kyunki mobile number
        bank record mein purana darj hota hai.
      </p>

      <h2>Status Check Ka Sahi Raasta — Teen Kadiyan</h2>

      <p>
        Paisa nahi aaya to sabse pehle kahan jaate hain log? Bank. Aur wahi galti hai.
        Payment ki file teen kadiyon se hokar chalti hai — samiti, sarkar, phir bank.
        Kaunsi kadi par mamla atka hai, ye dekh lo to aadhe chakkar bach jaate hain,
        aur aadhi jhunjhlahat bhi.
      </p>

      <p>
        Mandi mein khade-khade ek kisan ne pucha tha, aur baat wahin khul gayi — Mahasamund ka
        tha, 38 quintal becha tha,
        par samiti ki entry mein 30 hi darj hua. Uske paas taul parchiyan sambhali hui theen,
        isliye khadya vibhag mein baat ek hi chakkar mein ban gayi. Parchi na hoti to shikayat
        zubaani reh jaati.
      </p>

      <p>
        <strong>Pehli kadi — samiti ki kharidi entry.</strong> Jis society mein dhan becha,
        wahan aapke kisan panjiyan par kitne quintal darj hue — yahi aapke hisaab ka
        aadhaar hai. Token, taul parchi aur kharidi ki entry teeno ka aapas mein milna zaroori
        hai. Entry hi kam darj hui to payment bhi kam banegi, aur iska sudhaar sirf samiti
        aur khadya vibhag ke level par hota hai.
      </p>

      <p>
        <strong>Doosri kadi — sarkar se release.</strong> Kharidi ka season poora hone ke baad
        state payment ki file taiyaar karti hai. 2026 mein ye release Holi se pehle
        ekmusht hui. Release ki khabar akhbaar aur sarkari announcements mein aati hai — us
        din se apne khaate par nazar rakhna shuru karein, usse pehle intezaar hi ekmatra kaam hai.
      </p>

      <p>
        <strong>Teesri kadi — bank credit.</strong> Release ke baad DBT se paisa khaate mein
        aata hai. Yahan atakne ki wajahein wahi puraani hain: band ya dormant khaata, Aadhaar
        seeding ka na hona, ya galat account number darj hona. Chhoti-chhoti cheezein, par
        inhi mein paisa mahinon latak jaata hai.
      </p>

      <Fig
        src="payment-status-phone.webp"
        alt="Kisan apne phone par sarkari portal kholkar dhan kharidi aur bhugtan ki jaankari dekh raha hai"
        caption="Kharidi aur bhugtan ki jaankari khadya vibhag ke portal par milti hai — kisan code saath rakhein"
      />

      <p>
        Online dekhne ke liye khadya vibhag ka portal <code>khadya.cg.nic.in</code> kaam aata
        hai, jahan dhan kharidi se judi kisan-war jaankari milti hai. Apna <strong>kisan
        code</strong> (panjiyan number) saath rakhein — search isi se chalti hai. Milte-julte
        naam ki private websites se bachein; jaankari hamesha <code>.gov.in</code> ya{' '}
        <code>.nic.in</code> wale pate se hi lein.
      </p>

      <ExternalLinkButton
        href={article.officialPortal}
        label="Khadya Vibhag portal par kharidi ki jaankari dekhein"
      />

      <InfoBox type="tip">
        Taul parchi aur token ki photo usi din phone mein utaar lein jis din dhan bechein.
        Raqam mein farq dikhne par yahi do kagaz sabse zyada kaam aate hain — bina
        inke shikayat sirf zubaani reh jaati hai.
      </InfoBox>

      <h2>Paisa Na Aane Ki Aam Wajahein — Aur Kiska Darwaza Khatkhatayein</h2>

      <SchemeTable>
        <tr>
          <th>Lakshan</th>
          <th>Asli wajah</th>
          <th>Kahan jaayein</th>
        </tr>
        <tr>
          <td>Kharidi entry mein quintal kam darj</td>
          <td>Taul ya entry ki galti</td>
          <td>Samiti + khadya vibhag, taul parchi ke saath</td>
        </tr>
        <tr>
          <td>Entry sahi, credit zero</td>
          <td>Band/dormant khaata ya Aadhaar seeding nahi</td>
          <td>Apni bank branch — KYC aur seeding karwayein</td>
        </tr>
        <tr>
          <td>Padosi ko mila, aapko nahi</td>
          <td>Bank-war processing ka farq</td>
          <td>3-5 din intezaar, phir branch</td>
        </tr>
        <tr>
          <td>Credit aaya par raqam kam lagi</td>
          <td>Loan/EMI ka auto-debit ya bank charge</td>
          <td>Passbook ki debit entries milaayein</td>
        </tr>
      </SchemeTable>

      <Fig
        src="samiti-office.webp"
        alt="Gaon ki sahkari samiti ke daftar mein kisan clerk se apni kharidi entry ke baare mein baat kar rahe hain"
        caption="Kharidi record ka sudhaar samiti ke level par hi hota hai — bank wahan kuch nahi kar sakta"
      />

      <h2>Aam Galtiyan Jo Har Season Dohraayi Jaati Hain</h2>

      <p>
        Khadya vibhag ke daftar mein aane wali shikayaton ka bada hissa kuch hi tarah ki
        galtiyon se banta hai. Wahi galtiyan, har saal, naye chehron ke saath. Pehle se
        jaan lena aadhi pareshani se bacha leta hai.
      </p>

      <ul>
        <li>
          <strong>Parchi ko raddi samajhna.</strong> Taul parchi kharidi ke mahinon baad kaam
          aati hai, jab paise ka farak dikhta hai. Jo kisan parchi sambhaal kar nahi
          rakhte, unki shikayat zubaani reh jaati hai.
        </li>
        <li>
          <strong>Doosre ke khaate mein bechna.</strong> Apni panjiyan ki seema ke baad
          rishtedaar ya padosi ki panjiyan par dhan bechna — payment us ke khaate mein
          jaayegi, aur wapas lena aapsi mamla ban jaata hai jisme scheme koi madad nahi
          karti.
        </li>
        <li>
          <strong>Band khaata dena.</strong> Kai kisan panjiyan mein wahi purana khaata
          chhod dete hain jo kabhi ka band ya dormant ho chuka hai. DBT wahan se laut jaati
          hai aur credit ka intezaar bekar chalta rehta hai.
        </li>
        <li>
          <strong>SMS ko hi saboot maanna.</strong> SMS aana ya na aana bank ke record par
          nirbhar hai. Credit ki pushti hamesha passbook ya statement se karein, message se
          nahi.
        </li>
        <li>
          <strong>Agent ke bharose file chhodna.</strong> Scheme mein kisi agent ki koi
          bhoomika hai hi nahi. Samiti, khadya vibhag aur bank — teeno kaam kisan khud ya
          parivaar ka koi sadasya kar sakta hai, bina kisi kharch ke.
        </li>
      </ul>

      <h2>Shikayat Likhwani Ho To Kaise — Kaam Ka Tareeka</h2>

      <p>
        Zubaani shikayat ka koi record nahi banta. Kabhi nahi. Isliye jab bhi baat samiti ya
        vibhag tak le jaani ho, likhit mein dein aur paavti (receiving) lein. Shikayat mein
        teen cheezein likhna na chhodein: apna kisan code, kharidi ki tareekh aur maatra (parchi
        ke hisaab se), aur samasya ek line mein — entry kam darj hai, credit nahi aaya, ya
        raqam kam aayi. Lambi kahani likhne ki zaroorat nahi; saaf baat jaldi sunee jaati hai.
      </p>

      <p>
        Kis level par kaunsi baat sunayi jaati hai, ye bhi tay hai. Kharidi ki entry ka
        mamla samiti aur khadya vibhag ke kshetra karyalay ka hai. Bank credit ka mamla
        apni branch ka. Aur dono jagah se jawab na mile to jila level par khadya vibhag ya
        collector karyalay mein wahi likhit shikayat, purani paavti ke saath, aage badhayi
        ja sakti hai. Har kadam ka kagaz sambhaal kar rakhein — agla kadam usi par khada
        hota hai.
      </p>

      <h2>Zameen Doosre Rajya Mein Hai?</h2>

      <p>Har rajya apni kisan yojana alag tarah chalata ha. Ek-ek karke dekh lijiye:</p>

      <ul>
        <li>
          <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
            Madhya Pradesh — CM Kisan Kalyan Yojana ki kist aur SAARA portal
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/odisha-cm-kisan-status-check-2026">
            Odisha — CM Kisan ka status aur bhoomiheen wala alag track
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/rythu-bharosa-status-check-2026">
            Telangana — Rythu Bharosa ka per-acre hisaab
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
            Sabhi rajyon ki kisan yojana ka comparison ek hi table mein
          </Link>
        </li>
      </ul>

      <h2>Krishak Unnati Yojana — Kuch Aur Sawaal</h2>

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
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Krishak Unnati Yojana — jo sawaal har chaupal par uthte hain</p>
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
        <strong>Fraud se bachein:</strong> Paisa dilwane, naam judwane ya "file aage
        badhwane" ke naam par koi bhi paisa maange to dena nahi hai — ye scheme poori tarah
        free hai. Aisi maang ki shikayat apne kshetra ke khadya vibhag karyalay ya jila
        collector office mein karein.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Is lekh ka maqsad sirf rasta dikhana hai. Raqam ya patrata se juda koi bhi antim nirnay official portal aur apne RAEO se hi confirm karein.
        </p>
      </div>

    </article>
  );
}
