
// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl box-border mx-auto px-4 flex flex-col justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <a href="#" className="hover:underline">Help Hub</a> |
          <a href="#" className="hover:underline">Book with confidence</a> |
          <a href="#" className="hover:underline">Careers</a> |
          <a href="#" className="hover:underline">Pricing Terms & Conditions</a> |
          <a href="#" className="hover:underline">Privacy Notice</a> |
          <a href="#" className="hover:underline">Terms & Conditions</a> |
          <a href="#" className="hover:underline">Special assistance</a> |
          <a href="#" className="hover:underline">Last Minute Flights</a> |
          <a href="#" className="hover:underline">Blog</a> |
          <a href="#" className="hover:underline">Modern Slavery Act</a> |
          <a href="#" className="hover:underline">Tax Strategy</a> |
          <a href="#" className="hover:underline">Cheap Flights</a>
        </div>

        {/* Center Section */}
        <div className="flex flex-col text-xs space-y-2">
          <p>
            The flight-inclusive holidays on this website which depart from the UK are financially protected by the ATOL scheme. This website is intended primarily for residents of the UK and all bookings are subject to our terms and conditions found here. But ATOL protection does not apply to all holiday and travel services listed (e.g., car hire or accommodation only bookings). Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be protected. Please see our booking conditions for information or for more information about financial protection and the ATOL certificate go to: www.caa.co.uk/ATOLCertificate.
          </p>
          <p>
            Travel ADVICE: The Foreign, Commonwealth and Development Office (FCDO) has up-to-date advice on health and safety across the globe, as well as local laws, and passport and visa information. Please check Travelaware.campaign.gov.uk regularly for updates ahead of travel, as the advice can change.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-end space-y-2">
          {/* Payment Methods */}
          <div className="flex gap-4">
            <img src="visa-logo.png" alt="Visa" className="h-8" />
            <img src="mastercard-logo.png" alt="MasterCard" className="h-8" />
            <img src="paypal-logo.png" alt="PayPal" className="h-8" />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-blue-500">Facebook</a>
            <a href="#" className="text-white hover:text-blue-500">Instagram</a>
            <a href="#" className="text-white hover:text-red-500">YouTube</a>
            <a href="#" className="text-white hover:text-pink-500">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react'
// import Intro from './Intro'
// import Links from './Links'
// import NewsLetter from './NewsLetter'
// import Outro from './Outro'
// import { companyLinks, usefulLinks } from '../../data/footer'

// function Footer() {
//   return (
//     <>
//       <footer className='p-4 py-12  bg-slate-800 text-white'>
//         <div className='container mx-auto max-w-6xl relative'>
//           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
//             {/* Column 1 */}
//             <Intro />
//             {/* Column 2 */}
//             <Links linksObj={companyLinks} />
//             {/* Column 3 */}
//             <Links linksObj={usefulLinks} />
//             {/* Column 4 */}
//             <NewsLetter />
//           </div>
//           {/* Outro */}
//           <Outro />
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer
