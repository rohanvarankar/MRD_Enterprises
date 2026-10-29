import { Inter, Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: 'swap',
});

export const metadata = {
  title: "MRD Enterprises | Janseva Citizen Document Service Center, Thane",
  description: "Official Janseva Document Service Center in Thane (W). Fast, reliable assistance for Income, Domicile & Caste certificates, PAN card, Ration card, GST, Shop Act, and government welfare schemes.",
  keywords: "MRD Enterprises, Janseva Center Thane, Document Services Thane, Income Certificate, Domicile Certificate, Caste Certificate, PAN Card Center, Ration Card, Shop Act Gumasta Thane, GST Registration, Kolshet Road, Azad Nagar Thane",
  metadataBase: new URL('https://mrdenterprises.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MRD Enterprises | Janseva Citizen Document Service Center, Thane",
    description: "Official Janseva Document Service Center in Thane (W). Fast, reliable assistance for Income, Domicile & Caste certificates, PAN card, Ration card, GST, Shop Act, and government welfare schemes.",
    url: "https://mrdenterprises.in",
    siteName: "MRD Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "MRD Enterprises Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MRD Enterprises | Janseva Citizen Document Service Center, Thane",
    description: "Official Janseva Document Service Center in Thane (W). Fast, reliable assistance for Income, Domicile, Caste certificates, PAN, GST, and welfare schemes.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MRD Enterprises",
    "image": "https://mrdenterprises.in/logo.png",
    "@id": "https://mrdenterprises.in",
    "url": "https://mrdenterprises.in",
    "telephone": "+919082764520",
    "email": "mangesh10j@gmail.com",
    "priceRange": "₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 32, Raigad Chawl, Aazad Nagar, Kolshi Road",
      "addressLocality": "Thane (West)",
      "postalCode": "400607",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2183,
      "longitude": 72.9781
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "22:30"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${notoDevanagari.variable} font-sans antialiased bg-white text-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
