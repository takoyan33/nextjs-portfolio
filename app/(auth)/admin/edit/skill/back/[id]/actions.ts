"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function ediSkill(formData: FormData, id: number, icon: string) {
  const name = formData.get("skillName") as string
  const rank = formData.get("skillRank") as string
  const about = formData.get("skillAbout") as string

  console.log("name", name)

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/back_skills/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      rank,
      about,
      icon,
    }),
  })

  // ✅ エラーならデータを返す（redirectしない）
  if (!res.ok) {
    return { ok: false, error: "更新に失敗しました。" }
  }
  revalidatePath("/admin/edit/skill")

  // ✅ 成功時のみリダイレクト
  redirect("/admin/edit/skill")
}
