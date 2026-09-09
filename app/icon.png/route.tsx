import { ImageResponse } from "next/og";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
export const dynamic = "force-static";
export function GET() {
  const logo = path.join(process.cwd(), "public/assets/logos/skout-labs.png");
  if (existsSync(logo))
    return new Response(readFileSync(logo), {
      headers: { "Content-Type": "image/png" },
    });
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#EBE1D1",
        color: "#304E43",
        fontSize: 110,
        fontWeight: 700,
      }}
    >
      S
    </div>,
    { width: 180, height: 180 },
  );
}
