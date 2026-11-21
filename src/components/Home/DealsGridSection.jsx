// import DealsCard from './DealsCard'; // adjust path as needed

import Link from "next/link";
import DealsCard from "../UI/Card/DealsCard";

const cards = [
  { name: "Abuja", slug: "abuja", price: 524, img: 'abuja.webp?updatedAt=1752601896328' },
  { name: "Accra", slug: "accra", price: 399, img: 'accra.webp?updatedAt=1751911865935' },
  { name: "Dar Es Salaam", slug: "dar-es-salaam", price: 396, img: 'daresalaam.webp?updatedAt=1752601895939' },
  { name: "Entebbe", slug: "entebbe", price: 420, img: 'entebbe.webp?updatedAt=1751911858857' },
  { name: "Johannesburg", slug: "johannesburg", price: 532, img: 'johannesburg.webp?updatedAt=1752601896062' },
  { name: "Khartoum", slug: "khartoum", price: 638, img: 'khartoum.webp?updatedAt=1752601895298' },
  { name: "Nairobi", slug: "nairobi", price: 498, img: 'nairobi.webp?updatedAt=1751911868901' },
  { name: "Mogadishu", slug: "mogadishu", price: 806, img: 'mogadishu.webp?updatedAt=1751911859292' },
  { name: "Harare", slug: "harare", price: 464, img: 'harare.webp?updatedAt=1751911866179' },
] // Dummy array for 9 cards


function toSlug(text) {
  return text
    .toString()                // ensure string
    .toLowerCase()             // convert to lowercase
    .trim()                    // remove leading/trailing spaces
    .replace(/['"]/g, "")      // remove quotes
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/^-+|-+$/g, "");  // remove leading/trailing -
}


export default function DealsGridSection({ data }) {
  return (
    <section className="bg-gray-100 py-4" id="exclusive-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center">Exclusive Flight Deals</h2>
        <p className="m-auto mb-5 text-center max-w-5xl">Find exclusive flight deals from London to Abuja, Accra, Dar Es Salaam, Entebbe, Johannesburg, Nairobi and Harare. Affordable return flights and flexible travel options available.</p>
        <div
          className="flex flex-wrap justify-center content-center gap-3"
        >
          {data?.map((country, idx) => (
            <div
              key={idx}
              data-aos="fade-right"
              data-aos-delay={idx * 100}
            ><Link href={`/destination/${toSlug(country?.from_location)}/`} target='_top'>
                <DealsCard name={country.from_location} destination={country.destination} price={country.price} img={country?.featured_image} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
