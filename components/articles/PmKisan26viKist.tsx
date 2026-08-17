import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-08-18T09:30:00+05:30';
const MODIFIED = '2026-08-18T09:30:00+05:30';

const RELATED = [
  { slug: 'PmKisan25viKist2027', title: '25vi Kist Kab Aayegi' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Ka Matlab' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Mein Naam Check Karo' },
];

const FAQS_DATA = [
  {
    q: '26vi kist kab aayegi 2026-27 mein?',
    a: 'Abhi koi official date nahi hai — 24vi aur 25vi kist ka cycle pehle poora hoga. Scheme har 4 mahine mein kist deti hai, is hisaab se 26vi kist ka number 2027 ke beech ya doosre half mein aane ka pattern banta hai. Pakki tareekh sirf pmkisan.gov.in ya PIB ki press release se hi milegi — wahi aate hi ye page update ho jayega.',
  },
  {
    q: '26vi kist mein kitna paisa milega?',
    a: '₹2,000 — jab tak sarkar official taur par amount nahi badhati. 2019 se har kist ₹2,000 hi rahi hai. Badhne ki afwah har budget se pehle udti hai, aaj tak sach nahi hui. Agar kabhi official announcement aayi to ye page turant update hoga.',
  },
  {
    q: '25vi kist nahi mili to 26vi milegi kya?',
    a: 'Pehle rukne ki wajah pata karo — zyadatar mamlo mein eKYC pending, bank Aadhaar seeding ya land record verification hi atka hota hai. Wajah theek kiye bina agli kist bhi wahin atkegi. Theek karne ke baad ruki hui raqam alag se credit ho jati hai, agar aap eligible ho.',
  },
  {
    q: '26vi kist ke liye kya karna padega?',
    a: 'Kuch naya nahi — agar aap active beneficiary ho, eKYC ho chuki hai, bank NPCI se linked hai aur land seeding complete hai, to kist apne aap aayegi. Naye kisan ko registration ke baad verification poora hone ka wait karna hota hai.',
  },
  {
    q: 'Status kahan check karein?',
    a: 'Sirf pmkisan.gov.in ke Beneficiary Status page par — Aadhaar ya registration number daal kar. Koi bhi website ya app jo status ke liye paise mange, wo fraud hai. Sarkari portal bilkul free hai.',
  },
];

export default function PmKisan26viKist({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">26vi Kist Guide</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            26vi Kist Kab Aayegi? Date, Beneficiary List Aur Status — Seedha Hisaab
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          26vi kist ka intezaar shuru hone se pehle hi net par &quot;confirm date&quot; wali khabrein ghumne lagengi — jaise har kist se pehle hoti hain. Isliye ye page abhi se bana diya hai, taki jab bhi koi official update aaye, aapko ek hi jagah sahi jankari mile. Yahan sirf wahi likha jayega jo pmkisan.gov.in ya PIB se confirm ho.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Pehli baat jo samajhni zaroori hai: kist number ka apna order hai. Abhi <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline font-medium">24vi kist</Link> ka intezaar chal raha hai, uske baad <Link href="/articles/PmKisan25viKist2027" className="text-[var(--color-primary)] underline font-medium">25vi kist</Link> aayegi, aur tab 26vi ka number lagega. Jo bhi website aaj 26vi ki &quot;pakki tareekh&quot; bata rahi hai, wo seedha jhooth bol rahi hai.
        </p>

        <WB>
          <strong>Is page ka wada:</strong> jo pakka hai wo pakka likha hai, jo andaza hai wo andaza. Official announcement aate hi date, list aur status — teeno yahan update honge.
        </WB>

        <section className="mb-8 mt-8">
          <SH>26vi Kist Ka Number Kab Lagega — Pattern Se Samjho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Scheme ka rule saaf hai — saal mein teen kist, har chaar mahine mein ek: April–July, August–November, December–March. Ab ginti karo: 24vi aur 25vi ke do cycle poore hone ke baad 26vi aayegi. Har cycle 3-4 mahine ka hota hai, isliye 26vi ka realistic window 2027 ke beech se aage banta hai. Exact din? Wo release se ek-do hafte pehle hi pata chalta hai, kabhi mahino pehle nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sarkar aksar kist release PM ke kisi event ke saath karti hai — pichhli kai kists aise hi aayi hain. Isliye news mein jab &quot;PM Kisan Samman Sammelan&quot; jaisa koi event dikhne lage, tab samajh jao ki release paas hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Kitna Milega — ₹2,000 Ya Zyada?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            ₹2,000. Wahi jo 2019 se mil raha hai. Har budget se pehle ₹2,500 ya ₹3,000 hone ki afwah udti hai — aaj tak ek baar bhi sach nahi hui. Jab tak Finance Ministry ya PIB se official announcement na aaye, planning ₹2,000 ke hisaab se hi karo. Agar kabhi sach mein badha, to ye line usi din badal di jayegi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Intezaar Mat Karo — Ye 4 Kaam Abhi Kar Lo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            26vi kist door hai, lekin uska paisa aapke account tak pahunchega ya nahi — ye aaj ki taiyari par depend karta hai. Har kist mein lakhs kisano ka paisa inhi 4 wajahon se atakta hai:
          </p>
          <StepList>
            <SI n={1}><strong>eKYC check karo:</strong> pmkisan.gov.in par status &quot;YES&quot; hona chahiye. Nahi hai to OTP se do minute mein ho jati hai — pura tarika <Link href="/articles/PmKisanEkycOnline2026" className="text-[var(--color-primary)] underline">eKYC guide</Link> mein hai.</SI>
            <SI n={2}><strong>NPCI Aadhaar seeding:</strong> bank account Aadhaar se DBT ke liye linked hona chahiye. Passbook par &quot;Aadhaar seeded&quot; likha hona alag cheez hai — NPCI mapping alag. Bank ya India Post Payments Bank se confirm karo.</SI>
            <SI n={3}><strong>Land seeding:</strong> zameen ka record scheme se juda hai ya nahi — status page par hi dikhta hai. &quot;No&quot; dikhe to apne patwari ya krishi vibhag se milo.</SI>
            <SI n={4}><strong>Beneficiary list mein naam:</strong> <Link href="/articles/PmKisanBeneficiaryList2026" className="text-[var(--color-primary)] underline">village wise list</Link> mein apna naam dekho. Naam hi nahi hai to pehle wo problem solve karo — 26vi kya, koi bhi kist nahi aayegi.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Beneficiary List Aur Status Check — Sahi Tarika</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Status dekhne ka ek hi sahi raasta hai: <strong>pmkisan.gov.in → Know Your Status</strong>. Registration number ya Aadhaar daalo, OTP verify karo — eKYC, land seeding, bank linking aur har kist ka payment status ek saath dikh jata hai. Release ke time &quot;FTO is Generated&quot; dikhne lage to samjho paisa approve ho gaya — iska pura matlab <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline">FTO guide</Link> mein padho.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Roz-roz check karne se kuch jaldi nahi aata. Jab news mein release ki baat chalne lage, tab hafte mein ek baar dekh lena kaafi hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Fake News Ka 30-Second Test</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            &quot;26vi kist date confirm!&quot; wali koi bhi khabar mile — YouTube, WhatsApp, website — to 30 second nikal kar do jagah dekho: <strong>pmkisan.gov.in</strong> aur <strong>PIB press release</strong>. In dono mein nahi hai, matlab khabar jhooti hai. Itna simple.
          </p>
          <DB>
            <strong>Dhoke se bacho:</strong> Status check ya &quot;jaldi payment&quot; ke naam par paise mangne wala har aadmi aur har app fraud hai. Sarkari portal bilkul free hai, aur paise dekar kist jaldi aane ka koi system exist nahi karta.
          </DB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            26vi Kist Ke Common Sawaal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="26vi Kist 2027 — FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Apna Status Yahan Check Karo"
          guide="Status Check Complete Guide"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Ab Tak Ka Total Nikaalo"
          desc="Ab tak kitni kist mili, kitna paisa aaya — sab calculate karo"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisan26viKist" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan25viKist2027', l: '25vi Kist Guide' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
        ]} />
        <Disclaimer k="PmKisan26viKist" />
      </div>
    </>
  );
}
