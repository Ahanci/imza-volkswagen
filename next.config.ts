import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow preview panel cross-origin requests
  allowedDevOrigins: [
    "preview-chat-2d5321fa-e681-46ba-b8d7-381ff2e4294a.space-z.ai",
  ],
};

export default nextConfig;
