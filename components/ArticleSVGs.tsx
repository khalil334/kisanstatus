/**
 * ArticleSVGs.tsx — Inline SVG illustrations
 * Replaces all PNG images (600KB–825KB each) with ~2KB SVG components
 * Total saving: ~9MB → ~20KB
 */
import type { CSSProperties } from 'react';

// ── Shared styles ──────────────────────────────────────────────────────────
const figStyle: CSSProperties = {
  margin: '28px 0',
  borderRadius: '14px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  border: '1px solid #e2e8f0',
};
const capStyle: CSSProperties = {
  textAlign: 'center',
  fontSize: '13px',
  color: '#64748b',
  padding: '10px 16px',
  background: '#f8fafc',
  borderTop: '1px solid #e2e8f0',
};

// ── 1. PM Kisan Official Portal Homepage ───────────────────────────────────
export function SvgPortalHomepage({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        {/* Browser chrome */}
        <rect width="900" height="420" fill="#f1f5f9"/>
        <rect width="900" height="44" fill="#e2e8f0"/>
        <circle cx="20" cy="22" r="7" fill="#ef4444"/><circle cx="40" cy="22" r="7" fill="#f59e0b"/><circle cx="60" cy="22" r="7" fill="#22c55e"/>
        <rect x="90" y="10" width="640" height="24" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="1"/>
        <text x="410" y="26" textAnchor="middle" fontSize="12" fill="#64748b">https://pmkisan.gov.in</text>
        {/* Header */}
        <rect y="44" width="900" height="70" fill="#1a5c2e"/>
        <rect x="20" y="58" width="48" height="48" rx="24" fill="#fff" opacity="0.2"/>
        <text x="44" y="88" textAnchor="middle" fontSize="22" fill="#fff">🌾</text>
        <text x="82" y="74" fontSize="16" fontWeight="bold" fill="#fff">PM Kisan Samman Nidhi</text>
        <text x="82" y="94" fontSize="12" fill="#a7f3d0">Ministry of Agriculture &amp; Farmers Welfare — Govt. of India</text>
        <rect x="680" y="62" width="200" height="30" rx="6" fill="#fff" opacity="0.15"/>
        <text x="780" y="82" textAnchor="middle" fontSize="13" fill="#fff">🇮🇳 Farmers Corner ▼</text>
        {/* Nav tabs */}
        <rect y="114" width="900" height="36" fill="#155c28"/>
        {['Home','About','Farmers Corner','Beneficiary Status','eKYC','New Registration','Contact'].map((t,i)=>(
          <text key={t} x={20+i*120} y="136" fontSize="12" fill={i===0?'#4ade80':'#d1fae5'}>{t}</text>
        ))}
        {/* Hero */}
        <rect y="150" width="900" height="180" fill="url(#heroGrad)"/>
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#166534"/>
          </linearGradient>
        </defs>
        <text x="50" y="210" fontSize="26" fontWeight="bold" fill="#fff">PM Kisan Samman Nidhi Yojana</text>
        <text x="50" y="238" fontSize="14" fill="#a7f3d0">₹6,000 Saalana — 3 Kiston Mein — Seedha Bank Account Mein</text>
        <rect x="50" y="260" width="180" height="40" rx="8" fill="#22c55e"/>
        <text x="140" y="285" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">✅ Status Check Karo</text>
        <rect x="250" y="260" width="160" height="40" rx="8" fill="none" stroke="#fff" strokeWidth="2"/>
        <text x="330" y="285" textAnchor="middle" fontSize="14" fill="#fff">📋 Beneficiary List</text>
        {/* Stats row */}
        <rect y="330" width="900" height="90" fill="#fff"/>
        {[['11 Cr+','Registered Farmers'],['₹6,000','Annual Benefit'],['3','Installments/Year'],['DBT','Direct to Bank']].map(([v,l],i)=>(
          <g key={v} transform={`translate(${112+i*220},330)`}>
            <text x="0" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#15803d">{v}</text>
            <text x="0" y="62" textAnchor="middle" fontSize="12" fill="#64748b">{l}</text>
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 2. Beneficiary Status Check Page ──────────────────────────────────────
export function SvgBeneficiaryStatus({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="400" fill="#f8fafc"/>
        <rect width="900" height="50" fill="#1a5c2e"/>
        <text x="450" y="32" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff">PM Kisan — Beneficiary Status Check</text>
        <text x="450" y="46" textAnchor="middle" fontSize="11" fill="#a7f3d0">pmkisan.gov.in/BeneficiaryStatus.aspx</text>
        {/* Form box */}
        <rect x="80" y="70" width="740" height="240" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="450" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">Beneficiary Status Dekhein</text>
        <text x="450" y="125" textAnchor="middle" fontSize="12" fill="#64748b">Aadhaar Number, Mobile Number ya Account Number se check karein</text>
        {/* Radio options */}
        {[['Aadhaar Number',200],['Mobile Number',420],['Account Number',640]].map(([label,x],i)=>(
          <g key={String(label)}>
            <circle cx={Number(x)} cy="160" r="10" fill={i===0?'#15803d':'#fff'} stroke="#15803d" strokeWidth="2"/>
            {i===0 && <circle cx={Number(x)} cy="160" r="5" fill="#fff"/>}
            <text x={Number(x)+16} y="165" fontSize="13" fill="#1e293b">{label}</text>
          </g>
        ))}
        {/* Input field */}
        <rect x="220" y="185" width="460" height="44" rx="8" fill="#f8fafc" stroke="#15803d" strokeWidth="2"/>
        <text x="450" y="212" textAnchor="middle" fontSize="14" fill="#94a3b8">XXXX XXXX XXXX (12-digit Aadhaar)</text>
        {/* Captcha */}
        <rect x="220" y="245" width="200" height="36" rx="6" fill="#e2e8f0"/>
        <text x="320" y="268" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155" letterSpacing="4">A3K9P2</text>
        <rect x="440" y="245" width="240" height="36" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
        <text x="560" y="268" textAnchor="middle" fontSize="13" fill="#94a3b8">Captcha Enter Karein</text>
        {/* Button */}
        <rect x="340" y="295" width="220" height="44" rx="8" fill="#15803d"/>
        <text x="450" y="322" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">Get Data ➜</text>
        {/* Result preview */}
        <rect x="80" y="325" width="740" height="60" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="110" y="350" fontSize="12" fontWeight="bold" fill="#15803d">✅ Status: Credited to Bank Account</text>
        <text x="110" y="370" fontSize="12" fill="#166534">23rd Installment — ₹2,000 — 20 Jun 2026 — A/C: XXXX1234</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 3. Aadhaar Number Status Check ────────────────────────────────────────
export function SvgAadhaarCheck({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="360" fill="#f0fdf4"/>
        {/* Step cards */}
        {[
          {n:'1',title:'pmkisan.gov.in Kholo',desc:'Farmers Corner → Beneficiary Status',x:40,clr:'#15803d'},
          {n:'2',title:'Aadhaar Number Chuniye',desc:'Pehla option select karein',x:300,clr:'#0369a1'},
          {n:'3',title:'12-Digit Number Daalo',desc:'Bina space ya dash ke',x:560,clr:'#7c3aed'},
        ].map(s=>(
          <g key={s.n}>
            <rect x={s.x} y="30" width="240" height="180" rx="14" fill="#fff" stroke={s.clr} strokeWidth="2"/>
            <circle cx={s.x+120} cy="80" r="32" fill={s.clr}/>
            <text x={s.x+120} y="90" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#fff">{s.n}</text>
            <text x={s.x+120} y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">{s.title}</text>
            <text x={s.x+120} y="162" textAnchor="middle" fontSize="12" fill="#64748b">{s.desc}</text>
          </g>
        ))}
        {/* Arrows */}
        <text x="282" y="125" fontSize="28" fill="#94a3b8">→</text>
        <text x="542" y="125" fontSize="28" fill="#94a3b8">→</text>
        {/* Result box */}
        <rect x="40" y="230" width="820" height="110" rx="12" fill="#fff" stroke="#22c55e" strokeWidth="2"/>
        <text x="60" y="260" fontSize="14" fontWeight="bold" fill="#15803d">📋 Result Screen — Aapka Status:</text>
        <rect x="60" y="272" width="740" height="1" fill="#e2e8f0"/>
        <text x="60" y="295" fontSize="13" fill="#1e293b">Farmer Name: <tspan fontWeight="bold">RAMESH KUMAR</tspan></text>
        <text x="340" y="295" fontSize="13" fill="#1e293b">State: <tspan fontWeight="bold">Uttar Pradesh</tspan></text>
        <text x="600" y="295" fontSize="13" fill="#1e293b">District: <tspan fontWeight="bold">Jaunpur</tspan></text>
        <text x="60" y="320" fontSize="13" fill="#15803d">✅ 23rd Installment: Credited to Bank Account — 20 Jun 2026 — ₹2,000</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 4. Mobile Number Status Check ─────────────────────────────────────────
export function SvgMobileCheck({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="340" fill="#eff6ff"/>
        <rect x="250" y="20" width="400" height="300" rx="20" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="270" y="40" width="360" height="50" rx="8" fill="#1d4ed8"/>
        <text x="450" y="62" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">📱 Mobile Number Se Status Check</text>
        <text x="450" y="80" textAnchor="middle" fontSize="11" fill="#bfdbfe">pmkisan.gov.in → Farmers Corner → Beneficiary Status</text>
        <text x="270" y="115" fontSize="12" fill="#64748b">Select Option:</text>
        <rect x="270" y="122" width="160" height="34" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="350" y="144" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">📱 Mobile Number</text>
        <text x="270" y="180" fontSize="12" fill="#64748b">Registered Mobile Number:</text>
        <rect x="270" y="187" width="360" height="38" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2"/>
        <text x="450" y="211" textAnchor="middle" fontSize="14" fill="#94a3b8">98XXXXXXXX (10 digit)</text>
        <rect x="270" y="238" width="360" height="40" rx="8" fill="#1d4ed8"/>
        <text x="450" y="263" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">Get Data ➜</text>
        {/* Warning */}
        <rect x="40" y="240" width="190" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="135" y="262" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">⚠️ Yaad Rakhein:</text>
        <text x="135" y="280" textAnchor="middle" fontSize="10" fill="#78350f">Wahi number daalen</text>
        <text x="135" y="296" textAnchor="middle" fontSize="10" fill="#78350f">jo registration mein</text>
        <text x="135" y="312" textAnchor="middle" fontSize="10" fill="#78350f">diya tha</text>
        {/* Tip */}
        <rect x="670" y="240" width="190" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="765" y="262" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">💡 Not Found?</text>
        <text x="765" y="280" textAnchor="middle" fontSize="10" fill="#166534">Aadhaar Number</text>
        <text x="765" y="296" textAnchor="middle" fontSize="10" fill="#166534">se try karein ya</text>
        <text x="765" y="312" textAnchor="middle" fontSize="10" fill="#166534">CSC jaayen</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 5. Payment Status Terms (RFT Signed etc.) ─────────────────────────────
export function SvgPaymentStatus({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="380" fill="#f8fafc"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">PM Kisan Payment Status — Matlab Kya Hai?</text>
        {[
          {status:'✅ Credited to Bank Account', meaning:'Payment successful! Paisa aa gaya', clr:'#15803d', bg:'#f0fdf4', border:'#22c55e', y:55},
          {status:'⏳ FTO is Generated & Payment Pending', meaning:'Payment process mein hai — 2-4 din mein aayega', clr:'#0369a1', bg:'#eff6ff', border:'#3b82f6', y:135},
          {status:'🔄 RFT Signed by State', meaning:'State ne approve kiya — Centre ko bheja gaya', clr:'#7c3aed', bg:'#faf5ff', border:'#8b5cf6', y:215},
          {status:'❌ Aadhaar Seeding Not Done', meaning:'Bank mein Aadhaar link nahi — turant karwao', clr:'#dc2626', bg:'#fef2f2', border:'#ef4444', y:295},
        ].map(s=>(
          <g key={s.y}>
            <rect x="40" y={s.y} width="820" height="68" rx="10" fill={s.bg} stroke={s.border} strokeWidth="1.5"/>
            <text x="66" y={s.y+28} fontSize="13" fontWeight="bold" fill={s.clr}>{s.status}</text>
            <text x="66" y={s.y+50} fontSize="13" fill="#475569">→ {s.meaning}</text>
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 6. Farmer using mobile (lifestyle) ────────────────────────────────────
export function SvgFarmerMobile({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="url(#farmerGrad)"/>
        <defs>
          <linearGradient id="farmerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#15803d"/>
          </linearGradient>
        </defs>
        {/* Farmer silhouette */}
        <circle cx="200" cy="100" r="36" fill="#a7f3d0" opacity="0.8"/>
        <text x="200" y="116" textAnchor="middle" fontSize="40">👨‍🌾</text>
        {/* Phone */}
        <rect x="240" y="80" width="70" height="120" rx="10" fill="#1e293b"/>
        <rect x="248" y="90" width="54" height="90" rx="4" fill="#0ea5e9"/>
        <text x="275" y="128" textAnchor="middle" fontSize="10" fill="#fff">PM Kisan</text>
        <text x="275" y="143" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4ade80">✅ ₹2,000</text>
        <text x="275" y="158" textAnchor="middle" fontSize="9" fill="#bae6fd">Credited!</text>
        {/* Info bubbles */}
        {[
          {x:380,y:60,t1:'Ghar Baithe',t2:'Mobile Se'},
          {x:530,y:60,t1:'Aadhaar Number',t2:'Se Check Karo'},
          {x:680,y:60,t1:'3 Steps Mein',t2:'Status Pata Karo'},
          {x:380,y:170,t1:'eKYC Mandatory',t2:'Abhi Karo'},
          {x:530,y:170,t1:'₹2,000 Per',t2:'Installment'},
          {x:680,y:170,t1:'Helpline: 155261',t2:'Koi Bhi Sawaal'},
        ].map((b,i)=>(
          <g key={i}>
            <rect x={b.x} y={b.y} width="130" height="70" rx="10" fill="#fff" opacity="0.12"/>
            <text x={b.x+65} y={b.y+28} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">{b.t1}</text>
            <text x={b.x+65} y={b.y+48} textAnchor="middle" fontSize="12" fill="#a7f3d0">{b.t2}</text>
          </g>
        ))}
        <text x="450" y="270" textAnchor="middle" fontSize="13" fill="#d1fae5" opacity="0.8">KisanStatus.com — PM Kisan ki Sahi Jankari</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 7. eKYC Status Check ──────────────────────────────────────────────────
export function SvgEkycStatus({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="340" fill="#faf5ff"/>
        <rect x="40" y="20" width="820" height="60" rx="10" fill="#7c3aed"/>
        <text x="450" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">🔐 PM Kisan eKYC — Do Tarike</text>
        <text x="450" y="68" textAnchor="middle" fontSize="12" fill="#ddd6fe">eKYC nahi = Kist band. Abhi karein — bilkul free hai.</text>
        {/* Method 1 */}
        <rect x="40" y="100" width="390" height="220" rx="12" fill="#fff" stroke="#7c3aed" strokeWidth="2"/>
        <rect x="40" y="100" width="390" height="44" rx="12" fill="#7c3aed"/>
        <rect x="40" y="132" width="390" height="12" rx="0" fill="#7c3aed"/>
        <text x="235" y="128" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">📱 Method 1: OTP Se (Ghar Baithe)</text>
        {['1. pmkisan.gov.in kholo','2. Farmers Corner → eKYC','3. Aadhaar number daalo','4. OTP aayega mobile par','5. OTP enter karo → Submit','✅ Instant complete!'].map((s,i)=>(
          <text key={i} x="60" y={162+i*26} fontSize="13" fill={i===5?'#15803d':'#1e293b'} fontWeight={i===5?'bold':'normal'}>{s}</text>
        ))}
        {/* Method 2 */}
        <rect x="470" y="100" width="390" height="220" rx="12" fill="#fff" stroke="#0369a1" strokeWidth="2"/>
        <rect x="470" y="100" width="390" height="44" rx="12" fill="#0369a1"/>
        <rect x="470" y="132" width="390" height="12" rx="0" fill="#0369a1"/>
        <text x="665" y="128" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">🏢 Method 2: CSC Centre (Biometric)</text>
        {['1. Nazdiki CSC centre jao','2. Aadhaar card saath lao','3. Fingerprint scan hoga','4. Free mein hota hai','5. 24-48 hrs mein update','✅ Mobile link nahi to yeh karo'].map((s,i)=>(
          <text key={i} x="490" y={162+i*26} fontSize="13" fill={i===5?'#0369a1':'#1e293b'} fontWeight={i===5?'bold':'normal'}>{s}</text>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 8. Payment Success / PFMS ──────────────────────────────────────────────
export function SvgPaymentSuccess({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="#f0fdf4"/>
        {/* Success card */}
        <rect x="150" y="20" width="600" height="180" rx="16" fill="#fff" stroke="#22c55e" strokeWidth="3"/>
        <circle cx="450" cy="70" r="30" fill="#22c55e"/>
        <text x="450" y="82" textAnchor="middle" fontSize="28" fill="#fff">✓</text>
        <text x="450" y="130" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#15803d">₹2,000 Successfully Credited!</text>
        <text x="450" y="155" textAnchor="middle" fontSize="13" fill="#64748b">23rd PM Kisan Installment — 20 June 2026</text>
        <text x="450" y="178" textAnchor="middle" fontSize="13" fill="#64748b">Bank Account: XXXX XXXX 1234 | PFMS Ref: PM2026XXXX</text>
        {/* Status flow */}
        {[
          {t:'RFT Signed',st:'State approved',clr:'#7c3aed',x:80},
          {t:'FTO Generated',st:'Transfer initiated',clr:'#0369a1',x:290},
          {t:'PFMS Processed',st:'Bank received',clr:'#f59e0b',x:500},
          {t:'Credited ✅',st:'In your account',clr:'#15803d',x:710},
        ].map(s=>(
          <g key={s.x}>
            <rect x={s.x} y="220" width="180" height="64" rx="8" fill={s.clr} opacity="0.1" stroke={s.clr} strokeWidth="1.5"/>
            <text x={s.x+90} y="248" textAnchor="middle" fontSize="12" fontWeight="bold" fill={s.clr}>{s.t}</text>
            <text x={s.x+90} y="268" textAnchor="middle" fontSize="11" fill="#64748b">{s.st}</text>
          </g>
        ))}
        <text x="273" y="253" fontSize="16" fill="#94a3b8">→</text>
        <text x="483" y="253" fontSize="16" fill="#94a3b8">→</text>
        <text x="693" y="253" fontSize="16" fill="#94a3b8">→</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 9. FAQ illustration ────────────────────────────────────────────────────
export function SvgFAQ({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="260" fill="#f8fafc"/>
        <text x="450" y="44" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1e293b">🙋 Aksar Pooche Jaane Wale Sawaal</text>
        {[
          {q:'23vi kist kab aayi?',a:'20 June 2026 ko release ho chuki hai. ₹2,000 DBT se.',x:40,y:70},
          {q:'eKYC kaise kare?',a:'pmkisan.gov.in → eKYC → Aadhaar + OTP',x:470,y:70},
          {q:'Status check karne ke liye kya chahiye?',a:'Sirf Aadhaar ya Mobile Number',x:40,y:165},
          {q:'Payment nahi aayi to kya kare?',a:'Helpline: 155261 pe call karo',x:470,y:165},
        ].map(s=>(
          <g key={s.x+s.y}>
            <rect x={s.x} y={s.y} width="410" height="80" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5"/>
            <text x={s.x+20} y={s.y+26} fontSize="13" fontWeight="bold" fill="#1e293b">Q: {s.q}</text>
            <rect x={s.x} y={s.y+38} width="410" height="1" fill="#f1f5f9"/>
            <text x={s.x+20} y={s.y+60} fontSize="13" fill="#15803d">A: {s.a}</text>
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 10. Correction Process ────────────────────────────────────────────────
export function SvgCorrectionProcess({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="340" fill="#fff7ed"/>
        <rect x="0" y="0" width="900" height="52" fill="#ea580c"/>
        <text x="450" y="30" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#fff">PM Kisan Correction Process — Step by Step</text>
        <text x="450" y="48" textAnchor="middle" fontSize="12" fill="#fed7aa">Naam, Aadhaar, Bank — koi bhi correction aise karein</text>
        {[
          {n:'1',t:'Official Portal',d:'pmkisan.gov.in kholo',clr:'#ea580c'},
          {n:'2',t:'Farmers Corner',d:'Menu mein click karein',clr:'#d97706'},
          {n:'3',t:'Updation of SR',d:'Self Registered option',clr:'#ca8a04'},
          {n:'4',t:'Aadhaar Enter',d:'12-digit number daalo',clr:'#65a30d'},
          {n:'5',t:'Edit Details',d:'Galat info theek karo',clr:'#0891b2'},
        ].map((s,i)=>(
          <g key={i}>
            <rect x={40+i*170} y={72} width="150" height="160" rx="12" fill="#fff" stroke={s.clr} strokeWidth="2"/>
            <circle cx={40+i*170+75} cy="120" r="30" fill={s.clr}/>
            <text x={40+i*170+75} y="130" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#fff">{s.n}</text>
            <text x={40+i*170+75} y="172" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">{s.t}</text>
            <text x={40+i*170+75} y="194" textAnchor="middle" fontSize="11" fill="#64748b">{s.d}</text>
            {i<4 && <text x={40+i*170+152} y="155" fontSize="20" fill="#94a3b8">→</text>}
          </g>
        ))}
        {/* Note */}
        <rect x="40" y="248" width="820" height="76" rx="10" fill="#fff" stroke="#ea580c" strokeWidth="1.5"/>
        <text x="60" y="272" fontSize="13" fontWeight="bold" fill="#ea580c">📌 Zaruri Documents (Har Correction Ke Liye):</text>
        <text x="60" y="296" fontSize="12" fill="#1e293b">Naam: Aadhaar card copy | Bank: Passbook/cancelled cheque | Aadhaar: UIDAI correction letter | Land: Khasra-khatauni</text>
        <text x="60" y="316" fontSize="12" fill="#ea580c">⏱️ Processing time: 15-30 working days | Helpline: 155261</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 11. Aadhaar Correction ────────────────────────────────────────────────
export function SvgAadhaarCorrection({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="#eff6ff"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">🔗 Aadhaar Seeding — Bank Se Link Kaise Karein</text>
        <rect x="40" y="55" width="380" height="220" rx="12" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="40" y="55" width="380" height="44" rx="12" fill="#1d4ed8"/>
        <rect x="40" y="87" width="380" height="12" fill="#1d4ed8"/>
        <text x="230" y="83" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">🏦 Bank Branch Mein Jao</text>
        {['• Aadhaar card original + copy','• PM Kisan passbook','• Aadhaar Seeding form maango','• Form bharo → Submit karo','• 3-7 din mein link ho jaega'].map((s,i)=>(
          <text key={i} x="60" y={118+i*28} fontSize="13" fill="#1e293b">{s}</text>
        ))}
        <rect x="480" y="55" width="380" height="220" rx="12" fill="#fff" stroke="#22c55e" strokeWidth="2"/>
        <rect x="480" y="55" width="380" height="44" rx="12" fill="#15803d"/>
        <rect x="480" y="87" width="380" height="12" fill="#15803d"/>
        <text x="670" y="83" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">📱 Net Banking Se (Ghar Baithe)</text>
        {['• Net banking login karein','• Services → Aadhaar Linking','• Aadhaar number enter karo','• OTP verify karein','• Instant seeding complete!'].map((s,i)=>(
          <text key={i} x="500" y={118+i*28} fontSize="13" fill="#1e293b">{s}</text>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 12. Documents Required ────────────────────────────────────────────────
export function SvgDocuments({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="280" fill="#f8fafc"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">📄 Correction Ke Liye Zaruri Documents</text>
        {[
          {type:'Naam Correction',docs:'Aadhaar Card + School Certificate',icon:'👤',clr:'#7c3aed',x:40,y:55},
          {type:'Bank Correction',docs:'Passbook + Cancelled Cheque',icon:'🏦',clr:'#0369a1',x:470,y:55},
          {type:'Aadhaar Correction',docs:'UIDAI Correction Letter + ID',icon:'🪪',clr:'#ea580c',x:40,y:165},
          {type:'Land Record',docs:'Khasra-Khatauni + Patwari Cert.',icon:'🌾',clr:'#15803d',x:470,y:165},
        ].map(s=>(
          <g key={s.type}>
            <rect x={s.x} y={s.y} width="390" height="90" rx="12" fill="#fff" stroke={s.clr} strokeWidth="1.5"/>
            <text x={s.x+20} y={s.y+32} fontSize="24">{s.icon}</text>
            <text x={s.x+54} y={s.y+30} fontSize="14" fontWeight="bold" fill={s.clr}>{s.type}</text>
            <text x={s.x+54} y={s.y+52} fontSize="13" fill="#475569">{s.docs}</text>
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 13. Deactivate Status ─────────────────────────────────────────────────
export function SvgDeactivate({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="#fef2f2"/>
        <rect x="0" y="0" width="900" height="52" fill="#dc2626"/>
        <text x="450" y="30" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#fff">⚠️ PM Kisan Account Deactivate — Kya Matlab?</text>
        <text x="450" y="48" textAnchor="middle" fontSize="12" fill="#fecaca">Ghabrao mat — yeh fix ho sakta hai</text>
        {[
          {reason:'eKYC Pending',fix:'pmkisan.gov.in par eKYC complete karo',clr:'#dc2626'},
          {reason:'Land Record Mismatch',fix:'Patwari se Khasra-Khatauni update karwao',clr:'#ea580c'},
          {reason:'Ineligible Category',fix:'Agriculture office mein appeal karein',clr:'#d97706'},
          {reason:'Duplicate Entry',fix:'Helpline 155261 pe call karein',clr:'#ca8a04'},
        ].map((s,i)=>(
          <g key={i}>
            <rect x="40" y={65+i*52} width="380" height="42" rx="8" fill="#fff" stroke={s.clr} strokeWidth="1.5"/>
            <text x="60" y={85+i*52} fontSize="13" fontWeight="bold" fill={s.clr}>❌ {s.reason}</text>
            <rect x="460" y={65+i*52} width="400" height="42" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="480" y={85+i*52} fontSize="13" fill="#15803d">✅ {s.fix}</text>
            <text x="440" y={89+i*52} fontSize="18" fill="#94a3b8">→</text>
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 14. Reactivate Account ────────────────────────────────────────────────
export function SvgReactivate({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="280" fill="#f0fdf4"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#15803d">🔄 PM Kisan Account Reactivate Kaise Karein</text>
        {[
          {n:'1',t:'Reason Pata Karo',d:'Status page pe dekho kyun deactivate hua',clr:'#dc2626'},
          {n:'2',t:'Document Tayar Karo',d:'Required docs collect karein',clr:'#ea580c'},
          {n:'3',t:'Block Office Jao',d:'Agriculture/Revenue officer se milo',clr:'#0369a1'},
          {n:'4',t:'Application Do',d:'Form bharo aur docs attach karo',clr:'#7c3aed'},
          {n:'5',t:'Follow Up',d:'15-30 din mein update hoga',clr:'#15803d'},
        ].map((s,i)=>(
          <g key={i}>
            <rect x={30+i*172} y="60" width="152" height="170" rx="12" fill="#fff" stroke={s.clr} strokeWidth="2"/>
            <circle cx={30+i*172+76} cy="104" r="26" fill={s.clr}/>
            <text x={30+i*172+76} y="112" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff">{s.n}</text>
            <text x={30+i*172+76} y="154" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">{s.t}</text>
            <text x={30+i*172+76} y="176" textAnchor="middle" fontSize="11" fill="#64748b">{s.d}</text>
            {i<4 && <text x={30+i*172+154} y="148" fontSize="18" fill="#94a3b8">→</text>}
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 15. Block Status ──────────────────────────────────────────────────────
export function SvgBlockStatus({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="280" fill="#fef2f2"/>
        <rect x="0" y="0" width="900" height="52" fill="#7f1d1d"/>
        <text x="450" y="30" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#fff">🚫 PM Kisan Account Block — Deactivate Se Alag Hai</text>
        <text x="450" y="48" textAnchor="middle" fontSize="12" fill="#fecaca">Block = Serious violation — Agriculture office mein jao</text>
        <rect x="40" y="65" width="380" height="195" rx="12" fill="#fff" stroke="#dc2626" strokeWidth="2"/>
        <text x="230" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#dc2626">🚫 Block Ke Karan</text>
        {['• Fraud ya duplicate registration','• Income tax return file kiya','• Government employee nikle','• Multiple accounts detected','• Land record forged'].map((s,i)=>(
          <text key={i} x="60" y={112+i*28} fontSize="13" fill="#1e293b">{s}</text>
        ))}
        <rect x="470" y="65" width="390" height="195" rx="12" fill="#fff" stroke="#15803d" strokeWidth="2"/>
        <text x="665" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#15803d">✅ Kya Karein</text>
        {['• Ghabrao mat — pehle reason samjho','• Block notification message padho','• District Agriculture Officer se milo','• Documents ke saath appeal karein','• Helpline: 155261 ya pmkisan-ict@gov.in'].map((s,i)=>(
          <text key={i} x="490" y={112+i*28} fontSize="13" fill="#1e293b">{s}</text>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 16. RFT Signed Explanation ────────────────────────────────────────────
export function SvgRftSigned({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="#faf5ff"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#7c3aed">🔄 "RFT Signed by State" — Iska Matlab Kya Hai?</text>
        {/* Flow */}
        {[
          {t:'State Govt.',sub:'PM Kisan list tayyar ki',clr:'#7c3aed',x:60},
          {t:'RFT Signed',sub:'State ne approve kiya',clr:'#0369a1',x:240},
          {t:'Centre Ko Bheja',sub:'Ministry ko transfer',clr:'#0891b2',x:420},
          {t:'FTO Generated',sub:'Payment file bani',clr:'#f59e0b',x:600},
          {t:'Bank Credit',sub:'Paisa aa gaya!',clr:'#15803d',x:780},
        ].map((s,i)=>(
          <g key={i}>
            <circle cx={s.x+40} cy="130" r="38" fill={s.clr} opacity="0.15" stroke={s.clr} strokeWidth="2"/>
            <text x={s.x+40} y="126" textAnchor="middle" fontSize="11" fontWeight="bold" fill={s.clr}>{s.t}</text>
            <text x={s.x+40} y="142" textAnchor="middle" fontSize="10" fill="#64748b">{s.sub}</text>
            {i<4 && <text x={s.x+82} y="134" fontSize="16" fill="#94a3b8">→</text>}
          </g>
        ))}
        <rect x="40" y="190" width="820" height="90" rx="12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
        <text x="60" y="218" fontSize="14" fontWeight="bold" fill="#15803d">✅ RFT Signed = Good News!</text>
        <text x="60" y="242" fontSize="13" fill="#1e293b">Matlab aapki kist approve ho chuki hai aur process mein hai. Aam tor par RFT ke baad</text>
        <text x="60" y="264" fontSize="13" fill="#1e293b">3-7 working din mein paisa bank account mein credit ho jaata hai. Bas wait karein.</text>
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 17. Registration ID Kaise Pata Kare ──────────────────────────────────
export function SvgRegistrationId({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="#eff6ff"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1d4ed8">🔍 PM Kisan Registration ID Kaise Pata Karein</text>
        {[
          {method:'Aadhaar Se',steps:['pmkisan.gov.in kholo','Know Your Registration No.','Aadhaar number daalo','ID screen par dikhi'],clr:'#1d4ed8',x:40},
          {method:'Mobile Number Se',steps:['pmkisan.gov.in kholo','Beneficiary Status','Mobile number enter karo','Registration ID dikhi'],clr:'#0891b2',x:330},
          {method:'CSC Centre Se',steps:['Nazdiki CSC centre jao','Aadhaar card lao','Operator se Request karo','ID wahan se milegi'],clr:'#7c3aed',x:620},
        ].map(s=>(
          <g key={s.method}>
            <rect x={s.x} y="55" width="250" height="225" rx="12" fill="#fff" stroke={s.clr} strokeWidth="2"/>
            <rect x={s.x} y="55" width="250" height="42" rx="12" fill={s.clr}/>
            <rect x={s.x} y="85" width="250" height="12" fill={s.clr}/>
            <text x={s.x+125} y="82" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">{s.method}</text>
            {s.steps.map((step,i)=>(
              <g key={i}>
                <circle cx={s.x+26} cy={116+i*44} r="14" fill={s.clr} opacity="0.15"/>
                <text x={s.x+26} y={121+i*44} textAnchor="middle" fontSize="12" fontWeight="bold" fill={s.clr}>{i+1}</text>
                <text x={s.x+46} y={121+i*44} fontSize="12" fill="#1e293b">{step}</text>
              </g>
            ))}
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 18. Name Correction ───────────────────────────────────────────────────
export function SvgNameCorrection({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="280" fill="#fff7ed"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#ea580c">✏️ PM Kisan Naam Correction — Step by Step Guide</text>
        <rect x="40" y="55" width="820" height="80" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5"/>
        <text x="60" y="82" fontSize="14" fontWeight="bold" fill="#ea580c">❌ Galat:</text>
        <text x="60" y="104" fontSize="22" fill="#dc2626" style={{textDecoration:'line-through'}}>RAMESH KUAMR</text>
        <text x="450" y="98" fontSize="20" fill="#94a3b8">→</text>
        <text x="510" y="82" fontSize="14" fontWeight="bold" fill="#15803d">✅ Sahi:</text>
        <text x="510" y="104" fontSize="22" fill="#15803d">RAMESH KUMAR</text>
        {['Step 1: pmkisan.gov.in → Farmers Corner → Updation of SR','Step 2: Aadhaar number se login karein','Step 3: Edit name field → Sahi naam daalo','Step 4: Aadhaar card ke EXACTLY saame spelling use karein','Step 5: Documents upload → Submit → 15-30 din wait karein'].map((s,i)=>(
          <text key={i} x="60" y={160+i*24} fontSize="13" fill={i===4?'#ea580c':'#1e293b'} fontWeight={i===4?'bold':'normal'}>{s}</text>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 19. Mobile Number Update ──────────────────────────────────────────────
export function SvgMobileUpdate({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="300" fill="#f0fdf4"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#15803d">📱 PM Kisan Mobile Number Update Kaise Karein</text>
        <rect x="40" y="55" width="400" height="225" rx="12" fill="#fff" stroke="#15803d" strokeWidth="2"/>
        <rect x="40" y="55" width="400" height="44" rx="12" fill="#15803d"/>
        <rect x="40" y="87" width="400" height="12" fill="#15803d"/>
        <text x="240" y="83" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">🌐 Online Method (Portal)</text>
        {['1. pmkisan.gov.in → Farmers Corner','2. Edit Aadhaar Details option chuniye','3. Aadhaar + old mobile se verify karein','4. New mobile number enter karein','5. OTP verify → Submit','✅ 24-48 hrs mein update hoga'].map((s,i)=>(
          <text key={i} x="60" y={118+i*26} fontSize="13" fill={i===5?'#15803d':'#1e293b'} fontWeight={i===5?'bold':'normal'}>{s}</text>
        ))}
        <rect x="460" y="55" width="400" height="225" rx="12" fill="#fff" stroke="#0369a1" strokeWidth="2"/>
        <rect x="460" y="55" width="400" height="44" rx="12" fill="#0369a1"/>
        <rect x="460" y="87" width="400" height="12" fill="#0369a1"/>
        <text x="660" y="83" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">🏢 Offline Method (CSC/Block)</text>
        {['1. CSC centre ya Block office jao','2. Aadhaar card original + copy lao','3. PM Kisan registered documents lao','4. Mobile update form bharo','5. Officer verify karega','✅ 7-15 din mein update hoga'].map((s,i)=>(
          <text key={i} x="480" y={118+i*26} fontSize="13" fill={i===5?'#0369a1':'#1e293b'} fontWeight={i===5?'bold':'normal'}>{s}</text>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── 20. Correction FAQ ────────────────────────────────────────────────────
export function SvgFaqCorrection({ caption }: { caption: string }) {
  return (
    <figure style={figStyle}>
      <svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="900" height="260" fill="#f8fafc"/>
        <text x="450" y="36" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">❓ Correction Se Jude Aksar Pooche Jaane Wale Sawaal</text>
        {[
          {q:'Correction mein kitna time lagta hai?',a:'15-30 working days. Urgent case mein helpline call karein.',x:40,y:60},
          {q:'Kya correction free hai?',a:'Haan, PM Kisan correction bilkul free hai.',x:470,y:60},
          {q:'Naam change hoga ya sirf spelling?',a:'Sirf Aadhaar se matching spelling change hoti hai.',x:40,y:160},
          {q:'Correction ke baad kist milegi?',a:'Haan, approved correction ke baad arrears bhi milenge.',x:470,y:160},
        ].map(s=>(
          <g key={s.x+s.y}>
            <rect x={s.x} y={s.y} width="390" height="88" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5"/>
            <text x={s.x+20} y={s.y+28} fontSize="13" fontWeight="bold" fill="#1e293b">Q: {s.q}</text>
            <rect x={s.x} y={s.y+40} width="390" height="1" fill="#f1f5f9"/>
            <text x={s.x+20} y={s.y+62} fontSize="13" fill="#15803d">A: {s.a}</text>
          </g>
        ))}
      </svg>
      <figcaption style={capStyle}>{caption}</figcaption>
    </figure>
  );
}

// ── Additional SVGs (added to fix missing exports) ─────────────────────────

export function SvgBeneficiaryList({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-green-100 bg-green-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#f0fdf4"/>
        <rect x="40" y="30" width="220" height="140" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <rect x="55" y="50" width="140" height="10" rx="4" fill="#4ade80"/>
        {[70,90,110,130,150].map((y,i)=><rect key={i} x="55" y={y} width={100+i*10} height="8" rx="3" fill="#d1fae5"/>)}
        <rect x="300" y="30" width="220" height="140" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <rect x="315" y="50" width="140" height="10" rx="4" fill="#4ade80"/>
        {[70,90,110,130,150].map((y,i)=><rect key={i} x="315" y={y} width={80+i*15} height="8" rx="3" fill="#d1fae5"/>)}
        <rect x="560" y="30" width="200" height="140" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="660" y="110" textAnchor="middle" fill="#16a34a" fontSize="32">📋</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-green-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgCorrection({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-purple-100 bg-purple-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#faf5ff"/>
        <rect x="60" y="40" width="280" height="120" rx="12" fill="#fff" stroke="#c084fc" strokeWidth="2"/>
        <text x="200" y="85" textAnchor="middle" fill="#9333ea" fontSize="14" fontWeight="bold">Before</text>
        <rect x="75" y="100" width="180" height="10" rx="3" fill="#fca5a5"/>
        <text x="75" y="130" fill="#dc2626" fontSize="11">RAMESH KUAMR ✗</text>
        <text x="400" y="105" textAnchor="middle" fill="#16a34a" fontSize="28">→</text>
        <rect x="460" y="40" width="280" height="120" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="600" y="85" textAnchor="middle" fill="#16a34a" fontSize="14" fontWeight="bold">After</text>
        <rect x="475" y="100" width="180" height="10" rx="3" fill="#86efac"/>
        <text x="475" y="130" fill="#15803d" fontSize="11">RAMESH KUMAR ✓</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-purple-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgCropInsurance({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-amber-100 bg-amber-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#fffbeb"/>
        <text x="120" y="120" textAnchor="middle" fill="#d97706" fontSize="60">🌾</text>
        <text x="280" y="105" textAnchor="middle" fill="#92400e" fontSize="24">+</text>
        <text x="400" y="120" textAnchor="middle" fill="#d97706" fontSize="60">🛡️</text>
        <text x="560" y="105" textAnchor="middle" fill="#92400e" fontSize="24">=</text>
        <rect x="640" y="50" width="120" height="100" rx="12" fill="#fff" stroke="#fcd34d" strokeWidth="2"/>
        <text x="700" y="95" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold">PMFBY</text>
        <text x="700" y="115" textAnchor="middle" fill="#d97706" fontSize="11">Claim ✓</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-amber-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgInstallmentHistory({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-blue-100 bg-blue-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#eff6ff"/>
        {[0,1,2,3,4,5].map(i=>(
          <g key={i}>
            <rect x={60+i*115} y="50" width="95" height="100" rx="8" fill="#fff" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x={107+i*115} y="85" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="bold">Kist {i+17}vi</text>
            <rect x={72+i*115} y="95" width="71" height="8" rx="3" fill={i<5?"#86efac":"#fde68a"}/>
            <text x={107+i*115} y="125" textAnchor="middle" fill={i<5?"#15803d":"#d97706"} fontSize="9">{i<5?"✅ ₹2,000":"⏳ Expected"}</text>
          </g>
        ))}
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-blue-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgInstallmentStatus({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-green-100 bg-green-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#f0fdf4"/>
        <rect x="50" y="30" width="300" height="140" rx="16" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="200" y="75" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">22vi Kist Status</text>
        <rect x="70" y="90" width="260" height="16" rx="6" fill="#4ade80"/>
        <text x="200" y="103" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">✅ Payment Success — ₹2,000</text>
        <text x="200" y="135" textAnchor="middle" fill="#16a34a" fontSize="11">13 March 2026</text>
        <rect x="420" y="30" width="330" height="140" rx="16" fill="#fff" stroke="#fcd34d" strokeWidth="2"/>
        <text x="585" y="75" textAnchor="middle" fill="#b45309" fontSize="14" fontWeight="bold">23vi Kist</text>
        <rect x="440" y="90" width="270" height="16" rx="6" fill="#fde68a"/>
        <text x="585" y="103" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">⏳ Expected — Jun-Jul 2026</text>
        <text x="585" y="135" textAnchor="middle" fill="#d97706" fontSize="11">eKYC complete rakho</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-green-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgKisanLoan({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-green-100 bg-green-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#f0fdf4"/>
        {[['KCC',60,'#4ade80','#15803d'],['Bank Loan',230,'#86efac','#166534'],['NABARD',400,'#4ade80','#15803d'],['CSC',570,'#86efac','#166534']].map(([label,x,fill,tc])=>(
          <g key={label as string}>
            <rect x={x as number} y="40" width="130" height="120" rx="12" fill="#fff" stroke={fill as string} strokeWidth="2"/>
            <text x={(x as number)+65} y="95" textAnchor="middle" fill={tc as string} fontSize="24">🏦</text>
            <text x={(x as number)+65} y="125" textAnchor="middle" fill={tc as string} fontSize="11" fontWeight="bold">{label}</text>
          </g>
        ))}
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-green-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgLandSeeding({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-amber-100 bg-amber-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#fffbeb"/>
        <rect x="50" y="40" width="150" height="120" rx="12" fill="#fff" stroke="#fcd34d" strokeWidth="2"/>
        <text x="125" y="90" textAnchor="middle" fill="#d97706" fontSize="22">📋</text>
        <text x="125" y="120" textAnchor="middle" fill="#92400e" fontSize="10">Khasra Records</text>
        <text x="245" y="105" textAnchor="middle" fill="#d97706" fontSize="20">→</text>
        <rect x="290" y="40" width="170" height="120" rx="12" fill="#fff" stroke="#fcd34d" strokeWidth="2"/>
        <text x="375" y="90" textAnchor="middle" fill="#d97706" fontSize="22">🏛️</text>
        <text x="375" y="120" textAnchor="middle" fill="#92400e" fontSize="10">Agriculture Office</text>
        <text x="510" y="105" textAnchor="middle" fill="#d97706" fontSize="20">→</text>
        <rect x="550" y="40" width="200" height="120" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="650" y="90" textAnchor="middle" fill="#16a34a" fontSize="22">✅</text>
        <text x="650" y="120" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold">Land Seeding: Yes</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-amber-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgPaymentFailed({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-red-100 bg-red-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#fef2f2"/>
        <rect x="50" y="40" width="200" height="120" rx="12" fill="#fff" stroke="#fca5a5" strokeWidth="2"/>
        <text x="150" y="85" textAnchor="middle" fill="#dc2626" fontSize="22">🏛️</text>
        <text x="150" y="110" textAnchor="middle" fill="#991b1b" fontSize="10">PM Kisan</text>
        <text x="150" y="128" textAnchor="middle" fill="#dc2626" fontSize="9">Payment Sent ✓</text>
        <text x="305" y="105" textAnchor="middle" fill="#dc2626" fontSize="20">→</text>
        <rect x="340" y="40" width="160" height="120" rx="12" fill="#fee2e2" stroke="#fca5a5" strokeWidth="2"/>
        <text x="420" y="85" textAnchor="middle" fill="#dc2626" fontSize="28">❌</text>
        <text x="420" y="115" textAnchor="middle" fill="#991b1b" fontSize="10">NPCI Bounce</text>
        <text x="555" y="105" textAnchor="middle" fill="#dc2626" fontSize="20">→</text>
        <rect x="590" y="40" width="160" height="120" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="670" y="85" textAnchor="middle" fill="#16a34a" fontSize="22">🔧</text>
        <text x="670" y="110" textAnchor="middle" fill="#15803d" fontSize="10">Fix Karo</text>
        <text x="670" y="128" textAnchor="middle" fill="#16a34a" fontSize="9">Arrears Milenge ✓</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-red-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgProblemsSolution({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-blue-100 bg-blue-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#eff6ff"/>
        {[['❌ RFT Pending',50],['❌ PFMS Error',210],['❌ eKYC Fail',370],['❌ Payment Fail',530]].map(([label,x])=>(
          <g key={label as string}>
            <rect x={x as number} y="30" width="140" height="60" rx="8" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.5"/>
            <text x={(x as number)+70} y="67" textAnchor="middle" fill="#dc2626" fontSize="10">{label}</text>
            <text x={(x as number)+70} y="105" textAnchor="middle" fill="#16a34a" fontSize="16">↓</text>
            <rect x={x as number} y="115" width="140" height="55" rx="8" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5"/>
            <text x={(x as number)+70} y="148" textAnchor="middle" fill="#15803d" fontSize="10">✅ Solution Guide</text>
          </g>
        ))}
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-blue-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgRegistration({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-blue-100 bg-blue-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#eff6ff"/>
        {[['📋 Docs Ready',50,'#93c5fd'],['📝 Form Fill',220,'#6ee7b7'],['✅ Submit',390,'#fcd34d'],['🎉 Registered!',560,'#86efac']].map(([label,x,color],i)=>(
          <g key={i}>
            <rect x={x as number} y="50" width="140" height="100" rx="12" fill="#fff" stroke={color as string} strokeWidth="2"/>
            <text x={(x as number)+70} y="108" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">{label}</text>
            {i<3 && <text x={(x as number)+150} y="105" textAnchor="middle" fill="#6b7280" fontSize="18">→</text>}
          </g>
        ))}
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-blue-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgRejectedList({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-red-100 bg-red-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#fef2f2"/>
        <rect x="50" y="30" width="300" height="140" rx="12" fill="#fff" stroke="#fca5a5" strokeWidth="2"/>
        <text x="200" y="70" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">Rejected List</text>
        {[85,105,125,145,162].map((y,i)=>(
          <g key={i}><rect x="70" y={y} width="260" height="10" rx="3" fill={i===1?"#fca5a5":"#fee2e2"}/>{i===1&&<text x="75" y={y+8} fill="#dc2626" fontSize="8">❌ Aapka Naam</text>}</g>
        ))}
        <text x="420" y="105" textAnchor="middle" fill="#dc2626" fontSize="24">→</text>
        <rect x="470" y="30" width="280" height="140" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="610" y="70" textAnchor="middle" fill="#16a34a" fontSize="13" fontWeight="bold">Fix Karo → Active</text>
        {[85,105,125,145,162].map((y,i)=>(
          <g key={i}><rect x="490" y={y} width="240" height="10" rx="3" fill={i===1?"#86efac":"#dcfce7"}/>{i===1&&<text x="495" y={y+8} fill="#15803d" fontSize="8">✅ Aapka Naam</text>}</g>
        ))}
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-red-100">{caption}</figcaption>
    </figure>
  );
}

export function SvgTractorLoan({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-green-100 bg-green-50">
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#f0fdf4"/>
        <text x="130" y="120" textAnchor="middle" fill="#15803d" fontSize="70">🚜</text>
        <rect x="280" y="40" width="460" height="120" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="510" y="80" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">Tractor Loan Options</text>
        {[['SBI Agri Loan','7-9%',105],['NABARD Subsidy','25-50%',125],['State Schemes','Vary',145],['Private Finance','12-18%',162]].map(([label,rate,y])=>(
          <g key={label as string}>
            <text x="310" y={y as number} fill="#374151" fontSize="10">{label}</text>
            <text x="680" y={y as number} fill="#15803d" fontSize="10" fontWeight="bold">{rate}</text>
          </g>
        ))}
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-green-100">{caption}</figcaption>
    </figure>
  );
}
