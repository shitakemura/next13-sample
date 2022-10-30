'use client'

import Link from 'next/link'
import React from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let segment = useSelectedLayoutSegments()
  const active = href === `/${segment}`

  console.log({ href, active })

  return (
    <Link className={active ? 'underline' : ''} href={href}>
      {children}
    </Link>
  )
}
