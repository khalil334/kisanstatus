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
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
          Aur ek baat — problem eKYC ki nikli ho to{' '}
          <Link href="/articles/PmKisanEkycOnline2026" className="underline">eKYC guide</Link> me OTP wala
          tareeka ghar se hi ho jaata hai, CSC ke chakkar ke bina. Wahi pehle try kar lo.
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
