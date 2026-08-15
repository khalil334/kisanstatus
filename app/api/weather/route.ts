import { NextResponse } from 'next/server';

// Open-Meteo: free weather API, NO API key required (https://open-meteo.com).
// Replaces OpenWeatherMap so the site works without any WEATHER_API_KEY.
const UPSTREAM_BASE = 'https://api.open-meteo.com/v1/forecast';
const CACHE_SECONDS = 1800;
const UPSTREAM_TIMEOUT_MS = 8000;
const FORECAST_DAYS = 7;

const DEFAULT_COORDS = { lat: 28.7041, lon: 77.1025 };

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

// WMO weather codes → simple condition label (same style the UI already renders).
function codeToCondition(code: number): string {
  if (code === 0) return 'Clear';
  if (code === 1 || code === 2) return 'Partly Cloudy';
  if (code === 3) return 'Clouds';
  if (code === 45 || code === 48) return 'Fog';
  if (code >= 51 && code <= 57) return 'Drizzle';
  if (code >= 61 && code <= 67) return 'Rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain';
  if (code === 85 || code === 86) return 'Snow';
  if (code >= 95) return 'Thunderstorm';
  return 'Clouds';
}

interface UpstreamDaily {
  time?: number[];
  temperature_2m_max?: number[];
  temperature_2m_min?: number[];
  weather_code?: number[];
  precipitation_probability_max?: number[];
}

export async function GET(request: Request) {
  const state = (new URL(request.url).searchParams.get('state') || '').trim();
  const coords = STATE_COORDS[state] ?? DEFAULT_COORDS;

  const upstream = new URL(UPSTREAM_BASE);
  upstream.searchParams.set('latitude', String(coords.lat));
  upstream.searchParams.set('longitude', String(coords.lon));
  upstream.searchParams.set(
    'daily',
    'temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max',
  );
  upstream.searchParams.set('forecast_days', String(FORECAST_DAYS));
  upstream.searchParams.set('timezone', 'Asia/Kolkata');
  upstream.searchParams.set('timeformat', 'unixtime');

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
    const daily: UpstreamDaily = (data as { daily?: UpstreamDaily }).daily ?? {};
    const times = Array.isArray(daily.time) ? daily.time : [];

    // Same shape the frontend already consumes (ForecastEntry[]):
    // one entry per day; dt is local midnight, so the client's per-date
    // grouping keeps working unchanged.
    const list = times.slice(0, FORECAST_DAYS).map((dt, i) => ({
      dt,
      main: {
        temp: daily.temperature_2m_max?.[i] ?? 0,
        temp_min: daily.temperature_2m_min?.[i] ?? 0,
      },
      weather: [{ main: codeToCondition(daily.weather_code?.[i] ?? 3) }],
      clouds: { all: daily.precipitation_probability_max?.[i] ?? 0 },
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
