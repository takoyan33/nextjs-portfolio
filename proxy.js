import { get } from "@vercel/edge-config"
import { NextResponse } from "next/server"

// Edge Config 未設定・取得失敗時でもリクエスト全体を落とさないための取得関数
async function getMaintenanceMode() {
  if (!process.env.EDGE_CONFIG) return false

  try {
    return Boolean(await get("isMaintenance"))
  } catch (error) {
    console.error("Failed to read Edge Config (isMaintenance):", error)
    return false
  }
}

export async function proxy(request) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // unlighthouse 関連は最優先で素通し (Edge Config も呼ばない)
  if (pathname.startsWith("/__unlighthouse") || pathname.startsWith("/.unlighthouse")) {
    return NextResponse.next()
  }

  // ✅ メンテナンスモード時の判定
  const isInMaintenanceMode = await getMaintenanceMode()
  if (isInMaintenanceMode) {
    url.pathname = "/maintenance"
    return NextResponse.rewrite(url)
  }

  // ✅ Cookie に JWT トークン (auth_token) があるか確認
  const token = request.cookies.get("auth_token")?.value
  const isAuth = Boolean(token)

  // ✅ 未ログイン時: 保護ページ (/admin/dashboard, /admin/edit) は /admin へリダイレクト
  if (!isAuth && (pathname.startsWith("/admin/dashboard") || pathname.startsWith("/admin/edit"))) {
    url.pathname = "/admin"
    return NextResponse.redirect(url)
  }

  // ✅ ログイン済みで /admin (ログイン画面) に来たら /admin/dashboard へリダイレクト
  if (isAuth && pathname === "/admin") {
    url.pathname = "/admin/dashboard"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
