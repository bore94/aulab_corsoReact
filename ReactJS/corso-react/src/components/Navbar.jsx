import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'
import useScroll from '../hooks/useScroll.js'

function Navbar() {
  const { user } = useContext(UserContext)
  const [scrolled, scrollY] = useScroll()

  return (
    <div
      ref={scrolled}
      className={`navbar shadow-sm sticky top-0 z-50 ${
        scrollY > 0 ? 'dark_navbar' : 'light_navbar'
      }`}
    >
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
