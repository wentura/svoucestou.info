import ContactForm from "@/components/contact-form";
import ContactInfoBlock from "@/components/contact-info-block";
import Kontakt from "@/components/kontakt";
import { SITE } from "@/lib/site-config";
import React from "react";

const desc = `Kontaktujte Montessori školu a školku Svou Cestou. Adresa: ${SITE.addressStreet}, ${SITE.addressPostalCode} ${SITE.addressCity}. Telefon: ${SITE.contactPhoneDisplay}, email: ${SITE.contactEmail}`;

export const metadata = {
  title: "Kontakt",
  description: desc,
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | Svou Cestou",
    description: desc,
    url: `${SITE.canonicalOrigin}/kontakt`,
  },
  twitter: {
    title: "Kontakt | Svou Cestou",
    description: desc,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.canonicalOrigin}/kontakt`,
  name: "Svou Cestou - Montessori škola a školka",
  image: `${SITE.canonicalOrigin}/svouCestou_logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressStreet,
    addressLocality: SITE.addressCity,
    postalCode: SITE.addressPostalCode,
    addressCountry: SITE.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.4167",
    longitude: "14.5667",
  },
  telephone: SITE.contactPhoneHref,
  email: SITE.contactEmail,
  url: SITE.canonicalOrigin,
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
