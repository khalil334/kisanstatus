import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import ExternalLinkButton from '@/components/ui/ExternalLinkButton';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';
import KrishakBandhuChecker from '@/components/articles/rajya-yojana/tools/KrishakBandhuChecker';

const IMG_BASE = '/images/articles/rajya-yojna/krishak-bandhu-status-check-2026';

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
    q: 'Krishak Bandhu ka status Voter ID se kyun check karna padta hai?',
    a: 'West Bengal ne is yojana ke record ki buniyaad EPIC number par rakhi hai — wahi jo aapke Voter card par chhapa hota hai. Portal par mobile ya acknowledgement ID se bhi dhoondh sakte hain, magar EPIC daalne par result sabse saaf milta hai. Card dekh kar hi likhein: teen angrezi akshar, phir saat ank, bina space ke.',
  },
  {
    q: '"Account valid" likha hai, phir bhi paisa nahi aaya. Kya karun?',
    a: 'Is status ka matlab itna hi hai ki bank ne aapki details verify kar di hain — credit hona abhi baaki hai. File ab treasury ki qataar mein hai, is stage par branch jaane se kuch nahi badlega. Release ki khabar ke baad hafta bhar ruk kar passbook entry karwa lein.',
  },
  {
    q: 'Padosi ko paisa mil gaya, mujhe nahi — kya mera naam kat gaya?',
    a: 'Zaroori nahi. Yahan disbursal zila-war hota hai: state aadesh jaari karta hai aur phir har district treasury apni file apni raftaar se nikaalti hai. Isliye padosi gaon (ya padosi zile) mein credit pehle dikhna bilkul aam baat hai. Aapka naam list mein hai to bas kuch din ka farq hai, katne wali baat nahi.',
  },
  {
    q: 'Ek acre se kam zameen hai, kya kuch milega?',
    a: 'Haan, milega. Chhoti jot par raqam pro-rata ghatti hai, lekin ek minimum ke neeche kabhi nahi jaati — scheme ka jhukav chhote kisan ki taraf hi hai. Isi tarah bahut badi jot par bhi ek upper cap laga hai. To aapke aur kisi aur ke amount mein farq dikhe to ghabraane ki zaroorat nahi.',
  },
  {
    q: 'Bhagchasi (sharecropper) hoon, meri zameen nahi hai — main eligible hoon?',
    a: 'Ji haan, bhagchasi cover hote hain — shart sirf itni hai ki aapki kheti ka record panchayat ya agriculture department ke paas darj ho. Bina record ke claim aage nahi badhta, is liye pehla kaam apna naam register karwana hai. Landless khetmajur ke liye enrolment ka intezaam camps ke through alag se hota hai.',
  },
  {
    q: 'Death benefit kis-kis ko milta hai?',
    a: 'Ye raqam registered kisan ke legal heir ya nominee ko milti hai, aur sirf ek baar. Shart umar ki hai — mrityu ke waqt kisan 18 se 60 ke beech ho; zameen kitni thi, is component mein iska koi role nahi. Claim der se karne par time-barred hone ka khatra rehta hai, to jitne kagaz haath mein hain unhi ke saath block office mein form daal dein.',
  },
  {
    q: 'Naam list mein hai lekin paisa nahi aaya — kahan jaana chahiye?',
    a: 'List aapko sahi darwaaza batati hai. Naam maujood hai magar credit nahi aaya — mamla bank ya treasury ka hai, branch mein poochhein. Naam sire se gayab hai — mamla eligibility ya khatian ka hai, block agriculture office ya BL&LRO jaayein. Rejection ka asli kaaran sirf block office ki file ke remark mein likha milta hai.',
  },
];

export default function KrishakBandhuStatusCheck({ article }: { article: RajyaYojanaArticleMeta }) {

  return (
    <>

      <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Krishak Bandhu Status Check: Voter ID Se Payment, List Aur Death Benefit
        </h1>

        <Fig
          src="hero.webp"
          alt="West Bengal ka kisan apne dhaan ke khet ke paas Voter ID card ke saath khada hai"
          caption="Krishak Bandhu — West Bengal ke kisanon ki income-support yojana"
          priority
        />

        <p>
          Bengal ke gaon mein kist ke dinon ka ek apna hi mahaul hota hai. Kisi ke phone par
          SMS aa jaata hai, kisi ke padosi ke account mein paisa dikh jaata hai, aur teesre
          aadmi ka account waisa hi khaali pada rehta hai. Wahi se sawaal shuru hota hai — mera
          kyun nahi aaya? Krishak Bandhu mein iska jawab lagbhag hamesha teen jagah chhupa hota
          hai: aapke land record mein, aapke bank account ki halat mein, ya district treasury ki
          queue mein. Ye page teeno ko alag-alag khol kar samjhata hai, taaki aap sirf intezaar
          na karein — asli wajah pakad sakein.
        </p>

        <InfoBox type="info">
          Krishak Bandhu ka data land record se juda hai, isliye zameen ke kagaz mein koi bhi
          badlaav — kharid, batwara, virasat — seedha aapki kist par asar daalta hai. Naam list
          se gayab hone ki sabse aam wajah yahi hoti hai, na ki koi &ldquo;online galti&rdquo;.
        </InfoBox>

        <h2>Ye Scheme Asal Mein Do Alag Cheezein Hain</h2>

        <p>
          Log ise ek scheme samajhte hain, lekin Krishak Bandhu ke andar do component hain jo
          alag-alag chalte hain. Pehla hai <strong>assured income support</strong> — saal mein do
          baar, Kharif aur Rabi season par, aapke bank account mein seedha paisa. Doosra hai{' '}
          <strong>death benefit</strong> — registered kisan ki mrityu par uske parivaar ko ek
          baar milne wali ek-mushht raqam.
        </p>

        <p>
          Farak samajhna zaroori hai, kyunki dono ke rules ek jaise nahi hain. Income support
          zameen ke area par nirbhar karta hai aur umar se koi lena-dena nahi rakhta. Death
          benefit ka poora dhaancha ulta hai — usmein umar ki ek band hai (18 se 60 saal) aur
          zameen ka area maayne nahi rakhta. Ek hi kisan pehle component mein ho sakta hai aur
          doosre se bahar, aur ye normal hai.
        </p>

        <SchemeTable>
          <tr>
            <th>Component</th>
            <th>Kis par nirbhar</th>
            <th>Kab milta hai</th>
          </tr>
          <tr>
            <td>Assured income support</td>
            <td>Cultivable land ka area (ROR mein darj)</td>
            <td>Saal mein do baar — Kharif aur Rabi</td>
          </tr>
          <tr>
            <td>Death benefit</td>
            <td>Registered kisan ki umar 18–60 ke andar honi chahiye</td>
            <td>Ek hi baar, claim manzoor hone par</td>
          </tr>
        </SchemeTable>

        <h2>Kitna Paisa Banta Hai — Slab Ka Asli Logic</h2>

        <p>
          Income support ka hisaab per-acre chalta hai, lekin usmein neeche ek floor aur upar ek
          ceiling — dono lage hue hain. Ek acre ya usse zyada cultivable land par poora annual
          grant banta hai. Ek acre se kam par hisaab pro-rata hota hai, magar ek nyoontam raqam
          se neeche nahi jaata. Aur bahut zyada zameen hone par bhi grant upar ki limit paar
          nahi karta — is scheme ka jhukav chhote aur seemant kisan ki taraf hai.
        </p>

        <p>
          Yahi wajah hai ki do padosi kisanon ko alag-alag raqam mil sakti hai aur dono hi
          &ldquo;sahi&rdquo; ho sakte hain. Bhagchasi (sharecropper) bhi is scheme mein aate
          hain — bas unka record panchayat/department ke paas recorded hona chahiye. Aur jinke
          paas apni zameen bilkul nahi hai, unke liye landless khetmajur wala alag track banaya
          gaya hai, jiska enrolment camp ke zariye hota hai aur portal par section bhi alag hai.
        </p>

        <p>
          Neeche diya tool aapki zameen aur umar par yahi slab logic laga kar batata hai ki
          annual grant kitna banega, ek kist mein kitna aayega, death benefit lagu hai ya nahi,
          aur aapke case mein kaun-kaun se kagaz lagenge. Sab hisaab aapke phone mein hota hai —
          na koi login, na koi data kahin bhejna.
        </p>

        <KrishakBandhuChecker />

        <h2>Krishak Bandhu Status Check Voter ID Se — Poora Tareeka</h2>

        <p>
          Baaki state schemes Aadhaar ko primary key banati hain, lekin Krishak Bandhu ki
          pehchaan ka mukhya zariya <strong>Voter ID (EPIC number)</strong> hai. Isliye search
          karte waqt EPIC number sabse bharosemand option rehta hai.
        </p>

        <Fig
          src="epic-status-check-phone.webp"
          alt="Kisan apne phone par Voter ID (EPIC) number se Krishak Bandhu status check kar raha hai"
          caption="EPIC number card se milaa kar hi bharein — ek ank ki galti par record nahi milta"
        />

        <ol>
          <li>
            Official portal <code>krishakbandhu.wb.gov.in</code> kholein. Kisi bhi
            &ldquo;.net&rdquo; ya &ldquo;.com&rdquo; wale milte-julte naam par mat jaayein —
            wo private websites hain.
          </li>
          <li>Homepage par status check ya farmer search wala section chunein.</li>
          <li>
            Search option mein Voter ID / EPIC chunein. Aksar Aadhaar, mobile number aur
            acknowledgement ID ke option bhi rehte hain.
          </li>
          <li>
            EPIC number bilkul waise likhein jaise card par hai — teen angrezi akshar phir
            saat ank. Space na chhodein.
          </li>
          <li>Captcha bharein aur search dabaayein.</li>
          <li>
            Screen par aapka naam, gaon, block, land area aur current stage aa jaayega. Isi
            page ka screenshot rakh lena aage kaam aata hai.
          </li>
        </ol>

        <ExternalLinkButton
          href={article.officialPortal}
          label="Official Krishak Bandhu portal par status check karein"
        />

        <InfoBox type="tip">
          Search se pehle apna EPIC number Voter ID card se milaa lein. Ek ank ki galti par
          portal &ldquo;no record found&rdquo; dikha deta hai, aur log samajh lete hain ki naam
          list se kat gaya — jabki dikkat sirf typing ki thi.
        </InfoBox>

        <h2>Status Mein Likhi Baat Ka Matlab Kya Hai</h2>

        <p>
          Portal jo shabd dikhata hai, unka matlab technical hai. Sahi matlab pata ho to aap
          bina bank ya office ke chakkar lagaye samajh sakte hain ki kya karna chahiye.
        </p>

        <SchemeTable>
          <tr>
            <th>Status</th>
            <th>Iska matlab</th>
            <th>Aapko kya karna chahiye</th>
          </tr>
          <tr>
            <td>Under process</td>
            <td>Application record mein hai, verification chal raha hai</td>
            <td>Intezaar karein; baar-baar naya form bharne se kaam nahi banta</td>
          </tr>
          <tr>
            <td>Approved / sanctioned</td>
            <td>Eligibility maan li gayi, payment file banni hai</td>
            <td>Kuch nahi — agli stage treasury ke paas hai</td>
          </tr>
          <tr>
            <td>Account valid</td>
            <td>Bank details bank ne verify kar di hain</td>
            <td>Yahi sabse achhi nishani hai; paisa isi account mein aayega</td>
          </tr>
          <tr>
            <td>Amount sent / disbursed</td>
            <td>Paisa release ho chuka hai</td>
            <td>Passbook update karwaayein; SMS na aana normal hai</td>
          </tr>
          <tr>
            <td>Rejected / cancelled</td>
            <td>Verification mein kuch mismatch mila</td>
            <td>Block agriculture office se kaaran poochein aur usi ko theek karwaayein</td>
          </tr>
        </SchemeTable>

        <p>
          Ek baat khaas dhyan dein: <strong>account valid</strong> ka matlab paisa aa gaya nahi
          hai. Iska matlab sirf itna hai ki bank ne aapka account number aur naam sahi maan liya
          hai. Log yahan atak kar bank ke chakkar lagane lagte hain, jabki asal mein unhein
          agle release ka intezaar karna hai.
        </p>

        <h2>Padosi Ko Mil Gaya, Mujhe Nahi — Ye Kyun Hota Hai</h2>

        <p>
          Yahi sawaal sabse zyada poocha jaata hai, aur iska jawab PM Kisan aur Krishak Bandhu
          ke bilkul alag paisa-bhejne ke tareeke mein hai. PM Kisan central DBT switch se chalta
          hai — release hone par desh bhar mein lagbhag ek hi samay paisa girta hai. Krishak
          Bandhu ka paisa <strong>district treasury</strong> ke raste jaata hai. State release
          ka aadesh deta hai, phir har zile ki treasury apni raftaar se file process karti hai.
        </p>

        <p>
          Nateeja: ek zile ka kisan aaj paisa dekh leta hai, padosi zile ka kisan teen din baad,
          aur kisi ka poora hafta lag jaata hai. Ye kharaabi nahi, system ka dhaancha hai. Isi
          liye release ki khabar aane ke baad pehle hafte mein ghabraana zaroori nahi — us dauran
          bank ki line mein lagne se kuch hasil nahi hota.
        </p>

        <Fig
          src="bank-passbook-update.webp"
          alt="Rural bank branch mein kisan passbook update karwa raha hai"
          caption="Release ke baad hafte bhar mein passbook update karwaayein — SMS na aana aam baat hai"
        />

        <h2>Beneficiary List Mein Apna Naam Kaise Dekhein</h2>

        <p>
          Agar status search bar-bar khaali aa raha hai, to gaon ki list dekhna agla qadam hai.
          List se do cheezein pakki hoti hain — aapka naam active hai, aur aapke naam ke saath
          darj land area wahi hai jo hona chahiye.
        </p>

        <ol>
          <li>Portal ke reports ya beneficiary list wale section mein jaayein.</li>
          <li>Zila, block aur gram panchayat — teeno dropdown apne hisaab se set karein.</li>
          <li>Financial year aur season (Kharif ya Rabi) select karein.</li>
          <li>
            List generate karein — kai bar ye PDF ke roop mein aati hai. Naam ke saath area ka
            column bhi zaroor mila lein.
          </li>
        </ol>

        <p>
          List mein naam hai lekin paisa nahi aaya — matlab dikkat payment side par hai (bank
          account, NPCI mapping, ya treasury queue). Naam hi nahi hai — matlab dikkat
          eligibility ya land record side par hai. Ye ek chhota sa test hai jo aapko sahi
          darwaaze tak pahuncha deta hai.
        </p>

        <h2>Paisa Ruk Jaane Ki Aam Wajahein</h2>

        <h3>Land record mein mutation nahi hua</h3>
        <p>
          Zameen kharidi ya virasat mein mili, magar khatian mein naam nahi chadha — to scheme
          ki nazar mein zameen ka malik aap nahi hain. Ye sabse aam aur sabse zyada nazarandaaz
          ki jaane wali wajah hai. Iska hal BL&amp;LRO office mein mutation karwana hai, portal
          par kuch bharna nahi.
        </p>

        <Fig
          src="blro-land-record-office.webp"
          alt="BL&LRO office mein kisan khatian ke kagaz officer ke saath milaa raha hai"
          caption="Khatian ka har badlaav — kharid, batwara, virasat — BL&LRO office se hi durust hota hai"
        />

        <h3>Bank account dormant ho gaya</h3>
        <p>
          Jis account mein saal mein do baar hi paisa aata hai, wo aksar bahut kam chalta hai
          aur bank use dormant kar deta hai. Aise account mein credit fail ho jaata hai. Bank ki
          branch mein KYC dobara karwa kar account active karwana padta hai.
        </p>

        <h3>Naam ki spelling mismatch</h3>
        <p>
          Voter ID mein ek spelling, bank mein doosri, khatian mein teesri — verification isi
          par ruk jaata hai. Sudhaar ka sabse asaan raasta ye hai ki aap ek document ko
          &ldquo;master&rdquo; maan lein aur baaki do ko uske hisaab se theek karwaayein.
        </p>

        <h3>Ek hi zameen par do dawe</h3>
        <p>
          Batware ke baad bhai-bhai ek hi plot par alag-alag registration kara dete hain.
          Verification drive mein aisa duplicate pakda jaata hai aur dono ki payment tab tak ruk
          jaati hai jab tak record saaf na ho. Ye block office mein hi sulajhta hai.
        </p>

        <h3>Joint khatian mein hissa saaf nahi</h3>
        <p>
          Kai gharon mein khatian sabhe bhaiyon ke naam saath hai, hissa alag likha nahi hota.
          Aise mein per-acre hisaab lagana mushkil ho jaata hai aur file pending pad jaati hai.
          Ek baar hissa record mein darj ho jaaye, to har saal ka jhanjhat khatam ho jaata hai.
        </p>

        <h2>Death Benefit — Parivaar Ke Liye Kya Karna Hota Hai</h2>

        <p>
          Ye component tab kaam aata hai jab registered kisan ki mrityu ho jaaye aur uski umar
          18 se 60 ke beech ho. Grant ek hi baar milta hai aur legal heir ya nominee ko diya
          jaata hai. Claim mein aksar deri kagaz ki wajah se hoti hai, is liye pehle se list
          bana lena behtar hai.
        </p>

        <ul>
          <li>Death certificate ki attested copy</li>
          <li>Marne wale kisan ka Krishak Bandhu record / card ki copy</li>
          <li>Kisan aur claim karne wale — dono ka ID proof (Voter ID ya Aadhaar)</li>
          <li>Umar ka proof, taaki 18–60 ki shart verify ho sake</li>
          <li>Zameen ka authenticated ROR</li>
          <li>Claimant ka self-declaration</li>
          <li>Claimant naabaalig ho to legal guardian ka declaration</li>
          <li>Accidental death ke case mein post-mortem report</li>
        </ul>

        <InfoBox type="warning">
          Death benefit claim ki apni samay-seema hoti hai. Mrityu ke baad file karne mein
          zyada der karne par claim technically time-barred ho sakta hai — is liye kagaz jamaa
          hote hi block agriculture office mein form dena behtar hai, ideal kagaz ka intezaar
          karne se nahi.
        </InfoBox>

        <h2>Jab Kuch Samajh Na Aaye To Kahan Jaana Hai</h2>

        <p>
          Sahi darwaaza chunna aadha kaam kar deta hai. Galat jagah jaane se sirf din barbaad
          hota hai.
        </p>

        <Fig
          src="duare-sarkar-camp.webp"
          alt="Duare Sarkar jaise sarkari camp mein gaon ke log form jama kar rahe hain"
          caption="Naya registration ya sudhaar — duare sarkar camp ya block agriculture office sabse seedha raasta hai"
        />

        <SchemeTable>
          <tr>
            <th>Dikkat</th>
            <th>Kahan jaana hai</th>
          </tr>
          <tr>
            <td>Naam list mein nahi hai / registration nahi hua</td>
            <td>Block agriculture office, ya duare sarkar type camp</td>
          </tr>
          <tr>
            <td>Khatian mein naam ya area galat hai</td>
            <td>BL&amp;LRO (land records) office</td>
          </tr>
          <tr>
            <td>Account valid dikh raha hai, paisa nahi aaya</td>
            <td>Pehle ek hafta ruko; phir bank branch mein credit poochho</td>
          </tr>
          <tr>
            <td>Account dormant ya band</td>
            <td>Bank branch — KYC aur reactivation</td>
          </tr>
          <tr>
            <td>Rejected likha hai, kaaran nahi pata</td>
            <td>Block agriculture office — file par remark wahi dikhta hai</td>
          </tr>
        </SchemeTable>

        <h2>Kist Ka Time Kaisa Rehta Hai</h2>

        <p>
          Saal mein do release hote hain — ek Kharif season ke aas-paas aur doosra Rabi ke
          aas-paas. Practically dekha gaya hai ki dates har saal thodi aage-peeche hoti rehti
          hain, kyunki verification aur treasury processing ka waqt lagta hai. Isliye kisi bhi
          &ldquo;pakki tareekh&rdquo; wale WhatsApp forward par bharosa karna theek nahi.
        </p>

        <p>
          Behtar aadat ye hai: release ki khabar aane par apna status khud check karein, aur agar
          account valid dikh raha hai to hafta bhar sabr karein. Isi dauran passbook update
          karwaate rahein — kai baar paisa aa jaata hai aur SMS aata hi nahi, khaas kar jab bank
          mein purana mobile number chadha ho.
        </p>

        <h2>Chhoti Aadatein Jo Har Saal Bachaati Hain</h2>

        <ul>
          <li>
            Status check karte waqt screenshot le lein — baad mein office mein baat karne par
            yahi sabse kaam ka kagaz hota hai.
          </li>
          <li>
            Bank ke record aur Voter ID/Aadhaar — dono jagah ek hi chaalu mobile number rakhein,
            warna credit ka SMS kisi purane number par chala jaayega aur aapko pata hi nahi
            chalega.
          </li>
          <li>
            Zameen ka koi bhi lena-den hone ke turant baad mutation karwaayein, kist ke season
            ka intezaar na karein.
          </li>
          <li>
            Season shuru hone se pehle ek baar khaali passbook entry karwa lein, taaki account
            dormant na pade.
          </li>
        </ul>

        <h2>Bengal Se Bahar Ke Kisan Yahan Dekhein</h2>

        <p>
          West Bengal ka nivasi nahi hain to Krishak Bandhu aap par laagu nahi hoti — aur Voter
          ID wali pehchaan ka tareeka bhi kisi doosre rajya mein nahi milta. Apne rajya ka
          hisaab yahan padhein:
        </p>

        <ul>
          <li>
            <Link href="/rajya-yojana/odisha-cm-kisan-status-check-2026">
              Odisha CM Kisan — KALIA ka naya roop aur bhoomiheen parivaar ka benefit
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/annadata-sukhibhava-status-check-2026">
              Andhra Pradesh Annadata Sukhibhava — bataidar kisan bhi cover hote hain
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
              Madhya Pradesh CM Kisan Kalyan Yojana — kist aur SAARA portal status
            </Link>
          </li>
          <li>
            <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
              Sabhi rajyon ka amount aur portal ek saath — comparison table
            </Link>
          </li>
        </ul>

        <h2>Krishak Bandhu — Aksar Poochhe Jaane Wale Sawaal</h2>

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
          <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">Krishak Bandhu status, slab aur death benefit FAQ 2026</p>
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
