import { use } from 'react'
import { Movie } from '../../../types/movie'

async function getMovie(id: number) {
  const res = await fetch(`http://localhost:3000/api/movies/${id}`)

  return res.json()
}

type PageProps = {
  params?: any
  children?: React.ReactNode
}

export default function Page({ params }: PageProps) {
  const movie = use(getMovie(params.id))

  return (
    <div>
      <p className="text-3xl">{movie.title}</p>
      <p className="mt-2">{movie.year}</p>
      <p className="mt-2">{movie.description}</p>
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/movies')
  const movies = await res.json()

  return movies.map((movie: Movie) => ({ id: movie.id }))
}
