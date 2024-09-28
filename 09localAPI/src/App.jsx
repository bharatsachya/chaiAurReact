import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoForm from './components/ToDoForm'
import TodoItem from './components/TodoItem'
import { ToDoProvider} from './context/TodoContext'

import {useEffect} from 'react'

function App() {
  const [todos,setToDos] = useState([])
  const addToDo = (Todo)=>{
     setToDos((prev)=>[...prev,{id:Date.now(),...Todo}])
  }

  const updateTodo = (todo,id) =>{
    setToDos((prev)=>prev.map((item)=>item.id === id ? todo:item))
  }

  const deleteToDo =(id) =>{
    setToDos((prev)=> prev.filter((todo)=>todo.id !==id))
  }

  const toggleComplete = (id) =>{
    setToDos((prev)=>prev.map((todo)=> todo.id===id ? {...todo,completed:!todo.completed}:todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
       setToDos(todos)
    }
  }, [todos])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <ToDoProvider value= {{todos,addToDo,deleteToDo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoItemToDoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3"> 
                      {todos.map((todo)=>{
                         <div key={todo.id} className='w-full'>
                               <TodoItem todo={todo}/>
                         </div>
                      })}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App

