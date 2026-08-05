'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  { slug: 'dairy-farm-loan-without-collateral', title: 'Dairy Loan Bina Collateral', emoji: '🐄' },
  { slug: 'sbi-dairy-loan-interest-rate', title: 'SBI Dairy Loan Interest Rate', emoji: '🏦' },
  { slug: 'murgi-palan-loan-nlm-subsidy', title: 'Murgi Palan Loan NLM Subsidy', emoji: '🐔' },
  { slug: 'rashtriya-gokul-mission-subsidy', title: 'Rashtriya Gokul Mission', emoji: '🐮' },
  { slug: 'jansamarth-portal-loan-apply', title: 'JanSamarth Portal Apply', emoji: '💻' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
];

const FAQS_DATA = [
  {
    q: 'Bihar Pashupalan Loan Yojana mein kitni subsidy milti hai?',
    a: 'Samagra Gavya Vikas Yojana ke neeche subsidy category ke hisaab se milti hai — SC/ST aur ati-pichhda varg ko zyada (75% tak), general/OBC ko 50% tak, chhoti dairy units (2-4 pashu) par. Badi units par percentage kam hota hai. Exact slab har saal ke notification mein change ho sakta hai, isliye apply se pehle dairy.bihar.gov.in par current vigyapan zaroor padho.',
  },
  {
    q: 'Kya yeh poora paisa subsidy hai ya loan bhi chukana padta hai?',
    a: 'Dono ka mix hai. Project cost ka jo hissa subsidy hai woh wapas nahi karna padta; baaki hissa ya toh aapka apna margin hota hai ya bank loan, jo byaj ke saath chukana hota hai. Isliye "sarkar poora paisa de rahi hai" wali baat par mat jao — apna hissa aur EMI ka ganit pehle bana lo.',
  },
  {
    q: 'Application kahan hoti hai — online ya block office mein?',
    a: 'Aavedan online hota hai — Gavya Vikas Nideshalay ke portal (dairy.bihar.gov.in) par ya Bihar sarkar ke bataye application window se. Window saal mein limited samay ke liye khulti hai, isliye notification par nazar rakhna zaroori hai. Form bharne ke baad selection aur verification district level par hota hai.',
  },
  {
    q: 'Kaun apply kar sakta hai — sirf kisan ya koi bhi?',
    a: 'Bihar ka sthai niwasi hona pehli shart hai. Scheme ka focus gramin berozgar yuva, kisan aur pashupalak par hai. Kuch units ke liye training certificate ya dairy ka anubhav maanga ja sakta hai, aur pashu rakhne ki jagah (khud ki ya lease par) honi chahiye. Category-wise aarakshan bhi hota hai, isliye apni category ka slab notification mein check karo.',
  },
  {
    q: 'Kitne pashu ki unit par apply kar sakte hain?',
    a: 'Scheme mein alag-alag size ki units hoti hain — chhoti unit 2 ya 4 doodh dene wale pashu (gaay/bhains) se shuru hoti hai, aur badi units 15-20 pashu tak jaati hain. Chhoti units par subsidy percentage zyada hota hai aur competition bhi. Naye pashupalak ke liye 2-4 pashu ki unit se shuruaat karna samajhdaari hai.',
  },
  {
    q: 'Selection kaise hota hai — pehle aao pehle pao ya lottery?',
    a: 'Selection district level par hota hai — application verify hoti hai, documents check hote hain, aur seats limited hone par category-wise preference/priority lagti hai. Sirf form bhar dena selection ki guarantee nahi hai. Documents adhoore hue toh file wahin ruk jaati hai, isliye checklist poori karke hi apply karo.',
  },
  {
    q: 'Subsidy ka paisa kab aur kaise milta hai?',
    a: 'Subsidy aam taur par unit lagne ke baad, physical verification hone par milti hai — seedha bank ke through adjust hoti hai ya DBT se aati hai. Matlab pehle aapko (ya bank loan se) unit khadi karni hoti hai, phir subsidy release hoti hai. Beech ka arrangement pehle se plan karo warna project aadhe mein atak jata hai.',
  },
  {
    q: 'Kya is scheme ke saath KCC bhi le sakte hain?',
    a: 'Haan, dono alag cheez hain. Yojana se unit ki capital cost (pashu, shed) cover hoti hai, aur KCC (Animal Husbandry) se roz ka working capital — chara, dawai, labour. Unit lag jaane ke baad KCC ki limit banwa lena chalane ke kharche ke liye sabse practical tareeka hai.',
  },
  {
    q: 'Pashu ki maut ho gayi toh subsidy wapas karni padegi?',
    a: 'Isi risk ke liye pashu bima scheme ka hissa hota hai — bima zyada tar cases mein zaroori rakha jata hai. Ear tag aur policy ke kagaz sambhal kar rakho; claim ke waqt tag mismatch par sabse zyada dikkat hoti hai. Bima ke bina pashu ki maut poore project ka ganit bigad deti hai.',
  },
  {
    q: 'Application reject ho gayi toh dobara apply kar sakte hain?',
    a: 'Haan, agli window mein dobara apply ho sakta hai. Pehle yeh pata karo ki reject kyun hui — zyada tar rejection adhoore documents, galat bank details ya jagah ke kagaz na hone se hoti hai. Wahi kami theek karke agli baar apply karo toh chance kaafi behtar ho jata hai.',
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
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(article.publishedTime)}</span>
            <span>🔄 Updated: {fmtDate(article.modifiedTime)}</span>
            <span>⏱️ 11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/bhains-ke-saath-kisan-bihar.webp"
            alt="Bihar ke gaon mein kisan apni bhainson ke saath — pashupalan loan yojana ka asli maidan"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Do bhains. Sirf do bhains ki unit bhi aaj Bihar mein lakhon ka kaam hai — pashu, shed, chara, bima sab
          jod lo. Isi liye Samagra Gavya Vikas Yojana ka naam har us aadmi ne suna hai jo dairy shuru karna chahta
          hai. Gavya Vikas Nideshalay category ke hisaab se project cost ka 50 se 75 pratishat tak subsidy deta
          hai — jo hissa subsidy mein aa gaya, woh wapas nahi karna.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Par ek kadwi baat bhi sun lo. Isi scheme mein har saal hazaron files reject hoti hain. Wajah koi badi
          nahi hoti — kabhi kagaz adhoora, kabhi naam ki spelling alag, kabhi window hi nikal gayi. Neeche wahi sab
          likha hai jo form bharne se pehle pata hona chahiye tha: eligibility, unit ka chunaav, subsidy ka asli
          hisaab, aur file atakne ki asli wajahein.
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
          Farmer registration aur application bilkul free hoti hai.
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/chhoti-dairy-unit-shed.webp"
          alt="Chhoti dairy unit ka shed — 2-4 pashu se shuruaat karna samajhdaari hai"
          width={1000}
          height={558}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Kitna Milega? Category Aur Unit Size Dekho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yahan flat rate jaisa kuch nahi hai. Aapki jati category kya hai aur kitne pashu ki unit lagai — in dono
          se number banta hai. Aam taur par tasveer aisi rehti hai:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Unit Size</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">SC/ST/Ati-Pichhda</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">General / Anya Varg</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kiske Liye Sahi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">2 pashu (chhoti unit)</td>
                <td className="border border-[var(--color-border)] p-3">75% tak</td>
                <td className="border border-[var(--color-border)] p-3">50% tak</td>
                <td className="border border-[var(--color-border)] p-3">Naye pashupalak, kam poonji</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">4 pashu</td>
                <td className="border border-[var(--color-border)] p-3">75% tak</td>
                <td className="border border-[var(--color-border)] p-3">50% tak</td>
                <td className="border border-[var(--color-border)] p-3">Thoda anubhav, family labour available</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">15-20 pashu (badi unit)</td>
                <td className="border border-[var(--color-border)] p-3" colSpan={2}>Kam percentage — sab categories ke liye ek jaisa slab</td>
                <td className="border border-[var(--color-border)] p-3">Anubhavi dairy walon ke liye, commercial scale</td>
              </tr>
            </tbody>
          </table>
        </div>

        <WB>
          Upar ke percentages scheme ka aam pattern batate hain — <strong>exact slab, unit cost aur category list har
          saal ke vigyapan mein change ho sakti hai.</strong> Apply karne se pehle dairy.bihar.gov.in par us saal ka
          official notification kholo aur apni category ka figure wahan se confirm karo. Kisi bhi website (is guide
          samet) ke number ko final maan kar project mat banao.
        </WB>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aur ek baat jo aapko koi notification nahi batayega. Jahan subsidy percentage sabse zyada, wahan bheed
          bhi sabse zyada — 2-4 pashu ki units par applications ka dher lagta hai. Jagah hai, chara ka jugad hai,
          thoda haath baitha hua hai? Toh beech ke size par file lagane ka bhi soch lo. Kam bheed, behtar chance.
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
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/documents-checklist-kagaz.webp"
          alt="Application ke liye documents — Aadhaar, bank passbook, photo aur zameen ke kagaz"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Kagaz — Jahan 90% Files Rukti Hain</SH>
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
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/dairy-portal-online-form.webp"
          alt="Online application — portal par form bharta hua aavedak"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Ab Apply Karne Ka Tareeka</SH>
        <StepList>
          <SI n={1}><strong>Notification ka wait karo</strong> — application window saal bhar nahi khuli rehti. dairy.bihar.gov.in aur akhbaar ke vigyapan par nazar rakho. Window aam taur par kuch hafton ki hoti hai.</SI>
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
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/bank-mein-loan-ki-baat.webp"
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
          tarike se file jaanchega, aur mana bhi kar sakta hai.
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
          src="/images/articles/loan-mandi-pashupalan/bihar-pashupalan-loan-yojana/doodh-collection-center-par.webp"
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
          samiti se judne par rate transparent milta hai aur payment ka system bana-banaya hota hai. Unit lagane se
          pehle apne gaon ki samiti se baat kar lo.
        </IB>

        <SH>Saat Galtiyan — Inhi Se Files Girti Hain</SH>
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
          Yeh yojana sirf gaay-bhains ki dairy ke liye hai. Man murgi ya bakri palan ka hai? Toh National Livestock
          Mission (NLM) dekho — wahan 50% capital subsidy ka apna alag system chalta hai; poora process{' '}
          <Link href="/articles/murgi-palan-loan-nlm-subsidy" className="underline font-bold">Murgi Palan Loan NLM
          Subsidy</Link> wali guide mein hai. Desi nasl ke kaam mein interest hai toh{' '}
          <Link href="/articles/rashtriya-gokul-mission-subsidy" className="underline font-bold">Rashtriya Gokul
          Mission</Link> padh lo.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Zameen wahi, aadmi wahi — par scheme badalne se subsidy ka fark lakhon ka ho jata hai. Teeno ke taaza
          notification padho, tab file lagao. Jaldi ka kaam shaitan ka.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} />
        <BottomNav extraLinks={[
          { href: '/articles', l: '📚 Sabhi Articles' },
          { href: '/articles/category/pashupalan', l: '📂 Pashupalan Guides' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
