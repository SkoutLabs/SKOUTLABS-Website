import type { Metadata } from "next";
export const site = {
  name: "SKOUT LABS",
  email: "skoutlabs.dev@gmail.com",
  description:
    "Skout Labs is a South African software company creating thoughtful everyday applications and games, including Budget, Recipe, Travel and Expedition Skout.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || undefined,
};
if (site.url && !/^https?:\/\/[^/]+$/.test(site.url))
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin without a path.",
  );
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: site.url ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: site.name,
      ...(site.url ? { url: path, images: ["/social-card.png"] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(site.url ? { images: ["/social-card.png"] } : {}),
    },
  };
}
