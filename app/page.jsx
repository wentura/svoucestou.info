import Features from "@/components/features";
import Hero from "@/components/hero";
import Kontakt from "@/components/kontakt";
import ShortNews from "@/components/shortNews.jsx";
import SkolaSkolka2 from "@/components/skolaSkolka2";
import Podpora from "@/components/podpora";
import TrustSection from "@/components/trust-section";
import Tym from "@/components/tym";
import Usp from "@/components/usp";
import { SITE } from "@/lib/site-config";

export const metadata = {
  // title: "Domů",
  description:
    "Montessori škola a školka v srdci CHKO Kokořínsko. Alternativní vzdělávání pro děti od 3 do 12+ let v historické budově mlýna Kroužek.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Svou Cestou - Montessori škola a školka",
    description:
      "Montessori škola a školka v srdci CHKO Kokořínsko. Alternativní vzdělávání pro děti od 3 do 12+ let v historické budově mlýna Kroužek.",
    url: SITE.canonicalOrigin,
  },
  twitter: {
    title: "Svou Cestou - Montessori škola a školka",
    description:
      "Montessori škola a školka v srdci CHKO Kokořínsko. Alternativní vzdělávání pro děti od 3 do 12+ let v historické budově mlýna Kroužek.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Svou Cestou",
  url: SITE.canonicalOrigin,
  description:
    "Montessori škola a školka v srdci CHKO Kokořínsko v historické budově mlýna Kroužek.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main>
      <Hero />
      <Features />
      <SkolaSkolka2 />
      <ShortNews />
      {/* <Vice /> */}
      {/* <Cta
        title="Pridej se k nam"
        text="Pridat se k nam"
        linkText="Pridat se"
        link={"/"}
				/> */}
      <Usp />
      <TrustSection />
      <Tym />
      <Podpora />
      <Kontakt />
      </main>
    </>
  );
}
