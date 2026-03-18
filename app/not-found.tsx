import { HistoryBackButton } from "components/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
}

const ErrorPage = ({ error }: { error?: { message?: string } }) => {
  return (
    <main className="errorPage">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>{error?.message || "The page you are looking for does not exist."}</p>
      <div>
        <HistoryBackButton className="contact__btn">トップに戻る</HistoryBackButton>
      </div>
    </main>
  )
}

export default ErrorPage
