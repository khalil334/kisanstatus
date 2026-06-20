/**
 * app/api/chat/route.ts
 * Server-side proxy for NVIDIA Nemotron API.
 * The API key stays here, on the server — never sent to the browser.
 */
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are KisanBot, an expert AI assistant for KisanStatus.com — an Indian agricultural information website. You help Indian farmers with PM Kisan Samman Nidhi Yojana queries.

Answer ONLY in simple Hinglish (Roman script Hindi mixed with English). Keep answers short, clear and helpful.

Topics you know: PM Kisan status check, eKYC process, installment dates, payment problems, beneficiary list, registration, name correction, land seeding, Kisan Credit Card (KCC), PMFBY crop insurance, tractor loans.

Always mention: helpline 155261 for urgent issues. Official site: pmkisan.gov.in.

Never ask for Aadhaar numbers or bank details. Always say you are an informational assistant only.`;

type Msg = { role: 'user' | 'assistant'; content: string };

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.NVIDIA_API_KEY;

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

    const upstream = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'nvidia/nvidia-nemotron-nano-9b-v2',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmedHistory],
        temperature: 0.6,
        max_tokens: 512,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => '');
      console.error('NVIDIA API error:', upstream.status, errText);
      return NextResponse.json(
        { error: 'AI service abhi available nahi hai. Helpline 155261 par call karein.' },
        { status: 502 }
      );
    }

    const data = await upstream.json();
    const reply =
      data?.choices?.[0]?.message?.content ||
      'Maafi chahta hoon, abhi jawab nahi de pa raha. Helpline 155261 par call karo.';

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Chat route error:', err);
    return NextResponse.json(
      { error: 'Kuch galat ho gaya. Thodi der baad try karein ya helpline 155261 par call karein.' },
      { status: 500 }
    );
  }
}