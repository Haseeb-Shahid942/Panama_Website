import TicketCard from './TicketCard'; // Reusing TicketCard component for destination section

const PopularDestinationSeciton = () => {
  const destinationData = [
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    {
      image: "https://ik.imagekit.io/up1fsd3d/panama/dubai.webp?tr=w-600,fo-auto", 
      title: "Explore Paris",
      description: "Experience the magic of the Eiffel Tower and Parisian culture.",
      priceDetails: [
        { city: "Paris", price: "£499" },
        { city: "Rome", price: "£459" }
      ],
      buttonText: "Book Now"
    },
    // More destinations data...
  ];

  return (
    <section className="destinations bg-white py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {destinationData.map((ticket, index) => (
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

export default PopularDestinationSeciton;
