// import React from "react";

import Link from "next/link";

export default function SkolaSkolka() {
  return (
    <section className="bg-monte-200 py-12 my-12 md:py-24 md:my-24">
      <div className="container  mx-auto">
        {/* <h1 className="mb-20 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
          Raw Denim Heirloom Man Braid
          <br className="hidden sm:block" />
          Selfies Wayfarers
        </h1> */}
        <div className="flex flex-wrap justify-around">
          <Link
            className="flex p-16 m-2 xl:w-5/12 bg-white rounded-3xl shadow-inner shadow-2xl hover:shadow-xl transition duration-300 ease-in-out group"
            href="/skolka"
          >
            <div className="flex-grow">
              {/* <h2 className="text-xl font-bold md:text-2xl "> */}
              <h2
                className="text-xl font-bold md:text-2xl group-hover:scale-125 transition duration-300 ease-in-out group-hover:text-monte-100 group-hover:-rotate-2 group-hover:-translate-y-2 sm:group-hover:translate-y-6 group-hover:translate-x-12 md:group-hover:translate-y-4 md:group-hover:translate-x-24 lg:group-hover:-translate-y-4 lg:group-hover:translate-x-36 
							xl:group-hover:translate-y-16 xl:group-hover:translate-x-4 2xl:group-hover:translate-y-10 2xl:group-hover:translate-x-8"
              >
                Montessori školka{" "}
                <span className="group-hover:opacity-0 transition duration-100 ease-in-out ">
                  (pro děti od 3 do 6 let)
                </span>
              </h2>
              <p
                className="pb-6 text-base leading-relaxed group-hover:font-extrabold sm:group-hover:text-2xl md:group-hover:scale-115 transition duration-300 ease-in-out
							sm:group-hover:-translate-y-6 sm:group-hover:translate-x-24 group-hover:text-monte-100 sm:group-hover:rotate-6 md:group-hover:-translate-y-6 md:group-hover:translate-x-64 lg:group-hover:-translate-y-6 lg:group-hover:translate-x-96 xl:group-hover:-translate-y-12 xl:group-hover:translate-x-2 2xl:group-hover:-translate-y-8 2xl:group-hover:translate-x-32"
              >
                „Pomoz mi, abych to dokázal sám.“
              </p>
              <p className="text-base leading-relaxed">
                V naší školce děti objevují svět svým vlastním tempem. Naším
                cílem je podporovat jejich přirozenou touhu učit se a rozvíjet
                se prostřednictvím speciálně připraveného prostředí, kde si
                mohou samy vybírat aktivity a učit se hrou.
              </p>
              <ul className="pt-2 pl-6 list-none">
                <li>
                  <strong>Montessori přístup:</strong> Děti se učí
                  prostřednictvím vlastních prožitků, objevují svět kolem sebe a
                  my jim v tom s láskou pomáháme.{" "}
                </li>
                <li>
                  <strong>Venkovní aktivity:</strong> Každý den trávíme čas
                  venku – na zahradě, v lese nebo při péči o zvířata a rostliny.{" "}
                </li>
                <li>
                  <strong>Rozvoj samostatnosti a sebevědomí:</strong> Umožňujeme
                  dětem samostatně pracovat na úkolech a projektech, čímž
                  podporujeme jejich sebedůvěru.
                </li>
              </ul>

              <span className="inline-flex items-center mt-3 underline-offset-4 decoration-4 decoration-monte-100 group-hover:underline group-hover:scale-105 transition duration-300 ease-in-out group-hover:text-monte-100 group-hover:rotate-2 group-hover:translate-y-3 group-hover:translate-x-5">
                Více informací o montessori školce
              </span>
            </div>
          </Link>
          <Link
            className="flex p-16 m-2 xl:w-5/12 bg-white rounded-3xl shadow-inner shadow-2xl hover:shadow-xl transition duration-300 ease-in-out group"
            href="/skola"
          >
            <div className="flex-col">
              {/* <h2 className="text-xl font-bold md:text-2xl "> */}
              <h2
                className="text-xl font-bold md:text-2xl group-hover:scale-125 transition duration-300 ease-in-out group-hover:text-monte-100 group-hover:-rotate-2 group-hover:-translate-y-2 sm:group-hover:translate-y-6 group-hover:translate-x-12 md:group-hover:translate-y-4 md:group-hover:translate-x-24 lg:group-hover:-translate-y-4 lg:group-hover:translate-x-36 
							xl:group-hover:translate-y-16 xl:group-hover:translate-x-4 2xl:group-hover:translate-y-10 2xl:group-hover:translate-x-8"
              >
                Montessori škola{" "}
                <span className="group-hover:opacity-0 transition duration-100 ease-in-out ">
                  (pro děti od 6+ let)
                </span>
              </h2>
              <p
                className="pb-6  leading-relaxed group-hover:font-extrabold sm:group-hover:text-2xl md:group-hover:scale-115 transition duration-300 ease-in-out
							sm:group-hover:-translate-y-6 sm:group-hover:translate-x-24 group-hover:text-monte-100 sm:group-hover:rotate-6 md:group-hover:-translate-y-6 md:group-hover:translate-x-64 lg:group-hover:-translate-y-6 lg:group-hover:translate-x-96 xl:group-hover:-translate-y-12 xl:group-hover:translate-x-2 2xl:group-hover:-translate-y-8 2xl:group-hover:translate-x-32"
              >
                „Pomoz mi, abych myslel sám.“
              </p>
              <p className=" leading-relaxed">
                V naší škole se děti učí prostřednictvím projektů, které je
                vedou k objevování, zkoumání a praktickému použití znalostí.
                Učení u nás není o memorování, ale o pochopení souvislostí.
              </p>
              <ul className="pt-2 pl-6 list-none">
                <li>
                  <strong>Projektové učení:</strong> Učení propojujeme s
                  reálnými situacemi. Děti mají možnost pracovat na dlouhodobých
                  projektech, pěstovat na naší školní zahradě a učit se, jak
                  propojit teorii s praxí.
                </li>
                <li>
                  <strong>Angličtina s rodilým mluvčím:</strong> Nabízíme
                  pravidelnou konverzaci s rodilým mluvčím, aby se děti
                  přirozeně naučily komunikovat v angličtině.
                </li>
                <li>
                  <strong>Předškolní ročník:</strong> Pro děti, které se
                  připravují na školu, nabízíme předškolní ročník, kde se
                  zaměřujeme na hladký přechod mezi školkou a školou.
                </li>
              </ul>

              <span
                className="inline-flex items-center  my-12 underline-offset-4 decoration-4 decoration-monte-100 group-hover:underline group-hover:scale-105 transition duration-300 ease-in-out group-hover:text-monte-100 group-hover:rotate-2 group-hover:translate-y-3 group-hover:translate-x-5"
                href="/skola"
              >
                Více informací o montessori škole
              </span>
            </div>
          </Link>
          {/* <div className="flex p-4 md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Neptune
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.
              </p>
              <a className="inline-flex items-center mt-3 text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
