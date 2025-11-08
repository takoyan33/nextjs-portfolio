import { get } from "@vercel/edge-config"
import { NextResponse } from "next/server"

export async function middleware(request) {
  const isInMaintenanceMode = await get("isMaintenance")

  // ✅ middleware では request.cookies で読む
  const isAuth = request.cookies.get("auth")?.value === "true"

  const url = request.nextUrl.clone()

  // ✅ メンテナンスモード
  if (isInMaintenanceMode) {
    url.pathname = "/maintenance"
    return NextResponse.rewrite(url)
  }

  // ✅ 管理画面へのアクセス制御
  const pathname = url.pathname

  if (!isAuth && (pathname.startsWith("/admin/dashboard") || pathname.startsWith("/admin/edit"))) {
    url.pathname = "/admin"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
