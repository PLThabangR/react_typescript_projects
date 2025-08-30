

import { useUpdateProductMutation } from '../../src/app/service/dummyData';

const UpdateProduct = (id) => {

    const [updateProduct, { data, isLoading, isSuccess, isError, error }]= useUpdateProductMutation()

    if (isLoading) {
        return <h1>Loading...</h1>;
      }
    
      if (isError) {
        return <h1>{isError}</h1>;
      }

      const handleUpdate = async () => {
          try {

         const    product = {
                
                title: "updated Product with this title",
                description: "updated Product Description",
               
               
            }
            
           

            await updateProduct({id:1,product:product})

          } catch (error) {
            console.log(error)
          }
      }
  return (
    <div>
        <h1>Update a product section </h1>
            {data && <h1>{data.title}</h1>}

        <button onClick={handleUpdate} disabled={isLoading}>Update Product</button> 
    </div>
  )
}

export default UpdateProduct