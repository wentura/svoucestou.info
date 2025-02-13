import Image from "next/image";
import Link from "next/link";
import { navigationData } from "./navigationData";
import { sockyData } from "./sockyData";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link
            className="flex items-center mb-4 font-extrabold md:mb-0 text-2xl md:text-3xl"
            href="/"
          >
            <Image
              src="/svouCestou_logo.webp"
              height={200}
              width={200}
              className="mx-auto w-44 md:w-24"
              alt="Svou cestou"
            />
            <span className="textNadpis lg:text-3xl hidden md:block">
              Svou cestou
            </span>
          </Link>
          {/* <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p> */}
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left justify-end">
          <div className="w-full px-4 lg:w-1/4 md:w-1/3">
            <nav className="mb-10 list-none">
              {navigationData.map((item, index) => (
                <li key={index} className="my-2 p-2 md:p-1 md:my-1">
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          {/* <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div> */}

          {/* <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div> */}

          {/* <div className="w-full px-4 lg:w-1/4 md:w-1/3">
            <nav className="mb-10 list-none">
              {sockyData.map((item, index) => (
                <li key={index} className="my-2 p-2 md:p-1 md:my-1">
                  <Link
                    href={item.link}
                    className="text-gray-600 hover:text-gray-800 flex items-center gap-x-2"
                  >
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div> */}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            2017 - 2025 - Svou cestou - Montessori guru z.s. ,{" "}
            <a
              href="https://www.zbyneksvoboda.cz"
              className="ml-1 text-gray-500 underline underline-offset-2 decoration-gray-400"
              target="_blank"
            >
              vytvořil Zbynek Svoboda
            </a>
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            {sockyData.map((item, index) => (
              <a
                className="text-gray-500 mr-4"
                key={index}
                href={item.link}
                target="_blank"
              >
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
                {/* {item.title} */}
              </a>
            ))}
          </span>
        </div>
      </div>
      <img
        referrerPolicy="no-referrer"
        src="http://matomo.zbyneksvoboda.cz/matomo.php?idsite=6&amp;rec=1"
        style={{ border: "0" }}
        alt=" "
      />
    </footer>
  );
}
