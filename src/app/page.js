
import HeroSection from '../components/Home/HeroSection'
import PanamaWelcomeSection from '../components/Home/PanamaWelcomeSection'
import TicketSection from '../components/UI/Cards/TicketSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import DreamDestinationsSection from '../components/Home/DreamDestinationsSection'
import NeedHelpSection from '../components/Home/NeedHelpSection'
import DealsGridSection from '../components/Home/DealsGridSection'
import DiscoverAbout from '../components/Home/DiscoverAbout'
import ExclusiveDealsSection from '../components/UI/Card/ExclusiveDealsSection'
import WhatWeOffer from '../components/Home/WhatWeOffer'
import TravelTipsSection from '../components/UI/Cards/TravelTipsSection'
import TestimonialsSection from '../components/Testimonials/TestimonialsSection'
import NewsletterSection from '../components/Home/NewsletterSection'
import GoogleReviewsSection from '../components/GoogleReviewSection/GoogleReviewSection'
import TopFlightRoutes from '../components/Home/TopFlightRoutes'
import { getCachedData, setCachedData } from '../utils/cache'

export const metadata = {
  title: 'Book Cheap Flights with Panama Travel | Since 1984',
  description: 'Book cheap flights worldwide with Panama Travel. Trusted since 1984 for affordable fares, top airlines, and expert travel service.',
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/',
  },
}

async function getHomepageData() {
  const CACHE_KEY = 'homepage_data'
  const ONE_DAY = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

  // Check if we have cached data
  const cachedData = getCachedData(CACHE_KEY, ONE_DAY)
  if (cachedData) {
    // console.log('Using cached homepage data')
    return cachedData;
  }

  // No cache or expired, fetch fresh data
  // console.log('Fetching fresh homepage data from API')

  try {
    const res = await fetch('https://admin.panamatravel.co.uk/api/homepage', {
      next: { revalidate: 86400 }, // Next.js cache layer
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      console.warn(`API returned ${res.status}: ${res.statusText}`)
      // Return mock data structure if API fails
      return {
        data: {
          about_panama: null,
          popular_flights: null,
          why_choose_us: null,
          dream_destinations: null,
          need_help: null,
          exclusive_deals: null,
          discover_about: null,
          trending_first: null,
          trending_second: null,
          travel_tips: null,
          testimonials_feefo: null,
          testimonials_google: null,
        }
      }
    }

    const data = await res.json()

    // Cache the successful response
    setCachedData(CACHE_KEY, data)

    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    // Return mock data structure if fetch fails
    return {
      data: {
        about_panama: null,
        popular_flights: null,
        why_choose_us: null,
        dream_destinations: null,
        need_help: null,
        exclusive_deals: null,
        discover_about: null,
        trending_first: null,
        trending_second: null,
        travel_tips: null,
        testimonials_feefo: null,
        testimonials_google: null,
      }
    }
  }
}

export default async function HomePage() {
  const data = await getHomepageData()

  if (!data) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading homepage data</p>
      </div>
    )
  }

  return (
    <>
      <HeroSection />
      <PanamaWelcomeSection data={data?.data?.about_panama} />
      <TicketSection data={data?.data?.popular_flights} />
      <TopFlightRoutes />
      <WhyChooseUs data={data?.data?.why_choose_us} />
      <DreamDestinationsSection data={data?.data?.dream_destinations} />
      {/* <BookingSteps /> */}
      <NeedHelpSection data={data?.data?.need_help} />
      <DealsGridSection data={data?.data?.exclusive_deals} />
      <DiscoverAbout data={data?.data?.discover_about} />
      <ExclusiveDealsSection
        data={data?.data?.trending_first}
        data2={data?.data?.trending_second}
      />
      <WhatWeOffer />
      <TravelTipsSection data={data?.data?.travel_tips} />
      <section id="testimonials-section">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TestimonialsSection data={data?.data?.testimonials_feefo} />
          <GoogleReviewsSection data={data?.data?.testimonials_google} />
        </div>
      </section>
      <NewsletterSection />
    </>
  )
}