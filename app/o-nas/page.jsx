import Historie from "@/components/historie";
import React from "react";

export default function Onas() {
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="headingPage mb-4">
          <h1 className="textNadpis">Svou cestou</h1>
          <h3 className="textPodNadpis">o nás a naší cestě</h3>
        </div>
        <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div>
      </div>
      <Historie />
    </section>
  );
}
