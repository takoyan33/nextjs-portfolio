import type { NextConfig } from "next"
import securityHeaders from "./headers"

const config: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    qualities: [40, 60, 75],
    minimumCacheTTL: 60,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },

  serverExternalPackages: ["pino"],
}

export default config
