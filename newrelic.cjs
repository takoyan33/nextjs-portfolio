"use strict"

// New Relic is enabled only for Vercel production deployments.
if (process.env.VERCEL_ENV !== "production") {
  module.exports = {}
  return
}

exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME || "nextjs-portfolio"],
  license_key: process.env.NEW_RELIC_LICENSE_KEY,

  // Use Next.js native OpenTelemetry spans through New Relic's Hybrid Agent.
  opentelemetry: {
    enabled: true,
  },
  instrumentation: {
    // Next.js supplies these spans. Disable overlapping Node-agent instrumentation
    // to prevent duplicate transactions and client spans.
    http: { enabled: false },
    next: { enabled: false },
    undici: { enabled: false },
  },

  // The security agent is incompatible with the Next.js/Turbopack runtime.
  security: {
    agent: {
      enabled: false,
    },
  },
  logging: {
    level: "warn",
  },
}
