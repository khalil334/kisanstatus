import { NextResponse } from 'next/server';

/**
 * Server-side proxy for the data.gov.in Agmarknet mandi-price resource (BUG-8 part 1).
 *
 * The key used to be read as `NEXT_PUBLIC_MANDI_API_KEY` inside
 * `components/articles/mandi-bhav-today.tsx`, which is a client component — so it was
 * inlined into the JS bundle and extractable by anyone. It now lives only here, in a
 * server-only env var (`MANDI_API_KEY`), and the browser talks to this route instead of
 * calling api.data.gov.in directly.
 *
 * Responses are cached for an hour: mandi rates are published once a day, so re-fetching
 * per visitor only burns quota and adds latency.
 */

const RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070';
const UPSTREAM_BASE = `https://api.data.gov.in/resource/${RESOURCE_ID}`;
const RECORD_LIMIT = 100;
const CACHE_SECONDS = 3600;
const UPSTREAM_TIMEOUT_MS = 8000;

/** Longest state name we'll forward upstream; anything larger is junk input. */
const MAX_STATE_LEN = 60;

export async function GET(request: Request) {
  // Server-only. `MANDI_API_KEY` is preferred; the old public name is accepted as a
  // fallback so an existing deployment keeps working until the env var is renamed.
  const apiKey = process.env.MANDI_API_KEY || process.env.NEXT_PUBLIC_MANDI_API_KEY || '';

  if (!apiKey) {
    // Mirrors the old "no key configured" path: the client renders its static fallback.
    return NextResponse.json(
      { configured: false, records: [] },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }

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

    // Only the fields the component actually reads are forwarded.
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
