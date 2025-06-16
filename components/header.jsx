"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import RunningText from "./runningText";
import { useEffect, useState } from "react";
// import React from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      isScrolled ? "py-0.5" : "py-2"
    }`}>
      <div className="container flex items-center mx-auto flex-row relative justify-between">
        <Link
          className="flex items-center mb-4 font-extrabold md:mb-0 text-xl md:text-2xl"
          href="/"
        >
          <Image
            src="/svouCestou_logo.webp"
            height={80}
            width={80}
            //   style={ { width: "60px", height: "auto" } }
            className={`h-auto transition-all duration-300 ${
              isScrolled ? "w-5 md:w-6" : "w-8 md:w-12"
            }`}
            alt="Svou cestou"
          />
          <span className={`textNadpis transition-all duration-300 ${
              isScrolled ? "text-md md:text-lg" : "text-2xl md:text-4xl"
            } pl-6`}>Svou cestou</span>
        </Link>
        <Navigation />
      </div>
      {/* <RunningText /> */}
    </header>
  );
}
