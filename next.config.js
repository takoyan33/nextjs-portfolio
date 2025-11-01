/** @type {import('next').NextConfig} */

const headers = require("./headers")

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
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
