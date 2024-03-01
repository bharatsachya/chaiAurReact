import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState('olive')
  const changeColor = (color) => {
    setColor(this.color=color)
  }

  return (
    <>
    <div className='w-screen h-screen duration-200' style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"red"}} onClick={()=>setColor("red")}>
          Red
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"green"}} onClick={()=>setColor("green")}>
          Green
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"blue"} } onClick={()=>setColor("blue")}>
        blue
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"yellow"}} onClick={()=>setColor("yellow")}>
          yellow
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"grey"}} onClick={()=>setColor("grey")}>
          grey
        </button>
       </div>
      </div>
    </div>
    </>
  )
}

export default App
