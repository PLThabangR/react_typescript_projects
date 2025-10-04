//Configure store


import { configureStore } from '@reduxjs/toolkit'
import { blogSlice } from './features/blogSlice'

//Configure store
export const store = configureStore({
  reducer: {
  blog: blogSlice.reducer,  
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch