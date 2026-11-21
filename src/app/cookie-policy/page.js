import Link from "next/link"

export const metadata = {
  title: 'Cookie Policy | Panama Travel UK',
  description: 'Learn how Panama Travel UK uses cookies to improve your browsing experience and website performance.',
  alternates: {
    canonical: 'https://www.panamatravel.co.uk/cookie-policy/',
  },
  openGraph: {
    title: 'Cookie Policy | Panama Travel UK',
    description: 'Learn how Panama Travel UK uses cookies to improve your browsing experience and website performance.',
    url: 'https://www.panamatravel.co.uk/cookie-policy/',
    siteName: 'Panama Travel',
    type: 'website',
  },
}

const policies = [
  {
    heading: "Introduction to Our Cookie Policy",
    para: "This Cookie Policy explains how Panama Travel uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use."
  },
  {
    heading: "What Are Cookies?",
    para: "Cookies are small data files that are placed on your device or computer when you visit a website. They are widely used to make websites work or to improve their efficiency, as well as to provide reporting information and personalize content."
  },
  {
    heading: "Legal Basis for Using Cookies",
    para: "Under applicable data protection laws like GDPR and UK GDPR, we rely on user consent as the legal basis for storing cookies on your device, except for cookies that are strictly necessary for the operation of our website."
  },
  {
    heading: "Types of Cookies We Use",
    para: ""
  },
  {
    heading: "List of Cookies We Use",
    para: ""
  },
  {
    heading: "Duration of Cookies",
    para: "Cookies may be 'session' (expire when you close your browser) or 'persistent' (stay on your device until deleted or after a set duration). Persistent cookies may remain for up to 2 years."
  },
  {
    heading: "Third-Party Cookies",
    para: "We may allow trusted partners to place cookies on your device for analytics or marketing purposes. These third parties may include Google, Facebook, or other advertising networks."
  },
  {
    heading: "Opt-Out Options for Third-Party Providers",
    para: ""
  },
  {
    heading: "Managing Your Cookie Preferences",
    para: "You can manage cookie settings in your browser, including deleting or blocking cookies. Each browser provides different control options. Blocking cookies may affect some features on our site."
  },
  {
    heading: "Your Rights Regarding Cookie Use",
    para: "You have the right to withdraw consent, request deletion of data collected through cookies, or inquire about how your information is used. Contact us for any such requests."
  },
  {
    heading: "Cookie Consent Mechanism",
    para: "When visiting our website for the first time, you will see a banner requesting your consent to use cookies. You can choose to accept, reject, or customize your cookie preferences."
  },
  {
    heading: "Changes to This Cookie Policy",
    para: "We may update this policy to reflect legal or operational changes. The date of the latest revision will be shown at the top of the page. We encourage regular review of this policy."
  },
  {
    heading: "Contacting Us About Cookies",
    para: ""
  }
]

export default function CookiePolicy() {
  return (
    <section className="bg-white text-muted mt-24 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-10 text-secondary">
          Cookie Policy — Panama Travel
        </h1>

        <p className="mb-6 text-xl leading-relaxed text-secondary">
          By using our website, you agree to the use of cookies in accordance with this Cookie Policy. This policy explains what cookies are, how we use them, and how you can manage their usage.
        </p>

        <div className="space-y-6">
          {policies.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl shadow-lg transition duration-300 bg-white"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">
                {idx + 1}. {item.heading}
              </h2>
              {idx === 3 && (
                <>
                  <p>We categorize our cookies into: </p>
                  <ul className="ps-5">
                    <li> - Strictly Necessary Cookies: essential for site navigation and security </li>
                    <li> - Functional Cookies: remember choices like language or region</li>
                    <li> - Performance Cookies: collect data on how visitors use our site</li>
                    <li> - Targeting/Advertising Cookies: used to deliver personalized advertisements</li>
                  </ul>
                </>
              )}
              {idx === 4 && (
                <>
                  <p>Examples include: </p>
                  <ul className="ps-5">
                    <li> - _ga (Google Analytics): Tracks user behavior across pages</li>
                    <li> - _fbp (Facebook Pixel): Tracks conversions from Facebook ads</li>
                    <li> - session_id: Maintains login session</li>
                  </ul>
                </>
              )}
              {idx === 7 && (
                <>
                  <p>You can opt out of third-party cookies by visiting provider-specific opt-out pages, such as:</p>
                  <ul className="ps-5">
                    <li> - Google Ads: <Link href="https://adssettings.google.com">Ad Settings</Link></li>
                    <li> - Facebook: <Link href="https://www.facebook.com/ads/preferences">Facebook Preferences</Link></li>
                  </ul>
                </>
              )}
              {idx === 12 && (
                <>
                  <p>If you have any questions or concerns about our cookie practices, please contact us at <Link href="mailto:info@panamatravel.com" className="text-muted underline">info@panamatravel.com</Link> or call <Link href="tel:+441217713616" className="text-muted underline">+44 121 771 3616</Link>.</p>
                </>
              )}
              <p className="text-lg leading-relaxed text-primary">
                {item.para}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xl text-primary">
          Thank you for visiting Panama Travel. We value your privacy.
        </p>
      </div>
    </section>
  )
}