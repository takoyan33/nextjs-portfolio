import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../api/license/index.json'

type Data = {
  license: Object
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ license: data })
}
