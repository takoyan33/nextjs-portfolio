import { NextResponse } from 'next/server'
import data from '../../../../api/skill/other.json'

type Data = {
  skill: Object
}

export async function GET() {
  return NextResponse.json(data)
}
