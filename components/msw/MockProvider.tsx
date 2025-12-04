"use client"

import { useEffect } from "react"

/**
 * MSWの初期化コンポーネント（クライアントサイド専用）
 */
export const MockProvider = () => {
  useEffect(() => {
    // 環境変数でMSWの使用を制御
    if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
      // 動的インポートでブラウザ環境でのみMSWを読み込み
      import("../../mocks/init")
        .then(() => {
          console.log("🚀 MSW (Mock Service Worker) が起動しました")
        })
        .catch((error) => {
          console.error("MSWの初期化に失敗しました:", error)
        })
    }
  }, [])

  return null
}
