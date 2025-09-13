import { worker } from "./browser"

// ブラウザ環境でのみMSWを有効化
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  worker
    .start({
      onUnhandledRequest: "bypass",
    })
    .then(() => {
      console.log("🚀 MSW (Mock Service Worker) が起動しました")
    })
    .catch((error) => {
      console.error("MSWの起動に失敗しました:", error)
    })
}
