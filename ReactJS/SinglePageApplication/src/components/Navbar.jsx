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
    </nav>
  )
}

export default Navbar
