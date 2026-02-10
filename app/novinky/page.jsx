import { newsData } from "@/components/newsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AutoPlayVideo from "@/components/AutoPlayVideo";

export const metadata = {
  title: "Novinky a aktuality",
  description:
    "Aktuality a novinky z Montessori školy a školky Svou Cestou. Sledujte naše události, akce a dění ve škole.",
  openGraph: {
    title: "Novinky a aktuality | Svou Cestou",
    description:
      "Aktuality a novinky z Montessori školy a školky Svou Cestou. Sledujte naše události, akce a dění ve škole.",
    url: "https://svoucestou.info/novinky",
  },
  twitter: {
    title: "Novinky a aktuality | Svou Cestou",
    description:
      "Aktuality a novinky z Montessori školy a školky Svou Cestou. Sledujte naše události, akce a dění ve škole.",
  },
};

export default function ShortNews() {
  return (
    <section>
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="textNadpis">Aktuality a novinky</h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {newsData.map((item, index) => (
            <div className={`xl:w-1/4 md:w-1/2 p-4 `} key={index}>
              <div className="bg-gray-50 rounded-lg">
                {item.video ? (
                  <AutoPlayVideo
                    src={item.video}
                    className="h-80 rounded-lg w-full object-cover object-center"
                    alt={item.title}
                  />
                ) : (
                  <Image
                    className="h-80 rounded-lg w-full object-cover object-center"
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                )}
                <div className="p-6">
                  <p className="text-sm">
                    {item.datum} | {item.subtite}
                  </p>
                  <h2 className="text-lg md:text-xl text-gray-600 font-semibold py-4">
                    {item.title}
                  </h2>
                  <p className="">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
