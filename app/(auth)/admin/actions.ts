"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function authenticate(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // 入力値の簡易バリデーション
  if (!email || !password) {
    return { ok: false, error: "メールアドレスとパスワードを入力してください。" }
  }

  console.log(`${process.env.BASE_API_URL}/api/v1/auth/login`)

  try {
    const res = await fetch(`${process.env.BASE_API_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    // エラー時はメッセージを返却（アカウント存在有無を特定させない曖昧な文言）
    if (!res.ok) {
      return { ok: false, error: "メールアドレスまたはパスワードが正しくありません。" }
    }

    const resJson = await res.json()
    const { token, user } = resJson

    const cookieStore = await cookies()
    const isProduction = process.env.NODE_ENV === "production"

    // 1. JWTトークンの保存（認証用・httpOnly）
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1日
      sameSite: "lax",
      secure: isProduction,
    })

    // 2. ユーザー情報の保存
    cookieStore.set("user", JSON.stringify(user), {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secure: isProduction,
    })
  } catch (error) {
    // ネットワークエラー等の例外ハンドリング
    console.error("Login Error:", error)
    return { ok: false, error: "通信エラーが発生しました。時間をおいて再度お試しください。" }
  }

  // キャッシュの再検証とリダイレクト（redirectはtry-catchの外で呼ぶ必要があります）
  revalidatePath("/admin/dashboard")
  redirect("/admin/dashboard")
}
