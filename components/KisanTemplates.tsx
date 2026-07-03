/**
 * KisanTemplates.tsx — Agricultural visual template cards for homepage
 * 4 templates: Welfare Scheme, Credit Facility, Crop Protection, Digital Verification
 * Pure SVG — zero images, zero external deps
 */

'use client';

// ─── Template 1: Agrarian Welfare Scheme Overview ────────────────────────────
function TemplatePMKisanScheme() {
  return (
    <div className="rounded-2xl overflow-hidden border border-green-200 shadow-md hover:shadow-xl transition-shadow group">
      <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="w-full block" role="img" aria-label="Agrarian welfare scheme overview card">
        <defs>
          <linearGradient id="kg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14532d"/>
            <stop offset="100%" stopColor="#16a34a"/>
          </linearGradient>
          <linearGradient id="kg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dcfce7"/>
            <stop offset="100%" stopColor="#f0fdf4"/>
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="480" height="280" fill="url(#kg2)"/>

        {/* Top header bar */}
        <rect width="480" height="72" fill="url(#kg1)"/>

        {/* Wheat stalks decoration in header */}
        {[0,1,2,3,4,5,6].map(i => (
          <g key={i} transform={`translate(${380+i*14},0)`} opacity="0.15">
            <line x1="7" y1="72" x2="7" y2="28" stroke="#fff" strokeWidth="1.5"/>
            <ellipse cx="7" cy="28" rx="4" ry="10" fill="#fff"/>
            <ellipse cx="3" cy="38" rx="3" ry="7" fill="#fff" transform="rotate(-25,3,38)"/>
            <ellipse cx="11" cy="38" rx="3" ry="7" fill="#fff" transform="rotate(25,11,38)"/>
          </g>
        ))}

        {/* Indian flag tri-color strip */}
        <rect x="16" y="14" width="4" height="44" fill="#FF9933"/>
        <rect x="20" y="14" width="4" height="44" fill="#fff"/>
        <rect x="24" y="14" width="4" height="44" fill="#138808"/>

        {/* Govt emblem circle */}
        <circle cx="48" cy="36" r="20" fill="#fff" opacity="0.15"/>
        <text x="48" y="42" textAnchor="middle" fontSize="18">🏛️</text>

        {/* Header title — varied keywords */}
        <text x="80" y="30" fontSize="14" fontWeight="bold" fill="#fff">Cultivator Benefit Program</text>
        <text x="80" y="48" fontSize="10" fill="#a7f3d0">Agrarian Welfare Scheme — Govt. of India</text>
        <text x="80" y="63" fontSize="9" fill="#86efac">Since 2019 • 11 Crore+ Cultivators • Direct Benefit Transfer</text>

        {/* 3 benefit cards — varied terminology */}
        {[
          { x:20, label:'Saalana Benefit', value:'₹6,000', sub:'Teen tranches mein', icon:'💰', color:'#16a34a' },
          { x:180, label:'Har Tranche Mein', value:'₹2,000', sub:'DBT — seedha bank', icon:'🏦', color:'#2563eb' },
          { x:340, label:'Registered', value:'11 Cr+', sub:'Poore India mein', icon:'👨‍🌾', color:'#d97706' },
        ].map(card => (
          <g key={card.label}>
            <rect x={card.x} y="88" width="140" height="80" rx="12" fill="#fff" stroke={card.color} strokeWidth="1.5"/>
            <text x={card.x+15} y="110" fontSize="18">{card.icon}</text>
            <text x={card.x+10} y="128" fontSize="19" fontWeight="900" fill={card.color}>{card.value}</text>
            <text x={card.x+10} y="144" fontSize="9" fontWeight="bold" fill="#374151">{card.label}</text>
            <text x={card.x+10} y="158" fontSize="8" fill="#6b7280">{card.sub}</text>
          </g>
        ))}

        {/* Eligibility strip — varied keywords */}
        <rect x="20" y="182" width="440" height="34" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
        <text x="35" y="200" fontSize="10" fontWeight="bold" fill="#15803d">✅ Eligibility:</text>
        <text x="115" y="200" fontSize="9" fill="#374151">Small cultivator • Land record required • Biometric credential linked bank account</text>
        <text x="35" y="212" fontSize="9" fill="#6b7280">Digital verification zaruri hai • Family mein ek hi member ko milta hai</text>

        {/* Steps row — varied terminology */}
        <text x="20" y="238" fontSize="9" fontWeight="bold" fill="#15803d">📋 Process:</text>
        {[
          'Enroll',
          '→  Verify',
          '→  Confirm',
          '→  ₹2000',
        ].map((step, i) => (
          <g key={step}>
            <rect x={80+i*95} y="226" width="86" height="22" rx="6" fill={i===3?'#16a34a':'#e7f3ec'} stroke={i===3?'#15803d':'#bbf7d0'} strokeWidth="1"/>
            <text x={123+i*95} y="241" textAnchor="middle" fontSize="9" fontWeight={i===3?'bold':'normal'} fill={i===3?'#fff':'#374151'}>{step}</text>
          </g>
        ))}

        {/* Footer */}
        <rect y="260" width="480" height="20" fill="#14532d"/>
        <text x="240" y="274" textAnchor="middle" fontSize="8" fill="#86efac">kisanstatus.com • 100% Free Information • Verified from official portal</text>
      </svg>
      <div className="bg-white px-4 py-3 border-t border-green-100">
        <p className="text-xs font-bold text-green-800">🌾 Cultivator Benefit Program — Complete Overview</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Eligibility, benefit amount aur enrollment process</p>
      </div>
    </div>
  );
}

// ─── Template 2: Credit Facility / KCC Guide ──────────────────────────────
function TemplateKisanLoan() {
  return (
    <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-md hover:shadow-xl transition-shadow group">
      <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="w-full block" role="img" aria-label="Credit facility and loan guide card">
        <defs>
          <linearGradient id="kl1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a5f"/>
            <stop offset="100%" stopColor="#1d4ed8"/>
          </linearGradient>
        </defs>

        <rect width="480" height="280" fill="#eff6ff"/>
        <rect width="480" height="68" fill="url(#kl1)"/>

        {/* Tractor silhouette decoration */}
        <g transform="translate(360,8)" opacity="0.12">
          <rect x="10" y="20" width="80" height="30" rx="4" fill="#fff"/>
          <rect x="0" y="28" width="20" height="22" rx="3" fill="#fff"/>
          <circle cx="75" cy="52" r="14" fill="none" stroke="#fff" strokeWidth="3"/>
          <circle cx="75" cy="52" r="6" fill="#fff"/>
          <circle cx="18" cy="52" r="9" fill="none" stroke="#fff" strokeWidth="2.5"/>
          <circle cx="18" cy="52" r="4" fill="#fff"/>
          <rect x="55" y="8" width="5" height="18" rx="2" fill="#fff"/>
        </g>

        {/* Header — varied keywords */}
        <text x="20" y="28" fontSize="9" fill="#93c5fd">🏦 AGRICULTURAL CREDIT FACILITY</text>
        <text x="20" y="46" fontSize="15" fontWeight="bold" fill="#fff">Credit Facility Guide 2026</text>
        <text x="20" y="61" fontSize="9" fill="#bfdbfe">KCC • Bank Loan • CSC Center — Puri Jankari</text>

        {/* Loan options — varied terminology */}
        {[
          { y:84,  icon:'💳', title:'Credit Facility (KCC)', rate:'4% p.a.', limit:'₹3 Lakh tak', badge:'BEST', badgeClr:'#16a34a' },
          { y:140, icon:'🏛️', title:'Bank Agriculture Loan',   rate:'7-9% p.a.', limit:'Upar tak',   badge:'POPULAR', badgeClr:'#2563eb' },
          { y:196, icon:'🏪', title:'CSC / MFI Loan',           rate:'12-18%', limit:'Chhota amount', badge:'FAST', badgeClr:'#d97706' },
        ].map(opt => (
          <g key={opt.title}>
            <rect x="20" y={opt.y} width="440" height="48" rx="10" fill="#fff" stroke="#dbeafe" strokeWidth="1.5"/>
            <text x="40" y={opt.y+22} fontSize="16">{opt.icon}</text>
            <text x="66" y={opt.y+20} fontSize="11" fontWeight="bold" fill="#1e40af">{opt.title}</text>
            <text x="66" y={opt.y+36} fontSize="9" fill="#6b7280">Byaaj dar: <tspan fill="#16a34a" fontWeight="bold">{opt.rate}</tspan> • Limit: <tspan fill="#374151">{opt.limit}</tspan></text>
            <rect x="370" y={opt.y+10} width="70" height="18" rx="6" fill={opt.badgeClr}/>
            <text x="405" y={opt.y+23} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">{opt.badge}</text>
          </g>
        ))}

        <rect y="258" width="480" height="22" fill="#1e3a5f"/>
        <text x="240" y="273" textAnchor="middle" fontSize="8" fill="#93c5fd">kisanstatus.com • Credit Facility Guide • Free Information</text>
      </svg>
      <div className="bg-white px-4 py-3 border-t border-blue-100">
        <p className="text-xs font-bold text-blue-800">💰 Credit Facility — KCC aur Bank Loan Guide</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Sabse sasta loan kahan se milega — full comparison</p>
      </div>
    </div>
  );
}

// ─── Template 3: Crop Protection / PMFBY ──────────────────────────────────
function TemplateFasalBima() {
  return (
    <div className="rounded-2xl overflow-hidden border border-amber-200 shadow-md hover:shadow-xl transition-shadow group">
      <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="w-full block" role="img" aria-label="Crop protection scheme guide card">
        <defs>
          <linearGradient id="fb1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#78350f"/>
            <stop offset="100%" stopColor="#d97706"/>
          </linearGradient>
          <linearGradient id="fb2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fffbeb"/>
            <stop offset="100%" stopColor="#fef9c3"/>
          </linearGradient>
        </defs>

        <rect width="480" height="280" fill="url(#fb2)"/>

        {/* Sky + field scene */}
        <rect y="60" width="480" height="80" fill="#a3e635" opacity="0.25"/>
        {[...Array(16)].map((_,i)=>(
          <g key={i} transform={`translate(${10+i*30},60)`} opacity="0.35">
            <line x1="8" y1="80" x2="8" y2="30" stroke="#a16207" strokeWidth="2"/>
            <ellipse cx="8" cy="30" rx="5" ry="12" fill="#ca8a04"/>
            <ellipse cx="3" cy="42" rx="4" ry="9" fill="#ca8a04" transform="rotate(-20,3,42)"/>
            <ellipse cx="13" cy="42" rx="4" ry="9" fill="#ca8a04" transform="rotate(20,13,42)"/>
          </g>
        ))}

        {/* Top header — varied keywords */}
        <rect width="480" height="60" fill="url(#fb1)"/>
        <text x="20" y="22" fontSize="9" fill="#fde68a">🌱 CROP PROTECTION SCHEME</text>
        <text x="20" y="42" fontSize="15" fontWeight="bold" fill="#fff">Crop Protection 2026</text>
        <text x="20" y="56" fontSize="9" fill="#fcd34d">Fasal kharab hone par sarkar degi muavza</text>

        {/* Main info box */}
        <rect x="20" y="150" width="440" height="110" rx="14" fill="#fff" fillOpacity="0.9" stroke="#fbbf24" strokeWidth="1.5"/>

        {/* 3 key info items */}
        {[
          { x:30,  emoji:'🌾', label:'Covered Crops', value:'Kharif + Rabi', sub:'Sabzi, dal, anaaj' },
          { x:190, emoji:'💰', label:'Premium Rate',  value:'2% Kharif', sub:'1.5% Rabi crops'     },
          { x:340, emoji:'✅', label:'Claim Process', value:'Online/CSC', sub:'7 din mein settle'   },
        ].map(item => (
          <g key={item.label}>
            <text x={item.x} y="178" fontSize="18">{item.emoji}</text>
            <text x={item.x} y={196} fontSize="10" fontWeight="bold" fill="#92400e">{item.value}</text>
            <text x={item.x} y={210} fontSize="9" fontWeight="bold" fill="#374151">{item.label}</text>
            <text x={item.x} y={223} fontSize="8" fill="#6b7280">{item.sub}</text>
          </g>
        ))}

        {/* How to apply */}
        <text x="30" y="242" fontSize="9" fontWeight="bold" fill="#92400e">📋 Apply Kaise Karein:</text>
        {['Bank', '→ CSC', '→ Online', '→ Mobile App'].map((s,i)=>(
          <g key={s}>
            <rect x={140+i*82} y="232" width="74" height="18" rx="5" fill={i===3?'#d97706':'#fef3c7'} stroke="#fbbf24" strokeWidth="1"/>
            <text x={177+i*82} y="245" textAnchor="middle" fontSize="8" fill={i===3?'#fff':'#78350f'}>{s}</text>
          </g>
        ))}

        <rect y="260" width="480" height="20" fill="#78350f"/>
        <text x="240" y="274" textAnchor="middle" fontSize="8" fill="#fde68a">kisanstatus.com • Crop Protection Guide • Free Information</text>
      </svg>
      <div className="bg-white px-4 py-3 border-t border-amber-100">
        <p className="text-xs font-bold text-amber-800">🌱 Crop Protection Scheme — Complete Guide</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Claim status check aur enrollment guide</p>
      </div>
    </div>
  );
}

// ─── Template 4: Digital Verification Step-by-Step ───────────────────────────
function TemplateEKYC() {
  return (
    <div className="rounded-2xl overflow-hidden border border-purple-200 shadow-md hover:shadow-xl transition-shadow group">
      <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="w-full block" role="img" aria-label="Digital verification step by step guide card">
        <defs>
          <linearGradient id="ek1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4c1d95"/>
            <stop offset="100%" stopColor="#7c3aed"/>
          </linearGradient>
        </defs>

        <rect width="480" height="280" fill="#faf5ff"/>
        <rect width="480" height="68" fill="url(#ek1)"/>

        {/* Phone illustration */}
        <g transform="translate(390,4)" opacity="0.2">
          <rect x="10" y="5" width="50" height="80" rx="8" fill="#fff" stroke="#fff" strokeWidth="2"/>
          <rect x="17" y="15" width="36" height="55" rx="3" fill="#7c3aed"/>
          <circle cx="35" cy="78" r="4" fill="#fff"/>
        </g>

        {/* Header — varied keywords */}
        <text x="20" y="26" fontSize="9" fill="#c4b5fd">🔐 DIGITAL VERIFICATION GUIDE</text>
        <text x="20" y="46" fontSize="15" fontWeight="bold" fill="#fff">Verification Kaise Karo — 2026</text>
        <text x="20" y="62" fontSize="9" fill="#ddd6fe">Bina verification ke tranche NAHI milegi — Abhi karo!</text>

        {/* Warning badge — varied keywords */}
        <rect x="20" y="78" width="440" height="30" rx="8" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
        <text x="240" y="98" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">⚠️ Digital Verification Mandatory Hai — Sabhi Cultivators Karein — Bilkul Free!</text>

        {/* Steps — varied terminology */}
        <text x="20" y="128" fontSize="10" fontWeight="bold" fill="#6d28d9">Step-by-Step Process:</text>

        {[
          { step:'1', title:'Official portal kholein', desc:'Website ya app', icon:'🌐' },
          { step:'2', title:'Verification button dabao',      desc:'Farmers Corner mein milega', icon:'👆' },
          { step:'3', title:'Biometric credential daalo',   desc:'12 digit number', icon:'🪪' },
          { step:'4', title:'OTP verify karo',        desc:'Mobile par OTP aayega', icon:'📱' },
          { step:'5', title:'Done! ✅',               desc:'Verification complete ho gayi', icon:'🎉' },
        ].map((s, i) => (
          <g key={s.step}>
            {i < 4 && <line x1="42" y1={148+i*22} x2="42" y2={158+i*22} stroke="#ddd6fe" strokeWidth="2" strokeDasharray="3"/>}
            <circle cx="42" cy={140+i*22} r="10" fill={i===4?'#16a34a':'#7c3aed'}/>
            <text x="42" y={145+i*22} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">{s.step}</text>
            <text x="62" y={137+i*22} fontSize="9">{s.icon}</text>
            <text x="78" y={138+i*22} fontSize="9" fontWeight="bold" fill="#374151">{s.title}</text>
            <text x="78" y={150+i*22} fontSize="8" fill="#6b7280">{s.desc}</text>
          </g>
        ))}

        {/* CSC option — varied keywords */}
        <rect x="240" y="136" width="220" height="108" rx="10" fill="#f3e8ff" stroke="#ddd6fe" strokeWidth="1"/>
        <text x="350" y="158" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6d28d9">🏪 CSC Center Se Bhi Ho Sakta Hai</text>
        <text x="350" y="174" textAnchor="middle" fontSize="8" fill="#6b7280">Biometric credential scan se</text>
        <text x="350" y="190" textAnchor="middle" fontSize="8" fill="#6b7280">Bujurg cultivators ke liye best option</text>
        <rect x="270" y="200" width="160" height="22" rx="6" fill="#7c3aed"/>
        <text x="350" y="215" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Nearest CSC Khojo →</text>
        <text x="350" y="236" textAnchor="middle" fontSize="8" fill="#7c3aed">locator.csccloud.in</text>

        <rect y="260" width="480" height="20" fill="#4c1d95"/>
        <text x="240" y="274" textAnchor="middle" fontSize="8" fill="#ddd6fe">kisanstatus.com • Digital Verification Guide • Free Help</text>
      </svg>
      <div className="bg-white px-4 py-3 border-t border-purple-100">
        <p className="text-xs font-bold text-purple-800">🔐 Digital Verification — Step by Step Guide</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Online OTP ya CSC biometric — dono tarike</p>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function KisanTemplates() {
  return (
    <section className="py-14 bg-white" aria-labelledby="templates-heading">
      <div className="container-site">
        {/* Section header — varied keywords */}
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            🖼️ Visual Guides
          </span>
          <h2 id="templates-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Agrarian Schemes — Quick Visual Templates
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Welfare scheme, credit facility, crop protection aur digital verification — ek nazar mein samjho
          </p>
        </div>

        {/* 2×2 grid on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TemplatePMKisanScheme />
          <TemplateKisanLoan />
          <TemplateFasalBima />
          <TemplateEKYC />
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          ℹ️ Ye templates sirf jankari ke liye hain — official data ke liye{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">
            pmkisan.gov.in
          </a>{' '}
          dekho
        </p>
      </div>
    </section>
  );
}