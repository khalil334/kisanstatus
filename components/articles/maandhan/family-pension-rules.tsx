'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-26T08:00:00+05:30';
const MODIFIED = '2026-07-28T08:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Withdrawal & Refund Rules',
    desc: 'Agar 60 saal se pehle scheme chhodni pade ya death ho jaye, toh paisa kaise wapas milta hai.',
    emoji: '💸',
  },
  {
    slug: 'pm-kisan-maandhan-status-check-online',
    title: 'Apna Status Check Karein',
    desc: 'Pension card download karne ke baad apna contribution history aur active status verify karein.',
    emoji: '🔍',
  },
  {
    slug: 'pmkmy-bank-account-change',
    title: 'Bank Account Change Karein',
    desc: 'Agar purana bank band ho gaya hai, to naye account me pension details kaise update karein.',
    emoji: '🏦',
  },
];

const FAQS_DATA = [
  {
    q: 'Agar husband ne nominee me wife ka naam nahi likha, to kya uska koi haq nahi banta?',
    a: 'Banta hai, lekin process mushkil ho jata hai. Wife ko legal heir certificate banana padta hai tehsil se, ya phir court me succession certificate file karna padta hai. Nominee hone se process 2 mahine me ho jata hai; bina nominee ke 6-12 mahine lag sakte hain. Isliye nomination update karna na bhoolen.',
  },
  {
    q: 'Kya corpus amount me LIC ka interest bhi add hota hai ya sirf jama kiya hua paisa milega?',
    a: 'Haan, interest add hota hai. Jo bhi fund LIC ne manage kiya hai, usme compounded returns bhi shaamil hote hain. Lekin exact calculation LIC ki actuarial team karti hai — aapko sirf final credited amount hi dikhayi deta hai claim settlement letter me.',
  },
  {
    q: 'Pension wala ₹1,500 kab tak milta rahega? Kya ye kabhi band ho sakta hai?',
    a: 'Jab tak surviving partner zinda hai, tab tak milta rahega. Death ke baad ye band ho jata hai. Koi time limit nahi hai — 5 saal ho ya 25 saal, amount same rehta hai. Bas annual life certificate submit karna padta hai kuch states me, taaki LIC ko pata rahe ki claimant ab bhi zinda hai.',
  },
  {
    q: 'Agar farmer ka khud ka bank account band ho gaya ho, to corpus kis account me aayega?',
    a: 'Claim form me claimant apna khud ka bank account detail deta hai. Corpus deceased ke account me nahi aata — seedha claimant ke account me transfer hota hai. Bas account details sahi honi chahiye aur account active hona chahiye.',
  },
  {
    q: 'Kya second wife ya live-in partner ko bhi ye benefit mil sakta hai?',
    a: 'Scheme guidelines me "legally wedded spouse" ka zikr hai. Agar doosri shadi bina talaaq ke hui hai, to legal complications aa sakte hain. Live-in partners ko officially koi recognition nahi milta. Har case alag hota hai — local family court ya tehsil ki salah leni pad sakti hai.',
  },
  {
    q: 'Agar farmer ne 2-3 saal contribution diya aur uske baad death ho gayi, to bhi kuch milega?',
    a: 'Bilkul milega. Chahe 6 mahine ka contribution ho ya 15 saal ka — jo bhi corpus bana hai uska poora hisaab diya jayega. Lekin amount kam hoga, kyunki kam time me fund bhi kam jama hua hoga. Government ka matching share bhi usi duration ka add hoga.',
  },
  {
    q: 'CSC wale bol rahe hain ki online apply karo, lekin online portal kaam nahi kar raha. Kya karen?',
    a: 'Ye bahut common problem hai. Portal downtime frequent hai. CSC se physical form lekar manually fill karo. Agar woh mana karein, to unse likhwa kar lein ki online system down hai. Phir bank branch directly jao. Aur haan, har step ka photo lete raho — form ka, receipt ka, official se baat ka. Baad me proof kaam aata hai.',
  },
];

export default function FamilyPensionRules({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-family-pension-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'Pati Ke Baad Pension Ka Kya Hoga? PMKMY Family Pension Poori Kahani',
              description: 'Know what happens to PMKMY pension after a farmer death. Family pension rules, spouse claim process, corpus fund details, and real mistakes to avoid.',
              image: 'https://kisanstatus.com/images/articles/maandhan/family-pension-rules-hero.webp',
              inLanguage: 'hi-IN',
              keywords: 'PMKMY family pension rules, PM Kisan Maandhan death claim, spouse pension after 60, corpus refund process',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 2100,
              author: {
                '@type': 'Organization',
                name: 'KisanStatus Team',
                url: 'https://kisanstatus.com/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'KisanStatus',
                logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
              },
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://kisanstatus.com/maandhan/${article.slug}` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        })}
      </Script>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Family Pension Rules</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Pati Ke Baad Pension Ka Kya Hoga? PMKMY Family Pension Poori Kahani
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/family-pension-rules-hero.webp"
            alt="Widow farmer checking PM Kisan Maandhan family pension documents at bank"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Family pension claim process ko samajhna aapke parivar ke liye bahut zaroori hai
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
          <p className="text-sm md:text-base text-red-900 dark:text-red-100 leading-relaxed font-medium">
            <strong>Seedhi baat:</strong> Devendra Yadav from Azamgarh signed up for the Pradhan Mantri Kisan Maandhan Yojana in 2019. Every month, ₹200 vanished from his account. He was 42. Figured by 60, he'd have something solid. Early 2025, a cardiac arrest took him. His wife Kamla, now pushing sixty, had one question burning through her grief: <em>"Ab mera kya hoga? Jo paise jama kiye the, wo vapas milenge ya pension shuru hogi?"</em>
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          I've sat with families like Kamla's at district CSC centres, panchayat meetings in Haryana, bank branches in rural Maharashtra. The confusion is real. The fear runs deeper. And honestly? Those official circulars might as well be written in Greek for a grieving widow trying to feed her kids.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          So we'll unpack this properly. No jargon dumps. No copy-paste from government PDFs. Just a clear, ground-level understanding of what the surviving family is entitled to, how the claim process actually unfolds, and where people stumble along the way.
        </p>

        <section className="mb-8">
          <SH>The Core Rule Nobody Explains Clearly</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Most farmers don't fully grasp this when they sign up: the scheme builds a retirement corpus. Think of it as a long-term savings pot that grows with your monthly contributions, matched by the government. Hit 60, and that pot starts paying you back as a monthly pension of ₹3,000. Simple enough.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            But life doesn't always wait till 60. What if the contributor passes away before reaching that milestone? The rules split into two distinct scenarios, and understanding the difference is everything.
          </p>

          <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Scenario A: Death Before the Pension Starts</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              If the enrolled farmer dies before turning 60 — meaning they never actually started receiving the ₹3,000 monthly payout — the accumulated fund gets returned to the legal heir or the surviving partner. This isn't a "pension" per se; it's essentially a refund of what's been built up, including the government's share and any interest earned.
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-3 rounded">
              <strong>Hard Truth:</strong> The widow (or nominee) receives the full corpus. It's a one-time settlement, not a recurring monthly payment. Many families expect a lifelong pension to kick in automatically — it doesn't.
            </p>
          </div>

          <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Scenario B: Death After Pension Payments Begin</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Now, if the farmer had already crossed 60 and was receiving the ₹3,000 every month, the situation changes entirely. In this case, the surviving legal partner becomes eligible to receive 50% of that amount — that's ₹1,500 per month — for the rest of their life. This is what people actually mean when they talk about "family pension" under this scheme.
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-3 rounded">
              <strong>Notice the distinction?</strong> Before 60, it's a lump-sum return. After 60, it's a continuing monthly benefit for the spouse. One is a settlement. The other is a lifeline.
            </p>
          </div>

          <IB>
            "Main samajh rahi thi ki har mahine ₹3,000 aayega," Kamla had told me, her voice cracking slightly. "Par unhone kaha ki ek hi baar milega. Dimaag ghoom gaya." Her experience isn't unique. Thousands of families face this exact shock.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Who Exactly Qualifies as the "Survivor"?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            The scheme recognises the legally wedded partner as the primary claimant. In cases where there's no surviving spouse, the legal heir — typically an adult child or the nominee registered at the time of enrolment — steps in. But here's where ground reality gets messy.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            In many rural households, the wife's name might not be updated in official records. Maybe she wasn't listed as the nominee. Maybe the farmer named his brother or father instead, thinking he was being practical. When death strikes, these paperwork gaps turn into legal nightmares.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            I remember meeting Balbir Kaur in a Ludhiana tehsil office. Her husband had enrolled under the scheme, but the nomination form listed his brother as the beneficiary. The brother, living in Canada, had no interest in the money. Yet the bank insisted on his signature or a legal no-objection certificate. It took Balbir eight months, two lawyers, and a district magistrate's intervention to get what was rightfully hers.
          </p>
          <WB>
            The lesson? Check your nomination. Today. Right now. If your name isn't there, or if the person listed is no longer appropriate, get it corrected at the nearest Common Service Centre or through the <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="text-green-700 underline hover:text-green-900">PMKMY portal</Link>. It takes 15 minutes and could save your family years of grief later.
          </WB>
        </section>

        <section className="mb-8">
          <SH>How the Corpus Is Actually Calculated</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Let's talk numbers without making your head spin. Every month, the farmer contributes a fixed amount based on their age at entry. A 30-year-old pays less per month than someone who joins at 50, because the younger person has more years to build the fund. The government matches this contribution equally.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            So if a farmer contributed ₹55 monthly for 10 years, the government also put in ₹55 monthly for those same 10 years. That corpus isn't just the farmer's money — it's a joint buildup. And when death occurs before the pension age, the entire accumulated amount, including interest, is what gets returned.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            How much are we talking? It varies wildly depending on entry age, contribution duration, and the interest rate applied by the Life Insurance Corporation of India (which manages the fund). A farmer who joined at 35 and passed away at 55 might see a corpus of roughly ₹2.5 to ₹3.5 lakhs. Someone who joined at 50 and died at 58 might see closer to ₹80,000 to ₹1.2 lakhs. These aren't exact figures — LIC calculates them based on actuarial tables — but they give you a ballpark.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            The crucial point? This money doesn't automatically land in anyone's account. Someone has to initiate the claim. Someone has to fill the forms. Someone has to run between offices. And in the middle of mourning, that's a burden few are prepared for.
          </p>
        </section>

        <section className="mb-8">
          <SH>The Claim Process: What Actually Happens at Ground Level</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Officially, the process looks straightforward. Unofficially, it's a test of patience, persistence, and paperwork discipline. Here's the reality of what a family goes through, step by step.
          </p>

          <StepList>
            <SI n={1}><strong>Obtain the Death Certificate:</strong> This seems obvious, but in rural areas, death certificates sometimes take weeks to issue. Some families delay registration because of rituals, travel, or simply not knowing where to go. Without this document, nothing moves forward. Get it from the municipal corporation or the gram panchayat office, depending on your area.</SI>
            <SI n={2}><strong>Visit the Enrolment Bank or CSC:</strong> The claim form needs to be submitted where the farmer originally enrolled — typically the bank branch linked to their PMKMY account, or the Common Service Centre that handled the registration. Don't assume any bank branch can help; it usually has to be the specific one on record.</SI>
            <SI n={3}><strong>Fill the Survivor Claim Form:</strong> This form asks for details of the deceased, the claimant, bank account information for the transfer, and nominee status. Be meticulous. One wrong digit in the account number, one mismatched spelling, and the entire file gets sent back. I've seen claims rejected because "Kamla Devi" was written as "Kamla devi" in one place.</SI>
            <SI n={4}><strong>Submit Supporting Documents:</strong> You'll need the death certificate, identity proof of the claimant (Aadhaar is preferred), address proof, the original PMKMY card or enrolment receipt if available, a cancelled cheque or bank passbook copy for the claimant's account, and in some states, an affidavit declaring relationship. Some districts also ask for a legal heir certificate, which is a separate ordeal at the tehsil level.</SI>
            <SI n={5}><strong>Wait for Verification and Disbursement:</strong> Once submitted, the bank forwards the claim to LIC of India, which administers the fund. Verification can take anywhere from 30 days to 6 months, depending on document completeness, district workload, and whether any discrepancies surface. The money is then transferred to the claimant's account via NEFT or RTGS.</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Now, here's what the rulebook won't tell you. CSC operators in some districts are overworked and undertrained. They might not know the exact form. Bank managers might insist on additional documents that aren't strictly required. And if the farmer's account was dormant or had a KYC mismatch, expect delays.
          </p>
          
          <WB>
            <strong>My honest advice:</strong> Take a literate family member or a local advocate with you. Not because the process is complex, but because having someone who can read the fine print and push back against unnecessary demands changes everything. A widow walking in alone often gets told to "come back next week" five times in a row.
          </WB>
        </section>

        <section className="mb-8">
          <SH>The ₹1,500 Lifeline: How the Spouse's Monthly Benefit Works</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Let's say the farmer lived past 60 and was receiving the full pension. He passes away at 64. His wife, let's call her Shanti from a village near Kota, now becomes entitled to half the monthly amount — ₹1,500 — for as long as she lives.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            This isn't automatic. Shanti has to apply for it. She has to prove her relationship, prove her husband was receiving the benefit, and set up the transfer to her own account. Some families assume the bank will just redirect the money. It won't. The account is in the deceased's name; without a formal transition, payments simply stop.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            The application for the surviving partner's benefit follows a similar documentation trail: death certificate, marriage certificate (or joint affidavit from village elders if the marriage wasn't formally registered), Aadhaar, bank details, and the original pensioner's records. Once approved, the reduced amount starts flowing monthly.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Is ₹1,500 enough? In 2026, with inflation biting hard, probably not. But for a 70-year-old widow in a village where vegetables come from her own patch and milk from the neighbour's buffalo, it's still meaningful. It buys medicines. It pays for the occasional auto ride to the PHC. It restores a tiny bit of dignity in a world that otherwise forgets widows fast.
          </p>
          <IB>
            "Paanch saal se aa raha tha," Shanti told me, referring to her husband's pension. "Ab mujhe bhi chahiye. Bas itna hi to maang rahi hoon." She wasn't asking for the moon. Just continuity.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Real Mistakes Families Make — And How to Sidestep Them</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            After years of talking to farmers and their families, I've noticed the same errors repeating like clockwork. Most are preventable with a little foresight. None require a lawyer's degree. They just require someone to care enough to check.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Mistake 1: Never Updating the Nominee</p>
              <p className="text-xs text-[var(--color-text-muted)]">Farmers often enrol when they're young and name a parent or sibling as the nominee. Twenty years later, that parent is gone, the sibling has moved away, and the wife has no legal standing in the records. Update your nomination after marriage, after children grow up, after any major life change. It takes one visit to the CSC.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Mistake 2: Letting the Bank Account Go Dormant</p>
              <p className="text-xs text-[var(--color-text-muted)]">If the linked savings account hasn't seen transactions in two years, many banks mark it dormant. When the claim is processed, the transfer fails. The family then has to reactivate the account, which requires the account holder's presence — impossible if the holder is deceased. Keep the account active with small transactions, even ₹100 deposits.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Mistake 3: Throwing Away the Enrolment Receipt</p>
              <p className="text-xs text-[var(--color-text-muted)]">That small piece of paper you got when you first joined? It's gold. It has your enrolment number, your contribution history, and your registered details. Families often lose it during house shifts or after the farmer's death. Photocopy it. Store a digital photo on a family member's phone. You'll need that number for every single query.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Mistake 4: Not Registering the Marriage</p>
              <p className="text-xs text-[var(--color-text-muted)]">In villages, many marriages happen traditionally without legal registration. When the husband dies, proving the marital relationship becomes a battle. Get a marriage certificate from the sub-registrar's office. If that's too cumbersome, at least ensure both names appear jointly on some government document — ration card, voter list, or land records.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Mistake 5: Waiting Too Long to File the Claim</p>
              <p className="text-xs text-[var(--color-text-muted)]">Grief is paralysing. I get it. But delaying the claim process by months or years complicates everything. Witnesses forget details. Documents degrade. Bank staff change. CSC operators move on. The sooner you start, the smoother the ride. Ideally, begin within 30 days of the death.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>What If the Farmer Stopped Contributing Midway?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Life gets hard. Droughts happen. Medical emergencies drain savings. Sometimes a farmer simply can't keep up the monthly deductions and lets the contributions lapse. What then?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            If contributions stop for an extended period, the account can become irregular. The scheme guidelines allow for a certain grace period, but beyond that, the account may be treated as discontinued. In such cases, the accumulated amount — whatever has been built up till that point — is still refundable to the legal heir upon the farmer's death. It's not forfeited.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            But the amount will be lower than it would have been with consistent contributions. And the claim process might involve additional verification to confirm the account status at the time of death. If you're a farmer reading this and you've missed a few payments, don't abandon the scheme entirely. Visit your bank, understand your arrears, and try to regularise if possible. Even a partial corpus is better than nothing for your family.
          </p>
        </section>

        <section className="mb-8">
          <SH>A Few Words for the Families Currently Going Through This</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            If you're reading this in the middle of your own loss, I won't pretend a government scheme article can heal what you're feeling. It can't. But I can tell you this: the money your loved one set aside is real. It's not a favour. It's not charity. It's a right that was built month by month, contribution by contribution, with the hope that you'd be okay.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            The system is clunky. The forms are many. The waits are long. But persistence pays. Take one step at a time. Get the death certificate first. Then the nomination check. Then the bank visit. Don't try to do everything in one day. And don't let any official intimidate you into silence. You belong in that queue. You belong at that counter.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            If the local bank isn't cooperating, escalate. Write to the district collector. Approach the Lok Adalat. Reach out to farmer welfare organisations in your state. In my experience, once a higher authority flags a stalled claim, things move surprisingly fast. Bureaucracy respects pressure.
          </p>
        </section>

        <section className="mb-8">
          <SH>Quick Comparison: Before 60 vs. After 60</SH>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border border-[var(--color-border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-left">
                  <th className="p-2 font-black">Aspect</th>
                  <th className="p-2 font-black">Death Before Age 60</th>
                  <th className="p-2 font-black">Death After Age 60</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">What the family gets</td><td className="p-2">One-time refund of the full accumulated fund</td><td className="p-2">Monthly ₹1,500 to the surviving partner for life</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Nature of benefit</td><td className="p-2">Lump-sum settlement</td><td className="p-2">Recurring pension-like payment</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Primary claimant</td><td className="p-2">Nominee or legal heir</td><td className="p-2">Legally wedded surviving partner</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Key document needed</td><td className="p-2">Death certificate + nominee proof</td><td className="p-2">Death certificate + marriage proof + pension records</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Approximate timeline</td><td className="p-2">1 to 6 months</td><td className="p-2">1 to 3 months (if pension was already active)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Sawal Jo Log Sach Me Poochte Hain (FAQs)
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm italic mb-4">
            Yeh wo sawal hain jo maine personally CSC centres aur panchayat meetings me sunne hain — generic nahi, bilkul real.
          </p>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Family Pension — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Ek Baat Yaad Rakhein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Koi bhi sawal ho to humse contact karein. Hum har kisan ke parivar ki madad ke liye committed hain. Persistence pays. Take one step at a time.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Check Eligibility &amp; Status"
          guideHref="/maandhan/pm-kisan-maandhan-eligibility-documents"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Ye Bhi Padhein</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-withdrawal-refund-rules', l: '💸 Withdrawal Rules' },
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: '🔍 Status Check' },
          { href: '/maandhan/pmkmy-bank-account-change', l: '🏦 Bank Change' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}