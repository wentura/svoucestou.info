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

const homeDescription =
  "Montessori škola a školka v Nebuželích (adresa Nebužely 3, mlýn Kroužek). Alternativní vzdělávání pro děti od 3 do 12+ let v srdci CHKO Kokořínsko.";

export const metadata = {
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.defaultTitle,
    description: homeDescription,
    url: SITE.canonicalOrigin,
  },
  twitter: {
    title: SITE.defaultTitle,
    description: homeDescription,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Svou Cestou",
  url: SITE.canonicalOrigin,
  description: homeDescription,
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
