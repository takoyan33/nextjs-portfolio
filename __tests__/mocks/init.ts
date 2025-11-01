import { worker } from "./browser"

// ブラウザ環境でのみMSWを有効化
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  worker
    .start({
      onUnhandledRequest: "bypass",
    })
    .then(() => {
      console.log("🚀 MSW (Mock Service Worker) が起動しました")

      // 全てのリクエストをフック
      worker.events.on("request:start", ({ request }) => {
        console.log("➡️ MSW request:", request.method, request.url)
      })

      worker.events.on("request:match", ({ request }) => {
        console.log("✅ MSW matched:", request.method, request.url)
      })

      worker.events.on("request:unhandled", ({ request }) => {
        console.warn("⚠️ MSW unhandled:", request.method, request.url)
      })
    })
    .catch((error) => {
      console.error("MSWの起動に失敗しました:", error)
    })
}
