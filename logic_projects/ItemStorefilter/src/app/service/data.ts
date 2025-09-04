import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// inteface for product


export const ProductApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        //Get all the products from the api
        getAllProducts: builder.query({
            //we gonna be sending request to this specific url /products
            //query parameter limit our respond 
            query: () => '/products?limit=10',
            
            
        }),//end of get produdcts endpoint
        searchQuery: builder.query({
            query: (searchQuery) => `/products/search?q=${searchQuery}`
        }),
        selectedCategory: builder.query({
            query: (selectedCategory) => `/products/category/${selectedCategory}`
        }),
        minPrice: builder.query({
            query: (minPrice) => `/products?minPrice=${minPrice}`
        }),
        maxPrice: builder.query({
            query: (maxPrice) => `/products?maxPrice=${maxPrice}`
        }),
        keywords: builder.query({
            query: (keywords) => `/products?keywords=${keywords}`
        }),






    }) //end of endpoints
})  //end of create api


export const {
    useGetAllProductsQuery,useKeywordsQuery,useSelectedCategoryQuery,useMinPriceQuery,useMaxPriceQuery
} = ProductApi