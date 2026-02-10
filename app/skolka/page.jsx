import Image from "next/image";

export const metadata = {
  title: "Montessori školka",
  description:
    "Montessori školka pro děti od 3 do 6 let. Objevování světa rukama a srdcem v přírodním prostředí CHKO Kokořínsko.",
  openGraph: {
    title: "Montessori školka | Svou Cestou",
    description:
      "Montessori školka pro děti od 3 do 6 let. Objevování světa rukama a srdcem v přírodním prostředí CHKO Kokořínsko.",
    url: "https://svoucestou.info/skolka",
  },
  twitter: {
    title: "Montessori školka | Svou Cestou",
    description:
      "Montessori školka pro děti od 3 do 6 let. Objevování světa rukama a srdcem v přírodním prostředí CHKO Kokořínsko.",
  },
};

export default function Skolka() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="headingPage mb-4">
          <h1 className="textNadpis">Montessori školka</h1>
          <h3 className="textPodNadpis">Objevování světa rukama a srdcem</h3>
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
            <h3 className="textPodNadpis mb-4">Pro děti od 3 do 6 let</h3>
            <p className="leading-relaxed text-base mb-4">
              V naší Montessori školce děti objevují svět prostřednictvím
              doteku, smyslů a vlastní zkušenosti. V tomto klíčovém období děti
              zkoumají nejen rukama, ale i myslí, rozvíjejí vztahy s ostatními,
              učí se porozumět řádu světa kolem sebe. Montessori přístup
              umožňuje dětem volit si aktivity, které je v daném okamžiku
              zajímají, a rozvíjet se vlastním tempem.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">Pro děti od 3 do 6 let</h3>
            <ul className="list-none seznamSkola text-base">
              <li>
                <span className="font-bold">Ruka je nástroj ducha:</span> Děti
                pomocí rukou zkoumají svět – psaní, kreslení, hmatové zkoumání a
                úchop věcí je pro ně přirozené.
              </li>
              <li>
                <span className="font-bold">
                  Citlivost pro matematiku a jazyk:
                </span>{" "}
                V tomto věku nastává období senzitivity pro matematiku, čtení a
                psaní. Montessori přístup nabízí dítěti nástroje k tomu, aby
                tyto schopnosti rozvíjelo vlastní cestou.
              </li>
              <li>
                <span className="font-bold">Zájem o přírodu a kulturu:</span>{" "}
                Děti v tomto věku mají přirozený zájem o svět kolem sebe – o
                přírodu, různé kultury a způsob, jak věci fungují.
              </li>
              <li>
                <span className="font-bold">Smyslový rozvoj:</span> Montessori
                pomůcky pomáhají dětem zdokonalovat smyslové dovednosti, jako je
                rozlišování barev, tvarů, objemů nebo teploty.
              </li>
            </ul>
            <p className="leading-relaxed mb-4 mt-12">
              Montessori prostředí, které jsme pro děti připravili, je pečlivě
              navrženo tak, aby podněcovalo jejich zájem a umožňovalo jim volit
              si činnosti podle jejich vlastních potřeb. Děti pracují ve
              smíšených věkových skupinách, což jim umožňuje učit se jeden od
              druhého, rozvíjet vzájemnou toleranci a trpělivost.
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
            <h3 className="textPodNadpis mb-4 mt-12">
              Proč přijímáme děti od 3 let?
            </h3>
            <p className="leading-relaxed mb-4">
              Každé vývojové období dítěte má své specifické potřeby. Naše
              prostředí je připraveno právě pro děti ve věku od 3 do 6 let,
              protože jim můžeme poskytnout vše, co v tomto období potřebují.
              Tříleté děti mají potřebu pravidelného řádu, bezpečí a stability,
              což jim naše školka nabízí. Děti do tří let mají své specifické
              potřeby, které nejsou v souladu s potřebami starších dětí, proto
              respektujeme jejich vývoj a přijímáme děti až od věku tří let.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">
              Každý den objevujeme a učíme se
            </h3>
            <p className="leading-relaxed  mb-4">
              Naše denní struktura je navržena tak, aby respektovala přirozené
              rytmy dětí. V rámci pracovních bloků mají děti dostatek času na
              práci, zkoumání a objevování, a to jak uvnitř, tak venku v
              přírodě.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">Cena</h3>
            <ul className="leading-relaxed  mb-4">
              <li>
                sportovní pondělí
              </li>
              <li>
                učící úterý - čtvrtek
              </li>
              <li className="font-bold pt-4">
                7000Kč měsíčně
              </li>
              <li>
              (sourozenec 10% sleva)
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
      </div>
    </section>
  );
}
