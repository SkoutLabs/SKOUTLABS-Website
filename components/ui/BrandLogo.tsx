import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
/** The shared .brand-logo styles in styles/components/_brand-logo.scss combine with placement-specific className sizing. */
export function BrandLogo({
  src = "/assets/logos/skout-labs.png",
  name = "SKOUT LABS",
  className = "",
  priority = false,
}: {
  src?: string;
  name?: string;
  className?: string;
  priority?: boolean;
}) {
  const available = existsSync(path.join(process.cwd(), "public", src));
  return (
    <span className={`brand-logo ${className}`}>
      {available ? (
        <Image
          src={src}
          alt={`${name} logo`}
          width={600}
          height={600}
          sizes="(max-width: 640px) 70vw, 360px"
          priority={priority}
        />
      ) : (
        <span className="brand-wordmark">
          {name.replace(/ (LABS|Skout)$/, "")}
          <small>{name === "SKOUT LABS" ? "L A B S" : "S K O U T"}</small>
        </span>
      )}
    </span>
  );
}
