"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] overflow-visible bg-white transition-all duration-300 touch-manipulation ${
        isScrolled ? "py-0.5" : "py-2"
      }`}
    >
      <div className="container relative mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4">
        <Link
          className="relative z-0 flex min-w-0 max-w-full items-center font-extrabold text-xl md:text-2xl pointer-events-auto"
          href="/"
        >
          <Image
            src="/svouCestou_logo.webp"
            height={80}
            width={80}
            className={`h-auto transition-all duration-300 ${
              isScrolled ? "w-5 md:w-6" : "w-8 md:w-12"
            }`}
            alt="Svou cestou"
          />
          <span
            className={`textNadpis truncate pl-4 transition-all duration-300 sm:pl-6 ${
              isScrolled ? "text-md md:text-lg" : "text-2xl md:text-4xl"
            }`}
          >
            Svou cestou
          </span>
        </Link>

        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
}
