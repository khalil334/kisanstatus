'use client';

import { useState } from 'react';
import Link from 'next/link';

const SITE_URL = 'https://kisanstatus.com';
const SITE_NAME = 'KisanStatus';
const AUTHOR_NAME = 'KisanStatus Team';
const AUTHOR_URL = `${SITE_URL}/about`;
const PUBLISHED = '2026-03-10T08:00:00+05:30';
const MODIFIED = '2026-07-09T08:00:00+05:30';

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('hi-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function QuickStatusChecker() {
  const [aadhaar, setAadhaar] = useState('');
  const [mobile, setMobile] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [redirectFailed, setRedirectFailed] = useState(false);

  const OFFICIAL_URL = 'https://pmkisan.gov.in/BeneficiaryStatus.aspx';
  const FALLBACK_URL = 'https://pmkisan.gov.in';



  const handleCheckNow = () => {
    setError('');
    setRedirectFailed(false);

    if (!aadhaar && !mobile && !regNumber) {
      setError('⚠️ Bhai, kam se kam ek toh detail daalo — Aadhaar, mobile ya registration number.');
      return;
    }

    if (aadhaar && (aadhaar.length !== 12 || !/^\d+$/.test(aadhaar))) {
      setError('⚠️ Aadhaar number 12 digit ka hona chahiye.');
      return;
    }

    if (mobile && (mobile.length !== 10 || !/^[6-9]\d{9}$/.test(mobile))) {
      setError('⚠️ Mobile number 10 digit ka hona chahiye.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      try {
        const newWindow = window.open(OFFICIAL_URL, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          setRedirectFailed(true);
        }
      } catch {
        setRedirectFailed(true);
      }
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/40 py-8 md:py-12">
      <div className="container-site max-w-2xl mx-auto px-4">

        {}
        <div className="relative text-center mb-8 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl shadow-green-900/20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)' }} />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-green-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              🔍 Free Status Check Tool
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3 leading-tight">
              PM Kisan Status Check Karo
            </h1>
            <p className="text-green-100/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Apna Aadhaar number, mobile number ya registration number daalo. 
              <br />
              Seedha official portal par apna status check kar sakte ho.
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 mb-4">
          <span>✍️ <Link href="/about" className="underline hover:text-gray-700">{AUTHOR_NAME}</Link></span>
          <span>📅 {fmtDate(PUBLISHED)}</span>
          <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
        </div>

        {}
        <div className="mb-6 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-3 flex items-center gap-2">
            <span>📖</span> PM Kisan Status Check Kaise Karein?
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Status check karna asal mein kaafi seedha kaam hai — <strong>Aadhaar number</strong>, <strong>mobile number</strong>, ya <strong>registration number</strong>, in mein se koi bhi ek daalo aur apni kist ka status dekh lo.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>24vi kist October 2026</strong> mein aane wali hai — ₹2,000 seedha bank account mein aayega. Agar <strong>eKYC</strong> abhi tak complete nahi kiya hai toh pehle wahi kar lena, warna kist wahin atak jayegi.
          </p>
          <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-xs text-green-800 font-bold mb-1">💡 Quick Tip:</p>
            <p className="text-xs text-green-700">Upar Aadhaar number daal ke "Status Check Karo" dabao — seedha pmkisan.gov.in par pahunch jaoge, wahan apna asli status dikhega.</p>
          </div>
        </div>

        {}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 border border-white/60 p-6 md:p-8">

          {redirectFailed && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800 font-semibold mb-2">⚠️ Portal directly open nahi hua?</p>
              <p className="text-xs text-blue-700 mb-3">
                Shayad popup blocker on hai. Neeche button se manually jaao:
              </p>
              <a
                href={FALLBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                🏛️ Official Portal Kholein →
              </a>
            </div>
          )}

          {isProcessing ? (
            <div className="text-center py-16">
              <div className="relative inline-block mb-6">
                <div className="w-14 h-14 border-4 border-green-200 rounded-full" />
                <div className="absolute top-0 left-0 w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Ruko...</h3>
              <p className="text-gray-500 text-sm">Official portal par redirect ho raha hai</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-lg">📝</span>
                Apni Details Daalo
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Aadhaar Number <span className="text-gray-400 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    placeholder="XXXX XXXX XXXX"
                    className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-lg tracking-[0.15em] font-mono placeholder:tracking-normal placeholder:font-sans placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Mobile Number <span className="text-gray-400 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-lg tracking-[0.15em] font-mono placeholder:tracking-normal placeholder:font-sans placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Registration Number <span className="text-gray-400 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="PM Kisan Registration ID"
                    className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-lg font-mono placeholder:font-sans placeholder:text-gray-300"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 text-center font-medium animate-pulse">
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckNow}
                className="w-full mt-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-green-600/30 active:scale-[0.99] flex items-center justify-center gap-2"
              >
                🔍 Status Check Karo
              </button>

              <p className="text-center text-[11px] text-gray-400 mt-4 flex items-center justify-center gap-1">
                🔒 100% Safe — Aapka data kahin save nahi hota
              </p>
            </>
          )}
        </div>

        {}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-4 rounded-xl text-center">
            <span className="text-xl block mb-1">💰</span>
            <p className="font-black text-gray-900 text-sm">₹2,000</p>
            <p className="text-[10px] text-gray-500 font-medium">Har Kist</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-4 rounded-xl text-center">
            <span className="text-xl block mb-1">🔐</span>
            <p className="font-black text-gray-900 text-sm">eKYC</p>
            <p className="text-[10px] text-gray-500 font-medium">Zaroori Hai</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-4 rounded-xl text-center">
            <span className="text-xl block mb-1">📞</span>
            <p className="font-black text-gray-900 text-sm">155261</p>
            <p className="text-[10px] text-gray-500 font-medium">Helpline</p>
          </div>
        </div>

        {}
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-black text-gray-900 text-sm mb-4">📋 PM Kisan Status Check Karne Ka Tarika</h3>
          <div className="space-y-3">
            {[
              {n:1, s:'pmkisan.gov.in kholo — upar button se seedha khul jayega'},
              {n:2, s:'"Farmers Corner" menu par click karo'},
              {n:3, s:'"Beneficiary Status" chun lo'},
              {n:4, s:'Aadhaar, mobile ya bank account number, koi bhi ek daal do'},
              {n:5, s:'"Get Data" dabao'},
              {n:6, s:'Saari kiston ka status saamne aa jayega — kab aayi, kitni aayi'},
            ].map(({n, s}) => (
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-black text-gray-900 text-sm mb-4">⚠️ Status Check Mein Common Problems</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="font-bold text-red-900 text-xs mb-1">❌ "No Records Found" aata hai</p>
              <p className="text-xs text-red-800">Matlab abhi aapka naam beneficiary list mein hai hi nahi — registration karna padega, ya patwari se land records update karwana hoga.</p>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl">
              <p className="font-bold text-orange-900 text-xs mb-1">⏳ "FTO Generated" dikh raha hai par paisa nahi aaya</p>
              <p className="text-xs text-orange-800">Ghabrao mat, bank tak pahunchne mein aksar 7-10 din lag jaate hain. 15 din se zyada ho jaye toh bank ya helpline 155261 try karo.</p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="font-bold text-yellow-900 text-xs mb-1">🔒 "eKYC Pending" dikh raha hai</p>
              <p className="text-xs text-yellow-800">Isse turant nipta do — CSC center jao ya Aadhaar OTP se online kar lo. Bina eKYC ke kist nahi aayegi.</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="font-bold text-blue-900 text-xs mb-1">🏦 "Bank Account Not Seeded" error</p>
              <p className="text-xs text-blue-800">Bank account ko PM Kisan se link karna padega — bank jao, Aadhaar seed karwao, phir portal par update kar do.</p>
            </div>
          </div>
        </div>

        {}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-sm">📚 Problem Aaye Toh Yeh Padhein:</h3>
            <a
              href="https://pmkisan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
            >
              🏛️ pmkisan.gov.in ↗
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/PmKisan24viKist2026" className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all">
              📆 24vi Kist Status →
            </Link>
            <Link href="/articles/PmKisanEkycOnline2026" className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all">
              🔐 eKYC Guide →
            </Link>
            <Link href="/articles/PmKisanPaymentFailedFix2026" className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all">
              💸 Payment Fix →
            </Link>
            <Link href="/articles/PmKisanMasterGuide2026" className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all">
              📚 Complete Guide →
            </Link>
            <Link href="/articles/PmKisanBeneficiaryList2026" className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all">
              📋 Beneficiary List →
            </Link>
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="p-2.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg text-xs font-semibold text-gray-700 hover:text-green-700 transition-all">
              💳 KCC Loan →
            </Link>
          </div>
        </div>

        {}
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-black text-gray-900 text-sm mb-4">❓ PM Kisan Status Ke Baare Mein Sawaal</h3>
          <div className="space-y-3 text-xs">
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">PM Kisan status kaise check karein?</summary>
              <p className="mt-2 text-gray-700">pmkisan.gov.in par jaake "Farmers Corner" se "Beneficiary Status" chuno, Aadhaar ya mobile number daal ke "Get Data" dabao — saari kiston ka status saamne aa jayega.</p>
            </details>
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">24vi kist kab aayegi?</summary>
              <p className="mt-2 text-gray-700">24vi kist October 2026 mein aane ki ummeed hai — ₹2,000 seedha bank account mein. Uske pehle eKYC complete kar lena zaroori hai, warna kist atak jayegi.</p>
            </details>
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Status mein "FTO Generated" ka matlab kya hai?</summary>
              <p className="mt-2 text-gray-700">FTO yani Fund Transfer Order generate ho chuka hai — matlab government ne paisa bhej diya hai. 7-10 din mein bank account mein pahunch jata hai, 15 din se zyada ho jaye toh bank check karo.</p>
            </details>
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kist kyun ruki hai?</summary>
              <p className="mt-2 text-gray-700">Zyadatar teen reasons hote hain — eKYC nahi hua, bank account link nahi hai, ya land records mein galti hai. Status check karne par exact reason dikh jata hai, usi ko fix karo.</p>
            </details>
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">PM Kisan helpline number kya hai?</summary>
              <p className="mt-2 text-gray-700">155261 (toll-free), Mon-Sat 9:30 AM se 6:00 PM tak. Email par bhi likh sakte ho — pmkisan-ict@gov.in. Koi bhi problem ho, seedha call kar do.</p>
            </details>
          </div>
        </div>

        {}
        <div className="mt-5 p-3 bg-amber-50/80 border border-amber-200/60 rounded-xl text-[11px] text-amber-800 text-center leading-relaxed">
          ⚠️ Yeh tool aapko seedha <strong>pmkisan.gov.in</strong> par le jayega. Real status sirf official website par hi dikhega. KisanStatus.com ek independent portal hai — government se affiliated nahi hai.
        </div>
      </div>
    </div>
    </>
  );
}
