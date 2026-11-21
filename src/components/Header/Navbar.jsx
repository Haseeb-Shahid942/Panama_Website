'use client'

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiHome, FiBriefcase, FiMapPin, FiBookOpen, FiInfo, FiMail } from "react-icons/fi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useScrollContext } from "../providers/ScrollContext";

// Define navigation links with better SEO-friendly structure
const menuLinks = [
  { label: "Home", to: "home-section", type: "scroll", icon: <FiHome size={18} /> },
  { label: "Flights", to: "top-flight-routes-section", type: "scroll", icon: <FiBriefcase size={18} /> },
  { label: "Destinations", to: "destinations-section", type: "scroll", icon: <FiMapPin size={18} /> },
  // { label: "Services", to: "what-we-offer-section", type: "scroll", icon: <FiSun size={18} /> },
  { label: "Blogs", href: "/blogs/", type: "route", icon: <FiBookOpen size={18} /> },
  { label: "About Us", href: "/about-us/", type: "route", icon: <FiInfo size={18} /> },
  { label: "Contact", href: "/contact-us/", type: "route", icon: <FiMail size={18} /> },
];

const Navbar = () => {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { scheduleScroll } = useScrollContext();
  const isHomePage = pathname === "/";

  const closeMenu = () => setShowMobileMenu(false);

  // Auto-hide bank details after 5s
  useEffect(() => {
    let timer;
    if (showBankDetails) timer = setTimeout(() => setShowBankDetails(false), 5000);
    return () => clearTimeout(timer);
  }, [showBankDetails]);

  // Close mobile drawer on >= lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && showMobileMenu) setShowMobileMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileMenu]);

  // Make navbar sticky after 100vh / 3 == 33vh
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight / 3; // 100vh / 3 = 33vh
      setIsSticky(window.scrollY >= threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    if (isHomePage) {
      // Use native smooth scrolling for better performance and SEO
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to homepage and schedule scroll without URL parameters
      scheduleScroll(sectionId);
      router.push('/');
    }
  };

  const renderNavLink = (item, className = "", onClick) => {
    const icon = item.icon ? <span className="mr-2" aria-hidden="true">{item.icon}</span> : null;
    if (item.type === "scroll") {
      return (
        <button
          key={item.label}
          type="button"
          className={`cursor-pointer flex items-center ${className} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
          onClick={() => {
            handleSectionClick(item.to);
            if (onClick) onClick();
          }}
          aria-label={`Navigate to ${item.label} section`}
        >
          {icon}
          <span>{item.label}</span>
        </button>
      );
    }
    return (
      <Link
        key={item.label}
        href={item.href || "/"}
        className={`flex items-center ${className} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
        onClick={onClick}
        aria-label={`Navigate to ${item.label} page`}
      >
        {icon}
        <span>{item.label}</span>
      </Link>
    );
  };

  // Root bar styles (transparent on top with top-70, white when sticky with top-0)
  const rootBarClass =
    `fixed left-0 w-[100vw] box-border z-50 transition-all duration-300 ${isSticky
      ? "top-0 bg-white text-primary shadow-lg"
      : "top-[40px] bg-black/40 shadow-lg text-white"
    }`;

  // Desktop link styles
  const desktopLinkClass = isSticky
    ? "text-primary border rounded-lg border-transparent hover:border-primary hover:bg-white hover:text-primary hover:underline px-3 py-2 font-medium transition-all duration-300"
    : "text-white/90 hover:text-white hover:underline px-3 py-2 font-medium transition-colors";
  ;
  // Right info box styles
  const rightInfoClass = isSticky
    ? "text-primary text-sm border-l-2 bg-white px-2 py-1 border-primary rounded-sm relative"
    : "text-white text-sm border-l-2 border-white/60 px-2 py-1 rounded-sm relative bg-transparent";

  // Bank dropdown styles
  const bankDropdownClass =
    `transition-all duration-300 ease-in-out shadow-md px-6 py-2 absolute right-0 top-[100%] min-w-52 text-sm hidden lg:block ${showBankDetails
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-2 invisible"
    } ${isSticky ? "bg-white text-gray-800" : "bg-black/40 text-white border border-white/20 backdrop-blur-[2px]"}`;

  // Mobile top bar styles
  const mobileTopBarClass =
    `lg:hidden w-full overflow-hidden flex items-center justify-between px-4 py-2 ${isSticky ? "bg-white text-primary shadow" : "bg-transparent text-white"
    }`;

  // Mobile drawer styles (kept solid for readability)
  const mobileDrawerClass =
    `fixed top-0 right-0 h-full w-64 z-50 w-full overflow-hidden transform transition-transform duration-300 ${showMobileMenu ? "translate-x-0" : "translate-x-full"
    } ${isSticky ? "bg-white text-primary" : "bg-black/90 text-white"}`;

  // Mobile drawer header
  const mobileHeaderClass = isSticky ? "bg-primary text-white" : "bg-white/10 text-white";

  return (
    <div className={rootBarClass}>
      {/* Mobile Top Bar */}
      <div className={mobileTopBarClass}>
        <button 
          onClick={() => setShowMobileMenu(true)} 
          className="flex items-center gap-1"
          aria-label="Open navigation menu"
          aria-expanded={showMobileMenu}
        >
          <FiMenu size={22} aria-hidden="true" />
          <span className="text-xs">Menu</span>
        </button>

        <div className="text-2xl font-bold text-center">
          <Link href="/">Panama Travel</Link>
        </div>

        <a
          href="tel:+442071770066"
          className={`text-xs px-3 py-1 rounded-sm flex items-center gap-1 ${isSticky ? "bg-primary text-white" : "bg-white/10 text-white"
            }`}
          aria-label="Call us at 020 7177 0066"
        >
          <FiPhone size={14} aria-hidden="true" /> Call Us
        </a>
      </div>

      {/* Background Overlay for mobile */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden" 
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeMenu();
            }
          }}
        />
      )}

      {/* Mobile Drawer Menu */}
      <nav className={mobileDrawerClass} aria-label="Mobile navigation">
        <div className={`flex items-center justify-between px-4 py-4 ${mobileHeaderClass}`}>
          <h2 className="font-semibold text-lg">Menu</h2>
          <button 
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FiX size={26} aria-hidden="true" />
          </button>
        </div>
        <ul className="space-y-2 text-base py-2">
          {menuLinks.map((item) => (
            <li key={item.label} className="transition duration-200 ease-in-out hover:bg-white/10">
              {renderNavLink(item, "block w-full px-4 py-2", closeMenu)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center py-2">
        <div className="ps-3">
          <Link href="/" aria-label="Panama Travel home page">
            <img
              src={isSticky ? "/images/panamatravellogo.png" : "/images/pt-logo-white2.png"}
              alt="Panama Travel logo"
              className={`h-16 w-auto transition-opacity ${isSticky ? "opacity-100" : "opacity-100"
                }`}
            />
          </Link>
        </div>

        <nav className="flex gap-0">
          {menuLinks.map((item) => renderNavLink(item, desktopLinkClass))}
        </nav>

        <div className={rightInfoClass}>
          <div className="flex flex-col items-start">
            <div className={`text-xs flex gap-2 ${isSticky ? "text-primary" : "text-white"}`}>
              Monday – Saturday: 10:00 AM – 6:00 PM
            </div>
            <div className={`font-bold text-2xl ${isSticky ? "text-primary" : "text-white"}`}>
              <a href="tel:+441217713616">0121 771 3616</a>
            </div>
            <button
              onClick={() => setShowBankDetails((prev) => !prev)}
              className={`text-xs flex gap-2 transition ${isSticky ? "text-primary hover:text-yellow-600" : "text-white hover:text-yellow-300"
                }`}
              aria-label={showBankDetails ? "Hide bank details" : "Show bank details"}
              aria-expanded={showBankDetails}
            >
              Our Bank Details <span className="ml-1" aria-hidden="true">{showBankDetails ? "▲" : "▼"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bank Details Dropdown */}
      <div className={bankDropdownClass}>
        <p><span className={`font-bold ${isSticky ? "text-primary" : "text-white"}`}>Panama Travel</span></p>
        <p><span className={`font-bold ${isSticky ? "text-gray-900" : "text-white"}`}>BARCLAYS BANK</span></p>
        <p><span className="font-semibold">Account Number: </span> 90833584</p>
        <p><span className="font-semibold">Sort code:</span> 20-08-64</p>
      </div>
    </div>
  );
};

export default Navbar;