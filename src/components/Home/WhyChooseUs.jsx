
const features = [
  {
    title: "Secure Payment",
    description: "Your personal and payment details are protected by advanced security, giving you total peace of mind.",
    icon: "svg5.svg",
    hover: true,
  },
  {
    title: "Over 40 Years",
    description: "Benefit from our 40+ years of expertise and trusted relationships in the travel industry.",
    icon: "svg4.svg",
    hover: true,
  },
  {
    title: "ATOL Protected",
    description: (
      <>
        We hold an official ATOL License <b>(3781)</b>, so your booking and money are always safe with us.<br />
        {/* <span className="block mt-1 text-xs text-blue-900">3781 will be written inside the atol logo</span> */}
      </>
    ),
    icon: "svg2.svg",
    hover: false,
  },
  {
    title: "Accredited Agent",
    description: (
      <>
        Panama Travel Ltd is a fully accredited IATA agent.<br />
        Registration No.<b> 04319970</b>
      </>
    ),
    icon: "svg6.svg",
    hover: false,
  },
  {
    title: "Top Notch Support",
    description: "Our UK-based customer service team is here to help you every step of the way—before, during, and after your trip.",
    icon: "svg3.svg",
    hover: false,
  }
];

export default function WhyChooseUs({ data }) {
  return (
    <section className="py-2" id="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-2 text-center">
        <div className="py-1">
          <h2 className="text-[1.65rem] sm:text-[1.9rem] font-bold mb-0 leading-tight tracking-tight">
            {/* Keep heading simple as in screenshot */}
            Why Choose Panama Travel
          </h2>
          <p className="my-2 text-lg">For over 40 years, Panama Travel Ltd has helped UK travellers book affordable flights worldwide. We are ATOL protected and IATA accredited, ensuring secure airline ticket booking.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 gap-y-5 mt-2">
          {data?.map((feature, idx) => {
            // Is this the last item and odd number of features?
            const isLastOdd =
              idx === features.length - 1 && features.length % 2 !== 0;

            return (
              <div
                key={idx}
                className={
                  "flex flex-col items-center justify-start relative group px-1 " +
                  // On mobile: if last and odd, span 2 cols and center
                  (isLastOdd ? "col-span-2 justify-self-center sm:col-span-1" : "")
                }
              >
                {/* Icon */}
                <div className="mb-2 text-green-500">
                  <img
                    src={`/svgs/${features[idx].icon}`}
                    alt={feature.heading}
                    className="text-primary text-3xl h-16 w-16"
                  />
                </div>
                {/* Title */}
                <h3 className="text-[1.05rem] font-bold text-primary mb-0 leading-none">
                  {feature.heading}
                </h3>
                {/* Description */}
                {features[idx]?.hover ? (
                  <p className="text-xs text-gray-700 transition-opacity duration-200 mt-1 text-center max-w-[170px]">
                    {feature.sentence}
                  </p>
                ) : (
                  <p className="text-xs text-gray-700 mt-1 text-center max-w-[170px]">
                    {feature.sentence}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
