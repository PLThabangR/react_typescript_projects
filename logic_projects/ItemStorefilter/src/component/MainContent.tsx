import {  useSelector } from 'react-redux';

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
 const itemsPerPage=12;

 //declaring variables for pagination
 const totalProduct = 100;
 //calcul;ate the total number of pages needed to display all the products
 const totalPages = Math.ceil(totalProduct / itemsPerPage);
 //calculate the start 
// const startIndex = (currentPage - 1) * itemsPerPage;
 //calculate the end to be displayed on current page
// const endIndex = startIndex + itemsPerPage;


const handlePageChange = (page: number) => {
    // Check if the page number is within the valid range
    if (page >= 1 && page <= totalPages) {
        // Update the current page
      setCurrentPage(page);
    }
}//end of handle page
 
//function for pages
const getPagination = () => {
    //create an array to hold the pages
    const buttons: number[] = [];
        //calculate starting page base on the current page
     //max make sure we don't go below 1
     //if you're on page 5 start page is 3
     //if you on page 1 start page is 1
    let startPage=Math.max(1, currentPage - 2);

        //calculate ending page based on the current page
        //end 2 pages after the current page
        //if you're on page 5 end page is 7
        //if you're on page 1 end page is 3
        
    let endPage = Math.min(totalPages, currentPage + 2);
    
    //ending page
       //-2 means we want to show 2 pages before the current page
   if(currentPage -2<1 ){
    //if near end shift forward
    endPage= Math.min(totalPages,endPage+(2-(currentPage-1)));
   }

   //if near end shift backward 
   //+2 means we want to show 2 pages after the current page
   if(currentPage +2>totalPages){
    startPage= Math.max(1,startPage-(currentPage+2-totalPages));
   }
    //loop through the pages
    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }
    return buttons;
    
  
}

const fetchAllData=async()=>{
    //get the current page
    //skip mean how many items to skip
    /**
     * For example, if currentPage is 2 and itemsPerPage is 10, 
     * the skip value would be (2-1)*10 = 10, 
     * which means the query would skip the first 10 items (i.e. the first page)
     *  and return the next 10 items (i.e. the second page).
     */
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
    <section className='xl:w-[40rem] lg:w-[40rem] md:w-[30rem] sm:w-[20rem] p-5'>
            <div className='mb-5'>
                <div className='fex flex-col sm:flex-row justify-between items-center'>
                    <div className='relative m-5 mt-5' >
                        <button className='border px-4 rounded-full py-2  flex items-center hover:bg-gray-200' onClick={() => setDropDownOpen(!dropDownOpen)}>
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
         <div className='flex flex-col sm:flex-row justify-between items-center mt-5'hidden={filteredProducts.length<itemsPerPage}>
              {/* previous page */}
              < button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}  className='border   mt-2 px-4 py-2 rounded-full' > Previous</ button >

                {/* 1,2,3,4,5 */}
                            {getPagination().map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(page)}
                                    className={`border px-4 py-2 mx-1 rounded-full ${
                                        currentPage === page ? "bg-black text-white" : ""
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}


                        {/* Next page */}
                        {/* disabled if current page == total page */}
              < button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===totalPages} className='border px-4 py-2 rounded-full' >Next</ button >

         </div>
      

            </div>



    </section>
  )
}

export default MainContent