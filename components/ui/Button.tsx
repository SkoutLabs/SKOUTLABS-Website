import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
/** The .button and .button-secondary selectors in styles/components/_buttons.scss define the shared link-button variants. */
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""}`}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
