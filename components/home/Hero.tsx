import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
/** Hero artwork and responsive layout use the .hero selectors in styles/pages/_home.scss. */
export function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-marker" /> THOUGHTFUL SOFTWARE. EVERYDAY
              LIFE.
            </p>
            <h1>
              Discover. Plan.
              <br />
              Organize.
              <br />
              <span>Experience.</span>
            </h1>
            <p className="lede">
              Skout Labs creates thoughtful software designed to help people
              discover, plan, organize and experience the things that matter to
              them.
            </p>
            <div className="button-group">
              <Button href="/apps">Explore Our Apps</Button>
              <Button href="/about" secondary>
                About Skout Labs
              </Button>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <span className="north" aria-hidden="true">
              N
            </span>
            <span className="east" aria-hidden="true">
              E
            </span>
            <BrandLogo className="hero-logo" priority />
            <span className="hero-art-caption">
              A little direction. A world of possibility.
            </span>
          </div>
        </div>
        <div className="hero-foot">
          <span>
            <span className="tiny-marker" /> INDEPENDENTLY BUILT IN SOUTH AFRICA
          </span>
          <span>
            Made for the way you live <span aria-hidden="true">↘</span>
          </span>
        </div>
      </Container>
    </section>
  );
}
