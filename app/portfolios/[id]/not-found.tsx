import { HistoryBackButton } from "components/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
}

const ErrorPage = () => {
  return (
    <main className="errorPage">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>この記事はすでに削除されているか、URLが間違っている可能性があります。</p>
      <div className="flex gap-4 justify-center padding-bottom">
        <HistoryBackButton className="contact__btn">トップに戻る</HistoryBackButton>
      </div>
    </main>
  )
}

export default ErrorPage
