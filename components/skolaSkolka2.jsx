import Image from "next/image";
import Link from "next/link";
import React from "react";
import { skolaSkolka2Data } from "./skolaSkolka2Data";
export default function SkolaSkolka2() {
  return (
    <section className="text-gray-600 body-font bg-monte-200 px-4 py-10 sm:px-4 lg:py-2 mx-auto rounded-xl">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {skolaSkolka2Data.map((item, index) => (
            <Link
              href={item.url}
              className="p-4 lg:w-1/3 hover:scale-105 transition duration-500 ease-in-out hover:drop-shadow-xl min-w-80 hover:rotate-2"
              key={index}
            >
              <div className="bg-cover bg-[#00000066] bg-blend-darken h-full px-12 py-16 rounded-lg overflow-hidden text-center relative min-h-[300px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#00000066] bg-blend-darken" />
                <div className="relative z-20 py-12">
                  <h1 className="textNadpis text-4xl md:text-5xl xl:text-6xl font-bold text-monte-100">
                    {item.title}
                  </h1>
                  {/* <p className="tracking-tight textPodNadpis">{item.text}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
