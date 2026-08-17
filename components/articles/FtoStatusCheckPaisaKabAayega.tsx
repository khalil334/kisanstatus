import Link from 'next/link';
import { SI, StepList, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-08-18T11:00:00+05:30';
const MODIFIED = '2026-08-18T11:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Ka Full Form & Matlab' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — 7 Fixes' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Mein Naam Check' },
];

const FAQS_DATA = [
  {
    q: 'FTO is Generated ke baad paisa kab aata hai?',
    a: 'Koi official timeline nahi hai — lekin zyadatar kisano ko FTO banne ke baad kuch hi dino mein DBT se credit mil jata hai. Har bank apni internal processing apni raftar se karta hai, isliye ek hi gaon mein kisi ko pehle aur kisi ko baad mein aana normal hai. Practical rule: 15 din tak intezaar karo, uske baad hi kuch karne ki zaroorat hai.',
  },
  {
    q: 'FTO will be generated ka matlab kya hai?',
    a: 'Matlab aapka record verify ho chuka hai aur payment order banne ki queue mein hai — abhi bana nahi hai. Ye positive status hai: eKYC, land seeding aur bank linking sab clear hai. Bas batch process hone ka wait hai, aam taur par kuch din se kuch hafte.',
  },
  {
    q: 'FTO generate ho gaya lekin 15 din baad bhi paisa nahi aaya, ab kya karein?',
    a: 'Pehle bank jakar do cheezein verify karao: account active hai aur NPCI Aadhaar seeding hui hai. Phir pmkisan.gov.in par payment status dekho — "Payment Failed" dikhe to wajah wahi likhi hogi. Fail hui payment wajah theek karne ke baad agli batch mein dobara process hoti hai.',
  },
  {
    q: 'Kya FTO har kisan ka alag banta hai?',
    a: 'FTO batch mein banta hai — state/district ke verified beneficiaries ka ek saath. Isliye aapke padosi ka FTO ban gaya aur aapka nahi, to iska matlab sirf itna hai ki aap alag batch mein ho ya aapke record mein koi verification pending hai.',
  },
  {
    q: 'FTO status kahan check karein?',
    a: 'Sirf pmkisan.gov.in ke Know Your Status page par — registration number ya Aadhaar se OTP verify karke. Koi bhi app ya website jo FTO status ke naam par paise mange, wo fraud hai.',
  },
];

export default function FtoStatusCheckPaisaKabAayega({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">FTO Status Check</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            FTO Status Check 2026: FTO Generated Ke Baad Paisa Kab Aata Hai?
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
          <strong>Seedha jawab pehle:</strong> FTO (Fund Transfer Order) generate hone ke baad paisa aam taur par <strong>kuch hi dino mein</strong> account mein aa jata hai — lekin iska koi official sarkari timeline nahi hai. &quot;SBI mein 8 din, Post Office mein 25 din&quot; jaise pakke numbers jo internet par milte hain, unka koi sarkari source nahi hota. Is page par sirf wahi hai jo pakka hai — aur ek practical 15-din rule jo kaam karta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Agar aap ye samajhna chahte ho ki FTO hota kya hai aur status page ki har line ka matlab kya hai, to wo alag guide mein detail se likha hai: <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline font-medium">FTO Ka Full Form &amp; FTO Generated Ka Matlab</Link>. Ye page uska agla step hai — order ban gaya, ab paisa kab aur na aaye to kya karna hai.
        </p>

        <WB>
          <strong>15-din rule:</strong> FTO Generated dikhne ke baad 15 din tak kuch mat karo — process normal chal raha hai. 15 din baad bhi credit nahi aaya, tabhi neeche wala checklist shuru karo.
        </WB>

        <section className="mb-8 mt-8">
          <SH>&quot;FTO Will Be Generated&quot; vs &quot;FTO Is Generated&quot; — Fark Samjho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Status page par ye do lines sabse zyada confuse karti hain:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status Line</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Aapko Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">FTO will be generated</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Record verify ho gaya, order banne ki queue mein hai</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">Kuch nahi — wait karo</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">FTO is generated</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Payment order ban gaya, paisa transfer pipeline mein hai</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">15 din tak wait karo</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Payment Success / Credited</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Paisa account mein pahunch gaya</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">Passbook/SMS check karo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Dono hi statuses ka matlab hai ki aapki taraf se sab theek hai. Ghabrane wali line sirf ek hai — &quot;Payment Failed&quot; — aur uska bhi ilaaj hai, neeche padho.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paisa Aane Ka Asli Process — DBT Kaise Kaam Karta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            FTO banne ke baad paisa DBT (Direct Benefit Transfer) se aapke <strong>Aadhaar-linked bank account</strong> mein seedha credit hota hai — NPCI mapping ke through. Isliye passbook par &quot;Aadhaar seeded&quot; likha hona kaafi nahi; NPCI mapping alag cheez hai aur wahi decide karti hai ki paisa kis account mein jayega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Har bank apni internal batch processing apne schedule par karta hai. Isliye release wale din kisi ko turant credit milta hai aur kisi ko hafta lag jata hai — dono normal hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>15 Din Baad Bhi Paisa Nahi Aaya — Ye 4 Kaam Karo</SH>
          <StepList>
            <SI n={1}><strong>Payment status dekho:</strong> pmkisan.gov.in → Know Your Status. &quot;Payment Failed&quot; likha hai to wajah bhi wahi dikhegi — <Link href="/articles/PmKisanPaymentFailedFix2026" className="text-[var(--color-primary)] underline">7 common wajah aur fix yahan</Link>.</SI>
            <SI n={2}><strong>Bank mein NPCI seeding verify karao:</strong> branch jakar poochho ki DBT ke liye Aadhaar mapping active hai ya nahi. Ye sabse badi wajah hai atki payment ki.</SI>
            <SI n={3}><strong>Account active hai ya nahi:</strong> lambe time se use na hua account inoperative ho jata hai — RBI rule ke hisaab se 2 saal bina transaction par. Branch se KYC update + reactivation karao (free hai).</SI>
            <SI n={4}><strong>Naam ki spelling match karo:</strong> PM Kisan registration aur bank record mein naam alag hai to payment reject hoti hai. Dono jagah ek jaisa karwao.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Wajah theek hone ke baad fail hui payment agli batch mein dobara process hoti hai — alag se kuch apply nahi karna padta. 30 din se zyada ho gaye to escalation ka poora rasta <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-[var(--color-primary)] underline">FTO guide ke escalation section</Link> mein hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Fraud Se Bacho</SH>
          <DB>
            <strong>Yaad rakho:</strong> FTO status check bilkul free hai — sirf pmkisan.gov.in par. Koi app, website ya aadmi jo &quot;jaldi payment&quot; ya status ke naam par paise mange, wo 100% fraud hai. Paisa dekar FTO jaldi banne ka koi system exist nahi karta.
          </DB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            FTO Status Ke Common Sawaal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="FTO Status Check 2026 — FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Apna FTO Status Yahan Check Karo"
          guide="FTO Ka Matlab — Complete Guide"
          guideHref="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="FtoStatusCheckPaisaKabAayega" />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: 'FTO Ka Matlab' },
          { href: '/articles/PmKisanPaymentFailedFix2026', l: 'Payment Failed Fix' },
          { href: '/articles/PmKisan26viKist', l: '26vi Kist Guide' },
        ]} />
        <Disclaimer k="FtoStatusCheckPaisaKabAayega" />
      </div>
    </>
  );
}
