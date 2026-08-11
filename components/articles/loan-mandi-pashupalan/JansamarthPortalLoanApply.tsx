import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Ka Online Process', emoji: '💳' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Loan Kahan Se Le', emoji: '📚' },
  { slug: 'dairy-farm-loan-without-collateral', title: 'Bina Guarantee Dairy Loan', emoji: '🐄' },
  { slug: 'sbi-dairy-loan-interest-rate', title: 'SBI Se Dairy Loan — Rate Guide', emoji: '🏦' },
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Samjhein 2026', emoji: '🆔' },
  { slug: 'bihar-pashupalan-loan-yojana', title: 'Bihar Mein Pashupalan Loan', emoji: '🐃' },
];

const FAQS_DATA = [
  {
    q: 'JanSamarth portal kya hai — bank hai ya sarkari website?',
    a: 'JanSamarth (jansamarth.in) Bharat sarkar ka online platform hai jo credit-linked sarkari schemes ko ek jagah le aata hai. Yeh khud loan nahi deta — yeh aapki eligibility check karke aapki application platform se jude banks tak pahunchata hai. Sanction aur disbursement aapke chune hue bank se hi hota hai.',
  },
  {
    q: 'Portal par kaunse loan milte hain?',
    a: 'Chaar badi categories hain — agriculture/agri-infrastructure loan (KCC samet), business loan (Mudra, PM SVANidhi jaise), livelihood loan aur education loan. Har category ke neeche alag-alag sarkari schemes judi hain. Kisan ke liye sabse kaam ki cheez KCC/crop loan aur agri-infra wali category hai.',
  },
  {
    q: 'JanSamarth se KCC apply karne ke liye kya chahiye?',
    a: 'Aadhaar (mobile number linked hona zaroori — OTP isi par aata hai), AgriStack wali Farmer ID, bank account details aur PAN. Zameen aapke naam par honi chahiye, kyunki abhi ka digital flow zameen ke record se hi eligibility nikalta hai.',
  },
  {
    q: 'Kya JanSamarth par apply karna free hai?',
    a: 'Bilkul free. Na registration ki fee hai, na application ki. Agar koi cyber cafe ya agent "portal ki fee" ke naam par paisa maange toh woh sirf apni service fee le raha hai — portal ka usse koi lena-dena nahi. Form khud bharna sabse safe hai.',
  },
  {
    q: 'Eligibility check karne se CIBIL kharab hota hai kya?',
    a: 'Portal par shuruati eligibility check aapke basic details aur scheme rules par hota hai. Haan, jab aap aage badh kar formal application karte ho toh bank apna credit check karta hai — yeh normal process hai, har loan mein hota hai. Sirf eligibility dekhne se ghabrane ki zaroorat nahi.',
  },
  {
    q: 'Application submit karne ke baad kitne din mein jawab aata hai?',
    a: 'Digital flow mein initial approval kaafi tez milta hai — kai cases mein turant offer dikh jata hai. Lekin final sanction aur disbursement bank ke process par depend karta hai, jisme verification bhi shamil hai. Application ka status portal par real-time track hota hai, wahi dekhte raho.',
  },
  {
    q: 'Mujhe portal par "not eligible" dikha raha hai, ab kya karoon?',
    a: 'Pehle wajah samjho — aksar Farmer ID ka na hona, Aadhaar-mobile link na hona, ya zameen ka record match na karna hota hai. Yeh teeno cheezein theek karke dobara try karo. Agar phir bhi issue hai toh seedha apni branch mein jaakar offline apply kar sakte ho — portal ek raasta hai, ekmatra raasta nahi.',
  },
  {
    q: 'Kya JanSamarth se private bank ka loan bhi milta hai?',
    a: 'Platform se sarkari banks, private banks aur doosri financial institutions judi hain — application ke waqt aapko available lenders ke offers dikhte hain. Offer compare karke apni pasand ka lender chun sakte ho. Rate aur terms har lender ke apne hote hain, isliye compare karna mat bhoolna.',
  },
  {
    q: 'JanSamarth aur bank ki apni website — kahan se apply karna behtar hai?',
    a: 'Dono sahi raaste hain. JanSamarth ka fayda yeh hai ki ek hi jagah kai schemes ki eligibility dikh jaati hai aur subsidy-linked schemes ka process bhi wahi se hota hai. Agar aapko pata hai ki kaunsa bank aur kaunsa product chahiye, toh bank ki website ya branch bhi utni hi theek hai.',
  },
  {
    q: 'Password bhool gaya / OTP nahi aa raha — kya karoon?',
    a: 'OTP Aadhaar se linked mobile par hi aata hai — pehle check karo ki wahi number chalu hai. Number badal gaya hai toh pehle Aadhaar centre par jaakar mobile update karwao. Password reset portal ke "Forgot Password" se ho jata hai. Portal ki helpline aur email support bhi hai, jansamarth.in par contact section dekho.',
  },
];

export default function JansamarthPortalLoanApply({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">JanSamarth Portal Loan Apply</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            JanSamarth Portal 2026: Ek Jagah Se KCC, Mudra Aur Sarkari Loan Apply — Poora Process Samjho
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(article.publishedTime)}</span>
            <span>🔄 Last Updated: 5 August 2026</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/jansamarth-portal-loan-apply/form-bharna.webp"
            alt="Ghar baithe laptop par JanSamarth jaise portal par loan application bharta hua aavedak"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>Short Mein — apply karne se pehle:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>JanSamarth (jansamarth.in) sarkar ka <strong>free</strong> portal hai — KCC, Mudra, education/livelihood schemes ki eligibility ek jagah check hoti hai; loan bank hi deta hai.</li>
            <li>Apply se pehle 3 cheezein: <strong>Aadhaar-mobile link, Farmer ID (AgriStack), bank details + PAN</strong>. Inke bina file aage nahi badhti.</li>
            <li>KCC limit Budget 2025 se <strong>₹5 lakh</strong> tak, effective interest timely repayment par ~4% (7% base − 3% bonus).</li>
            <li>Advance fee maangne wala har aadmi thag hai — portal par koi fee nahi. <strong>Abhi jansamarth.in par eligibility check karo.</strong></li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 5 August 2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Sarkari loan ka purana tareeka sab jaante hain — branch ke chakkar, har baar naya kagaz, aur mahino ka
          intezar. JanSamarth portal isi jhanjhat ko khatam karne ke liye banaya gaya: Bharat sarkar ka ek platform
          jahan credit-linked sarkari schemes ek jagah milti hain, eligibility online check hoti hai, aur application
          seedha banks tak pahunchti hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Lekin portal ka sahi istemal tabhi hota hai jab aapko pata ho ki yeh karta kya hai, kya nahi karta, aur
          apply se pehle kaunsi teen cheezein taiyar rakhni hain. Is guide mein wahi sab step-by-step hai — bina
          bank ki bhaasha ke.
        </p>

        <SH>🧭 JanSamarth Hai Kya — Aur Kya Nahi Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Sabse pehle confusion door karo: JanSamarth koi bank nahi hai aur na hi koi nayi loan scheme. Yeh ek
          <strong> digital pul</strong> hai — ek taraf sarkari schemes (KCC, Mudra, education loan subsidy jaisi),
          doosri taraf desh bhar ke banks aur lenders. Aap beech mein ho: apni details bharo, portal batayega kaunsi
          scheme mein aap fit baithte ho, phir application chune hue lender tak jaati hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Iska sabse bada fayda transparency hai. Pehle scheme ka pata hi nahi chalta tha, ya branch wale keh dete
          the &ldquo;yeh yahan nahi hota.&rdquo; Ab aap khud dekh sakte ho ki kaunsi scheme mein eligible ho, aur application
          ka status ghar baithe track kar sakte ho. Sanction aur paisa dena aaj bhi bank ka kaam hai — portal sirf
          raasta saaf karta hai.
        </p>

        <IB>
          Official website sirf ek hai: <strong>jansamarth.in</strong> — aur registration/application bilkul free
          hai. Milte-julte naam wali fake websites aur &ldquo;guaranteed loan&rdquo; wale WhatsApp message se door raho. Sarkari
          portal kabhi advance fee nahi maangta.
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/jansamarth-portal-loan-apply/categories.webp"
          alt="Kisan se lekar chhote vyapari tak — JanSamarth ki alag-alag loan categories inhi ke liye hain"
          width={1000}
          height={558}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>📂 Kaunse Loan Milte Hain — Chaar Categories</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Category</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kiske Liye</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Agriculture / Agri-Infra</td>
                <td className="border border-[var(--color-border)] p-3">Kisan, pashupalak, agri business</td>
                <td className="border border-[var(--color-border)] p-3">KCC / crop loan, agri infrastructure schemes</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Business</td>
                <td className="border border-[var(--color-border)] p-3">Chhote dukandaar, karobari, street vendor</td>
                <td className="border border-[var(--color-border)] p-3">Mudra (PMMY), PM SVANidhi</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Livelihood</td>
                <td className="border border-[var(--color-border)] p-3">SHG members, gramin parivaar</td>
                <td className="border border-[var(--color-border)] p-3">DAY-NRLM jaise rural livelihood schemes</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Education</td>
                <td className="border border-[var(--color-border)] p-3">Students (higher education)</td>
                <td className="border border-[var(--color-border)] p-3">Interest subsidy schemes (CSIS jaise)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Kisan ke liye asli kaam ki category pehli wali hai. KCC ka digital flow ab AgriStack ke saath juda hua hai —
          yaani aapki Farmer ID aur zameen ka record system khud utha leta hai, kagaz ka dher nahi lagta. Isi wajah se
          KCC ke liye JanSamarth ab sabse tez raasta ban gaya hai — kai states mein iske liye special camps aur
          campaigns bhi chalte hain. 2023 mein Department of Fisheries ne KCC-Fisheries scheme ko bhi JanSamarth par
          integrate kar diya — yaani dairy, poultry, machli palan wale bhi isi portal se KCC ke liye apply kar
          sakte hain, 7% lending rate par (2% interest subvention + timely repayment par 3% extra incentive ke saath).
        </p>

        <IB>
          <strong>Zameen naam par nahi hai? Ek asli pilot chal raha hai:</strong> Financial Express ki May 2025 report
          ke according NABARD aur SBI ne Andhra Pradesh (Krishna, West/East Godavari) aur Odisha (Cuttack, Puri) mein
          RBI ke digital rupee (CBDC) se <strong>batai/tenant kisano ko KCC ka fayda</strong> dene ka pilot chalaya —
          FY25 ke ant tak Odisha mein 501 tenant kisano ko ₹2.73 crore aur Andhra mein 218 kisano ko ₹1.86 crore
          sanction hua (<a href="https://www.financialexpress.com/policy/economy-digital-currency-comes-to-farmers-aid-3845051/" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: Financial Express</a>).
          Abhi yeh pilot hai, sab jagah nahi — par disha saaf hai: landless kisano ke liye bhi rasta ban raha hai.
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/jansamarth-portal-loan-apply/taiyari.webp"
          alt="Apply se pehle ki taiyari — Aadhaar, bank passbook aur OTP wala mobile paas rakho"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>🧾 Apply Se Pehle — Teen Cheezein Taiyar Karo</SH>
        <StepList>
          <SI n={1}><strong>Aadhaar-mobile link:</strong> poora process OTP par chalta hai, aur OTP sirf Aadhaar se linked number par aata hai. Number band ho gaya hai ya badal gaya hai toh pehle Aadhaar centre par update karwao — yeh sabse common atkaav hai.</SI>
          <SI n={2}><strong>Farmer ID (AgriStack):</strong> KCC/crop loan ke digital flow ke liye Farmer ID zaroori hai. Nahi bani hai toh pehle banwa lo — humne iska poora process alag guide mein likha hai: <Link href="/articles/AgriStackKyaHai2026" className="underline font-bold">AgriStack Kya Hai</Link>.</SI>
          <SI n={3}><strong>Bank details + PAN:</strong> apna account number, IFSC aur PAN saamne rakho. Account aapke naam par ho aur chalu ho — DBT aur disbursement isi mein aayega.</SI>
        </StepList>

        <DB>
          <strong>Zameen ka record:</strong> abhi ka paperless KCC flow un kisano ke liye sabse smooth hai jinke
          naam par zameen hai — kyunki eligibility zameen ke digital record se nikalti hai. Batai/lease par kheti
          karne walon ko portal par dikkat aa sakti hai; unke liye branch ka offline raasta abhi bhi khula hai.
        </DB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/jansamarth-portal-loan-apply/otp-verify.webp"
          alt="Mobile par OTP daal kar verify karta kisan — registration ka pehla step"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>💻 Step-by-Step: JanSamarth Se Loan Apply</SH>
        <StepList>
          <SI n={1}><strong>jansamarth.in kholo</strong> aur &ldquo;Register&rdquo; par jao. Mobile number aur email se account banao, OTP verify karo.</SI>
          <SI n={2}><strong>Loan category chuno</strong> — kisan ho toh Agriculture wali. Uske neeche schemes ki list dikhegi.</SI>
          <SI n={3}><strong>Eligibility check karo</strong> — kuch basic sawaal puchhe jaayenge (kaam, income, zameen, zaroorat kitni hai). Jawab imaandaari se do; galat jawab se aage verification mein file rukti hai.</SI>
          <SI n={4}><strong>Eligible schemes dekho</strong> — portal batayega kaunsi scheme mein aap fit ho aur kitna loan ban sakta hai.</SI>
          <SI n={5}><strong>Documents/details bharo</strong> — Aadhaar e-KYC, bank details, PAN. KCC flow mein Farmer ID se zameen ka data khud aa jata hai.</SI>
          <SI n={6}><strong>Lender chuno aur submit karo</strong> — available banks ke offers compare karo (rate, processing). Submit karte hi application number milega — save kar lo.</SI>
          <SI n={7}><strong>Status track karo</strong> — login karke &ldquo;My Applications&rdquo; mein real-time status dikhta hai. Bank verification ke liye contact kare toh available raho.</SI>
        </StepList>

        <GovLink
          href="https://www.jansamarth.in"
          label="JanSamarth — National Portal for Credit Linked Government Schemes"
          guide="Portal Kholo"
          portalName="jansamarth.in"
        />

        <SH>⏱️ Kitna Time Lagta Hai — Sach Bataein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Portal ka digital hissa tez hai — eligibility minutes mein, aur kai cases mein initial approval bhi turant
          dikh jata hai. Lekin yeh samajhna zaroori hai ki initial approval aur haath mein paisa — do alag stations
          hain. Beech mein bank ka verification hota hai: details ka milaan, kabhi-kabhi branch visit ya field check.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Chhota, saaf-suthra case (sab documents matched, Farmer ID bani hui, zameen ka record clean) sabse jaldi
          nikalta hai. Delay wahi hota hai jahan naam ka mismatch hai, mobile link nahi hai, ya record adhoora hai.
          Matlab: portal ki speed aapki taiyari par depend karti hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/jansamarth-portal-loan-apply/status-check.webp"
          alt="Bank ke bahar mobile par application status check karta aavedak"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>📊 Application Track Kaise Karein — Aur Kab Awaaz Uthayein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Submit karne ke baad portal par login karke <strong>“My Applications”</strong> section mein har
          application ka live status dikhta hai — pending, under review, sanctioned, ya query raised. Query
          aayi ho toh usi waqt jawab do; file wahin ruki rehti hai jab tak aap document ya jaankari nahi dete.
          Status hafte bhar se ek hi jagah atka ho toh chuppi mat saadho — pehle portal ki helpline/grievance
          section mein complaint daalo, aur saath mein us bank ki branch mein jaakar application number ke
          saath baat karo jise application gayi hai. Application number, screenshot aur date — yeh teen
          cheezein har baat-cheet mein saath rakho; follow-up wahi kisan jeet-ta hai jiske paas record hota hai.
        </p>

        <SH>⚠️ In Galtiyon Se Bacho</SH>
        <StepList>
          <SI n={1}><strong>Agent ke bharose sab chhod dena</strong> — OTP aur login aapka hai, kisi ko mat do. Fraud ka sabse bada raasta yahi hai.</SI>
          <SI n={2}><strong>Advance fee dena</strong> — &ldquo;file aage badhane ke ₹2,000&rdquo; jaisi maang sirf thagi hai. Portal aur bank, dono ka application process free hai (bank ki official processing fee sanction ke documents mein likhi hoti hai, cash mein nahi li jaati).</SI>
          <SI n={3}><strong>Ek se zyada jagah ek saath apply karna</strong> — har formal application par credit check hota hai; bahut saari enquiries aapka credit profile kamzor dikhati hain. Ek raasta chuno, uska jawab aane do.</SI>
          <SI n={4}><strong>Galat income/details bharna</strong> — eligibility mein aage nikal jaoge, par verification mein file wahin rukegi aur record kharab alag hoga.</SI>
          <SI n={5}><strong>Sirf portal par atke rehna</strong> — kisi wajah se online flow fail ho raha hai toh branch ka offline raasta hamesha khula hai. Portal ek sahulat hai, shart nahi.</SI>
        </StepList>

        <Image
          src="/images/articles/loan-mandi-pashupalan/jansamarth-portal-loan-apply/branch-ya-online.webp"
          alt="Branch jaayein ya online apply karein — KCC ke liye dono raaste khule hain"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>🏦 KCC Ke Liye JanSamarth vs Branch — Kya Chunein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Agar aapki Farmer ID bani hai, zameen aapke naam hai aur Aadhaar-mobile linked hai — JanSamarth ka
          paperless flow aazmao, yahi sabse kam bhaag-daud wala raasta hai. Agar record mein koi bhi pech hai
          (batai ki zameen, naam ka mismatch, purana khata), toh seedha branch jao — wahan aadmi baithkar pech
          suljha sakta hai, portal nahi.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          KCC ke rate, subvention aur limit ka poora ganit humne alag guides mein samjhaya hai —{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC Online Apply</Link>{' '}
          aur <Link href="/articles/sbi-dairy-loan-interest-rate" className="underline font-bold">SBI ke dairy loan
          rates wali guide</Link> zaroor padho, taaki bank mein sahi sawaal pooch sako.
        </p>

        <WB>
          Loan lena aakhri kadam hona chahiye, pehla nahi. Pehle yeh tay karo ki paisa kis kaam ke liye chahiye aur
          repayment kahan se aayegi. Scheme aur subsidy ka fayda tabhi hai jab project khud chalne laayak ho —
          warna sasta loan bhi bojh ban jata hai.
        </WB>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Abhi official portal par check karo:</strong>{' '}
          <a href="https://www.jansamarth.in" target="_blank" rel="noopener noreferrer" className="underline font-bold">jansamarth.in</a>{' '}
          — eligibility check free hai, 10 minute lagte hain, aur koi advance fee nahi.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>📚 Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            JanSamarth — Govt of India unified credit portal.{' '}
            <a href="https://www.jansamarth.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">jansamarth.in</a>
          </li>
          <li>
            Financial Express — NABARD-SBI CBDC pilot for tenant farmers.{' '}
            <a href="https://www.financialexpress.com/policy/economy-digital-currency-comes-to-farmers-aid-3845051/" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">financialexpress.com</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} />
        <BottomNav extraLinks={[
          { href: '/articles', l: '📚 Aur Guides Padhein' },
          { href: '/articles/category/loan', l: '📂 Karj Aur Loan Articles' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
