// import React from "react";
import Image from "next/image";
export default function Mlyn() {
  return (
    <section className="group">
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div className="pb-10 mb-10 md:w-1/2 md:pr-12 md:py-8 md:mb-0">
          <h1 className="textNadpis text-gray-100 text-2xl sm:text-3xl md:text-4xl pb-4 sm:pb-8">
            Náš historický mlýn v přírodě
          </h1>
          <h1 className="textNadpis text-2xl sm:text-3xl md:text-4xl pb-4 sm:pb-8 text-right">
            mlýn Kroužek
          </h1>
          <p className="leading-relaxed pb-2">
            Naše škola se nachází na samotě, v nádherném prostředí historického
            mlýna, obklopeného lesy a přírodou.
          </p>
          <p className="leading-relaxed pb-2">
            Tento prostor vytváří ideální prostředí pro Montessori vzdělávání,
            kde děti mohou denně trávit čas venku, objevovat přírodu, starat se
            o školní zahradu a učit se v harmonii s okolním světem.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <Image
            width={500}
            height={250}
            className="object-cover object-center rounded group-hover:-rotate-3 transition duration-300 ease-in-out drop-shadow-lg"
            alt="hero"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1732399711/svoucestou.info/mlyn_krouzek.webp"
          />
          <p className="leading-relaxed pb-2 text-right opacity-25 group-hover:opacity-80 transition duration-300 ease-in-out">
            <a
              href="https://www.mlynkrouzek.cz"
              target="_blank"
              className="text-gray-300 text-sm underline underline-offset-2 decoration-gray-400 "
            >
              více o mlýnu Kroužek
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
