'use client'

import { useEffect, useState } from "react";
import { useScrollOrNavigate } from "@/utils/useScrollOrNavigate";
import { useTopAboutData } from "../../hooks/useTopAboutData";



const TopNavbar = () => {
  const scrollOrNavigate = useScrollOrNavigate();
  const [hidden, setHidden] = useState(false);


  const { data, loading, error } = useTopAboutData();
  // console.log(data?.about?.top_heading);

  useEffect(() => {

    const onScroll = () => {
      const threshold = window.innerHeight / 3; // 100vh
      setHidden(window.scrollY >= threshold);
    };
    onScroll(); //  Initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-[100vw] box-border z-[60]  transition-all duration-300
      ${hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}
      bg-black/40 border-b-white border-b h-10 text-white text-md flex justify-center items-center px-4`}
    >
      <span className="mr-2 font-bold">{data?.about?.top_heading ? data?.about?.top_heading : "Last Minute Flight Deals from £479*pp"}</span>
      <button
        className="border border-white px-3 h-7 rounded bg-black/10 hover:bg-primary text-white hover:text-white font-bold transition"
        onClick={() => scrollOrNavigate('flights-section')}
        aria-label="Explore flight deals"
      >
        Explore
      </button>
    </div>
  );
};

export default TopNavbar;
