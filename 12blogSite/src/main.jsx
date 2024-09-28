import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children:[{
      path:'/',
      element:<Home/>
    },{

    },{

    }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider Router router={router} />
    </Provider>
  </StrictMode>,
)
