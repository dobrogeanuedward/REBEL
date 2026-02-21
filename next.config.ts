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
      {
        protocol: "https",
        hostname: "epikey.rebelepigenetica.it",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
};

export default nextConfig;

