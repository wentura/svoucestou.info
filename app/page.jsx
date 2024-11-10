import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Kontakt from "@/components/kontakt";
import Mlyn from "@/components/mlyn";
import PlanDne from "@/components/plan-dne";
import Podpora from "@/components/podpora";
import SkolaSkolka from "@/components/skolaSkolka";
import Tym from "@/components/tym";
import Usp from "@/components/usp";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkolaSkolka />
      <Mlyn />
      <Usp />
      {/* <PlanDne /> */}
      {/* <Tym /> */}
      <Podpora />
      {/* <Kontakt /> */}
    </main>
  );
}
