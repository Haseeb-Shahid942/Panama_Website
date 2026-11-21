import TicketCard from './TicketCard'; // Reusing the TicketCard component for airlines section

const AirlineTicketSection = () => {
  const airlineData = [
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Experience Gulf Air",
      description: "Travel in comfort with traditional Middle Eastern hospitality.",
      priceDetails: [
        { city: "Dubai", price: "£349" },
        { city: "Delhi", price: "£379" }
      ],
      buttonText: "Book Now"
    },
    // More airline data...
  ];

  return (
    <section className="airlines bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Top Airlines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {airlineData.map((ticket, index) => (
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

export default AirlineTicketSection;
