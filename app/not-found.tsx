import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <p className="eyebrow">404 / A SMALL DETOUR</p>
        <h1>Let’s find your way back.</h1>
        <p className="lede">The page you’re looking for could not be found.</p>
        <div className="button-group">
          <Button href="/">Back to Home</Button>
          <Button href="/apps" secondary>
            Explore Our Apps
          </Button>
        </div>
      </Container>
    </section>
  );
}
