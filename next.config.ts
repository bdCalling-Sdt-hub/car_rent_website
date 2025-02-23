import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://api.nardo.app",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;