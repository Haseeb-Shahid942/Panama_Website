"use client";

import { FaXTwitter, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi2";
import Link from "next/link";

export default function NewsletterSection() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements['newsletter-email'].value;
    
    // Track newsletter signup
    
    // Here you would normally send the email to your backend
    alert('Thank you for subscribing!');
    e.target.reset();
  };

  return (
    <section className="bg-white box-border py-4 sm:py-6 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Ready to Start Your Journey CTA */}
        <div className="text-center mb-6 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Panama Travel for their flight bookings and travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/"}>
              <button 
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Book your flight now"
              >
                Book Your Flight
              </button>
            </Link>
            <Link href="/contact-us/">
              <button 
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Contact us for assistance"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <h3 className="text-4xl font-serif font-semibold mb-2 text-center">Stay In Touch</h3>
          {/* Subtitle */}
          <p className="text-lg text-center mb-6">
            Sign up to our newsletter and follow us for special offers, news and inspiration.
          </p>
          {/* Social Icons and Newsletter */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">
            {/* Social Icons */}
            <div className="flex gap-4 mb-2 sm:mb-0">
              <a 
                href="https://www.facebook.com/PanamaTravelLtd" 
                className="bg-[#424850] w-12 h-12 flex items-center justify-center rounded-none text-white text-2xl hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Visit our Facebook page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/panamatravelltd" 
                className="bg-[#424850] w-12 h-12 flex items-center justify-center rounded-none text-white text-2xl hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram aria-hidden="true" />
              </a>
              <a 
                href="https://x.com/panamatravelltd" 
                className="bg-[#424850] w-12 h-12 flex items-center justify-center rounded-none text-white text-2xl hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Visit our X (Twitter) page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter aria-hidden="true" />
              </a>
              <a 
                href="https://www.tiktok.com/@panamatravelltd" 
                className="bg-[#424850] w-12 h-12 flex items-center justify-center rounded-none text-white text-2xl hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Visit our TikTok page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok aria-hidden="true" />
              </a>
            </div>
            {/* Newsletter */}
            <form className="flex flex-col md:flex-row gap-1 md:gap-0 w-full max-w-lg box-border" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="SIGN UP TO OUR NEWSLETTER"
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                required
                aria-required="true"
              />
              <button
                type="submit"
                className="bg-[#424850] text-white font-bold px-4 py-3 text-base transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
          {/* Data Safety */}
          <div className="mt-2 flex items-center text-gray-900 font-medium">
            Relax, your data is safe with us
            <HiOutlinePlus className="inline-block ml-1 text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
