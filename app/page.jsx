import Cta from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Kontakt from "@/components/kontakt";
import Mlyn from "@/components/mlyn";
import PlanDne from "@/components/plan-dne";
import Podpora from "@/components/podpora";
import ShortNews from "@/components/shortNews.jsx";
import SkolaSkolka2 from "@/components/skolaSkolka2";
import Tym from "@/components/tym";
import Usp from "@/components/usp";
import Vice from "@/components/vice.jsx";
import Image from "next/image";

export const metadata = {
  title: "Domů",
  description:
    "Montessori škola a školka v srdci CHKO Kokořínsko. Alternativní vzdělávání pro děti od 3 do 12+ let v historické budově mlýna Kroužek.",
  openGraph: {
    title: "Svou Cestou - Montessori škola a školka",
    description:
      "Montessori škola a školka v srdci CHKO Kokořínsko. Alternativní vzdělávání pro děti od 3 do 12+ let v historické budově mlýna Kroužek.",
    url: "https://svoucestou.info",
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
  url: "https://svoucestou.info",
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
      <main className="text-lg">
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
      {/* <Mlyn /> */}
      {/* <PlanDne /> */}
      <Tym />
      <Podpora />
      <Kontakt />
      </main>
    </>
  );
}
