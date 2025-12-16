export async function register() {
  // Edge では絶対に動かさない
  if (process.env.NEXT_RUNTIME === "edge") {
    return
  }

  if (process.env.VERCEL_ENV === "production") {
    await import("newrelic")
  }
}
