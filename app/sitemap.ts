import type { MetadataRoute } from "next";

const BASE = "https://svoucestou.info";

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
  "/skola12",
  "/spolupráce",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: path === "" ? BASE : `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
