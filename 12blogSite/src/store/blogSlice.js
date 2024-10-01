import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     id: 1,
     blogs: []
}

export const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{
        addBlog: (state,action)=>{
            state.blogs.push(action.payload)
        },
        removeBlog: (state,action)=>{
            state.blogs = state.blogs.filter(blog=>blog.id !== action.payload)  
        },
    }
})

export const {addBlog,removeBlog} = blogSlice.actions