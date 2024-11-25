import Link from "next/link";
import React from "react";
export default function Vice() {
  return (
    <section className="my-12">
      <div className="container flex flex-col sm:flex-row sm:justify-between items-start mx-auto ">
        <h1 className="textPodNadpis md:text-3xl lg:text-4xl tracking-tighter">
          Nejkajej kulervouci CLAIM jak hovado o MONSTESSOIR
          <br className="hidden md:block" /> a tak dal a taky proc to jako
          delame...
        </h1>
        <Link
          href="/o-nas"
          className="text-sm underline underline-offset-2 decoration-gray-400"
        >
          více o nás
        </Link>
      </div>
    </section>
  );
}
