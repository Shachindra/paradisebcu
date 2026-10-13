import type { NextConfig } from "next";

// GitHub Actions sets PAGES_BASE_PATH from actions/configure-pages.
// Project sites use /<repo>. User sites and custom domains use an empty path.
const basePath = (process.env.PAGES_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/$/,
  "",
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
