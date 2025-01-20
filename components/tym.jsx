import Image from "next/image";
import Link from "next/link";
// import React from "react";
import { tymData } from "./tymData";
export default function Tym() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h1 className="textNadpis">Kdo jsme?</h1>
          <p className="leading-relaxed py-8 lg:w-1/2 self-end">
            V naší Montessori školce a škole vytváříme prostředí, kde se děti
            cítí bezpečně a podporovány v objevování světa kolem sebe. Každý z
            nás přináší do týmu jedinečné zkušenosti a dovednosti, které
            společně využíváme k rozvoji potenciálu každého dítěte. Věříme, že
            individuální přístup a vzájemný respekt jsou klíčem k harmonickému a
            efektivnímu vzdělávání.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {tymData.map((item, index) => (
            <div className={`p-4 lg:w-1/2 mx-auto w-full `} key={index}>
              {" "}
              <div
                className={`flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left `}
              >
                <Image
                  alt="team"
                  className={`flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0 ${item.klassImg} ${item.klass}`}
                  src={item.img}
                  width={200}
                  height={200}
                />

                <div className="flex-grow sm:pl-8">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    {item.titulPred} {item.name}
                    {item.titulZa}
                  </h2>
                  <h3 className="mb-3 text-gray-500">{item.title}</h3>
                  <p className="mb-4">{item.claim}</p>
                  <span className="inline-flex gap-x-2">
                    {/* facebook */}

                    {item.facebook == "" ? (
                      ""
                    ) : (
                      <a
                        href={item.facebook}
                        className="text-gray-500"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="currentColor"
                            d="M25.566 2.433H6.433c-2.2 0-4 1.8-4 4v19.135c0 2.2 1.8 4 4 4h19.135c2.2 0 4-1.8 4-4V6.433c-.002-2.2-1.8-4-4.002-4m-.257 14.483h-3.22v11.65h-4.818v-11.65h-2.41V12.9h2.41v-2.41c0-3.276 1.36-5.225 5.23-5.225h3.217V9.28h-2.012c-1.504 0-1.604.563-1.604 1.61l-.013 2.01h3.645l-.426 4.016z"
                          ></path>
                        </svg>
                      </a>
                    )}

                    {/* instagram */}

                    {item.instagram == "" ? (
                      ""
                    ) : (
                      <a
                        href={item.instagram}
                        className="text-gray-500"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="#0A0A08"
                            d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73 0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36 6.877-15.36 15.36-15.36 15.36 6.877 15.36 15.36"
                          ></path>
                        </svg>
                      </a>
                    )}
                    {/* linkedin */}
                    {item.linkedin == "" ? (
                      ""
                    ) : (
                      <a
                        href={item.linkedin}
                        className="text-gray-500"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802 2.57 2.57 0 0 1-1.82.748 2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    )}
                    {/* web */}
                    {item.web == "" ? (
                      ""
                    ) : (
                      <a
                        href={item.web}
                        className="text-gray-500"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="M3.338 17A10 10 0 0 0 12 22a10 10 0 0 0 8.662-5M3.338 7A10 10 0 0 1 12 2a10 10 0 0 1 8.662 5"></path>
                            <path d="M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5 1.5-5 1.5 5 1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0 1.5 5 1.5-5 1.5 5 1.5-5"></path>
                          </g>
                        </svg>
                      </a>
                    )}
                    {/* eshop */}
                    {item.eshop == "" ? (
                      ""
                    ) : (
                      <a
                        href={item.eshop}
                        className="text-gray-500"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 512 496"
                        >
                          <path
                            fill="currentColor"
                            d="M469 155H252L151 16q-6-10-17-11t-21 7q-15 16-2 32l79 111H43q-18 0-30.5 12.5T0 197v22q0 28 26 38l59 181q4 14 16 25.5t27 11.5h256q15 0 27-11.5t16-25.5l59-179q26-10 26-38v-22q0-19-12.5-31.5T469 155M43 197h179l15 20q2 0 2 2H43zm343 229v2q0 1-1 2t-1 2H130q-2 0-2-4L73 261h366zM275 219q7-12 7-22h187v22zM149 394q1 7 8 12t14 5h4q8-2 13-10t2-16l-21-85q-2-8-10-13t-16-2q-8 2-13 10t-2 15zm188 17h4q7 0 14-5t8-12l21-86q2-8-2.5-16t-12.5-9q-21-4-26 15l-21 85q-6 20 15 28m-81 0q21 0 21-22v-85q0-21-21-21t-21 21v85q0 22 21 22"
                          ></path>
                        </svg>
                      </a>
                    )}
                  </span>
                  {item.cross && (
                    <div className="font-extrabold uppercase text-2xl text-monte-100">
                      {item.cross}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className={`p-4 lg:w-1/2 mx-auto w-full md:m-0`}>
            <div
              className={`flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left `}
            >
              <Image
                alt="team"
                className={`flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0 `}
                src="/person.png"
                width={200}
                height={200}
              />

              <div className="flex-grow sm:pl-8">
                <h3 className="mt-4 text-gray-500 text-2xl font-bold uppercase">
                  přidejte se k nám
                  <br />
                  jako průvodce
                </h3>
                <Link
                  href="/kontakt"
                  className="mt-4 font-bold text-monte-100 underline underline-offset-2"
                >
                  kontaktujte nás
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
