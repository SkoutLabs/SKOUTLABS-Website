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
              <span className="game-field-label">
                FIELD NOTES / EXPEDITION SKOUT
              </span>
              <svg
                className="game-landscape"
                viewBox="0 0 600 500"
                preserveAspectRatio="xMidYMax slice"
                aria-hidden="true"
              >
                <circle cx="470" cy="90" r="46" fill="var(--skout-orange)" />
                <path
                  d="M0 360 130 160 235 300 365 110 600 360V500H0Z"
                  fill="var(--skout-teal)"
                />
                <path
                  d="m300 210 65-100 75 110-68-32-24 26Z"
                  fill="var(--skout-bone)"
                />
                <path
                  d="M0 405 160 285 320 405 490 260 600 360V500H0Z"
                  fill="var(--skout-ink)"
                />
                <path
                  d="M290 500Q480 435 330 400T390 325"
                  fill="none"
                  stroke="var(--skout-orange)"
                  strokeWidth="3"
                  strokeDasharray="8 9"
                />
              </svg>
              <BrandLogo src={game.logo} name={game.name} />
              <span className="game-field-caption">
                A LITTLE CURIOSITY GOES A LONG WAY.
              </span>
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
