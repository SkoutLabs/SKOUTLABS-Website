import { Gamepad2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { games } from "@/lib/games";
import { Container } from "@/components/layout/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StatusBadge } from "@/components/apps/StatusBadge";
import { Button } from "@/components/ui/Button";

/** The .game-panel selectors in styles/pages/_games.scss provide the responsive artwork and copy layout. */
export function GamesSection({ detail = false }: { detail?: boolean }) {
  return (
    <section
      className="section games-section"
      id="games"
      aria-labelledby="games-heading"
    >
      <Container>
        <p className="eyebrow">
          <Gamepad2 size={18} aria-hidden="true" /> GAMES BY SKOUT LABS
        </p>
        <h2 id="games-heading">Make a little room for play.</h2>
        <p className="lede">
          Everyday tools are only part of the story. Discover the games taking
          shape at Skout Labs.
        </p>
        {games.map((game) => (
          <article
            className="game-panel"
            id={game.id}
            key={game.id}
            aria-labelledby={`${game.id}-heading`}
          >
            <div className="game-art">
              <BrandLogo src={game.logo} name={game.name} />
            </div>
            <div className="game-copy">
              <StatusBadge status={game.status} />
              <h3 id={`${game.id}-heading`}>{game.name}</h3>
              <p className="game-tagline">{game.tagline}</p>
              <p>{game.description}</p>
              {detail ? (
                <p className="small-copy">
                  Gameplay details, supported platforms and release information
                  will be shared as development progresses.
                </p>
              ) : (
                <Link href={`/apps#${game.id}`} className="text-link">
                  Meet {game.name}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              )}
              {game.status !== "Available" && (
                <p className="game-availability">Not yet publicly available.</p>
              )}
              {(game.appStoreUrl || game.googlePlayUrl || game.futureUrl) && (
                <div className="button-group">
                  {game.appStoreUrl && (
                    <Button href={game.appStoreUrl}>App Store</Button>
                  )}
                  {game.googlePlayUrl && (
                    <Button href={game.googlePlayUrl}>Google Play</Button>
                  )}
                  {game.futureUrl && (
                    <Button href={game.futureUrl}>Game website</Button>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
