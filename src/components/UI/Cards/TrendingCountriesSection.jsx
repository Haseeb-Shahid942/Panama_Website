import TicketCard from './TicketCard'; // Reusing TicketCard component for trending countries section

const TrendingCountriesSection = () => {
  const countryData = [
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Travel to Japan",
      description: "Immerse yourself in Japan's rich culture and modern cities.",
      priceDetails: [
        { city: "Tokyo", price: "£550" },
        { city: "Osaka", price: "£520" }
      ],
      buttonText: "Book Now"
    },
    // More trending countries data...
  ];

  return (
    <section className="trending-countries bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Trending Countries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {countryData.map((ticket, index) => (
            <TicketCard
              key={index}
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

export default TrendingCountriesSection;
