import { use } from 'react'
import { Movie } from '../../types/movie'

async function getMovies() {
  const res = await fetch('http://localhost:3000/api/movies')

  return res.json()
}

export default function Page() {
  const movies = use(getMovies())

  return (
    <ul>
      {movies.map((movie: Movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  )
}
