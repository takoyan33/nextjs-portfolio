import { loadNewRelicAgent } from "./newrelic-agent"

export async function register() {
  // The New Relic Hybrid Agent instruments Node.js only, never Edge.
  if (process.env.NEXT_RUNTIME !== "nodejs") {
    return
  }

  // Load New Relic before application modules in the production runtime.
  if (process.env.VERCEL_ENV === "production") {
    await loadNewRelicAgent()
  }

  // MSW initialization for Server Components in local development.
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    const { server } = await import("@/mocks/server")
    server.listen()
  }
}
