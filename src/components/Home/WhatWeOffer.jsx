"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Calendar, Package, Shield, Plane, Clock, Repeat } from "lucide-react";
import { FaMosque } from "react-icons/fa";
// import { Plane, Clock, Repeat, Mosque } from "lucide-react";


const WhatWeOffer = () => {
    const offers = [
        {
            id: 1,
            title: "Cheap flights across Asia, Europe, Africa and the Middle East",
            description: "We connect you to destinations across Asia, Europe, the Middle East, Africa, and beyond — offering flexible fares to suit every budget.",
            icon: Plane,
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "Last-minute flight deals",
            description: "Whether you're planning or searching for a last-minute cheap flight booking, our specialists help you find the best deals available.",
            icon: Clock,
            color: "bg-green-500"
        },
        {
            id: 3,
            title: "Return and one-way airline tickets",
            description: "From luxury holidays to family adventures and religious tours, we design affordable travel packages to match your travel style and needs.",
            icon: Repeat,
            color: "bg-purple-500"
        },
        {
            id: 4,
            title: "Religious travel and Umrah flights",
            description: "Our long-standing relationships with leading airlines and tour operators allow us to offer exclusive rates and personalized service, ensuring you always get the most affordable flight deals worldwide.",
            icon: FaMosque,
            color: "bg-orange-500"
        }
    ];

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

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-6 px-4 bg-white" id="what-we-offer-section">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        What We Offer
                    </h2>
                    {/* <div className="w-24 h-1 bg-primary mx-auto mb-6"></div> */}
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Affordable flight deals worldwide with flexible booking options and customised travel packages.
                    </p>
                </motion.div>

                {/* Offers Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-12"
                >
                    {offers.map((offer) => (
                        <motion.div
                            key={offer.id}
                            variants={cardVariants}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 pt-12 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2 relative"
                        >
                            {/* Icon - Positioned absolutely at top center */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-hover transition-colors duration-300 shadow-lg">
                                    <offer.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 mt-4">
                                <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors duration-300 text-center">
                                    {offer.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm text-center">
                                    {offer.description}
                                </p>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-4 border-t border-gray-200"
                >
                    <div className="flex items-center space-x-2 text-gray-600">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">ATOL Protected</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">IATA Accredited</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium">40+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeOffer;