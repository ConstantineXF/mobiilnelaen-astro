// First-party network beacon relay (Vercel serverless function).
//
// The on-page beacon pings THIS endpoint (same-origin: mobiilnelaen.ee/api/n-c),
// so the browser only ever talks to this site's own domain — no shared third-party
// host appears in network requests and the network sites are NOT fingerprint-linked.
// This relay forwards the event to the hub SERVER-SIDE (invisible to the browser),
// carrying the real visitor IP + the relay secret.

const RELAY_SECRET = 'n5r_4b9f1c7e2a83d6045e9c1b7f0a2d8e3c6b5a4f9d2e1c0b8a7f6e5d4c3b2a190';

export default async function handler(req, res) {
  try {
    let b = req.body;
    if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
    if (!b || typeof b !== 'object') b = {};
    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    await fetch('https://taotle.ee/api/n/collect', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        s: 'mobiilnelaen.ee',
        p: String(b.p || '').slice(0, 300),
        k: b.k === 'click' ? 'click' : 'view',
        ip,
        rs: RELAY_SECRET,
      }),
    }).catch(() => {});
  } catch (e) { /* never fail a beacon */ }
  res.status(204).end();
}
