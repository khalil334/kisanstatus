import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import OdishaCmKisanChecker from '@/components/articles/rajya-yojana/tools/OdishaCmKisanChecker';

const IMG_BASE = '/images/articles/rajya-yojna/odisha-cm-kisan-status-check-2026';

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
    q: 'KALIA band ho gayi hai, kya iska matlab mera paisa bhi band ho gaya?',
    a: 'Nahi. KALIA ki jagah CM Kisan aayi hai, lekin scheme ka core kaam wahi hai. Aapka purana KALIA registration bekar nahi hua. Sirf do cheezein badli hain: status ab cmkisan.odisha.gov.in par dekhna hoga, aur beneficiary base dobara verify hua hai — is liye kuch purane record hate aur kuch naye jude.',
  },
  {
    q: 'Mere paas zameen nahi hai, phir bhi CM Kisan mil sakta hai?',
    a: 'Haan. Bhoomiheen krishi parivaar ke liye ismein landless track banaya gaya hai. Paisa kheti ke input ke liye nahi, balki bakri palan, murgi palan, dairy ya machhli jaise allied kaam ke liye milta hai — aur tranche teen hote hain, cultivator side ke do ke muqable.',
  },
  {
    q: 'Meri zameen bahut kam hai, phir bhi naam list mein nahi aaya. Kyun?',
    a: 'Ye scheme means-tested hai — sirf zameen dekh kar faisla nahi hota. Ghar ka koi sadasya income tax bharta ho, sarkari naukri ya pension par ho, ya registered professional (doctor, vakil, CA, engineer) ho, to poora parivaar exclusion mein aa jaata hai. Ye rule parivaar-level par lagta hai, sirf form bharne wale par nahi.',
  },
  {
    q: 'Status mein naam hai lekin paisa nahi aaya — sabse pehle kya check karun?',
    a: 'Result screen teen alag baatein batati hai — aavedan kahan tak pahuncha, bank ki mapping, aur e-KYC. Atakne ki sabse badi wajah pending e-KYC nikalti hai; doosre number par Aadhaar ka NPCI mapper se link na hona. Bank mein Aadhaar ki photocopy dena kaafi nahi — branch se saaf poochein ki NPCI seeding hui hai ya nahi.',
  },
  {
    q: 'Beneficiary list mein apna record kahan dhoondhna chahiye?',
    a: 'Cultivator aur landless — dono ki suchi juda hoti hai. Bhoomiheen parivaar cultivator wali mein nahi milega aur zameen wala kisan landless wali mein nahi. Pehle apna track pakka karein, phir portal ke report section mein zila, block aur gram panchayat chun kar sahi category kholein.',
  },
  {
    q: 'CM Kisan lene se PM Kisan band ho jaayega?',
    a: 'Nahi hoga. Ye do bilkul juda budget se chalne wale programme hain, aur ek ka payment doosre ko rok nahi sakta — Odisha mein lakhon log dono ka paisa saath lete hain. Dhyan sirf ceiling par rakhein: PM Kisan mein zameen ki upper limit nahi hoti, jabki CM Kisan ka cultivator track chhoti jotdaari tak seemit hai. Is liye central wala aana aur state wala na aana ek aam sthiti hai, koi rejection nahi.',
  },
  {
    q: 'Ghar ke do log alag-alag form bhar dein to kya hota hai?',
    a: 'Verification mein duplicate pakda jaata hai aur dono ki file ruk jaati hai, jab tak ek dawa withdraw na ho. Ek ghar se ek hi dawa rakhein.',
  },
];

export default function OdishaCmKisanStatusCheck({
  article,
}: {
  article: RajyaYojanaArticleMeta;
}) {

  return (
    <>

      <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Odisha CM Kisan Status Check: KALIA Ka Naya Roop, Landless Benefit Aur List
        </h1>

        <Fig
          src="hero.webp"
          alt="Odisha ka kisan apne dhaan ke khet mein mobile par CM Kisan ka status dekh raha hai"
          caption="CM Kisan — Odisha ki kisan income-support yojana, jo KALIA ki jagah aayi"
          priority
        />

        <p>
          Odisha ke gaon mein aaj bhi log &ldquo;KALIA ka paisa&rdquo; kehte hain. Portal
          kuch aur kehta hai — form, bank ka message, sab CM Kisan likh kar aata hai.
        </p>

        <p>
          Hua kuch aisa — isi farak ne bahut confusion paida kar diya. Kuch log purane portal par status
          dhoondte reh jaate hain, kuch samajhte hain ki purani scheme band hone se unka
          paisa hi band ho gaya. Darne ki zaroorat nahi — haan, paisa season ka sawaal
          hai. Par sachchai iske beech mein hai, aur usse samajhna is page ka pehla kaam hai.
        </p>

        <InfoBox type="info">
          KALIA aur CM Kisan do juda scheme hain, lekin ek hi zarurat ke liye banayi gayi
          hain — Odisha ke chhote kisan aur bhoomiheen krishi parivaar ko seedha paisa dena.
          Purana enrolment aap ka claim khatam nahi karta, magar naya verification aur e-KYC
          har haal mein zaroori hai.
        </InfoBox>

        <h2>KALIA Se CM Kisan — Kya Badla Aur Kya Waisa Hi Raha</h2>

        <p>
          KALIA Odisha ki pehchaan bani hui scheme thi, jismein kisan, bhagchasi aur khet
          mazdoor — teeno ke liye apne-apne component the. Sarkar badalne ke baad usi jagah
          par CM Kisan laayi gayi. Naam badla, dhaancha thoda simple hua, lekin core idea
          nahi badla: chhoti jot walon ko season par nagad madad, aur bhoomiheen parivaar ko
          allied kaam ke liye alag support.
        </p>

        <p>
          Practically iska matlab teen cheezein hain. Ek — portal naya hai, aur purana KALIA
          wala pata ab final source nahi hai. Do — beneficiary base dobara verify kiya gaya
          hai, is liye kuch purane naam list se hat gaye aur kuch naye jud gaye. Teen — Aadhaar
          e-KYC aur NPCI-mapped bank account ab dheele rules nahi hain; inke bina payment
          release hi hold ho jaati hai. Teeno mein se aakhri wala sabse zyada logon ko
          pakadta hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Cheez</th>
            <th>KALIA ke daur mein</th>
            <th>CM Kisan ke baad</th>
          </tr>
          <tr>
            <td>Scheme ka naam</td>
            <td>KALIA</td>
            <td>CM Kisan</td>
          </tr>
          <tr>
            <td>Kaun target</td>
            <td>Chhote kisan, bhagchasi, khet mazdoor</td>
            <td>Chhote/seemant kisan aur bhoomiheen krishi parivaar</td>
          </tr>
          <tr>
            <td>Status dekhne ki jagah</td>
            <td>KALIA portal</td>
            <td>CM Kisan portal (cmkisan.odisha.gov.in)</td>
          </tr>
          <tr>
            <td>e-KYC</td>
            <td>Shuruaat mein dheela</td>
            <td>Anivaarya — iske bina DBT ruk jaata hai</td>
          </tr>
        </SchemeTable>

        <h2>Do Track Hain — Pehle Ye Tay Karein Aap Kis Mein Hain</h2>

        <p>
          CM Kisan ko ek raqam wali scheme samajhna sabse badi galti hai. Do track hain.
          Dono ka logic ulta. Ek mein zameen chahiye, doosre mein zameen ka na hona hi
          shart hai.
        </p>

        <p>
          Balangir se ek mail inbox mein padi thi, subah-subah. Likhne wale parivaar ke paas
          zameen nahi thi, phir bhi
          unhone cultivator wala form bhar diya kyunki gaon mein sabne wahi bhara tha. File
          reject hui. Panchayat se landless certificate banwa kar sahi track mein dobara gaye,
          tab jaakar naam aaya. Track pehle tay karna isi liye zaroori hai. Samajh gaye? Achha,
          aage badhte hain.
        </p>

        <Fig
          src="landless-family-odisha.webp"
          alt="Odisha ka bhoomiheen parivaar apne chhote ghar ke saamne khada hai"
          caption="Landless track — zameen na ho tab bhi allied kaam ke liye support milta hai"
        />

        <p>
          <strong>Cultivator track</strong> un gharon ke liye hai jinke paas apni kheti ki
          zameen hai. Yahan raqam fix hai aur zameen ke area se badalti nahi — bas ek upper
          limit hai, jiske paar jaakar ghar is scheme se bahar ho jaata hai. Grant do barabar
          tranche mein aata hai, Kharif aur Rabi ke aas-paas.
        </p>

        <p>
          <strong>Landless track</strong> un gharon ke liye hai jinke paas zameen nahi hai aur
          jo khet mazdoori ya allied kaam par nirbhar hain. Yahan paisa kheti ke input ke liye
          nahi, balki bakri palan, murgi palan, dairy ya machhli jaise livelihood kaam ke
          liye diya jaata hai. Isliye annual raqam cultivator side se zyada hai aur tranche
          bhi teen hote hain.
        </p>

        <p>
          Ye tool isi logic par chalta hai — aap apni category, zameen aur ghar ki
          detail bharenge, aur wo bata dega ki aap kahan aate hain, saal bhar mein kitna
          banega, ek tranche mein kitna, aur aapke case mein kaun kaun se kagaz lagenge.
        </p>

        <OdishaCmKisanChecker />

        <h2>Exclusion List — Zameen Kam Hone Par Bhi Naam Kat Sakta Hai</h2>

        <p>
          Ye scheme means-tested hai, matlab sirf zameen dekh kar faisla nahi hota. Ghar ki
          aarthik sthiti bhi dekhi jaati hai, aur ye rule poore parivaar par lagta hai —
          sirf form bharne wale par nahi. Isi wajah se kai log hairan rehte hain ki zameen
          to bahut kam hai, phir entry kyun nahi hui.
        </p>

        <ul>
          <li>Ghar ka koi sadasya income tax bharta ho</li>
          <li>Koi sadasya sarkari naukri mein ho — serving ya pension paane wala</li>
          <li>Registered professional ho — doctor, vakil, CA, engineer</li>
          <li>Landholding scheme ki upper limit se zyada ho</li>
        </ul>

        <InfoBox type="warning">
          Exclusion parivaar-level par lagti hai. Agar ghar ka ek sadasya sarkari naukri mein
          hai, to alag ration card bana lene ya alag form bharne se scheme mein entry nahi
          milti — verification ke waqt yahi pakda jaata hai aur payment recover bhi ki ja
          sakti hai.
        </InfoBox>

        <h2>Status Check Karne Ka Sahi Tareeka</h2>

        <ol>
          <li>
            Sirf official portal <code>cmkisan.odisha.gov.in</code> kholein. Milte-julte naam
            wali private websites sirf jaankari dikhati hain, aapka record unke paas nahi
            hota.
          </li>
          <li>Homepage par status ya beneficiary status wala option chunein.</li>
          <li>
            Apna 12-ank ka Aadhaar number, ya CM Kisan / KALIA ID daalein. ID ho to wahi
            behtar hai, kyunki wo aapke record se seedha juda hota hai.
          </li>
          <li>Captcha bharein aur submit karein.</li>
          <li>
            Screen par aapka application stage, bank account mapping aur e-KYC ki halat
            dikhegi. Teeno cheezein dhyan se padhein — sirf pehli line par faisla mat karein.
          </li>
        </ol>

        <Fig
          src="status-check-phone.webp"
          alt="Odisha ka kisan dhaan ke khet ke kinare baith kar phone par payment status dekh raha hai"
          caption="Status hamesha official portal par dekhein — teeno lines (stage, bank mapping, e-KYC) padhna zaroori hai"
        />

        <ExternalLinkButton
          href={article.officialPortal}
          label="CM Kisan portal par apna status dekhein"
        />

        <h2>Beneficiary List Mein Naam Dhoondhna (Village Wise List 2026)</h2>

        <p>
          Agar status search khaali aata hai, to district aur panchayat wise suchi dekhna
          agla qadam hai. Wahan naam hona iska matlab hai aapka record active hai — chahe
          paisa abhi tak aaya na ho.
        </p>

        <ol>
          <li>Portal ke report section mein jaayein.</li>
          <li>Apna zila, block aur gram panchayat chunein.</li>
          <li>Category chunein — cultivator ya landless. Ye do suchi juda hoti hain.</li>
          <li>Apna naam aur category dono verify karein.</li>
        </ol>

        <Fig
          src="panchayat-beneficiary-list.webp"
          alt="Gram panchayat notice board par lagi beneficiary list dekhte hue gaon ke log"
          caption="Zila → block → gram panchayat — suchi mein naam ke saath apni category bhi milaa lein"
        />

        <p>
          Yahan ek chhoti si baat kaam ki hai: kai log galat jagah dhoondte rehte hain.
          Bhoomiheen parivaar cultivator wali suchi mein nahi milega, aur zameen wala kisan
          landless wali mein nahi. Pehle apna track pakka karein, phir dekhna shuru karein.
        </p>

        <p>
          Village wise list bhi isi raaste se milti hai — portal par alag se “village list” naam
          ka koi button nahi hota. Zila → block → gram panchayat select karte jaayein, aapke gaon
          ke sabhi beneficiaries ki suchi khul jaayegi. Yahi list panchayat office ke notice board
          par bhi lagti hai, toh internet na chale toh wahan bhi dekh sakte hain.
        </p>

        <h2>Paisa Na Aane Ki Sabse Aam Wajahein</h2>

        <h3>e-KYC pending pada hai</h3>
        <p>
          Ye number ek wajah hai. Ye baat samajhna zaroori hai, kyunki ye samajh lene se aadha
          kaam wahin ban jaata hai. Eligibility poori, naam list mein, phir bhi paisa hold —
          kyunki Aadhaar authentication adhoora hai. Khijh hoti hai, par hal aasan hai:
          portal se OTP ke zariye, ya nazdeeki CSC center par biometric se poora karaya ja
          sakta hai. Bas thodi der ka kaam hai, aur mahinon ka intezaar bacha leta hai.
        </p>

        <h3>Bank account NPCI mapper se juda nahi</h3>
        <p>
          DBT sirf us account mein jaata hai jo aapke Aadhaar se NPCI mapper mein linked ho.
          Sirf bank mein Aadhaar ki photocopy dena kaafi nahi hai — branch se yahi poochein ki
          &ldquo;Aadhaar seeding NPCI mein hui hai ya nahi&rdquo;.
        </p>

        <h3>Land record mein naam ya area galat</h3>
        <p>
          Cultivator track poora RoR par tikta hai. Virasat ke baad mutation na hona, ya joint
          patta mein hissa saaf na hona — dono file ko pending mein daal dete hain. Iska hal
          tehsil office mein hai, portal par nahi.
        </p>

        <h3>Landless certificate ka jhamela</h3>
        <p>
          Landless track mein sabse zyada deri isi kagaz par hoti hai. Panchayat ya revenue
          authority ka certificate na ho, to verification aage nahi badhta. Ise season shuru
          hone se pehle hi bana lena samajhdari hai.
        </p>

        <h3>Ek hi ghar se do dawe</h3>
        <p>
          Parivaar ke do sadasya apna-apna form bhar dete hain. Verification mein duplicate
          pakda jaata hai aur dono ki file ruk jaati hai jab tak ek withdraw na ho.
        </p>

        <h2>PM Kisan Aur CM Kisan — Dono Sath Chalte Hain</h2>

        <p>
          Arre, ye sawaal bahut aata hai: CM Kisan lene se PM Kisan band ho jaayega? Nahi, bilkul
          nahi — dono apni-apni sarkar ki scheme hain aur ek dusre ko cancel nahi
          karti. Bahut se Odisha ke log dono se paisa lete hain — central wala PM Kisan se,
          state wala CM Kisan se.
        </p>

        <p>
          Lekin ek zaroori farak hai. PM Kisan mein zameen ki koi upper limit nahi hai,
          jabki CM Kisan ka cultivator track chhoti jotdaari tak seemit hai. Isliye aisa ho
          sakta hai ki central wala paisa mile aur state wala nahi — ye bilkul normal hai,
          koi galti nahi. Iska ulta bhi mumkin hai: bhoomiheen parivaar ko landless benefit
          milta hai, jabki PM Kisan landholding wali scheme hone ke naate wahan lagu nahi
          hoti.
        </p>

        <SchemeTable>
          <tr>
            <th>Baat</th>
            <th>PM Kisan</th>
            <th>CM Kisan (Odisha)</th>
          </tr>
          <tr>
            <td>Kaun chalata hai</td>
            <td>Central sarkar</td>
            <td>Odisha sarkar</td>
          </tr>
          <tr>
            <td>Land ceiling</td>
            <td>Koi upper limit nahi</td>
            <td>Chhoti/seemant jotdaari tak seemit</td>
          </tr>
          <tr>
            <td>Bhoomiheen parivaar</td>
            <td>Shamil nahi</td>
            <td>Landless track mein shamil</td>
          </tr>
          <tr>
            <td>Paisa kaise aata hai</td>
            <td>Central DBT — sab jagah lagbhag ek saath</td>
            <td>State release — har zile ki apni raftaar</td>
          </tr>
        </SchemeTable>

        <h2>Kist Ka Waqt — Kya Umeed Rakhein</h2>

        <p>
          Cultivator track ke tranche kheti ke season ke saath chalte hain — saal mein do
          baar. Landless track ke teen hote hain, allied kaam ki zaroorat ke hisaab se.
          Exact tareekh? Har saal badalti hai. Release se pehle verification aur fund
          clearance ka apna waqt lagta hai, aur wo waqt kisi calendar mein nahi likha hota.
        </p>

        <p>
          Odisha mein ek baat khaas hai: release state ke haath mein hoti hai, is liye ek hi
          tranche har zile mein apni raftaar se pahunchta hai. Padosi ke account mein paisa
          aa gaya aur aapke mein nahi — ye apne aap mein kisi gadbad ka saboot nahi hai.
          Pakki tareekh batane wale forward par plan banane ke bajaye, apne record ki teen
          lines (stage, bank mapping, e-KYC) durust rakhein; wahi tay karti hain ki release
          ke din aapki file uthegi ya nahi.
        </p>

        <h2>Kahan Jaana Hai Jab Kuch Atak Jaaye</h2>

        <SchemeTable>
          <tr>
            <th>Dikkat</th>
            <th>Sahi jagah</th>
          </tr>
          <tr>
            <td>e-KYC nahi ho rahi, OTP nahi aa raha</td>
            <td>Nazdeeki CSC center — biometric se ho jaati hai</td>
          </tr>
          <tr>
            <td>Bank account Aadhaar se linked nahi</td>
            <td>Bank branch — NPCI seeding karwaayein</td>
          </tr>
          <tr>
            <td>RoR mein naam ya area galat</td>
            <td>Tehsil office — mutation ya correction</td>
          </tr>
          <tr>
            <td>Landless certificate nahi hai</td>
            <td>Gram panchayat / revenue authority</td>
          </tr>
          <tr>
            <td>Record suchi mein hi nahi hai</td>
            <td>Block agriculture office — file ka remark wahi dikhta hai</td>
          </tr>
        </SchemeTable>

        <Fig
          src="block-agriculture-office.webp"
          alt="Kisan block agriculture office ke counter par apni file ke baare mein pooch rahe hain"
          caption="Rejected ya missing record ka kaaran sirf block agriculture office ki file par dikhta hai"
        />

        <h2>Landless Track Ka Alag Raasta — Kise Kya Karna Hai</h2>

        <p>
          Zameen wale kisan ka raasta seedha hai — record saaf rakho, list mein naam aata
          hai. Landless agricultural household ka raasta thoda alag hai, aur isi liye
          wahan zyada log chhoot jaate hain. Yahan aadhaar zameen ka record nahi, balki ye
          pehchaan hai ki parivaar kheti-mazdoori ya allied activities (bakri-murgi paalan,
          machhli, madhumakkhi jaise kaam) se juda hai. Iski pushti gram panchayat ke level
          par hoti hai, isliye pehla darwaza patwari nahi, panchayat hai.
        </p>

        <p>
          Landless track ke liye teen cheezein taiyaar rakhein: parivaar ki pehchaan ke
          kagaz (Aadhaar sab sadasyon ke), kheti-mazdoori se judaav ka koi bhi saboot ya
          panchayat ka certificate, aur ek active Aadhaar-linked bank khaata. Raqam yahan
          ₹12,500 ki hai — allied activity shuru karne ki madad ke roop mein — isliye
          verification bhi zameen wale track se zyada baareek hota hai. Naam list mein na
          aaye to block agriculture office mein likhit shikayat dein aur paavti lein;
          zubaani poochhne ka record nahi banta.
        </p>

        <ul>
          <li>
            Season shuru hone se pehle ek baar status dekh lein — pending e-KYC waqt rehte
            pakad mein aa jaati hai.
          </li>
          <li>
            Bank aur Aadhaar mein ek hi mobile number rakhein, warna SMS aur OTP idhar-udhar
            jaayenge.
          </li>
          <li>
            Status page ka screenshot rakh lein; office mein baat karte waqt yahi sabse
            seedha proof hota hai.
          </li>
          <li>
            Zameen ka koi bhi badlaav hone par mutation turant karwaayein, kist ka intezaar na
            karein.
          </li>
          <li>
            Kisi bhi &ldquo;agent&rdquo; ko paisa dekar list mein naam chadhaane ka wada mat
            maaniye — enrolment aur verification dono sarkari raste se hi hote hain.
          </li>
        </ul>

        <h2>Kist Aayi Par Kam Lagi — Hisaab Kaise Milaayein</h2>

        <p>
          Zameen wale track mein saal ka ₹4,000 do kiston mein aata hai — Akshaya Tritiya
          aur Nuakhai ke aas-paas ₹2,000 karke. Passbook mein credit dekhte waqt yahi
          figure milaayein; PM Kisan ki ₹2,000 wali kist alag entry hai aur aksar dono ko
          jod kar log confuse ho jaate hain ki kitna kis scheme se aaya. Entry ke saath
          likha reference dekhein — CM Kisan ka credit state treasury ke reference se aata
          hai, PM Kisan ka “PMKISAN” naam se. Raqam scheme ke hisaab se kam aaye to pehle
          ye confirm karein ki aap kaunse track mein gine gaye hain — kyunki landless track
          ki raqam aur schedule dono alag hain, aur galat track mein ginti hona hi kam
          raqam ki sabse aam wajah hai.
        </p>

        <h2>Padosi Rajyon Mein Kya Ho Raha Hai</h2>

        <p>
          Waise, ye maine aapko bataya tha na — raqam har rajya mein ek jaisi nahi hoti. Apne
          aas-paas ka haal khud padh lo:
        </p>

        <ul>
          <li>
            <Link href="/rajya-yojana/krishak-bandhu-status-check-2026">
              West Bengal Krishak Bandhu — Voter ID se status aur death benefit
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
              Andhra Pradesh Annadata Sukhibhava — bataidar kisan bhi cover hote hain
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/rythu-bharosa-status-check-2026">
              Telangana Rythu Bharosa — per-acre raqam ka hisaab
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
              Sabhi rajyon ka amount aur portal ek saath — comparison table
            </Link>
          </li>
        </ul>

        <p>
          (Odisha ka domicile nahi hai to CM Kisan aap par laagu nahi hoti — lekin landless
          track jaisa intezaam har rajya mein nahi milta, aur raqam bhi jagah-jagah badalti
          hai.)
        </p>

        <h2>CM Kisan Odisha — Aur Kuch Jaanna Hai?</h2>

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
          <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Odisha CM Kisan status aur eligibility FAQ 2026</p>
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

        {article.officialPortal && (
          <p>
            Official portal:{' '}
            <a href={article.officialPortal} rel="nofollow noopener" target="_blank">
              {article.officialPortal.replace('https://', '')}
            </a>
          </p>
        )}

        <p>
          <Link href="/rajya-yojana">← Sabhi rajya ki kisan yojana</Link>
        </p>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Ye article sirf madad ke liye hai. Final decision ke liye official portal ya krishi office se sampark karein.
        </p>
      </div>

      </article>
    </>
  );
}
