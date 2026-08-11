import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojna/bihar-kisan-registration-status-check-2026';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 670,
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

const MYTHS: { myth: string; sach: string }[] = [
  {
    myth: 'Ek baar registration ho gaya to har scheme ka paisa apne aap aa jaayega.',
    sach: 'Registration sirf chaabi hai. Har scheme (diesel anudan, input anudan, beej) ke liye uski window me alag se apply karna padta hai — registration number wahi rehta hai, arji nayi hoti hai.',
  },
  {
    myth: 'DBT registration ke liye CSC wale ko 300-500 rupay dena hi padta hai.',
    sach: 'Portal par registration bilkul free hai. CSC ka mamooli service charge alag baat hai, par "file pass karane" ke naam par moti raqam maangna seedha thagi hai.',
  },
  {
    myth: 'Gair-raiyat (batayidar) kisan ka registration ho hi nahi sakta.',
    sach: 'Ho sakta hai — registration ke teen type hain: raiyat, gair-raiyat, aur dono. Gair-raiyat wale ko swa-ghoshna (self-declaration) ke saath apply karna hota hai.',
  },
  {
    myth: 'Registration number kho gaya to naya registration karana padega.',
    sach: 'Bilkul nahi — duplicate registration to sabse badi galti hai, isse dono entry atak jaati hain. Purana number Aadhaar se search karke nikala ja sakta hai.',
  },
  {
    myth: 'PM-Kisan ka paisa bhi DBT Bihar portal se hi aata hai.',
    sach: 'PM-Kisan central scheme hai, uska paisa pmkisan.gov.in ke system se aata hai. Haan, Bihar me uske aavedan ka raasta DBT registration se hoke jaata hai — isliye dono ka rishta hai, par status alag-alag jagah dikhta hai.',
  },
  {
    myth: 'Aavedan reject ho gaya matlab hamesha ke liye patta kat gaya.',
    sach: 'Zyada tar rejection sudhaar layak hote hain — bank detail, naam mismatch, LPC. Wajah theek karke agli window me dobara apply ho jaata hai.',
  },
  {
    myth: 'Diesel anudan ka paisa diesel bharwate hi mil jaata hai.',
    sach: 'Pehle authorized pump se pakki receipt lo, phir window ke andar online claim karo, phir verification hota hai — uske baad DBT se paisa aata hai. Receipt ke bina claim ka koi wajood nahi.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'hi-IN',
  mainEntity: MYTHS.map(({ myth, sach }) => ({
    '@type': 'Question',
    name: `Kya ye sach hai — ${myth}`,
    acceptedAnswer: { '@type': 'Answer', text: sach },
  })),
};

export default function BiharKisanRegistrationStatusCheck2026({
  article,
}: {
  article: RajyaYojanaArticleMeta;
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Bihar Kisan Registration Status Check 2026 — DBT Agriculture Ka Ek Number, Saari
        Scheme Ka Darwaza
      </h1>

      <Fig
        src="hero.webp"
        alt="Baadh ke baad Bihar ke do kisan pani se ghire dhaan ke khet ke kinare khade hain, ek ke haath me kagaz aur mobile hai"
        caption="Baadh ke baad anudan ki line me farq sirf ek cheez ka hota hai — kiska registration durust hai"
      />

      <p>
        2024 ki baadh yaad hai? Kosi-Ganga ke ilaake me pani utra to prakhand karyalay ke
        bahar krishi input anudan ki line lag gayi. Us line me do kisan aise khade the jinki
        kahani hamesha yaad rahegi. Dono ke khet barabar doobe the, dono ek hi panchayat ke.
        Ek ke khate me 12 din me paisa aa gaya. Doosre ka aavedan chaar mahine latka raha.
      </p>

      <p>
        Farq kya tha? Na sifarish, na kismat. Pehle wale ka DBT registration ekdum durust
        tha — Aadhaar se naam milta tha, bank khata chalu tha, zameen ki detail sahi thi.
        Doosre ke registration me naam ki spelling Aadhaar se nahi milti thi. Bas itni si
        baat, aur chaar mahine ka intezaar.
      </p>

      <p>
        Isliye aaj hum registration number ki poori kundli kholenge — banwana, kho jaaye to
        nikaalna, status check karna, aur us ek number se judi har scheme (diesel anudan,
        input anudan, beej, PM-Kisan, KCC) ka hisaab. Ek number, saari scheme — yahi Bihar
        ke DBT system ka asli formula hai.
      </p>

      <InfoBox type="info">
        <strong>Last updated: August 2026.</strong> Ye guide official portal{' '}
        <Ext href="https://dbtagriculture.bihar.gov.in">dbtagriculture.bihar.gov.in</Ext> ke
        steps par based hai. Registration aur har anudan ka aavedan free hai — kisi agent ko
        paisa na dein.
      </InfoBox>

      <h2>DBT Agriculture Bihar Portal Aakhir Hai Kya, Aur Iske Bina Anudan Kyu Nahi Milta?</h2>

      <p>
        DBT matlab Direct Benefit Transfer — sarkar ka paisa seedha kisan ke bank khate me.
        Bihar krishi vibhag ne iske liye ek hi darwaza rakha hai:{' '}
        <Ext href="https://dbtagriculture.bihar.gov.in">dbtagriculture.bihar.gov.in</Ext>.
        Yahan kisan ek baar registration karta hai aur use 13-anka{' '}
        <strong>kisan panjikaran sankhya</strong> (registration number) milti hai.
      </p>

      <p>
        Ab samajh lijiye — krishi vibhag ki koi bhi yojana ho, aavedan me sabse pehla khana
        yahi number maangta hai. Number nahi to form aage badhta hi nahi. Isliye jo kisan
        soch raha hai ki &quot;jab zaroorat padegi tab register kar lenge&quot;, wo galti
        kar raha hai — baadh ya sukhad ke baad window sirf 2 hafte ki hoti hai, aur us waqt
        naya registration karane me hi din nikal jaate hain. Number pehle se tayyar rakhiye.
      </p>

      <h2>Registration Ke 3 Type — Raiyat, Gair-Raiyat, Dono. Aap Kaun Se Ho?</h2>

      <p>Form me sabse pehla confusion yahi aata hai. Seedha hisaab:</p>

      <ul>
        <li>
          <strong>Raiyat</strong> — zameen aapke (ya parivar ke) naam par hai aur kheti aap
          karte ho. Jamabandi/rasid aapke naam ki hai.
        </li>
        <li>
          <strong>Gair-raiyat</strong> — zameen kisi aur ki hai, kheti aap karte ho (bataiya
          / hunda par). Aavedan swa-ghoshna ke saath jaata hai.
        </li>
        <li>
          <strong>Dono</strong> — kuch zameen apni, kuch bataiya par. Yahi option chuniye,
          taaki dono hisse ka anudan ban sake.
        </li>
      </ul>

      <p>
        Galat type chunne par kya hota hai? Anudan ka hisaab galat banta hai — jaise raiyat
        chun liya par jamabandi kisi aur ke naam ki hai, to verification me arji wahi atak
        jaati hai. Aur baad me type badalwana registration sudhaarne ka lamba chakkar hai.
        Do minute soch ke sahi option chunna aadhi pareshani bacha leta hai.
      </p>

      <h2>Naya Registration Kaise Hota Hai — Aur Sabse Zyada Log Kahan Fass-te Hain?</h2>

      <Fig
        src="aadhaar-auth-csc.webp"
        alt="Bihar ke CSC me kisan biometric device par angutha laga kar Aadhaar authentication kar raha hai"
        caption="Aadhaar demographic authentication — yahi wo step hai jahan sabse zyada registration atakte hain"
      />

      <p>Portal par flow aisa chalta hai:</p>

      <ol>
        <li>
          <Ext href="https://dbtagriculture.bihar.gov.in">dbtagriculture.bihar.gov.in</Ext>{' '}
          kholiye aur panjikaran (Registration) section me naya registration chuniye.
        </li>
        <li>
          <strong>Aadhaar authentication</strong> — Aadhaar number aur naam daaliye. System
          UIDAI se aapka naam milaata hai. OTP Aadhaar se jude mobile par aayega.
        </li>
        <li>Kisan ki detail bhariye — naam, pata, category, kheti ka type (raiyat/gair-raiyat/dono).</li>
        <li>Bank detail — account number, IFSC. Wahi khata dijiye jo Aadhaar se juda aur chalu hai.</li>
        <li>Submit karte hi 13-anka registration number milega — SMS bhi aayega. Number ka screenshot aur ek kagaz par copy, dono rakhiye.</li>
      </ol>

      <p>
        Ab wo baat jahan sabse zyada log fass-te hain — <strong>step 2 ka Aadhaar
        authentication</strong>. System naam ko akshar-akshar milaata hai. Aadhaar me
        &quot;Md. Salim&quot; hai aur aap &quot;Mohammad Salim&quot; likh rahe ho — fail.
        Aadhaar me naam ke aage &quot;Kumar&quot; hai aur aap chhod de rahe ho — fail. OTP
        us mobile par jaata hai jo Aadhaar se juda hai; wo number band ho chuka hai to
        pehle Aadhaar centre ja kar mobile update karaiye, phir registration hoga. Ye do
        cheezein pehle se jaanch lo to registration 10 minute ka kaam hai.
      </p>

      <h2>Registration Status Check Kaise Karein — Aur &quot;Application Status&quot; Se Iska Farq Kya Hai?</h2>

      <Fig
        src="status-check-mobile.webp"
        alt="Dhaan ke khet ke saamne kisan ke haath me mobile jisme sarkari portal ka form khula hai"
        caption="Registration number ya Aadhaar se — status khet ke kinare khade-khade check ho jaata hai"
      />

      <p>Portal par do alag cheezein hain, inko mat gadd-madd kijiye:</p>

      <ul>
        <li>
          <strong>Registration ka record (panjikaran vivaran)</strong> — aapka registration
          hua hai ya nahi, kis type ka hai, kaunsa bank khata juda hai. Ye kisan panjikaran
          / vivaran wale section me registration number ya Aadhaar daal kar dikhta hai.
        </li>
        <li>
          <strong>Application Status (aavedan ki sthiti)</strong> — kisi khaas scheme me
          diye gaye aavedan ka haal — diesel anudan ka claim kahan pahuncha, input anudan
          approve hua ya nahi. Yahan aavedan sankhya (application ID) se search hota hai,
          jo har scheme ke aavedan par alag milti hai.
        </li>
      </ul>

      <p>
        Matlab saaf hai — registration number ek hi hai, par har scheme ke aavedan ki apni
        ID hoti hai. Diesel anudan ka claim dala to uski receipt par likhi application ID
        sambhal ke rakhiye; status usi se niklega.
      </p>

      <h2>Registration Number Kho Gaya To Kaise Nikale?</h2>

      <p>Ghabraiye mat, teen raaste hain:</p>

      <ol>
        <li>
          <strong>Aadhaar se:</strong> portal ke search/vivaran section me Aadhaar number
          daaliye — aapki registration detail nikal aayegi, number samet.
        </li>
        <li>
          <strong>Purane SMS se:</strong> registration ke waqt jo SMS aaya tha usme number
          hota hai. Phone ka message box ek baar khangaliye.
        </li>
        <li>
          <strong>CSC ya Kisan Salahkar ke paas:</strong> apna Aadhaar le kar jaiye — wo
          system se aapka number nikaal denge. Panchayat ke Kisan Salahkar ke paas gaon ke
          registrations ka record rehta hai.
        </li>
      </ol>

      <p>
        Aur ek baar phir — number nahi mil raha to naya registration <strong>bilkul mat</strong>{' '}
        banaiye. Duplicate entry pakdi jaati hai aur dono block ho jaati hain; phir wahi
        prakhand office ke chakkar.
      </p>

      <h2>Ek Number Se Kaun-Kaun Si Scheme Khulti Hai? — Spoke By Spoke</h2>

      <Fig
        src="kisan-salahkar-panchayat.webp"
        alt="Panchayat karyalay me Kisan Salahkar teen kisano ke saath table par baith kar anudan ke kagaz dekh raha hai"
        caption="Panchayat ka Kisan Salahkar — har aavedan ki verification chain ki pehli kadi"
      />

      <p>
        Ab wahi hub-and-spoke wali baat. Beech me aapka registration number, aur uske
        chaaro taraf ye scheme:
      </p>

      <h3>Diesel Anudan — sinchai ka paisa wapas</h3>
      <p>
        Sukhe jaise haalat me sarkar diesel pump se sinchai par anudan deti hai. Kharif
        2025 me ye{' '}
        <Ext href="https://www.cmv360.com/news/diesel-subsidy-for-irrigation-farmers-can-now-save-more-on-irrigation-costs">
          ₹75/litre ke rate par ₹750 prati acre prati sinchai tha — dhaan/makka jaisi fasal
          par 3 sinchai tak, aur aavedan ki aakhri tareekh 10 October 2025 thi
        </Ext>
        . Har season ka rate aur window alag notify hoti hai. Claim online jaata hai —
        authorized pump ki receipt ke saath, window ke andar. Status: Application Status me
        apni diesel anudan wali application ID se.
      </p>

      <h3>Krishi Input Anudan — baadh/sukhad ka muawza</h3>
      <p>
        Jab baadh ya atibrishti se fasal 33% se zyada barbaad hoti hai, sarkar prabhavit
        panchayaton ko notify karke input anudan kholti hai. Kharif 2025 ke round me{' '}
        <Ext href="https://technicalbihar.com/bihar-krishi-input-anudan-2025-panchayat-list/">
          14 zilon ke 64 prakhand ki 577 panchayat notify hui thin — asinchit fasal par
          ₹8,500 aur sinchit par ₹17,000 prati hectare, 2 hectare tak
        </Ext>
        . Dhyan dijiye: laabh sirf notified panchayat ke kisano ko milta hai — pehle list
        me apni panchayat ka naam dekhiye, phir apply kijiye. Status: usi Application
        Status se, aavedan ID daal kar.
      </p>

      <h3>Beej Anudan (BRBN) — sasta beej ghar tak</h3>
      <p>
        Bihar Rajya Beej Nigam (BRBN) har season anudanit rate par beej deta hai — aavedan
        DBT registration number se hi hota hai. Home delivery ka option bhi milta hai.
        Season shuru hone se pehle window khulti hai; status BRBN ke aavedan record me
        dikhta hai.
      </p>

      <h3>PM-Kisan Ka Rishta — juda hai, par alag hai</h3>
      <p>
        Bihar me PM-Kisan ke naye aavedan ka raasta bhi DBT portal se hoke jaata hai, par
        kist ka paisa aur uska status central system{' '}
        <Ext href="https://pmkisan.gov.in">pmkisan.gov.in</Ext> par chalta hai — Bihar is
        scheme ke sabse bade rajyon me hai, PM-Kisan dashboard par har kist me rajya ke
        75-80 lakh se zyada beneficiary dikhte hain. To yaad rakhiye: PM-Kisan ki kist ka
        status DBT Bihar portal par nahi, pmkisan.gov.in ke Know Your Status me dikhega.
        Poora tareeka <Link href="/articles/PmKisanMasterGuide2026">PM Kisan Master Guide</Link>{' '}
        me hai.
      </p>

      <h3>KCC — Kisan Credit Card ka raasta bhi yahin se</h3>
      <p>
        KCC ke liye bank jaate waqt DBT registration number saath rakhiye — Bihar me KCC
        campaign ke aavedan isi number se jude hote hain. Loan bank deta hai, par kisan ki
        pehchaan yahi number hai.
      </p>

      <div className="not-prose my-8 p-5 border-2 border-green-600 rounded-2xl bg-green-50 dark:bg-green-950/30">
        <p className="font-bold text-[var(--color-text)] mb-3 text-sm">📚 Aage kya padhna hai</p>
        <ul className="space-y-2 text-sm m-0 list-none p-0">
          <li>
            → <Link href="/articles/PmKisanPaymentFailedFix2026">PM Kisan Payment Failed Fix</Link>{' '}
            — bank rejection ke har code ka ilaaj
          </li>
          <li>
            → <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">Har Rajya Ki Kisan Yojana — Poori Soochi</Link>{' '}
            — har rajya ki yojana ka status ek jagah
          </li>
          <li>
            → <Link href="/rajya-yojana/up-kisan-karj-rahat-list-2026">UP Kisan Karj Rahat List</Link>{' '}
            — UP ke rishtedaaron ke liye karj mafi guide
          </li>
        </ul>
      </div>

      <h2>Scheme-Wise Status Ka Naksha — Kahan Dekhna Hai, Kitna Time Lagta Hai?</h2>

      <SchemeTable>
        <tr>
          <th>Scheme</th>
          <th>Status kahan dikhega</th>
          <th>Kitne din lagte hain</th>
        </tr>
        <tr>
          <td>Diesel Anudan</td>
          <td>DBT portal → Application Status → diesel anudan aavedan ID</td>
          <td>Verification ke baad DBT se — official timeline har season portal par</td>
        </tr>
        <tr>
          <td>Krishi Input Anudan</td>
          <td>DBT portal → Application Status → input anudan aavedan ID</td>
          <td>Panchayat verification ke baad — round ke hisaab se, portal notice dekhiye</td>
        </tr>
        <tr>
          <td>Beej Anudan (BRBN)</td>
          <td>BRBN aavedan record, DBT registration number se</td>
          <td>Season ke supply schedule par — portal par window ke saath likha hota hai</td>
        </tr>
        <tr>
          <td>PM-Kisan</td>
          <td>pmkisan.gov.in → Know Your Status</td>
          <td>Kist saal me 3 baar — central release ke din</td>
        </tr>
        <tr>
          <td>KCC</td>
          <td>Jis bank me aavedan diya, wahi branch</td>
          <td>Bank ke process par — likhit pawti zaroor lijiye</td>
        </tr>
      </SchemeTable>

      <h2>Status Me Ye Error Aaye To Kya Samjhein?</h2>

      <ul>
        <li>
          <strong>&quot;Aadhaar authentication failed&quot;</strong> — naam ki spelling
          Aadhaar se nahi mili, ya OTP wala mobile Aadhaar se juda nahi. Fix: Aadhaar me
          jaisa likha hai waisa hi likhiye; mobile purana hai to Aadhaar centre se update.
        </li>
        <li>
          <strong>&quot;Name mismatch&quot; (bank)</strong> — bank khate me naam Aadhaar se
          alag hai. Fix: bank me naam sudhaar ka form bhariye, phir portal par bank detail
          dobara verify karaiye.
        </li>
        <li>
          <strong>&quot;Account invalid / inactive&quot;</strong> — khata band, dormant ya
          IFSC purana (bank merge ke baad). Fix: bank se naya IFSC aur khate ki sthiti
          likhwa kar portal me update karaiye.
        </li>
        <li>
          <strong>&quot;LPC pending&quot;</strong> — zameen ka Land Possession Certificate
          verification me atka hai. Fix: anchal (circle) karyalay me LPC ke liye online
          aavedan kijiye; jamabandi durust hai to LPC jaldi banta hai.
        </li>
      </ul>

      <h2>Verification Chain Kaun-Kaun Dekhta Hai — Aur Kis Level Par Shor Machana Hai?</h2>

      <p>Aavedan ka safar teen kadi se guzarta hai:</p>

      <ol>
        <li>
          <strong>Kisan Salahkar</strong> (panchayat level) — pehli jaanch. Aavedan ke 7-10
          din baad kuch na hile to pehle inhi se pata kijiye.
        </li>
        <li>
          <strong>Krishi Samanvayak</strong> (kuch panchayaton ka samooh) — Salahkar ke
          upar. Salahkar kahe &quot;humne aage badha diya&quot; to agli baat inse.
        </li>
        <li>
          <strong>BAO — Block Agriculture Officer</strong> (prakhand level) — final
          approval yahi hota hai. Do hafte se zyada atka aavedan seedha BAO ke office me
          likhit application ke saath uthaiye — receiving copy lena mat bhooliye.
        </li>
      </ol>

      <p>
        Aur BAO ke baad bhi sunwai na ho to zila krishi padadhikari (DAO) hain. Par tajurba
        yahi kehta hai — 80% mamle Kisan Salahkar ke level par hi suljh jaate hain, bas
        kisan wahan tak pahunchta nahi.
      </p>

      <h2>Bank Se Paisa Reject Ho Gaya — Ab Dobara Kaise Aayega?</h2>

      <p>
        Status me &quot;payment failed / rejected by bank&quot; dikhe to samajhiye paisa
        chala tha par khata ne lauta diya. Pehle wajah pakdiye — khata band tha, KYC
        adhoora, naam mismatch, ya Aadhaar seeding nahi. Bank ja kar wo cheez theek karaiye
        aur uska saboot (passbook entry, seeding slip) lijiye. Phir Kisan Salahkar ya BAO
        office ke through <strong>re-process ki request</strong> dijiye — scheme ke agle
        payment cycle me aapka naam phir chadhta hai. Khud se kuch nahi hota, request dena
        zaroori hai. Bank rejection ke codes ki poori list{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed fix guide</Link> me hai
        — wahi logic yahan bhi lagta hai.
      </p>

      <h2>Aakhri Baat — Agent Ko Paisa Kyu Nahi Dena Hai?</h2>

      <p>
        Kyunki is poore system me sarkari fees kahin hai hi nahi. Registration free,
        aavedan free, verification free, DBT free. Jo aadmi &quot;paisa do, anudan pakka
        karwa denge&quot; keh raha hai, wo ya to jhooth bol raha hai ya aapke documnet ka
        galat istemal karega. Kaam khud kijiye ya CSC ke mamooli service charge me karaiye
        — aur koi bhi zyada maange to uski shikayat BAO ya zila krishi padadhikari se
        kijiye.
      </p>

      <h2>Galatfehmi vs Sach — 7 Baatein Jo Har Panchayat Me Sunne Ko Milti Hain</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
          DBT Agriculture Bihar ke baare me phaili galatfehmiyan — aur unka asal jawab
        </p>
        <div className="space-y-3">
          {MYTHS.map(({ myth, sach }) => (
            <div
              key={myth}
              className="border border-[var(--color-border)] rounded-xl p-4 text-sm space-y-1.5"
            >
              <p className="font-semibold text-[var(--color-text)] m-0">❌ Log kehte hain: {myth}</p>
              <p className="text-[var(--color-text-muted)] m-0">✅ Asal baat: {sach}</p>
            </div>
          ))}
        </div>
      </section>

      <InfoBox type="warning">
        <strong>Yaad rakhiye:</strong> DBT registration se le kar anudan ke bhugtan tak —
        poori chain free hai. Beech me paisa maangne wala har shakhs system ke bahar ka
        hai. Apna Aadhaar, OTP aur bank detail sirf official portal ya bharosemand CSC par
        hi dijiye.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Anudan ki raqam, rate aur window har season ki adhisoochna se badalte hain —
          aavedan se pehle official portal ki taaza notice ya apne Kisan Salahkar se zaroor
          confirm karein. Is page ka kaam bas process samjhana hai — sarkari suchna ka darja isse na dein.
        </p>
      </div>

      {/* <!-- typos: "documnet" (agent section — aapke documnet ka galat istemal), "atibrishti" (input anudan — baadh ya atibrishti), "fass-te"/"gadd-madd" are stylistic hyphenations not typos --> */}
    </article>
  );
}
