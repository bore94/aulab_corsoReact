import { useState } from 'react'
import Counter from '../components/Counter.jsx'
import Form from '../components/Form.jsx'
import List from '../components/List.jsx'
import LoadingData from '../components/LoadingData.jsx'
import useFetch from '../hooks/useFetch.js'

const names = ['Marco', 'Giulia', 'Andrea']

export default function Homepage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(null)
  const [url, setUrl] = useState()
  const data = useFetch(url, url)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted({ name, email })
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Titles</h1>

      <div className="flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}
        >
          Posts
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setUrl('https://jsonplaceholder.typicode.com/users')}
        >
          Users
        </button>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-sm w-full">
        {data &&
          data.map((post) => (
            <li key={post.id} className="list-row">
              <div>{post.title || post.name}</div>
            </li>
          ))}
      </ul>

      <fieldset className="fieldset w-full max-w-xs">
        <legend className="fieldset-legend">Name</legend>
        <input type="text" className="input input-bordered w-full" id="name" />
      </fieldset>

      <List>
        {names.map((name, index) => {
          return <List.Items key={index}>{name}</List.Items>
        })}
      </List>

      <Counter />

      <Form onSubmit={handleSubmit}>
        <fieldset className="fieldset w-full max-w-xs">
          <legend className="fieldset-legend">Name</legend>
          <Form.Input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={handleName}
            id="form-name"
          />
        </fieldset>
        <fieldset className="fieldset w-full max-w-xs">
          <legend className="fieldset-legend">Email</legend>
          <Form.Input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmail}
            id="form-email"
          />
        </fieldset>
        <Form.Button type="submit">Submit</Form.Button>
      </Form>

      {submitted && (
        <Form.Result>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </Form.Result>
      )}

      <LoadingData />
    </div>
  )
}
