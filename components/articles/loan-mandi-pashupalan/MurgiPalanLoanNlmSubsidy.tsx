'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  { slug: 'bakri-palan-yojana-nlm-subsidy', title: 'Bakri Palan NLM Subsidy', emoji: '🐐' },
  { slug: 'dairy-farm-loan-without-collateral', title: 'Dairy Loan Bina Collateral', emoji: '🐄' },
  { slug: 'bihar-pashupalan-loan-yojana', title: 'Bihar Pashupalan Loan Yojana', emoji: '🐃' },
  { slug: 'jansamarth-portal-loan-apply', title: 'JanSamarth Portal Apply', emoji: '💻' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'pm-matsya-sampada-yojana-fish-farming', title: 'PM Matsya Sampada Yojana', emoji: '🐟' },
];

const FAQS_DATA = [
  {
    q: 'NLM mein murgi palan par kitni subsidy milti hai?',
    a: 'NLM ke Entrepreneurship Development component mein poultry project par 50% capital subsidy milti hai — poultry unit (parent farm, hatchery, brooding unit) ke liye maximum ₹25 lakh tak. Yaani ₹50 lakh ke project par ₹25 lakh sarkar deti hai. Subsidy back-ended hoti hai — pehle project lagta hai, phir subsidy release hoti hai.',
  },
  {
    q: 'Back-ended subsidy ka matlab kya hai?',
    a: 'Matlab subsidy advance mein nahi milti. Pehle aapka loan sanction hota hai / aap apna paisa lagate ho, project shuru hota hai, phir verification ke baad subsidy installments mein release hoti hai. Isliye project ka non-subsidy hissa (apna margin + bank loan) pehle se arrange karna zaroori hai — yahi is scheme ka sabse bada practical point hai.',
  },
  {
    q: 'Kaun apply kar sakta hai?',
    a: 'Individual (kisan ya berozgar yuva), SHG, FPO, FCO, JLG aur Section 8 companies — sab eligible hain. Shart yeh hai ki aapke paas training/anubhav ho (ya trained staff ho), project ke liye zameen ho (khud ki ya lease par), aur bank se loan sanction ho ya self-finance mein bank guarantee de sako.',
  },
  {
    q: 'Kya desi murgi (backyard poultry) par bhi scheme hai?',
    a: 'NLM-EDP ka focus rural poultry entrepreneurship par hai — hatchery, parent farm, brooder cum mother unit jaise structured projects. Chhote backyard units ke liye states ki apni schemes bhi hoti hain. Agar aap 100-200 murgi se shuru karna chahte ho, toh apne district ke pashupalan vibhag se state scheme puchho, aur bade unit ka plan ho toh NLM ka rasta lo.',
  },
  {
    q: 'Layer aur broiler mein kya fark hai — kaunsa chunein?',
    a: 'Layer farming ande ke liye hoti hai — income regular (roz ande bikte hain) lekin unit lagne ke baad production shuru hone mein time lagta hai. Broiler meat ke liye hota hai — cycle chhota (5-7 hafte), paisa jaldi ghoomta hai, lekin rate ka utar-chadhav zyada hai. Naye logon ke liye broiler se shuruaat aam taur par aasan maani jaati hai, par local demand dekh kar faisla karo.',
  },
  {
    q: 'Apply kahan hota hai?',
    a: 'NLM ke entrepreneurship projects ka application online hota hai — nlm.udyamimitra.in portal par. Wahan registration karke project details, documents aur bank ki jaankari bharni hoti hai. Application State Implementing Agency (SIA) ke through process hoti hai aur approval ke baad SIDBI ke through subsidy release hoti hai.',
  },
  {
    q: 'Loan zaroori hai ya apne paise se bhi project laga sakte hain?',
    a: 'Dono options hain. Bank/NCDC se sanctioned loan wala rasta aam hai. Self-finance karna ho toh scheduled bank se bank guarantee deni hoti hai. Kisi bhi case mein project ka non-subsidy hissa aapko hi arrange karna hai — subsidy baad mein aati hai.',
  },
  {
    q: 'Kitne din mein subsidy milti hai?',
    a: 'Timeline project aur state par depend karti hai. Application approval, loan release aur SIA verification ke baad subsidy installments mein aati hai — pehli installment loan ki pehli release/project shuru hone par, baaki project poora hone ke verification par. Mahino ka process maan kar chalo aur beech ka cash flow apne plan mein rakho.',
  },
  {
    q: 'Training certificate kahan se milega?',
    a: 'Poultry training sarkari institutes (Central Poultry Development Organisations, KVK — Krishi Vigyan Kendra, state animal husbandry training centres) se hoti hai. Training sirf kagaz ke liye mat karo — bimari, feed ratio aur mortality control ki samajh hi is dhande mein bachne ki asli cheez hai.',
  },
  {
    q: 'Murgi farm mein sabse bada risk kya hai?',
    a: 'Do cheezein — bimari (ek baar flu/Ranikhet phaila toh poora batch saaf) aur feed cost (total kharche ka 60-70% feed hi hota hai). Biosecurity ke rules (bahar walon ki entry band, disinfection, vaccination schedule) aur feed ka sauda samajhdari se karna — yahi do aadatein farm ko chalati hain.',
  },
];

export default function MurgiPalanLoanNlmSubsidy({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Murgi Palan Loan NLM Subsidy</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Murgi Palan Loan 2026: NLM Se 50% Subsidy (₹25 Lakh Tak) — Eligibility, Layer vs Broiler Aur Apply Ka Poora Process
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(article.publishedTime)}</span>
            <span>🔄 Last Updated: 5 August 2026</span>
            <span>⏱️ 11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-2 mb-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/loan-mandi-pashupalan/murgi-palan-loan-nlm-subsidy/murgi-farm-mein-subah-ka-round.webp"
            alt="Broiler shed mein subah ka round lagata hua murgi palak — NLM subsidy isi business ke liye hai"
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
            <li>NLM-EDP mein poultry project par <strong>50% capital subsidy, ₹25 lakh tak</strong> — parent farm, hatchery, brooder unit.</li>
            <li>Subsidy <strong>back-ended</strong> hai: pehle apna margin + bank loan, subsidy verification ke baad. Advance nahi milti.</li>
            <li>Apply online: <strong>nlm.udyamimitra.in</strong> — DPR, KYC, zameen ke kagaz, training certificate, bank sanction chahiye.</li>
            <li>Chalu kharche ka 60-70% <strong>feed</strong> hai — munafe ka faisla shed nahi, feed conversion karta hai.</li>
            <li><strong>Abhi check karo:</strong> nlm.udyamimitra.in par current guidelines aur application window.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 5 August 2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Murgi palan un ginti ke dhandhon mein hai jahan chhoti zameen par bhi structured business khada ho sakta
          hai — aur sarkar iske liye apni sabse badi livestock scheme se paisa de rahi hai. National Livestock
          Mission (NLM) ke Entrepreneurship Development component mein poultry project par <strong>50% capital
          subsidy, ₹25 lakh tak</strong> milti hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Lekin isi scheme mein sabse zyada log ek hi galatfehmi se atakte hain — subsidy ko advance samajhna. Is
          guide mein poora sach hai: subsidy ka asli structure, kaun eligible hai, layer vs broiler ka faisla,
          udyamimitra portal se apply ka process, aur woh galtiyan jo application ko latka deti hain.
        </p>

        <SH>🐔 NLM-EDP Kya Hai — Structure Samjho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          National Livestock Mission, Ministry of Fisheries, Animal Husbandry &amp; Dairying ki central scheme hai.
          Iske Entrepreneurship Development (EDP) component mein poultry, bakri-bhed, sukar (piggery) aur chara
          (feed/fodder) units par capital subsidy milti hai. Poultry ke liye eligible projects mein parent farm,
          rural hatchery, aur brooder-cum-mother unit jaise structured setups aate hain.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Baat</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">NLM Poultry (EDP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Subsidy</td>
                <td className="border border-[var(--color-border)] p-3">50% of project cost — poultry unit par max ₹25 lakh</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Type</td>
                <td className="border border-[var(--color-border)] p-3">Back-ended (project ke baad, installments mein)</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Kaun apply kare</td>
                <td className="border border-[var(--color-border)] p-3">Individual, SHG, FPO, FCO, JLG, Section 8 company</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Portal</td>
                <td className="border border-[var(--color-border)] p-3">nlm.udyamimitra.in</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Subsidy release</td>
                <td className="border border-[var(--color-border)] p-3">SIA verification ke baad, SIDBI ke through</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DB>
          <strong>Sabse zaroori line:</strong> subsidy <strong>back-ended</strong> hai. Pehle aapka apna margin +
          bank loan project ko khada karta hai, phir verification ke baad subsidy aati hai. Jo log &ldquo;sarkar 25 lakh
          degi phir shuru karenge&rdquo; soch kar baithe hain, unka project kabhi shuru hi nahi hota. Financing pehle,
          subsidy baad mein — yahi order hai.
        </DB>

        <SH>✅ Eligibility — Chaar Cheezein Chahiye</SH>
        <StepList>
          <SI n={1}><strong>Training ya anubhav:</strong> poultry ki training, livestock ka anubhav, ya trained staff — teeno mein se kuch ek. KVK ya sarkari poultry training centre ka certificate file ko mazboot karta hai.</SI>
          <SI n={2}><strong>Zameen:</strong> khud ki ya registered lease par. Location bhi socho — hatchery/farm ke liye bijli-paani aur market ki doori matter karti hai.</SI>
          <SI n={3}><strong>Finance ka intezam:</strong> bank/NCDC se sanctioned loan, YA self-finance ke saath scheduled bank ki guarantee. Bina iske application aage nahi badhti.</SI>
          <SI n={4}><strong>KYC poora:</strong> Aadhaar, PAN, address proof, bank details — sab matched aur updated.</SI>
        </StepList>

        <Image
          src="/images/articles/loan-mandi-pashupalan/murgi-palan-loan-nlm-subsidy/layer-vs-broiler-farm.webp"
          alt="Layer farm mein ande ki tray — layer ya broiler, pehla bada business faisla"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>🥚 Layer vs Broiler — Pehla Bada Faisla</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black"></th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Layer (Ande)</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Broiler (Meat)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Cycle</td>
                <td className="border border-[var(--color-border)] p-3">Lamba — production shuru hone mein mahine lagte hain, phir saal bhar ande</td>
                <td className="border border-[var(--color-border)] p-3">Chhota — 5-7 hafte mein batch taiyar</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Income pattern</td>
                <td className="border border-[var(--color-border)] p-3">Roz ki regular income (ande)</td>
                <td className="border border-[var(--color-border)] p-3">Batch-wise lump sum</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Shuruati lagat</td>
                <td className="border border-[var(--color-border)] p-3">Zyada — cages, lamba feeding period</td>
                <td className="border border-[var(--color-border)] p-3">Kam — sasta setup, jaldi turnover</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Risk</td>
                <td className="border border-[var(--color-border)] p-3">Ande ke rate ka seasonal utar-chadhav</td>
                <td className="border border-[var(--color-border)] p-3">Meat rate volatility + integrator par nirbharta</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Kiske liye</td>
                <td className="border border-[var(--color-border)] p-3">Lambi planning, regular cash flow chahne wale</td>
                <td className="border border-[var(--color-border)] p-3">Naye log, kam poonji, jaldi paisa ghumana</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Broiler mein ek aur rasta hai — <strong>contract farming</strong>: badi company (integrator) chooza, feed
          aur dawai deti hai, aap shed aur mehnat dete ho, aur per-bird growing charge milta hai. Risk kam, munafa
          bhi kam. Apne dam par karne mein dono zyada hain. Naye logon ke liye 1-2 saal contract mein seekh kar
          apna setup karna ek samajhdaar raasta hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/murgi-palan-loan-nlm-subsidy/udyamimitra-portal-laptop-par.webp"
          alt="Laptop par udyamimitra portal se NLM-EDP application bharta hua aavedak"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>💻 Apply Kaise Karein — udyamimitra Portal</SH>
        <StepList>
          <SI n={1}><strong>Project report (DPR) banao:</strong> unit ka type, capacity, cost breakdown, income projection, repayment plan. DPR jitni realistic, file utni mazboot. Hawai numbers wali DPR verification mein pakdi jaati hai.</SI>
          <SI n={2}><strong>nlm.udyamimitra.in par registration karo</strong> — apni details bharo aur applicant type chuno (individual/SHG/FPO...).</SI>
          <SI n={3}><strong>Application form + documents upload karo:</strong> DPR, KYC, zameen ke kagaz/lease, training certificate, bank sanction letter (ya guarantee).</SI>
          <SI n={4}><strong>SIA ki jaanch:</strong> State Implementing Agency application verify karti hai — document check aur project appraisal. Yahan queries aa sakti hain, jawab time par do.</SI>
          <SI n={5}><strong>Approval ke baad project shuru karo:</strong> loan release hota hai, construction/setup chalta hai.</SI>
          <SI n={6}><strong>Subsidy release:</strong> verification ke baad SIDBI ke through subsidy installments mein aati hai — pehli project shuru par, baaki completion verify hone par.</SI>
        </StepList>

        <GovLink
          href="https://nlm.udyamimitra.in"
          label="NLM Entrepreneurship — Udyamimitra Portal"
          guide="Portal Kholo"
          portalName="nlm.udyamimitra.in"
        />

        <WB>
          Subsidy pattern, unit-wise caps aur eligible project types scheme guidelines ke updates ke saath badal
          sakte hain. Apply se pehle nlm.udyamimitra.in par current guidelines PDF zaroor dekho — aur kisi bhi
          &ldquo;guaranteed approval&rdquo; wale agent se door raho. Application free hai aur khud ho jaati hai.
        </WB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/murgi-palan-loan-nlm-subsidy/feed-ki-boriyan-aur-kharcha.webp"
          alt="Feed ki boriyon se daana nikalta hua worker — poultry mein 60-70% kharcha feed ka hota hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>🧮 Kharche Ka Sach — Feed Hi Asli Game Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Poultry ke chalu kharche ka 60-70% sirf feed hota hai. Iska matlab: aapke munafe ka faisla shed ki
          chamak se nahi, feed conversion se hota hai — kitna feed kha kar murgi kitna anda/weight deti hai. Achhi
          quality ka chooza, sahi feed ratio, aur bimari se bachav — yeh teen cheezein feed ka paisa vasool karati
          hain.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Doosra bada kharcha working capital hai — har batch ke liye chooza, feed, dawai ka paisa chahiye. Iske
          liye KCC (Animal Husbandry) sabse sasta rasta hai. Capital cost NLM + term loan se, chalane ka kharcha
          KCC se — yeh combination yahan bhi wahi hai jo har livestock project mein kaam karta hai. Working capital
          ke options ke liye <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC
          Online Apply</Link> guide dekho.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/murgi-palan-loan-nlm-subsidy/chooza-vaccination-ka-kaam.webp"
          alt="Chooze ko vaccination dete hue haath — mortality control ka sabse zaroori kaam"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>💔 Mortality Aur Vaccination — Jo Numbers Mein Nahi Dikhta</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Har DPR mein mortality ka ek chhota sa percentage likha hota hai, par asli farm par yeh number
          discipline se banta hai. Ranikhet (Newcastle), Gumboro aur fowl pox ka vaccination schedule din ke
          hisaab se fix hota hai — chooza aane ke pehle hafte se hi. Apne area ke veterinary doctor se poora
          schedule likhwa lo aur calendar par chipka do; ek missed dose poore batch ka risk hai. Naye batch se
          pehle shed ki poori safai-disinfection aur kam se kam ek hafte ka gap (downtime) — yeh aadat hi
          purane aur naye farmer ka fark hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/murgi-palan-loan-nlm-subsidy/naya-shed-nirman-kaam.webp"
          alt="Naye poultry shed ka nirman — setup mein paisa sahi jagah lagana zaroori hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>🏗️ Shed Aur Setup — Jahan Paisa Sahi Lagana Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Naye log aksar paisa galat jagah lagate hain — chamakdaar gate aur pakki boundary par, jabki murgi ko
          chahiye <strong>hawa, sookha farsh aur sahi temperature</strong>. Shed ki disha east-west rakho taaki
          seedhi dhoop andar na aaye, chhat par heat-reflective sheet ya chhappar ki doosri parat garmi se
          bachati hai, aur side curtains sardiyon mein brooding ka kharcha ghatate hain. Deep litter system
          (bhusi/dhaan ki bhusi ka farsh) chhote-medium units ke liye sasta aur practical hai — bas litter
          sookha rehna chahiye, gila litter bimari ka ghar hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Doosri baat — <strong>pani</strong>. Murgi feed se zyada pani peeti hai, aur garmi mein paani ka
          intezam fail hua toh mortality seedha upar jaati hai. Bore/well ka backup, tanki ki capacity aur
          nipple drinkers ka layout project plan mein pehle din se rakho. DPR mein bhi yeh detail dikhna
          chahiye — appraisal karne wala bhi samajh jaata hai ki plan zameen se juda hai ya internet se utha hai.
        </p>

        <SH>⚠️ 5 Galtiyan Jo Application Aur Farm Dono Dubati Hain</SH>
        <StepList>
          <SI n={1}><strong>Subsidy ko advance samajhna</strong> — pehle financing, phir subsidy. Ulta socha toh project shuru hi nahi hoga.</SI>
          <SI n={2}><strong>Copy-paste DPR</strong> — internet se uthai DPR mein local rates nahi hote; appraisal mein pakdi jaati hai. Apne district ke asli rates par banao.</SI>
          <SI n={3}><strong>Biosecurity ko luxury samajhna</strong> — visitors ki entry, disinfection, vaccination schedule. Ek chook, poora batch saaf. Yeh kharcha nahi, bima hai.</SI>
          <SI n={4}><strong>Market ka plan na hona</strong> — ande/meat kahan bikega, kis rate par, kaun uthayega — yeh unit lagane se pehle tay karo, baad mein nahi.</SI>
          <SI n={5}><strong>Capacity se bada unit</strong> — pehli baar mein hi sabse bada project lene ka lalach. Chhota shuru karo, seekho, phir badhao — scheme baad mein bhi rahegi.</SI>
        </StepList>

        <SH>🌱 Zameen Se Ek Misaal — Khagaria (Bihar) Ke Dayanand Singh</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh dhandha chhoti zameen par bhi khada hota hai — iska documented example KVK Khagaria (Bihar) ke
          record mein hai. Parbatta gaon ke <strong>Dayanand Singh</strong> ke paas sirf 1 acre zameen thi. 500
          chooze se shuruaat ki, phir KVK se training lekar 2,000 Vencobb chicks ka brick-walled poultry house
          banaya. KVK ki report ke mutabik ab woh saal mein 10 batches se lagbhag <strong>28,500 kg chicken</strong>{' '}
          produce karte hain, <strong>₹2.4-3 lakh saalana net income</strong> kamate hain, do logon ko full-time
          rozgar diya hai — aur poultry litter ko khaad bana kar sabzi se ₹60-70 hazaar alag se. Unka apna quote:
          &ldquo;Murgi khad apnayen, khet bachayen.&rdquo; (
          <a href="https://khagaria.kvk4.in/success-stories.php" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: KVK Khagaria success stories</a>)
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Is story ka sabak wahi hai jo upar likha hai — training pehle, phir scale. 500 se 2,000 tak ka safar
          KVK ke guidance ke saath hua, ek jhatke mein nahi.
        </p>

        <SH>🐐 Bakri Ya Machhli Mein Bhi Interest Hai?</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          NLM ke isi structure mein bakri-bhed palan ka bhi component hai — uska poora ganit humne alag guide mein
          likha hai: <Link href="/articles/bakri-palan-yojana-nlm-subsidy" className="underline font-bold">Bakri Palan
          NLM Subsidy</Link>. Aur paani ka kaam pasand hai toh{' '}
          <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="underline font-bold">PM Matsya
          Sampada Yojana</Link> dekho. Ek hi zameen par sahi scheme ka chunav lakhon ka fark banata hai.
        </p>

        <FAQBlock faqs={FAQS_DATA} />

        <SH>📚 Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            NLM Entrepreneurship — Udyamimitra portal, scheme guidelines.{' '}
            <a href="https://nlm.udyamimitra.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">nlm.udyamimitra.in</a>
          </li>
          <li>
            KVK Khagaria (Bihar) — documented poultry success story, Dayanand Singh, Parbatta.{' '}
            <a href="https://khagaria.kvk4.in/success-stories.php" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">khagaria.kvk4.in</a>
          </li>
          <li>
            Department of Animal Husbandry &amp; Dairying — National Livestock Mission (NLM) scheme page: sub-missions, activities aur operational guidelines.{' '}
            <a href="https://dahd.gov.in/schemes/programmes/national_livestock_mission" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">dahd.gov.in — National Livestock Mission (NLM)</a>
          </li>
        </ul>

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
