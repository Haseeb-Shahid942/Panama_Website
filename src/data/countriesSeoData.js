import { IMAGEKIT_OLD_URL, IMAGEKIT_URL } from '../utils/constants';

export const countriesSeoData = {
    abuja: {
        name: "Abuja",
        title: "Fly to Abuja | Great Airfare Deals from the UK",
        description: "Find affordable flights to Abuja from the UK. Book now for low fares, trusted service, and easy travel with Panama Travel.",
        images: [
            // `${IMAGEKIT_OLD_URL}/abuja1.webp?tr=w-1400,fo-auto`,
            `${IMAGEKIT_URL}/pthome/abuja.webp?updatedAt=1780924549708`,
            // `${IMAGEKIT_OLD_URL}/abuja2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/abuja2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/abuja3.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
      <h2>Abuja Travel: Discover Nigeria’s Modern Capital</h2>
      <p>
        Welcome to Abuja, the dynamic and modern capital of Nigeria, where contemporary architecture 
        meets rich cultural heritage. From impressive government buildings to vibrant markets and 
        exciting nightlife, Abuja travel offers something for every type of traveler. Whether 
        you’re planning a family holiday, a business trip, or an adventurous getaway, 
        panamatravel.co.uk provides the best deals on Abuja flights and complete travel packages 
        to make your Nigerian journey smooth and memorable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Abuja</h2>

        <h3>Aso Rock</h3>
        <Image
          src={${IMAGEKIT_URL} + "/aso-rock-abuja-image.png"}
          alt="Aso Rock Abuja"
          width={1300}
          height={900}
        />
        <br />
        <p>
          Marvel at the iconic Aso Rock, a massive granite formation rising majestically over the
          city. Perfect for sightseeing, photography, and appreciating Abuja’s unique landscape.
        </p>
      </div>

      <div>
        <h3>Millennium Park</h3>
        <p>
          Relax in Millennium Park, Abuja’s largest public park, offering walking trails, picnic
          spots, and lush greenery ideal for family outings and leisure activities.
        </p>
      </div>

      <div>
        <h3>Nigerian National Mosque & National Christian Centre</h3>
        <Image
          src={${IMAGEKIT_URL} + "/nigerian-national-mosque-image.png"}
          alt="National Mosque and Christian Centre Abuja"
          width={1300}
          height={900}
        />
        <br />
        <p>
          Explore Abuja’s spiritual landmarks, including the Nigerian National Mosque and National
          Christian Centre, showcasing stunning architecture and cultural significance.
        </p>
      </div>

      <div>
        <h3>Jabi Lake & Jabi Market</h3>
        <p>
        Enjoy water-based activities at Jabi Lake, then head to Jabi Market for shopping, crafts,
        and local cuisine for an authentic Nigerian experience.
        </p>
        </div>
        
        <div>
        <h3>Wuse & Garki Shopping Districts</h3>
        <Image
          src={${IMAGEKIT_URL} + "/wuse-and-garki-shopping-district-image.png"}
          alt="Wuse and Garki Shopping District Abuja"
          width={1300}
          height={900}
        />
        <br />
        <p>
          Shop for fashion, souvenirs, and local art in the bustling districts of Wuse and Garki,
          perfect for combining retail therapy with a taste of Nigerian city life.
        </p>
      </div>

      <div>
        <h2>Abuja Hotels & Accommodation</h2>
        <p>
          Whether you’re traveling for business or leisure, Abuja hotels provide a wide range of
          accommodation options. From luxury resorts and boutique hotels to family-friendly lodges,
          there’s something for every traveler. Panamatravel.co.uk ensures the best deals on hotel
          bookings, making your stay comfortable and convenient.
        </p>
        <p>
          If you’re planning your trip and want to explore other destinations or services, visit
          <a href="/"><b>Panama Travel</b></a> to discover curated travel packages, flight deals, and hotel options across
          Nigeria and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Abuja</h2>
        <p>
          Fly easily to Abuja via Nnamdi Azikiwe International Airport (ABV) with our cheap tickets
          to Abuja and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
          <li>Book Abuja flights easily online.</li>
          <li>Access group, family, and last-minute deals.</li>
          <li>Enjoy 24/7 customer support for booking changes and travel assistance.</li>
          <li>Explore multi-city trips across Nigeria and West Africa.</li>
        </ul>
        <p>
          Book early to secure the best Abuja flights and travel packages. If you have questions
          about your flights or need help planning your Abuja family holiday or business trip, don't hesitate to <a href="/contact-us/"><b>contact our experts.</b></a> Our
          team is available 24/7 to ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Abuja</h2>
        <p>
          Taste authentic Nigerian dishes like jollof rice, suya (grilled skewers), and pounded yams
          with egusi soup. Abuja also offers international cuisine, lively bars, rooftop lounges,
          and vibrant Abuja nightlife. For shopping enthusiasts, explore local markets and malls in
          Wuse, Garki, and Jabi, offering crafts, fashion, and souvenirs.
        </p>
      </div>

      <div>
        <h2>Nigeria Adventures from Abuja</h2>
        <p>
          Abuja tourism is just the beginning. Use the city as a base to explore Nigeria’s top
          destinations:
        </p>
        <ul>
          <li><b>Zuma Rock</b> – Nigeria’s iconic monolith.</li>
          <li><b>Gurara Falls</b> – breathtaking waterfalls ideal for nature lovers.</li>
          <li><b>Hiking and outdoor adventures</b> in nearby hills and parks.</li>
        </ul>
        <p>
          Whether you’re an adventure seeker, cultural traveler, or business professional, Nigeria
          holidays from Abuja provide endless possibilities.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Abuja</h2>
        <ul>
          <li><b>Best time to visit Abuja:</b> October to March for dry, sunny weather.</li>
          <li><b>Currency:</b> Nigerian Naira (NGN); credit cards widely accepted.</li>
          <li><b>Language:</b> English (official), along with Hausa, Yoruba, and Igbo.</li>
          <li><b>Getting around:</b> Taxis, ride-hailing apps, and car rentals are convenient.</li>
          <li>
            <b>Packing essentials:</b> Light clothing for daytime, a jacket for cooler evenings, and
            comfortable walking shoes.
          </li>
          <li><b>Safety:</b> Abuja is known for its safe and welcoming environment.</li>
        </ul>
      </div>

      <div>
        <h2>Why Choose <a href="/">Panamatravel.co.uk</a> for Abuja Travel</h2>
        <p>At panamatravel.co.uk, we specialize in providing seamless travel experiences to Abuja and across Nigeria. Our services include:</p>
        <ul>
          <li>Affordable Abuja flights and hotel bookings.</li>
          <li>
            Customized Nigeria holiday packages for families, business travelers, and adventure
            seekers.
          </li>
          <li>Expert advice on Abuja attractions and sightseeing.</li>
          <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <p>
          Make your Abuja journey unforgettable—book your flights today with
          <b>panamatravel.co.uk</b> and start exploring the vibrant heart of Nigeria.
        </p>
        <p>
          Discover who’s behind your journey—visit our <a href="/about-us/"><b>About Us</b></a> page to learn more about the
          team at Panama Travel, our mission, and how we’ve built trusted partnerships across
          Africa to deliver exceptional service for your Abuja travel and beyond.
        </p>
      </div>
    </section>
  `},
    accra: {
        name: "Accra",
        title: "Flights to Accra | Affordable Travel from the UK",
        description: "Book affordable flights to Accra from the UK. Enjoy reliable service and smooth booking with Panama Travel UK.",
        images: [
            `${IMAGEKIT_URL}/pthome/accra.webp?updatedAt=1780924549860,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/accra.webp?tr=w-1400,fo-auto`,
            `${IMAGEKIT_OLD_URL}/accra.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/accra2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/accra3.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
        <h2>Accra Travel: Explore Ghana’s Vibrant Capital</h2>
        <p>
            Welcome to Accra, the bustling capital of Ghana, where rich culture meets coastal charm. From colorful markets to lively beaches and dynamic nightlife, Accra travel offers an unforgettable experience for every traveler. Whether you’re planning a family holiday, a business trip, or an adventurous getaway, panamatravel.co.uk brings you the best deals on Accra flights and complete travel packages to make your Ghana journey smooth and memorable.
        </p>

        <div>
            <h2>Top Attractions & Sightseeing in Accra</h2>
            <h3>Makola Market</h3>
            <Image
                src={${IMAGEKIT_URL} + "/makola-market.png"}
                alt="Makola Market Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Dive into the heart of local life at Makola Market, Accra’s largest market. Shop for textiles, handmade crafts, fresh produce, and souvenirs while experiencing authentic Ghanaian culture.
            </p>

            <h3>Labadi Beach</h3>
            <Image
                src={${IMAGEKIT_URL} + "/labadi-beach.png"}
                alt="Labadi Beach Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Relax or have fun at Labadi Beach, one of Accra’s most popular beaches, perfect for horse rides, water sports, picnics, and sunset strolls along the coast.
            </p>

            <h3>Black Star Square</h3>
            <Image
                src={${IMAGEKIT_URL} + "/black-star-square.png"}
                alt="Black Star Square Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Visit Black Star Square, also known as Independence Square, a historic site commemorating Ghana’s independence and national pride.
            </p>

            <h3>Osu Oxford Street</h3>
            <Image
                src={${IMAGEKIT_URL} + "/osu-oxford-street.png"}
                alt="Osu Oxford Street Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Explore Osu Oxford Street, the hub of Accra’s shopping, dining, and entertainment. Discover local fashion, international brands, and vibrant street life.
            </p>

            <h3>Jamestown Lighthouse & Heritage</h3>
            <p>
                Take a trip to Jamestown, a historic district with colonial architecture, lighthouses, and guided walking tours to learn about Ghana’s rich history.
            </p>

        </div>

        <div>
            <h2>Accra Hotels & Accommodation</h2>
            <p>
                Whether you’re traveling for leisure or business, Accra hotels offer a wide range of options, from luxury resorts and boutique stays to budget-friendly lodges. Panamatravel.co.uk ensures you get the best deals on hotel bookings for a comfortable and memorable stay.
            </p>
            <p>
                If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Ghana and beyond.
            </p>
        </div>
        <div>
            <h2>Flights & Ticket Booking to Accra</h2>
            <p>
                Fly conveniently to Accra via Kotoka International Airport (ACC) with our cheap Accra flights and flexible booking options. With panamatravel.co.uk, you can: 
            </p>
            <ul>
                <li>Book Accra tickets easily online.</li>
                <li>Access group, family, and last-minute deals.</li>
                <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
                <li>Explore multi-city trips across Ghana and West Africa.</li>
            </ul>
            <p>
                Book early to secure the best Accra flights and travel packages tailored to your itinerary.
            </p>
            <p>
                If you have questions about your flights or need help planning your Ghana holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
            </p>
        </div>

        <div>
            <h2>Dining, Nightlife & Shopping in Accra</h2>
            <p>
                Taste authentic Ghanaian cuisine such as jollof rice, banku, fufu, and grilled tilapia. Accra also offers lively nightlife, rooftop bars, cultural events, and international dining. Shop for handmade crafts, clothing, and souvenirs at markets and trendy areas like Osu Oxford Street.
            </p>
        </div>

        <div>
            <h2>Ghana Adventures from Accra</h2>
            <p>
                Accra sightseeing is just the beginning. Use the city as a base to explore nearby attractions: 
            </p>
            <ul>
                <li>Kakum National Park – canopy walks and rainforest adventures.</li>
                <li>Cape Coast Castle – a historic UNESCO World Heritage site.</li>
                <li>Volta Region – waterfalls, lakes, and scenic landscapes.</li>
            </ul>
            <p>
                Whether you’re an adventure seeker, cultural traveler, or family tourist, Ghana holidays from Accra provide endless possibilities.
            </p>
        </div>

        <div>
            <h2>Travel Tips for Accra</h2>
            <ul>
                <li><b>Best time to visit Accra:</b> November to March for dry and sunny weather.</li>
                <li><b>Currency:</b> Ghanaian Cedi (GHS).</li>
                <li><b>Language:</b> English (official); Twi and other local languages are widely spoken.</li>
                <li><b>Getting around:</b> Taxis, ride-hailing apps, and car rentals are convenient.</li>
                <li>
                    <b>Packing essentials:</b> Lightweight clothing, sun protection, and comfortable shoes for exploring.
                </li>
                <li><b>Safety:</b> Accra is generally safe, with friendly locals and welcoming communities.</li>
            </ul>
            <p>
                For more travel insights, guides, and tips, check out our <a href='/blogs'>Panama Travel Blog</a>.
            </p>
        </div>

        <div>
            <h2>Why Choose <a href="/">Panamatravel.co.uk</a> for Accra Travel</h2>
            <p>At panamatravel.co.uk, we specialize in delivering seamless travel experiences to Accra and across Ghana. Our services include:</p>
            <ul>
                <li>Affordable Accra flights and hotel bookings.</li>
                <li>
                    Customized Ghana holiday packages for families, business travelers, and adventure seekers.
                </li>
                <li>Expert advice on Accra sightseeing, beaches, and local attractions.</li>
                <li>Hassle-free ticketing and 24/7 customer support.</li>
            </ul>
            <p>
                Make your Accra journey unforgettable—book your Accra tickets today with
                <b>panamatravel.co.uk</b> and start exploring the vibrant capital of Ghana.
            </p>
        </div>
    </section>
  `},
    bali: {
        name: "Bali",
        title: "Flights to Bali | Tropical Adventures Await",
        description: "Book affordable flights to Bali from the UK. Enjoy easy booking, great prices, and a tropical escape with Panama Travel.",
        images: [
            `${IMAGEKIT_URL}/pthome/bali.webp?updatedAt=1780069924487,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/bali1.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/bali2.webp?tr=w-1400,fo-auto`,
        ],
        content: `
    <section>
    <h2>Bali Travel: Discover Indonesia’s Island Paradise</h2>
    <p>
        Welcome to Bali, Indonesia’s world-famous tropical paradise where lush jungles, pristine beaches, ancient temples, and vibrant culture come together to create a dream destination. Whether you're seeking a relaxing holiday, a romantic getaway, or an adventurous escape, Bali travel offers the perfect blend of nature, spirituality, and excitement.
        At panamatravel.co.uk, we bring you the best Bali flight deals, hotel options, and fully customized travel packages to make your Indonesian holiday smooth, affordable, and unforgettable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Bali</h2>
        <h3>Ubud – Cultural Heart of Bali</h3>
        <Image
            src={${IMAGEKIT_URL} + "/ubud-cultural-heart-of-bali.jpg"}
            alt="Ubud Cultural Heart of Bali Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore Bali’s artistic soul in Ubud. From traditional markets and rice terraces to royal palaces and monkey forests, Ubud is ideal for culture lovers, photographers, and nature explorers.
        </p>

        <h3>Kuta & Seminyak Beaches</h3>
        <Image
            src={${IMAGEKIT_URL} + "/kuta-seminyak-beaches.jpg"}
            alt="Kuta & Seminyak Beaches Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax on golden sands, surf world-class waves, or enjoy Bali’s lively nightlife. Kuta and Seminyak offer everything—from beach clubs and shopping streets to unforgettable sunsets.
        </p>

        <h3>Uluwatu Temple</h3>
        <Image
            src={${IMAGEKIT_URL} + "/uluwatu-temple.jpg"}
            alt="Uluwatu Temple Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Perched on a cliff overlooking the ocean, Uluwatu Temple is one of Bali’s most iconic spiritual sites. Don’t miss the stunning Kecak Fire Dance at sunset.
        </p>

        <h3>Tegalalang Rice Terraces</h3>
        <Image
            src={${IMAGEKIT_URL} + "/tegalalang-rice-terraces.jpg"}
            alt="Tegalalang Rice Terraces Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            These breathtaking terraces offer one of Bali’s most famous landscapes. Enjoy jungle swings, nature walks, and scenic cafes overlooking the emerald fields.
        </p>

        <h3>Nusa Penida</h3>
        <Image
            src={${IMAGEKIT_URL} + "/nusa-penida.jpg"}
            alt="Nusa Penida Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Take a day trip to Nusa Penida, a nearby island famous for its dramatic cliffs, stunning beaches (like Kelingking Beach), and incredible snorkeling/diving spots.
        </p>
    </div>

    <div>
        <h2>Hotels & Accommodation in Bali</h2>
        <p>
            From luxurious cliff-top villas and beachfront resorts to private pool villas and budget-friendly guesthouses, Bali hotels cater to every traveler. Panamatravel.co.uk ensures you get the best deals and the perfect place to stay.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Indonesia and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Bali</h2>
        <p>
            Fly conveniently to Ngurah Rai International Airport (DPS) in Denpasar, Bali, with our cheap Bali flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Bali tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Indonesia and Southeast Asia.</li>
        </ul>
        <p>
            Book early to secure the best Bali flights and travel packages tailored to your dream itinerary.
        </p>
        <p>
            If you have questions about your flights or need help planning your Bali holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Bali</h2>
        <p>
            Savor delicious Indonesian food like Nasi Goreng, Satay, and Babi Guling, alongside world-class fine dining, vegan cafes, and cooking classes. Bali's nightlife is famous for beach clubs, rooftop bars, and lively music venues in Seminyak, Kuta, and Canggu. Shop for high-quality, local crafts, textiles, silver jewelry, and fashion boutiques.
        </p>
    </div>

    <div>
        <h2>Island Adventures from Bali</h2>
        <p>
            Use Bali as your base to explore nearby attractions:
        </p>
        <ul>
            <li>Mount Batur: Hike at sunrise for breathtaking volcanic views.</li>
            <li>Gili Islands: Crystal waters perfect for snorkeling, diving, and romantic escapes.</li>
            <li>Lombok: A peaceful, scenic alternative to Bali with untouched beaches and waterfalls.</li>
        </ul>
        <p>
            Whether you’re an adventurer, honeymooner, or family traveler, Bali holidays offer endless experiences.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Bali</h2>
        <ul>
            <li><b>Best time to visit:</b> April to October for dry, sunny weather.</li>
            <li><b>Currency:</b> Indonesian Rupiah (IDR).</li>
            <li><b>Language:</b> Bahasa Indonesia; English widely spoken in tourist areas.</li>
            <li><b>Getting around:</b> Scooters, taxis, private drivers, and ride-hailing apps are common.</li>
            <li>
                <b>Packing essentials:</b> Beachwear, sunscreen, lightweight clothes, and water shoes.
            </li>
            <li><b>Safety:</b> Bali is generally safe and known for warm hospitality.</li>
        </ul>
        <p>
            For more tips and guides, visit our <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panamatravel.co.uk for Bali Travel</h2>
        <p>At Panama Travel, we specialize in crafting seamless travel experiences for Bali and throughout Indonesia. Our services include:</p>
        <ul>
            <li>Cheap Bali flights and hotel bookings.</li>
            <li>Customized Indonesia holiday packages.</li>
            <li>Expert guidance on Bali attractions, beaches, and tours.</li>
            <li>Hassle-free ticketing with 24/7 customer support.</li>
        </ul>
        <p>
            Make your Bali holiday unforgettable—book your Bali flights and travel packages today with
            <b>panamatravel.co.uk</b> and get ready to explore one of the world’s most magical destinations.
        </p>
        <p>
            Learn more about our mission and services on our <a href="/about-us/"><b>About Us</b></a> page.
        </p>
    </div>
  </section>
  `},
    bangkok: {
        name: "Bangkok",
        title: "Flights to Bangkok | Explore Vibrant Thailand",
        description: "Book flights to Bangkok from the UK. Enjoy low fares, smooth booking, and a memorable Thai adventure.",
        images: [
            `${IMAGEKIT_URL}/pthome/bangkok.webp?updatedAt=1780069923353,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/bangkok2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/bangkok3.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
      <h2>Bangkok Travel: Discover Thailand’s Vibrant Capital</h2>
      <p>
        Welcome to Bangkok, Thailand’s bustling and dynamic capital, where ancient temples stand alongside modern skyscrapers, colorful markets fill the streets, and a lively nightlife brings the city to life after sunset. From cultural landmarks and floating markets to world-class shopping and mouthwatering street food, Bangkok travel offers an unforgettable experience for every type of traveler.
        Whether you’re planning a family vacation, a business trip, or a fun adventure, panamatravel.co.uk brings you the best deals on Bangkok flights and complete Thailand travel packages to make your journey smooth and memorable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Bangkok</h2>
        <h3>The Grand Palace</h3>
        <Image
            src={${IMAGEKIT_URL} + "/grand-palace.jpg"}
            alt="The Grand Palace Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            A symbol of Thailand’s history and spirituality, the Grand Palace is one of Bangkok’s most iconic attractions. Explore its golden temples, detailed carvings, and the sacred Emerald Buddha.
        </p>

        <h3>Wat Arun (Temple of Dawn)</h3>
        <Image
            src={${IMAGEKIT_URL} + "/wat-arun-temple-of-dawn.jpg"}
            alt="Wat Arun (Temple of Dawn) Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Located along the Chao Phraya River, Wat Arun’s majestic structure and sunset views make it a must-visit for temple lovers and photographers.
        </p>

        <h3>Wat Pho (Temple of the Reclining Buddha)</h3>
        <Image
            src={${IMAGEKIT_URL} + "/wat-pho-temple-of-the-reclining-buddha.jpg"}
            alt="Wat Pho (Temple of the Reclining Buddha) Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Home to Thailand’s largest reclining Buddha and a traditional massage school, this temple offers a peaceful yet stunning cultural experience.
        </p>

        <h3>Floating Markets</h3>
        <Image
            src={${IMAGEKIT_URL} + "/floating-markets.jpg"}
            alt="Floating Markets Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit famous floating markets like Damnoen Saduak and Amphawa for fresh fruit, street food, souvenirs, and an authentic Thai cultural atmosphere.
        </p>

        <h3>Chatuchak Weekend Market</h3>
        <Image
            src={${IMAGEKIT_URL} + "/chatuchak-weekend-market.jpg"}
            alt="Chatuchak Weekend Market Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            One of the world’s largest outdoor markets, Chatuchak is perfect for shopping, local food, and finding unique souvenirs.
        </p>

        <h3>Asiatique The Riverfront</h3>
        <Image
            src={${IMAGEKIT_URL} + "/asiatique-the-riverfront.jpg"}
            alt="Asiatique The Riverfront Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            One of the world’s largest outdoor markets, Chatuchak is perfect for shopping, local food, and finding unique souvenirs.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Bangkok</h2>
        <p>
            Bangkok offers a wide variety of stays—from luxury hotels by the Chao Phraya River and modern city apartments to stylish boutique hotels and budget hostels. Panama Travel helps you secure the best hotel bookings for a comfortable and convenient experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Thailand and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Bangkok</h2>
        <p>
            Fly conveniently to Suvarnabhumi Airport (BKK) or Don Mueang International Airport (DMK) with our cheap Bangkok flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Bangkok tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Thailand and Southeast Asia.</li>
        </ul>
        <p>
            Book early to secure the best Bangkok flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Thailand holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Bangkok</h2>
        <p>
            Indulge in world-famous street food like Pad Thai, Mango Sticky Rice, and local curries, alongside world-class fine dining. Bangkok’s nightlife is legendary, featuring glamorous rooftop bars, live music venues, and vibrant clubs. Shopping ranges from luxury brands at Siam Paragon to unique crafts at the night markets.
        </p>
      </div>

      <div>
        <h2>Bangkok Adventures & Day Trips</h2>
        <p>
            Explore the surrounding areas and unique attractions near Bangkok:
        </p>
        <ul>
            <li>Siam Niramit & Calypso Cabaret: World-class cultural and entertaining shows.</li>
            <li>Kanchanaburi: Visit the River Kwai Bridge, waterfalls, and peaceful natural landscapes.</li>
            <li>Ancient City (Muang Boran): A unique open-air museum showcasing replicas of Thailand’s most significant historical structures.</li>
        </ul>
        <p>
            Whether you’re an adventure seeker, cultural traveler, or family tourist, Bangkok offers endless possibilities.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Bangkok</h2>
        <ul>
            <li><b>Best time to visit:</b> November to February for pleasant, dry weather.</li>
            <li><b>Currency:</b> Thai Baht (THB).</li>
            <li><b>Language:</b> Thai (English widely spoken in tourist areas).</li>
            <li><b>Getting around:</b> BTS Skytrain, MRT, tuk-tuks, taxis, boats, and rideshare apps.</li>
            <li>
                <b>Packing essentials:</b> Light clothing, sunscreen, water bottle, comfortable walking shoes.
            </li>
            <li><b>Safety:</b> Bangkok is generally safe; just stay aware in busy tourist spots.</li>
        </ul>
        <p>
            For more Thailand travel tips and guides, visit our <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Bangkok Travel?</h2>
        <p>At Panama Travel, we specialize in delivering seamless travel experiences to Bangkok and beyond. Our services include:</p>
        <ul>
            <li>Affordable Bangkok flights and hotel bookings.</li>
            <li>Customized Thailand holiday packages for families, couples, and solo travelers.</li>
            <li>Expert guidance on Bangkok sightseeing and local attractions.</li>
            <li>Easy ticketing with 24/7 customer support.</li>
        </ul>
        <h3>Make your Thailand journey unforgettable</h3>
        <p>
            <a href="/contact-us/"><b>Book your Bangkok</b></a> flights today with <b>panamatravel.co.uk</b> and start exploring the vibrant and culturally rich capital of Thailand.
        </p>
      </div>
    </section>
  `
    },
    "dar-es-salaam": {
        name: "Dar es Salaam",
        title: "Flights to Dar es Salaam | Travel with Ease",
        description: "Book affordable flights to Dar es Salaam. Enjoy smooth booking, great deals, and reliable service.",
        images: [
            `${IMAGEKIT_URL}/pthome/daressalaam.webp?updatedAt=1780924549620,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/daresalaam2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/daresalaam2.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Dar es Salaam Travel: Explore Tanzania’s Coastal Metropolis</h2>
    <p>
        Welcome to Dar es Salaam, the dynamic coastal city of Tanzania where vibrant culture, warm hospitality, and beautiful beaches come together. From bustling markets to serene waterfronts and rich historical sites, Dar es Salaam travel offers unforgettable experiences for every type of traveler.
        Whether you’re planning a relaxing holiday, a business visit, or a cultural adventure, panamatravel.co.uk brings you the best deals on Dar es Salaam flights, hotel bookings, and complete Tanzania travel packages to make your journey smooth and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Dar es Salaam</h2>
        <h3>Kariakoo Market</h3>
        <Image
            src={${IMAGEKIT_URL} + "/kariakoo-market.jpg"}
            alt="Kariakoo Market Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience the heart of local life at Kariakoo Market, one of Tanzania’s busiest markets. Shop for fresh produce, handcrafted goods, textiles, spices, and souvenirs while enjoying the lively, authentic atmosphere.
        </p>

        <h3>Coco Beach (Oyster Bay)</h3>
        <Image
            src={${IMAGEKIT_URL} + "/coco-beach-oyster-bay.jpg"}
            alt="Coco Beach (Oyster Bay) Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax at Coco Beach, a popular seaside escape for both locals and tourists. Enjoy swimming, music, street food, beach sports, and stunning ocean views—especially during sunset.
        </p>

        <h3>National Museum & House of Culture</h3>
        <Image
            src={${IMAGEKIT_URL} + "/national-museum-house-of-culture.jpg"}
            alt="National Museum & House of Culture Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover Tanzania’s heritage at the National Museum, featuring exhibits on tribal history, archaeology, colonial artifacts, and cultural evolution.
        </p>

        <h3>Azania Front Lutheran Church</h3>
        <Image
            src={${IMAGEKIT_URL} + "/azania-front-lutheran-church.jpg"}
            alt="Azania Front Lutheran Church Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit this historic church built in the early 1900s, showcasing impressive German colonial architecture and offering beautiful views of the harbor.
        </p>

        <h3>Village Museum</h3>
        <p>
            Explore a collection of traditional Tanzanian huts representing different ethnic groups, offering a glimpse into the country's diverse culture.
        </p>
    </div>

    <div>
        <h2>Dar es Salaam Hotels & Accommodation</h2>
        <p>
            Dar es Salaam offers a range of accommodations, from business hotels in the city center and luxury resorts along the coast to friendly, budget-conscious guesthouses. Panama Travel helps you secure the best hotel deals for a comfortable and convenient experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Africa and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Dar es Salaam</h2>
        <p>
            Fly conveniently to Julius Nyerere International Airport (DAR) with our cheap Dar es Salaam flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Dar es Salaam tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Tanzania and East Africa.</li>
        </ul>
        <p>
            Book early to secure the best Dar es Salaam flights and travel packages tailored to your adventure.
        </p>
        <p>
            If you have questions about your flights or need help planning your Tanzania holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Dar es Salaam</h2>
        <p>
            Indulge in authentic Tanzanian cuisine, including local seafood, **Ugali**, and various stews. The nightlife is lively, offering beachfront bars and local music venues. Shopping is vibrant at markets like Kariakoo and Mlimani City Mall, offering everything from local crafts and artwork to modern retail brands.
        </p>
    </div>

    <div>
        <h2>Tanzania Adventures & Day Trips from Dar es Salaam</h2>
        <p>
            Use Dar es Salaam as your base to explore Tanzania’s world-famous attractions:
        </p>
        <ul>
            <li>**Zanzibar Island**: Take a ferry to this paradise island for historic Stone Town, spice tours, and world-class beaches.</li>
            <li>**Mikumi National Park**: Go on a thrilling safari adventure to spot lions, elephants, giraffes, and more.</li>
            <li>**Bagamoyo**: Visit this historic coastal town.</li>
            <li>**Pugu Hills Nature Reserve**: Hiking trails and scenic landscapes.</li>
        </ul>
        <p>
            Whether you're a safari lover, beach traveler, or cultural explorer, Tanzania holidays from Dar es Salaam offer limitless possibilities.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Dar es Salaam</h2>
        <ul>
            <li><b>Best time to visit:</b> June to October for pleasant and dry weather.</li>
            <li><b>Currency:</b> Tanzanian Shilling (TZS).</li>
            <li><b>Language:</b> Swahili (official), English widely spoken.</li>
            <li><b>Transportation:</b> Taxis, boda-bodas, ride-hailing apps, hotel transfers.</li>
            <li>
                <b>Packing essentials:</b> Light clothing, sunscreen, insect repellent, comfortable shoes.
            </li>
            <li>
                <b>Safety:</b> Dar es Salaam is generally safe—stick to well-known areas, travel with trusted guides, and follow local advice. Tanzanians are friendly and welcoming to tourists.
            </li>
        </ul>
        <p>
            For more guides and travel tips, visit the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Dar es Salaam Travel</h2>
        <p>
            At panamatravel.co.uk, we specialize in providing seamless, affordable, and secure travel experiences to Dar es Salaam and across Tanzania. Our services include:
        </p>
        <ul>
            <li>Cheap Dar es Salaam flights and hotel bookings.</li>
            <li>Customized Tanzania travel packages.</li>
            <li>Expert guidance on sightseeing, beaches, and cultural attractions.</li>
            <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <h3>Make your Tanzania journey unforgettable.</h3>
        <p>
          <a href="/contact-us/">Book your Dar es Salaam</a> flights and travel packages today with <b>panamatravel.co.uk</b> and start discovering the vibrant coastal charm of Tanzania’s largest city.
        </p>
    </div>
</section>
  `},
    delhi: {
        name: "Delhi",
        title: "Flights to Delhi | Affordable Travel from the UK",
        description: "Book cheap flights to Delhi from the UK. Enjoy great prices, easy booking, and trusted service.",
        images: [
            `${IMAGEKIT_URL}/pthome/dehli.webp?updatedAt=1780073568413,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/delhi.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/delhi.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Delhi Travel: Explore India’s Historic & Cultural Capital</h2>
    <p>
        Welcome to Delhi, the vibrant capital of India, where ancient heritage meets modern city life. From bustling bazaars and Mughal-era monuments to contemporary malls, rich cuisine, and colorful festivals, Delhi travel offers an unforgettable experience for every type of traveler.
        Whether you’re planning a family holiday, a business trip, or a cultural getaway, Panama Travel brings you the best deals on Delhi flights and complete travel packages to make your India journey effortless and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Delhi</h2>
        <h3>Red Fort (Lal Qila)</h3>
        <Image
            src={${IMAGEKIT_URL} + "/red-fort-lal-qila.jpg"}
            alt="Red Fort (Lal Qila) Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover the heart of India’s history at the Red Fort, a UNESCO World Heritage site known for its massive red sandstone walls, Mughal architecture, and evening light shows.
        </p>

        <h3>India Gate</h3>
        <Image
            src={${IMAGEKIT_URL} + "/india-gate.jpg"}
            alt="India Gate Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            A symbol of national pride, India Gate is an iconic war memorial surrounded by lush lawns—perfect for evening walks, picnics, and photography.
        </p>

        <h3>Qutub Minar</h3>
        <Image
            src={${IMAGEKIT_URL} + "/qutub-minar.jpg"}
            alt="Qutub Minar Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit Qutub Minar, one of the tallest minarets in the world. This UNESCO site showcases stunning Indo-Islamic architecture and ancient ruins.
        </p>

        <h3>Chandni Chowk & Old Delhi</h3>
        <p>
            Dive into the bustling streets of Chandni Chowk, famous for:
        </p>
        <ul>
            <li>Traditional markets</li>
            <li>Street food like chaat, kebabs, and jalebi</li>
            <li>Historic Jama Masjid</li>
            <li>Rickshaw rides through narrow, lively lanes</li>
        </ul>

        <h3>Lotus Temple</h3>
        <Image
            src={${IMAGEKIT_URL} + "/lotus-temple.jpg"}
            alt="Lotus Temple Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
        Experience serenity at the Lotus Temple, known for its unique lotus-shaped design and peaceful meditation spaces.
        </p>
        
        <h3>Humayun’s Tomb</h3>
        <Image
            src={${IMAGEKIT_URL} + "/hamayun-tomb.jpg"}
            alt="Humayun’s Tomb Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
           Explore Humayun’s Tomb, the architectural inspiration for the Taj Mahal. It’s surrounded by beautiful gardens perfect for leisurely walks.
        </p>
    </div>

    <div>
        <h2>Delhi Hotels & Accommodation</h2>
        <p>
            Delhi offers a wide range of stays, from luxury hotels in Lutyens’ Delhi and business hotels in Gurgaon to boutique guesthouses in South Delhi. Panama Travel helps you secure the best hotel bookings for a comfortable and convenient experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across India and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Delhi</h2>
        <p>
            Fly conveniently to Indira Gandhi International Airport (DEL) with our cheap Delhi flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Delhi tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across India and South Asia.</li>
        </ul>
        <p>
            Book early to secure the best Delhi flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your India holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Delhi</h2>
        <p>
            Taste a variety of Indian cuisine, including classic North Indian dishes, street food from Old Delhi, and international fare. Enjoy a blend of modern bars and traditional cafes. Shop for textiles, jewelry, spices, and handicrafts at markets like Connaught Place, Dilli Haat, and Chandni Chowk.
        </p>
    </div>

    <div>
        <h2>India Adventures & Day Trips from Delhi</h2>
        <p>
            Use Delhi as your base to explore India’s Golden Triangle and beyond:
        </p>
        <ul>
            <li><b>Agra:</b> Visit the Taj Mahal, one of the world’s Seven Wonders.</li>
            <li><b>Jaipur – The Pink City:</b> Visit Jaipur for forts, palaces, vibrant bazaars, and cultural festivals.</li>
            <li><b>Rishikesh & Haridwar:</b> Perfect for nature lovers and spiritual seekers—offering river rafting, yoga retreats, and sacred temples.</li>
            <li><b>Shimla & Manali:</b> Escape to the mountains for scenic landscapes, snow adventures, and peaceful hill stations.</li>
        </ul>
        <p>
            Whether you’re seeking history, adventure, or relaxation, India holidays from Delhi offer endless possibilities.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Delhi</h2>
        <ul>
            <li><b>Best time to visit:</b> October–March (pleasant weather).</li>
            <li><b>Currency:</b> Indian Rupee (INR).</li>
            <li><b>Language:</b> Hindi & English are widely spoken.</li>
            <li><b>Transport:</b> Metro, taxis, auto-rickshaws, ride-hailing apps.</li>
            <li>
                <b>Packing essentials:</b> Light clothes, comfortable shoes, sun protection.
            </li>
            <li><b>Safety:</b> Delhi is generally safe—stay alert in crowded markets.</li>
        </ul>
        <p>
            For more travel stories, guides, and tips, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panamatravel.co.uk for Delhi Travel</h2>
        <p>At panamatravel.co.uk, we make your India travel easy, affordable, and stress-free.</p>
        <ul>
            <li>Cheap Delhi flights and hotel deals.</li>
            <li>Custom holiday packages for families, solo travelers, and business trips.</li>
            <li>Expert advice on Delhi attractions, markets, and cultural sites.</li>
            <li>Hassle-free bookings and 24/7 customer support.</li>
        </ul>
        <h3>Make your India adventure unforgettable</h3>
        <p>
            <a href="/contact-us/">Book your Delhi tickets</a> today with
            <b>panamatravel.co.uk</b> and start exploring the historic, vibrant capital of India!
        </p>
    </div>
</section>
  `},
    dubai: {
        name: "Dubai",
        title: "Flights to Dubai | Travel in Style and Comfort",
        description: "Find cheap flights to Dubai from the UK. Fly in comfort and enjoy seamless booking with Panama Travel UK.",
        images: [
            `${IMAGEKIT_URL}/pthome/dubai-one.webp?updatedAt=1780997259321,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/dubai2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/dubai2.webp?tr=w-1400,fo-auto`,
        ],
        content: `
      <section>
      <h2>Dubai Travel: Discover the Glamour of the UAE’s Iconic City</h2>
      <p>
        Welcome to Dubai, the dazzling metropolis of the United Arab Emirates where futuristic skyscrapers, luxury shopping, golden deserts, and world-class entertainment come together to create an unforgettable holiday experience. Whether you're planning a family vacation, a luxury escape, a business trip, or an adventure-filled getaway, Dubai travel promises something for every kind of traveler.
        At Panama Travel, we bring you affordable Dubai flights, hotel deals, and customized travel packages to make your UAE journey smooth, comfortable, and memorable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Dubai</h2>
        <h3>Burj Khalifa</h3>
        <Image
            src={${IMAGEKIT_URL} + "/burj-khalifa.jpg"}
            alt="Burj Khalifa Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            No trip to Dubai is complete without visiting the Burj Khalifa, the tallest building in the world. Enjoy breathtaking views from the observation decks on levels 124 and 148.
        </p>

        <h3>Dubai Mall</h3>
        <Image
            src={${IMAGEKIT_URL} + "/dubai-mall.jpg"}
            alt="Dubai Mall Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore one of the world’s largest shopping malls featuring luxury brands, an aquarium, an ice rink, and endless dining and entertainment options.
        </p>

        <h3>Palm Jumeirah</h3>
        <Image
            src={${IMAGEKIT_URL} + "/palm-jumeirah.jpg"}
            alt="Palm Jumeirah Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover the iconic man-made island known for luxury hotels, beach resorts, and attractions like Atlantis Aquaventure Waterpark.
        </p>

        <h3>Dubai Marina</h3>
        <Image
            src={${IMAGEKIT_URL} + "/dubai-marina.jpg"}
            alt="Dubai Marina Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Enjoy a relaxing walk along the Dubai Marina promenade, dine at waterfront restaurants, or take a dhow cruise for stunning night views.
        </p>

        <h3>Dubai Desert Safari</h3>
        <Image
            src={${IMAGEKIT_URL} + "/dubai-desert-safari.jpg"}
            alt="Dubai Desert Safari Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience thrilling dune bashing, camel rides, traditional BBQ dinners, and live cultural performances under the Arabian sky.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Dubai</h2>
        <p>
            Dubai offers accommodations for every taste and budget—from ultra-luxury 7-star hotels and world-class resorts to stylish apartments and budget-friendly stays. Panama Travel helps you secure the best deals on hotel bookings for a comfortable and glamorous experience.
        </p>
        <p>
            If you're planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across the UAE and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Dubai</h2>
        <p>
            Fly conveniently to Dubai International Airport (DXB) or Al Maktoum International Airport (DWC) with our cheap Dubai flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Dubai tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across the UAE and the Middle East.</li>
        </ul>
        <p>
            Book early to secure the best Dubai flights and travel packages tailored to your luxury escape or family adventure.
        </p>
        <p>
            If you have questions about your flights or need help planning your Dubai holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Dubai</h2>
        <p>
            Dubai is a culinary melting pot, offering everything from traditional Emirati food to global fine dining. The city’s nightlife is legendary, featuring glamorous rooftop bars, beach clubs, and international DJ performances. Shopping is world-class, with high-end luxury brands at Dubai Mall, and traditional gold and spice souks offering unique shopping experiences.
        </p>
      </div>

      <div>
        <h2>Dubai Adventures & Day Trips</h2>
        <p>
            Dubai is the perfect base for exploring beautiful nearby destinations:
        </p>
        <ul>
            <li>Abu Dhabi: Visit the Sheikh Zayed Grand Mosque, Ferrari World, and Yas Island attractions.</li>
            <li>Hatta: Experience kayaking, mountain trekking, and scenic landscapes.</li>
            <li>Sharjah: Discover traditional markets, museums, and cultural sites.</li>
        </ul>
        <p>
            Whether you’re an adventure seeker, luxury traveler, or family tourist, Dubai holidays offer endless excitement.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Dubai</h2>
        <ul>
            <li><b>Best time to visit:</b> November to April (pleasant winter weather).</li>
            <li><b>Currency:</b> UAE Dirham (AED).</li>
            <li><b>Language:</b> Arabic (English widely spoken).</li>
            <li><b>Getting around:</b> Metro, taxis, buses, ride-hailing apps.</li>
            <li>
                <b>Dress code:</b> Modest in public areas; relaxed at beaches/resorts.
            </li>
            <li><b>Safety:</b> One of the safest cities in the world with modern infrastructure.</li>
        </ul>
        <p>
            For more UAE travel guides and destination insights, visit our <a href='/blogs'>Panama Travel Blog</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose <a href="/">Panamatravel.co.uk</a> for Dubai Travel</h2>
        <p>At Panama Travel, we ensure a seamless Dubai travel experience with:</p>
        <ul>
            <li>Affordable Dubai flights and hotel bookings.</li>
            <li>Custom holiday packages for families, couples, groups, and business travelers.</li>
            <li>Expert travel advice on Dubai attractions and tours.</li>
            <li>Fast, hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <p>
            Make your Dubai holiday extraordinary—book your Dubai flights and travel packages today with
            <b>panamatravel.co.uk</b> and start exploring one of the world’s most glamorous cities.
        </p>
        <p>
            Visit our <a href="/about-us/"><b>About Us</b></a> page to learn more about our services.
        </p>
      </div>
    </section>
  `},
    egypt: {
        name: "Egypt",
        title: "Flights to Egypt | Explore History & Culture",
        description: "Fly from the UK to Egypt with Panama Travel. Discover history, culture, and great fares with simple booking.",
        images: [
            `${IMAGEKIT_URL}/pthome/egypt-one.webp?updatedAt=1780997255143,tr=w-1400,fo-auto`,
            `${IMAGEKIT_URL}/pthome/egypt-two.webp?updatedAt=1780997257843,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/egypt3.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
      <h2>Egypt Travel: Explore the Land of Pharaohs, Pyramids & Timeless Wonders</h2>
      <p>
        Welcome to Egypt, one of the world’s most enchanting destinations where ancient history meets modern Middle Eastern charm. From the iconic Pyramids of Giza to the vibrant markets, golden deserts, and relaxing Red Sea resorts, Egypt travel promises an unforgettable adventure for every traveler. Whether you're planning a family holiday, a honeymoon, a business trip, or a cultural exploration, panamatravel.co.uk brings you the best deals on Egypt flights and custom travel packages for a smooth and memorable journey across this magnificent country.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Egypt</h2>
        <h3>Pyramids of Giza & Great Sphinx</h3>
        <Image
            src={${IMAGEKIT_URL} + "/pyramids-of-giza-great-sphinx.jpg"}
            alt="Pyramids of Giza & Great Sphinx Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            No trip to Egypt is complete without visiting the world-famous Pyramids. Explore these ancient structures, take desert camel rides, and capture breathtaking views at one of the Seven Wonders of the Ancient World.
        </p>

        <h3>Egyptian Museum, Cairo</h3>
        <Image
            src={${IMAGEKIT_URL} + "/egyptian-museum-cairo.jpg"}
            alt="Egyptian Museum, Cairo Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover ancient artifacts, royal mummies, and treasures of the pharaohs—including items from King Tutankhamun’s tomb—inside one of the world’s richest museums.
        </p>

        <h3>Khan El Khalili Bazaar</h3>
        <p>
            Wander through Cairo’s most vibrant market filled with spices, perfumes, lamps, jewelry, handicrafts, and traditional Egyptian souvenirs.
        </p>

        <h3>Luxor’s Temples & Tombs</h3>
        <p>
            Visit Luxor, often called the world’s greatest open-air museum, showcasing:
        </p>
        <ul>
            <li>Karnak Temple</li>
            <li>Luxor Temple</li>
            <li>Valley of the Kings</li>
            <li>Hatshepsut Temple</li>
        </ul>
        <p>
            Perfect for history lovers and culture seekers.
        </p>

        <h3>Hurghada & Sharm El Sheikh</h3>
        <p>
            Relax at the stunning Red Sea resorts, famous for world-class snorkeling, diving, and pristine beaches.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Egypt</h2>
        <p>
            Egypt offers a wide variety of accommodations—from luxury hotels overlooking the Nile and cozy guesthouses in Cairo to all-inclusive resorts on the Red Sea. Panama Travel helps you secure the best hotel deals for a comfortable and convenient stay.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across the Middle East and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Egypt</h2>
        <p>
            Fly conveniently to major airports like Cairo International Airport (CAI) or Hurghada International Airport (HRG) with our cheap Egypt flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Egypt tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Egypt and the Middle East.</li>
        </ul>
        <p>
            Book early to secure the best Egypt flights and travel packages tailored to your historical or beach getaway.
        </p>
        <p>
            If you have questions about your flights or need help planning your Egypt holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Egypt</h2>
        <p>
            Taste traditional Egyptian food like Koshari, Ful Medames, and Ta'ameya (falafel). Enjoy a vibrant nightlife in Cairo and the Red Sea resorts with bars, cafes, and cultural shows. Shop for authentic Egyptian souvenirs, spices, gold, and cotton at lively souks and modern malls.
        </p>
      </div>

      <div>
        <h2>Egypt Adventures & Sightseeing</h2>
        <p>
            Egypt offers endless adventure and sightseeing opportunities:
        </p>
        <ul>
            <li>Aswan: Nubian culture, Philae Temple, and felucca boat rides on the Nile.</li>
            <li>Abu Simbel: Iconic temples built by Ramses II.</li>
            <li>Siwa Oasis: Desert landscapes, salt lakes, and natural springs.</li>
            <li>Alexandria: Mediterranean charm, historic libraries, and beaches.</li>
        </ul>
        <p>
            Whether you’re an adventure traveler, luxury tourist, or cultural explorer, Egypt holidays offer something truly unforgettable.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Egypt</h2>
        <ul>
            <li><b>Best time to visit:</b> October to April for pleasant weather.</li>
            <li><b>Currency:</b> Egyptian Pound (EGP).</li>
            <li><b>Language:</b> Arabic (English widely spoken in tourist areas).</li>
            <li><b>Getting around:</b> Taxis, ride-hailing apps, trains, domestic flights.</li>
            <li>
                <b>Packing essentials:</b> Light clothes, sunblock, hats, comfortable shoes.
            </li>
            <li><b>Safety:</b> Egypt is generally safe for tourists, with friendly locals and strong tourism security.</li>
        </ul>
        <p>
            For more guides and travel inspiration, explore our <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose Panamatravel.co.uk for Egypt Travel</h2>
        <p>At Panama Travel, we ensure your Egypt holiday is smooth, affordable, and memorable. Our services include:</p>
        <ul>
            <li>Cheap Egypt flights and hotel bookings.</li>
            <li>Personalized Egypt holiday packages.</li>
            <li>Expert guidance on sightseeing, Red Sea resorts & Nile cruises.</li>
            <li>Hassle-free booking with 24/7 customer support.</li>
        </ul>
        <p>
            Make your Egypt adventure unforgettable—book your Egypt flights and travel packages today with
            <b>panamatravel.co.uk</b> and explore the timeless wonders of one of the world’s greatest civilizations.
        </p>
        <p>
            Learn more about our services on our <a href="/about-us/"><b>About Us</b></a> page.
        </p>
      </div>
    </section>
  `
    },
    entebbe: {
        name: "Entebbe",
        title: "Flights to Entebbe | Affordable Travel Deals",
        description: "Get affordable flights to Entebbe from the UK. Book quickly and travel confidently with Panama Travel.",
        images: [
            `${IMAGEKIT_URL}/pthome/entebbe.webp?updatedAt=1780924548390,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/entebbe.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/entebbe.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
      <h2>Entebbe Travel: Discover Uganda’s Gateway to Adventure</h1>
      <p>
        Welcome to Entebbe, a peaceful lakeside city in Uganda known for its natural beauty, wildlife encounters, and serene landscapes. Located along the shores of Lake Victoria, Entebbe travel offers a perfect blend of relaxation, culture, and adventure. Whether you’re planning a family holiday, a business trip, or an African nature getaway, panamatravel.co.uk provides the best deals on Entebbe flights and complete travel packages to make your Uganda journey seamless and memorable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Entebbe</h2>
        <h3>Entebbe Botanical Gardens</h3>
        <Image
            src={${IMAGEKIT_URL} + "/entebbe-botanical-gardens.jpg"}
            alt="Entebbe Botanical Gardens Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore lush greenery, exotic plants, bird species, and scenic walking trails at Uganda’s famous botanical gardens. It’s a peaceful escape for nature lovers and photographers.
        </p>

        <h3>Lake Victoria</h3>
        <Image
            src={${IMAGEKIT_URL} + "/lake-victoria.jpg"}
            alt="Lake Victoria Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax on the shores of Africa’s largest lake. Enjoy boat rides, sunsets, fishing trips, or island excursions—perfect for families and explorers alike.
        </p>

        <h3>Ngamba Island Chimpanzee Sanctuary</h3>
        <Image
            src={${IMAGEKIT_URL} + "/ngamba-island-chimpanzee-sanctuary.jpg"}
            alt="Ngamba Island Chimpanzee Sanctuary Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit the internationally recognized sanctuary dedicated to rescued chimpanzees. Engage in guided tours and learn about Uganda’s conservation efforts.
        </p>

        <h3>Uganda Wildlife Conservation Education Centre (UWEC)</h3>
        <Image
            src={${IMAGEKIT_URL} + "/uganda-wildlife-conservation-education-centre.jpg"}
            alt="Uganda Wildlife Conservation Education Centre Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Commonly known as Entebbe Zoo, this is a great place to see lions, rhinos, birds, reptiles, and more—ideal for families and wildlife enthusiasts.
        </p>

        <h3>Mabamba Swamp</h3>
        <Image
            src={${IMAGEKIT_URL} + "/mabamba-swamp.jpg"}
            alt="Mabamba Swamp Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            A must-visit for birdwatchers! Take a canoe tour through wetlands to spot the rare shoebill stork, a prehistoric-looking bird, and other unique species.
        </p>

        <h3>Victoria Mall</h3>
        <Image
            src={${IMAGEKIT_URL} + "/victoria-mall.jpg"}
            alt="Mabamba Swamp Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            A must-visit for birdwatchers! Take a canoe tour through wetlands to spot the rare shoebill stork, a prehistoric-looking bird, and other unique species.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Entebbe</h2>
        <p>
            Entebbe offers a range of stays, from lakeside resorts and charming guesthouses to convenient airport hotels. Panama Travel helps you secure the best deals on hotel bookings for a comfortable and tranquil experience by Lake Victoria.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Africa and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Entebbe</h2>
        <p>
            Fly conveniently to Entebbe International Airport (EBB), Uganda's main gateway, with our cheap Entebbe flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Entebbe tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Uganda and East Africa.</li>
        </ul>
        <p>
            Book early to secure the best Entebbe flights and travel packages tailored to your African adventure.
        </p>
        <p>
            If you have questions about your flights or need help planning your Uganda holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Entebbe</h2>
        <p>
            Taste fresh Nile Perch, local Tilapia, and traditional Ugandan dishes like Matooke (steamed plantain) and Luwombo (stew steamed in banana leaves). Enjoy peaceful lakeside dining and friendly local bars. Shop for Ugandan crafts, textiles, and souvenirs at local markets and shops.
        </p>
      </div>

      <div>
        <h2>Uganda Adventures from Entebbe</h2>
        <p>
            Entebbe is the perfect starting point for exploring Uganda, the Pearl of Africa:
        </p>
        <ul>
            <li>Jinja: Visit the Source of the Nile, white-water rafting, and adventure sports.</li>
            <li>Bwindi Impenetrable Forest: Home to endangered mountain gorillas (gorilla trekking).</li>
            <li>Queen Elizabeth National Park: Wildlife safaris, boat cruises, and nature experiences.</li>
        </ul>
        <p>
            Whether you’re an adventure lover, wildlife enthusiast, cultural explorer, or family traveler, Uganda provides endless possibilities—all starting from Entebbe.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Entebbe</h2>
        <ul>
            <li><b>Best time to visit:</b> December–February and June–August for clear, pleasant weather.</li>
            <li><b>Currency:</b> Ugandan Shilling (UGX).</li>
            <li><b>Language:</b> English (official), Luganda widely spoken.</li>
            <li><b>Getting around:</b> Taxis, bodas (motorbike taxis), ride-hailing apps, private cars.</li>
            <li>
                <b>Packing essentials:</b> Light clothing, sunblock, insect repellent, comfortable shoes.
            </li>
            <li><b>Safety:</b> Entebbe is generally safe, friendly, and welcoming to tourists.</li>
        </ul>
        <p>
            For more travel ideas, check out the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose Panama Travel for Entebbe Travel</h2>
        <p>At Panama Travel, we specialize in delivering smooth and affordable travel experiences to Entebbe and across Uganda. Our services include:</p>
        <ul>
            <li>Cheap Entebbe flights and hotel bookings.</li>
            <li>Customized Uganda holiday packages.</li>
            <li>Expert guidance on Entebbe attractions, wildlife tours, and nearby destinations.</li>
            <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <p>
            Make your Uganda journey unforgettable—book your Entebbe tickets today with
            <b>panamatravel.co.uk</b> and explore the scenic, peaceful, and adventurous heart of East Africa.
        </p>
        <p>
            Learn more about our travel team on our <a href="/about-us/"><b>About Us</b></a> page.
        </p>
      </div>
    </section>
  `
    },
    harare: {
        name: "Harare",
        title: "Flights to Harare | Affordable Fares & Easy Booking",
        description: "Book cheap flights to Harare from the UK. Enjoy easy booking, great fares, and reliable travel with Panama Travel UK.",
        images: [
            `${IMAGEKIT_URL}/pthome/harare.webp?updatedAt=1780924549864,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/harare.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/harare.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <h2>Harare Travel: Explore Zimbabwe’s Vibrant Capital</h2>
    <p>
      Welcome to Harare, the lively capital of Zimbabwe, where modern urban life meets rich African culture. From sunlit tree-lined avenues to bustling markets and vibrant nightlife, Harare travel offers an unforgettable experience for all types of travelers. Whether you’re planning a family holiday, a business trip, or an adventurous getaway, panamatravel.co.uk brings you the best deals on Harare flights and complete travel packages to make your Zimbabwe journey seamless.
    </p>
    
    <div>
      <h2>Top Attractions & Sightseeing in Harare</h2>
      <h3>National Gallery Zimbabwe</h3>
      <Image src={${IMAGEKIT_URL} + "/national-gallery-image-hararey.png"}
        alt="National Gallery Image Harare" 
        width={1300} 
        height={900} 
      />
      <br />
      <p>Dive into Zimbabwe’s artistic soul at the National Gallery of Zimbabwe, showcasing contemporary African art, sculpture, and photography. A must-visit for cultural explorers.</p>
    </div>

    <div>
      <h3>Harare Gardens</h3>
      <Image src={${IMAGEKIT_URL} + "/harare-gardens.png"} alt="Harare Gardens Image" width={1300} height={900} />
      <br />
      <p>Relax amidst beautifully landscaped greenery at Harare Gardens, a perfect spot for picnics, strolls, and outdoor events in the heart of the city.</p>
    </div>


    <div>
      <h3>Mukuvisi Woodlands</h3>
      <p>Experience wildlife and nature in the city at Mukuvisi Woodlands, home to giraffes, zebras, and antelope. Ideal for walking trails, birdwatching, and family adventures.</p>
    </div>
    <div>
      <h3>Mbane Musika Market</h3>
      <p>Immerse yourself in local culture at Mbane Musika, Harare’s largest market. Shop for fresh produce, crafts, textiles, and souvenirs for an authentic Zimbabwean experience.</p>
    </div>
    <div>
      <h3>Domboshava Caves</h3>
      <Image
        src={${IMAGEKIT_URL} + "/dombushava-caves-harare.png"}
        alt="Domboshava Caves Harare"
        width={1300}
        height={900}
      />
      <p>Immerse yourself in local culture at Mbane Musika, Harare’s largest market. Shop for fresh produce, crafts, textiles, and souvenirs for an authentic Zimbabwean experience.</p>
    </div>

        <div>
      <h3>Epworth Balancing Rocks</h3>
      <br />
      <p>
        Marvel at the iconic Epworth Balancing Rocks, a natural wonder symbolizing Zimbabwe’s
        heritage and stunning geology.
      </p>
    </div>

    <div>
      <h3>Borrowdale Racecourse & Sam Levy’s Village</h3>
      <p>
        Combine shopping, dining, and entertainment at Borrowdale Racecourse & Sam Levy’s Village,
        one of Harare’s trendiest neighborhoods.
      </p>
    </div>

    <div>
      <h2>Harare Hotels & Accommodation</h2>
      <p>
        Whether you’re traveling for business or leisure, Harare offers a wide range of accommodation
        options. From luxury hotels and boutique stays to family-friendly lodges, Harare hotels
        cater to every traveler’s needs. Panamatravel.co.uk provides the best deals on hotel bookings
        and ensures your stay is comfortable and memorable.
      </p>
      <p>
        If you’re planning your trip and want to explore other destinations or services, visit
        Panama Travel to discover curated travel packages, flight deals, and hotel options across
        Zimbabwe and beyond. Our platform ensures you can plan your entire journey seamlessly while
        finding the best deals tailored to your needs.
      </p>
    </div>

    <div>
      <h2>Flights & Ticket Booking to Harare</h2>
      <p>
        Fly conveniently to Harare via Robert Gabriel Mugabe International Airport (HRE) with our
        cheap Harare tickets and flexible booking options. With panamatravel.co.uk, you can:
      </p>
      <ul>
        <li>Book Harare tickets easily online.</li>
        <li>Access group, family, and last-minute deals.</li>
        <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
        <li>Explore multi-city trips across Zimbabwe and southern Africa.</li>
      </ul>
      <p>
        Book early to secure the best Harare flights and travel packages tailored to your needs.
      </p>
      <p>
        If you have questions about your Harare flights or need help planning your Zimbabwe
        holidays, don’t hesitate to contact our experts. Our team at Panamatravel.co.uk is available
        24/7 to provide personalized assistance, answer travel queries, and ensure your booking
        experience is smooth and hassle-free.
      </p>
    </div>

    <div>
      <h2>Dining, Nightlife & Shopping in Harare</h2>
      <p>
        Taste authentic Zimbabwean cuisine like sadza, nyama (grilled meat), and peanut butter
        spinach. Harare also offers international dishes, lively bars, rooftop lounges, jazz clubs,
        and vibrant nightlife. Shop for handmade crafts, Shona sculptures, and local fashion in
        bustling markets and boutique stores.
      </p>
    </div>

    <div>
      <h2>Zimbabwe Adventures from Harare</h2>
      <p>
        Harare sightseeing is just the beginning. Use the city as a base to explore Zimbabwe’s most
        famous destinations:
      </p>
      <ul>
        <li><b>Victoria Falls</b> – a natural wonder of the world.</li>
        <li><b>Hwange National Park</b> – wildlife safaris and adventure tours.</li>
        <li><b>Hiking and cycling trails</b> near Harare.</li>
      </ul>
      <p>
        Whether you’re an adventure seeker or cultural traveler, Zimbabwe holidays from Harare
        provide endless possibilities.
      </p>
    </div>

    <div>
      <h2>Travel Tips for Harare</h2>
      <ul>
        <li><b>Best time to visit Harare:</b> May to October for dry, sunny weather.</li>
        <li><b>Currency:</b> Zimbabwean Dollar (ZWL); US Dollars widely accepted.</li>
        <li><b>Language:</b> English (official), Shona, and Ndebele.</li>
        <li><b>Getting around:</b> Taxis, ride-hailing apps, and car rentals are convenient.</li>
        <li>
          <b>Packing essentials:</b> Lightweight clothes for daytime, jackets for cooler evenings,
          and sturdy shoes for exploration.
        </li>
        <li>
          <b>Safety:</b> Harare is known for its friendly locals and welcoming atmosphere.
        </li>
      </ul>
      <p>
        For more detailed insights, travel guides, and tips to make the most of your Zimbabwe
        holidays, check out our <a href="/blogs">Panama Travel Blog</a>. From the best time to visit Harare to hidden gems across the country, our blog provides expert advice and inspiration to help you plan a memorable trip.
      </p>
    </div>

    <div>
      <h2>Why Choose Panamatravel.co.uk for Harare Travel</h2>
      <ul>
        <li>Affordable Harare flights and hotel bookings.</li>
        <li>
          Customized Zimbabwe holidays packages for families, business travelers, and adventure
          seekers.
        </li>
        <li>Expert advice on Harare sightseeing and local attractions.</li>
        <li>Hassle-free ticketing and 24/7 customer support.</li>
      </ul>
      <p>
        Make your Harare journey unforgettable—book your Harare tickets today with
        <a href="/">panamatravel.co.uk</a> and start exploring the heart of Zimbabwe.
      </p>
    </div>
  `},
    'hong-kong': {
        name: "Hong Kong",
        title: "Flights to Hong Kong | Vibrant City Adventures",
        description: "Book flights to Hong Kong from the UK. Enjoy amazing deals and easy booking with Panama Travel UK.",
        images: [
            `${IMAGEKIT_URL}/pthome/hongkong.webp?updatedAt=1780069925004,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/hongkong.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/hongkong.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
      <h2>Hong Kong Travel: Discover Asia’s Dynamic Urban Paradise</h2>
      <p>
        Welcome to Hong Kong, a vibrant global city where towering skyscrapers, scenic harbours, cultural temples, and world-class shopping come together to create an unforgettable travel experience. From bustling street markets to peaceful mountain views, Hong Kong travel offers something for every type of visitor.
        Whether you’re planning a family holiday, a business trip, or an adventurous getaway, panamatravel.co.uk brings you the best Hong Kong flights and complete travel packages to make your journey effortless and memorable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Hong Kong</h2>
        <h3>Victoria Peak (The Peak)</h3>
        <Image
            src={${IMAGEKIT_URL} + "/victoria-peak.jpg"}
            alt="Victoria Peak Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience breathtaking panoramic views of Hong Kong’s skyline, harbour, and lush mountains from the city’s highest point. Take the iconic Peak Tram for a scenic ride.
        </p>

        <h3>Tsim Sha Tsui Promenade & Avenue of Stars</h3>
        <Image
            src={${IMAGEKIT_URL} + "/tsim-sha-tsui-promenade.jpg"}
            alt="Tsim Sha Tsui Promenade Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Walk along the harbourfront for stunning views of the skyline and enjoy the Avenue of Stars, dedicated to Hong Kong’s legendary film industry.
        </p>

        <h3>Hong Kong Disneyland</h3>
        <Image
            src={${IMAGEKIT_URL} + "/hong-kong-disneyland.jpg"}
            alt="Hong Kong Disneyland Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Perfect for families, Disneyland offers magical rides, themed lands, parades, and live shows—an adventure for both children and adults.
        </p>

        <h3>Ngong Ping 360 & Big Buddha</h3>
        <Image
            src={${IMAGEKIT_URL} + "/ngong-ping-360-big-buddha.jpg"}
            alt="Ngong Ping 360 & Big Buddha Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Ride the Ngong Ping cable car to Lantau Island and visit the Tian Tan Big Buddha, Po Lin Monastery, and the tranquil Ngong Ping Village.
        </p>

        <h3>Temple Street Night Market</h3>
        <Image
            src={${IMAGEKIT_URL} + "/temple-street-night-market.jpg"}
            alt="Temple Street Night Market Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            A must-visit for street shopping, local snacks, and live entertainment. Explore this bustling market for a taste of authentic Hong Kong life.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Hong Kong</h2>
        <p>
            Hong Kong offers an impressive array of hotels, from luxury skyscrapers in Central to trendy boutique stays in Kowloon and budget-friendly options across the city. Panamatravel.co.uk provides exclusive deals on hotel bookings for a comfortable and convenient stay.
        </p>
        <p>
            If you're planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Asia and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Hong Kong</h2>
        <p>
            Fly conveniently to Hong Kong International Airport (HKG) with our cheap Hong Kong flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Hong Kong tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Asia.</li>
        </ul>
        <p>
            Book early to secure the best Hong Kong flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Hong Kong holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Hong Kong</h2>
        <p>
            Taste some of the world’s best Cantonese food, including dim sum, roast goose, and street food. Hong Kong's nightlife is famous for rooftop bars, Lan Kwai Fong, and cultural shows. Shop for luxury brands, electronics, and unique souvenirs at global malls and traditional street markets.
        </p>
      </div>

      <div>
        <h2>Hong Kong Adventures & Day Trips</h2>
        <p>
            Beyond the skyscrapers, Hong Kong offers incredible outdoor experiences:
        </p>
        <ul>
            <li>Dragon’s Back Hike: One of the world’s most scenic urban hikes with stunning coastal views.</li>
            <li>Lamma Island: A car-free island perfect for seafood, walking trails, and quiet beaches.</li>
            <li>Repulse Bay & Beaches: Relax at Hong Kong’s beautiful beaches with soft sands and scenic views.</li>
            <li>Sai Kung: Explore hiking trails, boat tours, and fresh seafood in this natural coastal gem.</li>
            <li>Ocean Park Hong Kong: An amazing marine-themed amusement park with thrilling rides and wildlife exhibits.</li>
        </ul>
        <p>
            Whether you're a nature lover, adventure seeker, or cultural traveler, Hong Kong holidays offer endless fun and exploration.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Hong Kong</h2>
        <ul>
            <li><b>Best time to visit:</b> October to March (pleasant weather).</li>
            <li><b>Currency:</b> Hong Kong Dollar (HKD).</li>
            <li><b>Language:</b> Cantonese (English widely spoken).</li>
            <li><b>Transport:</b> MTR, buses, trams, taxis, and ferries.</li>
            <li>
                <b>Essentials:</b> Lightweight clothing, comfortable walking shoes, Octopus Card (for transport/payments).
            </li>
            <li><b>Safety:</b> Hong Kong is very safe, with excellent public transport and friendly locals.</li>
        </ul>
        <p>
            For more Hong Kong travel guides and tips, visit our <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Hong Kong Travel</h2>
        <p>At Panama Travel, we strive to deliver seamless Hong Kong travel experiences through:</p>
        <ul>
            <li>Affordable Hong Kong flights and hotel bookings.</li>
            <li>Tailored holiday packages for families, couples, business travelers, and adventure seekers.</li>
            <li>Expert guidance on Hong Kong attractions, activities, and sightseeing.</li>
            <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <p>
            Make your Hong Kong adventure unforgettable—book your Hong Kong tickets and travel packages today with
            <b>panamatravel.co.uk</b> and start exploring Asia’s most exciting city.
        </p>
        <p>
            Learn more about our services on our <a href="/about-us/"><b>About Us</b></a> page.
        </p>
      </div>
    </section>
  `},
    islamabad: {
        name: "Islamabad",
        title: "Flights to Islamabad | Reliable Travel from the UK",
        description: "Fly from the UK to Islamabad with trusted service and affordable fares. Book your flight easily with Panama Travel UK.",
        images: [
            `${IMAGEKIT_URL}/pthome/islamabad-one.webp?updatedAt=1780997257449,tr=w-1400,fo-auto`,
            `${IMAGEKIT_URL}/pthome/islamabad-two.webp?updatedAt=1780997257897,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/islamabad.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Islamabad Travel: Discover Pakistan’s Scenic Capital</h2>
    <p>
        Welcome to Islamabad, Pakistan’s modern and picturesque capital, where contemporary city life meets breathtaking natural beauty. From stunning architecture to serene lakes and lush hills, Islamabad travel offers an unforgettable experience for every type of traveler. Whether you’re planning a family holiday, a business trip, or a cultural adventure, panamatravel.co.uk brings you the best deals on Islamabad flights and complete travel packages to make your Pakistan journey smooth and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Islamabad</h2>
        <h3>Faisal Mosque</h3>
        <Image
            src={${IMAGEKIT_URL} + "/faisal-mosque.png"}
            alt="Faisal Mosque Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit the iconic Faisal Mosque, a masterpiece of modern Islamic architecture and the largest mosque in Pakistan, offering panoramic views of the city and Margalla Hills.
        </p>

        <h3>Margalla Hills National Park</h3>
        <Image
            src={${IMAGEKIT_URL} + "/margalla-hills-national-park.png"}
            alt="Margalla Hills National Park Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Hike or trek through the Margalla Hills, enjoying scenic trails, wildlife spotting, and stunning vistas of Islamabad. Ideal for nature lovers and adventure seekers.
        </p>

        <h3>Rawal Lake</h3>
        <Image
            src={${IMAGEKIT_URL} + "/rawal-lake.png"}
            alt="Rawal Lake Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax by Rawal Lake, a beautiful spot for boating, picnics, and family outings amidst serene waters and lush surroundings.
        </p>

        <h3>Centaurus Mall</h3>
        <Image
            src={${IMAGEKIT_URL} + "/centaurus-mall.png"}
            alt="Centaurus Mall Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience modern shopping and entertainment at Centaurus Mall, featuring international brands, dining options, and a lively urban atmosphere.
        </p>

        <h3>Daman-e-Koh & Pir Sohawa</h3>
        <Image
            src={${IMAGEKIT_URL} + "/daman-e-koh-pir-sohawa.png"}
            alt="Daman-e-Koh & Pir Sohawa Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Take in panoramic city views from Daman-e-Koh and enjoy fine dining and hiking opportunities at Pir Sohawa, located in the Margalla Hills.
        </p>

    </div>

    <div>
        <h2>Islamabad Hotels & Accommodation</h2>
        <p>
            Whether you’re traveling for leisure or business, Islamabad hotels offer a variety of accommodation options, from luxury resorts and boutique hotels to family-friendly lodges. Panamatravel.co.uk provides the best deals on hotel bookings and ensures your stay is comfortable and convenient.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Pakistan and beyond.
        </p>
    </div>
    <div>
        <h2>Flights & Ticket Booking to Islamabad</h2>
        <p>
            Fly conveniently to Islamabad via Islamabad International Airport (ISB) with our cheap Islamabad flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Islamabad tickets easily online.</li>
            <li>Access group, family, and last-minute deals.</li>
            <li>Enjoy 24/7 customer support for booking changes and travel assistance.</li>
            <li>Explore multi-city trips across Pakistan and South Asia.</li>
        </ul>
        <p>
            Book early to secure the best Islamabad flights and tailored travel packages.
        </p>
        <p>
            If you have questions about your flights or need help planning your Pakistan holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a seamless booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Islamabad</h2>
        <p>
            Taste authentic Pakistani cuisine such as biryani, nihari, chapli kebab, and traditional sweets. Islamabad also offers international dining options, vibrant cafes, and modern shopping centers for Islamabad shopping, including Centaurus Mall and local markets. The city has a growing Islamabad nightlife scene with rooftop cafes and cultural events.
        </p>
    </div>

    <div>
        <h2>Pakistan Adventures from Islamabad</h2>
        <p>
            Islamabad sightseeing is just the beginning. Use the city as a base to explore:
        </p>
        <ul>
            <li><b>Murree</b> – scenic hill station and hiking trails.</li>
            <li><b>Taxila</b> – ancient Buddhist ruins and UNESCO heritage sites.</li>
            <li><b>Ayub National Park</b> – family-friendly outdoor activities.</li>
        </ul>
        <p>
            Whether you’re an adventure seeker, cultural traveler, or family tourist, Pakistan holidays from Islamabad provide endless possibilities.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Islamabad</h2>
        <ul>
            <li><b>Best time to visit Islamabad:</b> March to May and September to November for pleasant weather.</li>
            <li><b>Currency:</b> Pakistani Rupee (PKR); credit cards are widely accepted in major areas.</li>
            <li><b>Language:</b> Urdu (official), English is widely spoken.</li>
            <li><b>Getting around:</b> Taxis, ride-hailing apps, and car rentals are convenient.</li>
            <li>
                <b>Packing essentials:</b> Light clothing for daytime, a jacket for cooler evenings, and comfortable shoes for sightseeing.
            </li>
            <li><b>Safety:</b> Islamabad is known for its friendly locals and safe environment.</li>
        </ul>
        <p>
            For more travel guides, tips, and insights to make the most of your Pakistan journey, check out our <a href='/blogs'>Panama Travel Blog</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panamatravel.co.uk for Islamabad Travel</h2>
        <p>At panamatravel.co.uk, we specialize in delivering seamless travel experiences to Islamabad and across Pakistan. Our services include:</p>
        <ul>
            <li>Affordable Islamabad flights and hotel bookings.</li>
            <li>
                Customized Pakistan holiday packages for families, business travelers, and adventure seekers.
            </li>
            <li>Expert advice on Islamabad sightseeing and local attractions.</li>
            <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <p>
            Make your Islamabad journey unforgettable, book your Islamabad tickets today with
            <b>panamatravel.co.uk</b>, and start exploring the scenic capital of Pakistan.
        </p>
    </div>
</section>
  `},
    japan: {
        name: "Japan",
        title: "Flights to Japan | Explore Culture & Innovation",
        description: "Book your flight to Japan from the UK. Discover culture, technology, and great fares with Panama Travel.",
        images: [
            // `${IMAGEKIT_OLD_URL}/japan1.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/japan2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/japan5.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Japan Travel: Explore Asia’s Timeless Beauty & Modern Wonders</h2>
    <p>
        Welcome to Japan, a captivating destination where ancient traditions meet futuristic innovation. From peaceful temples and cherry blossoms to neon-lit cities and world-class cuisine, Japan travel promises an unforgettable experience for every traveler. Whether you’re planning a cultural escape, a family holiday, or a luxury adventure, panamatravel.co.uk brings you the best deals on Japan flights and complete travel packages to make your journey seamless and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Japan</h2>
        <h3>Tokyo – The City of the Future</h3>
        <Image
            src={${IMAGEKIT_URL} + "/tokyo-city-of-the-future.jpg"}
            alt="Tokyo City Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Dive into Tokyo’s vibrant mix of modern skyscrapers, bustling shopping districts, and cultural gems. Visit Shibuya Crossing, Senso-ji Temple, Ginza, and teamLab Planets for a futuristic art experience.
        </p>

        <h3>Kyoto – The Heart of Tradition</h3>
        <Image
            src={${IMAGEKIT_URL} + "/kyoto-heart-of-tradition.jpg"}
            alt="Kyoto Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore Kyoto’s iconic temples, tea houses, bamboo forests, and geisha districts. Must-see spots include Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion), and Arashiyama.
        </p>

        <h3>Osaka – Food, Fun & Nightlife</h3>
        <Image
            src={${IMAGEKIT_URL} + "/osaka-food-fun-nightlife.jpg"}
            alt="Osaka Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Known as Japan’s kitchen, Osaka offers delicious street food, neon nightlife, and attractions like Osaka Castle and Universal Studios Japan.
        </p>

        <h3>Nara – Land of Friendly Deer</h3>
        <Image
            src={${IMAGEKIT_URL} + "/nara-land-of-friendly-deer.jpg"}
            alt="Nara Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit Nara Park and meet Japan’s famous friendly deer. Explore Todai-ji Temple, home to one of the largest bronze Buddha statues in the world.
        </p>

        <h3>Mount Fuji & Hakone</h3>
        <Image
            src={${IMAGEKIT_URL} + "/mount-fuji-hakone.jpg"}
            alt="Mount Fuji & Hakone Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Take in breathtaking views of Mount Fuji, enjoy scenic boat rides across Lake Ashi, or relax in the traditional onsen (hot springs) of Hakone.
        </p>
    </div>

    <div>
        <h2>Hotels & Accommodation in Japan</h2>
        <p>
            Japan offers a diverse range of accommodations, from traditional ryokans and modern capsule hotels to luxury high-rise suites in Tokyo. Panamatravel.co.uk helps you find the perfect stay, whether you're looking for budget-friendly options or a luxury experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Asia and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Japan</h2>
        <p>
            Fly conveniently to Japan via major international airports in Tokyo (NRT/HND), Osaka (KIX), and Nagoya (NGO) with our cheap Japan flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Japan tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Japan and Asia.</li>
        </ul>
        <p>
            Book early to secure the best Japan flights and travel packages tailored to your itinerary.
        </p>
        <p>
            If you have questions about your flights or need help planning your Japan holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Japan</h2>
        <p>
            Taste the world-famous Japanese food, including sushi, ramen, tempura, and street food at places like Dotonbori in Osaka. Experience vibrant nightlife with karaoke, izakayas, and themed bars in Tokyo and Osaka. Enjoy world-class shopping from luxury brands in Ginza to unique electronics in Akihabara.
        </p>
    </div>

    <div>
        <h2>Japan Adventures & Experiences</h2>
        <p>
            Japan tourism offers unique experiences beyond city sightseeing:
        </p>
        <ul>
            <li>Bullet Train (Shinkansen): Travel across the country at high speed for a unique and efficient experience.</li>
            <li>Onsen (Hot Springs): Relax and unwind in Japan’s traditional hot springs found in Hakone, Beppu, and Nikko.</li>
            <li>Cultural Experiences: Join tea ceremonies, kimono dress-up sessions, or sumo wrestling events for an authentic Japanese experience.</li>
        </ul>
        <p>
            Whether you're an adventure seeker, culture lover, or leisure traveler, Japan holidays offer endless possibilities.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Japan</h2>
        <ul>
            <li><b>Best time to visit:</b> March–May (spring) and October–November (autumn) for pleasant weather and beautiful scenery.</li>
            <li><b>Currency:</b> Japanese Yen (JPY).</li>
            <li><b>Language:</b> Japanese (English is spoken in major cities and tourist areas).</li>
            <li><b>Transportation:</b> Japan Rail (JR), metro systems, and bullet trains are highly efficient. Consider a Japan Rail Pass for extensive travel.</li>
            <li>
                <b>Packing essentials:</b> Comfortable shoes, power adapter, and layered clothing for changing weather.
            </li>
            <li><b>Safety:</b> Japan is extremely safe with helpful and polite locals.</li>
        </ul>
        <p>
            For more expert insights and travel tips, explore our <a href='/blogs'>Panama Travel Blog</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panama Travel for Japan Travel?</h2>
        <p>At Panama Travel, we specialize in providing seamless and stress-free travel experiences to Japan. Our services include:</p>
        <ul>
            <li>Affordable Japan flights and hotel bookings.</li>
            <li>
                Customized Japan holiday itineraries for families, business travelers, and adventure seekers.
            </li>
            <li>Expert guidance on sightseeing, food, culture, and transport.</li>
            <li>Hassle-free ticketing and 24/7 travel support.</li>
        </ul>
        <p>
            Discover the perfect combination of tradition, modernity, nature, and culture in this beautiful island nation. 
        </p>
        <p><a href="/contact-us/">Book your Japan tickets</a> today with <b>panamatravel.co.uk</b> and begin exploring the wonders of Japan.</p>
      </div>
    </section>
  `
    },
    jeddah: {
        name: "Jeddah",
        title: "Flights to Jeddah | Travel Comfortably",
        description: "Fly to Jeddah from the UK at low fares. Enjoy comfortable travel and expert booking help with Panama Travel.",
        images: [
            `${IMAGEKIT_URL}/pthome/jeddah-one.webp?updatedAt=1780997257210,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/saudia2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/saudia3.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Jeddah Travel: Discover Saudi Arabia’s Gateway to the Red Sea</h2>
    <p>
        Welcome to Jeddah, the vibrant coastal city of Saudi Arabia where modern architecture meets deep-rooted heritage. Known for its stunning beaches, historic districts, and world-famous Red Sea coastline, Jeddah travel promises culture, relaxation, and adventure all in one.
        Whether you’re planning an Umrah trip, a family vacation, a business visit, or a luxury getaway, panamatravel.co.uk offers the best deals on Jeddah flights and complete travel packages, making your journey smooth, affordable, and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Jeddah</h2>
        <h3>Al Balad – The Historic Old Town</h3>
        <Image
            src={${IMAGEKIT_URL} + "/al-balad-historic-old-town.jpg"}
            alt="Al Balad – The Historic Old Town Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore Al Balad, a UNESCO World Heritage Site famous for its ancient coral-stone buildings, traditional souks, and narrow alleyways. The district offers an authentic look into old Arabian life and culture.
        </p>

        <h3>Jeddah Corniche</h3>
        <Image
            src={${IMAGEKIT_URL} + "/jeddah-corniche.jpg"}
            alt="Jeddah Corniche Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax at the Jeddah Corniche, a scenic waterfront stretching along the Red Sea. Enjoy landscaped parks, walking paths, beaches, cafés, and breathtaking views—especially during sunset.
        </p>

        <h3>King Fahd’s Fountain</h3>
        <Image
            src={${IMAGEKIT_URL} + "/king-fahds-fountain.jpg"}
            alt="King Fahd’s Fountain Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit the iconic King Fahd’s Fountain, the tallest seawater fountain in the world. Its spectacular night-time water display is one of Jeddah’s most famous landmarks.
        </p>

        <h3>Jeddah Waterfront</h3>
        <Image
            src={${IMAGEKIT_URL} + "/jeddah-waterfront.jpg"}
            alt="Jeddah Waterfront Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
        A modern and beautifully designed public space featuring recreational areas, cycling tracks, kids’ play zones, restaurants, and crystal-clear coastal views—perfect for families.
        </p>
        
        <h3>Mall of Arabia & Red Sea Mall</h3>
        <Image
            src={${IMAGEKIT_URL} + "/mall-of-arabia-red-sea-mall.jpg"}
            alt="Red Sea Mall Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Shop for international brands, dine at top restaurants, and enjoy entertainment options at Jeddah’s most popular malls—ideal for leisure travelers and shopping lovers.
        </p>
    </div>

    <div>
        <h2>Jeddah Hotels & Accommodation</h2>
        <p>
            Jeddah offers a wide variety of stays, from luxury hotels and resorts overlooking the Red Sea and business hotels near the city center to budget-friendly options. Panama Travel helps you secure the best hotel bookings for a comfortable and convenient experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Saudi Arabia and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Jeddah</h2>
        <p>
            Fly conveniently to King Abdulaziz International Airport (JED) with our cheap Jeddah flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Jeddah tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Saudi Arabia and the Middle East.</li>
        </ul>
        <p>
            Book early to secure the best Jeddah flights and travel packages tailored to your spiritual or leisure journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Saudi Arabia holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Jeddah</h2>
        <p>
            Indulge in authentic Saudi Arabian cuisine, including Kabsa and Mandi, along with fresh seafood from the Red Sea and international dining. Jeddah has modern cafes, restaurants, and family entertainment centers. Shopping ranges from traditional gold and spice markets (souks) in Al Balad to luxury brands in its modern malls.
        </p>
    </div>

    <div>
        <h2>Saudi Adventures & Day Trips from Jeddah</h2>
        <p>
            Jeddah is an ideal starting point to explore other major destinations in the Kingdom:
        </p>
        <ul>
            <li>**Makkah**: The holy city, only 1 hour away.</li>
            <li>**Madina**: 4–5 hours by road or a short domestic flight.</li>
            <li>**Taif**: Cool climate, mountain views, and rose farms.</li>
            <li>**Al Wahbah Crater**: A natural volcanic wonder.</li>
            <li>**Obhur Beach**: Beautiful private and public beaches.</li>
        </ul>
        <p>
            Whether you're traveling for Umrah, cultural experiences, nature tours, or family holidays, your Saudi adventure begins in Jeddah.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Jeddah</h2>
        <ul>
            <li><b>Best time to visit:</b> November to March (pleasant cooler weather).</li>
            <li><b>Currency:</b> Saudi Riyal (SAR).</li>
            <li><b>Language:</b> Arabic (English widely understood).</li>
            <li><b>Transportation:</b> Taxis, ride-hailing apps, and car rentals are easily available.</li>
            <li><b>Packing essentials:</b> Light clothing, sunscreen, modest attire for cultural sites.</li>
            <li><b>Safety:</b> Jeddah is very safe with friendly locals, clean public areas, and excellent security.</li>
        </ul>
        <p>
            For more travel guides and tips, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panama Travel for Jeddah Travel</h2>
        <p>
            At panamatravel.co.uk, we provide seamless and affordable travel experiences for Jeddah and across Saudi Arabia. Our services include:
        </p>
        <ul>
            <li>Cheap Jeddah flights and hotel bookings.</li>
            <li>Customized Saudi Arabia travel packages.</li>
            <li>Expert guidance on attractions, beaches, and cultural sites.</li>
            <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <h3>Make your Saudi Arabia trip unforgettable</h3> 
        <p>
            <a href="/contact-us/">Book your Jeddah</a> flights and travel packages today with
            <b>panamatravel.co.uk</b> and start exploring the beautiful coastal city of Jeddah.
        </p>
    </div>
</section>
  `
    },
    johannesburg: {
        name: "Johannesburg",
        title: "Flights to Johannesburg | Great UK Deals",
        description: "Book flights to Johannesburg from the UK. Get affordable fares, reliable service, and easy booking today.",
        images: [
            `${IMAGEKIT_URL}/pthome/johannesburg.webp?updatedAt=1780924549581,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/johannesburg2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/johannesburg.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
      <h2>Johannesburg Travel: Discover South Africa’s Golden City</h2>
      <p>
        Welcome to Johannesburg—South Africa’s vibrant, fast-growing, and culturally rich metropolis. Known as the “City of Gold,” Johannesburg combines history, urban energy, world-class attractions, and breathtaking landscapes. Whether you're planning a family vacation, a business trip, or an adventure-filled getaway, panamatravel.co.uk brings you the best Johannesburg flights, hotel packages, and travel deals to make your South Africa journey smooth, exciting, and unforgettable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Johannesburg</h2>
        <h3>Apartheid Museum</h3>
        <Image
            src={${IMAGEKIT_URL} + "/apartheid-museum.jpg"}
            alt="Apartheid Museum Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit one of South Africa’s most important landmarks. The Apartheid Museum offers a powerful and insightful journey through the nation’s past, showcasing moving exhibits and historical displays that highlight the struggle for freedom.
        </p>

        <h3>Gold Reef City</h3>
        <Image
            src={${IMAGEKIT_URL} + "/gold-reef-city.jpg"}
            alt="Gold Reef City Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Perfect for families and thrill-seekers, Gold Reef City combines amusement rides, entertainment shows, restaurants, and historical tours of an authentic gold mine—an unforgettable Johannesburg experience.
        </p>

        <h3>Soweto & Vilakazi Street</h3>
        <Image
            src={${IMAGEKIT_URL} + "/soweto-vilakazi-street.jpg"}
            alt="Soweto & Vilakazi Street Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore Soweto, South Africa’s cultural heart. Visit Vilakazi Street—the only street in the world where two Nobel Peace Prize winners lived (Nelson Mandela and Desmond Tutu). Enjoy street food, local music, and guided township tours.
        </p>

        <h3>Johannesburg Zoo</h3>
        <Image
            src={${IMAGEKIT_URL} + "/johannesburg-zoo.jpg"}
            alt="Johannesburg Zoo Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            One of Africa’s largest and oldest zoos, offering a fun-filled day with exotic animals, picnic spots, and educational experiences.
        </p>

        <h3>Pilanesberg & Kruger National Park</h3>
        <Image
            src={${IMAGEKIT_URL} + "/pilanesberg-kruger-national-park.jpg"}
            alt="Pilanesberg & Kruger National Park Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Embark on a Big Five safari experience at nearby Pilanesberg National Park or the world-famous Kruger National Park, offering incredible wildlife sightings, scenic drives, and adventure activities.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Johannesburg</h2>
        <p>
            Johannesburg offers accommodations ranging from luxury hotels in Sandton and boutique guesthouses in the city to budget-friendly stays near the airport. Panama Travel helps you secure the best hotel bookings for a comfortable and convenient experience.
        </p>
        <p>
            If you're planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across South Africa and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Johannesburg</h2>
        <p>
            Fly conveniently to O. R. Tambo International Airport (JNB) with our cheap Johannesburg flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Johannesburg tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across South Africa and the continent.</li>
        </ul>
        <p>
            Book early to secure the best Johannesburg flights and travel packages tailored to your South African adventure.
        </p>
        <p>
            If you have questions about your flights or need help planning your Johannesburg holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Johannesburg</h2>
        <p>
            Experience a blend of local and international dining, from traditional South African 'braai' (barbeque) and Soweto street food to high-end restaurants in Sandton. The nightlife is vibrant, featuring jazz clubs, chic bars, and entertainment venues. Shopping is world-class, offering luxury brands, local crafts, and unique souvenirs at malls like Sandton City and traditional markets.
        </p>
      </div>

      <div>
        <h2>Johannesburg Adventures & Day Trips</h2>
        <p>
            Whether you're into history, wildlife, culture, or adventure, Johannesburg promises endless things to do and discover:
        </p>
        <ul>
            <li>**Safaris:** Embark on a Big Five safari experience at Pilanesberg or Kruger National Park.</li>
            <li>**Lion & Safari Park:** Get close to lions, cheetahs, giraffes, and other wildlife—an exciting experience for families.</li>
            <li>**The Cradle of Humankind:** Explore this UNESCO World Heritage Site with cave tours and archaeological discoveries.</li>
            <li>**Kimberley (Day Trip):** Visit the historic Big Hole and learn about South Africa's diamond rush history.</li>
        </ul>
      </div>

      <div>
        <h2>Travel Tips for Johannesburg</h2>
        <ul>
            <li><b>Best time to visit:</b> May to September (cool, dry winter—great for safaris).</li>
            <li><b>Currency:</b> South African Rand (ZAR).</li>
            <li><b>Language:</b> English widely spoken; Zulu & Afrikaans also common.</li>
            <li><b>Getting around:</b> Uber, taxis, Gautrain, and car rentals.</li>
            <li>
                <b>Safety:</b> Stay aware of surroundings, especially at night—Johannesburg is friendly but fast-paced.
            </li>
            <li><b>Essentials:</b> Light layers, comfortable shoes, sunscreen, and a jacket for cooler evenings.</li>
        </ul>
        <p>
            For more South Africa travel guides, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Johannesburg Travel?</h2>
        <p>At Panama Travel, we specialize in creating seamless, affordable, and customized travel experiences to Johannesburg and other South African destinations. Our services include:</p>
        <ul>
            <li>Budget-friendly Johannesburg flights & hotel deals.</li>
            <li>Tailor-made holiday packages for families, couples, and business travelers.</li>
            <li>Expert travel advice on sightseeing, safari trips, and city experiences.</li>
            <li>Smooth ticketing process and 24/7 customer support.</li>
        </ul>
        <h3>Make your Johannesburg journey unforgettable</h3>
        <p>
          <a href="/contact-us/"><b>Book your Johannesburg</b></a> tickets today with <b>panamatravel.co.uk</b> and begin your adventure in South Africa’s most dynamic and culturally rich city.
        </p>
      </div>
    </section>
  `},
    khartoum: {
        name: "Khartoum",
        title: "Flights to Khartoum | Travel Deals & Support",
        description: "Find cheap flights to Khartoum from the UK. Get great deals, expert help, and hassle-free booking with Panama Travel.",
        images: [
            `${IMAGEKIT_URL}/pthome/khartoum.webp?updatedAt=1780924549462,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/khartoum2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/khartoum.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
      <h2>Khartoum Travel: Explore Sudan’s Historic & Cultural Capital</h2>
      <p>
          Welcome to Khartoum, the vibrant capital of Sudan where ancient history meets modern charm. Located at the confluence of the Blue and White Nile, Khartoum offers a unique blend of archaeology, culture, bustling markets, and warm Sudanese hospitality. Whether you’re planning a cultural journey, a family trip, or a business visit, Panama Travel brings you the best deals on Khartoum flights and tailored travel packages to make your Sudan adventure smooth, safe, and memorable.
      </p>

      <div>
          <h2>Top Attractions & Sightseeing in Khartoum</h2>
          <h3>Souq Omdurman</h3>
          <Image
              src={${IMAGEKIT_URL} + "/souq-omdurman.jpg"}
              alt="Souq Omdurman Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Immerse yourself in local life at Souq Omdurman, Sudan’s largest and most vibrant market. Shop for handmade crafts, leather goods, spices, traditional jewelry, and cultural souvenirs while enjoying authentic Sudanese street life.
          </p>

          <h3>The National Museum of Sudan</h3>
          <Image
              src={${IMAGEKIT_URL} + "/national-museum-sudan.jpg"}
              alt="The National Museum of Sudan Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Discover thousands of years of history through ancient Nubian artifacts, temples, sculptures, and archaeological treasures. Perfect for travelers interested in history, culture, and heritage.
          </p>

          <h3>The Nile Confluence Point</h3>
          <Image
              src={${IMAGEKIT_URL} + "/nile-confluence-point.jpg"}
              alt="The Nile Confluence Point Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Visit the breathtaking spot where the Blue and White Nile rivers meet—a picturesque location ideal for photography, relaxing boat rides, and soaking in scenic river views.
          </p>

          <h3>Tuti Island</h3>
          <Image
              src={${IMAGEKIT_URL} + "/tuti-island.jpg"}
              alt="Tuti Island Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Escape the busy city at Tuti Island, a peaceful green haven in the heart of Khartoum. Enjoy countryside views, quiet walks, and a refreshing break by the water.
          </p>

          <h3>Al-Mogran Family Park</h3>
          <p>
              A favorite spot for families and tourists, offering green spaces, playgrounds, and views of the Nile.
          </p>

          <h3>Khalifa House Museum</h3>
          <p>
              Explore artifacts from the Mahdist era and learn about Sudan's historical struggles at this preserved historical site, offering a deep look into Sudanese heritage.
          </p>

          <h3>Sudan Presidential Palace Museum</h3>
          <p>
              Offers insights into Sudan’s modern history, featuring state gifts, presidential memorabilia, and historic artifacts.
          </p>
      </div>

      <div>
          <h2>Hotels & Accommodation in Khartoum</h2>
          <p>
              Khartoum offers diverse accommodation, from riverside luxury hotels and modern business suites to cozy guesthouses. Panama Travel helps you secure the best deals on hotel bookings for a comfortable stay.
          </p>
          <p>
              If you're planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Africa and beyond.
          </p>
      </div>

      <div>
          <h2>Flights & Ticket Booking to Khartoum</h2>
          <p>
              Fly conveniently to Khartoum International Airport (KRT) with our cheap Khartoum flights and flexible booking options. With Panama Travel, you can:
          </p>
          <ul>
              <li>Book Khartoum flights online with ease.</li>
              <li>Access discounted group and family flight packages.</li>
              <li>Secure last-minute and flexible fare options.</li>
              <li>Get 24/7 customer assistance for changes, cancellations & support.</li>
              <li>Plan multi-city trips across Africa.</li>
          </ul>
          <p>
              Book early to grab the best deals on Khartoum flights and complete travel packages tailored to your itinerary.
          </p>
          <p>
              If you have questions about your flights or need help planning your Sudan holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
          </p>
      </div>

      <div>
          <h2>Dining, Nightlife & Shopping in Khartoum</h2>
          <p>
              Taste authentic Sudanese cuisine such as a'asida, kisra, and local stews, alongside fresh Nile fish and traditional sweets. Experience Khartoum’s growing nightlife with cultural performances, cafes, and riverfront dining. Shop for souvenirs, crafts, and gold at local markets and souqs.
          </p>
      </div>

      <div>
          <h2>Sudan Adventures from Khartoum</h2>
          <p>
              Khartoum sightseeing is just the beginning. Use the city as a base to explore nearby adventures:
          </p>
          <ul>
              <li>The Pyramids of Meroe – a UNESCO World Heritage site and ancient royal city.</li>
              <li>Jebel Barkal – an ancient temple mountain and archaeological site.</li>
              <li>Dinder National Park – Ideal for nature lovers and wildlife enthusiasts, offering safari adventures and scenic landscapes.</li>
          </ul>
          <p>
              Whether you're an adventure traveler, a history enthusiast, or a cultural explorer, Sudan holidays from Khartoum offer endless possibilities.
          </p>
      </div>

      <div>
          <h2>Travel Tips for Khartoum</h2>
          <ul>
              <li><b>Best time to visit Khartoum:</b> November to March (cooler weather)</li>
              <li><b>Currency:</b> Sudanese Pound (SDG)</li>
              <li><b>Language:</b> Arabic (official); English is also spoken in many areas</li>
              <li><b>Getting around:</b> Taxis, ride-hailing apps, and private drivers</li>
              <li>
                  <b>Packing essentials:</b> Lightweight clothes, sun protection, comfortable footwear
              </li>
              <li><b>Safety:</b> Khartoum is welcoming, but travelers should stay aware of local guidelines and respect cultural norms</li>
          </ul>
          <p>
              For more travel tips and destination guides, explore our <a href='/blogs'>Panama Travel Blog</a>.
          </p>
      </div>

      <div>
          <h2>Why Choose Panama Travel for Khartoum Travel?</h2>
          <p>At Panama Travel, we aim to deliver seamless travel experiences to Khartoum and destinations across Africa. Our services include:</p>
          <ul>
              <li>Affordable Khartoum flights and hotels.</li>
              <li>Customized holiday packages for all travel styles.</li>
              <li>Expert guidance on sightseeing, markets, riverfront attractions, and local culture.</li>
              <li>Hassle-free ticketing and 24/7 dedicated customer support.</li>
          </ul>
          <p>
              Make your Khartoum trip unforgettable with the perfect blend of culture, history, and warm hospitality.
          </p>
          <p>
              <a href="/contact-us/">Book your Khartoum tickets</a> today at <b>panamatravel.co.uk</b> and start exploring one of Africa’s most fascinating capitals.
          </p>
      </div>
    </section>
  `},
    malaysia: {
        name: "Malaysia",
        title: "Flights to Malaysia | Explore Southeast Asia",
        description: "Fly from the UK to Malaysia at great prices. Explore Asia's beauty with Panama Travel's trusted flight deals.",
        images: [
            `${IMAGEKIT_URL}/pthome/malaysia-two.webp?updatedAt=1780997257613,tr=w-1400,fo-auto`,
            `${IMAGEKIT_URL}/pthome/malaysia-one.webp?updatedAt=1780997257796,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/malaysia2.webp?tr=w-1400,fo-auto`,
        ],
        content: `
      <section>
      <h2>Malaysia Travel: Discover Asia’s Most Diverse Destination</h2>
      <p>
        Welcome to Malaysia — a country where modern cities meet lush rainforests, pristine beaches, and a vibrant blend of cultures. Whether you're exploring the skyscrapers of Kuala Lumpur, relaxing on tropical islands, or wandering through historic towns, Malaysia travel offers something for every type of traveler.
        At panamatravel.co.uk, we bring you the best deals on Malaysia flights, hotels, and complete holiday packages, ensuring your journey across this Southeast Asian paradise is smooth, convenient, and unforgettable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Malaysia</h2>
        <h3>Kuala Lumpur – The Heart of Malaysia</h3>
        <Image
            src={${IMAGEKIT_URL} + "/kuala-lumpur-heart-of-malaysia.jpg"}
            alt="Kuala Lumpur Petronas Towers Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Start your adventure in Kuala Lumpur, home to the world-famous Petronas Twin Towers, lively street markets, modern shopping malls, and delicious street food at Jalan Alor.
        </p>

        <h3>Langkawi – The Jewel of Kedah</h3>
        <Image
            src={${IMAGEKIT_URL} + "/langkawi-jewel-of-kedah.jpg"}
            alt="Langkawi Island Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax on stunning beaches, ride the SkyCab cable car, explore mangroves, and enjoy duty-free shopping on this breathtaking island.
        </p>

        <h3>Penang – Culture, Food & Heritage</h3>
        <Image
            src={${IMAGEKIT_URL} + "/penang-culture-food-heritage.jpg"}
            alt="Penang George Town Street Art Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit George Town, a UNESCO World Heritage Site known for its colonial buildings, vibrant street art, and legendary Malaysian cuisine.
        </p>

        <h3>Cameron Highlands – Tea Plantations & Cool Climates</h3>
        <Image
            src={${IMAGEKIT_URL} + "/cameron-highlands-tea-plantations.jpg"}
            alt="Cameron Highlands Tea Plantation Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Take a break from the tropical heat and enjoy rolling green hills, tea estates, strawberry farms, and scenic hiking trails.
        </p>

        <h3>Malacca – A Walk Through History</h3>
        <Image
            src={${IMAGEKIT_URL} + "/malacca-walk-through-history.jpg"}
            alt="Malacca Jonker Street Image"
            width={1300}
            height={900}
        />

        <h3>Borneo (Sabah & Sarawak) – Wildlife & Rainforests</h3>
        <Image
            src={${IMAGEKIT_URL} + "/borneo-wildlife-rainforests.jpg"}
            alt="Malacca Jonker Street Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Meet orangutans, explore ancient rainforests, climb Mount Kinabalu, and visit indigenous tribal villages.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Malaysia</h2>
        <p>
            Malaysia offers diverse stays, from luxury hotels in Kuala Lumpur and beachfront resorts in Langkawi to charming guesthouses in Penang. Panama Travel helps you secure the best hotel bookings for a comfortable and convenient experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Asia and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Malaysia</h2>
        <p>
            Fly conveniently to major airports like Kuala Lumpur International Airport (KLIA) and Penang International Airport (PEN) with our cheap Malaysia flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Malaysia tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Malaysia and Southeast Asia.</li>
        </ul>
        <p>
            Book early to secure the best Malaysia flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Malaysia holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Malaysia</h2>
        <p>
            Taste the world-famous Malaysian food, a blend of Malay, Chinese, and Indian cuisine, including Nasi Lemak, Laksa, and Satay. Enjoy vibrant nightlife, from rooftop bars in Kuala Lumpur to live music venues. Shop for luxury brands, local crafts, and unique souvenirs at global malls and night markets.
        </p>
      </div>

      <div>
        <h2>Malaysia Adventures & Day Trips</h2>
        <p>
            Malaysia offers a world of adventures beyond city sightseeing:
        </p>
        <ul>
            <li>Taman Negara – one of the world’s oldest rainforests for jungle trekking.</li>
            <li>Mount Kinabalu – challenging trekking and unique wildlife experiences in Borneo.</li>
            <li>Tioman & Perhentian Islands – idyllic spots for snorkeling, diving, and serene beaches.</li>
            <li>Genting Highlands – theme parks, casinos, and cool mountain weather, a fun escape from the city heat.</li>
        </ul>
        <p>
            Whether you’re a family traveler, cultural explorer, nature lover, or beach enthusiast, Malaysia has endless experiences waiting for you.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Malaysia</h2>
        <ul>
            <li><b>Best time to visit:</b> December to March (West Coast) or June to September (East Coast) for the best beach weather.</li>
            <li><b>Currency:</b> Malaysian Ringgit (MYR).</li>
            <li><b>Languages:</b> Malay (official), English widely spoken.</li>
            <li><b>Getting around:</b> Taxis, Grab (ride-hailing), buses, and domestic flights are convenient.</li>
            <li>
                <b>Packing essentials:</b> Lightweight clothes, swimwear, comfortable shoes, and rain protection.
            </li>
            <li><b>Safety:</b> Malaysia is generally safe and tourist-friendly.</li>
        </ul>
        <p>
            For more guides and tips, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose Panamatravel.co.uk for Malaysia Travel</h2>
        <p>At Panama Travel, we specialize in creating effortless travel experiences to Malaysia and other top destinations. Our services include:</p>
        <ul>
            <li>Affordable Malaysia flights & hotel bookings.</li>
            <li>Tailor-made Malaysia holiday packages.</li>
            <li>Expert guidance on Malaysia sightseeing and attractions.</li>
            <li>Hassle-free ticketing and 24/7 customer support.</li>
        </ul>
        <p>
            Make your Malaysia journey unforgettable — book your Malaysia tickets now on
            <b>panamatravel.co.uk</b> and explore the beauty, culture, and excitement of one of Asia’s most vibrant destinations.
        </p>
        <p>
            Learn more about us on our <a href="/about-us/"><b>About Us</b></a> page.
        </p>
      </div>
    </section>
  `},
    maldives: {
        name: "Maldives",
        title: "Flights to Maldives | Paradise Awaits You",
        description: "Fly to the Maldives with Panama Travel. Enjoy tropical beauty, low fares, and simple booking from the UK.",
        images: [`${IMAGEKIT_URL}/pthome/maldives.webp?updatedAt=1780069922128,tr=w-1400,fo-auto`],
        content: `
              <section>
                <h2>Maldives Travel: Explore Paradise in the Indian Ocean</h2>
                <p>
                    Welcome to the Maldives, a breathtaking tropical escape known for turquoise waters, white-sand beaches, luxury resorts, and vibrant marine life. Whether you’re looking for a romantic honeymoon, a relaxing beach getaway, or an adventure-filled holiday, Maldives travel offers an unforgettable experience for every traveler. With panamatravel.co.uk, you can enjoy the best deals on Maldives flights, resorts, and holiday packages to make your island getaway smooth and memorable.
                </p>

                <div>
                    <h2>Top Attractions & Sightseeing in the Maldives</h2>
                    <h3>Malé City</h3>
                    <Image
                        src={${IMAGEKIT_URL} + "/male-city.jpg"}
                        alt="Malé City Image"
                        width={1300}
                        height={900}
                    />
                    <br />
                    <p>
                        Begin your Maldivian journey in the capital city. Explore bustling markets, colorful mosques, and the beautiful Malé waterfront. Visit the Maldives Fish Market, Grand Friday Mosque, and Republic Square.
                    </p>

                    <h3>Private Island Resorts</h3>
                    <Image
                        src={${IMAGEKIT_URL} + "/private-island-resorts.jpg"}
                        alt="Private Island Resorts Image"
                        width={1300}
                        height={900}
                    />
                    <br />
                    <p>
                        Relax on world-famous private islands offering unmatched luxury. Overwater villas, infinity pools, and personalized experiences make these resorts ideal for honeymoons and family getaways.
                    </p>

                    <h3>Vaadhoo Island – Sea of Stars</h3>
                    <Image
                        src={${IMAGEKIT_URL} + "/vaadhoo-sea-of-stars.jpg"}
                        alt="Vaadhoo Island Sea of Stars Image"
                        width={1300}
                        height={900}
                    />
                    <br />
                    <p>
                        Witness the magical glow of bioluminescent plankton lighting up the shoreline at night—one of the Maldives’ most iconic natural wonders.
                    </p>

                    <h3>Banana Reef</h3>
                    <Image
                        src={${IMAGEKIT_URL} + "/banana-reef.jpg"}
                        alt="Banana Reef Image"
                        width={1300}
                        height={900}
                    />
                    <br />
                    <p>
                        One of the best diving spots in the Maldives, Banana Reef is known for corals, overhangs, and colorful marine life. Perfect for scuba divers and snorkelers.
                    </p>

                    <h3>Maafushi Island</h3>
                    <Image
                        src={${IMAGEKIT_URL} + "/maafushi-island.jpg"}
                        alt="Maafushi Island Image"
                        width={1300}
                        height={900}
                    />
                    <br />
                    <p>
                        Experience affordable island stays, sandy beaches, and thrilling water sports such as jet skiing and snorkeling.
                    </p>
                </div>

                <div>
                    <h2>Hotels & Accommodation in the Maldives</h2>
                    <p>
                        The Maldives is synonymous with luxury, offering everything from exclusive overwater bungalows and private resort islands to guesthouses on local islands. Panamatravel.co.uk provides tailored resort bookings and accommodations to fit any preference, ensuring a truly relaxing stay.
                    </p>
                    <p>
                        If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across the Indian Ocean and beyond.
                    </p>
                </div>

                <div>
                    <h2>Flights & Ticket Booking to the Maldives</h2>
                    <p>
                        Fly conveniently to Velana International Airport (MLE) near Malé with our affordable Maldives flights and flexible booking options. With panamatravel.co.uk, you can:
                    </p>
                    <ul>
                        <li>Book Maldives tickets easily online.</li>
                        <li>Access discounted flight packages for honeymoons and families.</li>
                        <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
                        <li>Explore multi-destination trips combining the Maldives with nearby regions.</li>
                    </ul>
                    <p>
                        Book early to secure the best Maldives flights and travel packages tailored to your romantic escape or family adventure.
                    </p>
                    <p>
                        If you have questions about your flights or need help planning your Maldives holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
                    </p>
                </div>

                <div>
                    <h2>Dining, Nightlife & Shopping in the Maldives</h2>
                    <p>
                        Dine on world-class cuisine in unique settings, including underwater restaurants, private beach dinners, and local Maldivian specialties like Mas Huni (fish salad) and Garudhiya (fish soup). Nightlife is generally focused on resort entertainment, including beach bars, live music, and cultural shows. Shopping is concentrated in Malé, where you can find local crafts, souvenirs, and high-end jewelry.
                    </p>
                </div>

                <div>
                    <h2>Maldives Adventures & Experiences</h2>
                    <p>
                        Your Maldivian adventure extends beyond the beach with these unforgettable experiences:
                    </p>
                    <ul>
                        <li>Water Sports: Enjoy thrilling activities like jet skiing, parasailing, surfing, and underwater scooters.</li>
                        <li>Dolphin Watching & Sunset Cruises: Relax on a traditional dhoni boat and enjoy magical sunsets and dolphin sightings.</li>
                        <li>Sandbank Picnics & Island Hopping: Visit secluded sandbanks, enjoy private beach picnics, and explore local island culture.</li>
                    </ul>
                    <p>
                        Whether you’re a honeymoon couple, nature lover, or luxury traveler, Maldives holidays offer endless possibilities.
                    </p>
                </div>

                <div>
                    <h2>Travel Tips for the Maldives</h2>
                    <ul>
                        <li><b>Best time to visit:</b> November to April (dry season) for the best weather.</li>
                        <li><b>Currency:</b> Maldivian Rufiyaa (MVR); USD is widely accepted in resorts.</li>
                        <li><b>Language:</b> Dhivehi; English is widely spoken in resorts and tourist areas.</li>
                        <li><b>Transportation:</b> Speedboats, seaplanes, ferries, and domestic flights are used to travel between islands.</li>
                        <li>
                            <b>Packing essentials:</b> Swimwear, light clothing, sunscreen, and coral-safe sunblock to protect marine life.
                        </li>
                        <li><b>Safety:</b> The Maldives is very safe, especially in private and resort islands.</li>
                    </ul>
                    <p>
                        For more tips and travel guides to plan your perfect island escape, explore our <a href='/blogs/'>Panama Travel Blogs</a>.
                    </p>
                </div>

                <div>
                    <h2>Why Choose Panama Travel for Maldives Travel?</h2>
                    <p>At Panama Travel, we aim to provide seamless, stress-free, and luxurious travel experiences to the Maldives. Our services include:</p>
                    <ul>
                        <li>Affordable Maldives flights and resort bookings.</li>
                        <li>Tailored Maldives holiday packages for couples, families, and luxury travelers.</li>
                        <li>Expert advice on beaches, water activities, and sightseeing.</li>
                        <li>Hassle-free ticketing and 24/7 customer support.</li>
                    </ul>
                    <p>
                        Make your dream island holiday come true. Book your Maldives tickets now with <b>panamatravel.co.uk</b> and begin exploring the tropical paradise of the Maldives.
                    </p>
                    <p>
                        Learn more about our team and services on our <a href="/about-us/"><b>About Us</b></a> page.
                    </p>
                </div>
            </section>
            `
    },
//     mauritius: {
//         name: "Mauritius",
//         title: "",
//         description: "",
//         images: [
//             `${IMAGEKIT_URL}/pthome/mauritius.webp?updatedAt=1780997257944,tr=w-1400,fo-auto`,
//             `${IMAGEKIT_URL}/pthome/mauritius2.webp?updatedAt=1780997257864,tr=w-1400,fo-auto`,
//         ],
//         content: `
//     <h2>Discover Mauritius: Your Dream Island Escape</h2>
//     Mauritius is a dazzling Indian Ocean gem, famed for its white sand beaches, turquoise lagoons, lush mountain interiors, and a welcoming multicultural spirit. Whether you’re planning a relaxing holiday, an adventurous honeymoon, or a family escape, Mauritius promises extraordinary experiences and unforgettable memories. Secure your flight tickets now and get ready to explore paradise!

//     <h3>Top Attractions & Unique Sights</h3>
//     <ul>
//       <li><strong>Grand Baie</strong>: A vibrant coastal village known for its lively nightlife, shopping, and stunning beaches.</li>
//       <li><strong>Le Morne Brabant</strong>: A UNESCO World Heritage mountain offering breathtaking hikes and panoramic views.</li>
//       <li><strong>Île aux Cerfs</strong>: This small island off the east coast is famous for water sports, golf, and beach picnics.</li>
//       <li><strong>Black River Gorges National Park</strong>: Home to rainforests, waterfalls, and unique wildlife for hiking and adventure lovers.</li>
//       <li><strong>Pamplemousses Botanical Garden</strong>: Discover giant water lilies and rare plant species in this historic garden.</li>
//       <li><strong>Chamarel</strong>: See the colorful Seven-Coloured Earths and the impressive Chamarel Waterfall.</li>
//       <li><strong>Port Louis</strong>: The bustling capital offers a blend of modern shops, markets, museums, and colonial architecture.</li>
//       <li><strong>Flic en Flac</strong>: Famous for its long white beach, crystal-clear waters, and laid-back vibe.</li>
//     </ul>

//     <h3>Flight Tickets to Mauritius</h3>
//     <p>
//       Mauritius is served by Sir Seewoosagur Ramgoolam International Airport (MRU), with direct and connecting flights from Europe, Asia, Africa, and beyond. We provide exclusive deals on economy and premium class tickets, with flexible options for families, groups, and solo travelers.
//     </p>
//     <ul>
//       <li>Book early to secure the best fares to Mauritius.</li>
//       <li>Take advantage of our special offers on last-minute flights and all-inclusive holiday packages.</li>
//       <li>Our team is here 24/7 to assist with ticket changes, upgrades, and travel guidance.</li>
//     </ul>

//     <h3>Mauritius for Couples, Families, and Adventurers</h3>
//     <p>
//       Mauritius caters to every kind of traveler. Couples can indulge in luxury resorts, private beach dinners, and sunset cruises. Families enjoy safe swimming beaches, fun parks, and marine activities. For the adventurous, there’s hiking, kite-surfing, scuba diving, deep-sea fishing, and mountain biking.
//     </p>
//     <ul>
//       <li>Snorkel or dive among colorful coral reefs and shipwrecks.</li>
//       <li>Explore tea plantations and taste local Mauritian flavors.</li>
//       <li>Swim with dolphins, spot giant tortoises, or take a glass-bottom boat tour.</li>
//       <li>Discover the island’s cultural festivals and friendly local communities.</li>
//     </ul>

//     <h3>Dining, Culture, and Shopping</h3>
//     <p>
//       Mauritius is renowned for its diverse cuisine—a mix of Creole, French, Indian, and Chinese influences. Savor fresh seafood, spicy curries, tropical fruits, and delicious street food. Explore local markets for handcrafted souvenirs, textiles, and spices.
//     </p>

//     <h3>Travel Tips for Mauritius</h3>
//     <ul>
//       <li>Best time to visit: May to December for dry, pleasant weather.</li>
//       <li>Currency: Mauritian Rupee (MUR).</li>
//       <li>Languages: English, French, and Creole are widely spoken.</li>
//       <li>Transport: Taxis, buses, and car rentals are readily available.</li>
//       <li>Bring sunscreen and light clothing for tropical conditions.</li>
//       <li>Mauritius is safe and family-friendly, with high standards of hospitality.</li>
//     </ul>

//     <h3>Book Your Mauritius Holiday Now</h3>
//     <p>
//       Discover exclusive flight deals and tailored packages for Mauritius. Let us help you create the perfect island getaway with easy ticket booking, personalized service, and local travel expertise. Start your dream Mauritius holiday with us today!
//     </p>
//     <p>
//       <strong>Keywords:</strong> Mauritius travel, Mauritius flight tickets, holidays in Mauritius, Mauritius hotels, Mauritius sightseeing, Mauritius honeymoon, Mauritius family packages, Mauritius beaches, Mauritius attractions, Mauritius activities, flights to Mauritius, book Mauritius flights, cheap Mauritius tickets.
//     </p>
//   `},
    mogadishu: {
        name: "Mogadishu",
        title: "Flights to Mogadishu | Reliable Air Travel",
        description: "Find reliable flights to Mogadishu from the UK. Book affordable fares and travel with confidence.",
        images: [
            `${IMAGEKIT_URL}/pthome/mogadishu.jpg?updatedAt=1781006632244,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/mogadishu.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/mogadishu.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Mogadishu Travel: Discover Somalia’s Historic Coastal Capital</h2>
    <p>
        Welcome to Mogadishu, the vibrant capital of Somalia, where ancient heritage meets the beauty of the Indian Ocean. Known for its lively markets, white-sand beaches, and centuries-old architecture, Mogadishu offers a unique cultural journey for travelers seeking authentic experiences.
        Whether you're planning a family vacation, a business trip, or an off-the-beaten-path adventure, panamatravel.co.uk brings you the best discounts on Mogadishu flights, hotels, and complete Somalia travel packages—making your trip smooth, safe, and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Mogadishu</h2>
        <h3>Bakara Market</h3>
        <Image
            src={${IMAGEKIT_URL} + "/bakara-market.jpg"}
            alt="Bakara Market Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Step into Bakara Market, one of East Africa’s largest and most historic markets. From textiles and spices to local crafts and daily essentials, it offers a real insight into Somali culture and everyday life.
        </p>

        <h3>Liido Beach</h3>
        <Image
            src={${IMAGEKIT_URL} + "/liido-beach.jpg"}
            alt="Liido Beach Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax and unwind at Liido Beach—a stunning stretch of coastline known for its turquoise waters, beach cafés, seafood grills, and weekend family gatherings. Enjoy swimming, sunbathing, and beautiful ocean views.
        </p>

        <h3>The Tomb of the Unknown Soldier</h3>
        <Image
            src={${IMAGEKIT_URL} + "/tomb-of-the-unknown-soldier.jpg"}
            alt="Tomb of the Unknown Soldier Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            A symbol of national pride, the Tomb of the Unknown Soldier is a key landmark honoring Somalia’s history. It’s an important site for cultural understanding and photography.
        </p>

        <h3>Mogadishu Lighthouse</h3>
        <Image
            src={${IMAGEKIT_URL} + "/mogadishu-lighthouse.jpg"}
            alt="Mogadishu Lighthouse Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit the iconic Mogadishu Lighthouse near the old port, a historic structure reflecting the city’s maritime legacy. The surrounding area offers views of the Indian Ocean.
        </p>

        <h3>Arba’a Rukun Mosque</h3>
        <Image
            src={${IMAGEKIT_URL} + "/arba-rukun-mosque.jpg"}
            alt="Arba’a Rukun Mosque Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            One of the oldest mosques in Mogadishu, Arba’a Rukun Mosque dates back to the 13th century. Its architecture and history make it a must-see for culture and heritage lovers.
        </p>

        <h3>National Museum of Somalia</h3>
        <p>
            Explore Somalia’s rich history, culture, and archaeology through artifacts and exhibits (check for current opening status before visiting).
        </p>
    </div>

    <div>
        <h2>Hotels & Accommodation in Mogadishu</h2>
        <p>
            Mogadishu is working to rebuild its tourism infrastructure, offering secure and comfortable hotels, particularly along the coast and in central business districts. Panama Travel helps you secure safe and convenient hotel bookings for your stay.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Africa and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Mogadishu</h2>
        <p>
            Fly conveniently to Aden Adde International Airport (MGQ) with our affordable Mogadishu flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Mogadishu tickets easily online.</li>
            <li>Access discounted flight packages for groups and families.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across East Africa.</li>
        </ul>
        <p>
            Book early to secure the best Mogadishu flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Somalia holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Culture & Shopping in Mogadishu</h2>
        <p>
            Mogadishu offers a rich dining scene, focusing on traditional Somali cuisine with strong influences from East African and Arabian flavors. Try camel meat, spicy stews, fresh seafood, and local Somali tea. Shopping is centered around markets like Bakara, offering unique textiles, gold, spices, and local crafts.
        </p>
    </div>

    <div>
        <h2>Somalia Adventures & Day Trips</h2>
        <p>
            Explore the diversity of Somalia beyond the capital:
        </p>
        <ul>
            <li>**Jazeera Beach:** A more secluded beach destination, perfect for relaxation.</li>
            <li>**Afgooye Town:** A historic and agricultural hub.</li>
            <li>**Somali coastal towns:** Explore fishing villages, coral reefs, and scenic beaches.</li>
        </ul>
        <p>
            Whether you're a cultural traveler, business visitor, or coastal explorer, Somalia holidays offer endless experiences.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Mogadishu</h2>
        <ul>
            <li><b>Best time to visit:</b> December to March and July to September for pleasant weather.</li>
            <li><b>Currency:</b> Somali Shilling (SOS).</li>
            <li><b>Language:</b> Somali (official), English widely understood.</li>
            <li><b>Transport:</b> Taxis, private car rentals, and hotel-arranged transport.</li>
            <li><b>Packing essentials:</b> Lightweight clothing, sun protection, modest wear for cultural respects.</li>
            <li><b>Safety:</b> Travel with registered guides, choose secure hotels, and follow local regulations. Mogadishu locals are friendly and welcoming to tourists.</li>
        </ul>
        <p>
            For more tips and travel guides, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Mogadishu Travel</h2>
        <p>At panamatravel.co.uk, we are committed to offering safe, comfortable, and seamless travel experiences to Mogadishu and across Somalia. Our services include:</p>
        <ul>
            <li>Affordable Mogadishu flights and hotel bookings.</li>
            <li>Tailor-made Somalia holiday packages.</li>
            <li>Expert advice on Mogadishu attractions, beaches, and local experiences.</li>
            <li>Secure ticketing and round-the-clock customer support.</li>
        </ul>
        <h3>Make your Somalia journey unforgettable</h3>
        <p>
          <a href="/contact-us/">Book your Mogadishu</a> flights and travel packages with <b>panamatravel.co.uk</b> and start exploring one of East Africa’s most captivating coastal capitals.
        </p>
        
    </div>
</section>
  `},
    morocco: {
        name: "Morocco",
        title: "Flights to Morocco | Explore the Magic of North Africa",
        description: "Discover Morocco with our affordable flights from the UK. Enjoy comfort, culture, and easy booking with Panama Travel.",
        images: [
            // `${IMAGEKIT_OLD_URL}/morocco1.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/morocco2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/morocco3.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
      <h2>Morocco Travel: Explore the Magic of North Africa</h2>
      <p>
          Welcome to Morocco, a country of rich culture, stunning landscapes, and timeless charm. From the vibrant streets of Marrakech to the serene beaches of Essaouira, Morocco travel offers an unforgettable experience for every type of traveler. Whether you’re planning a family holiday, an adventurous getaway, or a cultural journey, panamatravel.co.uk provides the best deals on Morocco flights and complete travel packages to make your Moroccan adventure seamless.
      </p>

      <div>
          <h2>Top Attractions & Sightseeing in Morocco</h2>
          <h3>Marrakech Tours</h3>
          <p>
              Explore the bustling souks, historic palaces, and colorful gardens of Marrakech. A guided Marrakech tour is perfect for immersing yourself in Moroccan culture and architecture.
          </p>

          <h3>Sahara Camel Trek</h3>

          <Image
              src={${IMAGEKIT_URL} + "/sahara-camel-trek.png"}
              alt="Sahara Camel Trek Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Experience the iconic Sahara Desert on a camel trek, enjoying the golden dunes, starry nights, and breathtaking desert landscapes, a true adventure for nature lovers.
          </p>

          <h3>Fes Medina</h3>
          <Image
              src={${IMAGEKIT_URL} + "/fes-madina.png"}
              alt="Fes Madina Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Step back in time in the ancient Fes Medina, a UNESCO World Heritage site filled with narrow alleyways, traditional crafts, and historic mosques.
          </p>

          <h3>Chefchaouen Blue City</h3>
          <Image
              src={${IMAGEKIT_URL} + "/chefchaouen-blue-city-image.png"}
              alt="Chefchaouen Blue City Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Wander through the picturesque streets of Chefchaouen, known as the Blue City, famous for its vibrant blue-painted buildings and charming ambiance.
          </p>

          <h3>Atlas Mountains</h3>
          <Image
              src={${IMAGEKIT_URL} + "/atlas-mountains-image.png"}
              alt="Atlas Mountains Image"
              width={1300}
              height={900}
          />
          <br />
          <p>
              Adventure seekers can hike or drive through the majestic Atlas Mountains, offering panoramic views, Berber villages, and scenic trekking routes.
          </p>

          <h3>Casablanca</h3>
          <p>
              Visit Casablanca, Morocco’s economic hub, home to the impressive Hassan II Mosque, modern shopping districts, and lively nightlife.
          </p>
          <h3>Essaouira Beaches</h3>
          <p>
              Relax on the golden sands of Essaouira beaches, perfect for water sports, surfing, or simply soaking up the sun.
          </p>

      </div>

      <div>
          <h2>Morocco Hotels & Accommodation</h2>
          <p>
              Whether you’re traveling for leisure or adventure, Morocco hotels cater to all preferences, from luxury resorts and boutique riads to family-friendly accommodations. Panamatravel.co.uk ensures you get the best deals on hotel bookings and a comfortable stay.
          </p>
          <p>
              If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Morocco and beyond.
          </p>
      </div>
      <div>
          <h2>Flights & Ticket Booking to Morocco</h2>
          <p>
              Fly conveniently to Morocco via major international airports in Marrakech, Casablanca, and Fes with our cheap tickets to Morocco. With panamatravel.co.uk, you can:
          </p>
          <ul>
              <li>Book Morocco tickets easily online.</li>
              <li>Access group, family, and last-minute deals.</li>
              <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
              <li>Explore multi-city trips across Morocco and North Africa.</li>
          </ul>
          <p>
              Book early to secure the best Morocco flights and travel packages tailored to your itinerary.
          </p>
          <p>
              If you have questions about your flights or need help planning your Morocco holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
          </p>
      </div>

      <div>
          <h2>Dining, Nightlife & Shopping in Morocco</h2>
          <p>
              Taste authentic Moroccan food such as tagine, couscous, pastilla, and traditional mint tea. Enjoy bustling markets, souks, and modern shopping districts for Moroccan shopping, offering local crafts, rugs, leather goods, and spices. Morocco also has vibrant nightlife in Marrakech, Casablanca, and coastal cities, including rooftop lounges, live music, and cultural performances.
          </p>
      </div>

      <div>
          <h2>Morocco Adventures from Major Cities</h2>
          <p>
              Moroccan tourism is more than city visits. Use Morocco as a base to explore:
          </p>
          <ul>
              <li>Camel trekking and desert camping in the Sahara.</li>
              <li>Hiking and trekking in the Atlas Mountains.</li>
              <li>Beach activities in Essaouira and Agadir.</li>
              <li>Cultural immersion in historic medinas of Fes and Marrakech.</li>
          </ul>
          <p>
              Whether you’re an adventure seeker, cultural traveler, or family traveler, Morocco holidays provide endless possibilities.
          </p>
      </div>

      <div>
          <h2>Travel Tips for Morocco</h2>
          <ul>
              <li><em>Best time to visit Morocco:</em> March to May and September to November for pleasant weather.</li>
              <li><em>Currency:</em> Moroccan Dirham (MAD); major credit cards widely accepted.</li>
              <li><em>Language:</em> Arabic and Berber (official), French is widely spoken.</li>
              <li><em>Getting around:</em> Taxis, ride-hailing apps, trains, and car rentals are convenient.</li>
              <li>
                  <em>Packing essentials:</em> Lightweight clothes for daytime, a scarf for sun protection, and comfortable walking shoes.
              </li>
              <li><em>Safety:</em> Morocco is generally safe for travelers, with welcoming locals and tourist-friendly cities.</li>
          </ul>
          <p>
              For more detailed insights, travel guides, and tips to make the most of your Moroccan journey, check out our <a href='/blogs'>Panama Travel Blog</a>.
          </p>
      </div>

      <div>
          <h2>Why Choose Panamatravel.co.uk for Morocco Travel</h2>
          <p>At panamatravel.co.uk, we specialize in delivering seamless travel experiences to Morocco and beyond. Our services include:</p>
          <ul>
              <li>Affordable Morocco flights and hotel bookings.</li>
              <li>
                  Customized Morocco holiday packages for families, adventure seekers, and cultural travelers.
              </li>
              <li>Expert advice on Marrakech tours, Sahara camel treks, and other top Morocco attractions.</li>
              <li>Hassle-free ticketing and 24/7 customer support.</li>
          </ul>
          <p>
              Make your Morocco journey unforgettable, book your Morocco tickets today with
              <strong>panamatravel.co.uk</strong> and start exploring the magic of North Africa.
          </p>
      </div>
    </section>
  `
    },
    nairobi: {
        name: "Nairobi",
        title: "Flights to Nairobi | Explore East Africa",
        description: "Find affordable flights to Nairobi from the UK. Enjoy smooth booking and reliable travel with Panama Travel.",
        images: [
            `${IMAGEKIT_URL}/pthome/nairobi.webp?updatedAt=1780924549853,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/nairobi.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/nairobi.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h2>Nairobi Travel: Discover Kenya’s Dynamic Capital</h2>
    <p>
        Welcome to Nairobi, the vibrant capital of Kenya where urban energy meets breathtaking wildlife and rich cultural heritage. From modern cityscapes and historic landmarks to nearby national parks and lively markets, Nairobi travel promises an unforgettable experience for every type of traveler.
        Whether you’re planning a family holiday, a business trip, or an adventurous safari getaway, Panama Travel offers the best deals on Nairobi flights and complete travel packages for a smooth and memorable journey.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Nairobi</h2>
        <h3>Nairobi National Park</h3>
        <Image
            src={${IMAGEKIT_URL} + "/nairobi-national-park.jpg"}
            alt="Nairobi National Park Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience wildlife like never before at Nairobi National Park, the only national park in the world located within a capital city. Spot lions, giraffes, rhinos, and zebras with the city skyline in the background.
        </p>

        <h3>Giraffe Centre</h3>
        <Image
            src={${IMAGEKIT_URL} + "/giraffe-centre.jpg"}
            alt="Giraffe Centre Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit the Giraffe Centre, home to the endangered Rothschild giraffes. This educational attraction allows visitors to interact with giraffes while learning about wildlife conservation efforts in Kenya.
        </p>

        <h3>David Sheldrick Wildlife Trust</h3>
        <Image
            src={${IMAGEKIT_URL} + "/david-sheldrick-wildlife-trust.jpg"}
            alt="David Sheldrick Wildlife Trust Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover the inspiring work of the David Sheldrick Wildlife Trust, where orphaned elephant calves are rescued and rehabilitated before being released back into the wild.
        </p>

        <h3>Karen Blixen Museum</h3>
        <Image
            src={${IMAGEKIT_URL} + "/karen-blixen-museum.jpg"}
            alt="Karen Blixen Museum Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
        Explore the former home of Danish author Karen Blixen. The Karen Blixen Museum offers insight into Kenya’s colonial history and literary heritage.
        </p>
        
        <h3>Maasai Market</h3>
        <Image
            src={${IMAGEKIT_URL} + "/maasai-market.jpg"}
            alt="Maasai Market Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
        Shop for handmade jewelry, artwork, clothing, and souvenirs at the Maasai Market, one of the best places to experience local craftsmanship and culture.
        </p>
    </div>

    <div>
        <h2>Nairobi Hotels & Accommodation</h2>
        <p>
            Nairobi offers everything from luxurious safari-themed lodges and five-star business hotels to cozy guesthouses. Panama Travel helps you secure the best hotel deals for a comfortable and memorable stay.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Africa and the globe.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Nairobi</h2>
        <p>
            Fly conveniently to Jomo Kenyatta International Airport (NBO) with our affordable Nairobi flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Nairobi tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Kenya and East Africa.</li>
        </ul>
        <p>
            Book early to secure the best Nairobi flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Kenya holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Nairobi</h2>
        <p>
            Nairobi’s culinary scene is fantastic, offering local Kenyan dishes (like <b>Nyama Choma</b>), fresh coffee, and world-class international cuisine. Enjoy a vibrant nightlife with modern clubs, rooftop bars, and traditional music venues. Shopping ranges from the local crafts at the Maasai Market to luxury retail at The Junction Mall and Yaya Centre.
        </p>
    </div>

    <div>
        <h2>Kenya Adventures & Day Trips from Nairobi</h2>
        <p>
            Nairobi is the perfect starting point to explore more iconic Kenyan destinations, including:
        </p>
        <ul>
            <li><b>Maasai Mara National Reserve:</b> world-famous safaris and wildlife.</li>
            <li><b>Mount Kenya:</b> trekking and scenic landscapes.</li>
            <li><b>Lake Naivasha:</b> boat rides and birdwatching.</li>
            <li><b>Amboseli National Park:</b> views of Mount Kilimanjaro.</li>
        </ul>
        <p>
            Whether you’re an adventure lover, wildlife enthusiast, or family traveler, Kenya holidays from Nairobi offer endless opportunities.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Nairobi</h2>
        <ul>
            <li>
                <b>Best time to visit:</b> June to October & January to February (dry seasons).
            </li>
            <li><b>Currency:</b> Kenyan Shilling (KES).</li>
            <li><b>Language:</b> English and Swahili (official languages).</li>
            <li>
                <b>Getting around:</b> Taxis, ride-hailing apps, and car rentals.
            </li>
            <li>
                <b>Packing essentials:</b> Comfortable clothing, light jacket, sunscreen, walking shoes.
            </li>
            <li>
                <b>Safety:</b> Nairobi is visitor-friendly; basic travel precautions are recommended.
            </li>
        </ul>
        <p>
            For more destination insights and travel advice, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Nairobi Travel</h2>
        <p>
            At panamatravel.co.uk, we provide reliable and hassle-free travel services to Nairobi and beyond. Our offerings include:
        </p>
        <ul>
            <li>Affordable Nairobi flights and hotel bookings.</li>
            <li>Customized Kenya holiday packages for families, businesses, and safari travelers.</li>
            <li>Expert guidance on Nairobi sightseeing and excursions.</li>
            <li>Secure bookings with 24/7 customer support.</li>
        </ul>
        <h3>Make your African adventure unforgettable</h3>
        <p>
            <a href="/contact-us/">Book your Nairobi</a> flights and travel packages today with
            <b>panamatravel.co.uk</b> and explore the heart of Kenya with confidence and ease.
        </p>
    </div>
</section>
  `
    },
    'new-york': {
        name: "New York",
        title: "Flights to New York | Discover the Big Apple",
        description: "Fly to New York from the UK with Panama Travel. Enjoy great fares, smooth booking, and the best flight deals today.",
        images: [
            `${IMAGEKIT_URL}/pthome/newyork-two.webp?updatedAt=1780997257105,tr=w-1400,fo-auto`,
            `${IMAGEKIT_URL}/pthome/newyork-one.webp?updatedAt=1780997257590,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/newyork.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
        <h2>New York Travel: Explore the City That Never Sleeps</h2>
        <p>
            Welcome to New York City, the iconic metropolis that never sleeps, where towering skyscrapers, historic landmarks, and vibrant neighborhoods await. From bustling streets to world-class entertainment, New York travel offers something for every traveler. Whether you’re planning a family holiday, a business trip, or a cultural getaway, panamatravel.co.uk brings you the best deals on NYC flights and complete travel packages to make your New York journey seamless.
        </p>

        <div>
            <h2>Top Attractions & Sightseeing in New York</h2>
            <h3>Statue of Liberty</h3>
            <Image
                src={${IMAGEKIT_URL} + "/statue-of-liberty.png"}
                alt="Statue of Liberty Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Visit the world-famous Statue of Liberty, a symbol of freedom and one of New York’s most iconic landmarks. Perfect for history buffs and photographers alike.
            </p>
        </div>

        <div>
            <h3>Times Square</h3>
            <Image
                src={${IMAGEKIT_URL} + "/times-square.png"}
                alt="Times Square Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Experience the neon lights, street performers, and energetic atmosphere of Times Square, the heartbeat of Manhattan, and a must-see for first-time visitors.
            </p>
        </div>

        <div>
            <h3>Central Park</h3>
            <Image
                src={${IMAGEKIT_URL} + "/central-park.png"}
                alt="Central Park Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Relax and unwind at Central Park, offering walking trails, boating, gardens, and family-friendly activities in the heart of the city.
            </p>
        </div>

        <div>
            <h3>Broadway Tickets & Shows</h3>
            <p>
                Catch a world-class performance with Broadway tickets, featuring musicals, plays, and shows that define New York’s entertainment scene.
            </p>
            <h3>Empire State Building & Observation Decks</h3>
            <p>
                Marvel at panoramic views from the Empire State Building or other observation decks like Top of the Rock for an unforgettable NYC skyline experience.
            </p>
            <h3>Shopping in New York</h3>
            <p>
                Shop till you drop at shopping in New York, from Fifth Avenue boutiques to famous department stores like Macy’s and Saks, and trendy neighborhoods like SoHo.
            </p>
        </div>

        <div>
            <h2>New York Hotels & Accommodation</h2>
            <p>
                Whether you’re traveling for business, leisure, or a family vacation, New York hotels cater to every preference, from luxury suites and boutique stays to budget-friendly options. Panamatravel.co.uk provides the best deals on hotel bookings and ensures your stay is comfortable and memorable.
            </p>
            <p>
                If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across the USA and beyond.
            </p>
        </div>
        <div>
            <h2>Flights & Ticket Booking to New York</h2>
            <p>
                Fly conveniently to New York via John F. Kennedy International Airport (JFK) or Newark Liberty International Airport (EWR) with our cheap New York flights and flexible booking options. With panamatravel.co.uk, you can:
            </p>
            <ul>
                <li>Book NYC tickets easily online.</li>
                <li>Access group, family, and last-minute deals.</li>
                <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
                <li>Explore multi-city trips across the USA.</li>
            </ul>
            <p>
                Book early to secure the best NYC flights and travel packages tailored to your itinerary.
            </p>
            <p>
                If you have questions about your flights or need help planning your New York holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
            </p>
        </div>

        <div>
            <h2>Dining, Nightlife & Entertainment in New York</h2>
            <p>
                Taste diverse cuisines in New York, from classic American dishes to international flavors. The city offers lively nightlife, rooftop bars, jazz clubs, and trendy cafes. Enjoy a culinary adventure while exploring world-famous neighborhoods like Greenwich Village, Chinatown, and Little Italy.
            </p>
        </div>

        <div>
            <h2>USA Adventures from New York</h2>
            <p>
                NYC sightseeing is just the beginning. Use the city as a base to explore:
            </p>
            <ul>
                <li>Niagara Falls – a natural wonder within reach.</li>
                <li>Washington D.C. – history, museums, and national landmarks.</li>
                <li>Boston – rich in culture, history, and coastal charm.</li>
            </ul>
            <p>
                Whether you’re an adventure seeker, culture enthusiast, or family traveler, New York holidays provide endless possibilities.
            </p>
        </div>

        <div>
            <h2>Travel Tips for New York</h2>
            <ul>
                <li><b>Best time to visit New York:</b> April to June and September to November for pleasant weather.</li>
                <li><b>Currency:</b> US Dollar (USD).</li>
                <li><b>Language:</b> English.</li>
                <li><b>Getting around:</b> Subway, taxis, ride-hailing apps, and walking are convenient.</li>
                <li>
                    <b>Packing essentials:</b> Comfortable walking shoes, seasonal clothing, and a travel adapter.
                </li>
                <li><b>Safety:</b> New York is generally safe for tourists, especially in well-populated areas.</li>
            </ul>
            <p>
                For more travel guides, tips, and insights to make the most of your NYC trip, check out our <a href='/blogs'>Panama Travel Blog</a>.
            </p>
        </div>

        <div>
            <h2>Why Choose Panamatravel.co.uk for New York Travel</h2>
            <p>At panamatravel.co.uk, we specialize in delivering seamless travel experiences to New York and beyond. Our services include:</p>
            <ul>
                <li>Affordable NYC flights and hotel bookings.</li>
                <li>
                    Customized New York holiday packages for families, business travelers, and cultural explorers.
                </li>
                <li>Expert advice on NYC sightseeing, Broadway shows, and top attractions.</li>
                <li>Hassle-free ticketing and 24/7 customer support.</li>
            </ul>
            <p>
                Make your New York journey unforgettable—book your NYC tickets today with
                <b>panamatravel.co.uk</b> and start exploring the city that never sleeps.
            </p>
        </div>
    </section>
  `},
    qatar: {
        name: "Qatar",
        title: "Flights to Qatar | Modern Travel Experience | Panama Travel Ltd",
        description: "Book your flight to Qatar from the UK. Enjoy affordable fares and a modern travel experience.",
        images: [
            // `${IMAGEKIT_OLD_URL}/qatar1.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/qatar2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/qatar3.webp?tr=w-1400,fo-auto`
        ],
        content: `
    <section>
    <h1>Qatar Travel: Experience Luxury, Culture & Desert Adventures</h1>
    <p>
        Welcome to Qatar, a modern Middle Eastern destination where luxury skyscrapers meet rich Arabian heritage. From world-class museums and iconic skylines to golden deserts and pristine beaches, Qatar travel offers a unique blend of tradition and innovation.
        Whether you’re planning a family holiday, a business trip, a luxury escape, or a stopover adventure, Panama Travel brings you the best deals on Qatar flights and complete travel packages for a seamless and memorable journey.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Qatar</h2>
        <h3>Doha Corniche</h3>
        <Image
            src={${IMAGEKIT_URL} + "/doha-corniche.jpg"}
            alt="Doha Corniche Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Stroll along the beautiful Doha Corniche, a waterfront promenade offering stunning views of the city skyline. It’s perfect for walking, cycling, photography, and relaxing by the Arabian Gulf.
        </p>

        <h3>Museum of Islamic Art</h3>
        <Image
            src={${IMAGEKIT_URL} + "/museum-of-islamic-art.jpg"}
            alt="Museum of Islamic Art Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover centuries of Islamic heritage at the Museum of Islamic Art, one of Qatar’s most iconic landmarks. The museum houses rare manuscripts, ceramics, textiles, and artifacts from across the Islamic world.
        </p>

        <h3>Katara Cultural Village</h3>
        <Image
            src={${IMAGEKIT_URL} + "/katara-cultural-village.jpg"}
            alt="Katara Cultural Village Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit Katara, a cultural hub featuring art galleries, theatres, traditional architecture, restaurants, and cultural events that celebrate Qatari and global traditions.
        </p>

        <h3>The Pearl-Qatar</h3>
        <Image
            src={${IMAGEKIT_URL} + "/the-pearl-qatar.jpg"}
            alt="The Pearl-Qatar Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore The Pearl-Qatar, a luxury man-made island known for upscale shopping, waterfront dining, marinas, and Mediterranean-style architecture.
        </p>

        <h3>Souq Waqif</h3>
        <Image
            src={${IMAGEKIT_URL} + "/souq-waqif.jpg"}
            alt="Souq Waqif Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience authentic Qatari culture at Souq Waqif, a traditional market offering spices, perfumes, textiles, handicrafts, and local Qatari street food.
        </p>
    </div>

    <div>
        <h2>Qatar Hotels & Accommodation</h2>
        <p>
            Qatar offers a range of world-class accommodations, from luxury five-star hotels in Doha and stunning beach resorts to affordable, family-friendly options. Panama Travel helps you secure the best hotel bookings for a comfortable and lavish experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across the Middle East and beyond.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Qatar</h2>
        <p>
            Fly conveniently to Hamad International Airport (DOH) with our cheap Qatar flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Qatar tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across the Middle East and Asia.</li>
        </ul>
        <p>
            Book early to secure the best Qatar flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Qatar holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Qatar</h2>
        <p>
            Qatar’s dining scene is diverse, offering authentic Qatari cuisine alongside high-end international restaurants. Experience traditional Arabic coffee and luxury fine dining. Shopping is a major highlight, from the luxury international brands at Villaggio Mall to traditional crafts and spices at Souq Waqif.
        </p>
    </div>

    <div>
        <h2>Qatar Adventures & Desert Trips</h2>
        <p>
            Explore Qatar's unique landscapes and cultural sites:
        </p>
        <ul>
            <li><b>Desert Safari:</b> Thrilling dune bashing, camel rides, and sandboarding.</li>
            <li><b>Inland Sea (Khor Al Adaid):</b> A UNESCO-recognized natural wonder.</li>
            <li><b>Al Zubarah Fort:</b> A historic UNESCO World Heritage Site.</li>
            <li><b>Beach Resorts & Water Sports:</b> Along the Arabian Gulf.</li>
        </ul>
        <p>
            Whether you seek adventure, culture, luxury, or family-friendly activities, Qatar offers something for every traveler.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Qatar</h2>
        <ul>
            <li><b>Best time to visit:</b> November to March for pleasant weather.</li>
            <li><b>Currency:</b> Qatari Riyal (QAR).</li>
            <li><b>Language:</b> Arabic (English widely spoken).</li>
            <li><b>Getting around:</b> Taxis, ride-hailing apps, metro, and car rentals.</li>
            <li>
                <b>Packing essentials:</b> Lightweight clothing, sunscreen, modest attire for public places.
            </li>
            <li>
                <b>Safety:</b> Qatar is one of the safest countries in the world with excellent infrastructure and hospitality.
            </li>
        </ul>
        <p>
            For more travel tips and destination guides, explore the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panama Travel for Qatar Travel</h2>
        <p>
            At panamatravel.co.uk, we specialize in delivering smooth and reliable travel experiences to Qatar and beyond. Our services include:
        </p>
        <ul>
            <li>Affordable Qatar flights and hotel bookings.</li>
            <li>Customized holiday packages for families, business travelers, and luxury seekers.</li>
            <li>Expert advice on Qatar sightseeing and experiences.</li>
            <li>Hassle-free booking with 24/7 customer support.</li>
        </ul>
        <h3>Make your trip unforgettable</h3>
        <p>
            <a href="/contact-us/">Book your Qatar</a> flights and travel packages today with
            <b>panamatravel.co.uk</b> and experience the perfect blend of luxury, culture, and Arabian hospitality.
        </p>
    </div>
</section>
  `
    },
    singapore: {
        name: "Singapore",
        title: "Flights to Singapore | Discover Asia's Gateway",
        description: "Fly to Singapore with Panama Travel. Enjoy affordable fares, quick booking, and a smooth travel experience.",
        images: [
            `${IMAGEKIT_URL}/pthome/singapore.webp?updatedAt=1780069925179,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/singapore2.webp?tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/singapore3.webp?tr=w-1400,fo-auto`
        ],
        content: `
      <section>
        <h2>Singapore Travel: Explore Asia’s Most Stunning Urban Paradise</h2>
        <p>
            Welcome to Singapore, a world-class destination where futuristic architecture blends seamlessly with lush greenery, vibrant culture, and premium hospitality. From stunning skylines to world-famous attractions, Singapore travel offers something for every visitor—whether you’re planning a family vacation, a luxurious getaway, a business trip, or an immersive cultural journey. At panamatravel.co.uk, we bring you the best flight deals, hotel packages, and tailored travel experiences to make your trip to Singapore smooth, memorable, and truly extraordinary.
        </p>

        <div>
            <h2>Top Attractions & Sightseeing in Singapore</h2>
            <h3>Marina Bay Sands & SkyPark</h3>
            <Image
                src={${IMAGEKIT_URL} + "/marina-bay-sands-skypark.jpg"}
                alt="Marina Bay Sands & SkyPark Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Experience the iconic Marina Bay Sands, home to a rooftop infinity pool, SkyPark observation deck, high-end dining, and entertainment. Marvel at panoramic views of Singapore’s skyline and waterfront.
            </p>

            <h3>Gardens by the Bay</h3>
            <Image
                src={${IMAGEKIT_URL} + "/gardens-by-the-bay.jpg"}
                alt="Gardens by the Bay Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Step into a futuristic garden featuring the famous Supertree Grove, Cloud Forest, and Flower Dome. It's a must-visit for nature lovers and photography enthusiasts.
            </p>

            <h3>Sentosa Island</h3>
            <Image
                src={${IMAGEKIT_URL} + "/sentosa-island.jpg"}
                alt="Sentosa Island Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Relax and enjoy Singapore’s top resort destination filled with beaches, theme parks, the S.E.A. Aquarium, Adventure Cove Waterpark, and unforgettable entertainment options.
            </p>

            <h3>Singapore Botanic Gardens</h3>
            <Image
                src={${IMAGEKIT_URL} + "/singapore-botanic-gardens.jpg"}
                alt="Singapore Botanic Gardens Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                A UNESCO World Heritage Site, this lush and peaceful oasis is perfect for morning walks, picnics, and exploring the National Orchid Garden.
            </p>

            <h3>Chinatown, Little India & Kampong Glam</h3>
            <Image
                src={${IMAGEKIT_URL} + "/chinatown-little-india-kampong-glam.jpg"}
                alt="Chinatown, Little India & Kampong Glam Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                Explore Singapore’s rich cultural melting pot through vibrant heritage districts offering temples, local cuisine, markets, and colorful street life.
            </p>

            <h3>Clarke Quay</h3>
            <Image
                src={${IMAGEKIT_URL} + "/clarke-quay.jpg"}
                alt="Clarke Quay Image"
                width={1300}
                height={900}
            />
            <br />
            <p>
                A lively riverside hub known for nightlife, river cruises, dining, and entertainment—ideal for evening relaxation after a day of sightseeing.
            </p>

        </div>

        <div>
            <h2>Hotels & Accommodation in Singapore</h2>
            <p>
                Singapore offers a diverse range of stays—from luxury hotels overlooking Marina Bay to modern boutique accommodations and budget-friendly hostels. Whether you prefer city-center convenience or island resorts, we ensure a comfortable and memorable stay in Singapore.
            </p>
            <p>
                With panamatravel.co.uk, you receive:
            </p>
            <ul>
                <li>Handpicked hotel deals.</li>
                <li>Safe and verified accommodations.</li>
                <li>Options for families, couples, business travelers, and groups.</li>
                <li>Exclusive seasonal discounts.</li>
            </ul>
            <p>
                If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Asia and beyond.
            </p>
        </div>
        <div>
            <h2>Flights & Ticket Booking to Singapore</h2>
            <p>
                Fly effortlessly to Singapore Changi Airport (SIN), one of the best airports in the world, known for its art installations, indoor waterfall, and world-class amenities. With Panama Travel, you can:
            </p>
            <ul>
                <li>Book Singapore flights online with ease.</li>
                <li>Access discounted group and family flight packages.</li>
                <li>Secure last-minute and flexible fare options.</li>
                <li>Get 24/7 customer assistance for changes, cancellations & support.</li>
                <li>Plan multi-city trips across Asia.</li>
            </ul>
            <p>
                Book early to grab the best deals on Singapore flights and complete travel packages tailored to your itinerary.
            </p>
            <p>
                If you have questions about your flights or need help planning your Singapore holidays, don’t hesitate to <a href='/contact-us'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
            </p>
        </div>

        <div>
            <h2>Dining, Nightlife & Shopping in Singapore</h2>
            <p>
                Taste some of the world’s best cuisine, including Hainanese Chicken Rice, Laksa, Chili Crab, Satay, and Roti Prata. Singapore is also home to Michelin-star street food and world-class restaurants.
            </p>
            <p>
                From rooftop bars with skyline views to nightclubs, lounges, and waterfront dining—Singapore comes alive at night with endless entertainment options.
            </p>
            <p>
                Explore global and local brands at:
            </p>
            <ul>
                <li>Orchard Road</li>
                <li>Bugis Street Market</li>
                <li>Marina Bay Sands Shopping Mall</li>
                <li>VivoCity</li>
                <li>Chinatown Night Market</li>
            </ul>
            <p>
                Perfect for fashion, electronics, souvenirs, and luxury shopping.
            </p>
        </div>

        <div>
            <h2>Singapore Adventures & Experiences</h2>
            <p>
                Singapore tourism is more than city visits. Use Singapore as a base to explore nearby adventures:
            </p>
            <ul>
                <li>Universal Studios Singapore: Perfect for families—enjoy thrilling rides and entertainment shows.</li>
                <li>Singapore Zoo & Night Safari: A world-renowned wildlife experience offering unique nocturnal tours.</li>
                <li>Pulau Ubin: Discover Singapore’s old-world charm with bike trails, nature paths, and rustic villages.</li>
                <li>MacRitchie Reservoir: Ideal for hiking, kayaking, and exploring nature trails.</li>
            </ul>
            <p>
                Whether you’re an adventurer, culture lover, foodie, or luxury traveler—Singapore holidays offer endless possibilities.
            </p>
        </div>

        <div>
            <h2>Travel Tips for Singapore</h2>
            <ul>
                <li><em>Best time to visit:</em> December to June (pleasant weather and festivals)</li>
                <li><em>Currency:</em> Singapore Dollar (SGD)</li>
                <li><em>Language:</em> English (official), Mandarin, Malay, Tamil</li>
                <li><em>Transportation:</em> MRT, buses, taxis, and ride-hailing apps</li>
                <li>
                    <em>Packing essentials:</em> Lightweight clothing, comfortable shoes, universal adapter
                </li>
                <li><em>Safety:</em> Singapore is one of the safest countries in the world</li>
            </ul>
            <p>
                For more expert advice and travel insights, don’t forget to explore our <a href='/blogs'>Panama Travel Blog</a>.
            </p>
        </div>

        <div>
          <h2>Why Choose <a href="/">panamatravel.co.uk</a> for Singapore Travel?</h2>
          <p>At panama travel, we specialize in providing seamless travel experiences to Singapore and other top global destinations. Our services include:</p>
          <ul>
            <li>Affordable Singapore flight tickets.</li>
            <li>Curated hotel and resort packages.</li>
            <li>Custom holiday itineraries for all travel styles.</li>
            <li>Expert guidance on attractions, sightseeing & dining.</li>
            <li>24/7 dedicated travel support.</li>
            <li>Secure ticketing and hassle-free booking.</li>
          </ul>
          <p>
            Singapore promises unforgettable moments—from futuristic landscapes to cultural richness and adventure-packed experiences. 
          </p>
          <p><a href="/contact-us/">Book your Singapore flights</a> today with <strong>panamatravel.co.uk</strong> and start exploring Asia’s most vibrant urban paradise.</p>
        </div>
    </section>
  `
    },
    thailand: {
        name: "Thailand",
        title: "Flights to Thailand | Discover Asia's Beauty",
        description: "Fly from the UK to Thailand. Enjoy great prices, stunning destinations, and easy booking with Panama Travel.",
        images: [
            `${IMAGEKIT_URL}/pthome/thailand-one.webp?updatedAt=1780997257755,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/thiland2.webp?updatedAt=1752601852789,tr=w-1400,fo-auto`,
        ],
        content: `
      <section>
      <h2>Thailand Travel: Explore the Land of Smiles</h2>
      <p>
        Welcome to Thailand, one of Asia’s most loved travel destinations, where golden temples, tropical beaches, bustling markets, and warm hospitality come together to create an unforgettable holiday. Whether you're planning a relaxing beach vacation, an adventure-filled trip, or a cultural escape, panamatravel.co.uk offers the best Thailand flights and customised travel packages to make your journey smooth, affordable, and memorable.
      </p>

      <div>
        <h2>Top Attractions & Sightseeing in Thailand</h2>
        <h3>Bangkok – Temples, Markets & Nightlife</h3>
        <Image
            src={${IMAGEKIT_URL} + "/bangkok-temples-markets-nightlife.jpg"}
            alt="Bangkok Temples, Markets & Nightlife Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Discover Bangkok’s vibrant mix of culture and modernity. Visit the Grand Palace, Wat Arun, and Wat Pho, explore floating markets, shop at world-class malls, and enjoy the city’s famous nightlife scene.
        </p>

        <h3>Phuket – Beaches & Island Adventures</h3>
        <Image
            src={${IMAGEKIT_URL} + "/phuket-beaches-island-adventures.jpg"}
            alt="Phuket Beaches & Island Adventures Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Relax at Phuket’s stunning beaches, including Patong, Karon, and Kata. Enjoy water sports, island hopping tours, and lively night markets. Phuket is the perfect gateway to the Andaman Sea.
        </p>

        <h3>Chiang Mai – Mountains & Culture</h3>
        <Image
            src={${IMAGEKIT_URL} + "/chiang-mai-mountains-culture.jpg"}
            alt="Chiang Mai Mountains & Culture Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore Chiang Mai’s ancient temples, mountain landscapes, elephant sanctuaries, and the famous Night Bazaar. It's an ideal destination for nature lovers and cultural travelers.
        </p>

        <h3>Pattaya – Entertainment & Water Activities</h3>
        <Image
            src={${IMAGEKIT_URL} + "/pattaya-entertainment-water-activities.jpg"}
            alt="Pattaya Entertainment & Water Activities Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Known for its vibrant beach life, theme parks, and entertainment options, Pattaya is perfect for families and adventure seekers. Don’t miss Coral Island tours and water sports.
        </p>

        <h3>Krabi – Crystal Waters & Limestone Cliffs</h3>
        <Image
            src={${IMAGEKIT_URL} + "/krabi-crystal-waters-limestone-cliffs.jpg"}
            alt="Krabi Crystal Waters & Limestone Cliffs Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Visit Krabi’s stunning islands and beaches like Railay Beach and Phi Phi Islands. Enjoy rock climbing, snorkeling, and boat tours through magnificent limestone cliffs and emerald waters.
        </p>
      </div>

      <div>
        <h2>Hotels & Accommodation in Thailand</h2>
        <p>
            Thailand offers an incredible range of accommodations, from luxury beachfront resorts and boutique city hotels to budget-friendly guesthouses. Panamatravel.co.uk ensures you find the best deals and the perfect place to stay for your holiday.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across Southeast Asia and beyond.
        </p>
      </div>

      <div>
        <h2>Flights & Ticket Booking to Thailand</h2>
        <p>
            Fly conveniently to major airports like Suvarnabhumi Airport (BKK) in Bangkok or Phuket International Airport (HKT) with our cheap Thailand flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Thailand tickets easily online.</li>
            <li>Access discounted flight packages for families and honeymooners.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Thailand and Southeast Asia.</li>
        </ul>
        <p>
            Book early to secure the best Thailand flights and travel packages tailored to your journey.
        </p>
        <p>
            If you have questions about your flights or need help planning your Thailand holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
      </div>

      <div>
        <h2>Dining, Nightlife & Shopping in Thailand</h2>
        <p>
            Indulge in world-famous Thai cuisine, including Pad Thai, Tom Yum Goong, and local street food. The nightlife is legendary, offering rooftop bars in Bangkok, beach parties in Phuket, and local entertainment everywhere. Shop for silk, handmade crafts, designer goods, and unique souvenirs at night markets and modern malls.
        </p>
      </div>

      <div>
        <h2>Thailand Adventures & Day Trips</h2>
        <p>
            Explore beyond the major cities with these unforgettable experiences:
        </p>
        <ul>
            <li>Ayutthaya & Sukhothai: Explore UNESCO World Heritage Sites featuring ancient temples and ruins.</li>
            <li>Elephant Nature Park (Chiang Mai): A sanctuary offering ethical elephant encounters.</li>
            <li>Similan Islands: One of the world’s top diving and snorkeling destinations.</li>
            <li>Floating Markets: Experience local culture and Thai street food on water.</li>
        </ul>
        <p>
            Whether you’re a nature lover, adventure seeker, or cultural traveler, Thailand offers something for every visitor.
        </p>
      </div>

      <div>
        <h2>Travel Tips for Thailand</h2>
        <ul>
            <li><b>Best time to visit:</b> November to April for sunny, pleasant weather.</li>
            <li><b>Currency:</b> Thai Baht (THB).</li>
            <li><b>Language:</b> Thai (English is widely spoken in major cities and tourist areas).</li>
            <li><b>Getting around:</b> Tuk-tuks, taxis, boats, buses, and domestic flights.</li>
            <li><b>Safety:</b> Thailand is generally safe; just stay aware in crowded areas.</li>
            <li><b>Essentials:</b> Lightweight clothes, sunscreen, comfortable shoes, mosquito repellent.</li>
        </ul>
        <p>
            For more Thailand travel guides and tips, visit the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
      </div>

      <div>
        <h2>Why Choose <a href="/">Panama Travel</a> for Thailand Travel?</h2>
        <p>At Panama Travel, we specialize in providing seamless and affordable travel experiences to Thailand. Our services include:</p>
        <ul>
            <li>Cheap Thailand flights and hotel bookings.</li>
            <li>Customized holiday packages for families, honeymooners, and solo travelers.</li>
            <li>Expert guidance on beaches, temples, tours, and local attractions.</li>
            <li>Hassle-free ticketing with 24/7 customer support.</li>
        </ul>
        <h3>Make your Thailand journey unforgettable</h3>
        <p>
            <a href="/contact-us/"><b>Book your Thailand</b></a> flights today with <b>panamatravel.co.uk</b> and start exploring the beauty, culture, and adventure of the Land of Smiles.
        </p>
      </div>
    </section>
  `},
    turkey: {
        name: "Turkey",
        title: "Flights to Turkey | Explore Timeless Beauty",
        description: "Fly to Turkey from the UK with Panama Travel. Discover culture, beauty, and affordable airfare deals.",
        images: [
            `${IMAGEKIT_URL}/pthome/turkish-air-flight.webp?updatedAt=1780046489810,tr=w-1400,fo-auto`,
            // `${IMAGEKIT_OLD_URL}/turkey2.webp?tr=w-1400,fo-auto`,
        ],
        content: `
    <section>
    <h2>Turkey Travel: Explore the Beauty of Europe & Asia</h2>
    <p>
        Welcome to Turkey, a captivating destination where ancient history meets stunning coastlines, vibrant bazaars, and rich cultural heritage. From the bustling streets of Istanbul to the turquoise beaches of Antalya and the breathtaking landscapes of Cappadocia, Turkey travel offers unforgettable experiences for every traveler.
        Whether you’re planning a relaxing family holiday, a romantic escape, or an adventurous getaway, panamatravel.co.uk brings you the best deals on Turkey flights and curated travel packages to make your journey smooth and memorable.
    </p>

    <div>
        <h2>Top Attractions & Sightseeing in Turkey</h2>
        <h3>Istanbul – The City of Two Continents</h3>
        <Image
            src={${IMAGEKIT_URL} + "/istanbul-city-of-two-continents.jpg"}
            alt="Istanbul – The City of Two Continents Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Explore Istanbul, Turkey’s cultural heart, where iconic landmarks blend with modern life:
        </p>
        <ul>
            <li>Hagia Sophia – a masterpiece of Byzantine and Ottoman architecture.</li>
            <li>Blue Mosque – stunning domes and six elegant minarets.</li>
            <li>Grand Bazaar – one of the world’s oldest and largest markets.</li>
            <li>Topkapi Palace – former royal residence of Ottoman sultans.</li>
        </ul>

        <h3>Cappadocia</h3>
        <Image
            src={${IMAGEKIT_URL} + "/cappadocia-hot-air-balloons.jpg"}
            alt="Cappadocia Hot Air Balloons Image"
            width={1300}
            height={900}
        />
        <br />
        <p>
            Experience the magical landscapes of Cappadocia, famous for:
        </p>
        <ul>
            <li>Hot air balloon rides at sunrise.</li>
            <li>Fairy chimneys and unique rock formations.</li>
            <li>Underground cities and ancient cave churches.</li>
        </ul>

        <h3>Antalya & Turkish Riviera</h3>
        <p>
            Relax along the turquoise coast of Antalya with:
        </p>
        <ul>
            <li>Blue Flag beaches.</li>
            <li>Luxury seaside resorts.</li>
            <li>Old Town Kaleiçi.</li>
            <li>Waterfalls and scenic mountain views.</li>
        </ul>

        <h3>Pamukkale</h3>
        <p>
            Visit Pamukkale’s white travertine terraces, a natural wonder filled with mineral-rich hot springs. Explore the ancient Roman city of Hierapolis nearby.
        </p>
    </div>

    <div>
        <h2>Hotels & Accommodation in Turkey</h2>
        <p>
            Turkey offers everything from historic hotels in Istanbul and cave hotels in Cappadocia to all-inclusive resorts on the Turkish Riviera. Panama Travel helps you secure the best hotel deals for a comfortable and tranquil experience.
        </p>
        <p>
            If you’re planning your trip and want to explore other destinations or services, visit <a href='/'>Panama Travel</a> to discover curated travel packages, flight deals, and hotel options across the Middle East and Europe.
        </p>
    </div>

    <div>
        <h2>Flights & Ticket Booking to Turkey</h2>
        <p>
            Fly conveniently to major airports like Istanbul Airport (IST), Sabiha Gökçen Airport (SAW), or Antalya Airport (AYT) with our cheap Turkey flights and flexible booking options. With panamatravel.co.uk, you can:
        </p>
        <ul>
            <li>Book Turkey tickets easily online.</li>
            <li>Access discounted group and family flight packages.</li>
            <li>Enjoy 24/7 customer support for changes and travel assistance.</li>
            <li>Explore multi-city trips across Turkey and neighboring countries.</li>
        </ul>
        <p>
            Book early to secure the best Turkey flights and travel packages tailored to your historical or beach getaway.
        </p>
        <p>
            If you have questions about your flights or need help planning your Turkey holidays, don’t hesitate to <a href='/contact-us/'>contact our experts</a>. Our team is available 24/7 to provide personalized assistance and ensure a smooth booking experience.
        </p>
    </div>

    <div>
        <h2>Dining, Nightlife & Shopping in Turkey</h2>
        <p>
            Taste world-famous Turkish cuisine, including Kebabs, Baklava, Mezze, and Turkish Delight, paired with traditional tea or coffee. Enjoy the vibrant nightlife in Istanbul with rooftop bars, modern clubs, and traditional Turkish music. Shop for jewelry, carpets, spices, and unique souvenirs at the Grand Bazaar and local markets.
        </p>
    </div>

    <div>
        <h2>Turkey Adventures & Day Trip Opportunities</h2>
        <p>
            Use Istanbul, Antalya, or Cappadocia as a base to explore more of Turkey’s diverse attractions:
        </p>
        <ul>
            <li>Bursa: Home to mountain views, hot springs, and historical mosques.</li>
            <li>Konya: Known for the Whirling Dervishes and spiritual heritage.</li>
            <li>Fethiye: Ideal for paragliding, lagoons, and boat tours.</li>
            <li>Izmir: Beautiful coastal city with vibrant culture and seaside promenades.</li>
        </ul>
        <p>
            Whether you enjoy beaches, history, or adventure, Turkey holidays offer endless opportunities.
        </p>
    </div>

    <div>
        <h2>Travel Tips for Turkey</h2>
        <ul>
            <li><b>Best time to visit:</b> April–June & September–November.</li>
            <li><b>Currency:</b> Turkish Lira (TRY).</li>
            <li><b>Language:</b> Turkish (English widely spoken in tourist areas).</li>
            <li><b>Getting around:</b> Taxis, trams, metros, buses, car rentals.</li>
            <li><b>Packing essentials:</b> Comfortable clothes, sunscreen, travel adapters.</li>
            <li><b>Safety:</b> Turkey is safe for tourists, especially in major cities and resort areas.</li>
        </ul>
        <p>
            For more tips and guides, visit the <a href='/blogs/'>Panama Travel Blogs</a>.
        </p>
    </div>

    <div>
        <h2>Why Choose Panama Travel for Turkey Travel</h2>
        <p>At Panama Travel, we offer seamless travel experiences to Turkey and beyond.</p>
        <ul>
            <li>Cheap Turkey flights and hotel bookings.</li>
            <li>Personalized holiday packages for families, couples, and solo travelers.</li>
            <li>Expert guidance on Turkey sightseeing, beaches, and cultural hotspots.</li>
            <li>Hassle-free reservations and 24/7 support.</li>
        </ul>
        <h3>Make your Turkey adventure unforgettable</h3>
        <p>
            <a href="/contact-us/">Book your Turkey flights</a> today with
            <b>panamatravel.co.uk</b> and begin exploring this extraordinary destination where Europe meets Asia.
        </p>
    </div>
</section>
  `},
};
