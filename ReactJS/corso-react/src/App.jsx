import { RouterProvider } from 'react-router'
import { UserContextProvider } from './context/UserContext.jsx'
import router from './routing/router.js'

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
