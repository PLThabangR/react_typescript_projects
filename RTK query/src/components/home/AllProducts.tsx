
import { useEffect, useState } from 'react';
import { useGetAllProductsQuery } from '../../app/service/dummyData'
import type { Product } from '../../types/Product';

const AllProducts = () => {
const [products, setProducts] = useState<Product[]|null>([])
//  pass empty object to fix the argument error
    const  {data,isFetching} = useGetAllProductsQuery({})


   
console.log(products)

 // Whenever data changes, update local state
  useEffect(() => {
    if (data) {
      // Map the data to the Product interface
      setProducts(
        data.map((product: Product) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          stock: product.stock,
          brand: product.brand,
          weight: product.weight,
          avalabilityStatus: product.avalabilityStatus,
          category: product.category,
          thumbnail: product.thumbnail,
          images: product.images,
        }))
      );
    }
  }, [data]);

  return (
    <div>
<h1>All Products</h1>

{isFetching && <p>Loading...</p>}

{/*  display the data according to the interface */}
{ products && products.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.rating}</p>
          <p>{product.stock}</p>
          <p>{product.brand}</p>
          <p>{product.weight}</p>
          <p>{product.avalabilityStatus}</p>
          <p>{product.category}</p>
          <p>{product.thumbnail}</p>
          <p>{product.images}</p>
        </div>
      ))}

    </div>
  )
}

export default AllProducts