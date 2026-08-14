import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const RELATED = [
  { slug: 'murgi-palan-loan-nlm-subsidy', title: 'Murgi Palan NLM Subsidy' },
  { slug: 'sbi-dairy-loan-interest-rate', title: 'SBI Dairy Loan — Rate Guide' },
  { slug: 'dairy-farm-loan-without-collateral', title: 'Bina Guarantee Dairy Loan' },
];

const FAQS_DATA = [
  {
    q: 'Rashtriya Gokul Mission mein kisan ko seedha kya milta hai?',
    a: 'Teen cheezein seedhe kisan tak pahunchti hain — doorstep par muft ya bahut sasti artificial insemination (NAIP ke through), IVF pregnancy par ₹5,000 ki subsidy (GoI share), aur sex-sorted semen ki cost par 50% tak subsidy. Baaki components — semen stations, bull production, Gokul Gram — system-level hain, unka fayda indirect milta hai (behtar nasl ka semen aapke gaon tak pahunchta hai).',
  },
  {
    q: 'Sex-sorted semen kya hota hai aur iska fayda kya hai?',
    a: 'Normal AI mein bachhda ya bachhiya — 50-50 chance hota hai. Sex-sorted semen mein technology se 90%+ probability bachhiya (female calf) ki hoti hai. Dairy kisan ke liye iska matlab seedha hai — bachhiya matlab aane wali doodh dene wali gay, bachhda matlab kharcha. RGM ke under is semen ki cost ka 50% tak sarkar deti hai.',
  },
  {
    q: 'IVF pregnancy par ₹5,000 subsidy kaise milti hai?',
    a: 'Accelerated Breed Improvement Programme ke under, agar aap apni gay/bhains mein IVF technology se high genetic merit embryo lagwate ho, toh confirmed pregnancy par ₹5,000 GoI share ke roop mein milta hai. Yeh kaam authorised IVF labs aur implementing agencies ke through hota hai — apne district ke pashupalan vibhag ya nazdeeki IVF lab se sampark karo.',
  },
  {
    q: 'Breed Multiplication Farm ke liye kitni subsidy hai aur kaun le sakta hai?',
    a: 'Project ki capital cost ka 50%, maximum ₹2 crore tak. Eligible hain — individual entrepreneurs, FPO/FPC, SHG, JLG aur Section 8 companies. Yeh chhote kisan wala component nahi hai — yeh 200+ animals wala structured commercial farm hai jo high genetic merit bachhiyaan paida karke bechta hai. Application eoi.nddb.coop portal par online hoti hai.',
  },
  {
    q: 'Kya RGM mein gay kharidne ke liye paisa milta hai?',
    a: 'Seedha gay kharidne ki subsidy RGM mein nahi hai — yeh breed improvement ki scheme hai, pashu kharid ki nahi. Haan, 2025 ke revision mein ek naya component aaya hai: HGM (High Genetic Merit) IVF bachhiya kharidne par liye gaye loan par 3% interest subvention. Gay/bhains kharidne ke loan ke liye state schemes (jaise Bihar ki Samagra Gavya Vikas Yojana) ya bank dairy loan dekho.',
  },
  {
    q: 'NAIP kya hai — AI muft mein kaise hoti hai?',
    a: 'Nationwide Artificial Insemination Programme RGM ka sabse bada ground-level component hai — 600+ districts mein kisan ke darwaze par muft AI service. Trained technician (MAITRI) aata hai, quality semen se AI karta hai, tag lagata hai aur record Bharat Pashudhan database mein hota hai. Apne area ke MAITRI ya pashu chikitsalay se sampark karo — is service ke liye alag se application ki zaroorat nahi.',
  },
  {
    q: 'MAITRI kya hota hai?',
    a: 'Multi-Purpose AI Technician in Rural India — gaon ka trained AI technician. RGM ke under in technicians ko training aur equipment milta hai taaki AI service kisan ke darwaze tak pahunche. Agar aap khud berozgar yuva ho aur pashupalan background hai, toh MAITRI banna bhi ek rozgar ka rasta hai — apne district animal husbandry office se training ki jaankari lo.',
  },
  {
    q: 'Rashtriya Gokul Mission aur NLM mein kya fark hai?',
    a: 'Dono Department of Animal Husbandry & Dairying ki schemes hain, par focus alag hai. RGM sirf gay-bhains (bovine) ki nasl sudhaar ke liye hai — AI, IVF, semen, breed farms. NLM poultry, bakri-bhed, piggery aur chara units ke liye entrepreneurship subsidy deti hai (50%, ₹50 lakh tak). Dairy farm ka infrastructure banana ho toh AHIDF alag scheme hai. Apne project ke hisaab se sahi scheme chunna zaroori hai.',
  },
  {
    q: 'Gokul Mission mein application kahan aur kaise hoti hai?',
    a: 'Component par depend karta hai. Breed Multiplication Farm ke liye eoi.nddb.coop par online EOI (Expression of Interest) file hoti hai. IVF aur sex-sorted semen ke liye implementing agency/district pashupalan vibhag ke through kaam hota hai. NAIP ki muft AI ke liye koi application nahi — bas MAITRI ya nazdeeki veterinary centre se sampark karo.',
  },
  {
    q: 'Desi nasl hi kyon — jersey/HF kyon nahi?',
    a: 'RGM ka core maqsad hi desi nasl (Gir, Sahiwal, Tharparkar, Red Sindhi, Rathi jaise breeds) ka development hai. Desi nasl garmi jhelti hai, bimari kam lagti hai, aur A2 doodh ka rate market mein zyada milta hai. Scientific selection se desi gay ki doodh capacity bhi improve ho rahi hai. Cross-breed (HF/Jersey) alag economics hai — zyada doodh, par zyada dekh-bhaal aur climate risk.',
  },
];

export default function RashtriyaGokulMissionSubsidy({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Rashtriya Gokul Mission Subsidy</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Rashtriya Gokul Mission 2026: Desi Gay Palan Par Kya-Kya Milta Hai — IVF ₹5,000, Sex-Sorted Semen 50%, Breed Farm ₹2 Crore Tak
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
            src="/images/articles/loan-mandi-pashupalan/rashtriya-gokul-mission-subsidy/desi-gaay.webp"
            alt="Desi Gir gaay ke saath kisan — Rashtriya Gokul Mission desi naslon ko badhane ki scheme hai"
            width={1200}
            height={670}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <DB>
          <strong>TL;DR — kisan ke kaam ki 4 baatein:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Muft AI</strong> darwaze par (NAIP) — koi form nahi, MAITRI technician ya pashu chikitsalay se sampark.</li>
            <li><strong>IVF pregnancy par ₹5,000</strong> subsidy + HGM IVF bachhiya ke loan par <strong>3% interest subvention</strong> (March 2025 revision).</li>
            <li><strong>Sex-sorted semen par 50% tak subsidy</strong> — 90%+ chance bachhiya ka.</li>
            <li>Bada plan? <strong>Breed Multiplication Farm par 50%, ₹2 crore tak</strong> — apply eoi.nddb.coop par.</li>
            <li><strong>Abhi check karo:</strong> dahd.gov.in par scheme page aur apne district pashupalan office ka number.</li>
          </ul>
        </DB>

        <p className="text-sm text-[var(--color-text)] mb-6">
          <strong>Last Updated: 05/08/2026</strong>
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Rashtriya Gokul Mission (RGM) ka naam suna sabne hai, par zyada tar kisan yeh nahi jaante ki isme unke
          liye asal mein kya rakha hai. Kuch log samajhte hain ki yeh gay kharidne ki subsidy hai — nahi hai. Kuch
          samajhte hain ki yeh sirf sarkari farms ki scheme hai — yeh bhi adhoora sach hai. Hota yeh hai ki
          RGM ke teen components <strong>seedha kisan ki jeb tak</strong> pahunchte hain: IVF pregnancy par ₹5,000,
          sex-sorted semen par 50% subsidy, aur darwaze par muft artificial insemination.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aur agar aap bade level par sochte ho, toh Breed Multiplication Farm par 50% capital subsidy — ₹2 crore
          tak — bhi isi mission ka hissa hai. Aage poora naksha hai: kaunsa component kiske liye hai,
          paisa kaise aur kahan se milta hai, 2025 mein kya naya juda, aur woh galatfehmiyan jo logon ka time
          barbaad karti hain.
        </p>

        <SH>RGM Hai Kya — Ek Line Mein Samjho</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          December 2014 se chal rahi yeh scheme Ministry of Fisheries, Animal Husbandry &amp; Dairying ke under
          desi gay-bhains ki <strong>nasl sudhaarne</strong> ka national mission hai. Maqsad simple hai — Gir,
          Sahiwal, Tharparkar, Red Sindhi jaisi desi breeds ko bachana, unki doodh dene ki capacity badhana, aur
          behtar genetics har kisan ke pashu tak pahunchana. <strong>19/03/2025</strong> ko Cabinet ne iska revised outlay
          <strong> ₹3,400 crore</strong> (2021-26 cycle, ₹1,000 crore extra) approve kiya — matlab scheme ko aur paisa aur do naye
          components mile (
          <a href="https://ddnews.gov.in/en/cabinet-approves-implementation-of-revised-rashtriya-gokul-mission-with-enhanced-allocation-for-2024-25-and-2025-26/" target="_blank" rel="noopener noreferrer" className="underline font-bold">source: Cabinet decision, 19/03/2025 — DD News, Govt of India</a>).
        </p>
        <IB>
          Ek baat pehle hi saaf kar lo: RGM <strong>pashu kharidne ki scheme nahi hai</strong>. Yeh nasl sudhaar
          (breeding) ki scheme hai. Gay/bhains kharidne ke loan-subsidy ke liye state schemes dekho — jaise{' '}
          <Link href="/articles/bihar-pashupalan-loan-yojana" className="underline font-bold">Bihar Pashupalan
          Loan Yojana</Link> — ya bank ka dairy loan.
        </IB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/rashtriya-gokul-mission-subsidy/ai-technician.webp"
          alt="Gaon mein AI technician ka daura — darwaze par muft artificial insemination RGM ka hissa hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Kisan Ko Seedha Kya Milta Hai — 3 Cheezein</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Component</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kya milta hai</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kaise milta hai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Muft AI (NAIP)</td>
                <td className="border border-[var(--color-border)] p-3">Doorstep par free artificial insemination, quality semen ke saath</td>
                <td className="border border-[var(--color-border)] p-3">MAITRI technician / pashu chikitsalay se sampark — koi form nahi</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">IVF pregnancy</td>
                <td className="border border-[var(--color-border)] p-3">₹5,000 subsidy per confirmed IVF pregnancy (GoI share)</td>
                <td className="border border-[var(--color-border)] p-3">Authorised IVF lab / implementing agency ke through</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Sex-sorted semen</td>
                <td className="border border-[var(--color-border)] p-3">Semen cost ka 50% tak subsidy — 90%+ chance bachhiya hone ka</td>
                <td className="border border-[var(--color-border)] p-3">AI technician / district pashupalan vibhag ke through</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          In teeno ka common point samjho — kharcha AI/breeding par hota hai, jo dairy ke sabse sasta sudhaar ka
          rasta hai. Ek achhi nasl ki bachhiya ka market rate ₹60,000 se ₹1 lakh+ tak jaata hai. Wahi bachhiya
          agar aapki apni gay se sex-sorted semen ya IVF se paida ho jaye, toh kharcha kuch hazaar ka aur us par
          bhi subsidy. Yahi RGM ka asli economics hai.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/rashtriya-gokul-mission-subsidy/gaay-bachhiya.webp"
          alt="Nayi bachhiya ke saath desi gaay — sex-sorted semen se bachhiya hone ke chances 90% tak"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Sex-Sorted Semen — Bachhiya Ki Guarantee Jaisi Cheez</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Normal AI mein 50-50 hota hai — bachhda bhi ho sakta hai, bachhiya bhi. Dairy kisan ke liye bachhda
          matlab do saal khilao aur phir bhi income kuch nahi. Sex-sorted semen mein lab technology se sirf female
          chromosome wale sperm alag kiye jaate hain — result: <strong>90% se zyada probability bachhiya ki</strong>.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Iski dose normal semen se mehngi hoti hai — isliye RGM cost ka 50% tak subsidy deti hai. Kai states
          (UP, Maharashtra, Gujarat samet) apni taraf se aur bhi ghata dete hain, toh kisan ko dose ₹100-₹250
          jaise rate par mil jaati hai. Apne district ke pashupalan office se current rate pooch lo — yeh
          state-to-state alag hai.
        </p>
        <WB>
          Sex-sorted semen ki conception rate normal semen se thodi kam hoti hai — matlab kabhi-kabhi do-teen
          baar AI karani pad sakti hai. Yeh technology ki limitation hai, technician ki galti nahi. Budget mein
          1-2 repeat doses ka margin rakh kar chalo.
        </WB>

        <Image
          src="/images/articles/loan-mandi-pashupalan/rashtriya-gokul-mission-subsidy/pashu-jaanch.webp"
          alt="Pashu chikitsak gaay ki jaanch karte hue — IVF process veterinary team ke through hota hai"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>IVF Se ₹5,000 — Kaise Kaam Karta Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          IVF (In Vitro Fertilization) mein high genetic merit gay ke embryo lab mein taiyar karke aapki gay/bhains
          mein transfer kiye jaate hain. Aapki apni gay average nasl ki bhi ho, paida hone wali bachhiya top
          genetics ki hogi. Desh mein 22+ IVF labs is kaam ke liye ban chuki hain aur hazaaron high genetic merit
          calves paida ho chuke hain.
        </p>
        <StepList>
          <SI n={1}><strong>Nazdeeki IVF lab ya implementing agency dhundo</strong> — district pashupalan vibhag se list milti hai. Kai jagah NDDB/state livestock boards yeh service chalate hain.</SI>
          <SI n={2}><strong>Apne pashu ka health check karao</strong> — IVF ke liye gay/bhains ka reproductive system fit hona chahiye. Technician yahi pehle check karta hai.</SI>
          <SI n={3}><strong>Embryo transfer hota hai</strong> — trained team aakar procedure karti hai. Ek baar mein pregnancy confirm nahi hoti toh repeat ho sakta hai.</SI>
          <SI n={4}><strong>Pregnancy confirm hone par ₹5,000 subsidy</strong> — GoI share ke roop mein participating kisan ko milta hai. Record Bharat Pashudhan system mein hota hai.</SI>
        </StepList>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          2025 ke revision mein ek aur cheez judi — agar aap <strong>HGM IVF bachhiya kharidte ho</strong> (khud
          paida karne ke bajaye), toh us loan par <strong>3% interest subvention</strong> milta hai. Loan milk
          union, bank ya financial institution se ho sakta hai. Matlab sarkar chahti hai ki achhi genetics wale
          janwar kisano tak pahunchein — chahe paida karke, chahe kharid ke.
        </p>

        <Image
          src="/images/articles/loan-mandi-pashupalan/rashtriya-gokul-mission-subsidy/farm-nirman.webp"
          alt="Bade cattle shed ka nirman — Breed Multiplication Farm mein ₹2 crore tak ki subsidy"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Breed Multiplication Farm — ₹2 Crore Tak Ka Bada Game</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Yeh RGM ka entrepreneurship component hai — un logon ke liye jo dairy ko business ki tarah dekhte hain.
          Breed Multiplication Farm ek structured commercial farm hota hai (aam taur par 200 milch animals tak ka
          setup) jo scientific breeding se high genetic merit bachhiyaan paida karke kisano ko bechta hai.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Baat</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Breed Multiplication Farm (RGM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Subsidy</td>
                <td className="border border-[var(--color-border)] p-3">Capital cost ka 50% — maximum ₹2 crore</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Kaun apply kar sakta hai</td>
                <td className="border border-[var(--color-border)] p-3">Individual entrepreneur, FPO/FPC, SHG, JLG, Section 8 company</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Application</td>
                <td className="border border-[var(--color-border)] p-3">Online EOI — eoi.nddb.coop portal par</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Subsidy type</td>
                <td className="border border-[var(--color-border)] p-3">Back-ended — pehle project, phir verification ke baad release</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Baaki paisa</td>
                <td className="border border-[var(--color-border)] p-3">Apna margin + bank/NABARD loan — financing pehle arrange karni hoti hai</td>
              </tr>
            </tbody>
          </table>
        </div>
        <DB>
          Dhyan raho — yeh back-ended subsidy hai, advance nahi. Pehle project ki poori financing (apna paisa +
          loan) arrange karni hoti hai, subsidy verification ke <strong>baad</strong> release hoti hai. Jo bhi
          agent &ldquo;pehle ₹2 crore dilwa denge&rdquo; bole, woh jhooth bol raha hai. Application free hai aur
          seedha portal par hoti hai.
        </DB>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Bank financing ke liye collateral ki tension ho toh{' '}
          <Link href="/articles/dairy-farm-loan-without-collateral" className="underline font-bold">Dairy Farm
          Loan Bina Collateral</Link> wali guide dekho — CGTMSE aur AHIDF ke raste wahan detail mein hain. Working
          capital (chara, dawai, roz ka kharcha) ke liye{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC (Animal
          Husbandry)</Link> sabse sasta option rehta hai.
        </p>

        <SH>Apply Kaise Karein — Component-Wise Rasta</SH>
        <StepList>
          <SI n={1}><strong>Muft AI chahiye:</strong> koi application nahi. Apne gaon ke MAITRI technician ya nazdeeki pashu chikitsalay se sampark karo. AI hone par pashu ka ear tag aur record automatically ban jaata hai.</SI>
          <SI n={2}><strong>Sex-sorted semen chahiye:</strong> district pashupalan vibhag ya AI technician se pucho ki aapke state mein kis rate par available hai. Subsidy rate state-wise alag hota hai.</SI>
          <SI n={3}><strong>IVF karana hai:</strong> district animal husbandry office se authorised IVF lab/agency ki list lo, pashu ka health check karao, aur procedure book karo. Pregnancy confirm hone par ₹5,000 ka credit process hota hai.</SI>
          <SI n={4}><strong>Breed Multiplication Farm banana hai:</strong> eoi.nddb.coop par registration karke Expression of Interest file karo — project details, land documents, financing plan ke saath. Screening ke baad approval aur phir back-ended subsidy.</SI>
        </StepList>

        <GovLink
          href="https://dahd.gov.in/schemes/programmes/rashtriya-gokul-mission"
          label="Rashtriya Gokul Mission — Official Page"
          guide="Portal Kholo"
          portalName="dahd.gov.in"
        />

        <Image
          src="/images/articles/loan-mandi-pashupalan/rashtriya-gokul-mission-subsidy/doodh-record.webp"
          alt="Doodh ka record register mein likhta hua kisan — desi nasl ka economics samajhne ke liye records zaroori"
          width={1200}
          height={670}
          className="w-full h-auto rounded-xl my-5"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        <SH>Desi Nasl Ka Economics — Yeh Scheme Kyon Matter Karti Hai</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Number khud bolte hain — sarkari record ke mutabik 10 saal mein desh ka doodh production <strong>63.55%</strong> badha,
          per capita availability 307 gram/din (2013-14) se <strong>471 gram/din</strong> (2023-24) hui, aur productivity
          26.34% badhi. NAIP ke under <strong>8.39 crore pashu</strong> cover hue aur <strong>5.21 crore kisan</strong> muft AI
          ka fayda le chuke hain; 22 IVF labs se 2,541 high genetic merit calves paida ho chuke hain (Cabinet/PIB data,
          March 2025). Kisan ke level par iska matlab: wahi chara, wahi mehnat,
          par zyada doodh. Ek gay jo 4 litre deti thi, uski agli peedhi sahi genetics se 8-10 litre tak ja sakti
          hai.
        </p>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          Desi nasl ka ek aur pehlu hai jo bahar se nahi dikhta — <strong>climate resilience</strong>. Gir ya
          Sahiwal 45 degree ki garmi mein bhi doodh deti hai jahan HF/Jersey ka production gir jaata hai. Bimari
          kam lagti hai, ilaaj ka kharcha kam. Aur A2 doodh ka premium market alag se ban raha hai — sheher mein
          A2 ghee ₹2,000-3,000/kg tak bikta hai. Nasl sudhaar mein lagaya ek-ek rupaya lambe time mein sabse
          zyada return deta hai.
        </p>

        <SH>4 Galatfehmiyan Jo Time Barbaad Karti Hain</SH>
        <StepList>
          <SI n={1}><strong>&ldquo;RGM se gay kharidne ka paisa milega&rdquo;</strong> — nahi. Yeh breeding scheme hai. Pashu kharid ke liye state schemes ya bank loan dekho. Sirf HGM IVF bachhiya ke loan par 3% interest subvention RGM se milta hai.</SI>
          <SI n={2}><strong>&ldquo;Application kisi agent se karani padegi&rdquo;</strong> — NAIP ki AI ke liye koi application hi nahi hai, aur BMF ki EOI khud online hoti hai. Agent sirf paisa khaate hain.</SI>
          <SI n={3}><strong>&ldquo;Subsidy advance milegi&rdquo;</strong> — BMF ki subsidy back-ended hai. Financing pehle, subsidy baad mein. Yeh baat project plan mein pehle din se honi chahiye.</SI>
          <SI n={4}><strong>&ldquo;Sex-sorted semen se 100% bachhiya hogi&rdquo;</strong> — 90%+ hai, 100% nahi. Aur conception mein repeat lag sakta hai. Realistic expectation ke saath jao, tabhi faida dikhega.</SI>
        </StepList>

        <SH>FAQ — Aksar Puche Jaane Wale Sawal</SH>
        <FAQBlock faqs={FAQS_DATA} />

        <SH>Sources</SH>
        <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
          <li>
            Rashtriya Gokul Mission — official page, Dept of Animal Husbandry & Dairying.{' '}
            <a href="https://dahd.gov.in/schemes/programmes/rashtriya-gokul-mission" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">dahd.gov.in</a>
          </li>
          <li>
            Cabinet decision, 19/03/2025 — Revised Rashtriya Gokul Mission, total outlay ₹3,400 crore (official Govt of India release).{' '}
            <a href="https://ddnews.gov.in/en/cabinet-approves-implementation-of-revised-rashtriya-gokul-mission-with-enhanced-allocation-for-2024-25-and-2025-26/" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">ddnews.gov.in — Cabinet approves implementation of revised Rashtriya Gokul Mission</a>
          </li>
          <li>
            NDDB — Breed Multiplication Farm scheme: EOI document, qualification criteria aur subsidy details (RGM ke tahat).{' '}
            <a href="https://www.nddb.coop/information/establishment-of-breed-multiplication-farms" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">nddb.coop — Establishment of Breed Multiplication Farms</a>
          </li>
          <li>
            NDDB — Breed Multiplication Farm online EOI submission portal (application yahin jama hoti hai).{' '}
            <a href="https://eoi.nddb.coop" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">eoi.nddb.coop — EOI submission portal</a>
          </li>
        </ul>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} bioKey="RashtriyaGokulMissionSubsidy" />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Article Hub' },
          { href: '/articles/category/pashupalan', l: 'Dudh-Dairy-Pashu Guides' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
