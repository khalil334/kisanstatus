import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import { FAQBlock } from '@/components/ArticleShared';

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
    a: 'Pehle antar rashi kai kiston mein aati thi. 2026 se sarkar ne ise ekmusht (single installment) kar diya — Kharif 2025-26 ki poori antar rashi Holi se pehle ek hi baar mein release karne ka faisla cabinet ne liya tha. Isliye agar aap purane pattern ka intezaar kar rahe hain ki "doosri kist kab aayegi", to samajh lein ki ab doosri kist hoti hi nahi.',
  },
  {
    q: 'Maine dhan society mein becha, token bhi kata — phir bhi paisa nahi aaya. Kahan atka?',
    a: 'Sabse pehle apni samiti se kharidi ki entry confirm karein — aapke naam par kitne quintal darj hue. Entry sahi hai to mamla bank side ka hai: account band, dormant, ya Aadhaar se link na hona payment lautne ki sabse aam wajahein hain. Kharidi ki entry hi galat ya adhoori hai, to sudhaar samiti aur khadya vibhag ke record se hi hoga — bank ke chakkar se kuch nahi milega.',
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
    a: 'Scheme ki taraf se koi katauti nahi hoti — jitni antar rashi banti hai utni hi DBT se khaate mein aati hai. Agar khaate mein kam raqam dikhe to wajah bank side ki ho sakti hai: minimum balance charge, loan ki EMI ka auto-debit, ya KCC ki vasooli. Passbook ki entry dhyan se padhein — scheme ka credit alag line mein dikhta hai.',
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
        Chhattisgarh mein dhan bechna aadha kaam hai. Baaki aadha kaam hai us ke baad ka
        intezaar — antar rashi kab aayegi, kitni banegi, aur agar na aaye to poochhein kis se.
        Krishak Unnati Yojana ka dhaancha baaki rajyon ki kisan-nidhi schemes se alag hai:
        yahan paisa zameen ke rakbe par nahi, <strong>samiti mein bechi gayi dhan ki maatra</strong> par
        banta hai. Isliye status samajhne ka tareeka bhi alag hai. Is page par wahi poora
        raasta hai — kharidi ki entry se lekar passbook ke credit tak, aur Kharif 2026 se
        shuru hue naye ₹15,000 prati acre wale badlaav tak.
      </p>

      <InfoBox type="update" date="4 August 2026">
        <strong>Do badi baatein:</strong> Kharif 2025-26 ki antar rashi is baar ekmusht release
        hui — lagbhag 25 lakh kisanon ko. Aur cabinet ne Kharif 2026 se scheme ka naya roop
        manzoor kiya hai: dhan ki jagah doosri fasal lene par ₹15,000 prati acre input
        sahayata. Dono ka hisaab is article mein alag-alag samjhaya gaya hai.
      </InfoBox>

      <h2>Ye Scheme Baaki Kisan Yojanaon Se Alag Kyun Hai</h2>

      <p>
        PM Kisan ya Rythu Bharosa jaise schemes mein raqam fix hoti hai — itne acre, itna
        paisa. Krishak Unnati Yojana ka ganit doosra hai. Kendra sarkar dhan ka support price
        tay karti hai, aur Chhattisgarh sarkar ne kisanon se vaada kiya hai ki unke dhan ka
        daam <strong>₹3,100 prati quintal</strong> tak pahunchega. Support price aur ₹3,100 ke
        beech ka jo antar hai, wahi antar rashi ke roop mein alag se khaate mein aata hai.
      </p>

      <p>
        Iska seedha matlab: jitna zyada dhan becha, utni badi antar rashi. Lekin ek seema ke
        saath — samiti prati acre <strong>21 quintal tak</strong> hi kharidti hai. Isi wajah se
        do kisanon ki raqam kabhi ek jaisi nahi hoti, aur "mere padosi ko itna mila, mujhe
        kam kyun" wale sawaal ka jawab aksar bechi gayi maatra ke record mein chhupa hota hai.
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

      <h2>Status Check Ka Sahi Raasta — Teen Kadiyan</h2>

      <p>
        Log seedha bank jaate hain, jabki payment ki file teen kadiyon se hokar chalti hai.
        Kaunsi kadi par mamla atka hai, ye samajh lein to aadhe chakkar bach jaate hain.
      </p>

      <p>
        <strong>Pehli kadi — samiti ki kharidi entry.</strong> Jis society mein dhan becha,
        wahan aapke kisan panjiyan par kitne quintal darj hue — yahi aapki antar rashi ka
        aadhaar hai. Token, taul parchi aur kharidi ki entry teeno ka aapas mein milna zaroori
        hai. Entry hi kam darj hui to payment bhi kam banegi, aur iska sudhaar sirf samiti
        aur khadya vibhag ke level par hota hai.
      </p>

      <p>
        <strong>Doosri kadi — sarkar se release.</strong> Kharidi ka season poora hone ke baad
        state antar rashi ki file taiyaar karti hai. 2026 mein ye release Holi se pehle
        ekmusht hui. Release ki khabar akhbaar aur sarkari announcements mein aati hai — us
        din se apne khaate par nazar rakhna shuru karein, usse pehle intezaar hi ekmatra kaam hai.
      </p>

      <p>
        <strong>Teesri kadi — bank credit.</strong> Release ke baad DBT se paisa khaate mein
        aata hai. Yahan atakne ki wajahein wahi puraani hain: band ya dormant khaata, Aadhaar
        seeding ka na hona, ya galat account number darj hona.
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
        Antar rashi mein farq dikhne par yahi do kagaz sabse pehle kaam aate hain — bina
        inke shikayat sirf zubaani reh jaati hai.
      </InfoBox>

      <h2>Passbook Mein Credit Kaise Pehchanein</h2>

      <p>
        Antar rashi ka credit passbook mein ek alag entry ke roop mein dikhta hai — dhan
        bechne ke waqt mila support price pehle hi aa chuka hota hai, isliye do alag-alag
        credit hona bilkul normal hai. Kai kisan support price ki entry dekh kar samajh lete
        hain ki poora paisa aa gaya, aur antar rashi ka intezaar hi chhod dete hain.
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

      <h2>Kharif 2026 Se Naya Roop — ₹15,000 Prati Acre Ka Matlab</h2>

      <p>
        June 2026 mein cabinet ne scheme ka naya swaroop manzoor kiya. Ab dhan ke saath-saath
        ek doosra raasta bhi khula hai: jo kisan dhan ki jagah <strong>dalhan, tilhan, makka,
        kodo, kutki, ragi ya kapas</strong> lagayega, use <strong>₹15,000 prati acre</strong> ki
        input sahayata milegi. Sarkar ka maqsad saaf hai — paani ki khapat kam karna aur
        kisan ki aamdani ko sirf dhan ke bharose se nikaalna.
      </p>

      <Fig
        src="ragi-millet-crop.webp"
        alt="Kisan apne khet mein ragi ki hari fasal ki baaliyan jaanch raha hai"
        caption="Kodo, kutki, ragi jaise millets ab ₹15,000 prati acre wale naye component mein aate hain"
      />

      <p>
        Is naye faayde ka system bhi naya hai. Ye purani samiti-kharidi wali chain se nahi,
        balki <strong>Integrated Farmer Portal, AgriStack registration aur digital crop
        survey</strong> se chalega. Matlab teen cheezein pehle se durust honi chahiye: aapka
        farmer registration, zameen ka record, aur survey mein darj fasal. Fasal boi kuch
        aur, survey mein darj kuch aur — to claim wahin ruk jaayega. Naye season mein sabse
        samajhdari ka kaam yahi hai ki bawai ke baad crop survey ki entry apne saamne
        confirm karwa lein.
      </p>

      <InfoBox type="warning">
        Antar rashi wala component aur ₹15,000 wala component do alag cheezein hain. Dono ka
        paisa, process aur record alag chalega. Kisi agent ke ye kehne par ki "dono ek saath
        dilwa denge, kharcha lagega" — samajh jaayein ki baat galat hai. Scheme mein kahin
        koi fees nahi lagti.
      </InfoBox>

      <h2>Kagaz Jo Har Season Kaam Aate Hain</h2>

      <Fig
        src="kisan-documents.webp"
        alt="Mez par rakhe kisan ke kagzaat — zameen ka record, passbook aur notebook"
        caption="Kisan code, taul parchi, passbook — teen kagaz jo har shikayat mein sabse pehle maange jaate hain"
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
          bank jaakar ek baar zaroor confirm karein.
        </li>
        <li>
          <strong>Zameen ka record (B1/khasra)</strong> — naye ₹15,000 wale component mein
          AgriStack registration ke liye zaroori.
        </li>
      </ul>

      <h2>Chhattisgarh Se Bahar Ke Kisan Yahan Dekhein</h2>

      <p>
        Har rajya apni kisan yojana alag tarah chalata hai. Aapki zameen doosre rajya mein
        hai to uska hisaab wahan ke page par milega:
      </p>

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

      <h2>Krishak Unnati Yojana — Aksar Poochhe Jaane Wale Sawaal</h2>

      <FAQBlock faqs={FAQS_DATA} caption="Krishak Unnati Yojana FAQ 2026" />

      <h2>Related Articles</h2>
      <ul>
        <li>
          <Link href="/articles/PmKisan24viKist2026">
            PM Kisan 24vi Kist 2026 — Next Installment Date aur Status
          </Link>
        </li>
        <li>
          <Link href="/articles/PmKisanMasterGuide2026">
            PM Kisan Master Guide 2026 — registration se payment tak poora process
          </Link>
        </li>
        <li>
          <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega">
            Pati-patni dono ko PM Kisan milega ya nahi — family rule
          </Link>
        </li>
      </ul>

      <h2>Aakhri Baat</h2>

      <p>
        Krishak Unnati Yojana mein status ka matlab portal ki ek screen nahi — teen record ka
        aapas mein milna hai: samiti ki kharidi entry, sarkar ki release, aur bank ka credit.
        Teeno ko usi kram mein check karein to wajah hamesha pakad mein aa jaati hai. Aur
        Kharif 2026 se jo naya raasta khula hai, usme sabse pehla kadam kagzi nahi, digital
        hai — AgriStack registration aur crop survey ki sahi entry. Ye do kaam waqt par kar
        liye to aane wale season ka intezaar aadha aasaan ho jaayega.
      </p>

      <InfoBox type="tip">
        <strong>Surakshit Rahein:</strong> Antar rashi dilwane, naam judwane ya "file aage
        badhwane" ke naam par koi bhi paisa maange to dena nahi hai — ye scheme poori tarah
        free hai. Aisi maang ki shikayat apne kshetra ke khadya vibhag karyalay ya jila
        collector office mein karein.
      </InfoBox>
    </article>
  );
}
