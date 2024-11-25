import React from "react";
import { featuresData } from "./featuresData";
export default function Features() {
  return (
    <section>
      <div className="px-4 py-10 sm:px-6 lg:py-24 mx-auto">
        {/* Grid */}
        <div className="grid gap-2 grid-cols-1 sm:gap-12 md:grid-cols-3 lg:gap-4 text-center divide-y-2 sm:divide-y-0">
          {/* Stats */}
          {featuresData.map((feature, index) => (
            <div key={index} className="">
              {/* <p className="">{feature.icon}</p> */}
              <p
                className={` mt-2 sm:mt-3 text-xl sm:text-3xl font-bold text-monte-100 uppercase`}
              >
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
