/**
 * ArticleKisanBanner.tsx — Reusable SVG banners for article pages
 * 6 different banner types — eKYC, payment, registration, loan, insurance, beneficiary
 * KisanStatus Team — 2026
 */

'use client';

// ─── Digital Verification Banner ─────────────────────────────────────────────
// Purple gradient theme — OTP verification illustration
function BannerEKYC() {
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <defs>
        <linearGradient id="art-ek" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4c1d95"/>
          <stop offset="60%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#art-ek)" rx="14"/>
      {/* Dot pattern background */}
      {[...Array(8)].map((_,r)=>[...Array(20)].map((_,c)=>(
        <circle key={`${r}-${c}`} cx={20+c*40} cy={10+r*28} r="1.5" fill="#fff" opacity="0.06"/>
      )))}
      {/* Left: phone mockup with biometric credential card */}
      <rect x="40" y="30" width="90" height="160" rx="12" fill="#fff" fillOpacity="0.12"/>
      <rect x="50" y="44" width="70" height="108" rx="6" fill="#fff" fillOpacity="0.1"/>
      {/* Biometric credential card illustration */}
      <rect x="55" y="55" width="60" height="38" rx="5" fill="#ff9933" fillOpacity="0.8"/>
      <rect x="55" y="65" width="60" height="18" rx="0" fill="#fff" fillOpacity="0.9"/>
      <rect x="55" y="83" width="60" height="10" rx="0" fill="#138808" fillOpacity="0.8"/>
      <text x="85" y="79" textAnchor="middle" fontSize="7" fill="#1e3a5f" fontWeight="bold">AADHAAR</text>
      {/* OTP input boxes */}
      {[0,1,2,3,4,5].map(i=>(
        <g key={i}>
          <rect x={55+i*10} y="102" width="8" height="10" rx="2" fill="#fff" fillOpacity="0.3"/>
          {i<4&&<text x={59+i*10} y="111" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">{i===0?'5':i===1?'8':i===2?'3':i===3?'•':''}</text>}
        </g>
      ))}
      {/* Success checkmark */}
      <circle cx="85" cy="148" r="14" fill="#16a34a" fillOpacity="0.9"/>
      <text x="85" y="154" textAnchor="middle" fontSize="14">✓</text>

      {/* Center content — varied keywords for SEO */}
      <text x="180" y="55" fontSize="11" fill="#ddd6fe">🔐 AGRARIAN WELFARE DIGITAL VERIFICATION 2026</text>
      <text x="180" y="85" fontSize="24" fontWeight="900" fill="#fff">Biometric credential OTP se</text>
      <text x="180" y="112" fontSize="24" fontWeight="900" fill="#c4b5fd">Digital Verification Karo — Free!</text>
      <text x="180" y="140" fontSize="11" fill="#ddd6fe" fontWeight="normal">Bina verification ke ek bhi tranche nahi milegi.</text>
      <text x="180" y="156" fontSize="11" fill="#ddd6fe">Official portal ya CSC center — dono tarike.</text>
      {/* Step pills — varied terminology */}
      {['Biometric credential daalo','OTP milega','Verify karo','Done ✅'].map((s,i)=>(
        <g key={s}>
          <rect x={180+i*145} y="170" width="132" height="24" rx="8" fill="#fff" fillOpacity={i===3?0.25:0.12}/>
          <text x={246+i*145} y="186" textAnchor="middle" fontSize="9" fill="#fff" fontWeight={i===3?"bold":"normal"}>{`${i+1}. ${s}`}</text>
        </g>
      ))}

      {/* Right decorative fingerprint */}
      {[0,1,2,3,4].map(i=>(
        <ellipse key={i} cx="730" cy="110" rx={20+i*14} ry={12+i*8}
          fill="none" stroke="#fff" strokeWidth="1.5" opacity={0.08+i*0.04}/>
      ))}
      <text x="730" y="116" textAnchor="middle" fontSize="28" opacity="0.3">👆</text>
    </svg>
  );
}

// ─── Payment Failed Banner ────────────────────────────────────────────────────
// Red-orange gradient — warning theme with solution steps
function BannerPayment() {
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <defs>
        <linearGradient id="art-pay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7f1d1d"/>
          <stop offset="50%" stopColor="#dc2626"/>
          <stop offset="100%" stopColor="#f97316"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#art-pay)" rx="14"/>
      {/* Warning triangle left */}
      <polygon points="80,170 140,60 200,170" fill="#fff" fillOpacity="0.1"/>
      <polygon points="90,165 140,72 190,165" fill="#fff" fillOpacity="0.08"/>
      <text x="140" y="138" textAnchor="middle" fontSize="44" opacity="0.5">⚠️</text>

      {/* Center — varied keywords */}
      <text x="240" y="55" fontSize="11" fill="#fca5a5">💸 AGRARIAN WELFARE PAYMENT FAILED — SOLUTIONS 2026</text>
      <text x="240" y="85" fontSize="22" fontWeight="900" fill="#fff">Payment Nahi Aayi?</text>
      <text x="240" y="112" fontSize="22" fontWeight="900" fill="#fed7aa">Yeh 5 Kaam Karo!</text>
      {/* Solution pills — varied terminology */}
      {[
        ['1','Digital verification check karo'],
        ['2','Bank biometric credential seeding'],
        ['3','Land record verify'],
        ['4','NPCI status dekho'],
        ['5','Helpline: 155261'],
      ].map(([n,t],i)=>(
        <g key={n}>
          <rect x={240} y={130+i*16} width={300} height="13" rx="4" fill="#fff" fillOpacity="0.08"/>
          <text x={248} y={141+i*16} fontSize="9" fill={i===4?"#fde68a":"#fff"} fontWeight={i===4?"bold":"normal"}>{`${n}. ${t}`}</text>
        </g>
      ))}

      {/* Right: bank card illustration */}
      <g transform="translate(600,50)">
        <rect width="150" height="95" rx="10" fill="#fff" fillOpacity="0.12"/>
        <rect width="150" height="30" rx="10" fill="#fff" fillOpacity="0.1"/>
        <rect y="30" width="150" height="30" fill="#fff" fillOpacity="0.06"/>
        <rect x="12" y="42" width="126" height="12" rx="2" fill="#dc2626" fillOpacity="0.5"/>
        <text x="75" y="52" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">PAYMENT FAILED</text>
        <text x="75" y="15" textAnchor="middle" fontSize="8" fill="#fff" opacity="0.7">KISAN BANK</text>
        <circle cx="118" cy="15" r="8" fill="#f97316" fillOpacity="0.6"/>
        <circle cx="128" cy="15" r="8" fill="#dc2626" fillOpacity="0.6"/>
        {/* Card number */}
        {['****','****','****','2026'].map((s,i)=>(
          <text key={s+i} x={14+i*34} y="80" fontSize="8" fill="#fff" opacity="0.7" fontFamily="monospace">{s}</text>
        ))}
      </g>
    </svg>
  );
}

// ─── Enrollment Banner ──────────────────────────────────────────────────────
// Green gradient — farmer silhouette with form illustration
function BannerRegistration() {
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <defs>
        <linearGradient id="art-reg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#14532d"/>
          <stop offset="60%" stopColor="#15803d"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#art-reg)" rx="14"/>
      {/* Field rows decoration */}
      {[0,1,2,3].map(i=>(
        <line key={i} x1="0" y1={170+i*14} x2="200" y2={170+i*14} stroke="#fff" strokeWidth="1" opacity="0.05"/>
      ))}
      {/* Farmer silhouette left */}
      <g transform="translate(40,30)" opacity="0.25">
        {/* Body */}
        <circle cx="55" cy="28" r="20" fill="#fff"/>
        <rect x="35" y="48" width="40" height="55" rx="8" fill="#fff"/>
        {/* Arms */}
        <line x1="35" y1="62" x2="10" y2="90" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        <line x1="75" y1="62" x2="100" y2="90" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        {/* Legs */}
        <line x1="45" y1="103" x2="38" y2="140" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        <line x1="65" y1="103" x2="72" y2="140" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        {/* Turban */}
        <ellipse cx="55" cy="16" rx="22" ry="10" fill="#fff"/>
      </g>

      {/* Content — varied keywords */}
      <text x="200" y="52" fontSize="11" fill="#a7f3d0">📝 AGRARIAN WELFARE ENROLLMENT GUIDE 2026</text>
      <text x="200" y="80" fontSize="22" fontWeight="900" fill="#fff">Naya Enrollment</text>
      <text x="200" y="107" fontSize="22" fontWeight="900" fill="#86efac">Kaise Karein — Free!</text>
      <text x="200" y="134" fontSize="10" fill="#d1fae5">Online ya CSC center se — koi bhi fee nahi lagti</text>

      {/* Documents needed — varied terminology */}
      <text x="200" y="158" fontSize="9" fontWeight="bold" fill="#a7f3d0">📄 Zaruri Documents:</text>
      {['🪪 Biometric Credential Card', '🏦 Bank Passbook', '📋 Khasra/Khatauni', '📱 Contact Number'].map((d,i)=>(
        <text key={d} x={200+i*148} y="176" fontSize="8" fill="#fff">{d}</text>
      ))}
      {/* Steps bar */}
      {['Apply','Verify','Approve','₹2000'].map((s,i)=>(
        <g key={s}>
          <rect x={200+i*140} y="186" width="128" height="20" rx="6" fill="#fff" fillOpacity={i===3?0.25:0.12}/>
          <text x={264+i*140} y="200" textAnchor="middle" fontSize="9" fill={i===3?"#fff":"#d1fae5"} fontWeight={i===3?"bold":"normal"}>{`${i+1}. ${s}`}</text>
        </g>
      ))}

      {/* Right: form illustration — varied field names */}
      <g transform="translate(630,30)">
        <rect width="130" height="160" rx="8" fill="#fff" fillOpacity="0.12"/>
        <text x="65" y="22" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold">ENROLLMENT</text>
        {['Name','Biometric Credential','Bank A/C','Contact','Village'].map((f,i)=>(
          <g key={f}>
            <text x="10" y={42+i*24} fontSize="7" fill="#a7f3d0">{f}</text>
            <rect x="10" y={46+i*24} width="110" height="10" rx="3" fill="#fff" fillOpacity="0.15"/>
          </g>
        ))}
        <rect x="10" y="152" width="110" height="18" rx="6" fill="#16a34a"/>
        <text x="65" y="165" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">SUBMIT →</text>
      </g>
    </svg>
  );
}

// ─── Credit Facility Banner ──────────────────────────────────────────────────
// Blue gradient — tractor illustration with KCC card
function BannerLoan() {
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <defs>
        <linearGradient id="art-loan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a5f"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#art-loan)" rx="14"/>
      {/* Tractor left */}
      <g transform="translate(30,50)" opacity="0.2">
        <rect x="40" y="40" width="120" height="60" rx="8" fill="#fff"/>
        <rect x="10" y="55" width="42" height="45" rx="6" fill="#fff"/>
        {/* Big wheel */}
        <circle cx="140" cy="105" r="30" fill="none" stroke="#fff" strokeWidth="5"/>
        <circle cx="140" cy="105" r="12" fill="#fff"/>
        {[0,60,120,180,240,300].map(deg=>(
          <line key={deg}
            x1={140+Math.cos(deg*Math.PI/180)*12} y1={105+Math.sin(deg*Math.PI/180)*12}
            x2={140+Math.cos(deg*Math.PI/180)*28} y2={105+Math.sin(deg*Math.PI/180)*28}
            stroke="#1d4ed8" strokeWidth="3"/>
        ))}
        {/* Small wheel */}
        <circle cx="42" cy="105" r="18" fill="none" stroke="#fff" strokeWidth="4"/>
        <circle cx="42" cy="105" r="7" fill="#fff"/>
        {/* Exhaust */}
        <rect x="110" y="15" width="8" height="32" rx="3" fill="#fff"/>
        <ellipse cx="114" cy="12" rx="10" ry="5" fill="#fff" opacity="0.5"/>
      </g>

      {/* Content — varied keywords */}
      <text x="230" y="52" fontSize="11" fill="#93c5fd">💰 AGRICULTURAL CREDIT FACILITY GUIDE 2026</text>
      <text x="230" y="82" fontSize="22" fontWeight="900" fill="#fff">Credit Facility — Sirf 4%</text>
      <text x="230" y="109" fontSize="22" fontWeight="900" fill="#93c5fd">Byaaj Dar Mein!</text>
      <text x="230" y="136" fontSize="10" fill="#bfdbfe">Credit Facility — Sabse Sasta Agricultural Loan</text>

      {/* Comparison — varied terminology */}
      {[
        { name:'Credit Facility', rate:'4%', bg:'#16a34a' },
        { name:'Bank Loan', rate:'7-9%', bg:'#2563eb' },
        { name:'MFI Loan',  rate:'18%+', bg:'#dc2626' },
      ].map((l,i)=>(
        <g key={l.name}>
          <rect x={230} y={152+i*20} width={70} height="16" rx="4" fill={l.bg} fillOpacity="0.8"/>
          <text x={265} y={164+i*20} textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">{l.name}</text>
          <rect x={310} y={154+i*20} width={i===0?30:i===1?60:120} height="12" rx="3" fill={l.bg} fillOpacity="0.5"/>
          <text x={316+i*50} y={164+i*20} fontSize="8" fill="#fff">{l.rate} p.a.</text>
        </g>
      ))}

      {/* Right KCC card — kept original name as it's the actual card */}
      <g transform="translate(580,40)">
        <rect width="160" height="100" rx="12" fill="#1d4ed8" fillOpacity="0.5" stroke="#93c5fd" strokeWidth="1"/>
        <rect width="160" height="35" rx="12" fill="#1e40af" fillOpacity="0.6"/>
        <text x="80" y="22" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">KISAN CREDIT CARD</text>
        <rect x="12" y="44" width="40" height="28" rx="4" fill="#fbbf24" fillOpacity="0.8"/>
        <text x="32" y="62" textAnchor="middle" fontSize="16">💳</text>
        <text x="62" y="55" fontSize="8" fill="#bfdbfe">Limit upto</text>
        <text x="62" y="68" fontSize="12" fontWeight="bold" fill="#fff">₹3 Lakh</text>
        <text x="12" y="94" fontSize="7" fontFamily="monospace" fill="#93c5fd">**** **** **** KISAN</text>
        <rect x="12" y="112" width="136" height="30" rx="6" fill="#16a34a"/>
        <text x="80" y="132" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Apply at Nearest Bank →</text>
      </g>
    </svg>
  );
}

// ─── Crop Protection Banner ─────────────────────────────────────────────────
// Amber gradient — storm cloud with field illustration
function BannerInsurance() {
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <defs>
        <linearGradient id="art-ins" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#713f12"/>
          <stop offset="60%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#art-ins)" rx="14"/>
      {/* Field + clouds */}
      <rect x="0" y="140" width="200" height="80" fill="#854d0e" fillOpacity="0.3"/>
      {[...Array(12)].map((_,i)=>(
        <g key={i} transform={`translate(${i*17},100)`} opacity="0.2">
          <line x1="6" y1="40" x2="6" y2="10" stroke="#ca8a04" strokeWidth="2"/>
          <ellipse cx="6" cy="10" rx="4" ry="10" fill="#ca8a04"/>
        </g>
      ))}
      {/* Rain drops */}
      {[20,35,55,70,90,110].map((x,i)=>(
        <line key={x} x1={x} y1={40+i*8} x2={x-4} y2={60+i*8} stroke="#93c5fd" strokeWidth="1.5" opacity="0.4"/>
      ))}
      {/* Storm cloud */}
      <ellipse cx="80" cy="35" rx="45" ry="22" fill="#374151" fillOpacity="0.5"/>
      <ellipse cx="55" cy="42" rx="28" ry="18" fill="#374151" fillOpacity="0.5"/>
      <ellipse cx="110" cy="42" rx="28" ry="18" fill="#374151" fillOpacity="0.5"/>

      {/* Content — varied keywords */}
      <text x="220" y="52" fontSize="11" fill="#fde68a">🌱 CROP PROTECTION SCHEME GUIDE 2026</text>
      <text x="220" y="80" fontSize="22" fontWeight="900" fill="#fff">Crop Protection — Fasal</text>
      <text x="220" y="108" fontSize="22" fontWeight="900" fill="#fde68a">Kharab? Paise Milenge!</text>
      <text x="220" y="135" fontSize="10" fill="#fef3c7">Crop Protection — Sirf 2% premium mein poori fasal protect</text>
      {/* Key facts */}
      {[
        ['🌾','Covered','Kharif + Rabi'],
        ['💰','Premium','Sirf 2% (Kharif)'],
        ['✅','Claim','7 din settle'],
        ['📱','Apply','Online / Bank / CSC'],
      ].map(([icon,label,val],i)=>(
        <g key={label}>
          <text x={220+i*145} y="158" fontSize="14">{icon}</text>
          <text x={220+i*145} y="174" fontSize="9" fontWeight="bold" fill="#fff">{val}</text>
          <text x={220+i*145} y="188" fontSize="8" fill="#fde68a">{label}</text>
        </g>
      ))}
      {/* Claim process */}
      <rect x="220" y="196" width="560" height="16" rx="6" fill="#fff" fillOpacity="0.1"/>
      <text x="500" y="208" textAnchor="middle" fontSize="8" fill="#fef3c7">Claim: Nuksan ke 72 ghante mein bank ya insurance company ko batao → Photo khicho → Online claim karo</text>
    </svg>
  );
}

// ─── Beneficiary Roster Banner ──────────────────────────────────────────────
// Blue gradient — list illustration with map
function BannerBeneficiary() {
  return (
    <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <defs>
        <linearGradient id="art-ben" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="60%" stopColor="#1e3a5f"/>
          <stop offset="100%" stopColor="#0369a1"/>
        </linearGradient>
      </defs>
      <rect width="800" height="220" fill="url(#art-ben)" rx="14"/>
      {/* List illustration — varied terminology */}
      <g transform="translate(30,30)" opacity="0.2">
        <rect width="140" height="160" rx="8" fill="#fff"/>
        {['BENEFICIARY ROSTER','Village: ABC','State: UP','District: Agra','',
          '1. Ram Kumar  ✓','2. Shyam Lal  ✓','3. Geeta Devi ✓','4. Mohan Das  ✓','5. Sunita ...  ✓'].map((t,i)=>(
          <text key={i} x="8" y={18+i*16} fontSize={i===0?8:7} fontWeight={i===0?"bold":"normal"} fill="#1e3a5f">{t}</text>
        ))}
      </g>

      {/* Content — varied keywords */}
      <text x="220" y="52" fontSize="11" fill="#7dd3fc">📋 AGRARIAN WELFARE BENEFICIARY ROSTER 2026</text>
      <text x="220" y="80" fontSize="22" fontWeight="900" fill="#fff">Village Wise Roster</text>
      <text x="220" y="108" fontSize="22" fontWeight="900" fill="#7dd3fc">Online Dekho + PDF!</text>
      <text x="220" y="134" fontSize="10" fill="#bae6fd">Apna naam roster mein hai ya nahi — step by step check karo</text>

      {/* How to check — varied terminology */}
      <text x="220" y="158" fontSize="9" fontWeight="bold" fill="#7dd3fc">🔍 Kaise Check Karein:</text>
      {[
        'Official portal kholein',
        'Beneficiary Status → District/Block/Village chunein',
        'Get Report → Apna naam dhundho',
        'PDF download karein ya screenshot lo',
      ].map((s,i)=>(
        <text key={s} x="220" y={172+i*13} fontSize="8" fill="#e0f2fe">{`${i+1}. ${s}`}</text>
      ))}

      {/* Map of India */}
      <g transform="translate(620,30)" opacity="0.25">
        <text x="80" y="100" textAnchor="middle" fontSize="120" fill="#fff">🗺️</text>
      </g>
    </svg>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
// Banner type mapping — captions use varied keywords for SEO
type BannerType = 'ekyc' | 'payment' | 'registration' | 'loan' | 'insurance' | 'beneficiary';

const BANNER_MAP: Record<BannerType, { component: React.FC; caption: string }> = {
  ekyc:         { component: BannerEKYC,         caption: 'Agrarian welfare digital verification — Online ya CSC center se karo' },
  payment:      { component: BannerPayment,      caption: 'Payment Nahi Aayi? 5 steps mein fix karo' },
  registration: { component: BannerRegistration, caption: 'Naya Enrollment — Free mein ghar baithe karo' },
  loan:         { component: BannerLoan,         caption: 'Credit Facility — Sabse saste byaaj dar par agricultural loan' },
  insurance:    { component: BannerInsurance,    caption: 'Crop Protection Scheme — Sirf 2% premium mein protection' },
  beneficiary:  { component: BannerBeneficiary,  caption: 'Beneficiary Roster — Village wise naam check karo' },
};

interface ArticleKisanBannerProps {
  type: BannerType;
}

export default function ArticleKisanBanner({ type }: ArticleKisanBannerProps) {
  const config = BANNER_MAP[type] ?? BANNER_MAP['ekyc'];
  const BannerComponent = config.component;

  return (
    <figure className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <BannerComponent />
      <figcaption className="bg-gray-50 border-t border-gray-200 px-4 py-2 text-xs text-gray-500 text-center">
        {config.caption} • kisanstatus.com
      </figcaption>
    </figure>
  );
}