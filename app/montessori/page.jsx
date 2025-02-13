// import React from "react";
import Image from "next/image";
export default function Skolka() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="headingPage mb-4">
          <h1 className="textNadpis">Montessori vzdělávání</h1>
          <h3 className="textPodNadpis">Respektující cesta k rozvoji dítěte</h3>
        </div>
        {/* <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div> */}
        <div className="sm:pr-8 sm:py-8">
          <h3 className="textPodNadpis mb-4 mt-12">
            Proč Montessori vzdělávání?
          </h3>
          <p className="text-xl">
            Každé dítě je jedinečné, s vlastními zájmy, tempem učení a
            potřebami. Montessori vzdělávání je odpovědí na tuto individualitu.
            Umožňuje dětem, aby si osvojovaly dovednosti a vědomosti
            prostřednictvím praktických zkušeností, volby a aktivní účasti. Na
            rozdíl od tradičního vzdělávacího modelu, který často zdůrazňuje
            jednotnou osnovu a testování, Montessori metoda podporuje
            celoživotní lásku k učení a respektuje přirozený vývoj každého
            dítěte.
          </p>
          <p className="text-xl mb-4 mt-4">
            Důvod, proč se Montessori stává stále populárnějším, spočívá v jeho
            schopnosti kombinovat akademický, emocionální a sociální růst.
            Montessori přístup vytváří prostředí, kde se děti nejen učí, ale i
            rostou jako lidé, což je v dnešní uspěchané době nesmírně cenné.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/2 sm:pr-8 sm:py-8">
            <h3 className="textPodNadpis mb-4">
              Krátká historie Montessori metody
            </h3>
            <p>
              Maria Montessori, průkopnice této metody, začala svou cestu jako
              lékařka pracující s dětmi s vývojovými poruchami. Její úspěchy v
              oblasti speciální pedagogiky ji inspirovaly k vytvoření metodiky,
              kterou později aplikovala i na běžně se vyvíjející děti. V roce
              1907 otevřela v chudinské čtvrti Říma svůj první „Dům dětí“ (Casa
              dei Bambini), kde začala testovat své pedagogické přístupy.
            </p>
            <p className="mb-4 mt-4">
              Montessori si všimla, že děti, které měly možnost volit si
              aktivity a učit se prostřednictvím hry a praktických činností,
              dosahovaly lepších výsledků. Vytvořila tak systém založený na
              pozorování dětí, který kladl důraz na jejich přirozenou touhu
              objevovat a učit se. Od té doby se její metoda rozšířila do celého
              světa a je využívána v tisících škol.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">
              Celkový pohled na Montessori metodu
            </h3>
            <p className="mb-4 mt-4">
              Montessori vzdělávání není jen pedagogickou metodou – je to
              filozofie života. Tento přístup vychází z přesvědčení, že děti
              jsou přirozeně zvídavé a mají touhu učit se. Montessori metoda se
              zaměřuje na podporu dítěte v těchto oblastech:
            </p>
            <ul className="list-none seznamSkola text-base">
              <li>
                <span className="font-bold">Intelektuální rozvoj:</span> Pomocí
                praktických pomůcek a zkušeností se děti učí chápat složité
                koncepty přirozeně.
              </li>
              <li>
                <span className="font-bold">Emocionální stabilita:</span> Díky
                respektujícímu prostředí se děti cítí bezpečně, což podporuje
                jejich sebevědomí.
              </li>
              <li>
                <span className="font-bold">Sociální interakce:</span> Smíšené
                věkové skupiny učí děti spolupráci, empatii a respektu k
                ostatním.
              </li>
            </ul>
            <p className="mb-4 mt-4">
              Montessori prostředí je vytvořeno tak, aby děti mohly samostatně
              objevovat svět kolem sebe. Ve třídách nenajdete klasické lavice a
              tabule, ale prostor, kde děti pracují na zemi, u nízkých stolů
              nebo ve skupinách podle svých zájmů.
            </p>
          </div>
          <div className="sm:w-1/2 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl  mx-auto w-auto h-auto"
              src="/ruka.webp"
            />
            <div className="py-2 text-lg font-bold">
              „Ruka je nástroj ducha“
            </div>
            <div className="mb-4 text-sm italic font-light">M.Montessori</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse mt-10">
          <div className="sm:w-1/2 sm:pl-8 sm:py-8">
            <h3 className="textPodNadpis mb-4 mt-2">
              Klíčové principy Montessori vzdělávání
            </h3>
            <ul>
              <li className="mb-4">
                <div className="text-lg font-medium">Respekt k dítěti</div>
                Respekt je základním kamenem Montessori přístupu. Každé dítě je
                považováno za jedinečné, s vlastními potřebami a schopnostmi.
                Montessori průvodci se nesnaží děti přizpůsobit systému, ale
                naopak upravují prostředí a metody tak, aby vyhovovaly
                individuálnímu tempu každého dítěte. Respektuje se nejen dítě
                jako jedinec, ale i jeho proces učení.
              </li>
              <li className="mb-4">
                <div className="text-lg font-medium">Připravené prostředí</div>
                Prostředí je srdcem Montessori vzdělávání. Každý předmět a
                pomůcka mají své místo a jsou pečlivě navrženy tak, aby
                podporovaly samostatnost a učení. Například známá Růžová věž
                nebo Hnědé schody jsou nejen hračkami, ale i nástroji, které učí
                děti logickému myšlení, jemné motorice a koncentraci.
                <br />
                Připravené prostředí zahrnuje i venkovní prostor. Příroda je v
                Montessori vzdělávání důležitou součástí, protože děti se učí
                nejen ve třídách, ale i při pozorování přírody, pěstování
                rostlin a zkoumání okolního světa.
              </li>
              <li className="mb-4">
                <div className="text-lg font-medium">Polarizace pozornosti</div>
                Děti mají přirozenou schopnost ponořit se do činnosti, která je
                opravdu zajímá. Tento stav intenzivního soustředění, nazývaný
                polarizací pozornosti, je klíčem k efektivnímu učení. Montessori
                průvodci se snaží vytvořit prostředí, které podporuje tento
                stav, a poskytují dětem dostatek času na dokončení jejich
                aktivit.
              </li>
              <li className="mb-4">
                <div className="text-lg font-medium">
                  Smíšené věkové skupiny
                </div>
                V Montessori třídách spolupracují děti různého věku (obvykle
                tříleté rozmezí, např. 3–6 let nebo 6–9 let). Mladší děti se
                inspirují od starších, zatímco starší si prohlubují své znalosti
                tím, že pomáhají mladším. Tento model posiluje sociální
                dovednosti, respekt a vzájemnou pomoc.
              </li>
              <li className="mb-4">
                <div className="text-lg font-medium">Práce rukama</div>
                Montessori metoda zdůrazňuje význam manuální činnosti.
                Prostřednictvím manipulace s předměty děti lépe chápou
                abstraktní koncepty. Například při matematice děti pracují s
                pomůckami, které jim pomáhají pochopit čísla, objemy a
                geometrické vztahy.
              </li>
              <li className="mb-4">
                <div className="text-lg font-medium">
                  Svoboda v rámci pravidel
                </div>
                Montessori děti mají volnost ve výběru aktivit, ale tato svoboda
                je doprovázena jasnými pravidly, která zajišťují pořádek a
                respekt k ostatním. Tato kombinace svobody a pravidel pomáhá
                dětem budovat zodpovědnost.
              </li>
              <li className="mb-4">
                <div className="text-lg font-medium">Senzitivní období</div>
                Montessori zdůrazňovala tzv. senzitivní období – časové úseky,
                kdy je dítě obzvláště otevřené k osvojování určitých dovedností,
                jako je jazyk, motorika nebo sociální interakce. Montessori
                prostředí je navrženo tak, aby maximálně využilo těchto období.
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 sm:pr-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl  mx-auto w-auto h-auto"
              src="/do3let2.webp"
            />
            <div className="py-2 text-lg font-bold">
              „Ruka je nástroj ducha“
            </div>
            <div className="mb-4 text-sm italic font-light">M.Montessori</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/2 sm:pr-8 sm:py-8">
            <h3 className="textPodNadpis mb-4">
              Proč zvolit Montessori vzdělávání?
            </h3>
            <p className="leading-relaxed text-base mb-4">
              Montessori vzdělávání je jedinečné tím, že klade důraz na
              individualitu dítěte, jeho samostatnost a schopnost učit se
              prostřednictvím vlastních zkušeností. Děti, které absolvují
              Montessori školy, jsou často:
            </p>
            <ul className="list-disc list-inside pl-2 seznamSkola text-base">
              <li>Sebevědomé a zodpovědné,</li>
              <li>Schopné řešit problémy a spolupracovat,</li>
              <li>Přirozeně zvídavé a motivované k učení.</li>
            </ul>

            <p className="leading-relaxed mb-4 mt-4">
              Navíc díky praktickému zaměření a zapojení do reálného světa
              získávají dovednosti, které jim pomáhají v každodenním životě.
            </p>
            <p className="leading-relaxed mb-4 mt-4">
              Montessori vzdělávání je cestou, která nejen rozvíjí vědomosti,
              ale i charakter dítěte. Pokud hledáte způsob, jak podpořit
              přirozený růst a potenciál svého dítěte, Montessori může být tou
              správnou volbou.
            </p>
          </div>
          <div className="sm:w-1/2 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl  mx-auto w-auto h-auto"
              src="/ruka.webp"
            />
            <div className="py-2 text-lg font-bold">
              „Ruka je nástroj ducha“
            </div>
            <div className="mb-4 text-sm italic font-light">M.Montessori</div>
          </div>
        </div>
      </div>
    </section>
  );
}
