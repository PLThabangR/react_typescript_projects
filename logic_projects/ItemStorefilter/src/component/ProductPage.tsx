import React, { use, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
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
    })
  return (
    <div>



    </div>
  )
}

export default ProductPage