import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { Yojana2026ArticleMeta } from '@/lib/yojana-2026-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'Kisan Credit Card Online Apply — Poora Process' },
  { slug: 'dairy-farm-loan-without-collateral', title: 'Dairy Farm Loan Bina Collateral' },
  { slug: 'sbi-dairy-loan-interest-rate', title: 'SBI Dairy Loan — Interest Aur Process' },
];

const FAQS_DATA = [
  {
    q: 'Pashu KCC ke liye zameen zaroori hai kya?',
    a: 'Nahi — yahi is card ki sabse badi khoobi hai. Normal crop KCC me limit zameen ke hisaab se banti hai, par animal husbandry wale KCC me limit pashu ke hisaab se banti hai. Landless pashupalak, kiraye ki zameen wala parivar, ya sirf 2 bhains rakhne wala mazdoor bhi apply kar sakta hai. Bank ko pashu dikhne chahiye — tagged aur record me — zameen nahi.',
  },
  {
    q: 'Mere paas pehle se crop KCC hai — kya dusra card milega?',
    a: 'Dusra card nahi milta, aur maangna bhi nahi chahiye. Bank aapke existing KCC me hi animal husbandry ka sub-limit jodta hai — yani limit enhance hoti hai. Bank jao, bolo "KCC me AH sub-limit add karwana hai", pashuon ka record dikhaao. Naya application, naya processing — sab usi account par hota hai.',
  },
  {
    q: 'Interest sach me 4% hai ya ye sirf ads me likha hota hai?',
    a: '4% koi alag rate nahi — ye math hai. Loan 7% par milta hai (sarkari interest subvention ke baad). Time par poora repay karo to 3% ka prompt repayment incentive alag se milta hai. 7 minus 3 = 4% effective. Par shart wahi hai: due date se pehle repayment. Ek din bhi late hue to incentive gaya aur rate wapas 7% (ya bank ka normal rate) par chala jata hai.',
  },
  {
    q: 'Kitne tak ka loan bina guarantee ke milta hai?',
    a: 'January 2025 se RBI ne collateral-free agriculture loan ki limit ₹1.6 lakh se badha kar ₹2 lakh kar di hai. Matlab ₹2 lakh tak na zameen girvi, na FD, na koi guarantor. Isse upar ke amount par bank security maangega. Purane blogs abhi bhi ₹1.6 lakh likh rahe hain — wo figure December 2024 tak ka hai.',
  },
  {
    q: 'Bank wale keh rahe hain pashu ka bima karwana padega — ye sahi hai?',
    a: 'Haan, ye normal requirement hai, fraud nahi. Bank ka paisa pashu par lag raha hai, aur pashu mar gaya to loan dooba — isliye zyada tar bank tagged aur insured pashu par hi limit banate hain. Bima ka premium chhota hota hai aur kuch states me subsidy bhi milti hai. Haryana me to tagging (12-digit ID) ke bina application aage hi nahi badhti.',
  },
];

function AnchorH2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)] flex items-center gap-2 scroll-mt-24">
      {children}
    </h2>
  );
}

function TocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-green-700 dark:text-green-400 underline hover:no-underline">
        {children}
      </a>
    </li>
  );
}

export default function PashuKisanCreditCard({ article }: { article: Yojana2026ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/yojana" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Pashu KCC</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Pashu Kisan Credit Card — ₹3 Lakh Tak Loan, Bina Zameen Ke Bhi
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
          Pehli baat jo koi saaf nahi batata: <strong>Pashu Kisan Credit Card koi nayi ya alag scheme nahi
          hai.</strong> Ye wahi Kisan Credit Card hai jo 2019 me animal husbandry aur fisheries tak extend
          kiya gaya tha. Haryana sarkar ne is extension ko apna naam diya, camp lagaye, target rakhe — aur
          &ldquo;Pashu Kisan Credit Card&rdquo; brand ban gaya. Baaki states me bhi yahi cheez milti hai,
          bas wahan ise KCC-AH ya &ldquo;KCC for animal husbandry&rdquo; kehte hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Farq samajhna isliye zaroori hai kyunki bank me jaakar &ldquo;Pashu Kisan Credit Card ka form
          do&rdquo; bologe to Haryana ke bahar clerk ulta-seedha jawab de sakta hai. Sahi shabd hain:{' '}
          <em>KCC for animal husbandry / working capital for dairy</em>. Ye bolo, baat turant samajh aa
          jayegi.
        </p>

        <IB>
          <strong>Is article me kya-kya hai:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <TocLink href="#kitna-milta-hai">Per pashu kitna loan banta hai — asli table</TocLink>
            <TocLink href="#kaun-le-sakta">Kaun le sakta hai — landless wali baat</TocLink>
            <TocLink href="#interest-math">4% interest ka poora math</TocLink>
            <TocLink href="#bank-process">Bank me kya bolna hai, kya le jaana hai</TocLink>
            <TocLink href="#reject-reasons">Application reject hone ke asli karan</TocLink>
            <TocLink href="#kcc-already">KCC pehle se hai to kya hoga</TocLink>
            <TocLink href="#limit-badhao">Limit choti mili? Aise badhti hai</TocLink>
          </ul>
        </IB>

        <AnchorH2 id="kitna-milta-hai">Per Pashu Kitna Loan — Asli Figures</AnchorH2>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Limit pashu ke hisaab se banti hai — har pashu ki ek scale of finance hoti hai jo district level
          committee tay karti hai. Neeche Haryana ke figures hain, jo is card ke saath sabse zyada quote hote
          hain. Dusre states me apne district ke hisaab se thoda upar-neeche hoga, isliye inhe exact
          guarantee nahi, benchmark samjho.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-[var(--color-border)]">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">Pashu</th>
                <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">Loan per pashu (Haryana scale)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">Bhains</td>
                <td className="border border-[var(--color-border)] px-3 py-2">₹60,249</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">Gaay</td>
                <td className="border border-[var(--color-border)] px-3 py-2">₹40,783</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">Bakri / Bhed</td>
                <td className="border border-[var(--color-border)] px-3 py-2">₹4,063</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">Suar</td>
                <td className="border border-[var(--color-border)] px-3 py-2">₹16,337</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">Murgi (layer)</td>
                <td className="border border-[var(--color-border)] px-3 py-2">₹720</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">Murgi (broiler)</td>
                <td className="border border-[var(--color-border)] px-3 py-2">₹161</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Do bhains hain? 60,249 × 2 = ₹1,20,498 ki limit ban sakti hai. Teen bhains aur do gaay? Karib ₹2.6
          lakh. Overall cap ₹3 lakh hai. Aur dhyan rahe — ye <em>working capital</em> hai: chara, dana,
          dawai, bijli, doctor ka kharcha. Pashu kharidne ke liye alag term loan hota hai, us par ye
          subvention wala math apply nahi hota.
        </p>

        <AnchorH2 id="kaun-le-sakta">Zameen Nahi Hai? Yahi To Iska Asli Kaam Hai</AnchorH2>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Crop KCC ka gate zameen se khulta hai — jitni zameen, utni limit. Isi wajah se bhoomiheen
          pashupalak saalon tak bank credit se bahar rahe. Sood par paisa uthaya, 2-3% mahina diya, aur
          doodh ka munafa byaaj me chala gaya.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Animal husbandry KCC me limit ka aadhar pashu hai, zameen nahi. Matlab:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1.5 text-sm text-[var(--color-text)]">
          <li>Landless pashupalak apply kar sakta hai</li>
          <li>Kiraye ke shed ya patte ki zameen wala bhi</li>
          <li>Mahila ke naam pashu hain to mahila ke naam card banega</li>
          <li>SHG / joint liability group bhi le sakte hain</li>
        </ul>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Sharton me bas itna hai: pashu asli aur aapke hone chahiye (tagged, record me), aapka Aadhaar-bank
          KYC clean ho, aur pichhla koi loan NPA na ho. Haryana me pashuon ki 12-digit tagging ke bina file
          aage nahi badhti — dusre states me bhi tagging ab dheere-dheere zaroori ho rahi hai.
        </p>

        <AnchorH2 id="interest-math">4% Wala Math — Ek Baar Me Samajh Lo</AnchorH2>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ads me &ldquo;sirf 4% byaaj&rdquo; likha hota hai. Sach thoda layered hai:
        </p>
        <StepList>
          <SI n={1}>Bank ka base rate hota hai ~9%. Sarkar bank ko interest subvention deti hai, isliye aapko loan <strong>7% par</strong> milta hai.</SI>
          <SI n={2}>Agar aap due date tak poora repay kar dete ho, to <strong>3% ka prompt repayment incentive</strong> milta hai.</SI>
          <SI n={3}>7 − 3 = <strong>4% effective</strong>. Yani 4% wala rate sirf time par chukane wale ko milta hai.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          ₹1 lakh ki limit poori saal use ki aur time par lauta di — byaaj karib ₹4,000. Wahi paisa gaon ke
          sood par liya hota to 24-36% ke hisaab se ₹24,000-₹36,000 jata. Farq ye hai.
        </p>
        <WB>
          <strong>Ek din ki chook bhi mehngi hai.</strong> Due date nikal gayi to 3% incentive poora chala
          jata hai — sirf late wale hisse par nahi, poore saal ke byaaj par asar padta hai. Doodh ka payment
          jis tarikh ko aata hai, repayment usi hisaab se plan karo.
        </WB>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Collateral ki baat: January 2025 se RBI ne bina security wale agriculture loan ki seema{' '}
          <strong>₹2 lakh</strong> kar di hai (pehle ₹1.6 lakh thi — purane blogs wahi likh rahe hain). ₹2
          lakh tak na zameen girvi, na guarantor. Uske upar bank security maangega, aur ye jaayaz hai.
        </p>

        <AnchorH2 id="bank-process">Bank Me Kya Bolna Hai, Kya Saath Le Jaana Hai</AnchorH2>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Application kisi portal par nahi, bank branch me hoti hai — wahi branch behtar jahan aapka khata
          pehle se hai. Counter par ye bolo: <em>&ldquo;KCC for animal husbandry ke liye apply karna hai,
          working capital limit chahiye — mere paas itne pashu hain.&rdquo;</em> Form ka naam har bank me
          thoda alag hai, par ye ek line kaam kara degi.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-3">Documents jo lagenge:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1.5 text-sm text-[var(--color-text)]">
          <li>Aadhaar card + PAN (ya form 60)</li>
          <li>Bank passbook / khata detail</li>
          <li>Passport size photo (2)</li>
          <li>Pashuon ka record — tagging number, sankhya, bima ho to policy</li>
          <li>Zameen ho to uska kagaz (zaroori nahi, par limit badhane me kaam aata hai)</li>
        </ul>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Bank ka field officer pashu dekhne aa sakta hai. Ye normal process hai — usi visit par tagging aur
          bima ki baat bhi ho jati hai. Application ki acknowledgement zaroor lo; KCC applications ka
          time-bound disposal hota hai aur receiving ke bina aap kuch prove nahi kar sakte. Card banne ke
          baad ye ek revolving limit ki tarah chalta hai — use karo, chukao, phir use karo. Poora KCC process
          step-by-step samajhna ho to{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC online
          apply wali guide</Link> me hai.
        </p>

        <AnchorH2 id="reject-reasons">Application Kyun Atakti Ya Reject Hoti Hai</AnchorH2>
        <StepList>
          <SI n={1}><strong>CIBIL / purana default</strong> — koi bhi loan NPA hai ya settlement kiya hai to file wahi ruk jati hai. Pehle wo saaf karo.</SI>
          <SI n={2}><strong>Pashu tagged nahi</strong> — bank ko record chahiye. Tagging pashu chikitsak / pashupalan vibhag se hoti hai, free ya mamooli kharch me.</SI>
          <SI n={3}><strong>Bima se inkaar</strong> — bank insured pashu par hi limit banata hai. Premium ko kharcha nahi, loan ki shart samjho.</SI>
          <SI n={4}><strong>Doosre bank me pehle se KCC</strong> — chhupaya to baad me pakda jata hai. Sach batao, sub-limit wala rasta waise bhi behtar hai.</SI>
          <SI n={5}><strong>Adhoora KYC</strong> — Aadhaar me naam ki spelling, mobile link nahi, dormant khata. Chhoti cheezein, par file inhi par mahino latakti hai.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek observation jo kai baar dekhne ko mila: log bhains ke liye ₹60,000 wali limit sun kar jaate
          hain aur ₹25,000-₹30,000 ki approval par naraz ho jaate hain. Bank scale of finance ke andar apna
          assessment bhi lagata hai — doodh ka record, repayment capacity. Kam limit milna reject hona nahi
          hai; 6 mahine ka achha record banao, enhancement maango.
        </p>

        <AnchorH2 id="kcc-already">KCC Pehle Se Hai — To Ye Padho</AnchorH2>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Dusra card nahi milega, aur iski zaroorat bhi nahi. Rule ye hai: crop KCC wale kisan ko animal
          husbandry ke liye <strong>usi limit me sub-limit</strong> milta hai. Bank jao, bolo &ldquo;KCC me
          AH component add karwana hai&rdquo;, pashu ka record do — limit badh jayegi. Total (crop + AH)
          ₹3 lakh ke andar subvention milta hai; sirf AH/fisheries wale kisan ke liye subvention ki apni cap
          ₹2 lakh hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Limit already ₹3 lakh ke paas hai aur aur chahiye? Wo alag kahani hai —{' '}
          <Link href="/articles/hi/kcc-limit-kaise-badhaye" className="underline font-bold">KCC limit 3 se 5
          lakh kaise badhti hai</Link>, isko alag guide me detail se likha hai. Aur agar pashu kharidne ke
          liye bada paisa chahiye (working capital nahi, investment), to{' '}
          <Link href="/articles/dairy-farm-loan-without-collateral" className="underline font-bold">bina
          collateral dairy loan wali guide</Link> ka rasta dekho — wahan term loan aur NLM subsidy ka math
          hai.
        </p>

        <AnchorH2 id="limit-badhao">Limit Choti Mili? 6 Mahine Ka Ye Kaam Karo</AnchorH2>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Bank ki nazar me aapki repayment capacity ka sabse bada saboot ek hi cheez hai —{' '}
          <strong>doodh ka paisa bank khaate me aana</strong>. Dairy society ya company ko doodh dete ho
          to payment cash ke bajaye usi khaate me lo jisse KCC juda hai. Chhe mahine ka aisa record ban
          gaya to enhancement ki baat khud aasaan ho jaati hai — bank ko dikh raha hota hai ki income
          regular hai. Cash me doodh bechna aaj sasta lagta hai, par bank ke saamne aapki kamai zero
          dikhti hai — aur zero income par koi limit nahi badhti.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Doosra kaam — limit ka istemaal aur chukauta dono dikhao. Card lekar use hi na karna bhi galat
          signal hai, aur poori limit kheench kar due date par atakna to sabse bura. Beech ka rasta:
          zaroorat ka paisa nikaalo, doodh ka payment aate hi wapas daalo. Yahi revolving pattern bank
          ke record me aapko A-grade banata hai.
        </p>

        <DB>
          <strong>Seedhi baat:</strong> 2-3 pashu hain aur chara-dana udhaar par chal raha hai, to ye card
          aapke liye sood se aazadi ka sabse sasta rasta hai. Bank jao, KCC-AH bolo, pashu tagged karwao.
          ₹2 lakh tak koi security nahi lagti — aur 4% se sasta paisa is desh me kisan ko kahin nahi milta.
        </DB>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            RBI — Interest Subvention Scheme for KCC to Animal Husbandry &amp; Fisheries farmers (circular
            FIDD.CO.FSD.BC.No.10/05.02.001/2019-20) — 7% concessional rate, 3% prompt repayment incentive,
            AH-only subvention cap.
          </li>
          <li>
            Haryana Pashudhan / Animal Husbandry Dept (
            <a href="https://pashudhanharyana.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pashudhanharyana.gov.in</a>
            ) — per-animal scale of finance figures.
          </li>
          <li>
            RBI (Dec 2024) — collateral-free agriculture loan limit ₹1.6 lakh se ₹2 lakh, effective Jan 2025.
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modified} bioKey="PashuKisanCreditCard" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Aur Guides Padhein' },
          { href: '/calculator/kcc-loan-emi', l: 'KCC Loan EMI Calculator' },
        ]} />
        <Disclaimer k="PashuKisanCreditCard" />
      </div>
    </>
  );
}
