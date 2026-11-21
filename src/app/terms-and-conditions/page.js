export const metadata = {
  title: 'Terms & Conditions | Panama Travel UK',
  description: "View Panama Travel UK's terms and conditions to know our booking, payment, and travel policies clearly.",
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/terms-and-conditions/',
  },
  openGraph: {
    title: 'Terms & Conditions | Panama Travel UK',
    description: "View Panama Travel UK's terms and conditions to know our booking, payment, and travel policies clearly.",
    url: 'https://www.panamatravel.co.uk/terms-and-conditions/',
    siteName: 'Panama Travel',
    type: 'website',
  },
}

const terms = [
  {
    heading: "Introduction to Our Service and User Agreement",
    para: "These Terms and Conditions establish a legally binding agreement between you and Panama Travel. By using our website or engaging with our services, you agree to comply with these terms, which govern your use of our site, the services we provide, and your rights and responsibilities."
  },
  {
    heading: "Eligibility and User Conduct Requirements",
    para: "To access or use our services, you must be at least 18 years of age and possess the legal capacity to enter into a binding contract. By using our platform, you confirm that all information provided is accurate and complete, and you agree not to misuse the platform or engage in unlawful activity."
  },
  {
    heading: "Booking Procedures and Payment Obligations",
    para: "When booking through Panama Travel, you agree to follow the outlined process and adhere to all payment requirements. All fees must be paid in accordance with the payment instructions provided. Prices are dynamic and may vary depending on availability and third-party terms."
  },
  {
    heading: "Cancellation Policies and Refund Processing",
    para: "Cancellations must follow the terms of the airline, hotel, or service provider involved in your booking. Administrative fees may apply. Refunds, if applicable, will be processed in accordance with our internal procedures and may take several business days to reflect in your account."
  },
  {
    heading: "Modifications to Existing Travel Bookings",
    para: "If you need to modify an existing booking, you may incur additional charges. Changes are subject to provider policies and availability. We will do our best to accommodate requests but do not guarantee approval of modifications."
  },
  {
    heading: "User Responsibilities for Accurate Travel Information",
    para: "Users are responsible for ensuring all provided information is accurate and current. This includes personal details, travel preferences, and contact information. Failure to provide accurate data may result in delays, denied services, or additional fees."
  },
  {
    heading: "Passport, Visa, and Travel Documentation Requirements",
    para: "You must ensure that your travel documents are in order before your departure. This includes passports, visas, and any entry or transit documents required by destination countries. Panama Travel is not responsible for denied boarding or entry due to documentation issues."
  },
  {
    heading: "Health Regulations and Travel Advisory Compliance",
    para: "You are responsible for complying with all health-related travel requirements, including vaccinations, health certificates, and COVID-19-related regulations. Check with your destination's local authorities or embassies for the latest guidelines."
  },
  {
    heading: "Exclusion of Liability and Limitation of Claims",
    para: "Panama Travel is not liable for any losses or damages resulting from unforeseen circumstances, such as natural disasters, flight delays, governmental restrictions, or civil unrest. Our liability is limited to the amount paid for the booking."
  },
  {
    heading: "Use of Services Provided by Third-Party Vendors",
    para: "We partner with third-party vendors to deliver parts of your travel experience. You acknowledge that your use of their services is subject to their respective terms and conditions, and Panama Travel is not liable for their actions."
  },
  {
    heading: "Ownership and Protection of Intellectual Property",
    para: "All content and software on this website are the property of Panama Travel or its licensors. You may not copy, distribute, or exploit any part of the website or services without prior written consent."
  },
  {
    heading: "Unlawful or Prohibited Usage Restrictions",
    para: "You agree not to use the website in a way that violates any law or harms the reputation or functioning of Panama Travel. This includes attempts to hack, phish, distribute malware, or interfere with other users' experience."
  },
  {
    heading: "Data Handling and Privacy Commitments",
    para: "Your data is handled in accordance with our Privacy Policy. By using our services, you agree to the collection, processing, and storage of your personal data for the purpose of delivering our services and improving our platform."
  },
  {
    heading: "Termination of Services and Account Suspension",
    para: "Panama Travel reserves the right to suspend or terminate access to our website and services for users who breach these terms. Such actions may occur without prior notice and are taken to protect our company and users."
  },
  {
    heading: "Resolution of Disputes and Legal Jurisdiction",
    para: "Any disputes related to our services will be resolved under the jurisdiction of the courts of England and Wales. You agree to submit to the laws of the United Kingdom for any legal proceedings."
  },
  {
    heading: "Amendments and Updates to These Terms",
    para: "We reserve the right to modify these Terms and Conditions at any time. Continued use of the website or services after updates are published will constitute acceptance of the new terms."
  },
  {
    heading: "Contact Details and Customer Support Access",
    para: "For inquiries or support related to these terms, please contact Panama Travel at privacy@panamatravel.com or call us at +44 123 456 789. We strive to respond promptly and assist you professionally."
  }
]

export default function TermsAndConditions() {
  return (
    <section className="bg-white mt-24 text-muted py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-6 text-primary">
          Terms & Conditions — Panama Travel
        </h1>

        <p className="mb-4 text-xl leading-relaxed text-secondary">
          Please read these Terms and Conditions carefully before using our website or booking any travel-related services. By accessing the site or using our services, you accept these terms in full.
        </p>

        <div className="space-y-3">
          {terms.map((term, idx) => (
            <div
              key={idx}
              className="p-8 py-3 rounded-2xl shadow-lg transition duration-300 bg-white"
            >
              <h2 className="text-2xl font-bold mb-2 text-primary">
                {idx + 1}. {term.heading}
              </h2>
              <p className="text-lg leading-relaxed text-secondary">
                {term.para}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xl text-primary">
          Thank you for choosing Panama Travel. Safe travels!
        </p>
      </div>
    </section>
  )
}