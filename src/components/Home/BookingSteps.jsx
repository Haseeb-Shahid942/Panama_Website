"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Scale, Lock, Mail, Plane } from "lucide-react";
import Link from "next/link";

const BookingSteps = () => {
    const steps = [
        {
            id: 1,
            title: "Search Your Destination",
            description: "Choose where you want to go and explore the best affordable flight options available worldwide.",
            icon: Search,
            color: "bg-primary"
        },
        {
            id: 2,
            title: "Compare & Select",
            description: "Review flight times, fares, and airlines to find the best value deals for your travel dates.",
            icon: Scale,
            color: "bg-primary"
        },
        {
            id: 3,
            title: "Book Securely",
            description: "Confirm your reservation through our trusted, secure booking system, protected by ATOL and IATA certifications.",
            icon: Lock,
            color: "bg-primary"
        },
        {
            id: 4,
            title: "Receive Confirmation Instantly",
            description: "Get your e-ticket and travel details right in your inbox, ready to go!",
            icon: Mail,
            color: "bg-primary"
        },
        {
            id: 5,
            title: "Travel with Confidence",
            description: "Enjoy peace of mind knowing you've booked through one of the UK's most reliable, affordable flight agencies.",
            icon: Plane,
            color: "bg-primary"
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
            x: 100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const arrowVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: 0.3
            }
        }
    };

    return (
        <section className="py-4 px-4 bg-gradient-to-br from-gray-50 to-blue-50" id="booking-steps-section">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Booking Steps
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Booking your next trip with Panama Travel is simple, fast, and stress-free.
                        We&rsquo;ve made affordable flight booking easier than ever. Just follow these quick steps:
                    </p>
                </motion.div>

                {/* Steps Container */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="relative"
                >
                    {/* Desktop Layout */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-5 gap-8 items-stretch">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex flex-col items-center relative">
                                    {/* Step Card */}
                                    <motion.div
                                        variants={cardVariants}
                                        className="bg-white rounded-2xl shadow-xl p-6 py-3 hover:shadow-2xl transition-all duration-300 h-80 xl:h-64 flex flex-col transform hover:-translate-y-2 w-full max-w-xs"
                                    >
                                        {/* Step Number & Icon */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                                                {step.id}
                                            </div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                <step.icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Arrow */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            variants={arrowVariants}
                                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                                        >
                                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet Layout */}
                    <div className="lg:hidden space-y-6">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                                <motion.div
                                    variants={cardVariants}
                                    className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 min-h-[140px] flex flex-col"
                                >
                                    {/* Step Header */}
                                    <div className="flex items-start mb-4">
                                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-around">
                                            <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0`}>
                                                {step.id}
                                            </div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                <step.icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {step.title}
                                            </h3>
                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Vertical Arrow */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        variants={arrowVariants}
                                        className="flex justify-center my-4"
                                    >
                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSteps;