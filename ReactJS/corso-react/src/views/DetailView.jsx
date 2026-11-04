import { Link, useLoaderData } from 'react-router'

export default function DetailView() {
  const [post, comments] = useLoaderData()

  return (
    <>
      <h1>Detail View</h1>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <h4>Comments:</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.body} - {comment.email}
            </li>
          )
        })}
      </ul>
      <Link to="/posts">Back to Posts</Link>
    </>
  )
}
