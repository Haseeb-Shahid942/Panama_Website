// import TicketCard from './TicketCard'; // Reusing TicketCard component for exclusive deals section

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const ExclusiveDealsSection = () => {
  const dealsData = [
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto",
      title: "Exclusive Deals on Flights",
      description: "Book now to avail exciting deals on flights worldwide.",
      priceDetails: [
        { city: "New York", price: "£599" },
        { city: "London", price: "£569" }
      ],
      buttonText: "Book Now"
    },
    // More exclusive deals data...
  ];

  return (
    <section className="exclusive-deals bg-white py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-right">Exclusive Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {dealsData.map((ticket, index) => (
            <ExclusiveDealCard
              key={index}
              index={index}
              image={ticket.image}
              title={ticket.title}
              description={ticket.description}
              priceDetails={ticket.priceDetails}
              buttonText={ticket.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDealsSection;



function ExclusiveDealCard({
  title = "Exclusive Deals on Flights",
  priceDetails = [
    { city: "New York", price: "£599" },
    { city: "London", price: "£569" },
  ],
  description = "Book now to avail exciting deals on flights worldwide.",
  img = "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto"
}) {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-xl h-[380px] group transition-all duration-500"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90`} />

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-between items-center text-center z-10 px-6 py-8">
        <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4">
          {/* Title */}
          <h3 className="text-3xl font-bold text-white drop-shadow-lg transition-all duration-500 group-hover:text-yellow-400 px-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white text-sm leading-tight px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-3 transition-all duration-500 mb-2">
            {description}
          </p>

          {/* Price Details */}
          <div className="text-white text-lg font-semibold mb-4">
            {priceDetails.map((item, index) => (
              <div key={index} className="flex justify-between mb-1">
                <span>{item.city}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-primary text-white font-semibold py-2 px-7 rounded-full shadow-lg transition-all duration-300 mt-2 hover:bg-muted hover:text-white hover:shadow-2xl">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
