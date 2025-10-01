

interface UserType {
    _id?: number,
    name: string,
    age: number,
   isStudent: boolean
}

const Display = ({name,age,isStudent,_id}: UserType) => {
    console.log(name,age,isStudent)
  return (
    <>
    <h1>User Details</h1>
 <div>

    <p>{_id}</p>
     <h1>{name}</h1>
    <p>{age}</p>
    <p>{isStudent}</p>

   </div>


    </>
  )
}

export default Display