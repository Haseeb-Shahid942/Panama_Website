import Link from 'next/link'
import { countriesSeoData } from '@/data/countriesSeoData'
import CountryPageClient from './CountryPageClient'

export async function generateMetadata({ params }) {
  try {
    const { countryId } = params
    const country = countriesSeoData[countryId]

    if (!country) {
      return {
        title: 'Destination Not Found - Panama Travel',
        description: 'The requested destination could not be found.',
      }
    }

    const canonicalUrl = `https://www.panamatravel.co.uk/destination/${countryId}/`

    return {
      title: country.title || `${country.name} - Panama Travel`,
      description: country.description || `Discover ${country.name} with Panama Travel. Book your flight today and experience the best of ${country.name}.`,
      keywords: `${country.name}, travel, flights, panama travel, cheap flights, ${country.name} travel`,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: country.title || `${country.name} - Panama Travel`,
        description: country.description || `Discover ${country.name} with Panama Travel`,
        url: canonicalUrl,
        siteName: 'Panama Travel',
        images: country.images && country.images.length > 0 ? [{ url: country.images[0], alt: country.name }] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: country.title || `${country.name} - Panama Travel`,
        description: country.description || `Discover ${country.name} with Panama Travel`,
        images: country.images && country.images.length > 0 ? [country.images[0]] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Destination - Panama Travel',
      description: 'Discover amazing destinations with Panama Travel',
    }
  }
}



export default function CountryDataPage({ params }) {
  const { countryId } = params
  const country = countriesSeoData[countryId]

  if (!country) {
    return (
      <div className="container min-h-[50vh] mx-auto p-6 text-center">
        <h1 className="text-3xl font-semibold mb-4">Destination not found</h1>
        <Link href="/" className="text-blue-500 underline">Go back home</Link>
      </div>
    )
  }

  return <CountryPageClient country={country} />
}