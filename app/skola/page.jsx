import Image from "next/image";
import { PRICING, SITE, formatCzk } from "@/lib/site-config";

const skolaPricingTiers = [
  {
    daysKey: "skolaDaysTier1",
    priceKey: "skolaTier1",
    descKey: "skolaTier1Description",
    cardClass: "min-h-[11rem] p-4 shadow-sm",
    priceClass: "text-xl",
  },
  {
    daysKey: "skolaDaysTier2",
    priceKey: "skolaTier2",
    descKey: "skolaTier2Description",
    cardClass: "min-h-[14rem] p-5 shadow-md",
    priceClass: "text-xl",
  },
  {
    daysKey: "skolaDaysTier3",
    priceKey: "skolaTier3",
    descKey: "skolaTier3Description",
    cardClass: "min-h-[17rem] p-6 shadow-xl",
    priceClass: "text-2xl",
  },
];

export const metadata = {
  title: "Montessori škola",
  description:
    "Montessori škola a výuková skupina pro děti na domácím vzdělávání (5–12+ let). Kosmická výchova, velké příběhy, smíšené skupiny. CHKO Kokořínsko, mlýn Kroužek.",
  alternates: {
    canonical: "/skola",
  },
  openGraph: {
    title: "Montessori škola | Svou Cestou",
    description:
      "Montessori škola a výuková skupina pro děti na domácím vzdělávání (5–12+ let). Kosmická výchova, velké příběhy, smíšené skupiny. CHKO Kokořínsko.",
    url: `${SITE.canonicalOrigin}/skola`,
  },
  twitter: {
    title: "Montessori škola | Svou Cestou",
    description:
      "Montessori škola a výuková skupina pro děti na domácím vzdělávání (5–12+ let). Kosmická výchova, velké příběhy, smíšené skupiny. CHKO Kokořínsko.",
  },
};

export default function Skola() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="headingPage mb-4">
          <h1 className="textNadpis">Montessori škola</h1>
          <h3 className="textPodNadpis">Cesta k poznání světa</h3>
        </div>
        {/* <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div> */}
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/2 sm:pr-8 sm:py-8">
            <h3 className="textPodNadpis mb-4">Pro děti od 5 do 12+ let</h3>
            <p className="leading-relaxed mb-4">
              V naší Montessori škole děti rostou nejen vědomostmi, ale i
              duchem. Jsme výuková skupina, která podporuje děti zapsané na
              domácím vzdělávání, aby se mohly socializovat, rozvíjet
              komunikační schopnosti a učit se v prostředí, které respektuje
              jejich individualitu. Montessori přístup v naší škole spočívá v
              tom, že dětem pomáháme rozvíjet jejich vnitřní touhu po poznání a
              sebedůvěru.
            </p>
            <p className="leading-relaxed mb-4">
              Naším cílem je spoluvytvářet prostor, který respektuje dětské
              potřeby, nabízí odpovědi na jejich otázky a zároveň podporuje
              jejich osobní růst. Jsme tu jako průvodci, abychom dětem pomohli
              najít svou vlastní cestu.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">
              Kosmická výchova – Poznávání světa v souvislostech
            </h3>
            <p className="leading-relaxed mb-4">
              Vzdělávání ve věku od 6 do 9 let, známé jako kosmická výchova, je
              postavené na tom, že děti se učí poznávat svět jako celek. Maria
              Montessori věřila, že je důležité učit děti nejen fakta, ale také
              pochopení souvislostí. Kosmos není jen o vědě a přírodě, ale také
              o vztazích mezi lidmi, přírodou a celým světem.
            </p>
            <p className="leading-relaxed mb-4">
              V tomto věku děti milují příběhy, proto je základem našeho
              přístupu vyprávění velkých příběhů, které děti vedou k hlubšímu
              pochopení světa.
            </p>
          </div>
          <div className="sm:w-1/2 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl  mx-auto"
              style={{ width: "auto", height: "auto" }}
              src="/skala.webp"
            />
            <div className="py-2 text-lg font-bold">
              „Pomoz mi, abych myslel sám.“
            </div>
            <div className="mb-4 text-sm italic font-light">M.Montessori</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse mt-10">
          <div className="sm:w-1/2 sm:pl-8 sm:py-8">
            <h3 className="textPodNadpis mb-4 mt-12">
            Velké příběhy – Učení prostřednictvím příběhů
            </h3>
            <p className="leading-relaxed mb-4">
            Na začátku každého školního roku představujeme dětem 5 (resp. 6) velkých příběhů, které jim pomáhají chápat základní principy světa kolem nás.
            </p>
            <p className="leading-relaxed mb-4">
            Tyto příběhy jsou základem pro další učení a rozvíjení zájmu dětí o různá témata. Postupně mohou děti objevovat menší a konkrétnější příběhy, které jim pomáhají nalézat odpovědi na jejich otázky a rozvíjet nové zájmy.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">
              Učení ve věkově smíšených skupinách
            </h3>
            <p className="leading-relaxed mb-4">
              Naše škola funguje v rámci tzv. trojročí, kde děti ve věku od 6 do
              9 let pracují společně. Smíšené skupiny podporují vzájemnou
              spolupráci, respekt a porozumění. Starší děti pomáhají mladším,
              zatímco mladší se učí od starších. Tento přístup podporuje
              vzájemné obohacení a hlubší vztahy mezi dětmi.
            </p>
            
            </div><div className="sm:w-1/2 sm:pr-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl mx-auto"
              style={{ width: "auto", height: "auto" }}
              src="/motylpng.webp"
            />
          </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/2 sm:pr-8 sm:py-8">
          <h3 className="textPodNadpis mb-4 mt-12">
              Učení mimo školní lavice
            </h3>
            <p className="leading-relaxed  mb-4">
              Děti v tomto věku mají přirozenou potřebu pohybu a objevování.
              Proto Montessori přístup staví na tom, že děti tráví hodně času
              venku, na výpravách a výletech. Děti se učí nejen v učebnách, ale
              i při praktických činnostech – například při nakupování,
              organizování výletů nebo návštěvách muzeí. Tento zážitek jim
              pomáhá pochopit reálný svět a rozvíjí jejich samostatnost.
            </p>
          </div>
          <div className="sm:w-1/2 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 mx-auto">
          <h3 className="textPodNadpis mb-4 mt-12">Každodenní harmonogram</h3>
            <p className="leading-relaxed  mb-4">
              Náš den je pečlivě strukturován, aby respektoval přirozené rytmy
              dětí, ale zároveň jim poskytoval dostatek volnosti pro vlastní
              objevování. Orientační struktura (časy se mohou mírně měnit podle
              ročního období a akcí):
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
              <li>
                <strong>8:15–8:45</strong> — příchod, klidná příprava na den
              </li>
              <li>
                <strong>9:00–12:20</strong> — pracovní blok (Montessori
                aktivity, projekty, individuální práce; část uvnitř / venku)
              </li>
              <li>
                <strong>12:20–13:00</strong> — oběd a odpočinek
              </li>
              <li>
                <strong>odpoledne</strong> — pokračování práce, výpravy,
                případně specializované aktivity podle domluvy
              </li>
            </ul>
            <p className="leading-relaxed text-sm text-gray-600 mb-4">
              Aktuální týdenní plán vám rádi upřesníme na osobní schůzce nebo
              e-mailem.
            </p>
          </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse mt-10">
          
          
        </div>
        <div className="w-full max-w-screen-md p-4 rounded-xl mx-auto">
            <h3 className="textPodNadpis mb-4 mt-12">Cena</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-4 md:items-center">
              {skolaPricingTiers.map(
                ({ daysKey, priceKey, descKey, cardClass, priceClass }) => (
                  <article
                    key={priceKey}
                    className={`rounded-2xl border border-gray-200 bg-white flex flex-col`}
                  >
                    <span className="font-bold text-sm md:text-base inline-block w-fit mb-3 text-monte-100 w-full text-center bg-monte-100 p-2 rounded-t-lg text-white" dangerouslySetInnerHTML={{ __html: PRICING[daysKey] }} />
                    
                    <ul className="text-sm text-gray-600 leading-relaxed mt-auto p-2 list-disc list-inside space-y-1">
                      {PRICING[descKey]?.length ? (
                        <ul className="mt-auto list-inside list-disc space-y-1 p-2 text-sm leading-relaxed text-gray-600">
                          {PRICING[descKey].map((item, index) => (
                            <li key={`${descKey}-${index}`}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </ul>
                    <p className="text-sm text-gray-600 leading-relaxed mt-auto text-right">
                      <span className="text-lg p-2 text-right w-full self-end">{formatCzk(PRICING[priceKey])}/měsíc</span>
                    </p>
                  </article>
                )
              )}
            </div>
            <p className="text-sm text-gray-700 mb-4">
              (sourozenec {PRICING.siblingDiscountPercent}% sleva)
            </p>
          </div>
      </div>
    </section>
  );
}
