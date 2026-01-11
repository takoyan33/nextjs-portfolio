export async function register() {
  // Edge では絶対に動かさない
  if (process.env.NEXT_RUNTIME === "edge") {
    return
  }

  // MSW Initialization for Server Components
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    const { server } = await import("@/mocks/server")
    server.listen()
    console.log("!!!!🟢 MSW Server Started via Instrumentation!!!!")
  }

  if (process.env.VERCEL_ENV === "production") {
    await import("newrelic")
  }
}
