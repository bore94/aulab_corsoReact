import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'

function Navbar() {
  const { user } = useContext(UserContext)

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Corso React
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          )}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
