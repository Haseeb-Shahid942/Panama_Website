export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [ '/*?scroll=' ],
      },
    ],
    sitemap: 'https://panamatravel.co.uk/sitemap.xml',
  }
}
