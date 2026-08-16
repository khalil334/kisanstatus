import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'gau-mutra-kharid-yojana-up-2026', title: 'Gau Mutra Kharid Yojana UP — ₹10/Litre' },
  { slug: 'dairy-farm-loan-without-collateral', title: 'Bina Guarantee Dairy Loan' },
  { slug: 'murgi-palan-loan-nlm-subsidy', title: 'Murgi Palan NLM Subsidy' },
  { slug: 'jansamarth-portal-loan-apply', title: 'JanSamarth Loan Apply' },
];

const FAQS_DATA = [
  {
    q: 'Bihar Pashupalan Loan Yojana mein kitni subsidy milti hai aur kya woh wapas karni padti hai?',
    a: 'Samagra Gavya Vikas Yojana mein 2-4 pashu ki unit par EBC/SC/ST ko 75% tak aur baaki categories ko 50% tak subsidy milti hai; 15-20 pashu ki badi units par sab categories ke liye 40% ka slab raha hai (The Daily Jagran ki 2025 window wali report ke according). Subsidy grant hoti hai — wapas nahi karni. Baaki hissa apna margin ya bank loan hota hai, jo byaj samet chukana hai. Exact slab us saal ke notification se hi confirm karo — dairy.bihar.gov.in.',
  },
  {
    q: 'Application window kab khulti hai aur kahan apply karna hai?',
    a: 'Window saal bhar nahi khuli rehti — Gavya Vikas Nideshalay notification nikalta hai aur kuch hafton ke liye online applications leta hai. Misaal ke taur par 2025 wali window mein last date 25 July thi. Aavedan sirf dairy.bihar.gov.in par online hota hai, bilkul free. Akhbaar ke vigyapan aur portal par nazar rakho; window nikal gayi toh seedha agle saal ka wait hai.',
  },
  {
    q: 'Kaun apply kar sakta hai — documents kya lagenge?',
    a: 'Bihar ka sthai niwasi, 18 saal se upar. Documents: Aadhaar (bank passbook se naam match karta hua), niwas praman patra, jati praman patra (reserved slab ke liye), bank passbook/cancelled cheque, zameen ke kagaz ya likhit lease deed, photo aur chalu mobile number. Training certificate ho toh file mazboot hoti hai. Sab kagaz pehle ikatthe karo, phir form kholo.',
  },
  {
    q: 'Subsidy ka paisa kab milta hai — pehle ya unit lagne ke baad?',
    a: 'Unit lagne ke baad. Selection hone par district level par physical verification hota hai, phir subsidy release hoti hai — seedha bank ke through adjust ya DBT se. Matlab pashu aur shed ka intezam pehle aapko (apne paise ya bank loan se) karna hota hai. Beech ka finance plan kiye bina pashu book karna sabse aam galti hai.',
  },
  {
    q: 'Doodh kahan bechenge — rate kya milega?',
    a: 'Sabse seedha rasta Sudha (COMFED) ki gram-level dugdh samiti hai — rate transparent, payment ka system bana-banaya. COMFED ka toll-free helpline 1800 345 6681 hai. Apne gaon mein samiti hai ya nahi, yeh unit lagane se pehle pata karo. Samiti nahi hai toh local dairy, halwai ya seedha grahak — par rate ka likhit intezam pehle kar lo, warna doodh haath mein aur kharidar gayab.',
  },
];

export default function BiharPashupalanLoanYojana({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Bihar Pashupalan Loan Yojana</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Bihar Pashupalan Loan Yojana 2026: Samagra Gavya Vikas Yojana Se 50-75% Subsidy — Eligibility, Documents Aur Apply Ka Poora Process
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Last Updated: 05/08/2026</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/kisan-bhains.webp"
            alt="Bihar ke gaon mein kisan apni bhainson ke saath — pashupalan loan yojana ka asli maidan"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>Aadha Minute — poori picture:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Bihar sarkar dairy unit ki project cost par <strong>EBC/SC/ST ko 75% tak, baaki ko 50% tak</strong> subsidy deti hai (2-4 pashu units); badi 15-20 pashu units par sab ke liye ~40% ka slab.</li>
            <li>Application <strong>sirf online, bilkul free</strong> — dairy.bihar.gov.in par, notification window ke andar. Agent ki zaroorat nahi.</li>
            <li>Subsidy <strong>unit lagne ke baad</strong>, verification par milti hai — pehle apna ya bank ka paisa lagana hota hai.</li>
            <li>Naam mismatch (Aadhaar vs bank) aur window miss — files girne ki do sabse badi wajahein. Kagaz pehle milao.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 05/08/2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Do bhains. Sirf do bhains ki unit bhi aaj Bihar mein lakhon ka kaam hai — pashu, shed, chara, bima sab
          jod lo. Isi liye Samagra Gavya Vikas Yojana ka naam har us aadmi ne suna hai jo dairy shuru karna chahta
          hai. Aur scheme sirf kagaz par nahi chal rahi — The Daily Jagran ki report ke according, 2025 ki application
          window (last date 25 July) ke dauran hi Animal &amp; Fisheries Resources Department ko{' '}
          <strong>6,321 se zyada applications</strong> mil chuki thin (
          <a href="https://www.thedailyjagran.com/bihar/bihar-govt-offers-up-to-75-subsidy-for-setting-up-dairy-units-online-applications-open-till-july-25-10251803" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: The Daily Jagran</a>).
          Bheed asli hai, competition asli hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Maine branch mein aur block office ke bahar dono jagah dekha hai — hazaron files kisi badi wajah se nahi,
          chhoti-chhoti galtiyon se rukti hain. Kabhi kagaz adhoora, kabhi naam ki spelling alag, kabhi window hi
          nikal gayi. Neeche wahi sab likha hai jo form bharne se pehle pata hona chahiye tha: eligibility, unit ka
          chunaav, subsidy ka asli hisaab, aur file atakne ki asli wajahein.
        </p>

        <SH>Pehle Yeh Samjho Ki Scheme Deti Kya Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Seedha structure: aap gaay ya bhains ki ek unit ka project banate ho. Sarkar us project cost ka ek tay
          hissa subsidy mein deti hai. Baaki aapka — apni jeb se ya bank loan se. Bas itna hi hai poora khel.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ab woh do galat-fehmiyan jo sabse zyada logon ko doobati hain. &ldquo;Sarkar poora paisa de rahi hai&rdquo; — nahi
          de rahi; subsidy sirf ek hisse par hai, baaki byaj samet chukana hai ya apna lagana hai. Aur &ldquo;jab man
          kiya apply kar denge&rdquo; — nahi kar paoge; window saal mein thode din khulti hai, seats ginti ki hoti hain,
          aur selection verification ke baad hota hai. Yeh dono baatein pachne ke baad hi aage padho.
        </p>

        <IB>
          Scheme ka sanchalan <strong>Gavya Vikas Nideshalay (Directorate of Dairy Development)</strong>, Bihar sarkar
          karta hai. Application, notification aur unit-wise details ke liye official portal{' '}
          <strong>dairy.bihar.gov.in</strong> hi dekho — WhatsApp par ghoomne wale &ldquo;form&rdquo; aur agent ke bharose mat raho.
          Farmer registration aur application bilkul free hoti hai. <strong>Abhi official portal par check karo.</strong>
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/dairy-shed.webp"
          alt="Chhoti dairy unit ka shed — 2-4 pashu se shuruaat karna samajhdaari hai"
          width={1000}
          height={558}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Kitna Milega? Unit Cost Aur Subsidy Ka Asli Hisaab</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          2025 ki window ke official figures (The Daily Jagran ki reporting ke mutabiq) se tasveer aisi banti hai —
          fixed unit cost par category ke hisaab se subsidy:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Unit Size</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Fixed Project Cost</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">EBC/SC/ST</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Anya Varg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">2 pashu</td>
                <td className="border border-[var(--color-border)] p-3">₹1.74 lakh</td>
                <td className="border border-[var(--color-border)] p-3">75% tak</td>
                <td className="border border-[var(--color-border)] p-3">50% tak</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">4 pashu</td>
                <td className="border border-[var(--color-border)] p-3">₹3.90 lakh</td>
                <td className="border border-[var(--color-border)] p-3">75% tak</td>
                <td className="border border-[var(--color-border)] p-3">50% tak</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">15 pashu</td>
                <td className="border border-[var(--color-border)] p-3">₹15.34 lakh</td>
                <td className="border border-[var(--color-border)] p-3" colSpan={2}>Sab categories: ~40%</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">20 pashu</td>
                <td className="border border-[var(--color-border)] p-3">₹20.22 lakh</td>
                <td className="border border-[var(--color-border)] p-3" colSpan={2}>Sab categories: ~40%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <WB>
          Upar ke figures 2025 window ki news reporting par aadharit hain —{' '}
          <strong>exact slab, unit cost aur category list har saal ke vigyapan mein change ho sakti hai.</strong> Apply
          karne se pehle dairy.bihar.gov.in par us saal ka official notification kholo aur apni category ka figure
          wahan se confirm karo. Kisi bhi website (is guide samet) ke number ko final maan kar project mat banao.
        </WB>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur ek baat jo aapko koi notification nahi batayega. Jahan subsidy percentage sabse zyada, wahan bheed
          bhi sabse zyada — 2-4 pashu ki units par applications ka dher lagta hai. Jagah hai, chara ka jugad hai,
          thoda haath baitha hua hai? Toh beech ke size par file lagane ka bhi soch lo. Kam bheed, behtar chance.
          <strong> Abhi official portal par current notification check karo.</strong>
        </p>

        <SH>Apply Kaun Kar Sakta Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Shartein har saal thodi idhar-udhar hoti hain, dhaancha nahi badalta:
        </p>
        <StepList>
          <SI n={1}><strong>Bihar ka sthai niwasi</strong> — niwas praman patra lagega. Doosre state ke log is scheme mein apply nahi kar sakte.</SI>
          <SI n={2}><strong>Umar ki shart</strong> — aam taur par 18 saal se upar; upper limit notification mein di hoti hai.</SI>
          <SI n={3}><strong>Pashu rakhne ki jagah</strong> — khud ki zameen ho ya lease par; shed ke liye jagah ka intezam application se pehle soch lo, verification mein yahi dekha jata hai.</SI>
          <SI n={4}><strong>Bank account</strong> — Aadhaar se linked, aapke naam par. Subsidy/DBT isi mein aati hai; joint ya kisi aur ke account se kaam nahi chalega.</SI>
          <SI n={5}><strong>Category praman</strong> — SC/ST/ati-pichhda slab chahiye toh jati praman patra zaroori; bina iske aap general slab mein gine jaoge.</SI>
          <SI n={6}><strong>Training / anubhav</strong> — kuch units ke liye dairy training certificate ya anubhav ko priority milti hai. Agar aapke district mein Gavya Vikas ki training hoti hai, toh karwa lena file ko mazboot karta hai.</SI>
        </StepList>

        <Image
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/documents.webp"
          alt="Application ke liye documents — Aadhaar, bank passbook, photo aur zameen ke kagaz"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Documents List — Jahan 90% Files Rukti Hain</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Rejection ki wajah shayad hi kabhi koi badi cheez hoti hai. Zyada tar toh yahi — ek document kam tha,
          ya do jagah naam alag likha tha. Form kholne se pehle yeh sab ikattha kar lo:
        </p>
        <StepList>
          <SI n={1}><strong>Aadhaar card</strong> — naam ki spelling bank passbook se match honi chahiye. Mismatch hai toh pehle theek karwao.</SI>
          <SI n={2}><strong>Niwas praman patra</strong> — Bihar ka, valid.</SI>
          <SI n={3}><strong>Jati praman patra</strong> — agar reserved category ka slab chahiye.</SI>
          <SI n={4}><strong>Bank passbook / cancelled cheque</strong> — IFSC aur account number saaf dikhna chahiye.</SI>
          <SI n={5}><strong>Zameen ke kagaz ya lease deed</strong> — jahan unit lagegi. Lease hai toh likhit agreement rakho, zubani baat verification mein nahi chalti.</SI>
          <SI n={6}><strong>Passport size photo aur mobile number</strong> — OTP isi number par aayega, chalu rakho.</SI>
          <SI n={7}><strong>Training certificate</strong> (agar hai) — optional units mein bhi file ko edge deta hai.</SI>
        </StepList>

        <DB>
          Bank passbook mein &ldquo;Md. Salim&rdquo;, Aadhaar mein &ldquo;Mohammad Salim&rdquo; — bas, file verification mein atak
          gayi. Aisa har saal na jaane kitne logon ke saath hota hai. Aadhaar, bank aur jati praman — teeno mein
          naam milao, pehle. Das minute lagte hain. Na milao toh mahine jaate hain.
        </DB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/online-form.webp"
          alt="Online application — portal par form bharta hua aavedak"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Apply Kaise Karein — Kadam Se Kadam</SH>
        <StepList>
          <SI n={1}><strong>Notification ka wait karo</strong> — application window saal bhar nahi khuli rehti; 2025 mein last date 25 July thi. dairy.bihar.gov.in aur akhbaar ke vigyapan par nazar rakho. Window aam taur par kuch hafton ki hoti hai.</SI>
          <SI n={2}><strong>Portal par registration karo</strong> — apna Aadhaar, mobile number aur basic details bharo, OTP verify karo.</SI>
          <SI n={3}><strong>Unit select karo</strong> — 2/4/15/20 pashu mein se apni capacity ke hisaab se. Yahan lalach mat karo; jitni unit sambhal sako utni hi chuno, kyunki verification mein jagah aur intezam dekha jata hai.</SI>
          <SI n={4}><strong>Documents upload karo</strong> — sab scanned copies saaf honi chahiye. Dhundhli photo wali file bhi rejection ka aam karan hai.</SI>
          <SI n={5}><strong>Application submit karke acknowledgement number save karo</strong> — screenshot lo, print rakho. Status check aur shikayat dono mein yahi number kaam aata hai.</SI>
          <SI n={6}><strong>Verification ka wait karo</strong> — district level par documents aur jagah ki jaanch hoti hai. Phone uthao, ghar par milna ho toh available raho.</SI>
          <SI n={7}><strong>Selection ke baad unit lagao</strong> — pashu kharid, shed, bima — sab process ke hisaab se. Subsidy unit verify hone ke baad release hoti hai.</SI>
        </StepList>

        <GovLink
          href="https://dairy.bihar.gov.in"
          label="Gavya Vikas Nideshalay, Bihar — Official Portal"
          guide="Portal Kholo"
          portalName="dairy.bihar.gov.in"
        />

        <Image
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/bank-loan-baat.webp"
          alt="Bank branch mein loan ke baare mein baat-cheet karta kisan"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Baaki Paisa Kahan Se — Bank Ki Kahani</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Subsidy ke baad jo bacha, woh ya apni jeb se aayega ya bank se. Bank wala rasta chuna toh ek baat gaanth
          baandh lo — scheme mein select ho jana alag cheez hai, bank ka loan pass hona bilkul alag. Bank apne
          tarike se file jaanchega, aur mana bhi kar sakta hai. Maine branch mein dekha hai — scheme ka sanction
          letter haath mein, par DPR adhoori, toh manager ne file wahin rok di.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Bank ke liye aapko DPR (project report) chahiye hogi — pashu ki cost, chara, doodh production ka anumaan,
          repayment plan. Chhote agri/allied loan aam taur par collateral-free hote hain aur pashu khud hypothecated
          security bante hain. Rate MCLR + spread se banta hai — is par humne alag se poori guide likhi hai:{' '}
          <Link href="/articles/sbi-dairy-loan-interest-rate" className="underline font-bold">SBI Dairy Loan Interest
          Rate</Link>.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Unit chalu hone ke baad roz ke kharche (chara, dawai, labour) ke liye KCC — Animal Husbandry sabse sasta
          working capital hai, kyunki us par interest subvention milta hai. Unit ki capital cost scheme + term loan
          se, aur chalane ka kharcha KCC se — yeh combination sabse tikau hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/doodh-center.webp"
          alt="Doodh collection center par doodh dete hue kisan — asli kamai yahi se shuru hoti hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Kamai Kitni Hogi? YouTube Wale Number Bhool Jao</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          &ldquo;2 bhains, ₹50,000 mahina&rdquo; — aise thumbnail aapne bhi dekhe honge. Sach yeh hai ki doodh nasl, chara
          aur season se banta hai, aur kamai usme se kharcha kaatne ke baad bachti hai. Aur ek cheez jo video wale
          nahi batate: bhains byane ke baad hi doodh deti hai. Dry period mein chara bhi chalega, dawai bhi — bas
          doodh nahi aayega, aur paisa bhi nahi.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Iska ilaj planning mein hai. Do pashu lo toh dono ka byana aage-peeche rakhwa lo — saal bhar doodh ka
          silsila bana rehta hai. Aur pehle saal ki kamai ka andaza jaan-boojh kar kam rakho. EMI ka bojh maan kar
          chalne wala hi aaram se nikalta hai; sapne gin kar chalne wala beech mein phansta hai.
        </p>

        <IB>
          Doodh bechne ka rasta pehle se tay karo — Sudha (COMFED) ki samiti, local dairy ya seedha grahak. Sudha
          samiti se judne par rate transparent milta hai aur payment ka system bana-banaya hota hai; COMFED ka
          toll-free number <strong>1800 345 6681</strong> hai. Unit lagane se pehle apne gaon ki samiti se baat kar lo.
        </IB>

        <SH>Aam Galtiyan — Inhi Se Files Girti Hain</SH>
        <StepList>
          <SI n={1}><strong>Window miss kar dena</strong> — notification dekh kar &ldquo;baad mein karenge&rdquo; sochna. Window band, saal gaya.</SI>
          <SI n={2}><strong>Naam ka mismatch</strong> — Aadhaar, bank aur jati praman mein alag-alag spelling.</SI>
          <SI n={3}><strong>Jagah ka intezam na hona</strong> — verification mein shed ki jagah nahi dikha paye toh selection cancel.</SI>
          <SI n={4}><strong>Capacity se badi unit chunna</strong> — 20 pashu ki unit ka form bhar diya, par na jagah hai na anubhav. File wahin giri.</SI>
          <SI n={5}><strong>Agent ke bharose form bharwana</strong> — galat details bhar di, OTP wala number agent ka hai, status kabhi pata hi nahi chala. Form khud bharo ya saamne baith kar bharwao.</SI>
          <SI n={6}><strong>Subsidy ko advance samajhna</strong> — subsidy unit lagne ke baad milti hai. Beech ka finance plan kiye bina pashu book kar lena project ko aadhe mein latka deta hai.</SI>
          <SI n={7}><strong>Bima skip karna</strong> — premium bacha liya, pashu ki maut hui, poora ganit khatam. Bima ko kharcha nahi, suraksha samjho.</SI>
        </StepList>

        <SH>Ruko — Kahin Doosri Scheme Behtar Toh Nahi?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh yojana sirf gaay-bhains ki dairy ke liye hai. The Daily Jagran ki usi report ke according Bihar sarkar
          saath mein <strong>Desi Gaupalan Yojana</strong> aur <strong>Samagra Buffalo Rearing Yojana</strong> bhi chala
          rahi hai — bhains wali scheme mein ek bhains ki fixed cost ₹1,21,000 aur do ki ₹2,42,000 rakhi gayi thi,
          usi 75%/50% subsidy pattern ke saath. Man murgi ya bakri palan ka hai? Toh National Livestock
          Mission (NLM) dekho — poora process{' '}
          <Link href="/articles/murgi-palan-loan-nlm-subsidy" className="underline font-bold">Murgi Palan Loan NLM
          Subsidy</Link> wali guide mein hai. Desi nasl ke kaam mein interest hai toh{' '}
          <Link href="/articles/rashtriya-gokul-mission-subsidy" className="underline font-bold">Rashtriya Gokul
          Mission</Link> padh lo.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Zameen wahi, aadmi wahi — par scheme badalne se subsidy ka fark lakhon ka ho jata hai. Teeno ke taaza
          notification padho, tab file lagao. Jaldi ka kaam shaitan ka. <strong>Abhi official portal par check karo.</strong>
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            Samagra Gavya Vikas Yojana — official portal, Directorate of Dairy Development, Bihar.{' '}
            <a href="https://dairy.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">dairy.bihar.gov.in</a>
          </li>
          <li>
            The Daily Jagran — Bihar govt 75% dairy subsidy, 2025 application window report.{' '}
            <a href="https://www.thedailyjagran.com/bihar/bihar-govt-offers-up-to-75-subsidy-for-setting-up-dairy-units-online-applications-open-till-july-25-10251803" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">thedailyjagran.com</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} bioKey="BiharPashupalanLoanYojana" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Sabhi Articles' },
          { href: '/articles/category/pashupalan', l: 'Pashupalan Guides' },
        ]} />
        <Disclaimer k="BiharPashupalanLoanYojana" />
      </div>
    </>
  );
}
