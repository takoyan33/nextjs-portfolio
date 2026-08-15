"use client"

import { AlertCircle, Home } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("ErrorBoundary caught an error:", error)
  }, [error])

  return (
    <main className="error-container max_width">
      <div className="error-card">
        <div className="error-icon-wrapper">
          <AlertCircle className="error-icon" size={48} />
        </div>
        <h2 className="error-title">一時的なエラーが発生しました</h2>
        <p className="error-description">
          データの読み込み中にエラーが発生しました。
          <br />
          ネットワークの接続状況をご確認の上、もう一度お試しください。
        </p>
        {error.message && (
          <div className="error-detail-box">
            <code className="error-code">{error.message}</code>
          </div>
        )}
        <div className="error-actions">
          <Link href="/" className="error-button error-home-link">
            <Home size={16} />
            <span>トップに戻る</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
