import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables ESLint blocking builds
  },
};

export default nextConfig;
