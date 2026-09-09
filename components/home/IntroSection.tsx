import { Container } from "@/components/layout/Container";
export function IntroSection() {
  return (
    <section className="section intro-section">
      <Container className="intro-grid">
        <div>
          <p className="eyebrow">A CLEARER WAY THROUGH THE EVERYDAY</p>
          <h2>
            Software for
            <br />
            everyday adventures.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Skout Labs is a South African software company focused on creating
            practical, beautifully designed applications for everyday life.
          </p>
          <p>
            From managing your budget and recipes to planning your next journey,
            the Skout family of applications is designed to make organizing life
            simpler and more enjoyable.
          </p>
        </div>
      </Container>
    </section>
  );
}
