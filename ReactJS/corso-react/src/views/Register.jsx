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
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm">
        <div className="card-body">
          <h1 className="card-title justify-center">Registration page</h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                name="name"
                id="register-name"
                className="input input-bordered w-full"
                placeholder="Name"
                value={userName}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                id="register-email"
                className="input input-bordered w-full"
                name="email"
                placeholder="Email"
                value={userEmail}
                onChange={handleChange}
              />
            </fieldset>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
