import { Inter, Poppins } from "next/font/google";
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

export const metadata = {
  title: "MRD ENTERPRISES | Official Citizen Service Hub Thane",
  description: "Official Janseva Document Service Center under MRD Enterprises. Providing fast and reliable assistance for Income, Domicile, Caste certificates, and more in Thane.",
  keywords: "MRD Enterprises, Janseva Center, Thane, Document Services, Income Certificate, Caste Certificate, RTO, Insurance",
  metadataBase: new URL('https://mrdenterprises.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MRD ENTERPRISES | Official Document Services',
    description: 'Fast, Professional, and Reliable Citizen Services in Thane.',
    url: 'https://mrdenterprises.in',
    siteName: 'MRD ENTERPRISES',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MRD ENTERPRISES",
    "image": "https://mrdenterprises.in/logo.png",
    "@id": "https://mrdenterprises.in",
    "url": "https://mrdenterprises.in",
    "telephone": "+919082764520",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Azad Nagar, Thane West",
      "addressLocality": "Thane",
      "postalCode": "400607",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.2183,
      "longitude": 72.9781
    },
    "openingHoursSpecification": {
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
      "closes": "21:00"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-black`}>
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
