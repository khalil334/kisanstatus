import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-28T08:00:00+05:30';
const MODIFIED = '2026-07-28T08:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-status-check-online',
    title: 'Online Status Check',
    desc: 'Apna pension contribution history aur payment details ghar baithe kaise verify karein.',
    emoji: '🔍',
  },
  {
    slug: 'pmkmy-bank-account-change',
    title: 'Bank Account Update',
    desc: 'Registered bank account change ya NACH mandate update karne ka complete step-by-step process.',
    emoji: '🏦',
  },
  {
    slug: 'pm-kisan-maandhan-pension-card-download',
    title: 'Pension Card Download',
    desc: 'PMKMY acknowledgement slip aur pension card ki soft copy kaise prapt karein.',
    emoji: '📄',
  },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan Maandhan Yojana ka official toll-free helpline number kya hai 2026 mein?',
    a: 'PMKMY ka official toll-free helpline number hai: 18002676888 aur 14434. Ye numbers Ministry of Labour & Employment dwara provide kiye gaye hain aur LIC inhe manage karti hai. CSC users ke liye alag helpdesk number 14599 hai (9:30 AM se 6:00 PM, Monday to Saturday).',
  },
  {
    q: 'PMKMY grievance ka email address kya hai?',
    a: 'Official grievance email hai: scpms@licindia.com (PMKMY ke liye specific). Agar aap LIC se directly contact karna chahte hain to co_complaints@licindia.com par bhi email kar sakte hain. Email mein apna Subscriber ID, registered mobile number, aur clear issue zaroor likhein.',
  },
  {
    q: 'Online grievance file karne ke baad reply aane mein kitna samay lagta hai?',
    a: 'Official guidelines ke mutabiq, standard grievance ka resolution 15 se 30 working days ke andar hona chahiye. Simple queries (jaise status check) 3-7 din mein resolve ho jati hain, lekin payment issues ya account correction mein 15-20 din lag sakte hain.',
  },
  {
    q: 'CSC operator ne galat details daal di hain, ab correction kaise karein?',
    a: 'Sabse pehle usi CSC center par sampark karein jahan se enrollment karwayi thi. Agar wo cooperate nahi karte, to nazdeeki bank branch (jahan se auto-debit hota hai) mein likhit shikayat dein. Last option hai district nodal officer ko email karna.',
  },
  {
    q: 'Mere account se paisa kat raha hai lekin portal par "Inactive" kyun dikh raha hai?',
    a: 'Ye technical glitch ya NACH file mismatch ki wajah se hota hai. Bank se transaction proof (statement screenshot) lekar PMKMY portal par grievance file karein aur scpms@licindia.com par email karein. 7-10 working days mein update ho jayega.',
  },
  {
    q: 'Helpline number par call connect nahi ho rahi, kya karun?',
    a: 'Call volume high hone ki wajah se kabhi-kabhi lines busy rehti hain. Subah 10:30 se 11:30 baje ke beech call karne ka try karein (jab lines kam busy hoti hain). Agar fir bhi na lage, to online grievance portal sabse behtar option hai.',
  },
  {
    q: 'Complaint reference number kaise track karun?',
    a: 'PMKMY portal par "Track Grievance" ya "Status Check" option mein apna Complaint Reference Number daalein. Real-time status dikh jayega — "Under Process", "Resolved", ya "Pending".',
  },
  {
    q: 'Auto-debit har mahine fail ho raha hai, permanent solution kya hai?',
    a: 'Do mukhya karan hote hain: (1) Account mein sufficient balance nahi hai, ya (2) NACH mandate expire/block ho gaya hai. Bank branch mein jakar NACH mandate status check karwayein aur naya mandate form bharein agar zaroori ho.',
  },
];

export default function PMKMYGrievanceComplaintHelpline({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PM Kisan Maandhan Helpline Number 2026 – Verified Contact & Grievance Guide',
              description: 'PM Kisan Maandhan Yojana ka official helpline number 18002676888, 14434. Grievance email scpms@licindia.com. Online complaint process, CSC helpdesk 14599, aur verified contact details.',
              image: 'https://kisanstatus.com/images/articles/maandhan/pmkmy-grievance-complaint-helpline/pmkmy-grievance-complaint-helpline-hero.webp',
              inLanguage: 'hi-IN',
              keywords: 'PMKMY helpline number 18002676888, PM Kisan Maandhan complaint, scpms@licindia.com, grievance redressal online, CSC helpdesk 14599, LIC pension complaint',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 2400,
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
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['.hero-title', '.hero-description']
              }
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
        }) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Helpline & Grievance</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Verified Contact Info</span>

          <h1 className="hero-title text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Helpline Number 2026 – Verified Contact & Grievance Guide
          </h1>

          <div className="hero-description flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/pmkmy-grievance-complaint-helpline/pmkmy-grievance-complaint-helpline-hero.webp"
            alt="Farmer calling PMKMY helpline number 18002676888 for pension complaint"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Official verified contact details — Last updated: July 2026
          </p>
        </div>

        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">✅ VERIFIED OFFICIAL CONTACTS (2026)</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-gray-900 dark:text-white mb-2"> Helpline Numbers:</p>
              <ul className="space-y-1 text-[var(--color-text-muted)]">
                <li><strong>18002676888</strong> (Toll-Free) — PMKMY Official Portal</li>
                <li><strong>14434</strong> (Toll-Free) — Ministry of Labour & Employment</li>
                <li><strong>14599</strong> (CSC Helpdesk) — 9:30 AM to 6:00 PM, Mon-Sat</li>
                <li><strong>+91-22-68276827</strong> (LIC Call Center) — 8:00 AM to 8:00 PM</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-gray-900 dark:text-white mb-2"> Official Email Addresses:</p>
              <ul className="space-y-1 text-[var(--color-text-muted)]">
                <li><strong>scpms@licindia.com</strong> — PMKMY specific grievances</li>
                <li><strong>co_complaints@licindia.com</strong> — General LIC complaints</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-gray-900 dark:text-white mb-2">🌐 Official Portals:</p>
              <ul className="space-y-1 text-[var(--color-text-muted)]">
                <li><strong>pmkmy.gov.in</strong> — Main portal for grievances</li>
                <li><strong>maandhan.in</strong> — Ministry of Labour & Employment portal</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl">
          <p className="text-sm md:text-base text-amber-900 dark:text-amber-100 leading-relaxed font-medium">
            <strong>⚠️ Fraud Alert:</strong> Internet par bahut saare fake numbers ghoom rahe hain. Sirf upar diye gaye verified numbers aur emails ka hi upayog karein. Koi bhi aapse "processing fee" ya "fast track charge" maange, to wo fraud hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Problem Ke Hisab Se Sahi Contact — Decision Tree</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har samasya ka alag department hota hai. Neeche di gayi table se samjhein ki aapki problem ke liye kaunsa contact sabse behtar hai:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Aapki Samasya</th>
                  <th className="p-3 text-left">Pehla Step</th>
                  <th className="p-3 text-left">Agar Solve Na Ho</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium">Enrollment error (galat naam/DOB/mobile)</td>
                  <td className="p-3 border-b border-[var(--color-border)]">CSC Center (jahan enrollment hui thi)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Bank branch ya scpms@licindia.com</td>
                </tr>
                <tr className="bg-green-50/40 dark:bg-green-900/10">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium">Auto-debit fail / NACH issue</td>
                  <td className="p-3 border-b border-[var(--color-border)]">Apni Bank Branch</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">PMKMY portal par grievance</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium">Payment nahi aayi / Status inactive</td>
                  <td className="p-3 border-b border-[var(--color-border)]">PMKMY Portal (Online Grievance)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Helpline 18002676888 ya email</td>
                </tr>
                <tr className="bg-green-50/40 dark:bg-green-900/10">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium">Portal login/technical error</td>
                  <td className="p-3 border-b border-[var(--color-border)]">scpms@licindia.com (email with screenshot)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">CSC helpdesk 14599</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Hypothetical Example — Step-by-Step Resolution Process</SH>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 rounded-xl p-5 mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3">📋 Example Scenario: Payment Deduction Issue</h3>
            <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <p><strong>Typical Problem:</strong> "Mere account se 3 mahine se ₹100 kat rahe hain, lekin portal par status 'Inactive' dikh raha hai."</p>
              <p><strong>Recommended Solution Steps:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Bank statement download karein (proof ke taur par)</li>
                <li>PMKMY portal par login karke "Grievance" section kholein</li>
                <li>Complaint Type: "Payment Not Received" select karein</li>
                <li>Detail mein likhein: "Last 3 months deduction confirmed but status inactive. Transaction IDs: [Apni transaction IDs yahan likhein]"</li>
                <li>Bank statement screenshot attach karein</li>
                <li>Submit karne par Reference Number note karein</li>
                <li>7 din baad portal par check karein — status "Under Process" ho sakta hai</li>
                <li>12-15 din baad email aa sakta hai: "Your grievance has been resolved"</li>
                <li>Portal par status check karein — "Active" dikhna chahiye ✅</li>
              </ol>
              <p className="text-green-700 dark:text-green-300 font-medium"><strong>Expected Time:</strong> 12-15 working days (official guidelines ke mutabiq)</p>
            </div>
          </div>
          <IB>
            <strong>Note:</strong> Ye ek hypothetical example hai jo common problem aur uska standard resolution process dikhata hai. Actual resolution time case ke according vary kar sakta hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Online Grievance — Sabse Reliable Tarika</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Online grievance file karne ka sabse bada fayda: aapke paas written proof (reference number) hota hai aur aap har step track kar sakte hain.
          </p>

          <StepList>
            <SI n={1}><strong>PMKMY Portal Par Jaayein:</strong> pmkmy.gov.in (sirf .gov.in wali site)</SI>
            <SI n={2}><strong>Login Karein:</strong> "Subscriber Login" → Registered mobile number → OTP verify</SI>
            <SI n={3}><strong>Grievance Section:</strong> Dashboard par "Grievance" ya "Raise Complaint" par click karein</SI>
            <SI n={4}><strong>Complaint Type:</strong> Dropdown se select karein — "Payment Not Received", "Wrong Deduction", "Account Issue", etc.</SI>
            <SI n={5}><strong>Detail Mein Likhein:</strong> Example: "Mere account se har mahine ₹100 kat rahe hain lekin portal par status 'Inactive' hai. Last 3 mahine se payment confirm nahi ho rahi. Transaction IDs: [IDs yahan likhein]"</SI>
            <SI n={6}><strong>Documents Attach Karein:</strong> Bank statement screenshot, transaction IDs, ya koi bhi proof</SI>
            <SI n={7}><strong>Reference Number Note Karein:</strong> Submit karne par ek unique number milega — ise screenshot le lein</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/pmkmy-grievance-complaint-helpline/online-grievance-portal.webp"
              alt="PMKMY online grievance portal form with complaint type dropdown"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Online grievance form — Complaint reference number zaroor note karein
            </p>
          </div>

          <IB>
            <strong>Pro Tip:</strong> Grievance file karne ke 7 din baad "Track Complaint" section mein reference number daal kar status check karein. Agar 15 din tak koi update nahi, to reminder email bhejein scpms@licindia.com par with reference number.
          </IB>
        </section>

        <section className="mb-8">
          <SH>CSC Helpdesk (14599) — Kab aur Kaise Contact Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC (Common Service Center) ka helpdesk number <strong>14599</strong> hai. Working hours: <strong>9:30 AM to 6:00 PM (Monday to Saturday)</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-2 border-green-500">
              <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">✅ CSC Helpdesk Tab Call Karein Jab:</h4>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1 list-disc pl-5">
                <li>Enrollment form mein galti hui ho</li>
                <li>Aadhaar number galat register ho gaya ho</li>
                <li>Bank account change karna ho</li>
                <li>Mobile number update karna ho</li>
                <li>Pension card download nahi ho raha ho</li>
                <li>CSC operator cooperate nahi kar raha ho</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-500">
              <h4 className="font-bold text-red-900 dark:text-red-300 mb-2">❌ CSC Helpdesk Tab Na Call Karein Jab:</h4>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1 list-disc pl-5">
                <li>Payment issue ho (ye bank/LIC ka matter hai)</li>
                <li>Pension amount kam mil rahi ho</li>
                <li>Account technical issue ho</li>
                <li>Auto-debit fail ho raha ho</li>
              </ul>
            </div>
          </div>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/pmkmy-grievance-complaint-helpline/csc-center-visit.webp"
              alt="Farmer visiting CSC center for PM Kisan Maandhan enrollment correction"
              width={1000}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC center par jaate waqt acknowledgement slip zaroor lein
            </p>
          </div>

          <WB>
            <strong>Important:</strong> CSC operator se hamesha acknowledgement slip lein jisme date, signature, aur request number ho. Bina slip ke baad mein proof nahi bachega.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Email Par Grievance — Perfect Format</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Email tab sabse effective hoti hai jab aap detail mein likhte hain aur documents attach karte hain. Official email: <strong>scpms@licindia.com</strong>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800 mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3">📧 Email Format — Copy-Paste Ready:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-xs space-y-2 font-mono">
              <p><strong>Subject:</strong> PMKMY Grievance - [Aapka Naam] - [Mobile Number]</p>
              <br />
              <p><strong>To:</strong> scpms@licindia.com</p>
              <br />
              <p><strong>Body:</strong></p>
              <br />
              <p>Respected Sir/Madam,</p>
              <br />
              <p>Mera naam [Aapka Naam] hai. Main PM Kisan Maandhan Yojana ka registered subscriber hoon.</p>
              <br />
              <p><strong>Meri Details:</strong></p>
              <ul className="list-disc pl-4">
                <li>Aadhaar Number: [XXXXXXXXXXXX]</li>
                <li>Registered Mobile: [98765XXXXX]</li>
                <li>Bank Account: [Last 4 digits]</li>
                <li>Enrollment Date: [Month/Year]</li>
              </ul>
              <br />
              <p><strong>Meri Samasya:</strong></p>
              <p>[Yahan detail mein likhein — jaise "Pichle 3 mahine se mere account se ₹100 kat rahe hain lekin portal par status 'Inactive' dikh raha hai. Transaction IDs: TXN123, TXN456, TXN789"]</p>
              <br />
              <p><strong>Attachments:</strong></p>
              <ul className="list-disc pl-4">
                <li>Bank statement (last 3 months)</li>
                <li>Transaction proof screenshots</li>
              </ul>
              <br />
              <p>Kripya meri is samasya ka samadhan karein aur mujhe reply karein.</p>
              <br />
              <p>Dhanyavad,</p>
              <p>[Aapka Naam]</p>
              <p>[Mobile Number]</p>
              <p>[Date]</p>
            </div>
          </div>

          <IB>
            <strong>Pro Tip:</strong> Email bhejne ke baad "Sent Items" check karein. Agar 7 working days mein reply na aaye, to same email ko "Forward" karke subject mein "REMINDER: " add karke fir se bhejein.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Status Tracking — 3 Tarike</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab aap kahin bhi request file karte hain, to hamesha ek reference number milta hai. Is number se aap status check kar sakte hain:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2"> Online Portal</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">PMKMY portal par "Track Complaint" section mein reference number daalein.</p>
              <p className="text-xs text-green-700 dark:text-green-300 font-medium">Sabse fast aur reliable</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">📞 Helpline Call</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">18002676888 ya 14434 par call karke reference number batayein.</p>
              <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Lines busy ho sakti hain</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">📧 Email Reply</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">scpms@licindia.com par reply check karein.</p>
              <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">7-10 working days lag sakte hain</p>
            </div>
          </div>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/pmkmy-grievance-complaint-helpline/grievance-status-tracking.webp"
              alt="PMKMY grievance status tracking showing resolved complaint on mobile"
              width={800}
              height={1000}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Grievance status tracking — "Resolved" dikh raha hai
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-300 dark:border-amber-700">
            <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">⏱️ Expected Resolution Timeline:</h4>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
              <li><strong>Simple queries:</strong> 3-5 working days</li>
              <li><strong>Payment issues:</strong> 7-10 working days</li>
              <li><strong>Account correction:</strong> 15-20 working days</li>
              <li><strong>Complex cases:</strong> 30 working days tak lag sakte hain</li>
            </ul>
            <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
              Note: Ye timelines official guidelines par aadhaarit hain, lekin actual time thoda kam ya zyada ho sakta hai.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes — In Galtiyon Se Bachein</SH>
          <div className="space-y-3">
            <div className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Reference number note nahi karna</p>
                <p className="text-xs text-[var(--color-text-muted)]">Bina number ke baad mein proof nahi bachta. Hamesha screenshot lein.</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Problem ko detail mein nahi batana</p>
                <p className="text-xs text-[var(--color-text-muted)]">"Paisa nahi mila" likhne se kaam nahi chalega — date, amount, transaction ID sab likhein.</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Ek baar request karke chhod dena</p>
                <p className="text-xs text-[var(--color-text-muted)]">Agar 7 din mein reply na aaye, to follow-up zaroor karein.</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Galat jagah request karna</p>
                <p className="text-xs text-[var(--color-text-muted)]">Payment issue ke liye CSC par jaane se kaam nahi banega — bank ya LIC ko contact karein.</p>
              </div>
            </div>
            <div className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Documents attach nahi karna</p>
                <p className="text-xs text-[var(--color-text-muted)]">Bank statement, screenshot, receipt — jo bhi proof ho, use zaroor attach karein.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Shikayat Aur Helpline Ke Common Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PMKMY Helpline & Grievance — Sawal Jawab" />
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/pmkmy-grievance-complaint-helpline/pmkmy-pension-family.webp"
            alt="Kisan parivar apni PM Kisan Maandhan pension ke saath surakshit bhavishya"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Aapki mehnat, aapka haq — pension milna hi chahiye
          </p>
        </div>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Aakhri Salah</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Madad maangna aapka haq hai. Lekin request tabhi kaam karegi jab aap sahi tareeke se, sahi jagah, aur sahi information ke saath karenge. Upar bataye gaye sabhi contacts official sources se verify kiye gaye hain (Last Updated: July 2026).
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            <strong>Recommended Approach:</strong> Pehle online grievance try karein (sabse trackable). Agar kaam na bane, to helpline 18002676888 par call karein. Agar fir bhi solution na mile, to scpms@licindia.com par email karein. Himmat na haarein — aapki pension aapka haq hai.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Grievance Registration"
          guideHref="/maandhan/pm-kisan-maandhan-status-check-online"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Inhe Bhi Dekh Lijiye</h3>
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

        <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-2xl">
          <h3 className="font-black text-blue-800 dark:text-blue-300 text-lg mb-2"> Article Verification Info</h3>
          <p className="text-xs text-[var(--color-text-muted)]">
            <strong>Last Verified:</strong> {fmtDate(MODIFIED)}<br />
            <strong>Sources:</strong> PMKMY Official Portal (pmkmy.gov.in), Ministry of Labour & Employment (maandhan.in),
            LIC India Official Website (licindia.in), CSC Portal (csc.gov.in)<br />
            <strong>Author:</strong> KisanStatus Team — Helping farmers with verified information since 2024
          </p>
        </div>

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: ' Status Check' },
          { href: '/maandhan/pmkmy-bank-account-change', l: '🏦 Bank Change' },
          { href: '/maandhan/pm-kisan-maandhan-pension-card-download', l: '📄 Pension Card' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
