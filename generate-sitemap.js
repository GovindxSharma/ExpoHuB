import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://skfoodz.in' });

  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/products', changefreq: 'weekly', priority: 0.9 },
    // Add more routes here
  ];

  // Write all links into the sitemap
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  // Convert stream → XML buffer
  const xmlData = await streamToPromise(sitemap);

  // Save to /public/sitemap.xml
  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(xmlData);
  writeStream.end();

  console.log("✅ Sitemap generated at /public/sitemap.xml");
}

generateSitemap();
