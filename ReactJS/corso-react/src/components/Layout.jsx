import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  )
}
