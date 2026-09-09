"use client";
import { StatusScreen } from "@/components/status/StatusScreen";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <StatusScreen variant="error" onRetry={reset} />;
}
