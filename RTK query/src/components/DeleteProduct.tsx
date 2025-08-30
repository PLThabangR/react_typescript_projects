import React from 'react'
import { useDeleteProductMutation } from '../../src/app/service/dummyData'

const DeleteProduct = () => {
    const [deleteProduct,{isLoading,isSuccess,isError}] = useDeleteProductMutation()

    const handleDelete = async () => {
        try {
            await deleteProduct(1)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Delete Product</h1>
                { isLoading && <h1>Loading...</h1>}
                { isSuccess && <h1>Product Deleted</h1>}
                { isError && <h1>Something went wrong</h1>}
        <button onClick={handleDelete}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct