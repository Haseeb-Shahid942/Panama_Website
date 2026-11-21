import 'aos/dist/aos.css'
import './globals.css'
import { Nunito } from 'next/font/google'
import Script from 'next/script'
import Header from '../components/Header/Header'
import SiteFooter from '../components/Footer/Footer2'
import WhatsappWidget from '../components/UI/Widgets/WhtsappWidget'
import AOSProvider from '../components/providers/AOSProvider'
import { ScrollProvider } from '../components/providers/ScrollContext'
import Image from 'next/image';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fon`t-nunito'
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#392477',
  colorScheme: 'light',
}

export const metadata = {
  title: {
    default: 'Book Cheap Flights with Panama Travel | Since 1984',
    // template: '%s | Panama Travel'
  },
  description: 'Book cheap flights worldwide with Panama Travel. Trusted since 1984 for affordable fares, top airlines, and expert travel service.',
  keywords: [
    'book my trip',
    'my ticket booking',
    'low budget flight',
    'low cost flight',
    'low cost air fares',
    'affordable flights UK',
    'flights to flights',
    'ATOL protected flights',
    'IATA accredited',
    'Panama Travel',
    'flight deals',
    'last minute flights',
    'business class flights',
    'economy flights',
    'flight tickets',
    'airline bookings'
  ].join(', '),
  authors: [{ name: 'Panama Travel', url: 'https://www.panamatravel.co.uk' }],
  creator: 'Panama Travel',
  publisher: 'Panama Travel',
  applicationName: 'Panama Travel',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.panamatravel.co.uk',
    siteName: 'Panama Travel',
    title: 'Book Cheap Flights with Panama Travel | Since 1984',
    description: 'Book cheap flights worldwide with Panama Travel. Trusted since 1984 for affordable fares, top airlines, and expert travel service.',
    images: [
      {
        url: 'https://www.panamatravel.co.uk/images/panama-travel-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Panama Travel - Cheap Flights & Travel Agency UK',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panamatravelltd',
    creator: '@panamatravelltd',
    title: 'Book Cheap Flights with Panama Travel | Since 1984',
    description: 'Book cheap flights worldwide with Panama Travel. Trusted since 1984 for affordable fares, top airlines, and expert travel service.',
    images: ['https://www.panamatravel.co.uk/images/panama-travel-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.panamatravel.co.uk',
  },
  category: 'travel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&family=Lobster&family=Great+Vibes&family=Satisfy&family=Marck+Script&family=Alex+Brush&family=Shadows+Into+Light&family=Cookie&family=Allura&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Panama Travel" />
        <meta name="application-name" content="Panama Travel" />
        <meta name="msapplication-TileColor" content="#392477" />
        <meta name="theme-color" content="#392477" />
      </head>
      <body className="antialiased">
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="zkGEKByH1nEhGbxeG7ypWQ"
          strategy="afterInteractive"
        />
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq) return; 
            n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;
            n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <Image 
            height={1} 
            width={1} 
            style={{'display': "none"}}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <ScrollProvider>
          <AOSProvider>
            <Header />
            <main>{children}</main>
            <WhatsappWidget />
            <SiteFooter />
          </AOSProvider>
        </ScrollProvider>
      </body>
    </html>
  )
}