import Link from "next/link";
import { navigation, site } from "@/lib/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "./Container";
/** Footer selectors in styles/layout/_footer.scss control the navigation columns and mobile stacking. */
export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-sendoff">
          <span className="eyebrow">UNTIL THE NEXT ADVENTURE</span>
          <Link href="/apps">
            Keep exploring. <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="footer-main">
          <div>
            <Link href="/" aria-label="SKOUT LABS home">
              <BrandLogo className="footer-logo" />
            </Link>
            <p>Discover. Plan. Organize. Experience.</p>
          </div>
          <div>
            <p className="eyebrow">Find your way</p>
            <nav aria-label="Footer navigation">
              {[
                ...navigation,
                { href: "/privacy", label: "Privacy Policy" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="eyebrow">Say hello</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>Based in South Africa.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SKOUT LABS. All rights reserved.
          </span>
          <span>Thoughtful software. Everyday possibilities.</span>
        </div>
      </Container>
    </footer>
  );
}
