import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import RunningText from "./runningText";
// import React from "react";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container flex items-center p-2 mx-auto flex-row relative justify-between">
        <Link
          className="flex items-center mb-4 font-extrabold md:mb-0 text-2xl md:text-3xl"
          href="/"
        >
          <Image
            src="/svouCestou_logo.webp"
            height={100}
            width={100}
            //   style={ { width: "60px", height: "auto" } }
            className="w-12 md:w-16 h-auto"
            alt="Svou cestou"
          />
          <span className="textNadpis pl-6">Svou cestou</span>
        </Link>
        <Navigation />
      </div>
      {/* <RunningText /> */}
    </header>
  );
}
