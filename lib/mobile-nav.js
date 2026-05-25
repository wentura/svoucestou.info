export const MOBILE_NAV_TOGGLE_ID = "mobile-nav-toggle";

export function closeMobileNav() {
  const toggle = document.getElementById(MOBILE_NAV_TOGGLE_ID);
  if (toggle instanceof HTMLInputElement) {
    toggle.checked = false;
  }
}
