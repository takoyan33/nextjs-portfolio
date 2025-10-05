import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  // URLオブジェクトを作る
  const requestUrl = new URL(req.url)

  // パスから id を取得
  const segments = requestUrl.pathname.split("/")
  const id = segments[segments.length - 1] // 最後の要素が [id]

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 })
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios/${id}/`

  try {
    const response = await fetch(apiUrl)

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch data" })
  }
}
