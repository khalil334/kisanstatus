'use client';
/**
 * InstallmentTrackerClient — Interactive Component
 */
import { useState } from 'react';
import Link from 'next/link';

const INSTALLMENT_NAME = '23वीं किस्त';
const INSTALLMENT_DATE = new Date('2026-06-20T00:00:00+05:30');
const NEXT_INSTALLMENT_WINDOW = '24वीं किस्त — October 2026 (Expected)';

export default function InstallmentTrackerClient() {
  const [ekyc, setEkyc] = useState('unknown');
  const [seeding, setSeeding] = useState('unknown');
  const [land, setLand] = useState('unknown');
  const [status, setStatus] = useState('unknown');

  const today = new Date();
  const daysSince = Math.floor((today.getTime() - INSTALLMENT_DATE.getTime()) / 86400000);

  const allAnswered = ekyc !== 'unknown' && seeding !== 'unknown' && land !== 'unknown' && status !== 'unknown';
  const allGood = allAnswered && ekyc === 'yes' && seeding === 'yes' && land === 'yes' && status === 'active';

  const blockers: { icon: string; title: string; desc: string; href: string; cta: string }[] = [];
  if (ekyc === 'no') blockers.push({
    icon: '🔐', title: 'eKYC Pending', desc: 'Bina eKYC ke kist kabhi nahi aayegi — chahe baaki sab sahi ho.',
    href: '/articles/pm-kisan-ekyc-online-2026', cta: 'eKYC Guide Padho',
  });
  if (seeding === 'no') blockers.push({
    icon: '🏦', title: 'Bank Aadhaar Seeding Pending', desc: 'NPCI seeding ke bina DBT fail ho jaata hai.',
    href: '/articles/pm-kisan-payment-failed-status-2026', cta: 'Payment Fix Guide',
  });
  if (land === 'no') blockers.push({
    icon: '🌾', title: 'Land Seeding No', desc: 'Zameen ka record portal se link nahi hua.',
    href: '/articles/pm-kisan-land-seeding-status-check', cta: 'Land Seeding Fix',
  });
  if (status === 'rejected') blockers.push({
    icon: '❌', title: 'Status Rejected', desc: 'Rejection ka reason check karke fix karna hoga.',
    href: '/articles/pm-kisan-rejected-list-2026', cta: 'Rejected List Guide',
  });

  return (
    <>
      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/calculator" className="hover:text-white">Calculator</Link><span>/</span>
            <span className="text-white">Installment Tracker</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📆 Status Tracker</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Installment Status Tracker 2026
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>⏱️ 5 min check</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-2xl py-8">
        {/* What is this */}
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-gray-700">
          <p>
            <strong>📆 {INSTALLMENT_NAME}</strong> 20 June 2026 ko release ho chuki hai — <strong>9.44 crore+</strong> farmers ko ₹2,000 mil chuke hain.
            Agar tumhare account mein abhi tak nahi aaya, neeche 4 sawaalon ke jawab do — exact reason pata chal jayega.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5 flex items-center gap-2">
            <span>🧮</span> Apna Status Check Karo
          </h2>

          {/* Instruction */}
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800">
            <strong>💡 Pehle ye karo:</strong> Agar tumhe apna status nahi pata, to pehle{' '}
            <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer" className="underline font-bold">
              pmkisan.gov.in par check karo
            </a>
            , phir neeche jawab do.
          </div>

          {/* Select Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">eKYC complete hai?</label>
              <select value={ekyc} onChange={e => setEkyc(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 bg-white">
                <option value="unknown">❓ Pata nahi — pehle check karo</option>
                <option value="yes">✅ Haan — eKYC Done hai</option>
                <option value="no">❌ Nahi — pending hai</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Bank account mein Aadhaar seeded (NPCI link) hai?</label>
              <select value={seeding} onChange={e => setSeeding(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 bg-white">
                <option value="unknown">❓ Pata nahi — bank se pata karo</option>
                <option value="yes">✅ Haan — bank ne confirm kiya</option>
                <option value="no">❌ Pata nahi / Nahi hai</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Status mein 'Land Seeding No' to nahi dikh raha?</label>
              <select value={land} onChange={e => setLand(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 bg-white">
                <option value="unknown">❓ Pata nahi — status check karo</option>
                <option value="yes">✅ Land Seeding theek hai</option>
                <option value="no">❌ Land Seeding No dikh raha hai</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Beneficiary Status kya dikha raha hai?</label>
              <select value={status} onChange={e => setStatus(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 bg-white">
                <option value="unknown">❓ Pata nahi — portal par dekho</option>
                <option value="active">✅ Active</option>
                <option value="rejected">❌ Rejected</option>
              </select>
            </div>
          </div>

          {/* Results */}
          {!allAnswered ? (
            <div className="mt-6 p-5 bg-gray-50 border-2 border-gray-300 rounded-2xl text-center">
              <span className="text-3xl block mb-2">🤔</span>
              <p className="font-bold text-gray-700 mb-2">Sabhi Sawaalon Ke Jawab Do</p>
              <p className="text-sm text-gray-600">
                Upar 4 sawaalon mein se kuch ka jawab "Pata nahi" hai. Pehle apna status check karo, phir yahan accurate result milega.
              </p>
              <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-500 transition-colors mt-3">
                🏛️ Pehle Official Status Check Karo →
              </a>
            </div>
          ) : allGood ? (
            <div className="mt-6 p-5 bg-green-50 border-2 border-green-300 rounded-2xl text-center">
              <span className="text-3xl block mb-2">🎉</span>
              <p className="font-black text-green-800 mb-1">Sab Kuch Sahi Hai!</p>
              <p className="text-sm text-green-700 mb-3">
                eKYC, bank seeding, land seeding aur status — sab theek hai. Agar phir bhi paisa nahi aaya, official portal par seedha check karo.
              </p>
              <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors">
                🏛️ Official Status Check Karo →
              </a>
              <p className="text-xs text-green-600 mt-3">Last release: {INSTALLMENT_NAME} — 20 June 2026 ({daysSince} din pehle)</p>
            </div>
          ) : (
            <div className="mt-6 bg-orange-50 border-2 border-orange-300 rounded-2xl p-5">
              <p className="text-xs text-orange-700 font-bold uppercase tracking-wide mb-3">⚠️ {blockers.length} Problem{blockers.length > 1 ? 's' : ''} Mili</p>
              <div className="space-y-3">
                {blockers.map(b => (
                  <div key={b.title} className="bg-white border border-orange-200 rounded-xl p-3.5">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl shrink-0">{b.icon}</span>
                      <div className="flex-1">
                        <p className="font-black text-gray-900 text-sm">{b.title}</p>
                        <p className="text-xs text-gray-600 mt-0.5 mb-2">{b.desc}</p>
                        <Link href={b.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 hover:text-orange-900">
                          {b.cta} →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next installment info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3">
          <span className="text-2xl">⏳</span>
          <div>
            <p className="font-bold text-blue-900 text-sm">Agli Kist</p>
            <p className="text-xs text-blue-700">{NEXT_INSTALLMENT_WINDOW}</p>
          </div>
        </div>

        {/* Info section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: '💰', title: '₹2,000 Per Kist', desc: '20 June 2026 ko 23vi kist mein DBT se seedha bank mein' },
            { icon: '🔐', title: 'eKYC Sabse Zaroori', desc: '90% pending cases eKYC na hone ki wajah se hote hain' },
            { icon: '📞', title: 'Helpline: 155261', desc: 'Koi bhi problem ho — free government helpline available' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-4 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
              <span className="text-2xl block mb-1">{icon}</span>
              <p className="font-black text-gray-900 text-xs">{title}</p>
              <p className="text-[11px] text-gray-500 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
          <strong>⚠️ Disclaimer:</strong> Yeh tracker tumhare diye gaye jawabon ke hisaab se common reasons batata hai. Final status official portal par hi check karo.
        </div>

        {/* Related Guides */}
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="font-bold text-green-900 text-sm mb-2">🔗 Related Guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '📆 23vi Kist Status' },
              { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 eKYC Guide' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Payment Failed' },
              { href: '/articles/pm-kisan-land-seeding-status-check', label: '🌾 Land Seeding' },
              { href: '/articles/pm-kisan-rejected-list-2026', label: '❌ Rejected Fix' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-xs px-3 py-1.5 bg-white border border-green-200 text-green-800 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}