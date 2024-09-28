import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProider from './context/userContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
function App() {
  return (
    <UserContextProider>
       <Login/>
       <Profile/>
    </UserContextProider>
  )
}

export default App
