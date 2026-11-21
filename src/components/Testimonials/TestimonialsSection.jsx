'use client'

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import RatingSummary from "./RatingSummary";
import TestimonialCard from "./TestimonialCard";
import TestimonialsHeading from "./TestimonialsHeading";

const testimonials = [
  {
    title: "Best long haul holidays",
    text: "I've used Panama Travel for years. They're the best!",
    author: "Peter Johnson",
    stars: 4,
    date: "Jun 17, 2025",
  },
  {
    title: "Excellent service",
    text: "Always responsive and offers great deals.",
    author: "Neil Hitchen",
    stars: 5,
    date: "Jun 18, 2025",
  },
  {
    title: "Brilliant Service",
    text: "Reliable, helpful, attention to detail, great.",
    author: "Trusted Customer",
    stars: 4,
    date: "Jun 19, 2025",
  },
  {
    title: "Fantastic Experience",
    text: "An unforgettable journey! The trip was well organized.",
    author: "Sarah Lee",
    stars: 5,
    date: "Jun 16, 2025",
  },
  {
    title: "Highly Recommended",
    text: "I recommend them to all my friends and family.",
    author: "John Smith",
    stars: 5,
    date: "Jun 15, 2025",
  },
  {
    title: "Amazing Travel Deals",
    text: "They have the best deals, and the service is always top-notch.",
    author: "Emma White",
    stars: 4,
    date: "Jun 14, 2025",
  },
  {
    title: "Wonderful Experience",
    text: "I had a great time! The entire trip was seamless.",
    author: "William Brown",
    stars: 5,
    date: "Jun 13, 2025",
  },
  {
    title: "Great Customer Service",
    text: "Very quick and efficient - all questions answered promptly.",
    author: "Trusted Customer",
    stars: 5,
    date: "Jun 18, 2025",
  },
];

function TestimonialsSection({ data }) {
  useEffect(() => {
    // Required to force Swiper navigation buttons to re-bind after render (for SSR/Next.js)
  }, []);

  return (
    <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
      <TestimonialsHeading />
      <RatingSummary logoimg="/images/feefo-logo.svg" altimg="Feefo Logo" width={100} />

      {/* Custom Arrows */}
      <button
        id="custom-prev"
        className="absolute left-0 top-[65%] -translate-y-1/2 z-10 bg-white text-blue-500 p-2 rounded-full shadow hover:bg-gray-100"
      >
        &#x276E;
      </button>
      <button
        id="custom-next"
        className="absolute right-0 top-[65%] -translate-y-1/2 z-10 bg-white text-blue-500 p-2 rounded-full shadow hover:bg-gray-100"
      >
        &#x276F;
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: "#custom-prev",
          nextEl: "#custom-next",
        }}
        autoplay={{
          delay: 1500, // <-- rotate every 1.5s
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="mt-6"
      >
        {data?.map((t, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard {...t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSection;
