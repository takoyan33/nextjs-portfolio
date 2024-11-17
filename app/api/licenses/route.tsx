import { NextResponse } from "next/server"
import data from "../../../api/licenses/index.json"

type Data = {
	license: Object
}

export async function GET() {
	return NextResponse.json(data)
}
