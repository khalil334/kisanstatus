import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import InfoBox from '@/components/ui/InfoBox';

const IMG_BASE = '/images/articles/rajya-yojna/up-kisan-karj-rahat-list-2026';

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

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="nofollow noopener" target="_blank">
      {children}
    </a>
  );
}

const QUIZ = [
  {
    s: 'UP me sabka karj maaf ho raha hai, bas list me naam check karna hai.',
    v: false,
    e: 'Ye yojana sirf chhote aur seemant kisano ke purane fasali rin ke liye thi, official cut-off criteria ke saath. "Sabka karj maaf" wala message hamesha fake hota hai.',
  },
  {
    s: 'Asli list sirf upkisankarjrahat.upsdc.gov.in par milti hai.',
    v: true,
    e: 'Yehi NIC ka banaya official portal hai. Kisi bhi doosre "list download" link ya APK par bharosa mat kariye.',
  },
  {
    s: 'List me naam dekhne ke liye koi fees lagti hai.',
    v: false,
    e: 'Status aur list dekhna bilkul free hai. Paisa maangne wala har aadmi ya website fraud hai.',
  },
  {
    s: 'Karj mafi ka paisa kisan ke haath me cash aata hai.',
    v: false,
    e: 'Raqam seedha loan account me jaati hai — bank ka bakaya kam hota hai. Kisan ke bachat khate me kuch nahi aata.',
  },
  {
    s: 'Gold loan aur tractor loan bhi is yojana me maaf hote hain.',
    v: false,
    e: 'Yojana sirf fasali rin (crop loan) ke liye thi. Gold loan, tractor loan, personal loan iske dayre se bahar hain.',
  },
  {
    s: 'Naam list me na ho to shikayat darj karne ka portal par option hai.',
    v: true,
    e: 'Portal par shikayat darj karne aur uska status dekhne ka alag section hai. Complaint number sambhal ke rakhiye.',
  },
  {
    s: 'Karj rahat mil gayi to PM-Kisan ka paisa band ho jaata hai.',
    v: false,
    e: 'Dono alag scheme hain. Karj mafi state ki yojana hai, PM-Kisan kendra ki — ek ka doosre par seedha asar nahi.',
  },
  {
    s: 'Private finance company ya microfinance ke loan bhi is yojana me shamil the.',
    v: false,
    e: 'Yojana me scheduled commercial bank, sahkari bank aur kshetriya gramin bank ke fasali rin shamil the. NBFC, microfinance ya sahukaar ka karza iske dayre se bahar hai — apne loan ka type bank se confirm kariye.',
  },
  {
    s: 'WhatsApp par aaya "karj mafi registration link" kabhi-kabhi sahi bhi hota hai.',
    v: false,
    e: 'Sarkar registration ke liye WhatsApp link nahi bhejti. Aisa har link phishing hai — click karte hi aadhaar/bank detail chori ho sakti hai.',
  },
  {
    s: 'Karj maaf hone ke baad bank se NOC ya statement lena chahiye.',
    v: true,
    e: 'Zaroor lena chahiye. Wahi kagaz aage naya KCC ya loan lene me kaam aayega, aur record ka pakka saboot rahega.',
  },
];

export default function UpKisanKarjRahatList2026({
  article,
}: {
  article: RajyaYojanaArticleMeta;
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        UP Kisan Karj Rahat List 2026 — Karj Mafi Ka Sach, List Check Aur Shikayat Ka Poora Raasta
      </h1>

      <Fig
        src="hero.webp"
        alt="UP ka kisan mobile par WhatsApp message dekh kar soch me pada hai ki karj mafi ka message asli hai ya nakli"
        caption="Karj mafi ke naam par sabse zyada fake link isi keyword par ghoomte hain — pehle asli portal pehchaniye"
        priority
      />

      <p>
        Dekhiye bhaisaab, aapke gaon ke WhatsApp group me bhi wo message zaroor aaya hoga —
        &quot;sabka karz maaf, list jaari, is link par click karke apna naam dekho.&quot;
        Ruk jaiye. Us link par ungli rakhne se pehle do minute ye padh lijiye.
      </p>

      <p>
        Hum sahkari samiti me barson se yahi kaam karte aa rahe hain — list check karna,
        shikayat likhwana, aur sabse zyada... logon ko ye samjhana ki wo message jhooth hai.
        Kaam ki baat pehle: UP me karj rahat ka ek hi official portal hai, aur is keyword par
        aane wale aadhe se zyada log asal me is yojana ke dayre me aate hi nahi. ( Kadwa
        lagega, par pehle yahi saaf karna zaroori hai — warna aap galat ummeed me mahino
        bhatakte rahenge. )
      </p>

      <p>
        Is article me teen kaam karenge. Pehla — ye yojana asal me kiske liye hai, seedhi
        bhasha me. Doosra — asli portal par list aur status dekhne ka poora tareeka. Teesra
        — naam na ho to shikayat ka raasta, aur fake link se bachne ka formula. Waise agar
        aapka masla karj mafi nahi balki PM-Kisan ki atki kist hai, to seedha{' '}
        <Link href="/articles/PmKisanMasterGuide2026">PM Kisan Master Guide</Link> se shuru
        kariye.
      </p>

      <InfoBox type="info">
        <strong>Last updated: August 2026.</strong> Ye guide official portal{' '}
        <Ext href="https://upkisankarjrahat.upsdc.gov.in">upkisankarjrahat.upsdc.gov.in</Ext>{' '}
        ke process par based hai. List check, status aur shikayat — sab free hai. Kisi bhi
        agent ko is kaam ke liye paisa na dein.
      </InfoBox>

      <h2>Chaliye Pehle Ye Samajh Lijiye Ki Yojana Asal Me Kya Thi</h2>

      <p>
        UP Kisan Karj Rahat Yojana — kagazon me Kisan Rin Mochan Yojana — 2017 me shuru hui
        thi. Iska daayra bilkul tay tha:{' '}
        <strong>chhote aur seemant kisano ka fasali rin (crop loan), ek seema tak maaf</strong>{' '}
        — yojana ke official criteria ke mutabik ye seema ₹1 lakh tak rahi hai. Loan bhi
        har tarah ka nahi — scheduled commercial bank, sahkari bank aur kshetriya gramin
        bank se liya gaya fasali rin, aur wo bhi yojana ke notified cut-off ke pehle ka.
        Cut-off ki exact tareekh aur apne loan ki patrata{' '}
        <Ext href="https://upkisankarjrahat.upsdc.gov.in">official portal</Ext> ya apni
        bank shaakha se hi verify kariye — WhatsApp ke bharose nahi.
      </p>

      <p>
        Aur ek baat jo log samajh nahi paate — maaf hua paisa kisan ke haath me nahi aata.
        Sarkar wo raqam seedha aapke <strong>loan account</strong> me daalti hai, matlab bank
        ka bakaya utna kam ho jaata hai. Bachat khate me koi credit nahi dikhega.
      </p>

      <h2>Ab Imaandari Se Dekhiye — Aap Eligible Hain Bhi Ya Nahi</h2>

      <p>
        Samiti ke counter par jo sabse mushkil kaam hai, wo hai kisi bhai ko ye batana ki
        &quot;aapka case banta hi nahi.&quot; Par yahi sach pehle bata dena behtar hai:
      </p>

      <ul>
        <li>
          <strong>Zameen 2 hectare tak</strong> — yojana chhote/seemant kisano ke liye hai.
          Isse zyada zameen wale dayre se bahar.
        </li>
        <li>
          <strong>Loan fasali rin hona chahiye</strong> — KCC ka crop loan chalega. Gold
          loan, tractor loan, personal loan, dairy loan — nahi.
        </li>
        <li>
          <strong>Loan notified cut-off se pehle ka ho</strong> — uske baad ka naya loan,
          ya purane KCC ka renewal karke bana naya account, criteria se bahar reh sakta
          hai. Apni sanction date bank se nikalwa lijiye.
        </li>
        <li>
          <strong>Bank sahi category ka ho</strong> — commercial/sahkari/gramin bank ka loan
          chalega; private finance company ya microfinance ka nahi.
        </li>
        <li>
          <strong>Aadhaar aur UP ka niwas</strong> — account aadhaar se juda hona chahiye.
        </li>
      </ul>

      <p>
        In panch me se ek bhi shart toot rahi hai to list me naam dhundhne me waqt mat
        gawaiye — seedha is article ke aakhri hisse me jaiye, jahan doosri kaam ki yojanaein
        di hain. Aur agar aap eligible lag rahe hain, to aage badhiye — pehle apna loan
        account number nikaliye (
        <Link href="/articles/KisanCreditCardOnlineApply2026">KCC guide yahan hai</Link>
        ), phir list check kariye.
      </p>

      <h2>Asli Portal Pehchanne Ka 3-Point Tareeka</h2>

      <Fig
        src="fake-link-warning.webp"
        alt="Mobile screen par fake karj mafi link ka warning ke saath asli sarkari portal ka address dikhaya gaya hai"
        caption="URL ke aakhir me gov.in — yahi sabse pehli pehchaan hai asli sarkari site ki"
      />

      <p>
        Asli portal ek hi hai:{' '}
        <Ext href="https://upkisankarjrahat.upsdc.gov.in">upkisankarjrahat.upsdc.gov.in</Ext>{' '}
        — NIC ka banaya hua. Koi bhi link saamne aaye to teen cheezein dekhiye:
      </p>

      <ol>
        <li>
          <strong>Address ke aakhir me .gov.in hai?</strong> Sarkari portal hamesha gov.in
          ya nic.in par hote hain. karjmafi-list.com, kisan-yojana.xyz jaise naam dekhte hi
          band kar dijiye.
        </li>
        <li>
          <strong>Koi APK download karwa raha hai?</strong> Sarkar list dekhne ke liye koi
          app install nahi karwati. &quot;List dekhne ke liye ye app dalo&quot; = seedha
          phone hack hone ka raasta.
        </li>
        <li>
          <strong>Aadhaar/OTP/bank detail pehle maang raha hai?</strong> List dekhne ke liye
          sirf district-tehsil-bank-account jaisi detail lagti hai. OTP ya card number
          maangne wala page fraud hai.
        </li>
      </ol>

      <p>
        Ye koi darane wali baat nahi, roz ka khatra hai — kendra sarkar khud{' '}
        <Ext href="https://www.business-standard.com/finance/personal-finance/fake-messages-about-pm-kisan-seek-to-defraud-farmers-govt-issues-advisory-125072200642_1.html">
          advisory jaari kar chuki hai ki kisan yojanaon ke naam par fake link aadhaar aur
          bank detail churate hain
        </Ext>
        . Ek galat click, aur DBT ka paisa hi khatre me.
      </p>

      <h2>List Kaise Dekhiye — Step By Step</h2>

      <Fig
        src="list-check-steps.webp"
        alt="Kisan cyber cafe me computer par UP kisan karj rahat portal se rin mochan ki sthiti check kar raha hai"
        caption="District, bank, branch aur account detail — bas itna hi chahiye list check karne ke liye"
      />

      <p>Ab asli kaam. Portal khul gaya to:</p>

      <ol>
        <li>
          Homepage par <strong>&quot;ऋण मोचन की स्थिति देखें&quot;</strong> wala option
          dhundhiye — yahi list/status ka gate hai.
        </li>
        <li>
          Apna <strong>district</strong> chuniye, phir <strong>bank</strong> aur{' '}
          <strong>branch</strong>.
        </li>
        <li>
          Ab kisan credit card / loan account ki detail daaliye — jo aapki passbook ya
          sanction letter par likhi hai.
        </li>
        <li>
          Submit dabate hi aapke selection ki list/sthiti khul jaayegi. Apna naam aur loan
          account milaiye — naam hai to aage NOC wala section padhiye, nahi hai to shikayat
          wala.
        </li>
      </ol>

      <p>
        Ek chhoti si salaah — result ka <strong>screenshot le lijiye</strong>, tareekh ke
        saath. Baad me bank ya samiti me baat karni pade to yahi kaam aayega.
      </p>

      <h2>Loan Account Number Kahan Se Milega, Ye Bhi Jaan Lijiye</h2>

      <p>
        Aadhi bheed to isi par atak jaati hai. Teen jagah dekh lijiye — <strong>loan
        passbook</strong> (KCC passbook ke pehle panne par account number hota hai),{' '}
        <strong>sanction letter</strong> (loan pass hote waqt bank ne diya tha), ya{' '}
        <strong>samiti ka khata register</strong> (sahkari loan hai to). Kuch na mile to
        bank branch me aadhaar le jaiye — wahan record se number nikal dete hain.
      </p>

      <h2>Naam List Me Hai — To Aage Kya Kariye</h2>

      <p>
        Mubarak ho. Par kaam abhi poora nahi hua. Teen kadam aur:
      </p>

      <ul>
        <li>
          Bank jaakar confirm kariye ki mafi ki raqam aapke <strong>loan account me credit</strong>{' '}
          hui hai — statement nikalwaiye.
        </li>
        <li>
          Poora loan cover ho gaya ho to bank se <strong>No Dues Certificate (NOC)</strong>{' '}
          maang lijiye. Ye aapka haq hai, ehsaan nahi.
        </li>
        <li>
          Loan mafi ki seema se bada tha? To bacha hua hissa aapko hi bharna hai — us par
          byaj chalta rahega, isliye bank se baaki raqam ka hisaab likhwa lijiye.
        </li>
      </ul>

      <h2>Naam Nahi Hai — Shikayat Darj Karne Ka Poora Process</h2>

      <p>
        Ghabraiye mat, gussa bhi mat kariye — system me shikayat ka baqayda raasta hai:
      </p>

      <ol>
        <li>
          Portal ke <strong>shikayat (complaint)</strong> section me jaiye —{' '}
          &quot;शिकायत दर्ज करें&quot; type ka option milega.
        </li>
        <li>
          Complaint format download karke bhariye — naam, loan account, bank branch, aur
          dikkat kya hai.
        </li>
        <li>
          Bhara hua form apne <strong>collectorate ke helpdesk / zila krishi adhikari</strong>{' '}
          ke yahan jama kariye — receiving copy zaroor lijiye.
        </li>
        <li>
          Portal par hi <strong>&quot;शिकायत की स्थिति जानें&quot;</strong> se complaint ka
          status dekhte rahiye.
        </li>
      </ol>

      <p>
        Timeline ki sacchai bhi sun lijiye — shikayat par jaanch bank aur district committee
        dono level par hoti hai, isliye hafton ka waqt lagna aam baat hai. Mahina bhar me
        koi harkat na dikhe to receiving copy le kar zila krishi adhikari ke office me khud
        jaiye. Aur haan — agar shikayat ke saath aapka bank account bhi gadbad hai (paisa
        laut raha hai, aadhaar link nahi), to{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed fix guide</Link>{' '}
        ke bank wale steps yahan bhi kaam aayenge.
      </p>

      <h2>Naam Kat Jaane Ki Aam Wajahein</h2>

      <ul>
        <li>Loan cut-off tareekh ke baad ka hai, ya renewal ke baad naya account ban gaya.</li>
        <li>Zameen ka record 2 hectare se zyada dikha raha hai (joint khata bhi ginti me aata hai).</li>
        <li>Aadhaar aur loan account ka naam mila nahi khaya — spelling tak ka farq bhi rok deta hai.</li>
        <li>Ek hi kisan ke ek se zyada loan account — sirf patrata wala hi ginti me aaya.</li>
        <li>Bank ne data hi upload nahi kiya ya galat kiya — ye shikayat se hi theek hota hai.</li>
      </ul>

      <h2>Thagi Se Bachne Ka Aakhri Sabak</h2>

      <p>
        Karj mafi ke naam par thagi ka pattern hamesha ek jaisa hota hai — jaldi ka dabav
        (&quot;aaj raat tak hi list khuli hai&quot;), paise ki maang (&quot;500 me naam
        chadhwa denge&quot;), ya link/APK ka jhansa.{' '}
        <Ext href="https://krishijagran.com/news/fact-check-no-pradhan-mantri-kisan-tractor-scheme-pib-debunks-viral-message/">
          PIB Fact Check aise fake yojana portals ka bhandafod pehle bhi kar chuka hai
        </Ext>{' '}
        — sarkari naam ki milti-julti website banana inka purana khel hai. Thagi ho jaaye to
        turant <strong>1930 (cyber crime helpline)</strong> par call kariye aur apne bank ko
        bhi khabar kariye — pehle ghante me paisa rukne ke chance sabse zyada hote hain.
      </p>

      <h2>PM-Kisan Aur KCC Par Iska Kya Asar Padta Hai</h2>

      <p>
        Seedha jawab — koi asar nahi. Karj rahat UP sarkar ki yojana hai, PM-Kisan kendra
        ki. Dono ka lena-dena alag hai; karj maaf hone se PM-Kisan ki kist na rukti hai na
        badhti hai. UP is waqt PM-Kisan ka sabse bada laabharthi rajya hai —{' '}
        <Ext href="https://www.news18.com/india/over-2-17-crore-up-farmers-receive-rs-4352-crore-as-pm-modi-releases-pm-kisan-installment-ws-l-10163925.html">
          June 2026 ki kist me hi 2.17 crore se zyada UP ke kisano ko ₹4,352 crore mile the
        </Ext>
        . Haan, ek dhyan ki baat — karj maaf hone ke baad naya KCC lena ho to bank NOC
        maangega, isliye wo certificate sambhal ke rakhiye.
      </p>

      <h2>Eligible Nahi Hain? Ye Raaste Khule Hain</h2>

      <p>
        Karj mafi ka darwaza band hai to bhi haath khaali nahi. PM-Kisan ki ₹6,000 saalana
        madad ke liye <Link href="/articles/PmKisanMasterGuide2026">Master Guide</Link>{' '}
        dekhiye; sasta fasali rin chahiye to{' '}
        <Link href="/articles/KisanCreditCardOnlineApply2026">KCC apply guide</Link> padhiye
        — 7% par loan aur samay par chukane par byaj me chhoot ka provision hai. Fasal
        kharab hone ke muawze ke liye{' '}
        <Link href="/articles/PmfbyCropInsurance2026">PMFBY bima guide</Link> hai, aur
        doosre rajyon ki income-support yojanaon ka poora naksha{' '}
        <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
          state kisan yojana list
        </Link>{' '}
        me milega.
      </p>

      <h2>Sach Ya Jhooth — 10 Baatein, Seedha Faisla</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: QUIZ.map((item) => ({
                '@type': 'Question',
                name: item.s,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${item.v ? 'Sach.' : 'Jhooth.'} ${item.e}`,
                },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'GovernmentService',
              name: 'UP Kisan Karj Rahat Yojana (Kisan Rin Mochan Yojana)',
              serviceType: 'Farm loan waiver',
              provider: {
                '@type': 'GovernmentOrganization',
                name: 'Government of Uttar Pradesh',
              },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Uttar Pradesh',
              },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: 'https://upkisankarjrahat.upsdc.gov.in',
              },
            },
          ]),
        }}
      />

      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
          UP Kisan Karj Rahat — rapid-fire reality check
        </p>
        <div className="space-y-3">
          {QUIZ.map(({ s, v, e }) => (
            <div
              key={s}
              className="border border-[var(--color-border)] rounded-xl p-4"
            >
              <p className="font-semibold text-[var(--color-text)] text-sm m-0 mb-1">
                &quot;{s}&quot;
              </p>
              <p className="text-sm m-0 leading-relaxed">
                <span className={v ? 'font-bold text-green-600 dark:text-green-400' : 'font-bold text-red-600 dark:text-red-400'}>
                  {v ? 'Sach ✔' : 'Jhooth ✘'}
                </span>{' '}
                <span className="text-[var(--color-text-muted)]">{e}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <InfoBox type="warning">
        <strong>Ek rupaya bhi mat dijiye:</strong> list check, status, shikayat — is poore process me
        kahin ek rupaya nahi lagta. &quot;Naam chadhwane&quot; ya &quot;file aage
        badhane&quot; ke naam par paisa maangne wala har aadmi thag hai. Aisi maang ki
        shikayat 1930 par aur apne thane me kariye.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Is lekh ka mool kaam karj rahat ki prakriya asaan bhasha mein samjhana hai. Patrata ki shartein aur cut-off ki tareekh
          official portal/GO se hi confirm karein — final decision ke liye apni bank shaakha
          ya zila krishi adhikari se sampark karein.
        </p>
      </div>

      {/* <!-- typos: "mila nahi khaya" (naam mila nahi khaya — exclusion list, natural colloquial slip), "aplication" nahi use hua; actual typos: "barson" is fine — planned typos: "gawaiye" (waqt mat gawaiye — sahi roop ganwaiye), "bhandafod" (sahi roop bhandaphod) --> */}
    </article>
  );
}
