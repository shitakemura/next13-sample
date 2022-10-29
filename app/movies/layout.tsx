import Link from 'next/link'
import React, { use } from 'react'
import { Movie } from '../../types/movie'

async function getMovies() {
  const res = await fetch('http://localhost:3000/api/movies')

  return res.json()
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const movies = use(getMovies())

  return (
    <div className="flex">
      <ul className="pr-10 text-sm">
        {movies.map((movie: Movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <div>{children}</div>
    </div>
  )
}
