import { useAddNewProductMutation } from '../../src/app/service/dummyData'



const AddNewProduct = () => {
    //mutation will return a array not an object like the query
const [addNewProduct, { isLoading, isError, data }] = useAddNewProductMutation()
    
//create the add function
const handleAdd = async () => {
    //create the product
    const product= { //passing the product of type product
        id:125555,
        title: "New Product",
        description: "New Product Description",
        price: 100,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "New Product Brand",
        weight: 0,
        avalabilityStatus: "New Product Avalability Status",
        category: "New Product Category",
        thumbnail: "New Product Thumbnail",
        images: ["New Product Image"],
    
    }
    await  addNewProduct(product)
    }
  return (
    <div>
        <h1>Add new product</h1>


    if(isLoading){
        <h1>Loading...</h1>
    }
    if(isError){
        <h1>Error</h1>
    }
  

<h1>our created data</h1>
{/* {JSON.stringify(data)} */}
    {data && (
        <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.discountPercentage}</p>
            <p>{data.rating}</p>
            <p>{data.stock}</p>
            <p>{data.brand}</p>
            <p>{data.weight}</p>
            <p>{data.avalabilityStatus}</p>
            <p>{data.category}</p>
            <p>{data.thumbnail}</p>
            <p>{data.images}</p>
        </div>
    )}
    <button onClick={handleAdd} disabled={isLoading}>Add New Product</button>

    </div>
  )
}

export default AddNewProduct