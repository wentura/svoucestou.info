import Historie from "@/components/historie";
import { SITE } from "@/lib/site-config";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "O nás",
  description:
    "Poznejte příběh Montessori školy a školky Svou Cestou. Naše historie, hodnoty a cesta k respektujícímu vzdělávání v přírodě CHKO Kokořínsko.",
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    title: "O nás | Svou Cestou",
    description:
      "Poznejte příběh Montessori školy a školky Svou Cestou. Naše historie, hodnoty a cesta k respektujícímu vzdělávání v přírodě CHKO Kokořínsko.",
    url: `${SITE.canonicalOrigin}/o-nas`,
  },
  twitter: {
    title: "O nás | Svou Cestou",
    description:
      "Poznejte příběh Montessori školy a školky Svou Cestou. Naše historie, hodnoty a cesta k respektujícímu vzdělávání v přírodě CHKO Kokořínsko.",
  },
};

export default function Onas() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="headingPage mb-4">
          <h1 className="textNadpis">Svou cestou</h1>
          <h3 className="textPodNadpis">o nás a naší cestě</h3>
        </div>
        <div className="rounded-lg h-96 overflow-hidden relative">
          <Image
            alt="Svou cestou - Montessori škola a školka"
            className="object-cover object-center"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>
      <Historie />
    </section>
  );
}
