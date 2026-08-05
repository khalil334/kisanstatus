const payload = require('./indexnow-payload.json');
fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
}).then(async (r) => {
  console.log('IndexNow response:', r.status, await r.text());
  if (r.status !== 200 && r.status !== 202) process.exit(1);
}).catch((e) => { console.error(e); process.exit(1); });
