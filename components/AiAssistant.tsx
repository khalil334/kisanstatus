'use client';
/**
 * AiAssistant.tsx — KisanStatus.com
 * Floating AI chatbot widget — waving robot animation
 * Uses NVIDIA Nemotron API for PM Kisan queries
 * Author: Sidhu Singh
 */
import { useState, useRef, useEffect } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

const SYSTEM_PROMPT = `You are KisanBot, an expert AI assistant for KisanStatus.com — an Indian agricultural information website. You help Indian farmers with PM Kisan Samman Nidhi Yojana queries.

Answer ONLY in simple Hinglish (Roman script Hindi mixed with English). Keep answers short, clear and helpful.

Topics you know: PM Kisan status check, eKYC process, installment dates, payment problems, beneficiary list, registration, name correction, land seeding, Kisan Credit Card (KCC), PMFBY crop insurance, tractor loans.

Always mention: helpline 155261 for urgent issues. Official site: pmkisan.gov.in.

Never ask for Aadhaar numbers or bank details. Always say you are an informational assistant only.`;

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'assistant', content: 'Namaste! 🌾 Main KisanBot hoon — PM Kisan ke baare mein koi bhi sawaal pucho!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [wave, setWave] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Wave animation on load
  useEffect(() => {
    const t = setInterval(() => { setWave(v => !v); }, 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, open]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: 'user', content: input.trim() };
    setMsgs(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
          model: 'nvidia/llama-3.1-nemotron-ultra-253b-v1',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...msgs.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMsg.content },
          ],
          temperature: 0.6,
          max_tokens: 512,
        }),
      });

      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content || 'Maafi chahta hoon, abhi jawab nahi de pa raha. Helpline 155261 par call karo.';
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMsgs(prev => [...prev, { role: 'assistant', content: 'Network problem aa gayi. Helpline 155261 par call karo ya pmkisan.gov.in dekho.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 group"
        aria-label="KisanBot AI Assistant"
      >
        {/* Waving robot SVG */}
        <div className="relative">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 scale-125 animate-ping" aria-hidden="true" />

          <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg flex items-center justify-center border-2 border-green-300">
            {/* Robot face SVG */}
            <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
              {/* Head */}
              <rect x="8" y="8" width="24" height="20" rx="4" fill="#e2fce8" stroke="#15803d" strokeWidth="1.5"/>
              {/* Eyes */}
              <circle cx="15" cy="16" r="3" fill="#15803d"/>
              <circle cx="25" cy="16" r="3" fill="#15803d"/>
              <circle cx="16" cy="15" r="1" fill="#fff"/>
              <circle cx="26" cy="15" r="1" fill="#fff"/>
              {/* Smile */}
              <path d="M14 22 Q20 27 26 22" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round"/>
              {/* Antenna */}
              <line x1="20" y1="8" x2="20" y2="4" stroke="#15803d" strokeWidth="1.5"/>
              <circle cx="20" cy="3" r="2" fill="#4ade80"/>
              {/* Body */}
              <rect x="12" y="28" width="16" height="8" rx="2" fill="#dcfce7" stroke="#15803d" strokeWidth="1"/>
              {/* Left arm — waves */}
              <g style={{ transformOrigin: '12px 30px', transform: wave ? 'rotate(-30deg)' : 'rotate(20deg)', transition: 'transform 0.6s ease-in-out' }}>
                <rect x="4" y="28" width="8" height="3" rx="1.5" fill="#86efac" stroke="#15803d" strokeWidth="1"/>
              </g>
              {/* Right arm */}
              <rect x="28" y="28" width="8" height="3" rx="1.5" fill="#86efac" stroke="#15803d" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Label */}
        {!open && (
          <div className="bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow whitespace-nowrap">
            How may I assist?
          </div>
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div className="fixed bottom-28 right-4 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-green-200 flex flex-col overflow-hidden" style={{ maxHeight: '520px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">🌾</div>
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
