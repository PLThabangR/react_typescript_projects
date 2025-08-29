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
[ProductApi.reducerPath]: ProductApi.reducer
},

//middleware
// Allows ProductApi to handle asynchronous API requests.
middleware: (getDefaultMiddleware) =>
    
     getDefaultMiddleware().concat(ProductApi.middleware),
})//end of store

//setup the listeners for data caching
setupListeners(store.dispatch)