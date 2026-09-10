"use client";

/* Recovery links use full navigation to escape a broken router and recheck maintenance. */
/* eslint-disable @next/next/no-html-link-for-pages */

import { Compass, RefreshCw, Wrench, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const screens = {
  "not-found": {
    label: "404 / A SMALL DETOUR",
    title: "Let’s find your way back.",
    description:
      "The page you’re looking for may have moved, or the link may be a little off. There’s still plenty to discover.",
    icon: Compass,
  },
  error: {
    label: "A PAUSE IN THE JOURNEY",
    title: "This page couldn’t load.",
    description:
      "Something interrupted your visit. Please try again, or come back in a little while if the problem continues.",
    icon: RefreshCw,
  },
  maintenance: {
    label: "A LITTLE WORK BEHIND THE SCENES",
    title: "We’ll be back soon.",
    description:
      "Skout Labs is taking a short break for maintenance. Thanks for your patience while we get things ready for your next visit.",
    icon: Wrench,
  },
};

/** Recovery screen styles live in styles/components/_status-screen.scss, loaded by both the root layout and global error fallback. */
export function StatusScreen({
  variant,
  onRetry,
}: {
  variant: keyof typeof screens;
  onRetry?: () => void;
}) {
  const { label, title, description, icon: Icon } = screens[variant];
  return (
    <section className="status-screen" aria-labelledby="status-title">
      <div className="container status-layout">
        <div className="status-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="status-icon">
            <Icon size={64} strokeWidth={1.2} />
          </span>
          <span className="status-art-caption">
            A little direction. A world of possibility.
          </span>
        </div>
        <div className="status-copy">
          <p className="eyebrow">{label}</p>
          <h1 id="status-title">{title}</h1>
          <p className="lede">{description}</p>
          <div className="button-group">
            {variant === "error" ? (
              <button
                className="button"
                onClick={onRetry ?? (() => window.location.reload())}
              >
                Try Again <RefreshCw size={17} aria-hidden="true" />
              </button>
            ) : variant === "maintenance" ? (
              <a className="button" href="/">
                Check Again <RefreshCw size={17} aria-hidden="true" />
              </a>
            ) : (
              <a className="button" href="/">
                Back to Home <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            {variant === "maintenance" ? (
              <a
                className="button button-secondary"
                href={`mailto:${site.email}`}
              >
                Get in Touch <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <a
                className="button button-secondary"
                href={variant === "error" ? "/" : "/apps"}
              >
                {variant === "error" ? "Back to Home" : "Explore Our Apps"}{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
          <p className="status-help">
            Need a hand? <a href={`mailto:${site.email}`}>Email Skout Labs</a>
          </p>
        </div>
      </div>
    </section>
  );
}
