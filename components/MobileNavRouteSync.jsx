"use client";

import { closeMobileNav } from "@/lib/mobile-nav";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileNavRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    closeMobileNav();
  }, [pathname]);

  return null;
}
