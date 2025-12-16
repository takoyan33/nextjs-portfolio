// newrelic.cjs
"use strict"

if (process.env.VERCEL_ENV !== "production") {
  module.exports = {}
  return
}

exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,

  /**
   * 🔴 これが最重要
   * Turbopack / Next.js では security-agent は使えない
   */
  security: {
    agent: {
      enabled: false,
    },
  },

  logging: {
    level: "info",
  },
}
