import { Link, useLoaderData } from 'react-router'

export default function Posts() {
  const posts = useLoaderData()

  return (
    <div className="posts-page">
      <h1>Posts page</h1>
      <h2>List:</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {post.title} <Link to={`/posts/${post.id}`}>Detail</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
