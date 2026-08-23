import { get } from "@vercel/edge-config"
import { NextResponse } from "next/server"

export async function proxy(request) {
  // メンテナンスモードの取得
  const isInMaintenanceMode = await get("isMaintenance")

  const nextpathname = request.nextUrl.pathname

  if (nextpathname.startsWith("/__unlighthouse") || nextpathname.startsWith("/.unlighthouse")) {
    return NextResponse.next()
  }

  // ✅ Cookieから JWT トークン (auth_token) の存在を確認
  const token = request.cookies.get("auth_token")?.value
  const isAuth = Boolean(token)

  const url = request.nextUrl.clone()

  // ✅ メンテナンスモード時の判定
  if (isInMaintenanceMode) {
    url.pathname = "/maintenance"
    return NextResponse.rewrite(url)
  }

  const pathname = url.pathname

  // ✅ 未ログイン時の保護ページ制御 (/admin/dashboard や /admin/edit へアクセスされたら /admin へリダイレクト)
  if (!isAuth && (pathname.startsWith("/admin/dashboard") || pathname.startsWith("/admin/edit"))) {
    url.pathname = "/admin"
    return NextResponse.redirect(url)
  }

  // ✅ ログイン済み状態で /admin (ログイン画面) にアクセスされたら /admin/dashboard へリダイレクト
  if (isAuth && pathname === "/admin") {
    url.pathname = "/admin/dashboard"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
