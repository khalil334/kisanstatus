import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import OfficialLinkButton from '@/components/OfficialLinkButton';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-07-08T03:06:14+05:30';
const MODIFIED = '2026-07-25T23:15:52+05:30';

const RELATED = [
  { slug: 'drip-sprinkler-irrigation-subsidy', title: 'Drip & Sprinkler Subsidy' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Loan Kahan Se Le' },
  { slug: 'custom-hiring-centre-chc-portal', title: 'CHC Machine Rental Guide' },
];

const FAQS_DATA = [
  {
    q: 'Subsidy ka paisa seedha account mein aata hai ya vendor ko?',
    a: 'Aapko cash nahi milta. Subsidy state implementing agency ke through system me adjust hoti hai — aap sirf apna hissa dete ho aur pump lag jata hai.',
  },
  {
    q: 'Kya bina zameen ke solar pump mil sakta hai?',
    a: 'Nahi. Zameen aapke naam par honi chahiye aur land record (Khatauni/Khasra/7-12) updated hona chahiye. Lease wali zameen par states ke apne niyam hain — apni state agency se poochho.',
  },
  {
    q: 'PM Kusum helpline number kya hai?',
    a: 'National toll-free: 1800-180-3333. State nodal agency ka alag contact bhi pmkusum.mnre.gov.in par milta hai.',
  },
  {
    q: 'Apna 40% hissa nahi hai — loan mil sakta hai?',
    a: 'Haan. Scheme ke design me hi hai ki farmer ke hisse ka 30% tak bank loan ho sakta hai — matlab shuru me sirf 10% apni jeb se. Loan file me subsidy sanction ka reference zaroor lagao.',
  },
  {
    q: 'Cloudy din ya barish me pump chalega kya?',
    a: 'Chalega, par kam. Badal wale din output ghat jata hai kyunki panel ko kam dhoop milti hai. Isliye pump ki sizing apne paani ki zaroorat se thoda upar rakhna samajhdari hai.',
  },
  {
    q: 'Vendor khud choose kar sakte hain ya sarkar assign karti hai?',
    a: 'State agency ke empanelled vendors ki list me se hi choose karna hota hai. Bahar ka private vendor lagwaya to subsidy nahi milegi.',
  },
  {
    q: 'Pump lagne ke baad kaun sa kagaz sambhal ke rakhein?',
    a: 'Teen cheezein: warranty/AMC document (5 saal ka maintenance vendor ki zimmedari hota hai), commissioning report ki copy, aur vendor ka service contact. Warranty period me har fault vendor ka kaam hai — likhit shikayat karo.',
  },
  {
    q: 'Application ke baad survey kab hota hai?',
    a: 'Aam taur par kuch hafton me site verification hota hai, par state ke quota aur staff par depend karta hai. 30 din se zyada kuch na ho to helpline par follow-up karo.',
  },
];

export default function PmKusumYojanaSolarSubsidy2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-4">
            <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-[var(--color-primary)]">Articles</Link>
            <span>/</span>
            <span className="text-[var(--color-text)]">Solar Pump Subsidy</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-bold rounded-full mb-3">PM Kusum Yojana 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-[var(--color-text)] leading-tight mb-4">
            PM Kusum Solar Pump: 60% Subsidy Ka Sahi Hisaab Aur Apply Ka Tarika
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-text-muted)]">
            <span><Link href="/about" className="hover:text-[var(--color-primary)]">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>14 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-[var(--color-text)] leading-relaxed mb-4">
          Pehli baat jo koi nahi batata: is scheme me koi ek &quot;last date&quot; nahi hoti.
          Har state ko pumps ka quota milta hai. Application window usi hisaab se
          khulti-band hoti rehti hai. Isliye jo sabse pehle karna hai wo form bharna nahi —
          apne state ki current window ka status dekhna hai. Window band hai to accha
          se accha form bhi waitlist me hi baithega.
        </p>
        <p className="text-[var(--color-text)] leading-relaxed mb-4">
          Ab scheme ki baat. PM-KUSUM (poora naam — Pradhan Mantri Kisan Urja Suraksha
          evam Utthaan Mahabhiyan) MNRE yani Ministry of New and Renewable Energy ki
          scheme hai, 2019 se chal rahi hai. Iska jo hissa aam kisan ke kaam ka hai —
          Component B — usme khet me standalone solar pump lagta hai aur lagbhag 60%
          kharcha sarkar uthati hai. Diesel pump wale ilaqo ko priority milti hai.
        </p>
        <p className="text-[var(--color-text)] leading-relaxed mb-6">
          Neeche paise ka poora hisaab, eligibility, documents, apply ka process aur
          rejection se bachne ke tarike hain — sab official structure ke hisaab se,
          hawa me kuch nahi.
        </p>

        <div className="mb-8">
          <Image
            src={article.ogImage || '/images/articles/pm-kusum-yojana-solar-subsidy-2026/solar-pump-hero.webp'}
            alt="Khet me lage solar panel aur pump ke paas khada kisan"
            width={1200}
            height={630}
            className="rounded-2xl w-full h-auto object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-xs text-[var(--color-text-muted)] text-center mt-2">
            Diesel ka kharcha hatane ka sabse seedha rasta
          </p>
        </div>

        <section className="mb-8">
          <SH>Paise Ka Hisaab Pehle — 60% Aata Kahan Se Hai</SH>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Ye official formula hai, MNRE ke guidelines wala:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-[var(--color-border)] rounded-lg">
              <thead>
                <tr className="bg-[var(--color-bg-alt)]">
                  <th className="p-3 text-left font-bold">Kaun deta hai</th>
                  <th className="p-3 text-left font-bold">Kitna</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3">Centre (CFA)</td>
                  <td className="p-3">30% — benchmark ya tender cost, jo kam ho</td>
                </tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                  <td className="p-3">State sarkar</td>
                  <td className="p-3">Kam se kam 30% (kuch states isse zyada dete hain)</td>
                </tr>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3">Aap</td>
                  <td className="p-3">Baaki ~40% — isme se 30% tak bank loan ho sakta hai, jeb se sirf 10%</td>
                </tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                  <td className="p-3">Special states*</td>
                  <td className="p-3">Centre 50% deta hai — kisan ka hissa 20% tak reh jata hai</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mb-4">
            *North-East, J&amp;K, Ladakh, Himachal, Uttarakhand, Lakshadweep, Andaman &amp; Nicobar.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Do baatein isme chhupi hain jo log miss karte hain. Ek — subsidy ka percentage
            &quot;benchmark cost&quot; par lagta hai, market price par nahi. Matlab agar vendor ka
            rate benchmark se upar hai, to upar ka antar aapka. Do — kuch states apni
            taraf se 30% se zyada milate hain, isliye asli hissa har state me alag hota
            hai. Exact rakam wahi manna jo aapke state portal ke sanction letter me likhi ho.
          </p>
          <WB>
            <strong>Savdhaan:</strong> &quot;90% subsidy&quot; ka wada karne wali private websites aur
            agents se door raho. Registration sirf official state portal se hota hai, aur
            koi bhi advance vendor ko tabhi do jab sanction aapke haath me ho.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Teen Components — Aapka Kaun Sa Hai</SH>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Scheme ke teen hisse hain, aur zyada tar kisano ka kaam dusre wale se chalta hai:
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
              <p className="font-bold text-[var(--color-text)] mb-1">Component A — Solar plant lagakar bijli bechna</p>
              <p className="text-sm text-[var(--color-text-muted)]">Banjar/kheti ki zameen par 500 kW se 2 MW ka plant, bijli DISCOM ko bikti hai. Zameen zyada ho to income ka rasta hai, pump se lena-dena nahi.</p>
            </div>
            <div className="p-4 rounded-xl border-2 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 relative">
              <span className="absolute -top-2.5 right-4 px-2 py-0.5 bg-amber-500 text-white text-[10px] font-black rounded">ZYADATAR KISANO KA YAHI</span>
              <p className="font-bold text-[var(--color-text)] mb-1">Component B — Standalone solar pump</p>
              <p className="text-sm text-[var(--color-text-muted)]">Jahan grid connection nahi hai ya diesel pump chal raha hai, wahan naya solar pump. 7.5 HP tak ke pump par central assistance milti hai. Yehi wo 60% subsidy wala hissa hai.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
              <p className="font-bold text-[var(--color-text)] mb-1">Component C — Purane grid pump ka solarisation</p>
              <p className="text-sm text-[var(--color-text-muted)]">Bijli wala pump already hai to us par solar panel lagta hai. Din me free sinchai, bachi bijli DISCOM ko bech kar kamai bhi.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Eligibility — Form Bharne Se Pehle Ye Check Karo</SH>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
              <p className="font-bold text-green-800 dark:text-green-300 mb-2">Apply kar sakte ho agar:</p>
              <ul className="text-sm text-[var(--color-text)] space-y-1.5">
                <li>✓ Zameen aapke naam registered hai</li>
                <li>✓ Khatauni/Khasra/7-12 me naam Aadhaar se match karta hai</li>
                <li>✓ Bank account Aadhaar se linked hai</li>
                <li>✓ Us khet me paani ka source hai (boring/kuan/talab)</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <p className="font-bold text-red-800 dark:text-red-300 mb-2">Dikkat aayegi agar:</p>
              <ul className="text-sm text-[var(--color-text)] space-y-1.5">
                <li>✗ Land record me naam purana/galat hai</li>
                <li>✗ Same khet par pehle se solar pump laga hai</li>
                <li>✗ Zameen lease par hai aur owner ka consent nahi</li>
                <li>✗ State ke apne extra criteria me fit nahi baithte</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Pump size kitna milega, ye aapki zameen aur paani ki zaroorat par state agency
            tay karti hai — chhoti joth par bada pump maangoge to application wahi atkegi.
            SC/ST kisano ke liye kai states me alag quota aur zyada state share hai; apne
            state portal par category-wise detail dekh lo.
          </p>
          <WB>
            <strong>Sabse badi galti:</strong> bina land record check kiye apply karna. Naam ki
            spelling, pita ka naam, khasra number — sab Aadhaar aur Khatauni me same hona
            chahiye. Pehle Patwari se record durust karwao, phir form bharo. Mahine-do-mahine
            baad rejection letter se accha hai ek din Patwari ke yahan lagana.
          </WB>
        </section>

        <div className="mb-8">
          <Image
            src="/images/articles/pm-kusum-yojana-solar-subsidy-2026/diesel-vs-solar-comparison.webp"
            alt="Ek taraf purana diesel pump, dusri taraf naya solar pump — dono ka farq"
            width={1200}
            height={630}
            className="rounded-2xl w-full h-auto object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-xs text-[var(--color-text-muted)] text-center mt-2">
            Diesel ka mahina-mahina kharcha vs ek baar ka investment
          </p>
        </div>

        <section className="mb-8">
          <SH>Diesel Se Kitna Sasta Padega?</SH>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Exact bachat aapke pump ke size, diesel ke bhav aur sinchai ke ghanton par
            depend karti hai, isliye main koi jaadui number nahi dunga. Hisaab khud aise
            lagao: apna pichhle saal ka diesel kharcha nikaalo (mahine ka kharcha × jitne
            mahine pump chalta hai). Solar pump lagne ke baad ye kharcha lagbhag zero ho
            jata hai — dhoop ka koi bill nahi aata. Ab apna 10% upfront + loan ki EMI us
            bachat ke saamne rakho. Zyada tar diesel-heavy kheto me ye hisaab kuch saal
            me barabar ho jata hai, aur panel ki umar 25 saal tak manee jati hai.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Haan, ek imaandaar baat — jahan bijli lagbhag free hai (kuch states me agriculture
            connection par bill na ke barabar aata hai), wahan standalone solar ka financial
            case kamzor hota hai. Wahan Component C (solarisation) zyada sense banata hai,
            kyunki bachi bijli bech kar kamai hoti hai.
          </p>
          <IB>
            <strong>Loan wali tip:</strong> Apna hissa dene ke liye bank loan lena ho to file me
            subsidy sanction ka reference lagao — tab bank sirf aapke hisse par loan banata
            hai, poori cost par nahi. Kisan loan ke saare raste{' '}
            <Link href="/articles/KisanRinKahaSeLe2026" className="text-blue-600 dark:text-blue-400 hover:underline">is guide me</Link> alag
            se samjhaye hain.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Documents — Pehle Se Phone Me Rakho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {[
              'Aadhaar card (clear photo)',
              'Bank passbook ka front page',
              'Khatauni / Khasra / 7-12 Utara (updated)',
              'Passport size photo',
              'Aadhaar-linked mobile number',
              'Caste certificate (agar SC/ST quota me apply kar rahe ho)',
              'Purane diesel pump ka bill/photo (replace kar rahe ho to)',
              'Bijli ka bill (sirf Component C ke liye)',
            ].map((d) => (
              <div key={d} className="flex items-start gap-2 p-2.5 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm text-[var(--color-text)]">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">
            Blur photo upload rejection ki sabse aam wajah hai. Achhi roshni me saaf scan lo.
          </p>
        </section>

        <div className="mb-8">
          <Image
            src="/images/articles/pm-kusum-yojana-solar-subsidy-2026/application-form-screenshot.webp"
            alt="PM Kusum online registration form ka screenshot — Aadhaar, zameen details aur pump selection"
            width={1200}
            height={630}
            className="rounded-2xl w-full h-auto object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-xs text-[var(--color-text-muted)] text-center mt-2">
            Form seedha hai — bas details Khatauni se hu-ba-hu bharo
          </p>
        </div>

        <section className="mb-8">
          <SH>Apply Kaise Karein — Kadam Dar Kadam</SH>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Application state ki nodal agency ke through hoti hai — jaise Rajasthan me
            RRECL, UP me UPNEDA, Maharashtra me MahaUrja, Gujarat me GEDA. National portal{' '}
            <a href="https://pmkusum.mnre.gov.in" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">pmkusum.mnre.gov.in</a>{' '}
            se apne state ka sahi link milta hai — wahi se jao, Google par mile
            milte-julte naam wali site se nahi, kyunki MNRE khud fake KUSUM websites ke
            baare me warning nikaal chuka hai.
          </p>
          <StepList>
            <SI n={1}>pmkusum.mnre.gov.in kholo aur apne state ka official link chuno</SI>
            <SI n={2}>&quot;New Registration&quot; / &quot;Beneficiary Apply&quot; par jao, Aadhaar-OTP se verify karo</SI>
            <SI n={3}>Form bharo — naam, pata, khasra/survey number bilkul Khatauni jaisa</SI>
            <SI n={4}>Documents upload karo, pump capacity apni zameen ke hisaab se chuno</SI>
            <SI n={5}>Submit karke reference number ka screenshot le lo</SI>
            <SI n={6}>Status portal par track karo — Pending → Approved → Vendor Assigned → Installed</SI>
          </StepList>
          <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              Apply karne, status dekhne ya state agency ka contact lene ke liye official
              portal yahan se khulega:
            </p>
            <OfficialLinkButton
              title="PM Kusum Official Portal"
              message="PM Kusum portal khulne wala hai. Thoda wait karo..."
              url="https://pmkusum.mnre.gov.in"
              infoNote="Thoda wait karo. Official PM Kusum portal khulne wala hai."
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Yahan Click Karo → PM Kusum Portal Khulega
            </OfficialLinkButton>
          </div>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Approval ke baad empanelled vendors ki list me se vendor chunna hota hai.
            Installation ke baad 5 saal ki warranty/AMC vendor ki zimmedari hoti hai —
            ye kagaz sambhal ke rakhna, panel ki safai ke alawa aapko kuch nahi karna.
          </p>
        </section>

        <section className="mb-8">
          <SH>Pump Kitne HP Ka Lein — Aur Lagne Ke Baad Kya Karna Hai</SH>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            HP ka lalach mat karo. Pump ki sahi size aapke paani ke source ki gehrai
            (water table), khet ke rakbe aur fasal par depend karti hai — boring gehri
            hai to wahi paani kheenchne me zyada taakat lagti hai. Vendor se survey ke
            waqt ye teeno cheezein khul kar batao, aur garmi ke mahino ka water level
            batana mat bhoolo, kyunki tab hi level sabse neeche jata hai. Galat sizing
            hi baad me &quot;pump chal raha hai par paani kam de raha hai&quot; wali shikayat ki
            jad hoti hai.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            Lagne ke baad kaam bas itna hai: panel ki safai mahine me ek-do baar (dhool
            jam gayi to output girta hai), baarish ke season se pehle wiring aur earthing
            ek nazar check, aur panel ke aas-paas chhaya karne wale ped ki tehniyan
            chhatwana. Warranty ke 5 saal me technical kharabi vendor ki zimmedari hai —
            apni jeb se mistri bulane ki zaroorat nahi, bas shikayat likhit me karo aur
            uski copy rakho.
          </p>
        </section>

        <section className="mb-8">
          <SH>Reject Kyun Hota Hai — Panch Aam Wajahen</SH>
          <div className="space-y-3">
            {[
              { err: 'Naam mismatch (Khatauni ≠ Aadhaar)', fix: 'Patwari se pehle record theek karwao. Spelling tak match honi chahiye.' },
              { err: 'Duplicate application', fix: 'Ek hi baar apply karo. Do form dala to system dono pakad leta hai.' },
              { err: 'Blur ya adhoore documents', fix: 'Saaf scan, poora document. Kata-fata Aadhaar seedha reject.' },
              { err: 'Zameen ke hisaab se zyada bada pump', fix: 'Pump capacity state agency ke norms se chuno — chhoti joth par bada pump nahi milta.' },
              { err: 'Same khet par pehle se beneficiary', fix: 'Ek survey number par dobara nahi. Alag plot hai to us plot ki Khatauni ke saath apply karo.' },
            ].map(({ err, fix }) => (
              <div key={err} className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-1">{err}</p>
                <p className="text-sm text-[var(--color-text)]"><span className="font-bold text-green-700 dark:text-green-400">FIX:</span> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-8">
          <Image
            src="/images/articles/pm-kusum-yojana-solar-subsidy-2026/state-portal-screenshot.webp"
            alt="State portal par application status tracker ka screenshot"
            width={1200}
            height={630}
            className="rounded-2xl w-full h-auto object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-xs text-[var(--color-text-muted)] text-center mt-2">
            Reference number se status track hota hai — 30 din se zyada pending ho to helpline
          </p>
        </div>

        <section className="mb-8">
          <SH>Jo Sawal Har Kisan Puchta Hai</SH>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kusum Solar Pump FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Aakhri Baat — Quota Ka Khel Samjho</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Ye scheme deadline par nahi, quota par band hoti hai. State ka quota bhar gaya
            to portal form to le lega, par number agli window me lagega. Isliye jis din
            window khuli ho usi hafte apply karna sabse bada faayda hai — documents pehle
            se taiyaar rakho, land record pehle se durust karwao.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Aur scheme ki taaza window/extension ki jaankari hamesha official portal ya
            1800-180-3333 se confirm karo — schemes ke saal-dar-saal extension hote rehte
            hain, par bharosa sirf official notification ka karo.
          </p>
        </div>

        <CalcBanner
          icon=""
          title="Kitna Bachoge? Calculate Karo"
          desc="Diesel vs Solar — apne kharche se hisaab lagao"
          primaryCta={{ href: '/calculator/crop-profit', label: 'Profit Calc →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calc' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKusumYojanaSolarSubsidy2026" />
        <BottomNav extraLinks={[
          { href: '/articles/KisanCreditCardOnlineApply2026', l: 'KCC Loan' },
          { href: '/articles/KisanTractorLoan2026', l: 'Tractor Loan' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer k="PmKusumYojanaSolarSubsidy2026" />
      </div>
    </>
  );
}
