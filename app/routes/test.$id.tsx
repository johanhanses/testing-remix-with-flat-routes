import { useLoaderData } from '@remix-run/react'

export function loader({ params }) {
  return params.id
}

export default function Post() {
  const data = useLoaderData()
  return <div>{data}</div>
}
