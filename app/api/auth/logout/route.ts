import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { PATH } from "@/utils/path"

export async function GET(request: Request) {
  const cookieStore = await cookies()

  // Cookie を削除
  cookieStore.delete("auth_token")
  cookieStore.delete("user")

  // ログイン画面へリダイレクト
  const loginUrl = new URL(PATH.ADMIN, request.url)
  return NextResponse.redirect(loginUrl)
}
