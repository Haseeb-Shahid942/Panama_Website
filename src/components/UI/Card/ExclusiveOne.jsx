import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
// Import your data and components as needed
// import destinationsData from '../../data/destinationsData'
// import ExclusiveCard from './ExclusiveCard'

const ExclusiveOne = () => {
  return (
    <div>
      <Swiper
        spaceBetween={15}
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
        {/* {destinationsData.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <ExclusiveCard {...dest} />
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <div>Sample slide content</div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExclusiveOne