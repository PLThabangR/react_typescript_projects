import {configureStore} from '@reduxjs/toolkit'
//listener is helpful for caching the data
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductApi } from './service/dummyData'


// initialize the store
export const store = configureStore({

//folder to hold our reducers
reducer:{
    /*in the rtk query we use this syntax while defining our reducers
    and the react redux toolkit we use this
    productApi: ProductApi.reducer
    */
   // Add the generated reducer as a specific top-level slice
[ProductApi.reducerPath]: ProductApi.reducer
},

//middleware
// Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`
middleware: (getDefaultMiddleware) =>
    
     getDefaultMiddleware().concat(ProductApi.middleware),
})//end of store

//setup the listeners for data caching
setupListeners(store.dispatch)

//export the store with typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch