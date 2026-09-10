import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  MapPin,
  Plane,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-marker" /> SMALL STUDIO. BIG POSSIBILITIES.
            </p>
            <h1>
              Life’s a journey.
              <br />
              Make room for
              <br />
              <span>the good stuff.</span>
            </h1>
            <p className="lede">
              A little less life admin. A little more adventure. Thoughtful apps
              for the everyday, the unexpected and wherever life takes you next.
            </p>
            <div className="button-group">
              <Button href="/apps">Find your next Skout</Button>
              <Button href="/about" secondary>
                Meet the studio
              </Button>
            </div>
            <p className="hero-note">
              Made with care in South Africa. Built for your everyday.
            </p>
          </div>
          <div className="journey-art">
            <div className="journey-map">
              <div className="map-heading">
                <span>A WORLD OF POSSIBILITIES</span>
                <Compass size={23} aria-hidden="true" />
              </div>
              <svg
                className="map-landscape"
                viewBox="0 0 500 500"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M-40 165C70 45 100 240 230 115S430 35 540 95M-40 185C70 65 100 260 230 135S430 55 540 115M-40 205C70 85 100 280 230 155S430 75 540 135M-40 225C70 105 100 300 230 175S430 95 540 155"
                  className="map-contour"
                />
                <path
                  d="M-30 400C70 300 190 465 300 335S470 350 530 250M-30 420C70 320 190 485 300 355S470 370 530 270M-30 440C70 340 190 505 300 375S470 390 530 290"
                  className="map-contour"
                />
                <path
                  d="M90 345C10 220 265 300 240 175S430 85 400 270"
                  className="map-route"
                />
                <circle cx="90" cy="345" r="8" fill="var(--skout-orange)" />
                <path
                  d="m323 367 35-57 36 57zm47 0 23-38 25 38"
                  stroke="var(--skout-teal)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="394" cy="308" r="14" fill="var(--skout-orange)" />
              </svg>
              <Link href="/apps" className="map-stop stop-discover">
                <span className="stop-icon">
                  <Compass size={21} aria-hidden="true" />
                </span>
                <span>
                  <small>FOLLOW YOUR CURIOSITY</small>
                  <strong>Discover something new</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/about" className="map-stop stop-simplify">
                <span className="stop-icon">
                  <Layers3 size={21} aria-hidden="true" />
                </span>
                <span>
                  <small>MAKE SPACE FOR WHAT MATTERS</small>
                  <strong>Simplify the everyday</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#collection" className="map-stop stop-explore">
                <span className="stop-icon">
                  <Plane size={21} aria-hidden="true" />
                </span>
                <span>
                  <small>ONE FAMILY. MORE POSSIBILITIES.</small>
                  <strong>Keep exploring</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <div className="map-origin">
                <MapPin size={15} aria-hidden="true" /> YOU ARE HERE. ANYWHERE
                IS NEXT.
              </div>
            </div>
            <div className="explorer-stamp" aria-hidden="true">
              <Compass size={32} strokeWidth={1.3} />
              <span>
                STAY
                <br />
                CURIOUS
              </span>
            </div>
            <div className="journey-ticket">
              <span>THE SKOUT COLLECTION</span>
              <strong>A growing world of apps</strong>
              <span>
                THIS IS JUST THE BEGINNING{" "}
                <Sparkles size={15} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>
            <span className="tiny-marker" /> INDEPENDENT SPIRIT. SOUTH AFRICAN
            ROOTS.
          </span>
          <a href="#collection">
            Your adventure starts here{" "}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
