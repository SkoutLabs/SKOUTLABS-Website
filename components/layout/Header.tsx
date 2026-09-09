"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/site";
export function Header({ logo }: { logo: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Preserve intentional app-section links while resetting ordinary page visits.
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeMenu = () => setOpen(false);
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) closeMenu();
    };
    desktop.addEventListener("change", closeMenu);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("popstate", closeMenu);
    return () => {
      desktop.removeEventListener("change", closeMenu);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("popstate", closeMenu);
    };
  }, []);

  function handleNavigation(href: string) {
    setOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }
  return (
    <header
      ref={header}
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Link
          href="/"
          className="header-brand"
          aria-label="SKOUT LABS home"
          onNavigate={() => handleNavigation("/")}
        >
          {logo}
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-nav"
          className={open ? "primary-nav is-open" : "primary-nav"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onNavigate={() => handleNavigation(item.href)}
            >
              {item.label}
              {item.label === "Contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
