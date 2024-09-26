import { NextResponse } from 'next/server'
import data from '../../../api/job/index.json'

type Data = {
  job: Object
}

export async function GET() {
  return NextResponse.json(data)
}
