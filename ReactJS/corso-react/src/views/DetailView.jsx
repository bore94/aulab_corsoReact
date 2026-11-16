import { Link, useLoaderData } from 'react-router'

export default function DetailView() {
  const [post, comments] = useLoaderData()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Detail View</h1>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold">Comments:</h3>
      <ul className="list bg-base-100 rounded-box shadow-sm">
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="list-row">
              <div>
                <div>{comment.body}</div>
                <div className="text-xs opacity-60">{comment.email}</div>
              </div>
            </li>
          )
        })}
      </ul>

      <Link to="/posts" className="btn btn-outline w-fit">
        Back to Posts
      </Link>
    </div>
  )
}
