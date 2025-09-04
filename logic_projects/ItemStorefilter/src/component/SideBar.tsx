import { useEffect, useState } from 'react'
import { useGetAllProductsQuery } from '../app/service/data';

interface Product{
    category: string
}
//interface for fetching data
interface FetchResponse{
    products: Product[]
}

const SideBar = () => {
    //rtk hooks
    
        //string of arrays000
    const [categories, setCategories] = useState<string[]>([]);  
    const [keywords, setKeyWords] = useState<string[]>([
        "Apple","Watch","Fashion","Trend"
    ]);


 

    //fetching data from api using use effect
    const fetchCategories = async () => {
        try {
          
            //fetching the data
            const response = await fetch('https://dummyjson.com/products');
           
            //converting the data to javascript json
            const data: FetchResponse = await response.json();
              
            /*get unique categories from the date with set 
               - Set removes the duplicates then we use map to loop through the array
               - and get the unique categories array
               - Array from is useful for converting iterables / array-like objects into real arrays*/
    const uniqueCategories = Array.from(new Set(data.products.map((product) => product.category)));
                //update the state with the unique categories
            setCategories(uniqueCategories);
         
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }//end of fecth categories
    useEffect(() => {
        //calling the function
        fetchCategories()

    },[])
  return (
    <div className='w-64 p-5 h-screen bg-amber-200' >
        <h1 className='text-2xl font-bold mb-10 mt-4'>Store</h1>

    <section>
        <div>
 <input type="text" placeholder='Search' className='border-2 rounded-2xl px-2 sm:mb:0'  />
        </div>
       

        <div className='flex justify-center items-center'>
            <input type="text" placeholder='min' className='border-2 mr-2 px-5 py-3 mb-3 w-full'  />
            <input type="text" placeholder='max' className='border-2 mr-2 px-5 py-3 mb-3 w-full'  />
        </div>

{/* catergories */}
    <div className='mb-5'>
    <h2 className='text-xl font-semibold mb-3'> categories</h2>
             {
        categories.map((category, index) => (
            <label key={index} className='block mb-2'>
                <input type="radio" name='category' className='mr-2 w-[16px] h-[16px]'  value={category}/>
                {category.toUpperCase()}
            </label>
        ))
    }
    </div>


     <section>

           {/* key words */}
        <div>
            <h2 className='text-xl font-semibold mb-3'> keywords</h2>
            {
        keywords.map((keyword, index) => (
         
                <button key={index} name='keyword' className='block mb-2 px-4 w-full text-left border rounded-2xl hover:bg-gray-200'  value={keyword.toUpperCase()}>
                {keyword.toUpperCase()}
                </button>
        ))
    }
        </div>

        <button className='w-full mb-[4-rem] mt-5  bg-black text-white  py-2 rounded-2xl hover:bg-gray-600'>Clear</button>
     </section>
   
    </section>
    </div>
  )
}

export default SideBar