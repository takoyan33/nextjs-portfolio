import { Breadcrumb, LowerTitle } from "@/components/ui"
import "@/styles/page/_policy.scss"
import { PATH } from "@/utils/path"
import type { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "To You Design - プライバシーポリシー",
}

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy">
      <div className="max_width">
        <Breadcrumb items={[{ name: "Privacy Policy", link: PATH.PRIVACY_POLICY }]} />
      </div>
      <LowerTitle title="プライバシーポリシー" enTitle="Privacy Policy" />
      <div className="privacy-policy__content max_width">
        <h2 className="privacy-policy__heading">個人情報の利用目的</h2>
        <p className="privacy-policy__text">
          当サイトでは、お問い合わせの際、名前やメールアドレスなどの個人情報を入力いただく場合がございます。取得した個人情報は、お問い合わせに対する回答や必要な情報をメールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
        </p>

        <h2 className="privacy-policy__heading">アクセス解析ツールについて</h2>
        <p className="privacy-policy__text">
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          詳細については以下をご覧ください：
          <br />
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy__link"
          >
            Googleアナリティクス利用規約
          </a>
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy__link"
          >
            Googleポリシーと規約
          </a>
        </p>

        <h2 className="privacy-policy__heading">Microsoft Clarityについて</h2>
        <p className="privacy-policy__text">
          当サイトでは、ユーザー体験の向上を目的として、Microsoftが提供するアクセス解析ツール「Microsoft
          Clarity」を使用しています。Clarityはユーザーの行動データを匿名で収集し、ヒートマップやセッションレコーディングなどの形式で可視化します。
          Clarityによって収集される情報には、個人を特定できる情報は含まれておらず、また収集を希望されない場合は、ブラウザのCookie設定を変更することで無効にすることが可能です。
          詳細については以下をご覧ください：
          <br />
          <a
            href="https://clarity.microsoft.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy__link"
          >
            Microsoft Clarity利用規約
          </a>
          <a
            href="https://privacy.microsoft.com/ja-jp/privacystatement"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy__link"
          >
            Microsoftプライバシーステートメント
          </a>
        </p>
      </div>
    </main>
  )
}

export default PrivacyPolicy
