import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,removeTodo,updateTodo } from '../features/todoSlice'
function Todos() {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

  return (
    <div>todos
        <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
              <div className='flex space-x-4'>
              <h1>{todo.text}</h1>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                <button onClick={()=>dispatch(updateTodo({id:todo.id,text:prompt('Enter new text')}))}>Edit</button>
              </div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Todos