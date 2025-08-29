
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { Product } from '../../types/Product';

//product inteface


// create an instance of query and pass an object to it
export const ProductApi = createApi({
    reducerPath: 'products',//name of method
    //url where we fetch our data first parameter is the base url
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    //Here we define our endpoint
    endpoints: (builder) => ({
        //Get all the products from the api
        //we use the builder.query method because we not changing the data
        //if we want to change the data we use builder.mutation  
        getAllProducts: builder.query({
            //we gonna be sending request to this specific url /products
            //query parameter limit our respond 
            query: () => '/products',
            transformResponse: (response: { products: Product[] }) => response.products,
        }),  // end of get produdcts endpoint

    })//end of endpoints builder

});//end of createApi
//we export getAllProducts method from the dummpyApi
// and use it in our component as a hook 

/*
plai javasxript export
export const {useGetAllProductsQuery} = ProductApi
*/
//export with typescript generated hook
export const {useGetAllProductsQuery} = ProductApi