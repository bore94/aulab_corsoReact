import { createBrowserRouter } from 'react-router'
import Layout from '../components/Layout.jsx'
import Homepage from '../views/Homepage.jsx'
import Posts from '../views/Posts.jsx'
import DetailView from '../views/DetailView.jsx'
import Login from '../views/Login.jsx'
import Register from '../views/Register.jsx'
import { getAllPostsLoader, getSinglePostLoader } from './loaders.js'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Homepage,
      },
      {
        path: '/posts',
        Component: Posts,
        loader: getAllPostsLoader,
      },
      {
        path: '/posts/:id',
        Component: DetailView,
        loader: getSinglePostLoader,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
])

export default router
