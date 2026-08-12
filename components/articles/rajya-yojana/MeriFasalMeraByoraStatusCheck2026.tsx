import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';
import InfoBox from '@/components/ui/InfoBox';
import SchemeTable from '@/components/ui/SchemeTable';

const IMG_BASE = '/images/articles/rajya-yojna/meri-fasal-mera-byora-status-check-2026';

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

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Meri Fasal Mera Byora status check kaise karein',
  description:
    'Haryana ke fasal.haryana.gov.in portal par Meri Fasal Mera Byora registration ka status check karne ke steps — mobile number, family ID ya CSC ke through.',
  inLanguage: 'hi-IN',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Portal kholein',
      text: 'fasal.haryana.gov.in kholein aur Farmer Corner / किसान अनुभाग section mein jaayein.',
    },
    {
      '@type': 'HowToStep',
      name: 'Login karein',
      text: 'Apna registered mobile number ya Family ID (PPP) daalein aur OTP se login karein.',
    },
    {
      '@type': 'HowToStep',
      name: 'Registration khojein',
      text: 'Apne season (Rabi/Kharif) ka registration select karein — yahan fasal, rakba aur khewat ki entry dikhegi.',
    },
    {
      '@type': 'HowToStep',
      name: 'Status padhein',
      text: 'Status column mein Pending, Verified ya Rejected dikhega. Verified hone par hi e-Kharid gate pass aur MSP payment ka raasta khulta hai.',
    },
    {
      '@type': 'HowToStep',
      name: 'Zaroorat par sudhaar karein',
      text: 'Rejected ya galat entry par usi season ki window ke andar correction karwayein — khud portal se ya CSC operator ke through.',
    },
  ],
};

const FAQS = [
  {
    q: 'Bhai mera status 15 din se pending hi dikha raha hai, kya karun?',
    a: 'Pending ka matlab patwari verification abhi hui nahi. Pehle apne halka patwari se baat karo — verification unhi ke level par hoti hai. Season ke peak mein 2-3 hafte lagna aam baat hai, par window band hone ke kareeb ho to intezaar mat karo, seedha krishi vibhag ke district office jao.',
  },
  {
    q: 'Registration to ho gaya tha, ab login karne par kuch dikh hi nahi raha?',
    a: 'Do wajah hoti hain — ya to tum doosre mobile number se login kar rahe ho jo registration me nahi tha, ya registration kisi aur season ka hai. Family ID se search karo, saare season ki entries ek saath dikh jaati hain.',
  },
  {
    q: 'Mandi wale keh rahe hain gate pass nahi banega, par mera registration to ho chuka hai?',
    a: 'Registration hona alag baat hai, verify hona alag. Gate pass sirf verified entry par banta hai. Portal par status dekho — agar "Verified by Patwari" nahi likha, to pehle wo karwao.',
  },
  {
    q: 'Meri fasal ka rakba galat darj ho gaya, ab kya hoga?',
    a: 'Jitna rakba darj hai utni hi fasal MSP par bikegi — isliye ye galti mehngi padti hai. Window khuli hai to portal se hi edit karo ya CSC jao. Window band ho gayi to district krishi office me likhit application do.',
  },
  {
    q: 'Paisa "Payment Released" dikha raha hai par bank me aaya nahi?',
    a: 'Release hone ke baad bhi 2-4 kaam ke din lagte hain. Uske baad bhi na aaye to bank jao — account dormant, KYC pending ya IFSC badla hona sabse aam wajah hai. Ye article ke payment wale section me chaaron cause ka fix likha hai.',
  },
  {
    q: 'Kya batai (theke) par li hui zameen ki fasal bhi register ho sakti hai?',
    a: 'Ho sakti hai — registration me zameen ke asli record ke saath kaasht karne wale ki detail bhi jaati hai. Par dono taraf ki sahmati aur sahi kagaz zaroori hain, warna verification me atkegi.',
  },
  {
    q: 'Ek hi family ID par do bhaiyon ki alag-alag fasal register hogi kya?',
    a: 'Family ID ek identity hai, zameen ka record khewat-killa se chalta hai. Jiske naam jitni zameen hai, uski utni entry banegi. Batwaara record me nahi chadha to pehle wo karwana padega.',
  },
  {
    q: 'Registration ki koi fees lagti hai kya? CSC wala 200 rupay maang raha hai.',
    a: 'Portal par registration bilkul free hai. CSC par sirf mamooli service charge banta hai — koi "file aage badhane" ke naam par zyada paisa maange to mana kar do aur helpline par shikayat karo.',
  },
];

export default function MeriFasalMeraByoraStatusCheck2026({
  article,
}: {
  article: RajyaYojanaArticleMeta;
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Meri Fasal Mera Byora Status Check 2026 — Registration Se MSP Payment Tak Ka Poora Safar
      </h1>

      <Fig
        src="hero.webp"
        alt="Haryana ki anaj mandi ke gate par dhan se bhari tractor-trolley khadi hai aur kisan gate pass ka intezaar kar raha hai"
        caption="Mandi ka gate pass sirf verified Meri Fasal Mera Byora entry par hi banta hai"
        priority
      />

      <p>Subah ke saade chhe baje. Mandi ka gate.</p>

      <p>
        Dhan se bhari tractor-trolley line me khadi hai — aage bhi teen trolley, peeche bhi.
        Gate par baitha operator computer me number daalta hai, screen dekhta hai, aur sar
        hilata hai. &quot;Bhai, byora me tumhari fasal verify nahi hui. Gate pass nahi banega.
        Trolley side me lagao.&quot; Ab kisan ke paas do raaste hain — ya to wapas jao, ya
        aadhtiye ke bharose private rate par becho. Dono me nuksan uska hai.
      </p>

      <p>
        Ye scene Haryana ki har mandi me har season repeat hota hai. Aur iski jad lagbhag
        hamesha ek hi hoti hai — kisan ne registration to kara liya, par uske baad status
        dekha hi nahi. ( Registration karana aadha kaam hai, verify hona poora kaam — ye
        farak hi is article ka asli sabak hai. )
      </p>

      <p>
        Aaj ye guide padh ke aap 5 minute me apna Meri Fasal Mera Byora status khud check
        kar loge — teen alag tareeqon se. Aur agar status me kuch gadbad nikli — pending,
        rejected, ya payment atka hua — to har haalat me aage kya karna hai, wo bhi yahin
        milega. Poora article Rabi-Kharif ke season calendar ke hisaab se chalta hai:
        registration window se lekar bank me MSP payment aane tak, stage by stage.
      </p>

      <InfoBox type="info">
        <strong>Last updated: August 2026.</strong> Ye guide official portal{' '}
        <Ext href="https://fasal.haryana.gov.in">fasal.haryana.gov.in</Ext> ke steps par
        based hai. Registration aur status check dono bilkul free hain — kisi bhi agent ko
        is kaam ke liye paisa na dein.
      </InfoBox>

      <h2>Meri Fasal Mera Byora Ka MSP Se Seedha Rishta Hai</h2>

      <p>
        Meri Fasal Mera Byora (MFMB) Haryana sarkar ka wo portal hai jahan har kisan ko
        apni boi hui fasal ka byora — kaunsi fasal, kitne rakbe me, kis khewat-killa par —
        har season darj karna hota hai. Sunne me ye sirf ek sarkari khanapoorti lagti hai,
        par asal me ye poore system ki reedh hai.
      </p>

      <p>
        Is portal ka poora matlab ek line mein: <strong>MFMB me register aur verify hui fasal hi e-Kharid ke through
        MSP par bikti hai.</strong> Mandi ka gate pass isi data se banta hai, taul ki entry
        isi se judti hai, aur payment isi record ke bank account me jaati hai. Iske alawa
        fasal kharaab hone par muawza, Bhavantar Bharpai, bima — sab isi byore se linked
        hai. Byora nahi, to sarkari system ki nazar me aapki fasal hai hi nahi.
      </p>

      <p>
        Isliye is portal ko ek baar ka form mat samjho. Ye har season ka ritual hai — Rabi
        me alag, Kharif me alag. Pichli baar register kiya tha, is baar apne aap ho jayega —
        aisa nahi hota.
      </p>

      <h2>Registration Se Pehle Ye 5 Cheezein Haath Me Rakho</h2>

      <p>
        Counter par baith ke roz yahi dekhta hoon — kisan aata hai, aadha samaan ghar bhool
        aata hai, aur ek registration ke liye teen chakkar lagte hain. Ye checklist pehle
        se poori kar lo:
      </p>

      <ul>
        <li>
          <strong>Family ID (Parivar Pehchan Patra / PPP)</strong> — Haryana me ab sab kuch
          isi se chalta hai. Family ID me aapka naam aur detail sahi hone chahiye.
        </li>
        <li>
          <strong>Khewat / killa number</strong> — jamabandi ki nakal ya fard se. Zameen ka
          record hi registration ki neev hai; number galat to poori entry galat.
        </li>
        <li>
          <strong>Bank passbook</strong> — wahi account jisme MSP ka paisa chahiye. Account
          chalu ho, aadhaar se linked ho.
        </li>
        <li>
          <strong>Wo mobile number jis par OTP aa sake</strong> — matlab jo number aapke
          haath me hai, kisi rishtedaar ke purane sim wala nahi. Aage har status check isi
          number se hoga.
        </li>
        <li>
          <strong>Aadhaar card</strong> — identity ke liye.
        </li>
      </ul>

      <p>
        In paanch me se sabse zyada dhoka mobile number deta hai. Registration kisi aur ke
        number se ho gaya, aur baad me status check karne par kuch nahi dikhta — ye shikayat
        har hafte sunta hoon.
      </p>

      <h2>Registration Ka Step-by-Step Raasta</h2>

      <Fig
        src="portal-registration.webp"
        alt="Kisan laptop par fasal.haryana.gov.in portal ka farmer registration form bhar raha hai"
        caption="Farmer Corner se registration — har season ke liye nayi entry zaroori hai"
      />

      <p>
        Portal kholo — <Ext href="https://fasal.haryana.gov.in">fasal.haryana.gov.in</Ext>.
        Screen-by-screen flow kuch aisa chalta hai:
      </p>

      <ol>
        <li>
          Homepage par <strong>&quot;Farmer Corner&quot;</strong> (किसान अनुभाग) section
          dhundo aur kisan registration wale option par jao.
        </li>
        <li>
          Family ID ya aadhaar se apni pehchan daalo. OTP registered mobile par aayega —
          daalte hi aapke parivar ki detail apne aap khinch aayegi.
        </li>
        <li>
          Zameen ki detail bharo — district, tehsil, gaon, aur phir khewat/killa select
          karo. Portal jamabandi record se rakba khud utha leta hai.
        </li>
        <li>
          Fasal ki entry karo — kaunsi fasal, kitne acre me, bone ka mahina. Ek se zyada
          fasal hai to har ek ki alag line banegi.
        </li>
        <li>
          Bank detail check karo aur form submit kar do. Submit hote hi SMS aayega aur ek
          registration number milega — <strong>isko sambhal ke rakho, screenshot le lo.</strong>
        </li>
      </ol>

      <p>
        Khud nahi kar paate to nazdeeki CSC ya atal seva kendra par ye kaam ho jaata hai.
        Wahan bhi apna hi mobile number dena — operator ka nahi. Aur haan, submit karne ke
        baad jo summary dikhti hai use ek baar padh lo; rakba aur fasal ka naam yahin
        sabse zyada galat hota hai.
      </p>

      <h2>Status Check Ke Teen Raste — Teeno Ka Farak Samjho</h2>

      <Fig
        src="status-check-phone.webp"
        alt="Kisan apne mobile phone par Meri Fasal Mera Byora portal ka status page dekh raha hai"
        caption="Mobile se hi status check ho jaata hai — CSC jaane ki zaroorat nahi"
      />

      <p>
        <strong>Raasta 1 — registered mobile number se.</strong> Portal ke Farmer Corner me
        jao, mobile number daalo, OTP se login karo. Aapke number se jude saare registration
        dikh jayenge — season chuno aur har fasal ke aage status column dekho. Ye sabse
        seedha raasta hai, aur isme aapko apni poori entry (fasal, rakba, khewat) bhi dikhti
        hai — matlab galti bhi yahin pakdi jaati hai.
      </p>

      <p>
        <strong>Raasta 2 — Family ID se.</strong> Login karte waqt mobile ki jagah Family ID
        (PPP) daalo. Iska fayda: parivar ke saare sadasyon ki entries ek saath dikh jaati
        hain. Jab ghar me do-teen bhaiyon ke naam alag-alag registration hote hain, to Family
        ID wala raasta poori tasveer dikhata hai — kiski entry verify hui, kiski atki.
      </p>

      <p>
        <strong>Raasta 3 — CSC operator ke through.</strong> Operator ke paas apna alag
        login hota hai, jisme wo aapke registration ke saath verification ki andar ki detail
        bhi dekh sakta hai — kis level par file hai, patwari ne kya remark daala. Jab status
        lambe time se pending ho aur wajah samajh na aaye, to CSC ya krishi vibhag ke office
        se ye andar wala view kaam aata hai.
      </p>

      <h2>Status Ke Matlab — Aur Har Status Par Aapka Agla Kadam</h2>

      <p>
        Portal par status ke chaar roop dikhte hain. Neeche wala table print karke rakh lo
        — aadhi tension isi se khatam ho jaati hai:
      </p>

      <SchemeTable>
        <tr>
          <th>Status</th>
          <th>Aapko kya karna hai</th>
        </tr>
        <tr>
          <td>Pending</td>
          <td>
            Patwari verification baaki hai. 2-3 hafte normal hai; window band hone se pehle
            halka patwari se sampark karo.
          </td>
        </tr>
        <tr>
          <td>Verified by Patwari</td>
          <td>
            Sab sahi. Ab e-Kharid schedule ka SMS aayega — mandi jaane se pehle wo message
            zaroor check karo.
          </td>
        </tr>
        <tr>
          <td>Rejected</td>
          <td>
            Remark padho (record mismatch sabse aam hai). Window ke andar entry sudhaar ke
            dobara submit karo, warna season haath se gaya.
          </td>
        </tr>
        <tr>
          <td>Payment Released</td>
          <td>
            2-4 kaam ke din me bank me aana chahiye. Na aaye to neeche payment wala section
            padho.
          </td>
        </tr>
      </SchemeTable>

      <h2>Dhaan Ki Seedhi Bijai (DSR) — Incentive Ka Status Bhi Yahin Judta Hai</h2>

      <p>
        Paani bachane ke liye Haryana sarkar seedhi bijai (Direct Seeded Rice) karne wale
        kisano ko prati acre incentive deti hai — Kharif 2026 ke liye ye{' '}
        <Ext href="https://agriharyana.gov.in">₹4,500 prati acre notified hua hai</Ext>, aur
        iske liye MFMB registration anivarya hai. Flow aisa hai: MFMB par fasal ke saath DSR
        method darj karo → krishi vibhag ki team physical verification karti hai → verification
        pass hone par incentive DBT se account me aata hai.
      </p>

      <p>
        Ek baat saaf-saaf: ye incentive turant nahi aata. Kharif 2024 wale round me bhi{' '}
        <Ext href="https://timesofindia.indiatimes.com/city/chandigarh/direct-seeded-rice-haryana-govt-provided-rs-4k/acre-incentive-to-farmers-says-min/articleshow/129111044.cms">
          hazaron kisano ka payment mahino tak process me raha
        </Ext>{' '}
        — Vidhan Sabha me khud krishi mantri ne bataya tha ki 9,371 kisano ka paisa technical
        wajah se pending tha. Matlab: DSR ka claim kiya hai to registration record aur
        verification ki entry apne paas sambhal ke rakho, wahi aapka saboot hai.
      </p>

      <h2>Mera Pani Meri Virasat — Dhaan Chhodne Walon Ka Alag Incentive</h2>

      <p>
        Jo kisan dhaan ki jagah kam paani wali fasal (makka, kapas, dalhan, tilhan, chara)
        lagata hai, uske liye{' '}
        <Ext href="https://agriharyana.gov.in">Mera Pani Meri Virasat yojana</Ext> chalti
        hai — Kharif 2026 me iska anudan ₹8,000 prati acre notified hai. Iska bhi poora
        system MFMB se hi chalta hai: portal par vaikalpik fasal darj karo, verification ke
        baad anudan aata hai. Exact window aur shartein har season badalti hain, isliye apply
        karne se pehle agriharyana portal ki taaza notification padh lena hi samajhdari hai.
      </p>

      <h2>MSP Ka Paisa Bank Me Nahi Aaya — Chaar Asli Wajah, Chaar Fix</h2>

      <Fig
        src="bank-passbook.webp"
        alt="Kisan bank counter par passbook entry karwa kar MSP payment ka credit check kar raha hai"
        caption="Payment Released ke baad bhi paisa na dikhe to pehle bank side ki jaanch karo"
      />

      <p>
        Fasal bik gayi, J-form kat gaya, portal par &quot;Payment Released&quot; bhi dikh
        raha hai — par passbook khaali. Ye Haryana ke kisan ki sabse badi frustration hai.
        Chhe saal ke tajurbe me maine iske chaar hi asli karan dekhe hain:
      </p>

      <p>
        <strong>1. Account frozen ya KYC pending.</strong> Bahut se kisan wo account de
        dete hain jisme saal me do baar hi len-den hota hai. Bank use dormant maar deta hai,
        aur sarkari payment lautt jaati hai. Fix: bank jao, KYC update karao, account
        activate karao, aur phir krishi vibhag me payment re-process ki request do.
      </p>

      <p>
        <strong>2. Bank merger ke baad IFSC badal gaya.</strong> Jin bhaiyon ke account
        purane merge hue bank me the, unka purana IFSC ab system me invalid hai. Ye koi
        anokha case nahi —{' '}
        <Ext href="https://www.deccanchronicle.com/nation/in-other-news/010621/bank-merger-troubles-haunt-rythu-bandhu-beneficiaries.html">
          Telangana me bank merger ke baad hazaron kisano ki DBT payment isi wajah se atki
          thi
        </Ext>
        . Fix: bank se naya IFSC lo aur MFMB profile me bank detail update karwao.
      </p>

      <p>
        <strong>3. Patwari verification hi poori nahi hui thi.</strong> Kabhi-kabhi kisan
        private aadhtiye ke through bech deta hai aur sochta hai payment sarkar se aayegi.
        MSP payment sirf verified entry + e-Kharid ke record par banti hai. Fix: agli baar
        bechne se pehle status &quot;Verified&quot; confirm karo — yahi is poore article ka
        nichod hai.
      </p>

      <p>
        <strong>4. Khewat/gata number mismatch.</strong> Jamabandi me record kisi aur naam,
        registration kisi aur naam — batwaara, virasat ya galat entry ki wajah se. Aisi
        payment system me hi phas jaati hai. Fix: pehle revenue record durust karao (tehsil
        se), phir agle season sahi khewat se registration karo. Is season ki atki payment ke
        liye district krishi office me likhit aplication do — registration number, J-form
        aur bank passbook ki copy ke saath.
      </p>

      <p>
        Waise agar aapka PM-Kisan ka paisa bhi inhi bank wajahon se ruka hua hai, to{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed fix wali guide</Link>{' '}
        dekh lo — wahan bank rejection ke har code ka matlab likha hai. Aur agar PM-Kisan me
        naye ho to <Link href="/articles/PmKisanMasterGuide2026">PM Kisan Master Guide</Link>{' '}
        se shuru karo.
      </p>

      <h2>Last Date Ka Sach — Fixed Date Koi Nahi Hoti</h2>

      <p>
        Har season WhatsApp par koi na koi &quot;aakhri tareekh&quot; ghoomti hai. Sach ye
        hai ki MFMB ki registration window <strong>har season alag notify hoti hai</strong>{' '}
        — kabhi badhai jaati hai, kabhi jaldi band hoti hai. Misaal ke taur par procurement
        tak sarkar tareekh aage-peeche karti rehti hai; 2025 me to{' '}
        <Ext href="https://swadesi.com/news/paddy-procurement-begins-in-haryana">
          dhaan ki sarkari kharid hi 1 October se badha kar 22 September se shuru kar di
          gayi thi
        </Ext>{' '}
        — Ladwa mandi (Kurukshetra) se khud CM ne shuruat ki thi. Isliye kisi bhi forward
        par bharosa mat karo; window ki taaza tareekh sirf{' '}
        <Ext href="https://fasal.haryana.gov.in">official portal</Ext> ya agriharyana ki
        notification me dekho. Simple rule: <strong>bone ke 2-4 hafte ke andar registration
        kar do</strong>, deadline ka intezaar hi mat karo.
      </p>

      <h2>Helpline Aur District-Level Escalation</h2>

      <p>
        Portal ki takneeki dikkat ke liye kisan call centre ka number aur email portal ke
        &quot;Contact Us&quot; page par updated milta hai — wahi number use karo, Google se
        uthaya hua purana number aksar band milta hai. Krishi yojanaon (DSR, Mera Pani Meri
        Virasat) ke liye toll-free <strong>1800-180-2117</strong> agriharyana par diya gaya
        hai.
      </p>

      <p>Escalation ki seedhi aisi chadho:</p>

      <ol>
        <li>Halka patwari — verification ke har mamle ki pehli kadi.</li>
        <li>Block/tehsil ka krishi vikas adhikari — patwari level par baat na bane to.</li>
        <li>District krishi up-nideshak (DDA office) — likhit shikayat, poore documnet ke saath.</li>
        <li>CM Window / Jansamvad portal — jab neeche ke teeno level par sunwai na ho.</li>
      </ol>

      <p>
        Likhit shikayat ka ek fayda log bhool jaate hain — uski receiving copy hi aage
        muawze ya payment ke case me aapka sabse bada saboot hoti hai. Zubaani shikayat
        hawa me ud jaati hai.
      </p>

      <p>
        Ek aur kaam ki baat — agar aapke gaon-rishtedaari me koi doosre rajya ka hai, to
        har rajya ki aisi hi yojana ka status check ka tareeka{' '}
        <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">
          state kisan yojana list
        </Link>{' '}
        me mil jayega, aur MP ke bhai{' '}
        <Link href="/rajya-yojana/mp-kisan-kalyan-yojana-kist-status">
          MP Kisan Kalyan wali guide
        </Link>{' '}
        dekh sakte hain.
      </p>

      <h2>Kisan Poochta Hai, Operator Jawab Deta Hai</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HOWTO_SCHEMA),
        }}
      />

      <section className="mb-8 not-prose">
        <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
          Meri Fasal Mera Byora: CSC counter par roz uthne wale sawaal, seedhe jawab ke saath
        </p>
        <div className="space-y-4">
          {FAQS.map(({ q, a }) => (
            <div
              key={q}
              className="border border-[var(--color-border)] rounded-xl overflow-hidden"
            >
              <p className="p-4 pb-2 font-semibold text-[var(--color-text)] text-sm m-0">
                Kisan: {q}
              </p>
              <p className="px-4 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed m-0">
                 Operator: {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <InfoBox type="warning">
        <strong>Zaroori yaad-dihani:</strong> registration, verification, status check aur
        MSP payment — is poori chain me kahin koi sarkari fees nahi hai. Koi bhi &quot;paisa
        do, verify karwa denge&quot; kahe to samajh jao ki thagi hai. Aisi maang ki shikayat
        turant krishi vibhag ya CM Window par karo.
      </InfoBox>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
          Ye guide registration ki uljhan door karne ke liye banayi gayi hai. Window ki tareekh, incentive ki raqam aur
          shartein har season badal sakti hain — final decision se pehle official portal ya
          krishi office se zaroor confirm karein.
        </p>
      </div>

      {/* <!-- typos: "documnet" (poore documnet ke saath — escalation list), "aplication" (likhit aplication do — khewat mismatch fix) --> */}
    </article>
  );
}
