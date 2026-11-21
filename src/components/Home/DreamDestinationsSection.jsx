'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// import destinationsData from '@/data/destinationsData';
import Link from 'next/link';
import { IMAGEKIT_URL } from '@/utils/constants';


function toSlug(text) {
  return text
    .toString()                // ensure string
    .toLowerCase()             // convert to lowercase
    .trim()                    // remove leading/trailing spaces
    .replace(/['"]/g, "")      // remove quotes
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/^-+|-+$/g, "");  // remove leading/trailing -
}


export default function DreamDestinationsSection({ data }) {
  return (
    <section className="py-3 px-12 bg-gray-100" id="destinations-section">
      <h2 className="text-3xl font-bold text-center mb-5" data-aos="fade-right">Dream Destinations</h2>
      <p className='m-auto mb-5 text-center max-w-5xl'>Book cheap flights to Dubai, Maldives, Bangkok, Bali, Singapore, Hong Kong, Delhi and Shanghai. Compare airfare and find affordable flights to Asia, the Middle East and beyond.</p>
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="px-2 "
        modules={[Autoplay]} // <-- add this
        autoplay={{
          delay: 2000,     // 2 seconds
          disableOnInteraction: true, // Keep autoplay after user scrolls
        }}
      >
        {data?.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <DestinationCard {...dest} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function DestinationCard({
  destination_name = "Maldives",
  // slug = "maldives",
  price = "995",
  description = "Indulge in an experience of a lifetime at Maldives, an incredible cluster of islands where thrives beauty beyond the ordinary.",
  featured_image = `${IMAGEKIT_URL}/maldives.webp?updatedAt=1751790271139`
}) {
  return (
    <Link href={`/destination/${toSlug(destination_name)}/`} target='_top'>
      <div
        className="relative rounded-md bg-black/50 overflow-hidden shadow-lg h-[310px] md:h-[370px] group transition-all duration-500"
        style={{
          backgroundImage: `url(${IMAGEKIT_URL}${featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Gradient with Smooth Direction & Opacity Transition */}
        {/* <div className={`absolute inset-0 z-0 pointer-events-none`} /> */}
        <div className={`
        absolute inset-0 z-0
        transition-all duration-1200
        group-hover:bg-gradient-to-b group-hover:from-black/80 group-hover:via-black/50 group-hover:to-transparent
        group-hover:opacity-90 opacity-70
        pointer-events-none
      `} />

        {/* Card Content */}
        <div className="absolute top-[20%] flex flex-col justify-end items-center text-center z-10 px-6 pb-5 md:pb-10 pt-4 md:pt-8">
          <div className="w-full max-w-md mx-auto flex flex-col items-center gap-2">
            {/* Destination Name */}
            <h3 className="text-3xl font-bold text-white drop-shadow-lg bg-black/10 transition-all duration-500 group-hover:-translate-y-2 px-2">
              {destination_name}
            </h3>
            {/* Price (hidden by default, shows on hover) */}
            <span className="text-lg text-white font-medium transition-all duration-500 mb-2
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-3
          ">
              From £{price}*pp
            </span>
            {/* Description (hidden by default, shows on hover) */}
            <p className="text-white text-[15px] leading-snug px-2 py-1
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2
            transition-all duration-500 mb-2
          ">
              {description}
            </p>
            {/* Button */}
            {/* <button className="
            bg-primary text-white font-semibold py-2 px-7 rounded-full
            shadow-md transition-all duration-300 mt-2
            hover:bg-muted hover:text-white hover:shadow-lg
          ">
            VIEW HOLIDAYS
          </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
