"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Keep content server-rendered and visible when JavaScript or motion is disabled. */
export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
        entrance
          .from(".hero-copy > *", {
            y: 24,
            duration: 0.7,
            stagger: 0.09,
            clearProps: "transform",
          })
          .from(
            ".journey-map",
            {
              y: 35,
              rotation: -8,
              duration: 1,
              clearProps: "transform",
            },
            0.1,
          )
          .from(
            ".map-stop",
            {
              y: 18,
              duration: 0.55,
              stagger: 0.15,
              clearProps: "transform",
            },
            0.35,
          )
          .from(
            ".explorer-stamp",
            {
              scale: 0.7,
              rotation: -20,
              duration: 0.7,
              ease: "back.out(1.7)",
              clearProps: "transform",
            },
            0.55,
          )
          .from(
            ".journey-ticket",
            {
              y: 25,
              rotation: 9,
              duration: 0.8,
              clearProps: "transform",
            },
            0.65,
          )
          .from(
            ".map-route",
            {
              strokeDashoffset: 104,
              duration: 2.4,
              ease: "power1.out",
              clearProps: "strokeDashoffset",
            },
            0.1,
          );

        // Translate only: links remain visible and keyboard-accessible before reveal.
        root.current
          ?.querySelectorAll<HTMLElement>(
            ".intro-grid, .section-top, .app-card, .game-panel, .values-grid article, .home-cta",
          )
          .forEach((element) => {
            gsap.from(element, {
              y: 28,
              duration: 0.8,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: element,
                start: "top 94%",
                once: true,
              },
            });
          });
      },
      root,
    );

    // Also removes ScrollTriggers and restores styles on navigation or preference changes.
    return () => media.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
