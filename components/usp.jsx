// import React from "react";
import Mlyn from "./mlyn";
import uspData from "./usp_data";
export default function Usp() {
  return (
    <section className="bg-monte-200 py-12 my-12 md:py-24 md:my-24 group text-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-8">
          {/* <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font"> */}
          <h1 className="textNadpis text-white ">Proč my?</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {uspData.map((item, index) => (
            <div
              className="py-10 px-6 md:w-1/3 hover:scale-105 transition duration-300 ease-in-out"
              key={index}
            >
              <div className="flex flex-col h-full px-6 py-10 border border-monte-100 rounded-lg shadow-xl hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <h2 className="text-xl md:text-2xl text-gray-100 font-semibold py-4">
                    {item.title}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">{item.text}</p>
                  {/* <a className="inline-flex items-center mt-3 text-indigo-500">
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
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Mlyn />
    </section>
  );
}
