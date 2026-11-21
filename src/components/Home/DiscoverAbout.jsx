'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IMAGEKIT_OLD_URL, IMAGEKIT_URL } from "@/utils/constants";

const features = [
  {
    title: "March - Office established.",
    description:
      "After years of learning the trade of travel Mr Mukhtar Ahmad establishes his own travel agency on 495 Coventry Road.",
    color: "from-cyan-500 to-blue-500",
    icon: "1984",
  },
  {
    title: "August - Our most beloved employee joins.",
    description:
      "His faithful assistant Adele who was at the office for over 30 years joins leading to an extremely fruitful long working relationship which ends with her death in 2018.",
    color: "from-pink-500 to-red-500",
    icon: "1984",
  },
  {
    title: "20 years, thousands of happy customers.",
    description:
      "We celebrated by talking about how happy we were to put smiles on faces of people seeing their families again.",
    color: "from-yellow-400 to-orange-400",
    icon: "2004",
  },
  {
    title: "Wholesale Umrah ticket best sellers in UK.",
    description:
      "We topped the whole UK in Umrah tickets sold through trustworthy relations with other travel agents.",
    color: "from-green-400 to-green-700",
    icon: "2017",
  },
];

// const images = [
//   `${IMAGEKIT_OLD_URL}/about1.png?tr=w-1000,fo-auto`,
//   `${IMAGEKIT_OLD_URL}/about2.png?tr=w-1000,fo-auto`,
//   `${IMAGEKIT_OLD_URL}/about3.png?tr=w-1000,fo-auto`,
// ];

const images = [
  `${IMAGEKIT_URL}/pthome/malaysia-two.webp?updatedAt=1780997257613`,
  `${IMAGEKIT_URL}/pthome/newyork-two.webp?updatedAt=1780997257105`,
  `${IMAGEKIT_URL}/pthome/harare.webp?updatedAt=1780924549864`,
  `${IMAGEKIT_URL}/pthome/egypt-one.webp?updatedAt=1780997255143`,
];

// 🔁 Only Y-axis flipping (horizontal)
const flips = [{ axis: "Y", direction: 1 }];

export default function DiscoverAbout({ data }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [flipStep, setFlipStep] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((f) => !f);
      if (flipped) {
        setImgIdx((i) => (i + 1) % images.length);
        setFlipStep((s) => (s + 1) % flips.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [flipped]);

  const flipConf = flips[flipStep];
  const axis = flipConf.axis;
  const dir = flipConf.direction;

  const rotation =
    axis === "Y"
      ? { rotateY: flipped ? 180 * dir : 0 }
      : { rotateX: flipped ? 180 * dir : 0 }; // ← this path won’t be used now

  const nextImgIdx = (imgIdx + 1) % images.length;

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-2">
          {data?.heading}
        </h2>
        <p className="text-gray-600 text-center text-lg mb-6">
          {"With over 40 years of experience, Panama Travel has built a strong reputation as one of the UK top-rated travel agencies for both leisure and religious travel. Every year, thousands of satisfied clients trust us to book cheap flights and plan unforgettable experiences, from relaxing family holidays to meaningful Umrah pilgrimages."}
        </p>
        <p className="text-gray-600 text-center text-lg mb-6">
          Our reputation is based on trust, consistency, and genuine customer care. We do not just book tickets, we create experiences that connect people with the world. Choosing Panama Travel means choosing a company that values your time, your money, and your peace of mind.
        </p>

        <h2 className="text-3xl text-center font-bold text-gray-900 mb-4">
          {"Our Story"}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-10">
          {/* Flipping Image */}
          <div className="relative w-full md:w-1/2 h-[440px] md:h-[480px] flex items-center justify-center [perspective:1200px]">
            <motion.div
              className="relative w-[80%] md:w-[90%] h-[100%] rounded-lg shadow-lg"
              animate={rotation}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={images[imgIdx]}
                  alt="Front"
                  className="w-full h-full bg-black/50 object-cover"
                />
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: `rotateY(${180 * dir}deg)`,
                }}
              >
                <img
                  src={images[nextImgIdx]}
                  alt="Back"
                  className="w-full h-full bg-black/50 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature List */}
          <div className="w-full md:w-1/2 space-y-6">
            {data?.items?.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md hover:-translate-y-1 hover:shadow-xl transition transform duration-300"
              >
                <div
                  className={`text-white text-xl rounded-full p-3 bg-gradient-to-r ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{feature.item_heading}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.item_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
