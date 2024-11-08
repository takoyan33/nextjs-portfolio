import { NextResponse } from "next/server";
import data from "../../../api/history/index.json";

type Data = {
	history: Object;
};

export async function GET() {
	return NextResponse.json(data);
}
