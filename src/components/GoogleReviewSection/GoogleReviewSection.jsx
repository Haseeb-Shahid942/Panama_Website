"use client";
// components/reviews/GoogleReviewsSection.jsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import GoogleReviewCard from "./GoogleReviewCard";
import RatingSummary from "../Testimonials/RatingSummary";
import TestimonialsHeading from "../Testimonials/TestimonialsHeading";

// TODO: Replace with your real Google Maps reviews (see notes below)
const googleReviews = [
  {
    author: "King Khan",
    avatar: "/images/reviewers/ayesha.jpg",
    rating: 5,
    relativeTime: "3 weeks ago",
    text: "Served by Habib who was ever so helpful with booking our tickets promptly. From start to finish he assisted me and my mother and also got us help for assistance on flight...",
    url: "https://maps.app.goo.gl/Lj4WaGD7pwD6qk547",
  },
  {
    author: "Crafty 2",
    avatar: "/images/reviewers/default.png",
    rating: 5,
    relativeTime: "1 week ago",
    text: "Good Service, Really Appreciated❤",
    url: "https://maps.app.goo.gl/d7zJwCXdJhueVQzLA",
  },
  {
    author: "Mian Talha",
    avatar: "/images/reviewers/david.jpg",
    rating: 4,
    relativeTime: "8 month ago",
    text: "I recently booked Air tickets for Pakistan vacation through Panama Travel. Got the great deal and also received multiple options to choose best shortest route. Appreciate all your valuable inputs and support.",
    url: "https://maps.app.goo.gl/5kvatL2Fd8ivR8zz8",
  },
  {
    author: "Imran Ali",
    avatar: "/images/reviewers/imran.jpg",
    rating: 4,
    relativeTime: "9 months ago",
    text: "Team Panama Travel did an amazing job meeting our needs and our wants, all while keeping our budget in mind! Would use Panama again & again for our travel services!",
    url: "https://maps.app.goo.gl/XJjgpxea88t3AiX29",
  },
];

export default function GoogleReviewsSection({ data }) {
  useEffect(() => {
    // If using SSR, sometimes Swiper nav needs a re-bind after mount.
  }, []);

  return (
    <section className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
      {/* Heading */}

      <TestimonialsHeading heading="What people say on Google" para="Real reviews pulled from our Google Maps business listing." />
      {/* <div className="mb-0 text-center ">
        <div className="">
          <img
            src="/images/google-logo.png"
            alt="Google"
            className="h-16 w-24"
            loading="lazy"
          />
          <h2 className="text-2xl font-bold text-center tracking-tight">
            What people say on Google
          </h2>
        </div>
        <p className="text-sm text-gray-600">
          Real reviews pulled from our Google Maps business listing.
        </p>
      </div> */}
      <RatingSummary logoimg={"/images/google-logo.png"} logorating={3.9} altimg="Google Logo" logolink="https://www.google.co.uk/maps/place/Panama+Travel/@52.4693488,-1.8605362,17z/data=!4m8!3m7!1s0x4870bb992acd3b6d:0xd4e140dd1cf739b1!8m2!3d52.4693456!4d-1.8579613!9m1!1b1!16s%2Fg%2F1tff71cg?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D" />

      {/* Custom arrows (reuse your existing style) */}
      <button
        id="google-prev"
        className="absolute left-0 top-[65%] -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow hover:bg-gray-100 hover:text-primary"
      >
        &#x276E;
      </button>
      <button
        id="google-next"
        className="absolute right-0 top-[65%] -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow hover:bg-gray-100 hover:text-primary"
      >
        &#x276F;
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: "#google-prev", nextEl: "#google-next" }}
        loop={true}
        autoplay={{
          delay: 2000, // <-- rotate every 1.5s
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="mt-3"
      >
        {data?.map((r, i) => (
          <SwiperSlide key={i}>
            <GoogleReviewCard {...r} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
