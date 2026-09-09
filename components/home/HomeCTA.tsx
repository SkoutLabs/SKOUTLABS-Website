import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
export function HomeCTA() {
  return (
    <section className="section">
      <Container>
        <div className="home-cta">
          <div>
            <p className="eyebrow">ALWAYS EXPLORING</p>
            <h2>
              Building useful software,
              <br />
              one adventure at a time.
            </h2>
            <p>
              Skout Labs is continually exploring new ideas and developing
              applications designed to make everyday life easier.
            </p>
          </div>
          <Button href="/about">Learn About Skout Labs</Button>
        </div>
      </Container>
    </section>
  );
}
