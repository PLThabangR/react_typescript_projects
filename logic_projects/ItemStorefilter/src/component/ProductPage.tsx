import React, { use, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    images: string;
    rating: number
}
const ProductPage = () => {
        //ID cpmes from the use param hook
     const {id} = useParams<{id:string}>();

    const navigate = useNavigate();

    const [product ,setProduct] = React.useState<Product | null>(null);

    const getProduct = async () => {
        if(!id) throw new Error('ID is required');
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if(!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProduct();
    },[id]);

    if(!product) return <h1>Loading</h1>;
  return (
    <div className='p-5 w-[60%]'>
    <button onClick={() => navigate(-1)} className='mb-5 bg-black text-white py-2 px-4 rounded'>Back</button>
        {/* product image we wanna show the first image [0] */}
        <img src={product.images[0]} alt={product.title} className='w-[50%] h-auto m-5'/>
        <h1 className='font-bold text-2xl mb-4'>{product.title}</h1>
        <p className='font-light mb-4 text-gray w-[70%]'>{product.description}</p>
      <div className='flex  ml-10'>
              <p >R{product.price}</p>
              <p className='ml-5'>Rating: {product.rating}</p>
      </div>

    </div>
  )
}

export default ProductPage