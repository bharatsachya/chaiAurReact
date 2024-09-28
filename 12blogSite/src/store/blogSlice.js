import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     status: false,
     blogs: []
}

export const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{
        addBlog: (state,action)=>{
            state.status = true;
            state.blogs.push(action.payload)
        },
        removeBlog: (state,action)=>{
              state.status[action.payload.id] = false;
        },
    }
})

export const {addBlog,removeBlog} = blogSlice.actions
export default blogSlice.reducer;