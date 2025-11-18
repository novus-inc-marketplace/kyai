import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  '',
  'about',
  'projects',
  'adopt',
  'volunteer',
  'workshops',
  'stories',
  'contact',
  'members',
];

const baseUrl = 'https://barakahroots.org'; // Replace with actual domain

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const url = `${baseUrl}/${page}`;
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
      `;
    })
    .join('')}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);

console.log('sitemap.xml generated successfully!');

