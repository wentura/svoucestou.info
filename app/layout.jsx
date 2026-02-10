import Footer from "@/components/footer";
import Header from "@/components/header";
import RunningText from "@/components/runningText";
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
  metadataBase: new URL("https://svoucestou.info"),
  title: {
    default: "Svou Cestou, montessori škola a školka",
    template: "%s | Svou Cestou",
  },
  description:
    "Montessori škola a školka v srdci CHKO Kokořínsko v historické budově mlýna Kroužek.",
  keywords: [
    "montessori",
    "škola",
    "školka",
    "Kokořínsko",
    "alternativní vzdělávání",
    "domácí vzdělávání",
    "mlýn Kroužek",
  ],
  authors: [{ name: "Svou Cestou" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://svoucestou.info",
    siteName: "Svou Cestou",
    title: "Svou Cestou, montessori škola a školka",
    description:
      "Montessori škola a školka v srdci CHKO Kokořínsko v historické budově mlýna Kroužek.",
    images: [
      {
        url: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp",
        width: 1200,
        height: 630,
        alt: "Svou Cestou - Montessori škola a školka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Svou Cestou, montessori škola a školka",
    description:
      "Montessori škola a školka v srdci CHKO Kokořínsko v historické budově mlýna Kroužek.",
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
  description:
    "Montessori škola a školka v srdci CHKO Kokořínsko v historické budově mlýna Kroužek.",
  url: "https://svoucestou.info",
  logo: "https://svoucestou.info/svouCestou_logo.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nebužely 3, mlýn Kroužek",
    addressLocality: "Nebužely",
    postalCode: "277 34",
    addressCountry: "CZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+420777687496",
    email: "info@svoucestou.info",
    contactType: "Informace o škole a školce",
  },
  sameAs: [
    "https://www.facebook.com/svoucestoumontessori",
    "https://www.instagram.com/svoucestou/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${josefinSans.variable} ${openSans.variable} ${playfairDisplay.variable} ${yesevaOne.variable}`}>
      <body className="josefin-200 text-gray-700 max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />

        {children}
        {/* <Podpora /> */}
        <Footer />
      </body>
    </html>
  );
}
