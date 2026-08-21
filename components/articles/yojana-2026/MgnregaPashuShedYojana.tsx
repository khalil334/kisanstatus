import Link from 'next/link';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { Yojana2026ArticleMeta } from '@/lib/yojana-2026-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'bakri-palan-yojana-nlm-subsidy', title: 'Bakri Palan Yojana — NLM Subsidy' },
  { slug: 'murgi-palan-loan-nlm-subsidy', title: 'Murgi Palan Loan Aur Subsidy' },
  { slug: 'dairy-farm-loan-without-collateral', title: 'Dairy Farm Loan Bina Collateral' },
];

const FAQS_DATA = [
  {
    q: 'Pashu shed yojana ka online form kahan bharein?',
    a: 'Kahin nahi — yahi is scheme ki sabse badi galatfehmi hai. MGNREGA ke individual beneficiary works ka koi online application form nahi hota. Kaam gram panchayat ke through hota hai: likhit application panchayat me jama hoti hai, gram sabha se naam approve hota hai, phir work sanction hota hai. Jo bhi site "pashu shed online registration" ka form dikhaye, wahan apna Aadhaar ya OTP bilkul mat daalo.',
  },
  {
    q: 'Kitne pashu hone par shed milega?',
    a: 'Zyada tar states me kam se kam 2-3 pashu (gaay/bhains) par individual cattle shed ka work sanction hota hai. Bakri aur murgi ke liye alag shelter works hain jinke apne minimum counts hain. Exact requirement state ki MGNREGA works guidelines me hoti hai — apne gram rozgar sevak se apne state ka norm poochho, ye number har jagah ek jaisa nahi hai.',
  },
  {
    q: 'Kitna paisa milta hai — ₹1.6 lakh sab ko milta hai kya?',
    a: 'Nahi. ₹1.6 lakh koi fixed national amount nahi hai — ye upar ki range hai jo zyada pashu (4+) hone par kuch states me banti hai. Kam pashu par estimate ₹75,000-₹80,000 ke aas-paas rehta hai. Asli amount work ka technical estimate banne par tay hota hai — usme labour aur material dono ka hissa hota hai, aur ye cash aapke haath me ek saath nahi aata.',
  },
  {
    q: 'Paisa seedha khaate me aata hai kya?',
    a: 'Poora amount ek saath nahi. MGNREGA me labour ki majdoori NREGA wage rate se muster roll ke hisaab se aati hai (aap khud apne shed par kaam karke majdoori le sakte ho), aur material ka payment vendor/supply ke against hota hai. Isliye ise "₹1.6 lakh ki sarkari madad jo khaate me aayegi" samajh kar mat chalo — ye ek sanctioned construction work hai, cash transfer scheme nahi.',
  },
  {
    q: 'Job card nahi hai to kya karein?',
    a: 'Pehle job card banwao — ye free hai. Gram panchayat me ghar ke adult members ke naam, photo aur Aadhaar ke saath application do; panchayat verify karke job card issue karti hai. Job card ke bina MGNREGA ka koi bhi individual work sanction nahi ho sakta. Job card banane ke liye koi fees mange to wahi complaint ka pehla mudda hai.',
  },
  {
    q: 'Sarpanch ya rozgar sevak file aage nahi badha raha — kya karein?',
    a: 'Pehle likhit application ki receiving lo (copy par date aur sign). Gram sabha ki meeting me apna naam individual works ki list me judwane ki baat rakho. Phir bhi na ho to Block Development Officer (BDO) / Programme Officer ko likhit complaint do, aur MGNREGA helpline ya state ke grievance portal par shikayat number lo. MGNREGA me har application ka record rakhna panchayat ki legal duty hai.',
  },
  {
    q: 'Shed pehle khud banwa liya, ab paisa mil jayega?',
    a: 'Nahi milega. MGNREGA me pehle work sanction hota hai, phir kaam shuru hota hai — muster roll, measurement book aur geo-tagged photos ke saath. Jo shed sanction se pehle ban chuka hai us par payment ka koi rasta nahi hai. Isliye jab tak sanction ki likhit jankari na mile, construction shuru mat karo.',
  },
];

export default function MgnregaPashuShedYojana({ article }: { article: Yojana2026ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/yojana" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">MGNREGA Pashu Shed</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            MGNREGA Pashu Shed Yojana — ₹1.6 Lakh Tak, Par Tareeka Wo Nahi Jo Blogs Batate Hain
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
          Ye guide us kisan ke liye hai jiske paas 2-3 ya usse zyada pashu hain, MGNREGA job card hai (ya
          ban sakta hai), aur pashuon ke liye pakka shed nahi hai. Garmi me pashu ped ke neeche, baarish me
          tirpal ke neeche — doodh utna hi girta hai jitna pashu pareshan hota hai. MGNREGA ke individual
          beneficiary works me cattle shed banwane ka intezam hai, aur isi ko log &ldquo;pashu shed
          yojana&rdquo; kehte hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Par ek baat pehle hi saaf kar dein, kyunki isi par sabse zyada log ulajhte hain.
        </p>

        <WB>
          <strong>Iska koi online application form NAHI hai.</strong> Na koi &ldquo;pashu shed yojana
          registration portal&rdquo;, na koi last date, na koi list jisme naam check hota hai. Ye MGNREGA ka
          ek work category hai jo gram panchayat ke through sanction hota hai. Jo site aapko registration
          form bharwa rahi hai, wo ya to ad-clicks ke liye hai ya aapka data lene ke liye.
        </WB>

        <SH>Ye Scheme Asal Me Hai Kya</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          MGNREGA sirf sadak-talaab khodne ka program nahi hai. Iski works list me ek category hai —{' '}
          <strong>individual beneficiary works</strong> — jisme kisi ek parivar ki niji zameen par asset
          banaya ja sakta hai. Isi category me livestock ke shelter aate hain: cattle shed (gaay-bhains),
          goat shelter, poultry shelter. Matlab sarkar aapki zameen par, MGNREGA ke labour aur material
          budget se, pashuon ka shed banwa sakti hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Shed me kya-kya banta hai? Pakka floor, chhat (ventilated), chara-naand (manger), aur urine
          tank/nali — taki gobar-mootra ek jagah ikattha ho aur pashu sookhi jagah baithe. Design ka
          technical estimate panchayat ka junior engineer banata hai, isliye size aur items pashu count ke
          hisaab se tay hote hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek aur baat jo samajhna zaroori hai: ye <em>construction work</em> hai, cash scheme nahi. Paisa do
          hisson me bantta hai — labour (NREGA majdoori, muster roll se) aur material (cement, sariya,
          chaddar — vendor payment). Aap khud apne shed par majdoori kar sakte ho to wage bhi aapke ghar me
          aati hai. Par &ldquo;₹1.6 lakh khaate me aayenge&rdquo; wali soch lekar chaloge to nirasha hogi.
        </p>

        <SH>Kaun Le Sakta Hai — Teen Sharton Ka Khel</SH>
        <StepList>
          <SI n={1}><strong>MGNREGA job card</strong> — parivar ke naam active job card hona chahiye. Nahi hai to pehle wo banwao, free hai, gram panchayat se banta hai.</SI>
          <SI n={2}><strong>Apni zameen aur pashu</strong> — shed aapki niji zameen par banega, aur pashu sach me hone chahiye. Zyada tar states me 2-3 pashu minimum maange jaate hain; bakri-murgi ke shelters ke apne alag norms hain. Verification me pashu gine jaate hain.</SI>
          <SI n={3}><strong>Priority category me aana madad karta hai</strong> — SC/ST, BPL, chhote-seemant kisan, mahila-mukhiya parivar, PM Awas ke labharthi. Ye MGNREGA ke individual works ke liye priority list hai. General category ka kisan bhi le sakta hai, par jab panchayat ke paas applications zyada hon to priority wale pehle number par aate hain.</SI>
        </StepList>

        <SH>Kitna Paisa — Table Se Pehle Ye Padho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Internet par ₹75,000 / ₹1,16,000 / ₹1,60,000 ke figures ghoomte hain. Ye figures kuch states ke
          estimates se nikle hain aur ab har blog inko national rate ki tarah chhapta hai. Sach ye hai:{' '}
          <strong>koi fixed national amount notify nahi hai</strong> — amount aapke state ki guidelines aur
          aapke work ke technical estimate se tay hota hai. Isliye neeche ki table ko andaza samjho, guarantee
          nahi.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-[var(--color-border)]">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">Pashu</th>
                <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">Approx estimate range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">2-3 pashu</td>
                <td className="border border-[var(--color-border)] px-3 py-2">~₹75,000-₹80,000</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">4 pashu</td>
                <td className="border border-[var(--color-border)] px-3 py-2">~₹1,10,000-₹1,16,000</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] px-3 py-2">4 se zyada</td>
                <td className="border border-[var(--color-border)] px-3 py-2">~₹1,60,000 tak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Aapke case ka asli number wahi hoga jo junior engineer ke estimate me likha aayega. Estimate ki
          copy maangna aapka haq hai — usi se pata chalta hai kitna labour, kitna material sanction hua.
        </p>

        <SH>Application Ka Asli Rasta — Gram Panchayat Se Hokar</SH>
        <StepList>
          <SI n={1}><strong>Likhit application likho</strong> — saada kagaz par: naam, job card number, pashu count, zameen ka vivaran, aur ye ki aap MGNREGA individual beneficiary work ke tahat cattle shed chahte ho. Do copy banao.</SI>
          <SI n={2}><strong>Gram panchayat me jama karo</strong> — gram rozgar sevak ya sachiv ko. Ek copy par receiving (date + sign) zaroor lo. Ye receiving hi aage kaam aayegi agar file atki.</SI>
          <SI n={3}><strong>Gram sabha me naam judwao</strong> — individual works ki list gram sabha se approve hokar panchayat ke annual action plan / labour budget me jaati hai. Gram sabha ki meeting me khud jao aur apna naam list me bulwao. Yahi asli darwaza hai — application dena kaafi nahi.</SI>
          <SI n={4}><strong>Technical sanction ka intezaar</strong> — naam plan me aane ke baad JE estimate banata hai, phir technical + financial sanction hota hai. Iske baad hi kaam shuru hota hai.</SI>
          <SI n={5}><strong>Kaam ke dauran</strong> — muster roll me naam, measurement book me entry, geo-tagged photo. Aap khud majdoori karo to wage seedha bank khaate me aayegi. Material ka hisaab panchayat rakhti hai.</SI>
        </StepList>

        <SH>Kaagaz Kya Lagenge</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Job card ki copy, Aadhaar, bank passbook, zameen ka kagaz (khatauni/khasra ya jamabandi — jispe
          shed banega wo zameen aapki ho), aur pashuon ka vivaran. Kuch jagah pashu bima ya tagging ka record
          bhi poochha jaata hai, par ye har jagah zaroori nahi. In sab ki photocopy application ke saath
          lagao, original apne paas.
        </p>

        <SH>Kitna Time Lagta Hai — Imaandaar Jawab</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ye process mahino ki hai, hafton ki nahi. Wajah ye hai ki individual works gram sabha ke annual
          plan me judte hain, aur gram sabha saal me ginti ki baar baithti hai. Agar aapki application plan
          finalise hone ke baad aayi, to agle cycle ka intezaar bhi ho sakta hai. Panchkula se lekar Purnia
          tak isi wajah se ek jaisi application ka time alag-alag hota hai. Application dete waqt gram
          rozgar sevak se seedha poochho: <em>is saal ka labour budget final hua ya nahi, aur mera naam kis
          list me judega</em>. Is ek sawaal se aapko asli timeline pata chal jaayegi.
        </p>

        <SH>File Atak Jaye To — BDO Wala Rasta</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Sabse aam shikayat yahi hai: application de di, receiving bhi hai, par mahine beet gaye aur koi
          jawab nahi. Ab kya?
        </p>
        <StepList>
          <SI n={1}>Gram rozgar sevak se likhit me status poochho — application ki receiving dikha kar.</SI>
          <SI n={2}>Agli gram sabha me khud jaakar mudda uthao. Gram sabha ki karyavahi register me baat record hoti hai.</SI>
          <SI n={3}>Block level par <strong>Programme Officer / BDO</strong> ko likhit complaint do — application ki copy aur receiving ke saath.</SI>
          <SI n={4}>Phir bhi na ho to district Programme Coordinator (aam taur par DC/DM) aur state ke MGNREGA grievance system me shikayat karo. Har complaint ka number lo aur sambhal kar rakho.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Ek kisan ki file sirf isliye 8 mahine padi rahi ki usne kabhi receiving li hi nahi thi — panchayat
          ne keh diya application mili hi nahi. Kagaz ka ek sign aapko is poori sthiti se bacha leta hai.
        </p>

        <DB>
          &ldquo;Pashu shed yojana ki list me naam check karo&rdquo; ya &ldquo;registration fee ₹99&rdquo;
          wali koi bhi site fraud hai. Is kaam me na koi fee hai, na koi online list. Sab kuch aapki apni
          gram panchayat ke record me hota hai — aur wo record dekhna free hai.
        </DB>

        <SH>Apni File Khud Track Karo — nrega.nic.in Par Sab Public Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          MGNREGA ki ek khoobi jo kam log jante hain: iska poora record public hai. nrega.nic.in par
          apna state → district → block → panchayat chunte jao — wahan panchayat ke saare sanctioned
          works, muster rolls, aur payment ka byora khula pada hai. Aapka shed sanction hua hai to us
          list me dikhega, work code ke saath. Job card number se apni wage entries bhi dekh sakte ho.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Iska fayda seedha hai: panchayat kuch bhi kahe, aap khud check kar sakte ho ki file kagaz
          me kahan tak pahunchi. &ldquo;Sanction ho gaya hai&rdquo; suna aur portal par work dikh nahi
          raha — to sanction hua nahi hai, sirf baat hui hai. Yahi farq samajhne me kai log mahine
          gawa dete hain.
        </p>

        <SH>Shed Ke Baad Aage Kya</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Shed pashupalan ka pehla kadam hai, aakhri nahi. Agar bakri palan bade scale par sochna hai to{' '}
          <Link href="/articles/bakri-palan-yojana-nlm-subsidy" className="underline font-bold">NLM bakri
          palan subsidy wali guide</Link> padho — wahan 50% subsidy ka poora hisaab hai. Murgi ki taraf
          jhukav hai to <Link href="/articles/murgi-palan-loan-nlm-subsidy" className="underline font-bold">
          murgi palan loan aur subsidy</Link> ka rasta alag hai. Aur agar pashu kharidne-paalne ke liye
          working capital chahiye, to dairy loan ke options{' '}
          <Link href="/articles/dairy-farm-loan-without-collateral" className="underline font-bold">bina
          collateral wali dairy loan guide</Link> me dekho.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            MGNREGA — Ministry of Rural Development.{' '}
            <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">nrega.nic.in</a>{' '}
            (permissible works — individual beneficiary category)
          </li>
          <li>
            Amount figures state-wise vary karte hain — apne state ki MGNREGA works guidelines aur panchayat
            ke technical estimate se confirm karein.
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modified} bioKey="MgnregaPashuShedYojana" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Aur Guides Padhein' },
          { href: '/articles/category/farming', l: 'Kheti Aur Yojana Articles' },
        ]} />
        <Disclaimer k="MgnregaPashuShedYojana" />
      </div>
    </>
  );
}
