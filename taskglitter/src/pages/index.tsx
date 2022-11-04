import type { GetServerSideProps } from 'next'
import type { Prisma } from '@prisma/client'
import Head from 'next/head'
import prisma from '@/lib/prisma'

type Props = {
  projects: Prisma.ProjectsSelect[]
}

export default function Home({ projects }: Props) {
  console.log(`projects: ${JSON.stringify(projects)}`)

  return (
    <>
      <title>Projects | Task Glitter</title>
      <meta
        name='description'
        content='Adding a little sparkle to your everyday to dos.'
      />
      <link rel='icon' href='/favicon.ico' />
      <div>Hello, world</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.projects.findMany()
  return {
    props: { projects },
  }
}
