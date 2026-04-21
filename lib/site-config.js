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
  monthlyTuitionCzk: 6500,
  siblingDiscountPercent: 10,
  skolkaDays: "učící úterý až čtvrtek",
  skolaDays: "sportovní pondělí, učící úterý až čtvrtek",
};

export function formatCzk(value) {
  return `${new Intl.NumberFormat("cs-CZ").format(value)} Kč`;
}
