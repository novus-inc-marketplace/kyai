const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.barakahroots.org/'; // Replace with your actual base URL
const outputFilePath = path.join(__dirname, 'sitemap.xml');
const htmlFiles = [];
const pdfFiles = [];

// Read all HTML files in the current directory
fs.readdirSync(__dirname).forEach(file => {
    if (file.endsWith('.html')) {
        htmlFiles.push(file);
    }
});

// Read all PDF files in the 'pdfs' directory
const pdfsDirPath = path.join(__dirname, 'pdfs');
if (fs.existsSync(pdfsDirPath)) {
    fs.readdirSync(pdfsDirPath).forEach(file => {
        if (file.endsWith('.pdf')) {
            pdfFiles.push(path.join('pdfs', file));
        }
    });
}

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

const lastMod = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

htmlFiles.forEach(file => {
    const url = new URL(file, baseUrl).href;
    sitemapContent += `
    <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`;
});

pdfFiles.forEach(file => {
    const url = new URL(file, baseUrl).href;
    sitemapContent += `
    <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`;
});

sitemapContent += `
</urlset>`;

fs.writeFileSync(outputFilePath, sitemapContent, 'utf8');
console.log('sitemap.xml generated successfully!');