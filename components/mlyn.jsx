// import React from "react";

export default function Mlyn() {
  return (
    <section className="">
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div className="pb-10 mb-10 md:w-1/2 md:pr-12 md:py-8 md:mb-0">
          <h1 className="textNadpis text-xl md:text-4xl text-gray-900">
            Náš unikátní prostor: historický mlýn v přírodě
          </h1>
          <p className="text-base leading-relaxed">
            Naše škola se nachází na samotě, v nádherném prostředí historického
            mlýna, obklopeného lesy a přírodou. Tento prostor vytváří ideální
            prostředí pro Montessori vzdělávání, kde děti mohou denně trávit čas
            venku, objevovat přírodu, starat se o školní zahradu a učit se v
            harmonii s okolním světem.
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/800x400.png?text=mlyn%20Krouzek"
          />
        </div>
      </div>
    </section>
  );
}
