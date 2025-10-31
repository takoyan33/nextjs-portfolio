"use client"

import { useState } from "react"
import { Breadcrumb, CommonLabel, LowerTitle } from "../../../components/ui"
import { PATH } from "../../../utils/path"
import { authenticate } from "./actions"

const Admin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async (formData: FormData) => {
    setLoading(true)
    setError("")

    const result = await authenticate(formData)

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
        <Breadcrumb items={[{ name: "Admin", link: PATH.ABOUT }]} />
      </div>

      <LowerTitle title="Admin" enTitle="認証" />
      <div className="max_width">
        <div className="form">
          <form action={onSubmit} className="mt-8 flex flex-col gap-4 max-w-sm">
            <div className="form-box">
              <CommonLabel text="メールアドレス" id="email" />
              <input type="email" name="email" placeholder="sample@email.com" required />
            </div>

            <div className="form-box">
              <CommonLabel text="パスワード" id="password" />
              <input type="password" name="password" placeholder="パスワード" required />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "認証中..." : "ログイン"}
            </button>

            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </main>
  )
}

export default Admin
