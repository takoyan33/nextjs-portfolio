"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function editPortfolio(
  formData: FormData,
  id: number,
  aboutImg: string,
  appealImg: string,
  functionImg: string,
) {
  const name = formData.get("portfolioName") as string
  const date = formData.get("portfolioDate") as string
  const tag = (formData.get("portfolioTag") as string)?.split(",").map((v) => v.trim())
  const front_url = formData.get("portfolioFront_url") as string
  const back_url = formData.get("portfolioBack_url") as string
  const front_github = formData.get("portfolioFront_github") as string
  const back_github = formData.get("portfolioBack_github") as string
  const color = formData.get("portfolioColor") as string
  const about = (formData.get("portfolioAbout") as string) ?? ""
  const functionText = formData.get("portfolioFunction") as string
  const appeal = formData.get("portfolioAppeal") as string
  const front_skill = (formData.get("portfolioFront_skill") as string)
    ?.split(",")
    .map((v) => v.trim())
  const back_skill = (formData.get("portfolioBack_skill") as string)
    ?.split(",")
    .map((v) => v.trim())
  const infra_skill = (formData.get("portfolioInfra_skill") as string)
    ?.split(",")
    .map((v) => v.trim())
  const time = formData.get("portfolioTime") as string

  const res = await fetch(`${process.env.BACKEND_API_URL}api/v1/portfolios/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      date,
      tag,
      front_url,
      back_url,
      front_github,
      back_github,
      color,
      about,
      aboutImg,
      appeal,
      appealImg,
      function: functionText,
      functionImg,
      front_skill,
      back_skill,
      infra_skill,
      time,
    }),
  })

  // ✅ エラーならデータを返す（redirectしない）
  if (!res.ok) {
    return { ok: false, error: "更新に失敗しました。" }
  }
  revalidatePath("/admin/edit/portfolio")

  // ✅ 成功時のみリダイレクト
  redirect("/admin/edit/portfolio")
}
