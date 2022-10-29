import type { NextApiRequest, NextApiResponse } from 'next'

type Movie = {
  id: string
  title: string
  year: number
  description: string
}

type Data = {
  movies: Movie[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    movies: [
      {
        id: '1',
        title: 'Load of the Rings',
        year: 2001,
        description: 'This is a good movie',
      },
      { id: '2', title: 'Star Wars', year: 1977, description: 'This is a great movie' },
    ],
  })
}
