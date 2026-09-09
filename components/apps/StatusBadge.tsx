import type { SkoutApp } from "@/lib/apps";
export function StatusBadge({ status }: { status: SkoutApp["status"] }) {
  return (
    <span className="status">
      <span aria-hidden="true" />
      {status}
    </span>
  );
}
