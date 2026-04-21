import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Montessori škola 12+",
  description:
    "Montessori škola pro starší děti (12+): uplatnění vědomostí v reálném světě. Svou Cestou, mlýn Kroužek u Nebužel.",
  alternates: {
    canonical: "/skola12",
  },
  openGraph: {
    title: "Montessori škola 12+ | Svou Cestou",
    description:
      "Montessori škola pro starší děti — uplatnění vědomostí v reálném světě. Svou Cestou.",
    url: `${SITE.canonicalOrigin}/skola12`,
  },
  twitter: {
    title: "Montessori škola 12+ | Svou Cestou",
    description:
      "Montessori škola pro starší děti — uplatnění vědomostí v reálném světě. Svou Cestou.",
  },
};

export default function Skola12() {
  return (
    <section className="container px-5 py-12 mx-auto flex flex-col">
      <div className="headingPage mb-8">
        <h1 className="textNadpis">Montessori škola 12+</h1>
        <h2 className="textPodNadpis">Učení propojené s reálným světem</h2>
      </div>

      <div className="rounded-lg overflow-hidden">
        <Image
          alt="Montessori škola 12+"
          className="object-cover object-center w-full h-auto"
          src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp"
          width={1200}
          height={500}
          priority
        />
      </div>

      <div className="mt-10 max-w-3xl space-y-6 leading-relaxed text-gray-700">
        <p>
          Program 12+ navazuje na zkušenost dětí z předchozích ročníků a klade
          důraz na samostatnost, projektovou práci, odpovědnost za vlastní
          postup a praktické využití znalostí.
        </p>
        <p>
          Děti pracují na delších tématech, které propojují přírodní vědy,
          jazyk, matematiku i společenské oblasti. Součástí jsou výpravy,
          prezentace výsledků a pravidelná reflexe.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 max-w-3xl">
        <h3 className="textPodNadpis mb-3">Máte zájem o více informací?</h3>
        <p className="text-gray-700 mb-4">
          Aktuální kapacitu, podmínky a konkrétní organizaci programu 12+
          upřesňujeme individuálně podle situace dítěte.
        </p>
        <Link
          href="/kontakt#dotaz"
          className="text-monte-100 underline underline-offset-2 font-medium"
        >
          Napište nám přes kontaktní formulář
        </Link>
      </div>
    </section>
  );
}
