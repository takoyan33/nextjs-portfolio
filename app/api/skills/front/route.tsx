import { NextResponse } from "next/server"
import data from "../../../../api/skills/front.json"

// type Data = {
// 	skill: Object
// }

export async function GET() {
	return NextResponse.json(data)
}
