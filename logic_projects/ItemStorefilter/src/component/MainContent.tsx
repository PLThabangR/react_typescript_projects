import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import {  Tally3 } from 'lucide-react';
import ProductCard from './ProductCard';


const MainContent = () => {
   // const dispatch=useDispatch()
    const {searchQuery,selectedCategory,minPrice,maxPrice,keywords}=useSelector((state:any)=>state.product) 

    //const {data,isLoading,isError}= useGetAllProductsQuery({})

//create our states 
 const [products, setProducts] = useState<any>([]);
 const [filter, setFilter] = useState("all");
 const [currentPage, setCurrentPage] = useState(1);
 const [dropDownOpen, setDropDownOpen] = useState(false);
 const itemsPerPage=15;

 //declaring variables for pagination
 //calcul;ate the total number of pages needed to display all the products
 const totalPages = Math.ceil(products.length / itemsPerPage);
 //calculate the start 
 const startIndex = (currentPage - 1) * itemsPerPage;
 //calculate the end to be displayed on current page
 const endIndex = startIndex + itemsPerPage;


const handlePageChange = (page: number) => {
    // Check if the page number is within the valid range
    if (page >= 1 && page <= totalPages) {
        // Update the current page
      setCurrentPage(page);
    }
}
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
    
   
  }, [keywords,currentPage]);


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
//get filtered products from the function 
const filteredProducts=getFilteredProducts()



  return (
    <section className='xl:w-[55rem] lg:w-[45rem] md:w-[35rem] sm:w-[25rem] p-5 bg-amber-50 '>
            <div className='mb-5'>
                <div className='fex flex-col sm:flex-row justify-between items-center'>
                    <div className='relative m-5 mt-5' onClick={() => setDropDownOpen(!dropDownOpen)}>
                        <button className='border px-4 rounded-full py-2  flex items-center hover:bg-gray-200'>
                            <Tally3 className='mr-2'/>
                            {/* {dropDownOpen && dynamic renderong of value inside button */}
                              { filter ==="all"?"Filter":filter.charAt(0).toLowerCase()+filter.slice(1)}

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
                            {/* Reander product  */}
                            {filteredProducts.map((product: any) => (
                                <ProductCard key={product.id} id={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price} />
                            ))}
                    </div>


                    {/*pagination  */}
         <div className='flex flex-col sm:flex-row justify-between items-center'>
              {/* previous page */}
              < button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}  className='border  mb-2 mt-2 px-4 py-2 rounded-full' > Previous</ button >
                        {/* Next page */}
              < button onClick={()=>handlePageChange(currentPage+1)}  className='border px-4 py-2 rounded-full' >Next</ button >

         </div>
      

            </div>



    </section>
  )
}

export default MainContent