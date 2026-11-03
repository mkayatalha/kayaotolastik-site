import type { APIRoute } from 'astro';
import { hizmetler } from '../data/hizmetler';
import { bolgeler } from '../data/bolgeler';
import { yollar } from '../data/yollar';
import { rehberler } from '../data/rehber';

export const GET: APIRoute = ({ site }) => {
  const base = site!.toString().replace(/\/$/, '');
  const paths = [
    '/',
    ...hizmetler.map((h) => `/${h.slug}/`),
    '/bolgeler/',
    ...bolgeler.map((b) => `/bolgeler/${b.slug}/`),
    ...yollar.map((y) => `/yollar/${y.slug}/`),
    ...rehberler.map((r) => `/rehber/${r.slug}/`),
    '/hakkimizda/',
    '/kvkk/',
    '/cerez-politikasi/',
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
