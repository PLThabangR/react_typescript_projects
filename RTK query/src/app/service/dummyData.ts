
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
            query: () => '/products?limit=10',
            //transform the response modifying our response to only return array
            transformResponse: (response: { products: Product[] }) => response.products,
        }),  // end of get produdcts endpoint


         getProductById: builder.query({
        query: (id: number) => `/products/${id}`,
            //we ar modifying our response to oly return arrys
          //we do need transform to transform the response cuz no array is returned
    }),//end of get product by id

    addNewProduct: builder.mutation({ //mutation coz we change data
        query: (product: Product) => ({ //passing the product of type product
            url: '/products/add',// the urlwe post to
            method: 'POST', //method type
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: product,//passing the product we want to add
        }),
    }),//end of add new product
 updateProduct: builder.mutation({
    query: ({id ,product}) => ({ //passing the product of type product
        url: `/products/${id}`,// the method  put
        method: 'PUT', //method type
         headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: product,//passing the product we want to add
    }),//end of query
 }),//end of update product
  deleteProduct: builder.mutation({
    query: (id) => ({ //passing the product of type product
        url: `/products/${id}`,// the method  put
        method: 'DELETE', //method type
    }),
  })//end of delete function
 


    


}),//end of endpoints builder

   

});//end of createApi
//we export getAllProducts method from the dummpyApi
// and use it in our component as a hook 

/*
plai javasxript export
export const {useGetAllProductsQuery} = ProductApi
*/
//export with typescript generated hook
export const {useGetAllProductsQuery,useGetProductByIdQuery,useAddNewProductMutation,useDeleteProductMutation,useUpdateProductMutation} = ProductApi