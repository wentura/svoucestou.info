export const SITE = {
  name: "Svou Cestou",
  canonicalOrigin: "https://www.svoucestou.info",
  canonicalHost: "www.svoucestou.info",
  contactEmail: "info@svoucestou.info",
  contactPhoneDisplay: "777 687 496",
  contactPhoneHref: "+420777687496",
  addressStreet: "Nebužely 3, mlýn Kroužek",
  addressCity: "Nebužely",
  addressPostalCode: "277 34",
  addressCountry: "CZ",
  /** Přesné souřadnice z Google Maps profilu Svou cestou */
  geoLatitude: "50.4045344",
  geoLongitude: "14.5677899",
  googleMapsUrl:
    "https://www.google.com/maps/place/Svou+cestou/@50.4045344,14.565215,17z/data=!3m1!4b1!4m6!3m5!1s0x470be198b4700cb3:0x2c58ca874da341c7!8m2!3d50.4045344!4d14.5677899!16s%2Fg%2F11nx25267x",
  founderName: "Montessori Guru z.s.",
  ico: "06337104",
  /** Společný title default + OG */
  defaultTitle:
    "Svou Cestou – Montessori škola a školka | Nebužely 3, mlýn Kroužek",
  defaultDescription:
    "Montessori škola a školka Svou Cestou v Nebuželích 3 – historický mlýn Kroužek, CHKO Kokořínsko. Alternativní vzdělávání pro děti od 3 do 12+ let.",
};

export const PRICING = {
  monthlyTuitionCzkSkolka: 6500,
  skolaTier1: 6500,
  skolaTier2: 8500,
  skolaTier3: 9800,
  siblingDiscountPercent: 10,
  skolkaDays: "od úterý<br />do čtvrtka",
  skolkaTier1Description: ["připravené prostředí", "kvalifikovaný průvodce", "malá skupina", ],
  skolaDaysTier1: "od úterý<br />do čtvrtka",
  skolaDaysTier2: "od úterý<br />do pátku",
  skolaDaysTier3: "od pondělí<br />do pátku",
  skolaTier1Description: ["hlavní učební blok"],
  skolaTier2Description: ["hlavní učební blok", "projekty", "exkurze", "práce venku", "kreativní činnost", "IT dovednosti"],
  skolaTier3Description: ["hlavní učební blok", "projekty", "exkurze", "práce venku", "kreativní činnost","IT dovednosti", "pohyb", "komunikace","hudba"],
};

export function formatCzk(value) {
  return `${new Intl.NumberFormat("cs-CZ").format(value)} Kč`;
}
