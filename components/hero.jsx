import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-[250px] lg:min-h-[700px] flex items-center justify-center relative rounded-xl overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1732404552/svoucestou.info/hero.webp"
        alt="Montessori škola a školka v přírodě"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-[#00000044] bg-blend-darken" />
      <div className="relative z-10 p-6 sm:p-12 bg-opacity-40 rounded-3xl align-bottom mt-32 sm:mt-44 lg:mt-96 max-w-full">
        <div className="flex flex-col bg-black/10 p-4 sm:p-6 rounded-lg backdrop-blur-sm max-w-4xl">
          <h1 className="textNadpis text-4xl sm:text-5xl lg:text-8xl text-monte-100 pb-4 lg:pb-8">
            Montessori školka a škola
          </h1>
          <p className="mb-3 text-base sm:text-lg font-semibold text-gray-100 max-w-screen-lg leading-snug">
            Školka pro děti 3–6 let.<br />Škola jako výuková skupina pro děti na
            domácím vzdělávání (cca 5–12+ let)
          </p>
          <p className="mb-6 textPodNadpis font-medium text-gray-50 lg:text-3xl josefin-200 max-w-screen-lg">
            Škola, kde děti rostou s respektem a láskou k sobě i ostatním a s
            důvěrou, že život je cesta plná možností.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/kontakt#dotaz"
              className="inline-flex justify-center px-6 py-4 rounded-md bg-monte-100 text-white font-semibold shadow-lg hover:opacity-95 transition-opacity text-center"
            >
              Domluvit schůzku nebo napsat
            </Link>
            <Link
              href="/skolka"
              className="inline-flex justify-center px-6 py-4 rounded-md border-2 border-monte-100 text-monte-100 bg-black/20 font-medium hover:bg-black/30 transition-colors text-center"
            >
              Školka — podrobnosti
            </Link>
            <Link
              href="/skola"
              className="inline-flex justify-center px-6 py-4 rounded-md border-2 border-white/80 text-white font-medium hover:bg-white/10 transition-colors text-center"
            >
              Škola a domácí vzdělávání
            </Link>
          </div>
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
