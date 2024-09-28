import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/todos'
import AddTodo from './components/addTodo'
function App() {

  return (
    <>
      <div className='bg-green-500 p-2 rounded-lg'>Hello world</div>
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
