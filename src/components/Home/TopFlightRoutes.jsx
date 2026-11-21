"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plane, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const TopFlightRoutes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const topRoutes = [
    { from: "London", to: "Dubai", price: "£320" },
    { from: "Manchester", to: "Karachi", price: "£500" },
    { from: "Birmingham", to: "Hong Kong", price: "£680" },
    { from: "London", to: "Istanbul", price: "£220" },
    { from: "London", to: "Lahore", price: "£575" },
    { from: "London", to: "Delhi", price: "£480" }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-blue-50 to-white" id="top-flight-routes-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-3">
            Top Flight Routes
          </h2>
          {/* <div className="w-24 h-1 bg-primary mx-auto"></div> */}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore popular flight routes from the UK and compare return flights and one-way airline tickets at competitive prices.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&rsquo;re heading to Asia, the Middle East, Africa, or Europe, our team ensures you always get the
              <span className="font-semibold text-primary"> best low-cost flight options</span> from trusted airlines.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Cheap flights from London to Dubai, Manchester to Karachi, Birmingham to Hong Kong, London to Istanbul, Lahore and Delhi. 
            </p>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-gray-800 font-medium mb-2">
                <strong className="font-semibold text-primary">Secure affordable flights</strong> with trusted international airlines.
              </p>
              {/* <p className="text-primary font-semibold">
                Start your journey today and book affordable flights with confidence.
              </p>
              */}
            </div> 

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="tel:+441217713616"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 flex items-center justify-center" />
                <p className="flex items-center justify-center">Call Now: 0121 771 3616</p>
              </Link>
              <Link href={"/"}>
                <button className="hidden sm:flex border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 items-center justify-center gap-2">
                  <Plane className="w-5 h-5" />
                  Start Booking Online
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Flight Routes */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Popular Routes & Starting Prices
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 hover:border-primary/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">
                          {route.from} → {route.to}
                        </div>
                        <div className="text-xs text-gray-500">Return From</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{route.price}</div>
                      <div className="text-xs text-gray-500">*per person</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                *Prices are subject to availability and may vary. Book early for the best deals!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-6 bg-accent text-white rounded-2xl p-4 sm:p-8"
        >
          <h2 className="text-2xl md:text-4xl font-serif text-white font-bold mb-3 mt-2">
            Unlock exclusive flight deals today.
          </h2>
          <p className="mb-6 text-lg sm:text-xl opacity-90">
            Speak to our UK flight specialists and book cheap airline tickets with confidence.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
            <Link href="tel:+442071770066" className="
                      bg-primary text-white hover:text-white font-bold px-10 py-3 rounded-full hidden sm:flex items-center
                      duration-200 hover:bg-accent border-2 border-transparent hover:border-white transition-all text-base 
                    "
              data-aos="fade-up"
            >
              <span>Call Now: 0121 771 3616</span>
              
            </Link>
            {/* <Link
              href="tel:+441217713616"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call Now: 0121 771 3616
            </Link> */}
             <p>OR</p>
            <Link href={"/"}>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Book flights online for the best airfare deals
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopFlightRoutes;