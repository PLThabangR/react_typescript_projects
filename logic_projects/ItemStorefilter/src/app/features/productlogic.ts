import {createSlice } from '@reduxjs/toolkit'

interface filterProductType {
    searchQuery: string,
    selectedCategory: string,
    minPrice: number |undefined,
    maxPrice: number |undefined,
    keywords: string |undefined,
    sortBy: string
    currentPage: number
}
//initial state
const initialState: filterProductType = {
    searchQuery: '',
    selectedCategory: '',
    minPrice: undefined,
    maxPrice: undefined,
    keywords: undefined,
    sortBy: '',
    currentPage: 1
}
  
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        //setting the state with our reducers
        setSearchQuery(state,action){state.searchQuery=action.payload},
        setSelectedCategory(state,action){state.selectedCategory=action.payload},
        setMinPrice(state,action){state.minPrice=action.payload},
        setMaxPrice(state,action){state.maxPrice=action.payload},
        setKeywords(state,action){state.keywords=action.payload},
        setSortBy(state,action){state.sortBy=action.payload},
        setCurrentPage(state,action){state.currentPage=action.payload},

    }
})

//exporting the actions to be used in other components
export const {setSearchQuery,setSelectedCategory,setMinPrice,setMaxPrice,setKeywords,setSortBy,setCurrentPage}=productSlice.actions
export default productSlice.reducer