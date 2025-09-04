//configure store
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductApi } from './service/dummyData'


export const store = configureStore({
    reducer: {
        [ProductApi.reducerPath]: ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware),
})

//setup the listeners for data caching
setupListeners(store.dispatch)