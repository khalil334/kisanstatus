import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, DB, SH, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock } from '@/components/ArticleShared';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

function fmtDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const PUBLISHED = '2026-01-08T22:33:23+05:30';
const MODIFIED = '2026-01-17T19:59:30+05:30';

const FAQS_DATA = [
  {
    q: 'Khatauni mein naam ki spelling galat hai — register ho paunga ya nahi?',
    a: 'Ho toh jayega, profile ban jayegi. Par mera manna hai risk mat lo. Pehle patwari ke paas jao, Khasra/Khatauni mein naam theek karwao, uske baad registry karo. Humne aise case dekhe hain jahan naam mismatch ki wajah se baad mein kisht atak gayi. Chhoti si galti, mahino ka chakkar.',
  },
  {
    q: 'Main batai/theke pe kheti karta hoon, zameen mere naam pe nahi — kya main bhi banwa sakta hoon?',
    a: 'Iska jawab state pe depend karta hai. Farmer Registry mein pehla focus zameen waale kisano pe hai kyunki verification land records se hota hai. Kuch states tenant farmers ke liye alag process la rahe hain. Apne block ke krishi adhikari (BAO) ya CSC se apne state ka current niyam puch lo — yahi sabse pakka tarika hai.',
  },
  {
    q: 'Register hone ke baad Farmer ID card kahan se milega?',
    a: 'Apne state ke Agristack portal pe (jaise UP ke liye upfr.agristack.gov.in) login karo — Aadhaar number aur OTP se. Dashboard mein Farmer ID dikhegi aur wahan se card ka PDF download ho jata hai. Print karwa lo ek copy, aur phone mein bhi save rakho.',
  },
  {
    q: 'CSC waale ne paise maange — dena chahiye?',
    a: 'Farmer Registry ka registration sarkar ne free rakha hai. Haan, CSC operator apni service ka mamuli charge le sakta hai, yeh alag baat hai. Par agar koi bada amount maange ya "fees" bol ke daraye, toh mana kar do. PM-Kisan se judi shikayat ke liye helpline 155261 ya 011-24300606 pe call karo, aur Kisan Call Centre 1800-180-1551 bhi hai.',
  },
  {
    q: 'AgriStack, Farmer Registry aur Kisan ID — teeno alag cheezein hain kya?',
    a: 'Nahi, sab ek hi mission ka hissa hai. AgriStack sarkar ke Digital Agriculture Mission ka technical naam hai. Uske andar Farmer Registry ek database hai, aur usme register hone pe jo unique number milta hai wahi Kisan ID (Farmer ID) kehlata hai. Naam alag-alag sunoge, cheez ek hi hai.',
  },
];

export default function AgriStackKyaHai2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Kisan ID Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">AgriStack / Farmer Registry 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            AgriStack Kya Hai? Kisan ID Banwane Ka Poora Tarika — Ek Kisan Ki Zubani
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/agristack-kya-hai/infographic.webp'}
            alt="AgriStack farmer registry overview India 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Ek profile, sari yojanayein — yahi iska maksad hai
          </p>
        </div>

        <section className="mb-8">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pichle mahine hamare gaon mein ek camp laga tha. Kisan ID banwane ka. Aadhe log toh yeh soch ke wapas chale gaye ki
            "yeh phir se koi naya card hai, kya faida". Sach batau? Mujhe bhi pehle yahi laga tha.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Phir maine khud registry karwai, portal ghangala, block ke krishi adhikari se baat ki. Ab jo samajh aaya, wahi seedhi
            bhasha mein yahan likh raha hoon. Na koi dar, na koi jhooti guarentee — jo hai so hai.
          </p>

          <SH>Toh Yeh AgriStack Hai Kya Cheez?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sarkar ka <strong>Digital Agriculture Mission</strong> — usi ka naam hai AgriStack. Iske andar ek <strong>Farmer Registry</strong> ban
            rahi hai, matlab desh ke kisano ka ek verified digital record. Register karne pe har kisan ko ek unique <strong>Farmer ID</strong> milti
            hai (log ise Kisan Pehchaan Patra bhi kehte hain).
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Is record mein teen cheezein judti hain:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Aapki pehchaan</strong> — naam, Aadhaar, mobile number.</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Aapki zameen</strong> — khasra/gata number, rakba, malikana haq.</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Aapki fasal</strong> — kya boya hai, kitne area mein.</li>
          </ul>

          <IB>
            <strong>Ek baat saaf kar doon:</strong> yeh koi nayi paise dene wali scheme nahi hai. Isme alag se koi kisht nahi milti.
            Yeh ek system hai jo <Link href="/articles/PmKisanEkycOnline2026" className="text-blue-600 dark:text-blue-400 underline font-semibold">eKYC</Link>,
            fasal bima, <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 dark:text-blue-400 underline font-semibold">KCC loan</Link> jaisi
            cheezon ko ek hi verified profile se jodta hai — taki baar baar kagaz na dene padein.
          </IB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Pehle kya hota tha — har yojana ka apna register. Kahin naam "Ramesh Kumar", kahin "Ramesh Kr", bank mein kuch aur.
            In mismatch ke chakkar mein payment failhoti thi, chakkar lagte the. Ab sarkar chahti hai ki ek hi verified record ho,
            aur sab yojanayein usi se chalen.
          </p>
        </section>

        <section className="mb-8">
          <SH>Banwana Kyun Zaroori Hai? (Asli Wajah)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedhi baat — <strong>PM-Kisan ki kisht ke liye kai states mein Farmer Registry zaroori ki ja rahi hai.</strong> Matlab
            agar registry nahi hui, toh aage samman nidhi ka paisa rukne ka risk hai. Yeh sabse badi wajah hai, baki sab uske baad.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Kisht atakne ka risk</p>
              <p className="text-xs text-[var(--color-text-muted)]">Jinke record verify nahi hain, unki payment mein dikkat aa sakti hai. Apna naam <Link href="/articles/PmKisanBeneficiaryList2026" className="underline font-bold text-red-700 dark:text-red-400">beneficiary list</Link> mein check karte raho, aur registry karwa ke profile pakki kar lo.</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-1">Loan mein aasani</p>
              <p className="text-xs text-[var(--color-text-muted)]">Verified digital record hone se bank ko aapki zameen aur pehchan check karne mein waqt kam lagta hai. Kagzi verification ka jhanjhat ghat jata hai.</p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm mb-1">Bima claim mein madad</p>
              <p className="text-xs text-[var(--color-text-muted)]"><Link href="/articles/PmfbyCropInsurance2026" className="underline font-bold text-yellow-800 dark:text-yellow-400">Fasal bima</Link> mein sabse bada jhagda hota hai — "aapne yeh fasal boi hi nahi thi". Jab fasal ka record system mein pehle se hai, toh yeh bahas hi khatam.</p>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aur haan, registration <strong>bilkul free</strong> hai. Na koi form fees, na koi charge sarkar ki taraf se.
          </p>
        </section>

        <section className="mb-8">
          <SH>Aadhaar Toh Pehle Se Hai, Yeh Alag Kyun?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh sawal camp mein sabse zyada pucha gaya tha. Jawab aasan hai — Aadhaar batata hai <em>aap kaun ho</em>,
            Farmer ID batati hai <em>aap kisan ho, kitni zameen hai, kya ugate ho</em>. Dono ka kaam alag hai.
          </p>
          {/* Do-patti comparison — is article ka apna style, standard table nahi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 my-5 rounded-2xl overflow-hidden border-2 border-[var(--color-border)]">
            <div className="p-5 bg-[var(--color-bg-alt)] border-b sm:border-b-0 sm:border-r border-[var(--color-border)]">
              <p className="text-xs uppercase tracking-widest font-black text-[var(--color-text-muted)] mb-1">Card #1</p>
              <h3 className="font-black text-[var(--color-text)] text-lg mb-3">Aadhaar</h3>
              <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
                <li><span className="font-semibold text-[var(--color-text)]">Kya hai:</span> aam nagrik ki pehchaan</li>
                <li><span className="font-semibold text-[var(--color-text)]">Kya likha hai:</span> naam, pata, photo, DOB</li>
                <li><span className="font-semibold text-[var(--color-text)]">Kaun banata hai:</span> UIDAI</li>
                <li><span className="font-semibold text-[var(--color-text)]">Kahan chalta hai:</span> har sarkari kaam mein</li>
              </ul>
            </div>
            <div className="p-5 bg-green-50/60 dark:bg-green-900/15">
              <p className="text-xs uppercase tracking-widest font-black text-green-700 dark:text-green-400 mb-1">Card #2</p>
              <h3 className="font-black text-[var(--color-text)] text-lg mb-3">Farmer ID</h3>
              <ul className="text-sm text-[var(--color-text-muted)] space-y-2">
                <li><span className="font-semibold text-[var(--color-text)]">Kya hai:</span> kisan ki kheti waali pehchaan</li>
                <li><span className="font-semibold text-[var(--color-text)]">Kya likha hai:</span> zameen, fasal, bank, yojana record</li>
                <li><span className="font-semibold text-[var(--color-text)]">Kaun banata hai:</span> state krishi vibhag + kendra sarkar</li>
                <li><span className="font-semibold text-[var(--color-text)]">Shart:</span> bina Aadhaar ke banti hi nahi</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek cheez yaad rakhna — <strong>Aadhaar se linked mobile number chalu hona chahiye</strong>, kyunki OTP usi pe aata hai.
            Agar number band ho gaya hai toh pehle Aadhaar center jaake number update karwao, warna registry atak jayegi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Registry Kaise Karein — Do Tarike</SH>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">1. CSC ya Camp Se (Zyadatar Log Yahi Karte Hain)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jinko online ka jhanjhat nahi chahiye, unke liye Common Service Centre sabse aasan rasta hai. Kai jagah panchayat level
            pe camp bhi lag rahe hain — Pradhan ya krishi vibhag se pata chal jata hai.
          </p>
          <StepList>
            <SI n={1}>Saath le jao: <strong>Aadhaar card, Aadhaar-linked chalu mobile, khasra/khatauni, bank passbook</strong>. Photocopy bhi rakh lo, kaam aati hai.</SI>
            <SI n={2}>Operator ko saaf bolo — <strong>"Farmer Registry / Kisan ID"</strong> banwani hai. Naam confusion mein galat form na khul jaye.</SI>
            <SI n={3}>Aadhaar se eKYC hogi — OTP ya fingerprint se.</SI>
            <SI n={4}>Zameen ki detail record se match karwai jayegi. Khasra number sahi batao, andaze se nahi.</SI>
            <SI n={5}>Submit hone pe enrollment/application number milega — <strong>photo khinch lo ya likh lo</strong>, status check karne ke kaam aayega.</SI>
            <SI n={6}>Verification ke baad Farmer ID ban jati hai. Kitna time lagega, yeh state aur record pe depend karta hai — kahin jaldi, kahin hafte lag jate hain.</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">2. Khud Online (Ghar Baithe)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har state ka apna Farmer Registry portal hai — pattern ek hi hai: <strong>upfr.agristack.gov.in</strong> (UP),
            <strong> mhfr.agristack.gov.in</strong> (Maharashtra), <strong>rjfr.agristack.gov.in</strong> (Rajasthan), <strong>brfr.agristack.gov.in</strong> (Bihar)... apne state
            waala portal kholo.
          </p>
          <StepList>
            <SI n={1}>Portal pe "Farmer" select karke <strong>Create New User Account</strong> pe jao.</SI>
            <SI n={2}>Aadhaar number daalo, OTP aayega linked mobile pe — verify karo.</SI>
            <SI n={3}>Password set karo, login karo.</SI>
            <SI n={4}>"Register as Farmer" mein apni details check karo, zameen ki detail (district, tehsil, gaon, khasra) bhar ke <strong>Fetch Land Details</strong> karo.</SI>
            <SI n={5}>Sab check karke submit. Enrollment number save kar lo.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal kabhi kabhi slow chalta hai ya land record fetch nahi hota — aisa ho toh 1-2 din baad phir try karo,
            ya seedha CSC chale jao. Isme pareshan hone waali koi baat nahi, sarkari portal hai, hota rehta hai.
          </p>

          <ExternalLinkButton
            url="https://agristack.gov.in"
            label="AgriStack Official Website Par Jaayein"
          />

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/registration-steps.webp"
              alt="Farmer registry registration steps guide"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Registration ke steps — camp ho ya online, process yahi hai
            </p>
          </div>

          <DB>
            <strong>Savdhan:</strong> Registration sarkar ki taraf se free hai. Koi mota paisa maange ya daraye toh mana kar do.
            PM-Kisan helpline: <strong>155261</strong> / <strong>011-24300606</strong>. Kisan Call Centre: <strong>1800-180-1551</strong>.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Documents Ki List</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Yeh Zaroor Chahiye</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Aadhaar card (original)</li>
                <li>✓ Aadhaar se linked chalu mobile number</li>
                <li>✓ Zameen ke kagaz — Khasra/Khatauni/7-12</li>
                <li>✓ Bank passbook</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Kaam Aa Sakta Hai</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Sab kagzon ki photocopy</li>
                <li>✓ Nayi kharidi zameen ho toh registry deed</li>
                <li>✓ Joint zameen ho toh baki hissedaron ki jaankari</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek chhota sa mashwara — sab documnets ki photo apne phone mein bhi rakh lo. Center pe xerox ki line se bach jaoge,
            aur original kho jaane ka darr bhi nahi rehta.
          </p>
        </section>

        <section className="mb-8">
          <SH>ID Ban Gayi — Uske Baad Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            ID milne ke baad bhi 3 kaam karne chahiye. Zyada time nahi lagta, par baad ke bade jhamele se bacha lete hain.
          </p>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/farmer-id-card-sample.webp"
              alt="Farmer ID card sample format"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Farmer ID card — state portal ke dashboard se PDF download hota hai
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Portal pe apni profile check karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam, khasra, rakba — sab sahi likha hai na? Koi galti dikhe toh abhi thik karwao, baad mein yahi galti payment rok sakti hai.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Bank mein Aadhaar seeding (NPCI) confirm karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">DBT ka paisa Aadhaar-seeded account mein hi aata hai. Branch jaake ek baar puch lo ki seeding active hai ya nahi.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">pmkisan.gov.in pe apna status dekho</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">"Know Your Status" mein Aadhaar/registration number daal ke dekh lo — eKYC, land seeding, sab wahan dikh jata hai.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Camp Mein Jo Sawal Sabse Zyada Puchhe Gaye
          </h2>
          <FAQBlock faqs={FAQS_DATA} variant="cards" caption="Yeh sawal asli kisano ne puchhe the — jawab seedhe rakhe hain." />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Aakhri Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Registry free hai, zyada time nahi lagta, aur PM-Kisan samet kai yojanaon ka rasta isi se hoke ja raha hai.
            Season ki bhaag-daud shuru hone se pehle karwa lo — jab sabko yaad aata hai tab centers pe line lag jati hai.
            Gaon ke 2-4 aur logon ko bhi bata dena, kisi ka bhala hi hoga.
          </p>
        </div>

        <CalcBanner
          title="Apna Benefit Calculate Karein"
          desc="Samman nidhi benefit, credit EMI, crop profit — sab free calculators se check karein"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: 'Sab Utilities' }}
        />

        {/* Aage ki padhai — grid ki jagah baat-cheet waale andaz mein internal links */}
        <div className="mt-8 p-5 border-l-4 border-[var(--color-primary)] bg-[var(--color-bg-alt)] rounded-r-2xl">
          <h3 className="font-black text-[var(--color-text)] mb-2 text-base">Iske Baad Kya Padhein?</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Agar aapki <Link href="/articles/PmKisanEkycOnline2026" className="text-green-700 dark:text-green-400 underline font-semibold">eKYC abhi pending hai</Link> toh
            pehle woh nipta lo — registry ke baad wahi sabse zyada atakta hai. Kisht ka status janna hai toh{' '}
            <Link href="/articles/PmKisanBeneficiaryList2026" className="text-green-700 dark:text-green-400 underline font-semibold">beneficiary list mein naam check karna</Link> seekh lo.
            Zameen ki seeding mein dikkat ho toh <Link href="/articles/PmKisanLandSeedingForm" className="text-green-700 dark:text-green-400 underline font-semibold">land seeding form waala guide</Link> kaam aayega.
            Aur kheti ke liye sasta loan chahiye toh <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-green-700 dark:text-green-400 underline font-semibold">KCC apply karne ka tarika</Link> padh lo —
            Farmer ID banne ke baad yeh process aur aasan ho jata hai.
          </p>
        </div>

        <AuthorBox modified={MODIFIED} bioKey="AgriStackKyaHai2026" />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}
