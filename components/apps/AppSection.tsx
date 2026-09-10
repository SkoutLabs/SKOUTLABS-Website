import Image from "next/image";
import type { SkoutApp } from "@/lib/apps";
import { Check } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "./StatusBadge";
/** The .product-section layout in styles/pages/_apps.scss shares artwork colours with AppCard. */
export function AppSection({ app, index }: { app: SkoutApp; index: number }) {
  return (
    <section
      className={`product-section app-${index}`}
      id={app.id}
      aria-labelledby={`${app.id}-title`}
    >
      <div className="product-art">
        <span className="app-number">THE SKOUT COLLECTION / 0{index + 1}</span>
        <BrandLogo src={app.logo} name={app.name} />
        <span className="art-caption">{app.tagline}</span>
      </div>
      <div className="product-copy">
        <StatusBadge status={app.status} />
        <h2 id={`${app.id}-title`}>{app.name}</h2>
        <p className="lede">{app.description}</p>
        <h3>
          {app.status === "Available"
            ? "Features"
            : "What we’re working towards"}
        </h3>
        <ul className="feature-list">
          {app.features.map((feature) => (
            <li key={feature}>
              <Check size={17} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        {app.status !== "Available" && (
          <p className="small-copy">
            Planned features may evolve as development progresses. This app is
            not yet publicly available.
          </p>
        )}
        <div className="button-group">
          {app.appStoreUrl && <Button href={app.appStoreUrl}>App Store</Button>}
          {app.googlePlayUrl && (
            <Button href={app.googlePlayUrl}>Google Play</Button>
          )}
          {app.futureUrl && (
            <Button href={app.futureUrl} secondary>
              App website
            </Button>
          )}
        </div>
        {app.screenshots.length > 0 && (
          <div className="screenshots">
            {app.screenshots.map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={360}
                height={720}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
