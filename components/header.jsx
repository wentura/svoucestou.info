import Image from "next/image";
import Link from "next/link";
// import React from "react";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container flex flex-col flex-wrap items-center p-2 mx-auto md:flex-row ">
        <Link
          className="flex items-center mb-4 font-extrabold md:mb-0 text-2xl md:text-3xl"
          href="/"
        >
          <Image
            src="/svouCestou_logo.webp"
            height={100}
            width={100}
            style={{ width: "60px", height: "auto" }}
            alt="Svou cestou"
          />
          <span className="textNadpis lg:text-5xl">Svou cestou</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center md:ml-auto">
          <Link className="mr-5 hover:text-gray-900" href="/skolka">
            co je montessori
          </Link>

          <Link className="mr-5 hover:text-gray-900" href="/skolka">
            školka
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/skola">
            škola
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/o-nas">
            o nás
          </Link>
        </nav>
      </div>
    </header>
  );
}
