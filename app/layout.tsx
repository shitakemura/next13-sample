import Link from 'next/link'
import 'tailwindcss/tailwind.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-gray-900 text-gray-100 antialiased">
      <head>
        <title>Nested layouts by example</title>
      </head>

      <body>
        <header className="border-b p-4">
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
          </nav>
        </header>
        <div className="p-4">{children}</div>
      </body>
    </html>
  )
}
