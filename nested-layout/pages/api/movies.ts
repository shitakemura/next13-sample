import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movie } from '../../types/movie'
import movies from '../../data/movies.json'

type Data = Movie[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(movies)
}
