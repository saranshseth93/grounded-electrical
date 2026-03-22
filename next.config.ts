import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/grounded-electrical",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
