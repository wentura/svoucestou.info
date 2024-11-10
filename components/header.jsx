import Image from "next/image";
import Link from "next/link";
// import React from "react";
export default function Header() {
  return (
    <header className="body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          className="flex items-center mb-4 font-extrabold md:mb-0 text-2xl md:text-4xl"
          href="/"
        >
          <Image
            src="/svouCestou_logo.webp"
            height={100}
            width={100}
            style={{ width: "100px", height: "auto" }}
            alt="Svou cestou"
          />
          <span className="ml-3">Svou cestou</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center md:ml-auto">
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
