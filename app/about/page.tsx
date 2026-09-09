import { pageMetadata } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
export const metadata = pageMetadata(
  "About Skout Labs",
  "Meet Skout Labs, a South African software company building thoughtful applications for everyday life.",
  "/about",
);
const principles = [
  {
    title: "Simplicity",
    text: "Clear choices and useful features that make everyday tasks easier.",
  },
  {
    title: "Thoughtful design",
    text: "Care in the details, from the first interaction to the things you do every day.",
  },
  {
    title: "Useful technology",
    text: "Practical tools that serve a real purpose in your life.",
  },
  {
    title: "Privacy",
    text: "Considering privacy from the start and communicating clearly about information.",
  },
  {
    title: "Your information",
    text: "Designing with respect for your ownership and control of your information.",
  },
  {
    title: "A pleasure to use",
    text: "Building products that feel approachable and that people enjoy returning to.",
  },
];
export default function About() {
  return (
    <>
      <section className="page-hero">
        <Container className="about-hero">
          <div>
            <p className="eyebrow">THE COMPANY BEHIND THE COLLECTION</p>
            <h1>About Skout Labs</h1>
            <p className="lede">
              Thoughtful software.
              <br />A clearer path through everyday life.
            </p>
          </div>
          <BrandLogo className="about-logo" priority />
        </Container>
      </section>
      <section className="section">
        <Container className="intro-grid">
          <h2>
            Useful by nature.
            <br />
            Thoughtful by design.
          </h2>
          <div className="intro-copy">
            <p>
              SKOUT LABS is a South African software company focused on
              designing and developing applications that help people discover,
              plan, organize and experience life.
            </p>
            <p>
              Our applications are built around a simple idea: technology should
              make everyday tasks easier without making them feel complicated.
            </p>
            <p>
              The Skout ecosystem brings this philosophy into different areas of
              life, including budgeting, cooking, travel and future products
              still being explored. We’re also making room for play with
              Expedition Skout, a game currently in development.
            </p>
          </div>
        </Container>
      </section>
      <section className="section philosophy">
        <Container>
          <p className="eyebrow">WHAT GUIDES OUR WORK</p>
          <h2>Our Philosophy</h2>
          <div className="principle-grid">
            {principles.map((item, index) => (
              <article key={item.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="idea-panel">
          <div>
            <p className="eyebrow">A NAME WITH DIRECTION</p>
            <h2>The Skout Idea</h2>
            <p className="lede">
              A scout explores, discovers and helps others find their way.
            </p>
            <p>
              The Skout name represents the same principle across our software:
              helping users navigate everyday life with greater clarity. The
              compass in our identity is a reminder of that direction.
            </p>
            <p className="location-label">
              Based in South Africa. Built for everyday life.
            </p>
            <Button href="/apps">Meet the Skout Collection</Button>
          </div>
          <BrandLogo className="about-logo" />
        </Container>
      </section>
    </>
  );
}
