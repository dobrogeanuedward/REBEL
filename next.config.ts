import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rebelepigenetica.it",
          },
        ],
        destination: "https://rebelepigenetica.it/:path*",
        permanent: true,
      },
    ];
  },
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

