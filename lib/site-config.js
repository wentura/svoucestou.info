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
  founderName: "Montessori Guru z.s.",
  ico: "06337104",
};

export const PRICING = {
  monthlyTuitionCzkSkolka: 8000,
  skolaTier1: 6500,
  skolaTier2: 8000,
  skolaTier3: 9500,
  siblingDiscountPercent: 10,
  skolkaDays: "od pondělí<br />do čtvrtka",
  skolkaTier1Description: ["připravené prostředí", "kvalifikovaný průvodce", "malá skupina"],
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
