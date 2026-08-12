import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'sbi-dairy-loan-interest-rate', title: 'SBI Dairy Loan Ka Byaj Kitna', emoji: '' },
  { slug: 'bihar-pashupalan-loan-yojana', title: 'Bihar Pashupalan Loan Yojana', emoji: '' },
  { slug: 'murgi-palan-loan-nlm-subsidy', title: 'Murgi Palan Loan & NLM Subsidy', emoji: '' },
  { slug: 'rashtriya-gokul-mission-subsidy', title: 'Rashtriya Gokul Mission Subsidy', emoji: '' },
  { slug: 'jansamarth-portal-loan-apply', title: 'JanSamarth Portal Loan Apply' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Se Working Capital' },
];

const FAQS_DATA = [
  {
    q: 'Kya sach mein bina zameen girvi rakhe dairy loan mil jata hai?',
    a: 'Haan, lekin sirf ek limit tak. Mudra ke chaaron category (Shishu se Tarun Plus tak, ₹20 lakh) mein bank collateral nahi maang sakta — guarantee cover CGFMU deta hai. Isse upar ka loan bhi bina property ho sakta hai agar bank use CGTMSE guarantee ke neeche daal de. Zameen ke kagaz phir bhi maange ja sakte hain, par pledge ke liye nahi — sirf ye dikhane ke liye ki shed kahan banega.',
  },
  {
    q: 'Mere paas apni zameen hi nahi hai, kirae ki jagah par shed banaunga. Loan milega?',
    a: 'Mil sakta hai. Bank ko jagah ka legal control chahiye hota hai, ownership zaroori nahi — 5-7 saal ka registered rent/lease agreement zyada tar cases mein chal jata hai, kyunki loan tenure usse chhota hota hai. Lease loan period se chhota hua toh objection pakka aayega, isliye agreement banwate waqt hi tenure lamba rakhwa lo.',
  },
  {
    q: 'CIBIL score kitna hona chahiye?',
    a: 'Government scheme mein koi official cut-off likha nahi hai, par branch practice mein 700 ke aas-paas ka score aasani se nikal jata hai. Asli dikkat score kam hone se zyada active default se hoti hai — purana loan NPA chal raha ho, ya kisi ka guarantor bane ho jiska loan bigad gaya ho, toh file wahin ruk jati hai. Apply se pehle free CIBIL report nikaal kar purane settled loans ka "closed" status check kar lena.',
  },
  {
    q: 'Mudra, PMEGP aur CGTMSE — teeno ek saath le sakta hoon?',
    a: 'Nahi. Ek hi project par Mudra aur PMEGP dono nahi milte, kyunki dono ka funding source alag hai aur double subsidy allowed nahi. CGTMSE alag cheez hai — woh loan nahi, guarantee hai, jo bank aapke normal term loan ke peeche laga deta hai. Practical combination: PMEGP (subsidy ke liye) ya Mudra (speed ke liye) + CGTMSE cover, aur uske saath working capital ke liye KCC.',
  },
  {
    q: 'Subsidy paisa kab aur kaise milta hai?',
    a: 'Zyada tar dairy subsidy back-ended hoti hai — pehle poora loan sanction hota hai, kharch hota hai, unit chalu hoti hai, phir subsidy ka amount aata hai. PMEGP mein margin money 3 saal ke lock-in ke saath ek alag account mein rakha jata hai; unit theek chali toh loan mein adjust ho jata hai. Matlab: subsidy se EMI kam hoti hai, upfront cash hath mein nahi aata.',
  },
  {
    q: '2 gaay ke chhote unit ke liye kaunsa route sahi hai?',
    a: 'Mudra Shishu ya Kishore. ₹50,000 tak Shishu, uske upar Kishore — dono mein documentation halka hai aur DPR bhi 2-3 page ka chal jata hai. Itne chhote unit ke liye PMEGP file banwana time waste hai, kyunki us process mein DPR, EDP training aur committee approval sab lagta hai.',
  },
  {
    q: 'NABARD DEDS band ho gayi hai kya?',
    a: 'DEDS ka structure abhi bhi documented hai — 25% general, 33.33% SC/ST back-ended subsidy — par iski funding saal-dar-saal intermittent rahi hai, aur kai branch officers batate hain ki naye application par subsidy sanction available nahi tha. Isliye DEDS ko plan ka base na banao. Apni district ke NABARD office ya financing bank se likhit confirm karo ki is saal window khuli hai ya nahi, phir aage badho.',
  },
  {
    q: 'Loan ke liye kitni gaay ka project banwana chahiye?',
    a: 'Woh aapke doodh bechne ke intezaam par depend karta hai, gaay ki ginti par nahi. Agar gaon mein cooperative ya dairy collection centre hai jo roz uthata hai, toh 8-10 pashu ka unit sambhal jata hai. Sirf local grahak par depend ho toh 4-5 se shuru karo — warna doodh bachega, khali paisa chara mein jayega. Bank bhi yahi dekhta hai ki milk kahan bikega.',
  },
  {
    q: 'Application reject ho gayi toh dobara kab apply kar sakta hoon?',
    a: 'Koi fixed waiting period nahi hai, lekin usi branch mein wahi file dobara daalna bekar hai. Pehle likhit reason lo — bank ko rejection ka reason batana padta hai. Aam wajahein: DPR mein doodh ka rate zyada dikha diya, chara ka kharcha kam dikha diya, ya repayment capacity match nahi hui. Numbers theek karke 1-2 mahine baad dobara file karo, chahe usi bank mein ya doosri branch mein.',
  },
  {
    q: 'Interest subvention aur subsidy — dono ek hi cheez hai?',
    a: 'Nahi. Subsidy project cost ka ek hissa maaf karti hai (jaise PMEGP margin money). Interest subvention loan ka amount kam nahi karti, sirf byaj ka bojh ghatati hai — AHIDF mein 3% tak interest subvention milta hai bade dairy processing projects par. Chhote farm ke liye subsidy zyada matter karti hai, bade processing unit ke liye subvention.',
  },
];

type Route = {
  name: string;
  limit: string;
  collateral: string;
  subsidy: string;
  fit: string;
};

const ROUTES: Route[] = [
  {
    name: 'Mudra (PMMY)',
    limit: '₹20 lakh tak (Tarun Plus)',
    collateral: 'Zero — CGFMU cover',
    subsidy: 'Koi capital subsidy nahi',
    fit: 'Chhota-madhyam unit, jaldi paisa chahiye',
  },
  {
    name: 'PMEGP',
    limit: '₹50 lakh tak project (manufacturing)',
    collateral: '₹10 lakh tak zero',
    subsidy: '15%–35% margin money',
    fit: 'Naya unit, subsidy ke liye intezaar kar sakte ho',
  },
  {
    name: 'CGTMSE-backed bank loan',
    limit: '₹10 crore tak cover',
    collateral: 'Guarantee se replace',
    subsidy: 'Nahi — sirf guarantee',
    fit: 'Bada farm, bank normal term loan de raha hai',
  },
  {
    name: 'Stand-Up India',
    limit: '₹10 lakh – ₹1 crore',
    collateral: 'CGTMSE ke through',
    subsidy: 'Nahi',
    fit: 'SC/ST ya mahila, pehla greenfield unit',
  },
];

const MUDRA_SLABS = [
  { cat: 'Shishu', range: 'Up to ₹50,000', use: '1-2 pashu, chara ka intezaam' },
  { cat: 'Kishore', range: '₹50,001 – ₹5 lakh', use: '3-6 pashu + chhota shed' },
  { cat: 'Tarun', range: '₹5 lakh – ₹10 lakh', use: '8-10 pashu, pucca shed, chaff cutter' },
  { cat: 'Tarun Plus', range: '₹10 lakh – ₹20 lakh', use: 'Expansion — sirf un logon ke liye jinhone pehla Tarun loan chuka diya' },
];

const PMEGP_ROWS = [
  { who: 'General', area: 'Shahar', sub: '15%', own: '10%' },
  { who: 'General', area: 'Gaon', sub: '25%', own: '10%' },
  { who: 'SC/ST/OBC/Minority/Mahila/Ex-servicemen/Divyang', area: 'Shahar', sub: '25%', own: '5%' },
  { who: 'SC/ST/OBC/Minority/Mahila/Ex-servicemen/Divyang', area: 'Gaon', sub: '35%', own: '5%' },
];

export default function DairyFarmLoanWithoutCollateral({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Dairy Farm Loan Bina Collateral</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Dairy Farm Loan Bina Collateral 2026: Zameen Girvi Rakhe Bina ₹20 Lakh Tak Kaise Milega
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Last Updated: 5 August 2026</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/dairy-farm-loan-without-collateral/dairy-subah.webp"
            alt="Subah ke waqt dairy farm par chara dalta kisan — bina zameen girvi rakhe bhi yeh shuruaat mumkin hai"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>TL;DR — seedha faisla:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Mudra (₹20 lakh tak)</strong> — kisi bhi slab par bank collateral maang hi nahi sakta; paisa jaldi chahiye toh yahi route.</li>
            <li><strong>PMEGP</strong> — 15-35% margin money subsidy (wapas nahi karni); process 2-3 mahine ka, par gaon ki mahila/SC/ST ko 35% ka faayda sabse bada.</li>
            <li><strong>CGTMSE</strong> — loan nahi, guarantee cover; ₹20 lakh se bade project ke liye bank ke normal term loan ke peeche lagta hai.</li>
            <li>DPR mein working capital jodna mat bhoolna — files girne ki sabse aam wajah yahi hai. <strong>Abhi jansamarth.in par apni eligibility check karo.</strong></li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 5 August 2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          &ldquo;Zameen ke kagaz laao, security lagegi.&rdquo; Branch manager ki yeh ek line har saal hazaron dairy ke
          sapne wahin rok deti hai. Maine branch mein khud dekha hai — aadmi poori taiyari se aaya, par zameen naam
          par nahi thi, aur baat wahin khatam. Batwara abhi hua nahi? Toh kya loan ka darwaza band?
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Nahi. Niyam ki kitab mein teen aise raaste hain jahan bank property maang hi nahi sakta — kyunki uska
          risk pehle se ek sarkari guarantee cover kar rahi hoti hai. Aage inhi teen raaston ki baat hai: kitna
          milta hai, kya kharcha lagta hai, aur file kin chhoti-chhoti wajahon se girti hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/dairy-farm-loan-without-collateral/bank-baat.webp"
          alt="Branch mein bank manager se loan ki baat karta kisan"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Collateral Aur Guarantee — Fark Samjhe Bina Branch Mat Jao</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Collateral yaani aapki apni cheez girvi — zameen, makaan, FD. Guarantee bilkul doosri cheez hai: ek teesra
          paksh bank se kehta hai ki loan dooba toh nuksan ka bada hissa main bharunga. Dairy ke case mein yeh
          teesra paksh sarkari trust hai — chhote loan pe CGFMU, bade pe CGTMSE.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Isko samajhne ka faayda seedha branch ki table par milta hai. Aap officer se yeh nahi keh rahe ki
          &ldquo;security nahi dunga&rdquo; — aap keh rahe ho ki is scheme mein security ki jagah guarantee cover lagta
          hai. Pehli baat jhagda lagti hai, doosri baat niyam. Officer niyam ki bhasha samajhta hai.
        </p>

        <IB>
          <strong>Ek line mein:</strong> pashu khud loan ka hypothecated asset ban jate hain. Yani jo gaay-bhains aap
          loan se kharidoge, wahi bank ki security hain — zameen ki zaroorat isi liye khatam ho jati hai.
        </IB>

        <SH>Teen Raaste, Ek Table</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Route</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Limit</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Collateral</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Subsidy</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kiske Liye Sahi</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((r, i) => (
                <tr key={r.name} className={i % 2 === 1 ? 'bg-[var(--color-bg-alt)]' : ''}>
                  <td className="border border-[var(--color-border)] p-3 font-semibold">{r.name}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.limit}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.collateral}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.subsidy}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Image
          src="/images/articles/loan-mandi-pashupalan/dairy-farm-loan-without-collateral/mudra-portal.webp"
          alt="Mobile par loan portal dekhta hua aavedak — Mudra apply karne ka raasta online bhi hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Raasta 1: Mudra — Jahan Se Zyada Tar Log Shuru Karte Hain</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Dairy aur pashupalan Mudra Yojana ke andar finance hote hain, aur iska sabse bada point ek hi hai —
          collateral maangna bank ke bas mein hi nahi hai, kisi bhi slab par. Budget 2024-25 se ek naya slab bhi
          juda, <strong>Tarun Plus</strong>, jisne upar ki limit ₹10 lakh se kheench kar ₹20 lakh kar di.
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Category</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Amount</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Dairy Mein Kis Kaam Ke Liye</th>
              </tr>
            </thead>
            <tbody>
              {MUDRA_SLABS.map((s, i) => (
                <tr key={s.cat} className={i % 2 === 1 ? 'bg-[var(--color-bg-alt)]' : ''}>
                  <td className="border border-[var(--color-border)] p-3 font-semibold">{s.cat}</td>
                  <td className="border border-[var(--color-border)] p-3">{s.range}</td>
                  <td className="border border-[var(--color-border)] p-3">{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <WB>
          Tarun Plus har naye applicant ke liye nahi hai. Yeh un logon ke liye banaya gaya hai jinhone pehle Tarun
          category ka loan liya aur poora chuka diya. Pehli baar apply kar rahe ho toh aapki practical ceiling ₹10 lakh
          hai — DPR usi hisaab se banwao, warna file wapas aayegi.
        </WB>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Byaj kitna? Sarkari bank se lo toh aam taur par 9 se 12 pratishat. NBFC se lo toh 18 tak bhi pahunch
          jata hai — haan, itna fark hota hai. Rate har bank apna rakhta hai. Do-teen branch ghoom kar likhit rate
          le lo aur compare karo; ek pratishat ka fark paanch saal mein hazaaron rupaye banata hai. Itni mehnat
          ka itna paisa aur kahan milega.
        </p>

        <GovLink
          href="https://www.udyamimitra.in/"
          label="Udyamimitra Par Mudra Application Daalo"
          guide="Portal Kholo"
          guideHref="/articles/jansamarth-portal-loan-apply"
          portalName="udyamimitra.in"
        />

        <IB>
          <strong>Asli misaal, kagaz ke saath:</strong> UP ke Lakhimpur Kheri district ke Deoria gaon ke Ram Lakhan ne
          2024 mein District Industries Centre ke through <strong>PMEGP ke neeche ₹10 lakh ka loan</strong> lekar dairy
          unit lagai. UP sarkar ki bataayi report ke according unit ab roz 5-8 quintal doodh local market mein deti
          hai, teen gaon walon ko rozgaar mila, aur kharcha kaat kar mahine ka net ₹15,000-30,000 bach raha hai (
          <a href="https://www.indiatimes.com/news/pmegp-fuels-rural-entrepreneurship-in-up/articleshow/131650843.html" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: IndiaTimes / UP govt</a>).
          Number bade nahi hain — par asli hain. Isi liye plan believable banao, thumbnail wala nahi.
        </IB>

        <SH>Raasta 2: PMEGP — Yahan Subsidy Ka Tadka Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          PMEGP ko KVIC chalata hai, aur iski khaas baat woh margin money subsidy hai jo wapas nahi karni padti —
          project cost ka 15 se 35 pratishat sarkar bhar deti hai. Limit? Manufacturing type kaam par ₹50 lakh
          tak, service type par ₹20 lakh tak. Dairy unit fit baithti hai.
        </p>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Applicant</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Area</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Subsidy</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Apna Paisa</th>
              </tr>
            </thead>
            <tbody>
              {PMEGP_ROWS.map((r, i) => (
                <tr key={`${r.who}-${r.area}`} className={i % 2 === 1 ? 'bg-[var(--color-bg-alt)]' : ''}>
                  <td className="border border-[var(--color-border)] p-3 font-semibold">{r.who}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.area}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.sub}</td>
                  <td className="border border-[var(--color-border)] p-3">{r.own}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ginti karke dekhiye. Gaon mein rehne wali ek mahila applicant ka ₹8 lakh ka dairy project hai. 35% yaani
          ₹2.8 lakh subsidy, 5% yaani ₹40,000 apni jeb se, aur bacha ₹4.8 lakh bank loan — EMI sirf isi hisse par
          banegi. Yahi project General category ke shahar wale applicant ka hota toh subsidy sirf ₹1.2 lakh milti.
          Category aur area, dono milkar aapki EMI tay karte hain.
        </p>

        <IB>
          Subsidy ka paisa seedha hath mein nahi aata. Woh ek alag account mein 3 saal ke lock-in ke saath rakha jata
          hai. Unit theek se chali toh teen saal baad loan mein adjust ho jata hai. Beech mein unit band kar di, toh
          subsidy wapas le li jati hai.
        </IB>

        <SH>Raasta 3: CGTMSE — Bade Project Ka Rasta</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Pehli baat: CGTMSE koi loan scheme nahi hai. Log yahi samajh kar branch mein &ldquo;CGTMSE loan&rdquo; maangte
          hain aur officer sar khujata hai. Yeh ek credit guarantee trust hai (MSME Ministry + SIDBI ka). Hota yeh
          hai ki bank aapko apna normal term loan deta hai aur usko CGTMSE ke cover mein daal deta hai — loan dooba
          toh trust bank ka bada nuksan bhar dega. Bank ka dar khatam, toh property ki maang bhi khatam.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          1 April 2025 ke updated scheme document ke baad iski cover ceiling ₹10 crore tak hai, guarantee coverage
          loan amount ka lagbhag 75%–85% (micro enterprise aur SC/ST applicant ko upar wala slab milta hai), aur annual
          guarantee fee 0.37%–1.35% ke range mein. Yeh fee borrower se hi li jati hai, isliye apne total cost mein
          isko jodna mat bhoolna.
        </p>

        <WB>
          CGTMSE cover lene ke liye Udyam registration chahiye hota hai. Udyam free hai aur online 15 minute ka kaam
          hai — bank jaane se pehle nikaal lo. Bahut si files sirf isliye latakti hain ki applicant ke paas Udyam
          number nahi tha.
        </WB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/dairy-farm-loan-without-collateral/pashu-shed.webp"
          alt="Paanch pashu ki dairy unit ka shed andar se — project cost isi par banti hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Paanch Pashu Ki Unit — DPR Mein Kya-Kya Jayega</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Neeche jo structure hai woh samajhne ke liye hai, copy karne ke liye nahi — asli rate aapke ilaake,
          breed aur mistri ke bhav se tay honge. Maqsad itna hai ki pata rahe bank DPR kholte hi kin cheezon par
          nazar daalta hai.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Head</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kya Isme Aata Hai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Pashu kharid</td>
                <td className="border border-[var(--color-border)] p-3">Breed, doodh ki capacity, transport aur insurance premium</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Shed</td>
                <td className="border border-[var(--color-border)] p-3">Per pashu floor area, chhat, farsh ka slope, naali, paani ka intezaam</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Equipment</td>
                <td className="border border-[var(--color-border)] p-3">Chaff cutter, doodh ke bartan, milking machine (agar le rahe ho), cooling</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Working capital</td>
                <td className="border border-[var(--color-border)] p-3">Shuru ke 2-3 mahine ka chara, dawai, bijli, labour</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Contingency</td>
                <td className="border border-[var(--color-border)] p-3">Bimari, ek pashu ka dry period, rate girne ka buffer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DB>
          <strong>Sabse aam galti:</strong> working capital DPR mein daala hi nahi jata. Pashu aa gaye, shed ban gaya,
          aur pehle mahine chara kharidne ke paise nahi bache. Bank se udhaar lena mushkil, aur doodh abhi shuru nahi
          hua. Kam se kam 3 mahine ka chara kharch DPR mein jodwa hi lo.
        </DB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/dairy-farm-loan-without-collateral/chara-kharcha.webp"
          alt="Chara aur kharche ka hisaab likhtaa kisan — EMI se pehle yeh ganit zaroori hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>EMI Kitni Banegi — Kagaz Par Dekho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh figures 11% saalana rate par nikale hain, sirf andaza banane ke liye — aapke bank ka rate alag hoga
          toh EMI bhi alag banegi:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Loan</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Tenure</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">EMI (approx)</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Total Byaj (approx)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">₹2,00,000</td>
                <td className="border border-[var(--color-border)] p-3">3 saal</td>
                <td className="border border-[var(--color-border)] p-3">₹6,548</td>
                <td className="border border-[var(--color-border)] p-3">₹35,719</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">₹5,00,000</td>
                <td className="border border-[var(--color-border)] p-3">5 saal</td>
                <td className="border border-[var(--color-border)] p-3">₹10,871</td>
                <td className="border border-[var(--color-border)] p-3">₹1,52,273</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">₹8,00,000</td>
                <td className="border border-[var(--color-border)] p-3">5 saal</td>
                <td className="border border-[var(--color-border)] p-3">₹17,394</td>
                <td className="border border-[var(--color-border)] p-3">₹2,43,636</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">₹10,00,000</td>
                <td className="border border-[var(--color-border)] p-3">7 saal</td>
                <td className="border border-[var(--color-border)] p-3">₹17,122</td>
                <td className="border border-[var(--color-border)] p-3">₹4,38,285</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Do baatein is table se saaf hain. Ek, tenure lamba karne se EMI halki hoti hai par total byaj kaafi badh
          jata hai — ₹10 lakh 7 saal mein lene par byaj hi ₹4 lakh se upar chala jata hai. Do, EMI tab hi sahi hai jab
          mahine ka doodh income usse kam se kam do guna ho, warna dry period mein hi kist bigadne lagti hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/dairy-farm-loan-without-collateral/documents.webp"
          alt="Branch jaane se pehle documents ki taiyari — ID, passbook, photo aur quotation"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Branch Jaane Se Pehle Yeh Sab Jama Karo</SH>
        <StepList>
          <SI n={1}>
            <strong>Aadhaar aur PAN</strong> — naam ki spelling dono mein same honi chahiye. Halka fark bhi verification
            mein rukawat banta hai.
          </SI>
          <SI n={2}>
            <strong>Bank statement, 6-12 mahine ka</strong> — usi account ka jo regular chalta hai. Khali account
            repayment capacity nahi dikhata.
          </SI>
          <SI n={3}>
            <strong>Udyam registration certificate</strong> — free, online. CGTMSE cover aur MSME benefit ke liye zaroori.
          </SI>
          <SI n={4}>
            <strong>Project report (DPR)</strong> — pashu ki ginti, doodh ka realistic rate, chara kharch, EMI plan.
            Zyada bada sapna likhne se file strong nahi hoti, believable numbers se hoti hai. Hazaron files isi
          wajah se rukti hain ki DPR mein doodh ka rate phulaya hua tha.
          </SI>
          <SI n={5}>
            <strong>Jagah ka proof</strong> — apni zameen ke kagaz, ya registered lease/rent agreement. Yeh pledge ke
            liye nahi, sirf site dikhane ke liye.
          </SI>
          <SI n={6}>
            <strong>Category certificate</strong> — SC/ST/OBC ya mahila applicant ho toh PMEGP mein subsidy slab isi se
            upar jata hai. Na dena apna nuksan hai.
          </SI>
          <SI n={7}>
            <strong>Doodh bikri ka koi proof</strong> — cooperative membership, collection centre ki parchi, ya buyer
            se likhit intent. Yeh optional hai, par file ko sabse zyada isse madad milti hai.
          </SI>
        </StepList>

        <SH>Online Apply Kahan Hota Hai</SH>
        <StepList>
          <SI n={1}>
            <strong>Mudra ke liye:</strong> udyamimitra.in par register karke Mudra application bharo, category (Shishu
            /Kishore/Tarun) select karo aur documents upload kar do.
          </SI>
          <SI n={2}>
            <strong>Sabhi scheme ek jagah dekhne ke liye:</strong> jansamarth.in par apni eligibility check karo — yeh
            portal aapko batata hai ki kaunsi scheme aap par lag sakti hai.
          </SI>
          <SI n={3}>
            <strong>PMEGP ke liye:</strong> kviconline.gov.in ka PMEGP e-portal. Application fee zero hai. Form ke baad
            district level committee aur bank branch, dono ke paas file jati hai.
          </SI>
          <SI n={4}>
            <strong>Application ID sambhal kar rakho</strong> aur 10-15 din baad branch mein khud jaake status pucho.
            Online status kaafi baar update late hota hai, jabki file branch mein padi hoti hai.
          </SI>
        </StepList>

        <GovLink
          href="https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
          label="PMEGP e-Portal Par Apply Karo"
          guide="PMEGP Portal"
          guideHref="/articles/murgi-palan-loan-nlm-subsidy"
          portalName="kviconline.gov.in"
        />

        <SH>File Kyun Girti Hai — Chaar Asli Wajahein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aksar applicant ko pata bhi nahi chalta ki file kyun ruki. Sabse aam wajah? DPR mein doodh ka rate market
          se upar likh dena. Officer local rate janta hai — usko dikha nahi ki number phulaya gaya hai, aur poori
          file ka bharosa gaya. Isi tarah chara-labour ka kharcha itna kam dikhana ki profit sapna lage — wahi asar.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Teesri wajah credit history hai. Purana koi loan default mein chal raha ho, ya aap kisi ke guarantor ho jiska
          loan bigad gaya — dono cases file rok dete hain. Chauthi: subsidy ka galat samajh. Kai log yeh sochkar aate
          hain ki subsidy pehle cash milegi aur usse apna hissa bharenge. Aisa nahi hota, aur baat khul jane par
          margin money hi arrange nahi hoti.
        </p>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Kaunsa Route Chuno — Seedha Jawab</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Chhota unit hai (2-6 pashu) aur paisa jaldi chahiye → <strong>Mudra</strong>. Naya unit hai, subsidy ke liye
            2-3 mahine ka process bardaasht kar sakte ho, aur SC/ST/OBC ya mahila applicant ho → <strong>PMEGP</strong>,
            kyunki gaon mein 35% subsidy sabse bada faayda hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            ₹20 lakh se bada project hai aur bank normal term loan de raha hai → <strong>CGTMSE</strong> cover ki baat
            karo. SC/ST ya mahila ho aur greenfield project hai → <strong>Stand-Up India</strong> bhi puchho. Working
            capital ke liye alag se <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC</Link> le lena
            sabse samajhdaari ka kaam hai.
          </p>
        </div>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          <strong>Abhi official portal par check karo</strong> — Mudra ke liye udyamimitra.in, sab schemes ek saath
          dekhne ke liye <a href="https://www.jansamarth.in" target="_blank" rel="noopener noreferrer" className="underline font-bold">jansamarth.in</a>,
          aur PMEGP ke liye kviconline.gov.in. Rate aur slab wahi final hain jo portal aur branch bataye.
        </p>

        <SH>Aapke Sawaal</SH>
        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            PMEGP e-portal — Khadi and Village Industries Commission (KVIC).{' '}
            <a href="https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">kviconline.gov.in</a>
          </li>
          <li>
            IndiaTimes — PMEGP rural entrepreneurship in UP (Lakhimpur Kheri dairy case).{' '}
            <a href="https://www.indiatimes.com/news/pmegp-fuels-rural-entrepreneurship-in-up/articleshow/131650843.html" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">indiatimes.com</a>
          </li>
          <li>
            JanSamarth — Govt of India unified loan portal.{' '}
            <a href="https://www.jansamarth.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">jansamarth.in</a>
          </li>
          <li>
            Udyamimitra — SIDBI enterprise loan portal.{' '}
            <a href="https://www.udyamimitra.in/" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">udyamimitra.in</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} />
        <BottomNav extraLinks={[
          { href: '/articles/sbi-dairy-loan-interest-rate', l: 'SBI Dairy Loan Rate' },
          { href: '/articles/bihar-pashupalan-loan-yojana', l: 'Bihar Pashupalan Loan' },
          { href: '/articles/category/loan', l: 'Loan Guides' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
