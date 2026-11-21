import SitemapClient from './SitemapClient'

export const metadata = {
  title: 'Sitemap - Panama Travel UK | Quick Page Access',
  description: 'Access all Panama Travel UK pages easily with our sitemap. Find destinations, flight offers, and contact details quickly.',
  keywords: 'sitemap, Panama Travel pages, website navigation, site structure, page directory',
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/sitemap/',
  },
  openGraph: {
    title: 'Sitemap - Panama Travel UK | Quick Page Access',
    description: 'Access all Panama Travel UK pages easily with our sitemap. Find destinations, flight offers, and contact details quickly.',
    type: 'website',
    url: 'https://www.panamatravel.co.uk/sitemap/',
    siteName: 'Panama Travel',
  },
  twitter: {
    card: 'summary',
    title: 'Sitemap - Panama Travel UK | Quick Page Access',
    description: 'Access all Panama Travel UK pages easily with our sitemap. Find destinations, flight offers, and contact details quickly.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SitemapPage() {
  return <SitemapClient />
}