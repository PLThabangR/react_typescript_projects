
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// create an instance of query and pass an object to it
export const dummyApi = createApi({
    reducerPath: 'product',//name of method
    //url where we fetch our data
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        })  
    })
});