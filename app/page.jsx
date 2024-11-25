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
export default function Home() {
  return (
    <main className="">
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
  );
}
