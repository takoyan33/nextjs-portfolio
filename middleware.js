import { get } from "@vercel/edge-config"
import { NextResponse } from "next/server"

export async function middleware(request) {
	const isInMaintenanceMode = await get("isMaintenance")

	// メンテナンスモード中なら /maintenance にリライト
	if (isInMaintenanceMode) {
		const url = request.nextUrl.clone()
		url.pathname = "/maintenance"
		return NextResponse.rewrite(url)
	}

	// 通常どおりリクエストを続ける
	return NextResponse.next()
}
