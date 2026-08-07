/**
 * Regenerate scripts/indexnow-payload.json from the live sitemap.
 *
 * The payload used to be hand-maintained, so it drifted out of sync with the
 * sitemap as new articles shipped (Ahrefs Site Audit 2026-08-07 reported 94
 * pages pending IndexNow submission while the payload only listed 70).
 * sitemap.xml is the single source of truth for indexable URLs, so derive
 * the payload from it instead of editing the list by hand.
 *
 *   node scripts/build-indexnow-payload.js   # refresh the payload
 *   node scripts/submit-indexnow.js          # then submit it
 */
const fs = require('fs');
const path = require('path');

const PAYLOAD_PATH = path.join(__dirname, 'indexnow-payload.json');
const SITEMAP_URL = 'https://kisanstatus.com/sitemap.xml';

async function main() {
  // Preserve host/key/keyLocation — the key is registered with the search
  // engines and must not be regenerated.
  const current = JSON.parse(fs.readFileSync(PAYLOAD_PATH, 'utf8'));

  const res = await fetch(SITEMAP_URL, {
    headers: { 'User-Agent': 'kisanstatus-indexnow-payload-builder' },
  });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();

  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1].trim())
    // IndexNow requires every URL to be on the declared host.
    .filter((u) => {
      try {
        return new URL(u).host === current.host;
      } catch {
        return false;
      }
    })
    // Normalise the bare-apex form so it matches how the site actually serves it.
    .map((u) => (u === `https://${current.host}` ? `https://${current.host}/` : u));

  const fromSitemap = new Set(urls);
  if (fromSitemap.size === 0) throw new Error('sitemap yielded no usable URLs; refusing to write an empty payload');

  // Keep the existing entries in their current order and append only what's
  // new, so the diff shows just the added URLs instead of a full reshuffle.
  const kept = current.urlList.filter((u) => fromSitemap.has(u));
  const appended = [...fromSitemap].filter((u) => !current.urlList.includes(u));
  const urlList = [...kept, ...appended];

  const next = { ...current, urlList };
  fs.writeFileSync(PAYLOAD_PATH, `${JSON.stringify(next, null, 1)}\n`);

  const added = urlList.filter((u) => !current.urlList.includes(u));
  const removed = current.urlList.filter((u) => !urlList.includes(u));
  console.log(`indexnow payload: ${urlList.length} URLs (+${added.length} / -${removed.length})`);
  added.forEach((u) => console.log(`  + ${u}`));
  removed.forEach((u) => console.log(`  - ${u}`));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
