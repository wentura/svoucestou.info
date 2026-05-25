import ContactForm from "@/components/contact-form";
import ContactInfoBlock from "@/components/contact-info-block";
import { PRICING, SITE, formatCzk } from "@/lib/site-config";
import Link from "next/link";

const skolaPricingTiers = [
  { daysKey: "skolaDaysTier1", priceKey: "skolaTier1", descKey: "skolaTier1Description" },
  { daysKey: "skolaDaysTier2", priceKey: "skolaTier2", descKey: "skolaTier2Description" },
  { daysKey: "skolaDaysTier3", priceKey: "skolaTier3", descKey: "skolaTier3Description" },
];

const desc = `Ceník Montessori školy a školky Svou Cestou: školka ${formatCzk(
  PRICING.monthlyTuitionCzkSkolka
)} měsíčně, škola od ${formatCzk(PRICING.skolaTier1)} do ${formatCzk(
  PRICING.skolaTier3
)} podle počtu dní, sourozenec sleva ${PRICING.siblingDiscountPercent} %.`;

export const metadata = {
  title: "Ceník",
  description: desc,
  alternates: {
    canonical: "/cenik",
  },
  openGraph: {
    title: "Ceník | Svou Cestou",
    description: desc,
    url: `${SITE.canonicalOrigin}/cenik`,
  },
  twitter: {
    title: "Ceník | Svou Cestou",
    description: desc,
  },
};

export default function Cenik() {
  return (
    <section className="container px-5 py-12 mx-auto">
      <div className="headingPage mb-8">
        <h1 className="textNadpis">Ceník</h1>
        <p className="textPodNadpis mt-2 max-w-2xl mx-auto">
          Přehled školného platného v aktuálním znění. Konkrétní rozvrh dní a
          pedagogické detaily najdete u{" "}
          <Link href="/skolka" className="text-monte-100 underline underline-offset-2">
            školky
          </Link>{" "}
          a u{" "}
          <Link href="/skola" className="text-monte-100 underline underline-offset-2">
            školy
          </Link>
          .
        </p>
      </div>

      <div className="max-w-screen-sm  mx-auto overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-monte-100 text-gray-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Služba</th>
              <th className="px-4 py-3 font-semibold">Dni</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2">
                <strong>Školka</strong>
              </td>
              <td className="px-2 py-2 text-gray-700" dangerouslySetInnerHTML={{ __html: PRICING.skolkaDays }} />
                            <td className="px-2 py-2 text-gray-900 whitespace-nowrap">
                <strong>{formatCzk(PRICING.monthlyTuitionCzkSkolka)}</strong> / měsíc
                
              </td>
            </tr>
            {skolaPricingTiers.map(({ daysKey, priceKey, descKey }, index) => (
              <tr
                key={priceKey}
                className={
                  index === 0
                    ? "border-t-4 border-monte-100"
                    : "border-t border-gray-200"
                }
              >
                {index === 0 ? (
                  <td className="px-2 py-2 align-top" rowSpan={skolaPricingTiers.length}>
                    <strong>Škola</strong>
                  </td>
                ) : null}
                <td className="px-2 py-2 text-gray-700 align-top" dangerouslySetInnerHTML={{ __html: PRICING[daysKey] }} />
                <td className="px-2 py-2 text-gray-900">
                  <strong className="whitespace-nowrap">
                    {formatCzk(PRICING[priceKey])} / měsíc
                  </strong>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-0.5">
                    {(Array.isArray(PRICING[descKey])
                      ? PRICING[descKey]
                      : [PRICING[descKey]]
                    ).map((item, itemIndex) => (
                      <li key={`${descKey}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 p-4">
          sourozenec se slevou {PRICING.siblingDiscountPercent} %
        </p>
      </div>

      <p className="max-w-2xl mx-auto mt-8 text-gray-600 text-sm leading-relaxed">
        Uvedené částky jsou informativní; závazné podmínky vždy upřesníme při
        zájmu o místo. Pro aktuální volnou kapacitu a zápis nás prosím{" "}
        <Link href="#dotaz" className="text-monte-100 underline underline-offset-2">
          napište pomocí formuláře níže
        </Link>{" "}
        nebo na stránce{" "}
        <Link href="/kontakt" className="text-monte-100 underline underline-offset-2">
          Kontakt
        </Link>{" "}
        (včetně mapy).
      </p>

      <div className="mt-12 w-full flex flex-col">
        <h2 className="textNadpis text-2xl md:text-3xl mb-6 text-center">
          Máte dotaz k ceně nebo zápisu?
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full justify-between">
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
          <ContactInfoBlock />
        </div>
      </div>
    </section>
  );
}
