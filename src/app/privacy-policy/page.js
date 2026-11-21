import Link from "next/link"

export const metadata = {
  title: 'Privacy Policy | Panama Travel UK',
  description: "Read Panama Travel UK's privacy policy to understand how we protect and manage your personal data safely.",
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy | Panama Travel UK',
    description: "Read Panama Travel UK's privacy policy to understand how we protect and manage your personal data safely.",
    url: 'https://www.panamatravel.co.uk/privacy-policy/',
    siteName: 'Panama Travel',
    type: 'website',
  },
}

const policies = [
  {
    heading: "Information We Collect",
    para: "We collect personal data like your name, email, travel preferences, and payment details when you interact with our site or book trips."
  },
  {
    heading: "Information Automatically Collected",
    para: "When you access our site, certain data is collected automatically, such as your IP address, browser type, operating system, access times, and the pages you viewed directly before and after accessing the site."
  },
  {
    heading: "Use of Your Information",
    para: ""
  },
  {
    heading: "Sharing Your Information",
    para: "We do not sell or rent your personal information. We may share your information with trusted partners such as airlines, hotels, and insurance providers to facilitate your travel bookings. These third parties are bound by confidentiality obligations."
  },
  {
    heading: "Third-Party Services",
    para: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to read their privacy policies."
  },
  {
    heading: "Cookies and Tracking Technologies",
    para: "We use cookies to enhance user experience and track website performance. Cookies allow us to remember your preferences and improve site functionality. You can disable cookies through your browser settings."
  },
  {
    heading: "Data Retention",
    para: "We retain personal information only as long as necessary for the purposes outlined in this policy, including to comply with legal obligations, resolve disputes, and enforce agreements."
  },
  {
    heading: "Data Security",
    para: "We implement a variety of security measures to protect your personal information, including encryption, secure socket layer (SSL) technology, and access control procedures."
  },
  {
    heading: "Children's Privacy",
    para: "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have inadvertently gathered such data, we will delete it immediately."
  },
  {
    heading: "Your Data Protection Rights",
    para: ""
  },
  {
    heading: "Consent and Withdrawal",
    para: "By using our website and services, you consent to the terms of this Privacy Policy. You may withdraw your consent at any time by contacting us. Withdrawal does not affect the lawfulness of processing based on consent before withdrawal."
  },
  {
    heading: "Email Communications",
    para: "We may send you emails about your bookings, promotions, and service updates. You can unsubscribe at any time by clicking the 'unsubscribe' link at the bottom of any email."
  },
  {
    heading: "International Transfers",
    para: "As we operate globally, your information may be transferred and processed in countries outside of your own. We ensure adequate data protection safeguards are in place in such cases."
  },
  {
    heading: "Social Media Integration",
    para: "Our website includes social media features such as Facebook and Instagram widgets. These features may collect your IP address and which page you are visiting and may set a cookie to enable the feature to function properly."
  },
  {
    heading: "Changes to This Policy",
    para: 'We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Effective Date&rdquo; at the top of this page. We encourage you to review this policy periodically.'
  },
  {
    heading: "Contact Us",
    para: ""
  },
  {
    heading: "Governing Law",
    para: "This Privacy Policy is governed by the laws of the United Kingdom. Any disputes shall be resolved in the courts located in England and Wales."
  },
  {
    heading: "User Responsibility",
    para: "You are responsible for ensuring the accuracy of the personal information you provide. We are not responsible for any losses arising from inaccurate or incomplete information."
  },
  {
    heading: "Analytics and Performance Tools",
    para: "We use Google Analytics and similar tools to understand user interaction and enhance our services. These tools collect anonymous usage data and do not identify you personally."
  },
  {
    heading: "Policy Acceptance",
    para: "By continuing to use our services, you acknowledge and accept the terms outlined in this Privacy Policy."
  },
]

export default function PrivacyPolicy() {
  return (
    <section className="bg-white text-muted mt-24 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#392477]">
          Privacy Policy — Panama Travel
        </h1>
        <p className="mb-4 text-[#513C8D]">
          Panama Travel (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) values the privacy and security of our customers and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or engage with our travel-related services. By using our services, you agree to the terms of this policy.
        </p>

        <div className="space-y-2">
          {policies.map((policy, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold mb-3">
                {idx + 1}. {policy?.heading}
              </h2>

              {idx === 2 && (
                <>
                  <p>We use the information we collect for various purposes including:</p>
                  <ul className="list-disc ps-8">
                    <li>Booking and managing travel arrangements</li>
                    <li>Processing payments and sending confirmations</li>
                    <li>Communicating with you about your bookings or offers</li>
                    <li>Improving user experience on our site</li>
                    <li>Responding to your inquiries</li>
                  </ul>
                </>
              )}
              {idx === 9 && (
                <>
                  <p>Depending on your location, you may have the following rights under applicable data protection laws:</p>
                  <ul className="list-disc ps-8">
                    <li>Right to access your data</li>
                    <li>Right to rectify inaccurate or incomplete data</li>
                    <li>Right to delete your data</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </>
              )}
              {idx === 15 && (
                <>
                  <p>If you have questions or concerns regarding this Privacy Policy, please contact us at:</p>
                  <ul className="pt-3 ps-4">
                    <li>Panama Travel</li>
                    <li>Email: <Link href="mailto:info@panamatravel.com" className="text-cyan-800">info@panamatravel.com</Link></li>
                    <li>Phone: <Link href="tel:+441217713616" className="text-cyan-800">+44 121 771 3616</Link></li>
                  </ul>
                </>
              )}
              <p>{policy?.para}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-primary">
          Thank you for choosing Panama Travel. Your trust is important to us.
        </p>
      </div>
    </section>
  )
}