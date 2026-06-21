'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SelectField, ResultRow, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

// 23vi kist already released 20 June 2026. Adjust INSTALLMENT_DATE if a future kist date is officially confirmed.
const INSTALLMENT_NAME = '23वीं किस्त';
const INSTALLMENT_DATE = new Date('2026-06-20T00:00:00+05:30');
const NEXT_INSTALLMENT_WINDOW = '24वीं किस्त — Sept-Nov 2026 (Expected)';

export default function InstallmentTrackerCalcPage() {
  const [ekyc, setEkyc]       = useState('yes');
  const [seeding, setSeeding] = useState('yes');
  const [land, setLand]       = useState('yes');
  const [status, setStatus]   = useState('active');

  const today = new Date();
  const daysSince = Math.floor((today.getTime() - INSTALLMENT_DATE.getTime()) / 86400000);

  const allGood = ekyc==='yes' && seeding==='yes' && land==='yes' && status==='active';

  const blockers: { icon:string; title:string; desc:string; href:string; cta:string }[] = [];
  if (ekyc==='no') blockers.push({
    icon:'🔐', title:'eKYC Pending', desc:'Bina eKYC ke kist kabhi nahi aayegi — chahe baaki sab sahi ho.',
    href:'/articles/pm-kisan-ekyc-online-2026', cta:'eKYC Guide Padho',
  });
  if (seeding==='no') blockers.push({
    icon:'🏦', title:'Bank Aadhaar Seeding Pending', desc:'NPCI seeding ke bina DBT fail ho jaata hai.',
    href:'/articles/pm-kisan-payment-failed-status-2026', cta:'Payment Fix Guide',
  });
  if (land==='no') blockers.push({
    icon:'🌾', title:'Land Seeding No', desc:'Zameen ka record portal se link nahi hua.',
    href:'/articles/pm-kisan-land-seeding-status-check', cta:'Land Seeding Fix',
  });
  if (status==='rejected') blockers.push({
    icon:'❌', title:'Status Rejected', desc:'Rejection ka reason check karke fix karna hoga.',
    href:'/articles/pm-kisan-rejected-list-2026', cta:'Rejected List Guide',
  });

  const schema = {
    '@context':'https://schema.org','@type':'WebApplication',
    name:'PM Kisan Installment & eKYC Status Tracker 2026',
    url:'https://kisanstatus.com/calculator/installment-tracker',
    applicationCategory:'FinanceApplication',
    description:'PM Kisan 23vi kist status tracker — eKYC, bank seeding, land seeding aur beneficiary status check karke pata karo kist kyun ruki hai.',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    author:{'@type':'Person',name:'Sidhu Singh'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      <CalcHeader
        emoji="📆"
        title="PM Kisan Installment Status Tracker 2026"
        subtitle="23vi kist aayi ya nahi — 4 sawaal mein pata karo kahan atki hai"
        breadcrumb="Installment Tracker"
      />

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

          <SelectField
            label="eKYC complete hai?"
            value={ekyc} onChange={setEkyc}
            options={[
              {value:'yes', label:'✅ Haan — eKYC Done hai'},
              {value:'no',  label:'❌ Nahi — pending hai'},
            ]}
          />
          <SelectField
            label="Bank account mein Aadhaar seeded (NPCI link) hai?"
            value={seeding} onChange={setSeeding}
            options={[
              {value:'yes', label:'✅ Haan — bank ne confirm kiya'},
              {value:'no',  label:'❌ Pata nahi / Nahi hai'},
            ]}
          />
          <SelectField
            label="Status mein 'Land Seeding No' to nahi dikh raha?"
            value={land} onChange={setLand}
            options={[
              {value:'yes', label:'✅ Land Seeding theek hai'},
              {value:'no',  label:'❌ Land Seeding No dikh raha hai'},
            ]}
          />
          <SelectField
            label="Beneficiary Status kya dikha raha hai?"
            value={status} onChange={setStatus}
            options={[
              {value:'active',   label:'✅ Active'},
              {value:'rejected', label:'❌ Rejected'},
            ]}
          />

          {/* Results */}
          {allGood ? (
            <div className="mt-4 p-5 bg-green-50 border-2 border-green-300 rounded-2xl text-center">
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
            <div className="mt-4 bg-orange-50 border-2 border-orange-300 rounded-2xl p-5">
              <p className="text-xs text-orange-700 font-bold uppercase tracking-wide mb-3">⚠️ {blockers.length} Problem{blockers.length>1?'s':''} Mili</p>
              <div className="space-y-3">
                {blockers.map(b=>(
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
            {icon:'💰',title:'₹2,000 Per Kist',desc:'20 June 2026 ko 23vi kist mein DBT se seedha bank mein'},
            {icon:'🔐',title:'eKYC Sabse Zaroori',desc:'90% pending cases eKYC na hone ki wajah se hote hain'},
            {icon:'📞',title:'Helpline: 155261',desc:'Koi bhi problem ho — free government helpline available'},
          ].map(({icon,title,desc})=>(
            <div key={title} className="p-4 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
              <span className="text-2xl block mb-1">{icon}</span>
              <p className="font-black text-gray-900 text-xs">{title}</p>
              <p className="text-[11px] text-gray-500 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <CalcDisclaimer note="Yeh tracker tumhare diye gaye jawabon ke hisaab se common reasons batata hai." />
        <OtherCalcs current="/calculator/installment-tracker" />

        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="font-bold text-green-900 text-sm mb-2">🔗 Related Guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              {href:'/articles/pm-kisan-23vi-kist-2026-status-check',   l:'📆 23vi Kist Status'},
              {href:'/articles/pm-kisan-ekyc-online-2026',              l:'🔐 eKYC Guide'},
              {href:'/articles/pm-kisan-payment-failed-status-2026',    l:'💸 Payment Failed'},
              {href:'/articles/pm-kisan-land-seeding-status-check',     l:'🌾 Land Seeding'},
              {href:'/articles/pm-kisan-rejected-list-2026',            l:'❌ Rejected Fix'},
            ].map(({href,l})=>(
              <Link key={href} href={href} className="text-xs px-3 py-1.5 bg-white border border-green-200 text-green-800 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
