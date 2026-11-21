'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState, useEffect, useRef } from 'react'
import InquiryForm from '@/components/UI/Forms/InquiryForm'
import { trackDestinationView } from '@/utils/facebookPixel'

export default function CountryPageClient({ country }) {
  const [isSticky, setIsSticky] = useState(false)
  const formRef = useRef(null)
  const formContainerRef = useRef(null)

  // Track destination view on mount
  useEffect(() => {
    if (country) {
      trackDestinationView({
        name: country.name,
        slug: country.slug || country.name.toLowerCase().replace(/\s+/g, '-'),
        price: country.price || 0,
      });
    }
  }, [country]);

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current && formContainerRef.current) {
        const formTop = formContainerRef.current.getBoundingClientRect().top
        const formBottom = formContainerRef.current.getBoundingClientRect().bottom
        const formHeight = formRef.current.offsetHeight

        // Check if form should stick (when it reaches 140px from top)
        if (formTop <= 140 && formBottom >= formHeight + 140) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="container pt-36 mx-auto p-6">
      <Link href="/" className="inline-block mb-4 text-blue-600 hover:underline">&larr; Back to Home Page</Link>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{country.title}</h1>

      {/* Swiper Slider for Images */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 2000, pauseOnMouseEnter: false }}
        loop
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg overflow-hidden mb-6"
      >
        {country.images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img
              src={imgSrc}
              alt={`${country.name}-${index}`}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative bg-gray-50 rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0">
          <div className="prose prose-blue max-w-none country-html-content px-4 py-6 md:px-8 md:py-10">
            <div dangerouslySetInnerHTML={{ __html: country.content }} />
          </div>
          {/* Form (right) */}
          <div ref={formContainerRef} className="relative">
            <div
              ref={formRef}
              className={`md:rounded-l-3xl rounded-lg md:-ml-2 mt-4 md:mt-4 mb-4 md:mb-10 transition-all duration-300 ${isSticky ? 'lg:fixed lg:top-[90px] lg:max-h-[calc(100vh-130px)] lg:overflow-y-auto' : ''
                }`}
              style={{ minWidth: 280, maxWidth: 400 }}
            >
              <InquiryForm title="Inquiry Form" context={country.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}