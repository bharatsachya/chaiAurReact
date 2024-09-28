 import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddTodo