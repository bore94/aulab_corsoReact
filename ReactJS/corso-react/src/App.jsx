import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import List from './components/List.jsx'
import Navbar from './components/Navbar.jsx'

const names = ['Marco', 'Giulia', 'Andrea']

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(null)

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
      <Navbar />
      <Header />
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
    </>
  )
}

export default App
