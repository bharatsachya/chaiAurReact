import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards  from './cards'

function App() {
  const [counter, setCount] = useState(1)
  const addValue = () => {
    // setCount(count + 1)
    //solve the problem of async
    //setCounter send value sends the code in batches
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)  
    setCount(prevCount => prevCount + 1)  
    setCount(prevCount => prevCount + 1)  
  }

  let myobj = {
    name: 'hek',
    age: 12
  }
  return (
    <div >
      <h1 className='bg-green-400 text-black p-4  rounded-xl mb-4'>Hello world</h1>
      <Cards  mobj={myobj}/>
       <h1>Hello World</h1>
       <button className='bg-green-400 text-black p-4  rounded-xl mb-4' onClick={addValue}>Add value {counter}</button>
        </div>
  )
}

export default App
