/**
 * Facebook Pixel Event Tracking Utility
 * 
 * Standard Events:
 * - ViewContent: When a user views a page
 * - Search: When a user searches
 * - AddToCart: When a user adds to cart (not applicable for travel)
 * - InitiateCheckout: When booking process starts
 * - AddPaymentInfo: When payment info is added
 * - Purchase: When a booking is completed
 * - Lead: When a form is submitted
 * - Contact: When contact form is submitted
 * - CompleteRegistration: When user signs up
 */

// Check if fbq is available
export const fbqAvailable = () => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

// Track PageView (automatically tracked in layout)
export const trackPageView = () => {
  if (fbqAvailable()) {
    window.fbq('track', 'PageView')
  }
}

// Track ViewContent - When user views a destination or blog
export const trackViewContent = (contentData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'ViewContent', {
      content_name: contentData.name || contentData.title,
      content_category: contentData.category || 'destination',
      content_ids: [contentData.id || contentData.slug],
      content_type: contentData.type || 'product',
      value: contentData.price || 0,
      currency: 'GBP',
    })
  }
}

// Track Search - When user searches for flights/destinations
export const trackSearch = (searchData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'Search', {
      search_string: searchData.query,
      content_category: searchData.category || 'flight',
      content_ids: searchData.destinations || [],
    })
  }
}

// Track InitiateCheckout - When user starts booking process
export const trackInitiateCheckout = (bookingData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: bookingData.destination || bookingData.name,
      content_category: 'flight_booking',
      content_ids: [bookingData.id || bookingData.destination],
      value: bookingData.estimatedPrice || 0,
      currency: 'GBP',
      num_items: bookingData.passengers || 1,
    })
  }
}

// Track AddPaymentInfo - When user adds payment information
export const trackAddPaymentInfo = (paymentData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'AddPaymentInfo', {
      content_category: 'flight_booking',
      content_ids: [paymentData.bookingId],
      value: paymentData.amount || 0,
      currency: 'GBP',
    })
  }
}

// Track Purchase - When booking is completed
export const trackPurchase = (purchaseData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'Purchase', {
      content_name: purchaseData.destination || purchaseData.name,
      content_ids: [purchaseData.bookingId],
      content_type: 'flight',
      value: purchaseData.amount,
      currency: 'GBP',
      num_items: purchaseData.passengers || 1,
    })
  }
}

// Track Lead - When user submits inquiry form
export const trackLead = (leadData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'Lead', {
      content_name: leadData.destination || leadData.subject || 'General Inquiry',
      content_category: leadData.type || 'inquiry',
      value: leadData.estimatedValue || 0,
      currency: 'GBP',
    })
  }
}

// Track Contact - When user submits contact form
export const trackContact = (contactData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'Contact', {
      content_name: contactData.subject || 'Contact Form',
      content_category: 'contact',
    })
  }
}

// Track CompleteRegistration - When user signs up/registers
export const trackCompleteRegistration = (registrationData) => {
  if (fbqAvailable()) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: registrationData.type || 'Newsletter',
      status: registrationData.status || 'completed',
    })
  }
}

// Track Custom Event - For any custom tracking needs
export const trackCustomEvent = (eventName, eventData = {}) => {
  if (fbqAvailable()) {
    window.fbq('trackCustom', eventName, eventData)
  }
}

// Track Flight Search - Custom event for flight searches
export const trackFlightSearch = (searchData) => {
  if (fbqAvailable()) {
    window.fbq('trackCustom', 'FlightSearch', {
      origin: searchData.from,
      destination: searchData.to,
      departure_date: searchData.departure,
      return_date: searchData.return,
      passengers: searchData.passengers,
      trip_type: searchData.tripType,
      class: searchData.classType,
    })
  }
}

// Track Newsletter Signup
export const trackNewsletterSignup = (email) => {
  if (fbqAvailable()) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: 'Newsletter Subscription',
      status: 'subscribed',
    })
  }
}

// Track Phone Call Click
export const trackPhoneClick = (phoneNumber) => {
  if (fbqAvailable()) {
    window.fbq('trackCustom', 'PhoneClick', {
      phone_number: phoneNumber,
    })
  }
}

// Track Email Click
export const trackEmailClick = (email) => {
  if (fbqAvailable()) {
    window.fbq('trackCustom', 'EmailClick', {
      email: email,
    })
  }
}

// Track Social Media Click
export const trackSocialClick = (platform) => {
  if (fbqAvailable()) {
    window.fbq('trackCustom', 'SocialMediaClick', {
      platform: platform,
    })
  }
}

// Track Destination View
export const trackDestinationView = (destination) => {
  trackViewContent({
    name: destination.name,
    category: 'destination',
    id: destination.id || destination.slug,
    type: 'destination',
    price: destination.price || 0,
  })
}

// Track Blog View
export const trackBlogView = (blog) => {
  trackViewContent({
    name: blog.title,
    category: 'blog',
    id: blog.id || blog.slug,
    type: 'article',
  })
}

// Export all tracking functions
const facebookPixel = {
  trackPageView,
  trackViewContent,
  // trackSearch,
  // trackInitiateCheckout,
  // trackAddPaymentInfo,
  // trackPurchase,
  trackLead,
  // trackContact,
  // trackCompleteRegistration,
  // trackCustomEvent,
  trackFlightSearch,
  // trackNewsletterSignup,
  // trackPhoneClick,
  // trackEmailClick,
  // trackSocialClick,
  trackDestinationView,
  trackBlogView,
};

export default facebookPixel;