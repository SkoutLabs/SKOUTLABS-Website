import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { pageMetadata, site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
export const metadata = pageMetadata(
  "Contact Skout Labs",
  "Get in touch with Skout Labs in South Africa about our company or applications.",
  "/contact",
);
export default function Contact() {
  return (
    <section className="section contact-section">
      <Container>
        <p className="eyebrow">EVERY CONVERSATION STARTS SOMEWHERE</p>
        <h1>Contact Skout Labs</h1>
        <p className="lede">
          Have a question about Skout Labs or one of our applications? We’d be
          happy to hear from you.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <Mail size={32} strokeWidth={1.3} aria-hidden="true" />
            <h2>Let’s talk.</h2>
            <p>Questions, ideas or a simple hello — our inbox is open.</p>
            <a className="email-address" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <Button href={`mailto:${site.email}`}>Email Skout Labs</Button>
            <p className="small-copy">
              Opens your preferred email application.
            </p>
          </div>
          <aside className="contact-aside">
            <MapPin size={27} strokeWidth={1.4} aria-hidden="true" />
            <h2>SKOUT LABS</h2>
            <p>South Africa</p>
            <div className="thin-divider" />
            <h3>A note about our apps</h3>
            <p>
              Our everyday apps and our game, Expedition Skout, are currently in
              development. You’re welcome to get in touch with questions about
              the collection.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
