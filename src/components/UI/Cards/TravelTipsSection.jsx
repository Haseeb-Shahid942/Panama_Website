'use client'

import { useState, useRef } from "react";
import { FiChevronRight } from "react-icons/fi"; // Nicer chevron arrow

const tipsData = [
  {
    title: "What documents do I need for international travel, and how can I keep them safe?",
    description: "Carry your passport, visa (if required), travel insurance, and ID. Make photocopies or take pictures and store them in your phone and cloud storage. Use a travel pouch or money belt to keep originals safe and avoid placing them in easily accessible backpacks or pockets. Hotel safes are ideal for items not needed daily."
  },
  {
    title: "How should I manage money while traveling abroad?",
    description: "Use a mix of cash, debit cards, and credit cards. Notify your bank before travel to avoid card blocks. Use ATMs inside banks for better safety and lower fees. Avoid carrying all your money in one place—split it between your wallet, bag, and hotel. Apps like Revolut or Wise can help with currency exchange and card payments."
  },
  {
    title: "What should I pack to avoid overpacking?",
    description: "Pack light by choosing versatile clothing (neutrals and layers), rolling instead of folding clothes, and using packing cubes. Stick to one pair of walking shoes, toiletries in travel sizes, and leave 'just-in-case' items behind. Always check weather and baggage rules of your airline before packing."
  },
  {
    title: "Do I really need travel insurance, and what does it cover?",
    description: "Yes, travel insurance can cover medical emergencies, trip cancellations, lost luggage, and delays. It’s especially important when traveling internationally. Choose a plan that fits your trip activities (like adventure sports) and check if it includes COVID-19 or emergency evacuation coverage."
  },
  {
    title: "How do I stay healthy and safe while traveling?",
    description: "Stay hydrated, wash your hands often, and eat food from clean, busy places. Carry basic medications and any required prescriptions. Get travel vaccines if needed and avoid drinking tap water in countries where it's unsafe—bottled or filtered water is safer. Listen to your body and rest if needed."
  },
  {
    title: "How can I stay connected to the internet while traveling?",
    description: "Buy a local SIM card at the airport or city center for affordable data. Alternatively, get an international roaming package from your provider or use portable Wi-Fi devices. Use free Wi-Fi in hotels, cafes, or airports with a VPN for security. Download Google Maps and translators for offline use."
  },
  {
    title: "What’s the best way to find local and authentic experiences?",
    description: "Skip the big tourist attractions sometimes and visit local markets, street food stalls, and neighborhood events. Use platforms like Airbnb Experiences, Couchsurfing, or Facebook groups to find local guides and happenings. Ask locals, taxi drivers, or hotel staff—they often know the best hidden spots."
  },
  {
    title: "Is solo travel safe? What should I keep in mind?",
    description: "Solo travel can be very safe if you plan well. Choose well-reviewed accommodations, keep friends/family updated, and avoid risky areas at night. Always trust your instincts and don’t overshare personal details. Keep emergency contacts and local embassy info handy."
  },
  {
    title: "What are some helpful airport and flight hacks?",
    description: "Check in online, arrive 2–3 hours early, and wear easily removable shoes. Keep chargers, documents, and essentials in your carry-on. Use apps like TripIt or your airline’s app for gate updates. Bring an empty water bottle to fill after security and noise-canceling headphones for a smoother flight."
  },
  {
    title: "When is the best time to travel to popular destinations?",
    description: "It depends on the region. For example: Europe is great in spring (April–June), Southeast Asia in winter (Nov–Feb), and South America during its dry season (May–Sep). Avoid holidays and school vacation seasons for cheaper flights and fewer crowds. Always check the weather and local events before booking."
  }
];

const TravelTipsSection = ({ data }) => {
  const [openIdx, setOpenIdx] = useState(null);
  const [visibleTips, setVisibleTips] = useState(5); // Initially display 5 tips

  const handleToggle = idx => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleViewMore = () => {
    setVisibleTips(prev => prev + 5); // Show 5 more tips on "View More" click
  };

  return (
    <section className="travel-tips bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center" data-aos="fade-right">
          Travel Tips
        </h2>
        <div className="mt-8 max-w-[90%] mx-auto">
          {data?.slice(0, visibleTips).map((tip, idx) => (
            <AccordionItem
              key={idx}
              open={openIdx === idx}
              onClick={() => handleToggle(idx)}
              title={tip.tip_heading}
              delay={idx * 100}
            >
              <p>{tip.tip_detail}</p>
            </AccordionItem>
          ))}
          {visibleTips < data?.length && (
            <div className="text-center mt-4">
              <button
                onClick={handleViewMore}
                className="bg-primary hover:bg-white text-white hover:text-primary border border-muted rounded transition-all px-4 py-2 font-extrabold"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Accordion Item with animated expand/collapse
function AccordionItem({ open, onClick, title, children, delay }) {
  const contentRef = useRef(null);

  return (
    <div
      className="mb-4"
      data-aos="fade-left"
      data-aos-delay={delay}
    >
      <button
        onClick={onClick}
        className={`w-full text-left p-4 bg-white shadow-md rounded-lg flex justify-between items-center font-semibold transition-all
        ${open ? "rounded-b-none !bg-primary text-white" : ""}`}
        aria-expanded={open}
      >
        <h3>{title}</h3>
        <FiChevronRight
          className={`ml-2 text-xl transition-transform duration-300 ${open ? "rotate-90 text-primary" : "text-gray-400"}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden bg-white rounded-b-lg border-t transition-all duration-500"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight + 30 : 0,
          opacity: open ? 1 : 0,
          padding: open ? "12px 16px" : "0 16px",
        }}
      >
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
}

export default TravelTipsSection;
