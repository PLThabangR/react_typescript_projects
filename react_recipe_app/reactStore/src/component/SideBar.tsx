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
        <h1 className='text-2xl font-bold mb-10 mt-4'>Welcome</h1>


    </div>
  )
}

export default SideBar