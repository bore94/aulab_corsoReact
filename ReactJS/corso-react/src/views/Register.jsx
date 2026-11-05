import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'

export default function Register() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const { register } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.id === 'register-name') {
      setUserName(e.target.value)
    }
    if (e.target.id === 'register-email') {
      setUserEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName && userEmail) {
      register({ name: userName, email: userEmail })
      navigate('/')
    }
  }

  return (
    <div className="auth-page">
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-name" className="label">
            Name
          </label>
          <input type="text" name="name" id="register-name" className="field"
            placeholder="Name" value={userName} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="register-email" className="label">
            Email
          </label>
          <input
            type="email" id="register-email" className="field" name="email" 
            placeholder="Email" value={userEmail} onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
