const fs = require('fs');
const path = require('path');

const PAYLOAD_PATH = path.join(__dirname, 'indexnow-payload.json');
const SITEMAP_URL = 'https://kisanstatus.com/sitemap.xml';

async function main() {
  const current = JSON.parse(fs.readFileSync(PAYLOAD_PATH, 'utf8'));

  const res = await fetch(SITEMAP_URL, {
    headers: { 'User-Agent': 'kisanstatus-indexnow-payload-builder' },
  });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();

  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => {
      try {
        return new URL(u).host === current.host;
      } catch {
        return false;
      }
    })
    .map((u) => (u === `https://${current.host}` ? `https://${current.host}/` : u));

  const fromSitemap = new Set(urls);
  if (fromSitemap.size === 0) throw new Error('sitemap yielded no usable URLs; refusing to write an empty payload');

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
