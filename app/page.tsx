import { pageMetadata, site } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedApps } from "@/components/home/FeaturedApps";
import { ValuesSection } from "@/components/home/ValuesSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { GamesSection } from "@/components/games/GamesSection";
export const metadata = {
  ...pageMetadata(
    "SKOUT LABS | Discover. Plan. Organize. Experience.",
    site.description,
    "/",
  ),
  title: { absolute: "SKOUT LABS | Discover. Plan. Organize. Experience." },
};
export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedApps />
      <GamesSection />
      <ValuesSection />
      <HomeCTA />
    </>
  );
}
