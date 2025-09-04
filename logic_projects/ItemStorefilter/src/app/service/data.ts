import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";


// inteface for products

export const ProductApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        //Get all the products from the api
        getAllProducts: builder.query({
            //we gonna be sending request to this specific url /products
            //query parameter limit our respond 
            query: () => '/products?limit=30',
            
            
        }),//end of get produdcts endpoint
        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }),//end of by ID

        searchQuery: builder.query({
            query: (searchQuery) => `/products/search?q=${searchQuery}`
        }),//end of search
        selectedCategory: builder.query({
            query: (selectedCategory) => `/products/category/${selectedCategory}`
        }),//end of category
        minPrice: builder.query({
            query: (minPrice) => `/products?minPrice=${minPrice}`
        }),//end of min price
        maxPrice: builder.query({
            query: (maxPrice) => `/products?maxPrice=${maxPrice}`
        }), //end of max price
        keywords: builder.query({
            query: (keywords) => `/products?keywords=${keywords}`
        }),






    }) //end of endpoints builder
}); //end of create api

//export functions 
export const {useGetAllProductsQuery,useGetProductByIdQuery,useSearchQuery,useSelectedCategoryQuery,useMinPriceQuery,useMaxPriceQuery,useKeywordsQuery} = ProductApi