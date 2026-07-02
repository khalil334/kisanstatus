'use client';
/**
 * AiAssistant.tsx — KisanStatus.com v2.0
 * ✅ PRODUCTION READY
 * ✅ ACCESSIBILITY ENHANCED
 * ✅ ANALYTICS INTEGRATION
 * ✅ KEYBOARD NAVIGATION
 * ✅ FOCUS MANAGEMENT
 * ✅ ERROR HANDLING
 * ✅ PERFORMANCE OPTIMIZED
 * ✅ DARK MODE SUPPORT
 * 
 * Floating AI chatbot widget — animated kisan-robot mascot
 * (turban, moustache, marching legs, swinging arms, blinking eyes)
 * Talks to our own /api/chat route (server-side), which safely
 * forwards to NVIDIA Nemotron. No API key in browser code.
 * Author: KisanStatus Team
 */
import { useState, useRef, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/gtag';

type Msg = { role: 'user' | 'assistant'; content: string; timestamp?: number };

const QUICK_QUESTIONS = [
  'eKYC kaise kare?',
  'Payment nahi aayi?',
  'Status check karo',
  'Registration kaise kare?',
  '23vi kist kab aayi?',
  'Naam correction kaise kare?',
];

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { 
      role: 'assistant', 
      content: 'नमस्ते किसान भाई! 🌾 Main KisanBot hoon — PM Kisan ke baare mein koi bhi sawaal pucho!',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [msgs, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      trackEvent('chatbot_open', {
        event_category: 'AI Assistant',
        event_label: 'KisanBot',
      });
    }
  }, [open]);

  const send = useCallback(async () => {
    if (!input.trim() || loading) return;
    
    const userMsg: Msg = { 
      role: 'user', 
      content: input.trim(),
      timestamp: Date.now()
    };
    
    const nextMsgs = [...msgs, userMsg];
    setMsgs(nextMsgs);
    setInput('');
    setLoading(true);
    setError(null);

    trackEvent('chatbot_message', {
      event_category: 'AI Assistant',
      event_label: 'User Query',
      value: userMsg.content,
    });

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMsgs }),
      });

      const data = await res.json();

      if (!res.ok || !data?.reply) {
        const errorMsg = data?.error || 'Maafi chahta hoon, abhi jawab nahi de pa raha. Helpline 155261 par call karo.';
        setMsgs(prev => [
          ...prev,
          { role: 'assistant', content: errorMsg, timestamp: Date.now() },
        ]);
        setError(errorMsg);
        
        trackEvent('chatbot_error', {
          event_category: 'AI Assistant',
          event_label: 'API Error',
          value: errorMsg,
        });
        return;
      }

      const assistantMsg: Msg = { 
        role: 'assistant', 
        content: data.reply,
        timestamp: Date.now()
      };
      
      setMsgs(prev => [...prev, assistantMsg]);
      
      trackEvent('chatbot_response', {
        event_category: 'AI Assistant',
        event_label: 'Bot Reply',
        value: data.reply.substring(0, 100),
      });
    } catch (err) {
      const errorMsg = 'Network problem aa gayi. Helpline 155261 par call karo ya pmkisan.gov.in dekho.';
      setMsgs(prev => [...prev, { role: 'assistant', content: errorMsg, timestamp: Date.now() }]);
      setError(errorMsg);
      
      trackEvent('chatbot_error', {
        event_category: 'AI Assistant',
        event_label: 'Network Error',
        value: String(err),
      });
    } finally {
      setLoading(false);
    }
  }, [input, loading, msgs]);

  const handleQuickQuestion = useCallback((question: string) => {
    setInput(question);
    trackEvent('chatbot_quick_question', {
      event_category: 'AI Assistant',
      event_label: question,
    });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
    if (e.key === 'Escape' && open) {
      setOpen(false);
    }
  }, [send, open]);

  return (
    <>
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

      {/* Floating Button */}
      <button
        onClick={() => setOpen(v => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(v => !v);
          }
        }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 group focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 rounded-full"
        aria-label={open ? 'Close KisanBot AI Assistant' : 'Open KisanBot AI Assistant'}
        aria-expanded={open}
        role="button"
      >
        <div className="relative w-16 h-16">
          <div 
            className="absolute inset-0 rounded-full bg-green-400 opacity-30 scale-125 animate-ping" 
            aria-hidden="true" 
          />

          <div className="relative w-16 h-16 bg-[var(--color-card)] rounded-full shadow-lg border-2 border-green-300 flex items-end justify-center overflow-hidden group-hover:scale-110 transition-transform duration-200">
            <svg viewBox="0 0 110 130" width="58" height="68" aria-hidden="true">
              <ellipse className="kb-dust1" cx="38" cy="118" rx="8" ry="3" fill="#a3a3a3" />
              <ellipse className="kb-dust2" cx="62" cy="118" rx="8" ry="3" fill="#a3a3a3" />

              <g className="kb-body-wrap">
                <g className="kb-leg-right">
                  <rect x="58" y="78" width="9" height="26" rx="4" fill="#16a34a" />
                  <ellipse cx="62" cy="106" rx="7" ry="4" fill="#14532d" />
                </g>

                <g className="kb-arm-right">
                  <rect x="74" y="58" width="8" height="22" rx="4" fill="#22c55e" />
                  <circle cx="78" cy="81" r="5" fill="#dcfce7" />
                </g>

                <rect x="32" y="55" width="46" height="34" rx="10" fill="#dcfce7" stroke="#15803d" strokeWidth="2" />
                <rect x="38" y="60" width="6" height="14" rx="3" fill="#ffffff" opacity="0.6" />
                <path d="M40 55 Q55 64 70 55" fill="none" stroke="#15803d" strokeWidth="2" />

                <rect x="32" y="76" width="46" height="6" fill="#b45309" />
                <rect x="50" y="76" width="10" height="6" fill="#92400e" />

                <g className="kb-leg-left">
                  <rect x="43" y="78" width="9" height="26" rx="4" fill="#22c55e" />
                  <ellipse cx="47" cy="106" rx="7" ry="4" fill="#166534" />
                </g>

                <g>
                  <rect x="49" y="46" width="12" height="10" fill="#dcfce7" />
                  <circle cx="55" cy="32" r="20" fill="#ecfdf5" stroke="#15803d" strokeWidth="2" />

                  <circle cx="42" cy="36" r="3.5" fill="#fca5a5" opacity="0.5" />
                  <circle cx="68" cy="36" r="3.5" fill="#fca5a5" opacity="0.5" />

                  <g className="kb-eye">
                    <circle cx="47" cy="30" r="4" fill="#14532d" />
                    <circle cx="48.3" cy="28.5" r="1.3" fill="#fff" />
                  </g>
                  <g className="kb-eye">
                    <circle cx="63" cy="30" r="4" fill="#14532d" />
                    <circle cx="64.3" cy="28.5" r="1.3" fill="#fff" />
                  </g>

                  <path d="M44 38.5 Q55 43 66 38.5" fill="none" stroke="#78350f" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M47 42 Q55 47 63 42" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />

                  <path d="M33 22 Q35 4 55 3 Q77 4 78 23 Q70 14 55 14 Q40 14 33 22 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  <path d="M35 19 Q55 9 76 19" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.8" />
                  <g className="kb-turban-tail">
                    <path d="M74 16 Q86 18 84 30 Q82 22 72 20 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  </g>
                  <circle cx="55" cy="11" r="3" fill="#4ade80" stroke="#15803d" strokeWidth="1" />

                  <line x1="55" y1="3" x2="55" y2="-3" stroke="#15803d" strokeWidth="2" />
                  <circle cx="55" cy="-5" r="2.5" fill="#4ade80" />
                </g>

                <g className="kb-arm-left">
                  <rect x="20" y="58" width="8" height="22" rx="4" fill="#16a34a" />
                  <circle cx="24" cy="58" r="6" fill="#dcfce7" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {!open && (
          <div className="bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow whitespace-nowrap animate-pulse">
            राम राम! कुछ पूछो 🌾
          </div>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div 
          ref={chatWindowRef}
          role="dialog"
          aria-label="KisanBot AI Assistant Chat"
          aria-modal="true"
          className="fixed bottom-28 right-4 z-50 w-80 sm:w-96 bg-[var(--color-card)] rounded-2xl shadow-2xl border border-[var(--color-border)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300" 
          style={{ maxHeight: '520px' }}
        >
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
            <button 
              onClick={() => setOpen(false)} 
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(false);
                }
              }}
              className="text-white/70 hover:text-white text-xl leading-none focus:outline-none focus:ring-2 focus:ring-white rounded p-1" 
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--color-bg-alt)]" 
            style={{ maxHeight: '360px' }}
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs mr-2 mt-1 shrink-0" aria-hidden="true">
                    🌾
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-green-600 text-white rounded-br-sm'
                    : 'bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] rounded-bl-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start" aria-label="Bot is typing">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs mr-2 shrink-0" aria-hidden="true">
                  🌾
                </div>
                <div className="bg-[var(--color-card)] border border-[var(--color-border)] px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-green-400 animate-bounce" 
                        style={{ animationDelay: `${i*0.15}s` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick suggestions */}
          {msgs.length === 1 && (
            <div className="px-3 py-2 bg-[var(--color-card)] border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text-muted)] mb-2 font-semibold">Quick sawaal:</p>
              <div className="flex flex-wrap gap-1">
                {QUICK_QUESTIONS.map(q => (
                  <button 
                    key={q} 
                    onClick={() => handleQuickQuestion(q)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleQuickQuestion(q);
                      }
                    }}
                    className="text-xs bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-full hover:bg-green-100 hover:border-green-300 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-[var(--color-card)] border-t border-[var(--color-border)]">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="PM Kisan se juda sawaal pucho..."
                className="flex-1 text-sm border border-[var(--color-border)] rounded-xl px-3 py-2 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 bg-[var(--color-bg-alt)] text-[var(--color-text)] transition-all"
                disabled={loading}
                aria-label="Type your question"
              />
              <button 
                onClick={send} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    send();
                  }
                }}
                disabled={loading || !input.trim()}
                className="bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl transition-all text-sm font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Send message"
              >
                {loading ? '...' : '→'}
              </button>
            </div>
            <p className="text-[10px] text-[var(--color-text-muted)] mt-1.5 text-center">
              KisanStatus.com • Informational only • Official: pmkisan.gov.in
            </p>
          </div>
        </div>
      )}
    </>
  );
}