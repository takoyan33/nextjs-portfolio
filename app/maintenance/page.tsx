import type { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "メンテナンス中 | To You Design",
  description: "現在メンテナンス中です。しばらくお待ちください。",
}

const Maintenance = () => {
  return (
    <main
      className="u-padding"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>メンテナンス中</h1>
      <p style={{ fontSize: "1.2rem" }}>
        ご不便をおかけして申し訳ありません。
        <br />
        現在メンテナンス中です。しばらくお待ちください。
      </p>
    </main>
  )
}

export default Maintenance
