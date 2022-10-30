import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movie } from '../../../types/movie'
import movies from '../../../data/movies.json'

type Data = Movie

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: { message: string } }>
) {
  const { id } = req.query
  console.log(id)
  const movie = movies.find((movie) => movie.id === id)

  if (movie) {
    res.status(200).json(movie)
  } else {
    res.status(404).json({ error: { message: 'movie not found' } })
  }
}
