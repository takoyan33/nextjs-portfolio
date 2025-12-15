"use client"

import { Skill } from "@/types"
import { Breadcrumb, CommonLabel, LowerTitle } from "components/ui"
import { useState } from "react"
import { PATH } from "utils/path"
import { ediSkill } from "./actions"

type Props = {
  skill: Skill
}

const EditDetail = ({ skill }: Props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async (formData: FormData) => {
    setLoading(true)
    setError("")

    const result = await ediSkill(formData, skill?.id, skill?.icon)

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
            { name: "スキル", link: PATH.EDIT_PORTFOLIO },
            { name: "スキル修正", link: PATH.ABOUT },
          ]}
        />
      </div>

      <LowerTitle title="スキル修正" enTitle="Edit" />
      <div className="max_width">
        <div className="form">
          <form action={onSubmit} className="mt-8 flex flex-col gap-4 max-w-sm">
            <div className="form-box">
              <CommonLabel text="スキル名" id="skillName" required />
              <input
                type="text"
                name="skillName"
                placeholder="スキル名"
                required
                defaultValue={skill?.name}
              />
            </div>
            <div className="form-box">
              <CommonLabel text="スキルランク" id="skillRank" required />
              <input type="text" name="skillRank" required defaultValue={skill?.rank} />
            </div>
            <div className="form-box">
              <CommonLabel text="スキル概要" id="skillAbout" required />
              <textarea name="skillAbout" required defaultValue={skill?.about} rows={6} />
            </div>
            <div className="form-box">
              <CommonLabel text="スキルタグ" id="skillTag" required />
              <input type="text" name="skillTag" required defaultValue={skill?.tag} />
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
