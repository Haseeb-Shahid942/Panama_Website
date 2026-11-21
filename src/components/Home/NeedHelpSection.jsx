"use client";

import Link from "next/link";

export default function NeedHelpSection({ data }) {
  return (
    <section className="relative bg-accent py-6 flex items-center justify-center overflow-hidden">
      {/* Decorative big A */}
      <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-dancing leading-none z-0">
        P
      </span>

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-pacifico leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-lobster leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-greatvibes leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-satisfy leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-marck leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-alexbrush leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-shadows leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-cookie leading-none z-0">
        P
      </span> */}

      {/* <span className="absolute right-10 bottom-0 text-[16rem] text-white opacity-10 font-extrabold font-allura leading-none z-0">
        P
      </span>  */}


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white font-bold w-full">
        <h2 className="text-4xl font-serif text-white font-bold mb-3 mt-2" data-aos="fade-right">{data?.heading}</h2>
        <p className="mb-6 text-xl font-bold" data-aos="fade-right">
          {data?.paragraph}
        </p>
        <Link href="tel:+442071770066" className="
          bg-primary text-white hover:text- font-bold py-2 px-10 rounded-full
          duration-200 hover:bg-accent border-2 border-transparent hover:border-white transition-all text-base
        "
          data-aos="fade-up"
        >
          {data?.cta_text}
        </Link>
      </div>
    </section>
  );
}
