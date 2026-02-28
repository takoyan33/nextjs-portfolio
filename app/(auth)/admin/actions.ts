"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function authenticate(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const res = await fetch(`${process.env.BACKEND_API_URL}api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  // ✅ エラーならデータを返す（redirectしない）
  if (!res.ok) {
    return { ok: false, error: "メールまたはパスワードが違います" }
  }

  // ✅ Cookie 設定
  ;(await cookies()).set("auth", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1日
    sameSite: "lax",
    secure: true,
  })

  revalidatePath("/admin/dashboard")

  // ✅ 成功時のみリダイレクト
  redirect("/admin/dashboard")
}
