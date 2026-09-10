import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { apps } from "@/lib/apps";
import { AppCard } from "@/components/apps/AppCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
/** Collection layout lives in styles/components/_app-card.scss; heading layout lives in _section-heading.scss. */
export function FeaturedApps() {
  return (
    <section className="section collection-section" id="collection">
      <Container>
        <div className="section-top">
          <SectionHeading
            eyebrow="YOUR EVERYDAY TRAVEL COMPANIONS."
            title="Good company for the journey."
          >
            A little more clarity, inspiration and adventure in your everyday.
          </SectionHeading>
          <Link href="/apps" className="text-link">
            Explore the collection
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="app-grid">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
        <p className="collection-note">
          Thoughtfully taking shape. All three applications are currently in
          development.
        </p>
      </Container>
    </section>
  );
}
