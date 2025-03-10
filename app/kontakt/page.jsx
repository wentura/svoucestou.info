import Kontakt from "@/components/kontakt";
import Image from "next/image";
import React from "react";
export default function KontaktPage() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="hidden md:block headingPage mb-4">
          <h1 className="textNadpis">Svou cestou</h1>
          <h3 className="textPodNadpis">Montessori škola a školka</h3>
        </div>

        {/* <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div> */}
        <div className="block md:hidden -my-24">
          <Kontakt />
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full py-0 md:py-12">
          <div className="md:w-1/2">
            <ul className="px-2">
              <li className="textPodNadpis font-medium">Svou Cestou</li>
              <li>Montessori škola a školka</li>
              <li>Nebužely 3</li>
              <li>mlýn Kroužek</li>
              <li>Nebužely, 277 34</li>
            </ul>

            <ul className="px-2 py-4">
              <li className="textPodNadpis font-medium">
                Montessori Guru z.s.
              </li>
              <li>zřizovatel Svou Cestou</li>
              <li>Nebužely 3</li>
              <li>mlýn Kroužek</li>
              <li>Nebužely, 277 34</li>
              <li className="pt-4">IČ: 06337104</li>
            </ul>
            {/* <ul className="px-2 py-4">
              <li className="textPodNadpis font-medium">
                Bc. Běla Šestáková, DiS.
              </li>
              <li>předseda a ředitelka</li>
              <li>
                <a
                  href="tel:+420777687496"
                  className="underline underline-offset-2 decoration-gray-300"
                >
                  777 687 496{" "}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@svoucestou.info"
                  className="underline underline-offset-2 decoration-gray-300"
                >
                  info@svoucestou.info
                </a>
              </li>
            </ul> */}
            {/* <ul className="px-2 py-4">
              <li className="textPodNadpis font-medium">Zbyněk Svoboda</li>
              <li>...</li>
              <li>
                <a
                  href="tel:+420773687792"
                  className="underline underline-offset-2 decoration-gray-300"
                >
                  773 687 792{" "}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@zbyneksvoboda.cz"
                  className="underline underline-offset-2 decoration-gray-300"
                >
                  info@zbyneksvoboda.cz
                </a>
              </li>
            </ul> */}
          </div>
          <div className="md:w-1/2 gap-y-2 items-center md:justify-center md:items-baseline py-12 hidden md:flex md:flex-col">
            <a
              href="tel:+420777687496"
              className="px-6 py-2 rounded-md bg-monte-100 text-white font-medium shadow-xl hover:shadow-md transition-all duration-300 text-center"
            >
              777 687 496{" "}
            </a>

            <a
              href="mailto:info@svoucestou.info"
              className="px-6 py-2 rounded-md bg-monte-100 text-white font-medium shadow-xl hover:shadow-md transition-all duration-300 text-center"
            >
              info@svoucestou.info
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Kontakt />
      </div>
    </section>
  );
}
