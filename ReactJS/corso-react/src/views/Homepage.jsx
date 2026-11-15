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
    <>
      <h1>Titles</h1>
      <div className="button-row">
        <button
          className="loading-data-button"
          onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}
        >
          Posts
        </button>
        <button
          className="loading-data-button"
          onClick={() => setUrl('https://jsonplaceholder.typicode.com/users')}
        >
          Users
        </button>
      </div>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>{post.title || post.name}</li>
          ))}
      </ul>
      <label className="label" htmlFor="name"> Name </label>
      <input type="text" className="field" id="name" />
      <List>
        {names.map((name, index) => {
          return <List.Items key={index}>{name}</List.Items>
        })}
      </List>
      <Counter />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="form-name" className="label"> Name </label>
        <Form.Input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={handleName}
          id="form-name"
        />
        <label htmlFor="form-email" className="label"> Email </label>
        <Form.Input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmail}
          id="form-email"
        />
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
      {submitted && (
        <Form.Result>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </Form.Result>
      )}
      <LoadingData />
    </>
  )
}
