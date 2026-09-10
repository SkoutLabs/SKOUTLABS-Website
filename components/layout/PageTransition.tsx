"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

/** Animate committed routes without delaying links, history, or anchor navigation. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const content = useRef<HTMLDivElement>(null);
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const changed = previousPath.current !== pathname;
    previousPath.current = pathname;
    if (!changed || window.location.hash) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        content.current,
        { y: 20 },
        { y: 0, duration: 0.5, ease: "power3.out", clearProps: "transform" },
      );
    });
    return () => media.revert();
  }, [pathname]);

  return (
    <div ref={content} className="page-transition">
      {children}
    </div>
  );
}
