import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Kontakt from "@/components/kontakt";
import Myslenky from "@/components/myslenky";
import PlanDne from "@/components/plan-dne";
import Podpora from "@/components/podpora";
import Tym from "@/components/tym";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />

      <Myslenky />
      <PlanDne />
      <Tym />
      <Podpora />
      <Kontakt />
    </main>
  );
}
