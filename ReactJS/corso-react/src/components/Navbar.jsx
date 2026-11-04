import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/posts" className="navbar-link">
        Posts
      </Link>
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
