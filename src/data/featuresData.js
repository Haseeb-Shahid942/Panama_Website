

// data/featuresData.js
import { FaLock, FaTag, FaRegClock, FaCheckCircle, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Trusted Payment",
    description: "All transactions are encrypted, giving you peace of mind every time you book.",
    icon: <FaLock />,
  },
  {
    title: "Affordable Deals",
    description: "High-quality trips at prices that respect your budget — no hidden fees.",
    icon: <FaTag />,
  },
  {
    title: "Established Since 1984",
    description: "Decades of experience delivering memorable travel experiences worldwide.",
    icon: <FaRegClock />,
  },
  {
    title: "Licensed & Verified",
    description: "We’re fully ATOL/IATA accredited, ensuring your bookings are protected.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Top Notch Support",
    description: "UK-based service centre for fast, friendly assistance whenever you need it.",
    icon: <FaHeadset />,
  },
];

export default features;