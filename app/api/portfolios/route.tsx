import { NextResponse } from "next/server"

import type { ResponsePortfolio } from "types"

export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      return NextResponse.json(
        { error: `API request failed with status ${response.status}` },
        { status: response.status },
      )
    }

    const data: ResponsePortfolio = await response.json()

    if (!data) {
      return NextResponse.json({ error: "No data found" }, { status: 404 })
    }


    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
