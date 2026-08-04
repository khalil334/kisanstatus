import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import { FAQBlock } from '@/components/ArticleShared';
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
    a: 'Nahi. KALIA ki jagah CM Kisan aayi hai, lekin scheme ka core kaam wahi hai. Purana enrolment aap ka claim khatam nahi karta. Sirf do cheezein badli hain: status ab cmkisan.odisha.gov.in par dekhna hoga, aur beneficiary base dobara verify hua hai — is liye kuch purane record hate aur kuch naye jude.',
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
    a: 'Status page ki teen lines alag-alag padhein: application stage, bank account mapping aur e-KYC. Sabse aam wajah pending e-KYC hoti hai, uske baad Aadhaar ka NPCI mapper se link na hona. Bank mein Aadhaar ki photocopy dena kaafi nahi — branch se saaf poochein ki NPCI seeding hui hai ya nahi.',
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
          Odisha ke gaon mein aaj bhi log &ldquo;KALIA ka paisa&rdquo; kehte hain, jabki
          portal, form aur bank ka message sab CM Kisan likh kar aata hai. Isi farak ne bahut
          confusion paida kiya hai — kuch log purane portal par status dhoondte reh jaate
          hain, kuch samajhte hain ki purani scheme band hone se unka paisa hi band ho gaya.
          Sachchai iske beech mein hai, aur usse samajhna is page ka pehla kaam hai.
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
          release hi hold ho jaati hai.
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
          CM Kisan ko ek raqam wali scheme samajhna sabse badi galti hai. Ismein do track
          hain, aur dono ka logic ulta hai.
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
          Neeche diya tool isi logic par chalta hai — aap apni category, zameen aur ghar ki
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

        <h2>Beneficiary List Mein Naam Dhoondhna</h2>

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

        <p>
          Yahan ek chhoti si baat kaam ki hai: kai log galat jagah dhoondte rehte hain.
          Bhoomiheen parivaar cultivator wali suchi mein nahi milega, aur zameen wala kisan
          landless wali mein nahi. Pehle apna track pakka karein, phir dekhna shuru karein.
        </p>

        <h2>Paisa Na Aane Ki Sabse Aam Wajahein</h2>

        <h3>e-KYC pending pada hai</h3>
        <p>
          Ye number ek wajah hai. Eligibility poori hoti hai, naam list mein hota hai, phir
          bhi paisa hold rehta hai kyunki Aadhaar authentication adhoora hai. Ise portal se
          OTP ke zariye, ya nazdeeki CSC center par biometric se poora karaya ja sakta hai.
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
          Ye sawaal bahut aata hai: CM Kisan lene se PM Kisan band ho jaayega? Nahi. Dono
          apni-apni sarkar ki scheme hain aur ek dusre ko cancel nahi karti. Bahut se Odisha
          ke log dono se paisa lete hain — central wala PM Kisan se, state wala CM Kisan se.
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
          Cultivator track ke tranche kheti ke season ke saath chalte hain, matlab saal mein do
          baar. Landless track ke tranche teen hote hain aur allied kaam ki zaroorat ke hisaab
          se release kiye jaate hain. Har saal exact tareekh badalti rehti hai, kyunki release
          se pehle verification aur fund clearance ka apna waqt lagta hai.
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

        <h2>Chhoti Baatein Jo Bade Kaam Aati Hain</h2>

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

        <h2>Odisha Se Bahar Ke Kisan Yahan Dekhein</h2>

        <p>
          Odisha ka domicile nahi hai to CM Kisan aap par laagu nahi hoti — lekin landless
          track jaisa intezaam har rajya mein nahi milta, aur raqam bhi jagah-jagah badalti
          hai. Apne rajya ka hisaab yahan dekhein:
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

        <h2>CM Kisan Odisha — Aksar Poochhe Jaane Wale Sawaal</h2>

        <FAQBlock faqs={FAQS_DATA} caption="Odisha CM Kisan status aur eligibility FAQ 2026" />

        <h2>Related Articles</h2>

        <ul>
          <li>
            <Link href="/articles/PmKisanBeneficiaryList2026">
              PM Kisan Beneficiary List 2026 — gaon ki list mein apna naam dekhein
            </Link>
          </li>
          <li>
            <Link href="/articles/PmKisanMasterGuide2026">
              PM Kisan Master Guide 2026 — registration se payment tak poora process
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega">
              Pati-patni dono ko PM Kisan milega ya nahi? Family rule
            </Link>
          </li>
        </ul>

        <h2>Aakhri Baat</h2>

        <p>
          CM Kisan mein sabse zyada nuksan naam ke confusion se hota hai — log KALIA
          dhoondte rehte hain aur naye portal par apna record dekhte hi nahi. Isse aage jo
          bhi atakta hai, wo lagbhag hamesha teen cheezon mein se ek hota hai: e-KYC, bank
          ki NPCI seeding, ya land record. Ye teen durust hon to sab apne aap chalta hai.
          Aur jab status samajh mein na aaye, to portal ka page khol kar block agriculture
          office jaana sabse tez raasta hai — kisi bicholiye ke paas jaane se nahi.
        </p>

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
      </article>
    </>
  );
}
