//configure store
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductApi } from './service/data'
import productReducer from './features/productlogic'

export const store = configureStore({
    reducer: {
        [ProductApi.reducerPath]: ProductApi.reducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware),
})

//setup the listeners for data caching
setupListeners(store.dispatch)

//export the store with typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch