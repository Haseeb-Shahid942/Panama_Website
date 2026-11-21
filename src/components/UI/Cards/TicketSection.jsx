// import ticketData from '@/data/ticketsData';
import TicketCard from './TicketCard';  // Import TicketCard component
import { IMAGEKIT_URL } from '@/utils/constants';

const columns = 4; // for xl:grid-cols-4 (change if needed)

export default function TicketSection({ data }) {
  return (
    <section className="airlines bg-gray-100 py-4" id="flights-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl pb-4 font-bold text-primary text-center">Popular Flights</h2>
        <div
          className="flex flex-wrap justify-center items-center gap-3"  // Set gap between cards to 0.75rem
        // data-aos="fade-up"
        // data-aos-delay={(index % columns) * 120}
        >
          {data?.map((ticket, index) => (
            <div
              key={ticket?.id || index}
              data-aos="fade-up"
              data-aos-delay={(index % columns) * 120} // 120ms delay per card in a row
            // className="w-full flex flex-wrap justify-center"  // Ensuring no additional margin on cards
            >
              <TicketCard
                image={`${IMAGEKIT_URL}${ticket.featured_image}`}
                title={ticket.card_heading}
                imgtitle={ticket.image_title}
                imgalt={ticket.image_alt}
                location1={ticket.location1}
                location2={ticket.location2}
                price1={ticket.price1}
                price2={ticket.price2}
                // priceDetails={ticket.priceDetails}
                buttonText={"Book Now"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
