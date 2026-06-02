import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/HasanShah",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
