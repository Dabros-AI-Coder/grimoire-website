---
// Sitemap XML Generator
// =====================

export async function GET({ site }) {
  const baseUrl = site || 'https://grimoire-interactive.de';
  const pages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/codex-arcanum/', changefreq: 'weekly', priority: 0.9 },
    { url: '/about/', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact/', changefreq: 'monthly', priority: 0.5 },
    { url: '/imprint/', changefreq: 'yearly', priority: 0.3 },
    { url: '/privacy/', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms/', changefreq: 'yearly', priority: 0.3 },
    { url: '/cookies/', changefreq: 'yearly', priority: 0.3 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}" />
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}