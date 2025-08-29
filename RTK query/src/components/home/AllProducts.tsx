
import { useGetAllProductsQuery } from '../../app/service/dummyData'

const AllProducts = () => {
  //pass empty object to fix the argument error
    const  {data,isFetching} = useGetAllProductsQuery({})

console.log(data);

  return (
    <div>AllProducts</div>
  )
}

export default AllProducts