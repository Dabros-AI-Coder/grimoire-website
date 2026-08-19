---
// Sitemap Generator
// =================

import rss from '@astrojs/rss';

export async function GET({ site }) {
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

  return rss({
    title: 'Grimoire Interactive',
    description: 'Solo Game Dev Studio – Idle RPGs mit Tiefe',
    site: site || 'https://grimoire-interactive.de',
    items: pages.map(page => ({
      link: page.url,
      pubDate: new Date(),
      changefreq: page.changefreq,
      priority: page.priority,
    })),
    customData: `<xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  });
}