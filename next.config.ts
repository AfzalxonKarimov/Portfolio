import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fails the production build on type errors instead of silently shipping them.
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
