import Link from 'next/link'
import ContactForm from '../../components/Home/ContactForm'

export const metadata = {
  title: 'Contact Panama Travel UK | Get Expert Help',
  description: 'Contact Panama Travel UK for expert flight booking help, affordable fares, and personalized travel support.',
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/contact-us/',
  },
  openGraph: {
    title: 'Contact Panama Travel UK | Get Expert Help',
    description: 'Contact Panama Travel UK for expert flight booking help, affordable fares, and personalized travel support.',
    url: 'https://www.panamatravel.co.uk/contact-us/',
    siteName: 'Panama Travel',
    type: 'website',
  },
}

export default function ContactUs() {
  return (
    <section className="min-h-screen text-primary mt-24 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-primary text-center">
          Get in Touch with Panama Travel
        </h1>

        <p className="text-lg leading-relaxed text-muted mb-12 text-center max-w-3xl mx-auto">
          Panama Travel UK is a well-known international flights tickets agency.
          We have been providing airline ticketing and flights since 1984. We
          are an independent ATOL-protected, and IATA-accredited travel agency.
          We are based in the United Kingdom. We help customers in the UK find
          cheap airfares, last-minute offers. Cheap flights to their
          destinations around the world are often booked by us. We have a simple
          mission: to provide our customers with a safe and comfortable trip. We
          also aim to make the trip affordable.
        </p>

        {/* Contact Info Section */}
        <div className="w-full">
          <ContactForm />
        </div>
        <div className="text-muted mb-12">
          <h2 className="text-2xl font-bold my-5 text-primary">
            Contact Panama Travel UK
          </h2>
          <p className="mb-4">
            Come visit us or reach out through phone or email. We&rsquo;re happy to
            assist with any travel inquiries.
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Address:</strong>
              <br />
              495 Coventry Road, Small Heath,
              <br /> Birmingham, B10 0JS, UK
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <Link href="tel:+441217713616" className="underline text-primary">
                0121 771 3616
              </Link>{" "}
              <br />
              <strong>Phone:</strong>{" "}
              <Link href="tel:+442071770066" className="underline text-primary">
                0207 177 0066
              </Link>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:info@panamatravel.co.uk"
                className="underline text-primary"
              >
                info@panamatravel.co.uk
              </Link>{" "}
              <br />
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:sales@panamatravel.co.uk"
                className="underline text-primary"
              >
                sales@panamatravel.co.uk
              </Link>
            </li>
            <li>
              <strong>Company Registration Number:</strong> 04319970
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-3 text-primary">
            Business Hours
          </h2>
          <p>
            Monday – Friday: 10:00 AM – 6:00 PM <br />
            Saturday: 10:00 AM – 2:00 PM <br />
            Sunday: Closed
          </p>

          <h2 className="text-xl font-bold mt-10 mb-3 text-primary">
            Why Choose Panama Travel UK
          </h2>
          <p className="text-lg leading-relaxed text-muted mb-12 max-w-5xl mx-auto">
            We are a leading flight reservation firm in the UK. We provide
            travellers with complete financial coverage, flexible reservation
            services, and secure payments. Your airline bookings and payments
            are safe with us, having ATOL Licence No. 3781 and IATA
            accreditation. We also comply with the ISO standards of financial
            and data security. This gives customers confidence whenever they are
            making reservations online.
          </p>
          <p className="text-lg leading-relaxed text-muted mb-12 max-w-5xl mx-auto">
            Our consultants have been well trained to find out the last-minute
            flight discounts. One-way flights and multi-destination fares are
            also included that fit your budget. Panama Travel assures you a
            customised and affordable reservation process. Whether you are
            planning a holiday, doing business, or visiting a family member in a
            foreign country.
          </p>
          <h2 className="text-xl font-bold mt-10 mb-3 text-primary">
            How We Work
          </h2>
          <p className="text-lg leading-relaxed text-muted mb-12 max-w-5xl mx-auto">
            Our operations are guided by a clear and effective procedure. We
            ensure that every customer gets cheap fares and smooth flight
            bookings.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-primary">Smart Flight Search </strong>
              It provides real-time airfares for the most prominent airlines in
              the world. We use sophisticated flight search technology and
              global distribution systems (GDS). It helps you to compare
              discounted flights, last-minute offers, and low fares instantly.
            </li>
            <li>
              <strong className="text-primary"> Best Fare Selection </strong>
              Our system narrows down the best flight prices so that you can
              find economy or business flights. We ensure that you receive
              maximum value for your money. Whether you are booking a return
              flight, a one-way ticket, or multi-city travel.
            </li>
            <li>
              <strong className="text-primary">Easy Booking & Confirmation </strong>
              When you choose the flight you would like to take, our travel
              agents in the United Kingdom. We will offer you the safety of
              online booking of flights booking and confirmation of payment. You
              receive an instant e-ticket and full registration details through
              email.
            </li>
            <li>
              <strong className="text-primary">Post-Booking Support </strong>
              Our dedicated customer support team ensures you receive a smooth
              flow of communication. Whether it is baggage questions or
              rebooking a flight or changing the date or getting a refund.
            </li>
            <li>
              <strong className="text-primary">Reliable Travel Experience </strong>
              Panama Travel UK has professionals who value customer satisfaction
              and trust. Our travel services make sure your experience is
              reliable. This includes both domestic flights within London and
              international flights to Europe, Asia, or the Middle East.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}