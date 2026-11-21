import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/video.mp4'; // Background video
import { useSelector } from 'react-redux';
import Link from 'next/link';

function Hero() {
  const user = useSelector((state) => state.user.user);

  const styles = {
    bgGradient:
      'bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20',
    btn: 'px-5 py-2 rounded-md font-medium border-indigo-600 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
  };

  const parentVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', duration: 0.8 },
    },
  };

  return (
    <section
      className={`py-28 px-4 md:py-36 relative overflow-hidden text-white ${styles.bgGradient}`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={hero} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col space-y-6 items-center md:items-start w-full md:w-1/2 text-center md:text-left"
        >
          {/* Heading */}
          <motion.h1
            variants={childVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            {user?.name && <h2 className="mb-2 text-xl text-indigo-300">Welcome, {user.name}</h2>}
            Build. Earn. Repeat — With SuccessWeb.
          </motion.h1>

          {/* Paragraphs */}
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-white/90"
          >
            {/* Join SuccessWeb – a powerful platform where you earn real income through rewards, referrals, and a smart multilevel system built for your success. */}
            SuccessWeb lets you earn real income through rewards, referrals, and a smart multilevel earning system.
          </motion.p>

          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-white/90"
          >
            {/* At SuccessWeb, we empower members with weekly and monthly earnings, performance-based rewards, and a thriving network system. Whether you're starting fresh or scaling fast, our tools and support help you turn effort into income and ambition into reality. */}
            Get weekly and monthly payouts, bonuses, and more! SuccessWeb helps you grow your income with the right tools, support, and a powerful team-based reward structure.
          </motion.p>

          {/* CTA */}
          <Link href={'/user/subscription/'}>
            <motion.button variants={childVariants} className={styles.btn}>
              Discover
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
