"use client";
import "./globals.css";
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
