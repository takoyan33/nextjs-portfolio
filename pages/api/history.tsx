import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../api/history/index.json'

type Data = {
  history: Object
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ history: data })
}
