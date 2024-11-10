// import React from "react";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:mb-0">
          <h1 className="mb-12 text-3xl sm:text-6xl textNadpis text-center sm:text-start">
            Montessori školka a škola v přírodě,{" "}
            <br className="hidden lg:inline-block" />
            objevování světa jinak
          </h1>
          <p className="">
            <strong>
              Učení, které vychází z přírody a přirozeného vývoje každého
              dítěte.
            </strong>
            <br />
            Naše Montessori školka a škola se nachází v srdci přírody, v
            historickém mlýně obklopeném lesem. Děti u nás rostou a učí se nejen
            ve třídách, ale především venku, v prostředí, které podněcuje jejich
            zvídavost a kreativitu.
          </p>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/skala.webp"
          />
        </div>
      </div>
    </section>
  );
}
