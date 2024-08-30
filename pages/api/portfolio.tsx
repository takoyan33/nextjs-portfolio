import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../api/portfolio/index.json'

type Data = {
  portfolio: Object
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ portfolio: data })
}
