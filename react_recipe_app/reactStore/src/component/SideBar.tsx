import React, { use, useEffect, useState } from 'react'
interface Product{
    category: string
}

interface FetchResponse{
    products: Product[]
}

const SideBar = () => {
    const [categories, setCategories] = useState<string[]>([]);  
    const [keyWords, setKeyWords] = useState<string[]>([
        "Apple","Watch","Fashion","Trend","Shoes","Camera","Laptop","Mobile","Accessories"
    ]);

 

    //fetching data from api using use effect
    const fetchCategories = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data: FetchResponse = await response.json();
               //get unique categories from the date with set 
               //Set removes the duplicates then we use map to loop through the array
               //and get the unique categories array
               //Array from is useful for converting iterables / array-like objects into real arrays
    const uniqueCategories = Array.from(new Set(data.products.map((product) => product.category)));
                //update the state with the unique categories
            setCategories(uniqueCategories);
         
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        //calling the function
        fetchCategories()

    },[])
  return (
    <div className='w-64 p-5 h-screen'>
        <h1 className='text-2xl font-bold mb-10 mt-4'>Home store</h1>

    <section>
        <div>
 <input type="text" placeholder='Search' className='border-2 rounded px-2 sm:mb:0'  />
        </div>
       

        <div className='flex justify-center items-center'>
            <input type="text" placeholder='min' className='border-2 mr-2 px-5 py-3 mb-3 w-full'  />
            <input type="text" placeholder='max' className='border-2 mr-2 px-5 py-3 mb-3 w-full'  />
        </div>

{/* catergories */}
    <div className='mb-5'>
    <h1 className='text-xl font-semibold mb-3'> categories</h1>
             {
        categories.map((category, index) => (
            <label key={index} className='block mb-2'>
                <input type="radio" name='category' className='mr-2 w-[15px] h-[16px]'  value={category}/>
                {category.toUpperCase()}
            </label>
        ))
    }
    </div>


        {/* key words */}
        <div>
            <h1 className='text-xl font-semibold mb-3'> key words</h1>
            {
        keyWords.map((keyWord, index) => (
            <label key={index} className='block mb-2'>
                <input type="checkbox" name='keyWords' className='mr-2 w-[15px] h-[16px]'  value={keyWord.toUpperCase()}/>
                {keyWord.toUpperCase()}
            </label>
        ))
    }
        </div>
   
    </section>
    </div>
  )
}

export default SideBar