import { SITE } from "@/lib/site-config";

export const metadata = {
  title: "Ochrana soukromí",
  description:
    "Informace o zpracování osobních údajů, kontaktním formuláři a analytice na webu Svou Cestou.",
  alternates: {
    canonical: "/ochrana-soukromi",
  },
  openGraph: {
    title: "Ochrana soukromí | Svou Cestou",
    description:
      "Informace o zpracování osobních údajů, kontaktním formuláři a analytice na webu Svou Cestou.",
    url: `${SITE.canonicalOrigin}/ochrana-soukromi`,
  },
  twitter: {
    title: "Ochrana soukromí | Svou Cestou",
    description:
      "Informace o zpracování osobních údajů, kontaktním formuláři a analytice na webu Svou Cestou.",
  },
};

export default function OchranaSoukromiPage() {
  return (
    <section className="container px-5 py-12 mx-auto">
      <div className="headingPage mb-8">
        <h1 className="textNadpis">Ochrana soukromí</h1>
        <p className="textPodNadpis mt-2">
          Jak pracujeme s osobními údaji a analytikou na webu.
        </p>
      </div>

      <div className="max-w-3xl space-y-8 leading-relaxed text-gray-700">
        <div>
          <h2 className="textPodNadpis mb-3">Správce údajů</h2>
          <p>
            {SITE.name}, zřizovatel {SITE.founderName}, {SITE.addressStreet},{" "}
            {SITE.addressPostalCode} {SITE.addressCity}.
          </p>
          <p>
            Kontakt:{" "}
            <a className="underline underline-offset-2" href={`mailto:${SITE.contactEmail}`}>
              {SITE.contactEmail}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="textPodNadpis mb-3">Kontaktní formulář</h2>
          <p>
            Ve formuláři zpracováváme pouze údaje, které sami odešlete (jméno,
            e-mail, zpráva a volitelně věk dítěte/ročník) za účelem odpovědi na
            váš dotaz.
          </p>
          <p>
            Údaje neposkytujeme třetím stranám mimo nezbytné zpracovatele
            technického doručení e-mailu.
          </p>
        </div>

        <div>
          <h2 className="textPodNadpis mb-3">Analytika (Matomo)</h2>
          <p>
            Web používá měření návštěvnosti pomocí nástroje Matomo v minimálním
            režimu pro provozní vyhodnocení fungování webu.
          </p>
          <p>
            Data používáme pro interní statistiku návštěvnosti a zlepšování
            obsahu webu.
          </p>
        </div>

        <div>
          <h2 className="textPodNadpis mb-3">Vaše práva</h2>
          <p>
            Máte právo požádat o informaci, opravu nebo výmaz osobních údajů,
            které o vás zpracováváme. V případě dotazu nás kontaktujte na{" "}
            <a className="underline underline-offset-2" href={`mailto:${SITE.contactEmail}`}>
              {SITE.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
