import { NextResponse } from "next/server";
import data from "../../../api/license/index.json";

type Data = {
	license: Object;
};

export async function GET() {
	return NextResponse.json(data);
}
