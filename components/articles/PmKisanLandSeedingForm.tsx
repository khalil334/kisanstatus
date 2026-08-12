'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import CountdownModal from '@/components/CountdownModal';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-01-15T16:32:11+05:30';
const MODIFIED = '2026-02-05T18:12:48+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'PM Kisan Beneficiary List' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Complete Guide' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide' },
];

const FAQS_DATA = [
  {
    q: 'Bhai form kahan se milega?',
    a: 'Dekho bhai, apne state ki agriculture department ki website par jao. Ya phir seedha Patwari se mil lo, wo de dega. CSC center par bhi mil jata hai. Har state ka form alag hota hai, isliye apne state wala hi lena.',
  },
  {
    q: 'Kitne din lagte hain?',
    a: 'Form dene ke baad Patwari verify karta hai, phir BAO approve karta hai. Total 15 se 30 din lagte hain. Kabhi kabhi 45 din bhi lag jate hain agar Patwari busy ho ya koi dikkat ho.',
  },
  {
    q: 'Khasra number kahan se milega?',
    a: 'Bhai Khatauni mein likha hota hai. Agar Khatauni nahi hai toh apne state ke Bhulekh portal par jao. District, tehsil, village select karo, khasra mil jayega. Ya Patwari ko phone kar lo, wo bata dega.',
  },
  {
    q: 'Paise lagenge kya?',
    a: 'Form toh free hai bhai. Par CSC wale ₹20-50 le sakte hain apni mehnat ke. Agar koi ₹200-500 maang raha hai toh wo loot raha hai. Mana kar do aur dusre center jao.',
  },
  {
    q: 'Land seeding status online kaise pata chalega?',
    a: 'pmkisan.gov.in par Farmers Corner mein "Beneficiary Status" option hai — apna registration number ya Aadhaar daal kar dekh lo. Wahan land seeding ka row alag se dikhega, "Seeded" ya "Not Seeded" likha hoga.',
  },
  {
    q: 'Land seeding online apply karne ki koi last date hai kya?',
    a: 'Nahi, ismein koi fixed last date nahi hoti. Jab bhi status "Pending" dikhe, tabhi form jama karwa sakte ho — jitni jaldi karoge, agli kist utni jaldi milne ke chances rahenge.',
  },
];

// Har state ka OFFICIAL land-records (Bhulekh) portal — DILRMP (dilrmp.gov.in) ki
// state-wise RoR list se verify kiya gaya. Jin states/UTs ka dedicated portal nahi
// hai (DILRMP me "Not Available"), wahan state ka official govt portal diya hai.
const STATE_LINKS = [
  { name: 'Uttar Pradesh', url: 'https://upbhulekh.gov.in', slug: 'uttar-pradesh' },
  { name: 'Bihar', url: 'https://biharbhumi.bihar.gov.in', slug: 'bihar' },
  { name: 'Madhya Pradesh', url: 'https://mpbhulekh.gov.in', slug: 'madhya-pradesh' },
  { name: 'Rajasthan', url: 'https://apnakhata.rajasthan.gov.in', slug: 'rajasthan' },
  { name: 'Maharashtra', url: 'https://bhulekh.mahabhumi.gov.in', slug: 'maharashtra' },
  { name: 'West Bengal', url: 'https://banglarbhumi.gov.in', slug: 'west-bengal' },
  { name: 'Gujarat', url: 'https://anyror.gujarat.gov.in', slug: 'gujarat' },
  { name: 'Karnataka', url: 'https://landrecords.karnataka.gov.in', slug: 'karnataka' },
  { name: 'Tamil Nadu', url: 'https://eservices.tn.gov.in', slug: 'tamil-nadu' },
  { name: 'Telangana', url: 'https://dharani.telangana.gov.in', slug: 'telangana' },
  { name: 'Andhra Pradesh', url: 'https://meebhoomi.ap.gov.in', slug: 'andhra-pradesh' },
  { name: 'Odisha', url: 'https://bhulekh.ori.nic.in', slug: 'odisha' },
  { name: 'Punjab', url: 'https://jamabandi.punjab.gov.in', slug: 'punjab' },
  { name: 'Haryana', url: 'https://jamabandi.nic.in', slug: 'haryana' },
  { name: 'Jharkhand', url: 'https://jharbhoomi.jharkhand.gov.in', slug: 'jharkhand' },
  { name: 'Chhattisgarh', url: 'https://bhuiyan.cg.nic.in', slug: 'chhattisgarh' },
  { name: 'Assam', url: 'https://ilrms.assam.gov.in', slug: 'assam' },
  { name: 'Uttarakhand', url: 'https://bhulekh.uk.gov.in', slug: 'uttarakhand' },
  { name: 'Himachal Pradesh', url: 'https://lrc.hp.nic.in', slug: 'himachal-pradesh' },
  { name: 'Jammu & Kashmir', url: 'https://landrecords.jk.gov.in', slug: 'jammu-kashmir' },
  { name: 'Kerala', url: 'https://erekha.kerala.gov.in', slug: 'kerala' },
  { name: 'Goa', url: 'https://dslr.goa.gov.in', slug: 'goa' },

  { name: 'Tripura', url: 'https://jami.tripura.gov.in', slug: 'tripura' },
  { name: 'Manipur', url: 'https://louchapathap.nic.in', slug: 'manipur' },
  { name: 'Meghalaya', url: 'https://meghalaya.gov.in', slug: 'meghalaya' },
  { name: 'Nagaland', url: 'https://nagaland.gov.in', slug: 'nagaland' },
  { name: 'Arunachal Pradesh', url: 'https://arunachalpradesh.gov.in', slug: 'arunachal-pradesh' },
  { name: 'Mizoram', url: 'https://landrevenue.mizoram.gov.in', slug: 'mizoram' },
  { name: 'Sikkim', url: 'https://sikkim.gov.in', slug: 'sikkim' },

  { name: 'Delhi', url: 'https://dlrc.delhi.gov.in', slug: 'delhi' },
  { name: 'Puducherry', url: 'https://revenue.py.gov.in', slug: 'puducherry' },
  { name: 'Chandigarh', url: 'https://chandigarh.gov.in', slug: 'chandigarh' },
  { name: 'Andaman & Nicobar', url: 'https://andaman.gov.in', slug: 'andaman-nicobar' },
  { name: 'Dadra & Nagar Haveli', url: 'https://ddd.gov.in', slug: 'dadra-nagar-haveli' },
  { name: 'Daman & Diu', url: 'https://ddd.gov.in', slug: 'daman-diu' },
  { name: 'Lakshadweep', url: 'https://lakshadweep.gov.in', slug: 'lakshadweep' },
  { name: 'Ladakh', url: 'https://ladakh.gov.in', slug: 'ladakh' },
];

export default function PmKisanLandSeedingFormPdf2026() {
  const [modal, setModal] = useState<{ stateName: string; url: string; slug: string } | null>(null);

  return (
    <>
      {modal && (
        <CountdownModal
          title="Please Wait"
          message={`${modal.stateName} land seeding form download karne ke liye thoda intezaar karein...`}
          redirectUrl=""
          onClose={() => setModal(null)}
          borderColorClass="border-blue-500"
          countdownNote="seconds baad download link milega"
          infoNote={`${modal.stateName} bhulekh portal se aap land seeding form, khasra khatauni details aur PM Kisan se judi saari jaankari le sakte hain.`}
          readyContent={
            <>
              <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-500 rounded-lg p-4">
                <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
                   {modal.stateName} Land Seeding Form Ready Hai!
                </p>
                <Link
                  href={`/articles/pm-kisan-land-seeding-form/download?state=${modal.slug}&redirect=${encodeURIComponent(modal.url)}`}
                  className="inline-block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-base font-bold rounded-lg transition-colors animate-pulse"
                >
                   Click to Download PDF
                </Link>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Upar diye gaye button par click karein
              </p>
            </>
          }
        />
      )}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Land Seeding Form</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Form Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Land Seeding Form PDF Download 2026: State Wise Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-hero.webp"
            alt="PM Kisan land seeding form PDF download — state wise form with khasra khatauni details"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Land Seeding Form 2026 — Official State Portal Links
          </p>
        </div>

        <section className="mb-8">
          <SH>Land Seeding Kya Hai? Real Problem Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekhiye, maan lo ek kisan ne PM Kisan yojana ke liye apply kiya. eKYC ho gaya, bank account bhi link ho gaya. Par kai mahine guzarne ke baad bhi paisa nahi aaya.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab status check kiya, toh likha tha — <strong>"Land Seeding Pending"</strong>.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aise mein kisan pareshan ho jaate hain. Patwari ke chakkar kaat-te hain, BAO office jaate hain, par har jagah se alag form maanga jaata hai. Samajh nahi aata ki kaunsa form bharna hai.
          </p>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-problem.webp"
            alt="PM Kisan land seeding pending status confusion — farmer unsure which state form to submit"
            width={800}
            height={450}
            className="w-full rounded-xl mb-4"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isi problem ko solve karne ke liye humne yeh guide banaya hai. Yahan aapko har state ka land seeding form, status check karne ka tarika aur step-by-step process mil jayega. Agar aap bhi beneficiary list mein apna naam dhundh rahe hain aur land seeding pending dikh raha hai, toh yeh article end tak padhein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Status Online Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Form bharne se pehle ye zaroor pata karo ki abhi status kya hai — kahin aisa na ho ki jo pehle se ho chuka hai, wahi dobara bhar do. Do jagah check kar sakte ho:
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-2 mt-4">1. PM Kisan Portal Par</h3>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholein</SI>
            <SI n={2}>Farmers Corner mein <strong>Beneficiary Status</strong> par click karein</SI>
            <SI n={3}>Registration number ya Aadhaar number daalein, OTP verify karein</SI>
            <SI n={4}>Status table mein land seeding ka row dhoondein — "Seeded" ya "Not Seeded" likha milega</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-2 mt-6">2. State Ke Bhulekh Portal Par (Land Record Seeding Status)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kabhi kabhi PM Kisan portal par "Seeded" dikhata hai, par actual record galat link hota hai — naam ya khasra number mismatch ki wajah se. Isliye apne state ke Bhulekh portal (jaise UP ke liye upbhulekh.gov.in, Rajasthan ke liye apnakhata.rajasthan.gov.in) par jaakar apna khasra-khatauni nikaal kar khud verify kar lena zyada safe rehta hai.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status Dikhta Hai</th>
                  <th className="p-3 text-left">Matlab Kya Hai</th>
                  <th className="p-3 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Seeded', 'Zameen ka record sahi se link ho chuka hai', 'Kuch nahi, aage ki kist ka wait karein'],
                  ['Not Seeded', 'Record abhi link nahi hua', 'Neeche diya form bharein'],
                  ['Pending Verification', 'Form jama ho gaya, Patwari check kar raha hai', '15-30 din wait karein'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            Status "Not Seeded" dikhe tabhi form bharna zaroori hai — agar pehle se "Seeded" ho, toh dobara form jama karne ki zaroorat nahi.
          </IB>
        </section>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">
             State Wise Land Seeding Form - Official Links
          </h2>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Status "Not Seeded" dikha? Apne state ka form download karne ke liye niche diye gaye button par click karein. 10 second countdown ke baad download page khulega.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
            {STATE_LINKS.map((state) => (
              <div key={state.name} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{state.name}</span>
                <button
                  onClick={() => setModal({ stateName: state.name, url: state.url, slug: state.slug })}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>
          <IB>
            <strong>Form download karne mein dikkat aa rahi hai?</strong> Aap apne local Patwari ya nearest <Link href="/articles/PmKisanBeneficiaryList2026" className="underline">Block Agriculture Office</Link> se sampark kar sakte hain.
          </IB>
        </div>

        <section className="mb-8">
          <SH>Land Seeding Form Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan samman nidhi ka paisa tabhi milta hai jab kisan ki zameen ka record government database mein link ho jaye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is process ko <strong>Land Seeding</strong> kehte hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-sm text-green-800 dark:text-green-300">Form Bharo</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Khasra-Khatauni details</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-sm text-blue-800 dark:text-blue-300">Verification</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Patwari check karega</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-sm text-amber-800 dark:text-amber-300">Paisa Milega</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">15-30 din mein</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>State Wise Land Seeding Form Details</SH>

          <h3 id="uttar-pradesh" className="font-black text-[var(--color-text)] text-base mb-3 mt-6 scroll-mt-24">🏔️ Uttar Pradesh</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            UP mein sabse zyada kisan online hi kaam nipta lete hain — upbhulekh portal kaafi seedha aur accessible hai, isliye Patwari ke paas jaane ki zaroorat kam hi padti hai.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Form Ka Naam:</strong> UP PM Kisan Land Seeding Form 2026
            </p>
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Kahan Se Milega:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1 mb-3">
              <li><Link href="https://upbhulekh.gov.in" className="underline">upbhulekh.gov.in</Link> se download karein</li>
              <li>Apne Patwari se prapt karein</li>
              <li>Nazdiki CSC center par bhi uplabdh hai</li>
            </ul>
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1">
              <li>Khatauni ki copy</li>
              <li>Khasra naksha</li>
              <li>Aadhaar card</li>
              <li>Bank passbook</li>
            </ul>
          </div>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/up-land-seeding-form-sample.webp"
            alt="Uttar Pradesh land seeding form sample with fields"
            width={800}
            height={600}
            className="w-full rounded-xl mb-4"
          />

          <h3 id="bihar" className="font-black text-[var(--color-text)] text-base mb-3 mt-6 scroll-mt-24">🌊 Bihar</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bihar mein process thoda dheema hai, khaaskar monsoon mein — nadiyon ke aas-paas ke ilakon mein Circle Officer records verify karne mein zyada waqt lagate hain. Isliye jitni jaldi ho sake apply kar dein.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
              <strong>Form Ka Naam:</strong> Bihar PM Kisan Land Seeding Application
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
              <strong>Kahan Se Milega:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-1 mb-3">
              <li><Link href="https://biharbhumi.bihar.gov.in" className="underline">biharbhumi.bihar.gov.in</Link></li>
              <li>Circle Officer office</li>
              <li>Block Agriculture Office</li>
            </ul>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Processing Time:</strong> Aamtaur par 20-30 din (flood-prone ilakon mein samay thoda badh sakta hai)
            </p>
          </div>

          <h3 id="madhya-pradesh" className="font-black text-[var(--color-text)] text-base mb-3 mt-6 scroll-mt-24">🌿 Madhya Pradesh</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            MP ka system in charon states mein sabse zyada digital-friendly hai — Khasra number daalte hi baaki details khud-ba-khud fill ho jaati hain, manual entry ki galti ki gunjaish kam rehti hai.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-500 dark:border-purple-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
              <strong>Form Ka Naam:</strong> MP Land Seeding Form (Bhu-Abhilekh)
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
              <strong>Online Process:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-purple-800 dark:text-purple-300 space-y-1">
              <li><Link href="https://mpbhulekh.gov.in" className="underline">mpbhulekh.gov.in</Link> par jaayein</li>
              <li>Services me <strong>Bhu-Abhilekh (Khasra/Khatauni)</strong> chunein — saadharan copy free milti hai</li>
              <li>Zila, tehsil, gaon select karke apna Khasra number darj karein</li>
              <li>Khasra-Khatauni ki copy nikaal kar form ke saath lagayein</li>
            </ul>
          </div>

          <h3 id="rajasthan" className="font-black text-[var(--color-text)] text-base mb-3 mt-6 scroll-mt-24">☀️ Rajasthan</h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
              <strong>Form Ka Naam:</strong> Rajasthan PM Kisan Land Seeding Form (PDF)
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
              <strong>Kahan Se Milega:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-amber-800 dark:text-amber-300 space-y-1">
              <li><Link href="https://apnakhata.rajasthan.gov.in" className="underline">apnakhata.rajasthan.gov.in</Link> — yahin se PDF bhi mil jaata hai</li>
              <li>E-Mitra center</li>
              <li>Tehsil office</li>
            </ul>
            <p className="text-xs text-amber-800 dark:text-amber-300 mt-3">
              Rajasthan mein <strong>land seeding form ka PDF</strong> zyada tar Apna Khata portal se hi download hota hai — wahan Jamabandi ki nakal bhi saath mein mil jaati hai, toh do kaam ek saath ho jaate hain. Aas-paas E-Mitra center ho toh wahan bhi yahi form bhar diya jaata hai.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Form Kaise Bharein? Step-by-Step</SH>
          <StepList>
            <SI n={1}>Sabse pehle form download karein ya apne Patwari se prapt karein.</SI>
            <SI n={2}>Form mein apna poora naam aur Aadhaar number dhyanpurvak likhein.</SI>
            <SI n={3}>Apne Khasra number aur Khatauni number sahi-sahi bharein.</SI>
            <SI n={4}>Zameen ka kul kshetra (hectare ya acre mein) mention karein.</SI>
            <SI n={5}>Apna Bank account number aur IFSC code darj karein.</SI>
            <SI n={6}>Form ko Patwari se verify karwa kar unka sign aur stamp lagwayein.</SI>
            <SI n={7}>Iske baad form ko Block Agriculture Office mein jama karein.</SI>
            <SI n={8}>Lagbhag 15 se 30 din baad portal par apna <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">status check</Link> karein.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-filled-sample.webp"
            alt="PM Kisan land seeding form filled sample — khasra khatauni and bank details example"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong> Zaroori Salah:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Form ko hamesha black ya blue pen se hi bharein.</li>
              <li>Dhyan rahe ki Khasra number Khatauni se bilkul match kare.</li>
              <li>Patwari ka sign aur stamp hona anivarya hai.</li>
              <li>Submit karne se pehle form ki ek photocopy zaroor apne paas rakh lein.</li>
            </ul>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Common Problems + Solutions</SH>
          <div className="space-y-3">
            {[
              { problem: 'Khasra number galat likh diya', solution: 'Khatauni ko dhyan se check karein aur Patwari se sahi number verify karwa lein.' },
              { problem: 'Naam mein mismatch hai', solution: 'Aadhaar card aur Khatauni mein naam bilkul ek jaisa hona chahiye, zaroorat padne par correction karwa lein.' },
              { problem: 'Patwari sign karne mein aanaakaani kar rahe hain', solution: 'Aise mein Tehsil office ya Revenue Inspector ke paas jaakar shikayat darj kar sakte hain.' },
              { problem: 'Form reject ho gaya', solution: 'BAO se rejection ka kaaran jaanein, galti sudhaar kar dobara submit karein.' },
              { problem: 'Status "Seeded" dikha raha hai par paisa phir bhi nahi aaya', solution: 'Ho sakta hai land seeding aur payment ke beech koi aur rukawat ho — Aadhaar seeding ya bank details bhi check karwa lein.' },
            ].map(({ problem, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{problem}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Aise Sudharein:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Mein Kitna Time Lagta Hai?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kya Hota Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Form Submission', 'Day 1', 'Block Agriculture Office mein form jama hota hai.'],
                  ['Patwari Verification', 'Day 2-7', 'Patwari zameen ke record ka verification karta hai.'],
                  ['BAO Approval', 'Day 8-15', 'Block Agriculture Officer form ko approve karke sign karte hain.'],
                  ['Database Update', 'Day 16-30', 'PM Kisan portal par aapka record update ho jata hai.'],
                ].map(([stage, time, desc], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Land seeding koi bada technical kaam nahi hai — bas kaagaz sahi honi chahiye aur Khasra number Khatauni se match karna chahiye. Pehle status check karein, "Not Seeded" dikhe tabhi form bharein, aur Patwari ka sign lagwana kabhi mat bhoolein. Ek baar record link ho jaaye, toh dobara ye jhanjhat nahi hoti.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Land Seeding Ke Baare Mein Log Kya Puchte Hain
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Land Seeding Form FAQ 2026" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Apna Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
