import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

export default function DetailView() {
  const {id} = useParams()
  const [post, setPost] = useState(null)

  const getData = async () => {
    const promise = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    const json = await promise.json()
    setPost(json)
    console.log(json)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1>Detail page</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
          <p>Post ID: {post.id}</p>
          <Link to="/posts">Back to Posts</Link>
        </div>
      )}
    </>
  )
}
