import Image from "next/image";

const TicketCard = ({ index = 0, image, imgtitle, title, location1, location2, price1, price2 }) => {
  return (
    <div className="w-72 bg-primary rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-[1px] hover:border-black cursor-pointer flex flex-col min-h-[300px]"
      data-aos="fade-right"
      data-aos-delay={index * 200}
    >
      {/* Image section */}
      <div className="h-48">
        <Image src={image} width={400} height={150} alt={title} title={imgtitle} className="w-full h-full object-cover" />
      </div>

      {/* Content section */}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold text-white hover:underline">{title}</h2>
        {/* <p className="text-xs text-gray-600 my-2">{description}</p> */}

        {/* Price Details */}
        <div className="text-sm font-semibold mb-2">
          <p className="my-1 text-white">
            <span className=" font-bold">{location1}</span> from {price1}*
          </p>
          <p className="my-1 text-white">
            <span className=" font-bold">{location2}</span> from {price2}*
          </p>
        </div>

        {/* Spacer to push the button to the bottom */}
        {/* <div className="flex-grow"></div> */}

        {/* Button */}
        {/* <button className="w-full py-2 bg-primary text-white rounded-md mt-3 text-lg font-semibold transition duration-300 hover:bg-primary-hover hover:shadow-lg hover:scale-105">
          {buttonText}
        </button> */}
      </div>
    </div>
  );
};

export default TicketCard;
