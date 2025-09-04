import React from 'react'
import { Link } from 'react-router'

interface ProductCardProps {
    id: string,
    title: string,
    thumbnail: string,
    price: number

}
const ProductCard = ({id,title,thumbnail,price}:ProductCardProps) => {
  return (
    <>
      <div className='border p-4 rounded-2xl'>
        <Link to={`/product/${id}`}>
        <img src={thumbnail} alt={title} className='w-full h-32 object-cover' />
        <h1>{title}</h1>
        <h2>${price}</h2>
        </Link>
        </div>  

    </>
  )
}

export default ProductCard