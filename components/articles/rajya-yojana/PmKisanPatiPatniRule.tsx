import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import PmKisanFamilyChecker from '@/components/articles/rajya-yojana/tools/PmKisanFamilyChecker';

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

        <h2>Teen Ghar, Teen Faisle — Rule Ko Misaal Se Samajhein</h2>

        <p>
          <strong>Pehla ghar:</strong> pati ke naam do bigha, patni ke naam teen bigha.
          Dono ke registration alag-alag CSC se ho gaye the aur dono khaton mein kist aa
          rahi thi. Verification mein dono Aadhaar ek hi parivaar se jude nikle. Sahi
          raasta yahan ye tha ki jiski teeno kagaz (land record, Aadhaar, bank) ek jaise
          the — patni ke the — uska registration rehta aur pati apna surrender karta.
          Unhone yahi kiya, refund challan se pichli kistein lautayi, aur patni ka
          registration bina rukavat chal raha hai.
        </p>

        <p>
          <strong>Doosra ghar:</strong> pita aur do baalig bete. Zameen abhi poori pita ke
          naam hai, batwaara sirf zubaani hua hai. Teeno ke registration ho gaye the — do
          gir gaye. Yahan jaldi ka raasta koi nahi hai: pehle tehsil mein batwaara aur
          mutation, uske baad hi beton ke apne claim banenge. Jab tak record ek hai, claim
          ek hai.
        </p>

        <p>
          <strong>Teesra ghar:</strong> vidhwa maa aur uska baalig beta, dono ke naam par
          virasat ki zameen mutation ke saath alag-alag darj ho chuki hai. Ye do alag
          family unit hain — maa apna registration rakh sakti hai aur beta apna. Yahan do
          registration hona bilkul jaayaz hai, aur kisi surrender ki zaroorat nahi.
        </p>

        <p>
          In teeno mein farak sirf ek cheez ka hai — revenue record. Ghar ka batwara,
          ration card, ya rehne ka alag intezaam scheme ki nazar mein kuch nahi badalta;
          jo tehsil ke kagaz mein hai, wahi sach hai.
        </p>

        <h2>Rule Ek Line Mein: Ginti Aadmi Ki Nahi, Ghar Ki Hoti Hai</h2>

        <p>
          Theek hai, baat yeh hai — bahut si sarkari schemes vyakti ko unit maankar chalti hain: jitne log eligible,
          utne benefit. PM Kisan ka dhaancha ulta hai. Ulta, aur isi liye confusing. Yahan
          pehle ye dekha jaata hai ki landholding kis <em>parivaar</em> ki hai, aur us
          parivaar ke andar se ek hi grant nikalta hai. Bas.
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
          Wait, pehle ek baat bata deta hoon — aap soch rahe honge ki ye niyam sirf kagaz par
          hai. Mujhe bhi shuru mein aisa hi laga tha. Nahi hai; verification isi par tikta hai.
        </p>

        <p>
          To phir padosi ke yahan do registration kaise chal rahe hain? Achha sawaal hai.
          Do registration kabhi-kabhi bilkul sahi hote hain, lekin uski wajah pati-patni
          nahi hoti — <strong>batwaara</strong> hoti hai.
        </p>

        <p>
          Comment box mein ek lambi si baat likhi hui mili thi — likhne wale ne aur uski patni
          ne alag-alag CSC se form
          bharwa liya tha, do saal tak dono khaton mein kist aati rahi. Phir ek din patni
          wale registration par recovery notice aa gaya — chaar kist ka poora paisa wapas.
          Usne kaha hota to pehle hi ek surrender kar dete. Yahi is page ka maqsad hai.
          Bas, itni si baat.
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

        <h2>Shaadi, Virasat, Batwaara — Zindagi Ke Mod Par Registration Ka Kya Ho</h2>

        <p>
          Family rule ka asli imtihaan tab aata hai jab ghar ki haalat badalti hai. Teen
          mod sabse aam hain, aur teeno par karna alag-alag hai.
        </p>

        <p>
          <strong>Shaadi:</strong> beti ka registration mayke ki zameen par tha aur shaadi
          ho gayi — ab wo apne pati ke saath naya family unit hai. Mayke wali zameen agar
          record mein uske naam par hai to claim ban sakta hai, lekin sasural ke unit mein
          pehle se koi registration hai to dono mein se ek hi chalega. Yahan bhi wahi kasauti
          hai: record kis ke naam, unit kaun sa.
        </p>

        <p>
          <strong>Virasat:</strong> registration wale sadasya ke guzar jaane par purani
          entry par kist lena band karein — wo recovery ka seedha raasta hai. Pehle mutation
          se zameen waaris ke naam ho, phir waaris apna naya registration kare. Beech ke
          mahinon ki kistein chhod deni padti hain; ye nuksan nahi, niyam hai.
        </p>

        <p>
          <strong>Batwaara:</strong> upar vistaar se likha hai — zubaani ya panchayat ke
          kagaz se kuch nahi hota, tehsil ka mutation hi batwaara hai. Mutation ke baad har
          naya khatedar apna registration alag se karega; purana registration apne aap
          update nahi hota.
        </p>

        <h2>Kaise Pakda Jaata Hai — Data Ab Aapas Mein Juda Hua Hai</h2>

        <Fig
          src="aadhaar-ekyc-couple.webp"
          alt="Pati-patni gaon ke kiosk par Aadhaar biometric e-KYC karwa rahe hain"
          caption="Aadhaar e-KYC ke baad har beneficiary unique identity se juda hai — duplicate registration ab data mein hi pakda jaata hai"
        />

        <p>
          Pehle log soch lete the ki alag bank account aur alag mobile number rakhne se do
          registration pakde nahi jaayenge. Wo daur gaya. Aadhaar e-KYC anivaarya hone ke
          baad har beneficiary ek unique identity se juda hai, land record digitize ho chuke
          hain, aur payment Aadhaar-linked NPCI mapper se hoti hai. System ko ab aankh nahi,
          data chahiye — aur data jhooth nahi bolta.
        </p>

        <p>
          Verification mein aam taur par teen cheezein match ki jaati hain — ek hi khasra ya
          khata number do file mein hai kya, ek hi parivaar ke do Aadhaar par kist ja rahi
          hai kya, aur income tax ya sarkari salary ka data kisi member ke Aadhaar se match
          ho raha hai kya. Teeno mein se koi ek hit ho jaaye, to file hold ho jaati hai.
        </p>

        <p>
          Isi liye kai baar saal-do saal chalne ke baad achanak paisa rukta hai. Us waqt
          naya rule nahi lagta — bas purana record cross-check hota hai. Der se pakda gaya,
          par pakda gaya.
        </p>

        <h2>Dono Taraf Paisa Aa Gaya Hai — Ab Kya Karein</h2>

        <p>
          Agar aapko padhte hue lag raha hai ki aapke saath yahi hua hai — hairaan hone ki
          baat nahi, par ruk bhi mat jaiye. Notice ka intezaar karna sabse mehenga raasta hai. Khud
          aage badhkar theek karna sasta bhi padta hai aur jaldi bhi khatam hota hai.
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

        <h2>Surrender Ka Faisla Lene Se Pehle — Kya Kya Milaa Lein</h2>

        <p>
          Jis ghar mein do registration chal rahe hain, wahan surrender se pehle ek chhota
          sa audit kaam aata hai. Dono registration ke against ye chaar cheezein likh kar
          milaayein: kis par kitni kistein aa chuki hain, kiske land record ki seeding
          complete hai, kiske Aadhaar ki spelling teeno jagah ek jaisi hai, aur kiska
          mobile number aaj bhi active hai.
        </p>

        <p>
          Aam taur par jawab khud saamne aa jaata hai — ek registration har jagah saaf
          hota hai aur doosra kahin na kahin atka hua. Saaf wala rakhein, atka hua
          surrender karein. Refund ka hisaab bhi isi audit se nikal aata hai: jo kistein
          surrender wale registration par aayi hain, wahi lautani hain — rakhe gaye
          registration ki kistein jaayaz hain, unka refund nahi banta.
        </p>

        <p>
          Ek baat aur — surrender ke baad usi season ki agli kist ka schedule nahi
          badalta. Rakhe gaye registration par kist apne time par hi aayegi; surrender
          karne se koi “nayi” kist ya adjust hua paisa nahi milta. Agent log kabhi-kabhi
          iske ulte dawe karte hain — unse door rahein.
        </p>

        <h2>Baaki Doubts</h2>

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
          <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">PM Kisan pati-patni rule — ground-level sawaal jawab</p>
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

        <p>
          Apne rajya ki scheme mein bataidar kisan ko jagah milti hai ya nahi, ye{' '}
          <Link href="/rajya-yojana">rajya kisan yojana list</Link> mein dekh sakte hain.
        </p>

        <h2>Ghar Ka Hisaab Saaf Rakhne Ki Aadatein</h2>

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
