'use client';
/**
 * AiAssistant.tsx — KisanStatus.com
 * Floating AI chatbot widget — animated kisan-robot mascot
 * (turban, moustache, marching legs, swinging arms, blinking eyes)
 * Talks to our own /api/chat route (server-side), which safely
 * forwards to NVIDIA Nemotron. No API key in browser code.
 * Author: Sidhu Singh
 */
import { useState, useRef, useEffect } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'assistant', content: 'नमस्ते किसान भाई! 🌾 Main KisanBot hoon — PM Kisan ke baare mein koi bhi sawaal pucho!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, open]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: 'user', content: input.trim() };
    const nextMsgs = [...msgs, userMsg];
    setMsgs(nextMsgs);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMsgs }),
      });

      const data = await res.json();

      if (!res.ok || !data?.reply) {
        setMsgs(prev => [
          ...prev,
          { role: 'assistant', content: data?.error || 'Maafi chahta hoon, abhi jawab nahi de pa raha. Helpline 155261 par call karo.' },
        ]);
        return;
      }

      setMsgs(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMsgs(prev => [...prev, { role: 'assistant', content: 'Network problem aa gayi. Helpline 155261 par call karo ya pmkisan.gov.in dekho.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Scoped animation keyframes for the kisan-robot mascot */}
      <style>{`
        @keyframes kb-bob {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-3px); }
        }
        @keyframes kb-legL {
          0%, 100% { transform: rotate(16deg); }
          50% { transform: rotate(-16deg); }
        }
        @keyframes kb-legR {
          0%, 100% { transform: rotate(-16deg); }
          50% { transform: rotate(16deg); }
        }
        @keyframes kb-armL {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(12deg); }
        }
        @keyframes kb-armR {
          0%, 100% { transform: rotate(12deg); }
          50% { transform: rotate(-12deg); }
        }
        @keyframes kb-blink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes kb-sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(6deg); }
        }
        @keyframes kb-dust {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          30% { opacity: 0.45; }
          100% { opacity: 0; transform: translateY(3px) scale(1.3); }
        }
        .kb-body-wrap { animation: kb-bob 0.6s ease-in-out infinite alternate; }
        .kb-leg-left  { transform-origin: 38px 100px; animation: kb-legL 0.6s ease-in-out infinite; }
        .kb-leg-right { transform-origin: 62px 100px; animation: kb-legR 0.6s ease-in-out infinite; }
        .kb-arm-left  { transform-origin: 22px 70px;  animation: kb-armL 0.6s ease-in-out infinite; }
        .kb-arm-right { transform-origin: 78px 70px;  animation: kb-armR 0.6s ease-in-out infinite; }
        .kb-eye       { animation: kb-blink 3.2s ease-in-out infinite; transform-origin: center; }
        .kb-turban-tail { transform-origin: 65px 18px; animation: kb-sway 1.8s ease-in-out infinite; }
        .kb-dust1 { animation: kb-dust 0.6s ease-out infinite; }
        .kb-dust2 { animation: kb-dust 0.6s ease-out infinite; animation-delay: 0.3s; }
      `}</style>

      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 group"
        aria-label="KisanBot AI Assistant"
      >
        <div className="relative w-16 h-16">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 scale-125 animate-ping" aria-hidden="true" />

          <div className="relative w-16 h-16 bg-white rounded-full shadow-lg border-2 border-green-300 flex items-end justify-center overflow-hidden">
            <svg viewBox="0 0 110 130" width="58" height="68" aria-hidden="true">
              {/* dust puffs under feet */}
              <ellipse className="kb-dust1" cx="38" cy="118" rx="8" ry="3" fill="#a3a3a3" />
              <ellipse className="kb-dust2" cx="62" cy="118" rx="8" ry="3" fill="#a3a3a3" />

              <g className="kb-body-wrap">
                {/* back leg (right) */}
                <g className="kb-leg-right">
                  <rect x="58" y="78" width="9" height="26" rx="4" fill="#16a34a" />
                  <ellipse cx="62" cy="106" rx="7" ry="4" fill="#14532d" />
                </g>

                {/* back arm (right) */}
                <g className="kb-arm-right">
                  <rect x="74" y="58" width="8" height="22" rx="4" fill="#22c55e" />
                  <circle cx="78" cy="81" r="5" fill="#dcfce7" />
                </g>

                {/* body */}
                <rect x="32" y="55" width="46" height="34" rx="10" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
                <rect x="38" y="60" width="6" height="14" rx="3" fill="#ffffff" opacity="0.6" />
                <path d="M40 55 Q55 64 70 55" fill="none" stroke="#15803d" strokeWidth="2" />

                {/* belt */}
                <rect x="32" y="76" width="46" height="6" fill="#b45309" />
                <rect x="50" y="76" width="10" height="6" fill="#92400e" />

                {/* front leg (left) */}
                <g className="kb-leg-left">
                  <rect x="43" y="78" width="9" height="26" rx="4" fill="#22c55e" />
                  <ellipse cx="47" cy="106" rx="7" ry="4" fill="#166534" />
                </g>

                {/* head */}
                <g>
                  <rect x="49" y="46" width="12" height="10" fill="#dcfce7" />
                  <circle cx="55" cy="32" r="20" fill="#ecfdf5" stroke="#15803d" strokeWidth="2" />

                  {/* cheeks */}
                  <circle cx="42" cy="36" r="3.5" fill="#fca5a5" opacity="0.5" />
                  <circle cx="68" cy="36" r="3.5" fill="#fca5a5" opacity="0.5" />

                  {/* eyes */}
                  <g className="kb-eye">
                    <circle cx="47" cy="30" r="4" fill="#14532d" />
                    <circle cx="48.3" cy="28.5" r="1.3" fill="#fff" />
                  </g>
                  <g className="kb-eye">
                    <circle cx="63" cy="30" r="4" fill="#14532d" />
                    <circle cx="64.3" cy="28.5" r="1.3" fill="#fff" />
                  </g>

                  {/* moustache */}
                  <path d="M44 38.5 Q55 43 66 38.5" fill="none" stroke="#78350f" strokeWidth="2.8" strokeLinecap="round" />
                  {/* smile */}
                  <path d="M47 42 Q55 47 63 42" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />

                  {/* turban / pagdi */}
                  <path d="M33 22 Q35 4 55 3 Q77 4 78 23 Q70 14 55 14 Q40 14 33 22 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  <path d="M35 19 Q55 9 76 19" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.8" />
                  <g className="kb-turban-tail">
                    <path d="M74 16 Q86 18 84 30 Q82 22 72 20 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  </g>
                  <circle cx="55" cy="11" r="3" fill="#4ade80" stroke="#15803d" strokeWidth="1" />

                  {/* antenna */}
                  <line x1="55" y1="3" x2="55" y2="-3" stroke="#15803d" strokeWidth="2" />
                  <circle cx="55" cy="-5" r="2.5" fill="#4ade80" />
                </g>

                {/* front arm (left) */}
                <g className="kb-arm-left">
                  <rect x="20" y="58" width="8" height="22" rx="4" fill="#16a34a" />
                  <circle cx="24" cy="58" r="6" fill="#dcfce7" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Label */}
        {!open && (
          <div className="bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow whitespace-nowrap">
            राम राम! कुछ पूछो 🌾
          </div>
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div className="fixed bottom-28 right-4 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-green-200 flex flex-col overflow-hidden" style={{ maxHeight: '520px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-lg overflow-hidden shrink-0">
                <svg viewBox="0 0 110 130" width="30" height="36" aria-hidden="true">
                  <circle cx="55" cy="32" r="20" fill="#ecfdf5" stroke="#15803d" strokeWidth="2" />
                  <circle cx="47" cy="30" r="4" fill="#14532d" />
                  <circle cx="63" cy="30" r="4" fill="#14532d" />
                  <path d="M44 38.5 Q55 43 66 38.5" fill="none" stroke="#78350f" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M33 22 Q35 4 55 3 Q77 4 78 23 Q70 14 55 14 Q40 14 33 22 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  <circle cx="55" cy="11" r="3" fill="#4ade80" stroke="#15803d" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">KisanBot</p>
                <p className="text-green-200 text-[10px]">PM Kisan AI Assistant • Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-xl leading-none" aria-label="Close">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ maxHeight: '360px' }}>
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs mr-2 mt-1 shrink-0">🌾</div>
                )}
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-green-600 text-white rounded-br-sm'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs mr-2 shrink-0">🌾</div>
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    {[0,1,2].map(i=><div key={i} className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: `${i*0.15}s` }}/>)}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick suggestions */}
          {msgs.length === 1 && (
            <div className="px-3 py-2 bg-white border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-2">Quick sawaal:</p>
              <div className="flex flex-wrap gap-1">
                {['eKYC kaise kare?','Payment nahi aayi?','Status check karo','Registration kaise kare?'].map(q=>(
                  <button key={q} onClick={() => { setInput(q); }} className="text-xs bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded-full hover:bg-green-100 transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="PM Kisan se juda sawaal pucho..."
                className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-green-400 bg-gray-50"
                disabled={loading}
              />
              <button onClick={send} disabled={loading || !input.trim()}
                className="bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-3 py-2 rounded-xl transition-colors text-sm font-bold">
                {loading ? '...' : '→'}
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 text-center">KisanStatus.com • Informational only • Official: pmkisan.gov.in</p>
          </div>
        </div>
      )}
    </>
  );
}