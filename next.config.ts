import type { NextConfig } from "next";
const staticExport = process.env.SKOUT_STATIC_EXPORT === "1";
const config: NextConfig = {
  poweredByHeader: false,
  ...(staticExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {}),
};
export default config;
