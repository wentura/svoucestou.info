import ContactForm from "@/components/contact-form";
import ContactInfoBlock from "@/components/contact-info-block";
import { PRICING, SITE, formatCzk } from "@/lib/site-config";
import Link from "next/link";

const desc = `Ceník Montessori školy a školky Svou Cestou: školné ${formatCzk(
  PRICING.monthlyTuitionCzk
)} měsíčně, sourozenec sleva ${PRICING.siblingDiscountPercent} %. Dotaz k ceně nebo zápisu můžete poslat přímo z této stránky. Podrobnosti k režimu dní na stránkách školka a škola.`;

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

      <div className="max-w-3xl mx-auto overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-monte-200 text-gray-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Služba</th>
              <th className="px-4 py-3 font-semibold">Režim dní (orientačně)</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Cena</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4">
                <strong>Montessori školka</strong>
                <br />
                <span className="text-gray-600 text-sm">
                  děti cca 3–6 let
                </span>
              </td>
              <td className="px-4 py-4 text-gray-700">
                {PRICING.skolkaDays}
              </td>
              <td className="px-4 py-4 text-gray-900 whitespace-nowrap">
                <strong>{formatCzk(PRICING.monthlyTuitionCzk)}</strong> / měsíc
                <br />
                <span className="text-sm text-gray-600">
                  sourozenec −{PRICING.siblingDiscountPercent} %
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4">
                <strong>Montessori škola</strong>
                <br />
                <span className="text-gray-600 text-sm">
                  výuková skupina pro děti na domácím vzdělávání, cca 5–12+ let
                </span>
              </td>
              <td className="px-4 py-4 text-gray-700">
                {PRICING.skolaDays}
              </td>
              <td className="px-4 py-4 text-gray-900 whitespace-nowrap">
                <strong>{formatCzk(PRICING.monthlyTuitionCzk)}</strong> / měsíc
                <br />
                <span className="text-sm text-gray-600">
                  sourozenec −{PRICING.siblingDiscountPercent} %
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
