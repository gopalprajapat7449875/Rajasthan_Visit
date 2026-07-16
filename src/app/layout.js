import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Royal Rajasthan Travels | Premium Taxi Booking & Luxury Tour Packages",
  description: "Experience the royal heritage of Rajasthan with premier chauffeur-driven taxi rentals and customized tour packages. Book online for Jaipur, Udaipur, Jodhpur, and Jaisalmer.",
  metadataBase: new URL("https://royalrajasthantravels.com"),
  keywords: ["Rajasthan Tour Packages", "Taxi Booking Rajasthan", "Luxury Car Rental Udaipur", "Jaipur Taxi Service", "Jaisalmer Desert Safari", "Innova Crysta Rental Rajasthan"],
  authors: [{ name: "Royal Rajasthan Travels" }],
  openGraph: {
    title: "Royal Rajasthan Travels | Luxury Taxi Booking & Tours",
    description: "Premium outstation car rentals, airport transfers, and bespoke heritage tour packages across Rajasthan.",
    url: "https://royalrajasthantravels.com",
    siteName: "Royal Rajasthan Travels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477584305850-385010989279?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Royal Rajasthan Palace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Rajasthan Travels | Luxury Taxi Booking & Tours",
    description: "Bespoke tour packages and premium taxi services in Rajasthan's finest destinations.",
    images: ["https://images.unsplash.com/photo-1477584305850-385010989279?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Royal Rajasthan Travels",
  "image": "https://images.unsplash.com/photo-1477584305850-385010989279?auto=format&fit=crop&w=1200&q=80",
  "description": "Royal Rajasthan Travels provides luxury taxi rentals, airport transfers, and customized tour packages for Udaipur, Jaipur, Jodhpur, and Jaisalmer.",
  "url": "https://royalrajasthantravels.com",
  "telephone": "+919876543210",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "102 Palace Road, Near City Palace",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "313001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "24.5854",
    "longitude": "73.7125"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/royalrajasthan",
    "https://www.instagram.com/royalrajasthan"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased">
        {/* Preloader */}
        <Preloader />
        
        {/* Sticky Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="min-h-screen pt-[88px] relative overflow-hidden">
          {children}
        </main>
        
        {/* Global Layout Helpers */}
        <WhatsAppButton />
        <ScrollToTop />
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
