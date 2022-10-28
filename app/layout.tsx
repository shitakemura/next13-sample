import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Nested layouts by example</title>
      </head>

      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
