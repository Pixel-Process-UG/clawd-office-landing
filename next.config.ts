import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/fwartner/agent-office/**",
      },
      {
        protocol: "https",
        hostname: "fsn1.your-objectstorage.com",
        pathname: "/pp-strapi/**",
      },
    ],
  },
};

export default nextConfig;
