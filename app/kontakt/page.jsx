import ContactForm from "@/components/contact-form";
import ContactInfoBlock from "@/components/contact-info-block";
import Kontakt from "@/components/kontakt";
import React from "react";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Montessori školu a školku Svou Cestou. Adresa: Nebužely 3, mlýn Kroužek, 277 34 Nebužely. Telefon: 777 687 496, email: info@svoucestou.info",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | Svou Cestou",
    description:
      "Kontaktujte Montessori školu a školku Svou Cestou. Adresa: Nebužely 3, mlýn Kroužek, 277 34 Nebužely. Telefon: 777 687 496, email: info@svoucestou.info",
    url: "https://svoucestou.info/kontakt",
  },
  twitter: {
    title: "Kontakt | Svou Cestou",
    description:
      "Kontaktujte Montessori školu a školku Svou Cestou. Adresa: Nebužely 3, mlýn Kroužek, 277 34 Nebužely. Telefon: 777 687 496, email: info@svoucestou.info",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://svoucestou.info/kontakt",
  name: "Svou Cestou - Montessori škola a školka",
  image: "https://svoucestou.info/svouCestou_logo.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nebužely 3, mlýn Kroužek",
    addressLocality: "Nebužely",
    postalCode: "277 34",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.4167",
    longitude: "14.5667",
  },
  telephone: "+420777687496",
  email: "info@svoucestou.info",
  url: "https://svoucestou.info",
  priceRange: "$$",
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <section className="">
        <div className="container px-5 py-12 mx-auto flex flex-col">
          <div className="headingPage mb-8">
            <h1 className="textNadpis">Svou cestou</h1>
            <h3 className="textPodNadpis">Montessori škola a školka</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full justify-between">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            <ContactInfoBlock />
          </div>
        </div>
        <Kontakt />
      </section>
    </>
  );
}
