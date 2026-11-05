import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'

function Navbar() {
  const { user } = useContext(UserContext)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      {user && (
        <Link to="/posts" className="navbar-link">
          Posts
        </Link>
      )}
      <Link to="/login" className="navbar-link">
        Login
      </Link>
      <Link to="/register" className="navbar-link">
        Register
      </Link>
    </nav>
  )
}

export default Navbar
