
'use client'

import { useScrollContext } from '../providers/ScrollContext'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const certificates = [
  // {
  //   img: '/images/certificate1.svg',
  //   alt: 'ABTA Cerfiticate'
  // },
  // {
  //   img: '/images/certificate2.svg',
  //   alt: 'ABTA Accredited Agent'
  // },
  {
    img: '/images/certificate2.svg',
    alt: 'IATA Accredited Agent',
  },
  {
    img: '/svgs/svg2white.svg',
    alt: 'ATOL Protected'
  },
  {
    img: '/svgs/svg5white.svg',
    alt: 'Secure Payment'
  }
]

export default function SiteFooter() {
  const { scheduleScroll } = useScrollContext()
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  const handleSectionClick = (sectionId) => {
    if (isHomePage) {
      // Direct scroll on homepage
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    } else {
      // Navigate to homepage and schedule scroll
      scheduleScroll(sectionId)
      router.push('/')
    }
  }

  return (
    <footer className="bg-primary text-white pt-6">
      {/* Top Info and Certifications */}
      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center opacity-10 select-none pointer-events-none">
          {/* Large watermark-style text */}
          <span className="text-[6vw] font-extrabold">Panama Travel</span>
        </div>
        <div className="relative bg-transparent z-10 flex flex-col items-center">
          <div className="text-xl md:text-2xl text-center font-light mb-3">
            Booking with confidence. Your holidays are protected with Panama Travel.
          </div>
          <div className="flex flex-row items-center gap-6 mb-3">
            {/* Example: Replace with your real certificates/logos */}
            {
              certificates.map((certificate, idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  <img
                    src={certificate?.img}
                    alt={certificate?.alt}
                    title={certificate?.alt}
                    className="h-12 w-auto rounded-md shadow-md"
                  />
                  {certificate?.span && (
                    <span className="text-xs mt-1 text-white/90 text-center">
                      {certificate?.span}
                    </span>

                  )}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* FCDO Notice */}
      {/* <div className="bg-secondary text-sm py-3 px-4 text-center">
        For the latest travel advice from the Foreign Commonwealth & Development Office (FCDO) including Covid-19 safety, security, and local laws, visit&nbsp;
        <a
          href="https://www.gov.uk/foreign-travel-advice"
          className="underline text-white hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.gov.uk/foreign-travel-advice
        </a>.
      </div> */}

      {/* Navigation Links Row */}
      {/* <div className="bg-accent py-2 text-base text-white/90">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-7 gap-y-2 items-center border-b border-white/10">
          <span className="px-2">Popular Destinations</span>
          <span className="opacity-50">|</span>
          <span className="px-2">Latest Offers</span>
          <span className="opacity-50">|</span>
          <span className="px-2">Flights</span>
          <span className="opacity-50">|</span>
          <span className="px-2">Payments</span>
          <span className="opacity-50">|</span>
          <span className="px-2">Travel Insurance</span>
        </div>
      </div> */}

      {/* Multi-column links */}
      <div className="max-w-6xl mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 px-4 border-b border-white/10">
        <div className="space-y-1 flex flex-col text-sm">
          <FooterLink link={'/about-us/'}>About Panama Travel</FooterLink>
          <FooterLink link={'/contact-us/'}>Contact Us</FooterLink>
          <ScrollLink onClick={() => handleSectionClick('why-choose-us-section')}>Why Book With Us?</ScrollLink>
        </div>
        <div className="space-y-1 flex flex-col text-sm">
          <FooterLink>Careers</FooterLink>
          <FooterLink link={'/sitemap/'}>Sitemap</FooterLink>
        </div>
        {/* <div className="space-y-1 flex flex-col text-sm">
          <FooterLink>Travel Protection</FooterLink>
          <FooterLink>Responsible Tourism</FooterLink>
          <FooterLink>Partner With Us</FooterLink>
        </div> */}
        <div className="space-y-1 flex flex-col text-sm">
          <ScrollLink onClick={() => handleSectionClick('destinations-section')}>Popular Destinations</ScrollLink>
          <ScrollLink onClick={() => handleSectionClick('exclusive-section')}>Exclusive Offers</ScrollLink>
          <ScrollLink onClick={() => handleSectionClick('flights-section')}>Flights</ScrollLink>
          <ScrollLink onClick={() => handleSectionClick('what-we-offer-section')}>Our Services</ScrollLink>
        </div>
        <div className="space-y-1 flex flex-col text-sm">
          <FooterLink link={'/terms-and-conditions/'}>Terms & Conditions</FooterLink>
          <FooterLink link={'/privacy-policy/'}>Privacy Policy</FooterLink>
          <FooterLink link={'/cookie-policy/'}>Cookies Policy</FooterLink>
        </div>
      </div>

      {/* Legal ATOL Text */}
      <div className="text-xs text-white/90 max-w-5xl mx-auto py-4 px-4 text-center leading-relaxed">
        Many of the holidays and flights sold by Panama Travel are protected under the ATOL scheme. ATOL protection does not apply to all travel services on this website. If you do not receive an ATOL Certificate, those travel arrangements will not be ATOL protected. Please check with us to understand the coverage for your booking. For more information on financial protection and the ATOL Certificate, visit&nbsp;
        <a
          href="https://www.atol.org.uk/ATOLCertificate"
          className="underline text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit ATOL Certificate information page (opens in new tab)"
        >
          www.atol.org.uk/ATOLCertificate
        </a>.
      </div>

      {/* Copyright */}
      <div className="text-xs text-white/90 py-4 text-center border-t border-white/10">
        ©{new Date().getFullYear()} All rights reserved - Panama Travel Ltd
      </div>
    </footer>
  );
}

// Simple link style for footer
function FooterLink({ link, children, ...props }) {
  // If no link provided, render as span instead of Link
  if (!link) {
    return (
      <span
        {...props}
        className="text-white/70 cursor-not-allowed"
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={link}
      {...props}
      className="hover:underline text-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      {children}
    </Link>
  );
}

// Scroll link for homepage sections
function ScrollLink({ onClick, children, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      className="hover:underline text-white/90 transition-colors text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      {children}
    </button>
  );
}
