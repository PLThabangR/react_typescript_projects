import './App.css'
import AddNewProduct from './components/AddNewProduct'
import GetProductById from './components/GetProductById'
import AllProducts from './components/home/AllProducts'

function App() {
  return (
    <>
     <AllProducts />
     <GetProductById />
     <AddNewProduct />
    </>
  )
}

export default App
