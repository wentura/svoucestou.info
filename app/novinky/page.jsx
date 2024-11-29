import { newsData } from "@/components/newsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ShortNews() {
  return (
    <section className="text-gray-600  px-4 py-10 sm:px-6 mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="textNadpis">Aktuality a novinky</h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {newsData.map((item, index) => (
            <div className={`xl:w-1/4 md:w-1/2 p-4 `} key={index}>
              <div className="bg-gray-50 rounded-lg">
                <Image
                  className="h-80 rounded-lg w-full object-cover object-center"
                  src={item.img}
                  alt={item.title}
                  width={350}
                  height={350}
                />
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
