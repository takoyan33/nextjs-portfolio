import { NextResponse } from "next/server"
import data from "../../../api/histories/index.json"

export async function GET() {
	return NextResponse.json(data)
}
