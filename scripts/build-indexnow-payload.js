const fs = require('fs');
const path = require('path');

const PAYLOAD_PATH = path.join(__dirname, 'indexnow-payload.json');
const STATE_PATH = path.join(__dirname, 'indexnow-state.json');
const SITEMAP_URL = 'https://kisanstatus.com/sitemap.xml';

// Parse <url><loc>..</loc><lastmod>..</lastmod></url> blocks so we can tell
// *changed* pages from merely *present* ones. Submitting the whole site on
// every run is what gets an IndexNow key throttled or ignored.
function parseSitemap(xml) {
  const out = new Map();
  for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const body = block[1];
    const loc = body.match(/<loc>\s*([^<\s]+)\s*<\/loc>/);
    if (!loc) continue;
    const lastmod = body.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/);
    out.set(loc[1].trim(), lastmod ? lastmod[1].trim() : '');
  }
  return out;
}

async function main() {
  const current = JSON.parse(fs.readFileSync(PAYLOAD_PATH, 'utf8'));
  const state = fs.existsSync(STATE_PATH)
    ? JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'))
    : { submitted: {} };
  const submitted = state.submitted || {};

  const res = await fetch(SITEMAP_URL, {
    headers: { 'User-Agent': 'kisanstatus-indexnow-payload-builder' },
  });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();

  const sitemap = parseSitemap(xml);
  if (sitemap.size === 0) {
    throw new Error('sitemap yielded no usable URLs; refusing to build a payload');
  }

  // Normalise to the payload host, dropping anything off-host.
  const live = new Map();
  for (const [rawUrl, lastmod] of sitemap) {
    let u;
    try {
      u = new URL(rawUrl);
    } catch {
      continue;
    }
    if (u.host !== current.host) continue;
    const normalised = rawUrl === `https://${current.host}` ? `https://${current.host}/` : rawUrl;
    live.set(normalised, lastmod);
  }

  // Only new URLs, or ones whose lastmod moved since we last submitted them.
  const changed = [...live.entries()]
    .filter(([url, lastmod]) => submitted[url] !== lastmod)
    .map(([url]) => url);

  // IndexNow accepts at most 10,000 URLs per request.
  const urlList = changed.slice(0, 10000);

  const next = { ...current, urlList };
  fs.writeFileSync(PAYLOAD_PATH, `${JSON.stringify(next, null, 1)}\n`);

  const known = Object.keys(submitted).length;
  console.log(
    `indexnow payload: ${urlList.length} URL(s) to submit ` +
      `(${live.size} in sitemap, ${known} previously submitted)`,
  );
  urlList.forEach((u) => console.log(`  + ${u}`));
  if (urlList.length === 0) console.log('  (nothing changed since the last submission)');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
