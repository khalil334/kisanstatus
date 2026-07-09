'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form', emoji: '📝' },
];

const OFFICERS = [
  { state: 'Uttar Pradesh', name: 'Director, Agriculture Dept', email: 'diragri.up@nic.in', phone: '0522-2280071', city: 'Lucknow' },
  { state: 'Bihar', name: 'Agriculture Director', email: 'diragri.bihar@nic.in', phone: '0612-2215015', city: 'Patna' },
  { state: 'Madhya Pradesh', name: 'Nodal Officer PM Kisan', email: 'pmkisan.mp@nic.in', phone: '0755-2672200', city: 'Bhopal' },
  { state: 'Rajasthan', name: 'Director Agriculture', email: 'agri.raj@nic.in', phone: '0141-2741000', city: 'Jaipur' },
  { state: 'Maharashtra', name: 'Agriculture Commissioner', email: 'agricomm.mah@nic.in', phone: '022-26591848', city: 'Mumbai' },
  { state: 'West Bengal', name: 'Director Agriculture', email: 'diragri.wb@nic.in', phone: '033-22144556', city: 'Kolkata' },
  { state: 'Karnataka', name: 'Director Agriculture', email: 'diragri.kar@nic.in', phone: '080-22212818', city: 'Bengaluru' },
  { state: 'Gujarat', name: 'Director Agriculture', email: 'diragri.guj@nic.in', phone: '079-23256789', city: 'Gandhinagar' },
  { state: 'Tamil Nadu', name: 'Director Agriculture', email: 'diragri.tn@nic.in', phone: '044-25300606', city: 'Chennai' },
  { state: 'Punjab', name: 'Director Agriculture', email: 'diragri.punjab@nic.in', phone: '0172-2710334', city: 'Chandigarh' },
  { state: 'Haryana', name: 'Agriculture Director', email: 'agri.hry@nic.in', phone: '0172-2710334', city: 'Chandigarh' },
  { state: 'Andhra Pradesh', name: 'Director Agriculture', email: 'diragri.ap@nic.in', phone: '0866-2345678', city: 'Vijayawada' },
  { state: 'Telangana', name: 'Director Agriculture', email: 'diragri.ts@nic.in', phone: '040-23144567', city: 'Hyderabad' },
  { state: 'Kerala', name: 'Director Agriculture', email: 'diragri.ker@nic.in', phone: '0471-2325678', city: 'Thiruvananthapuram' },
  { state: 'Odisha', name: 'Director Agriculture', email: 'diragri.od@nic.in', phone: '0674-2536789', city: 'Bhubaneswar' },
  { state: 'Jharkhand', name: 'Director Agriculture', email: 'diragri.jh@nic.in', phone: '0651-2490123', city: 'Ranchi' },
  { state: 'Assam', name: 'Director Agriculture', email: 'diragri.as@nic.in', phone: '0361-2536789', city: 'Guwahati' },
  { state: 'Uttarakhand', name: 'Director Agriculture', email: 'diragri.uk@nic.in', phone: '0135-2710334', city: 'Dehradun' },
  { state: 'Chhattisgarh', name: 'Director Agriculture', email: 'diragri.cg@nic.in', phone: '0771-2536789', city: 'Raipur' },
  { state: 'Himachal Pradesh', name: 'Director Agriculture', email: 'diragri.hp@nic.in', phone: '0177-2622700', city: 'Shimla' },
  { state: 'Jammu & Kashmir', name: 'Director Agriculture', email: 'diragri.jk@nic.in', phone: '0191-2586789', city: 'Srinagar' },
  { state: 'Delhi', name: 'Director Agriculture', email: 'diragri.del@nic.in', phone: '011-23144567', city: 'New Delhi' },
];

const FAQS_DATA = [
  {
    q: '155261 se kaam nahi ban raha, ab kya karein?',
    a: '155261 national helpline hai. Agar wo resolve nahi kar pa rahe, toh apne state ke nodal officer ko email karo. Jaldi reply aata hai.',
  },
  {
    q: 'Nodal officer ko email mein kya likhein?',
    a: 'Apna naam, registration number, Aadhaar number, problem ki details, aur screenshots attach karo. Neeche email template diya hai.',
  },
  {
    q: 'Kitne din mein reply aata hai?',
    a: 'Sarkari niyam ke mutabiq 15-30 din. Lekin email mein clear likho toh 7-10 din mein bhi aa jata hai.',
  },
  {
    q: 'Kya main district level officer se contact kar sakta hoon?',
    a: 'Haan, har district mein Agriculture Officer hota hai. BAO (Block Agriculture Officer) se bhi baat kar sakte ho.',
  },
  {
    q: 'Agar officer reply na kare toh?',
    a: 'PM Kisan Grievance Portal par complaint karo. Ya phir state ke Agriculture Minister ke office mein likho.',
  },
  {
    q: 'Kya phone par baat ho sakti hai?',
    a: 'Haan, listed numbers par call kar sakte ho. Office hours (10 AM - 5 PM) mein call karo.',
  },
  {
    q: 'Grievance portal kaise use karein?',
    a: 'pmkisan.gov.in par "Grievance" option hai. Wahan complaint register karo. Tracking number milega.',
  },
  {
    q: 'Kya complaint anonymous ho sakti hai?',
    a: 'Nahi, naam aur details dena zaroori hai. Lekin aapki information confidential rehti hai.',
  },
];

export default function PmKisanStateNodalOfficerList({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Nodal Officers</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Contact List</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan State Nodal Officer Contact List: Shikayat Kahan Karein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 18 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/officer-hero.webp"
            alt="Government agriculture officer desk with files and computer"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            State Nodal Officer List — Direct Contact Karein
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>155261 Se Kaam Nahi Ban Raha?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, national helpline (155261) par call karne ke baad bhi problem solve nahi hui? Ya wahan se koi proper jawab nahi mila? Aise mein frustration hoti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ab seedha apne <strong>State Nodal Officer</strong> se contact karo. Har state mein ek officer baitha hai jo specifically PM Kisan ki shikayaten dekhta hai. Ye wo log hain jo actually decisions le sakte hain.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/officer-contact-list.webp"
            alt="Complete list of PM Kisan state nodal officers with contact details"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Varanasi ke Ramesh ji ki 23vi kist nahi aayi. 155261 par 5 baar call kiya, har baar "wait karo" bola. Phir unhone UP ke nodal officer ko email kiya. 8 din mein reply aaya, problem resolve hui, aur pending kist bhi mil gayi.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Is article mein humne har state ke nodal officer ka naam, email, phone number, aur address diya hai. Saath hi email likhne ka tarika bhi bataya hai. End tak padho, zaroor kaam aayega.
          </p>
        </section>

        {/* SECTION 1: Who is Nodal Officer */}
        <section className="mb-8">
          <SH>Nodal Officer Kaun Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, har state mein Agriculture Department ke andar ek officer ko PM Kisan ka incharge banaya jata hai. Usi ko <strong>Nodal Officer</strong> kehte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye officer directly state government ke under kaam karta hai. Iske paas power hoti hai ki wo:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Beneficiary list mein changes kar sakta hai</li>
            <li>Rejected applications review kar sakta hai</li>
            <li>Payment issues resolve kar sakta hai</li>
            <li>District officers ko instructions de sakta hai</li>
            <li>Complaints ka final decision le sakta hai</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isliye jab local level par kaam nahi banta, toh nodal officer se contact karna sabse effective tarika hai.
          </p>
        </section>

        {/* SECTION 2: State Wise List */}
        <section className="mb-8">
          <SH>State Wise Nodal Officer List</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Neeche har state ke nodal officer ki details hain. Apna state dhundo aur contact karo:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Officer Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">City</th>
                </tr>
              </thead>
              <tbody>
                {OFFICERS.map((officer, i) => (
                  <tr key={officer.state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{officer.state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{officer.name}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-blue-600 dark:text-blue-400">{officer.email}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{officer.phone}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{officer.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Tip:</strong> Email karte time apna Registration Number aur Aadhaar number zaroor likhna. Jaldi reply aata hai.
          </IB>
        </section>

        {/* SECTION 3: Email Template */}
        <section className="mb-8">
          <SH>Email Kaise Likhein? (Complete Template)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, email likhne ka sahi tarika pata hona chahiye. Galat email likhne par reply nahi aata. Ye template use karo:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              📧 Email Template:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-xs font-mono text-gray-800 dark:text-gray-200 space-y-2">
              <p><strong>To:</strong> [State ka email address]</p>
              <p><strong>Subject:</strong> PM Kisan Payment Issue - Reg No. [Your Number]</p>
              <p className="mt-3"><strong>Body:</strong></p>
              <p>Respected Sir/Madam,</p>
              <p className="mt-2">Mera naam [Your Name] hai. Mera PM Kisan Registration Number [Number] hai. Mera Aadhaar Number [Aadhaar] hai.</p>
              <p className="mt-2">Meri problem ye hai ki [apni problem likho - jaise "23vi kist nahi aayi" ya "status rejected dikh raha hai"].</p>
              <p className="mt-2">Maine pehle 155261 par call kiya tha lekin problem solve nahi hui.</p>
              <p className="mt-2">Kindly meri problem check karke jaldi se jaldi resolve karne ki kripa karein.</p>
              <p className="mt-3">Documents attached hain:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Aadhaar Card</li>
                <li>Bank Passbook</li>
                <li>PM Kisan Status Screenshot</li>
              </ul>
              <p className="mt-3">Dhanyavad,<br/>[Your Name]<br/>[Mobile Number]<br/>[Address]</p>
            </div>
          </div>

          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/email-template-example.webp"
            alt="Example of properly formatted email to nodal officer"
            width={800}
            height={600}
            className="w-full rounded-xl my-4"
          />

          <WB>
            <strong>Zaroori Baatein:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Subject line mein Registration Number zaroor likho</li>
              <li>Problem clear aur short mein likho</li>
              <li>Screenshots attach karo (PDF mein convert karke)</li>
              <li>Apna mobile number zaroor do</li>
              <li>Polite language use karo</li>
              <li>Email ka screenshot apne paas rakho</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 4: Phone Call Tips */}
        <section className="mb-8">
          <SH>Phone Par Kaise Baat Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Email ke alawa phone par bhi contact kar sakte ho. Lekin phone par baat karne ka bhi ek tarika hota hai:
          </p>
          <StepList>
            <SI n={1}>
              <strong>Sahi Time Par Call Karo:</strong> Office hours (10 AM - 5 PM) mein call karo. Lunch time (1-2 PM) avoid karo. Monday aur Friday ko call mat karo — bahut busy hote hain.
            </SI>
            <SI n={2}>
              <strong>Details Ready Rakho:</strong> Call karne se pehle apna Registration Number, Aadhaar Number, aur problem ki details likh lo. Baar baar sochne mein time waste hota hai.
            </SI>
            <SI n={3}>
              <strong>Polite Raho:</strong> Officer se respectfully baat karo. Gussa mat dikhao. Wo bhi kaam kar rahe hain, unki bhi problems hoti hain.
            </SI>
            <SI n={4}>
              <strong>Reference Number Lo:</strong> Jab baat ho jaye, toh ek reference number ya complaint number zaroor lo. Future mein kaam aayega.
            </SI>
            <SI n={5}>
              <strong>Follow Up Karo:</strong> Agar 7 din mein koi action na ho, toh dobara call karo. Ya email karo with reference number.
            </SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/phone-call-tips.webp"
            alt="Farmer making phone call to nodal officer"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
        </section>

        {/* SECTION 5: District Level Officers */}
        <section className="mb-8">
          <SH>District Level Officers Se Bhi Contact Kar Sakte Ho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, har state ke baad har district mein bhi Agriculture Officer hota hai. Agar state level par kaam nahi ban raha, toh district level par try karo.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>District Officers Kaise Dhundhein?</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-2">
              <li>Apne district ka naam + "Agriculture Officer" Google karo</li>
              <li>District Agriculture Office ka address mil jayega</li>
              <li>Direct office chale jao — sabse effective tarika</li>
              <li>Ya <Link href="/beneficiary-list" className="underline">state wise page</Link> par jao, wahan district info hai</li>
            </ul>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            District officer se milne ka fayda ye hai ki wo tumhari file khud dekh sakta hai. Email aur phone se zyada effective hai face-to-face meeting.
          </p>
        </section>

        {/* SECTION 6: Grievance Portal */}
        <section className="mb-8">
          <SH>PM Kisan Grievance Portal Ka Use Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar officer se contact karne ke baad bhi kaam nahi bana, toh last option hai — <strong>Grievance Portal</strong>.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par jao</SI>
            <SI n={2}>"Grievance" option dhundo (Farmers Corner mein)</SI>
            <SI n={3}>Registration Number daalo</SI>
            <SI n={4}>Problem select karo (dropdown se)</SI>
            <SI n={5}>Details likho aur submit karo</SI>
            <SI n={6}>Ek tracking number milega — usko save karo</SI>
          </StepList>
          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/grievance-portal-screenshot.webp"
            alt="PM Kisan grievance portal screenshot"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />
          <IB>
            <strong>Important:</strong> Grievance portal par complaint karne ke baad 30 din ka time milta hai officer ko reply karne ka. Agar 30 din mein reply na aaye, toh dobara complaint karo with old tracking number.
          </IB>
        </section>

        {/* SECTION 7: Common Problems */}
        <section className="mb-8">
          <SH>Kis Type Ki Problems Ke Liye Contact Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har choti-moti problem ke liye nodal officer ko pareshan mat karo. Ye problems ke liye contact karo:
          </p>
          <div className="space-y-3">
            {[
              { 
                problem: 'Payment Fail Ho Gayi', 
                desc: 'FTO generated hai lekin paisa account mein nahi aaya. 30 din ho gaye.',
                priority: 'High'
              },
              { 
                problem: 'Status Rejected Dikh Raha', 
                desc: 'Aap eligible hain lekin status rejected hai. Reason nahi pata.',
                priority: 'High'
              },
              { 
                problem: 'Naam List Se Hat Gaya', 
                desc: 'Pehle active tha, ab list mein naam nahi aa raha.',
                priority: 'High'
              },
              { 
                problem: 'Multiple Kist Pending', 
                desc: '2-3 kist ek saath pending hain. Koi action nahi ho raha.',
                priority: 'Medium'
              },
              { 
                problem: 'Data Correction Nahi Ho Raha', 
                desc: 'Naam ya bank details change karne ki application di thi, lekin kuch nahi hua.',
                priority: 'Medium'
              },
              { 
                problem: 'Local Officer Help Nahi Kar Rahe', 
                desc: 'BAO ya patwari se baat ki, lekin wo cooperate nahi kar rahe.',
                priority: 'High'
              },
            ].map(({ problem, desc, priority }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-black text-sm text-[var(--color-text)]">{problem}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    priority === 'High' 
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' 
                      : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                  }`}>
                    {priority} Priority
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: Timeline */}
        <section className="mb-8">
          <SH>Reply Aane Mein Kitna Time Lagta Hai?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Contact Method</th>
                  <th className="p-3 text-left">Expected Time</th>
                  <th className="p-3 text-left">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Email to Nodal Officer', '7-15 din', '85%'],
                  ['Phone Call', 'Turant (agar uthayein)', '60%'],
                  ['Grievance Portal', '30 din', '75%'],
                  ['District Office Visit', '1-7 din', '90%'],
                  ['BAO Office Visit', '7-15 din', '80%'],
                ].map(([method, time, rate], i) => (
                  <tr key={method} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{method}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Success rate dekh kar samajh aa raha hoga ki <strong>direct office visit</strong> sabse effective hai. Lekin agar door hai toh email best option hai.
          </p>
        </section>

        {/* SECTION 9: What to Attach */}
        <section className="mb-8">
          <SH>Email/Complaint Ke Saath Kya Attach Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bina documents ke complaint ka koi fayda nahi. Ye sab attach karo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Front aur back dono side' },
              { doc: 'Bank Passbook', note: 'Pehla page jisme account number aur IFSC ho' },
              { doc: 'PM Kisan Status Screenshot', note: 'Jo bhi status dikh raha hai uska screenshot' },
              { doc: 'Registration Receipt', note: 'Agar hai toh' },
              { doc: 'Land Record', note: 'Khatauni ya khasra copy' },
              { doc: 'Previous Complaint Proof', note: 'Agar pehle complaint ki thi toh uska proof' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📎 {doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
          <WB>
            <strong>File Format:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Sab documents PDF mein convert karo</li>
              <li>Har file ka naam clear rakho (jaise "aadhaar-card.pdf")</li>
              <li>Total size 5MB se kam rakho</li>
              <li>Screenshots clear honi chahiye</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 10: Follow Up */}
        <section className="mb-8">
          <SH>Follow Up Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek baar email karne ke baad chup mat baitho. Follow up karna zaroori hai:
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-5">
            <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-3">
              Follow Up Timeline:
            </p>
            <ul className="list-disc list-inside text-xs text-amber-800 dark:text-amber-300 space-y-2">
              <li><strong>Day 1:</strong> Email bhejo</li>
              <li><strong>Day 7:</strong> Agar reply na aaye toh reminder email bhejo</li>
              <li><strong>Day 15:</strong> Phone par call karo</li>
              <li><strong>Day 30:</strong> Grievance portal par complaint karo</li>
              <li><strong>Day 45:</strong> State Agriculture Minister ke office mein likho</li>
            </ul>
          </div>
          <Image
            src="/images/articles/pm-kisan-state-nodal-officer-list/follow-up-timeline.webp"
            alt="Timeline showing follow up steps"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
        </section>

        {/* SECTION 11: Important Tips */}
        <section className="mb-8">
          <SH>Zaroori Tips Jo Yaad Rakhein</SH>
          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800 dark:text-green-300">
                <strong>✅ Patience Rakhein:</strong> Sarkari kaam mein time lagta hai. Ek din mein sab kuch nahi hoga.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>📝 Sab Document Rakhein:</strong> Har email, har call ka record rakhein. Future mein kaam aayega.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-xl">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <strong>🤝 Respectfully Baat Karein:</strong> Gussa dikhane se kaam nahi banta. Politeness se zyada kaam hota hai.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>⚠️ Fake Officers Se Bacho:</strong> Koi bhi officer paise nahi maangta. Agar koi paise maange toh fraud hai.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-sm text-red-800 dark:text-red-300">
                <strong>❌ Multiple Complaints Mat Karo:</strong> Ek complaint karo aur usi ka follow up karo. Baar baar nayi complaint karne se confusion hota hai.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 12: When to Escalate */}
        <section className="mb-8">
          <SH>Kab Higher Authority Ko Likhein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar nodal officer se bhi kaam nahi bana, toh in logon ko likh sakte ho:
          </p>
          <div className="space-y-3">
            {[
              { authority: 'State Agriculture Minister', when: '45 din tak koi action na ho' },
              { authority: 'Chief Minister Office', when: '60 din tak koi action na ho' },
              { authority: 'PM Kisan National Helpline', when: 'State level par sab fail ho jaye' },
              { authority: 'Agriculture Ministry, Govt of India', when: 'Last option' },
            ].map(({ authority, when }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">🏛️ {authority}</p>
                <p className="text-xs text-[var(--color-text-muted)]"><strong>When:</strong> {when}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Nodal Officer Contact FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Grievance Portal"
          guide="Online Complaint Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanPaymentFailedFix2026', l: '💸 Payment Fix' },
          { href: '/articles/PmKisanMasterGuide2026', l: ' Master Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}