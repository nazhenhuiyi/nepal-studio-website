import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/books/:slug",
        destination: "/books/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
