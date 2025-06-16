// import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-[250px] lg:min-h-[700px] flex items-center justify-center bg-centerbg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp)] bg-[#00000044] bg-blend-darken rounded-xl"
      // style={{
      //   backgroundImage:
      //     "url(https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp)",
      // }}
    >
      <div className="p-12 bg-opacity-40 rounded-3xl align-bottom mt-44 lg:mt-96">
        <div className="flex flex-col bg-black/10 p-4 rounded-lg backdrop-blur-sm">
          <h1 className=" textNadpis lg:text-8xl text-monte-100 pb-8">
            Montessori školka a škola
          </h1>
          <p className="mb-2 textPodNadpis font-medium text-gray-50 lg:text-4xl josefin-200 max-w-screen-lg">
            Škola, kde děti rostou s respektem a láskou k sobě i ostatním a s
            důvěrou, že život je cesta plná možností.
          </p>
        </div>
        
      </div>
    </div>
    // <section className="text-gray-600 body-font">
    //   <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
    //     <div className="flex flex-col items-center mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:mb-0">
    //       <h1 className="mb-12 text-3xl sm:text-6xl textNadpis text-center sm:text-start">
    //         Montessori školka a škola v přírodě,{" "}
    //         <br className="hidden lg:inline-block" />
    //         objevování světa jinak
    //       </h1>
    //       <p className="">
    //         <strong>
    //           Učení, které vychází z přírody a přirozeného vývoje každého
    //           dítěte.
    //         </strong>
    //         <br />
    //         Naše Montessori školka a škola se nachází v srdci přírody, v
    //         historickém mlýně obklopeném lesem. Děti u nás rostou a učí se nejen
    //         ve třídách, ale především venku, v prostředí, které podněcuje jejich
    //         zvídavost a kreativitu.
    //       </p>
    //     </div>
    //     <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
    //       <img
    //         className="object-cover object-center rounded"
    //         alt="hero"
    //         src="/skala.webp"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
