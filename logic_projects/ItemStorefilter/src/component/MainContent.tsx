import { useDispatch, useSelector } from 'react-redux';
import {  setMaxPrice, setMinPrice, setSearchQuery, setSelectedCategory,setKeywords } from '../app/features/productlogic';
import { useGetAllProductsQuery } from '../app/service/data';
import { useEffect, useState } from 'react';
import { Tally2 } from 'lucide-react';

const MainContent = () => {
    const dispatch=useDispatch()
    const {searchQuery,selectedCategory,minPrice,maxPrice,keywords}=useSelector((state:any)=>state.product) 

    //const {data,isLoading,isError}= useGetAllProductsQuery({})

//create our states 
 const [products, setProducts] = useState<any>([]);
 const [filter, setFilter] = useState("all");
 const [currentPage, setCurrentPage] = useState(1);
 const [dropDownOpen, setDropDownOpen] = useState(true);
 const itemsPerPage=15;

const fetchAllData=async()=>{
    //get the current page
    let url =`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage-1)*itemsPerPage}`
     //if we have a keyword
    if(keywords){
        url=`https://dummyjson.com/products/search?q=${keywords}`
    }
    const response=await fetch(url)

    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    const data=await response.json()
    setProducts(data.products)
    console.log(products)
}

 //fetch data using useEffect
 useEffect(() => {
   fetchAllData();
    
    console.log(getFilteredProducts())
  }, []);


const getFilteredProducts =()=>{
    //create a variable to hold our filtered products
    let filteredProducts = products;

    if (selectedCategory) {
        filteredProducts = filteredProducts.filter((product: any) => product.category === selectedCategory);
      }
    //min price
      if (minPrice) {
        filteredProducts = filteredProducts.filter((product: any) => product.price >= minPrice);
      }
    // max 
      if (maxPrice ) {
        filteredProducts = filteredProducts.filter((product: any) => product.price <= maxPrice);
      }
    //search by keyword
      if (keywords) {
        filteredProducts = filteredProducts.filter((product: any) => product.title.toLowerCase().includes(keywords.toLowerCase()));
      }
      //search
      if(searchQuery){
        filteredProducts = filteredProducts.filter((product: any) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      // sort by cheap
      if (filter === "cheap") {
        filteredProducts = filteredProducts.sort((a: any, b: any) => a.price - b.price);
      }
    
      // sort by expensive
      if (filter === "expensive") {
        filteredProducts = filteredProducts.sort((a: any, b: any) => b.price - a.price);
      } 

      console.log(filteredProducts)
      return filteredProducts;


}//end

getFilteredProducts()



  return (
    <section className='xl:w-[55rem] lg:w-[45rem] md:w-[35rem] sm:w-[25rem] p-5 bg-amber-50 '>
            <div className='mb-5'>
                <div className='fex flex-col sm:flex-row justify-between items-center'>
                    <div className='relative m-5 mt-5'>
                        <button className='border px-4 rounded-full py-2  flex items-center'>
                            <Tally2/>
                            {/* {dropDownOpen && the filter logic */}
                            { filter === "all"? filter.charAt(0).toLowerCase()+filter.slice(1):filter}

                        </button>
                    {dropDownOpen && (
                        <div className='absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40 '>
                            <button onClick={()=> {setFilter("cheap")}} className='block px-4 py-2 w-full text-left hover:bg-gray-200'> cheap</button>
                             <button onClick={()=> {setFilter("expensive")}} className='block px-4 py-2 w-full text-left hover:bg-gray-200'> expensive</button>
                              <button onClick={()=> {setFilter("popular")}} className='block px-4 py-2 w-full text-left hover:bg-gray-200'> popular</button>
                        </div>
                    )}
                    
                    </div>

                </div>

                    {/* Render our card */}

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                    </div>

            </div>



    </section>
  )
}

export default MainContent