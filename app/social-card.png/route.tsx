/* eslint-disable @next/next/no-img-element -- ImageResponse requires an embedded img element. */
import { ImageResponse } from "next/og";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
export const dynamic = "force-static";
export function GET() {
  const logo = path.join(process.cwd(), "public/assets/logos/skout-labs.png");
  const logoData = existsSync(logo)
    ? `data:image/png;base64,${readFileSync(logo).toString("base64")}`
    : null;
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#EBE1D1",
        color: "#304E43",
        padding: 70,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 24, letterSpacing: 5 }}>SKOUT LABS</span>
        <span style={{ fontSize: 70, fontWeight: 700, marginTop: 38 }}>
          Discover. Plan.
        </span>
        <span style={{ fontSize: 70, fontWeight: 700 }}>Organize.</span>
        <span style={{ fontSize: 70, fontWeight: 700, color: "#a64e24" }}>
          Experience.
        </span>
        <span style={{ fontSize: 21, marginTop: 30 }}>
          Thoughtful software. Made in South Africa.
        </span>
      </div>
      {/* ImageResponse renders an embedded data image, not browser HTML. */}
      {logoData && (
        <img src={logoData} width={330} height={330} alt="SKOUT LABS" />
      )}
    </div>,
    { width: 1200, height: 630 },
  );
}
