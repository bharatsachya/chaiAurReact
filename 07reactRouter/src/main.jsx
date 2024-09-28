import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { GithubInfo } from './components/Github/Github'

// const router = createBrowserRouter([{
//   path: '/',
//   element:<Layout/>,
//   children:[{
//       path:'/',
//       element:<Home/>
//   },{
//      path:"about",
//       element:<About/>
//   },{
//     path:"contact",
//     element:<Contact/>
//   }]

// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route loader={GithubInfo}
    path='/github' element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider Router router={router} />
  </StrictMode>,
)
