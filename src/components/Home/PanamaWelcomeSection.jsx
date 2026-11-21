"use client";

// import React from 'react';
import { motion } from "framer-motion";
// import AtolLogo from '../SVGs/AtolLogo';

const PanamaWelcomeSection = ({ data }) => {
  return (
    <motion.section
      className="max-w-5xl mx-auto bg-white px-4 py-3 md:py-6 shadow-sm mb-6 my-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 text-black">
        {"Welcome to Panama Travel UK"}
      </h1>
      <p className="text-base md:text-lg text-black max-w-5xl mx-auto">
        {/* {"Dreaming of white beaches, turquoise waters, and a peaceful tropical escape? At Panama Travel LTD, we make your travel dreams affordable and easy. Whether for business, a honeymoon, or family vacation, book cheap flights and custom holiday packages with confidence. Our expert team finds the best low-cost deals worldwide so you can travel more for less. Wherever you go next, Panama Travel LTD is your trusted partner for affordable flights and unforgettable journeys."} */}
        {"Your trusted partner for cheap flights and airline ticket booking. We help you secure affordable airfare for business travel, family holidays, honeymoons and religious journeys."}
      </p>
      <p className="text-base md:text-lg text-black max-w-5xl mx-auto">
        {"Our team compares flight routes and airline fares from London, Manchester and Birmingham to bring you the best flight deals worldwide. Whether you are booking flights to Dubai, Pakistan, Saudia, Thailand or African Countries, we make flight booking simple and reliable."}
      </p>
    </motion.section>
  );
};

export default PanamaWelcomeSection;
