"use client"

import { Breadcrumb, CommonLabel, LowerTitle } from "components/ui"
import { useState } from "react"
import { PATH } from "utils/path"
import { editPortfolio } from "./actions"

import { Job } from "@/types"

const EditDetail = ({ history }: { history: Job }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async (formData: FormData) => {
    setLoading(true)
    setError("")

    const result = await editPortfolio(formData, history.id)

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
            { name: "職歴", link: PATH.EDIT_PORTFOLIO },
            { name: "職歴修正", link: PATH.ABOUT },
          ]}
        />
      </div>

      <LowerTitle title="職歴修正" enTitle="Edit" />
      <div className="max_width">
        <div className="form">
          <form action={onSubmit} className="mt-8 flex flex-col gap-4 max-w-sm">
            <div className="form-box">
              <CommonLabel text="職歴名" id="historyTitle" required />
              <input
                type="text"
                name="historyTitle"
                placeholder="職歴名"
                required
                defaultValue={history?.title}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="職歴取得日" id="historyDate" required />
              <input type="text" name="historyDate" required defaultValue={history?.date} />
            </div>
            <div className="form-box">
              <CommonLabel text="職歴概要" id="historyBody" required />
              <textarea
                name="historyBody"
                placeholder="職歴概要"
                required
                defaultValue={history?.body}
                rows={6}
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
