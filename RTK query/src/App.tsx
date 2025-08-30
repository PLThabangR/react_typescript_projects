import './App.css'
import AddNewProduct from './components/AddNewProduct'
import GetProductById from './components/GetProductById'
import AllProducts from './components/home/AllProducts'
import UpdateProduct from './components/UpdateProduct'


const product = {
  id: 1,
  title: "updated Product",
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
function App() {
  return (
    <>
     {/* <AllProducts />
     <GetProductById />
     <AddNewProduct /> */}
     <UpdateProduct  product={2}/>
     
    </>
  )
}

export default App
