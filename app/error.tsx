"use client"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="max_width">
      <h2>エラーが発生しました</h2>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        再試行
      </button>
    </main>
  )
}
