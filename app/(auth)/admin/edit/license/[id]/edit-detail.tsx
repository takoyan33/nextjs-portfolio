"use client"

import { HistoryBackButton } from "@/components/ui/button/history-back-button"
import { Breadcrumb, CommonLabel, LowerTitle } from "components/ui"
import { useState } from "react"
import { PATH } from "utils/path"
import { editPortfolio } from "./actions"

import { License } from "@/types"

const EditDetail = ({ license }: { license: License }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async (formData: FormData) => {
    setLoading(true)
    setError("")

    const result = await editPortfolio(formData, license.id)

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
            { name: "資格", link: PATH.EDIT_PORTFOLIO },
            { name: "資格修正", link: PATH.ABOUT },
          ]}
        />
      </div>

      <LowerTitle title="資格修正" enTitle="Edit" />
      <div className="max_width">
        <div className="form">
          <form action={onSubmit} className="mt-8 flex flex-col gap-4 max-w-sm">
            <div className="form-box">
              <CommonLabel text="資格名" id="historyTitle" required />
              <input
                type="text"
                name="historyTitle"
                placeholder="資格名"
                required
                defaultValue={license?.title}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="資格取得日" id="historyDate" required />
              <input type="text" name="historyDate" required defaultValue={license?.date} />
            </div>
            <div>
              <HistoryBackButton>キャンセル</HistoryBackButton>
              <button type="submit" disabled={loading} className="flex-1">
                {loading ? "認証中..." : "編集"}
              </button>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </main>
  )
}

export default EditDetail
