import { configureStore } from '@reduxjs/toolkit';
import {setupLister} from '@reduxjs/toolkit/query'




const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
       
    },

    // Adding the api middleware enables caching, invalidation, polling,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
});