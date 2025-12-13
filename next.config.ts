import type { NextConfig } from "next"
import headers from "./headers"

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    // Next.js 16で推奨される品質設定
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        // 全てのパスに Security Headers を適用する
        source: "/(.*)",
        headers,
      },
    ]
  },
  serverExternalPackages: ["pino"],
}

export default config
