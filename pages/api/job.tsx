import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../api/job/index.json'

type Data = {
  job: Object
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ job: data })
}
