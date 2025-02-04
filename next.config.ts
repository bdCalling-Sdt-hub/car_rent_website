import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "178.128.174.197",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;