import { createSlice } from "@reduxjs/toolkit";
import type { Blog } from "../../types/blogs";


//State  interface
interface BlogState {
  blogs: Blog[] ;
}
//Initial state
const initialState: BlogState = {
  blogs: [],
}; 
//Creating u\our slice
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    updateBlog: (state, action) => {
      //Get item index
        const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
        //Update by index
        state.blogs[index] = action.payload;
      },

}
  }
)

export const { addBlog, deleteBlog, updateBlog } = blogSlice.actions                 
