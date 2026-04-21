import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

const BASE = SITE.canonicalOrigin;

/** Veřejné routy (shodně s výstupem `next build`). */
const PATHS = [
  "",
  "/skolka",
  "/skola",
  "/kontakt",
  "/cenik",
  "/novinky",
  "/montessori",
  "/o-nas",
  "/ochrana-soukromi",
  "/skola12",
  "/spoluprace",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: path === "" ? BASE : `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
