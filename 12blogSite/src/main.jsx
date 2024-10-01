import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/login.jsx'
import Signup from './pages/signup.jsx'
import {AuthLayout} from './components'
import AllPosts from './pages/post/AllPosts.jsx'
import PostForm from './pages/post/PostForm.jsx'
import Post from './pages/post/post.jsx'
import EditPost from './pages/post/EditPost.jsx'
const router = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children:[{
      path: "/",
      element: <Home />,
  },
  {
      path: "/login",
      element: (
          <AuthLayout authentication={false}>
              <Login />
          </AuthLayout>
      ),
  },
  {
      path: "/signup",
      element: (
          <AuthLayout authentication={false}>
              <Signup />
          </AuthLayout>
      ),
  },
  {
      path: "/all-posts",
      element: (
          <AuthLayout authentication>
              {" "}
              <AllPosts />
          </AuthLayout>
      ),
  },
  {
      path: "/add-post",
      element: (
          <AuthLayout authentication>
              {" "}
              <PostForm/>
          </AuthLayout>
      ),
  },
  {
      path: "/edit-post/:slug",
      element: (
          <AuthLayout authentication>
              {" "}
              <EditPost />
          </AuthLayout>
      ),
  },
  {
      path: "/post/:slug",
      element: <Post />,
  },]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider Router router={router} />
    </Provider>
  </StrictMode>,
)
