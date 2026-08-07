import { NextResponse } from 'next/server';

/**
 * Server-side proxy for the OpenWeatherMap 5-day forecast (BUG-8 part 2).
 *
 * The key used to be read as `NEXT_PUBLIC_WEATHER_API_KEY` inside
 * `components/articles/mandi-bhav-today.tsx`, which is a client component — so it was
 * inlined into the JS bundle and extractable by anyone (OWM bills per call, so that's a
 * real quota/billing exposure). It now lives only here, in a server-only env var
 * (`WEATHER_API_KEY`), and the browser talks to this route instead of calling
 * api.openweathermap.org directly.
 *
 * The route takes a `state` name (not raw lat/lon) so it can't be abused as an open
 * proxy for arbitrary coordinates — coordinates are resolved server-side from the same
 * fixed table the component used. Responses are cached for 30 minutes per state: a
 * 3-hourly forecast doesn't change faster than that, and it keeps OWM quota flat no
 * matter how many visitors hit the page.
 */

const UPSTREAM_BASE = 'https://api.openweathermap.org/data/2.5/forecast';
const CACHE_SECONDS = 1800;
const UPSTREAM_TIMEOUT_MS = 8000;

const DEFAULT_COORDS = { lat: 28.7041, lon: 77.1025 }; // Delhi

/** Same state → coordinates table the component keys its selector on. */
const STATE_COORDS: Record<string, { lat: number; lon: number }> = {
  'Uttar Pradesh': { lat: 26.8467, lon: 80.9462 },
  'Maharashtra': { lat: 19.076, lon: 72.8777 },
  'Madhya Pradesh': { lat: 22.7196, lon: 75.8577 },
  'Rajasthan': { lat: 26.9124, lon: 75.7873 },
  'Gujarat': { lat: 23.0225, lon: 72.5714 },
  'Punjab': { lat: 30.901, lon: 75.8573 },
  'Haryana': { lat: 29.0588, lon: 76.0856 },
  'Bihar': { lat: 25.5941, lon: 85.1376 },
  'West Bengal': { lat: 22.5726, lon: 88.3639 },
  'Odisha': { lat: 20.2961, lon: 85.8245 },
  'Jharkhand': { lat: 23.3441, lon: 85.3096 },
  'Chhattisgarh': { lat: 21.2514, lon: 81.6296 },
  'Karnataka': { lat: 12.9716, lon: 77.5946 },
  'Tamil Nadu': { lat: 13.0827, lon: 80.2707 },
  'Kerala': { lat: 9.9312, lon: 76.2673 },
  'Andhra Pradesh': { lat: 16.5062, lon: 80.648 },
  'Telangana': { lat: 17.385, lon: 78.4867 },
  'Assam': { lat: 26.1445, lon: 91.7362 },
  'Uttarakhand': { lat: 30.3165, lon: 78.0322 },
  'Himachal Pradesh': { lat: 31.1048, lon: 77.1734 },
  'Jammu & Kashmir': { lat: 34.0837, lon: 74.7973 },
  'Delhi': DEFAULT_COORDS,
};

/** One 3-hourly entry of the OWM `/data/2.5/forecast` response (fields we forward). */
interface UpstreamEntry {
  dt?: number;
  main?: { temp?: number; temp_min?: number };
  weather?: { main?: string }[];
  clouds?: { all?: number };
}

export async function GET(request: Request) {
  // Server-only. `WEATHER_API_KEY` is preferred; the old public name is accepted as a
  // fallback so an existing deployment keeps working until the env var is renamed.
  const apiKey = process.env.WEATHER_API_KEY || process.env.NEXT_PUBLIC_WEATHER_API_KEY || '';

  if (!apiKey) {
    // Mirrors the old "no key configured" path: the client renders its static fallback.
    return NextResponse.json(
      { configured: false, list: [] },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const state = (new URL(request.url).searchParams.get('state') || '').trim();
  const coords = STATE_COORDS[state] ?? DEFAULT_COORDS;

  const upstream = new URL(UPSTREAM_BASE);
  upstream.searchParams.set('lat', String(coords.lat));
  upstream.searchParams.set('lon', String(coords.lon));
  upstream.searchParams.set('appid', apiKey);
  upstream.searchParams.set('units', 'metric');

  try {
    const res = await fetch(upstream, {
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      next: { revalidate: CACHE_SECONDS },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Upstream weather API failed.', status: res.status },
        { status: 502, headers: { 'Cache-Control': 'no-store' } },
      );
    }

    const data: unknown = await res.json();
    const rawList = Array.isArray((data as { list?: unknown }).list)
      ? ((data as { list: UpstreamEntry[] }).list)
      : [];

    // Only the fields the component actually reads are forwarded (and only the first 40
    // 3-hourly slots = 5 days, same window the component used).
    const list = rawList.slice(0, 40).map((item) => ({
      dt: item.dt ?? 0,
      main: { temp: item.main?.temp ?? 0, temp_min: item.main?.temp_min ?? 0 },
      weather: [{ main: item.weather?.[0]?.main ?? '' }],
      clouds: { all: item.clouds?.all ?? 0 },
    }));

    return NextResponse.json(
      { configured: true, list },
      {
        status: 200,
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`,
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: 'Upstream weather API unreachable.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}
