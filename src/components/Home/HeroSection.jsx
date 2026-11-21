'use client'

import { useState, useEffect } from 'react'
import "flatpickr/dist/flatpickr.min.css"
import ContactForm from './ContactForm'

const HeroSection = () => {
  const [resizeForm, setResizeForm] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setResizeForm(true)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative" id="home-section">
      {/* Background Video with Fallback */}
      <div className="relative min-h-[90vh] md:min-h-[120vh] w-full z-0">
        {!isVideoLoaded && (
          <img
            src="https://ik.imagekit.io/panamatravel/pt-home/home-hero.webp"
            alt="fallback"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source
            src="https://ik.imagekit.io/up1fsd3d/panama/1214.mp4/ik-video.mp4?updatedAt=1753901484058"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 z-10" />
      </div>

      {/* Overlay Form */}
      <div className="absolute inset-0 flex justify-center z-20 px-2 pt-6 md:pt-14">
        <div className="w-full max-w-md md:max-w-6xl mx-auto overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent max-h-[90vh]">
          <div className="flex flex-col items-center justify-center gap-5 p-4 lg:p-8 text-white">
            {/* Optional title and subtitle */}
            <img src="/images/Frame1.svg" alt="Logo" className="w-96 mt-16 h-auto" />
            {/* <h1 className="text-3xl lg:text-5xl font-bold">Panama Travel</h1> */}
            {/* <p className="text-lg lg:text-2xl">World Wide Tickets & Holiday Packages</p> */}
          </div>

          <p className='h-6 md:h-0 xl:h-4 block'></p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
