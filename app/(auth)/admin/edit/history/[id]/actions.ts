"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function editPortfolio(formData: FormData, id: string) {
  console.log(formData)
  const title = formData.get("historyTitle") as string
  const date = formData.get("historyDate") as string
  const body = formData.get("historyBody") as string

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/histories/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      title,
      date,
      body,
    }),
  })

  // ✅ エラーならデータを返す（redirectしない）
  if (!res.ok) {
    return { ok: false, error: "メールまたはパスワードが違います" }
  }
  revalidatePath("/admin/edit/history")

  // ✅ 成功時のみリダイレクト
  redirect("/admin/edit/history")
}
