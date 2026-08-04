import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import PmKisanFamilyChecker from '@/components/articles/rajya-yojana/tools/PmKisanFamilyChecker';
import { FAQBlock } from '@/components/ArticleShared';

const FAQS_DATA = [
  {
    q: 'Pati aur patni dono ko PM Kisan ka paisa milta hai?',
    a: 'Nahi. PM Kisan mein beneficiary "family" hai — pati, patni aur naabaalig bachche milkar ek unit. Ek unit ko saal mein ek hi grant milta hai. Dono taraf se registration ho jaaye to verification par duplicate pakda jaata hai aur extra wala paisa recover kiya jaata hai.',
  },
  {
    q: 'Baalig bete ko alag se PM Kisan mil sakta hai?',
    a: 'Haan, lekin sirf tab jab batwaare ke baad zameen revenue record mein uski entry ho chuki ho. Naya ration card ya shaadi ho jaana kaafi nahi hai — mutation ke bina wo abhi bhi wahi ek parivaar mana jaata hai.',
  },
  {
    q: 'Galat mila PM Kisan ka paisa kaise wapas karein?',
    a: 'PM Kisan portal ke "Voluntary Surrender of PM-KISAN Benefit" option se registration khud hataayein, aur portal par bane refund challan se paisa jama karein. Notice ka intezaar karne se recovery bank account se bhi ho sakti hai.',
  },
  {
    q: 'Patni ki apni zameen hai, phir bhi nahi milega?',
    a: 'Nahi milega — dono ke khate juda hone se bhi parivaar do nahi ho jaata. Shaadi ke baad pati-patni scheme ki definition mein ek unit hain, chahe zameen kisi bhi khate mein ho. Ek hi registration chunna hoga.',
  },
  {
    q: 'Talaq ho gaya hai, to kya dono ka alag ban jaayega?',
    a: 'Kaanooni taur par judai ho jaane ke baad dono apne apne family unit hain, aur agar dono ki apni-apni zameen record mein darj hai to dono ka claim ban sakta hai. Yahan zaroori ye hai ki record saaf ho — kachcha samjhauta kaafi nahi hota.',
  },
  {
    q: 'Patni ki kist aa rahi thi, wo guzar gayi. Ab?',
    a: 'Wo registration aage nahi chalega. Sahi raasta ye hai ki pehle zameen ka mutation waaris tak pahunchaya jaaye, uske baad usi vyakti ka naya registration ho. Purani entry par aaya paisa lene ki koshish recovery ka case banati hai.',
  },
  {
    q: 'Naabaalig bete ki apni zameen hai, uska alag ban sakta hai?',
    a: 'Nahi. 18 saal se kam umar ke bachche usi parivaar mein ginte hain, chahe record mein zameen unki ho. Baalig hone aur batwaara hone — dono ke baad hi baat aage badhti hai.',
  },
  {
    q: 'Do registration par paisa aa raha hai aur kuch nahi hua, to shayad theek hai?',
    a: 'Kist aana verification poori hone ka proof nahi hai. Kai case mein duplicate do-teen saal baad pakda gaya aur poora amount ek saath recover hua. Jitni der ruk kar theek karenge, refund utna bada banega.',
  },
  {
    q: 'Batai (tenant) par kheti karte hain, milta hai?',
    a: 'PM Kisan landholding par aadharit hai, is liye batai par kheti karne wale is scheme mein nahi aate. Kuch rajya apni scheme mein tenant farmer ko shamil karte hain — jaise Andhra Pradesh ka CCRC-based system. Apne rajya ki scheme /rajya-yojana par di gayi rajya kisan yojana list mein dekh lein.',
  },
];

const IMG_BASE = '/images/articles/rajya-yojna/pm-kisan-pati-patni-dono-ko-milega';

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

export default function PmKisanPatiPatniRule({ article }: { article: RajyaYojanaArticleMeta }) {

  return (
    <>

      <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Pati Patni Dono Ko PM Kisan Milega? Family Rule Ka Poora Sach
        </h1>

        <Fig
          src="hero.webp"
          alt="Buzurg kisan pati-patni apne ghar ke bahar ID card aur bank passbook ke saath baithe hain"
          caption="PM Kisan ka beneficiary ek vyakti nahi, poora parivaar hai — yahi sabse zyada galat samjha jaata hai"
          priority
        />

        <p>
          Gaon mein ye sawaal aam hai: &ldquo;padosi ke yahan do registration chal rahe hain,
          humare yahan ek hi kyun?&rdquo; Kisi ne CSC wale se form bharwa liya, kisi ne khud
          portal par apply kar diya, aur kuch mahine tak dono khaton mein do-do hazaar aata
          bhi raha. Phir achanak ek din pehla status badal gaya aur doosre par recovery ka
          message aa gaya. Ye kisi clerk ki galti nahi thi — ye scheme ka wo rule tha jo
          shuru se likha hua hai, bas padha kam gaya.
        </p>

        <InfoBox type="info">
          PM Kisan ka beneficiary <strong>&ldquo;family&rdquo;</strong> hai — pati, patni aur
          naabaalig bachche (18 saal se kam) milkar ek unit. Is poore unit ko saal mein ek hi
          ₹6,000 milta hai, teen ₹2,000 ki kist mein. Zameen kam ho ya zyada, do jagah se
          paisa kisi bhi haalat mein nahi banta.
        </InfoBox>

        <h2>Rule Ek Line Mein: Ginti Aadmi Ki Nahi, Ghar Ki Hoti Hai</h2>

        <p>
          Bahut si sarkari schemes vyakti ko unit maankar chalti hain — jitne log eligible,
          utne benefit. PM Kisan ka dhaancha ulta hai. Yahan pehle ye dekha jaata hai ki
          landholding kis <em>parivaar</em> ki hai, aur us parivaar ke andar se ek hi grant
          nikalta hai.
        </p>

        <p>
          Isi wajah se pati-patni ka sawaal itni baar uthta hai. Zameen dono ki apni-apni ho
          sakti hai, Aadhaar juda hain, bank account bhi juda hain — technically do
          registration ban jaate hain. Scheme ki nazar mein wo phir bhi ek hi dawa hai.
        </p>

        <Fig
          src="family-documents-check.webp"
          alt="Kisan parivaar ghar mein bank passbook, Aadhaar card aur zameen ke kagaz milaa kar dekh raha hai"
          caption="Registration se pehle teeno kagaz — land record, Aadhaar aur passbook — ek saath milaa lein"
        />

        <p>
          Aur ek baat jo log der se samajhte hain — zameen ka area raqam par asar nahi daalta.
          Do bigha ho ya bees, saal bhar ka grant ₹6,000 hi rehta hai. Isliye &ldquo;humari
          zameen zyada hai, to humein dugna milna chahiye&rdquo; wali soch se doosra claim
          justify nahi hota.
        </p>

        <PmKisanFamilyChecker />

        <h2>Wo Case Jismein Ek Parivaar Se Do Claim Sach Mein Ban Jaate Hain</h2>

        <p>
          Ab us baat par aayein jo padosi ke yahan dikhti hai. Do registration kabhi-kabhi
          bilkul sahi hote hain, lekin uski wajah pati-patni nahi hoti —{' '}
          <strong>batwaara</strong> hoti hai.
        </p>

        <p>
          Maan lijiye pita ke paas das bigha zameen thi. Baalig bete ko char bigha de kar
          revenue record mein mutation ho gaya. Ab kaagaz par do khatedar hain, do juda
          landholding hain, aur scheme ki definition ke hisaab se do family unit. Aise mein
          pita ka bhi grant banta hai aur bete ka bhi — ek hi chulhe par khana banta hoga,
          phir bhi ye duplicate nahi hai.
        </p>

        <Fig
          src="tehsil-mutation-office.webp"
          alt="Buzurg kisan dampati tehsil office mein patwari ke saamne zameen ke record dekh rahe hain"
          caption="Batwaara tabhi maana jaata hai jab tehsil ke revenue record mein mutation ho jaaye"
        />

        <p>
          Lekin yahan galti karne ki gunjaish poori hai. Log samajhte hain ki naya ration card
          banwa lene se, ya bete ki shaadi ho jaane se, ya panchayat se &ldquo;alag
          parivaar&rdquo; ka certificate le aane se batwaara ho gaya. Nahi hua. Jab tak tehsil
          ke record mein zameen bete tak transfer nahi hoti, tab tak wahi ek unit hai — aur
          doosra registration verification par gir jaata hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Ghar ki situation</th>
            <th>Kitne claim ban sakte hain</th>
            <th>Kyun</th>
          </tr>
          <tr>
            <td>Pati aur patni, zameen dono ki apni-apni</td>
            <td>Ek</td>
            <td>Dono ek hi family unit hain</td>
          </tr>
          <tr>
            <td>Pati, patni aur naabaalig bachche</td>
            <td>Ek</td>
            <td>Naabaalig bachche usi unit mein ginte hain</td>
          </tr>
          <tr>
            <td>Baalig beta, batwaara ho chuka, mutation record mein</td>
            <td>Do</td>
            <td>Juda khatedar, juda family unit</td>
          </tr>
          <tr>
            <td>Baalig beta, zameen abhi pita ke paas</td>
            <td>Ek</td>
            <td>Landholding ab bhi ek hi parivaar ki hai</td>
          </tr>
          <tr>
            <td>Vidhwa maa, zameen virasat mein mili</td>
            <td>Apna khud ka</td>
            <td>Wo ab ek separate unit hai</td>
          </tr>
        </SchemeTable>

        <h2>Exclusion List — Yahan Poora Ghar Ek Saath Bahar Ho Jaata Hai</h2>

        <p>
          Family rule ka doosra pehlu ye hai ki exclusion bhi parivaar par lagti hai. Matlab
          agar koi ek sadasya in categories mein aata hai, to us ghar ka koi bhi member PM
          Kisan nahi le sakta — chahe form kisi aur ne bhara ho.
        </p>

        <ul>
          <li>Pichle assessment year mein kisi sadasya ne income tax bhara ho.</li>
          <li>
            Koi sadasya serving ya retired sarkari karmchari ho — central, state, PSU ya
            autonomous body. Multi-tasking staff / Class-IV / Group-D is se bahar rakhe gaye
            hain.
          </li>
          <li>
            Koi sadasya monthly ₹10,000 se zyada pension paata ho (Class-IV / Group-D pensioner
            chhod kar).
          </li>
          <li>
            Practising professional ho — doctor, engineer, vakil, chartered accountant,
            architect — chahe registration ho aur practice band ho.
          </li>
          <li>
            Constitutional ya elected post par raha ho — MP, MLA, MLC, mayor, zila parishad
            chairman, ya mantri.
          </li>
          <li>
            Zameen institutional naam par ho — trust, society, company, ya sarkari sanstha.
          </li>
        </ul>

        <InfoBox type="warning">
          Sabse zyada recovery notices isi rule se aate hain. Beta sarkari naukri mein lag
          gaya, ya ek saal income tax bhar diya gaya — aur pita ki kist aati rahi.
          Verification jab data cross-check karta hai, to poora parivaar ineligible nikalta
          hai aur ab tak ka paisa wapas maanga jaata hai.
        </InfoBox>

        <h2>Dono Taraf Paisa Aa Gaya Hai — Ab Kya Karein</h2>

        <p>
          Agar aapko padhte hue lag raha hai ki aapke saath yahi hua hai, to sabse behtar
          raasta notice ka intezaar karna nahi hai. Khud aage badhkar theek karna sasta bhi
          padta hai aur jaldi bhi khatam hota hai.
        </p>

        <ol>
          <li>
            <strong>Pehle tay karein kaunsa registration rakhna hai.</strong> Aam taur par
            wahi rakhein jiske land record, Aadhaar aur bank account — teeno mein spelling ek
            jaisi likhi ho. Ye farak baad mein sabse zyada dikkat deta hai.
          </li>
          <li>
            <strong>Doosre registration ko portal se surrender karein.</strong> PM Kisan
            portal par &ldquo;Voluntary Surrender of PM-KISAN Benefit&rdquo; ka option hai.
            Wahan Aadhaar aur registration number se login karke entry hatayi ja sakti hai.
          </li>
          <li>
            <strong>Refund ka hisaab lagayein.</strong> Jitni kist us taraf aa chuki hai,
            wahi wapas karni hoti hai — poora amount, kist ke hisaab se. Portal par refund ka
            challan ban jaata hai; usse jama karke receipt sambhaal lein.
          </li>
          <li>
            <strong>Bache hue registration ki e-KYC dobara verify karein.</strong> Surrender
            ke baad kabhi-kabhi active record ka status refresh hota hai. e-KYC, land seeding
            aur bank mapping — teeno par &ldquo;Yes&rdquo; dikhna chahiye.
          </li>
        </ol>

        <ExternalLinkButton
          href={article.officialPortal}
          label="PM Kisan portal par status aur surrender option dekhein"
        />

        <p>
          Iska poora step-by-step process, screenshot ke saath, humne alag likha hai —{' '}
          <Link href="/articles/PmKisanVoluntarySurrenderGuide">
            voluntary surrender aur refund ki guide
          </Link>
          . Aur agar aapka apna record galti se reject ho gaya hai, to{' '}
          <Link href="/articles/PmKisanRejectedStatusReApplyGuide">
            rejected status ke baad dobara apply karne ka tareeka
          </Link>{' '}
          zyada kaam ka rahega.
        </p>

        <h2>Ek Hi Claim Banta Hai — Kiska Rakhein</h2>

        <p>
          Jab parivaar se ek hi claim banta hai, to sawaal ye reh jaata hai ki registration
          kis ka rakhein. Yahan koi kaanooni majboori nahi hai — pati ho ya patni, koi bhi
          chal jaata hai. Faisla practical aadhaar par karna chahiye, kyunki aage ki poori
          DBT chain usi vyakti se bandhi rehti hai.
        </p>

        <Fig
          src="status-check-phone.webp"
          alt="Kisan khet mein khada hokar phone par PM Kisan payment status check kar raha hai"
          caption="Registration jiska bhi ho, status check aur OTP usi ke mobile number par aayenge"
        />

        <SchemeTable>
          <tr>
            <th>Dekhne wali cheez</th>
            <th>Kyun maayne rakhti hai</th>
          </tr>
          <tr>
            <td>Land record mein kaun darj hai</td>
            <td>Land seeding usi se match hoti hai; farak hone par kist hold rehti hai</td>
          </tr>
          <tr>
            <td>Aadhaar mein spelling kaisi hai</td>
            <td>e-KYC aur record ki spelling match na ho to authentication fail hota hai</td>
          </tr>
          <tr>
            <td>Bank account NPCI mapper mein seeded hai ya nahi</td>
            <td>Bina seeding DBT return ho jaati hai, chahe status active dikhe</td>
          </tr>
          <tr>
            <td>Mobile number kiske paas active hai</td>
            <td>OTP aur payment SMS usi number par aate hain — badalna baad mein jhanjhat hai</td>
          </tr>
        </SchemeTable>

        <p>
          Ek chhoti si salah: jiske teeno kaagaz — land record, Aadhaar aur bank — ek jaise
          likhe hon, usi ko chunein. Spelling correction baad mein sabse dheema kaam hai,
          kyunki wo tehsil aur bank dono jagah karana padta hai.
        </p>

        <h2>Kaise Pakda Jaata Hai — Data Ab Aapas Mein Juda Hua Hai</h2>

        <Fig
          src="aadhaar-ekyc-couple.webp"
          alt="Pati-patni gaon ke kiosk par Aadhaar biometric e-KYC karwa rahe hain"
          caption="Aadhaar e-KYC ke baad har beneficiary unique identity se juda hai — duplicate registration ab data mein hi pakda jaata hai"
        />

        <p>
          Pehle log soch lete the ki alag bank account aur alag mobile number rakhne se do
          registration pakde nahi jaayenge. Ab wo daur khatam ho gaya. Aadhaar e-KYC anivaarya
          hone ke baad har beneficiary ek unique identity se juda hai, land record digitize ho
          chuke hain, aur payment Aadhaar-linked NPCI mapper se hoti hai.
        </p>

        <p>
          Verification mein aam taur par teen cheezein match ki jaati hain — ek hi khasra ya
          khata number do file mein hai kya, ek hi parivaar ke do Aadhaar par kist ja rahi
          hai kya, aur income tax ya sarkari salary ka data kisi member ke Aadhaar se match
          ho raha hai kya. Teeno mein se koi ek hit ho jaaye, to file hold ho jaati hai.
        </p>

        <p>
          Isi liye kai baar saal-do saal chalne ke baad achanak paisa rukta hai — us waqt
          naya rule nahi lagta, bas purana record cross-check hota hai.
        </p>

        <h2>Wo Sawaal Jo Har Roz Poochhe Jaate Hain</h2>

        <FAQBlock faqs={FAQS_DATA} caption="PM Kisan pati-patni rule — ground-level sawaal jawab" />

        <p>
          Apne rajya ki scheme mein bataidar kisan ko jagah milti hai ya nahi, ye{' '}
          <Link href="/rajya-yojana">rajya kisan yojana list</Link> mein dekh sakte hain.
        </p>

        <h2>Chhoti Aadatein Jo Recovery Se Bacha Leti Hain</h2>

        <ul>
          <li>
            Parivaar mein sirf ek registration rakhein, aur uska number likh kar sambhaal
            lein — poochhne par yahi kaam aata hai.
          </li>
          <li>
            Naukri, pension ya income tax jaisi koi badlav ho, to us saal apna status khud
            check karein. Change ke baad kist lete rehna sabse mehnga padta hai.
          </li>
          <li>
            Land record mein koi bhi transfer ya batwaara ho, to mutation turant karaayein.
            Kist ka intezaar na karein.
          </li>
          <li>
            Aadhaar aur bank dono mein ek hi mobile number rakhein, warna OTP aur SMS
            idhar-udhar jaayenge.
          </li>
          <li>
            Kisi bhi &ldquo;agent&rdquo; ke is dawe par bharosa mat karein ki wo ek parivaar
            ke do registration chalwa dega. Wo paisa lekar wahi form bharega jo verification
            par girega, aur refund aapko bharna padega.
          </li>
        </ul>

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
