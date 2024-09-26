import { NextResponse } from 'next/server'
import data from '../../../api/portfolio/index.json'

type Data = {
  portfolio: Object
}

export async function GET() {
  return NextResponse.json(data)
}
