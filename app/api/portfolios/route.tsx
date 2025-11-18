import { NextResponse } from "next/server"
import { messages } from "../../../app/types/social"

import type { ResponsePortfolio } from "types"

export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`

  if (!url) {
    return NextResponse.json({ error: "Missing API_URL environment variable" }, { status: 500 })
  }

  const response = await fetch(url)

  const data: ResponsePortfolio = await response.json()

  if (!data) {
    return NextResponse.json({ error: "No data found" }, { status: 404 })
  }

  if (data.status !== "SUCCESS") {
    console.log(messages[data.status] || "Unknown error occurred")
  }
  return NextResponse.json(data)
}
