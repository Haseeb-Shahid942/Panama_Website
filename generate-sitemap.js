const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Read and parse the countriesSeoData file
const countriesSeoDataPath = path.join(__dirname, 'src', 'data', 'countriesSeoData.js');
const countriesSeoDataContent = fs.readFileSync(countriesSeoDataPath, 'utf-8');

// Extract country keys from the export - improved regex
let countries = [];

// Try to match all top-level keys in the object
const matches = countriesSeoDataContent.matchAll(/^\s+(\w+):\s*\{/gm);
countries = Array.from(matches, match => match[1]);

console.log(`🔍 Found ${countries.length} destinations in countriesSeoData`);

// Fallback to manual list if parsing fails
if (countries.length === 0) {
  console.warn('⚠️  Could not parse countriesSeoData, using fallback list');
  countries = [
    'abuja', 'accra', 'bali', 'bangkok', 'dar-es-salaam', 'delhi', 'dubai',
    'egypt', 'entebbe', 'harare', 'hong-kong', 'islamabad', 'japan', 'jeddah',
    'johannesburg', 'khartoum', 'malaysia', 'maldives', 'mogadishu', 'morocco',
    'nairobi', 'new-york', 'qatar', 'singapore', 'thailand', 'turkey'
  ];
}

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
  { url: '/blogs/', changefreq: 'daily', priority: 0.9, lastmod: new Date().toISOString() },
  { url: '/about-us/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/contact-us/', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/sitemap/', changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() },
  { url: '/privacy-policy/', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() },
  { url: '/cookie-policy/', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() },
  { url: '/terms-and-conditions/', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() },

  // Destination pages (dynamic routes from countriesSeoData)
  ...countries.map((countryId) => ({
    url: `/destination/${countryId}/`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  }))
];

const stream = new SitemapStream({ hostname: 'https://www.panamatravel.co.uk' });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    const writeStream = createWriteStream('./public/sitemap.xml');
    writeStream.write(data.toString());
    writeStream.end();
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📊 Total URLs: ${links.length} (${countries.length} destinations + ${links.length - countries.length} static pages)`);
  })
  .catch((error) => {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  });



