import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.0.60.26",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;