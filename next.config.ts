import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rebelepigenetica.it",
      },
      {
        protocol: "https",
        hostname: "www.rebelepigenetica.it",
      },
    ],
  },
};

export default nextConfig;

