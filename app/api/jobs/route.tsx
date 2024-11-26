import { NextResponse } from "next/server"
import data from "../../../api/jobs/index.json"

// type Data = {
// 	job: Object
// }

export async function GET() {
	return NextResponse.json(data)
}
