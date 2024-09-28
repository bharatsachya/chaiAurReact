import {createContext,useContext} from 'react';

export const ToDoContext = createContext({
    toDos:[{
        id:1,
        toDo:"Learn React",
        completed:false,
    }],
    addToDo: (toDo)=>{},
    updateTodo:(todo,id)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}
})

export default function UseToDo(){
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider