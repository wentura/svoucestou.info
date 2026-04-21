import Link from "next/link";
import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Spolupráce",
  description:
    "Možnosti spolupráce s Montessori školou a školkou Svou Cestou. Podpora, partneři a způsoby, jak se zapojit.",
  alternates: {
    canonical: "/spoluprace",
  },
  openGraph: {
    title: "Spolupráce | Svou Cestou",
    description:
      "Možnosti spolupráce s Montessori školou a školkou Svou Cestou. Podpora, partneři a způsoby, jak se zapojit.",
    url: `${SITE.canonicalOrigin}/spoluprace`,
  },
  twitter: {
    title: "Spolupráce | Svou Cestou",
    description:
      "Možnosti spolupráce s Montessori školou a školkou Svou Cestou. Podpora, partneři a způsoby, jak se zapojit.",
  },
};

export default function Spoluprace() {
  return (
    <section className="container px-5 py-12 mx-auto flex flex-col">
      <div className="headingPage mb-8">
        <h1 className="textNadpis">Spolupráce</h1>
        <h2 className="textPodNadpis">Jak se můžete zapojit</h2>
      </div>

      <div className="max-w-3xl space-y-6 leading-relaxed text-gray-700">
        <p>
          Svou Cestou je otevřené partnerům, kteří sdílí hodnoty respektujícího
          vzdělávání, komunitní podpory a dlouhodobé práce s dětmi.
        </p>
        <p>
          Spolupráci rádi řešíme individuálně podle typu projektu: odborné
          workshopy, mentoring, komunitní akce nebo materiální podpora.
        </p>
      </div>

      <div className="mt-10 max-w-3xl rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="textPodNadpis mb-3">Nejčastější formy spolupráce</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>partnerství při vzdělávacích a komunitních akcích,</li>
          <li>sdílení odbornosti (workshopy, konzultace, supervize),</li>
          <li>dlouhodobá podpora konkrétních vzdělávacích aktivit.</li>
        </ul>
      </div>

      <p className="mt-8 text-gray-700">
        Pokud máte návrh spolupráce, napište nám přes{" "}
        <Link href="/kontakt" className="text-monte-100 underline underline-offset-2">
          kontaktní formulář
        </Link>{" "}
        a ozveme se vám s dalším postupem.
      </p>
    </section>
  );
}
