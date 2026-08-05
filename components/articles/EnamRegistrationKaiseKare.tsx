'use client';

import Link from 'next/link';
import { SI, StepList, IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const RELATED = [
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📊' },
  { slug: 'msp-list-2026-27', title: 'MSP List 2026-27', emoji: '📋' },
  { slug: 'mandi-bhav-app-comparison', title: 'Best Mandi Bhav Apps', emoji: '📱' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Kya Hai', emoji: '🆔' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
];

const FAQS_DATA = [
  {
    q: 'eNAM registration free hai ya paisa lagta hai?',
    a: 'Farmer registration bilkul free hai. enam.gov.in par ya mandi ke eNAM help desk par — kahin bhi paisa nahi lagta. Agar koi CSC ya agent charge maange toh woh sirf apni service fee hai, portal ki koi fee nahi.',
  },
  {
    q: 'eNAM par fasal bechne ke liye kya documents chahiye?',
    a: 'Aadhaar card, bank passbook (ya cancelled cheque) aur active mobile number — bas. Kuch states mein zameen ke kagaz bhi mange ja sakte hain, lekin basic registration in teen se ho jata hai.',
  },
  {
    q: 'Payment kitne din mein aati hai?',
    a: 'Trade complete hone ke baad payment seedha aapke bank account mein aati hai — zyada tar cases mein usi din ya 1-2 working days mein. Isliye bank details bilkul sahi bharna zaroori hai.',
  },
  {
    q: 'Kya main ghar baithe fasal bech sakta hoon?',
    a: 'Registration ghar se ho jata hai, lekin fasal ki quality check (assaying) ke liye upaj mandi le jani padti hai. Bidding online hoti hai — aapki fasal par door ke buyers bhi bid kar sakte hain, isse rate behtar milta hai.',
  },
  {
    q: 'Mera gaon ki mandi eNAM se judi hai ya nahi, kaise pata karoon?',
    a: 'enam.gov.in par "Mandi" ya "Stakeholders" section mein state-wise integrated mandi list di hui hai. Wahan apna state aur district select karke check kar lo. App mein bhi yahi list milti hai.',
  },
  {
    q: 'Registration ke baad login nahi ho raha, kya karoon?',
    a: 'Pehle registered mobile par aaya OTP/temporary password check karo. Password bhool gaye toh "Forgot Password" se reset karo. Phir bhi issue ho toh apni mandi ke eNAM help desk par jao ya helpline 1800 270 0224 par call karo.',
  },
  {
    q: 'eNAM aur normal mandi mein kya fark hai?',
    a: 'Normal mandi mein sirf wahan maujood vyapari bid karte hain. eNAM par online bidding hoti hai — dusre district, dusre state ke buyers bhi bid kar sakte hain. Zyada buyers = behtar rate. Payment bhi seedha bank mein, cash ka jhanjhat nahi.',
  },
];

export default function EnamRegistrationKaiseKare({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">eNAM Registration</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            eNAM Registration 2026: Online Mandi Mein Fasal Kaise Bechein — Step-by-Step Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(article.publishedTime)}</span>
            <span>🔄 Updated: {fmtDate(article.modifiedTime)}</span>
            <span>⏱️ 9 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Mandi mein fasal le jao, aur wahi 4-5 vyapari milkar rate tay kar dein — yeh problem har kisan ne dekhi hai.
          eNAM (National Agriculture Market) isi ka jawab hai: ek online mandi jahan aapki fasal par doosre
          district aur doosre state ke buyers bhi bid karte hain.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Is guide mein hum step-by-step dekhenge: eNAM par farmer registration kaise hota hai, kaunse
          documents chahiye, aur fasal bechne se payment tak ka poora process.
        </p>

        <SH>🌾 eNAM Kya Hai — 30 Second Mein</SH>
        <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">
          eNAM ek pan-India electronic trading portal hai jo desh bhar ki APMC mandiyon ko online jodta hai.
          Sarkar ne ise 2016 mein launch kiya tha aur ab 1,000+ mandiyan isse judi hui hain. Matlab: aap apni
          local mandi mein fasal le jate ho, lekin bidding online hoti hai — buyers kahin se bhi bid kar sakte hain.
        </p>

        <IB>
          <strong>Fayda seedha:</strong> Zyada buyers → competition → behtar rate. Aur payment seedha bank
          account mein — cash ka, udhaar ka koi chakkar nahi.
        </IB>

        <SH>📄 Documents — Sirf 3 Cheezein Chahiye</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Document</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Kyun Chahiye</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Aadhaar Card</td>
                <td className="border border-[var(--color-border)] p-3">Identity verification ke liye</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Bank Passbook / Cancelled Cheque</td>
                <td className="border border-[var(--color-border)] p-3">Payment seedha isi account mein aayegi</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Active Mobile Number</td>
                <td className="border border-[var(--color-border)] p-3">OTP, login aur trade alerts ke liye</td>
              </tr>
            </tbody>
          </table>
        </div>

        <WB>
          Kuch states mein zameen ke records (khasra/khatauni) bhi mange ja sakte hain. Apni mandi ke eNAM
          help desk se confirm kar lena — state ke hisaab se thoda fark hota hai.
        </WB>

        <SH>📝 Online Registration — Step by Step</SH>
        <StepList>
          <SI n={1}>
            <strong>enam.gov.in kholo</strong> aur homepage par <strong>"Registration"</strong> link par click karo.
          </SI>
          <SI n={2}>
            Registration type mein <strong>"Farmer"</strong> select karo.
          </SI>
          <SI n={3}>
            Apni details bharo — naam, state, district, apni <strong>APMC mandi</strong> (jahan fasal le jaoge),
            mobile number aur email (optional).
          </SI>
          <SI n={4}>
            <strong>Bank details</strong> bharo — account number, IFSC. Yahan galti mat karna, payment isi account mein aayegi.
          </SI>
          <SI n={5}>
            Aadhaar aur bank passbook ki <strong>photo/scan upload</strong> karo aur form submit kar do.
          </SI>
          <SI n={6}>
            Registered mobile/email par <strong>login ID aur temporary password</strong> aayega. Login karke password change kar lo.
          </SI>
          <SI n={7}>
            Aapki select ki hui mandi aapka record <strong>verify</strong> karegi — uske baad aap trade ke liye ready ho.
          </SI>
        </StepList>

        <GovLink
          href="https://enam.gov.in/web/"
          label="eNAM Portal Par Registration Karo"
          guide="Mandi Bhav Bhi Dekh Lo"
          guideHref="/articles/mandi-bhav-today"
          portalName="enam.gov.in"
        />

        <IB>
          <strong>Online nahi kar pa rahe?</strong> Seedha apni mandi jao — har integrated mandi mein eNAM
          help desk hota hai jahan staff free mein registration kar deta hai. eNAM mobile app se bhi
          registration ho jata hai.
        </IB>

        <SH>🚜 Fasal Bechne Ka Process — Gate Entry Se Payment Tak</SH>
        <StepList>
          <SI n={1}>
            <strong>Gate Entry:</strong> Fasal mandi le jao. Gate par entry hoti hai aur aapko lot number milta hai.
          </SI>
          <SI n={2}>
            <strong>Quality Check (Assaying):</strong> Fasal ke samples ki quality jaanchi jati hai — moisture,
            grade waghera. Quality report online buyers ko dikhti hai.
          </SI>
          <SI n={3}>
            <strong>Online Bidding:</strong> Buyers (local + doosre districts/states ke) aapke lot par online bid karte hain.
          </SI>
          <SI n={4}>
            <strong>Bid Accept Karo:</strong> Sabse achhi bid aapko dikhai jati hai — accept karna ya nahi, aapki marzi.
            Rate pasand nahi toh mana kar sakte ho.
          </SI>
          <SI n={5}>
            <strong>Weighment + Payment:</strong> Bid accept hui toh tulai hoti hai aur payment seedha aapke
            bank account mein aa jati hai — zyada tar 1-2 working days mein.
          </SI>
        </StepList>

        <SH>⚖️ eNAM vs Normal Mandi — Fark Kya Hai</SH>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-alt)]">
                <th className="border border-[var(--color-border)] p-3 text-left font-black"></th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">Normal Mandi</th>
                <th className="border border-[var(--color-border)] p-3 text-left font-black">eNAM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Buyers</td>
                <td className="border border-[var(--color-border)] p-3">Sirf local vyapari</td>
                <td className="border border-[var(--color-border)] p-3">Pura desh — online bidding</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Rate</td>
                <td className="border border-[var(--color-border)] p-3">Kam competition, dabav mein bikri</td>
                <td className="border border-[var(--color-border)] p-3">Zyada competition, transparent bids</td>
              </tr>
              <tr>
                <td className="border border-[var(--color-border)] p-3 font-semibold">Payment</td>
                <td className="border border-[var(--color-border)] p-3">Cash/udhaar, kabhi kabhi late</td>
                <td className="border border-[var(--color-border)] p-3">Seedha bank account mein</td>
              </tr>
              <tr className="bg-[var(--color-bg-alt)]">
                <td className="border border-[var(--color-border)] p-3 font-semibold">Quality ka record</td>
                <td className="border border-[var(--color-border)] p-3">Aankh se andaza</td>
                <td className="border border-[var(--color-border)] p-3">Assaying report online</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Registration free hai, documents sirf 3, aur process 10-15 minute ka. Agar aapki mandi eNAM se
            judi hai toh register na karne ki koi wajah nahi.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Ek baar register ho gaye toh har season online bidding ka fayda — zyada buyers, behtar rate,
            aur payment seedha bank mein.
          </p>
        </div>

        <SH>❓ FAQ — Aapke Sawaal</SH>
        <FAQBlock faqs={FAQS_DATA} />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime} />
        <BottomNav extraLinks={[
          { href: '/articles/mandi-bhav-today', l: '📊 Aaj Ka Mandi Bhav' },
          { href: '/articles/msp-list-2026-27', l: '📋 MSP List 2026-27' },
          { href: '/articles/category/mandi', l: '📂 Market Rates' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
