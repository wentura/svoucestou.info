import Footer from "@/components/footer";
import Header from "@/components/header";
import MobileNavRouteSync from "@/components/MobileNavRouteSync";
import RunningText from "@/components/runningText";
import { SITE } from "@/lib/site-config";
import { Josefin_Sans, Open_Sans, Playfair_Display, Yeseva_One } from "next/font/google";
import "../public/style.css";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-josefin-sans",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-playfair-display",
  display: "swap",
});

const yesevaOne = Yeseva_One({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-yeseva-one",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.canonicalOrigin),
  title: {
    default: SITE.defaultTitle,
    template: "%s | Svou Cestou",
  },
  description: SITE.defaultDescription,
  authors: [{ name: "Svou Cestou" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE.canonicalOrigin,
    siteName: "Svou Cestou",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp",
        width: 1200,
        height: 630,
        alt: "Svou Cestou - Montessori škola a školka, Nebužely 3, mlýn Kroužek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp",
    ],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Svou Cestou",
  alternateName: "Montessori škola a školka Svou Cestou",
  description: SITE.defaultDescription,
  url: SITE.canonicalOrigin,
  logo: `${SITE.canonicalOrigin}/svouCestou_logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressStreet,
    addressLocality: SITE.addressCity,
    postalCode: SITE.addressPostalCode,
    addressCountry: SITE.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geoLatitude,
    longitude: SITE.geoLongitude,
  },
  hasMap: SITE.googleMapsUrl,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.contactPhoneHref,
    email: SITE.contactEmail,
    contactType: "Informace o škole a školce",
  },
  sameAs: [
    "https://www.facebook.com/svoucestoumontessori",
    "https://www.instagram.com/svoucestou/",
    SITE.googleMapsUrl,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${josefinSans.variable} ${openSans.variable} ${playfairDisplay.variable} ${yesevaOne.variable}`}>
      <body className="josefin-400 text-base md:text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <RunningText />
        <Header />
        <MobileNavRouteSync />

        {children}
        {/* <Podpora /> */}
        <Footer />
      </body>
    </html>
  );
}
