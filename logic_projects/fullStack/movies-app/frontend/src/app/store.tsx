import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react'
import authRducer  from './features/auth/auth';
import { apiSlice } from './api/apiSlice';






const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
       auth: authRducer
    },

    // Adding the api middleware enables caching, invalidation, polling,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
});

//setup the listeners for data caching
setupListeners(store.dispatch)

export default store

//Add type to store for typescript to understand the type of store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch