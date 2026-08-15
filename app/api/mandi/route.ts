import { NextResponse } from 'next/server';

const RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070';
const UPSTREAM_BASE = `https://api.data.gov.in/resource/${RESOURCE_ID}`;
const RECORD_LIMIT = 100;
const CACHE_SECONDS = 3600;
const UPSTREAM_TIMEOUT_MS = 8000;

const MAX_STATE_LEN = 60;

// data.gov.in's public sample key (published in their own API docs; limited
// records per request). Used only as a last-resort fallback so the site still
// shows live-ish data when no real MANDI_API_KEY is configured in Vercel.
// For full data, register at https://data.gov.in and set MANDI_API_KEY.
const PUBLIC_SAMPLE_KEY = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

export async function GET(request: Request) {
  const apiKey =
    process.env.MANDI_API_KEY ||
    process.env.NEXT_PUBLIC_MANDI_API_KEY ||
    PUBLIC_SAMPLE_KEY;

  const state = (new URL(request.url).searchParams.get('state') || '').trim();
  if (!state || state.length > MAX_STATE_LEN) {
    return NextResponse.json(
      { error: 'A `state` query parameter is required.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const upstream = new URL(UPSTREAM_BASE);
  upstream.searchParams.set('api-key', apiKey);
  upstream.searchParams.set('format', 'json');
  upstream.searchParams.set('limit', String(RECORD_LIMIT));
  upstream.searchParams.set('filters[state]', state);

  try {
    const res = await fetch(upstream, {
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      next: { revalidate: CACHE_SECONDS },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Upstream mandi API failed.', status: res.status },
        { status: 502, headers: { 'Cache-Control': 'no-store' } },
      );
    }

    const data: unknown = await res.json();
    const records = Array.isArray((data as { records?: unknown }).records)
      ? (data as { records: unknown[] }).records
      : [];

    return NextResponse.json(
      { configured: true, records },
      {
        status: 200,
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: 'Upstream mandi API unreachable.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}
