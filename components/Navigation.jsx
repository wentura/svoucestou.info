import Image from "next/image";
import Link from "next/link";
import { MOBILE_NAV_TOGGLE_ID } from "@/lib/mobile-nav";
import MobileNavLink from "./MobileNavLink";
import { navigationData } from "./navigationData";

const desktopLinkClassName =
  "px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent";

const mobileLinkClassName =
  "block rounded-lg px-4 py-3 text-center text-lg text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 active:bg-gray-100";

function BurgerIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navigation({ isScrolled = false }) {
  return (
    <>
      <div
        className={`relative z-[120] ml-auto flex shrink-0 items-center transition-all duration-300 md:h-auto md:w-auto ${
          isScrolled ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        {/* Mobil: v gridu headeru — posouvá se s obsahem při scrollu */}
        <div className="nav-menu-toggle-slot md:hidden">
          <input
            type="checkbox"
            id={MOBILE_NAV_TOGGLE_ID}
            className="nav-menu-toggle peer"
          />
          <label
            htmlFor={MOBILE_NAV_TOGGLE_ID}
            className={`nav-menu-toggle-button transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <span className="nav-menu-icon-open">
              <BurgerIcon />
            </span>
            <span className="nav-menu-icon-close">
              <CloseIcon />
            </span>
          </label>
        </div>

        <nav
          className="hidden flex-row flex-wrap items-center justify-center md:flex"
          aria-label="Hlavní navigace"
        >
          {navigationData.map((item) => (
            <Link key={item.href} href={item.href} className={desktopLinkClassName}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div id="mobile-nav-overlay" className="nav-menu-overlay">
        <label
          htmlFor={MOBILE_NAV_TOGGLE_ID}
          className="nav-menu-backdrop"
          aria-label="Zavřít menu"
        />
        <nav className="nav-menu-panel" aria-label="Mobilní navigace">
          <div className="mb-4 flex items-center justify-center px-4 pt-2">
            <Image
              src="/svouCestou_logo.webp"
              height={80}
              width={80}
              className="h-auto w-8"
              alt=""
              aria-hidden
            />
            <span className="textNadpis truncate pl-4 text-md">Svou cestou</span>
          </div>
          {navigationData.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              className={mobileLinkClassName}
            >
              {item.title}
            </MobileNavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
