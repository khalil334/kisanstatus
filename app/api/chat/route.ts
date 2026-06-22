/**
 * app/api/chat/route.ts
 * Server-side proxy for NVIDIA Nemotron (via OpenRouter).
 * The API key stays here, on the server — never sent to the browser.
 */
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are KisanBot, an assistant for KisanStatus.com — an Indian agricultural information website. You help Indian farmers with PM Kisan Samman Nidhi Yojana queries.

Answer ONLY in simple Hinglish (Roman script Hindi mixed with English). Keep answers short (2-5 sentences), clear and helpful.

=== FACTS YOU ARE ALLOWED TO STATE (use ONLY these specific facts — do not invent others) ===
- PM Kisan gives ₹6,000 per year, paid in 3 installments of ₹2,000 each, every 4 months, via DBT to Aadhaar-linked bank accounts.
- To check status: go to pmkisan.gov.in → Farmers Corner → Know Your Status → enter Registration Number → enter Captcha → Get Data.
- Payment requires three things to all show "YES": eKYC done, Land Seeding done, DBT/bank account linked.
- eKYC can be done free via OTP on pmkisan.gov.in, or free biometric eKYC at any CSC (Common Service Centre).
- Not eligible: income tax payers, current/retired government employees (except Group D/Class IV), pensioners with pension ≥ ₹10,000/month, practicing doctors/engineers/lawyers/CAs, institutional landholders, and constitutional post holders (MPs, MLAs, mayors).
- Helpline numbers: 155261, 1800-11-5526, and 011-23381092.
- Official website: pmkisan.gov.in only.

=== STRICT RULES — FOLLOW EXACTLY ===
1. NEVER state a specific installment NUMBER (like "23rd" or "22nd") or a specific DATE for any installment, because you do not reliably know current installment numbers or dates. If asked "kab aayegi" or "which installment", say you don't have the latest installment number/date, and tell them to check pmkisan.gov.in directly or call the helpline.
2. NEVER invent statistics, beneficiary counts, or amounts beyond what is listed above.
3. If you are not certain about something, say so plainly in Hinglish (e.g. "Iski exact jaankari mere paas nahi hai, pmkisan.gov.in par check karein ya helpline 155261 par call karein") instead of guessing.
4. Never ask for Aadhaar numbers, bank details, or any personal identifying information.
5. Always identify yourself as an informational assistant only, not an official government channel, if asked.
6. Stay strictly on PM Kisan / Indian agricultural topics. For unrelated questions, politely redirect to PM Kisan topics.`;

type Msg = { role: 'user' | 'assistant'; content: string };

// Try multiple free models in order — if one is rate-limited/down, fall back to the next.
const MODELS = [
  'nvidia/nemotron-nano-9b-v2:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'google/gemma-3-27b-it:free',
];

async function callOpenRouter(apiKey: string, model: string, messages: any[]) {
  return fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://kisanstatus.com',
      'X-Title': 'KisanStatus.com',
    },
    signal: AbortSignal.timeout(15000), // shorter per-model timeout so fallback has time to run
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.2,
      max_tokens: 400,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server mein API key configure nahi hai. Vercel environment variables check karein.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages: Msg[] = Array.isArray(body?.messages) ? body.messages : [];

    // Basic guardrails: limit history length and message size sent upstream
    const trimmedHistory = messages.slice(-12).map((m) => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content || '').slice(0, 2000),
    }));

    const fullMessages = [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmedHistory];

    let lastStatus = 0;
    let lastErrText = '';

    for (const model of MODELS) {
      try {
        const upstream = await callOpenRouter(apiKey, model, fullMessages);

        if (upstream.ok) {
          const data = await upstream.json();
          const reply =
            data?.choices?.[0]?.message?.content ||
            'Maafi chahta hoon, abhi jawab nahi de pa raha. Helpline 155261 par call karo.';
          return NextResponse.json({ reply });
        }

        lastStatus = upstream.status;
        lastErrText = await upstream.text().catch(() => '');
        console.error(`OpenRouter API error (model: ${model}):`, lastStatus, lastErrText);

        // Only fall through to next model on rate-limit/availability errors; otherwise stop.
        if (lastStatus !== 429 && lastStatus !== 502 && lastStatus !== 503) break;
      } catch (innerErr: any) {
        if (innerErr?.name === 'TimeoutError' || innerErr?.name === 'AbortError') {
          console.error(`OpenRouter timeout (model: ${model})`);
          lastStatus = 504;
          continue; // try next model
        }
        throw innerErr;
      }
    }

    if (lastStatus === 504) {
      return NextResponse.json(
        { error: 'AI thoda busy hai abhi, response aane mein zyada time lag raha hai. Thodi der baad dobara try karein ya helpline 155261 par call karein.' },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: 'AI service abhi available nahi hai. Helpline 155261 par call karein.' },
      { status: 502 }
    );
  } catch (err: any) {
    console.error('Chat route error:', err);
    return NextResponse.json(
      { error: 'Kuch galat ho gaya. Thodi der baad try karein ya helpline 155261 par call karein.' },
      { status: 500 }
    );
  }
}