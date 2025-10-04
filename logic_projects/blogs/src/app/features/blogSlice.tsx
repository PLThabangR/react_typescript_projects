import { createSlice } from "@reduxjs/toolkit";

//Blog interface
interface Blog{
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
  }
//State  interface
interface BlogState {
  blogs: Blog[];
}
//Initial state
const initialState: BlogState = {
  blogs: [],
}; 
//Creating u\our slice
export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    updateBlog: (state, action) => {
        const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
        state.blogs[index] = action.payload;
      },

}
  }
)

export const { addBlog, deleteBlog, updateBlog } = blogSlice.actions                 
