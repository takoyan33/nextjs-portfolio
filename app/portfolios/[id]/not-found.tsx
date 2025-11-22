import { TransitionLink } from "components/ui"
import type { Metadata } from "next"
import { PATH } from "../../../utils/path"

export const metadata: Metadata = {
  title: "404",
}

const ErrorPage = () => {
  return (
    <main className="errorPage">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>この記事はすでに削除されているか、URLが間違っている可能性があります。</p>
      <TransitionLink href={PATH.INDEX} className="contact__btn padding-bottom">
        トップに戻る
      </TransitionLink>
    </main>
  )
}

export default ErrorPage
