"use client"

export const dynamic = "force-static"

export default function GlobalError() {
  return (
    <main>
      <h2>500 サーバーでエラーが発生しました</h2>
      <p>しばらく時間をおいて、再度お試しください</p>
    </main>
  )
}
