import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return site.url
    ? ["", "/about", "/apps", "/contact", "/privacy"].map((path) => ({
        url: `${site.url}${path}`,
      }))
    : [];
}
