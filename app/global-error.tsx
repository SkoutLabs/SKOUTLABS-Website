"use client";
// Load shared class styles for this fallback, which replaces the root layout.
import "./globals.css";
import "@/styles/main.scss";
import { StatusScreen } from "@/components/status/StatusScreen";
export default function GlobalError() {
  return (
    <html lang="en-ZA">
      <body>
        <main id="main-content">
          <StatusScreen variant="error" />
        </main>
      </body>
    </html>
  );
}
