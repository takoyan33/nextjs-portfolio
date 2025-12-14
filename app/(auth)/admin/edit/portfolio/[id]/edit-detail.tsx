"use client"

import { Breadcrumb, CommonLabel, LowerTitle } from "components/ui"
import { useState } from "react"
import { PATH } from "utils/path"
import { editPortfolio } from "./actions"
import { PortfolioType } from "types"

const EditDetail = ({ portfolio }: { portfolio: PortfolioType }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async (formData: FormData) => {
    setLoading(true)
    setError("")

    const result = await editPortfolio(
      formData,
      portfolio?.id,
      portfolio?.aboutImg,
      portfolio?.appealImg,
      portfolio?.functionImg,
    )

    if (result?.error) {
      setLoading(false)
      setError(result.error)
      alert(result.error)
      return
    }
  }
  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb
          items={[
            { name: "管理画面", link: PATH.DASHBOARD },
            { name: "ポートフォリオ", link: PATH.EDIT_PORTFOLIO },
            { name: "ポートフォリオ修正", link: PATH.ABOUT },
          ]}
        />
      </div>

      <LowerTitle title="ポートフォリオ修正" enTitle="Edit" />
      <div className="max_width">
        <div className="form">
          <form action={onSubmit} className="mt-8 flex flex-col gap-4 max-w-sm">
            <div className="form-box">
              <CommonLabel text="ポートフォリオ名" id="portfolioName" required />
              <input
                type="text"
                name="portfolioName"
                placeholder="ポートフォリオ名"
                required
                defaultValue={portfolio?.name}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオ取得日" id="portfolioDate" required />
              <input type="date" name="portfolioDate" required defaultValue={portfolio?.date} />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオトップ画像" id="portfolioTopImage" />
              <img src={portfolio?.topImg} alt="Current Top" className="mb-2" />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオフロントURL" id="portfolioFront_url" required />
              <input
                type="url"
                name="portfolioFront_url"
                placeholder="ポートフォリオフロントURL"
                required
                defaultValue={portfolio?.front_url}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオバックURL" id="portfolioBack_url" />
              <input
                type="url"
                name="portfolioBack_url"
                placeholder="ポートフォリオバックURL"
                defaultValue={portfolio?.back_url}
              />
            </div>
            <div className="form-box">
              <CommonLabel
                text="ポートフォリオフロントGitHub"
                id="portfolioFront_github"
                required
              />
              <input
                type="url"
                name="portfolioFront_github"
                placeholder="ポートフォリオフロントGitHub"
                required
                defaultValue={portfolio?.front_github}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオバックGitHub" id="portfolioBack_github" />
              <input
                type="url"
                name="portfolioBack_github"
                placeholder="ポートフォリオバックGitHub"
                defaultValue={portfolio?.back_github}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオカラー" id="portfolioColor" required />
              <input type="text" name="portfolioColor" required defaultValue={portfolio?.color} />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオ説明画像" id="aboutImg" />
              <img src={portfolio?.aboutImg} alt="Current Feature" className="mb-2" />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオ説明" id="portfolioAbout" required />
              <textarea
                name="portfolioAbout"
                placeholder="ポートフォリオ説明"
                required
                defaultValue={portfolio?.about}
                rows={6}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオ機能" id="portfolioFunction" required />
              <textarea
                name="portfolioFunction"
                placeholder="ポートフォリオ機能"
                required
                defaultValue={portfolio?.function}
                rows={6}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオ機能画像" id="portfolioFeaturesImage" />
              <img src={portfolio?.functionImg} alt="Current Feature" className="mb-2" />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオアピール" id="portfolioAppeal" required />
              <textarea
                name="portfolioAppeal"
                placeholder="ポートフォリオアピール"
                required
                defaultValue={portfolio?.appeal}
                rows={6}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオアピール画像" id="portfolioAppealImage" />
              <img src={portfolio?.appealImg} alt="Current Appeal" className="mb-2" />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオフロントスキル" id="portfolioFront_skill" required />
              <input
                type="text"
                name="portfolioFront_skill"
                placeholder="ポートフォリオフロントスキル"
                required
                defaultValue={portfolio?.front_skill}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオバックスキル" id="portfolioBack_skill" />
              <input
                type="text"
                name="portfolioBack_skill"
                placeholder="ポートフォリオバックスキル"
                defaultValue={portfolio?.back_skill}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオインフラスキル" id="portfolioInfra_skill" />
              <input
                type="text"
                name="portfolioInfra_skill"
                placeholder="ポートフォリオインフラスキル"
                defaultValue={portfolio?.infra_skill}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="ポートフォリオ作成所要時間" id="portfolioTime" required />
              <input
                type="text"
                name="portfolioTime"
                placeholder="ポートフォリオ作成所要時間"
                required
                defaultValue={portfolio?.time}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "認証中..." : "編集"}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </main>
  )
}

export default EditDetail
