import type { NextConfig } from "next"
import headers from "./headers"

const config: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // 全てのパスに Security Headers を適用する
        source: "/(.*)",
        headers,
      },
    ]
  },
}

export default config
