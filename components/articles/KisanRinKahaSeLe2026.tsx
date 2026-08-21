import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-06-20T17:07:02+05:30';
const MODIFIED = '2026-08-06T21:23:29+05:30';
function fmtDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply' },
  { slug: 'KisanTractorLoan2026', title: 'Tractor Loan Guide' },
  { slug: 'jansamarth-portal-loan-apply', title: 'JanSamarth Loan Apply' },
];

const FAQS_DATA = [
  {
    q: 'KCC aur normal agricultural loan mein kya farak hai?',
    a: 'KCC revolving credit hai — limit set hoti hai ek baar, jab chaaho withdraw karo, jab chaaho wapas karo. Normal term loan ek baar milta hai fixed tenure mein. KCC flexible hai seasonal expenses ke liye, term loan bade investments (tractor, irrigation) ke liye.',
  },
  {
    q: 'Zameen na ho toh bhi kisan loan milta hai?',
    a: 'Haan bilkul mil sakta hai. Tenant farmers lease agreement ya landowner certificate ke saath apply kar sakte hain. Sharecroppers bhi eligible hain kuch schemes mein. Landless farmers ke liye NABARD microfinance aur SHG loans available hain — ₹50,000-2 lakh tak.',
  },
  {
    q: 'Cooperative bank se loan lu ya SBI/PNB se — kya behtar hai?',
    a: 'Cooperative banks faster hain (5-7 din) kyunki local land records se familiar hote hain. National banks better digital services dete hain — app tracking, online repayment. Interest rate same hai dono jagah. Speed chahiye toh cooperative, tech chahiye toh national.',
  },
  {
    q: 'CSC center par loan apply karne ka charge kitna hai?',
    a: 'Nominal service charge ₹20-50 ho sakta hai form filling ke liye. Loan amount par koi commission nahi dena padta. Agar operator ₹500+ maange toh fraud hai — 1800-1214-060 par usi din complaint karo.',
  },
  {
    q: 'Pichle saal KCC tha lekin renew nahi hua — ab fresh apply karna padega?',
    a: 'Haan, fresh application deni padegi. Lekin agar pichla repayment clean tha toh new approval fast-track hota hai. Old KCC number dikhao bank manager ko — positive credit history system mein dikhti hai.',
  },
  {
    q: 'Tractor loan ke liye KCC pehle lena zaroori hai?',
    a: 'Zaroori nahi hai lekin helpful bahut hai. Banks prefer karte hain ki borrower ka 1 saal ka repayment track record ho. KCC lekar time par repay karo, phir term loan easily approve hota hai. Direct term loan bhi possible hai agar income proof strong ho.',
  },
  {
    q: 'Bataidar hoon, zameen kisi aur ke naam hai — rin milega?',
    a: 'Haan. KCC bataidar, mokhik pattedar aur SHG/JLG samooh ke liye bhi khula hai — dikkat kagaz ki hoti hai, patrata ki nahi. Aapke rajya me batai ka jo proof maanya hai (likhit karar, swa-ghoshna, gram-star pramanan) wo bank ko chahiye. Jitna pakka kagaz, utni aasan approval.',
  },
  {
    q: 'Bank ne mana kar diya aur reason bhi nahi bataya — ab kahan jaun?',
    a: 'Pehle likhit me rejection reason maango, wo dena bank ki zimmedari hai. Na mile to usi bank ke grievance cell me shikayat karo. Wahan se bhi hal na nikle to RBI ka Banking Ombudsman (cms.rbi.org.in) ka rasta khula hai. Har step par receiving lo — tareekh ka saboot aapka sabse bada hathiyar hai.',
  },
  {
    q: 'Loan reject hua — CIBIL aur documents mein pehle kya theek karun?',
    a: 'Pehle rejection reason samjho. Name mismatch tha toh fix karke usi hafte reapply karo. CIBIL issue tha toh 3-6 mahine wait karo score improve hone tak. Documents incomplete the toh complete set lekar jao. Bank se written rejection letter maango — specific reason likha hota hai.',
  },
];

export default function KisanRinKahaSeLe2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Kisan Loan Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Loan Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Kisan Rin Kaha Se Le 2026: KCC, Bank, CSC, Cooperative — Sahukar Se Bachne Ka Rasta
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/kisan-rin-kaha-se-le-2026.webp'}
            alt="Kisan loan sources India 2026 — KCC, bank loan, CSC, cooperative society comparison"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KCC, Bank Loan, CSC, Cooperative — Kaunsa Option Aapke Liye Sahi Hai?
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Gaon Mein Jo Dekha Hai</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Kai kisano ke saath yeh dekha gaya hai — beej ke season mein ₹50,000 udhaar chahiye hota hai aur sahukar 3% monthly byaj maangta hai, saal ka 36%. Bank se 4% saalana mil sakta hai lekin yeh baat aksar pata nahi hoti.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            <strong>"Bank wale humein loan thodi dete hain"</strong> — yeh soch bahut common hai aur isi wajah se kai kisan sahukar par dependent reh jaate hain. Ek doosri soch bhi utni hi mehngi padti hai — ki karz maaf ho jaayega, isliye kist rok do; kaunse state me waiver asal me chal raha hai wo{' '}
            <Link href="/yojana/kisan-karj-mafi-list-all-states" className="underline font-bold">karj mafi ki asli sthiti</Link>{' '}
            wale page par dekh lo.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Banks dete hain. Process pata hona chahiye. Yeh guide usi gap ko fill karti hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Kisan Rin Kya Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kisan Rin specifically kheti ke liye diya jaane wala loan hai. Personal loan nahi, business loan nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Beej, khaad, dawai, labour, equipment, irrigation — sab cover hota hai. Government subsidized rates par milta hai kyunki agriculture priority sector hai RBI guidelines mein. Banks ko quota fulfill karna hota hai — isliye eligible kisanon ko deny nahi kar sakte bina valid reason ke.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Eligibility:</strong> Zameen malik, tenant farmer, sharecropper, SHG member — sab eligible hain. 2 bigha se lekar 50 bigha tak. Size matter nahi karta, verified cultivation matter karta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>4 Jagah Se Rin Mil Sakta Hai — Comparison</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek hi option nahi hai. Char sources hain — har ek ka apna advantage hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Source</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Rate</th>
                  <th className="p-3 text-left">Speed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['KCC (Any Bank)', 'Seasonal crop expenses', '4% effective', '7-15 din'],
                  ['Term Loan (SBI/PNB/BOB)', 'Tractor, irrigation, infrastructure', '7-11%', '15-30 din'],
                  ['CSC Center', 'Remote areas, no bank nearby', 'Same as bank', '10-20 din'],
                  ['Cooperative / PACS', 'Small amounts, quick local access', '8-12%', '3-7 din'],
                ].map(([source, best, rate, speed], i) => (
                  <tr key={source} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{source}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{best}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-bold">{rate}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kisan Credit Card — Sabse Pehla Option</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bank manager se pehla sawaal yehi aayega — <em>"KCC hai?"</em>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Nahi hai toh yeh sabse pehle banwao. Revolving credit facility hai — ek baar limit set, jab chaaho use karo. Fasal becho, wapas karo, phir nikalo. Seasonal farming ke liye perfect hai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">4% Effective Rate</p>
              <p className="text-xs text-[var(--color-text-muted)]">Base 7% + 3% subvention on prompt repayment</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">₹2 Lakh Collateral-Free</p>
              <p className="text-xs text-[var(--color-text-muted)]">RBI ne Jan 2025 se limit ₹1.6L → ₹2L ki hai</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">ATM Card Included</p>
              <p className="text-xs text-[var(--color-text-muted)]">Direct cash withdrawal from ATM</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">₹50K Accident Cover</p>
              <p className="text-xs text-[var(--color-text-muted)]">Free insurance bundled with card</p>
            </div>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">2025-26 Me Kya Badla — Do Kaam Ki Baatein</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Pehli:</strong> Budget 2025-26 ne interest subvention ki ceiling <strong>₹3 lakh se badhakar
            ₹5 lakh</strong> kar di. Matlab ab ₹5 lakh tak ke short-term crop loan par bhi 4% wala effective
            rate mil sakta hai — pehle ye fayda ₹3 lakh par ruk jaata tha. 7.75 crore se zyada active KCC
            holders is daayre me aate hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Doosri:</strong> RBI ne January 2025 se collateral-free agriculture loan ki limit
            <strong> ₹1.6 lakh se badhakar ₹2 lakh</strong> kar di — allied activities (dairy, poultry) ke
            loan bhi shamil. Iska seedha matlab: ₹2 lakh tak ke loan par bank zameen girvi ya margin nahi
            maang sakta. Branch me koi collateral maange to RBI ke is circular ka hawala do.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek aur raasta — <Link href="/articles/jansamarth-portal-loan-apply" className="underline">JanSamarth
            portal</Link> se KCC samet kai sarkari loan schemes ka online apply ek hi jagah se hota hai;
            branch jaane se pehle wahan eligibility check kar sakte ho.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Apply Kaise Karein</h3>
          <StepList>
            <SI n={1}>Nazdeeki bank branch jao — SBI, PNB, BOB, Gramin Bank koi bhi</SI>
            <SI n={2}>Loan officer se milo, KCC form maango</SI>
            <SI n={3}>Documents submit karo — Aadhaar, PAN, Khatauni, photos, passbook</SI>
            <SI n={4}>Land verification hoga — 7-15 din</SI>
            <SI n={5}>Approval par passbook + ATM card milega</SI>
          </StepList>

          <WB>
            <strong>PM Kisan Beneficiary Ho?</strong> Approval fast-track hota hai kyunki data already verified hai. Pehle <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold">PM Kisan Complete Guide</Link> padho agar verification pending hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Bade Kaam Ke Liye — Term Loan</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Tractor, drip irrigation, greenhouse, warehouse — yeh sab KCC se nahi hoga. Term loan chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Amount zyada, tenure lambi (3-7 saal), collateral required above ₹2 lakh. Process bhi lamba hai — 15-30 din. Par mumkin hai. Maine kai kisanon ko SBI se ₹3-5 lakh drip irrigation ke liye approve hote dekha hai.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Crop Loan (Short Term)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Beej, khaad, pesticide. 6-12 mahine tenure. KCC ke through milta hai.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Equipment / Infrastructure Loan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Tractor, pump, irrigation system. 3-7 saal. Collateral above ₹2L.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Allied Activities Loan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Dairy, poultry, fishery, beekeeping. Unit size based limit.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Warehouse Receipt Loan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Fasal godown mein rakhkar loan. MSP price ka 75% tak milta hai.</p>
            </div>
          </div>

          <IB>
            <strong>Tip:</strong> Banks pehle KCC lene ki salah dete hain. Ek saal clean repayment = track record. Phir term loan easily approve. Dono options available ho jaate hain.
          </IB>
        </section>

        <section className="mb-8">
          <SH>CSC Aur Cooperative — Jab Bank Door Ho</SH>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-4">CSC Center</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gaon mein bank nahi hai? CSC center available hai. Operator trained hota hai, online form submit karta hai. locator.csc.gov.in par nearest center dhundo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Service charge ₹20-50 nominal. Zyada maange toh fraud. Same documents chahiye jo bank mein lagte hain.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Cooperative Society / PACS</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Local level par kaam karti hain. Officers kisanon ko personally jaante hain. Process fast — 3-7 din. Small amounts ke liye best hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Member banna padta hai pehle. Thoda paperwork hai lekin ek baar member ban gaye toh credit access smooth. Rate competitive — 8-12%.
          </p>
        </section>

        <section className="mb-8">
          <SH>Zameen Apne Naam Nahi Hai — Tab Rin Kahan Se Aayega</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sawaal sabse zyada poocha jaata hai, aur iska jawab wahi hai jo upar likha — patrata nahi, kagaz atakta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            KCC bataidar, mokhik pattedar aur SHG/JLG samoohon ke liye bhi khula hai. Bank ko zameen ka <em>malikana</em> nahi,
            uspe aapke <em>kaam ka saboot</em> chahiye hota hai. Har rajya me ye proof alag maana jaata hai — kahin registered
            batai karar, kahin swa-ghoshna, kahin gram-star ka pramanan. Branch jaane se pehle wahi ek cheez pata karo: is district
            me batai ka kaunsa kagaz chalta hai. Baqi documents wahi hain jo malik kisan ke lagte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kirae ki jagah par kuch banwana hai — shed, godown, pump — to ek chhoti si galti mehngi padti hai. Lease agreement
            loan ki avadhi se <strong>chhota</strong> hua to objection pakka aayega. Bank ka logic seedha hai: loan 7 saal chalega
            aur jagah ka karar 3 saal ka hai, to baqi 4 saal kya? Agreement banwate waqt hi tenure lamba rakhwa lo, baad me
            registry dobara karwana kharcha aur waqt dono maangta hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Doodh, Murgi, Machli — Yahan Zameen Ka Sawaal Hi Nahi</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar kaam pashupalan ya allied activity ka hai to ek poora alag darwaza khulta hai. Mudra Yojana me collateral maangna
            bank ke bas me hi nahi hai — kisi bhi slab par nahi. Budget 2024-25 se <strong>Tarun Plus</strong> slab jud gaya, jisne
            upar ki limit ₹10 lakh se ₹20 lakh kar di. Par dhyan raho: Tarun Plus pehli baar wale applicant ke liye nahi hai, wo un
            logon ke liye hai jinhone pehle Tarun ka loan lekar poora chukaya. Pehli file daal rahe ho to aapki practical ceiling
            ₹10 lakh hai — project report usi hisaab se banwao.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PMEGP wala rasta thoda lamba hai par usme margin money subsidy hai — project cost ka 15 se 35 pratishat, jo wapas nahi
            karni padti. Ek gaon me rehne wali mahila applicant ka ₹8 lakh ka dairy project maan lo: 35% yaani ₹2.8 lakh subsidy,
            5% yaani ₹40,000 apni jeb se, EMI sirf bache ₹4.8 lakh par banegi. Wahi project shahar ke general category applicant ka
            hota to subsidy sirf ₹1.2 lakh milti. Category aur area, dono milkar aapki kist tay karte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Poora comparison — Mudra, PMEGP aur CGTMSE me se kaunsa kab — <Link href="/articles/dairy-farm-loan-without-collateral" className="underline font-bold">bina
            collateral dairy loan wali guide</Link> me hai. Aur teeno me se koi bhi route chuno, online eligibility ek hi jagah se
            check ho jaati hai <Link href="/articles/jansamarth-portal-loan-apply" className="underline">JanSamarth portal</Link> se.
          </p>
        </section>

        <section className="mb-8">
          <SH>Bank Ne Mana Kar Diya — Chup Mat Baitho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yahi wo mod hai jahan zyadatar kisan sahukar ke paas laut jaate hain. Zaroorat nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pehla kadam ek hi hai — <strong>likhit me rejection ka reason maango</strong>. Ye ehsaan nahi, bank ki zimmedari hai.
            Zubani &ldquo;file nahi banegi&rdquo; se aap kuch nahi kar sakte; likha hua reason do me se ek cheez batata hai — ya
            galti sudharne layak hai (naam mismatch, purani khatauni, adhoore kagaz), ya waqt maangti hai (chalu default, CIBIL).
            Pehli soorat me usi hafte dobara file lag sakti hai.
          </p>
          <StepList>
            <SI n={1}>Application aur saare documents ki ek copy apne paas rakho, aur jama karte waqt <strong>receiving muhar</strong> lagwao — tareekh ka saboot yahi hai</SI>
            <SI n={2}>Reason likhit me maango; na mile to usi baat ko application me likh kar dobara jama karo</SI>
            <SI n={3}>Baat na bane to usi bank ke <strong>grievance cell</strong> me shikayat karo — branch se upar zonal level par file dekhi jaati hai</SI>
            <SI n={4}>Wahan se bhi hal na nikle to <strong>RBI Banking Ombudsman</strong> — cms.rbi.org.in par online shikayat, koi fees nahi</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek baat samajh lo: agriculture RBI ke priority sector me aata hai, isliye branch ko eligible kisan ko bina valid reason
            mana karne ka haq nahi hai. Par ye baat kaam sirf tab karti hai jab aapke paas kagaz ka record ho. Isliye receiving
            wali aadat sabse sasti insurance hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Purana Loan Bigda Hua Hai To Pehle Wahi Sudhro</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Naya rin isliye nahi mil raha ki pichla khata overdue chal raha hai — to nayi application daalne se kuch nahi hoga.
            Do cheezein branch se poochho: <strong>One Time Settlement (OTS)</strong>, jisme NPA khate ka bacha amount ek baar me
            kam karke settle hota hai, aur <strong>restructuring</strong>, jisme kist ki avadhi lambi ho jaati hai ya moratorium
            milta hai — khaaskar jab fasal kharab hui ho aur district me annawari/girdawari declare hui ho. Dono ka faisla branch
            aur zonal level par hota hai, isliye application likhit me do.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            OTS ke baad <strong>No Dues Certificate</strong> lena mat bhoolo. Wahi kagaz agli baar file kholne me kaam aata hai,
            aur wahi CIBIL me &ldquo;closed&rdquo; status ka saboot hai.
          </p>
          <DB>
            <strong>Karz maafi ka intezaar sabse kharab option hai.</strong> Kist rok kar waiver ka wait karne se khata NPA me chala
            jaata hai — aur baad me scheme aayi bhi to default ka record apni jagah reh jaata hai. Kaunse state me waiver asal me chal
            raha hai aur kahan sirf bayaan hai, wo{' '}
            <Link href="/yojana/kisan-karj-mafi-list-all-states" className="underline font-bold">karj mafi ki asli sthiti</Link>{' '}
            wale page par saaf likha hai.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Sahukar Vs Sarkari Scheme — Asli Farak</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Source</th>
                  <th className="p-3 text-center">Rate</th>
                  <th className="p-3 text-center">₹2L Par Saal Ka Byaj</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50 dark:bg-red-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-red-800 dark:text-red-300">Sahukar / Moneylender</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-red-700 dark:text-red-400 font-bold">24-60%</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-red-700 dark:text-red-400 font-bold">₹48,000-1,20,000</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-green-800 dark:text-green-300">KCC (Prompt Repayment)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-green-700 dark:text-green-400 font-bold">4%</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-green-700 dark:text-green-400 font-bold">₹8,000</td>
                </tr>
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-amber-800 dark:text-amber-300">Bank Term Loan</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-amber-700 dark:text-amber-400 font-bold">7-12%</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-amber-700 dark:text-amber-400 font-bold">₹14,000-24,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Fark Dekho:</strong> Sahukar se KCC switch karne par ₹2 lakh par saal mein ₹40,000-1,12,000 bachat. 5 saal mein ₹2-5.6 lakh. Tractor down payment jitni savings hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Documents — Sab Ready Rakho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Har Case Mein Chahiye</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Aadhaar (bank-linked)</li>
                <li>✓ PAN card</li>
                <li>✓ Khatauni / Khasra / 7/12</li>
                <li>✓ Bank passbook (latest)</li>
                <li>✓ Passport photos (2-3)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Situation Based</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Tenant → Lease deed / NOC</li>
                <li>✓ Joint ownership → Consent letter</li>
                <li>✓ Allied activity → Vet/fishery cert</li>
                <li>✓ Equipment → Quotation / invoice</li>
                <li>✓ SHG → Group resolution letter</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Sabse Common Rejection:</strong> Naam mismatch. Aadhaar mein "Rajesh Kumar Singh", bank mein "R.K. Singh". Chhoti difference, bada delay. Apply se pehle teeno jagah naam exactly match karwao.
          </p>
        </section>

        <section className="mb-8">
          <SH>Fast Approval Ke 6 Tarike</SH>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">PM Kisan Registration Karwao</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Verified data = fast-track processing. Banks ko cross-check nahi karna padta.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">eKYC Complete Karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Digital verification done = identity pre-approved. <Link href="/articles/PmKisanMasterGuide2026" className="underline">Complete Guide yahan hai</Link>.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Khatauni Latest Rakho</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Revenue department se updated copy. Purani khatauni reject hoti hai aksar.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">04</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Bank Account Active Rakho</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Transaction history achhi honi chahiye. Dormant account = red flag.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">05</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Planting Season Se Pehle Apply</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Peak season mein banks overloaded. May-June best time for Kharif prep.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">06</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Subah 10-11 Baje Branch Jao</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Officers fresh. Dopahar rush. Sham ko closing pressure. Timing matters.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Sawal — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Kisan Loan FAQ 2026 — Ground-Level Verified Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Byaj Ka Farak: 4% Bhi Ho Sakta Hai, 36% Bhi</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Isi article ka poora ganit ek hi tulna par tika hai — KCC par time se chukane wale kisan ko effective
            4% padta hai, jabki sahukar ka mahine wala 3% saal bhar mein 36% ban jaata hai. Yani ek hi ₹1 lakh
            saal bhar mein ₹4,000 ya ₹36,000 maang sakta hai. Isliye kaagaz ka jhanjhat pehle nipta lo:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Khatauni update karwao</li>
            <li>Aadhaar-bank name match karwao</li>
            <li>Nazdeeki bank ya CSC jao</li>
            <li>KCC apply karo pehle</li>
            <li>Time par repay karo — limit badhegi</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Portal — Beneficiary Verification"
          guide="Apna Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon=""
          title="Apni EMI Calculate Karo"
          desc="KCC ya term loan ki monthly payment jaano — bank jaane se pehle prepared raho"
          primaryCta={{ href: '/calculator/kcc-loan-emi', label: 'EMI Calculator →' }}
          secondaryCta={{ href: '/calculator', label: 'Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="KisanRinKahaSeLe2026" />
        <BottomNav extraLinks={[
          { href: '/articles/KisanCreditCardOnlineApply2026', l: 'KCC Guide' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/calculator/kcc-loan-emi', l: 'EMI Calculator' },
        ]} />
        <Disclaimer k="KisanRinKahaSeLe2026" />
      </div>
    </>
  );
}
