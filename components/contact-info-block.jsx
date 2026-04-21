import { SITE } from "@/lib/site-config";

export default function ContactInfoBlock() {
  return (
    <div className="lg:w-1/2 flex flex-col gap-4">
      <ul className="px-0">
        <li className="textPodNadpis font-medium">Svou Cestou</li>
        <li>Montessori škola a školka</li>
        <li>{SITE.addressStreet}</li>
        <li>
          {SITE.addressCity}, {SITE.addressPostalCode}
        </li>
      </ul>

      <ul className="px-0 py-4">
        <li className="textPodNadpis font-medium">{SITE.founderName}</li>
        <li>zřizovatel Svou Cestou</li>
        <li>{SITE.addressStreet}</li>
        <li>
          {SITE.addressCity}, {SITE.addressPostalCode}
        </li>
        <li className="pt-4">IČ: {SITE.ico}</li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <a
          href={`tel:${SITE.contactPhoneHref}`}
          className="px-6 py-2 rounded-md bg-monte-100 text-white font-medium shadow-xl hover:shadow-md transition-all duration-300 text-center"
        >
          {SITE.contactPhoneDisplay}
        </a>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="px-6 py-2 rounded-md bg-monte-100 text-white font-medium shadow-xl hover:shadow-md transition-all duration-300 text-center"
        >
          {SITE.contactEmail}
        </a>
      </div>
    </div>
  );
}
