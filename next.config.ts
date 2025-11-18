import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // 👇 ОБЯЗАТЕЛЬНО для GitHub Pages (repo: "portfolio")
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  trailingSlash: true,
};

export default nextConfig;
