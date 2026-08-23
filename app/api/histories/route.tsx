import { NextResponse } from "next/server"

export async function GET() {
  const url = `${process.env.BASE_API_URL}api/v1/histories`

  if (!url) {
    return NextResponse.json({ error: "Missing API_URL environment variable" }, { status: 500 })
  }

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
