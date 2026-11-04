import { BrowserRouter, Routes, Route } from 'react-router'
import Homepage from './views/Homepage.jsx'
import Posts from './views/Posts.jsx'
import Layout from './components/Layout.jsx'
import DetailView from './views/DetailView.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<DetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
