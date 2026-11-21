'use client'

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappWidget() {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    let timeout;
    if (showLabel) timeout = setTimeout(() => setShowLabel(false), 10000);
    return () => clearTimeout(timeout);
  }, [showLabel]);

  const handleClick = () => {
    window.open("https://wa.me/+441217713616", "_blank", "noopener,noreferrer");
    setShowLabel(true);
  };

  return (
    <div className="fixed bottom-[30px] left-[30px] z-50 flex items-center space-x-3">
      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg transition hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="absolute w-full h-full rounded-full bg-green-400 opacity-60 animate-ping" />
        <FaWhatsapp className="text-white text-2xl relative z-10 animate-blink" />
      </button>

      {showLabel && (
        <button onClick={(e) => { e.stopPropagation(); setShowLabel(false); }}>
          <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-lg animate-fade-in">
            <span>Chat with us on WhatsApp</span>
          </div>
        </button>
      )}
    </div>
  );
}
