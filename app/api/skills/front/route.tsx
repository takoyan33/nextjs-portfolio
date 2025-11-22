import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/front_skills`

  if (!url) {
    return NextResponse.json({ error: "Missing API_URL environment variable" }, { status: 500 })
  }

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
