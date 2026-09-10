import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SkoutApp } from "@/lib/apps";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StatusBadge } from "./StatusBadge";
/** Shared .app-card styles live in styles/components/_app-card.scss; app-{index} selects the artwork colour. */
export function AppCard({ app, index }: { app: SkoutApp; index: number }) {
  return (
    <article className={`app-card app-${index}`}>
      <div className="app-card-art">
        <span className="app-number">
          0{index + 1} / {app.name.split(" ")[0].toUpperCase()}
        </span>
        <BrandLogo src={app.logo} name={app.name} />
        <span className="art-caption">{app.category}</span>
      </div>
      <div className="app-card-body">
        <StatusBadge status={app.status} />
        <h3>{app.name}</h3>
        <p>{app.description}</p>
        <Link className="text-link" href={`/apps#${app.id}`}>
          Meet {app.name}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
