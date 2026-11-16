import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <Header />
      <main className="max-w-3xl mx-auto px-4 pb-10">
        <Outlet />
      </main>
    </div>
  )
}
