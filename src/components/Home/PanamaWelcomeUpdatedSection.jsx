"use client";

import { motion } from "framer-motion";
// import Link from "next/link";

const PanamaWelcomeUpdatedSection = ({ data }) => {
    return (
        <motion.section
            className="max-w-5xl mx-auto bg-white px-4 py-3 md:py-6 shadow-sm mb-6 my-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-base md:text-lg text-black max-w-2xl mx-auto">
                {data?.heading || "Welcome to Panama Travel UK"}
            </h1>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> */}
            <div>
                {/* Left Content */}
                <div className="space-y-4">
                    <p className="text-base md:text-lg text-center">
                        {data?.content || "Dreaming of white beaches, turquoise waters, and a peaceful tropical escape? At Panama Travel LTD, we make your travel dreams affordable and easy. Whether for business, a honeymoon, or family vacation, book cheap flights and custom holiday packages with confidence. Our expert team finds the best low-cost deals worldwide so you can travel more for less. Wherever you go next, Panama Travel LTD is your trusted partner for affordable flights and unforgettable journeys."}
                    </p>

                    {/* Optional CTA Button */}
                    {/* <div className="pt-4">
                        <Link href={"/about-us/"} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors duration-300 shadow-md">
                            Learn More About Us
                        </Link>
                    </div> */}
                </div>

                {/* Right Image */}
                {/* <div className="relative"> */}
                {/* <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={data?.image || "/imgs/qatar.webp"}
                            alt={data?.heading || "Panama Travel UK Office"}
                            className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div> */}

                {/* Optional floating badge */}
                {/* <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-gray-800">ATOL Protected</span>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </motion.section>
    );
};

export default PanamaWelcomeUpdatedSection;