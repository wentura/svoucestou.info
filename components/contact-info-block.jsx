export default function ContactInfoBlock() {
  return (
    <div className="lg:w-1/2 flex flex-col gap-4">
      <ul className="px-0">
        <li className="textPodNadpis font-medium">Svou Cestou</li>
        <li>Montessori škola a školka</li>
        <li>Nebužely 3</li>
        <li>mlýn Kroužek</li>
        <li>Nebužely, 277 34</li>
      </ul>

      <ul className="px-0 py-4">
        <li className="textPodNadpis font-medium">Montessori Guru z.s.</li>
        <li>zřizovatel Svou Cestou</li>
        <li>Nebužely 3</li>
        <li>mlýn Kroužek</li>
        <li>Nebužely, 277 34</li>
        <li className="pt-4">IČ: 06337104</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <a
          href="tel:+420777687496"
          className="px-6 py-2 rounded-md bg-monte-100 text-white font-medium shadow-xl hover:shadow-md transition-all duration-300 text-center"
        >
          777 687 496
        </a>
        <a
          href="mailto:info@svoucestou.info"
          className="px-6 py-2 rounded-md bg-monte-100 text-white font-medium shadow-xl hover:shadow-md transition-all duration-300 text-center"
        >
          info@svoucestou.info
        </a>
      </div>
    </div>
  );
}
