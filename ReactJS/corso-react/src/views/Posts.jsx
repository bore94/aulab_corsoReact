import { Link, useLoaderData } from 'react-router'

export default function Posts() {
  const posts = useLoaderData()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Posts page</h1>
      <h2 className="text-xl mb-4">List:</h2>
      <ul className="list bg-base-100 rounded-box shadow-sm">
        {posts.map((post) => {
          return (
            <li key={post.id} className="list-row items-center">
              <div className="flex-1">{post.title}</div>
              <Link to={`/posts/${post.id}`} className="btn btn-sm btn-primary">
                Detail
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
