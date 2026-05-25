"use client";

import Link from "next/link";
import { closeMobileNav } from "@/lib/mobile-nav";

export default function MobileNavLink({ href, className, children }) {
  return (
    <Link href={href} className={className} onClick={closeMobileNav}>
      {children}
    </Link>
  );
}
