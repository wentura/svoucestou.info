import Link from "next/link";

const REFERENCES = [
  {
    quote:
      "Konečně máme pocit, že škola nebere dítěti osobnost — mluví s námi otevřeně a dává smysl tomu, proč se co dělá.",
    role: "Rodič školáka",
  },
  {
    quote:
      "Nejvíc oceňuju srozumitelnost kolem domácího vzdělávání a že dítě má partu i režim, ne jen „volnou školu“.",
    role: "Rodič na DV",
  },
  {
    quote:
      "Prostředí mlýna a venku je pro nás velká přidaná hodnota — ale rozhodovali jsme se až po konkrétním popisu týdne a setkání s týmem.",
    role: "Rodič předškolního dítěte",
  },
];

const FAQ = [
  {
    q: "Je škola státní, nebo jen klub?",
    a: "Provoz zajišťuje spolek Montessori Guru z.s. jako zřizovatel; školní skupina slouží dětem zapsaným na domácím vzdělávání — právní rámec DV zůstává na straně rodiny a školského úřadu. Rádi vysvětlíme, jak u nás konkrétně spolupracujeme.",
  },
  {
    q: "Co přesně znamená „škola“ u vás?",
    a: "Jde o pravidelnou výukovou skupinu v Montessori přístupu pro děti na domácím vzdělávání — socializace, struktura dne a vedení průvodci, ne klasická „štátní třída“.",
  },
  {
    q: "Proč má školka i škola podobnou cenu?",
    a: "Ceník sjednocujeme přehledně; detaily režimu dní (např. sportovní pondělí u školy) jsou u jednotlivých nabídek. Aktuální částky jsou vždy i na stránce Ceník.",
  },
  {
    q: "Překrývá se věk školky (3–6) a školy (5–12+)?",
    a: "Ano, v rozmezí kolem pěti a šesti let řešíme přechod individuálně podle zralosti dítěte a domluvy s vámi — není to automatický přeskok ročníkem.",
  },
];

export default function TrustSection() {
  return (
    <section className="text-gray-600 body-font py-16 md:py-24">
      <div className="container px-5 mx-auto">
        {/* <h2 className="textNadpis mb-4">Reference a časté dotazy</h2> */}
        <h2 className="textNadpis mb-4">Reference</h2>
        <p className="leading-relaxed mb-10 max-w-2xl text-gray-600">
          Rozhodnutí nechceme nahánět slogany — níže jsou typické ohlasy a
          odpovědi, které rodičům pomáhají posunout se dál. Chcete osobní
          schůzku?{" "}
          <Link
            href="/kontakt#dotaz"
            className="text-monte-100 font-medium underline underline-offset-2"
          >
            Napište nám
          </Link>
          .
        </p>

        <div className="flex flex-wrap -m-4 mb-16">
          {REFERENCES.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <blockquote className="h-full p-6 border border-gray-200 rounded-lg bg-gray-50/80">
                <p className="leading-relaxed text-gray-800 mb-4">
                  „{item.quote}“
                </p>
                <footer className="text-sm text-gray-500">— {item.role}</footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* <h3 className="textPodNadpis mb-6">Časté dotazy</h3>
        <div className="max-w-3xl space-y-3">
          {FAQ.map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-lg bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none px-4 py-3 font-medium text-gray-900 flex justify-between gap-2 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-monte-100 shrink-0 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="px-4 pb-4 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                {item.a}
              </p>
            </details>
          ))}
        </div> */}
      </div>
    </section>
  );
}
