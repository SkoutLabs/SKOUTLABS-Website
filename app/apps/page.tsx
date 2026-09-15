import { pageMetadata } from "@/lib/site";
import { apps } from "@/lib/apps";
import { AppSection } from "@/components/apps/AppSection";
import { Container } from "@/components/layout/Container";
import { GamesSection } from "@/components/games/GamesSection";
import { games } from "@/lib/games";
import Link from "next/link";
export const metadata = pageMetadata(
  "The Skout Collection",
  "Explore the everyday Skout apps and Expedition Skout, a game in development at Skout Labs.",
  "/apps",
);
export default function Apps() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">USEFUL TOOLS. EVERYDAY POSSIBILITIES.</p>
          <h1>
            Explore the
            <br />
            <span>Skout Collection.</span>
          </h1>
          <p className="lede">
            Explore our everyday applications, then discover our games below.
            Each brings a different side of the Skout family to life.
          </p>
          <nav className="app-jump-links" aria-label="Applications">
            {[...apps, ...games].map((app) => (
              <Link key={app.id} href={`#${app.id}`}>
                {app.name}
                <span aria-hidden="true">↘</span>
              </Link>
            ))}
          </nav>
        </Container>
      </section>
      <section className="collection-directory">
        <Container>
          <p className="eyebrow">CHOOSE YOUR DIRECTION</p>
          <div className="directory-grid">
            {["Everyday", "Travel"].map((group) => {
              const members = apps.filter((app) => app.collection === group);
              return (
                <a
                  key={group}
                  href={`#${members[0]?.id}`}
                  className="directory-card"
                >
                  <span className="eyebrow">
                    {String(members.length).padStart(2, "0")} APPS
                  </span>
                  <h2>{group}</h2>
                  <p>
                    {group === "Everyday"
                      ? "A little more ease in your daily routine."
                      : "Good company, wherever you’re headed."}
                  </p>
                  <span aria-hidden="true">↗</span>
                </a>
              );
            })}
            <a href="#games" className="directory-card">
              <span className="eyebrow">
                {String(games.length).padStart(2, "0")} GAME
              </span>
              <h2>Games</h2>
              <p>A different kind of everyday adventure.</p>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Container>
      </section>
      <Container className="products">
        {apps.map((app, index) => (
          <AppSection key={app.id} app={app} index={index} />
        ))}
      </Container>
      <GamesSection detail />
    </>
  );
}
