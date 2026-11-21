import Link from "next/link"

export const metadata = {
  title: 'About Panama Travel UK | Trusted Since 1984',
  description: 'Learn about Panama Travel UK, your trusted travel agency since 1984, offering affordable flights and expert travel support.',
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/about-us/',
  },
  openGraph: {
    title: 'About Panama Travel UK | Trusted Since 1984',
    description: 'Learn about Panama Travel UK, your trusted travel agency since 1984, offering affordable flights and expert travel support.',
    url: 'https://www.panamatravel.co.uk/about-us/',
    siteName: 'Panama Travel',
    type: 'website',
  },
}

function TrustBadge({ img, label, color }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt={label}
        className="h-14 w-24 rounded-md shadow-md p-1 bg-primary"
      />
      <span className="text-sm font-semibold mt-1" style={{ color }}>
        {label}
      </span>
    </div>
  )
}

export default function AboutUs() {
  return (
    <section className="min-h-screen text-primary mt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-3 pt-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-primary drop-shadow-xl">
          Trusted UK Flight Booking Agency
        </h1>
        <p className="text-xl leading-relaxed text-muted">
          <span className="font-bold text-primary">Panama Travel UK </span>
          is a well-known international flights tickets agency. We have been
          providing airline ticketing and flights since 1984. We are an
          independent ATOL-protected, and IATA-accredited travel agency. We are
          based in the{" "}
          <span className="font-bold text-primary">United Kingdom</span>. We
          help customers in the UK find cheap airfares, last-minute offers.
          Cheap flights to their destinations around the world are often booked
          by us. We have a simple mission: to provide our customers with a safe
          and comfortable trip. We also aim to make the trip affordable. Since
          <span className="font-bold text-primary"> 1984</span>.{" "}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <TrustBadge
            img="/svgs/svg5white.svg"
            label="Secure Payments"
            color="#C094B9"
          />
          <TrustBadge
            img="/images/certificate2.svg"
            label="IATA Accredited"
            color="#C094B9"
          />
          <TrustBadge
            img="/images/certificate3.svg"
            label="Travel Aware"
            color="#C094B9"
          />
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 pb-3">
        <h2 className="text-3xl font-bold mb-2 text-primary">
          Our Success Steps: &ldquo;Building Trust and Authority&rdquo;
        </h2>
        <p className="mb-2 text-muted">
          Our knowledge at Panama Travel UK is based on decades of experience
          and open service. We have trusted relationships with major airlines.
          We have developed long-term credibility in the flight ticketing
          business, as explained below:
        </p>
        <h3 className="text-2xl font-bold mb-2 text-primary">
          Four Decades of Trusted Expertise
        </h3>
        <p className="mb-2 text-muted">
          Having over 40 years of experience, Panama Travel is a reliable travel
          agency in the UK. It offers its passengers low-cost flights, economy
          fares, and business class tickets. Our experience in the aviation
          industry shows how credible we are and how consistent. We are
          committed to fulfilling our customers&rsquo; needs.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-primary">
          Transparent and Personalised Service
        </h3>
        <p className="mb-2 text-muted">
          Our narrative is based on trust, transparency, and outstanding
          customer service. We believe that every traveller deserves a booking
          service with defined flight prices. We ensure that our team provides a
          smooth travel planning experience. This includes both last-minute
          flights booked from major UK airports and long-haul flights arranged
          by our team.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-primary">
          Official Airline Partnerships
        </h3>
        <p className="mb-2 text-muted">
          We are a certified ticketing agent for key airlines. We have Qatar
          Airways, Turkish Airlines, Saudia, Egypt and many others. All of our
          airline bookings are genuine and confirmed. These are credible
          associations. We&rsquo;ll make sure that your flight bookings are always
          safe. So you&rsquo;ll get international travel standards.
        </p>
      </div>

      {/* Credentials & Security */}
      <div className="max-w-4xl mx-auto px-4 py-3">
        <h2 className="text-2xl font-bold mb-3 text-primary">
          Security & Accreditations
        </h2>
        <p className="mb-2 text-muted">
          At Panama Travel UK, we value your financial security, trust, and
          safety. We maintain the highest level of security for all flight
          bookings and payment transactions. It is a globally accepted travel
          industry accreditation.
        </p>
        <ul className="list-disc pl-6 text-muted space-y-2">
          <li>
            <strong className="text-primary">ATOL Protection:</strong> Licence
            number <strong>3781</strong>. We will fully cover your flight
            tickets and holiday bookings. It is done under the regulations of
            ATOL. It guarantees your money&rsquo;s safety in the event of company
            insolvency. This feature allows you to relax with complete financial
            security and peace of mind.
          </li>
          <li>
            <strong className="text-primary">IATA Accreditation:</strong> As an
            IATA-accredited travel agency, we are empowered to sell flight
            tickets on behalf of the world-leading airlines. This certification
            shows that we comply with the international standards of air
            transport. Panama Travels has an established reputation in the
            international flight reservation system.
          </li>
          <li>
            <strong className="text-primary">ISO Certified Standards:</strong>{" "}
            We are ISO certified. It ensures that the financial and customer
            information and online transactions are safely handled. We have
            international information security and quality management standards
            in our systems. Thus, we guaranteed a secure and transparent booking
            process.
            <br />
            When you book with Panama Travel UK, your trip is protected by
            decades of experience. We personally address every part, from
            booking flights to after-sales services.
          </li>
        </ul>
        <p className="mt-4 text-muted">
          Booking with Panama Travel means you&rsquo;re protected by industry
          standards and decades of expertise. Our team personally manages each
          step of your journey.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 py-5">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Contact Panama Travel UK
        </h2>
        <p className="text-muted mb-2">
          <strong>Address:</strong> 495 Coventry Road, Small Heath, Birmingham,
          B10 0JS, UK
        </p>
        <p className="text-muted mb-2">
          <strong>Phone:</strong>{" "}
          <Link href="tel:+441217713616" className="underline text-primary">
            0121 771 3616
          </Link>
          <br />
          <strong>Phone:</strong>{" "}
          <Link href="tel:+442071770066" className="underline text-primary">
            0207 177 0066
          </Link>
        </p>
        <p className="text-muted mb-4">
          <strong>Email:</strong>{" "}
          <Link
            href="mailto:info@panamatravel.co.uk"
            className="underline text-primary"
          >
            info@panamatravel.co.uk
          </Link>
          <br />
          <strong>Email:</strong>{" "}
          <Link
            href="mailto:sales@panamatravel.co.uk"
            className="underline text-primary"
          >
            sales@panamatravel.co.uk
          </Link>
        </p>
        <p className="text-muted">
          <strong>Company Registration Number:</strong> 04319970
        </p>
        <p className="mt-4 text-muted italic">
          Booking with Panama Travel UK means booking with confidence; every
          flight ticket, every deal, and every journey is managed by experts who
          care.
        </p>
      </div>
    </section>
  )
}