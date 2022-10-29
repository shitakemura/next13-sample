export default function Page({ params }: { params: { id: number } }) {
  return <p className="text-3xl">Movie {params.id}</p>
}
