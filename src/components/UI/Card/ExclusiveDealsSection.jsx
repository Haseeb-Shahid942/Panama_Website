'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import exclusiveData from '@/data/exclusiveData';
import exclusivetwoData from '@/data/exclusivetwoData';
import Link from 'next/link';
import { IMAGEKIT_OLD_URL } from '@/utils/constants';
// import exclusiveData from '@/data/exclusiveData'
// import { exclusiveTwoData } from '@/data/exclusiveData';
// import destinationsData from '../../data/destinationsData';



function toSlug(text) {
  return text
    .toString()                // ensure string
    .toLowerCase()             // convert to lowercase
    .trim()                    // remove leading/trailing spaces
    .replace(/['"]/g, "")      // remove quotes
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/^-+|-+$/g, "");  // remove leading/trailing -
}

export default function ExclusiveDealsSection({ data, data2 }) {
  return (
    <section className="py-6 px-4 md:px-12 bg-gray-100" id="trending-section">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-right">Trending Countries</h2>
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="px-2 "
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {data?.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <ExclusiveCardOne {...dest} />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />



      <Swiper
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        className="px-2 "
        modules={[Autoplay]} // <-- add this
        autoplay={{
          delay: 2000,     // 2 seconds
          disableOnInteraction: true, // Keep autoplay after user scrolls
        }}
      >
        {data2?.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <ExclusiveCardTwo {...dest} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function ExclusiveCardOne({
  country_name = "Bangkok",
  featured_image = `${IMAGEKIT_URL}/dubai.webp?tr=w-600,fo-auto`,
  location_name = "Thailand",
  price_per_person = "413 ",
}) {
  return (
    <Link href={`/destination/${toSlug(location_name)}/`} target='_top'>
      <div
        className="relative overflow-hidden bg-black/50 shadow-lg h-[250px] group rounded-md"
        style={{
          backgroundImage: `url(${featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute" />

        {/* Country Tag */}
        <div className="absolute top-4 left-4 z-10 bg-black/30 text-sm font-medium text-white px-3 py-1 rounded-md flex items-center gap-1">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 4a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
          {country_name}
        </div>

        {/* Card Content */}
        <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/20 w-max px-4 text-white ">
          <h3 className="text-xl font-semibold drop-shadow">{location_name}</h3>
          <p className="text-sm mt-1">from £{price_per_person} per person</p>
        </div>
      </div>
    </Link>
  );
}
function ExclusiveCardTwo({
  country_name = "Bangkok",
  location_name = "Thailand",
  price_per_person = "413",
  featured_image = `${IMAGEKIT_OLD_URL}/stlucia.webp?tr=w-600,fo-auto`,
}) {
  return (
    <Link href={`/destination/${toSlug(location_name)}/`} target='_top'>

      <div
        className="relative overflow-hidden bg-black/50 shadow-lg h-[170px] group rounded-md"
        style={{
          backgroundImage: `url(${featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute" />

        {/* Country Tag */}
        <div className="absolute top-4 left-4 z-10 bg-black/30 text-sm font-medium text-white px-3 py-1 rounded-md flex items-center gap-1">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 4a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
          {country_name}
        </div>

        {/* Card Content */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/20 rounded-lg w-max px-2 text-white z-10">
          <h3 className="text-xl font-semibold drop-shadow">{location_name}</h3>
          <p className="text-sm mt-1">from £{price_per_person} per person</p>
        </div>
      </div>
    </Link>
  );
}
