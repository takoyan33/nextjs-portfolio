import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  // URLオブジェクトを作る
  const requestUrl = new URL(req.url)
  const searchParams = requestUrl.searchParams
  console.log("searchParams:", searchParams.toString())

  // パスから id を取得
  const segments = requestUrl.pathname.split("/")
  const id = segments[segments.length - 1] // 最後の要素が [id]

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 })
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios/${id}/`

  try {
    const response = await fetch(apiUrl)
    if (!response.ok) throw new Error(`API error ${response.status}`)
    const data = await response.json()
    console.log("Fetched data:", data)
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
