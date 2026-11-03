import { useState } from 'react'

function Form() {
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
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="form-name" className="label"> Name </label>
        <input type="text" value={name} onChange={handleName} className="field" id="form-name" />
        <label htmlFor="form-email" className="label"> Email </label>
        <input type="email" value={email} onChange={handleEmail} className="field" id="form-email" />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <article className="card">
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </article>
      )}
    </>
  )
}

export default Form
