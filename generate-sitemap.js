import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
  ];

  const sitemapStream = new SitemapStream({ hostname: 'https://yourdomain.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemapStream.pipe(writeStream);

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(sitemapStream);

  console.log('Sitemap generated!');
}

generateSitemap();
