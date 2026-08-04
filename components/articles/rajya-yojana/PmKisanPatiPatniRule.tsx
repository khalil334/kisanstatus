import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import PmKisanFamilyChecker from '@/components/articles/rajya-yojana/tools/PmKisanFamilyChecker';

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
  const canonicalUrl = 'https://kisanstatus.com/rajya-yojana/pm-kisan-pati-patni-dono-ko-milega';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Pati Patni Dono Ko PM Kisan Milega? Family Rule, Exclusion List Aur Paisa Wapas Karne Ka Process',
    description: article.description,
    image: `https://kisanstatus.com${IMG_BASE}/hero.webp`,
    author: {
      '@type': 'Organization',
      name: 'KisanStatus Team',
      url: 'https://kisanstatus.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kisanstatus.com/logo.png',
        width: 250,
        height: 60,
      },
    },
    datePublished: article.published,
    dateModified: article.modified,
    inLanguage: 'hi-IN',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pati aur patni dono ko PM Kisan ka paisa milta hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nahi. PM Kisan mein beneficiary "family" hai — pati, patni aur naabaalig bachche milkar ek unit. Ek unit ko saal mein ek hi grant milta hai. Dono ke naam par registration ho jaaye to verification par duplicate pakda jaata hai aur extra naam par gaya paisa recover kiya jaata hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Baalig bete ko alag se PM Kisan mil sakta hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Haan, lekin sirf tab jab batwaare ke baad zameen revenue record mein uske naam par darj ho chuki ho. Alag ration card ya shaadi ho jaana kaafi nahi hai — mutation ke bina wo abhi bhi wahi ek parivaar mana jaata hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Galat mila PM Kisan ka paisa kaise wapas karein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'PM Kisan portal ke "Voluntary Surrender of PM-KISAN Benefit" option se apna naam khud hataayein, aur portal par bane refund challan se paisa jama karein. Notice ka intezaar karne se recovery bank account se bhi ho sakti hai.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          Gaon mein ye baat aam hai: &ldquo;padosi ke ghar do naam chal rahe hain, humare ghar
          ek hi kyun?&rdquo; Kisi ne CSC wale se bharwa liya, kisi ne khud portal par form
          daal diya, aur kuch mahine tak dono khaton mein do-do hazaar aata bhi raha. Phir
          achanak ek din ek naam ka status badal gaya, doosre par recovery ka message aa gaya.
          Ye kisi clerk ki galti nahi thi. Ye scheme ka wo rule tha jo shuru se likha hua hai,
          bas padha kam gaya.
        </p>

        <InfoBox type="info">
          PM Kisan ka beneficiary <strong>&ldquo;family&rdquo;</strong> hai — pati, patni aur
          naabaalig bachche (18 saal se kam) milkar ek unit. Is poore unit ko saal mein ek hi
          ₹6,000 milta hai, teen ₹2,000 ki kist mein. Zameen kam ho ya zyada, do naam par
          paisa dono haalat mein nahi banta.
        </InfoBox>

        <h2>Rule Ek Line Mein: Ginti Aadmi Ki Nahi, Ghar Ki Hoti Hai</h2>

        <p>
          Bahut si sarkari schemes vyakti ko unit maankar chalti hain — jitne log eligible,
          utne benefit. PM Kisan ka dhaancha ulta hai. Yahan pehle ye dekha jaata hai ki
          landholding kis <em>parivaar</em> ki hai, aur us parivaar ke andar se ek hi naam par
          grant nikalta hai. Isi wajah se pati-patni ka sawaal itni baar aata hai, kyunki dono
          ke naam par zameen bhi ho sakti hai, dono ke Aadhaar bhi alag hain, dono ke bank
          account bhi alag hain. Technically do registration ban jaate hain. Scheme ki nazar
          mein wo phir bhi ek hi dawa hai.
        </p>

        <p>
          Aur ek baat jo log der se samajhte hain — zameen ka area raqam par asar nahi daalta.
          Do bigha ho ya bees, saal bhar ka grant ₹6,000 hi rehta hai. Isliye &ldquo;humari
          zameen zyada hai, to humein dugna milna chahiye&rdquo; wali soch se koi doosra naam
          justify nahi hota.
        </p>

        <PmKisanFamilyChecker />

        <h2>Wo Case Jismein Ghar Se Do Naam Sach Mein Ban Jaate Hain</h2>

        <p>
          Ab us baat par aayein jo padosi ke ghar dikhti hai. Do naam kabhi-kabhi bilkul sahi
          hote hain, lekin uski wajah pati-patni nahi hoti — <strong>batwaara</strong> hoti
          hai.
        </p>

        <p>
          Maan lijiye ghar mein pita ke naam par das bigha zameen thi. Baalig bete ko char
          bigha alag karke revenue record mein uske naam par mutation ho gaya. Ab kaagaz par do
          khatedar hain, do alag landholding hain, aur scheme ki definition ke hisaab se do
          alag family unit. Aise mein pita ka bhi grant banta hai aur bete ka bhi. Ek hi
          chulhe par khana banta hoga, phir bhi ye duplicate nahi hai.
        </p>

        <p>
          Lekin yahan galti karne ki gunjaish poori hai. Log samajhte hain ki alag ration card
          bana lene se, ya bete ki shaadi ho jaane se, ya panchayat se &ldquo;alag
          parivaar&rdquo; ka certificate le aane se batwaara ho gaya. Nahi hua. Jab tak tehsil
          ke record mein zameen bete ke naam par transfer nahi hoti, tab tak wahi ek unit hai —
          aur doosra registration verification par gir jaata hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Ghar ki situation</th>
            <th>Kitne naam ban sakte hain</th>
            <th>Kyun</th>
          </tr>
          <tr>
            <td>Pati aur patni, zameen dono ke naam par</td>
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
            <td>Alag khatedar, alag family unit</td>
          </tr>
          <tr>
            <td>Baalig beta, zameen abhi pita ke naam par</td>
            <td>Ek</td>
            <td>Landholding ab bhi ek hi parivaar ki hai</td>
          </tr>
          <tr>
            <td>Vidhwa maa, zameen virasat mein uske naam par</td>
            <td>Apna alag</td>
            <td>Wo khud ek separate unit hai</td>
          </tr>
        </SchemeTable>

        <h2>Exclusion List — Yahan Poora Ghar Ek Saath Bahar Ho Jaata Hai</h2>

        <p>
          Family rule ka doosra pehlu ye hai ki exclusion bhi parivaar par lagti hai. Matlab
          agar ghar ka koi ek sadasya in categories mein aata hai, to us ghar ka koi bhi member
          PM Kisan nahi le sakta — chahe form kisi aur ke naam par ho.
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
          Sabse zyada recovery notices isi rule se aate hain. Ghar mein beta sarkari naukri
          mein lag gaya, ya ek saal income tax bhar diya gaya — aur pita ke naam par kist aati
          rahi. Verification jab data cross-check karta hai, to poora ghar ineligible nikalta
          hai aur ab tak ka paisa wapas maanga jaata hai.
        </InfoBox>

        <h2>Do Naam Par Paisa Aa Gaya Hai — Ab Kya Karein</h2>

        <p>
          Agar aapko padhte hue lag raha hai ki aapke ghar mein yahi hua hai, to sabse behtar
          raasta notice ka intezaar karna nahi hai. Khud aage badhkar theek karna sasta bhi
          padta hai aur jaldi bhi khatam hota hai.
        </p>

        <ol>
          <li>
            <strong>Pehle tay karein kis naam par claim rakhna hai.</strong> Aam taur par usi
            naam par rakhein jiske land record, Aadhaar aur bank account teeno mein naam ek
            jaisa likha ho. Spelling ka farak baad mein sabse zyada dikkat deta hai.
          </li>
          <li>
            <strong>Doosre naam ko portal se surrender karein.</strong> PM Kisan portal par
            &ldquo;Voluntary Surrender of PM-KISAN Benefit&rdquo; ka option hai. Wahan Aadhaar
            aur registration number se login karke naam hataya ja sakta hai.
          </li>
          <li>
            <strong>Refund ka hisaab lagayein.</strong> Jitni kist us naam par aa chuki hai,
            wahi wapas karni hoti hai — poora amount, kist ke hisaab se. Portal par refund ka
            challan ban jaata hai; usse jama karke receipt sambhaal lein.
          </li>
          <li>
            <strong>Bache hue naam ki e-KYC dobara verify karein.</strong> Surrender ke baad
            kabhi-kabhi active record ka status refresh hota hai. e-KYC, land seeding aur bank
            mapping — teeno par &ldquo;Yes&rdquo; dikhna chahiye.
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

        <h2>Ek Naam Chunna Hai — Kis Ke Naam Par Rakhein</h2>

        <p>
          Jab ghar se ek hi claim banta hai, to sawaal ye reh jaata hai ki naam kis ka rakhein.
          Yahan koi kaanooni majboori nahi hai — pati ho ya patni, dono chal jaata hai. Faisla
          practical aadhaar par karna chahiye, kyunki aage ki poori DBT chain usi naam se bandhi
          rehti hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Dekhne wali cheez</th>
            <th>Kyun maayne rakhti hai</th>
          </tr>
          <tr>
            <td>Land record mein naam kis ka darj hai</td>
            <td>Land seeding usi naam par match hoti hai; farak hone par kist hold rehti hai</td>
          </tr>
          <tr>
            <td>Aadhaar mein spelling kaisi hai</td>
            <td>e-KYC aur record ka naam alag ho to authentication fail hota hai</td>
          </tr>
          <tr>
            <td>Bank account NPCI mapper mein seeded hai ya nahi</td>
            <td>Bina seeding DBT return ho jaati hai, chahe status active dikhe</td>
          </tr>
          <tr>
            <td>Mobile number kis ke naam par active hai</td>
            <td>OTP aur payment SMS usi number par aate hain — badalna baad mein jhanjhat hai</td>
          </tr>
        </SchemeTable>

        <p>
          Ek chhoti si salah: jis naam par teeno kaagaz — land record, Aadhaar aur bank — ek
          jaise likhe hon, wahi naam chunein. Naam badalna baad mein sabse dheema kaam hai,
          kyunki wo tehsil aur bank dono jagah karana padta hai.
        </p>

        <h2>Kaise Pakda Jaata Hai — Data Ab Aapas Mein Juda Hua Hai</h2>

        <p>
          Pehle log soch lete the ki alag bank account aur alag mobile number rakhne se do
          registration pakde nahi jaayenge. Ab wo daur khatam ho gaya. Aadhaar e-KYC anivaarya
          hone ke baad har beneficiary ek unique identity se juda hai, land record digitize ho
          chuke hain, aur payment Aadhaar-linked NPCI mapper se hoti hai.
        </p>

        <p>
          Verification mein aam taur par teen cheezein match ki jaati hain — ek hi khasra ya
          khata number do file mein hai kya, ek hi ghar ke do Aadhaar par kist ja rahi hai kya,
          aur income tax ya sarkari salary ka data us ghar ke kisi Aadhaar se match ho raha hai
          kya. Teeno mein se koi ek hit ho jaaye, to file hold ho jaati hai. Isi liye kai baar
          saal-do saal chalne ke baad achanak paisa rukta hai — us waqt naya rule nahi lagta,
          bas purana record cross-check hota hai.
        </p>

        <h2>Wo Sawaal Jo Har Roz Poochhe Jaate Hain</h2>

        <h3>Patni ke naam par alag zameen hai, phir bhi nahi milega?</h3>
        <p>
          Nahi milega — dono ke naam par alag khata hone se bhi parivaar do nahi ho jaata.
          Shaadi ke baad pati-patni scheme ki definition mein ek unit hain, chahe zameen alag
          alag khaton mein ho. Ek naam chunna hi hoga.
        </p>

        <h3>Talaq ho gaya hai, to kya dono ka alag ban jaayega?</h3>
        <p>
          Kaanooni taur par alag ho jaane ke baad dono apne apne family unit hain, aur agar
          dono ke naam par apni zameen record mein hai to dono ka claim ban sakta hai. Yahan
          zaroori ye hai ki record mein zameen aur naam saaf ho — kachcha samjhauta kaafi nahi
          hota.
        </p>

        <h3>Patni ke naam par kist aa rahi thi, wo guzar gayi. Ab?</h3>
        <p>
          Us naam ki kist aage nahi aayegi. Sahi raasta ye hai ki pehle zameen ka mutation
          waaris ke naam par karaya jaaye, uske baad usi naam par naya registration ho. Purane
          naam par aaya paisa lene ki koshish karna recovery ka case banata hai.
        </p>

        <h3>Naabaalig bete ke naam par zameen hai, uska alag ban sakta hai?</h3>
        <p>
          Nahi. 18 saal se kam umar ke bachche usi parivaar mein ginte hain, chahe record mein
          unke naam par zameen ho. Baalig hone aur batwaara hone — dono ke baad hi baat aage
          badhti hai.
        </p>

        <h3>Do naam par paisa aa raha hai aur kuch nahi hua, to shayad theek hai?</h3>
        <p>
          Kist aana verification poori hone ka proof nahi hai. Kai case mein duplicate do-teen
          saal baad pakda gaya aur poora amount ek saath recover hua. Jitni der ruk kar theek
          karenge, refund utna bada banega.
        </p>

        <h3>Batai (tenant) par kheti karte hain, milta hai?</h3>
        <p>
          PM Kisan landholding par aadharit hai, is liye batai par kheti karne wale is scheme
          mein nahi aate. Kuch rajya apni scheme mein tenant farmer ko shamil karte hain —
          jaise Andhra Pradesh ka CCRC-based system. Apne rajya ki scheme{' '}
          <Link href="/rajya-yojana">rajya kisan yojana list</Link> mein dekh lein.
        </p>

        <h2>Chhoti Aadatein Jo Recovery Se Bacha Leti Hain</h2>

        <ul>
          <li>
            Ghar mein sirf ek hi naam par registration rakhein, aur uska registration number
            likh kar rakhein — poochhne par yahi kaam aata hai.
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
            Aadhaar aur bank dono mein ek hi mobile number rakhein, warna OTP aur SMS alag
            jagah jaayenge.
          </li>
          <li>
            Kisi bhi &ldquo;agent&rdquo; ke is dawe par bharosa mat karein ki wo ghar ke do
            naam chalwa dega. Wo paisa lekar wahi form bharega jo verification par girega, aur
            refund aapko bharna padega.
          </li>
        </ul>

        <h2>Aakhri Baat</h2>

        <p>
          PM Kisan ka family rule complicated nahi hai, bas ulta hai us soch se jo aam taur par
          hoti hai. Ginti aadmi ki nahi, ghar ki hoti hai — is liye pati-patni dono ka naam
          kabhi valid nahi banta, aur baalig bete ka naam sirf tab banta hai jab kaagaz par
          zameen bant chuki ho. Exclusion bhi isi hisaab se poore ghar par lagti hai, ek
          vyakti par nahi.
        </p>

        <p>
          Agar aapke ghar mein do naam chal rahe hain, to sabse samajhdari wala kadam aaj hi
          ek naam surrender karna aur us par gaya paisa wapas karna hai. Aur agar ek hi naam
          hai, to dhyan sirf teen cheezon par rakhein — e-KYC, land seeding aur bank ki NPCI
          mapping. Yeh teen theek hon, to kist apne aap aati rehti hai.
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
