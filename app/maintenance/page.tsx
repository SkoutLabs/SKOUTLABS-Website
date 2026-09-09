import type { Metadata } from "next";
import { StatusScreen } from "@/components/status/StatusScreen";
export const metadata: Metadata = {
  title: "Under Maintenance",
  robots: { index: false, follow: false },
};
export default function Maintenance() {
  return <StatusScreen variant="maintenance" />;
}
