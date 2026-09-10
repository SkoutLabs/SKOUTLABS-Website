import type { SkoutApp } from "@/lib/apps";
/** Uses the shared .status badge styles in styles/components/_status-badge.scss for apps and games. */
export function StatusBadge({ status }: { status: SkoutApp["status"] }) {
  return (
    <span className="status">
      <span aria-hidden="true" />
      {status}
    </span>
  );
}
