import { useState } from 'react'
import { useGetProductByIdQuery } from '../../src/app/service/dummyData'
import type { Product } from '../types/Product'
const GetProductById = () => {
 const {data ,isFetching,isError} = useGetProductByIdQuery(2)
//const  [productId, setProductId] = useState<Product>()

if(isFetching){
    return <h1>Loading...</h1>
}
if(isError){
    return <h1>Error</h1>
}

    // if(data){
    //    setProductId({
    //     id: data.id,
    //     title: data.title,
    //     description: data.description,
    //     price: data.price,
    //     discountPercentage: data.discountPercentage,
    //     rating: data.rating,
    //     stock: data.stock,
    //     brand: data.brand,
    //     weight: data.weight,
    //     avalabilityStatus: data.avalabilityStatus,
    //     category: data.category,
    //     thumbnail: data.thumbnail,
    //     images: data.images,
    //   })
    // }
     
    return (
    <div>
    {/* {productId && (
        <div>
            <h1>{productId.title}</h1>
            <p>{productId.description}</p>
            <p>{productId.price}</p>
            <p>{productId.discountPercentage}</p>
            <p>{productId.rating}</p>
            <p>{productId.stock}</p>
            <p>{productId.brand}</p>
            <p>{productId.weight}</p>
            <p>{productId.avalabilityStatus}</p>
            <p>{productId.category}</p>
            <p>{productId.thumbnail}</p>
            <p>{productId.images}</p>
        </div>
    )} */}

<h1>{data.title}</h1>
    <p>{data.description}</p>
    <p>{data.price}</p>
    <img src={data.thumbnail}/>
    </div>
  )
}

export default GetProductById