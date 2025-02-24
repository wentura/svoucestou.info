import { PodporaData } from "./podporaData";
export default function Podpora() {
  return (
    <section className="bg-monte-200 py-4 mt-12 md:py-2 md:mt-24 group text-gray-100 rounded-t-xl">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8  mb-10 md:mb-0 pb-10 ">
          <h1 className="sm:text-3xl text-2xl textNadpis mb-2 ">
            Naši podporovatelé
          </h1>
          <p className="leading-relaxed text-base">
            Velmi si vážíme všech, kteří nám pomáhají vytvářet inspirativní
            prostředí pro děti. Díky podpoře našich partnerů, rodičů a přátel
            školy jsme mohli obohatit naše prostory o nové pomůcky, zlepšit
            venkovní zázemí a podpořit kreativní projekty, které dětem otevírají
            nové obzory.
          </p>
          <p className="leading-relaxed text-base mt-4">
            Pokud vás naše práce oslovuje a chtěli byste se stát součástí naší
            cesty, budeme vděční za jakoukoli formu podpory – ať už finanční,
            materiální nebo formou spolupráce. Vaše příspěvky nám pomáhají
            naplňovat naši vizi a přinášet dětem kvalitní a smysluplné vzdělání.
          </p>
          <p className="leading-relaxed text-base mt-4 font-normal">
            Děkujeme, že pomáháte dětem objevovat svět!
          </p>
          <p className="leading-relaxed text-base mt-4 ">
            Pro více informací o možnostech podpory nás neváhejte kontaktovat.
            ❤️
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <div className="flex flex-wrap list-none -mb-1">
            {PodporaData.map((item, index) => (
              <div className="2xl:w-1/3 md:w-1/2 my-4 px-4" key={index}>
                <a href={item.url} className="flex flex-col">
                  <div className="">{item.name}</div>
                  <div className="text-sm">{item.subname}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
