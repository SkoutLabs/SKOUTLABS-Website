import type { Metadata } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/manrope/latin-800.css";
// Load shared class styles for every page and component.
import "./globals.css";
import "@/styles/main.scss";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StatusScreen } from "@/components/status/StatusScreen";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: {
    default: "SKOUT LABS | Discover. Plan. Organize. Experience.",
    template: "%s | SKOUT LABS",
  },
  description: site.description,
  icons: { icon: "/icon.png", apple: "/icon.png" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      {/* Extensions such as Grammarly add body attributes before hydration.
          Suppress this element's mismatch only; descendants remain checked. */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header logo={<BrandLogo className="header-logo" />} />
        <main id="main-content" tabIndex={-1}>
          {process.env.SKOUT_MAINTENANCE === "1" ? (
            <StatusScreen variant="maintenance" />
          ) : (
            children
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
