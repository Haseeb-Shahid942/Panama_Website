import { IMAGEKIT_URL } from "@/utils/constants";

export default function DealsCard({ name, destination, price, img }) {
  return (
    <div className="group w-[95%] md:w-[380px] mx-auto overflow-hidden shadow hover:shadow-2xl border bg-white transition-all duration-300">
      {/* Image */}
      <div className="w-full h-[150px] bg-black/50 overflow-hidden">
        <img
          src={`${img}`}
          alt={name}
          className="w-full object-cover bg-black/50 overflow-hidden"
        />
      </div>

      {/* Info Row */}
      <div className="flex relative">
        {/* Left: Details */}
        <div className="flex-1 px-4 flex flex-col justify-center">
          <span className="text-lg font-medium text-gray-800 transition-all duration-300 group-hover:underline">
            {name}
          </span>
          <span className="text-[15px] text-gray-500 -mt-1 transition-all duration-300">
            From {destination}
          </span>
        </div>

        {/* Right: Price Box */}
        <div className="flex items-center bg-accent group-hover:underline decoration-white px-4 min-w-[100px] justify-end rounded-tl-md">
          <span className="text-white text-base mr-1">from</span>
          <span className="text-white text-xl font-bold">£{price}*</span>
          <span className="text-white text-2xl ml-1 -mb-0.5">&#8250;</span>
        </div>
      </div>
    </div>
  );
}
