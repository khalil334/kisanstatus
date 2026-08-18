import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { Yojana2026ArticleMeta } from '@/lib/yojana-2026-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — DBT Fix Guide' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Kaise Karein' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'State Nodal Officer List' },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan helpline par phone hi nahi lagta — kya karoon?',
    a: 'Kist release hone wale hafte me lines sabse zyada busy hoti hain. Teen kaam karo: subah 9-10 baje ke beech try karo (load kam hota hai), 155261 na lage to 011-24300606 lagao, aur teesra rasta sabse pakka hai — pmkisan.gov.in ke Help Desk (Query Form) me online complaint daal do. Online query ka ticket number milta hai, jo phone call se zyada kaam ka hai.',
  },
  {
    q: 'Complaint ke kitne din me jawab aata hai?',
    a: 'Koi fixed public deadline nahi hai. Zameen ka anubhav ye hai ki online query par 2-4 hafte me status update aa jaata hai, par mamla state ke paas ho (land seeding, state approval) to zyada bhi lag sakta hai. Isliye ticket number sambhaal kar rakho aur 3-4 hafte baad usi Help Desk section me "Know the Query Status" se check karo.',
  },
  {
    q: 'Kya helpline se naya registration ho jaayega?',
    a: 'Nahi. Helpline sirf jankari aur complaint ke liye hai. Naya registration pmkisan.gov.in ke Farmers Corner se, CSC se, ya apne krishi vibhag ke through hota hai. Aise hi correction (naam, bank, Aadhaar) bhi portal ya CSC par hota hai, phone par nahi.',
  },
  {
    q: 'Call par kya kya ready rakhna chahiye?',
    a: 'Registration number (na ho to Aadhaar number), Aadhaar card, aur apni problem ek line me. Beneficiary status ka screenshot ho to aur accha — usme jo error likha hai (jaise "Payment Stopped by State" ya "FTO Generated") wahi batana sabse tez kaam karta hai.',
  },
  {
    q: 'Email par complaint karna behtar hai ya phone par?',
    a: 'Dono se behtar portal ka Help Desk form hai, kyunki wahan complaint system me register hoti hai aur status track hota hai. Email (pmkisan-ict@gov.in) tab kaam aata hai jab documents attach karne ho — jaise bank passbook ki copy. Email me registration number, Aadhaar ke aakhri 4 ank, aur problem saaf likho.',
  },
  {
    q: 'State-level problem ho to Delhi wali helpline kya karegi?',
    a: 'Sach ye hai ki kai problems — land seeding, state approval, record verification — state ke paas atki hoti hain, aur central helpline sirf forward kar sakti hai. Aise case me apne state ke nodal officer ya district krishi adhikari se seedha sampark zyada tez hota hai. Nodal officers ki poori list hamare paas alag article me hai.',
  },
  {
    q: 'Complaint karne ke paise lagte hain kya?',
    a: 'Bilkul nahi. Na phone complaint ke, na online ke, na CSC se query dalwane ke (CSC apna mamuli service charge le sakta hai, par sarkari fee zero hai). Koi "agent" bole ki paise deke andar se kaam karwa dega — wo fraud hai. Complaint har step par free hai.',
  },
  {
    q: 'Khud online karna mushkil hai — CSC se ho jaayega?',
    a: 'Haan. Nazdeeki CSC (Jan Seva Kendra) se Help Desk query dalwa sakte ho. Bas ticket/reference number likhwa kar zaroor rakho, taaki status khud track kar sako. Gaon me network na ho to block ke krishi vibhag office me likhit shikayat bhi ek rasta hai.',
  },
  {
    q: 'Ek saath kitni complaints daal sakte hain?',
    a: 'Ek problem ki ek hi query daalo. Ek hi baat ki kai queries dalne se record uljhta hai aur jawab der se aata hai. Haan, do alag-alag dikkatein hain — eKYC bhi aur payment bhi — to dono ki alag query theek hai.',
  },
];

export default function PmKisanHelpline155261({ article }: { article: Yojana2026ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/yojana" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">PM Kisan Helpline</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Helpline 155261 — Complaint Kaise Aur Kahan Karein
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.published)}</span>
            <span>Last Updated: {fmtDate(article.modified)}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Numbers pehle, baat baad me. PM Kisan ki helpline <strong>155261</strong> hai, landline{' '}
          <strong>011-24300606</strong>, aur email <strong>pmkisan-ict@gov.in</strong>. Sab pmkisan.gov.in
          ke Contact Us page par confirmed hain. Time: aam taur par subah 9 se shaam 6, somvar se shanivar.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Par yahin ruk mat jao. Aadhi calls is helpline par un problems ke liye lagti hain jo helpline hal
          kar hi nahi sakti — eKYC, land record, bank seeding. Ghanta line me lagne ke baad jawab milta hai
          &ldquo;CSC jaiye&rdquo; ya &ldquo;tehsil me pata karo&rdquo;. Isliye is page ka asli kaam hai:
          pehle ye tay karna ki <em>aapki problem ka sahi darwaza kaunsa hai</em> — phir wahan jaana.
        </p>

        <SH>Kaunsi Problem, Kaunsa Darwaza — Ye Table Pehle Dekho</SH>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-bg-alt)] text-left">
                <th className="p-3 font-bold text-[var(--color-text)]">Problem</th>
                <th className="p-3 font-bold text-[var(--color-text)]">Sahi jagah</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text)]">
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Kist nahi aayi, wajah nahi pata</td>
                <td className="p-3">Pehle khud beneficiary status check karo — wahan likha error hi wajah hai. Phir zaroorat ho to 155261.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">eKYC pending / fail ho rahi hai</td>
                <td className="p-3">OTP wali eKYC portal/app se khud, warna nazdeeki CSC — biometric wahi hota hai.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Land seeding &ldquo;No&rdquo; dikha raha hai</td>
                <td className="p-3">Lekhpal / patwari / tehsil — land record state ke paas hai, Delhi ke paas nahi.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Paisa aakar wapas chala gaya (payment failed)</td>
                <td className="p-3">Bank branch — NPCI Aadhaar seeding karwao. Helpline bhi yahi batayegi.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Naam / bank / Aadhaar detail galat</td>
                <td className="p-3">Portal ke Farmers Corner me correction, ya CSC. Phone par correction nahi hoti.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Status me &ldquo;Payment Stopped by State&rdquo;</td>
                <td className="p-3">District krishi adhikari / state nodal officer — state-level hold hai.</td>
              </tr>
              <tr className="border-t border-[var(--color-border)]">
                <td className="p-3">Registration reject ho gaya</td>
                <td className="p-3">Rejection ki wajah status me dekho, phir district krishi vibhag.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Dhyan se dekho — saat me se paanch cases me pehla kadam helpline hai hi nahi. Ye table isliye
          upar rakhi hai. Ab har raste ki thodi detail.
        </p>

        <SH>Kist Nahi Aayi? Call Se Pehle 2 Minute Ka Kaam</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          pmkisan.gov.in par Know Your Status kholo, registration number daalo, OTP se dekho. Wahan teen
          cheezein saaf dikh jaati hain: eKYC hui ya nahi, land seeding Yes hai ya No, aur bank/NPCI seeding
          ka haal. Jo bhi &ldquo;No&rdquo; ya red hai — wahi aapki wajah hai, aur upar wali table me uska
          darwaza likha hai. Ye 2 minute ka kaam aapko ghante ki call se bacha sakta hai. Status samajhne me
          dikkat ho to{' '}
          <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline font-bold">payment failed
          fix guide</Link> me har error ka matlab likha hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Status me sab Yes hai, FTO bhi ban gaya, phir bhi paisa nahi aaya? Ab helpline ka number ghumao —
          ye genuinely unka case hai.
        </p>

        <SH>155261 Par Call — Kaise Baat Karein Ki Kaam Bane</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Call se pehle teen cheezein haath me rakho: <strong>registration number</strong> (ya Aadhaar),
          apna <strong>Aadhaar card</strong>, aur status ka screenshot ya likha hua error. Baat aise shuru
          karo: &ldquo;Registration number ye hai, status me ye error dikh raha hai, kist itni tareekh se
          nahi aayi.&rdquo; Seedha, number ke saath. Golmol kahani sunane par agent bhi golmol jawab dega.
        </p>
        <StepList>
          <SI n={1}>Subah 9-10 ke beech call karo — lines sabse khali tab hoti hain. Kist release wale hafte me sabr rakho, load sabse zyada hota hai.</SI>
          <SI n={2}>155261 busy ho to 011-24300606 try karo. Kuch states me 011-23381092 bhi chalta hai.</SI>
          <SI n={3}>Jo bhi agent kahe, uska naam aur baat ki tareekh note karo. Complaint register ho to number zaroor maango.</SI>
          <SI n={4}>Jawab na mile to wahi baat email par bhejo — pmkisan-ict@gov.in — registration number aur problem ke saath. Email ka record ban jaata hai.</SI>
        </StepList>

        <SH>Online Complaint — Jo Phone Se Zyada Pakki Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          pmkisan.gov.in par <strong>Help Desk / Query Form</strong> ka section hai — Farmers Corner ke
          paas. Wahan Aadhaar number, account number ya mobile number me se kisi ek se apni query register
          kar sakte ho: category chuno (payment, eKYC, correction...), problem likho, submit. Ek{' '}
          <strong>ticket number</strong> milta hai. Yahi iska sabse bada fayda hai — phone ki baat hawa me
          rehti hai, ticket system me rehta hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          3-4 hafte baad usi section me &ldquo;Know the Query Status&rdquo; se jawab check karo. Jawab
          adhoora lage to nayi query me purana ticket number quote karo — silsila juda rehta hai.
        </p>

        <WB>
          155261 ya kisi bhi sarkari number se call karke koi OTP nahi poochta, bank detail confirm nahi
          karwata, aur &ldquo;processing fee&rdquo; nahi maangta. Aisi call aaye to wo fraud hai — kaat do.
          Helpline par aap call karte ho; kist dilwane ke liye koi aapko call nahi karta.
        </WB>

        <SH>Email Se Complaint — Format Aisa Rakho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Email (<strong>pmkisan-ict@gov.in</strong>) un cases ke liye sahi hai jahan documents attach
          karne hon — passbook ki photo, rejection ka screenshot. Format kuch aisa:
        </p>
        <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-500 rounded-r-xl text-sm leading-relaxed text-[var(--color-text)]">
          <strong>Subject:</strong> PM Kisan — Kist nahi mili — [Aadhaar ke aakhri 4 ank]<br /><br />
          Mahoday,<br />
          Mera naam [naam], gaon [gaon], zila [zila], rajya [rajya].<br />
          Registration mobile number: [number]<br />
          Samasya: [kaunsi kist, kab se, status me kya dikh raha hai]<br />
          Kripya samadhan karein.<br />
          Dhanyavaad.
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Poora Aadhaar number email me mat likho — aakhri 4 ank kaafi hain. Aur ek hi complaint baar-baar
          alag-alag email se mat bhejo — process tez nahi hota, records ulajh jaate hain.
        </p>

        <SH>Complaint Likhte Waqt Ye 4 Galtiyan Mat Karo</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Help Desk par hazaron queries roz aati hain. Jinki complaint saaf likhi hoti hai, unka record
          jaldi dhundha jaata hai. Chaar galtiyan jo baar-baar dikhti hain:
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-3">
          <strong>Gusse wali lambi kahani.</strong> Padhne wale ko aapki poori aapbeeti nahi, teen cheezein
          chahiye — kaunsi kist, kab se ruki, status me kya likha aa raha hai. Teen line kaafi hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-3">
          <strong>Galat category.</strong> Payment ki dikkat eKYC category me daal di, to query galat desk
          par jaayegi aur wahan se lautne me hafte lagenge. Category do baar padh kar chuno.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-3">
          <strong>Details bina confirm kiye.</strong> Aadhaar ke ank galat likh diye to record milega hi
          nahi. Submit se pehle ek baar sab mila lo.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Status me jo dikh raha hai, wo na batana.</strong> &ldquo;Paisa nahi aaya&rdquo; adhoori
          baat hai. &ldquo;Status me FTO generated likha hai lekin 3 hafte se payment nahi&rdquo; — ye poori
          baat hai, aur iska jawab bhi sateek aata hai.
        </p>

        <SH>Baat Na Bane To Upar Kaise Jaayein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Helpline se kaam na bane, online query ka jawab bhi santosh-janak na ho — to seedhi upar ki
          seedhi. District level par <strong>krishi adhikari (DAO)</strong> ke office me likhit application
          do, saath me status ka printout aur ticket number. Usse bhi upar har state ka ek{' '}
          <strong>nodal officer</strong> hota hai jo PM Kisan ka in-charge hai — naam, office aur sampark{' '}
          <Link href="/articles/PmKisanStateNodalOfficerList" className="underline font-bold">state nodal
          officer list</Link> me diye hain. Likhit shikayat ki copy apne paas rakho; agli baar &ldquo;pehle
          bhi likha tha&rdquo; kehne ke liye wahi kaam aati hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aakhri hathiyar — <strong>CPGRAMS</strong> (pgportal.gov.in), kendra sarkar ka apna grievance
          portal. Yahan darj shikayat seedhe krishi mantralaya tak jaati hai aur registration number se
          track hoti hai. Ise pehla nahi, aakhri rasta samjho — pehle Help Desk aur nodal officer aazmao.
          Par jab mahino baad bhi baat na bane, tab CPGRAMS par purani query ka reference dete hue shikayat
          daalo. Mantralaya level se aayi query par neeche ke office aksar tezi se hilte hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur ek baat — problem eKYC ki nikli ho to{' '}
          <Link href="/articles/PmKisanEkycOnline2026" className="underline">eKYC guide</Link> me OTP wala
          tareeka ghar se hi ho jaata hai, CSC ke chakkar ke bina. Wahi pehle try kar lo.
        </p>

        <SH>Raat Me Ya Phone Ke Alawa — Naye Raste</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          NIC ke mutabik PM-Kisan system me ab <strong>24×7 IVRS aadharit helpline</strong> aur chatbot bhi
          hai — raat me bhi basic status-poochtaachh recorded system se ho sakti hai, bhale staff se baat
          kaamkaji ghanton me hi ho. UMANG app ke Kisan Suvidha se bhi yojana ki sewayein judi hain.
          Pehchaan wali saavdhani har jagah ek hi hai: OTP ya bank password koi bhi sarkari channel kabhi
          nahi maangta.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
          Ek aakhri practical aadat — har call/query ki ek parchi rakho: tareekh, kisse baat hui, kya kaha
          gaya, ticket number. Teen-chaar entries ke baad yahi parchi aapki sabse mazboot daleel ban jaati
          hai, kyunki tab aap andaaze se nahi, record se baat karte ho.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            PM Kisan — Contact Us / Help Desk, official portal.{' '}
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pmkisan.gov.in</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modified} bioKey="PmKisanHelpline155261" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Aur Guides Padhein' },
          { href: '/articles/category/farming', l: 'Kheti Aur Yojana Articles' },
        ]} />
        <Disclaimer k="PmKisanHelpline155261" />
      </div>
    </>
  );
}
