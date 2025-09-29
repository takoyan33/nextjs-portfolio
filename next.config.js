/** @type {import('next').NextConfig} */

const headers = require("./headers")

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "",
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
}
