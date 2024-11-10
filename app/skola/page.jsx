// import React from "react";
import Image from "next/image";
export default function Skola() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="headingPage mb-4">
          <h1 className="textNadpis">Montessori škola</h1>
          <h3 className="textPodNadpis">Cesta k poznání světa</h3>
        </div>
        <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/2 sm:pr-8 sm:py-8">
            <h3 className="textPodNadpis mb-4">Pro děti od 5 do 12+ let</h3>
            <p className="leading-relaxed text-base mb-4">
              V naší Montessori škole děti rostou nejen vědomostmi, ale i
              duchem. Jsme výuková skupina, která podporuje děti zapsané na
              domácím vzdělávání, aby se mohly socializovat, rozvíjet
              komunikační schopnosti a učit se v prostředí, které respektuje
              jejich individualitu. Montessori přístup v naší škole spočívá v
              tom, že dětem pomáháme rozvíjet jejich vnitřní touhu po poznání a
              sebedůvěru.
            </p>
            <p className="leading-relaxed text-base mb-4">
              Naším cílem je spoluvytvářet prostor, který respektuje dětské
              potřeby, nabízí odpovědi na jejich otázky a zároveň podporuje
              jejich osobní růst. Jsme tu jako průvodci, abychom dětem pomohli
              najít svou vlastní cestu.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">
              Kosmická výchova – Poznávání světa v souvislostech
            </h3>
            <p className="leading-relaxed text-base mb-4">
              Vzdělávání ve věku od 6 do 9 let, známé jako kosmická výchova, je
              postavené na tom, že děti se učí poznávat svět jako celek. Maria
              Montessori věřila, že je důležité učit děti nejen fakta, ale také
              pochopení souvislostí. Kosmos není jen o vědě a přírodě, ale také
              o vztazích mezi lidmi, přírodou a celým světem.
            </p>
            <p className="leading-relaxed text-base mb-4">
              V tomto věku děti milují příběhy, proto je základem našeho
              přístupu vyprávění velkých příběhů, které děti vedou k hlubšímu
              pochopení světa.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">
              Velké příběhy – Učení prostřednictvím příběhů
            </h3>
            <p className="leading-relaxed text-base mb-4">
              Na začátku každého školního roku představujeme dětem 5 (resp. 6)
              velkých příběhů, které jim pomáhají chápat základní principy světa
              kolem nás:
            </p>
            {/* <ul className="list-none seznamSkola text-base">
              <li>
                <span className="font-bold">Příběh o vzniku vesmíru</span>–
                „Bůh, který neměl ruce“
              </li>
              <li>
                <span className="font-bold">
                  Příběh o vzniku života na Zemi
                </span>{" "}
              </li>
              <li>
                <span className="font-bold">
                  Příběh o vývoji člověka na Zemi
                </span>{" "}
              </li>
              <li>
                <span className="font-bold">
                  První příběh o komunikaci pomocí znaků
                </span>{" "}
                – „O býku a domě“
              </li>
              <li>
                <span className="font-bold">
                  Druhý příběh o komunikaci pomocí znaků
                </span>{" "}
                – „Příběh lovců“
              </li>
              <li>
                <span className="font-bold">Příběh o lidském těle</span> – „O
                velké řece“
              </li>
            </ul> */}
            <p className="leading-relaxed mb-4 mt-12">
              Tyto příběhy jsou základem pro další učení a rozvíjení zájmu dětí
              o různá témata. Postupně mohou děti objevovat menší a konkrétnější
              příběhy, které jim pomáhají nalézat odpovědi na jejich otázky a
              rozvíjet nové zájmy.
            </p>
          </div>
          <div className="sm:w-1/2 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl  mx-auto w-auto h-auto"
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
              Učení ve věkově smíšených skupinách
            </h3>
            <p className="leading-relaxed mb-4">
              Naše škola funguje v rámci tzv. trojročí, kde děti ve věku od 6 do
              9 let pracují společně. Smíšené skupiny podporují vzájemnou
              spolupráci, respekt a porozumění. Starší děti pomáhají mladším,
              zatímco mladší se učí od starších. Tento přístup podporuje
              vzájemné obohacení a hlubší vztahy mezi dětmi.
            </p>
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
            <h3 className="textPodNadpis mb-4 mt-12">Každodenní harmonogram</h3>
            <p className="leading-relaxed  mb-4">
              Náš den je pečlivě strukturován, aby respektoval přirozené rytmy
              dětí, ale zároveň jim poskytoval dostatek volnosti pro vlastní
              objevování.
            </p>
            <h3 className="textPodNadpis mb-4 mt-12">Harmonogram dne</h3>
            <ul className="leading-relaxed  mb-4">
              <li>
                8<sup>30</sup> - 9<sup>00</sup>setkání se, volné hry
              </li>
              <li>
                9<sup>00</sup> - 12
                <sup>00</sup> dopolední pracovní blok
              </li>
              <li>
                12<sup>00</sup> - 12<sup>30</sup>
                oběd
              </li>
              <li>
                12
                <sup>30</sup> - 16<sup>00</sup> odpolední práce / pobyt venku
              </li>
              <li>
                16<sup>00</sup> odchod domů
              </li>
            </ul>
          </div>
          <div className="sm:w-1/2 sm:pr-8 sm:py-8 mt-4 pt-4 sm:mt-0  text-center mx-auto">
            <Image
              height={600}
              width={600}
              alt="content"
              className="rounded-xl drop-shadow-xl mx-auto w-auto h-auto"
              src="/motylpng.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
