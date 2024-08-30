import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../api/skill/front.json'

type Data = {
  skill: Object
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ skill: data })
}
